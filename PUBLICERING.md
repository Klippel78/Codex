# Publicering av Aura Light LCC

Den här appen är byggd som en statisk webbapp. Det betyder att den kan publiceras på valfri webbserver eller statisk hosting så länge filstruktur och externa beroenden finns tillgängliga.

## Minsta publiceringspaket

Publicera följande:

```text
/
  lcc.html
  Bilder/
```

`Bilder/` måste ligga bredvid `lcc.html`, eftersom appen använder relativa bildvägar som `Bilder/hero-page1.png` och `Bilder/manual-i18n/SE/...`.

Publicera inte arbetsmaterial som `Mallar Indata/`, `outputs/`, `tmp/`, `.playwright-cli/` eller gamla test-/kund-PDF:er om webbplatsen ska vara publik.

## Rekommenderad publicering

1. Skapa en publiceringsmapp, exempelvis `Aura-LCC-public`.
2. Kopiera in `lcc.html`.
3. Kopiera in hela mappen `Bilder/`.
4. Ladda upp mappen till en statisk webbplats, till exempel:
   - Azure Static Web Apps
   - Netlify
   - GitHub Pages
   - en vanlig intern eller publik webbserver
5. Öppna den publika adressen i webbläsaren, exempelvis:

```text
https://exempel.se/lcc/lcc.html
```

Skicka den publika `https://`-länken till användarna. Skicka inte en länk som börjar med `file://`, `localhost` eller `127.0.0.1`.

## Funktioner som fungerar statiskt

När `lcc.html` och `Bilder/` är publicerade fungerar:

- manuell LCC-kalkyl
- språkval
- marknadsförval
- PDF-import av offert och DIALux
- diagram
- sammanfattning
- utskrift till PDF via webbläsaren
- spara/ladda kalkylfil
- hjälpmodal med språkstyrda bilder

Det kräver att användaren har internetåtkomst till de CDN-bibliotek som appen laddar.

## Externa beroenden

Appen laddar idag dessa resurser från internet:

- Tailwind CSS från `cdn.tailwindcss.com`
- Chart.js från `cdn.jsdelivr.net`
- PDF.js från `cdnjs.cloudflare.com`
- PDF.js worker från `cdnjs.cloudflare.com`
- Aura Light-logotyp från `auralight.com`

För en publik webbplats är detta normalt okej. För en helt offline- eller intranätslåst version bör dessa filer laddas ner och läggas lokalt, exempelvis under:

```text
/
  vendor/
    tailwindcss.js
    chart.umd.min.js
    pdf.min.js
    pdf.worker.min.js
    AuraLight-logo.svg
```

Därefter behöver länkarna i `lcc.html` ändras från externa URL:er till lokala `vendor/`-vägar.

## Aktuell eltariff

Knappen `Hämta aktuell eltariff` använder idag:

```text
http://127.0.0.1:8765/api/market-assumptions
```

Det fungerar bara på den dator där `market_data_proxy.py` körs lokalt. För publik användning finns tre alternativ:

1. Låt knappen vara kvar som valfri funktion. Om proxy saknas används förvalda värden.
2. Publicera `market_data_proxy.py` som en riktig server/API och sätt `window.LCC_MARKET_PROXY_URL` till den publika API-adressen.
3. Ta bort eller dölj knappen i den publika versionen om live-eldata inte ska erbjudas.

För komplett publik funktionalitet rekommenderas alternativ 2.

## Enkel verifieringschecklista

Efter publicering, testa i Chrome eller Edge:

1. Sidan laddar utan att bilder saknas.
2. Språkval SE/NO/DE/EN fungerar.
3. Lägg till rum och armatur manuellt.
4. Importera en offert-PDF.
5. Importera en DIALux-PDF.
6. Gå till Resultat och kontrollera diagram.
7. Gå till Sammanfattning och skriv ut/spara som PDF.
8. Spara kalkyl och ladda den igen.
9. Testa `Dölj armaturpriser`.
10. Testa `Hämta aktuell eltariff` endast om publik marknads-API finns.
