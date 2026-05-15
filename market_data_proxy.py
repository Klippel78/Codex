#!/usr/bin/env python3
"""Local helper service for live electricity assumptions in lcc.html.

The LCC app is usually opened as a local file (file://), so the browser cannot
call Nord Pool's public data portal API directly because of CORS restrictions.
This small local proxy fetches official public market data from Nord Pool and
re-exposes only the values needed by the calculator.
"""

from __future__ import annotations

import argparse
import datetime as dt
import json
import math
import sys
import urllib.error
import urllib.parse
import urllib.request
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer


BASE_URL = "https://dataportal-api.nordpoolgroup.com"
PUBLIC_HEADERS = {
    "User-Agent": "Mozilla/5.0",
    "Accept": "application/json, text/plain, */*",
    "Origin": "https://data.nordpoolgroup.com",
    "Referer": "https://data.nordpoolgroup.com/",
}
SOURCE_NAME = "Nord Pool Data Portal"
SOURCE_URL = "https://data.nordpoolgroup.com/auction/day-ahead/prices"
WINDOW_DAYS = 28
COMPARISON_OFFSET_DAYS = 364
PRESET_MAP = {
    "SE": {"delivery_area": "SE3", "currency": "SEK"},
    "NO": {"delivery_area": "NO1", "currency": "NOK"},
    "DE": {"delivery_area": "GER", "currency": "EUR"},
    "EU": {"delivery_area": "GER", "currency": "EUR", "noteKey": "import_market_fetch_eu_note"},
}
YEARLY_DAILY_CACHE: dict[tuple[int, str, str], dict[str, float]] = {}


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description="Aura Light market data proxy")
    parser.add_argument("--host", default="127.0.0.1", help="Listen host (default: 127.0.0.1)")
    parser.add_argument("--port", type=int, default=8765, help="Listen port (default: 8765)")
    return parser.parse_args()


def json_request(path: str, params: dict[str, str] | None = None) -> object:
    query = f"?{urllib.parse.urlencode(params)}" if params else ""
    url = f"{BASE_URL}{path}{query}"
    request = urllib.request.Request(url, headers=PUBLIC_HEADERS)
    try:
        with urllib.request.urlopen(request, timeout=25) as response:
            return json.load(response)
    except urllib.error.HTTPError as exc:
        body = exc.read().decode("utf-8", errors="replace")
        raise RuntimeError(f"Nord Pool svarade med HTTP {exc.code}: {body[:200]}") from exc
    except urllib.error.URLError as exc:
        raise RuntimeError(f"Kunde inte nå Nord Pool: {exc.reason}") from exc


def parse_iso_date(value: str) -> dt.date:
    return dt.date.fromisoformat(value)


def latest_delivery_date(delivery_area: str) -> dt.date:
    payload = json_request("/api/AuctionDataAvailability/GetLatest")
    latest = None
    for market in payload:
        if market.get("market") != "DayAhead":
            continue
        for volume in market.get("volumes", []):
            if volume.get("area") != delivery_area or not volume.get("date"):
                continue
            candidate = parse_iso_date(volume["date"])
            if latest is None or candidate > latest:
                latest = candidate
    return latest or dt.date.today()


def fetch_history_window(anchor_date: dt.date, delivery_area: str, currency: str) -> dict[str, object]:
    start_date = anchor_date - dt.timedelta(days=WINDOW_DAYS - 1)
    requested_days = [start_date + dt.timedelta(days=offset) for offset in range(WINDOW_DAYS)]
    prices: list[float] = []

    for year in sorted({day.year for day in requested_days}):
        YEARLY_DAILY_CACHE.setdefault((year, delivery_area, currency), fetch_yearly_daily_averages(year, delivery_area, currency))

    for day in requested_days:
        average = YEARLY_DAILY_CACHE[(day.year, delivery_area, currency)].get(day.isoformat())
        if average is not None:
            prices.append(average)

    if len(prices) < max(14, WINDOW_DAYS // 2):
        raise RuntimeError("För lite publikt tillgänglig historik från Nord Pool för att räkna fram stabila kalkylförutsättningar.")

    average_mwh_price = sum(prices) / len(prices)
    return {
        "average_mwh_price": average_mwh_price,
        "from_date": start_date.isoformat(),
        "to_date": anchor_date.isoformat(),
        "dayCount": len(prices),
    }


def fetch_yearly_daily_averages(year: int, delivery_area: str, currency: str) -> dict[str, float]:
    payload = json_request(
        "/api/AggregatePrices",
        {
            "year": str(year),
            "market": "DayAhead",
            "deliveryArea": delivery_area,
            "currency": currency,
        },
    )
    daily_aggregates = payload.get("multiAreaDailyAggregates") or []
    values: dict[str, float] = {}
    for item in daily_aggregates:
        day = item.get("deliveryStart")
        average = (item.get("averagePerArea") or {}).get(delivery_area)
        if day and isinstance(average, (int, float)):
            values[day] = float(average)
    return values


def annual_change_pct(current_avg_mwh: float, previous_avg_mwh: float) -> float:
    if not math.isfinite(previous_avg_mwh) or previous_avg_mwh <= 0:
        return 0.0
    return ((current_avg_mwh - previous_avg_mwh) / previous_avg_mwh) * 100.0


def build_market_assumptions(preset: str) -> dict[str, object]:
    market = PRESET_MAP.get(preset.upper())
    if not market:
        raise ValueError(f"Ogiltigt preset: {preset}")

    delivery_area = market["delivery_area"]
    currency = market["currency"]
    latest_date = latest_delivery_date(delivery_area)
    previous_anchor = latest_date - dt.timedelta(days=COMPARISON_OFFSET_DAYS)

    current_window = fetch_history_window(latest_date, delivery_area, currency)
    previous_window = fetch_history_window(previous_anchor, delivery_area, currency)

    current_avg_mwh = float(current_window["average_mwh_price"])
    previous_avg_mwh = float(previous_window["average_mwh_price"])

    payload = {
        "preset": preset.upper(),
        "deliveryArea": delivery_area,
        "currency": currency,
        "latestDeliveryDate": latest_date.isoformat(),
        "elPrice": round(current_avg_mwh / 1000.0, 4),
        "priceChangePct": round(annual_change_pct(current_avg_mwh, previous_avg_mwh), 2),
        "windowDays": WINDOW_DAYS,
        "comparisonOffsetDays": COMPARISON_OFFSET_DAYS,
        "currentWindow": current_window,
        "previousWindow": previous_window,
        "source": SOURCE_NAME,
        "sourceUrl": SOURCE_URL,
        "method": (
            "1.3 uses the trailing 28-day average of Nord Pool public daily day-ahead aggregates. "
            "1.4 compares that latest 28-day window with the corresponding 28-day window "
            f"{COMPARISON_OFFSET_DAYS} days earlier."
        ),
    }
    if "noteKey" in market:
        payload["noteKey"] = market["noteKey"]
    return payload


class MarketProxyHandler(BaseHTTPRequestHandler):
    server_version = "AuraLightMarketProxy/1.0"

    def log_message(self, format: str, *args: object) -> None:
        sys.stderr.write("%s - - [%s] %s\n" % (self.address_string(), self.log_date_time_string(), format % args))

    def _send_json(self, status: int, payload: dict[str, object]) -> None:
        data = json.dumps(payload, ensure_ascii=False).encode("utf-8")
        self.send_response(status)
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.send_header("Content-Length", str(len(data)))
        self.send_header("Cache-Control", "no-store")
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Access-Control-Allow-Methods", "GET, OPTIONS")
        self.send_header("Access-Control-Allow-Headers", "Content-Type")
        self.end_headers()
        self.wfile.write(data)

    def do_OPTIONS(self) -> None:
        self.send_response(204)
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Access-Control-Allow-Methods", "GET, OPTIONS")
        self.send_header("Access-Control-Allow-Headers", "Content-Type")
        self.end_headers()

    def do_GET(self) -> None:
        parsed = urllib.parse.urlsplit(self.path)
        try:
            if parsed.path in ("/health", "/api/health"):
                self._send_json(200, {"ok": True, "service": "market_data_proxy"})
                return
            if parsed.path != "/api/market-assumptions":
                self._send_json(404, {"error": "Endpoint saknas."})
                return

            params = urllib.parse.parse_qs(parsed.query)
            preset = (params.get("preset", ["SE"])[0] or "SE").upper()
            payload = build_market_assumptions(preset)
            self._send_json(200, payload)
        except ValueError as exc:
            self._send_json(400, {"error": str(exc)})
        except Exception as exc:  # noqa: BLE001
            self._send_json(502, {"error": str(exc)})


def main() -> None:
    args = parse_args()
    server = ThreadingHTTPServer((args.host, args.port), MarketProxyHandler)
    print(f"Market data proxy listening on http://{args.host}:{args.port}", flush=True)
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        print("\nStopping market data proxy.", flush=True)
    finally:
        server.server_close()


if __name__ == "__main__":
    main()
