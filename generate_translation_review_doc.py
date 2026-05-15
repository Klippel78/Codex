from __future__ import annotations

from collections import Counter
from html import escape
from pathlib import Path
from zipfile import ZipFile
from xml.etree import ElementTree as ET
import re
import subprocess
import sys


NS = {
    "m": "http://schemas.openxmlformats.org/spreadsheetml/2006/main",
    "r": "http://schemas.openxmlformats.org/officeDocument/2006/relationships",
}


def shared_strings(zf: ZipFile) -> list[str]:
    root = ET.fromstring(zf.read("xl/sharedStrings.xml"))
    return [
        "".join(t.text or "" for t in si.iterfind(".//m:t", NS))
        for si in root.findall("m:si", NS)
    ]


def sheet_map(zf: ZipFile) -> dict[str, str]:
    wb = ET.fromstring(zf.read("xl/workbook.xml"))
    rels = ET.fromstring(zf.read("xl/_rels/workbook.xml.rels"))
    relmap = {r.attrib["Id"]: r.attrib["Target"] for r in rels}
    return {
        s.attrib["name"]: "xl/" + relmap[s.attrib[f"{{{NS['r']}}}id"]]
        for s in wb.find("m:sheets", NS)
    }


def load_allstrings(path: Path) -> list[dict[str, str | int]]:
    with ZipFile(path) as zf:
        ss = shared_strings(zf)
        sheets = sheet_map(zf)
        root = ET.fromstring(zf.read(sheets["AllStrings"]))
        rows = []
        for row in root.findall(".//m:row", NS)[1:]:
            rnum = row.attrib["r"]
            vals: dict[str, str] = {}
            for c in row.findall("m:c", NS):
                ref = c.attrib.get("r", "")
                cell_type = c.attrib.get("t")
                v = c.find("m:v", NS)
                txt = ""
                if cell_type == "s" and v is not None and v.text is not None:
                    txt = ss[int(v.text)]
                elif cell_type == "inlineStr":
                    is_node = c.find("m:is", NS)
                    if is_node is not None:
                        txt = "".join(t.text or "" for t in is_node.iterfind(".//m:t", NS))
                elif v is not None and v.text is not None:
                    txt = v.text
                vals[ref] = txt
            rows.append(
                {
                    "row": int(rnum),
                    "key": vals.get(f"A{rnum}", ""),
                    "SE": vals.get(f"B{rnum}", ""),
                    "Sheet": vals.get(f"C{rnum}", ""),
                    "Cell": vals.get(f"D{rnum}", ""),
                    "NO": vals.get(f"E{rnum}", ""),
                    "DE": vals.get(f"F{rnum}", ""),
                    "EN": vals.get(f"G{rnum}", ""),
                }
            )
        return rows


def texty(value: str) -> bool:
    return bool(value.strip()) and bool(re.search(r"[A-Za-zÅÄÖåäö]", value))


def top_missing(rows: list[dict[str, str | int]], lang: str) -> list[tuple[str, int]]:
    counter: Counter[str] = Counter()
    for row in rows:
        if texty(str(row["SE"])) and not str(row[lang]).strip():
            counter[str(row["Sheet"])] += 1
    return counter.most_common(8)


def find_row(rows: list[dict[str, str | int]], row_no: int) -> dict[str, str | int]:
    for row in rows:
        if row["row"] == row_no:
            return row
    raise KeyError(row_no)


def critical_items(rows: list[dict[str, str | int]]) -> list[dict[str, str]]:
    selected = [140, 142, 144, 145, 146, 151, 351, 357, 365, 367, 379, 385, 521, 343, 344, 345, 346, 347, 348]
    items = []
    for row_no in selected:
        row = find_row(rows, row_no)
        issue = ""
        action = ""
        if row_no in {343, 344, 345, 346, 347, 348}:
            issue = "Saknad översättning i resultatdelen."
            action = "Fyll i NO, DE och EN i AllStrings."
        elif row_no == 151:
            issue = "Felaktig tysk översättning: enhet har ersatts av rubrik."
            action = "Byt DE till en faktisk enhet, t.ex. `kg CO₂e/Jahr`."
        elif row_no in {144, 146, 367}:
            issue = "Inkonsekvent CO2-/enhetsnotation mellan språk."
            action = "Normalisera till en gemensam standard, t.ex. `CO₂`, `kg CO₂e/år`, `kg CO₂e/kWh`."
        elif row_no == 351:
            issue = "Norsk formulering låter onaturlig i sammanhanget."
            action = "Justera NO från `Årlig bruk` till en mer naturlig formulering, t.ex. `års brukstid`."
        elif row_no == 357:
            issue = "Tysk etikett avviker i stil och saknar kolon."
            action = "Justera DE till en enhetlig etikett, t.ex. `Sachbearbeiter:` eller liknande beslutad form."
        elif row_no == 365:
            issue = "Tysk cell innehåller förklaring i stället för faktisk UI-text."
            action = "Byt DE till faktisk visningstext, t.ex. `Jahre` eller annan vald form."
        elif row_no == 379:
            issue = "Ser ut som test- eller placeholdertext."
            action = "Ta bort eller ersätt raden om den inte används."
        elif row_no == 385:
            issue = "Feltext från Excel finns kvar i språkmatrisen."
            action = "Rensa hjälpdatan och säkerställ att `#NAMN?` inte används som textresurs."
        elif row_no == 521:
            issue = "Rad med översättningar saknar key."
            action = "Lägg till en stabil key för enklare förvaltning."
        elif row_no == 140:
            issue = "Punkuation skiljer sig mellan språk."
            action = "Lägg till kolon även i NO om samma mönster ska användas i alla språk."
        elif row_no == 142:
            issue = "Engelsk valutaenhet är svensk trots internationell språkversion."
            action = "Bekräfta om EN ska vara internationell (`EUR/year`) eller svensk marknadsversion (`SEK/year`)."
        elif row_no == 145:
            issue = "Lång brödtext finns, men bör språkgranskas manuellt för tonalitet och korrektur."
            action = "Gör manuell språkgranskning av NO, DE och EN innan publicering."
        else:
            issue = "Allmän språk- eller datakvalitetsfråga."
            action = "Granska och justera."

        items.append(
            {
                "row": str(row["row"]),
                "sheet": str(row["Sheet"]),
                "cell": str(row["Cell"]),
                "se": str(row["SE"]),
                "no": str(row["NO"]),
                "de": str(row["DE"]),
                "en": str(row["EN"]),
                "issue": issue,
                "action": action,
            }
        )
    return items


def render_html(path: Path, rows: list[dict[str, str | int]]) -> str:
    counts = {}
    for lang in ["NO", "DE", "EN"]:
        missing = sum(1 for row in rows if texty(str(row["SE"])) and not str(row[lang]).strip())
        same = sum(
            1
            for row in rows
            if texty(str(row["SE"])) and str(row[lang]).strip() and str(row[lang]).strip() == str(row["SE"]).strip()
        )
        counts[lang] = {"missing": missing, "same": same}

    tops = {lang: top_missing(rows, lang) for lang in ["NO", "DE", "EN"]}
    items = critical_items(rows)

    def td(value: str) -> str:
        return f"<td>{escape(value).replace(chr(10), '<br>')}</td>"

    summary_rows = []
    for lang in ["SE", "NO", "DE", "EN"]:
        if lang == "SE":
            summary_rows.append("<tr><td>SE</td><td>Källspråk</td><td>Inte tillämpligt</td><td>Normalisering och datastädning behövs</td></tr>")
        else:
            summary_rows.append(
                f"<tr><td>{lang}</td><td>{counts[lang]['missing']}</td><td>{counts[lang]['same']}</td><td>Ofullständig och behöver kompletteras</td></tr>"
            )

    top_sections = []
    for lang in ["NO", "DE", "EN"]:
        lis = "".join(
            f"<li><b>{escape(sheet)}</b>: {count} saknade rader</li>"
            for sheet, count in tops[lang]
        )
        top_sections.append(f"<h3>{lang}</h3><ul>{lis}</ul>")

    item_rows = []
    for item in items:
        item_rows.append(
            "<tr>"
            f"<td>{escape(item['row'])}</td>"
            f"<td>{escape(item['sheet'])}</td>"
            f"<td>{escape(item['cell'])}</td>"
            f"<td>{escape(item['issue'])}</td>"
            f"<td>{escape(item['action'])}</td>"
            "</tr>"
        )

    html = f"""<!doctype html>
<html lang="sv">
<head>
  <meta charset="utf-8">
  <title>Språkgranskning LCC-dokument 2026 Master</title>
  <style>
    body {{ font-family: Helvetica, Arial, sans-serif; font-size: 11pt; line-height: 1.35; color: #111; margin: 36px; }}
    h1, h2, h3 {{ color: #17324d; }}
    h1 {{ font-size: 20pt; margin-bottom: 6px; }}
    h2 {{ font-size: 14pt; margin-top: 22px; margin-bottom: 8px; }}
    h3 {{ font-size: 12pt; margin-top: 14px; margin-bottom: 4px; }}
    p {{ margin: 8px 0; }}
    table {{ border-collapse: collapse; width: 100%; margin: 10px 0 16px; }}
    th, td {{ border: 1px solid #b9c3cc; padding: 6px 8px; vertical-align: top; text-align: left; }}
    th {{ background: #eaf0f5; }}
    code {{ font-family: Menlo, Consolas, monospace; font-size: 10pt; }}
    .meta {{ color: #555; }}
  </style>
</head>
<body>
  <h1>Språkgranskning av LCC-dokument 2026 Master</h1>
  <p class="meta">Källfil: {escape(str(path))}</p>
  <p class="meta">Underlag: blad <code>AllStrings</code> och <code>Variabler</code></p>

  <h2>Övergripande bedömning</h2>
  <p>Arbetsboken har ett påbörjat språkstöd för SE, NO, DE och EN, men språkmatrisen är inte färdigställd. De största problemen är saknade översättningar, blandad terminologi och några rader där översättning eller enhet har hamnat fel.</p>

  <h2>Sammanfattning per språk</h2>
  <table>
    <tr><th>Språk</th><th>Saknade översättningar</th><th>Samma som SE</th><th>Bedömning</th></tr>
    {''.join(summary_rows)}
  </table>

  <h2>Största luckor per språk</h2>
  {''.join(top_sections)}

  <h2>Prioriterad justeringslista</h2>
  <table>
    <tr><th>Rad</th><th>Blad</th><th>Cell</th><th>Problem</th><th>Åtgärd</th></tr>
    {''.join(item_rows)}
  </table>

  <h2>Kommentarer</h2>
  <ul>
    <li><b>Introduktionsbladet</b> saknar i praktiken stora delar av NO, DE och EN. Det är den mest synliga luckan.</li>
    <li><b>Resultatdelen</b> har flera tomma översättningar i NO, DE och EN, bland annat för kostnads- och klimatetiketter.</li>
    <li><b>CO₂-notation</b> bör normaliseras i alla språk. Just nu blandas <code>Co2</code>, <code>CO₂</code>, <code>kgC02-e</code> och <code>kgCO2e</code>.</li>
    <li><b>Dold hjälpdata</b> innehåller sannolikt test- eller restposter som bör städas, till exempel <code>Lösen "asd"</code> och flera <code>#NAMN?</code>-rader.</li>
    <li><b>Tom key</b> finns minst på en rad i <code>AllStrings</code>, vilket försvårar framtida underhåll.</li>
  </ul>
</body>
</html>"""
    return html


def main() -> None:
    if len(sys.argv) != 2:
        raise SystemExit("Usage: python3 generate_translation_review_doc.py <xlsx-path>")

    xlsx_path = Path(sys.argv[1]).expanduser()
    rows = load_allstrings(xlsx_path)
    out_dir = xlsx_path.parent
    html_path = out_dir / "Språkgranskning LCC-dokument 2026 Master.html"
    docx_path = out_dir / "Språkgranskning LCC-dokument 2026 Master.docx"

    html_path.write_text(render_html(xlsx_path, rows), encoding="utf-8")
    subprocess.run(
        ["textutil", "-convert", "docx", str(html_path), "-output", str(docx_path)],
        check=True,
    )
    print(docx_path)


if __name__ == "__main__":
    main()
