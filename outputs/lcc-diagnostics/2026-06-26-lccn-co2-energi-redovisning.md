# LCCN - CO2, energi och bakomliggande problematik

Datum: 2026-06-26  
Underlag: aktuell `lcc.html`, `market_data_proxy.py`, `IMPORTLOGIK.md`, `PUBLICERING.md`, `LCC_User_Manual.md`, mötessammanfattning och transkript från 2026-06-25.

## Kort slutsats

Det finns en logisk förklaring till de stora CO2-skillnaderna: LCC-verktyget räknar i dag **operativ CO2 från energianvändning**, inte produktens totala klimatavtryck enligt EPD, produktion, fabrik eller transport. Formeln är i grunden:

```text
CO2 per år = energianvändning kWh/år * CO2-faktor kg CO2e/kWh
CO2 över kalkylperiod = CO2 per år * antal år
```

Sverige och Norge ligger i nuvarande presets på `0,02 kg CO2e/kWh`. Tyskland ligger på `0,36 kg CO2e/kWh`. Det är en faktor **18x**. Därför blir samma energimängd 18 gånger högre i Tyskland än i SE/NO.

Exemplet från mötet passar nästan exakt:

```text
4 795 kg CO2e över 20 år vid 0,02 kg CO2e/kWh
= 11 987,5 kWh/år

11 987,5 kWh/år * 0,36 * 20 år
= 86 310 kg CO2e
```

Det observerade värdet `86 312 kg` är alltså inte i första hand ett bevis på att kalkylmotorn är trasig. Det är i första hand en följd av att marknadspreset ändrar CO2-faktorn från SE/NO till DE.

Den största bakomliggande risken är därför **begreppsförväxling**: om värdet presenteras som "klimatavtryck" utan förklaringen "från energianvändning" låter det som EPD eller produktens hela klimatpåverkan. Det är inte vad verktyget räknar i dag.

## Vad LCC-verktyget faktiskt räknar

### Energi

För varje armatur-/rumsrad beräknas årlig energi ungefär så här:

```text
antal armaturer * effekt W / 1000 * drifttimmar per år * styrningsfaktor
```

Summeringen görs över valda rum och armaturer. Styrningsfaktorn kommer från vald styrning, till exempel ingen styrning, manuell, närvaro eller dagsljus.

### LCC-kostnad

Verktyget använder investering, nuvärde av energikostnad och nuvärde av underhåll:

```text
investeringskostnad = antal * (armaturpris + installation/material)
årlig energikostnad = kWh/år * elpris
nuvärde energi = årlig energikostnad * energins nuvärdesfaktor
nuvärde underhåll = årligt underhåll * normal nuvärdesfaktor
total LCC = investering + nuvärde energi + nuvärde underhåll
```

Energins nuvärdesfaktor tar hänsyn till både kalkylränta och årlig energiprisökning. Den är inte samma som en enkel multiplikation med antal år.

### CO2

CO2-beräkningen är enklare än kostnadsberäkningen:

```text
CO2 per år = kWh/år * CO2-faktor
CO2 över kalkylperiod = CO2 per år * antal år
```

CO2-värdet diskonteras inte och använder inte energiprisökning. Det är en ren fysisk mängd över tid.

## Datakällor och antaganden

| Område | Nuvarande källa/logik | Risk |
|---|---|---|
| Marknadspresets | Hårdkodat i `PRESETS` i `lcc.html` | Fel preset ger mycket stora skillnader i CO2 och LCC. |
| CO2-faktor | Hårdkodat per marknad eller manuellt ändrat fält | Uppdateras inte automatiskt från livekälla. |
| Elpris SE | Kan hämtas via `elprisetjustnu.se` och påslag för skatt/nät/marginal | Publik miljö kan sakna samma liveförutsättningar. |
| Elpris NO/DE/EU | Kan hämtas via lokal `market_data_proxy.py` från Nord Pool | Fungerar bara om proxy körs lokalt, inte automatiskt publikt. |
| Armatureffekt | DIALux/Relux, offerttext, statisk PIM-export eller manuell inmatning | Statisk PIM-export kan bli gammal. Saknad effekt kan bli `n/a` och då räknas som 0 W. |
| Antal armaturer | Offert eller DIALux/Relux beroende på användarens val | Fel count source kan ge fel antal och därmed fel energi, kostnad och CO2. |
| Befintlig anläggning | Skapas med teknikpreset, där befintlig effekt approximeras från ny effekt med faktor | Baseline är en modell, inte verifierad verklig mätdata. |
| Produktens klimatavtryck | Finns inte i nuvarande beräkning | Vimmerby/China, EPD, produktion och transport kan inte jämföras korrekt i dagens CO2-tal. |

## Observerade problem och sannolik rotorsak

### 1. `4 795 kg` och `86 312 kg`

Sannolik rotorsak: marknadens CO2-faktor.

SE/NO använder `0,02 kg CO2e/kWh`, DE använder `0,36 kg CO2e/kWh`. Samma energimängd ger därför:

```text
DE / SE = 0,36 / 0,02 = 18
4 795 kg * 18 = 86 310 kg
```

Detta matchar mötesobservationen. Det är alltså inte främst "orimligheten" i kalkylmotorn, utan en kombination av:

- rätt känslig CO2-parameter
- otydlig presentation av vad CO2 betyder
- risk att "klimatavtryck" tolkas som produkt-EPD i stället för energi-CO2

### 2. Energiförbrukning och CO2 upplevdes som samma siffra

I aktuell kod är energi och CO2 separata:

```text
energi = kWh/år
CO2 = kWh/år * CO2-faktor
```

De ska därför inte bli identiska om CO2-faktorn är `0,02` eller `0,36`. Om exakt samma siffra visades i tidigare version finns tre sannolika förklaringar:

- äldre UI/etikettfel där värden eller rubriker gav fel intryck
- att perioden och/eller enheten inte var tydligt utskriven
- att CO2-faktorn i ett testfall hade satts till `1,0`

Nuvarande version har förbättrade etiketter som anger att CO2 gäller energianvändning, men det bör fortfarande kontrolleras i ett riktigt testcase från skärminspelningen.

### 3. Ny anläggning visade konstiga antal, till exempel `1495` och `2495`

Detta var ett verkligt systemproblem i tidigare summary-logik. I aktuell kod hanteras "endast ny anläggning" annorlunda:

- befintlig anläggning sätts till `0`/saknas när det inte finns jämförelse
- besparing, payback, ROI, NPV och IRR sätts till `0`, `-` eller saknas där baseline inte finns
- armaturantal summeras från valda rum och armaturer, inte från jämförelsevärden

Det här är en rimlig korrigering: utan befintlig baseline ska verktyget inte påstå en besparing.

### 4. Danske Bank och liknande case är känsliga för datakvalitet

För importerade case kan en liten felkälla ge stor effekt:

- antal kan komma från offert eller ljusberäkning
- effekt kan komma från DIALux/Relux, offerttext, statisk PIM eller manuell inmatning
- saknad effekt kan bli 0 W i beräkning
- befintlig anläggning är schabloniserad via teknikår
- styrning och driftstid kan dominera resultatet
- marknadspreset ändrar både valuta, elpris och CO2-faktor

För artikel `38219404120` finns värdet `31 W` i aktuell statisk PIM-fil. Det minskar risken för just den artikeln om artikelnumret tolkas rätt, men det bevisar inte att hela caset är säkert. PIM-filen är en statisk export från `Products_20251022_171201.xlsx`, alltså inte en livekoppling.

## Vad verktyget inte kan göra i dag

Verktyget kan i dag inte göra en trovärdig jämförelse av:

- Vimmerby vs China
- produktion i fabrik
- transportavstånd
- EPD-värde per produkt
- materialens inbyggda klimatpåverkan
- produktlivscykelns totala klimatpåverkan

Det kräver ett separat produkt-/EPD-lager, till exempel:

```text
produkt-CO2 = antal armaturer * kg CO2e per armatur
transport-CO2 = antal/vikt/volym * transportfaktor
operativ CO2 = kWh/år * CO2-faktor * år
total scenario-CO2 = produkt-CO2 + transport-CO2 + operativ CO2
```

Det ska hållas separat från dagens LCC CO2-värde, annars blandas två olika klimatbegrepp ihop.

## Rekommenderade åtgärder

### Åtgärder som redan är rätt riktning

1. Alla kundnära CO2-rubriker bör säga "CO2 från energianvändning" eller motsvarande.  
   Status: i aktuell kod har flera etiketter redan ändrats i den riktningen.

2. "Endast ny anläggning" ska inte visa falska baseline-siffror.  
   Status: aktuell summary-logik sätter baseline och besparingsmått till saknade/0 när jämförelse saknas.

3. Visa alltid exakt kalkylperiod i periodvärden, till exempel "över kalkylperioden (20 år)".  
   Status: implementerat i Win/win, Summary/rapportens Win/win-ruta och Argument-vyn.

### Bör göras innan skarp kund-/marknadsanvändning

1. Lägg in en tydlig antaganderuta i rapporten:

```text
Marknad: SE/NO/DE/EU
CO2-faktor: x kg CO2e/kWh
Elpris: x valuta/kWh
Drifttimmar: x h/år
Kalkylperiod: x år
Kalkylränta: x %
Energiprisökning: x %
Antalskälla: offert eller ljusberäkning
Effektkälla: DIALux/Relux, PIM, offert eller manuell
```

2. Flagga importerade rader där effekt saknas eller blir 0 W.

3. Visa PIM-källans exportdatum i import-/antaganderutan och varna om den är gammal.

4. Om "Hämta aktuell eltariff" ska fungera publikt måste proxy/API-lösningen deployas. Annars bör funktionen döljas eller märkas som lokal.

5. Inför ett separat EPD-/produkt-CO2-läge om Vimmerby vs China ska användas i marknadsargumentation.

6. Spara marknad, CO2-faktor, elpris och count source i exporterad rapport så att resultatet är revisionsbart i efterhand.

## Kontrollfrågor innan resultat skickas till kund

1. Är detta en jämförelse mot befintlig anläggning eller bara en ny anläggning?
2. Vilken marknadspreset är vald?
3. Är CO2-faktorn avsedd för projektets land och redovisningssyfte?
4. Är elpriset ett kundpris, spotpris eller schablon?
5. Är drifttimmarna realistiska?
6. Kommer antal från offert eller DIALux/Relux?
7. Har alla importerade armaturer rimlig effekt i W?
8. Är befintlig teknikår/baseline verifierad?
9. Är styrning och reduktionsfaktorer rimliga?
10. Är CO2-texten tydlig med att den endast gäller energianvändning?

## Kodställen som granskats

| Fil | Område |
|---|---|
| `lcc.html` | `PRESETS`, marknadsvärden, CO2-faktorer, elpris, språktexter |
| `lcc.html` | `getParams`, `calcInstallation`, `energyNpvFactor`, `winWinMetrics`, `renderProjectSummaryPage` |
| `lcc.html` | PDF-import, count source, room mapping, control inference, PIM-power lookup |
| `market_data_proxy.py` | Nord Pool-baserad lokal proxy för SE/NO/DE/EU-marknadsantaganden |
| `pim-power-data.js` | statisk PIM-export med artikelnummer till effekt W |
| `IMPORTLOGIK.md` | dokumenterad importlogik och begränsningar |
| `PUBLICERING.md` | publiceringsrisk för lokal market proxy |
| `LCC_User_Manual.md` | manuell kontroll av antaganden före kundrapport |

## Bedömning

Den kritiska frågan är inte bara "räknar verktyget rätt?", utan "förstår mottagaren vad siffran representerar?". I aktuell modell kan CO2-värdet vara matematiskt korrekt som energirelaterad CO2, men kommersiellt farligt om det läses som produktens totala klimatavtryck.

För intern användning är modellen användbar om antagandena kontrolleras. För kund-/marknadsmaterial behöver den kompletteras med tydligare antaganden, exakt periodtext, importvarningar och separat EPD-/produkt-CO2-modul om produktionsland ska jämföras.
