# Changelog

Dit project volgt [semantische versies](https://semver.org/lang/nl/). `0.x` = concept, `1.0.0` = vastgesteld.

## [Niet uitgebracht]

### Toegevoegd
- Specificatie 9.18j *Fysieke elementen IfcRoof* (`ids/45-9.18j-Fysieke-elementen-IfcRoof.ids`), gekoppeld aan checks #2, #6, #9, #11, #13 en #16.
- Specificatie 9.18k *Fysieke elementen IfcStair* (`ids/46-9.18k-Fysieke-elementen-IfcStair.ids`), gekoppeld aan checks #10 en #16.
- Specificatie 9.18l *Fysieke elementen IfcRamp* (`ids/47-9.18l-Fysieke-elementen-IfcRamp.ids`), gekoppeld aan check #10.
- Specificatie 9.18m *Fysieke elementen IfcTransportElement.ELEVATOR* (`ids/48-9.18m-Fysieke-elementen-IfcTransportElement.ELEVATOR.ids`), gekoppeld aan checks #9 en #10.
- Specificatie 9.18n *Fysieke elementen IfcRailing* (`ids/49-9.18n-Fysieke-elementen-IfcRailing.ids`), gekoppeld aan check #10.

### Gewijzigd
- Hoofdstuk 05, hoofdstuk 06 en `data/specificaties_checks.csv` (NL en EN voor de hoofdstukken) bijgewerkt vanuit de IDS; het totaal is nu 46 specificaties: 41 uit versie 0.2.0 en vijf nieuwe concept-specificaties.
- Nieuwe tabelstijl voor de hele ILS (`assets/ils-tables.css` en `assets/ils-tables.js`): brede tabellen scrollen horizontaal met een meelopende eerste kolom, de kolomkop blijft staan, IDS-verwijzingen en checknummers worden als label getoond, kardinaliteit R/O/X als badge en ja/nee met een statusbolletje. De inhoud van de hoofdstukken is niet gewijzigd.
- De statische leesversies bevatten dezelfde stijl; `tools/inline-tabelstijl.py` zet die er opnieuw in na een wijziging in `assets/`.

## [0.2.0] – 2026-11-17

### Toegevoegd
- Specificatie 9.16d *Beschermd subbrandcompartiment* (`ids/43-9.16d-Beschermd-subbrandcompartiment.ids`), afgeleid van 9.16b met ObjectType `Beschermd subbrandcompartiment` en gekoppeld aan check #15.
- Modelleerrichtlijn: de gebieden in twee lagen, de eisen aan perceel, gebouw en bouwlaag, en een werkwijze (eerst ruimten met hun objecttype, dan het gebouw, dan de gebieden).
- Informatieproductiestandaard: afspraken over het adres en over perceel, gebouw en bouwlaag.

### Gewijzigd
- `ids/04-9.01c-Projectadres-IFC4X3-ADD2.ids`: de vier eigenschappen van `Pset_Address` zijn optioneel. Het adres invullen bij een gebouw met een postadres en leeg laten bij meerdere gebouwen of functies; de georeferentie bepaalt de locatie (G2).
- `ids/07-9.02-Project.ids`: `UnitsInContext` vervalt als IDS-eis. De eis aan de eenheden blijft in de tekst (G3).
- `ids/08-9.03a-Perceel.ids`: `ObjectPlacement` vervalt. Perceel, gebouw en bouwlaag zijn ruimtelijke structuurelementen zonder eigen 3D-object; een verplichte plaatsing suggereert geometrie (G4).
- `ids/11-9.05a-Gebouw.ids`: ObjectType moet `Gebouw` zijn.
- `ids/01-9.00-ILS-Omgevingsvergunning.ids`: `Name` is verplicht.
- ObjectType gelijk aan de titel van de specificatie: 9.07 alleen `Gebruikseenheid` (`Eigendom- en gebruikseenheid` vervalt).
- `mapping-rir/BM13_ILS_RIR_gecombineerd.ids`: de eisen op `Qto_BuildingStoreyBaseQuantities` bij 9.06b zijn verwijderd; hoeveelheden hoeven niet in het model (G6, A8). Deel A volgt verder de wijzigingen hierboven (adres, eenheden, plaatsing, ObjectType, `Name` bij 9 en de nieuwe 9.16d); in de NL-codelijsten van deel B staan `Kadastraal Perceel` en `Beschermd subbrandcompartiment`, en `Eigendom- en gebruikseenheid` is vervallen.
- Beschrijving en toelichting in `ids/04` aangepast aan het optionele adres. De toelichting bij ObjectType in `ids/11` en `ids/13` noemt nu de vaste waarde (`Gebouw`, `Bouwlaag`).
- Voorbeeldmodellen: het nieuwe `voorbeeldmodellen/BM13_SPA_XX_M3D_ZZZ_Qto.ifc` (tussenwoning, IFC4X3_ADD2, met hoeveelheden) is het enige voorbeeldmodel. De vijftien Kievitsweg-modellen zijn verwijderd; het vorige standaardmodel `BM13_SPA_XX_M3D_ZZZ.ifc` en de leesmij en wijzigingslijsten van de Kievitsweg-modellen staan in `archief/`.
- Hoofdstuk 06: alle STEP-fragmenten komen uit `BM13_SPA_XX_M3D_ZZZ_Qto.ifc`, met per specificatie de gevraagde property sets, hoeveelheden, classificatie en groepering. Waar het model nog afwijkt van de IDS, staat dat onder het fragment. Specificaties zonder object in het model (9.05b, 9.09, 9.17, 9.18) hebben geen fragment.
- Hoofdstuk 16 *Voorbeeldmodellen* herschreven voor het nieuwe model, met een overzicht van de inhoud en de punten waarop het model nog afwijkt.
- Hoofdstuk 05, hoofdstuk 06 en `data/specificaties_checks.csv` opnieuw afgeleid uit de IDS. In de tabellen per specificatie staat ObjectType als verplichte rij, is de toepassing uitgeschreven (bijvoorbeeld "IfcZone, IfcSpatialZone of IfcSpace, elk met ObjectType") en is de kardinaliteit van de classificaties gelijk aan de IDS. Verouderde notities bij 9.06a en 9.06b zijn verwijderd.
- Tabelstijl: R en O zonder kleur; attribute, property en classification elk in een eigen kleur, met uitleg boven de eerste tabel. De Engelse tabellen krijgen nu dezelfde opmaak.
- Aantal IDS-deelspecificaties van 42 naar 41: 9.16d en 9.01f zijn toegevoegd, 9.01d, 9.01e en 9.18f zijn vervallen. De tellingen in de tekst zijn bijgewerkt, in het Nederlands en het Engels.
- Specificatie Restruimte: filter in de applicability gecorrigeerd van ObjectType Bedruimte naar Restruimte; de specificatie was daardoor op geen enkel model van toepassing (A1, toetsing digiGO 4 november 2026).
- Specificatie Vliesgevel (9.18d): applicability gecorrigeerd van `IFCSLAB` naar `IFCCURTAINWALL`; de specificatie toetste vloeren in plaats van vliesgevels (A2).
- Specificatie Verblijfsgebied (9.10b): voorvoegsel "matching the pattern " uit het patroon voor `OccupancyType` verwijderd; daardoor werd `Woonfunctie`, het eerste alternatief in het patroon, niet herkend (A3).
- Specificatie Verblijfsgebied met bezettingsgraad (9.10c): voorvoegsel "matching the pattern " uit het patroon voor `OccupancyType` in de applicability verwijderd; daardoor viel een verblijfsgebied met `Bijeenkomstfunctie` buiten de specificatie. ObjectType `Verblijfsgebied` blijft bewust staan (A4).
- Specificatie Vloer (9.18g): baseName `Thermal Transmittance [ThermalTransmittance]` gecorrigeerd naar `ThermalTransmittance`; de eigenschap werd daardoor in geen enkel model gevonden (A5).
- dataType `IFCREAL` vervangen door het maattype uit de IFC 4.3-definitie van de property set: `ThermalTransmittance` in 9.18a, 9.18b, 9.18d, 9.18g en 9.18h wordt `IFCTHERMALTRANSMITTANCEMEASURE`, `GrossPlannedArea` in 9.05a wordt `IFCAREAMEASURE` en `GlazingAreaFraction` in 9.18i wordt `IFCPOSITIVERATIOMEASURE` (A6).
- Schrijfwijze `Kadastraal Perceel` overal doorgevoerd: in het ObjectType van het voorbeeldmodel, in hoofdstuk 06, 08, 08a en 16 (NL en EN) en in bijlage C van de toolkit. De classificatiecode blijft `Kadastraalperceel` (A7).
- Specificaties 9.01d Perceeladres (IFC4) en 9.01e Gebouwadres (IFC4) vervallen: ze bestonden alleen uit de verplichte adresattributen `SiteAddress` en `BuildingAddress`, die niet meer worden gevraagd. De nummering blijft; de nummers 05 en 06 komen vrij (G1).
- Modelleerrichtlijn en informatieproductiestandaard (NL en EN): de perceelgegevens (`Pset_LandRegistration`) staan op de `IfcSite`; het Kadastraal Perceel is het getekende object met ObjectType, `Name` en geometrie. De IDS is ongewijzigd: die vroeg `Pset_LandRegistration` sinds 0.1.3 al alleen bij 9.03a. Reden: `Pset_LandRegistration` is in IFC alleen gedefinieerd voor `IfcSite` (E4, toetsing digiGO, OP-1).
- Bijlage C van de toolkit GeoBIM (NL en EN, beide kopieën) opnieuw afgeleid uit `ids/`: de secties 05 en 06 zijn vervallen en de telling staat op 41 (X1).
- `mapping-rir/BM13_ILS_RIR_gecombineerd.ids`, deel A gelijk aan `ids/`: 9.01d en 9.01e vervallen, de zeven `IFCREAL`-properties hebben hetzelfde maattype als in `ids/`, specificatie 9 vraagt `Name` in plaats van `ObjectPlacement` en `Representation` en heet `NL 9 ILS Omgevingsvergunning`, en de kop noemt 41 deelspecificaties. Deel B en de RIR-citaten zijn ongewijzigd (X2).
- Toolkit GeoBIM, gepubliceerde kopie `docs/docs/toolkit-geobim/`: bijlage B (NL en EN) en de map `media/bim-viewers/` (23 bestanden) overgenomen uit `toolkit-geobim/`; alle afbeeldingen waarnaar bijlage B verwijst bestaan nu in de gepubliceerde map. Hoofdstuk 11 en `config.js` blijven de gepubliceerde versie (X3).
- Specificatie Georeferentie (9.01a): naast `IFCMAPCONVERSION` is ook `IFCMAPCONVERSIONSCALED` toegestaan, als opsomming in dezelfde specificatie, en de beschrijving in de IDS noemt beide klassen; de requirements zijn ongewijzigd. Hoofdstuk 06, 08 en 08a (NL en EN): beide klassen zijn toegestaan, `IfcMapConversionScaled` is de aanbevolen route voor RD met NAP in IFC4.3. Reden: in lijn met de praktijkrichtlijn BIM naar GEO, zodat een model dat de aanbevolen RDNAP-route volgt niet wordt afgekeurd (B2).
- Hoofdstuk 06 (NL en EN): de voorbeeldkoppen bij 9.01a en 9.01b noemden ten onrechte "ObjectType `ONBEKEND`" voor `IfcMapConversion` en `IfcProjectedCRS`, entiteiten zonder dat attribuut. Koppen en generator hersteld (X4).
- Nieuwe specificatie 9.01f Verticaal datum (NAP): bij doel-CRS EPSG:28992 is VerticalDatum EPSG:5709 verplicht; bij EPSG:7415 geldt de eis niet, omdat die de hoogte al bevat. Een model met RD zonder verticaal datum heeft hoogten zonder gedefinieerde betekenis. In lijn met de praktijkrichtlijn BIM naar GEO en de toetsing van digiGO (OP-6). Checks: #2, #4, #6 en #10, de checks waarvoor eis G3 Hoogteligging geldt. De ILS telt nu 42 specificaties (B4).
- Specificaties Georeferentie (9.01a) en Coördinatenstelsel (9.01b) zijn ook gekoppeld aan check #4 en #6. Reden: 9.01f hangt aan #2, #4, #6 en #10 en bouwt op 9.01a en 9.01b; de koppeling is daarmee consistent gemaakt. De oorspronkelijke bron van de koppeling, de BM13-regelinventarisatie v0.3, staat niet in de repository (B4c).
- Hoofdstuk 06 (eis G2) en 08 (NL en EN): `MapUnit` van `IfcProjectedCRS` is ingevuld en is de meter. Deze eis staat alleen in de tekst: een IDS kan bij een attribuut dat naar een entiteit verwijst alleen de aanwezigheid toetsen, niet welke eenheid het is (B4b).
- Specificatie Bouwlaag (9.06a): `Pset_BuildingStoreyCommon.AboveGround` (IFCLOGICAL) toegevoegd als optionele eigenschap, tot de check is benoemd die de eigenschap gebruikt; `EntranceLevel` blijft verplicht. Hoofdstuk 08 en 08a (NL en EN) bijgewerkt (G5).
- Specificatie Vloer (9.18g): `Pset_SlabCommon.Compartmentation` (IFCBOOLEAN) optioneel toegevoegd; bij Wand (9.18h) stond hij er al. Bron: FireBIM FBO–IFC mapping 2026-09-04 en ILS Ontwerp en Engineering 2 (bSDD 2.0.1, Preview) (N4).
- Specificaties Brandcompartiment, Subbrandcompartiment en Beschermd subbrandcompartiment (9.16a, 9.16b, 9.16d): `Pset_SpaceFireSafetyRequirements.SprinklerProtectionAutomatic` (IFCBOOLEAN) optioneel toegevoegd, naast `SprinklerProtection`. Hoofdstuk 08 en 08a (NL en EN) noemen de brandeigenschappen van zones en fysieke elementen. Bron: FireBIM FBO–IFC mapping 2026-09-04 en ILS Ontwerp en Engineering 2 (bSDD 2.0.1, Preview) (N5).
- Specificatie Isolatie (9.18c): `FireRating`, `SurfaceSpreadOfFlame` en `FlammabilityRating` zijn optioneel. `SurfaceSpreadOfFlame` heeft het voorlopige patroon `(A1|A2|B|C|D|E|F)(-s[1-3])?(,d[0-2])?` volgens NEN-EN 13501-1; de klassen voor vloeren (fl) en leidingisolatie (L) zitten er nog niet in. Bron: FireBIM FBO–IFC mapping 2026-09-04 en ILS Ontwerp en Engineering 2 (bSDD 2.0.1, Preview) (N7).
- `FireRating` in alle acht specificaties die hem vragen (9.18a–e, 9.18g–i) heeft het voorlopige patroon `(R|E|RE|REI|REW|EI|EI1|EI2|EW) (15|20|30|45|60|90|120|180|240|360)(-(Sa|S200|C[0-5]?|M))*` volgens NEN-EN 13501-2: klasse en tijd in minuten, met een spatie ertussen, zonder brandklasse A t/m E. Bij Deur (9.18e) en Raam (9.18i) is `FireRating` optioneel. Voorlopig: besluit van de gemeentelijke werkgroep van 3 november 2026, onder voorbehoud van afstemming met de BIM basis ILS via digiGO (F3).
- Specificaties Deur (9.18e) en Raam (9.18i): `SelfClosing` (deur), `FireExit` en `SmokeStop` zijn optioneel; `LoadBearing` (9.18a, b, g, h) en `FireExit` = true bij Vluchtroute (9.16c) blijven verplicht. Bron: FireBIM FBO–IFC mapping 2026-09-04 en ILS Ontwerp en Engineering 2 (bSDD 2.0.1, Preview) (N8).
- Specificatie 9.18f Fysieke elementen IfcSensor (rookmelder) vervallen; het nummer 39 blijft vrij. De specificatie is gereserveerd voor de check "Tijdig vaststellen van brand" en staat bewaard in `gereserveerd/`, buiten `ids/`. Hoofdstuk 05 (NL en EN) noemt de check onder "Nog niet uitgewerkte checks"; open punt OP10 (hoofdstuk 14) is gesloten en de modelleerrichtlijn (08a) noemt de deur in plaats van `IfcSensor` en de rookmelder, NL en EN. De ILS telt nu 41 specificaties (X6).
- Specificatie Balk (9.18a) gekoppeld aan de checks #7 en #8, net als Kolom (9.18b): `ids:purpose`, `data/specificaties_checks.csv` en hoofdstuk 05 en 06 (NL en EN). De notitie in hoofdstuk 05 over een specificatie zonder check is vervallen (X5).
- `minOccurs` van de applicability is 0 in 35 specificaties: een model hoeft die objecten niet te bevatten, maar als ze er zijn, gelden de eisen. `minOccurs` = 1 blijft bij 9 ILS Omgevingsvergunning, 9.01a Georeferentie, 9.01b Coördinatenstelsel, 9.02 Project, 9.05a Gebouw en 9.06a Bouwlaag. Welke specificaties per mijlpaal verplicht zijn, staat in de mijlpalenmatrix in hoofdstuk 05 (A9).
- Specificatie 9 ILS Omgevingsvergunning vraagt het attribuut `GlobalId` in plaats van `GUID`; `GUID` bestaat niet als attribuut in IFC, waardoor de eis bij elk object afkeurde. Hoofdstuk 06 (NL en EN) bijgewerkt (A13).
- Eén IDS voor alle mijlpalen, geen sets per mijlpaal. `data/specificaties_checks.csv` heeft drie kolommen `M1`, `M2` en `M3` met V (verplicht) of O (optioneel) en een kolom `Voorwaarde`, alleen gevuld bij 9.01f ("alleen bij EPSG:28992"); hoofdstuk 05 (NL en EN) heeft de matrix met de regels, hoofdstuk 06 verwijst ernaar. M1 is een vaste set, M2 volgt uit de checks #1–#6 en M3 uit #1–#17; 9.01c is overal optioneel (G2), 9.01f overal verplicht, alleen bij EPSG:28992. De IDS dwingt de verplichting per mijlpaal niet af; gegenereerde IDS-sets per mijlpaal zijn een vervolgstap voor 0.3.0 (F2).
- Hoofdstuk 04 (NL en EN), kolom *Minimale IDS-set*: M1 is de vaste set 9, 9.01a, 9.01b, 9.02, 9.03a, 9.03b, 9.04, 9.05a, 9.05b, 9.06a, 9.06b, 9.08 (was 9.01a–e, 9.02, 9.03, 9.04, 9.05a, 9.06a, 9.08); M2 en M3 verwijzen naar de matrix per mijlpaal in hoofdstuk 05 (F2b).
- Achterstand weggewerkt. `mapping-rir/BM13_ILS_RIR_gecombineerd.ids`: deel A opnieuw afgeleid uit `ids/` (41 specificaties: 9.01f toegevoegd, 9.18f vervallen, met `minOccurs`, `GlobalId` en alle facetten en instructies gelijk aan `ids/`); de RIR-annotaties en de [RIR]-facetten in deel A zijn behouden, de nieuwe facetten (`SprinklerProtectionAutomatic` bij 9.16a, b en d, `Compartmentation` bij 9.18g) hebben de RIR-annotatie van hun zusterproperty, deel B is ongewijzigd. Bijlage C van de toolkit GeoBIM (NL en EN, beide kopieën): XML, beschrijvingen, toelichtingen, checks per specificatie, de telling en het overzicht per check opnieuw afgeleid uit `ids/`; sectie 39 (9.18f) vervallen, sectie 44 (9.01f) toegevoegd, de koppeltekst van 9.18a noemt #7 en #8 (X7).
- Typefout "bezettingsgraag" verbeterd naar "bezettingsgraad" in de beschrijving van `ids/20-9.10c-Verblijfsgebied-met-bezettingsgraad.ids`, in BM13 deel A en in bijlage C van de toolkit (NL en EN, beide kopieën) (X8).
- Eén versienummer: 0.2.0, datum 2026-11-17, in `ids:info` (version en date) van alle 41 IDS-bestanden, `ids:version` van `mapping-rir/BM13_ILS_RIR_gecombineerd.ids` (was 0.1.0), de ReSpec-configuratie (NL en EN, `publishDate`), de statusparagraaf van `index.html` (NL en EN), hoofdstuk 00 (NL en EN) en de README's (NL en EN). Tot nu toe stonden er 0.96, 0.1, 0.1.1 en 0.1.2 door elkaar. Hoofdstuk 06 (regel 5, NL en EN gelijk), hoofdstuk 02 en 03 ("in deze versie"), de kop van BM13 en van bijlage C staan ook op 0.2.0; `CONTRIBUTING.md` zegt dat `ids:info/version` het versienummer van de ILS volgt. De IDS-bestanden waren eerder apart genummerd (0.95, 0.96) en volgen vanaf nu het versienummer van de ILS. Versies van de toolkit, de RIR, de bSDD-editie, IFC, IDS en de bronnen zijn ongewijzigd; `gereserveerd/39` blijft zoals het is (A10, D1).
- `ids:description` in alle 41 IDS-bestanden: "Deelspecificatie NN van de ILS Omgevingsvergunning 0.2.0." in plaats van "Deelspecificatie NN van 42 … versie 0.96 … ongewijzigd"; bij 9.16d en 9.01f staat daarachter waar ze van zijn afgeleid (X10).
- Typefouten in de beschrijvingen en instructies van `ids/` verbeterd (07, 08, 10, 11, 13, 15, 16, 25, 26, 31–33) en "BLL" naar "Bbl" in alle purposes; de classificatiecode `Kadastraalperceel` is ongewijzigd. De werknotities in 9.06a en 9.10c zijn uit de instructies gehaald en staan nu als open punt OP14 en OP15 in hoofdstuk 14 (NL en EN) (X11).
- Specificatie Georeferentie (9.01a): `XAxisOrdinate` heeft een eigen instructie (de component langs de noordelijke as); die was gelijk aan de instructie van `XAxisAbscissa` (X12).
- ReSpec meldde "Broken local reference found in document" bij 83 links in de NL-pagina en 87 in de EN-pagina, allemaal naar hoofdstukankers zoals `#vereisten`, `#loin` en `#standaard`. Oorzaak: 16 hoofdstuksecties in `index.html` en `en/index.html` hadden `data-include-replace="false"`. ReSpec kijkt alleen of dat attribuut er is, niet naar de waarde. Het verving de section daardoor door de ingesloten Markdown, en daarmee verdween het id. Het attribuut is verwijderd; de hoofdstukken houden nu hun id uit `index.html`. Gecontroleerd in de door ReSpec gebouwde pagina: 0 gebroken links en geen dubbele id's, in NL en EN. De fout zat al in 49c8752 (84 NL, 86 EN) (X13).
- BM13 deel A en bijlage C van de toolkit (NL en EN, beide kopieën) opnieuw afgeleid uit `ids/` na X10–X12.

## [0.1.0] – 2026-09-17

### Toegevoegd
- Eerste ReSpec-publicatie van de ILS Omgevingsvergunning, opgebouwd volgens het digiGO Toetsingskader ILS en het ILS-Referentiesjabloon.
- Tabel met vereisten: 17 checks gekoppeld aan 42 IDS-deelspecificaties.
- Level of Information Need, per specificatie gegenereerd uit de IDS, plus geometrische eisen G1–G6.
- Acceptatiecriteria AC1–AC7.
- Hoofdstuk geometrische controle (tweeledige aanpak, SPARQL-regels en generieke functies).
- Verantwoording per criterium van het Toetsingskader ILS.

### Gewijzigd
- Informatiedoelstellingen hernummerd: ID01 = omgevingsplanactiviteit bouwen (checks #1–#6), ID02 = technische bouwactiviteit (checks #7–#17). De overige doelstellingen zijn ID03–ID12 geworden (voorheen ID01–ID08; ID11 en ID12 ongewijzigd).
- ID01-informatie wordt bij ID02 (aanvraag technische bouwactiviteit, M3) opnieuw en bijgewerkt meegeleverd.
- ID03–ID12 zijn optioneel: voorstellen om op te nemen, nog niet onderzocht.
- Matrix toegevoegd die de informatiedoelstellingen koppelt aan de GEMMA-processen (013, 015-02 t/m 015-05, toezicht en handhaving, brondatabeheer, evaluatie).
- GEMMA-verwijzing gecorrigeerd: de toetsing valt onder 015-03 *Inhoudelijk behandelen aanvraag* (niet 015-02). Aangepast in de tekst en in `ids:milestone` van alle 42 IDS-bestanden.
- Engelse, automatisch vertaalde versie toegevoegd (`en/` en `ils-omgevingsvergunning-en.html`). De Nederlandse versie is leidend; GEMMA-, STB- en IDS-termen zijn Nederlands gebleven.

## [0.1.3] – 2026-09-25

### Toegevoegd
- Hoofdstuk 16 *Voorbeeldmodellen*: 15 IFC-modellen uit het project RottaNova/Kievitsweg in [`voorbeeldmodellen/`](voorbeeldmodellen/), met herkomst, bestandsoverzicht en de bekende afwijkingen.
- Per specificatie in hoofdstuk 06 een STEP-fragment uit die modellen, met property sets en classificatieverwijzing (28 van de 42 specificaties; de overige objecttypen komen niet in de modellen voor).
- Engelse vertaling van hoofdstuk 16 en van de fragmenten.

### Gewijzigd
- `ids/07-9.02-Project.ids`: `ProjectInvestmentEstimate` had `dataType="IFCCOSTITEMTYPEENUM"`, wat in het IFC-schema een `IfcMonetaryMeasure` is. Gecorrigeerd naar `IFCMONETARYMEASURE`.
- Voorbeeldmodellen: header geneutraliseerd (auteur, organisatie, autorisatie, exportsysteem en de Revit-regels in `FILE_DESCRIPTION`), `FILE_NAME` gelijk aan de bestandsnaam, tijdstempel `2026-09-25T00:00:01`, en `PredefinedType` = `USERDEFINED` voor ruimtelijke objecten met een `ObjectType` (1.053 `IfcSpace`).
- Voorbeeldmodellen opgeschoond: niet-schema-eigenschappen uit `Pset_SpaceOccupancyRequirements` verwijderd, SBI-codes in `OccupancyType` in CBS-notatie, `Pset_SpaceHeaterTypeCommon` verwijderd, `Pset_SpaceCommon.Reference` verwijderd, `ProjectInvestmentEstimate` gevuld met een fictieve 10 miljoen euro plus `IfcMonetaryUnit` EUR.
