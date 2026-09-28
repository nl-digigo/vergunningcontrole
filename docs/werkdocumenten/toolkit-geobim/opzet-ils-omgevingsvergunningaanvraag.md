# Opzet ILS Omgevingsvergunningaanvraag

**Werktitel:** Informatieleveringsspecificatie (ILS) Omgevingsvergunningaanvraag — VNG Beleidsmaatregel 13
**Status:** Opzet ter bespreking (concept 0.1) | **Datum:** 13-8-2026
**Vertrekpunt:** Doorontwikkeling van BIM_ILS_IDS_2 (VTH-ILS, 4-5-2026), toegespitst op het leveringsmoment *omgevingsvergunningaanvraag*
**Scope:** Ruimte-modellering (conform IDS voor Omgevingswet Ruimten v1.0) + informatie die nodig is voor de vergunningchecks OPA, BBL, Welstand en BAG
**Normbasis:** NEN-EN-ISO 19650-1/2:2018 (EIR), met transitieparagraaf naar DIS 2026 (EIR → IPR)

---

## A. Positionering in de productfamilie

De ILS staat niet op zichzelf. Voorstel voor de documentenfamilie, mede naar aanleiding van de VDNDP-feedback (vermenging use case / normering / ILS / handleiding voorkomen):

| Nr | Product | Rol | Status |
|----|---------|-----|--------|
| 01 | Procesbeschrijving vergunningverlening met BIM (GEMMA) | Context, geen contractstuk | bestaand/elders |
| 02 | Informatieprotocol / contracttekst (BIM_ILS_IDS_1) | Juridische verankering; verklaart de ILS van toepassing | v0.1 gereed |
| **03** | **ILS Omgevingsvergunningaanvraag (dit document)** | **De EIR: wat, wanneer, hoe, door wie** | **deze opzet** |
| 04 | ILS voor Ruimten in de Omgevingswet (184 p.) | Theoretische onderbouwing / naslagwerk; conceptueel model | DEF 21-3-25 |
| 05 | IDS voor Omgevingswet Ruimten v1.0 (+ bsDD v0.3) | Machineleesbaar hart van de ILS (bijlage) | v1.0 / v1.1 |
| 06 | Best practices / modelleerhandleiding | Hoe-vraag voor modelleurs (zones/spaces-patroon) | te maken |
| 07 | BM13 machine-leesbare regels inventarisatie (17 regels, sessies gemeenten Zoetermeer) | Onderbouwing per check: toets, werkwijze, informatiebehoefte (BIM + geo), regelgeving, tijdwinst | v0.3, 3-7-2026 |
| 08 | Bijlage 10 Indicatieve beschrijving proces en use-cases (Gemeente Rotterdam, MVP vergunningscontroleservice) | Praktijkreferentie: procesinbedding (intake/ontvankelijkheid/toets/gereedmelding) + Gherkin-use-cases per toetsdomein incl. bronservices (STTR/IMOW, BRK, BAG3D, risicokaart) | bestaand |
| 09 | Proposal rule specification format (5-lagenmodel: identiteit → toets → datavereisten → normatieve pseudocode → referentie-encoding SPARQL/SHACL) | Verbindt regelinventarisatie (07), automatiseringsnotitie en implementatie; definieert gedeelde precondities (PRE-01–03) en afgeleide eigenschappen (DER-01–05) | concept v0.2, leveranciersconsultatie sept |

Principes die overal terugkomen:

- **Grof-naar-fijn**: Gebouwinhoud → Bouwlaaginhoud → Gebruiksfunctie → gebieden → ruimten; elk niveau optelbaar, geen overlap.
- **Geen NL-custom Pset** (kernkeuze 2): IFC-attributen Name / ObjectType / Description; bepalingsmethode in Description; als ooit toch een Pset nodig is, dan conform NPR-CEN 17654 (`NL_[Org]_[EngelseTerm]`).
- **PredefinedType = USERDEFINED**, ObjectType = Nederlandse BBL-term.
- **Neutraal geformuleerd**: geen verwijzingen naar specifieke gemeenten of marktpartijen in de normatieve tekst.

---

## B. Voorgestelde hoofdstukindeling

De hoofdstukstructuur van BIM_ILS_IDS_2 blijft staan (die volgt ISO 19650-2 en het nationale model), maar elk hoofdstuk wordt vergunning-specifiek gemaakt. Per hoofdstuk: wat erin komt en wat er verandert ten opzichte van de VTH-ILS.

### Leeswijzer
- Voor wie: vergunningverleners/toetsers van gemeenten én indieners (architect, ontwikkelaar, BIM-manager van de aanvrager).
- Positionering in de productfamilie (tabel hierboven) + leesroutes per doelgroep — dit was een expliciet gemis in de VDNDP-feedback.
- Begrippenlijst: overnemen uit Informatieprotocol (één bron, niet dupliceren); aanvullen met OPA, Technische Activiteit (BBL), DSO, vooroverleg.

### 1. Introductie
- Doel: eenduidige, machine-toetsbare indieningsvereisten voor omgevingsvergunningaanvragen met een 3D-informatiemodel (IFC).
- Dit document is de Nederlandse invulling van een EIR conform NEN-EN-ISO 19650-2:2018.
- **Nieuw — transitieparagraaf ISO 19650 DIS 2026**: terminologie-mapping (EIR → IPR, 8- naar 9-stapsproces), hoe deze ILS meegaat bij finale publicatie (eis uit toetsingskader §6.5).
- Generiek karakter: de ILS is landelijk; gemeentespecifieke invulling gebeurt via aangegeven invulvelden (maturity, CDE-keuze, referentie-informatie).

### 2. Informatie-eisen

**2.1 Organisatie-informatie-eisen (OIR)**
- Kort: de OIR/AIR-cascade benoemen en expliciet buiten scope verklaren, mét verwijzing waar die belegd hoort te zijn (gemeentelijke organisatie). Het toetsingskader (§6.1) vraagt dat de cascade *aantoonbaar* is — dus niet weglaten maar beargumenteerd afbakenen.

**2.2 Project-informatie-eisen (PIR)**
- 2.2.1 Bevoegd gezag/opdrachtgever: gemeente X, maturity-niveau, contactroute (invulveld).
- 2.2.2 Projectidentificatie: DSO-verzoeknummer, locatie (BAG-pand / verblijfsobject / kadastraal perceel / bouwwerkperceel), polygoon in DSO. Overnemen uit VTH-ILS, ontdaan van onderwijshuisvesting-voorbeelden.
- 2.2.3 Projectscope: nieuwbouw / verbouw / bestaande bouw; OPA en/of Technische Activiteit — dit bepaalt welke vereisten-set geldt (zie 2.3).
- 2.2.4 **Informatiedoelstellingen — ingekort tot vergunning-relevant:**

| ID | Doelstelling | Herkomst | Status in deze ILS |
|----|--------------|----------|--------------------|
| ID03 | Ondersteunen vergunning-, toezicht- en handhavingsproces | VTH-ILS | kern |
| ID09 | Controle Omgevingsplan (OPA) = Regels #1–#6 uit de regelinventarisatie: gebruiksfunctie vs. bestemming, max. bouwhoogte, bebouwingspercentage, functie beperkt tot x bouwlagen, beroep-aan-huis, max. aantal bouwlagen | VTH-ILS + regelinventarisatie v0.3 | kern |
| ID10 | Controle BBL (Technische Activiteit) = Regels #7–#17: brandcompartimenten, brandwerendheid, vrije breedte, hoogteverschil, Rc-waarde, U-waarde, MPG, vluchtwegen, loopafstand, vluchtbreedte, daglicht | VTH-ILS + regelinventarisatie v0.3 | kern; gefaseerd (zie 2.3) |
| ID11 | Controle Welstandseisen | VTH-ILS | optioneel/PM — zie discussiepunt 4 |
| ID12 | Update BAG (pand, verblijfsobject, gebruiksoppervlakte) | VTH-ILS | kern (bijvangst van dezelfde data) |
| ID08 | Panddeel en verblijfsobjecten | VTH-ILS | ondersteunend bij ID12 |
| ID04 | Betrekken gemeente en omwonenden (participatie) | VTH-ILS | optioneel |
| — | *Vervallen: ID01 (digitalisering bestaand), ID05 (duurzaamheid), ID06 (archiefoplevering), ID07 (circulariteit)* | | buiten scope vergunningaanvraag |

- 2.2.5 Fasering: GEMMA/STB-2025; relevante fasen beperkt tot **Vooroverleg (SO/VO) → Omgevingsvergunningaanvraag (fase 2.4)**; overige fasen alleen als doorkijk.
- 2.2.6 Indieningsproces: GEMMA-deelproces "Inhoudelijk behandelen aanvraag" als procesreferentie (ISO 29481/IDM-conformiteit voor het toetsingskader); indiening via DSO/omgevingsloket. De Rotterdamse MVP-procesbeschrijving (product 08) als praktijkinvulling: intake (registreren model, meerdere versies mogelijk) → controleren aanvraag (ontvankelijkheid: validatie geometrie, semantiek, georeferentie) → toetsen activiteiten aan regelgeving. Belangrijke rolafbakening die we overnemen: **IDS toetst de indieningsvereisten (deze ILS); de inhoudelijke regeltoetsing zelf loopt via rule-/query-talen (bijv. SHACL/SPARQL)** — de ILS is dus geen rule-engine-specificatie.
- 2.2.7 Beslismomenten: terugbrengen tot drie leveringsmomenten: (a) vooroverleg [optioneel], (b) aanvraag OPA, (c) aanvraag Technische Activiteit. Per moment: beoordelingstermijn en acceptatieproces. Als doorkijk (buiten scope, wel benoemen): (d) **gereedmelding WKB** met as-built IFC in het BIM-dossier bevoegd gezag — het Rotterdamse proces laat zien dat dezelfde dataset dan BAG/BRK/WOZ-registratie voedt (ID12), wat de businesscase van deze ILS over de aanvraag heen tilt.

**2.3 Tabel met vereisten**
- Matrix: regel (#1–#17 uit de regelinventarisatie v0.3) × benodigde objecten/attributen × leveringsmoment. De regelinventarisatie levert per regel al de informatiebehoefte in drie kolommen — gebouwdata (ILS Ruimte/bsDD-mapping), omgevingsdata/geodata (BRK, BGT, AHN, luchtfoto) en regelgeving (Regels op de Kaart, BBL-artikelen) — die hier genormaliseerd wordt overgenomen.
- Voorbeeld: *Regel #1 "gebruiksfunctie vs. bestemming" ⇒ Gebruiksfunctie (IDS 9.08) + Bouwlaag + Bouwwerk-/Kadastraalperceel + georeferentie (9.01) + perceelgrenzen (BRK)*.
- Per regel markeren: **automatiseerbaar / deels / handmatig** (de inventarisatie benoemt expliciet dat interpretatieverschillen sommige checks handmatig houden) en de huidige toetstijd — dat is meteen de businesscase-onderbouwing per regel.
- Notatievoorstel: elke regel ook in **Gherkin-vorm** (Given/And/Then) beschrijven, naar het voorbeeld van de Rotterdamse use-cases (product 08). Dat maakt de stap van juridische regeltekst naar machine-leesbare toets expliciet en reviewbaar, en koppelt per regel de bronservices (STTR/IMOW-omgevingsdocumenten, BRK/DKK, BAG3D, AHN, risicokaart).
- Structuurkoppeling met het rule specification format (product 09): **Laag 2 (datavereisten) van elke regel ís de vereisten-regel in deze ILS-tabel** — de ILS specificeert wat de indiener levert, het 5-lagenformat specificeert wat de toetsservice ermee doet (Laag 3 pseudocode = normatief voor leveranciers, Laag 5 SPARQL/SHACL = afgeleid). Zo verwijzen beide producten één kant op en blijft de rolafbakening ILS ↔ rule-engine zuiver.
- De **afgeleide eigenschappen DER-01–05** (bouwlaag, referentiepeil, gebouwhoogte, voetafdruk-contour, BVO/GO per ruimte) markeren in de tabel als "afleidbaar uit levering" — de indiener hoeft ze niet als attribuut te leveren mits de geometrische basis (georeferentie, spaces, bouwlagen) op orde is.
- Gaten die de inventarisatie blootlegt en die de ILS moet dichten: *gebouwhoogte* is geen begrip in de ILS Ruimte (Regel #2 — nok-/goothoogte t.o.v. referentiepeil), gebouwtype via IfcBuilding MarketCategory (Regel #3/#4), en fysieke-elementeigenschappen voor Regels #8, #11–#13 en #17.

**2.4 Level of Information Need (ISO 7817-1:2024)**
- Per leveringsmoment één LOIN-tabel + bijbehorend IDS-bestand. Voorstel bijlagenset (vervangt de vijf disciplinesets van de VTH-ILS):

| Bijlage | Inhoud | Machineleesbaar |
|---------|--------|-----------------|
| B1 | LOIN Ruimtemodel (alle objecttypen 9.01–9.17) | IDS voor Omgevingswet Ruimten v1.0 (27 specificaties) |
| B2 | LOIN aanvullende check-informatie OPA — Regels #1–#6 (bouwhoogte/referentiepeil, bebouwd oppervlak, gebouwtype) | aanvullende IDS-specificatie(s), te maken |
| B3 | LOIN aanvullende check-informatie BBL — Regels #7–#17 (brandwerendheid, vrije breedte/hoogteverschil, Rc-/U-waarde, MPG, daglicht; deels op fysieke elementen) | aanvullende IDS-specificatie(s), te maken; gefaseerd |
| B4 | LOIN BAG-mapping (panddeel, verblijfsobject → IfcZone) | bestaande BAG-IDS uit tussenproject, herbenoemd |

- Geometrische LOIN: verwijzing naar hoofdstuk 4/5 van de ILS voor Ruimten (begrenzing, vorm, plaatsing) in plaats van het daar opnieuw uit te schrijven.

### 3. Acceptatiecriteria

**3.1 Projectinformatiestandaarden**
- Normenlijst opschonen: ISO 19650-1/2 (+4 voor naamgeving), ISO 7817-1, ISO 16739-1:2024 (IFC 4.3; IDS ondersteunt IFC4/IFC4X3_ADD2), buildingSMART IDS 1.0, bsDD-publicatie Omgevingswet-Ruimten, BIM Basis ILS, NEN 2580/NTA 2581 (bepalingsmethoden), GEMMA. Onderwijshuisvesting-specifieke normen (Ruimte-OK, NEN 2767, ISO 55000) vervallen.
- Naamgeving informatiecontainers conform ISO 19650-4: conventie uit VTH-ILS behouden; disciplinecode voor het ruimtemodel (voorstel: RUI toevoegen aan tabel A.2, of ALG aanhouden); statuscodes S0–A1 behouden.
- **CDE-paragraaf herschrijven voor de publiekrechtelijke context**: keuze A (DSO/omgevingsloket als ontvangstkanaal), B (API-koppeling met VTH-software), C (gedelegeerd platform) — consistent met Informatieprotocol §2.3.

**3.2 Methoden en procedures**
- Alleen vergunning-relevant: modelleren conform modelleerpatronen ILS voor Ruimten (zones/spaces-minimumadvies — kernkeuze 4), aggregatie grof-naar-fijn, omgang met bestaand/nieuw/vervallen (hoofdstuk 11 ILS Ruimten, belangrijk bij verbouw), coördinatie aspectmodellen indien meerdere modellen worden ingediend.
- Scan-/puntenwolkparagrafen: alleen behouden als korte verwijzing voor verbouw/bestaande bouw (naar Puntenwolk-ILS digiGO), niet integraal.

**3.3 Acceptatietabel**
- Drietrapsraket per levering: (1) automatische IDS-validatie (welke tooling-neutrale eisen: valide IFC, valide t.o.v. IDS v1.0, georeferentie aanwezig), (2) geometrisch-topologische controles (geen overlap/doorsnijding, optelbaarheid grof-naar-fijn), (3) inhoudelijke beoordeling door bevoegd gezag.
- De gedeelde **precondities PRE-01–03** uit het rule specification format overnemen als concrete acceptatiecriteria in trap 1/2: georeferentie aanwezig (IfcMapConversion), modelgeometrie nabij de gerefereerde oorsprong (detectie willekeurige lokale oorsprong), bounding box binnen plausibele maatvoering (detectie eenhedenfouten). Falen op een preconditie = niet-ontvankelijk vóór enige regeltoets.
- Expliciet: een geslaagde IDS-check is een *ontvankelijkheids*-hulpmiddel (in het Rotterdamse proces: het deelproces "controleren aanvraag"), geen inhoudelijk besluit.

### 4. Ondersteunende informatie
- 4.1 Referentie-informatie die het bevoegd gezag levert: omgevingsplan(regels) via Regels op de Kaart, welstandsnota, archieftekeningen bij verbouw, en de geo-registraties waar de checks op leunen: BRK/DKK (perceelgrenzen), BGT/BAG (bestaande bebouwing), AHN/terreinmodel (referentiepeil), luchtfoto's Beeldmateriaal NL — per regel benoemd in de regelinventarisatie, incl. stelselcatalogus-URI's.
- 4.2 Gedeelde bronnen: bsDD-publicatie (URI), IDS-bestanden, voorbeeldmodellen (neutraal voorbeeld-ruimtemodel), model-BUP (digiGO), nomenclatuurlijst objecttypen (actie uit projectrapport).

### 5. Leveringsmomenten en beslispunten
- Compacte tabel: moment × te leveren containers × acceptatietermijn; gekoppeld aan 2.2.7.

### 6. Begrippenlijst
- Verwijzing naar Informatieprotocol; alleen vergunning-specifieke aanvullingen.

### 7. Bijlagen
- B1–B4 (zie 2.4) + colofon met beheerparagraaf.

### Colofon + beheer
- **Nieuw**: beheerorganisatie (VNG/digiGO), wijzigingsprocedure, versiestrategie (BOMOS) — vereist voor het Register Preferente Standaarden (toetsingskader §6.5). Nu nog niet belegd; wel de paragraaf reserveren.

---

## C. Toets vooraf: scoort deze opzet op het digiGO-toetsingskader?

| Criterium (toetsingskader §6) | Waar geborgd in deze opzet |
|---|---|
| 6.1 Herkenbaar als EIR; OIR/AIR/PIR-cascade | H1 + H2.1 (cascade benoemd, afbakening beargumenteerd) |
| 6.1 Drie EIR-componenten: technisch / management / commercieel | technisch = H2.3–2.4 + H3.1; management = H3.2–3.3 + H5; commercieel = Informatieprotocol (04) — relatie expliciet benoemen in H1 |
| 6.1 Leveringsmomenten conform ISO 19650-2 | H2.2.7 + H5 |
| 6.1 LOIN conform ISO 7817-1 | H2.4 |
| 6.1 Naamgeving conform ISO 19650-4 | H3.1 |
| 6.2 Alleen internationale Psets / bsDD-geregistreerd | attributen-aanpak + bsDD-publicatie; geen custom Pset |
| 6.2 Machineleesbaar via IDS | B1–B4 |
| 6.2 IFC-versie expliciet | H3.1 (IFC4/IFC4X3_ADD2 benoemen incl. motivering t.o.v. "minimaal 4.3" in het kader — zie discussiepunt 5) |
| 6.2 Proces conform ISO 29481 (IDM) | H2.2.6 (GEMMA-procesreferentie) |
| 6.3 Toepassingsgebied eenduidig | H1 + H2.2.3 (domein: omgevingsvergunning gebouwen; fase: aanvraag) |
| 6.4 Draagvlak | consultatietraject digiGO al gelopen voor ILS Ruimten; consultatiehistorie opnemen in colofon |
| 6.5 BOMOS-beheer | colofon/beheerparagraaf (nog te beleggen) |

---

## D. Discussiepunten voor de bespreking

1. **Eén ILS of twee leveringsprofielen?** OPA en Technische Activiteit vragen verschillende diepgang (OPA: ruimten + hoogte/oppervlak; TA: + brandveiligheid, fysieke elementen). Voorstel: één document, twee vereisten-kolommen in de tabel van 2.3 — maar dit raakt kernkeuze 3 (IDS per objecttype vs. totaal).
2. **Naam en nummering.** "ILS Omgevingsvergunningaanvraag" vs. "ILS Vergunningaanvraag woningbouw" (zoals het toetsingskader hem noemt). Advies: functieneutraal benoemen (alle gebruiksfuncties), conform de VDNDP-feedback op de scope-perceptie.
3. **Welstand (ID11).** Er is nu wél een concrete basis: de Rotterdamse use-cases werken welstand uit in ruimtelijke inpassing (verkavelingspatroon via IsExternal-elementen + BAG3D-context) en materiaal/kleur/detaillering (IfcSurfaceStyle, IfcColourRGB, Pset_MaterialOptical, vergelijking met 3D-tiles van de omgeving) — samen ±145 van de ±470 welstandsregels. Beslissen: deze datavereisten als optionele module in B2 opnemen, of ID11 in v0.1 als doorkijk laten staan?
4. **Vooroverleg als formeel leveringsmoment.** In STB/GEMMA gemarkeerd, maar juridisch vormvrij. Opnemen als aanbevolen (niet verplicht) moment met gereduceerde LOIN (alleen 9.01–9.08)?
5. **IFC-versie.** Het toetsingskader vraagt "minimaal IFC 4.3"; de IDS ondersteunt IFC4 én IFC4X3_ADD2, en de praktijk (softwareondersteuning) is verder bij IFC4. Standpunt formuleren: beide toestaan met voorkeur 4x3, motivering opnemen.
6. **Fysieke elementen in scope B3.** De regelinventarisatie maakt dit urgenter dan gedacht: Regels #8 (brandwerendheid), #11/#12 (Rc-/U-waarde), #13 (MPG) en #17 (daglicht) vragen eigenschappen van wanden, vloeren, kozijnen en materialen — niet van ruimten. Voorstel: B3 fasering in twee tranches — tranche 1 = ruimte-afleidbaar (#7, #9, #10, #14–#16: compartiment-zones, vrije breedte, loopafstand, vluchtroutes), tranche 2 = element-gebonden (#8, #11–#13, #17), af te stemmen met ILS O&E.
7. **MPG en energie-checks vs. geschrapt ID05.** Regel #13 (MPG) is een BBL-indieningsvereiste maar leunt op materiaal-/duurzaamheidsdata die we met het schrappen van ID05 buiten scope zetten. Het rule specification format v0.2 bevestigt dat regel #13 niet geschikt is voor automatische afleiding in de eerste release. Voorstel: MPG in v0.1 als documentlevering (rapport) accepteren, informatiebehoefte pas in tranche 2 uitwerken.
8. **Gebouwhoogte en referentiepeil als afgeleide eigenschappen.** Regel #2 constateert dat gebouwhoogte geen begrip is in de ILS Ruimte; het rule specification format lost dit op via afleiding (DER-02 referentiepeil, DER-03 nok-/goothoogte) in plaats van een nieuw te leveren attribuut. Twee open punten blijven juridisch, niet technisch: welke elementen tellen mee in de hoogte (antenne, liftopbouw, balustrade) en is een nationale referentiepeil-afspraak haalbaar (bepaling is nu "assisted": planinterpretatie per gemeente)? De ILS moet dan wel de geometrische basis eisen die de afleiding mogelijk maakt.
9. **Verhouding tot MiniBIM** (kernkeuze 1): in H1 een korte positioneringsparagraaf opnemen (MiniBIM = ontwikkelfase; deze ILS = vergunning), of dat buiten dit document houden tot de afstemming is afgerond?

---

## E. Voorgestelde vervolgstappen

1. Deze opzet bespreken (team BM13) en discussiepunten 1–9 beslissen.
2. Uitwerken naar Word-concept 0.1 in de huisstijl van BIM_ILS_IDS_2 (kernteksten per paragraaf; herbruik ~60% VTH-ILS-tekst).
3. Aanvullende IDS-specificaties B2/B3 technisch uitwerken en valideren tegen voorbeeldmodel.
4. Concept langs het toetsingskader laten lopen zodra het beoordelingsprotocol van Contakt Consulting/digiGO er is (gepland juli–sept 2026) — deze ILS is daar pilotcase.

