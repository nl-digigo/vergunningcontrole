# Juridische begrippen per check {#juridische-begrippen}

<p class="leesniveau technisch">Technisch</p>

Dit hoofdstuk legt per check vast welke informatie de regel nodig heeft, onder welke juridische term die in de regelgeving staat, welke rol die informatie in de regel speelt en waar de waarde vandaan komt. Het is de brug tussen de regeltekst ([[[#regelinterpretatie]]]) en de machineleesbare regel ([[[#regelcodering]]]).

| | |
|---|---|
| **Bron** | BM13-tracker, tabblad juridische vereisten — 105 vereisten (LR) |
| **Checks** | 17 regels uit de BM13-regelinventarisatie v0.3, 3-7-2026 |
| **Status** | Concept: 104, In review: 1 |
| **Open interpretatiekeuzes** | 52 |
| **Identificatie** | `LR-Rnn-mm`: regel nn, vereiste mm |

Elke vereiste krijgt één **rol in de regel**:

| Rol | Betekenis |
|---|---|
| Toepasselijkheid | Bepaalt of de regel van toepassing is. |
| Werkingsgebied | Het gebied waarbinnen de regel geldt. |
| Gereguleerd object | Het object waar de eis over gaat. |
| Normwaarde | De grenswaarde waartegen getoetst wordt. |
| Gemeten / afgeleide grootheid | De waarde die uit het model wordt gemeten of afgeleid. |
| Referentie (peil, lijn, plaats) | Het vaste punt waarvandaan gemeten wordt. |
| Definitie / meetmethode | Hoe een begrip wordt afgebakend of gemeten. |
| Aangeleverd bewijs | Bewijs dat de aanvrager aanlevert. |

## Overzicht per check

| Check | Onderwerp | Vereisten | Open keuzes | Status |
|-------|-----------|-----------|-------------|--------|
| **#1** | [Gebruiksfunctie komt overeen met bestemming ("Wonen")](#jb-regel-1) | 7 | 4 | Concept, In review |
| **#2** | [Maximale bouwhoogte](#jb-regel-2) | 7 | 5 | Concept |
| **#3** | [Maximaal bebouwingspercentage](#jb-regel-3) | 5 | 4 | Concept |
| **#4** | [Gebruiksfunctie beperkt tot x bouwlagen](#jb-regel-4) | 6 | 3 | Concept |
| **#5** | [Beroep aan huis: maximaal aandeel gebruiksoppervlakte](#jb-regel-5) | 6 | 5 | Concept |
| **#6** | [Maximum aantal bouwlagen](#jb-regel-6) | 6 | 2 | Concept |
| **#7** | [Brandcompartimenten](#jb-regel-7) | 9 | 6 | Concept |
| **#8** | [Brandwerendheid](#jb-regel-8) | 5 | 2 | Concept |
| **#9** | [Vrije breedte](#jb-regel-9) | 6 | 2 | Concept |
| **#10** | [Hoogteverschil](#jb-regel-10) | 7 | 3 | Concept |
| **#11** | [Rc-waarde](#jb-regel-11) | 5 | 3 | Concept |
| **#12** | [U-waarde](#jb-regel-12) | 5 | 1 | Concept |
| **#13** | [MPG, milieuprestatie](#jb-regel-13) | 5 | 2 | Concept |
| **#14** | [Vluchtwegen](#jb-regel-14) | 6 | 2 | Concept |
| **#15** | [Loopafstand](#jb-regel-15) | 6 | 2 | Concept |
| **#16** | [Vluchtbreedte](#jb-regel-16) | 6 | 3 | Concept |
| **#17** | [Daglicht](#jb-regel-17) | 8 | 3 | Concept |

## Overzicht per bron van de waarde

| Waarde komt uit | Vereisten | Checks |
|---|---|---|
| Ontwerp (model aanvrager) | 49 | #1, #2, #3, #4, #5, #6, #7, #8, #9, #10, #11, #12, #13, #14, #15, #16, #17 |
| Regelgeving – omgevingsplan | 17 | #1, #2, #3, #4, #5, #6 |
| Regelgeving – Bbl | 12 | #7, #8, #9, #10, #11, #12, #13, #14, #15, #16, #17 |
| Regelprofiel (keuze gemeente) | 11 | #1, #2, #3, #5, #8, #10, #11, #13, #14, #17 |
| Omgeving (bestaande situatie) | 6 | #3, #7, #10, #17 |
| Aangeleverde berekening / verklaring | 6 | #7, #8, #11, #12, #13 |
| Vergunningaanvraag | 4 | #1, #4, #5, #6 |

## Herbruikbare begrippen

Dezelfde informatie komt in meerdere checks terug. Een begrip dat één keer goed is afgebakend, kan in elke check worden hergebruikt.

| Begrip | Juridische termen | Checks | Vereisten |
|---|---|---|---|
| Norm (Bbl) | maximale GO brandcompartiment; WBDBO-eis; brandwerendheid-eis; eis vrije breedte / hoogte; drempelwaarden en maten; Rc-eis; U-eis (gemiddeld en per element); MPG-grenswaarde; eisen vluchtroute; maximale loopafstand; eisen vrije doorgang en doorstroomcapaciteit; eis equivalente daglichtoppervlakte | #7, #8, #9, #10, #11, #12, #13, #14, #15, #16, #17 | LR-R07-04, LR-R07-05, LR-R08-03, LR-R09-05, LR-R10-05, LR-R11-04, LR-R12-05, LR-R13-03, LR-R14-06, LR-R15-04, LR-R16-06, LR-R17-07 |
| Gebruiksfunctie | beoogd gebruik / gebruiksfunctie (Woonfunctie); gebruiksfunctie per bouwlaag; gebruiksfunctie | #1, #4, #7, #9, #10, #14, #17 | LR-R01-01, LR-R04-01, LR-R07-01, LR-R09-01, LR-R10-01, LR-R14-01, LR-R17-01 |
| Ruimten | verblijfsgebied, verblijfsruimte, toiletruimte, badruimte, buitenruimte; toegang, verkeersruimte, verblijfsgebied, buitenruimte; verblijfsgebied, toiletruimte, badruimte; thermische schil; verblijfsgebied, verblijfsruimte; verblijfsgebied, verblijfsruimte, vloeroppervlakte | #9, #10, #11, #12, #14, #15, #17 | LR-R09-02, LR-R10-06, LR-R11-01, LR-R12-01, LR-R14-02, LR-R15-01, LR-R17-02 |
| Norm (omgevingsplan) | maximum bouwhoogte (m) / normwaarde; maximum bebouwingspercentage; functieaanduiding met bouwlaagbeperking; toegestane beroepen aan huis; maximaal percentage / maximum m²; maximum aantal bouwlagen | #2, #3, #4, #5, #6 | LR-R02-01, LR-R03-01, LR-R04-02, LR-R05-03, LR-R05-05, LR-R06-01 |
| Brandcompartimenten | brandcompartiment; brandcompartiment, scheidingsconstructie; (sub)brandcompartiment, uitgang | #7, #8, #14, #15 | LR-R07-02, LR-R08-01, LR-R14-05, LR-R15-02 |
| Gebruiksoppervlakte (GO) | woonfunctie, gebruiksoppervlakte (GO); GO van het bedrijfsdeel; GO per brandcompartiment; gebruiksfunctie, GO; GO verblijfsgebied via trap | #5, #7, #13, #16 | LR-R05-01, LR-R05-04, LR-R07-03, LR-R13-01, LR-R16-03 |
| Meetellende delen | bouwwerk / gebouw, ondergeschikte bouwdelen; ondergeschikte bouwdelen (schoorsteen, antenne, liftopbouw); hoofdgebouw, bijbehorende bouwwerken | #1, #2, #3, #5 | LR-R01-04, LR-R02-05, LR-R03-05, LR-R05-06 |
| Tolerantie | meettolerantie | #1, #2, #11, #13 | LR-R01-06, LR-R02-06, LR-R11-05, LR-R13-05 |
| Werkingsgebied | bestemmingsvlak / werkingsgebied; maatvoeringsvlak / werkingsgebied; werkingsgebied | #1, #2, #4, #6 | LR-R01-03, LR-R02-02, LR-R04-03, LR-R06-02 |
| Bestaande bebouwing | bestaande bebouwing / te slopen bebouwing; andere bouwwerken op hetzelfde perceel; belemmering (belemmeringshoek) | #3, #7, #17 | LR-R03-04, LR-R07-08, LR-R17-05 |
| Bouwdelen | constructieonderdeel; uitwendige scheidingsconstructie; verliesoppervlakte | #8, #11, #13 | LR-R08-02, LR-R11-02, LR-R13-02 |
| Footprint / ligging | ligging van het bouwwerk; ligging (RD / NAP); bebouwde oppervlakte (projectie op maaiveld) | #1, #2, #3 | LR-R01-05, LR-R02-07, LR-R03-03 |
| Locatie aanvraag | locatie aanvraag (adres, perceel); locatie aanvraag | #1, #4, #6 | LR-R01-07, LR-R04-06, LR-R06-06 |
| Vluchtroutes | vluchtroute; gecorrigeerde loopafstand; doorstroomcapaciteit | #14, #15, #16 | LR-R14-04, LR-R15-03, LR-R16-01, LR-R16-05 |
| Aangeleverde berekening | WBDBO (NEN 6068); gelijkwaardigheid; MPG-score (Bepalingsmethode) | #7, #13 | LR-R07-06, LR-R07-09, LR-R13-04 |
| Bezetting | bezetting, aantal uitgangen; aantal personen per vluchtroute | #15, #16 | LR-R15-06, LR-R16-04 |
| Bouwlagen | bouwlagen; bouwlagen boven peil | #4, #6 | LR-R04-05, LR-R06-04 |
| Definitie bouwlaag | bouwlaag (kelder, tussenverdieping, zolder); bouwlaag | #4, #6 | LR-R04-04, LR-R06-03 |
| Hoogteverschillen | hoogteverschil; hoogteverschil binnen brandcompartiment | #10, #15 | LR-R10-02, LR-R15-05 |
| Meetmethode | — | #10, #17 | LR-R10-07, LR-R17-08 |
| Openingen (ramen, deuren) | ramen, deuren, kozijnen; oppervlakte (NTA 8800); daglichtopening | #12, #17 | LR-R12-02, LR-R12-03, LR-R17-03 |
| Peil | peil | #2, #6 | LR-R02-03, LR-R06-05 |
| Perceelsgrens / spiegellijn | perceelsgrens / hart weg, water, groen (spiegelprincipe); perceelsgrens / hart weg, water, groen | #7, #17 | LR-R07-07, LR-R17-06 |
| Thermische waarden (Rc / U) | Rc-waarde (NTA 8800); U-waarde | #11, #12 | LR-R11-03, LR-R12-04 |
| Vrije breedte / hoogte | vrije breedte, vrije hoogte; vrije doorgang | #9, #16 | LR-R09-04, LR-R16-02 |
| Activiteit | beroep aan huis, SBI-code | #5 | LR-R05-02 |
| Bestemming | bestemming / functie 'wonen' (Gemengd, Centrum …) | #1 | LR-R01-02 |
| Brandwerendheidsklasse | brandwerendheid (classificatie) | #8 | LR-R08-04 |
| Daglicht | equivalente daglichtoppervlakte | #17 | LR-R17-04 |
| Hoogste punt | hoogste punt van het bouwwerk | #2 | LR-R02-04 |
| Liften | lift (vrije breedte, vloeroppervlakte) | #9 | LR-R09-06 |
| Perceel / bouwperceel | bouwperceel / bouwvlak / bebouwingsgebied | #3 | LR-R03-02 |
| Terreinhoogte | aansluitend terrein | #10 | LR-R10-03 |
| Trappen en hellingbanen | trap, hellingbaan, lift, bordes | #10 | LR-R10-04 |
| Uitzonderingen op toepassing | uitzonderingen (geen besloten ruimten, klein aangrenzend gebouw) | #8 | LR-R08-05 |
| Veilige plaats | veilige plaats | #14 | LR-R14-03 |
| Verkeersroutes | verkeersroute | #9 | LR-R09-03 |

---

## 01 — Gebruiksfunctie komt overeen met bestemming ("Wonen") {#jb-regel-1}

| | |
|---|---|
| **Regel-ID** | `BM13-R01` |
| **Vereisten** | 7 |
| **Grondslag** | Omgevingsplan; Bbl art. 1.1 (gebruiksfunctie); IMRO enkelbestemming; TPOD gebiedsaanwijzing Functie; Omgevingsplan (Regels op de kaart); Plan begrippen |
| **Interpretatie** | [[[#regel-1]]] |

| LR | Benodigde informatie | Juridische term | Rol | Waarde komt uit | Grondslag | Laag 1 | Status |
|----|------|------|------|------|------|------|------|
| `LR-R01-01` | Beoogd gebruik van het gebouw | beoogd gebruik / gebruiksfunctie (Woonfunctie) | Toepasselijkheid | Ontwerp (model aanvrager) | Omgevingsplan; Bbl art. 1.1 (gebruiksfunctie) | M04, M05 | In review |
| `LR-R01-02` | Bestemmingen die dit gebruik op de locatie toestaan | bestemming / functie 'wonen' (Gemengd, Centrum …) | Normwaarde | Regelgeving – omgevingsplan | IMRO enkelbestemming; TPOD gebiedsaanwijzing Functie | M08, M09 | Concept |
| `LR-R01-03` | Begrenzing van elk bestemmingsvlak | bestemmingsvlak / werkingsgebied | Werkingsgebied | Regelgeving – omgevingsplan | Omgevingsplan (Regels op de kaart) | M08 | Concept |
| `LR-R01-04` | Welke delen van het bouwwerk meetellen (balkons, overstekken, luifels, ondergrondse delen) | bouwwerk / gebouw, ondergeschikte bouwdelen | Definitie / meetmethode | Regelprofiel (keuze gemeente) | Plan begrippen | M06, M09 | Concept |
| `LR-R01-05` | Ligging van het bouwwerk op de grond (verticale projectie) | ligging van het bouwwerk | Gemeten / afgeleide grootheid | Ontwerp (model aanvrager) | — | M02, M03 | Concept |
| `LR-R01-06` | Randtolerantie en beoordeling van gedeeltelijke overlap | — | Definitie / meetmethode | Regelprofiel (keuze gemeente) | — | M09 | Concept |
| `LR-R01-07` | Locatie van de aanvraag | locatie aanvraag (adres, perceel) | Toepasselijkheid | Vergunningaanvraag | — | M07 | Concept |

**Open interpretatiekeuzes**

- `LR-R01-01` Betekent 'wonen' in het plan altijd 'woonfunctie'? Nog te valideren; zo ja, dan is een koppeling nodig die 'wonen' herkent als 'woonfunctie'.
- `LR-R01-02` Welke andere bestemmingen staan wonen ook toe?
- `LR-R01-04` Tellen overstekken en ondergrondse delen mee?
- `LR-R01-06` Tolerantie? Gedeeltelijke overlap = overtreding of beoordeling?

## 02 — Maximale bouwhoogte {#jb-regel-2}

| | |
|---|---|
| **Regel-ID** | `BM13-R02` |
| **Vereisten** | 7 |
| **Grondslag** | IMRO maatvoeringsaanduiding; TPOD omgevingsnorm; Omgevingsplan; Plan begrippen (peil); Plan wijze van meten (bouwhoogte); Plan wijze van meten |
| **Interpretatie** | [[[#regel-2]]] |

| LR | Benodigde informatie | Juridische term | Rol | Waarde komt uit | Grondslag | Laag 1 | Status |
|----|------|------|------|------|------|------|------|
| `LR-R02-01` | Maximale toegestane bouwhoogte | maximum bouwhoogte (m) / normwaarde | Normwaarde | Regelgeving – omgevingsplan | IMRO maatvoeringsaanduiding; TPOD omgevingsnorm | M08 | Concept |
| `LR-R02-02` | Begrenzing van het hoogtevlak waar het maximum geldt | maatvoeringsvlak / werkingsgebied | Werkingsgebied | Regelgeving – omgevingsplan | Omgevingsplan | M08 | Concept |
| `LR-R02-03` | Peil en de methode die het bepaalt (wegpeil of ontwerppeil) | peil | Referentie (peil, lijn, plaats) | Regelgeving – omgevingsplan | Plan begrippen (peil) | M06, M07, M08 | Concept |
| `LR-R02-04` | Hoogste relevante punt van het bouwwerk | hoogste punt van het bouwwerk | Gemeten / afgeleide grootheid | Ontwerp (model aanvrager) | Plan wijze van meten (bouwhoogte) | M02, M04 | Concept |
| `LR-R02-05` | Delen die niet meetellen en hoeveel extra hoogte ze mogen hebben | ondergeschikte bouwdelen (schoorsteen, antenne, liftopbouw) | Definitie / meetmethode | Regelgeving – omgevingsplan | Plan wijze van meten | M05, M09 | Concept |
| `LR-R02-06` | Meettolerantie | meettolerantie | Definitie / meetmethode | Regelprofiel (keuze gemeente) | — | M08 | Concept |
| `LR-R02-07` | Ligging van het bouwwerk in hoogte (NAP) en in plan | ligging (RD / NAP) | Gemeten / afgeleide grootheid | Ontwerp (model aanvrager) | — | M03 | Concept |

**Open interpretatiekeuzes**

- `LR-R02-01` Lokale uitzonderingen?
- `LR-R02-02` Twee hoogtevlakken: elk deel tegen zijn eigen vlak?
- `LR-R02-03` Welk peil geldt?
- `LR-R02-05` Tellen dakopbouwen en installaties mee?
- `LR-R02-06` Wordt een tolerantie geaccepteerd?

## 03 — Maximaal bebouwingspercentage {#jb-regel-3}

| | |
|---|---|
| **Regel-ID** | `BM13-R03` |
| **Vereisten** | 5 |
| **Grondslag** | Omgevingsplan; Plan begrippen; Plan wijze van meten; NEN 2580 |
| **Interpretatie** | [[[#regel-3]]] |

| LR | Benodigde informatie | Juridische term | Rol | Waarde komt uit | Grondslag | Laag 1 | Status |
|----|------|------|------|------|------|------|------|
| `LR-R03-01` | Maximaal bebouwingspercentage (of volume) | maximum bebouwingspercentage | Normwaarde | Regelgeving – omgevingsplan | Omgevingsplan | M10 | Concept |
| `LR-R03-02` | Referentieoppervlak waarop het percentage betrekking heeft, en de grootte daarvan | bouwperceel / bouwvlak / bebouwingsgebied | Referentie (peil, lijn, plaats) | Regelgeving – omgevingsplan | Plan begrippen | M07, M10 | Concept |
| `LR-R03-03` | Bebouwde oppervlakte van het nieuwe gebouw op maaiveld | bebouwde oppervlakte (projectie op maaiveld) | Gemeten / afgeleide grootheid | Ontwerp (model aanvrager) | Plan wijze van meten; NEN 2580 | M04, M05, M06 | Concept |
| `LR-R03-04` | Bestaande bebouwing die blijft en bebouwing die wordt gesloopt | bestaande bebouwing / te slopen bebouwing | Gemeten / afgeleide grootheid | Omgeving (bestaande situatie) | — | M08, M09 | Concept |
| `LR-R03-05` | Welke gebouwen en delen meetellen (aanbouwen, bijgebouwen, overstekken, kelders) | hoofdgebouw, bijbehorende bouwwerken | Definitie / meetmethode | Regelprofiel (keuze gemeente) | Plan begrippen | M11 | Concept |

**Open interpretatiekeuzes**

- `LR-R03-01` Op oppervlakte (m²) of volume (m³)?
- `LR-R03-02` Perceel, bouwvlak of bebouwingsgebied?
- `LR-R03-04` Gesplitste percelen?
- `LR-R03-05` Welke delen tellen mee?

## 04 — Gebruiksfunctie beperkt tot x bouwlagen {#jb-regel-4}

| | |
|---|---|
| **Regel-ID** | `BM13-R04` |
| **Vereisten** | 6 |
| **Grondslag** | Omgevingsplan; Plan begrippen; same as check #6 |
| **Interpretatie** | [[[#regel-4]]] |

| LR | Benodigde informatie | Juridische term | Rol | Waarde komt uit | Grondslag | Laag 1 | Status |
|----|------|------|------|------|------|------|------|
| `LR-R04-01` | Gebruiksfuncties van het gebouw en op welke bouwlagen ze liggen | gebruiksfunctie per bouwlaag | Gereguleerd object | Ontwerp (model aanvrager) | Omgevingsplan | M04, M05 | Concept |
| `LR-R04-02` | Bouwlagen waarop elke gebruiksfunctie is toegestaan (bereik of maximum) | functieaanduiding met bouwlaagbeperking | Normwaarde | Regelgeving – omgevingsplan | Omgevingsplan | M07 | Concept |
| `LR-R04-03` | Begrenzing van de zone waar de beperking geldt | werkingsgebied | Werkingsgebied | Regelgeving – omgevingsplan | Omgevingsplan | M07 | Concept |
| `LR-R04-04` | Wat een bouwlaag is en hoe bouwlagen worden genummerd | bouwlaag (kelder, tussenverdieping, zolder) | Definitie / meetmethode | Regelgeving – omgevingsplan | Plan begrippen; same as check #6 | M08 | Concept |
| `LR-R04-05` | Bouwlagen van het gebouw met hun hoogteligging | bouwlagen | Gemeten / afgeleide grootheid | Ontwerp (model aanvrager) | — | M01 | Concept |
| `LR-R04-06` | Locatie van de aanvraag | locatie aanvraag | Toepasselijkheid | Vergunningaanvraag | — | M06, M09 | Concept |

**Open interpretatiekeuzes**

- `LR-R04-01` Telt een entree op de begane grond van een bovenwoning als dat gebruik?
- `LR-R04-04` Hoe tellen kelder, tussenverdieping en dakverdieping?
- `LR-R04-05` Telt een zone over twee bouwlagen op beide?

## 05 — Beroep aan huis: maximaal aandeel gebruiksoppervlakte {#jb-regel-5}

| | |
|---|---|
| **Regel-ID** | `BM13-R05` |
| **Vereisten** | 6 |
| **Grondslag** | NEN 2580; Omgevingsplan; Omgevingsplan; beleidsregels |
| **Interpretatie** | [[[#regel-5]]] |

| LR | Benodigde informatie | Juridische term | Rol | Waarde komt uit | Grondslag | Laag 1 | Status |
|----|------|------|------|------|------|------|------|
| `LR-R05-01` | Woonfunctie en de gebruiksoppervlakte daarvan | woonfunctie, gebruiksoppervlakte (GO) | Gemeten / afgeleide grootheid | Ontwerp (model aanvrager) | NEN 2580 | M04, M08 | Concept |
| `LR-R05-02` | Bedrijfsactiviteit en het soort activiteit | beroep aan huis, SBI-code | Toepasselijkheid | Vergunningaanvraag | Omgevingsplan | M10 | Concept |
| `LR-R05-03` | Activiteiten die als beroep aan huis zijn toegestaan | toegestane beroepen aan huis | Normwaarde | Regelgeving – omgevingsplan | Omgevingsplan; beleidsregels | M12 | Concept |
| `LR-R05-04` | Gebruiksoppervlakte voor het bedrijfsdeel | GO van het bedrijfsdeel | Gemeten / afgeleide grootheid | Ontwerp (model aanvrager) | NEN 2580 | M05, M06, M08, M09 | Concept |
| `LR-R05-05` | Maximaal aandeel (%) en eventueel maximale oppervlakte (m²) | maximaal percentage / maximum m² | Normwaarde | Regelgeving – omgevingsplan | Omgevingsplan | M11 | Concept |
| `LR-R05-06` | Wat telt als bedrijfsoppervlakte en als totale woonfunctie | — | Definitie / meetmethode | Regelprofiel (keuze gemeente) | — | M12 | Concept |

**Open interpretatiekeuzes**

- `LR-R05-01` Bijgebouwen in de noemer?
- `LR-R05-02` Komt de activiteit in aanmerking (SBI-lijst)?
- `LR-R05-04` Niet-benoemde ruimten: wonen of bedrijf?
- `LR-R05-05` Ook een absoluut maximum?
- `LR-R05-06` Zie hierboven

## 06 — Maximum aantal bouwlagen {#jb-regel-6}

| | |
|---|---|
| **Regel-ID** | `BM13-R06` |
| **Vereisten** | 6 |
| **Grondslag** | Omgevingsplan; Plan begrippen; NEN 2580 / Bbl differ; Plan begrippen (shared with check #2) |
| **Interpretatie** | [[[#regel-6]]] |

| LR | Benodigde informatie | Juridische term | Rol | Waarde komt uit | Grondslag | Laag 1 | Status |
|----|------|------|------|------|------|------|------|
| `LR-R06-01` | Maximum aantal bouwlagen | maximum aantal bouwlagen | Normwaarde | Regelgeving – omgevingsplan | Omgevingsplan | M06 | Concept |
| `LR-R06-02` | Begrenzing van de zone waar het maximum geldt | werkingsgebied | Werkingsgebied | Regelgeving – omgevingsplan | Omgevingsplan | M06 | Concept |
| `LR-R06-03` | Wat een bouwlaag is (kelder, dakverdieping, tussenverdieping) | bouwlaag | Definitie / meetmethode | Regelgeving – omgevingsplan | Plan begrippen; NEN 2580 / Bbl differ | M09 | Concept |
| `LR-R06-04` | Bouwlagen van het gebouw boven peil | bouwlagen boven peil | Gemeten / afgeleide grootheid | Ontwerp (model aanvrager) | — | M01, M04 | Concept |
| `LR-R06-05` | Peil en de methode die het bepaalt | peil | Referentie (peil, lijn, plaats) | Regelgeving – omgevingsplan | Plan begrippen (shared with check #2) | M07, M08 | Concept |
| `LR-R06-06` | Locatie van de aanvraag | locatie aanvraag | Toepasselijkheid | Vergunningaanvraag | — | M05, M10 | Concept |

**Open interpretatiekeuzes**

- `LR-R06-03` Tellen kelder, dakverdieping en tussenverdieping mee?
- `LR-R06-05` Welk peil geldt?

## 07 — Brandcompartimenten {#jb-regel-7}

| | |
|---|---|
| **Regel-ID** | `BM13-R07` |
| **Vereisten** | 9 |
| **Grondslag** | Bbl tabel 4.49; Bbl art. 4.50; NEN 2580; Bbl art. 4.50–4.51; Bbl art. 4.52–4.54; NEN 6068; Bbl spiegelprincipe; Bbl art. 4.53; Bbl art. 2.2 (gelijkwaardigheid) |
| **Interpretatie** | [[[#regel-7]]] |

| LR | Benodigde informatie | Juridische term | Rol | Waarde komt uit | Grondslag | Laag 1 | Status |
|----|------|------|------|------|------|------|------|
| `LR-R07-01` | Gebruiksfunctie(s) van het gebouw | gebruiksfunctie | Toepasselijkheid | Ontwerp (model aanvrager) | Bbl tabel 4.49 | M04 | Concept |
| `LR-R07-02` | Brandcompartimenten en hun begrenzing | brandcompartiment | Gereguleerd object | Ontwerp (model aanvrager) | Bbl art. 4.50 | M05 | Concept |
| `LR-R07-03` | Gebruiksoppervlakte per brandcompartiment | GO per brandcompartiment | Gemeten / afgeleide grootheid | Ontwerp (model aanvrager) | NEN 2580 | M06 | Concept |
| `LR-R07-04` | Maximale oppervlakte brandcompartiment per gebruiksfunctie | maximale GO brandcompartiment | Normwaarde | Regelgeving – Bbl | Bbl art. 4.50–4.51 | M12 | Concept |
| `LR-R07-05` | Vereiste weerstand tegen branddoorslag en brandoverslag (minuten) | WBDBO-eis | Normwaarde | Regelgeving – Bbl | Bbl art. 4.52–4.54 | M12 | Concept |
| `LR-R07-06` | Bereikte WBDBO tussen compartimenten en naar het gespiegelde gebouw | WBDBO (NEN 6068) | Gemeten / afgeleide grootheid | Aangeleverde berekening / verklaring | NEN 6068 | M07, M08, M11 | Concept |
| `LR-R07-07` | Spiegellijn: perceelsgrens of hart van aangrenzende weg, water of openbaar groen | perceelsgrens / hart weg, water, groen (spiegelprincipe) | Referentie (peil, lijn, plaats) | Omgeving (bestaande situatie) | Bbl spiegelprincipe | M10, M13, M14 | Concept |
| `LR-R07-08` | Andere bouwwerken op hetzelfde perceel en eromheen | andere bouwwerken op hetzelfde perceel | Gemeten / afgeleide grootheid | Omgeving (bestaande situatie) | Bbl art. 4.53 | M09, M13 | Concept |
| `LR-R07-09` | Beroep op gelijkwaardigheid en brandveiligheidsdocumenten | gelijkwaardigheid | Aangeleverd bewijs | Aangeleverde berekening / verklaring | Bbl art. 2.2 (gelijkwaardigheid) | M11 | Concept |

**Open interpretatiekeuzes**

- `LR-R07-02` Welke uitzonderingen uit de tabel gelden?
- `LR-R07-04` Grotere oppervlakte via gelijkwaardigheid (NEN 6060/6079)?
- `LR-R07-06` Berekenen of overnemen uit aangeleverde berekening?
- `LR-R07-07` Waar ligt de spiegellijn precies?
- `LR-R07-08` Wat telt als één bouwwerk?
- `LR-R07-09` Menselijke beoordeling

## 08 — Brandwerendheid {#jb-regel-8}

| | |
|---|---|
| **Regel-ID** | `BM13-R08` |
| **Vereisten** | 5 |
| **Grondslag** | Bbl tabel 4.49; Bbl §4.2.8; EN 13501-2; EN 13501-2; Inventory |
| **Interpretatie** | [[[#regel-8]]] |

| LR | Benodigde informatie | Juridische term | Rol | Waarde komt uit | Grondslag | Laag 1 | Status |
|----|------|------|------|------|------|------|------|
| `LR-R08-01` | Brandcompartimenten en de elementen die ze scheiden | brandcompartiment, scheidingsconstructie | Gereguleerd object | Ontwerp (model aanvrager) | Bbl tabel 4.49 | M04, M05 | Concept |
| `LR-R08-02` | Soort scheidend element (wand, vloer, deur, raam, kolom, vliesgevel) | constructieonderdeel | Gereguleerd object | Ontwerp (model aanvrager) | — | M07 | Concept |
| `LR-R08-03` | Vereiste brandwerendheid per scheiding (criteria R/E/I, minuten) | brandwerendheid-eis | Normwaarde | Regelgeving – Bbl | Bbl §4.2.8; EN 13501-2 | M09 | Concept |
| `LR-R08-04` | Bereikte brandwerendheid per element | brandwerendheid (classificatie) | Aangeleverd bewijs | Aangeleverde berekening / verklaring | EN 13501-2 | M06, M08 | Concept |
| `LR-R08-05` | Wanneer de check niet van toepassing is | uitzonderingen (geen besloten ruimten, klein aangrenzend gebouw) | Toepasselijkheid | Regelprofiel (keuze gemeente) | Inventory | M10 | Concept |

**Open interpretatiekeuzes**

- `LR-R08-03` Volstaat de klasse per element, of de hele WBDBO?
- `LR-R08-04` Productclassificatie of berekening?

## 09 — Vrije breedte {#jb-regel-9}

| | |
|---|---|
| **Regel-ID** | `BM13-R09` |
| **Vereisten** | 6 |
| **Grondslag** | Bbl tabel 4.176; Bbl art. 4.180; Bbl §4.6.1; Bbl art. 4.181 |
| **Interpretatie** | [[[#regel-9]]] |

| LR | Benodigde informatie | Juridische term | Rol | Waarde komt uit | Grondslag | Laag 1 | Status |
|----|------|------|------|------|------|------|------|
| `LR-R09-01` | Gebruiksfunctie van het gebouw | gebruiksfunctie | Toepasselijkheid | Ontwerp (model aanvrager) | Bbl tabel 4.176 | M04 | Concept |
| `LR-R09-02` | Ruimten die bereikbaar moeten zijn (verblijfsgebieden, verblijfsruimten, toilet, badruimte, berging, buitenruimte) | verblijfsgebied, verblijfsruimte, toiletruimte, badruimte, buitenruimte | Gereguleerd object | Ontwerp (model aanvrager) | Bbl art. 4.180 | M04, M05, M11 | Concept |
| `LR-R09-03` | Verkeersroutes van de toegang naar die ruimten | verkeersroute | Gemeten / afgeleide grootheid | Ontwerp (model aanvrager) | Bbl §4.6.1 | M08 | Concept |
| `LR-R09-04` | Vrije breedte en vrije hoogte van elke deur, doorgang en elk routedeel | vrije breedte, vrije hoogte | Gemeten / afgeleide grootheid | Ontwerp (model aanvrager) | Bbl art. 4.180 | M06, M09 | Concept |
| `LR-R09-05` | Vereiste vrije breedte en vrije hoogte | eis vrije breedte / hoogte | Normwaarde | Regelgeving – Bbl | Bbl art. 4.180 | M10 | Concept |
| `LR-R09-06` | Lift: aanwezig of vereist, vrije breedte en vloeroppervlakte | lift (vrije breedte, vloeroppervlakte) | Gemeten / afgeleide grootheid | Ontwerp (model aanvrager) | Bbl art. 4.181 | M07, M10 | Concept |

**Open interpretatiekeuzes**

- `LR-R09-02` Welke ruimten moeten bereikbaar zijn?
- `LR-R09-04` Hoe worden kozijnen, leuningen en plinten behandeld?

## 10 — Hoogteverschil {#jb-regel-10}

| | |
|---|---|
| **Regel-ID** | `BM13-R10` |
| **Vereisten** | 7 |
| **Grondslag** | Bbl tabellen 4.24, 4.179; Bbl art. 4.25, 4.182; Bbl art. 4.25; Bbl art. 4.26–4.33; Bbl art. 4.25–4.33, 4.182; Bbl art. 4.182 |
| **Interpretatie** | [[[#regel-10]]] |

| LR | Benodigde informatie | Juridische term | Rol | Waarde komt uit | Grondslag | Laag 1 | Status |
|----|------|------|------|------|------|------|------|
| `LR-R10-01` | Gebruiksfunctie van het gebouw | gebruiksfunctie | Toepasselijkheid | Ontwerp (model aanvrager) | Bbl tabellen 4.24, 4.179 | M04 | Concept |
| `LR-R10-02` | Hoogteverschillen op elke verkeersroute (tussen vloeren, vloer en terrein) | hoogteverschil | Gemeten / afgeleide grootheid | Ontwerp (model aanvrager) | Bbl art. 4.25, 4.182 | M05, M09, M10 | Concept |
| `LR-R10-03` | Hoogte van het aansluitende terrein | aansluitend terrein | Referentie (peil, lijn, plaats) | Omgeving (bestaande situatie) | Bbl art. 4.25 | M11, M12 | Concept |
| `LR-R10-04` | Trappen, hellingbanen en liften die het verschil overbruggen, met hun maten (optrede, aantrede, helling, breedte, bordessen) | trap, hellingbaan, lift, bordes | Gereguleerd object | Ontwerp (model aanvrager) | Bbl art. 4.26–4.33 | M07, M08 | Concept |
| `LR-R10-05` | Drempelwaarden en vereiste maten | drempelwaarden en maten | Normwaarde | Regelgeving – Bbl | Bbl art. 4.25–4.33, 4.182 | M13 | Concept |
| `LR-R10-06` | Ruimten die voor toegankelijkheid verbonden moeten zijn | toegang, verkeersruimte, verblijfsgebied, buitenruimte | Gereguleerd object | Ontwerp (model aanvrager) | Bbl art. 4.182 | M05, M06 | Concept |
| `LR-R10-07` | Meetpunten voor hoogteverschillen | — | Definitie / meetmethode | Regelprofiel (keuze gemeente) | — | M14 | Concept |

**Open interpretatiekeuzes**

- `LR-R10-02` Afgewerkte of constructieve vloerhoogte?
- `LR-R10-03` Welke terreinhoogte geldt?
- `LR-R10-07` Welke verschillen tellen?

## 11 — Rc-waarde {#jb-regel-11}

| | |
|---|---|
| **Regel-ID** | `BM13-R11` |
| **Vereisten** | 5 |
| **Grondslag** | Bbl art. 4.152; NTA 8800 |
| **Interpretatie** | [[[#regel-11]]] |

| LR | Benodigde informatie | Juridische term | Rol | Waarde komt uit | Grondslag | Laag 1 | Status |
|----|------|------|------|------|------|------|------|
| `LR-R11-01` | Verwarmde gebieden die geïsoleerd moeten zijn (verblijfsgebieden, functiegebieden, toilet, badruimte) | verblijfsgebied, toiletruimte, badruimte | Gereguleerd object | Ontwerp (model aanvrager) | Bbl art. 4.152 | M04 | Concept |
| `LR-R11-02` | Scheidende wanden, daken en vloeren, en wat erachter ligt (buitenlucht, grond, kruipruimte, water, onverwarmde ruimte) | uitwendige scheidingsconstructie | Gereguleerd object | Ontwerp (model aanvrager) | Bbl art. 4.152 | M05, M06, M07 | Concept |
| `LR-R11-03` | Bereikte warmteweerstand per constructie | Rc-waarde (NTA 8800) | Gemeten / afgeleide grootheid | Aangeleverde berekening / verklaring | NTA 8800 | M06, M08 | Concept |
| `LR-R11-04` | Vereiste warmteweerstand per situatie (gevel, dak, vloer) | Rc-eis | Normwaarde | Regelgeving – Bbl | Bbl art. 4.152 | M09 | Concept |
| `LR-R11-05` | Meetmethode oppervlakte en tolerantie | — | Definitie / meetmethode | Regelprofiel (keuze gemeente) | — | M10 | Concept |

**Open interpretatiekeuzes**

- `LR-R11-02` Welke scheidingen tellen?
- `LR-R11-03` Rc uit de U-waarde in het model acceptabel, of alleen NTA 8800?
- `LR-R11-05` Netto oppervlakte?

## 12 — U-waarde {#jb-regel-12}

| | |
|---|---|
| **Regel-ID** | `BM13-R12` |
| **Vereisten** | 5 |
| **Grondslag** | Bbl art. 4.153; NTA 8800 |
| **Interpretatie** | [[[#regel-12]]] |

| LR | Benodigde informatie | Juridische term | Rol | Waarde komt uit | Grondslag | Laag 1 | Status |
|----|------|------|------|------|------|------|------|
| `LR-R12-01` | Omhulling van de verwarmde gebieden | thermische schil | Gereguleerd object | Ontwerp (model aanvrager) | Bbl art. 4.153 | M11 | Concept |
| `LR-R12-02` | Ramen, deuren en kozijnen in uitwendige verticale scheidingen (en wat daarmee gelijkgesteld is) | ramen, deuren, kozijnen | Gereguleerd object | Ontwerp (model aanvrager) | Bbl art. 4.153 | M04, M05 | Concept |
| `LR-R12-03` | Geprojecteerde oppervlakte van elk raam, elke deur en elk kozijn | oppervlakte (NTA 8800) | Gemeten / afgeleide grootheid | Ontwerp (model aanvrager) | NTA 8800 | M04 | Concept |
| `LR-R12-04` | U-waarde van elk raam, elke deur en elk kozijn | U-waarde | Gemeten / afgeleide grootheid | Aangeleverde berekening / verklaring | NTA 8800 | M04, M07 | Concept |
| `LR-R12-05` | Vereiste gemiddelde U-waarde en maximum per element | U-eis (gemiddeld en per element) | Normwaarde | Regelgeving – Bbl | Bbl art. 4.153 | M08 | Concept |

**Open interpretatiekeuzes**

- `LR-R12-02` Deuren naar onverwarmde ruimten? Dakramen?

## 13 — MPG, milieuprestatie {#jb-regel-13}

| | |
|---|---|
| **Regel-ID** | `BM13-R13` |
| **Vereisten** | 5 |
| **Grondslag** | NEN 2580; Bbl art. 4.158 lid 3b; Bbl art. 4.158–4.159 (version on application date); Bepalingsmethode Milieuprestatie Bouwwerken |
| **Interpretatie** | [[[#regel-13]]] |

| LR | Benodigde informatie | Juridische term | Rol | Waarde komt uit | Grondslag | Laag 1 | Status |
|----|------|------|------|------|------|------|------|
| `LR-R13-01` | Gebruiksfuncties en hun gebruiksoppervlakte | gebruiksfunctie, GO | Gemeten / afgeleide grootheid | Ontwerp (model aanvrager) | NEN 2580 | M04, M06 | Concept |
| `LR-R13-02` | Verliesoppervlakte (kantoren) | verliesoppervlakte | Gemeten / afgeleide grootheid | Ontwerp (model aanvrager) | Bbl art. 4.158 lid 3b | M04, M07 | Concept |
| `LR-R13-03` | Grenswaarde milieuprestatie per gebruiksfunctie (gewogen bij gecombineerd gebruik) | MPG-grenswaarde | Normwaarde | Regelgeving – Bbl | Bbl art. 4.158–4.159 (version on application date) | M08 | Concept |
| `LR-R13-04` | Berekende milieuprestatie | MPG-score (Bepalingsmethode) | Aangeleverd bewijs | Aangeleverde berekening / verklaring | Bepalingsmethode Milieuprestatie Bouwwerken | M05 | Concept |
| `LR-R13-05` | Toegestaan verschil tussen oppervlakten in de berekening en in het model | — | Definitie / meetmethode | Regelprofiel (keuze gemeente) | — | M09 | Concept |

**Open interpretatiekeuzes**

- `LR-R13-01` Woongebouw of niet?
- `LR-R13-05` Moeten oppervlakten overeenkomen, binnen welke tolerantie?

## 14 — Vluchtwegen {#jb-regel-14}

| | |
|---|---|
| **Regel-ID** | `BM13-R14` |
| **Vereisten** | 6 |
| **Grondslag** | Bbl tabel 4.64; Bbl art. 4.65; Bbl bijlage I (begrippen) |
| **Interpretatie** | [[[#regel-14]]] |

| LR | Benodigde informatie | Juridische term | Rol | Waarde komt uit | Grondslag | Laag 1 | Status |
|----|------|------|------|------|------|------|------|
| `LR-R14-01` | Gebruiksfunctie van het gebouw | gebruiksfunctie | Toepasselijkheid | Ontwerp (model aanvrager) | Bbl tabel 4.64 | M10 | Concept |
| `LR-R14-02` | Ruimten voor personen (verblijfsgebieden, verblijfsruimten) | verblijfsgebied, verblijfsruimte | Gereguleerd object | Ontwerp (model aanvrager) | Bbl art. 4.65 | M04 | Concept |
| `LR-R14-03` | Veilige plaatsen waar vluchtroutes eindigen | veilige plaats | Referentie (peil, lijn, plaats) | Regelprofiel (keuze gemeente) | Bbl bijlage I (begrippen) | M09, M11 | Concept |
| `LR-R14-04` | Vluchtroute vanuit elke ruimte naar een veilige plaats (via vloeren, trappen, hellingbanen; geen lift, geen raam) | vluchtroute | Gemeten / afgeleide grootheid | Ontwerp (model aanvrager) | Bbl art. 4.65 | M06, M07, M08 | Concept |
| `LR-R14-05` | Brandcompartimenten waar de route door gaat | brandcompartiment | Gereguleerd object | Ontwerp (model aanvrager) | Bbl art. 4.65 | M05 | Concept |
| `LR-R14-06` | Voorwaarden per gebruiksfunctie | eisen vluchtroute | Normwaarde | Regelgeving – Bbl | Bbl art. 4.65 | M10 | Concept |

**Open interpretatiekeuzes**

- `LR-R14-03` Buiten, ander compartiment, beschermde route?
- `LR-R14-04` De gemodelleerde routes volgen?

## 15 — Loopafstand {#jb-regel-15}

| | |
|---|---|
| **Regel-ID** | `BM13-R15` |
| **Vereisten** | 6 |
| **Grondslag** | Bbl art. 4.66; Bbl art. 4.66 lid 6 |
| **Interpretatie** | [[[#regel-15]]] |

| LR | Benodigde informatie | Juridische term | Rol | Waarde komt uit | Grondslag | Laag 1 | Status |
|----|------|------|------|------|------|------|------|
| `LR-R15-01` | Verblijfsgebieden en verblijfsruimten, en hun verst gelegen punt | verblijfsgebied, verblijfsruimte | Gereguleerd object | Ontwerp (model aanvrager) | Bbl art. 4.66 | M04 | Concept |
| `LR-R15-02` | (Sub)brandcompartimenten en hun uitgangen | (sub)brandcompartiment, uitgang | Referentie (peil, lijn, plaats) | Ontwerp (model aanvrager) | Bbl art. 4.66 | M05, M09 | Concept |
| `LR-R15-03` | Gecorrigeerde loopafstand tot de dichtstbijzijnde uitgang (factor 1,5 of 1) | gecorrigeerde loopafstand | Gemeten / afgeleide grootheid | Ontwerp (model aanvrager) | Bbl art. 4.66 | M06, M08, M12 | Concept |
| `LR-R15-04` | Maximale loopafstand | maximale loopafstand | Normwaarde | Regelgeving – Bbl | Bbl art. 4.66 | M11 | Concept |
| `LR-R15-05` | Hoogteverschil tussen vloeren binnen één compartiment (max. 4 m) | hoogteverschil binnen brandcompartiment | Gemeten / afgeleide grootheid | Ontwerp (model aanvrager) | Bbl art. 4.66 lid 6 | M05 | Concept |
| `LR-R15-06` | Bezetting, aantal uitgangen en de afstand ertussen (>150 personen: 2 uitgangen ≥ 5 m uit elkaar) | bezetting, aantal uitgangen | Gemeten / afgeleide grootheid | Ontwerp (model aanvrager) | Bbl art. 4.66 | M07, M09, M10 | Concept |

**Open interpretatiekeuzes**

- `LR-R15-03` Welke factor geldt? Obstakels?
- `LR-R15-06` Bezetting uit het model of uit het Bbl per m²?

## 16 — Vluchtbreedte {#jb-regel-16}

| | |
|---|---|
| **Regel-ID** | `BM13-R16` |
| **Vereisten** | 6 |
| **Grondslag** | Bbl art. 4.78; Bbl art. 4.80; Bbl art. 4.78, 4.80 |
| **Interpretatie** | [[[#regel-16]]] |

| LR | Benodigde informatie | Juridische term | Rol | Waarde komt uit | Grondslag | Laag 1 | Status |
|----|------|------|------|------|------|------|------|
| `LR-R16-01` | Vluchtroutes met hun deuren, doorgangen en trappen | vluchtroute | Gereguleerd object | Ontwerp (model aanvrager) | Bbl art. 4.78 | M05, M06, M07 | Concept |
| `LR-R16-02` | Vrije breedte en vrije hoogte op de route | vrije doorgang | Gemeten / afgeleide grootheid | Ontwerp (model aanvrager) | Bbl art. 4.78 | M06, M07 | Concept |
| `LR-R16-03` | Vloeroppervlakte van verblijfsgebieden die via een trap worden bereikt | GO verblijfsgebied via trap | Gemeten / afgeleide grootheid | Ontwerp (model aanvrager) | Bbl art. 4.78 | M04, M08 | Concept |
| `LR-R16-04` | Aantal personen dat op elke route is aangewezen | aantal personen per vluchtroute | Gemeten / afgeleide grootheid | Ontwerp (model aanvrager) | Bbl art. 4.80 | M08, M12 | Concept |
| `LR-R16-05` | Doorstroomcapaciteit van deuren en trappen (incl. dubbele deuren, openingshoek) | doorstroomcapaciteit | Gemeten / afgeleide grootheid | Ontwerp (model aanvrager) | Bbl art. 4.80 | M06, M07 | Concept |
| `LR-R16-06` | Vereiste vrije breedte, hoogte, oppervlaktegrens en doorstroomcapaciteit | eisen vrije doorgang en doorstroomcapaciteit | Normwaarde | Regelgeving – Bbl | Bbl art. 4.78, 4.80 | M11 | Concept |

**Open interpretatiekeuzes**

- `LR-R16-04` Hoe worden personen aan routes toegewezen?
- `LR-R16-05` Openingshoek staat niet in IFC
- `LR-R16-06` Wie toetst: gemeente of brandweer?

## 17 — Daglicht {#jb-regel-17}

| | |
|---|---|
| **Regel-ID** | `BM13-R17` |
| **Vereisten** | 8 |
| **Grondslag** | Bbl tabel 4.146; NEN 2057; Bbl art. 4.147; NEN 2057; Bbl art. 4.147 |
| **Interpretatie** | [[[#regel-17]]] |

| LR | Benodigde informatie | Juridische term | Rol | Waarde komt uit | Grondslag | Laag 1 | Status |
|----|------|------|------|------|------|------|------|
| `LR-R17-01` | Gebruiksfunctie van het gebouw | gebruiksfunctie | Toepasselijkheid | Ontwerp (model aanvrager) | Bbl tabel 4.146 | M04 | Concept |
| `LR-R17-02` | Verblijfsgebieden en verblijfsruimten en hun vloeroppervlakte | verblijfsgebied, verblijfsruimte, vloeroppervlakte | Gereguleerd object | Ontwerp (model aanvrager) | NEN 2057 | M05, M10 | Concept |
| `LR-R17-03` | Daglichtopeningen (ramen, glazen deuren) en hun grootte en positie | daglichtopening | Gereguleerd object | Ontwerp (model aanvrager) | NEN 2057 | M06, M08 | Concept |
| `LR-R17-04` | Equivalente daglichtoppervlakte per ruimte | equivalente daglichtoppervlakte | Gemeten / afgeleide grootheid | Ontwerp (model aanvrager) | NEN 2057 | M06, M12 | Concept |
| `LR-R17-05` | Belemmering door omliggende bebouwing (bestaand, of wat het plan toestaat) | belemmering (belemmeringshoek) | Gemeten / afgeleide grootheid | Omgeving (bestaande situatie) | NEN 2057 | M11 | Concept |
| `LR-R17-06` | Spiegellijn: perceelsgrens of hart van aangrenzende weg, water of openbaar groen | perceelsgrens / hart weg, water, groen | Referentie (peil, lijn, plaats) | Omgeving (bestaande situatie) | Bbl art. 4.147; NEN 2057 | M07, M09, M11 | Concept |
| `LR-R17-07` | Vereiste equivalente daglichtoppervlakte (minimum per ruimte en aandeel van de vloeroppervlakte) | eis equivalente daglichtoppervlakte | Normwaarde | Regelgeving – Bbl | Bbl art. 4.147 | M13 | Concept |
| `LR-R17-08` | Welke openingen meetellen en hoe belemmeringshoeken worden gemeten | — | Definitie / meetmethode | Regelprofiel (keuze gemeente) | NEN 2057 | M14 | Concept |

**Open interpretatiekeuzes**

- `LR-R17-03` Zijn glazen deuren daglichtopeningen?
- `LR-R17-04` Overstekken en balkons boven de opening?
- `LR-R17-05` Alleen bestaande bebouwing, of de toegestane bebouwingsmogelijkheden?
