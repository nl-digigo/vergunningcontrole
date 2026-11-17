# Legal terms per check {#juridische-begrippen}

<p class="leesniveau technisch">Technical</p>

This chapter records, for each check, which information the rule needs, under which legal term it appears in the regulations, what role that information plays in the rule and where the value comes from. It is the bridge between the rule text ([[[#regelinterpretatie]]]) and the machine-readable rule ([[[#regelcodering]]]).

| | |
|---|---|
| **Source** | BM13 tracker, legal requirements tab — 105 requirements (LR) |
| **Checks** | 17 rules from the BM13 rule inventory v0.3, 3 July 2026 |
| **Status** | Draft: 104, In review: 1 |
| **Open interpretation choices** | 52 |
| **Identifier** | `LR-Rnn-mm`: rule nn, requirement mm |

Each requirement has one **role in the rule**:

| Role | Meaning |
|---|---|
| Applicability | Decides whether the rule applies. |
| Where the rule applies | The area in which the rule applies. |
| Regulated object | The object the requirement is about. |
| Norm value | The limit value the check compares against. |
| Measured / derived quantity | The value measured or derived from the model. |
| Reference (level, line, place) | The fixed point measurements start from. |
| Definition / measuring method | How a term is delimited or measured. |
| Evidence supplied | Evidence the applicant supplies. |

## Overview per check

| Check | Subject | Requirements | Open choices | Status |
|-------|-----------|-----------|-------------|--------|
| **#1** | [Use function matches the designation ("Wonen")](#jb-regel-1) | 7 | 4 | Draft, In review |
| **#2** | [Maximum building height](#jb-regel-2) | 7 | 5 | Draft |
| **#3** | [Maximum building coverage percentage](#jb-regel-3) | 5 | 4 | Draft |
| **#4** | [Use function limited to x storeys](#jb-regel-4) | 6 | 3 | Draft |
| **#5** | [Home-based business: maximum share of usable floor area](#jb-regel-5) | 6 | 5 | Draft |
| **#6** | [Maximum number of storeys](#jb-regel-6) | 6 | 2 | Draft |
| **#7** | [Fire compartments](#jb-regel-7) | 9 | 6 | Draft |
| **#8** | [Fire resistance](#jb-regel-8) | 5 | 2 | Draft |
| **#9** | [Clear width](#jb-regel-9) | 6 | 2 | Draft |
| **#10** | [Height difference](#jb-regel-10) | 7 | 3 | Draft |
| **#11** | [Rc value](#jb-regel-11) | 5 | 3 | Draft |
| **#12** | [U value](#jb-regel-12) | 5 | 1 | Draft |
| **#13** | [MPG, environmental performance](#jb-regel-13) | 5 | 2 | Draft |
| **#14** | [Escape routes](#jb-regel-14) | 6 | 2 | Draft |
| **#15** | [Walking distance](#jb-regel-15) | 6 | 2 | Draft |
| **#16** | [Escape width](#jb-regel-16) | 6 | 3 | Draft |
| **#17** | [Daylight](#jb-regel-17) | 8 | 3 | Draft |

## Overview per source of the value

| Value comes from | Requirements | Checks |
|---|---|---|
| Design (applicant's model) | 49 | #1, #2, #3, #4, #5, #6, #7, #8, #9, #10, #11, #12, #13, #14, #15, #16, #17 |
| Regulation – omgevingsplan | 17 | #1, #2, #3, #4, #5, #6 |
| Regulation – Bbl | 12 | #7, #8, #9, #10, #11, #12, #13, #14, #15, #16, #17 |
| Rule profile (municipal choice) | 11 | #1, #2, #3, #5, #8, #10, #11, #13, #14, #17 |
| Surroundings (existing situation) | 6 | #3, #7, #10, #17 |
| Supplied calculation / declaration | 6 | #7, #8, #11, #12, #13 |
| Permit application | 4 | #1, #4, #5, #6 |

## Reusable concepts

The same information comes back in several checks. A concept that is defined well once can be reused in every check.

| Concept | Legal terms | Checks | Requirements |
|---|---|---|---|
| Norm (Bbl) | maximale GO brandcompartiment; WBDBO-eis; brandwerendheid-eis; eis vrije breedte / hoogte; drempelwaarden en maten; Rc-eis; U-eis (gemiddeld en per element); MPG-grenswaarde; eisen vluchtroute; maximale loopafstand; eisen vrije doorgang en doorstroomcapaciteit; eis equivalente daglichtoppervlakte | #7, #8, #9, #10, #11, #12, #13, #14, #15, #16, #17 | LR-R07-04, LR-R07-05, LR-R08-03, LR-R09-05, LR-R10-05, LR-R11-04, LR-R12-05, LR-R13-03, LR-R14-06, LR-R15-04, LR-R16-06, LR-R17-07 |
| Spaces | verblijfsgebied, verblijfsruimte, toiletruimte, badruimte, buitenruimte; toegang, verkeersruimte, verblijfsgebied, buitenruimte; verblijfsgebied, toiletruimte, badruimte; thermische schil; verblijfsgebied, verblijfsruimte; verblijfsgebied, verblijfsruimte, vloeroppervlakte | #9, #10, #11, #12, #14, #15, #17 | LR-R09-02, LR-R10-06, LR-R11-01, LR-R12-01, LR-R14-02, LR-R15-01, LR-R17-02 |
| Use function | beoogd gebruik / gebruiksfunctie (Woonfunctie); gebruiksfunctie per bouwlaag; gebruiksfunctie | #1, #4, #7, #9, #10, #14, #17 | LR-R01-01, LR-R04-01, LR-R07-01, LR-R09-01, LR-R10-01, LR-R14-01, LR-R17-01 |
| Norm (plan) | maximum bouwhoogte (m) / normwaarde; maximum bebouwingspercentage; functieaanduiding met bouwlaagbeperking; toegestane beroepen aan huis; maximaal percentage / maximum m²; maximum aantal bouwlagen | #2, #3, #4, #5, #6 | LR-R02-01, LR-R03-01, LR-R04-02, LR-R05-03, LR-R05-05, LR-R06-01 |
| Fire compartments | brandcompartiment; brandcompartiment, scheidingsconstructie; (sub)brandcompartiment, uitgang | #7, #8, #14, #15 | LR-R07-02, LR-R08-01, LR-R14-05, LR-R15-02 |
| Parts that count | bouwwerk / gebouw, ondergeschikte bouwdelen; ondergeschikte bouwdelen (schoorsteen, antenne, liftopbouw); hoofdgebouw, bijbehorende bouwwerken | #1, #2, #3, #5 | LR-R01-04, LR-R02-05, LR-R03-05, LR-R05-06 |
| Regulation area | bestemmingsvlak / werkingsgebied; maatvoeringsvlak / werkingsgebied; werkingsgebied | #1, #2, #4, #6 | LR-R01-03, LR-R02-02, LR-R04-03, LR-R06-02 |
| Tolerance | meettolerantie | #1, #2, #11, #13 | LR-R01-06, LR-R02-06, LR-R11-05, LR-R13-05 |
| Usable floor area (GO) | woonfunctie, gebruiksoppervlakte (GO); GO van het bedrijfsdeel; GO per brandcompartiment; gebruiksfunctie, GO; GO verblijfsgebied via trap | #5, #7, #13, #16 | LR-R05-01, LR-R05-04, LR-R07-03, LR-R13-01, LR-R16-03 |
| Application location | locatie aanvraag (adres, perceel); locatie aanvraag | #1, #4, #6 | LR-R01-07, LR-R04-06, LR-R06-06 |
| Building elements | constructieonderdeel; uitwendige scheidingsconstructie; verliesoppervlakte | #8, #11, #13 | LR-R08-02, LR-R11-02, LR-R13-02 |
| Escape routes | vluchtroute; gecorrigeerde loopafstand; doorstroomcapaciteit | #14, #15, #16 | LR-R14-04, LR-R15-03, LR-R16-01, LR-R16-05 |
| Existing buildings | bestaande bebouwing / te slopen bebouwing; andere bouwwerken op hetzelfde perceel; belemmering (belemmeringshoek) | #3, #7, #17 | LR-R03-04, LR-R07-08, LR-R17-05 |
| Footprint / position | ligging van het bouwwerk; ligging (RD / NAP); bebouwde oppervlakte (projectie op maaiveld) | #1, #2, #3 | LR-R01-05, LR-R02-07, LR-R03-03 |
| Clear width / height | vrije breedte, vrije hoogte; vrije doorgang | #9, #16 | LR-R09-04, LR-R16-02 |
| Height differences | hoogteverschil; hoogteverschil binnen brandcompartiment | #10, #15 | LR-R10-02, LR-R15-05 |
| Measuring method | — | #10, #17 | LR-R10-07, LR-R17-08 |
| Occupancy | bezetting, aantal uitgangen; aantal personen per vluchtroute | #15, #16 | LR-R15-06, LR-R16-04 |
| Openings (windows, doors) | ramen, deuren, kozijnen; oppervlakte (NTA 8800); daglichtopening | #12, #17 | LR-R12-02, LR-R12-03, LR-R17-03 |
| Parcel boundary / mirror line | perceelsgrens / hart weg, water, groen (spiegelprincipe); perceelsgrens / hart weg, water, groen | #7, #17 | LR-R07-07, LR-R17-06 |
| Reference level (peil) | peil | #2, #6 | LR-R02-03, LR-R06-05 |
| Storey definition | bouwlaag (kelder, tussenverdieping, zolder); bouwlaag | #4, #6 | LR-R04-04, LR-R06-03 |
| Storeys | bouwlagen; bouwlagen boven peil | #4, #6 | LR-R04-05, LR-R06-04 |
| Supplied calculation | WBDBO (NEN 6068); gelijkwaardigheid; MPG-score (Bepalingsmethode) | #7, #13 | LR-R07-06, LR-R07-09, LR-R13-04 |
| Thermal values (Rc / U) | Rc-waarde (NTA 8800); U-waarde | #11, #12 | LR-R11-03, LR-R12-04 |
| Activity | beroep aan huis, SBI-code | #5 | LR-R05-02 |
| Daylight | equivalente daglichtoppervlakte | #17 | LR-R17-04 |
| Designation | bestemming / functie 'wonen' (Gemengd, Centrum …) | #1 | LR-R01-02 |
| Fire rating | brandwerendheid (classificatie) | #8 | LR-R08-04 |
| Highest point | hoogste punt van het bouwwerk | #2 | LR-R02-04 |
| Lifts | lift (vrije breedte, vloeroppervlakte) | #9 | LR-R09-06 |
| Parcel / plot | bouwperceel / bouwvlak / bebouwingsgebied | #3 | LR-R03-02 |
| Safe place | veilige plaats | #14 | LR-R14-03 |
| Scope exemptions | uitzonderingen (geen besloten ruimten, klein aangrenzend gebouw) | #8 | LR-R08-05 |
| Stairs and ramps | trap, hellingbaan, lift, bordes | #10 | LR-R10-04 |
| Terrain level | aansluitend terrein | #10 | LR-R10-03 |
| Traffic routes | verkeersroute | #9 | LR-R09-03 |

---

## 01 — Use function matches the designation ("Wonen") {#jb-regel-1}

| | |
|---|---|
| **Rule ID** | `BM13-R01` |
| **Requirements** | 7 |
| **Legal basis** | Omgevingsplan; Bbl art. 1.1 (gebruiksfunctie); IMRO enkelbestemming; TPOD gebiedsaanwijzing Functie; Omgevingsplan (Regels op de kaart); Plan begrippen |
| **Interpretation** | [[[#regel-1]]] |

| LR | Information needed | Legal term (NL) | Role | Value comes from | Legal basis | Layer 1 | Status |
|----|------|------|------|------|------|------|------|
| `LR-R01-01` | Intended use of the building | beoogd gebruik / gebruiksfunctie (Woonfunctie) | Applicability | Design (applicant's model) | Omgevingsplan; Bbl art. 1.1 (gebruiksfunctie) | M04, M05 | In review |
| `LR-R01-02` | Designations that allow this use at the location | bestemming / functie 'wonen' (Gemengd, Centrum …) | Norm value | Regulation – omgevingsplan | IMRO enkelbestemming; TPOD gebiedsaanwijzing Functie | M08, M09 | Draft |
| `LR-R01-03` | Extent of each designation area | bestemmingsvlak / werkingsgebied | Where the rule applies | Regulation – omgevingsplan | Omgevingsplan (Regels op de kaart) | M08 | Draft |
| `LR-R01-04` | Which parts of the building count (balconies, eaves, canopies, underground parts) | bouwwerk / gebouw, ondergeschikte bouwdelen | Definition / measuring method | Rule profile (municipal choice) | Plan begrippen | M06, M09 | Draft |
| `LR-R01-05` | Position of the building on the ground (vertical projection) | ligging van het bouwwerk | Measured / derived quantity | Design (applicant's model) | — | M02, M03 | Draft |
| `LR-R01-06` | Boundary tolerance and how partial overlap is judged | — | Definition / measuring method | Rule profile (municipal choice) | — | M09 | Draft |
| `LR-R01-07` | Location of the application | locatie aanvraag (adres, perceel) | Applicability | Permit application | — | M07 | Draft |

**Open interpretation choices**

- `LR-R01-01` does 'wonen' when used means always 'woonfunctie"? to be validated ( if yes, the need of having a mapping to recognize that "wonen" means 'woonfunctie"
- `LR-R01-02` Which other designations also allow housing?
- `LR-R01-04` Do overhangs and underground parts count?
- `LR-R01-06` Tolerance? Partial overlap = violation or review?

## 02 — Maximum building height {#jb-regel-2}

| | |
|---|---|
| **Rule ID** | `BM13-R02` |
| **Requirements** | 7 |
| **Legal basis** | IMRO maatvoeringsaanduiding; TPOD omgevingsnorm; Omgevingsplan; Plan begrippen (peil); Plan wijze van meten (bouwhoogte); Plan wijze van meten |
| **Interpretation** | [[[#regel-2]]] |

| LR | Information needed | Legal term (NL) | Role | Value comes from | Legal basis | Layer 1 | Status |
|----|------|------|------|------|------|------|------|
| `LR-R02-01` | Maximum permitted building height | maximum bouwhoogte (m) / normwaarde | Norm value | Regulation – omgevingsplan | IMRO maatvoeringsaanduiding; TPOD omgevingsnorm | M08 | Draft |
| `LR-R02-02` | Extent of the height area where the maximum applies | maatvoeringsvlak / werkingsgebied | Where the rule applies | Regulation – omgevingsplan | Omgevingsplan | M08 | Draft |
| `LR-R02-03` | Reference level and the method that sets it (road elevation or design elevation) | peil | Reference (level, line, place) | Regulation – omgevingsplan | Plan begrippen (peil) | M06, M07, M08 | Draft |
| `LR-R02-04` | Highest relevant point of the building | hoogste punt van het bouwwerk | Measured / derived quantity | Design (applicant's model) | Plan wijze van meten (bouwhoogte) | M02, M04 | Draft |
| `LR-R02-05` | Parts that do not count and how much extra height they may add | ondergeschikte bouwdelen (schoorsteen, antenne, liftopbouw) | Definition / measuring method | Regulation – omgevingsplan | Plan wijze van meten | M05, M09 | Draft |
| `LR-R02-06` | Measuring tolerance | meettolerantie | Definition / measuring method | Rule profile (municipal choice) | — | M08 | Draft |
| `LR-R02-07` | Position of the building in height (NAP) and plan | ligging (RD / NAP) | Measured / derived quantity | Design (applicant's model) | — | M03 | Draft |

**Open interpretation choices**

- `LR-R02-01` Local exceptions?
- `LR-R02-02` Two height areas: each part against its own area?
- `LR-R02-03` Which reference level applies?
- `LR-R02-05` Are rooftop installations included?
- `LR-R02-06` Is a tolerance accepted?

## 03 — Maximum building coverage percentage {#jb-regel-3}

| | |
|---|---|
| **Rule ID** | `BM13-R03` |
| **Requirements** | 5 |
| **Legal basis** | Omgevingsplan; Plan begrippen; Plan wijze van meten; NEN 2580 |
| **Interpretation** | [[[#regel-3]]] |

| LR | Information needed | Legal term (NL) | Role | Value comes from | Legal basis | Layer 1 | Status |
|----|------|------|------|------|------|------|------|
| `LR-R03-01` | Maximum building coverage percentage (or volume) | maximum bebouwingspercentage | Norm value | Regulation – omgevingsplan | Omgevingsplan | M10 | Draft |
| `LR-R03-02` | Reference area the percentage applies to, and its size | bouwperceel / bouwvlak / bebouwingsgebied | Reference (level, line, place) | Regulation – omgevingsplan | Plan begrippen | M07, M10 | Draft |
| `LR-R03-03` | Built-up area of the new building at ground level | bebouwde oppervlakte (projectie op maaiveld) | Measured / derived quantity | Design (applicant's model) | Plan wijze van meten; NEN 2580 | M04, M05, M06 | Draft |
| `LR-R03-04` | Existing buildings that stay, and buildings to be demolished | bestaande bebouwing / te slopen bebouwing | Measured / derived quantity | Surroundings (existing situation) | — | M08, M09 | Draft |
| `LR-R03-05` | Which buildings and parts count (annexes, outbuildings, overhangs, basements) | hoofdgebouw, bijbehorende bouwwerken | Definition / measuring method | Rule profile (municipal choice) | Plan begrippen | M11 | Draft |

**Open interpretation choices**

- `LR-R03-01` Area (m²) or volume (m³) based?
- `LR-R03-02` Parcel, bouwvlak or bebouwingsgebied?
- `LR-R03-04` Split plots?
- `LR-R03-05` Which parts count?

## 04 — Use function limited to x storeys {#jb-regel-4}

| | |
|---|---|
| **Rule ID** | `BM13-R04` |
| **Requirements** | 6 |
| **Legal basis** | Omgevingsplan; Plan begrippen; same as check #6 |
| **Interpretation** | [[[#regel-4]]] |

| LR | Information needed | Legal term (NL) | Role | Value comes from | Legal basis | Layer 1 | Status |
|----|------|------|------|------|------|------|------|
| `LR-R04-01` | Use functions of the building and on which storeys they are | gebruiksfunctie per bouwlaag | Regulated object | Design (applicant's model) | Omgevingsplan | M04, M05 | Draft |
| `LR-R04-02` | Storeys each use function is allowed on (range or maximum) | functieaanduiding met bouwlaagbeperking | Norm value | Regulation – omgevingsplan | Omgevingsplan | M07 | Draft |
| `LR-R04-03` | Extent of the zone where the restriction applies | werkingsgebied | Where the rule applies | Regulation – omgevingsplan | Omgevingsplan | M07 | Draft |
| `LR-R04-04` | What a storey is and how storeys are numbered | bouwlaag (kelder, tussenverdieping, zolder) | Definition / measuring method | Regulation – omgevingsplan | Plan begrippen; same as check #6 | M08 | Draft |
| `LR-R04-05` | Storeys of the building with their levels | bouwlagen | Measured / derived quantity | Design (applicant's model) | — | M01 | Draft |
| `LR-R04-06` | Location of the application | locatie aanvraag | Applicability | Permit application | — | M06, M09 | Draft |

**Open interpretation choices**

- `LR-R04-01` Does a ground-floor entrance of an upper dwelling count as that use?
- `LR-R04-04` How are basement, mezzanine and roof storey counted?
- `LR-R04-05` Zone spanning two storeys counts on both?

## 05 — Home-based business: maximum share of usable floor area {#jb-regel-5}

| | |
|---|---|
| **Rule ID** | `BM13-R05` |
| **Requirements** | 6 |
| **Legal basis** | NEN 2580; Omgevingsplan; Omgevingsplan; beleidsregels |
| **Interpretation** | [[[#regel-5]]] |

| LR | Information needed | Legal term (NL) | Role | Value comes from | Legal basis | Layer 1 | Status |
|----|------|------|------|------|------|------|------|
| `LR-R05-01` | Residential use function and its usable floor area | woonfunctie, gebruiksoppervlakte (GO) | Measured / derived quantity | Design (applicant's model) | NEN 2580 | M04, M08 | Draft |
| `LR-R05-02` | Business activity and its kind | beroep aan huis, SBI-code | Applicability | Permit application | Omgevingsplan | M10 | Draft |
| `LR-R05-03` | Activities allowed as home-based business | toegestane beroepen aan huis | Norm value | Regulation – omgevingsplan | Omgevingsplan; beleidsregels | M12 | Draft |
| `LR-R05-04` | Usable floor area used for the business | GO van het bedrijfsdeel | Measured / derived quantity | Design (applicant's model) | NEN 2580 | M05, M06, M08, M09 | Draft |
| `LR-R05-05` | Maximum share (%) and possibly maximum area (m²) | maximaal percentage / maximum m² | Norm value | Regulation – omgevingsplan | Omgevingsplan | M11 | Draft |
| `LR-R05-06` | What counts as business area and as the whole residential function | — | Definition / measuring method | Rule profile (municipal choice) | — | M12 | Draft |

**Open interpretation choices**

- `LR-R05-01` Outbuildings in the denominator?
- `LR-R05-02` Does the activity qualify (SBI list)?
- `LR-R05-04` Unnamed spaces: living or business?
- `LR-R05-05` Also an absolute maximum?
- `LR-R05-06` See above

## 06 — Maximum number of storeys {#jb-regel-6}

| | |
|---|---|
| **Rule ID** | `BM13-R06` |
| **Requirements** | 6 |
| **Legal basis** | Omgevingsplan; Plan begrippen; NEN 2580 / Bbl differ; Plan begrippen (shared with check #2) |
| **Interpretation** | [[[#regel-6]]] |

| LR | Information needed | Legal term (NL) | Role | Value comes from | Legal basis | Layer 1 | Status |
|----|------|------|------|------|------|------|------|
| `LR-R06-01` | Maximum number of storeys | maximum aantal bouwlagen | Norm value | Regulation – omgevingsplan | Omgevingsplan | M06 | Draft |
| `LR-R06-02` | Extent of the zone where the maximum applies | werkingsgebied | Where the rule applies | Regulation – omgevingsplan | Omgevingsplan | M06 | Draft |
| `LR-R06-03` | What a storey is (basement, roof storey, mezzanine) | bouwlaag | Definition / measuring method | Regulation – omgevingsplan | Plan begrippen; NEN 2580 / Bbl differ | M09 | Draft |
| `LR-R06-04` | Storeys of the building above the reference level | bouwlagen boven peil | Measured / derived quantity | Design (applicant's model) | — | M01, M04 | Draft |
| `LR-R06-05` | Reference level and the method that sets it | peil | Reference (level, line, place) | Regulation – omgevingsplan | Plan begrippen (shared with check #2) | M07, M08 | Draft |
| `LR-R06-06` | Location of the application | locatie aanvraag | Applicability | Permit application | — | M05, M10 | Draft |

**Open interpretation choices**

- `LR-R06-03` Do basement, roof storey, mezzanine count?
- `LR-R06-05` Which reference level applies?

## 07 — Fire compartments {#jb-regel-7}

| | |
|---|---|
| **Rule ID** | `BM13-R07` |
| **Requirements** | 9 |
| **Legal basis** | Bbl tabel 4.49; Bbl art. 4.50; NEN 2580; Bbl art. 4.50–4.51; Bbl art. 4.52–4.54; NEN 6068; Bbl spiegelprincipe; Bbl art. 4.53; Bbl art. 2.2 (gelijkwaardigheid) |
| **Interpretation** | [[[#regel-7]]] |

| LR | Information needed | Legal term (NL) | Role | Value comes from | Legal basis | Layer 1 | Status |
|----|------|------|------|------|------|------|------|
| `LR-R07-01` | Use function(s) of the building | gebruiksfunctie | Applicability | Design (applicant's model) | Bbl tabel 4.49 | M04 | Draft |
| `LR-R07-02` | Fire compartments and their boundaries | brandcompartiment | Regulated object | Design (applicant's model) | Bbl art. 4.50 | M05 | Draft |
| `LR-R07-03` | Usable floor area per compartment | GO per brandcompartiment | Measured / derived quantity | Design (applicant's model) | NEN 2580 | M06 | Draft |
| `LR-R07-04` | Maximum compartment area per use function | maximale GO brandcompartiment | Norm value | Regulation – Bbl | Bbl art. 4.50–4.51 | M12 | Draft |
| `LR-R07-05` | Required resistance to fire spread (minutes) | WBDBO-eis | Norm value | Regulation – Bbl | Bbl art. 4.52–4.54 | M12 | Draft |
| `LR-R07-06` | Achieved resistance to fire spread between compartments and to the mirrored building | WBDBO (NEN 6068) | Measured / derived quantity | Supplied calculation / declaration | NEN 6068 | M07, M08, M11 | Draft |
| `LR-R07-07` | Mirror line: parcel boundary or centre line of adjoining road, water or public green | perceelsgrens / hart weg, water, groen (spiegelprincipe) | Reference (level, line, place) | Surroundings (existing situation) | Bbl spiegelprincipe | M10, M13, M14 | Draft |
| `LR-R07-08` | Other buildings on the same plot and around it | andere bouwwerken op hetzelfde perceel | Measured / derived quantity | Surroundings (existing situation) | Bbl art. 4.53 | M09, M13 | Draft |
| `LR-R07-09` | Equivalence claim and fire-safety documents | gelijkwaardigheid | Evidence supplied | Supplied calculation / declaration | Bbl art. 2.2 (gelijkwaardigheid) | M11 | Draft |

**Open interpretation choices**

- `LR-R07-02` Which exemptions from the table apply?
- `LR-R07-04` Larger area by equivalence (NEN 6060/6079)?
- `LR-R07-06` Calculated or taken from supplied calculation?
- `LR-R07-07` Where exactly is the mirror line?
- `LR-R07-08` What counts as one building?
- `LR-R07-09` Human judgement

## 08 — Fire resistance {#jb-regel-8}

| | |
|---|---|
| **Rule ID** | `BM13-R08` |
| **Requirements** | 5 |
| **Legal basis** | Bbl tabel 4.49; Bbl §4.2.8; EN 13501-2; EN 13501-2; Inventory |
| **Interpretation** | [[[#regel-8]]] |

| LR | Information needed | Legal term (NL) | Role | Value comes from | Legal basis | Layer 1 | Status |
|----|------|------|------|------|------|------|------|
| `LR-R08-01` | Fire compartments and the elements that separate them | brandcompartiment, scheidingsconstructie | Regulated object | Design (applicant's model) | Bbl tabel 4.49 | M04, M05 | Draft |
| `LR-R08-02` | Type of each separating element (wall, floor, door, window, column, curtain wall) | constructieonderdeel | Regulated object | Design (applicant's model) | — | M07 | Draft |
| `LR-R08-03` | Required fire resistance per separation (criteria R/E/I, minutes) | brandwerendheid-eis | Norm value | Regulation – Bbl | Bbl §4.2.8; EN 13501-2 | M09 | Draft |
| `LR-R08-04` | Achieved fire resistance per element | brandwerendheid (classificatie) | Evidence supplied | Supplied calculation / declaration | EN 13501-2 | M06, M08 | Draft |
| `LR-R08-05` | When the check does not apply | uitzonderingen (geen besloten ruimten, klein aangrenzend gebouw) | Applicability | Rule profile (municipal choice) | Inventory | M10 | Draft |

**Open interpretation choices**

- `LR-R08-03` Element rating enough, or whole WBDBO?
- `LR-R08-04` Product classification or calculation?

## 09 — Clear width {#jb-regel-9}

| | |
|---|---|
| **Rule ID** | `BM13-R09` |
| **Requirements** | 6 |
| **Legal basis** | Bbl tabel 4.176; Bbl art. 4.180; Bbl §4.6.1; Bbl art. 4.181 |
| **Interpretation** | [[[#regel-9]]] |

| LR | Information needed | Legal term (NL) | Role | Value comes from | Legal basis | Layer 1 | Status |
|----|------|------|------|------|------|------|------|
| `LR-R09-01` | Use function of the building | gebruiksfunctie | Applicability | Design (applicant's model) | Bbl tabel 4.176 | M04 | Draft |
| `LR-R09-02` | Spaces that must be reachable (use areas, residential spaces, toilet, bathroom, storage, outdoor space) | verblijfsgebied, verblijfsruimte, toiletruimte, badruimte, buitenruimte | Regulated object | Design (applicant's model) | Bbl art. 4.180 | M04, M05, M11 | Draft |
| `LR-R09-03` | Traffic routes from the access to those spaces | verkeersroute | Measured / derived quantity | Design (applicant's model) | Bbl §4.6.1 | M08 | Draft |
| `LR-R09-04` | Clear width and clear height of every door, passage and route segment | vrije breedte, vrije hoogte | Measured / derived quantity | Design (applicant's model) | Bbl art. 4.180 | M06, M09 | Draft |
| `LR-R09-05` | Required clear width and clear height | eis vrije breedte / hoogte | Norm value | Regulation – Bbl | Bbl art. 4.180 | M10 | Draft |
| `LR-R09-06` | Lift: present or required, clear width and floor area | lift (vrije breedte, vloeroppervlakte) | Measured / derived quantity | Design (applicant's model) | Bbl art. 4.181 | M07, M10 | Draft |

**Open interpretation choices**

- `LR-R09-02` Which spaces must be reachable?
- `LR-R09-04` How are frames, handrails, skirting treated?

## 10 — Height difference {#jb-regel-10}

| | |
|---|---|
| **Rule ID** | `BM13-R10` |
| **Requirements** | 7 |
| **Legal basis** | Bbl tabellen 4.24, 4.179; Bbl art. 4.25, 4.182; Bbl art. 4.25; Bbl art. 4.26–4.33; Bbl art. 4.25–4.33, 4.182; Bbl art. 4.182 |
| **Interpretation** | [[[#regel-10]]] |

| LR | Information needed | Legal term (NL) | Role | Value comes from | Legal basis | Layer 1 | Status |
|----|------|------|------|------|------|------|------|
| `LR-R10-01` | Use function of the building | gebruiksfunctie | Applicability | Design (applicant's model) | Bbl tabellen 4.24, 4.179 | M04 | Draft |
| `LR-R10-02` | Height differences on each traffic route (between floors, floor and terrain) | hoogteverschil | Measured / derived quantity | Design (applicant's model) | Bbl art. 4.25, 4.182 | M05, M09, M10 | Draft |
| `LR-R10-03` | Adjoining terrain level | aansluitend terrein | Reference (level, line, place) | Surroundings (existing situation) | Bbl art. 4.25 | M11, M12 | Draft |
| `LR-R10-04` | Stairs, ramps and lifts that bridge the difference, with their dimensions (rise, going, slope, width, landings) | trap, hellingbaan, lift, bordes | Regulated object | Design (applicant's model) | Bbl art. 4.26–4.33 | M07, M08 | Draft |
| `LR-R10-05` | Thresholds and required dimensions | drempelwaarden en maten | Norm value | Regulation – Bbl | Bbl art. 4.25–4.33, 4.182 | M13 | Draft |
| `LR-R10-06` | Spaces that must be connected for accessibility | toegang, verkeersruimte, verblijfsgebied, buitenruimte | Regulated object | Design (applicant's model) | Bbl art. 4.182 | M05, M06 | Draft |
| `LR-R10-07` | Measuring points for height differences | — | Definition / measuring method | Rule profile (municipal choice) | — | M14 | Draft |

**Open interpretation choices**

- `LR-R10-02` Finished or structural floor level?
- `LR-R10-03` Which terrain level applies?
- `LR-R10-07` Which differences count?

## 11 — Rc value {#jb-regel-11}

| | |
|---|---|
| **Rule ID** | `BM13-R11` |
| **Requirements** | 5 |
| **Legal basis** | Bbl art. 4.152; NTA 8800 |
| **Interpretation** | [[[#regel-11]]] |

| LR | Information needed | Legal term (NL) | Role | Value comes from | Legal basis | Layer 1 | Status |
|----|------|------|------|------|------|------|------|
| `LR-R11-01` | Heated areas to be insulated (residential areas, function areas, toilet, bathroom) | verblijfsgebied, toiletruimte, badruimte | Regulated object | Design (applicant's model) | Bbl art. 4.152 | M04 | Draft |
| `LR-R11-02` | Separating walls, roofs and floors, and what lies behind them (outside air, ground, crawl space, water, unheated space) | uitwendige scheidingsconstructie | Regulated object | Design (applicant's model) | Bbl art. 4.152 | M05, M06, M07 | Draft |
| `LR-R11-03` | Achieved thermal resistance per construction | Rc-waarde (NTA 8800) | Measured / derived quantity | Supplied calculation / declaration | NTA 8800 | M06, M08 | Draft |
| `LR-R11-04` | Required thermal resistance per situation (façade, roof, floor) | Rc-eis | Norm value | Regulation – Bbl | Bbl art. 4.152 | M09 | Draft |
| `LR-R11-05` | Area measuring method and tolerance | — | Definition / measuring method | Rule profile (municipal choice) | — | M10 | Draft |

**Open interpretation choices**

- `LR-R11-02` Which separations count?
- `LR-R11-03` Rc from model U-value acceptable, or only NTA 8800?
- `LR-R11-05` Net area?

## 12 — U value {#jb-regel-12}

| | |
|---|---|
| **Rule ID** | `BM13-R12` |
| **Requirements** | 5 |
| **Legal basis** | Bbl art. 4.153; NTA 8800 |
| **Interpretation** | [[[#regel-12]]] |

| LR | Information needed | Legal term (NL) | Role | Value comes from | Legal basis | Layer 1 | Status |
|----|------|------|------|------|------|------|------|
| `LR-R12-01` | Enclosure of the heated areas | thermische schil | Regulated object | Design (applicant's model) | Bbl art. 4.153 | M11 | Draft |
| `LR-R12-02` | Windows, doors and frames in external vertical separations (and what is equated with them) | ramen, deuren, kozijnen | Regulated object | Design (applicant's model) | Bbl art. 4.153 | M04, M05 | Draft |
| `LR-R12-03` | Projected area of each window, door and frame | oppervlakte (NTA 8800) | Measured / derived quantity | Design (applicant's model) | NTA 8800 | M04 | Draft |
| `LR-R12-04` | U-value of each window, door and frame | U-waarde | Measured / derived quantity | Supplied calculation / declaration | NTA 8800 | M04, M07 | Draft |
| `LR-R12-05` | Required average U-value and maximum per element | U-eis (gemiddeld en per element) | Norm value | Regulation – Bbl | Bbl art. 4.153 | M08 | Draft |

**Open interpretation choices**

- `LR-R12-02` Doors to unheated spaces? Roof windows?

## 13 — MPG, environmental performance {#jb-regel-13}

| | |
|---|---|
| **Rule ID** | `BM13-R13` |
| **Requirements** | 5 |
| **Legal basis** | NEN 2580; Bbl art. 4.158 lid 3b; Bbl art. 4.158–4.159 (version on application date); Bepalingsmethode Milieuprestatie Bouwwerken |
| **Interpretation** | [[[#regel-13]]] |

| LR | Information needed | Legal term (NL) | Role | Value comes from | Legal basis | Layer 1 | Status |
|----|------|------|------|------|------|------|------|
| `LR-R13-01` | Use functions and their usable floor area | gebruiksfunctie, GO | Measured / derived quantity | Design (applicant's model) | NEN 2580 | M04, M06 | Draft |
| `LR-R13-02` | Loss area (offices) | verliesoppervlakte | Measured / derived quantity | Design (applicant's model) | Bbl art. 4.158 lid 3b | M04, M07 | Draft |
| `LR-R13-03` | Environmental-performance limit per use function (weighted for combined use) | MPG-grenswaarde | Norm value | Regulation – Bbl | Bbl art. 4.158–4.159 (version on application date) | M08 | Draft |
| `LR-R13-04` | Calculated environmental performance | MPG-score (Bepalingsmethode) | Evidence supplied | Supplied calculation / declaration | Bepalingsmethode Milieuprestatie Bouwwerken | M05 | Draft |
| `LR-R13-05` | Allowed difference between calculation areas and model areas | — | Definition / measuring method | Rule profile (municipal choice) | — | M09 | Draft |

**Open interpretation choices**

- `LR-R13-01` Woongebouw or not?
- `LR-R13-05` Must areas match, within which tolerance?

## 14 — Escape routes {#jb-regel-14}

| | |
|---|---|
| **Rule ID** | `BM13-R14` |
| **Requirements** | 6 |
| **Legal basis** | Bbl tabel 4.64; Bbl art. 4.65; Bbl bijlage I (begrippen) |
| **Interpretation** | [[[#regel-14]]] |

| LR | Information needed | Legal term (NL) | Role | Value comes from | Legal basis | Layer 1 | Status |
|----|------|------|------|------|------|------|------|
| `LR-R14-01` | Use function of the building | gebruiksfunctie | Applicability | Design (applicant's model) | Bbl tabel 4.64 | M10 | Draft |
| `LR-R14-02` | Spaces for people (use areas, residential spaces) | verblijfsgebied, verblijfsruimte | Regulated object | Design (applicant's model) | Bbl art. 4.65 | M04 | Draft |
| `LR-R14-03` | Safe places where escape routes end | veilige plaats | Reference (level, line, place) | Rule profile (municipal choice) | Bbl bijlage I (begrippen) | M09, M11 | Draft |
| `LR-R14-04` | Escape route from each space to a safe place (over floors, stairs, ramps; no lift, no window) | vluchtroute | Measured / derived quantity | Design (applicant's model) | Bbl art. 4.65 | M06, M07, M08 | Draft |
| `LR-R14-05` | Fire compartments the route passes | brandcompartiment | Regulated object | Design (applicant's model) | Bbl art. 4.65 | M05 | Draft |
| `LR-R14-06` | Conditions per use function | eisen vluchtroute | Norm value | Regulation – Bbl | Bbl art. 4.65 | M10 | Draft |

**Open interpretation choices**

- `LR-R14-03` Outside, other compartment, protected route?
- `LR-R14-04` Follow the modelled routes?

## 15 — Walking distance {#jb-regel-15}

| | |
|---|---|
| **Rule ID** | `BM13-R15` |
| **Requirements** | 6 |
| **Legal basis** | Bbl art. 4.66; Bbl art. 4.66 lid 6 |
| **Interpretation** | [[[#regel-15]]] |

| LR | Information needed | Legal term (NL) | Role | Value comes from | Legal basis | Layer 1 | Status |
|----|------|------|------|------|------|------|------|
| `LR-R15-01` | Use areas and residential spaces, and their farthest point | verblijfsgebied, verblijfsruimte | Regulated object | Design (applicant's model) | Bbl art. 4.66 | M04 | Draft |
| `LR-R15-02` | (Sub-)fire compartments and their exits | (sub)brandcompartiment, uitgang | Reference (level, line, place) | Design (applicant's model) | Bbl art. 4.66 | M05, M09 | Draft |
| `LR-R15-03` | Corrected walking distance to the nearest exit (factor 1.5 or 1) | gecorrigeerde loopafstand | Measured / derived quantity | Design (applicant's model) | Bbl art. 4.66 | M06, M08, M12 | Draft |
| `LR-R15-04` | Maximum walking distance | maximale loopafstand | Norm value | Regulation – Bbl | Bbl art. 4.66 | M11 | Draft |
| `LR-R15-05` | Height difference between floors in one compartment (max 4 m) | hoogteverschil binnen brandcompartiment | Measured / derived quantity | Design (applicant's model) | Bbl art. 4.66 lid 6 | M05 | Draft |
| `LR-R15-06` | Occupancy, number of exits and the distance between them (>150 persons: 2 exits ≥ 5 m apart) | bezetting, aantal uitgangen | Measured / derived quantity | Design (applicant's model) | Bbl art. 4.66 | M07, M09, M10 | Draft |

**Open interpretation choices**

- `LR-R15-03` Which factor applies? Obstacles?
- `LR-R15-06` Occupancy from model or from Bbl per m²?

## 16 — Escape width {#jb-regel-16}

| | |
|---|---|
| **Rule ID** | `BM13-R16` |
| **Requirements** | 6 |
| **Legal basis** | Bbl art. 4.78; Bbl art. 4.80; Bbl art. 4.78, 4.80 |
| **Interpretation** | [[[#regel-16]]] |

| LR | Information needed | Legal term (NL) | Role | Value comes from | Legal basis | Layer 1 | Status |
|----|------|------|------|------|------|------|------|
| `LR-R16-01` | Escape routes with their doors, passages and stairs | vluchtroute | Regulated object | Design (applicant's model) | Bbl art. 4.78 | M05, M06, M07 | Draft |
| `LR-R16-02` | Clear width and clear height on the route | vrije doorgang | Measured / derived quantity | Design (applicant's model) | Bbl art. 4.78 | M06, M07 | Draft |
| `LR-R16-03` | Floor area of residential areas reached via a stair | GO verblijfsgebied via trap | Measured / derived quantity | Design (applicant's model) | Bbl art. 4.78 | M04, M08 | Draft |
| `LR-R16-04` | Number of persons that depend on each route | aantal personen per vluchtroute | Measured / derived quantity | Design (applicant's model) | Bbl art. 4.80 | M08, M12 | Draft |
| `LR-R16-05` | Flow capacity of doors and stairs (incl. double doors, opening angle) | doorstroomcapaciteit | Measured / derived quantity | Design (applicant's model) | Bbl art. 4.80 | M06, M07 | Draft |
| `LR-R16-06` | Required clear width, height, floor-area limit and flow capacity | eisen vrije doorgang en doorstroomcapaciteit | Norm value | Regulation – Bbl | Bbl art. 4.78, 4.80 | M11 | Draft |

**Open interpretation choices**

- `LR-R16-04` How are persons assigned to routes?
- `LR-R16-05` Opening angle not in IFC
- `LR-R16-06` Who checks: municipality or fire brigade?

## 17 — Daylight {#jb-regel-17}

| | |
|---|---|
| **Rule ID** | `BM13-R17` |
| **Requirements** | 8 |
| **Legal basis** | Bbl tabel 4.146; NEN 2057; Bbl art. 4.147; NEN 2057; Bbl art. 4.147 |
| **Interpretation** | [[[#regel-17]]] |

| LR | Information needed | Legal term (NL) | Role | Value comes from | Legal basis | Layer 1 | Status |
|----|------|------|------|------|------|------|------|
| `LR-R17-01` | Use function of the building | gebruiksfunctie | Applicability | Design (applicant's model) | Bbl tabel 4.146 | M04 | Draft |
| `LR-R17-02` | Residential areas and spaces and their floor area | verblijfsgebied, verblijfsruimte, vloeroppervlakte | Regulated object | Design (applicant's model) | NEN 2057 | M05, M10 | Draft |
| `LR-R17-03` | Daylight openings (windows, glazed doors) and their size and position | daglichtopening | Regulated object | Design (applicant's model) | NEN 2057 | M06, M08 | Draft |
| `LR-R17-04` | Equivalent daylight area per space | equivalente daglichtoppervlakte | Measured / derived quantity | Design (applicant's model) | NEN 2057 | M06, M12 | Draft |
| `LR-R17-05` | Obstruction by surrounding buildings (existing, or what the plan allows) | belemmering (belemmeringshoek) | Measured / derived quantity | Surroundings (existing situation) | NEN 2057 | M11 | Draft |
| `LR-R17-06` | Mirror line: parcel boundary or centre line of adjoining road, water or public green | perceelsgrens / hart weg, water, groen | Reference (level, line, place) | Surroundings (existing situation) | Bbl art. 4.147; NEN 2057 | M07, M09, M11 | Draft |
| `LR-R17-07` | Required equivalent daylight area (minimum per space and share of floor area) | eis equivalente daglichtoppervlakte | Norm value | Regulation – Bbl | Bbl art. 4.147 | M13 | Draft |
| `LR-R17-08` | Which openings count and how obstruction angles are measured | — | Definition / measuring method | Rule profile (municipal choice) | NEN 2057 | M14 | Draft |

**Open interpretation choices**

- `LR-R17-03` Are glazed doors daylight openings?
- `LR-R17-04` Overhangs and balconies above the opening?
- `LR-R17-05` Existing buildings only, or the permitted envelope?
