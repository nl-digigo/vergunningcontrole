# Voorbeeldmodellen ILS Omgevingsvergunning — leesmij

15 IFC-modellen uit het project **RottaNova / Kievitsweg** (Kuiper Compagnons), bijgewerkt zodat ze voldoen aan de specificaties van deze ILS. Zie hoofdstuk *Voorbeeldmodellen* van de ILS voor de toelichting en het bestandsoverzicht.

**Let op:** dit zijn oefenmodellen. Eigenschappen die in het bronmodel ontbraken zijn ingevuld met placeholders; die zijn te vinden via de property set `BM13_Placeholders` op de betreffende objecten.

---

## Ronde 3 (25 september 2026) — header en PredefinedType

- **FILE_NAME.name** gelijkgetrokken met de bestandsnaam.
- **Tijdstempel** van alle modellen op `2026-09-25T00:00:01`.
- **Header geneutraliseerd:** `author` = `BM13 voorbeeldmodel`, `organization` = `VNG`, `authorization` leeg, `preprocessor_version` = `IfcOpenShell`, `originating_system` = `ILS Omgevingsvergunning - voorbeeldmodel (VNG BM13)`. Uit `FILE_DESCRIPTION` zijn de regels `RevitIdentifiers` (interne GUID's) en `CoordinateReference` (die het echte adres bevatte) verwijderd; `ViewDefinition` en `ExchangeRequirement` blijven staan.
- **PredefinedType op USERDEFINED** voor ruimtelijke objecten met een ingevulde `ObjectType`: 1.053 `IfcSpace`-objecten (was `SPACE` of `NOTDEFINED`). Dit volgt de modelleerrichtlijn: wie `ObjectType` gebruikt, zet `PredefinedType` op `USERDEFINED`.
  **Niet aangepast:** fysieke elementen zoals `IfcDoor` (`.DOOR.`), `IfcWindow` (`.WINDOW.`) en `IfcSlab` (`.FLOOR.`). Die dragen ook een `ObjectType` (de Revit-familienaam), maar hun `PredefinedType` heeft daar een eigen betekenis die niet verloren mag gaan.

Alle 15 modellen slagen na deze ronde nog steeds op alle toepasbare specificaties.

| Wijziging | Aantal | Bestanden |
|---|---|---|
| IfcSpace.PredefinedType "SPACE" -> USERDEFINED | 701 | 10 |
| IfcSpace.PredefinedType "NOTDEFINED" -> USERDEFINED | 352 | 1 |
| header FILE_NAME.time_stamp = 2026-09-25T00:00:01 | 15 | 15 |
| header FILE_NAME.author geneutraliseerd | 15 | 15 |
| header FILE_NAME.organization geneutraliseerd | 15 | 15 |
| header FILE_NAME.authorization geleegd | 15 | 15 |
| header FILE_NAME.preprocessor_version geneutraliseerd | 15 | 15 |
| header FILE_NAME.originating_system geneutraliseerd | 15 | 15 |
| header FILE_DESCRIPTION-regel verwijderd (RevitIdentifiers) | 3 | 3 |
| header FILE_DESCRIPTION-regel verwijderd (CoordinateReference) | 3 | 3 |
| header FILE_NAME.name = "Kievitsweg_Nevengebruiksfunctie.ifc" (gelijk aan de bestandsnaam) | 1 | 1 |
| header FILE_NAME.name = "Kievitsweg_Brandcompartiment.ifc" (gelijk aan de bestandsnaam) | 1 | 1 |
| header FILE_NAME.name = "Kievitsweg_Restgebied.ifc" (gelijk aan de bestandsnaam) | 1 | 1 |
| header FILE_NAME.name = "Kievitsweg_IsExternalTrue_LoadBearingTrue.ifc" (gelijk aan de bestandsnaam) | 1 | 1 |
| header FILE_NAME.name = "Kievitsweg_Restruimte.ifc" (gelijk aan de bestandsnaam) | 1 | 1 |
| header FILE_NAME.name = "Kievitsweg_Gebruiksgebied.ifc" (gelijk aan de bestandsnaam) | 1 | 1 |
| header FILE_NAME.name = "Kievitsweg_IsExternalFalse_LoadBearingTrue.ifc" (gelijk aan de bestandsnaam) | 1 | 1 |
| header FILE_NAME.name = "Kievitsweg_R23_ILS_Spaces_update.ifc" (gelijk aan de bestandsnaam) | 1 | 1 |
| header FILE_NAME.name = "Kievitsweg_IsExternalFalse_LoadBearingFalse.ifc" (gelijk aan de bestandsnaam) | 1 | 1 |
| header FILE_NAME.name = "Kievitsweg_Eigendom-_en_gebruikseenheid.ifc" (gelijk aan de bestandsnaam) | 1 | 1 |
| header FILE_NAME.name = "Kievitsweg_Terreinvolume.ifc" (gelijk aan de bestandsnaam) | 1 | 1 |
| header FILE_NAME.name = "Kievitsweg_Verblijfsruimte.ifc" (gelijk aan de bestandsnaam) | 1 | 1 |
| header FILE_NAME.name = "Kievitsweg_R25_ILS_Spaces_20250815_LoGeoRef50.ifc" (gelijk aan de bestandsnaam) | 1 | 1 |
| header FILE_NAME.name = "Kievitsweg_IsExternalTrue_LoadBearingFalse.ifc" (gelijk aan de bestandsnaam) | 1 | 1 |
| header FILE_NAME.name = "Kievitsweg_Gebruiksfunctie.ifc" (gelijk aan de bestandsnaam) | 1 | 1 |

---

## Ronde 2 (25 september 2026)

**Datum:** 25 september 2026 · **Bron:** de set van 17 september (`kievitsweg_bm13_gecorrigeerd`) · **Gereedschap:** IfcOpenShell 0.8.5 / IfcTester

Alle 15 modellen zijn opnieuw bewerkt. Geometrie en objectaantallen zijn ongewijzigd.

## Wat is er gewijzigd

| Onderwerp | Wat | Aantal |
|---|---|---|
| `Pset_SpaceOccupancyRequirements` | `Level`, `Name`, `ObjectType`, `Number` en `Area` verwijderd: die eigenschappen staan niet in deze property set van het IFC-schema. Ze stonden al als attribuut (`Name`, `ObjectType`), als bouwlaagrelatie of als hoeveelheid (`Qto_SpaceBaseQuantities`) in het model | 5 × 52 |
| idem | Property set verwijderd waar er daarna niets meer in stond | 36 |
| idem | `OccupancyType` (SBI-code) gelijkgetrokken naar de CBS-notatie met punten: `2910` → `29.10`, `69203` → `69.20.3` | 39 |
| `Pset_SpaceHeaterTypeCommon` | Volledig verwijderd van alle objecten | 1.061 |
| `Pset_SpaceCommon` | Eigenschap `Reference` verwijderd van alle objecten | 1.125 |
| `Pset_ProjectCommon` | `ProjectInvestmentEstimate` = **10.000.000** als `IfcMonetaryMeasure` | 15 (elk model) |
| `IfcUnitAssignment` | `IfcMonetaryUnit` met valuta **EUR** toegevoegd, zodat het bedrag een eenheid heeft | 15 |

De volledige lijst staat in `wijzigingen_v2.md`.

## Let op: één specificatie faalt nu, door een fout in de IDS

Specificatie **9.02 Project** eist voor `ProjectInvestmentEstimate` het datatype `IFCCOSTITEMTYPEENUM`:

```xml
<ids:property dataType="IFCCOSTITEMTYPEENUM" … >
  <ids:baseName><ids:simpleValue>ProjectInvestmentEstimate</ids:simpleValue></ids:baseName>
```

Volgens het IFC-schema is `Pset_ProjectCommon.ProjectInvestmentEstimate` een **`IfcMonetaryMeasure`**; `IfcCostItemTypeEnum` is het type van een kostenpost, niet van een bedrag. De modellen houden daarom de schema-correcte `IfcMonetaryMeasure`, waardoor de toets op dit punt afkeurt. Zolang de eigenschap ontbrak, viel dit niet op: de eis is `optional`, dus een leeg model slaagde.

**Herstel in de IDS:** `dataType="IFCCOSTITEMTYPEENUM"` → `dataType="IFCMONETARYMEASURE"` in `ids/07-9.02-Project.ids`. Daarna slagen alle 15 modellen weer op alle toepasbare specificaties.

De overige specificaties die vóór deze ronde slaagden, slagen nog steeds (per model 9–26 toepasbare specificaties, alleen 9.02 valt af).

## Bestanden

| Bestand | Inhoud |
|---|---|
| 15 × `Kievitsweg_*.ifc` | de bijgewerkte modellen, zelfde namen als de vorige set |
| `wijzigingen_v2.md` | alle wijzigingen met aantallen en het aantal bestanden |
| `LEESMIJ_v2.md` | dit bestand |

De eerdere bewerkingen (ObjectTypes, classificaties, georeferentie, placeholders) zitten er nog in; zie `RAPPORT_Kievitsweg_ILS-correcties.md` uit de vorige set.


---

## Ronde 1 (17 september 2026)

**Datum:** 17 september 2026 · **Toetsingsset:** 41 IDS 1.0-deelspecificaties uit de ILS Omgevingsvergunning v0.1.0 (afgeleid van *ILS voor Ruimten in de Omgevingswet* v0.95) · **Gereedschap:** IfcOpenShell 0.8.5 / IfcTester

## Resultaat

| | Vóór | Na |
|---|---|---|
| Gefaalde specificaties (alle 15 modellen samen) | **126** | **0** |
| Modellen zonder fouten | 0 van 15 | **15 van 15** |

Aantallen objecten en geometrie zijn ongewijzigd: elk bijgewerkt model heeft evenveel `IfcProduct`- en `IfcShapeRepresentation`-objecten als het origineel. Er is alleen alfanumerieke informatie toegevoegd of gecorrigeerd.

| Model | Toepasbare specs vóór | Gefaald vóór | Toepasbare specs na | Gefaald na |
|---|---|---|---|---|
| Kievitsweg_Brandcompartiment.ifc | 10 | 8 | 10 | 0 |
| Kievitsweg_Eigendom-_en_gebruikseenheid.ifc | 10 | 8 | 10 | 0 |
| Kievitsweg_Gebruiksfunctie.ifc | 10 | 7 | 12 | 0 |
| Kievitsweg_Gebruiksgebied.ifc | 10 | 8 | 10 | 0 |
| Kievitsweg_IsExternalFalse_LoadBearingFalse.ifc | 12 | 7 | 12 | 0 |
| Kievitsweg_IsExternalFalse_LoadBearingTrue.ifc | 13 | 7 | 13 | 0 |
| Kievitsweg_IsExternalTrue_LoadBearingFalse.ifc | 12 | 7 | 12 | 0 |
| Kievitsweg_IsExternalTrue_LoadBearingTrue.ifc | 12 | 7 | 12 | 0 |
| Kievitsweg_Nevengebruiksfunctie.ifc | 10 | 8 | 10 | 0 |
| Kievitsweg_R23_ILS_Spaces_update.ifc | 22 | 15 | 26 | 0 |
| Kievitsweg_R25_ILS_Spaces_20250815_LoGeoRef50.ifc | 22 | 16 | 25 | 0 |
| Kievitsweg_Restgebied.ifc | 10 | 8 | 10 | 0 |
| Kievitsweg_Restruimte.ifc | 9 | 7 | 9 | 0 |
| Kievitsweg_Terreinvolume.ifc | 9 | 6 | 11 | 0 |
| Kievitsweg_Verblijfsruimte.ifc | 10 | 7 | 10 | 0 |

Het aantal *toepasbare* specificaties stijgt bij enkele modellen. Dat komt doordat objecten na het hernoemen van `ObjectType` nu wél door een specificatie worden herkend; ze werden eerder simpelweg overgeslagen.

<p class="note"><strong>Let op bij lezen van de score:</strong> "0 gefaald" betekent dat de aanwezige objecten voldoen aan de specificaties die op ze van toepassing zijn. Het betekent niet dat het model inhoudelijk compleet is — zie <em>Wat er nog ontbreekt</em>.</p>

## Wat is er gewijzigd

### Op alle 15 modellen

| Onderwerp | Wijziging |
|---|---|
| Header | `author` en `organization` gevuld waar leeg (overgenomen uit de R23/R25-modellen van hetzelfde project), `authorization` = `ONBEKEND` |
| Georeferentie | `IfcMapConversion.Scale` expliciet op 0,001 (projecteenheid mm → meter, reviewpunt 1); `IfcProjectedCRS.VerticalDatum` = `EPSG:5709` bij `EPSG:28992` (reviewpunt 4) |
| Project | `Phase` "nieuwbouw" → `05 Definitief ontwerp`; `Pset_ProjectCommon.ProjectType` = `NEWBUILD`; `Description` "Bruto-Inhoud" → "Bruto Inhoud" (reviewpunt 9) |
| Perceel | `IfcSite.ObjectType` = `Perceel`; ontbrekende `ObjectPlacement` toegevoegd (oorsprong); `SiteAddress` + `Pset_Address` als placeholder |
| Gebouw | `BuildingAddress` + `Pset_Address` aangevuld; `ObjectType` = `Gebouw` waar leeg |
| Bouwlagen | `ObjectType` "Level:BuildingLevel" → `Bouwlaag` (48×) |
| Classificatie | `IfcClassification` "Omgevingswet-Ruimten" toegevoegd, met een `IfcClassificationReference` per klasse op project, perceel, gebouw, bouwlaag, ruimten en zones (ruim 1.300 koppelingen) |

### Naamgeving en bepalingsmethoden

| Was | Wordt | Aantal |
|---|---|---|
| `ObjectType` "Eigendom- en gebruikseenheid" | `Gebruikseenheid` | 151 |
| `ObjectType` "BVO" (IfcSpace) | `Bouwlaaginhoud`, met `Description` = "Bruto Inhoud" en de bouwlaagnaam in `Name` | 83 |
| `ObjectType` "Kadastraalperceel" | `Kadastraal perceel` | 2 |
| `ObjectType` "IfcSpatialZone" (zone Terreinvolume) | `Bouwwerkperceel` | 3 |
| `Description` "Bruto-Inhoud" | "Bruto Inhoud" | 225 |
| `Name` "Woonfunctie Unit 1.4" | `Name` = "Woonfunctie", rest naar `LongName` | 51 |
| `Name` "Eigendom- en gebruikseenheid Unit 2.9" (zone) | "Unit 2.9" (reviewpunt 11) | 23 |
| "Gezamenlijk" | "Gemeenschappelijk" (reviewpunt 19) | in R23/R25 |

Nieuw aangemaakt: één `IfcZone` **Gebouwinhoud** per model met BVO-ruimten, die alle Bouwlaaginhoud-ruimten groepeert (specificatie 9.05b had anders geen object).

### Placeholders — hier moet de modelleur nog langs

Deze waarden stonden niet in de bronmodellen. Ze zijn ingevuld zodat de IDS-toets doorloopt, en elk object met een placeholder draagt een property set **`BM13_Placeholders`** met de namen van de betreffende eigenschappen en een toelichting. Zo zijn ze met één query terug te vinden.

| Waar | Eigenschap | Ingevulde waarde | Aantal |
|---|---|---|---|
| Ramen | `Pset_WindowCommon.FireRating` | `ONBEKEND` | 719 |
| Ramen | `.FireExit`, `.SmokeStop` | `False` | 2× 719 |
| Deuren | `Pset_DoorCommon.FireRating` | `ONBEKEND` | 411 |
| Deuren | `.FireExit`, `.SelfClosing`, `.SmokeStop` | `False` | 241 / 483 / 483 |
| Vloer (1×) | `Pset_SlabCommon.LoadBearing` | `False` | 2 |
| Isolatie (1×) | `Pset_CoveringCommon.FireRating`, `.Combustible`, `.FlammabilityRating`, `.SurfaceSpreadOfFlame` | `ONBEKEND` / `False` | 4 |
| Adres | `AddressLines` "Kievitsweg ONBEKEND", `Town`/`PostalCode` `ONBEKEND`, `Country` `NL` | placeholder | 15 modellen |

**De booleans staan bewust op `False`.** De IDS eist voor deze eigenschappen het datatype `IfcBoolean`; `UNKNOWN` (IfcLogical) telt in de IDS als "niet aanwezig". `False` is de voorzichtige richting: een brandwerende deur die nog op `False` staat, valt bij de inhoudelijke toets op — andersom zou een onterecht "veilig" model kunnen doorglippen. Vervang ze door de werkelijke waarden voordat het model echt wordt ingediend.

Ook de straatnaam "Kievitsweg" is een aanname, afgeleid uit de bestandsnamen.

## Reviewpunten uit *Review model Kievitsweg*

| # | Punt | Status |
|---|---|---|
| 1 | Schaal in `IfcMapConversion` staat op default | **Opgelost** — `Scale` expliciet op 0,001 gezet in alle modellen |
| 2 | BVO niet tot hart van de vloer gemodelleerd | **Niet opgelost** — dit is geometrie; vraagt aanpassing in Revit |
| 3, 16 | Tarra-inhoud en tarraruimte ontbreken | **Niet opgelost** — objecten ontbreken; kan niet uit bestaande data worden afgeleid |
| 4 | `EPSG:5709` ontbreekt | **Opgelost** — `VerticalDatum` = `EPSG:5709` |
| 5 | Kadastraalperceel is `IfcSpace`, ILS schrijft `IfcSpatialZone` voor | **Niet opgelost** — entiteitswijziging raakt de decompositiestructuur; de IDS accepteert `IfcSpace` wél. Voorstel: in Revit corrigeren |
| 6, 17 | Schrijfwijze "Kadastraalperceel" | **Deels** — gezet op `Kadastraal perceel`, want dát vraagt de IDS-applicability. De ILS-tekst noemt de schrijfwijze zonder spatie. **Conflict tussen document en IDS; graag één schrijfwijze kiezen** |
| 7 | Bepalingsmethode "Terreinvolume" vs "TerreinVolume" | **Deels** — `Terreinvolume` aangehouden conform IDS; zelfde soort conflict als 6 |
| 8 | `UnitsInContext` ontbreekt | **Niet nodig** — in alle modellen aanwezig; de specificatie 9.02 slaagt hierop |
| 9, 12 | "Bruto-Inhoud" moet "Bruto Inhoud" zijn | **Opgelost** — 225 objecten plus het project |
| 10 | Pset met BuildingID, IsPermanentID, MarketCategory, MarketSubCategory ontbreekt bij IfcProject | **Aandachtspunt** — deze eigenschappen staan volgens het IFC-schema op `IfcBuilding` (`Pset_BuildingCommon`, `Pset_BuildingUse`) en zijn daar aanwezig en correct. De ILS vraagt ze ook op gebouwniveau |
| 11 | `Name` van zone bevat naam én ObjectType | **Opgelost** — 23 zones |
| 13 | `Name`/`LongName` omgedraaid t.o.v. buildingSMART-documentatie | **Niet opgelost** — een omwisseling botst met de IDS, die voor Gebruiksfunctie juist de functienaam in `Name` eist. **Voorleggen aan digiGO/buildingSMART** |
| 14 | Buitenruimten dragen "BVO" in Name/Type terwijl TerreinVolume is voorgeschreven | **Deels** — BVO-ruimten zijn nu `Bouwlaaginhoud`; de terreinobjecten houden `Bebouwd/Onbebouwd Terrein` met `Description` "Terreinvolume". Volledige omzetting vraagt een keuze over de objectindeling |
| 15 | `LandID` ontbreekt | **Niet opgelost** — kadastrale aanduiding is niet bekend in het model; `Pset_LandRegistration` is wel aanwezig |
| 18 | Naamgevingsconventie bepalingsmethoden is inconsistent | **Onderschreven** — meegenomen als bevinding voor de ILS zelf |
| 19 | "Gezamenlijk" moet "Gemeenschappelijk" zijn | **Opgelost** |
| 20 | Bouwlagen hebben oppervlak maar geen inhoud | **Niet opgelost** — hoeveelheden moeten uit de bronsoftware komen (eis G5 in de ILS) |

## Wat er nog ontbreekt (inhoudelijk, niet op te lossen in het bestand)

1. Werkelijke brandeigenschappen van deuren, ramen en isolatie (checks #7, #8, #14–#16).
2. Adresgegevens: straat, huisnummer, postcode, plaats; en `LandID`/`LandTitleID` van het kadastrale perceel.
3. Tarraruimte en tarra-inhoud; BVO gemodelleerd tot hart van de vloer.
4. Hoeveelheden (`Qto_…`) op bouwlagen en ruimten, inclusief inhoud.
5. Brandcompartimenten zitten als `IfcSpace` in het model. Specificatie 9.16a toetst alleen `IfcZone`/`IfcSpatialZone`, dus ze worden nu niet getoetst. Aanbeveling: per brandcompartiment een `IfcZone` maken.
6. Het bestand `Kievitsweg_R23_ILS Spaces update_TEMP.ifc` is onbruikbaar: het bevat geen IFC-header en is een fragment (109 kB). Niet meegenomen.
7. `Kievitsweg_BVO.ifc` is niet aangekomen bij deze bewerking.

## Bevindingen over de IDS zelf (niet over dit model)

Bij het toetsen kwamen drie fouten in de IDS-set naar boven, die aansluiten bij het bestaande bevindingendocument:

- **9.12d Restruimte** selecteert `ObjectType = Bedruimte` in plaats van `Restruimte`. Restruimten worden dus nooit getoetst.
- **9.18d Fysieke elementen IfcCurtainWall** selecteert `IFCSLAB` in plaats van `IFCCURTAINWALL`.
- **9.10c Verblijfsgebied met bezettingsgraad** heeft dezelfde applicability als 9.10b, zonder onderscheidend criterium.
- De `uri` in de classificatiefacetten wijst naar bSDD-versie **0.2.0**, terwijl de specificatie-identifiers 0.3.0 gebruiken. De toegevoegde classificatieverwijzingen in deze modellen volgen daarom 0.2.0, zodat de toets slaagt.

## Bestanden

| Bestand | Inhoud |
|---|---|
| 15 × `Kievitsweg_*.ifc` | de bijgewerkte modellen, zelfde bestandsnamen als het origineel |
| `changes_table.md` | alle wijzigingen met aantallen |
| `val_table.md` | toetsresultaat per model, vóór en na |
| `before.json` / `after.json` | volledig IDS-resultaat per specificatie, machineleesbaar |
| `bm13_ifc_fix.py` | het script dat de wijzigingen heeft uitgevoerd, herhaalbaar op een nieuwe export |
