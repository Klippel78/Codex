const REPORT_FONT_FAMILY = "'Kievit Pro Light','Kievit Pro','Kievit',Arial,sans-serif";
if (window.Chart) Chart.defaults.font.family = REPORT_FONT_FAMILY;
if (window.pdfjsLib) {
  pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';
}

// ─── Translations ─────────────────────────────────────────────────────────────
const TR = {
  SE:{
    save:'Spara',load:'Ladda sparad kalkyl',print:'Skriv ut',help:'Hjälp',
    tab_input:'Indata',tab_result:'Resultat',tab_winwin:'Win/win',tab_summary:'Sammanfattning',
    win_pill:'Dokumenterad affärsnytta och minskad klimatpåverkan',
    win_title:'Lägre kostnad.\nLägre klimatpåverkan.',
    win_lead:'LCC-analysen visar hur en modern LED-lösning med behovsstyrning kan minska driftkostnaden, reducera energianvändningen och samtidigt stärka hållbarhetsprofilen.',
    win_metric_lcc:'Lägre kostnad',win_metric_lcc_extra:'Merkostnad',
    win_metric_lcc_note:'beräknad besparing över kalkylperioden',
    win_metric_energy:'mindre energi',win_metric_energy_note:'kilowattimmar som slipper köpas varje år',
    win_metric_co2:'lägre klimatavtryck',win_metric_co2_note:'win-win för plånbok och planet',
    win_metric_cost_abs:'Kostnad',win_metric_energy_abs:'Energiförbrukning',win_metric_co2_abs:'Klimatavtryck',
    win_metric_cost_abs_note:'total LCC-kostnad över kalkylperioden',win_metric_energy_abs_note:'årlig energiförbrukning',win_metric_co2_abs_note:'årligt klimatavtryck',
    win_soft_title:'Bättre ljusmiljö med lägre driftbelastning',
    win_soft_body:'Lösningen ger rätt ljusnivå när verksamheten behöver den och minskar onödig drift när ytor inte används. Resultatet är en mer energieffektiv, driftsäker och hållbar belysningsmiljö med tydlig affärsnytta.',
    region_presets:'Förval per marknad',
    import_data:'Importera underlag',import_pdf:'Importera underlag',clear_import:'Rensa import',
    clear_import_confirm:'Rensa importerad data? Projektfält och alla rum/armaturer töms, men kalkylförutsättningar och marknadsval behålls.',
    import_cleared:'Importerad data är rensad.',
    import_market_fetch:'Hämta aktuell eltariff',
    import_market_fetch_loading:'Hämtar aktuell eltariff för {market}...',
    import_market_fetch_proxy_missing:'Livehämtning av aktuell eltariff kräver att den lokala hjälptjänsten är igång. Starta market_data_proxy.py och försök igen. Standardvärdena ligger kvar tills dess.',
    import_market_fetch_failed:'Det gick inte att hämta aktuell eltariff för {market}: {error}',
    import_market_fetch_success:'Aktuell eltariff för {market} uppdaterad från {source}. Område: {area}. Leveransdag: {date}. Elpris: {price}. Elprisökning/år: {change}.',
    import_market_fetch_eu_note:'För International (EUR) används GER som EUR-proxy.',
    import_market_reset:'Återställ förval',
    import_market_reset_done:'Kalkylförutsättningarna är återställda till förvalet för {market}.',
    market_SE:'Sverige',market_NO:'Norge',market_DE:'Tyskland',market_EU:'International (EUR)',
    import_hint:'Välj offert och/eller ljusberäkning i PDF-format. Importen fyller tillgängliga projekt-, rum- och armaturdata efter bästa förmåga. Om båda underlagen finns skapas Ny installation och Befintlig installation från valt teknikår.',
    import_existing_year:'Befintlig installation utförd år',import_existing_preview:'Teknikantagande',import_existing_factor:'effektfaktor',import_existing_maint:'underhåll',import_per_year:'år',
    import_count_source:'Antal (st) armaturer hämtas från',import_count_offer:'Offert',import_count_dialux:'DIALux',
    result_install_scope:'Visa i resultat',result_install_both:'Båda',result_install_existing:'Befintlig',result_install_new:'Ny',
    hide_luminaire_prices:'Dölj armaturpriser',show_luminaire_prices:'Visa armaturpriser',
    import_count_prompt:'Både offert och DIALux hittades.\n\nTryck OK för att hämta Antal (st) från offert.\nTryck Avbryt för att hämta Antal (st) från DIALux.',
    currency_region:'Valuta',exchange_rate:'Växelkurs',
    proj_info:'Projektinformation',project:'Projekt',date:'Datum',contact:'Handläggare',
    calc_params:'Kalkylförutsättningar',
    param_years:'1.1 Kalkylperiod (år)',param_rate:'1.2 Kalkylränta (%)',
    param_elprice:'1.3 Elpris',param_pricechange:'1.4 Elprisökning/år (%)',
    param_co2:'1.5 CO₂-faktor (kgCO₂e/kWh)',param_ophours:'1.6 Drifttid (h/år)',
    add_installation:'Lägg till installation',calculate:'Beräkna LCC',
    chart_lcc:'LCC-jämförelse per installation',chart_accum:'Ackumulerade kostnader över tid',
    chart_energy:'Energianvändning per rumstyp (kWh/år)',chart_co2:'CO₂-utsläpp per installation (kgCO₂e/år)',
    detail_result:'Detaljerat resultat',
    compare_scope_label:'Urval för jämförelse',compare_scope_all:'Hela projektet ingår i jämförelsen.',
    compare_scope_none:'Inga rum är valda för jämförelse.',compare_scope_subset:'{selected} av {total} rum ingår i jämförelsen.',
    compare_scope_selected:'Valda rum',
    installation:'Installation',add_room:'Lägg till rumstyp',remove:'Ta bort',
    room_type_lbl:'Rumstyp',room_compare_include:'Ta med i jämförelse och rapport',room_name:'Rumsbeteckning',building_type:'Byggnadstyp',room_type:'Rumstyp',
    room_count:'Antal rum (st)',room_sqm:'Yta per rum (m²)',
    luminaires:'Armaturer',add_lum:'Armatur',lum_type:'Armaturtyp',lum_label:'Beteckning',
    lum_count:'Antal (st)',lum_price:'Armaturpris (kr/st)',lum_install:'Montering (kr/st)',
    lum_power:'Effekt (W/st)',lum_ctrl:'Styrning',lum_reduction:'Reduktionsfaktor',lum_maint:'Underhåll (kr/år)',
    ctrl_none:'Ingen',ctrl_manual:'Manuell styrning',ctrl_presence:'Närvaro-/frånvarostyrning',ctrl_daylight:'Dagsljusstyrning',
    kpi_total:'Total LCC',kpi_years:'år',kpi_saving:'Besparing',kpi_extra:'Merkostnad',
    kpi_payback:'Återbetalningstid',kpi_payback_note:'baserat på årlig driftbesparing',
    kpi_co2_delta:'Skillnad CO₂e/år',kpi_co2_lower:'lägre klimatpåverkan',kpi_co2_higher:'högre klimatpåverkan',kpi_co2_same:'ingen skillnad',
    tbl_param:'Parameter',tbl_diff_pct:'Skillnad %',tbl_period:'Kalkylperiod',tbl_rate:'Kalkylränta',tbl_el:'Elpris',
    tbl_invest:'Investeringskostnader',tbl_annual_energy:'Energianvändning (år 1)',
    tbl_annual_ecost:'Energikostnad (år 1)',tbl_pvf_e:'NV-faktor energi',tbl_pv_e:'Energikostnader (NV)',
    tbl_annual_m:'Underhåll (år 1)',tbl_pvf_m:'NV-faktor underhåll',tbl_pv_m:'Underhållskostnader (NV)',
    tbl_total:'TOTAL LCC',tbl_co2:'CO₂-utsläpp (kgCO₂e/år)',
    sum_period:'Kalkylperiod',sum_rate:'Kalkylränta',sum_el:'Elpris',sum_pricechange:'Elprisökning',
    sum_co2f:'CO₂-faktor',sum_hours:'Drifttid',
    sum_invest:'Investeringskostnader',sum_pv_e:'Energikostnader (nuvärde)',sum_pv_m:'Underhållskostnader (nuvärde)',
    sum_total:'TOTAL LCC-kostnad',sum_energy:'Energianvändning (kWh/år)',sum_co2:'CO₂-utsläpp (kgCO₂e/år)',
    sum_payback:'Beräknad återbetalningstid',payback_unit:'år',payback_immed:'Omedelbart',
    sum_saving:'Besparing',sum_extra:'Merkostnad',
    currency:'kr',currency_kwh:'kr/kWh',
    h_subtitle:'LCC-kalkyl – Livscykelkostnader',
    select_building:'Välj byggnadstyp...',select_room:'Välj rumstyp...',
    b_office:'Kontor',b_school:'Skola och restaurang',b_sports:'Sporthall',b_hospital:'Sjukhus',b_industry:'Industri',
    rep_title:'Livscykelkostnadskalkyl',
    rep_intro:'Introduktion',
    rep_intro_body:'Visste du att ett av de enklaste sätten att minska driftskostnaderna och stärka ert hållbarhetsavtryck är genom belysning? Många företag förbiser de dolda besparingar som finns i traditionell belysning – något vi på Aura Light gärna hjälper er att synliggöra.\n\nI den bifogade energibesparingsrapporten visar vi hur ett byte till våra smarta och energieffektiva LED-lösningar kan skapa både direkta vinster och långsiktigt värde. Utifrån data från vår genomgång av era lokaler tillsammans med ert team presenterar vi konkreta åtgärder och tydliga effekter – ekonomiskt, miljömässigt och funktionellt.\n\nVårt mål är att leverera en modern helhetslösning som gör skillnad – för användaren, verksamheten och planeten. Rapporten är framtagen för att stödja ert beslut och inspirera till nästa steg mot en smartare belysningsframtid. Tveka inte att höra av er om ni vill veta mer – vi tar gärna resan tillsammans!',
    rep_results_title:'Resultat LCC-kalkyl',
    rep_project:'Projekt',rep_date:'Datum',rep_officer:'Handläggare',
    rep_calc_based:'Kalkylen baseras på',rep_calc_rate:'Kalkylränta',rep_energy_price:'Energipris',
    rep_price_change:'Årlig prisändring energi (frivillig)',rep_climate_impact:'Klimatpåverkan energi (frivillig)',
    rep_op_time:'Drifttid',
    rep_pv_note:'Resultaten är beräknade enligt nuvärdesmetoden.',
    rep_th_costs:'LCC-kostnader',rep_th_current:'Befintlig installation',rep_th_new:'Ny installation',
    default_inst_existing:'Befintlig installation',default_inst_new:'Ny installation',
    default_inst_existing_note:'Vid PDF-import sätts offertpris till 0 här, eftersom befintlig installation behandlas som redan installerad.',
    default_inst_new_note:'Vid PDF-import hämtas benämning, antal och armaturpris hit via matchning mellan Register och Offertradens godsmärke.',
    rep_th_comp:'Jämförelse %',rep_th_savings:'Besparing',
    rep_row_invest:'Investeringskostnader',rep_row_energy:'Energikostnad',
    rep_row_maint:'Underhållskostnader',rep_row_total:'TOTAL LCC-kostnad',
    rep_climate_title:'Energianvändning & klimatpåverkan',
    rep_did_you_know:'Visste du att',
    rep_row_energy_use:'Energianvändning',rep_row_climate:'Klimatpåverkan',
    rep_chart_lcc:'TOTAL LCC-KOSTNAD',rep_chart_energy:'ENERGIANVÄNDNING & KLIMATPÅVERKAN',
    rep_annual_savings:'ÅRLIG BESPARING PER RUMSTYP',rep_repayment:'ÅTERBETALNINGSTID',
    rep_accum_title:'Ackumulerad energibesparing över tid',
    rep_accum_body:'Beräknat nuvärde av energi- och underhållsbesparingar.',
    rep_summary:'Sammanfattning',
    rep_carbon:'Klimatavtryck',rep_energy:'Energianvändning',rep_savings:'Kostnadsbesparing',
    rep_unit_co2:'kg CO₂-e',
    rep_eq_gas:'liter bensin besparad',rep_eq_trees:'bevarade träd (hektar)',
    rep_eq_cars:'färre bilar på vägarna',rep_eq_coal:'ton kol som inte förbränns',
    rep_eq_oil:'fat olja som inte används',rep_eq_homes:'hushållens årliga elförbrukning',
    rep_summary_title:'Sammanfattning:',
    rep_summary_body:'På Aura Light strävar vi efter att erbjuda mer än bara en belysningslösning – vi vill bidra till ett smartare, mer hållbart val. Genom vår LCC-analys hoppas vi att resultatet bekräftar att vår lösning möter både era funktionella behov och ekonomiska mål. Med fokus på användarvänlighet, driftsäkerhet och energieffektivitet skapar vi en helhetslösning som inte bara förbättrar upplevelsen för de som vistas i miljön – utan även minimerar klimatavtrycket över tid.',
    rep_leg_cost:'Energikostnader (kr)',rep_leg_kwh:'Energiförbrukning (kWh)',rep_leg_co2:'Klimatpåverkan (kg CO₂)',
    rep_leg_invest:'Investeringskostnad',rep_leg_sav:'Energibesparing',rep_year:'År',
  },
  NO:{
    save:'Lagre',load:'Last inn lagret kalkyle',print:'Skriv ut',help:'Hjelp',
    tab_input:'Inndata',tab_result:'Resultater',tab_winwin:'Win/win',tab_summary:'Sammendrag',
    win_pill:'Dokumentert forretningsnytte og lavere klimaavtrykk',
    win_title:'Lavere kostnad.\nLavere klimaavtrykk.',
    win_lead:'LCC-analysen viser hvordan en moderne LED-løsning med behovsstyring kan redusere driftskostnader, kutte energibruk og samtidig styrke bærekraftsprofilen.',
    win_metric_lcc:'Lavere kostnad',win_metric_lcc_extra:'Merkostnad',
    win_metric_lcc_note:'beregnet besparelse over beregningsperioden',
    win_metric_energy:'mindre energi',win_metric_energy_note:'kilowattimer som ikke må kjøpes hvert år',
    win_metric_co2:'lavere klimaavtrykk',win_metric_co2_note:'win-win for lommebok og planet',
    win_metric_cost_abs:'Kostnad',win_metric_energy_abs:'Energiforbruk',win_metric_co2_abs:'Klimaavtrykk',
    win_metric_cost_abs_note:'total LCC-kostnad over beregningsperioden',win_metric_energy_abs_note:'årlig energiforbruk',win_metric_co2_abs_note:'årlig klimaavtrykk',
    win_soft_title:'Bedre lysmiljø med lavere driftsbelastning',
    win_soft_body:'Løsningen gir riktig lysnivå når virksomheten trenger det og reduserer unødvendig drift når arealer ikke brukes. Resultatet er et mer energieffektivt, driftssikkert og bærekraftig lysmiljø med tydelig forretningsnytte.',
    region_presets:'Forhåndsvalg per marked',
    import_data:'Importer underlag',import_pdf:'Importer underlag',clear_import:'Tøm import',
    clear_import_confirm:'Tømme importerte data? Prosjektfelt og alle rom/armaturer tømmes, men beregningsforutsetninger og markedsvalg beholdes.',
    import_cleared:'Importerte data er tømt.',
    import_market_fetch:'Hent aktuell strømtariff',
    import_market_fetch_loading:'Henter aktuell strømtariff for {market}...',
    import_market_fetch_proxy_missing:'Direkte henting av aktuell strømtariff krever at den lokale hjelpetjenesten kjører. Start market_data_proxy.py og prøv igjen. Standardverdiene blir stående inntil videre.',
    import_market_fetch_failed:'Kunne ikke hente aktuell strømtariff for {market}: {error}',
    import_market_fetch_success:'Aktuell strømtariff for {market} oppdatert fra {source}. Område: {area}. Leveringsdato: {date}. Strømpris: {price}. Årlig strømprisendring: {change}.',
    import_market_fetch_eu_note:'For International (EUR) brukes GER som EUR-proxy.',
    import_market_reset:'Tilbakestill forvalg',
    import_market_reset_done:'Beregningsforutsetningene er tilbakestilt til forvalget for {market}.',
    market_SE:'Sverige',market_NO:'Norge',market_DE:'Tyskland',market_EU:'International (EUR)',
    import_hint:'Velg tilbud og/eller lysberegning i PDF-format. Importen fyller tilgjengelige prosjekt-, rom- og armaturdata etter beste evne. Hvis begge underlag finnes opprettes Ny installasjon og Eksisterende installasjon fra valgt teknologiår.',
    import_existing_year:'Eksisterende installasjon utført år',import_existing_preview:'Teknologiantakelse',import_existing_factor:'effektfaktor',import_existing_maint:'vedlikehold',import_per_year:'år',
    import_count_source:'Antall (stk) armaturer hentes fra',import_count_offer:'Tilbud',import_count_dialux:'DIALux',
    result_install_scope:'Vis i resultat',result_install_both:'Begge',result_install_existing:'Eksisterende',result_install_new:'Ny',
    hide_luminaire_prices:'Skjul armaturpriser',show_luminaire_prices:'Vis armaturpriser',
    import_count_prompt:'Både tilbud og DIALux ble funnet.\n\nTrykk OK for å hente Antall (stk) fra tilbudet.\nTrykk Avbryt for å hente Antall (stk) fra DIALux.',
    currency_region:'Valuta',exchange_rate:'Vekslingskurs',
    proj_info:'Prosjektinformasjon',project:'Prosjekt',date:'Dato',contact:'Saksbehandler',
    calc_params:'Beregningsforutsetninger',
    param_years:'1.1 Beregningsperiode (år)',param_rate:'1.2 Kalkulasjonsrente (%)',
    param_elprice:'1.3 Strømpris',param_pricechange:'1.4 Årlig prisendring energi (%)',
    param_co2:'1.5 CO₂-faktor (kgCO₂e/kWh)',param_ophours:'1.6 Driftstid (t/år)',
    add_installation:'Legg til installasjon',calculate:'Beregn LCC',
    chart_lcc:'LCC-sammenligning per installasjon',chart_accum:'Akkumulerte kostnader over tid',
    chart_energy:'Energiforbruk per romtype (kWh/år)',chart_co2:'CO₂-utslipp per installasjon (kgCO₂e/år)',
    detail_result:'Detaljert resultat',
    compare_scope_label:'Utvalg for sammenligning',compare_scope_all:'Hele prosjektet inngår i sammenligningen.',
    compare_scope_none:'Ingen rom er valgt for sammenligning.',compare_scope_subset:'{selected} av {total} rom inngår i sammenligningen.',
    compare_scope_selected:'Valgte rom',
    installation:'Installasjon',add_room:'Legg til romtype',remove:'Fjern',
    room_type_lbl:'Romtype',room_compare_include:'Ta med i sammenligning og rapport',room_name:'Romnavn / rombetegnelse',building_type:'Bygningstype',room_type:'Romtype',
    room_count:'Antall rom (stk)',room_sqm:'Areal per rom (m²)',
    luminaires:'Armaturer',add_lum:'Armatur',lum_type:'Armaturtype',lum_label:'Betegnelse',
    lum_count:'Antall (stk)',lum_price:'Armaturpris (kr/stk)',lum_install:'Montering (kr/stk)',
    lum_power:'Effekt (W/stk)',lum_ctrl:'Styring',lum_reduction:'Reduksjonsfaktor',lum_maint:'Vedlikehold (kr/år)',
    ctrl_none:'Ingen',ctrl_manual:'Manuell styring',ctrl_presence:'Tilstedeværelsesstyring',ctrl_daylight:'Dagslysstyring',
    kpi_total:'Total LCC',kpi_years:'år',kpi_saving:'Besparelse',kpi_extra:'Merkostnad',
    kpi_payback:'Tilbakebetalingstid',kpi_payback_note:'basert på årlig driftsbesparelse',
    kpi_co2_delta:'Forskjell CO₂e/år',kpi_co2_lower:'lavere klimaavtrykk',kpi_co2_higher:'høyere klimaavtrykk',kpi_co2_same:'ingen forskjell',
    tbl_param:'Parameter',tbl_diff_pct:'Forskjell %',tbl_period:'Beregningsperiode',tbl_rate:'Kalkulasjonsrente',tbl_el:'Strømpris',
    tbl_invest:'Investeringskostnader',tbl_annual_energy:'Energiforbruk (år 1)',
    tbl_annual_ecost:'Energikostnad (år 1)',tbl_pvf_e:'NV-faktor energi',tbl_pv_e:'Energikostnader (NV)',
    tbl_annual_m:'Vedlikehold (år 1)',tbl_pvf_m:'NV-faktor vedlikehold',tbl_pv_m:'Vedlikeholdskostnader (NV)',
    tbl_total:'TOTAL LCC',tbl_co2:'CO₂-utslipp (kgCO₂e/år)',
    sum_period:'Beregningsperiode',sum_rate:'Kalkulasjonsrente',sum_el:'Strømpris',sum_pricechange:'Energiprisøkning',
    sum_co2f:'CO₂-faktor',sum_hours:'Driftstid',
    sum_invest:'Investeringskostnader',sum_pv_e:'Energikostnader (nåverdi)',sum_pv_m:'Vedlikeholdskostnader (nåverdi)',
    sum_total:'TOTAL LCC-kostnad',sum_energy:'Energiforbruk (kWh/år)',sum_co2:'CO₂-utslipp (kgCO₂e/år)',
    sum_payback:'Beregnet tilbakebetalingstid',payback_unit:'år',payback_immed:'Umiddelbart',
    sum_saving:'Besparelse',sum_extra:'Merkostnad',
    currency:'kr',currency_kwh:'kr/kWh',
    h_subtitle:'LCC-beregning – Livssykluskostnader',
    select_building:'Velg bygningstype...',select_room:'Velg romtype...',
    b_office:'Kontor',b_school:'Skole og restaurant',b_sports:'Idrettshall',b_hospital:'Sykehus',b_industry:'Industri',
    rep_title:'Livssykluskostnadsberegning',
    rep_intro:'Introduksjon',
    rep_intro_body:'Visste du at en av de enkleste måtene å redusere driftskostnadene og styrke bærekraftsprofilen deres på, er gjennom belysning? Mange selskaper overser de skjulte besparelsene i tradisjonelle belysningsanlegg – noe vi i Aura Light gjerne hjelper dere å synliggjøre.\n\nI den vedlagte energisparingsrapporten viser vi hvordan et skifte til våre smarte og energieffektive LED-løsninger kan gi både umiddelbare gevinster og langsiktig verdi. Basert på data fra vår gjennomgang av lokalene deres sammen med teamet deres, presenterer vi konkrete tiltak og tydelige effekter – økonomisk, miljømessig og funksjonelt.\n\nMålet vårt er å levere en moderne helhetsløsning som utgjør en forskjell – for brukeren, virksomheten og planeten. Rapporten er utformet for å støtte beslutningen deres og inspirere til neste steg mot en smartere belysningsfremtid. Ikke nøl med å ta kontakt om dere vil vite mer – vi går gjerne veien sammen med dere!',
    rep_results_title:'Resultat LCC-beregning',
    rep_project:'Prosjekt',rep_date:'Dato',rep_officer:'Saksbehandler',
    rep_calc_based:'Beregningen er basert på',rep_calc_rate:'Kalkulasjonsrente',rep_energy_price:'Energipris',
    rep_price_change:'Årlig prisendring energi (frivillig)',rep_climate_impact:'Klimapåvirkning energi (frivillig)',
    rep_op_time:'Driftstid',
    rep_pv_note:'Resultatene er beregnet etter nåverdimetoden.',
    rep_th_costs:'LCC-kostnader',rep_th_current:'Eksisterende installasjon',rep_th_new:'Ny installasjon',
    default_inst_existing:'Eksisterende installasjon',default_inst_new:'Ny installasjon',
    default_inst_existing_note:'Ved PDF-import settes tilbudspris til 0 her, fordi eksisterende installasjon behandles som allerede installert.',
    default_inst_new_note:'Ved PDF-import hentes betegnelse, antall og armaturpris hit via kobling mellom Register og Offertradens godsmärke.',
    rep_th_comp:'Sammenligning %',rep_th_savings:'Besparelse',
    rep_row_invest:'Investeringskostnader',rep_row_energy:'Energikostnad',
    rep_row_maint:'Vedlikeholdskostnader',rep_row_total:'TOTAL LCC-kostnad',
    rep_climate_title:'Energiforbruk og klimapåvirkning',
    rep_did_you_know:'Visste du at',
    rep_row_energy_use:'Energiforbruk',rep_row_climate:'Klimapåvirkning',
    rep_chart_lcc:'TOTAL LCC-KOSTNAD',rep_chart_energy:'ENERGIFORBRUK OG KLIMAPÅVIRKNING',
    rep_annual_savings:'ÅRLIG BESPARELSE PER ROMTYPE',rep_repayment:'TILBAKEBETALINGSTID',
    rep_accum_title:'Akkumulert energibesparelse over tid',
    rep_accum_body:'Beregnet nåverdi av energi- og vedlikeholdsbesparelser.',
    rep_summary:'Sammendrag',
    rep_carbon:'Klimaavtrykk',rep_energy:'Energiforbruk',rep_savings:'Kostnadsbesparelse',
    rep_unit_co2:'kg CO₂-e',
    rep_eq_gas:'liter bensin spart',rep_eq_trees:'bevarte trær (hektar)',
    rep_eq_cars:'færre biler på veiene',rep_eq_coal:'tonn kull som ikke brennes',
    rep_eq_oil:'fat olje som ikke brukes',rep_eq_homes:'husholdningers årlige strømforbruk',
    rep_summary_title:'Sammendrag:',
    rep_summary_body:'I Aura Light streber vi etter å tilby mer enn bare en belysningsløsning – vi vil bidra til et smartere og mer bærekraftig valg. Gjennom vår LCC-analyse håper vi at resultatet bekrefter at løsningen vår dekker både deres funksjonelle behov og økonomiske mål. Med fokus på brukervennlighet, driftssikkerhet og energieffektivitet skaper vi en helhetsløsning som ikke bare forbedrer opplevelsen for de som oppholder seg i miljøet – men også minimerer klimaavtrykket over tid.',
    rep_leg_cost:'Energikostnader (kr)',rep_leg_kwh:'Energiforbruk (kWh)',rep_leg_co2:'Klimapåvirkning (kg CO₂)',
    rep_leg_invest:'Investeringskostnad',rep_leg_sav:'Energibesparelse',rep_year:'År',
  },
  DE:{
    save:'Speichern',load:'Gespeicherte Kalkulation laden',print:'Drucken',help:'Hilfe',
    tab_input:'Eingabe',tab_result:'Ergebnis',tab_winwin:'Win/win',tab_summary:'Zusammenfassung',
    win_pill:'Nachweisbarer Geschäftsnutzen und geringere Klimaauswirkung',
    win_title:'Niedrigere Kosten.\nGeringere Klimaauswirkung.',
    win_lead:'Die LCC-Analyse zeigt, wie eine moderne LED-Lösung mit bedarfsgerechter Steuerung Betriebskosten senken, den Energieverbrauch reduzieren und zugleich das Nachhaltigkeitsprofil stärken kann.',
    win_metric_lcc:'Niedrigere Kosten',win_metric_lcc_extra:'Mehrkosten',
    win_metric_lcc_note:'berechnete Einsparung über den Berechnungszeitraum',
    win_metric_energy:'weniger Energie',win_metric_energy_note:'Kilowattstunden, die jedes Jahr nicht gekauft werden müssen',
    win_metric_co2:'geringerer Klima-Fußabdruck',win_metric_co2_note:'Win-win für Budget und Planet',
    win_metric_cost_abs:'Kosten',win_metric_energy_abs:'Energieverbrauch',win_metric_co2_abs:'Klima-Fußabdruck',
    win_metric_cost_abs_note:'gesamte LCC-Kosten über den Berechnungszeitraum',win_metric_energy_abs_note:'jährlicher Energieverbrauch',win_metric_co2_abs_note:'jährlicher Klima-Fußabdruck',
    win_soft_title:'Bessere Lichtumgebung bei geringerer Betriebsbelastung',
    win_soft_body:'Die Lösung liefert das richtige Lichtniveau, wenn es benötigt wird, und reduziert unnötigen Betrieb, wenn Flächen nicht genutzt werden. Das Ergebnis ist eine energieeffizientere, betriebssichere und nachhaltige Lichtumgebung mit klarem Geschäftsnutzen.',
    region_presets:'Voreinstellungen nach Markt',
    import_data:'Unterlagen importieren',import_pdf:'Unterlagen importieren',clear_import:'Import löschen',
    clear_import_confirm:'Importierte Daten löschen? Projektfelder sowie alle Räume/Leuchten werden geleert, Berechnungsparameter und Marktauswahl bleiben erhalten.',
    import_cleared:'Importierte Daten wurden gelöscht.',
    import_market_fetch:'Aktuellen Stromtarif abrufen',
    import_market_fetch_loading:'Aktueller Stromtarif für {market} wird geladen...',
    import_market_fetch_proxy_missing:'Für den Live-Abruf des aktuellen Stromtarifs muss der lokale Hilfsdienst laufen. Starten Sie market_data_proxy.py und versuchen Sie es erneut. Die Standardwerte bleiben bis dahin erhalten.',
    import_market_fetch_failed:'Der aktuelle Stromtarif für {market} konnte nicht geladen werden: {error}',
    import_market_fetch_success:'Aktueller Stromtarif für {market} aktualisiert von {source}. Gebiet: {area}. Liefertag: {date}. Strompreis: {price}. Strompreisänderung/Jahr: {change}.',
    import_market_fetch_eu_note:'Für International (EUR) wird GER als EUR-Proxy verwendet.',
    import_market_reset:'Voreinstellung wiederherstellen',
    import_market_reset_done:'Die Berechnungsparameter wurden auf die Voreinstellung für {market} zurückgesetzt.',
    market_SE:'Schweden',market_NO:'Norwegen',market_DE:'Deutschland',market_EU:'International (EUR)',
    import_hint:'Wählen Sie Angebot und/oder Lichtberechnung als PDF. Der Import füllt verfügbare Projekt-, Raum- und Leuchtendaten so gut wie möglich. Wenn beide Unterlagen vorhanden sind, werden neue und bestehende Installation aus dem gewählten Technikjahr erstellt.',
    import_existing_year:'Bestehende Installation ausgeführt im Jahr',import_existing_preview:'Technikannahme',import_existing_factor:'Leistungsfaktor',import_existing_maint:'Wartung',import_per_year:'Jahr',
    import_count_source:'Anzahl (Stk.) Leuchten wird übernommen aus',import_count_offer:'Angebot',import_count_dialux:'DIALux',
    result_install_scope:'Im Ergebnis anzeigen',result_install_both:'Beide',result_install_existing:'Bestehend',result_install_new:'Neu',
    hide_luminaire_prices:'Leuchtenpreise ausblenden',show_luminaire_prices:'Leuchtenpreise anzeigen',
    import_count_prompt:'Sowohl Angebot als auch DIALux wurden gefunden.\n\nKlicken Sie auf OK, um Anzahl (Stk.) aus dem Angebot zu übernehmen.\nKlicken Sie auf Abbrechen, um Anzahl (Stk.) aus DIALux zu übernehmen.',
    currency_region:'Währung',exchange_rate:'Wechselkurs',
    proj_info:'Projektinformation',project:'Projekt',date:'Datum',contact:'Bearbeiter',
    calc_params:'Berechnungsparameter',
    param_years:'1.1 Berechnungszeitraum (Jahre)',param_rate:'1.2 Kalkulationszins (%)',
    param_elprice:'1.3 Strompreis',param_pricechange:'1.4 Jährl. Energiepreisänderung (%)',
    param_co2:'1.5 CO₂-Faktor (kgCO₂e/kWh)',param_ophours:'1.6 Betriebszeit (h/Jahr)',
    add_installation:'Installation hinzufügen',calculate:'LCC berechnen',
    chart_lcc:'LCC-Vergleich je Installation',chart_accum:'Kumulierte Kosten über Zeit',
    chart_energy:'Energieverbrauch je Raumtyp (kWh/Jahr)',chart_co2:'CO₂-Emissionen je Installation (kgCO₂e/Jahr)',
    detail_result:'Detailliertes Ergebnis',
    compare_scope_label:'Auswahl für den Vergleich',compare_scope_all:'Das gesamte Projekt ist im Vergleich enthalten.',
    compare_scope_none:'Es sind keine Räume für den Vergleich ausgewählt.',compare_scope_subset:'{selected} von {total} Räumen sind im Vergleich enthalten.',
    compare_scope_selected:'Ausgewählte Räume',
    installation:'Installation',add_room:'Raumtyp hinzufügen',remove:'Entfernen',
    room_type_lbl:'Raumtyp',room_compare_include:'In Vergleich und Bericht einbeziehen',room_name:'Raumkennzeichnung',building_type:'Gebäudetyp',room_type:'Raumtyp',
    room_count:'Anzahl Räume (Stk.)',room_sqm:'Fläche je Raum (m²)',
    luminaires:'Leuchten',add_lum:'Leuchte',lum_type:'Leuchtentyp',lum_label:'Bezeichnung',
    lum_count:'Anzahl (Stk.)',lum_price:'Leuchtenpreis (€/Stk.)',lum_install:'Montage (€/Stk.)',
    lum_power:'Leistung (W/Stk.)',lum_ctrl:'Steuerung',lum_reduction:'Reduktionsfaktor',lum_maint:'Wartung (€/Jahr)',
    ctrl_none:'Keine',ctrl_manual:'Manuelle Steuerung',ctrl_presence:'Präsenzsteuerung',ctrl_daylight:'Tageslichtsteuerung',
    kpi_total:'Gesamt LCC',kpi_years:'Jahre',kpi_saving:'Einsparung',kpi_extra:'Mehrkosten',
    kpi_payback:'Amortisationszeit',kpi_payback_note:'basierend auf jährlicher Betriebseinsparung',
    kpi_co2_delta:'Differenz CO₂e/Jahr',kpi_co2_lower:'geringere Klimaauswirkung',kpi_co2_higher:'höhere Klimaauswirkung',kpi_co2_same:'keine Differenz',
    tbl_param:'Parameter',tbl_diff_pct:'Differenz %',tbl_period:'Berechnungszeitraum',tbl_rate:'Kalkulationszins',tbl_el:'Strompreis',
    tbl_invest:'Investitionskosten',tbl_annual_energy:'Energieverbrauch (Jahr 1)',
    tbl_annual_ecost:'Energiekosten (Jahr 1)',tbl_pvf_e:'Abzinsungsfaktor Energie',tbl_pv_e:'Energiekosten (Barwert)',
    tbl_annual_m:'Wartung (Jahr 1)',tbl_pvf_m:'Abzinsungsfaktor Wartung',tbl_pv_m:'Wartungskosten (Barwert)',
    tbl_total:'GESAMT LCC',tbl_co2:'CO₂-Emissionen (kgCO₂e/Jahr)',
    sum_period:'Berechnungszeitraum',sum_rate:'Kalkulationszins',sum_el:'Strompreis',sum_pricechange:'Energiepreissteigerung',
    sum_co2f:'CO₂-Faktor',sum_hours:'Betriebszeit',
    sum_invest:'Investitionskosten',sum_pv_e:'Energiekosten (Barwert)',sum_pv_m:'Wartungskosten (Barwert)',
    sum_total:'GESAMT LCC-Kosten',sum_energy:'Energieverbrauch (kWh/Jahr)',sum_co2:'CO₂-Emissionen (kgCO₂e/Jahr)',
    sum_payback:'Berechnete Amortisationszeit',payback_unit:'Jahre',payback_immed:'Sofort',
    sum_saving:'Einsparung',sum_extra:'Mehrkosten',
    currency:'€',currency_kwh:'€/kWh',
    h_subtitle:'LCC-Kalkulation – Lebenszykluskosten',
    select_building:'Gebäudetyp wählen...',select_room:'Raumtyp wählen...',
    b_office:'Büro',b_school:'Schule und Restaurant',b_sports:'Sporthalle',b_hospital:'Krankenhaus',b_industry:'Industrie',
    rep_title:'Lebenszykluskostenberechnung',
    rep_intro:'Einleitung',
    rep_intro_body:'Wussten Sie, dass niedrigere Betriebskosten sowie ein stärkeres Nachhaltigkeitsprofil mit der richtigen Beleuchtung erreicht werden können? Viele Unternehmen übersehen diese versteckten Einsparpotenziale traditioneller Beleuchtungssysteme – Potenziale, die wir bei Aura Light sichtbar machen.\n\nIm beigefügten Energieeinsparungsbericht zeigen wir, wie der Umstieg auf unsere intelligenten und energieeffizienten LED-Lösungen sofortige Vorteile und langfristigen Mehrwert schaffen kann. Basierend auf den gemeinsam mit Ihrem Team erhobenen Daten präsentieren wir konkrete Maßnahmen und klare Effekte – wirtschaftlich, ökologisch und funktional.\n\nUnser Ziel ist es, eine moderne Gesamtlösung zu liefern, die einen Unterschied macht – für die Nutzer, den Betrieb und den Planeten. Der Bericht soll Sie bei Ihrer Entscheidung unterstützen und zum nächsten Schritt in eine intelligentere Beleuchtungszukunft inspirieren. Zögern Sie nicht, uns zu kontaktieren – wir gehen diesen Weg gerne gemeinsam mit Ihnen!',
    rep_results_title:'Ergebnis LCC-Kalkulation',
    rep_project:'Projekt',rep_date:'Datum',rep_officer:'Bearbeiter',
    rep_calc_based:'Berechnung basiert auf',rep_calc_rate:'Kalkulationszins',rep_energy_price:'Energiepreis',
    rep_price_change:'Jährliche Energiepreisänderung (freiwillig)',rep_climate_impact:'Klimaauswirkung Energie (freiwillig)',
    rep_op_time:'Betriebszeit',
    rep_pv_note:'Die Ergebnisse sind nach der Barwertmethode berechnet.',
    rep_th_costs:'LCC-Kosten',rep_th_current:'Bestehende Installation',rep_th_new:'Neue Installation',
    default_inst_existing:'Bestehende Installation',default_inst_new:'Neue Installation',
    default_inst_existing_note:'Beim PDF-Import wird der Angebotspreis hier auf 0 gesetzt, da die bestehende Installation als bereits vorhanden behandelt wird.',
    default_inst_new_note:'Beim PDF-Import werden Bezeichnung, Anzahl und Leuchtenpreis hier über die Zuordnung zwischen Register und Offertradens godsmärke übernommen.',
    rep_th_comp:'Vergleich %',rep_th_savings:'Einsparung',
    rep_row_invest:'Investitionskosten',rep_row_energy:'Energiekosten',
    rep_row_maint:'Wartungskosten',rep_row_total:'GESAMT LCC-Kosten',
    rep_climate_title:'Energieverbrauch & Klimaauswirkung',
    rep_did_you_know:'Wussten Sie schon?',
    rep_row_energy_use:'Energieverbrauch',rep_row_climate:'Klimaauswirkung',
    rep_chart_lcc:'GESAMT LCC-KOSTEN',rep_chart_energy:'ENERGIEVERBRAUCH & KLIMAAUSWIRKUNG',
    rep_annual_savings:'JÄHRLICHE EINSPARUNG PRO RAUMTYP',rep_repayment:'AMORTISATIONSZEIT',
    rep_accum_title:'Kumulierte Energieeinsparung über Zeit',
    rep_accum_body:'Berechneter Barwert der Energie- und Wartungseinsparungen.',
    rep_summary:'Zusammenfassung',
    rep_carbon:'CO₂-Fußabdruck',rep_energy:'Energieverbrauch',rep_savings:'Kosteneinsparung',
    rep_unit_co2:'kg CO₂-e',
    rep_eq_gas:'Liter Benzin eingespart',rep_eq_trees:'erhaltene Bäume (Hektar)',
    rep_eq_cars:'weniger Autos auf den Straßen',rep_eq_coal:'Tonnen Kohle nicht verbrannt',
    rep_eq_oil:'Fass Öl nicht verbraucht',rep_eq_homes:'Jahresstromverbrauch von Haushalten',
    rep_summary_title:'Zusammenfassung:',
    rep_summary_body:'Bei Aura Light streben wir danach, mehr als nur eine Beleuchtungslösung anzubieten – wir möchten zu einer intelligenteren und nachhaltigeren Wahl beitragen. Wir hoffen, dass die Ergebnisse der LCC-Analyse bestätigen, dass unsere Lösungen Ihre funktionalen Anforderungen und wirtschaftlichen Ziele erfüllen. Mit Fokus auf Benutzerfreundlichkeit, Betriebssicherheit und Energieeffizienz schaffen wir eine Gesamtlösung, die nicht nur das Erlebnis für die Menschen in der Umgebung verbessert, sondern langfristig auch den ökologischen Fußabdruck verringert.',
    rep_leg_cost:'Energiekosten (€)',rep_leg_kwh:'Energieverbrauch (kWh)',rep_leg_co2:'Klimaauswirkung (kg CO₂)',
    rep_leg_invest:'Investitionskosten',rep_leg_sav:'Energieeinsparung',rep_year:'Jahr',
  },
  EN:{
    save:'Save',load:'Load saved calculation',print:'Print',help:'Help',
    tab_input:'Input',tab_result:'Results',tab_winwin:'Win/win',tab_summary:'Summary',
    win_pill:'Documented business value and reduced climate impact',
    win_title:'Lower cost.\nLower climate impact.',
    win_lead:'The LCC analysis shows how a modern LED solution with demand-based controls can reduce operating cost, lower energy use and strengthen the sustainability profile.',
    win_metric_lcc:'Lower cost',win_metric_lcc_extra:'Extra cost',
    win_metric_lcc_note:'calculated saving over the calculation period',
    win_metric_energy:'less energy',win_metric_energy_note:'kilowatt-hours you do not need to buy each year',
    win_metric_co2:'lower climate impact',win_metric_co2_note:'win-win for wallet and planet',
    win_metric_cost_abs:'Cost',win_metric_energy_abs:'Energy use',win_metric_co2_abs:'Climate impact',
    win_metric_cost_abs_note:'total LCC cost over the calculation period',win_metric_energy_abs_note:'annual energy use',win_metric_co2_abs_note:'annual climate impact',
    win_soft_title:'A better lighting environment with lower operational load',
    win_soft_body:'The solution provides the right light level when the space is in use and reduces unnecessary operation when areas are empty. The result is a more energy-efficient, reliable and sustainable lighting environment with clear business value.',
    region_presets:'Market presets',
    import_data:'Import source data',import_pdf:'Import source data',clear_import:'Clear import',
    clear_import_confirm:'Clear imported data? Project fields and all rooms/luminaires will be emptied, while calculation parameters and market selection are kept.',
    import_cleared:'Imported data has been cleared.',
    import_market_fetch:'Fetch current electricity tariff',
    import_market_fetch_loading:'Fetching current electricity tariff for {market}...',
    import_market_fetch_proxy_missing:'Live retrieval of the current electricity tariff requires the local helper service to be running. Start market_data_proxy.py and try again. The default values stay in place until then.',
    import_market_fetch_failed:'Could not fetch current electricity tariff for {market}: {error}',
    import_market_fetch_success:'Current electricity tariff for {market} updated from {source}. Area: {area}. Delivery day: {date}. Electricity price: {price}. Annual electricity price change: {change}.',
    import_market_fetch_eu_note:'For International (EUR), GER is used as the EUR proxy.',
    import_market_reset:'Reset preset values',
    import_market_reset_done:'Calculation parameters have been reset to the preset values for {market}.',
    market_SE:'Sweden',market_NO:'Norway',market_DE:'Germany',market_EU:'International (EUR)',
    import_hint:'Choose the quotation and/or lighting calculation PDFs. The import fills whatever project, room and luminaire data can be mapped. If both sources are present, it creates New installation and Existing installation from the selected technology year.',
    import_existing_year:'Existing installation year',import_existing_preview:'Technology assumption',import_existing_factor:'power factor',import_existing_maint:'maintenance',import_per_year:'year',
    import_count_source:'Luminaire quantity is taken from',import_count_offer:'Quotation',import_count_dialux:'DIALux',
    result_install_scope:'Show in results',result_install_both:'Both',result_install_existing:'Existing',result_install_new:'New',
    hide_luminaire_prices:'Hide luminaire prices',show_luminaire_prices:'Show luminaire prices',
    import_count_prompt:'Both quotation and DIALux were found.\n\nPress OK to take Quantity from the quotation.\nPress Cancel to take Quantity from DIALux.',
    currency_region:'Currency',exchange_rate:'Exchange rate',
    proj_info:'Project information',project:'Project',date:'Date',contact:'Prepared by',
    calc_params:'Calculation parameters',
    param_years:'1.1 Calculation period (years)',param_rate:'1.2 Discount rate (%)',
    param_elprice:'1.3 Electricity price',param_pricechange:'1.4 Annual energy price increase (%)',
    param_co2:'1.5 CO₂ factor (kgCO₂e/kWh)',param_ophours:'1.6 Operating hours (h/year)',
    add_installation:'Add installation',calculate:'Calculate LCC',
    chart_lcc:'LCC comparison per installation',chart_accum:'Accumulated costs over time',
    chart_energy:'Energy use per room type (kWh/year)',chart_co2:'CO₂ emissions per installation (kgCO₂e/year)',
    detail_result:'Detailed results',
    compare_scope_label:'Comparison scope',compare_scope_all:'The full project is included in the comparison.',
    compare_scope_none:'No rooms are selected for comparison.',compare_scope_subset:'{selected} of {total} rooms are included in the comparison.',
    compare_scope_selected:'Selected rooms',
    installation:'Installation',add_room:'Add room type',remove:'Remove',
    room_type_lbl:'Room type',room_compare_include:'Include in comparison and report',room_name:'Room designation',building_type:'Building type',room_type:'Room type',
    room_count:'Number of rooms',room_sqm:'Floor area per room (m²)',
    luminaires:'Luminaires',add_lum:'Luminaire',lum_type:'Luminaire type',lum_label:'Designation',
    lum_count:'Quantity',lum_price:'Luminaire price (€/unit)',lum_install:'Installation (€/unit)',
    lum_power:'Power (W/unit)',lum_ctrl:'Control',lum_reduction:'Reduction factor',lum_maint:'Maintenance (€/year)',
    ctrl_none:'None',ctrl_manual:'Manual control',ctrl_presence:'Presence/absence control',ctrl_daylight:'Daylight control',
    kpi_total:'Total LCC',kpi_years:'years',kpi_saving:'Saving',kpi_extra:'Extra cost',
    kpi_payback:'Payback period',kpi_payback_note:'based on annual operating savings',
    kpi_co2_delta:'CO₂e difference/year',kpi_co2_lower:'lower climate impact',kpi_co2_higher:'higher climate impact',kpi_co2_same:'no difference',
    tbl_param:'Parameter',tbl_diff_pct:'Difference %',tbl_period:'Calculation period',tbl_rate:'Discount rate',tbl_el:'Electricity price',
    tbl_invest:'Investment costs',tbl_annual_energy:'Energy use (year 1)',
    tbl_annual_ecost:'Energy cost (year 1)',tbl_pvf_e:'PV factor energy',tbl_pv_e:'Energy costs (PV)',
    tbl_annual_m:'Maintenance (year 1)',tbl_pvf_m:'PV factor maintenance',tbl_pv_m:'Maintenance costs (PV)',
    tbl_total:'TOTAL LCC',tbl_co2:'CO₂ emissions (kgCO₂e/year)',
    sum_period:'Calculation period',sum_rate:'Discount rate',sum_el:'Electricity price',sum_pricechange:'Energy price increase',
    sum_co2f:'CO₂ factor',sum_hours:'Operating hours',
    sum_invest:'Investment costs',sum_pv_e:'Energy costs (present value)',sum_pv_m:'Maintenance costs (present value)',
    sum_total:'TOTAL LCC cost',sum_energy:'Energy use (kWh/year)',sum_co2:'CO₂ emissions (kgCO₂e/year)',
    sum_payback:'Estimated payback period',payback_unit:'years',payback_immed:'Immediate',
    sum_saving:'Saving',sum_extra:'Extra cost',
    currency:'€',currency_kwh:'€/kWh',
    h_subtitle:'LCC Calculation – Life Cycle Costs',
    select_building:'Select building type...',select_room:'Select room type...',
    b_office:'Office',b_school:'School and restaurant',b_sports:'Sports hall',b_hospital:'Hospital',b_industry:'Industry',
    rep_title:'Life cost calculation',
    rep_intro:'Introduction',
    rep_intro_body:"Did you know that one of the simplest ways to lower operating costs and strengthen your sustainability footprint is through lighting? Many companies overlook the hidden savings opportunities concealed in traditional lighting systems – something we at Aura Light are happy to help reveal.\n\nIn the attached energy savings report, we show how switching to our smart and energy-efficient LED solutions can create both immediate gains and long-term value. Using data from our review of your facilities together with your team, we highlight concrete measures and clear impacts – economic, environmental, and functional.\n\nOur goal is to deliver a modern, comprehensive solution that makes a difference – for the user, the business, and the planet. The report has been designed to support your decision-making and inspire the next step toward a smarter lighting future. Don't hesitate to get in touch if you'd like to know more – we look forward to making the journey together!",
    rep_results_title:'Results LCC-calculation',
    rep_project:'Project',rep_date:'Date',rep_officer:'Officer',
    rep_calc_based:'Calculation based on',rep_calc_rate:'Calculation rate',rep_energy_price:'Energy price',
    rep_price_change:'Annual energy price change (voluntary)',rep_climate_impact:'Climate impact energy use (voluntary)',
    rep_op_time:'Operation time',
    rep_pv_note:'The results are calculated according to the present value method.',
    rep_th_costs:'LCC-costs',rep_th_current:'Current Installation',rep_th_new:'New Installation',
    default_inst_existing:'Existing installation',default_inst_new:'New installation',
    default_inst_existing_note:'On PDF import, quotation price is set to 0 here because the existing installation is treated as already installed.',
    default_inst_new_note:'On PDF import, designation, quantity and luminaire price are filled here by matching Register with Offertradens godsmärke.',
    rep_th_comp:'Comparison %',rep_th_savings:'Savings',
    rep_row_invest:'Investment costs',rep_row_energy:'Energy cost',
    rep_row_maint:'Maintenance costs',rep_row_total:'TOTAL LCC costs',
    rep_climate_title:'Energy consumption & climate impact',
    rep_did_you_know:'Did you know',
    rep_row_energy_use:'Energy usage',rep_row_climate:'Climate impact',
    rep_chart_lcc:'TOTAL LCC COSTS',rep_chart_energy:'ENERGY USAGE & CLIMATE IMPACT',
    rep_annual_savings:'ANNUAL SAVINGS PER ROOM TYPE',rep_repayment:'REPAYMENT PERIOD',
    rep_accum_title:'Accumulated energy savings over time',
    rep_accum_body:'Calculated present value of energy and maintenance savings.',
    rep_summary:'Summary',
    rep_carbon:'Carbon Footprint',rep_energy:'Energy Consumption',rep_savings:'Cost Savings',
    rep_unit_co2:'kg CO₂-e',
    rep_eq_gas:'Liters of gasoline saved',rep_eq_trees:'Preserved trees (in hectares)',
    rep_eq_cars:'Fewer cars on the roads',rep_eq_coal:'Tons of coal not burned',
    rep_eq_oil:'Barrels of oil not consumed',rep_eq_homes:"Households' annual electricity consumption",
    rep_summary_title:'Summary:',
    rep_summary_body:'At Aura Light, we strive to offer more than just a lighting solution – we want to contribute to a smarter, more sustainable choice. Through our LCC analysis, we hope the results confirm that our solution meets both your functional needs and financial goals. With a focus on user-friendliness, reliability, and energy efficiency, we create a comprehensive solution that not only enhances the experience for those in the environment – but also minimizes the climate footprint over time.',
    rep_leg_cost:'Energy costs (€)',rep_leg_kwh:'Energy consumption (kWh)',rep_leg_co2:'Climate impact (kg CO₂)',
    rep_leg_invest:'Investment cost',rep_leg_sav:'Energy savings',rep_year:'Year',
  }
};

// ─── Regional presets ─────────────────────────────────────────────────────────
const PRESETS = {
  SE:{ elPrice:3,    priceChange:2, co2:0.02,  currency:'SEK', currencySymbol:'kr',  currencyKwh:'kr/kWh',  exchangeRateFromSEK:1,      locale:'sv-SE' },
  NO:{ elPrice:3,    priceChange:2, co2:0.02,  currency:'NOK', currencySymbol:'NOK', currencyKwh:'NOK/kWh', exchangeRateFromSEK:1.0138, locale:'nb-NO' },
  DE:{ elPrice:0.20, priceChange:2, co2:0.36,  currency:'EUR', currencySymbol:'€',   currencyKwh:'€/kWh',   exchangeRateFromSEK:0.0926, locale:'de-DE' },
  EU:{ elPrice:0.25, priceChange:2, co2:0.242, currency:'EUR', currencySymbol:'€',   currencyKwh:'€/kWh',   exchangeRateFromSEK:0.0926, locale:'en-GB' },
};
const CALC_DEFAULTS = { years:20, rate:5, opHours:4000 };
const MARKET_PROXY_URL = 'http://127.0.0.1:8765';

// ─── Room data (from LCC-dokument 2026 Master.xlsx, sheet 4. Reduktionsfaktorer) ──
// rf_manual: reduction factor for manual control
// rf_presence: reduction factor for presence/absence control
// rf_daylight: reduction factor for daylight control
// maxPower: max installed power (W/m²)
const BUILDINGS = {
  KONTOR:{
    labelKey:'b_office',
    rooms:[
      {key:'Cellkontor > 8 kvm',  maxPower:9,  rf_manual:.8,  rf_presence:.75, rf_daylight:.56},
      {key:'Cellkontor 8–12 kvm', maxPower:8,  rf_manual:.8,  rf_presence:.75, rf_daylight:.56},
      {key:'Storkontor > 12 kvm', maxPower:10, rf_manual:1,   rf_presence:.9,  rf_daylight:.77},
      {key:'Korridor',            maxPower:5,  rf_manual:1,   rf_presence:.75, rf_daylight:.57},
      {key:'Pausrum större',      maxPower:7,  rf_manual:.7,  rf_presence:.86, rf_daylight:.82},
      {key:'Pausrum mindre',      maxPower:7,  rf_manual:.7,  rf_presence:.86, rf_daylight:.74},
      {key:'Konferensrum',        maxPower:10, rf_manual:.7,  rf_presence:.71, rf_daylight:.77},
      {key:'Förråd',              maxPower:6,  rf_manual:.3,  rf_presence:.33, rf_daylight:1  },
      {key:'WC',                  maxPower:11, rf_manual:.3,  rf_presence:.33, rf_daylight:1  },
      {key:'Trapphus (kontor)',   maxPower:7,  rf_manual:1,   rf_presence:.4,  rf_daylight:1  },
      {key:'Garage (icke‑publika kontor)', maxPower:3, rf_manual:1, rf_presence:.1, rf_daylight:1},
    ]
  },
  SKOLA:{
    labelKey:'b_school',
    rooms:[
      {key:'Klassrum',           maxPower:10, rf_manual:.95, rf_presence:.79, rf_daylight:.82},
      {key:'Grupprum',           maxPower:10, rf_manual:.9,  rf_presence:.89, rf_daylight:.82},
      {key:'Korridor',           maxPower:5,  rf_manual:1,   rf_presence:.55, rf_daylight:.57},
      {key:'Aula',               maxPower:12, rf_manual:.8,  rf_presence:.75, rf_daylight:.64},
      {key:'Uppehållsrum',       maxPower:7,  rf_manual:1,   rf_presence:.6,  rf_daylight:.82},
      {key:'Matsal',             maxPower:7,  rf_manual:1,   rf_presence:1,   rf_daylight:.86},
      {key:'Kök',                maxPower:9,  rf_manual:1,   rf_presence:1,   rf_daylight:1  },
      {key:'Kök/förråd',         maxPower:6,  rf_manual:.7,  rf_presence:.86, rf_daylight:1  },
      {key:'Personalrum < 30 kvm', maxPower:7, rf_manual:.7, rf_presence:.86, rf_daylight:.81},
    ]
  },
  SPORTHALL:{
    labelKey:'b_sports',
    rooms:[
      {key:'Sporthall',                        maxPower:11, rf_manual:1,  rf_presence:.7,  rf_daylight:.84},
      {key:'Omklädning',                        maxPower:6,  rf_manual:.7, rf_presence:.86, rf_daylight:1  },
      {key:'Förråd',                            maxPower:6,  rf_manual:.3, rf_presence:.33, rf_daylight:1  },
      {key:'Kommunikationsytor < 3 m höjd',    maxPower:8,  rf_manual:1,  rf_presence:.75, rf_daylight:.71},
      {key:'Kommunikationsytor < 6 m höjd',    maxPower:10, rf_manual:1,  rf_presence:.75, rf_daylight:.71},
    ]
  },
  SJUKHUS:{
    labelKey:'b_hospital',
    rooms:[
      {key:'Vård/patientrum, multifunktion',   maxPower:18, rf_manual:1,  rf_presence:.64, rf_daylight:.9 },
      {key:'Vård/patientrum',                  maxPower:9,  rf_manual:1,  rf_presence:1,   rf_daylight:.75},
      {key:'Undersökning 500 lux',             maxPower:12, rf_manual:.8, rf_presence:.88, rf_daylight:.75},
      {key:'Operation',                         maxPower:17, rf_manual:1,  rf_presence:1,   rf_daylight:1  },
      {key:'Korridor, normal samt städning',   maxPower:5,  rf_manual:1,  rf_presence:1,   rf_daylight:1  },
      {key:'Korridor, OP‑avdelning',           maxPower:10, rf_manual:1,  rf_presence:1,   rf_daylight:1  },
      {key:'Väntrum',                           maxPower:7,  rf_manual:1,  rf_presence:1,   rf_daylight:1  },
      {key:'Kulvert',                           maxPower:5,  rf_manual:1,  rf_presence:.45, rf_daylight:.9 },
    ]
  },
  INDUSTRI:{
    labelKey:'b_industry',
    rooms:[
      {key:'Grov, 300 lux',          maxPower:6,  rf_manual:1, rf_presence:1,    rf_daylight:.85},
      {key:'Medel, 500 lux',         maxPower:10, rf_manual:1, rf_presence:1,    rf_daylight:.86},
      {key:'Fin, 750 lux',           maxPower:15, rf_manual:1, rf_presence:1,    rf_daylight:.87},
      {key:'Mindre lokal, 300 lux',  maxPower:6,  rf_manual:1, rf_presence:.9,   rf_daylight:.85},
      {key:'Måleri',                 maxPower:14, rf_manual:1, rf_presence:.9,   rf_daylight:1  },
      {key:'Lager packning, 300 lux',maxPower:6,  rf_manual:1, rf_presence:.95,  rf_daylight:.9 },
      {key:'Lager lastning, 200 lux',maxPower:4,  rf_manual:1, rf_presence:.95,  rf_daylight:.9 },
      {key:'Lagergång höglager',     maxPower:14, rf_manual:1, rf_presence:.75,  rf_daylight:.9 },
      {key:'Lagergång låglager',     maxPower:7,  rf_manual:1, rf_presence:.75,  rf_daylight:.9 },
    ]
  },
};

// Room type name translations (from Variabler sheet)
const ROOM_NAMES = {
  'Cellkontor > 8 kvm':        {NO:'Cellekontor > 8 kvm',       DE:'Einzelbüro > 8 m²',              EN:'Cellular office > 8 sqm'},
  'Cellkontor 8–12 kvm':       {NO:'Cellekontor 8–12 kvm',      DE:'Einzelbüro 8–12 m²',             EN:'Cellular office 8–12 sqm'},
  'Storkontor > 12 kvm':       {NO:'Åpent kontor > 12 kvm',     DE:'Großraumbüro > 12 m²',           EN:'Open-plan office > 12 sqm'},
  'Korridor':                  {NO:'Korridor',                   DE:'Flur',                           EN:'Corridor'},
  'Pausrum större':            {NO:'Pauserom større',            DE:'Pausenraum (groß)',              EN:'Break room (large)'},
  'Pausrum mindre':            {NO:'Pauserom mindre',            DE:'Pausenraum (klein)',             EN:'Break room (small)'},
  'Konferensrum':              {NO:'Møterom',                    DE:'Konferenzraum',                  EN:'Conference room'},
  'Förråd':                    {NO:'Lagerrom',                   DE:'Lagerraum',                      EN:'Storage room'},
  'WC':                        {NO:'WC',                         DE:'WC',                             EN:'WC'},
  'Trapphus (kontor)':         {NO:'Trappehus (kontor)',         DE:'Treppenhaus (Büro)',             EN:'Stairwell (office)'},
  'Garage (icke‑publika kontor)':{NO:'Garasje (ikke‑offentlig kontor)',DE:'Garage (nicht öffentlich, Büro)',EN:'Garage (non‑public office)'},
  'Klassrum':                  {NO:'Klasserom',                  DE:'Klassenraum',                    EN:'Classroom'},
  'Grupprum':                  {NO:'Grupperom',                  DE:'Gruppenraum',                    EN:'Group room'},
  'Aula':                      {NO:'Aula',                       DE:'Aula',                           EN:'Assembly hall'},
  'Uppehållsrum':              {NO:'Oppholdsrom',                DE:'Aufenthaltsraum',                EN:'Common room'},
  'Matsal':                    {NO:'Kantine',                    DE:'Speisesaal',                     EN:'Dining hall'},
  'Kök':                       {NO:'Kjøkken',                    DE:'Küche',                          EN:'Kitchen'},
  'Kök/förråd':                {NO:'Kjøkken/lager',              DE:'Küche/Lager',                    EN:'Kitchen/storage'},
  'Personalrum < 30 kvm':      {NO:'Personalrom < 30 kvm',       DE:'Personalraum < 30 m²',          EN:'Staff room < 30 sqm'},
  'Sporthall':                 {NO:'Idrettshall',                DE:'Sporthalle',                     EN:'Sports hall'},
  'Omklädning':                {NO:'Garderobe',                  DE:'Umkleideraum',                   EN:'Changing room'},
  'Kommunikationsytor < 3 m höjd':{NO:'Kommunikasjonsarealer < 3 m høyde',DE:'Verkehrsflächen < 3 m Höhe',EN:'Circulation areas < 3 m height'},
  'Kommunikationsytor < 6 m höjd':{NO:'Kommunikasjonsarealer < 6 m høyde',DE:'Verkehrsflächen < 6 m Höhe',EN:'Circulation areas < 6 m height'},
  'Vård/patientrum, multifunktion':{NO:'Pasientrom, multifunksjon',DE:'Patientenraum, multifunktional',EN:'Patient room, multifunction'},
  'Vård/patientrum':           {NO:'Pasientrom',                 DE:'Patientenraum',                  EN:'Patient room'},
  'Undersökning 500 lux':      {NO:'Undersøkelse 500 lux',       DE:'Untersuchungsraum 500 Lux',      EN:'Examination room 500 lux'},
  'Operation':                 {NO:'Operasjon',                  DE:'Operationssaal',                 EN:'Operating theatre'},
  'Korridor, normal samt städning':{NO:'Korridor, normal og renhold',DE:'Flur, normal inkl. Reinigung',EN:'Corridor, normal incl. cleaning'},
  'Korridor, OP‑avdelning':    {NO:'Korridor, operasjonsavdeling',DE:'Flur, OP‑Bereich',             EN:'Corridor, operating department'},
  'Väntrum':                   {NO:'Venterom',                   DE:'Warteraum',                      EN:'Waiting room'},
  'Kulvert':                   {NO:'Kulvert',                    DE:'Versorgungstunnel',              EN:'Service tunnel'},
  'Grov, 300 lux':             {NO:'Grov, 300 lux',              DE:'Grob, 300 Lux',                 EN:'Rough, 300 lux'},
  'Medel, 500 lux':            {NO:'Middels, 500 lux',           DE:'Mittel, 500 Lux',               EN:'Medium, 500 lux'},
  'Fin, 750 lux':              {NO:'Fin, 750 lux',               DE:'Fein, 750 Lux',                 EN:'Fine, 750 lux'},
  'Mindre lokal, 300 lux':     {NO:'Mindre lokale, 300 lux',     DE:'Kleiner Raum, 300 Lux',         EN:'Small room, 300 lux'},
  'Måleri':                    {NO:'Maleri',                     DE:'Lackierung',                     EN:'Painting'},
  'Lager packning, 300 lux':   {NO:'Lager pakking, 300 lux',     DE:'Lager Verpackung, 300 Lux',     EN:'Warehouse packing, 300 lux'},
  'Lager lastning, 200 lux':   {NO:'Lager lasting, 200 lux',     DE:'Lager Verladung, 200 Lux',      EN:'Warehouse loading, 200 lux'},
  'Lagergång höglager':        {NO:'Lagerkorridor høylager',      DE:'Lagergang Hochregal',           EN:'High-bay storage aisle'},
  'Lagergång låglager':        {NO:'Lagerkorridor lavlager',      DE:'Lagergang Niedrigregal',        EN:'Low-bay storage aisle'},
};

function roomName(key) {
  if (lang === 'SE') return key;
  const t = ROOM_NAMES[key];
  return (t && t[lang]) ? t[lang] : key;
}

// ─── State ────────────────────────────────────────────────────────────────────
let lang = 'SE';
let activePreset = 'SE';
let installations = [];
let calcResults = null;
let charts = {};
let dirty = false;
let lastImportedDocs = null;
let lastImportedDocKinds = { offer:false, report:false };
let instCounter = 0, roomCounter = 0, lumCounter = 0;
let resultInstallFilter = 'both';
let hideLuminairePrices = false;

// ─── Language ─────────────────────────────────────────────────────────────────
function t(key) { return (TR[lang] && TR[lang][key]) || TR.SE[key] || key; }

const ORPHAN_PROOF_TEXT_SELECTOR = [
  '.report p',
  '.report h2',
  '.report h3',
  '.report th',
  '.report td',
  '.report strong',
  '.report .rep-eq span:not(.rep-eq-icon)',
  '.report .rep-kpi-label',
  '.rep-fact-text',
  '.win-lead',
  '.win-soft-body'
].join(', ');
const ORPHAN_PROOF_HEAD_WORDS = 2;
const ORPHAN_PROOF_TAIL_WORDS = 3;
const ORPHAN_GLUE_WORDS = [
  'a', 'an', 'and', 'as', 'at', 'by', 'for', 'from', 'in', 'of', 'on', 'or', 'the', 'to', 'with',
  'att', 'av', 'den', 'det', 'en', 'ett', 'för', 'från', 'genom', 'i', 'med', 'och', 'om', 'på', 'som', 'till',
  'at', 'av', 'den', 'det', 'en', 'et', 'for', 'fra', 'gjennom', 'i', 'med', 'og', 'om', 'på', 'som', 'til',
  'am', 'an', 'auf', 'bei', 'das', 'der', 'die', 'durch', 'ein', 'eine', 'für', 'im', 'in', 'mit', 'oder', 'und', 'von', 'zu'
];

function replaceWordGapsWithNbsp(text, words) {
  let result = text;
  for (let i = words.length - 1; i > 0; i -= 1) {
    const gapStart = words[i - 1].index + words[i - 1][0].length;
    const gapEnd = words[i].index;
    result = result.slice(0, gapStart) + '\u00A0' + result.slice(gapEnd);
  }
  return result;
}

function protectEdgeWords(text, count, edge = 'tail') {
  const words = [...String(text).matchAll(/\S+/gu)];
  if (words.length <= count) return text;
  const picked = edge === 'head' ? words.slice(0, count) : words.slice(-count);
  return replaceWordGapsWithNbsp(text, picked);
}

function protectSentenceStarts(text) {
  return String(text).replace(/(^|[.!?…][)"'”’\]]*\s+)(\S+)\s+(\S+)/gu, (_, lead, first, second) =>
    `${lead}${first}\u00A0${second}`
  );
}

function protectSentenceEnds(text) {
  return String(text).replace(/(\S+)\s+(\S+)\s+(\S+)([.!?…])/gu, (_, first, second, third, mark) =>
    `${first}\u00A0${second}\u00A0${third}${mark}`
  );
}

function protectGlueWords(text) {
  const escaped = ORPHAN_GLUE_WORDS
    .filter((word, index, list) => list.indexOf(word) === index)
    .map(word => word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
  const glueRe = new RegExp(`(^|\\s)(${escaped.join('|')})\\s+(?=\\S)`, 'giu');
  return String(text).replace(glueRe, (_, lead, word) => `${lead}${word}\u00A0`);
}

function protectTextSegmentFromOrphans(part) {
  if (/^\n+$/.test(part)) return part;
  let result = String(part).replace(/\u00A0/g, ' ');
  result = protectSentenceStarts(result);
  result = protectSentenceEnds(result);
  result = protectEdgeWords(result, ORPHAN_PROOF_HEAD_WORDS, 'head');
  result = protectEdgeWords(result, ORPHAN_PROOF_TAIL_WORDS, 'tail');
  result = protectGlueWords(result);
  return result;
}

function preventTypographicOrphans(text) {
  return String(text ?? '').split(/(\n+)/).map(protectTextSegmentFromOrphans).join('');
}

function applyTypographicOrphanProtection(root = document) {
  root.querySelectorAll(ORPHAN_PROOF_TEXT_SELECTOR).forEach(el => {
    const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT);
    const textNodes = [];
    while (walker.nextNode()) textNodes.push(walker.currentNode);
    textNodes.forEach(node => {
      node.nodeValue = preventTypographicOrphans(node.nodeValue);
    });
  });
}

function setDisplayText(el, text) {
  if (!el) return;
  const value = el.matches(ORPHAN_PROOF_TEXT_SELECTOR) ? preventTypographicOrphans(text) : text;
  el.textContent = value;
}

function tpl(key, vars = {}) {
  return String(t(key)).replace(/\{(\w+)\}/g, (_, name) =>
    Object.prototype.hasOwnProperty.call(vars, name) ? vars[name] : `{${name}}`
  );
}

function normalizeResultInstallFilter(value) {
  return ['both', 'existing', 'new'].includes(value) ? value : 'both';
}

function resultInstallFilterValue() {
  return normalizeResultInstallFilter(resultInstallFilter);
}

function tagResultInstall(inst, sourceIndex) {
  if (inst) inst._resultSourceIndex = sourceIndex;
  return inst;
}

function visibleResultInstallations(insts = []) {
  const mode = resultInstallFilterValue();
  insts.forEach((inst, idx) => tagResultInstall(inst, idx));
  if (mode === 'existing') return insts[0] ? [tagResultInstall(insts[0], 0)] : [];
  if (mode === 'new') return insts[1] ? [tagResultInstall(insts[1], 1)] : (insts[0] ? [tagResultInstall(insts[0], 0)] : []);
  return insts;
}

function renderResultInstallFilterControls() {
  document.querySelectorAll('[data-result-install-filter-group]').forEach(group => {
    group.setAttribute('aria-label', t('result_install_scope'));
  });
  document.querySelectorAll('[data-result-install-filter]').forEach(btn => {
    const active = btn.dataset.resultInstallFilter === resultInstallFilterValue();
    btn.classList.toggle('active', active);
    btn.setAttribute('aria-pressed', active ? 'true' : 'false');
  });
}

function setResultInstallFilter(value) {
  resultInstallFilter = normalizeResultInstallFilter(value);
  renderResultInstallFilterControls();
  if (calcResults) renderResults();
  markDirty();
}

function luminairePriceVisibilityLabel() {
  return hideLuminairePrices ? t('show_luminaire_prices') : t('hide_luminaire_prices');
}

function renderLuminairePriceVisibility() {
  document.body.classList.toggle('hide-luminaire-prices', hideLuminairePrices);
  const text = luminairePriceVisibilityLabel();
  document.querySelectorAll('[data-luminaire-prices-toggle]').forEach(btn => {
    const label = btn.querySelector('[data-price-toggle-label]');
    btn.setAttribute('aria-pressed', hideLuminairePrices ? 'true' : 'false');
    btn.title = text;
    if (label) label.textContent = text;
  });
}

function toggleLuminairePrices() {
  hideLuminairePrices = !hideLuminairePrices;
  renderLuminairePriceVisibility();
  if (calcResults) calculate({ switchToResult: false });
  else markDirty();
}

function roomSelectedValue(room) {
  return room?.selected !== false;
}

function currentRoomDisplayName(room) {
  const name = document.getElementById(`room-name-${room.id}`)?.value?.trim();
  if (name) return name;
  const roomKey = document.getElementById(`room-rtype-${room.id}`)?.value || room.roomKey || '';
  if (roomKey) return roomName(roomKey);
  return `${t('room_type')} ${room.id}`;
}

function findRoomContext(roomId) {
  for (let instIndex = 0; instIndex < installations.length; instIndex++) {
    const inst = installations[instIndex];
    const roomIndex = inst.rooms.findIndex(room => room.id === roomId);
    if (roomIndex >= 0) return { inst, room: inst.rooms[roomIndex], instIndex, roomIndex };
  }
  return null;
}

function roomIdentity(room) {
  return {
    roomKey: document.getElementById(`room-rtype-${room.id}`)?.value || room.roomKey || '',
    nameKey: normalizeImportKey(currentRoomDisplayName(room))
  };
}

function findPairedRoom(context) {
  if (!context || context.instIndex > 1) return null;
  const pairedIndex = context.instIndex === 0 ? 1 : 0;
  const pairedInst = installations[pairedIndex];
  if (!pairedInst) return null;
  const sourceIdentity = roomIdentity(context.room);
  let match = pairedInst.rooms.find(candidate => {
    const identity = roomIdentity(candidate);
    return sourceIdentity.roomKey && sourceIdentity.nameKey &&
      identity.roomKey === sourceIdentity.roomKey && identity.nameKey === sourceIdentity.nameKey;
  });
  if (!match && sourceIdentity.roomKey) {
    match = pairedInst.rooms.find(candidate => roomIdentity(candidate).roomKey === sourceIdentity.roomKey);
  }
  if (!match && sourceIdentity.nameKey) {
    match = pairedInst.rooms.find(candidate => roomIdentity(candidate).nameKey === sourceIdentity.nameKey);
  }
  if (!match) match = pairedInst.rooms[context.roomIndex] || null;
  return match || null;
}

function comparisonSelectionStats() {
  const reference = installations.find(inst => inst.rooms.length) || installations[0];
  const rooms = reference?.rooms || [];
  const selectedNames = rooms.filter(roomSelectedValue).map(currentRoomDisplayName).filter(Boolean);
  return { total: rooms.length, selected: selectedNames.length, names: selectedNames };
}

function comparisonScopeText() {
  const stats = comparisonSelectionStats();
  if (!stats.total) return '';
  if (stats.selected === 0) return t('compare_scope_none');
  if (stats.selected === stats.total) return t('compare_scope_all');
  const names = stats.names.slice(0, 4).join(', ');
  const namesSuffix = stats.names.length > 4 ? ' …' : '';
  const details = names ? ` ${t('compare_scope_selected')}: ${names}${namesSuffix}.` : '';
  return `${tpl('compare_scope_subset', { selected: stats.selected, total: stats.total })}${details}`;
}

function updateComparisonSelectionNote() {
  const text = comparisonScopeText();
  ['result-room-selection-note', 'rep-room-selection-note'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.textContent = text;
  });
}

function setRoomSelected(roomId, selected, options = {}) {
  const context = findRoomContext(roomId);
  if (!context) return;
  const nextValue = selected !== false;
  context.room.selected = nextValue;
  const checkbox = document.getElementById(`room-include-${roomId}`);
  if (checkbox) checkbox.checked = nextValue;
  if (options.sync !== false) {
    const pairedRoom = findPairedRoom(context);
    if (pairedRoom && pairedRoom.id !== roomId) {
      setRoomSelected(pairedRoom.id, nextValue, { sync: false, mark: false });
    }
  }
  updateComparisonSelectionNote();
  if (options.mark !== false) markDirty();
}

function onRoomSelectionChange(roomId, checked) {
  setRoomSelected(roomId, checked);
}

function fixedInstallationName(idx) {
  if (idx === 0) return t('default_inst_existing');
  if (idx === 1) return t('default_inst_new');
  return '';
}

function fixedInstallationNote(idx) {
  if (idx === 0) return t('default_inst_existing_note');
  if (idx === 1) return t('default_inst_new_note');
  return '';
}

function syncFixedInstallationNames() {
  installations.forEach((inst, idx) => {
    const fixed = fixedInstallationName(idx);
    if (fixed) inst.name = fixed;
  });
}

function uiIcon(name, extraClass = '') {
  return `<span class="ui-icon ${extraClass}" aria-hidden="true"><svg><use href="#icon-${name}"></use></svg></span>`;
}

const HELP_IMAGE_VERSION = '20260504-help-i18n';
const HELP_SECTIONS = [
  { id:'help-main', image:'manual-shot-01-start.png', imageAlt:'Huvudmeny med flikar, språk, marknad och fasta knappar', key:'main' },
  { id:'help-buttons', image:'manual-shot-02-import.png', imageAlt:'Importpanel och huvudknappar', key:'buttons' },
  { id:'help-input', image:'manual-shot-02-indata.png', imageAlt:'Indata med rum och armaturer', key:'input' },
  { id:'help-result', image:'manual-shot-03-resultat.png', imageAlt:'Resultatvy med antaganden, KPI och diagram', key:'result' },
  { id:'help-summary', image:'manual-shot-04-sammanfattning.png', imageAlt:'Sammanfattning och PDF-rapport', key:'summary' },
  { id:'help-winwin', image:'manual-shot-05-winwin.png', imageAlt:'Win/win-vy med affärsnytta och klimatnytta', key:'winwin' }
];
const HELP_MANUAL = {
  SE:{
    title:'Hjälp - användargränssnitt och navigation',
    intro:'Följ tjänsten från vänster till höger: Indata, Resultat, Sammanfattning och Win/win. Varje siffra i bilderna har en kort förklaring under bilden.',
    close:'Stäng hjälp',
    nav:{ main:'Huvudmeny', buttons:'Huvudknappar', input:'Indata', result:'Resultat', summary:'Sammanfattning', winwin:'Win/win' },
    sections:{
      main:{ title:'Sida 1. Huvudmeny och fasta knappar', items:[
        ['Spara, Ladda sparad kalkyl och Skriv ut','används när kalkylen ska sparas, öppnas igen eller skrivas ut som rapport.'],
        ['Flikar','använd dem från vänster till höger: Indata, Resultat, Sammanfattning, Win/win.'],
        ['Språkval','välj SE, NO, DE eller EN för gränssnitt och rapporttext.'],
        ['Marknad','väljer valuta och förvalda marknadsantaganden.'],
        ['Import','används för att läsa in offert och/eller ljusberäkning.'],
        ['Projektdata och kalkylförutsättningar','grundvärden som används i hela kalkylen.']
      ]},
      buttons:{ title:'Sida 2. Huvudmenyknapparnas funktion', items:[
        ['Importera underlag','välj PDF-filer från offert och/eller ljusberäkning.'],
        ['Befintlig installation utförd år','väljer antaget teknikår för befintlig installation.'],
        ['Antal armaturer hämtas från','välj om antal ska tas från offert eller DIALux.'],
        ['Hämta aktuell eltariff','hämtar aktuell elprisdata när hjälptjänsten körs.'],
        ['Återställ förval','återställer marknadens standardvärden.'],
        ['Teknikantagande','visar effektfaktor och underhållskostnad för befintlig installation.']
      ]},
      input:{ title:'Sida 3. Indata', items:[
        ['Installation','visar om du arbetar med Ny installation eller Befintlig installation.'],
        ['Ta med i jämförelse och rapport','styr om rummet ingår i beräkning och rapport.'],
        ['Rumsdata','fyll i rumsbeteckning, byggnadstyp, rumstyp, antal rum och yta.'],
        ['Armaturdata','fyll i armaturtyp, antal, pris, montering, effekt, styrning, reduktionsfaktor och underhåll.'],
        ['Lägg till eller ta bort','använd knapparna för att justera rum och armaturer.']
      ]},
      result:{ title:'Sida 4. Resultat', items:[
        ['Teknik- och kalkylantaganden','kontrollera teknikår, kalkylperiod, ränta, elpris, CO2-faktor och drifttid.'],
        ['KPI-kort','visar total LCC, besparing, återbetalningstid och CO2-skillnad.'],
        ['LCC per installation','jämför investerings-, energi- och underhållskostnader.'],
        ['Ackumulerad kostnad','visar kostnadsutveckling över kalkylperioden.'],
        ['Urval för jämförelse','visar om hela projektet eller valda rum ingår.']
      ]},
      summary:{ title:'Sida 5. Sammanfattning', items:[
        ['Sammanfattning','visar rapporten så som den ska granskas före PDF.'],
        ['Skriv ut','öppnar webbläsarens utskriftsdialog.'],
        ['Projektinformation','visar projekt, datum och handläggare i rapporten.'],
        ['Resultatsektion','visar kundens sammanfattade LCC-resultat.'],
        ['Layoutkontroll','kontrollera text, bilder, tabeller och diagram innan rapporten sparas.']
      ]},
      winwin:{ title:'Sida 6. Win/win', items:[
        ['Win/win','öppnar en mer sälj- och kundorienterad resultatvy.'],
        ['Huvudbudskap','sammanfattar nyttan med lägre kostnad och lägre klimatpåverkan.'],
        ['Nyckeltal','visar besparing, minskad energi och minskat klimatavtryck.'],
        ['Affärsnytta','kort text som kan användas i kunddialogen.'],
        ['Projekt och värdeerbjudande','visar vilket projekt sidan gäller och vilken nytta som lyfts.']
      ]}
    }
  },
  NO:{
    title:'Hjelp - brukergrensesnitt og navigasjon',
    intro:'Følg tjenesten fra venstre mot høyre: Inndata, Resultater, Sammendrag og Win/win. Hvert nummer i bildene har en kort forklaring under bildet.',
    close:'Lukk hjelp',
    nav:{ main:'Hovedmeny', buttons:'Hovedknapper', input:'Inndata', result:'Resultater', summary:'Sammendrag', winwin:'Win/win' },
    sections:{
      main:{ title:'Side 1. Hovedmeny og faste knapper', items:[
        ['Lagre, Last inn lagret kalkyle og Skriv ut','brukes når kalkylen skal lagres, åpnes igjen eller skrives ut som rapport.'],
        ['Faner','bruk dem fra venstre mot høyre: Inndata, Resultater, Sammendrag, Win/win.'],
        ['Språkvalg','velg SE, NO, DE eller EN for grensesnitt og rapporttekst.'],
        ['Marked','velger valuta og forhåndsvalgte markedsforutsetninger.'],
        ['Import','brukes for å lese inn tilbud og/eller lysberegning.'],
        ['Prosjektdata og beregningsforutsetninger','grunnverdier som brukes i hele kalkylen.']
      ]},
      buttons:{ title:'Side 2. Hovedknappenes funksjon', items:[
        ['Importer underlag','velg PDF-filer fra tilbud og/eller lysberegning.'],
        ['Eksisterende installasjon utført år','velger antatt teknologiår for eksisterende installasjon.'],
        ['Antall armaturer hentes fra','velg om antall skal tas fra tilbud eller DIALux.'],
        ['Hent aktuell strømtariff','henter aktuell strømpris når hjelpetjenesten kjører.'],
        ['Tilbakestill forvalg','tilbakestiller markedets standardverdier.'],
        ['Teknologiantakelse','viser effektfaktor og vedlikeholdskostnad for eksisterende installasjon.']
      ]},
      input:{ title:'Side 3. Inndata', items:[
        ['Installasjon','viser om du arbeider med Ny installasjon eller Eksisterende installasjon.'],
        ['Ta med i sammenligning og rapport','styrer om rommet inngår i beregning og rapport.'],
        ['Romdata','fyll inn rombetegnelse, bygningstype, romtype, antall rom og areal.'],
        ['Armaturdata','fyll inn armaturtype, antall, pris, montering, effekt, styring, reduksjonsfaktor og vedlikehold.'],
        ['Legg til eller fjern','bruk knappene for å justere rom og armaturer.']
      ]},
      result:{ title:'Side 4. Resultater', items:[
        ['Teknologi- og beregningsforutsetninger','kontroller teknologiår, beregningsperiode, rente, strømpris, CO2-faktor og driftstid.'],
        ['KPI-kort','viser total LCC, besparelse, tilbakebetalingstid og CO2-forskjell.'],
        ['LCC per installasjon','sammenligner investerings-, energi- og vedlikeholdskostnader.'],
        ['Akkumulert kostnad','viser kostnadsutvikling over beregningsperioden.'],
        ['Utvalg for sammenligning','viser om hele prosjektet eller valgte rom inngår.']
      ]},
      summary:{ title:'Side 5. Sammendrag', items:[
        ['Sammendrag','viser rapporten slik den skal kontrolleres før PDF.'],
        ['Skriv ut','åpner nettleserens utskriftsdialog.'],
        ['Prosjektinformasjon','viser prosjekt, dato og saksbehandler i rapporten.'],
        ['Resultatseksjon','viser kundens oppsummerte LCC-resultat.'],
        ['Layoutkontroll','kontroller tekst, bilder, tabeller og diagrammer før rapporten lagres.']
      ]},
      winwin:{ title:'Side 6. Win/win', items:[
        ['Win/win','åpner en mer salgs- og kundeorientert resultatvisning.'],
        ['Hovedbudskap','oppsummerer nytten med lavere kostnad og lavere klimaavtrykk.'],
        ['Nøkkeltall','viser besparelse, redusert energi og redusert klimaavtrykk.'],
        ['Forretningsnytte','kort tekst som kan brukes i kundedialogen.'],
        ['Prosjekt og verdiforslag','viser hvilket prosjekt siden gjelder og hvilken nytte som løftes frem.']
      ]}
    }
  },
  DE:{
    title:'Hilfe - Benutzeroberfläche und Navigation',
    intro:'Folgen Sie dem Dienst von links nach rechts: Eingabe, Ergebnis, Zusammenfassung und Win/win. Jede Nummer im Bild hat darunter eine kurze Erklärung.',
    close:'Hilfe schließen',
    nav:{ main:'Hauptmenü', buttons:'Hauptschaltflächen', input:'Eingabe', result:'Ergebnis', summary:'Zusammenfassung', winwin:'Win/win' },
    sections:{
      main:{ title:'Seite 1. Hauptmenü und feste Schaltflächen', items:[
        ['Speichern, Gespeicherte Kalkulation laden und Drucken','werden verwendet, um die Kalkulation zu speichern, erneut zu öffnen oder als Bericht zu drucken.'],
        ['Registerkarten','verwenden Sie sie von links nach rechts: Eingabe, Ergebnis, Zusammenfassung, Win/win.'],
        ['Sprachauswahl','wählen Sie SE, NO, DE oder EN für Oberfläche und Berichtstext.'],
        ['Markt','wählt Währung und voreingestellte Marktannahmen.'],
        ['Import','liest Angebot und/oder Lichtberechnung ein.'],
        ['Projektdaten und Berechnungsparameter','Grundwerte, die in der gesamten Kalkulation verwendet werden.']
      ]},
      buttons:{ title:'Seite 2. Funktion der Hauptschaltflächen', items:[
        ['Unterlagen importieren','PDF-Dateien aus Angebot und/oder Lichtberechnung auswählen.'],
        ['Bestehende Installation ausgeführt im Jahr','wählt das angenommene Technikjahr für die bestehende Installation.'],
        ['Leuchtenanzahl wird übernommen aus','wählen Sie, ob die Anzahl aus Angebot oder DIALux übernommen wird.'],
        ['Aktuellen Stromtarif abrufen','ruft aktuelle Strompreisdaten ab, wenn der Hilfsdienst läuft.'],
        ['Voreinstellung wiederherstellen','setzt die Standardwerte des Marktes zurück.'],
        ['Technikannahme','zeigt Leistungsfaktor und Wartungskosten der bestehenden Installation.']
      ]},
      input:{ title:'Seite 3. Eingabe', items:[
        ['Installation','zeigt, ob Sie mit Neuer Installation oder Bestehender Installation arbeiten.'],
        ['In Vergleich und Bericht einbeziehen','steuert, ob der Raum in Berechnung und Bericht enthalten ist.'],
        ['Raumdaten','Raumbezeichnung, Gebäudetyp, Raumtyp, Anzahl Räume und Fläche eingeben.'],
        ['Leuchtendaten','Leuchtentyp, Anzahl, Preis, Montage, Leistung, Steuerung, Reduktionsfaktor und Wartung eingeben.'],
        ['Hinzufügen oder Entfernen','verwenden Sie die Schaltflächen zum Anpassen von Räumen und Leuchten.']
      ]},
      result:{ title:'Seite 4. Ergebnis', items:[
        ['Technik- und Berechnungsannahmen','prüfen Sie Technikjahr, Berechnungszeitraum, Zinssatz, Strompreis, CO2-Faktor und Betriebszeit.'],
        ['KPI-Karten','zeigen Gesamt-LCC, Einsparung, Amortisationszeit und CO2-Differenz.'],
        ['LCC je Installation','vergleicht Investitions-, Energie- und Wartungskosten.'],
        ['Kumulierte Kosten','zeigt die Kostenentwicklung über den Berechnungszeitraum.'],
        ['Auswahl für den Vergleich','zeigt, ob das gesamte Projekt oder ausgewählte Räume enthalten sind.']
      ]},
      summary:{ title:'Seite 5. Zusammenfassung', items:[
        ['Zusammenfassung','zeigt den Bericht zur Prüfung vor dem PDF-Export.'],
        ['Drucken','öffnet den Druckdialog des Browsers.'],
        ['Projektinformation','zeigt Projekt, Datum und Bearbeiter im Bericht.'],
        ['Ergebnisbereich','zeigt das zusammengefasste LCC-Ergebnis des Kunden.'],
        ['Layoutprüfung','prüfen Sie Text, Bilder, Tabellen und Diagramme, bevor der Bericht gespeichert wird.']
      ]},
      winwin:{ title:'Seite 6. Win/win', items:[
        ['Win/win','öffnet eine stärker vertriebs- und kundenorientierte Ergebnisansicht.'],
        ['Hauptbotschaft','fasst den Nutzen niedrigerer Kosten und geringerer Klimaauswirkung zusammen.'],
        ['Kennzahlen','zeigen Einsparung, geringeren Energieverbrauch und geringere Klimaauswirkung.'],
        ['Geschäftsnutzen','kurzer Text für den Kundendialog.'],
        ['Projekt und Nutzenversprechen','zeigt, für welches Projekt die Seite gilt und welcher Nutzen hervorgehoben wird.']
      ]}
    }
  },
  EN:{
    title:'Help - user interface and navigation',
    intro:'Follow the service from left to right: Input, Results, Summary and Win/win. Each number in the images has a short explanation below the image.',
    close:'Close help',
    nav:{ main:'Main menu', buttons:'Main buttons', input:'Input', result:'Results', summary:'Summary', winwin:'Win/win' },
    sections:{
      main:{ title:'Page 1. Main menu and fixed buttons', items:[
        ['Save, Load saved calculation and Print','used when the calculation should be saved, opened again or printed as a report.'],
        ['Tabs','use them from left to right: Input, Results, Summary, Win/win.'],
        ['Language selection','choose SE, NO, DE or EN for the interface and report text.'],
        ['Market','selects currency and default market assumptions.'],
        ['Import','used to import a quotation and/or lighting calculation.'],
        ['Project data and calculation parameters','base values used throughout the calculation.']
      ]},
      buttons:{ title:'Page 2. Main button functions', items:[
        ['Import source data','select PDF files from quotation and/or lighting calculation.'],
        ['Existing installation year','selects the assumed technology year for the existing installation.'],
        ['Luminaire quantity is taken from','choose whether quantity should come from quotation or DIALux.'],
        ['Fetch current electricity tariff','fetches current electricity price data when the helper service is running.'],
        ['Reset preset values','restores the market default values.'],
        ['Technology assumption','shows power factor and maintenance cost for the existing installation.']
      ]},
      input:{ title:'Page 3. Input', items:[
        ['Installation','shows whether you are working with New installation or Existing installation.'],
        ['Include in comparison and report','controls whether the room is included in calculation and report.'],
        ['Room data','enter room designation, building type, room type, number of rooms and area.'],
        ['Luminaire data','enter luminaire type, quantity, price, installation, power, control, reduction factor and maintenance.'],
        ['Add or remove','use the buttons to adjust rooms and luminaires.']
      ]},
      result:{ title:'Page 4. Results', items:[
        ['Technology and calculation assumptions','check technology year, calculation period, rate, electricity price, CO2 factor and operating hours.'],
        ['KPI cards','show total LCC, saving, payback period and CO2 difference.'],
        ['LCC per installation','compares investment, energy and maintenance costs.'],
        ['Accumulated cost','shows cost development over the calculation period.'],
        ['Comparison scope','shows whether the full project or selected rooms are included.']
      ]},
      summary:{ title:'Page 5. Summary', items:[
        ['Summary','shows the report for review before PDF.'],
        ['Print','opens the browser print dialog.'],
        ['Project information','shows project, date and prepared by in the report.'],
        ['Results section','shows the customer’s summarized LCC result.'],
        ['Layout check','check text, images, tables and charts before saving the report.']
      ]},
      winwin:{ title:'Page 6. Win/win', items:[
        ['Win/win','opens a more sales- and customer-oriented results view.'],
        ['Main message','summarizes the value of lower cost and lower climate impact.'],
        ['Key figures','show saving, reduced energy and reduced climate impact.'],
        ['Business value','short text that can be used in the customer dialogue.'],
        ['Project and value proposition','shows which project the page refers to and which value is highlighted.']
      ]}
    }
  }
};

function escapeHtml(value) {
  return String(value ?? '').replace(/[&<>"']/g, ch => ({
    '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;'
  }[ch]));
}

function renderHelpManual() {
  const model = HELP_MANUAL[lang] || HELP_MANUAL.SE;
  const helpLang = HELP_MANUAL[lang] ? lang : 'SE';
  const title = document.getElementById('help-title');
  const intro = document.getElementById('help-intro');
  const closeBtn = document.getElementById('help-close-btn');
  const nav = document.getElementById('help-nav');
  const pages = document.getElementById('help-pages');
  if (!title || !intro || !nav || !pages) return;

  title.textContent = model.title;
  intro.textContent = model.intro;
  if (closeBtn) closeBtn.setAttribute('aria-label', model.close);
  nav.setAttribute('aria-label', model.nav.main);
  nav.innerHTML = HELP_SECTIONS.map(section =>
    `<a href="#${section.id}">${escapeHtml(model.nav[section.key])}</a>`
  ).join('');

  pages.innerHTML = HELP_SECTIONS.map(section => {
    const sectionText = model.sections[section.key];
    const items = sectionText.items.map(item =>
      `<li><strong>${escapeHtml(item[0])}:</strong> ${escapeHtml(item[1])}</li>`
    ).join('');
    const imageSrc = `Bilder/manual-i18n/${helpLang}/${section.image}?v=${HELP_IMAGE_VERSION}`;
    const fallbackSrc = `Bilder/${section.image}?v=${HELP_IMAGE_VERSION}`;
    return `
      <section class="help-page" id="${section.id}">
        <h3>${escapeHtml(sectionText.title)}</h3>
        <img src="${imageSrc}" alt="${escapeHtml(sectionText.title)}" loading="lazy" onerror="this.onerror=null;this.src='${fallbackSrc}'">
        <ol>${items}</ol>
      </section>`;
  }).join('');
}

function openHelpModal() {
  const modal = document.getElementById('help-modal');
  if (!modal) return;
  renderHelpManual();
  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
  modal.querySelector('.help-close')?.focus();
}

function closeHelpModal() {
  const modal = document.getElementById('help-modal');
  if (!modal) return;
  modal.classList.add('hidden');
  document.body.style.overflow = '';
}

document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && !document.getElementById('help-modal')?.classList.contains('hidden')) {
    closeHelpModal();
  }
});

document.addEventListener('click', event => {
  if (event.target && event.target.id === 'help-modal') closeHelpModal();
});

function setLang(l, options = {}) {
  if (options.syncPreset !== false) {
    const presetMap = { SE:'SE', NO:'NO', DE:'DE', EN:'EU' };
    const targetPreset = presetMap[l];
    if (targetPreset && targetPreset !== activePreset) {
      applyPreset(targetPreset);
      return;
    }
  }
  const savedInstallations = installations.length ? gatherState().installations : null;
  lang = l;
  document.querySelectorAll('.lang-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.langBtn === l);
  });
  syncFixedInstallationNames();
  applyTranslations();
  rebuildRoomDropdowns();
  renderInstallations();
  if (savedInstallations) restoreInstallationFields(savedInstallations);
  if (calcResults) calculate({ switchToResult: false });
}

function applyTranslations() {
  document.getElementById('h-subtitle').textContent = t('h_subtitle');
  updateCurrencyDisplay();
  document.querySelectorAll('[data-i]').forEach(el => { setDisplayText(el, t(el.getAttribute('data-i'))); });
  renderHelpManual();
  renderExistingYearOptions();
  renderImportCountSourceOptions();
  renderResultInstallFilterControls();
  renderLuminairePriceVisibility();
  updateExistingTechPreview();
  updateCurrencyDisplay();
  updateComparisonSelectionNote();
  applyTypographicOrphanProtection();
}

// ─── Regional presets ─────────────────────────────────────────────────────────
function applyPreset(code) {
  const previousPreset = activePreset;
  activePreset = code;
  document.querySelectorAll('.preset-btn').forEach(b => b.classList.remove('active'));
  const btn = document.getElementById(`preset-${code}`);
  if (btn) btn.classList.add('active');
  const p = PRESETS[code];
  if (!p) return;
  clearMarketFetchStatus();
  if (previousPreset !== code) convertMonetaryInputs(previousPreset, code);
  document.getElementById('p-elprice').value = p.elPrice;
  document.getElementById('p-pricechange').value = p.priceChange;
  document.getElementById('p-co2').value = p.co2;
  syncResultParamFields();
  updateCurrencyDisplay();
  const langMap = { SE: 'SE', NO: 'NO', DE: 'DE', EU: 'EN' };
  const targetLang = langMap[code];
  if (targetLang && targetLang !== lang) setLang(targetLang, { syncPreset: false });
  if (calcResults) calculate({ switchToResult: false });
  else markDirty();
}

function activeCurrencyPreset(code = activePreset) {
  return PRESETS[code] || PRESETS.SE;
}

function currencySymbol() {
  return activeCurrencyPreset().currencySymbol || activeCurrencyPreset().currency || t('currency');
}

function currencyKwhUnit() {
  return activeCurrencyPreset().currencyKwh || t('currency_kwh');
}

function currencyLocale() {
  return activeCurrencyPreset().locale || ({ SE:'sv-SE', NO:'nb-NO', DE:'de-DE', EN:'en-GB' }[lang] || 'sv-SE');
}

function exchangeRateFromSEK(code = activePreset) {
  return activeCurrencyPreset(code).exchangeRateFromSEK || 1;
}

function moneyFromSEK(value) {
  return roundMoney(value * exchangeRateFromSEK());
}

function roundMoney(value) {
  return Math.round((Number(value) || 0) * 100) / 100;
}

function formatMoneyFieldValue(value) {
  const rounded = roundMoney(value);
  return Math.abs(rounded - Math.round(rounded)) < 0.005 ? String(Math.round(rounded)) : rounded.toFixed(2);
}

function convertMonetaryInputs(fromPreset, toPreset) {
  const fromRate = exchangeRateFromSEK(fromPreset);
  const toRate = exchangeRateFromSEK(toPreset);
  if (!fromRate || !toRate || fromRate === toRate) return;
  const factor = toRate / fromRate;
  document.querySelectorAll('[id^="lum-price-"],[id^="lum-install-"],[id^="lum-maintenance-"]').forEach(el => {
    const current = parseImportedNumber(el.value);
    el.value = formatMoneyFieldValue(current * factor);
  });
  dirty = true;
}

function updateCurrencyDisplay() {
  ['currency-unit', 'result-currency-unit'].forEach(id => {
    const unit = document.getElementById(id);
    if (unit) unit.textContent = currencyKwhUnit();
  });
  const note = document.getElementById('result-currency-note');
  if (note) note.textContent = `${t('currency_region')}: ${activeCurrencyPreset().currency} (${currencySymbol()}) · ${t('exchange_rate')}: 1 SEK = ${fmt(exchangeRateFromSEK(), 4)} ${activeCurrencyPreset().currency}`;
}

function marketProxyBaseUrl() {
  const raw = String(window.LCC_MARKET_PROXY_URL || localStorage.getItem('lccMarketProxyUrl') || MARKET_PROXY_URL).trim();
  return raw.replace(/\/+$/, '');
}

function formatInputNumber(value, decimals = 2) {
  const n = Number(value);
  if (!Number.isFinite(n)) return '';
  return n.toFixed(decimals).replace(/\.?0+$/, '');
}

function formatLocalizedNumber(value, decimals = 2) {
  const n = Number(value);
  if (!Number.isFinite(n)) return '';
  return n.toLocaleString(currencyLocale(), {
    minimumFractionDigits: 0,
    maximumFractionDigits: decimals
  });
}

function activeMarketName(code = activePreset) {
  return t(`market_${code}`) || code;
}

async function refreshLatestElectricityAssumptions() {
  const market = activeMarketName();
  setImportStatus(tpl('import_market_fetch_loading', { market }), '', 'market');
  try {
    const response = await fetch(`${marketProxyBaseUrl()}/api/market-assumptions?preset=${encodeURIComponent(activePreset)}`, {
      headers: { Accept: 'application/json' }
    });
    let payload = null;
    try {
      payload = await response.json();
    } catch (_) {
      payload = null;
    }
    if (!response.ok) {
      throw new Error(payload?.error || `HTTP ${response.status}`);
    }

    const elPrice = Number(payload?.elPrice);
    const priceChangePct = Number(payload?.priceChangePct);
    if (!Number.isFinite(elPrice) || !Number.isFinite(priceChangePct)) {
      throw new Error('Ogiltigt svar från marknadstjänsten.');
    }

    sv('p-elprice', formatInputNumber(elPrice, 3));
    sv('p-pricechange', formatInputNumber(priceChangePct, 2));
    syncResultParamFields();
    markDirty();

    const statusMessage = tpl('import_market_fetch_success', {
      market,
      source: payload?.source || 'Nord Pool Data Portal',
      area: payload?.deliveryArea || activePreset,
      date: payload?.latestDeliveryDate || '',
      price: `${formatLocalizedNumber(elPrice, 3)} ${currencyKwhUnit()}`,
      change: `${formatLocalizedNumber(priceChangePct, 2)} %`
    });
    const note = payload?.noteKey ? ` ${t(payload.noteKey)}` : '';
    setImportStatus(`${statusMessage}${note}`, 'ok', 'market');
  } catch (err) {
    const message = String(err?.message || err || '');
    if (/Failed to fetch|NetworkError|Load failed|fetch/i.test(message)) {
      setImportStatus(t('import_market_fetch_proxy_missing'), 'error', 'market');
      return;
    }
    setImportStatus(tpl('import_market_fetch_failed', { market, error: message }), 'error', 'market');
  }
}

function restorePresetCalculationAssumptions() {
  const preset = activeCurrencyPreset();
  const market = activeMarketName();
  sv('p-years', CALC_DEFAULTS.years);
  sv('p-rate', CALC_DEFAULTS.rate);
  sv('p-elprice', formatInputNumber(preset.elPrice, 3));
  sv('p-pricechange', formatInputNumber(preset.priceChange, 2));
  sv('p-co2', formatInputNumber(preset.co2, 3));
  sv('p-ophours', CALC_DEFAULTS.opHours);
  syncResultParamFields();
  updateCurrencyDisplay();
  if (calcResults) calculate({ switchToResult: false });
  else markDirty();
  setImportStatus(tpl('import_market_reset_done', { market }), 'ok', 'market');
}

// ─── Init ─────────────────────────────────────────────────────────────────────
function init() {
  resetToEmptyInput({ markDirty: false });
  applyTranslations();
  renderResultInstallFilterControls();
  switchTab('input');
}

function resetToEmptyInput(options = {}) {
  const shouldMarkDirty = options.markDirty !== false;
  clearRememberedImport();
  sv('proj-name', '');
  sv('proj-date', new Date().toISOString().split('T')[0]);
  sv('proj-contact', '');
  clearResultsState();
  resultInstallFilter = 'both';
  renderResultInstallFilterControls();
  installations = [];
  instCounter = 0; roomCounter = 0; lumCounter = 0;
  addInstallation();
  addInstallation();
  updateComparisonSelectionNote();
  if (options.hideImportStatus !== false) hideImportStatus();
  dirty = shouldMarkDirty;
}

// ─── Testprojekt: Lövängsskolan ───────────────────────────────────────────────
// Befintlig: 20 år gammal T5/T8-teknik utan styrning.
// Ny: Aura Light LED (www.auralight.com) med integrerad närvaro-/dagsljusstyrning.
// 11 rum fördelade på 6 klassrum + 2 grupprum + 1 korridor + 1 matsal + 1 personalrum.
function loadLovangsskolan() {
  document.getElementById('proj-name').value = '';
  document.getElementById('proj-contact').value = '';

  installations = [];
  instCounter = 0; roomCounter = 0; lumCounter = 0;

  const existingRooms = [
    { name:'Klassrum',    bKey:'SKOLA', rKey:'Klassrum',             count:6, sqm:60,
      lum:{ label:'T5 2×36W (2006)',  count:8,  price:0, install:0, power:78, ctrl:'none', rf:1, maint:120 } },
    { name:'Grupprum',    bKey:'SKOLA', rKey:'Grupprum',             count:2, sqm:15,
      lum:{ label:'T8 1×36W (2006)',  count:3,  price:0, install:0, power:45, ctrl:'none', rf:1, maint:80  } },
    { name:'Korridor',    bKey:'SKOLA', rKey:'Korridor',             count:1, sqm:80,
      lum:{ label:'T8 2×36W (2006)',  count:20, price:0, install:0, power:78, ctrl:'none', rf:1, maint:150 } },
    { name:'Matsal',      bKey:'SKOLA', rKey:'Matsal',               count:1, sqm:70,
      lum:{ label:'T5 2×28W (2006)',  count:14, price:0, install:0, power:62, ctrl:'none', rf:1, maint:120 } },
    { name:'Personalrum', bKey:'SKOLA', rKey:'Personalrum < 30 kvm', count:1, sqm:25,
      lum:{ label:'T8 2×36W (2006)',  count:4,  price:0, install:0, power:78, ctrl:'none', rf:1, maint:80  } },
  ];

  const newRooms = [
    { name:'Klassrum',    bKey:'SKOLA', rKey:'Klassrum',             count:6, sqm:60,
      lum:{ label:'Aura PureLine LED', count:8,  price:2200, install:400, power:32, ctrl:'daylight', maint:15 } },
    { name:'Grupprum',    bKey:'SKOLA', rKey:'Grupprum',             count:2, sqm:15,
      lum:{ label:'Aura PureLine LED', count:3,  price:1800, install:400, power:28, ctrl:'presence', maint:15 } },
    { name:'Korridor',    bKey:'SKOLA', rKey:'Korridor',             count:1, sqm:80,
      lum:{ label:'Aura Runner LED',   count:20, price:1400, install:300, power:20, ctrl:'presence', maint:10 } },
    { name:'Matsal',      bKey:'SKOLA', rKey:'Matsal',               count:1, sqm:70,
      lum:{ label:'Aura Notor LED',    count:14, price:2000, install:400, power:32, ctrl:'presence', maint:15 } },
    { name:'Personalrum', bKey:'SKOLA', rKey:'Personalrum < 30 kvm', count:1, sqm:25,
      lum:{ label:'Aura PureLine LED', count:4,  price:1800, install:400, power:28, ctrl:'presence', maint:15 } },
  ];

  addInstallation();
  addInstallation();
  populateTestInstallation(installations[0].id, existingRooms);
  populateTestInstallation(installations[1].id, newRooms);
}

function populateTestInstallation(instId, roomSpecs) {
  const inst = installations.find(i => i.id === instId);
  if (!inst) return;
  roomSpecs.forEach(spec => {
    addRoom(instId); // pushes room + 1 default luminaire
    const room = inst.rooms[inst.rooms.length - 1];
    room.buildingKey = spec.bKey;
    room.roomKey = spec.rKey;
    // Room DOM
    const nameEl = document.getElementById(`room-name-${room.id}`);
    if (nameEl) nameEl.value = spec.name;
    const bEl = document.getElementById(`room-btype-${room.id}`);
    if (bEl) bEl.value = spec.bKey;
    const rEl = document.getElementById(`room-rtype-${room.id}`);
    if (rEl) { rEl.innerHTML = roomOptions(spec.bKey); rEl.value = spec.rKey; }
    const cEl = document.getElementById(`room-count-${room.id}`);
    if (cEl) cEl.value = spec.count;
    const sEl = document.getElementById(`room-sqm-${room.id}`);
    if (sEl) sEl.value = spec.sqm;
    // Luminaire DOM (single luminaire auto-added by addRoom→addLuminaire)
    const lum = room.luminaires[0];
    const L = spec.lum;
    const setVal = (id, v) => { const e = document.getElementById(id); if (e) e.value = v; };
    setVal(`lum-label-${lum.id}`,       L.label);
    setVal(`lum-count-${lum.id}`,       L.count);
    setVal(`lum-price-${lum.id}`,       L.price);
    setVal(`lum-install-${lum.id}`,     L.install);
    setVal(`lum-power-${lum.id}`,       L.power);
    setVal(`lum-ctrl-${lum.id}`,        L.ctrl);
    setVal(`lum-maintenance-${lum.id}`, L.maint);
    if (L.rf !== undefined) {
      setVal(`lum-reduction-${lum.id}`, L.rf);
    } else {
      const rd = BUILDINGS[spec.bKey]?.rooms.find(r => r.key === spec.rKey);
      if (rd) updateReductionFromCtrl(room.id, lum.id, rd);
    }
  });
}

// ─── PDF import: DIALux lighting calculation + Aura Light quotation ──────────
const IMPORT_DEFAULT_INSTALL_COST = 0;
const IMPORT_DEFAULT_NEW_MAINTENANCE = 0;
const IMPORT_COUNT_SOURCE_SELECT_ID = 'import-count-source';
const EXISTING_TECH_PRESETS = [
  { year:1995, powerFactor:2.4, maintenance:140, label:{SE:'T8 med konventionellt driftdon', NO:'T8 med konvensjonelt forkoblingsutstyr', DE:'T8 mit konventionellem Vorschaltgerät', EN:'T8 with magnetic ballast'} },
  { year:2000, powerFactor:2.1, maintenance:120, label:{SE:'T8 HF utan styrning', NO:'T8 HF uten styring', DE:'T8 HF ohne Steuerung', EN:'T8 HF without controls'} },
  { year:2006, powerFactor:1.8, maintenance:100, label:{SE:'T5/T8 HF utan styrning', NO:'T5/T8 HF uten styring', DE:'T5/T8 HF ohne Steuerung', EN:'T5/T8 HF without controls'} },
  { year:2010, powerFactor:1.55, maintenance:80, label:{SE:'T5 HF utan styrning', NO:'T5 HF uten styring', DE:'T5 HF ohne Steuerung', EN:'T5 HF without controls'} },
  { year:2015, powerFactor:1.35, maintenance:35, label:{SE:'tidig LED utan avancerad styrning', NO:'tidlig LED uten avansert styring', DE:'frühe LED ohne erweiterte Steuerung', EN:'early LED without advanced controls'} },
  { year:2020, powerFactor:1.15, maintenance:20, label:{SE:'äldre LED-lösning', NO:'eldre LED-løsning', DE:'ältere LED-Lösung', EN:'older LED solution'} },
];
const EXISTING_YEAR_SELECT_IDS = ['import-existing-year'];
const EXISTING_TECH_PREVIEW_IDS = ['import-existing-tech'];

function defaultImportDocKinds() {
  return { offer:true, report:true };
}

function isOfferDocText(text) {
  return /Offertradens godsmärke|Offertnummer|Quote row['’]?s goods label|Quote number|Part no\.|Price each/i.test(text || '');
}

function isLightingDocText(text) {
  const source = text || '';
  const hasLuminaireList = /Armaturlista|Liste over armaturer/i.test(source);
  const hasDialuxStructure = /Användarprofil|Brugerprofil|Created with DIALux|Beräkningsplan|Beregningsobjekt|Ljusscen|Lysscene|Register|Indeks|Ljusberäkning|Lysberegning/i.test(source);
  const hasReportTitle = /_Rapport|Kontaktpersoner|Kontakter|Head of Light Design/i.test(source);
  return hasLuminaireList && (hasDialuxStructure || hasReportTitle);
}

function detectImportDocKinds(docs) {
  return {
    offer: docs.some(doc => isOfferDocText(doc.text)),
    report: docs.some(doc => isLightingDocText(doc.text))
  };
}

function resolveImportCountSource(value, docKinds = defaultImportDocKinds()) {
  if (docKinds.offer && !docKinds.report) return 'offer';
  if (!docKinds.offer && docKinds.report) return 'dialux';
  return value === 'dialux' ? 'dialux' : 'offer';
}

function selectedImportCountSource() {
  const select = document.getElementById(IMPORT_COUNT_SOURCE_SELECT_ID);
  return resolveImportCountSource(select?.value || 'offer', lastImportedDocs ? lastImportedDocKinds : defaultImportDocKinds());
}

function setImportCountSource(value, docKinds = null) {
  const select = document.getElementById(IMPORT_COUNT_SOURCE_SELECT_ID);
  if (!select) return;
  select.value = resolveImportCountSource(value, docKinds || (lastImportedDocs ? lastImportedDocKinds : defaultImportDocKinds()));
}

function renderImportCountSourceOptions(docKinds = null) {
  const select = document.getElementById(IMPORT_COUNT_SOURCE_SELECT_ID);
  if (!select) return;
  const sourceKinds = docKinds || (lastImportedDocs ? lastImportedDocKinds : defaultImportDocKinds());
  const previous = select.value || 'offer';
  const options = [
    { value:'offer',  label:t('import_count_offer'),  disabled: !sourceKinds.offer },
    { value:'dialux', label:t('import_count_dialux'), disabled: !sourceKinds.report }
  ];
  select.innerHTML = options.map(option =>
    `<option value="${option.value}"${option.disabled ? ' disabled' : ''}>${option.label}</option>`
  ).join('');
  setImportCountSource(previous, sourceKinds);
}

function rememberImportedDocs(docs) {
  lastImportedDocs = docs.map(doc => ({ name: doc.name, text: doc.text }));
  lastImportedDocKinds = detectImportDocKinds(lastImportedDocs);
  renderImportCountSourceOptions(lastImportedDocKinds);
}

function importDocKind(doc) {
  if (isOfferDocText(doc?.text)) return 'offer';
  if (isLightingDocText(doc?.text)) return 'report';
  return 'unknown';
}

function mergeImportedDocs(previousDocs = [], incomingDocs = []) {
  const incomingKinds = new Set(incomingDocs.map(importDocKind).filter(kind => kind !== 'unknown'));
  const incomingNames = new Set(incomingDocs.map(doc => doc.name).filter(Boolean));
  const keptPrevious = (previousDocs || []).filter(doc => {
    const kind = importDocKind(doc);
    if (doc.name && incomingNames.has(doc.name)) return false;
    return !incomingKinds.has(kind);
  });
  return [...keptPrevious, ...incomingDocs].map(doc => ({ name: doc.name, text: doc.text }));
}

function clearRememberedImport() {
  lastImportedDocs = null;
  lastImportedDocKinds = { offer:false, report:false };
  renderImportCountSourceOptions(defaultImportDocKinds());
}

function promptImportCountSource(docKinds) {
  if (!(docKinds.offer && docKinds.report)) return resolveImportCountSource(selectedImportCountSource(), docKinds);
  const useOffer = confirm(t('import_count_prompt'));
  const selected = useOffer ? 'offer' : 'dialux';
  setImportCountSource(selected, docKinds);
  return selected;
}

function importCountSourceLabel(value) {
  return value === 'dialux' ? t('import_count_dialux') : t('import_count_offer');
}

function localizedTechLabel(tech) {
  return (tech.label && (tech.label[lang] || tech.label.SE)) || '';
}

function defaultExistingYear() {
  const currentYear = new Date().getFullYear();
  return EXISTING_TECH_PRESETS.some(item => item.year === currentYear - 20) ? currentYear - 20 : 2006;
}

function existingYearValue() {
  const selected = EXISTING_YEAR_SELECT_IDS
    .map(id => document.getElementById(id)?.value)
    .find(Boolean);
  return selected || String(defaultExistingYear());
}

function setExistingYearValue(year) {
  const value = String(year || defaultExistingYear());
  EXISTING_YEAR_SELECT_IDS.forEach(id => {
    const select = document.getElementById(id);
    if (select) select.value = value;
  });
}

function renderExistingYearOptions() {
  const saved = existingYearValue();
  const value = EXISTING_TECH_PRESETS.some(tech => String(tech.year) === saved) ? saved : String(defaultExistingYear());
  const options = EXISTING_TECH_PRESETS.map(tech =>
    `<option value="${tech.year}">${tech.year} - ${localizedTechLabel(tech)}</option>`
  ).join('');
  EXISTING_YEAR_SELECT_IDS.forEach(id => {
    const select = document.getElementById(id);
    if (!select) return;
    select.innerHTML = options;
    select.value = value;
  });
}

function selectedExistingTechnology() {
  const year = parseInt(existingYearValue(), 10);
  return EXISTING_TECH_PRESETS.find(tech => tech.year === year) ||
    EXISTING_TECH_PRESETS.find(tech => tech.year === defaultExistingYear()) ||
    EXISTING_TECH_PRESETS[0];
}

function updateExistingTechPreview() {
  const tech = selectedExistingTechnology();
  setExistingYearValue(tech.year);
  const text = `${t('import_existing_preview')}: ${localizedTechLabel(tech)} (${t('import_existing_factor')} ${formatImportFactor(tech.powerFactor)}x, ${t('import_existing_maint')} ${formatMoney(moneyFromSEK(tech.maintenance))}/${t('import_per_year')})`;
  EXISTING_TECH_PREVIEW_IDS.forEach(id => {
    const el = document.getElementById(id);
    if (el) el.textContent = text;
  });
  updateCurrencyDisplay();
}

function onExistingYearChange(value) {
  setExistingYearValue(value);
  updateExistingTechPreview();
  const updatedExisting = updateExistingInstallationTechnology(selectedExistingTechnology());
  if (updatedExisting && calcResults) {
    calculate({ switchToResult: false });
  } else {
    markDirty();
  }
}

function formatImportFactor(value) {
  const text = String(value);
  return lang === 'EN' ? text : text.replace('.', ',');
}

function updateExistingInstallationTechnology(tech) {
  const existing = installations[0];
  const current = installations[1];
  if (!existing || !current || !existing.rooms.length || !current.rooms.length) return false;
  if (existing.rooms.length !== current.rooms.length) return false;

  const currentState = gatherState().installations?.[1];
  if (!currentState || !currentState.rooms.length) return false;
  if (currentState.rooms.some((room, idx) => !existing.rooms[idx] || room.luminaires.length !== existing.rooms[idx].luminaires.length)) return false;

  currentState.rooms.forEach((sourceRoom, roomIdx) => {
    const targetRoom = existing.rooms[roomIdx];
    targetRoom.buildingKey = sourceRoom.buildingKey;
    targetRoom.roomKey = sourceRoom.roomKey;

    sv(`room-name-${targetRoom.id}`, sourceRoom.name);
    sv(`room-count-${targetRoom.id}`, sourceRoom.count);
    sv(`room-sqm-${targetRoom.id}`, sourceRoom.sqm);
    const bEl = document.getElementById(`room-btype-${targetRoom.id}`);
    const rEl = document.getElementById(`room-rtype-${targetRoom.id}`);
    if (bEl) bEl.value = sourceRoom.buildingKey;
    if (rEl) {
      rEl.innerHTML = roomOptions(sourceRoom.buildingKey);
      rEl.value = sourceRoom.roomKey;
    }

    sourceRoom.luminaires.forEach((sourceLum, lumIdx) => {
      const targetLum = targetRoom.luminaires[lumIdx];
      if (!targetLum) return;
      const label = sourceLum.label ? ` - ${sourceLum.label}` : '';
      sv(`lum-label-${targetLum.id}`, `${tech.year} ${localizedTechLabel(tech)}${label}`);
      sv(`lum-count-${targetLum.id}`, sourceLum.count);
      sv(`lum-price-${targetLum.id}`, 0);
      sv(`lum-install-${targetLum.id}`, 0);
      sv(`lum-power-${targetLum.id}`, Math.round(sourceLum.power * tech.powerFactor * 10) / 10);
      sv(`lum-ctrl-${targetLum.id}`, 'none');
      sv(`lum-reduction-${targetLum.id}`, 1);
      sv(`lum-maintenance-${targetLum.id}`, moneyFromSEK(tech.maintenance));
    });
  });
  return true;
}

function importProjectData() {
  const input = document.createElement('input');
  input.type = 'file';
  input.accept = '.pdf,application/pdf';
  input.multiple = true;
  input.onchange = e => handleImportFiles(Array.from(e.target.files || []));
  input.click();
}

async function handleImportFiles(files) {
  const pdfFiles = files.filter(file => /\.pdf$/i.test(file.name));
  if (!pdfFiles.length) {
    setImportStatus('Välj minst en PDF-fil för import.', 'error');
    return;
  }
  if (!window.pdfjsLib) {
    setImportStatus('PDF-läsaren kunde inte laddas. Kontrollera internetanslutningen och försök igen.', 'error');
    return;
  }

  try {
    setImportStatus(`Läser ${pdfFiles.length} PDF-fil(er)...`);
    const docs = [];
    for (const file of pdfFiles) {
      docs.push({ name: file.name, text: await extractPdfText(file) });
    }
    const hadRememberedDocs = Boolean(lastImportedDocs && lastImportedDocs.length);
    const combinedDocs = hadRememberedDocs ? mergeImportedDocs(lastImportedDocs, docs) : docs;
    const docKinds = detectImportDocKinds(combinedDocs);
    rememberImportedDocs(combinedDocs);
    const countSource = promptImportCountSource(docKinds);
    const model = buildPdfImportModel(combinedDocs, { countSource });
    if (!model.rooms.length) {
      setImportStatus('Importen hittade inga rum eller armaturer som kunde mappas från PDF-underlaget.', 'error');
      return;
    }
    const hasExistingInput = installations.some(inst => inst.rooms && inst.rooms.length);
    if (hasExistingInput && !hadRememberedDocs && !confirm('Importen ersätter nuvarande indata i kalkylen. Vill du fortsätta?')) {
      setImportStatus('Importen avbröts.');
      return;
    }
    applyImportModel(model, { mode: 'import' });
  } catch (err) {
    console.error(err);
    setImportStatus(`Importen misslyckades: ${err.message || err}`, 'error');
  }
}

function setImportStatus(message, type = '', kind = 'generic') {
  const el = document.getElementById('import-status');
  if (!el) return;
  el.classList.remove('hidden', 'ok', 'error');
  if (type) el.classList.add(type);
  el.dataset.kind = kind;
  el.textContent = message;
}

function hideImportStatus() {
  const el = document.getElementById('import-status');
  if (!el) return;
  el.textContent = '';
  el.classList.remove('ok', 'error');
  el.classList.add('hidden');
  delete el.dataset.kind;
}

function clearMarketFetchStatus() {
  const el = document.getElementById('import-status');
  if (!el || el.dataset.kind !== 'market') return;
  hideImportStatus();
}

function clearImportedData() {
  if (!confirm(t('clear_import_confirm'))) return;
  clearProjectAndInstallations();
  setImportStatus(t('import_cleared'), 'ok');
}

function clearProjectAndInstallations() {
  resetToEmptyInput({ markDirty: true, hideImportStatus: false });
  switchTab('input');
}

function onImportCountSourceChange(value) {
  setImportCountSource(value);
  if (!lastImportedDocs || !lastImportedDocs.length) return;
  try {
    const model = buildPdfImportModel(lastImportedDocs, { countSource: selectedImportCountSource() });
    if (!model.rooms.length) {
      setImportStatus('Det gick inte att bygga om importen med valt underlag för antal.', 'error');
      return;
    }
    applyImportModel(model, { mode: 'reapply' });
  } catch (err) {
    console.error(err);
    setImportStatus(`Kunde inte uppdatera importen: ${err.message || err}`, 'error');
  }
}

function clearResultsState() {
  Object.values(charts).forEach(chart => {
    if (chart && typeof chart.destroy === 'function') chart.destroy();
  });
  charts = {};
  calcResults = null;
  const kpi = document.getElementById('kpi-cards');
  if (kpi) kpi.innerHTML = '';
  const table = document.getElementById('result-table');
  if (table) {
    const thead = table.querySelector('thead tr');
    const tbody = table.querySelector('tbody');
    if (thead) thead.innerHTML = '';
    if (tbody) tbody.innerHTML = '';
  }
}

function applyImportModel(model, options = {}) {
  applyImportedProject(model);
  const statusPrefix = options.mode === 'reapply' ? 'Importen uppdaterades.' : 'Import klar';
  const countSourceLine = model.docKinds.offer && model.docKinds.report
    ? `\n${t('import_count_source')}: ${importCountSourceLabel(model.countSource)}.`
    : '';
  const sourceModeLine = model.importMode === 'offer-only'
    ? '\nEndast offert hittades. Projekt- och armaturdata importerades efter bästa förmåga. Rum skapades som generiska importposter eftersom DIALux-underlag saknas.'
    : model.importMode === 'dialux-only'
      ? '\nEndast DIALux hittades. Rum, armaturtyp, effekt och antal importerades efter bästa förmåga. Armaturpriser sattes till 0 eftersom offert saknas.'
      : '';
  const missingPrices = model.missingPrices.length ? `\nSaknade prisrader i offerten: ${model.missingPrices.join(', ')}.` : '';
  setImportStatus(
    `${statusPrefix} ${model.rooms.length} rumstyper, ${model.luminaireRows} armatur-rader och ${model.priceRows} prisrader.` +
    `\nBefintlig installation skapades med ${model.existingTechnology.year} (${localizedTechLabel(model.existingTechnology)}): samma rum och antal armaturer, ingen styrning och ${formatImportFactor(model.existingTechnology.powerFactor)}x ny effekt.` +
    countSourceLine +
    sourceModeLine +
    missingPrices,
    'ok'
  );
  calculate({ switchToResult: false });
}

async function extractPdfText(file) {
  const data = new Uint8Array(await file.arrayBuffer());
  const pdf = await pdfjsLib.getDocument({ data }).promise;
  const pages = [];
  for (let pageNo = 1; pageNo <= pdf.numPages; pageNo++) {
    const page = await pdf.getPage(pageNo);
    const content = await page.getTextContent({ normalizeWhitespace: true });
    pages.push(pdfPageText(content.items));
  }
  return pages.join('\n\f\n');
}

function pdfPageText(items) {
  const sorted = items
    .filter(item => item.str && item.str.trim())
    .map(item => ({ str: item.str, x: item.transform[4], y: item.transform[5] }))
    .sort((a, b) => Math.abs(b.y - a.y) > 2.5 ? b.y - a.y : a.x - b.x);

  const lines = [];
  sorted.forEach(item => {
    const last = lines[lines.length - 1];
    if (last && Math.abs(last.y - item.y) <= 2.5) {
      last.parts.push(item);
    } else {
      lines.push({ y: item.y, parts: [item] });
    }
  });

  return lines.map(line => line.parts
    .sort((a, b) => a.x - b.x)
    .map(part => part.str)
    .join(' ')
    .replace(/\s+/g, ' ')
    .trim()
  ).filter(Boolean).join('\n');
}

function buildPdfImportModel(docs, options = {}) {
  const docKinds = detectImportDocKinds(docs);
  const allText = docs.map(doc => doc.text).join('\n');
  const offerText = docs
    .filter(doc => isOfferDocText(doc.text))
    .map(doc => doc.text)
    .join('\n');
  const lightingText = docs
    .filter(doc => isLightingDocText(doc.text))
    .map(doc => doc.text)
    .join('\n') || (!docKinds.offer ? allText : '');

  const offer = offerText ? parseAuraOffer(offerText) : { prices:{}, project:'', date:'', contact:'' };
  const report = lightingText ? parseDialuxReport(lightingText) : { project:'', date:'', contact:'', rooms:[] };
  const existingTechnology = selectedExistingTechnology();
  const countSource = resolveImportCountSource(options.countSource || selectedImportCountSource(), docKinds);
  if (countSource === 'offer' && report.rooms.length) {
    applyOfferCountAllocation(report.rooms, offer.prices);
  }
  const rooms = report.rooms.length
    ? report.rooms.map(room => enrichImportedRoom(room, offer.prices, existingTechnology, countSource))
    : buildOfferOnlyRooms(offer.prices, existingTechnology);
  const missingPrices = docKinds.offer ? [...new Set(rooms.flatMap(room =>
    room.newLuminaires
      .filter(lum => lum.register && lum.price === 0)
      .map(lum => lum.register)
  ))].sort() : [];
  const importMode = report.rooms.length ? (docKinds.offer ? 'both' : 'dialux-only') : (Object.keys(offer.prices).length ? 'offer-only' : 'none');

  return {
    project: {
      name: offer.project || report.project || document.getElementById('proj-name')?.value || 'Importerat projekt',
      date: offer.date || report.date || document.getElementById('proj-date')?.value || new Date().toISOString().split('T')[0],
      contact: offer.contact || report.contact || document.getElementById('proj-contact')?.value || ''
    },
    rooms,
    luminaireRows: rooms.reduce((sum, room) => sum + room.newLuminaires.length, 0),
    priceRows: Object.keys(offer.prices).length,
    missingPrices,
    existingTechnology,
    countSource,
    docKinds,
    importMode
  };
}

function buildOfferOnlyRooms(prices, existingTechnology) {
  const rows = Object.entries(prices).sort(sortOfferEntries);
  if (!rows.length) return [];
  const bKey = 'KONTOR';
  const rKey = 'Storkontor > 12 kvm';
  const newLuminaires = rows.map(([register, row]) => {
    const label = cleanImportText(row.label || row.partNo || register);
    const lookupText = cleanImportText(`${label} ${row.partNo || ''}`);
    const ctrl = row.ctrl || inferOfferControl(lookupText);
    return {
      register,
      partNo: row.partNo || '',
      position: row.position || '',
      label,
      count: row.quantity || 0,
      price: moneyFromSEK(row.price),
      install: IMPORT_DEFAULT_INSTALL_COST,
      power: row.power || inferOfferPower(lookupText),
      ctrl,
      reduction: reductionForControl(bKey, rKey, ctrl),
      maintenance: IMPORT_DEFAULT_NEW_MAINTENANCE
    };
  });

  return [{
    name: quoteOnlyRoomName(),
    bKey,
    rKey,
    count: 1,
    sqm: 0,
    newLuminaires,
    existingLuminaires: newLuminaires.map(lum => ({
      label: `${existingTechnology.year} ${localizedTechLabel(existingTechnology)} - ${lum.label}`,
      count: lum.count,
      price: 0,
      install: 0,
      power: lum.power ? Math.round(lum.power * existingTechnology.powerFactor * 10) / 10 : 0,
      ctrl: 'none',
      reduction: 1,
      maintenance: moneyFromSEK(existingTechnology.maintenance)
    }))
  }];
}

function parseAuraOffer(text) {
  const prices = {};
  const normalized = normalizeLineText(text);
  const layoutRows = parseLayoutAuraQuoteRows(normalized);
  Object.entries(layoutRows).forEach(([register, row]) => {
    prices[register] = mergeOfferRow(prices[register], row);
  });

  const separatedRows = parseSeparatedAuraQuoteRows(normalized);
  Object.entries(separatedRows).forEach(([register, row]) => {
    prices[register] = mergeOfferRow(prices[register], row);
  });

  const englishRows = parseEnglishAuraQuoteRows(normalized);
  Object.entries(englishRows).forEach(([register, row]) => {
    prices[register] = mergeOfferRow(prices[register], row);
  });

  const lines = normalized.split('\n').map(line => line.trim()).filter(Boolean);
  const qtyNum = '\\d{1,4},\\d{2}';
  const moneyNum = '\\d{1,3}(?:\\s\\d{3})*,\\d{2}';
  const rowLineRe = new RegExp(`^\\d+\\s+\\S+\\s+(.+?)\\s+(${qtyNum})\\s+st\\s+(${moneyNum})\\s+(${moneyNum})$`, 'i');
  for (let i = 0; i < lines.length; i++) {
    const marker = lines[i].match(/^Offertradens godsmärke:\s*([^\n]+)/i);
    if (!marker) continue;
    const register = normalizeImportRegister(marker[1]);
    if (!/^L\d+S?$/i.test(register)) continue;

    let rowLineIndex = -1;
    let rowMatch = null;
    for (let j = i - 1; j >= Math.max(0, i - 6); j--) {
      const match = lines[j].match(rowLineRe);
      if (match) {
        rowLineIndex = j;
        rowMatch = match;
        break;
      }
    }
    if (rowLineIndex < 0 || !rowMatch) continue;

    const designationLines = [cleanImportText(rowMatch[1])];
    for (let j = rowLineIndex + 1; j < i; j++) {
      designationLines.push(cleanImportText(lines[j]));
    }

    prices[register] = mergeOfferRow(prices[register], {
      quantity: parseImportedNumber(rowMatch[2]),
      price: parseImportedNumber(rowMatch[3]),
      label: cleanImportText(designationLines.join(' ')),
      power: inferOfferPower(designationLines.join(' ')),
      ctrl: inferOfferControl(designationLines.join(' '))
    });
  }

  return {
    prices,
    project: parseOfferProject(normalized),
    date: parseOfferDate(normalized),
    contact: parseOfferContact(normalized)
  };
}

function parseLayoutAuraQuoteRows(text) {
  const prices = {};
  const lines = normalizeLineText(text).split('\n').map(line => cleanImportText(line)).filter(Boolean);
  const moneyNum = '(?:\\d{1,3}(?:\\s\\d{3})*,\\d{2}|\\d+,\\d{2})';
  const rowLineRe = new RegExp(`^\\s*(\\d+)\\s+(\\S+)\\s+(.+?)\\s+(\\d{1,5},\\d{2})\\s+(?:st|pcs)\\s+(${moneyNum})(?:\\s+\\S+)?(?:\\s+${moneyNum})?\\s*$`, 'i');

  for (let i = 0; i < lines.length; i++) {
    const row = lines[i].match(rowLineRe);
    if (!row) continue;
    const [, position, partNo, firstLabel, quantity, price] = row;
    const labelParts = [firstLabel];
    let markerValue = '';

    for (let j = i + 1; j < lines.length; j++) {
      const next = lines[j];
      if (rowLineRe.test(next) || /^(Postadress|Mailing address|Beräknat utsläpp|Total excl\. VAT|Summa exkl\. moms)/i.test(next)) break;
      const marker = next.match(/^(?:Offertradens godsmärke|Quote row['’]?s goods label):\s*(.+)$/i);
      if (marker) {
        markerValue = marker[1];
        continue;
      }
      if (!isOfferNoiseLine(next)) labelParts.push(next);
    }

    const register = offerRegisterFromMarkerOrPosition(markerValue, parseImportedNumber(position));
    if (!register) continue;
    const label = cleanImportText(labelParts.join(' '));
    const lookupText = cleanImportText(`${label} ${partNo}`);
    prices[register] = {
      register,
      position: parseImportedNumber(position),
      partNo: cleanImportText(partNo),
      quantity: parseImportedNumber(quantity),
      price: parseImportedNumber(price),
      label,
      power: inferOfferPower(lookupText),
      ctrl: inferOfferControl(lookupText)
    };
  }

  return prices;
}

function mergeOfferRow(existing = {}, incoming = {}) {
  const merged = { ...existing };
  Object.entries(incoming).forEach(([key, value]) => {
    if (value === undefined || value === null || value === '') return;
    if (typeof value === 'number' && value === 0 && merged[key]) return;
    merged[key] = value;
  });
  return merged;
}

function parseSeparatedAuraQuoteRows(text) {
  const prices = {};
  const lines = normalizeLineText(text).split('\n').map(line => cleanImportText(line)).filter(Boolean);
  const positions = [];
  const amounts = [];

  for (let i = 0; i < lines.length; i++) {
    const quantityMatch = lines[i].match(/^(\d{1,5},\d{2})\s+(?:st|pcs)$/i);
    if (quantityMatch) {
      const price = parseImportedNumber(lines[i + 1] || '');
      const amount = parseImportedNumber(lines[i + 2] || '');
      amounts.push({ quantity: parseImportedNumber(quantityMatch[1]), price, amount });
      continue;
    }

    if (!isSeparatedOfferPositionStart(lines, i)) continue;
    const position = parseImportedNumber(lines[i]);
    const partNo = cleanImportText(lines[i + 1]);
    const labelLines = [];
    let j = i + 2;
    while (j < lines.length && !isSeparatedOfferPositionStop(lines, j)) {
      if (!isOfferNoiseLine(lines[j])) labelLines.push(lines[j]);
      j++;
    }
    positions.push({
      position,
      partNo,
      label: cleanImportText(labelLines.join(' '))
    });
  }

  positions.forEach((row, index) => {
    const amount = amounts[index] || {};
    const register = separatedOfferRegisterForPosition(lines, row, index);
    if (!register) return;
    const label = cleanImportText(row.label || row.partNo || register);
    const lookupText = cleanImportText(`${label} ${row.partNo || ''}`);
    prices[register] = {
      register,
      position: row.position,
      partNo: row.partNo,
      quantity: amount.quantity || 0,
      price: amount.price || 0,
      label,
      power: inferOfferPower(lookupText),
      ctrl: inferOfferControl(lookupText)
    };
  });

  return prices;
}

function isSeparatedOfferPositionStart(lines, index) {
  const line = lines[index];
  const next = lines[index + 1] || '';
  if (!/^\d{1,4}$/.test(line)) return false;
  if (/^\d{1,5},\d{2}\s+(?:st|pcs)$/i.test(next)) return false;
  if (!/^[A-ZÅÄÖ]?\d[\dA-ZÅÄÖ-]{3,}$/i.test(next)) return false;
  const prev = lines[index - 1] || '';
  if (/Offertnummer|Kundnummer|Sida|Page|Datumformat|Date format/i.test(prev)) return false;
  return true;
}

function isSeparatedOfferPositionStop(lines, index) {
  const line = lines[index] || '';
  if (isSeparatedOfferPositionStart(lines, index)) return true;
  if (/^\d{1,5},\d{2}\s+(?:st|pcs)$/i.test(line)) return true;
  return /^(Antal|Quantity|À-pris|Price each|%|Belopp|Amount)$/i.test(line)
    || /^(Offertradens godsmärke|Quote row['’]?s goods label):/i.test(line)
    || /^(Summa exkl\. moms|Total excl\. VAT|Postadress|Mailing address|Besöksadress|Visiting address)$/i.test(line);
}

function separatedOfferRegisterForPosition(lines, row, index) {
  const positionLine = String(row.position);
  const start = lines.findIndex((line, i) => i > 0 && line === positionLine && lines[i + 1] === row.partNo);
  const nextStart = lines.findIndex((line, i) => i > start && isSeparatedOfferPositionStart(lines, i));
  const end = nextStart > start ? nextStart : lines.length;
  const marker = lines.slice(start, end).find(line => /^(Offertradens godsmärke|Quote row['’]?s goods label):/i.test(line));
  const markerValue = marker ? marker.replace(/^(Offertradens godsmärke|Quote row['’]?s goods label):\s*/i, '') : '';
  return offerRegisterFromMarkerOrPosition(markerValue, row.position, index);
}

function offerRegisterFromMarkerOrPosition(markerValue, position, index = 0) {
  const cleanMarker = cleanImportText(markerValue);
  const normalized = /^L\s*0*\d+S?$/i.test(cleanMarker) || /^LI[-\s]*U\s*0*\d+[A-Z]?/i.test(cleanMarker)
    ? normalizeImportRegister(cleanMarker)
    : '';
  if (/^(L\d+S?|U\d+[A-Z]?)$/i.test(normalized)) return normalized;
  if (Number.isFinite(position) && position > 0) return normalizeImportRegister(`L${Math.round(position / 10)}`);
  return normalizeImportRegister(`L${index + 1}`);
}

function parseEnglishAuraQuoteRows(text) {
  const prices = {};
  const lines = normalizeLineText(text).split('\n').map(line => cleanImportText(line)).filter(Boolean);
  const moneyNum = '(?:\\d{1,3}(?:\\s\\d{3})*,\\d{2}|\\d+,\\d{2})';
  const rowLineRe = new RegExp(`^(\\d+)\\s+(\\S+)\\s+(.+?)\\s+(\\d{1,5},\\d{2})\\s+pcs\\s+(.+)$`, 'i');
  const moneyRe = new RegExp(moneyNum, 'g');

  for (let i = 0; i < lines.length; i++) {
    const row = lines[i].match(rowLineRe);
    if (!row) continue;

    const [, position, partNo, firstLabel, quantity, tail] = row;
    const moneyValues = tail.match(moneyRe) || [];
    if (!moneyValues.length) continue;

    const labelParts = [firstLabel];
    let register = '';

    for (let j = i + 1; j < lines.length; j++) {
      const next = lines[j];
      if (rowLineRe.test(next) || /Total excl\. VAT|Total\s*\(/i.test(next)) break;
      const labelMatch = next.match(/Quote row['’]?s goods label:\s*(L\s*0*\d+S?)/i)
        || next.match(/Offertradens godsmärke:\s*(L\s*0*\d+S?)/i);
      if (labelMatch) {
        register = normalizeImportRegister(labelMatch[1]);
        break;
      }
      if (!isOfferNoiseLine(next)) labelParts.push(next);
    }

    register = register || normalizeImportRegister(`L${position}`);
    if (!/^L\d+S?$/i.test(register)) continue;
    const label = cleanImportText(labelParts.join(' '));
    const lookupText = cleanImportText(`${label} ${partNo}`);

    prices[register] = {
      register,
      position: parseImportedNumber(position),
      partNo: cleanImportText(partNo),
      quantity: parseImportedNumber(quantity),
      price: parseImportedNumber(moneyValues[0]),
      label,
      power: inferOfferPower(lookupText),
      ctrl: inferOfferControl(lookupText)
    };
  }

  return prices;
}

function sortOfferEntries(a, b) {
  const [, aRow] = a;
  const [, bRow] = b;
  const aPos = Number.isFinite(aRow.position) && aRow.position > 0 ? aRow.position : offerRegisterSortValue(a[0]);
  const bPos = Number.isFinite(bRow.position) && bRow.position > 0 ? bRow.position : offerRegisterSortValue(b[0]);
  return aPos - bPos;
}

function offerRegisterSortValue(register) {
  const match = String(register || '').match(/L(\d+)/i);
  return match ? parseInt(match[1], 10) : Number.MAX_SAFE_INTEGER;
}

function quoteOnlyRoomName() {
  return { SE:'Offertpositioner', NO:'Tilbudsposisjoner', DE:'Angebotspositionen', EN:'Quote positions' }[lang] || 'Offertpositioner';
}

function isOfferNoiseLine(line) {
  return /^(Quote row['’]?s goods label|C\d|Total excl\. VAT|Terms and conditions|Quotation|Quote|Page \d+|Pos\.|Part no\.|Delivery address|Your VAT|Valid through date|Goods label|Regards|Order mail address|IBAN|SWIFT|VAT registration)/i.test(line);
}

function parseDialuxReport(text) {
  const normalized = normalizeLineText(text);
  const rooms = [];
  const areas = new Map();
  const headerRe = /(?:^|\n)([^\n\f]+?)\s+\((?:Ljusscen|Lysscene)\s+1\)\s*\n\s*(?:Sammanfattning|Sammenfatning)\b/gi;
  const headers = [...normalized.matchAll(headerRe)];

  headers.forEach((header, idx) => {
    const name = cleanImportText(header[1]);
    if (!name || /6951\s+-|Beräkningsobjekt|Våning/i.test(name)) return;
    const next = headers[idx + 1] ? headers[idx + 1].index : normalized.length;
    const section = normalized.slice(header.index, next);
    const areaMatch = section.match(/(?:Yta|Areal)\s+(\d+(?:[.,]\d+)?)\s*m²/i);
    if (areaMatch) areas.set(name, parseImportedNumber(areaMatch[1]));
    if (!/(?:Armaturlista|Liste over armaturer)/i.test(section)) return;
    const fixtures = parseDialuxRoomFixtures(section);
    if (!fixtures.length) return;
    const profileMatch = section.match(/(?:Användarprofil|Brugerprofil):\s*([^\n\f]+)/i);
    rooms.push({
      name,
      sqm: areas.get(name) || 0,
      profile: profileMatch ? cleanImportText(profileMatch[1]) : '',
      fixtures
    });
  });
  if (!rooms.length) {
    const fixtures = parseDialuxGlobalFixtures(normalized);
    if (fixtures.length) {
      rooms.push({
        name: dialuxOnlyRoomName(),
        sqm: 0,
        profile: '',
        fixtures
      });
    }
  }

  return {
    project: parseDialuxProject(normalized),
    date: parseDialuxDate(normalized),
    contact: parseDialuxContact(normalized),
    rooms
  };
}

function parseDialuxRoomFixtures(section) {
  const listStart = section.search(/(?:Armaturlista|Liste over armaturer)/i);
  if (listStart < 0) return [];
  const listSection = section.slice(listStart);
  const lineFixtures = parseDialuxLineFixtureRows(listSection);
  if (lineFixtures.length) return lineFixtures;

  let list = listSection.replace(/\s+/g, ' ');
  const stopAt = list.search(/\s\d{4}\s+-\s+|Beräkningsobjekt|Sammanfattning/);
  if (stopAt > 0) list = list.slice(0, stopAt);

  const rowRe = /(?:(L\d{1,3}S?|U\d{1,3}[A-Z]?)\s+)?(\d+(?:[.,]\d+)?)\s*W\b.*?lm\s*\/\s*W\s+(\d+)\s+Aura Light\s+((?:[A-Z]?\d[\dA-Z-]*\s*){1,3})\s+([A-Za-zÅÄÖåäöØø].+?)(?=(?:\s(?:L\d{1,3}S?|U\d{1,3}[A-Z]?)\s+\d+(?:[.,]\d+)?\s*W\b)|(?:\s\d+(?:[.,]\d+)?\s*W\b.*?\sAura Light)|$)/gi;
  const fixtures = [];
  let match;
  while ((match = rowRe.exec(list))) {
    const artNo = match[4].replace(/\s+/g, '');
    const label = cleanImportText(match[5]);
    const register = normalizeImportRegister(match[1] || inferMissingRegister(label, artNo) || '');
    fixtures.push({
      register,
      power: parseImportedNumber(match[2]),
      count: parseImportedNumber(match[3]),
      artNo,
      label
    });
  }
  return fixtures;
}

function parseDialuxLineFixtureRows(listSection) {
  const lines = listSection
    .split('\n')
    .map(line => cleanImportText(line))
    .filter(Boolean);
  const fixtures = [];
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (isImportSectionStop(line)) break;
    if (!isDialuxLineFixtureStart(line)) continue;

    const continuation = [];
    let artLen = (line.match(/^\d+\s+Aura Light\s+(\d{8,14})\b/i)?.[1] || '').length;
    while (i + 1 < lines.length) {
      const next = lines[i + 1];
      if (isDialuxLineFixtureStart(next) || isImportSectionStop(next)) break;
      if (!shouldUseDialuxFixtureContinuation(next, artLen)) break;
      continuation.push(next);
      const digit = next.match(/^\d\b/);
      if (digit && artLen < 11) artLen += 1;
      i += 1;
    }

    const fixture = parseDialuxLineFixture(line, continuation);
    if (fixture) fixtures.push(fixture);
  }
  return fixtures;
}

function isDialuxLineFixtureStart(line) {
  return /^\d+\s+Aura Light\s+(?:S?\d|[A-Z]?\d[\dA-Z-])/i.test(line);
}

function isImportSectionStop(line) {
  return /Beräkningsobjekt|Sammanfattning|Sammenfatning|^\d{4}\s+-\s+/i.test(line);
}

function shouldUseDialuxFixtureContinuation(line, currentArtNoLength) {
  if (/^st\.\s+Tillverkare|Armaturlista|Artikelnamn/i.test(line)) return false;
  if (/^\d{2,3}$/.test(line)) return false;
  if (currentArtNoLength < 11 && /^\d\b/.test(line)) return true;
  return /lm\s*\/\s*W|[A-Za-zÅÄÖåäöØø]/.test(line);
}

function parseDialuxLineFixture(line, continuationLines) {
  const match = line.match(/^(\d+)\s+Aura Light\s+([A-Z]?\d[\dA-Z-]*|S\d+)\s+(.+?)\s+(?:\d+\s+)?(\d+(?:[.,]\d+)?)\s*W\b.*?(?:\s((?:L|U)\d{1,3}[A-Z]?S?)\s*)?$/i);
  if (!match) return null;
  let [, count, artNo, label, power, register] = match;
  let continuation = continuationLines.join(' ');
  while (artNo.length < 11) {
    const digit = continuation.match(/^\s*(\d)\s*/);
    if (!digit) break;
    artNo += digit[1];
    continuation = continuation.slice(digit[0].length);
  }
  continuation = continuation.replace(/\blm\s*\/\s*W\b/ig, '').trim();
  label = cleanImportText(`${label} ${continuation}`.replace(/\s+L\d{2}\s*$/i, ''));
  register = normalizeImportRegister(register || inferMissingRegister(label, artNo) || '');
  return {
    register,
    power: parseImportedNumber(power),
    count: parseImportedNumber(count),
    artNo,
    label
  };
}

function parseDialuxGlobalFixtures(text) {
  const normalized = normalizeLineText(text);
  const fixtures = [];
  parseDialuxDetailFixtureBlocks(normalized).forEach(fixture => fixtures.push(fixture));
  parseDialuxCompactFixtureRows(normalized).forEach(fixture => fixtures.push(fixture));
  return dedupeDialuxFixtures(fixtures);
}

function parseDialuxDetailFixtureBlocks(text) {
  const fixtures = [];
  const blockRe = /(?:^|\n)(?:st\.|stk\.)\s+(\d+)[\s\S]{0,280}?(?:P\s+)?(\d+(?:[.,]\d+)?)\s*W[\s\S]{0,360}?(?:Tillverkare|Fabrikant)\s+Aura Light[\s\S]{0,220}?(?:E-nr\.\/Art\.-nr\.|Artikel-nr\.)\s+([A-Z]?\d[\dA-Z-]*(?:\s+\d)?|S\d+)[\s\S]{0,260}?(?:Artikelnamn|Artikelnavn)\s+([\s\S]*?)(?:Bestyckning|Udstyr|Register|Indeks)[\s\S]{0,220}?(?:Register|Indeks)\s+((?:L|U)\d{1,3}[A-Z]?S?)/gi;
  let match;
  while ((match = blockRe.exec(text))) {
    const label = cleanDialuxFixtureLabel(match[4]);
    fixtures.push({
      register: normalizeImportRegister(match[5]),
      power: parseImportedNumber(match[2]),
      count: parseImportedNumber(match[1]),
      artNo: cleanImportText(match[3]).replace(/\s+/g, ''),
      label
    });
  }
  return fixtures;
}

function parseDialuxCompactFixtureRows(text) {
  const fixtures = [];
  const lines = text.split('\n').map(line => cleanImportText(line)).filter(Boolean);
  lines.forEach((line, idx) => {
    if (!isDialuxLineFixtureStart(line)) return;
    const continuation = [];
    for (let i = idx + 1; i < Math.min(lines.length, idx + 4); i++) {
      if (isDialuxLineFixtureStart(lines[i]) || isImportSectionStop(lines[i])) break;
      continuation.push(lines[i]);
    }
    const fixture = parseDialuxLineFixture(line, continuation);
    if (fixture) fixtures.push(fixture);
  });
  return fixtures;
}

function cleanDialuxFixtureLabel(value) {
  return cleanImportText(String(value || '')
    .replace(/\b(?:ΦLampe|ΦLjuskälla|ΦArmatur|η|Lysudbytte|Ljusutbyte|CCT|CRI)\b[\s\S]*$/i, '')
    .replace(/\s+/g, ' '));
}

function dedupeDialuxFixtures(fixtures) {
  const byRegister = new Map();
  fixtures.forEach(fixture => {
    const key = fixture.register || normalizeArticleNo(fixture.artNo);
    if (!key) return;
    const existing = byRegister.get(key);
    if (!existing || fixture.label.length > existing.label.length || fixture.power > existing.power) {
      byRegister.set(key, fixture);
    }
  });
  return [...byRegister.values()].sort((a, b) => offerRegisterSortValue(a.register) - offerRegisterSortValue(b.register));
}

function dialuxOnlyRoomName() {
  return { SE:'DIALux armaturer', NO:'DIALux-armaturer', DE:'DIALux-Leuchten', EN:'DIALux luminaires' }[lang] || 'DIALux armaturer';
}

function enrichImportedRoom(room, prices, existingTechnology, countSource = 'offer') {
  const mapped = mapImportedRoom(room);
  const newLuminaires = room.fixtures.map(fixture => {
    const register = fixture.register || '';
    const offerRow = findOfferRowForFixture(fixture, prices);
    const price = offerRow ? moneyFromSEK(offerRow.price) : 0;
    const ctrl = inferNewControl(fixture);
    const count = countSource === 'dialux' ? fixture.count : (fixture._offerCount ?? offerRow?.quantity ?? fixture.count);
    return {
      register,
      label: cleanImportText(offerRow?.label || fixture.label),
      count,
      price,
      install: IMPORT_DEFAULT_INSTALL_COST,
      power: fixture.power,
      ctrl,
      reduction: reductionForControl(mapped.bKey, mapped.rKey, ctrl),
      maintenance: IMPORT_DEFAULT_NEW_MAINTENANCE
    };
  });

  return {
    name: room.name,
    bKey: mapped.bKey,
    rKey: mapped.rKey,
    count: 1,
    sqm: room.sqm,
    newLuminaires,
    existingLuminaires: newLuminaires.map(lum => ({
      label: `${existingTechnology.year} ${localizedTechLabel(existingTechnology)} - ${lum.label}`,
      count: lum.count,
      price: 0,
      install: 0,
      power: Math.round(lum.power * existingTechnology.powerFactor * 10) / 10,
      ctrl: 'none',
      reduction: 1,
      maintenance: moneyFromSEK(existingTechnology.maintenance)
    }))
  };
}

function findOfferRowForFixture(fixture, prices) {
  const register = fixture.register || '';
  if (register && prices[register]) return prices[register];
  const artKey = normalizeArticleNo(fixture.artNo);
  if (!artKey) return null;
  return Object.values(prices).find(row => {
    const rowKey = normalizeArticleNo(row.partNo);
    return rowKey && (rowKey === artKey || rowKey.startsWith(artKey) || artKey.startsWith(rowKey));
  }) || null;
}

function applyOfferCountAllocation(rooms, prices) {
  const fixturesByKey = new Map();
  rooms.forEach(room => {
    room.fixtures.forEach(fixture => {
      const offerRow = findOfferRowForFixture(fixture, prices);
      if (!offerRow) return;
      const key = offerRow.register || fixture.register || normalizeArticleNo(offerRow.partNo);
      if (!fixturesByKey.has(key)) fixturesByKey.set(key, { offerRow, fixtures: [] });
      fixturesByKey.get(key).fixtures.push(fixture);
    });
  });

  fixturesByKey.forEach(({ offerRow, fixtures }) => {
    const target = Math.round(parseImportedNumber(offerRow.quantity));
    if (!target || !fixtures.length) return;
    if (fixtures.length === 1) {
      fixtures[0]._offerCount = target;
      return;
    }
    const totalDialux = fixtures.reduce((sum, fixture) => sum + (parseImportedNumber(fixture.count) || 0), 0);
    const weighted = fixtures.map((fixture, index) => {
      const raw = totalDialux > 0 ? target * (parseImportedNumber(fixture.count) || 0) / totalDialux : target / fixtures.length;
      return { fixture, index, raw, count: Math.floor(raw), remainder: raw - Math.floor(raw) };
    });
    let remaining = target - weighted.reduce((sum, item) => sum + item.count, 0);
    weighted.sort((a, b) => b.remainder - a.remainder || a.index - b.index);
    for (let i = 0; i < weighted.length && remaining > 0; i++, remaining--) {
      weighted[i].count += 1;
    }
    weighted.forEach(item => { item.fixture._offerCount = item.count; });
  });
}

function applyImportedProject(model) {
  document.getElementById('proj-name').value = model.project.name;
  document.getElementById('proj-date').value = model.project.date;
  document.getElementById('proj-contact').value = model.project.contact;

  installations = [];
  calcResults = null;
  charts = {};
  instCounter = 0; roomCounter = 0; lumCounter = 0;

  addInstallation();
  addInstallation();
  populateImportedInstallation(installations[0].id, model.rooms, 'existing');
  populateImportedInstallation(installations[1].id, model.rooms, 'new');
  dirty = true;
}

function populateImportedInstallation(instId, rooms, kind) {
  const inst = installations.find(i => i.id === instId);
  if (!inst) return;

  rooms.forEach(spec => {
    addRoom(instId);
    const room = inst.rooms[inst.rooms.length - 1];
    room.selected = spec.selected !== false;
    const lums = kind === 'existing' ? spec.existingLuminaires : spec.newLuminaires;
    while (room.luminaires.length < lums.length) addLuminaire(null, room.id);
    room.buildingKey = spec.bKey;
    room.roomKey = spec.rKey;

    sv(`room-name-${room.id}`, spec.name);
    sv(`room-count-${room.id}`, spec.count);
    sv(`room-sqm-${room.id}`, spec.sqm);
    const bEl = document.getElementById(`room-btype-${room.id}`);
    const rEl = document.getElementById(`room-rtype-${room.id}`);
    if (bEl) bEl.value = spec.bKey;
    if (rEl) {
      rEl.innerHTML = roomOptions(spec.bKey);
      rEl.value = spec.rKey;
    }

    lums.forEach((lum, idx) => {
      const row = room.luminaires[idx];
      if (!row) return;
      sv(`lum-label-${row.id}`, lum.label);
      sv(`lum-count-${row.id}`, lum.count);
      sv(`lum-price-${row.id}`, lum.price);
      sv(`lum-install-${row.id}`, lum.install);
      sv(`lum-power-${row.id}`, lum.power);
      sv(`lum-ctrl-${row.id}`, lum.ctrl);
      sv(`lum-reduction-${row.id}`, lum.reduction);
      sv(`lum-maintenance-${row.id}`, lum.maintenance);
    });
  });
}

function mapImportedRoom(room) {
  const haystack = normalizeImportKey(`${room.name} ${room.profile}`);
  if (/rwc|(^|\s)wc(\s|$)|toalett|restroom/.test(haystack)) return { bKey: 'KONTOR', rKey: 'WC' };
  if (/korridor|corridor|touchdown|work lounge/.test(haystack)) return { bKey: 'KONTOR', rKey: 'Korridor' };
  if (/demo|konferens|conference|meeting/.test(haystack)) return { bKey: 'KONTOR', rKey: 'Konferensrum' };
  if (/library|tyst|arbetsplatser|kontor|office/.test(haystack)) return { bKey: 'KONTOR', rKey: 'Storkontor > 12 kvm' };
  return { bKey: 'KONTOR', rKey: 'Storkontor > 12 kvm' };
}

function inferNewControl(fixture) {
  const text = normalizeImportKey(`${fixture.register} ${fixture.label}`);
  if (/sensor|msensor|l01s/.test(text)) return 'daylight';
  if (/dali/.test(text)) return 'manual';
  return 'none';
}

function reductionForControl(bKey, rKey, ctrl) {
  const roomData = BUILDINGS[bKey]?.rooms.find(room => room.key === rKey);
  if (!roomData || ctrl === 'none') return 1;
  if (ctrl === 'manual') return roundImport(roomData.rf_manual, 3);
  if (ctrl === 'presence') return roundImport(roomData.rf_manual * roomData.rf_presence, 3);
  if (ctrl === 'daylight') return roundImport(roomData.rf_manual * roomData.rf_presence * roomData.rf_daylight, 3);
  return 1;
}

function inferMissingRegister(label, artNo) {
  const key = normalizeImportKey(`${label} ${artNo}`);
  if (/ceos evo pe l1500/.test(key) && /sensor/.test(key)) return 'L01S';
  return '';
}

function parseDialuxProject(text) {
  const match = text.match(/^\s*(\d{4}\s+-\s+[^\n\f]+)/m);
  return match ? cleanImportText(match[1]) : '';
}

function parseDialuxDate(text) {
  const match = text.match(/Datum\s+(\d{4}-\d{2}-\d{2})/i);
  return match ? match[1] : '';
}

function parseDialuxContact(text) {
  const lines = text.split('\n').map(line => cleanImportText(line)).filter(Boolean);
  for (let i = 0; i < lines.length; i++) {
    if (/^Redaktör\b/i.test(lines[i])) {
      const sameLine = cleanPersonName(lines[i].replace(/^Redaktör\b/i, ''));
      if (sameLine) return sameLine;
      const nextName = firstPersonName(lines.slice(i + 1, i + 5));
      if (nextName) return nextName;
    }
  }
  for (let i = 0; i < lines.length; i++) {
    if (/Head of Light Design|Kontaktperson/i.test(lines[i])) {
      const nextName = firstPersonName(lines.slice(i + 1, i + 6));
      if (nextName) return nextName;
    }
  }
  return '';
}

function parseOfferDate(text) {
  const match = text.match(/(?:Offertdatum|Quote date)[^\n]*\n\s*(\d{4}-\d{2}-\d{2})/i);
  if (match) return match[1];
  const lines = text.split('\n').map(cleanImportText).filter(Boolean);
  const idx = lines.findIndex(row => /^(Offertdatum|Quote date)$/i.test(row));
  const date = idx >= 0 ? lines.slice(idx + 1, idx + 10).find(row => /^\d{4}-\d{2}-\d{2}$/.test(row)) : '';
  return date || '';
}

const OFFER_HEADER_FIELDS = [
  /Ert momsreg\.nr|Your VAT reg\. no\./i,
  /Ert förfrågannummer|Your inquiry number/i,
  /Vår referens|Our reference/i,
  /Er referens|Your reference/i
];

function offerHeaderFieldValue(text, targetRe) {
  const lines = text.split('\n');
  const stackedValue = offerStackedHeaderFieldValue(lines, targetRe);
  if (stackedValue) return stackedValue;
  const headerIdx = lines.findIndex(row => targetRe.test(row) && OFFER_HEADER_FIELDS.some(re => re !== targetRe && re.test(row)));
  if (headerIdx < 0) return '';
  const header = lines[headerIdx];
  const fields = OFFER_HEADER_FIELDS
    .map(re => {
      const match = header.match(re);
      return match ? { re, start: match.index, label: match[0] } : null;
    })
    .filter(Boolean)
    .sort((a, b) => a.start - b.start);
  const target = fields.find(field => targetRe.test(field.label));
  if (!target) return '';
  const nextField = fields.find(field => field.start > target.start);
  const end = nextField ? nextField.start : undefined;
  const stopRe = /^(Leveransadress|Delivery address|Postadress|Mailing address|Leveransvillkor|Delivery terms|Pos\.|Delivery method|Leveranssätt)\b/i;
  const parts = [];
  for (let i = headerIdx + 1; i < Math.min(lines.length, headerIdx + 10); i += 1) {
    const raw = lines[i] || '';
    if (stopRe.test(cleanImportText(raw))) break;
    const value = cleanImportText(raw.slice(target.start, end));
    if (value) parts.push(value);
  }
  return cleanImportText(parts.join(' '));
}

function offerHeaderFieldKey(line) {
  const text = cleanImportText(line);
  if (/Ert momsreg\.nr|Your VAT reg\. no\./i.test(text)) return 'vat';
  if (/Ert förfrågannummer|Your inquiry number/i.test(text)) return 'inquiry';
  if (/Er referens|Your reference/i.test(text)) return 'yourReference';
  if (/Vår referens|Our reference/i.test(text)) return 'ourReference';
  return '';
}

function offerStackedHeaderFieldValue(lines, targetRe) {
  const headerIdx = lines.findIndex(row => targetRe.test(row));
  if (headerIdx < 0) return '';
  const fieldOrder = [];
  for (let i = Math.max(0, headerIdx - 5); i < Math.min(lines.length, headerIdx + 8); i += 1) {
    const key = offerHeaderFieldKey(lines[i]);
    if (key && !fieldOrder.includes(key)) fieldOrder.push(key);
  }
  if (!fieldOrder.includes('inquiry') || !fieldOrder.includes('ourReference')) return '';
  const lastHeaderIdx = lines.findIndex((row, idx) => idx >= headerIdx && offerHeaderFieldKey(row) && offerHeaderFieldKey(row) === fieldOrder[fieldOrder.length - 1]);
  if (lastHeaderIdx < 0) return '';
  const stopRe = /^(Leveransadress|Delivery address|Postadress|Mailing address|Leveransvillkor|Delivery terms|Pos\.|Delivery method|Leveranssätt)\b/i;
  const values = [];
  for (let i = lastHeaderIdx + 1; i < Math.min(lines.length, lastHeaderIdx + 14); i += 1) {
    const value = cleanImportText(lines[i]);
    if (!value) continue;
    if (stopRe.test(value)) break;
    if (offerHeaderFieldKey(value)) continue;
    values.push(value);
  }
  if (!values.length) return '';

  let rest = values.slice();
  if (fieldOrder[0] === 'vat' && rest.length && !/^\d{3,5}\s*-\s*/.test(rest[0])) rest.shift();
  const hasYourReference = fieldOrder.includes('yourReference');
  const yourReference = hasYourReference && rest.length > 2 ? rest.pop() : '';
  const ourReference = rest.length > 1 ? rest.pop() : '';
  const inquiry = rest.join(' ');
  if (/Ert förfrågannummer|Your inquiry number/i.test(String(targetRe))) return cleanImportText(inquiry);
  if (/Vår referens|Our reference/i.test(String(targetRe))) return cleanImportText(ourReference || (!hasYourReference ? yourReference : ''));
  return '';
}

function offerGoodsLabelProject(lines) {
  const goodsIdx = lines.findIndex(row => /^(Godsmärke|Goods label)$/i.test(cleanImportText(row)));
  if (goodsIdx < 0) return '';
  const goodsValue = lines.slice(goodsIdx + 1, goodsIdx + 4)
    .map(cleanImportText)
    .find(row => /\d{3,5}\s*-\s*/.test(row));
  const goodsMatch = goodsValue ? goodsValue.match(/(?:\d{4}-\d{2}-\d{2}\s+)?(\d{3,5}\s*-\s*.+)$/) : null;
  return goodsMatch ? cleanImportText(goodsMatch[1]) : '';
}

function normalizeOfferProjectCandidate(value, lines) {
  const candidate = cleanImportText(value);
  const candidateMatch = candidate.match(/^(\d{3,5})\s*-\s*.+/);
  if (!candidateMatch) return '';
  const goodsProject = offerGoodsLabelProject(lines);
  if (goodsProject && goodsProject.startsWith(candidateMatch[1])) return goodsProject;
  return candidate;
}

function offerCompactReferenceValue(text) {
  const lines = text.split('\n');
  const headerIdx = lines.findIndex(row =>
    /Ert förfrågannummer|Your inquiry number/i.test(row) &&
    /Vår referens|Our reference/i.test(row)
  );
  if (headerIdx < 0) return '';
  const project = parseOfferProject(text);
  const projectMatch = project.match(/^(\d{3,5})\s*-\s*(.+)$/);
  if (!projectMatch) return '';
  const [, projectNo, projectName] = projectMatch;
  const projectWords = projectName.split(/\s+/).map(word => word.toLowerCase());
  const stopRe = /^(Leveransadress|Delivery address|Postadress|Mailing address|Leveransvillkor|Delivery terms|Pos\.|Delivery method|Leveranssätt)\b/i;
  const rows = [];
  for (let i = headerIdx + 1; i < Math.min(lines.length, headerIdx + 10); i += 1) {
    const row = cleanImportText(lines[i]);
    if (!row) continue;
    if (stopRe.test(row)) break;
    rows.push(row);
  }
  const row = rows.find(item => new RegExp(`\\b${projectNo}\\s*-`).test(item));
  if (!row) return '';
  let tail = cleanImportText(row.slice(row.search(new RegExp(`\\b${projectNo}\\s*-`))).replace(new RegExp(`^${projectNo}\\s*-\\s*`), ''));
  const words = tail.split(/\s+/);
  while (words.length && projectWords.includes(words[0].toLowerCase())) words.shift();
  const match = words.join(' ').match(/[A-ZÅÄÖ][A-Za-zÅÄÖåäöéÉ.-]+\s+[A-ZÅÄÖ][A-Za-zÅÄÖåäöéÉ.-]+/);
  return match ? cleanImportText(match[0]) : '';
}

function parseOfferProject(text) {
  const lines = text.split('\n');
  const inquiryValue = normalizeOfferProjectCandidate(offerHeaderFieldValue(text, /Ert förfrågannummer|Your inquiry number/i), lines);
  if (inquiryValue) return inquiryValue;
  const inquiryIdx = lines.findIndex(row => /Ert förfrågannummer|Your inquiry number/i.test(row));
  if (inquiryIdx >= 0) {
    const headers = lines[inquiryIdx].split(/\s{2,}/).map(cleanImportText).filter(Boolean);
    const values = (lines[inquiryIdx + 1] || '').split(/\s{2,}/).map(cleanImportText).filter(Boolean);
    const inquiryCol = headers.findIndex(header => /Ert förfrågannummer|Your inquiry number/i.test(header));
    let value = inquiryCol >= 0 ? (values[inquiryCol] || '') : '';
    const follow = cleanImportText(lines[inquiryIdx + 2] || '');
    if (value && follow && !/Our reference|Vår referens|Delivery address|Mailing address|Delivery terms|Payment terms/i.test(follow)) {
      value = `${value} ${follow}`;
    }
    const match = value.match(/(\d{3,5}\s*-\s*.+)/);
    if (match) return normalizeOfferProjectCandidate(match[1], lines) || cleanImportText(match[1]);
    const stackedValue = lines.slice(inquiryIdx + 1, inquiryIdx + 8)
      .map(cleanImportText)
      .find(row => /^\d{3,5}\s*-\s*/.test(row));
    if (stackedValue) return normalizeOfferProjectCandidate(stackedValue, lines) || cleanImportText(stackedValue);
  }
  const goodsProject = offerGoodsLabelProject(lines);
  if (goodsProject) return goodsProject;
  return '';
}

function parseOfferContact(text) {
  const lines = text.split('\n');
  const compactReference = offerCompactReferenceValue(text);
  if (compactReference) return compactReference;
  const referenceValue = offerHeaderFieldValue(text, /Vår referens|Our reference/i);
  if (referenceValue) return cleanPersonName(referenceValue);
  const idx = lines.findIndex(row => /Vår referens|Our reference/i.test(row));
  if (idx < 0) return '';
  const headers = lines[idx].split(/\s{2,}/).map(cleanImportText).filter(Boolean);
  const values = (lines[idx + 1] || '').split(/\s{2,}/).map(cleanImportText).filter(Boolean);
  const referenceCol = headers.findIndex(header => /Vår referens|Our reference/i.test(header));
  if (referenceCol >= 0 && values[referenceCol]) {
    const cleaned = cleanPersonName(values[referenceCol]);
    if (cleaned) return cleaned;
  }
  const project = parseOfferProject(text);
  const next = lines[idx + 1] || '';
  const afterProject = project && next.includes(project)
    ? next.slice(next.indexOf(project) + project.length)
    : next;
  const candidate = afterProject.match(/[A-ZÅÄÖ][A-Za-zÅÄÖåäöéÉ]+\s+[A-ZÅÄÖ][A-Za-zÅÄÖåäöéÉ]+/);
  if (candidate) return cleanImportText(candidate[0]);
  const stopIndex = lines.findIndex((row, rowIdx) => rowIdx > idx && /Leveransadress|Delivery address/i.test(row));
  const contactLines = lines.slice(idx + 1, stopIndex > idx ? stopIndex : idx + 10);
  const stacked = firstOfferContactName(contactLines);
  return stacked || '';
}

function firstOfferContactName(lines) {
  for (let i = 0; i < lines.length; i++) {
    const previous = cleanImportText(lines[i - 1] || '');
    if (/^\d{3,5}\s*-\s*/.test(previous)) continue;
    const cleaned = cleanPersonName(lines[i]);
    if (cleaned) return cleaned;
  }
  return '';
}

function firstPersonName(lines) {
  for (const line of lines) {
    const cleaned = cleanPersonName(line);
    if (cleaned) return cleaned;
  }
  return '';
}

function cleanPersonName(value) {
  const text = cleanImportText(value);
  if (!text || /Created with|Aura Light|Kontakt|Head of|Trädgårdsgatan|^\d|@|\+|www\.|Telefon|Offert|Datum/i.test(text)) return '';
  const match = text.match(/[A-ZÅÄÖ][A-Za-zÅÄÖåäöéÉ.-]+(?:\s+[A-ZÅÄÖ][A-Za-zÅÄÖåäöéÉ.-]+)+/);
  return match ? cleanImportText(match[0]) : '';
}

function normalizeLineText(text) {
  return (text || '').replace(/\r/g, '').replace(/\u00a0/g, ' ');
}

function cleanImportText(text) {
  return (text || '').replace(/\s+/g, ' ').trim();
}

function normalizeImportKey(text) {
  return cleanImportText(text).toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

function normalizeImportRegister(value) {
  const text = cleanImportText(value).toUpperCase();
  const uMatch = text.match(/(?:^|[^A-Z0-9])U\s*0*(\d{1,3})\s*([A-Z]?)/i);
  if (uMatch) return `U${uMatch[1].padStart(2, '0')}${uMatch[2] || ''}`;
  const match = text.match(/L\s*0*(\d+)(S?)/i);
  if (match) return `L${parseInt(match[1], 10)}${match[2] || ''}`;
  return text.replace(/\s+/g, '');
}

function normalizeArticleNo(value) {
  return cleanImportText(value)
    .toUpperCase()
    .replace(/[^A-Z0-9]/g, '')
    .replace(/1$/, '');
}

function inferOfferPower(value) {
  const text = cleanImportText(value);
  const watt = text.match(/(\d+(?:[,.]\d+)?)\s*W\b/i);
  return watt ? parseImportedNumber(watt[1]) : 0;
}

function inferOfferControl(value) {
  const text = cleanImportText(value);
  if (/dagsljus|daylight|tageslicht/i.test(text)) return 'daylight';
  if (/PIR|sensor|presence|närvaro|tilstede|präsenz/i.test(text)) return 'presence';
  if (/DALI|switch|on\/off|on-off|manual|manuell/i.test(text)) return 'manual';
  return 'none';
}

function parseImportedNumber(value) {
  if (typeof value === 'number') return value;
  const normalized = String(value || '').replace(/\s+/g, '').replace(',', '.');
  const parsed = parseFloat(normalized);
  return Number.isFinite(parsed) ? parsed : 0;
}

function roundImport(value, decimals) {
  const factor = Math.pow(10, decimals);
  return Math.round(value * factor) / factor;
}

// ─── Installation management ──────────────────────────────────────────────────
function addInstallation(name) {
  const id = ++instCounter;
  installations.push({ id, name: name || '', rooms: [] });
  syncFixedInstallationNames();
  renderInstallations();
}

function onInstNameChange(id, value) {
  const inst = installations.find(i => i.id === id);
  if (!inst) return;
  const idx = installations.findIndex(i => i.id === id);
  const fixed = fixedInstallationName(idx);
  if (fixed) {
    inst.name = fixed;
    const el = document.getElementById(`inst-name-${id}`);
    if (el) el.value = fixed;
    return;
  }
  inst.name = value;
  markDirty();
}

function removeInstallation(id) {
  const idx = installations.findIndex(i => i.id === id);
  if (idx >= 0 && idx < 2) return;
  if (installations.length <= 1) return;
  installations = installations.filter(i => i.id !== id);
  renderInstallations();
  markDirty();
}

function renderInstallations() {
  const con = document.getElementById('installations-container');
  con.innerHTML = '';
  const displayOrder = installations.map((inst, idx) => ({ inst, idx }));
  if (displayOrder.length > 1) {
    displayOrder.splice(0, 2, displayOrder[1], displayOrder[0]);
  }
  displayOrder.forEach(({ inst, idx }) => {
    const div = document.createElement('div');
    const isExisting = idx === 0;
    const isNew = idx === 1;
    div.className = 'card p-5' + (isNew ? ' inst-new' : '') + (isExisting ? ' inst-existing' : '');
    div.id = `inst-${inst.id}`;
    div.innerHTML = instHTML(inst, idx);
    con.appendChild(div);
    inst.rooms.forEach(room => {
      renderRoom(inst.id, room);
      room.luminaires.forEach((lum, idx) => renderLuminaire(room.id, lum.id, idx + 1));
    });
  });
  updateComparisonSelectionNote();
  renderLuminairePriceVisibility();
}

function instHTML(inst, idx) {
  const placeholder = idx === 0 ? t('default_inst_existing') : idx === 1 ? t('default_inst_new') : '';
  const fixedName = fixedInstallationName(idx);
  const fixedNote = fixedInstallationNote(idx);
  const value = fixedName || inst.name || '';
  const readonly = fixedName ? ' readonly aria-readonly="true" tabindex="-1"' : '';
  const oninput = fixedName ? '' : ` oninput="onInstNameChange(${inst.id}, this.value)"`;
  const removeButton = idx < 2 ? '' : `<button class="btn btn-danger btn-sm no-print" onclick="removeInstallation(${inst.id})">${uiIcon('close')} ${t('remove')}</button>`;
  return `
    <div class="flex justify-between items-center mb-4">
      <div class="flex flex-col items-start gap-1">
        <input class="font-semibold text-base border-none bg-transparent focus:outline-none" id="inst-name-${inst.id}" type="text" value="${value}" placeholder="${placeholder}"${readonly}${oninput} style="width:320px">
        ${fixedNote ? `<div class="text-xs leading-4 text-gray-500 max-w-3xl">${fixedNote}</div>` : ''}
      </div>
      ${removeButton}
    </div>
    <div id="rooms-${inst.id}" class="space-y-4"></div>
    <button class="btn btn-secondary btn-sm mt-3 no-print" onclick="addRoom(${inst.id})">+ ${t('add_room')}</button>`;
}

// ─── Room management ──────────────────────────────────────────────────────────
function addRoom(instId) {
  const inst = installations.find(i => i.id === instId);
  if (!inst) return;
  const id = ++roomCounter;
  inst.rooms.push({ id, luminaires: [], buildingKey: '', roomKey: '', selected: true });
  renderRoom(instId, inst.rooms[inst.rooms.length - 1]);
  addLuminaire(instId, id);
  updateComparisonSelectionNote();
}

function removeRoom(instId, roomId) {
  const inst = installations.find(i => i.id === instId);
  if (inst) inst.rooms = inst.rooms.filter(r => r.id !== roomId);
  const el = document.getElementById(`room-${roomId}`);
  if (el) el.remove();
  updateComparisonSelectionNote();
  markDirty();
}

function findRoom(roomId) {
  for (const inst of installations) {
    const r = inst.rooms.find(r => r.id === roomId);
    if (r) return r;
  }
  return null;
}

function renderRoom(instId, room) {
  const container = document.getElementById(`rooms-${instId}`);
  if (!container) return;
  const div = document.createElement('div');
  div.id = `room-${room.id}`;
  div.className = 'border border-gray-200 rounded-lg p-4 bg-gray-50';
  div.innerHTML = roomHTML(instId, room);
  container.appendChild(div);
}

function buildingOptions() {
  return Object.entries(BUILDINGS).map(([k, v]) =>
    `<option value="${k}">${t(v.labelKey)}</option>`
  ).join('');
}

function roomOptions(buildingKey) {
  if (!buildingKey || !BUILDINGS[buildingKey]) return `<option value="">${t('select_room')}</option>`;
  return `<option value="">${t('select_room')}</option>` +
    BUILDINGS[buildingKey].rooms.map(r =>
      `<option value="${r.key}">${roomName(r.key)}</option>`
    ).join('');
}

function roomHTML(instId, room) {
  return `
    <div class="flex justify-between items-center mb-3">
      <div class="sec-lbl mb-0">${t('room_type_lbl')}</div>
      <button class="btn btn-danger btn-sm no-print" onclick="removeRoom(${instId},${room.id})">${uiIcon('close')}</button>
    </div>
    <label class="room-compare-toggle mb-3">
      <input id="room-include-${room.id}" type="checkbox" ${roomSelectedValue(room) ? 'checked' : ''} onchange="onRoomSelectionChange(${room.id}, this.checked)">
      <span>${t('room_compare_include')}</span>
    </label>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-3 mb-3">
      <div class="col-span-2">
        <label class="block text-xs text-gray-500 mb-1">${t('room_name')}</label>
        <input class="inp" id="room-name-${room.id}" type="text" placeholder="" oninput="markDirty()">
      </div>
      <div>
        <label class="block text-xs text-gray-500 mb-1">${t('building_type')}</label>
        <select class="inp" id="room-btype-${room.id}" onchange="onBuildingChange(${room.id})" oninput="markDirty()">
          <option value="">${t('select_building')}</option>
          ${buildingOptions()}
        </select>
      </div>
      <div>
        <label class="block text-xs text-gray-500 mb-1">${t('room_type')}</label>
        <select class="inp" id="room-rtype-${room.id}" onchange="onRoomTypeChange(${room.id})" oninput="markDirty()">
          <option value="">${t('select_room')}</option>
        </select>
      </div>
      <div>
        <label class="block text-xs text-gray-500 mb-1">${t('room_count')}</label>
        <input class="inp" id="room-count-${room.id}" type="number" value="1" min="1" oninput="markDirty()">
      </div>
      <div>
        <label class="block text-xs text-gray-500 mb-1">${t('room_sqm')}</label>
        <input class="inp" id="room-sqm-${room.id}" type="number" value="0" oninput="markDirty()">
      </div>
    </div>
    <div class="sec-lbl">${t('luminaires')}</div>
    <div id="lums-${room.id}" class="space-y-2"></div>
    <button class="btn btn-secondary btn-sm mt-2 no-print" onclick="addLuminaire(null,${room.id})">+ ${t('add_lum')}</button>`;
}

function onBuildingChange(roomId) {
  const bEl = document.getElementById(`room-btype-${roomId}`);
  const rEl = document.getElementById(`room-rtype-${roomId}`);
  if (!bEl || !rEl) return;
  const bKey = bEl.value;
  rEl.innerHTML = roomOptions(bKey);
  const room = findRoom(roomId);
  if (room) { room.buildingKey = bKey; room.roomKey = ''; }
  markDirty();
}

function onRoomTypeChange(roomId) {
  const rEl = document.getElementById(`room-rtype-${roomId}`);
  const bEl = document.getElementById(`room-btype-${roomId}`);
  if (!rEl || !bEl) return;
  const bKey = bEl.value;
  const rKey = rEl.value;
  const room = findRoom(roomId);
  if (room) room.roomKey = rKey;
  // Auto-fill luminaire reduction factors based on room defaults
  if (bKey && rKey && BUILDINGS[bKey]) {
    const rd = BUILDINGS[bKey].rooms.find(r => r.key === rKey);
    if (rd) {
      const inst = installations.find(i => i.rooms.find(r => r.id === roomId));
      if (inst) {
        const lumList = findRoom(roomId)?.luminaires || [];
        lumList.forEach(lum => {
          const ctrlEl = document.getElementById(`lum-ctrl-${lum.id}`);
          if (ctrlEl && ctrlEl.value !== 'none') {
            updateReductionFromCtrl(roomId, lum.id, rd);
          }
        });
      }
    }
  }
  markDirty();
}

function rebuildRoomDropdowns() {
  // Rebuild all building type and room type selects with translated names
  installations.forEach(inst => {
    inst.rooms.forEach(room => {
      const bEl = document.getElementById(`room-btype-${room.id}`);
      const rEl = document.getElementById(`room-rtype-${room.id}`);
      if (!bEl || !rEl) return;
      const savedB = bEl.value;
      const savedR = rEl.value;
      bEl.innerHTML = `<option value="">${t('select_building')}</option>` + buildingOptions();
      bEl.value = savedB;
      rEl.innerHTML = roomOptions(savedB);
      rEl.value = savedR;
    });
  });
}

function updateReductionFromCtrl(roomId, lumId, roomData) {
  const ctrlEl = document.getElementById(`lum-ctrl-${lumId}`);
  const rfEl = document.getElementById(`lum-reduction-${lumId}`);
  if (!ctrlEl || !rfEl || !roomData) return;
  const ctrl = ctrlEl.value;
  let rf = 1;
  if (ctrl === 'manual')   rf = roomData.rf_manual;
  if (ctrl === 'presence') rf = roomData.rf_manual * roomData.rf_presence;
  if (ctrl === 'daylight') rf = roomData.rf_manual * roomData.rf_presence * roomData.rf_daylight;
  rfEl.value = Math.round(rf * 1000) / 1000;
  markDirty();
}

function onCtrlChange(roomId, lumId) {
  const bEl = document.getElementById(`room-btype-${roomId}`);
  const rEl = document.getElementById(`room-rtype-${roomId}`);
  if (!bEl || !rEl) return;
  const bKey = bEl.value;
  const rKey = rEl.value;
  if (bKey && rKey && BUILDINGS[bKey]) {
    const rd = BUILDINGS[bKey].rooms.find(r => r.key === rKey);
    updateReductionFromCtrl(roomId, lumId, rd);
  }
  markDirty();
}

// ─── Luminaire management ─────────────────────────────────────────────────────
function addLuminaire(instId, roomId) {
  const room = findRoom(roomId);
  if (!room) return;
  const id = ++lumCounter;
  room.luminaires.push({ id });
  renderLuminaire(roomId, id, room.luminaires.length);
}

function removeLuminaire(roomId, lumId) {
  const room = findRoom(roomId);
  if (room) room.luminaires = room.luminaires.filter(l => l.id !== lumId);
  const el = document.getElementById(`lum-row-${lumId}`);
  if (el) el.remove();
}

function renderLuminaire(roomId, lumId, idx) {
  const container = document.getElementById(`lums-${roomId}`);
  if (!container) return;
  const div = document.createElement('div');
  div.id = `lum-row-${lumId}`;
  div.className = 'lum-row';
  div.innerHTML = lumHTML(roomId, lumId, idx);
  container.appendChild(div);
}

function controlOptions() {
  return `
    <option value="none">${t('ctrl_none')}</option>
    <option value="manual">${t('ctrl_manual')}</option>
    <option value="presence">${t('ctrl_presence')}</option>
    <option value="daylight">${t('ctrl_daylight')}</option>`;
}

function lumHTML(roomId, lumId, idx) {
  return `
    <div class="flex justify-between items-center mb-2">
      <div class="flex items-center gap-2">
        <span class="text-xs font-semibold text-gray-600">${t('lum_type')}</span>
        <input class="inp text-xs font-medium" id="lum-label-${lumId}" type="text" placeholder="${t('lum_label')}" style="width:130px" oninput="markDirty()">
      </div>
      <button class="btn btn-danger btn-sm no-print" onclick="removeLuminaire(${roomId},${lumId})">${uiIcon('close')}</button>
    </div>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-2 text-xs">
      <div><label class="block text-gray-500 mb-1">${t('lum_count')}</label>
        <input class="inp" id="lum-count-${lumId}" type="number" value="10" min="0" oninput="markDirty()"></div>
      <div class="lum-price-field"><label class="block text-gray-500 mb-1">${t('lum_price')}</label>
        <input class="inp" id="lum-price-${lumId}" type="number" value="0" min="0" oninput="markDirty()"></div>
      <div><label class="block text-gray-500 mb-1">${t('lum_install')}</label>
        <input class="inp" id="lum-install-${lumId}" type="number" value="200" min="0" oninput="markDirty()"></div>
      <div><label class="block text-gray-500 mb-1">${t('lum_power')}</label>
        <input class="inp" id="lum-power-${lumId}" type="number" value="40" min="0" oninput="markDirty()"></div>
      <div><label class="block text-gray-500 mb-1">${t('lum_ctrl')}</label>
        <select class="inp" id="lum-ctrl-${lumId}" onchange="onCtrlChange(${roomId},${lumId})" oninput="markDirty()">
          ${controlOptions()}
        </select></div>
      <div><label class="block text-gray-500 mb-1">${t('lum_reduction')}</label>
        <input class="inp" id="lum-reduction-${lumId}" type="number" value="1" min="0" max="1" step="0.001" oninput="markDirty()"></div>
      <div><label class="block text-gray-500 mb-1">${t('lum_maint')}</label>
        <input class="inp" id="lum-maintenance-${lumId}" type="number" value="0" min="0" oninput="markDirty()"></div>
    </div>`;
}

// ─── Calculation ──────────────────────────────────────────────────────────────
function getParams() {
  return {
    years: num('p-years', 20),
    rate: num('p-rate', 5) / 100,
    elPrice: num('p-elprice', 3),
    priceChange: num('p-pricechange', 0) / 100,
    co2Factor: num('p-co2', 0),
    opHours: num('p-ophours', 4000)
  };
}

function num(id, def = 0) {
  const el = document.getElementById(id);
  const v = parseFloat(el ? el.value : def);
  return isNaN(v) ? def : v;
}

const PARAM_FIELD_IDS = ['p-years', 'p-rate', 'p-elprice', 'p-pricechange', 'p-co2', 'p-ophours'];
let resultParamRecalcTimer = null;

function syncResultParamFields() {
  PARAM_FIELD_IDS.forEach(id => {
    const source = document.getElementById(id);
    const mirror = document.getElementById(`result-${id}`);
    if (source && mirror && mirror.value !== source.value) mirror.value = source.value;
  });
  updateCurrencyDisplay();
}

function onResultParamInput(sourceId, value) {
  const source = document.getElementById(sourceId);
  if (source) source.value = value;
  markDirty();
  if (resultParamRecalcTimer) clearTimeout(resultParamRecalcTimer);
  resultParamRecalcTimer = setTimeout(() => {
    resultParamRecalcTimer = null;
    if (!document.getElementById('page-result')?.classList.contains('hidden')) {
      calculate({ switchToResult: false });
    }
  }, 180);
}

function npvFactor(r, n) {
  if (Math.abs(r) < 1e-9) return n;
  return (1 - Math.pow(1 + r, -n)) / r;
}

function energyNpvFactor(r, p, n) {
  const q = (1 + p) / (1 + r);
  if (Math.abs(q - 1) < 1e-9) return n;
  return q * (1 - Math.pow(q, n)) / (1 - q);
}

function calcInstallation(inst, params) {
  const { years, rate, elPrice, priceChange, co2Factor, opHours } = params;
  const mainPVF = npvFactor(rate, years);
  const enePVF = energyNpvFactor(rate, priceChange, years);
  const roomResults = [];
  const activeRooms = inst.rooms.filter(roomSelectedValue);
  let totInvest = 0, totAnnualEnergy = 0, totAnnualMaint = 0;

  for (const room of activeRooms) {
    const roomCount = num(`room-count-${room.id}`, 1);
    const sqm = num(`room-sqm-${room.id}`, 0);
    const roomName2 = document.getElementById(`room-name-${room.id}`)?.value || '';
    const rTypeEl = document.getElementById(`room-rtype-${room.id}`);
    const rTypeKey = rTypeEl?.value || '';
    const roomLabel = roomName2 || (rTypeKey ? roomName(rTypeKey) : `Room ${room.id}`);
    let roomInvest = 0, roomAnnualEnergy = 0, roomAnnualMaint = 0;

    for (const lum of room.luminaires) {
      const count = num(`lum-count-${lum.id}`, 0) * roomCount;
      const price = num(`lum-price-${lum.id}`, 0);
      const install = num(`lum-install-${lum.id}`, 0);
      const power = num(`lum-power-${lum.id}`, 0);
      const reduction = num(`lum-reduction-${lum.id}`, 1);
      const maint = num(`lum-maintenance-${lum.id}`, 0);

      const luminaireCost = hideLuminairePrices ? 0 : price;
      roomInvest += count * (luminaireCost + install);
      roomAnnualEnergy += count * power / 1000 * opHours * reduction;
      roomAnnualMaint += maint * roomCount;
    }

    const roomTotalLCC = roomInvest + roomAnnualEnergy * elPrice * enePVF + roomAnnualMaint * mainPVF;
    const roomAnnualEnergyCost = roomAnnualEnergy * elPrice;
    roomResults.push({ roomLabel, roomCount, sqm, roomInvest, roomAnnualEnergy, roomAnnualEnergyCost, roomAnnualMaint, roomTotalLCC });
    totInvest += roomInvest;
    totAnnualEnergy += roomAnnualEnergy;
    totAnnualMaint += roomAnnualMaint;
  }

  const annualEnergyCost = totAnnualEnergy * elPrice;
  const pvEnergy = annualEnergyCost * enePVF;
  const pvMaint = totAnnualMaint * mainPVF;
  const totalLCC = totInvest + pvEnergy + pvMaint;
  const co2 = totAnnualEnergy * co2Factor;

  return {
    invest: totInvest, annualEnergyCost, pvEnergy, annualMaint: totAnnualMaint, pvMaint,
    totalLCC, co2, annualEnergy: totAnnualEnergy, enePVF, mainPVF, roomResults,
    selectedRooms: activeRooms.length, totalRooms: inst.rooms.length
  };
}

function instDisplayName(inst, idx) {
  const fixed = fixedInstallationName(idx);
  if (fixed) return fixed;
  const name = (inst.name || '').trim();
  if (name) return name;
  return `${t('installation')} ${idx + 1}`;
}

function calculate(options = {}) {
  syncFixedInstallationNames();
  installations.forEach((inst, idx) => {
    const el = document.getElementById(`inst-name-${inst.id}`);
    if (el) inst.name = fixedInstallationName(idx) || el.value;
  });
  const params = getParams();
  calcResults = { params, installations: installations.map((inst, idx) => ({ ...inst, name: instDisplayName(inst, idx), result: calcInstallation(inst, params) })) };
  dirty = false;
  renderResults();
  if (options.switchToResult !== false) switchTab('result');
}

// ─── Render Results ───────────────────────────────────────────────────────────
const REPORT_CHART_SCHEME = {
  germany: '#C6DBCB',
  finland: '#C2D3D6',
  norway: '#D9C2BE',
  sweden: '#E9EFD0',
  all: '#00656C',
  all2: '#97999A'
};
const COLORS = [
  REPORT_CHART_SCHEME.all,
  REPORT_CHART_SCHEME.all2,
  REPORT_CHART_SCHEME.sweden,
  REPORT_CHART_SCHEME.norway,
  REPORT_CHART_SCHEME.finland,
  REPORT_CHART_SCHEME.germany
];
const AURA_CHART_COLORS = {
  invest: REPORT_CHART_SCHEME.all,
  energy: REPORT_CHART_SCHEME.germany,
  maintenance: REPORT_CHART_SCHEME.all2,
  maintenanceSoft: REPORT_CHART_SCHEME.sweden,
  kwh: REPORT_CHART_SCHEME.finland,
  co2: REPORT_CHART_SCHEME.norway,
  positive: REPORT_CHART_SCHEME.all,
  negative: REPORT_CHART_SCHEME.norway
};

function fmt(n, dec = 0) {
  return (Number(n) || 0).toLocaleString(currencyLocale(), { minimumFractionDigits: dec, maximumFractionDigits: dec });
}

function formatMoney(value, dec = 0) {
  return `${fmt(value, dec)} ${currencySymbol()}`;
}

function formatEnergyPrice(value) {
  const decimals = Math.abs(value) < 1 ? 2 : 2;
  return `${fmt(value, decimals)} ${currencyKwhUnit()}`;
}

function chartMoneyTick(value) {
  return `${fmt(value, 0)} ${currencySymbol()}`;
}

const stackedBarTotalLabelPlugin = {
  id: 'stackedBarTotalLabel',
  afterDatasetsDraw(chart) {
    if (chart.config.type !== 'bar') return;
    const { ctx, data, chartArea } = chart;
    const datasetMetas = chart.getSortedVisibleDatasetMetas().filter(meta => !meta.hidden);
    if (!datasetMetas.length) return;

    ctx.save();
    ctx.textAlign = 'center';
    const totalLabelPositions = new Map();

    data.labels.forEach((_, index) => {
      const total = datasetMetas.reduce((sum, meta) => sum + (Number(chart.data.datasets[meta.index]?.data[index]) || 0), 0);
      if (!total) return;

      const barEntries = datasetMetas
        .map(meta => ({
          bar: meta.data[index],
          value: Number(chart.data.datasets[meta.index]?.data[index]) || 0
        }))
        .filter(entry => entry.bar);
      const nonZeroEntries = barEntries.filter(entry => entry.value);
      if (nonZeroEntries.length <= 1) return;
      const bars = barEntries.map(entry => entry.bar);
      if (!bars.length) return;

      const x = bars[0].x;
      const stackTop = Math.min(...bars.map(bar => bar.y));
      const segmentLabelYs = barEntries
        .map(entry => {
          if (!entry.value) return null;
          const top = Math.min(entry.bar.y, entry.bar.base);
          const bottom = Math.max(entry.bar.y, entry.bar.base);
          return top + (bottom - top) / 2;
        })
        .filter(y => Number.isFinite(y));
      const nearestSegmentY = Math.min(...segmentLabelYs);
      const safeAboveSegmentY = Number.isFinite(nearestSegmentY) ? nearestSegmentY - 16 : stackTop - 8;
      const y = Math.max(chartArea.top + 12, Math.min(stackTop - 8, safeAboveSegmentY));
      totalLabelPositions.set(index, y);
      ctx.fillStyle = '#334155';
      ctx.font = `700 11px ${REPORT_FONT_FAMILY}`;
      ctx.textBaseline = 'bottom';
      ctx.fillText(formatMoney(total), x, y);
    });

    datasetMetas.forEach(meta => {
      const dataset = chart.data.datasets[meta.index] || {};
      meta.data.forEach((bar, index) => {
        const value = Number(dataset.data?.[index]) || 0;
        if (!value) return;
        const top = Math.min(bar.y, bar.base);
        const bottom = Math.max(bar.y, bar.base);
        const segmentHeight = bottom - top;
        const y = top + segmentHeight / 2;
        const totalY = totalLabelPositions.get(index);
        if (Number.isFinite(totalY) && y - totalY < 16) return;
        const background = dataset.backgroundColor;
        const fill = readableChartLabelColor(background);

        ctx.font = `700 10px ${REPORT_FONT_FAMILY}`;
        ctx.textBaseline = 'middle';
        ctx.fillStyle = fill;
        ctx.lineWidth = segmentHeight < 18 ? 3 : 2;
        ctx.strokeStyle = fill === '#ffffff' ? 'rgba(16,42,51,.45)' : 'rgba(255,255,255,.9)';
        ctx.strokeText(formatMoney(value), bar.x, y);
        ctx.fillText(formatMoney(value), bar.x, y);
      });
    });
    ctx.restore();
  }
};

function chartLabelText(value) {
  return fmt(value, Math.abs(value) < 10 && value !== 0 ? 1 : 0);
}

function hexLuminance(hex) {
  const match = String(hex || '').match(/^#?([0-9a-f]{6})$/i);
  if (!match) return 0;
  const [r, g, b] = match[1].match(/.{2}/g).map(part => parseInt(part, 16) / 255);
  const lin = value => value <= 0.03928 ? value / 12.92 : Math.pow((value + 0.055) / 1.055, 2.4);
  return 0.2126 * lin(r) + 0.7152 * lin(g) + 0.0722 * lin(b);
}

function readableChartLabelColor(backgroundColor) {
  return hexLuminance(backgroundColor) > 0.46 ? '#102a33' : '#ffffff';
}

const barValueLabelPlugin = {
  id: 'barValueLabel',
  afterDatasetsDraw(chart) {
    if (chart.config.type !== 'bar') return;
    const { ctx, chartArea } = chart;
    ctx.save();
    ctx.font = `700 10px ${REPORT_FONT_FAMILY}`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    chart.getSortedVisibleDatasetMetas().forEach(meta => {
      const dataset = chart.data.datasets[meta.index] || {};
      meta.data.forEach((bar, index) => {
        const value = Number(dataset.data?.[index]) || 0;
        if (!value) return;
        const height = Math.abs((bar.base ?? chartArea.bottom) - bar.y);
        const fitsInside = height >= 22;
        const y = fitsInside ? bar.y + Math.min(14, height / 2) : Math.max(chartArea.top + 8, bar.y - 8);
        ctx.fillStyle = fitsInside ? readableChartLabelColor(dataset.backgroundColor) : '#102a33';
        ctx.fillText(chartLabelText(value), bar.x, y);
      });
    });
    ctx.restore();
  }
};

const doughnutValueLabelPlugin = {
  id: 'doughnutValueLabel',
  afterDatasetsDraw(chart) {
    if (chart.config.type !== 'doughnut') return;
    const { ctx } = chart;
    const dataset = chart.data.datasets[0] || {};
    const meta = chart.getDatasetMeta(0);
    const values = dataset.data || [];
    const colors = Array.isArray(dataset.backgroundColor) ? dataset.backgroundColor : [];

    ctx.save();
    ctx.font = `700 12px ${REPORT_FONT_FAMILY}`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    meta.data.forEach((arc, index) => {
      const value = Number(values[index]) || 0;
      if (!value) return;
      const angle = (arc.startAngle + arc.endAngle) / 2;
      const radius = (arc.innerRadius + arc.outerRadius) / 2;
      const x = arc.x + Math.cos(angle) * radius;
      const y = arc.y + Math.sin(angle) * radius;
      ctx.fillStyle = readableChartLabelColor(colors[index]);
      ctx.fillText(chartLabelText(value), x, y);
    });
    ctx.restore();
  }
};

function formatPercentDifference(base, value) {
  if (!Number.isFinite(base) || Math.abs(base) < 1e-9) return '—';
  const diff = (value - base) / base * 100;
  return `${diff > 0 ? '+' : ''}${fmt(diff, 0)} %`;
}

function currencyLegendLabel(label) {
  return `${String(label || '').replace(/\s*\([^)]*\)\s*$/, '')} (${currencySymbol()})`;
}

function paybackYearsBetween(cur, nw) {
  if (!cur || !nw) return null;
  const extraInvest = (nw.result?.invest || 0) - (cur.result?.invest || 0);
  const annualSaving = ((cur.result?.annualEnergyCost || 0) + (cur.result?.annualMaint || 0)) -
    ((nw.result?.annualEnergyCost || 0) + (nw.result?.annualMaint || 0));
  if (extraInvest <= 0 && annualSaving > 0) return 0;
  if (annualSaving <= 0) return null;
  return extraInvest / annualSaving;
}

function formatPaybackYears(value) {
  if (value === null || value === undefined || !Number.isFinite(value)) return '—';
  if (value <= 0) return t('payback_immed');
  return `${fmt(value, value < 10 ? 1 : 0)} ${t('payback_unit')}`;
}

function renderResults() {
  if (!calcResults) return;
  syncFixedInstallationNames();
  syncResultParamFields();
  renderLuminairePriceVisibility();
  calcResults.installations.forEach((inst, idx) => {
    inst.name = instDisplayName(installations[idx] || inst, idx);
  });
  updateComparisonSelectionNote();
  const { params, installations: allInsts } = calcResults;
  const insts = visibleResultInstallations(allInsts);
  const displayInsts = insts.length ? insts : allInsts;
  renderKPIs(displayInsts, params);
  renderLCCChart(displayInsts);
  renderAccumChart(displayInsts, params);
  renderEnergyChart(displayInsts);
  renderCO2Chart(displayInsts);
  renderDetailTable(displayInsts, params);
  renderWinWin(allInsts, params);
  renderSummary(allInsts, params);
}

function renderKPIs(insts, params) {
  const con = document.getElementById('kpi-cards');
  con.innerHTML = '';
  insts.forEach((inst, i) => {
    const r = inst.result;
    const saving = i > 0 ? insts[0].result.totalLCC - r.totalLCC : null;
    const sourceIndex = Number.isFinite(inst._resultSourceIndex) ? inst._resultSourceIndex : i;
    const toneClass = sourceIndex === 0 ? 'result-kpi-existing' : (sourceIndex === 1 ? 'result-kpi-new' : 'result-kpi-alt');
    const borderColor = COLORS[sourceIndex] || COLORS[i] || AURA_CHART_COLORS.accent;
    con.innerHTML += `
      <div class="card result-kpi-card ${toneClass} p-4 border-l-4" style="border-left-color:${borderColor}">
        <div class="text-xs text-gray-500 mb-1">${inst.name}</div>
        <div class="text-2xl font-bold text-gray-900">${formatMoney(r.totalLCC)}</div>
        <div class="text-xs text-gray-400 mt-1">${t('kpi_total')} (${params.years} ${t('kpi_years')})</div>
        ${saving !== null ? `<div class="text-sm font-semibold mt-2" style="color:${saving > 0 ? AURA_CHART_COLORS.positive : AURA_CHART_COLORS.negative}">${saving > 0 ? '✓ '+t('kpi_saving') : '▲ '+t('kpi_extra')}: ${formatMoney(Math.abs(saving))}</div>` : ''}
      </div>`;
  });

  const cur = insts[0];
  const nw = insts[1];
  const payback = cur && nw ? paybackYearsBetween(cur, nw) : null;
  const co2Delta = cur && nw ? (cur.result.co2 - nw.result.co2) : null;
  const co2Tone = co2Delta === null || Math.abs(co2Delta) < 1e-9 ? '#64748b' : (co2Delta > 0 ? AURA_CHART_COLORS.positive : AURA_CHART_COLORS.negative);
  const co2Note = co2Delta === null || Math.abs(co2Delta) < 1e-9 ? t('kpi_co2_same') : (co2Delta > 0 ? t('kpi_co2_lower') : t('kpi_co2_higher'));

  con.innerHTML += `
    <div class="card result-kpi-card result-kpi-alt p-4 border-l-4" style="border-left-color:${AURA_CHART_COLORS.maintenanceSoft}">
      <div class="text-xs text-gray-500 mb-1">${t('kpi_payback')}</div>
      <div class="text-2xl font-bold text-gray-900">${formatPaybackYears(payback)}</div>
      <div class="text-xs text-gray-400 mt-1">${t('kpi_payback_note')}</div>
    </div>
    <div class="card result-kpi-card result-kpi-alt p-4 border-l-4" style="border-left-color:${AURA_CHART_COLORS.co2}">
      <div class="text-xs text-gray-500 mb-1">${t('kpi_co2_delta')}</div>
      <div class="text-2xl font-bold text-gray-900">${co2Delta === null ? '—' : `${fmt(Math.abs(co2Delta), 0)} kg CO₂e/år`}</div>
      <div class="text-sm font-semibold mt-2" style="color:${co2Tone}">${co2Note}</div>
    </div>`;
}

function renderLCCChart(insts) {
  const ctx = document.getElementById('chart-lcc');
  if (charts.lcc) charts.lcc.destroy();
  charts.lcc = new Chart(ctx, {
    type: 'bar',
    plugins: [stackedBarTotalLabelPlugin],
    data: {
      labels: insts.map(i => i.name),
      datasets: [
        { label: t('sum_invest'), data: insts.map(i => Math.round(i.result.invest)), backgroundColor: AURA_CHART_COLORS.invest },
        { label: t('sum_pv_e'),  data: insts.map(i => Math.round(i.result.pvEnergy)), backgroundColor: AURA_CHART_COLORS.energy },
        { label: t('sum_pv_m'), data: insts.map(i => Math.round(i.result.pvMaint)), backgroundColor: AURA_CHART_COLORS.maintenanceSoft },
      ]
    },
    options: {
      responsive: true,
      layout: { padding: { top: 36 } },
      plugins: { legend: { position: 'bottom' } },
      scales: { x: { stacked: true }, y: { stacked: true, grace: '18%', ticks: { callback: chartMoneyTick } } }
    }
  });
}

function renderAccumChart(insts, params) {
  const ctx = document.getElementById('chart-accum');
  if (charts.accum) charts.accum.destroy();
  const years = Array.from({ length: params.years + 1 }, (_, i) => i);
  const datasets = insts.map((inst, i) => {
    const sourceIndex = Number.isFinite(inst._resultSourceIndex) ? inst._resultSourceIndex : i;
    const color = COLORS[sourceIndex] || COLORS[i] || AURA_CHART_COLORS.accent;
    return {
    label: inst.name,
    data: years.map(y => {
      const r = inst.result;
      if (y === 0) return r.invest;
      return r.invest + r.annualEnergyCost * energyNpvFactor(params.rate, params.priceChange, y) + r.annualMaint * npvFactor(params.rate, y);
    }),
    borderColor: color, backgroundColor: '#ffffff', pointBackgroundColor: '#ffffff', pointBorderColor: color, pointBorderWidth: 2, pointRadius: 3, pointStyle: 'circle', tension: 0.3
  };
  });
  charts.accum = new Chart(ctx, {
    type: 'line',
    data: { labels: years.map(y => y), datasets },
    options: {
      responsive: true,
      plugins: { legend: { position: 'bottom', labels: { usePointStyle: true, pointStyle: 'circle', boxWidth: 8, boxHeight: 8 } } },
      scales: {
        x: {
          title: { display: true, text: t('rep_year') }
        },
        y: {
          ticks: { callback: chartMoneyTick }
        }
      }
    }
  });
}

function renderEnergyChart(insts) {
  const ctx = document.getElementById('chart-energy');
  if (charts.energy) charts.energy.destroy();
  const allRooms = [...new Set(insts.flatMap(i => i.result.roomResults.map(r => r.roomLabel)))];
  const datasets = insts.map((inst, i) => {
    const sourceIndex = Number.isFinite(inst._resultSourceIndex) ? inst._resultSourceIndex : i;
    return {
    label: inst.name,
    data: allRooms.map(rn => { const f = inst.result.roomResults.find(r => r.roomLabel === rn); return f ? Math.round(f.roomAnnualEnergy) : 0; }),
    backgroundColor: COLORS[sourceIndex] || COLORS[i] || AURA_CHART_COLORS.accent
  };
  });
  charts.energy = new Chart(ctx, {
    type: 'bar',
    plugins: [barValueLabelPlugin],
    data: { labels: allRooms, datasets },
    options: {
      responsive: true,
      layout: { padding: { top: 18 } },
      plugins: { legend: { position: 'bottom' } }
    }
  });
}

function renderCO2Chart(insts) {
  const ctx = document.getElementById('chart-co2');
  if (charts.co2) charts.co2.destroy();
  charts.co2 = new Chart(ctx, {
    type: 'doughnut',
    plugins: [doughnutValueLabelPlugin],
    data: { labels: insts.map(i => i.name), datasets: [{ data: insts.map(i => Math.round(i.result.co2)), backgroundColor: insts.map((inst, i) => COLORS[Number.isFinite(inst._resultSourceIndex) ? inst._resultSourceIndex : i] || COLORS[i] || AURA_CHART_COLORS.accent), radius: '85%' }] },
    options: { responsive: true, plugins: { legend: { position: 'bottom' } } }
  });
}

function renderDetailTable(insts, params) {
  const table = document.getElementById('result-table');
  const thead = table.querySelector('thead tr');
  const tbody = table.querySelector('tbody');
  thead.innerHTML = `<th class="py-2 px-3 text-left text-xs text-gray-500">${t('tbl_param')}</th>` +
    insts.map(i => `<th class="py-2 px-3 text-right text-xs text-gray-500">${i.name}</th>`).join('') +
    `<th class="py-2 px-3 text-right text-xs text-gray-500">${t('tbl_diff_pct')}</th>`;

  const diffFor = values => insts.length > 1 ? formatPercentDifference(values[0], values[1]) : '—';

  const rows = [
    [t('tbl_period'),        insts.map(() => `${params.years} ${t('kpi_years')}`), insts.map(() => params.years)],
    [t('tbl_rate'),          insts.map(() => `${fmt(params.rate*100, 1)} %`), insts.map(() => params.rate)],
    [t('tbl_el'),            insts.map(() => formatEnergyPrice(params.elPrice)), insts.map(() => params.elPrice)],
    ['—', null],
    [t('tbl_invest'),        insts.map(i => formatMoney(i.result.invest)), insts.map(i => i.result.invest)],
    [t('tbl_annual_energy'), insts.map(i => fmt(i.result.annualEnergy) + ' kWh'), insts.map(i => i.result.annualEnergy)],
    [t('tbl_annual_ecost'),  insts.map(i => formatMoney(i.result.annualEnergyCost)), insts.map(i => i.result.annualEnergyCost)],
    [t('tbl_pvf_e'),         insts.map(i => fmt(i.result.enePVF, 3)), insts.map(i => i.result.enePVF)],
    [t('tbl_pv_e'),          insts.map(i => formatMoney(i.result.pvEnergy)), insts.map(i => i.result.pvEnergy)],
    [t('tbl_annual_m'),      insts.map(i => formatMoney(i.result.annualMaint)), insts.map(i => i.result.annualMaint)],
    [t('tbl_pvf_m'),         insts.map(i => fmt(i.result.mainPVF, 3)), insts.map(i => i.result.mainPVF)],
    [t('tbl_pv_m'),          insts.map(i => formatMoney(i.result.pvMaint)), insts.map(i => i.result.pvMaint)],
    ['—', null],
    [t('tbl_total'),         insts.map(i => formatMoney(i.result.totalLCC)), insts.map(i => i.result.totalLCC)],
    [t('tbl_co2'),           insts.map(i => fmt(i.result.co2)), insts.map(i => i.result.co2)],
  ];

  tbody.innerHTML = rows.map(([label, vals, rawVals]) => {
    if (!vals) return `<tr><td colspan="${insts.length+2}" class="py-1 px-3 border-t border-gray-100"></td></tr>`;
    const bold = label === t('tbl_total');
    return `<tr class="border-t border-gray-100 ${bold ? 'result-total-row font-bold' : ''}">
      <td class="py-2 px-3 text-sm text-gray-700">${label}</td>
      ${vals.map(v => `<td class="py-2 px-3 text-sm text-right text-gray-900">${v}</td>`).join('')}
      <td class="py-2 px-3 text-sm text-right text-gray-900">${rawVals ? diffFor(rawVals) : '—'}</td>
    </tr>`;
  }).join('');
}

function compactReportFact(text, maxLength = 500) {
  const normalized = String(text || '').replace(/\s+/g, ' ').trim();
  if (normalized.length <= maxLength) return normalized;
  return `${normalized.slice(0, maxLength - 1).replace(/\s+\S*$/, '')}…`;
}

function reportEnergyFactText(curR, nwR) {
  const kwhSaved = Math.max(0, (curR?.annualEnergy || 0) - (nwR?.annualEnergy || 0));
  const co2Saved = Math.max(0, (curR?.co2 || 0) - (nwR?.co2 || 0));
  const kwh = fmt(kwhSaved, 0);
  const co2 = fmt(co2Saved, 0);
  const facts = {
    SE: {
      energy: `En minskning på ${kwh} kWh per år betyder att lokalerna får ljus när det behövs, men slipper köpa energi när ytor står tomma. Rätt styrd belysning frigör pengar till verksamheten och sänker klimatpåverkan utan att tumma på ljuskvaliteten.`,
      co2: `I den här kalkylen minskar klimatpåverkan med ${co2} kg CO₂e per år. När belysningen använder mindre energi blir nyttan dubbel: lägre driftskostnad och en vardagsmiljö som visar konkret ansvar för resurserna.`,
      fallback: 'Ljuskvalitet påverkar hur vi uppfattar rum, orienterar oss och orkar fokusera. Genom att kombinera rätt armaturer med behovsstyrning kan en installation ge både funktionell nytta och mer resurseffektiv drift över tid.'
    },
    NO: {
      energy: `En reduksjon på ${kwh} kWh per år betyr at lokalene får lys når det trengs, men slipper å kjøpe energi når arealer står tomme. Riktig styrt belysning frigjør penger til virksomheten og reduserer klimaavtrykket uten å svekke lyskvaliteten.`,
      co2: `I denne beregningen reduseres klimaavtrykket med ${co2} kg CO₂e per år. Når belysningen bruker mindre energi, blir gevinsten dobbel: lavere driftskostnad og et hverdagsmiljø som viser konkret ansvar for ressursene.`,
      fallback: 'Lyskvalitet påvirker hvordan vi oppfatter rom, orienterer oss og klarer å fokusere. Ved å kombinere riktige armaturer med behovsstyring kan en installasjon gi både funksjonell nytte og mer ressurseffektiv drift over tid.'
    },
    DE: {
      energy: `Eine Reduktion von ${kwh} kWh pro Jahr bedeutet Licht dort, wo es benötigt wird, und weniger Energiebezug, wenn Flächen ungenutzt sind. Bedarfsgerechte Beleuchtung entlastet das Budget und reduziert die Klimaauswirkung, ohne die Lichtqualität zu schwächen.`,
      co2: `In dieser Kalkulation sinkt die Klimaauswirkung um ${co2} kg CO₂e pro Jahr. Weniger Energie für Beleuchtung schafft einen doppelten Nutzen: niedrigere Betriebskosten und ein Arbeitsumfeld mit sichtbar verantwortungsvollem Ressourceneinsatz.`,
      fallback: 'Lichtqualität beeinflusst, wie wir Räume wahrnehmen, uns orientieren und konzentriert bleiben. Mit passenden Leuchten und bedarfsgerechter Steuerung kann eine Installation funktionalen Nutzen und effizienteren Betrieb verbinden.'
    },
    EN: {
      energy: `A reduction of ${kwh} kWh per year means the space gets light when it is needed, while avoiding energy use when areas are empty. Demand-based lighting frees budget for the business and reduces climate impact without compromising light quality.`,
      co2: `In this calculation, climate impact is reduced by ${co2} kg CO₂e per year. Lower lighting energy creates a double benefit: reduced operating cost and an everyday environment that demonstrates responsible use of resources.`,
      fallback: 'Light quality affects how we read a room, navigate and stay focused. By combining the right luminaires with demand-based controls, an installation can deliver both functional value and more resource-efficient operation over time.'
    }
  };
  const localizedFacts = facts[lang] || facts.EN;
  if (kwhSaved > 0) return compactReportFact(localizedFacts.energy);
  if (co2Saved > 0) return compactReportFact(localizedFacts.co2);
  return compactReportFact(localizedFacts.fallback);
}

function renderWinWin(insts, params) {
  const projectEl = document.getElementById('win-project');
  if (!projectEl || !insts.length) return;
  const cur = insts[0];
  const nw = insts.length > 1 ? insts[1] : insts[0];
  const curR = cur.result;
  const nwR = nw.result;
  const showNewOnly = resultInstallFilterValue() === 'new';
  const rawSaving = curR.totalLCC - nwR.totalLCC;
  const lccValue = showNewOnly ? nwR.totalLCC : Math.abs(rawSaving);
  const kwhValue = showNewOnly ? nwR.annualEnergy : Math.max(0, curR.annualEnergy - nwR.annualEnergy);
  const co2Value = showNewOnly ? nwR.co2 : Math.max(0, curR.co2 - nwR.co2);
  const projectName = document.getElementById('proj-name')?.value || t('project');

  projectEl.textContent = projectName;
  document.getElementById('win-save-val').textContent = formatMoney(lccValue);
  document.getElementById('win-save-label').textContent = showNewOnly ? t('win_metric_cost_abs') : (rawSaving >= 0 ? t('win_metric_lcc') : t('win_metric_lcc_extra'));
  document.getElementById('win-save-note').textContent = t(showNewOnly ? 'win_metric_cost_abs_note' : 'win_metric_lcc_note');
  document.getElementById('win-kwh-val').textContent = `${fmt(kwhValue, 0)} kWh`;
  document.getElementById('win-energy-label').textContent = t(showNewOnly ? 'win_metric_energy_abs' : 'win_metric_energy');
  document.getElementById('win-energy-note').textContent = t(showNewOnly ? 'win_metric_energy_abs_note' : 'win_metric_energy_note');
  document.getElementById('win-co2-val').textContent = `${fmt(co2Value, 0)} kg CO₂-e`;
  document.getElementById('win-co2-label').textContent = t(showNewOnly ? 'win_metric_co2_abs' : 'win_metric_co2');
  document.getElementById('win-co2-note').textContent = t(showNewOnly ? 'win_metric_co2_abs_note' : 'win_metric_co2_note');
}

function renderSummary(insts, params) {
  const cur = insts[0];
  const nw  = insts.length > 1 ? insts[1] : insts[0];

  // Project meta
  const pName = document.getElementById('proj-name')?.value || '';
  const reportProjectTitle = document.getElementById('rep-proj-title');
  const reportProjectMeta = document.getElementById('rep-proj');
  reportProjectTitle.textContent = pName || '—';
  reportProjectTitle.title = pName || '';
  reportProjectMeta.textContent = pName || '—';
  reportProjectMeta.title = pName || '';
  document.getElementById('rep-date').textContent = document.getElementById('proj-date')?.value || '';
  document.getElementById('rep-officer').textContent = document.getElementById('proj-contact')?.value || '';
  document.getElementById('rep-years').textContent  = `${params.years} ${t('kpi_years')}`;
  document.getElementById('rep-rate').textContent   = `${fmt(params.rate*100, 1)} %`;
  document.getElementById('rep-elp').textContent    = formatEnergyPrice(params.elPrice);
  document.getElementById('rep-pc').textContent     = `${fmt(params.priceChange*100, 1)} %`;
  document.getElementById('rep-co2f').textContent   = `${params.co2Factor} kgCO₂e/kWh`;
  document.getElementById('rep-hours').textContent  = `${params.opHours} h`;
  document.getElementById('rep-th-current').textContent = cur.name;
  document.getElementById('rep-th-new').textContent = nw.name;
  document.getElementById('rep-th-current2').textContent = cur.name;
  document.getElementById('rep-th-new2').textContent = nw.name;

  const pct  = (a, b) => (b === 0 ? '0%' : `${fmt((b - a) / a * 100, 0)}%`);

  // Cost table (Investment, Energy, Maintenance, TOTAL)
  const curR = cur.result, nwR = nw.result;
  const costRows = [
    [t('rep_row_invest') || 'Investment costs', curR.invest, nwR.invest, false],
    [t('rep_row_energy') || 'Energy cost',       curR.pvEnergy, nwR.pvEnergy, false],
    [t('rep_row_maint')  || 'Maintenance costs', curR.pvMaint, nwR.pvMaint, false],
    [t('rep_row_total')  || 'TOTAL LCC costs',   curR.totalLCC, nwR.totalLCC, true],
  ];
  document.getElementById('rep-cost-body').innerHTML = costRows.map(([lbl, a, b, total]) => {
    const p = a ? pct(a, b) : '0%';
    const s = formatMoney(a - b);
    return `<tr class="${total ? 'row-total' : ''}">
      <td>${lbl}</td>
      <td>${formatMoney(a)}</td>
      <td>${formatMoney(b)}</td>
      <td>${p}</td>
      <td>${s}</td>
    </tr>`;
  }).join('');

  // Climate / energy table
  const climateRows = [
    [t('rep_row_energy_use') || 'Energy usage', '[kWh/Y]', curR.annualEnergy, nwR.annualEnergy, 'kWh/Y'],
    [t('rep_row_climate')    || 'Climate impact', '[kgCO₂-e/Y]', curR.co2, nwR.co2, 'kg CO₂-e/Y'],
  ];
  document.getElementById('rep-climate-body').innerHTML = climateRows.map(([lbl, unit, a, b, usuf]) => {
    const p = a ? pct(a, b) : '0%';
    const s = fmt(a - b, 0) + ' ' + usuf;
    return `<tr>
      <td>${lbl}</td>
      <td style="text-align:left;color:#777">${unit}</td>
      <td>${fmt(a, 0)} ${usuf}</td>
      <td>${fmt(b, 0)} ${usuf}</td>
      <td>${p}</td>
      <td>${s}</td>
    </tr>`;
  }).join('');
  const factEl = document.getElementById('rep-fact-text');
  setDisplayText(factEl, reportEnergyFactText(curR, nwR));

  // ── Charts ────────────────────────────────────────────────────────────
  if (charts.repLcc) charts.repLcc.destroy();
  charts.repLcc = new Chart(document.getElementById('rep-chart-lcc'), {
    type: 'bar',
    plugins: [stackedBarTotalLabelPlugin],
    data: {
      labels: [cur.name, nw.name],
      datasets: [
        { label: t('sum_invest'),  data: [curR.invest,   nwR.invest],   backgroundColor: AURA_CHART_COLORS.invest },
        { label: t('sum_pv_e'),    data: [curR.pvEnergy, nwR.pvEnergy], backgroundColor: AURA_CHART_COLORS.energy },
        { label: t('sum_pv_m'),    data: [curR.pvMaint,  nwR.pvMaint],  backgroundColor: AURA_CHART_COLORS.maintenanceSoft },
      ]
    },
    options: {
      responsive: true, maintainAspectRatio: false, animation: false,
      layout: { padding: { top: 28 } },
      plugins: { legend: { display: true, position: 'bottom', labels: { font: { size: 8 }, boxWidth: 10 } } },
      scales: { x: { stacked: true, ticks: { font: { size: 8 } } }, y: { stacked: true, beginAtZero: true, grace: '16%', ticks: { font: { size: 8 }, callback: chartMoneyTick } } }
    }
  });

  if (charts.repClimate) charts.repClimate.destroy();
  charts.repClimate = new Chart(document.getElementById('rep-chart-climate'), {
    type: 'bar',
    plugins: [barValueLabelPlugin],
    data: {
      labels: [cur.name, nw.name],
      datasets: [
        { label: 'kWh/Y',  data: [curR.annualEnergy, nwR.annualEnergy], backgroundColor: AURA_CHART_COLORS.kwh, yAxisID: 'y' },
        { label: 'kgCO₂-e/Y', data: [curR.co2,       nwR.co2],         backgroundColor: AURA_CHART_COLORS.co2, yAxisID: 'y1' },
      ]
    },
    options: {
      responsive: true, maintainAspectRatio: false, animation: false,
      layout: { padding: { top: 18 } },
      plugins: { legend: { display: true, position: 'bottom', labels: { font: { size: 8 }, boxWidth: 10 } } },
      scales: {
        x: { ticks: { font: { size: 8 } } },
        y:  { position: 'left',  beginAtZero: true, grace: '12%', ticks: { font: { size: 8 }, callback: v => fmt(v, 0) }, title: { display: true, text: 'kWh/Y', font: { size: 8 } } },
        y1: { position: 'right', beginAtZero: true, grace: '12%', grid: { drawOnChartArea: false }, ticks: { font: { size: 8 }, callback: v => fmt(v, 0) }, title: { display: true, text: 'kgCO₂-e/Y', font: { size: 8 } } }
      }
    }
  });

  // Annual savings per room type (3 metrics) — page 2
  const allRooms = [...new Set(insts.flatMap(i => i.result.roomResults.map(r => r.roomLabel)))];
  const roomSavings = allRooms.map(label => {
    const cR = cur.result.roomResults.find(r => r.roomLabel === label);
    const nR = nw.result.roomResults.find(r => r.roomLabel === label);
    return {
      label,
      kr:   (cR ? cR.roomAnnualEnergyCost || 0 : 0) - (nR ? nR.roomAnnualEnergyCost || 0 : 0),
      kwh:  (cR ? cR.roomAnnualEnergy || 0 : 0)     - (nR ? nR.roomAnnualEnergy || 0 : 0),
      co2:  ((cR ? cR.roomAnnualEnergy || 0 : 0)    - (nR ? nR.roomAnnualEnergy || 0 : 0)) * params.co2Factor,
    };
  });
  if (charts.repRoom) charts.repRoom.destroy();
  charts.repRoom = new Chart(document.getElementById('rep-chart-room-savings'), {
    type: 'bar',
    plugins: [barValueLabelPlugin],
    data: {
      labels: roomSavings.map(r => r.label || '—'),
      datasets: [
        { label: currencyLegendLabel(t('rep_leg_cost') || 'Energy costs'),    data: roomSavings.map(r => Math.round(r.kr)),  backgroundColor: AURA_CHART_COLORS.co2, yAxisID: 'y' },
        { label: t('rep_leg_kwh')    || 'Energy consumption (kWh)', data: roomSavings.map(r => Math.round(r.kwh)), backgroundColor: AURA_CHART_COLORS.kwh, yAxisID: 'y' },
        { label: t('rep_leg_co2')    || 'Climate impact (kg CO₂)',  data: roomSavings.map(r => Math.round(r.co2)), backgroundColor: AURA_CHART_COLORS.energy, yAxisID: 'y' },
      ]
    },
    options: {
      responsive: true, maintainAspectRatio: false, animation: false,
      layout: { padding: { top: 18 } },
      plugins: { legend: { display: true, position: 'top', labels: { font: { size: 9 }, boxWidth: 10 } } },
      scales: { x: { ticks: { font: { size: 9 } } }, y: { beginAtZero: true, grace: '12%', ticks: { font: { size: 8 }, callback: chartMoneyTick } } }
    }
  });

  // Payback period — cumulative savings over years
  if (charts.repPayback) charts.repPayback.destroy();
  const years = Array.from({ length: params.years + 1 }, (_, i) => i);
  const extraInvest = nw.result.invest - cur.result.invest;
  const annualSav = (cur.result.annualEnergyCost + cur.result.annualMaint) - (nw.result.annualEnergyCost + nw.result.annualMaint);
  const invSeries = years.map(() => extraInvest);
  const savSeries = years.map(y => annualSav * y);
  charts.repPayback = new Chart(document.getElementById('rep-chart-payback'), {
    type: 'line',
    data: {
      labels: years.map(y => (t('rep_year') || 'År') + ' ' + y),
      datasets: [
        { label: t('rep_leg_invest') || 'Investment cost',   data: invSeries, borderColor: AURA_CHART_COLORS.invest, backgroundColor: 'transparent', borderDash: [4, 3], pointRadius: 0, tension: 0 },
        { label: t('rep_leg_sav')    || 'Energy savings',    data: savSeries, borderColor: AURA_CHART_COLORS.maintenance, backgroundColor: 'transparent', pointRadius: 0, tension: 0, borderWidth: 2 },
      ]
    },
    options: {
      responsive: true, maintainAspectRatio: false, animation: false,
      plugins: { legend: { display: true, position: 'bottom', labels: { font: { size: 9 }, boxWidth: 10 } } },
      scales: { x: { ticks: { font: { size: 8 } } }, y: { beginAtZero: true, ticks: { font: { size: 8 }, callback: chartMoneyTick } } }
    }
  });

  // ── Page 3: environmental equivalents ─────────────────────────────────
  const co2Saved = Math.max(0, curR.co2 - nwR.co2);
  const kwhSaved = Math.max(0, curR.annualEnergy - nwR.annualEnergy);
  const krSaved  = Math.max(0, curR.totalLCC - nwR.totalLCC);
  document.getElementById('rep-co2-val').textContent = fmt(co2Saved, 0);
  document.getElementById('rep-kwh-val').textContent = fmt(kwhSaved, 0);
  document.getElementById('rep-sav-val').textContent = fmt(krSaved, 0);
  const curUnit = currencySymbol();
  document.getElementById('rep-sav-cur').textContent = curUnit;
  // Conversion factors derived from Aura LCC Excel equivalents
  document.getElementById('rep-eq-gas').textContent   = fmt(co2Saved * 0.4256, 0);
  document.getElementById('rep-eq-trees').textContent = fmt(co2Saved * 0.04594, 0);
  document.getElementById('rep-eq-cars').textContent  = fmt(co2Saved * 0.000217, 2);
  document.getElementById('rep-eq-coal').textContent  = fmt(co2Saved * 0.00452, 0);
  document.getElementById('rep-eq-oil').textContent   = fmt(co2Saved * 0.02584, 0);
  document.getElementById('rep-eq-homes').textContent = fmt(kwhSaved / 12000, 0);
  applyTypographicOrphanProtection(document.getElementById('page-summary'));
}

async function waitForPrintReady() {
  const summaryPage = document.getElementById('page-summary');
  if (!summaryPage) return;
  if (document.fonts?.ready) {
    try { await document.fonts.ready; } catch {}
  }
  await new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve)));
  const images = Array.from(summaryPage.querySelectorAll('img'));
  await Promise.all(images.map(img => {
    if (img.complete && img.naturalWidth > 0) return Promise.resolve();
    return new Promise(resolve => {
      const done = () => resolve();
      img.addEventListener('load', done, { once: true });
      img.addEventListener('error', done, { once: true });
    });
  }));
  await new Promise(resolve => setTimeout(resolve, 450));
}

async function printReport() {
  if (dirty || !calcResults) calculate({ switchToResult: false });
  switchTab('summary');
  await waitForPrintReady();
  window.print();
}

// ─── Tab switching ────────────────────────────────────────────────────────────
function switchTab(tab) {
  ['input','result','winwin','summary'].forEach(t2 => {
    document.getElementById(`page-${t2}`).classList.toggle('hidden', t2 !== tab);
    document.getElementById(`tab-${t2}`)?.classList.toggle('active', t2 === tab);
  });
  if ((tab === 'result' || tab === 'winwin' || tab === 'summary') && dirty) calculate({ switchToResult: false });
  else if (tab !== 'input' && calcResults) renderResults();
}

function markDirty() { dirty = true; }

// ─── Save / Load ──────────────────────────────────────────────────────────────
const LCC_CSV_DELIMITER = ';';
const LCC_CSV_HEADER = ['section','installation_index','room_index','luminaire_index','field','value'];

function filenameSafe(value) {
  return String(value || 'projekt')
    .trim()
    .replace(/[\\/:*?"<>|]+/g, '-')
    .replace(/\s+/g, ' ')
    .slice(0, 80) || 'projekt';
}

function csvCell(value, delimiter = LCC_CSV_DELIMITER) {
  const text = value === undefined || value === null ? '' : String(value);
  const needsQuotes = text.includes(delimiter) || text.includes('"') || /[\r\n]/.test(text);
  return needsQuotes ? `"${text.replace(/"/g, '""')}"` : text;
}

function serializeStateToCsv(state) {
  const rows = [LCC_CSV_HEADER];
  const push = (section, instIndex, roomIndex, lumIndex, field, value) => {
    rows.push([section, instIndex ?? '', roomIndex ?? '', lumIndex ?? '', field, value ?? '']);
  };

  push('meta', '', '', '', 'format', 'Aura Light LCC CSV');
  push('meta', '', '', '', 'version', '1');
  push('state', '', '', '', 'lang', state.lang);
  push('state', '', '', '', 'activePreset', state.activePreset);
  Object.entries(state.project || {}).forEach(([key, value]) => push('project', '', '', '', key, value));
  Object.entries(state.params || {}).forEach(([key, value]) => push('params', '', '', '', key, value));
  Object.entries(state.importSettings || {}).forEach(([key, value]) => push('importSettings', '', '', '', key, value));
  Object.entries(state.counters || {}).forEach(([key, value]) => push('counters', '', '', '', key, value));

  (state.installations || []).forEach((inst, instIndex) => {
    push('installation', instIndex, '', '', 'id', inst.id);
    push('installation', instIndex, '', '', 'name', inst.name);
    (inst.rooms || []).forEach((room, roomIndex) => {
      ['id','selected','name','buildingKey','roomKey','count','sqm'].forEach(field => {
        push('room', instIndex, roomIndex, '', field, room[field]);
      });
      (room.luminaires || []).forEach((lum, lumIndex) => {
        ['id','label','count','price','install','power','ctrl','reduction','maintenance'].forEach(field => {
          push('luminaire', instIndex, roomIndex, lumIndex, field, lum[field]);
        });
      });
    });
  });

  const csv = rows.map(row => row.map(cell => csvCell(cell)).join(LCC_CSV_DELIMITER)).join('\r\n');
  // sep= makes Swedish/European Excel open the file with the intended delimiter.
  return `sep=${LCC_CSV_DELIMITER}\r\n${csv}\r\n`;
}

function detectCsvDelimiter(text) {
  const clean = String(text || '').replace(/^\uFEFF/, '');
  const firstDataLine = clean.split(/\r?\n/).find(line => line.trim() && !line.toLowerCase().startsWith('sep=')) || '';
  return firstDataLine.includes(';') ? ';' : ',';
}

function parseDelimitedRows(text, delimiter = detectCsvDelimiter(text)) {
  const input = String(text || '').replace(/^\uFEFF/, '');
  const rows = [];
  let row = [], cell = '', inQuotes = false;

  for (let i = 0; i < input.length; i++) {
    const ch = input[i];
    const next = input[i + 1];
    if (inQuotes) {
      if (ch === '"' && next === '"') {
        cell += '"';
        i++;
      } else if (ch === '"') {
        inQuotes = false;
      } else {
        cell += ch;
      }
    } else if (ch === '"') {
      inQuotes = true;
    } else if (ch === delimiter) {
      row.push(cell);
      cell = '';
    } else if (ch === '\n') {
      row.push(cell);
      rows.push(row);
      row = [];
      cell = '';
    } else if (ch !== '\r') {
      cell += ch;
    }
  }

  if (cell || row.length) {
    row.push(cell);
    rows.push(row);
  }
  return rows.filter(r => r.some(c => String(c).trim() !== ''));
}

function csvNumber(value, fallback = 0) {
  const n = Number(String(value ?? '').replace(',', '.'));
  return Number.isFinite(n) ? n : fallback;
}

function csvBool(value) {
  return String(value).trim().toLowerCase() !== 'false';
}

function parseLccCsv(text) {
  let rows = parseDelimitedRows(text);
  if (rows[0]?.[0]?.trim().toLowerCase().startsWith('sep=')) rows = rows.slice(1);
  const header = rows.shift()?.map(h => String(h).trim().toLowerCase()) || [];
  const idx = key => header.indexOf(key);
  const sectionIdx = idx('section');
  const instIdx = idx('installation_index');
  const roomIdx = idx('room_index');
  const lumIdx = idx('luminaire_index');
  const fieldIdx = idx('field');
  const valueIdx = idx('value');
  if ([sectionIdx, fieldIdx, valueIdx].some(i => i < 0)) throw new Error('Invalid LCC CSV');

  const state = { project:{}, params:{}, importSettings:{}, counters:{}, installations:[] };
  const numericCounters = new Set(['instCounter','roomCounter','lumCounter']);
  const numericIds = new Set(['id']);
  const ensureInstallation = index => {
    const i = csvNumber(index, 0);
    if (!state.installations[i]) state.installations[i] = { id: i + 1, name: '', rooms: [] };
    return state.installations[i];
  };
  const ensureRoom = (instIndex, roomIndex) => {
    const inst = ensureInstallation(instIndex);
    const r = csvNumber(roomIndex, 0);
    if (!inst.rooms[r]) inst.rooms[r] = { id: r + 1, selected: true, name: '', buildingKey: '', roomKey: '', count: 0, sqm: 0, luminaires: [] };
    return inst.rooms[r];
  };
  const ensureLuminaire = (instIndex, roomIndex, lumIndex) => {
    const room = ensureRoom(instIndex, roomIndex);
    const l = csvNumber(lumIndex, 0);
    if (!room.luminaires[l]) room.luminaires[l] = { id: l + 1, label: '', count: 0, price: 0, install: 0, power: 0, ctrl: 'none', reduction: 1, maintenance: 0 };
    return room.luminaires[l];
  };

  rows.forEach(row => {
    const section = String(row[sectionIdx] || '').trim();
    const field = String(row[fieldIdx] || '').trim();
    const value = row[valueIdx] ?? '';
    if (!section || !field || section === 'meta') return;
    if (section === 'state') state[field] = value;
    if (section === 'project') state.project[field] = value;
    if (section === 'params') state.params[field] = value;
    if (section === 'importSettings') state.importSettings[field] = value;
    if (section === 'counters') state.counters[field] = numericCounters.has(field) ? csvNumber(value, 0) : value;
    if (section === 'installation') {
      const inst = ensureInstallation(row[instIdx]);
      inst[field] = numericIds.has(field) ? csvNumber(value, inst.id) : value;
    }
    if (section === 'room') {
      const room = ensureRoom(row[instIdx], row[roomIdx]);
      room[field] = field === 'selected' ? csvBool(value) : numericIds.has(field) ? csvNumber(value, room.id) : value;
    }
    if (section === 'luminaire') {
      const lum = ensureLuminaire(row[instIdx], row[roomIdx], row[lumIdx]);
      lum[field] = numericIds.has(field) ? csvNumber(value, lum.id) : value;
    }
  });

  state.installations = state.installations.filter(Boolean).map(inst => ({
    id: csvNumber(inst.id, 0),
    name: inst.name || '',
    rooms: (inst.rooms || []).filter(Boolean).map(room => ({
      id: csvNumber(room.id, 0),
      selected: room.selected !== false,
      name: room.name || '',
      buildingKey: room.buildingKey || '',
      roomKey: room.roomKey || '',
      count: room.count ?? 0,
      sqm: room.sqm ?? 0,
      luminaires: (room.luminaires || []).filter(Boolean).map(lum => ({
        id: csvNumber(lum.id, 0),
        label: lum.label || '',
        count: lum.count ?? 0,
        price: lum.price ?? 0,
        install: lum.install ?? 0,
        power: lum.power ?? 0,
        ctrl: lum.ctrl || 'none',
        reduction: lum.reduction ?? 1,
        maintenance: lum.maintenance ?? 0
      }))
    }))
  }));

  const maxId = (items, getter) => Math.max(0, ...items.map(getter).filter(Number.isFinite));
  state.counters.instCounter = state.counters.instCounter || maxId(state.installations, i => csvNumber(i.id, 0));
  state.counters.roomCounter = state.counters.roomCounter || maxId(state.installations.flatMap(i => i.rooms), r => csvNumber(r.id, 0));
  state.counters.lumCounter = state.counters.lumCounter || maxId(state.installations.flatMap(i => i.rooms).flatMap(r => r.luminaires), l => csvNumber(l.id, 0));
  return state;
}

function saveData() {
  const state = gatherState();
  const blob = new Blob(['\uFEFF' + serializeStateToCsv(state)], { type: 'text/csv;charset=utf-8' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = `${filenameSafe(document.getElementById('proj-name')?.value)}.csv`;
  a.click();
  setTimeout(() => URL.revokeObjectURL(a.href), 0);
}

function loadData() {
  const input = document.createElement('input');
  input.type = 'file'; input.accept = '.csv,.json,text/csv,application/json';
  input.onchange = e => {
    const file = e.target.files[0]; if (!file) return;
    const reader = new FileReader();
    reader.onload = ev => {
      try {
        const raw = String(ev.target.result || '');
        const trimmed = raw.replace(/^\uFEFF/, '').trimStart();
        const state = trimmed.startsWith('{') ? JSON.parse(raw) : parseLccCsv(raw);
        applyState(state);
      } catch (err) {
        console.error(err);
        alert('Kunde inte läsa filen. Kontrollera att det är en sparad LCC-kalkyl i CSV- eller JSON-format.');
      }
    };
    reader.readAsText(file);
  };
  input.click();
}

function gatherState() {
  return {
    lang, activePreset,
    project: { name: document.getElementById('proj-name')?.value, date: document.getElementById('proj-date')?.value, contact: document.getElementById('proj-contact')?.value },
    params: { years: num('p-years'), rate: num('p-rate'), elPrice: num('p-elprice'), priceChange: num('p-pricechange'), co2: num('p-co2'), opHours: num('p-ophours') },
    importSettings: { existingYear: existingYearValue(), countSource: selectedImportCountSource(), resultInstallFilter: resultInstallFilterValue(), hideLuminairePrices },
    counters: { instCounter, roomCounter, lumCounter },
    installations: installations.map(inst => ({
      id: inst.id,
      name: document.getElementById(`inst-name-${inst.id}`)?.value || inst.name,
      rooms: inst.rooms.map(room => ({
        id: room.id,
        selected: document.getElementById(`room-include-${room.id}`)?.checked ?? roomSelectedValue(room),
        name: document.getElementById(`room-name-${room.id}`)?.value || '',
        buildingKey: document.getElementById(`room-btype-${room.id}`)?.value || '',
        roomKey: document.getElementById(`room-rtype-${room.id}`)?.value || '',
        count: num(`room-count-${room.id}`),
        sqm: num(`room-sqm-${room.id}`),
        luminaires: room.luminaires.map(lum => ({
          id: lum.id,
          label: document.getElementById(`lum-label-${lum.id}`)?.value || '',
          count: num(`lum-count-${lum.id}`),
          price: num(`lum-price-${lum.id}`),
          install: num(`lum-install-${lum.id}`),
          power: num(`lum-power-${lum.id}`),
          ctrl: document.getElementById(`lum-ctrl-${lum.id}`)?.value || 'none',
          reduction: num(`lum-reduction-${lum.id}`),
          maintenance: num(`lum-maintenance-${lum.id}`)
        }))
      }))
    }))
  };
}

function sv(id, val) { const el = document.getElementById(id); if (el && val !== undefined) el.value = val; }

function restoreInstallationFields(savedInstallations) {
  savedInstallations.forEach((inst, idx) => {
    if (!fixedInstallationName(idx)) sv(`inst-name-${inst.id}`, inst.name);
    inst.rooms.forEach(room => {
      const selected = room.selected !== false;
      const includeEl = document.getElementById(`room-include-${room.id}`);
      const roomModel = findRoom(room.id);
      if (includeEl) includeEl.checked = selected;
      if (roomModel) roomModel.selected = selected;
      sv(`room-name-${room.id}`, room.name);
      // Set building type first, then update room dropdown, then set room type
      const bEl = document.getElementById(`room-btype-${room.id}`);
      if (bEl && room.buildingKey) {
        bEl.value = room.buildingKey;
        onBuildingChange(room.id);
        const rEl = document.getElementById(`room-rtype-${room.id}`);
        if (rEl && room.roomKey) rEl.value = room.roomKey;
      }
      sv(`room-count-${room.id}`, room.count);
      sv(`room-sqm-${room.id}`, room.sqm);
      room.luminaires.forEach(lum => {
        sv(`lum-label-${lum.id}`, lum.label);
        sv(`lum-count-${lum.id}`, lum.count);
        sv(`lum-price-${lum.id}`, lum.price);
        sv(`lum-install-${lum.id}`, lum.install);
        sv(`lum-power-${lum.id}`, lum.power);
        sv(`lum-ctrl-${lum.id}`, lum.ctrl);
        sv(`lum-reduction-${lum.id}`, lum.reduction);
        sv(`lum-maintenance-${lum.id}`, lum.maintenance);
      });
    });
  });
  syncFixedInstallationNames();
  installations.forEach((inst, idx) => {
    const fixed = fixedInstallationName(idx);
    if (fixed) sv(`inst-name-${inst.id}`, fixed);
  });
  updateComparisonSelectionNote();
}

function applyState(state) {
  clearRememberedImport();
  if (state.lang) { setLang(state.lang, { syncPreset: false }); }
  if (state.activePreset) applyPreset(state.activePreset);
  if (state.project) { sv('proj-name', state.project.name); sv('proj-date', state.project.date); sv('proj-contact', state.project.contact); }
  if (state.params) { sv('p-years', state.params.years); sv('p-rate', state.params.rate); sv('p-elprice', state.params.elPrice); sv('p-pricechange', state.params.priceChange); sv('p-co2', state.params.co2); sv('p-ophours', state.params.opHours); }
  if (state.importSettings) {
    setExistingYearValue(state.importSettings.existingYear);
    renderImportCountSourceOptions(defaultImportDocKinds());
    setImportCountSource(state.importSettings.countSource || 'offer', defaultImportDocKinds());
    resultInstallFilter = normalizeResultInstallFilter(state.importSettings.resultInstallFilter || 'both');
    renderResultInstallFilterControls();
    hideLuminairePrices = String(state.importSettings.hideLuminairePrices ?? 'false').trim().toLowerCase() === 'true';
    renderLuminairePriceVisibility();
    updateExistingTechPreview();
  }
  if (state.counters) { instCounter = state.counters.instCounter; roomCounter = state.counters.roomCounter; lumCounter = state.counters.lumCounter; }
  if (state.installations) {
    installations = state.installations.map(i => ({
      id: i.id,
      name: i.name,
      rooms: i.rooms.map(r => ({
        id: r.id,
        selected: r.selected !== false,
        buildingKey: r.buildingKey || '',
        roomKey: r.roomKey || '',
        luminaires: r.luminaires.map(l => ({ id: l.id }))
      }))
    }));
    syncFixedInstallationNames();
    renderInstallations();
    restoreInstallationFields(state.installations);
  }
  dirty = false;
  updateComparisonSelectionNote();
}

// ─── Boot ─────────────────────────────────────────────────────────────────────
init();
