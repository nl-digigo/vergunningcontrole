# Level of Information Need

The Level of Information Need (LOIN, ISO 7817-1:2024) sets out, for each information need, which **alphanumeric information**, **geometry** and **documentation** is required. In this ILS, the LOIN is made up of the following parts:

1. **Alphanumeric** — recorded in machine-readable form in 42 IDS sub-specifications (IDS 1.0), derived from the *ILS voor Ruimten in de Omgevingswet* (v0.95). Summarised per specification below; the IDS content (names, values) is kept in Dutch.
2. **Geometric** — requirements on the shape and quality of the geometry, which IDS cannot check. See [Geometric requirements](#loin-geometrie) below and [Geometric checking](#geometrie).
3. **Documentation** — additional files as required by the standard submission requirements (PDF/A drawings, reports), see [Information production standard](#standaard).

## LOIN per information need (summary)

| Aspect | Content |
|---|---|
| Purpose | Automated checking of the application against 17 checks (OPA and TBA) |
| Milestone | Preliminary consultation (*vooroverleg*), *omgevingsplanactiviteit* application, *technische bouwactiviteit* application |
| Actors | Applicant/modeller delivers, municipality (permit authority) checks |
| Objects | Spatial objects (IfcSpace, IfcSpatialZone, IfcZone), building, storeys, physical elements (IfcWall, IfcDoor) |
| Alphanumeric | IDS sub-specifications 01–42 |
| Geometry | Volumetric (solid) spaces, RD/NAP georeferencing, level of detail as in the table below |
| Documentation | IFC (STEP), PDF/A drawings derived from the model, IDS validation report (BCF or HTML) |

<a id="loin-geometrie"></a>

## Geometric requirements

| Requirement | Explanation | Needed for checks |
|---|---|---|
| G1 Solid geometry | Spaces and zones are closed volumes (no loose surfaces), so that area and volume can be recalculated | #2 #3 #5 #7 #9 #10 #14–#17 |
| G2 Georeferencing | IfcMapConversion + IfcProjectedCRS, EPSG:28992 (RD) / EPSG:7415 (RD+NAP), units in metres | #1–#6 |
| G3 Elevation | Height relative to NAP; datum level and storey heights consistent across discipline models | #2 #4 #6 #10 |
| G4 No duplicates | No duplicate or overlapping objects of the same type (e.g. a slab split on export must not be counted twice) | #3 #5 #7 #13 |
| G5 Quantities included | Quantity sets (Qto_…) calculated and exported by the CAD software; the recipient (the municipality) recalculates them as a check | #3 #5 #7 #13 #15 #17 |
| G6 Measuring method | Areas and volumes according to NEN 2580; model exceptions (pitched roofs, dormers) explicitly | #3 #5 #7 #17 |

## LOIN per sub-specification (alphanumeric)

Per specification: which objects the requirement applies to (applicability) and which information is required (**R**), optional (**O**) or prohibited (**X**). Specification names and values are the original Dutch IDS content.

### 9 ILS voor Ruimten in de omgevingswet

*File:* [`01-9-ILS-voor-Ruimten-in-de-omgevingswet.ids`](../ids/01-9-ILS-voor-Ruimten-in-de-omgevingswet.ids) · *IFC:* IFC4 IFC4X3_ADD2 · *Checks:* #1 #2 #3 #4 #5 #6 #7 #8 #9 #10 #11 #12 #13 #14 #15 #16 #17

*Applies to:* IFCSPATIALZONE / IFCSPACE / IFCEXTERNALSPATIALELEMENT

Note: this is not a usual check. It verifies that every object present in the model also has its own geometry for these parts (an IfcZone has no geometry of its own, because it is a relationship object).

| Facet | Name | Card. | Value |
|---|---|---|---|
| attribute | ObjectPlacement | R | — |
| attribute | Representation | R | — |

### 9.01a Georeferentie

*File:* [`02-9.01a-Georeferentie.ids`](../ids/02-9.01a-Georeferentie.ids) · *IFC:* IFC4 IFC4X3_ADD2 · *Checks:* #1 #2 #3 #5 #7 #10 #17

*Applies to:* IFCMAPCONVERSION

| Facet | Name | Card. | Value |
|---|---|---|---|
| attribute | Eastings | R | — |
| attribute | Northings | R | — |
| attribute | OrthogonalHeight | R | — |
| attribute | XAxisAbscissa | R | — |
| attribute | XAxisOrdinate | R | — |
| attribute | Scale | R | — |

### 9.01b Coördinatenstelsel

*File:* [`03-9.01b-Coordinatenstelsel.ids`](../ids/03-9.01b-Coordinatenstelsel.ids) · *IFC:* IFC4 IFC4X3_ADD2 · *Checks:* #1 #2 #3 #5 #7 #10 #17

*Applies to:* IFCPROJECTEDCRS

| Facet | Name | Card. | Value |
|---|---|---|---|
| attribute | Name | R | EPSG:7415 \| EPSG:28992 |

### 9.01c Projectadres (IFC4X3_ADD2)

*File:* [`04-9.01c-Projectadres-IFC4X3-ADD2.ids`](../ids/04-9.01c-Projectadres-IFC4X3-ADD2.ids) · *IFC:* IFC4X3_ADD2 · *Checks:* #1 #2 #3 #4 #5 #6

*Applies to:* IFCSITE / IFCBUILDING

The address is indicative; georeferencing is what the environmental checks are carried out with. 

| Facet | Name | Card. | Value |
|---|---|---|---|
| property | Pset_Address.AddressLines | R | — |
| property | Pset_Address.Country | R | NL |
| property | Pset_Address.PostalCode | R | — |
| property | Pset_Address.Town | R | — |

### 9.01d Perceeladres (IFC4)

*File:* [`05-9.01d-Perceeladres-IFC4.ids`](../ids/05-9.01d-Perceeladres-IFC4.ids) · *IFC:* IFC4 · *Checks:* #1 #2 #3 #4 #5 #6

*Applies to:* IFCSITE

The address is indicative; georeferencing is what the environmental checks are carried out with. 

| Facet | Name | Card. | Value |
|---|---|---|---|
| attribute | SiteAddress | R | — |

### 9.01e Gebouwadres (IFC4)

*File:* [`06-9.01e-Gebouwadres-IFC4.ids`](../ids/06-9.01e-Gebouwadres-IFC4.ids) · *IFC:* IFC4 · *Checks:* #1 #2 #3 #4 #5 #6

*Applies to:* IFCBUILDING

The address is indicative; georeferencing is what the environmental checks are carried out with. 

| Facet | Name | Card. | Value |
|---|---|---|---|
| attribute | BuildingAddress | R | — |

### 9.02 Project

*File:* [`07-9.02-Project.ids`](../ids/07-9.02-Project.ids) · *IFC:* IFC4 IFC4X3_ADD2 · *Checks:* #1 #2 #3 #4 #5 #6 #7 #8 #9 #10 #11 #12 #13 #14 #15 #16 #17

*Applies to:* IFCPROJECT

| Facet | Name | Card. | Value |
|---|---|---|---|
| attribute | Name | R | — |
| attribute | Description | R | — |
| attribute | Phase | O | patroon `01 Initiatief/haalbaarheid|02 Projectdefinitie|03 Structuurontwerp|04 Voorontwerp|05 Definitief ontwerp|06 Technisch ontwerp/Bestek|07 Prijs- en Contractvorming|07 Prijs- en contractvorming|08 Uitvoering - Uitvoeringsgereed Ontwerp|09 Uitvoering - Directievoering|10 Gebruik/Exploitatie|1. Initiatief|1.1 Iniatief|INI|1.2 Haalbaarheid|HBH|1.3 Projectdefinitie|PD|2. Ontwerp|2.1 Structuurontwerp|SO|2.2 Voorontwerp|VO|2.3 Definitief Ontwerp|DO|2.4 Omgevingsvergunning|OV|3. Engineering|3.1 Technisch Ontwerp|TO|3.2 Uitvoeringsgereed Ontwerp|UO|4. Realisatie|4.1 Uitvoering|UV|4.2 Oplevering & Overdracht|OO|4.3 Onderhoudstermijn|5. Gebruik` |
| attribute | UnitsInContext | R | — |
| property | Pset_ProjectCommon.ProjectType | O | NEWBUILD \| MODIFICATION \| OPERATIONMAINTENANCE \| RENOVATION \| REPAIR |
| property | Pset_ProjectCommon.ProjectInvestmentEstimate | O | — |

### 9.03a Perceel

*File:* [`08-9.03a-Perceel.ids`](../ids/08-9.03a-Perceel.ids) · *IFC:* IFC4X3_ADD2 IFC4 · *Checks:* #3 #10 #14 #17

*Applies to:* IFCSITE

| Facet | Name | Card. | Value |
|---|---|---|---|
| attribute | Name | R | — |
| attribute | ObjectType | R | Perceel |
| attribute | ObjectPlacement | R | — |
| property | Pset_LandRegistration.IsPermanentID | R | true |
| property | Pset_LandRegistration.LandID | O | — |
| property | Pset_LandRegistration.LandTitleID | O | — |

### 9.03b Bouwwerkperceel

*File:* [`09-9.03b-Bouwwerkperceel.ids`](../ids/09-9.03b-Bouwwerkperceel.ids) · *IFC:* IFC4 IFC4X3_ADD2 · *Checks:* #1 #2 #3 #5 #6 #7 #17

*Applies to:* IFCSPATIALZONE / IFCSPACE / IFCZONE with ObjectType=Bouwwerkperceel

| Facet | Name | Card. | Value |
|---|---|---|---|
| classification | classificatie Omgevingswet-Ruimten | O | Bouwwerkperceel |
| attribute | Name | R | — |
| attribute | Description | R | Terreinvolume |

### 9.04 Kadastraal Perceel

*File:* [`10-9.04-Kadastraal-Perceel.ids`](../ids/10-9.04-Kadastraal-Perceel.ids) · *IFC:* IFC4X3_ADD2 IFC4 · *Checks:* #1 #2 #3 #5 #6 #7 #11 #12 #17

*Applies to:* IFCSPATIALZONE / IFCSPACE / IFCZONE with ObjectType=Kadastraal perceel

| Facet | Name | Card. | Value |
|---|---|---|---|
| classification | classificatie Omgevingswet-Ruimten | O | Kadastraalperceel |
| attribute | Name | R | — |
| attribute | Description | R | Terreinvolume |

### 9.05a Gebouw

*File:* [`11-9.05a-Gebouw.ids`](../ids/11-9.05a-Gebouw.ids) · *IFC:* IFC4 IFC4X3_ADD2 · *Checks:* #3 #4 #17

*Applies to:* IFCBUILDING

| Facet | Name | Card. | Value |
|---|---|---|---|
| attribute | Name | R | — |
| attribute | ObjectType | R | — |
| property | Pset_BuildingCommon.BuildingID | R | — |
| property | Pset_BuildingCommon.IsPermanentID | R | — |
| property | Pset_BuildingUse.MarketCategory | R | patroon `Woongebouw|Kantoorgebouw|Bijgebouw|Gebedsgebouw|Vestigingsgebouw|Bedrijfsgebouw|Doelgroepengebouw|Installatiegebouw|Recreatiegebouw|Toren` |
| property | Pset_BuildingUse.MarketSubCategory | O | patroon `Aanleunwoning|Aireywoning|Ambtswoning|Apotheek|Appartement|Arbeiderswoning|Bejaardenwoning|Bel-etagewoning|Benedenwoning|Berging inpandig|Berging uitpandig|Bioscoop|Boerderij|Bovenwoning|Bungalow|Bunker|Café|Cafetaria|Cellenkantoor|Drive-inwoning|Duplexwoning|Energiecentrale|Fabriek|Fabrieksschoorsteen|Fietsenstalling inpandig|Fietsenstalling uitpandig|Flexibel verhuurkantoor|Fort|Friendswoning|Garage|Garage inpandig|Garage uitpandig|Gemaalgebouw|Gevangenis|Grachtenpand|Hangar|Herenhuis|Hoekwoning|Hoogbouwkantoor|Hotel|Huisartsenpraktijk|Huiskamer|Kantine|Kantoor|Kantoortuin|Kas|Kasteel|Kazerne|Kinderdagverblijf|Klokkentoren|Loft|Loods|Maatschappelijke dienstverlening|Maisonette|Medisch centrum|Molen|Paalwoning|Parkeergarage niet-openbaar|Parkeergarage openbaar|Parkeergarage stalling|Pastorie|Patiowoning|Portiekwoning|Representatief werkpaleis|Restaurant|Retail|Schakelwoning|Schuur|Short stay|Sportgebouw|Stal|Stalling inpandig|Stalling uitpandig|Supermarkt|Techniekruimte|Theater|Tussenwoning|Twee-onder-één-kap|Twee-onder-een-kapwoning|Verkeersruimte|Voertuigenstalling|Vrijstaand|Vrijstaand huis|Vuurtoren|Watertoren|Winkel|Wooneenheid|Woonoppervlak|Woontoren` |
| property | Pset_BuildingCommon.GrossPlannedArea | O | — |

### 9.05b Gebouwinhoud

*File:* [`12-9.05b-Gebouwinhoud.ids`](../ids/12-9.05b-Gebouwinhoud.ids) · *IFC:* IFC4 IFC4X3_ADD2 · *Checks:* #3

*Applies to:* IFCSPATIALZONE / IFCSPACE / IFCZONE with ObjectType=Gebouwinhoud

| Facet | Name | Card. | Value |
|---|---|---|---|
| classification | classificatie Omgevingswet-Ruimten | O | Gebouwinhoud |
| attribute | Name | R | — |
| attribute | ObjectType | R | Gebouwinhoud |
| attribute | Description | R | Bruto Inhoud |

### 9.06a Bouwlaag (voorheen verdieping)

*File:* [`13-9.06a-Bouwlaag-voorheen-verdieping.ids`](../ids/13-9.06a-Bouwlaag-voorheen-verdieping.ids) · *IFC:* IFC4 IFC4X3_ADD2 · *Checks:* #1 #2 #3 #4 #6 #9 #10 #16

*Applies to:* IFCBUILDINGSTOREY

NOTE: Qto nog omwisselen met Bouwlaaginhoud

| Facet | Name | Card. | Value |
|---|---|---|---|
| attribute | ObjectType | R | Bouwlaag |
| attribute | Name | R | patroon `.*(-9 kelder|-8 kelder|-7 kelder|-6 kelder|-5 kelder|-4 kelder|-3 kelder|-2 kelder|-1 kelder|00 begane grond|01 eerste verdieping|02 tweede verdieping|03 derde verdieping|04 vierde verdieping|05 vijfde verdieping|06 zesde verdieping|07 zevende verdieping|08 achtste verdieping|09 negende verdieping|10 tiende verdieping|11 elfde verdieping|12 twaalfde verdieping|13 dertiende verdieping|14 veertiende verdieping|15 vijftiende verdieping|16 zestiende verdieping|17 zeventiende verdieping|18 achttiende verdieping|19 negentiende verdieping|20 twintigste verdieping|21 eenentwintigste verdieping|22 tweeentwintigste verdieping|23 drieentwintigste verdieping|24 vierentwintigste verdieping|25 vijfentwintigste verdieping|26 zesentwintigste verdieping|27 zevenentwintigste verdieping|28 achtentwintigste verdieping|29 negentwintigste verdieping|30 dertigste verdieping|31 eenendertigste verdieping|32 tweeendertigste verdieping|33 drieendertigste verdieping|34 vierendertigste verdieping|35 vijfendertigste verdieping|36 zesendertigste verdieping|37 zevenendertigste verdieping|38 achtendertigste verdieping|39 negendertigste verdieping|40 veertigste verdieping|01 dak|02 dak|03 dak|04 dak|05 dak|06 dak|07 dak|08 dak|09 dak|10 dak|11 dak|12 dak|13 dak|14 dak|15 dak|16 dak|17 dak|18 dak|19 dak|20 dak|21 dak|22 dak|23 dak|24 dak|25 dak|26 dak|27 dak|28 dak|29 dak|30 dak|31 dak|32 dak|33 dak|34 dak|35 dak|36 dak|37 dak|38 dak|39 dak|40 dak|41 dak).*` |


### 9.06b Bouwlaaginhoud (voorheen bouwlaagobject)

*File:* [`14-9.06b-Bouwlaaginhoud-voorheen-bouwlaagobject.ids`](../ids/14-9.06b-Bouwlaaginhoud-voorheen-bouwlaagobject.ids) · *IFC:* IFC4 IFC4X3_ADD2 · *Checks:* #3 #6

*Applies to:* IFCSPATIALZONE / IFCSPACE / IFCZONE with ObjectType=Bouwlaaginhoud

| Facet | Name | Card. | Value |
|---|---|---|---|
| classification | classificatie Omgevingswet-Ruimten | O | Bouwlaaginhoud |
| attribute | Description | R | Bruto Inhoud |
| attribute | Name | R | patroon `.*(-9 kelder|-8 kelder|-7 kelder|-6 kelder|-5 kelder|-4 kelder|-3 kelder|-2 kelder|-1 kelder|00 begane grond|01 eerste verdieping|02 tweede verdieping|03 derde verdieping|04 vierde verdieping|05 vijfde verdieping|06 zesde verdieping|07 zevende verdieping|08 achtste verdieping|09 negende verdieping|10 tiende verdieping|11 elfde verdieping|12 twaalfde verdieping|13 dertiende verdieping|14 veertiende verdieping|15 vijftiende verdieping|16 zestiende verdieping|17 zeventiende verdieping|18 achttiende verdieping|19 negentiende verdieping|20 twintigste verdieping|21 eenentwintigste verdieping|22 tweeentwintigste verdieping|23 drieentwintigste verdieping|24 vierentwintigste verdieping|25 vijfentwintigste verdieping|26 zesentwintigste verdieping|27 zevenentwintigste verdieping|28 achtentwintigste verdieping|29 negentwintigste verdieping|30 dertigste verdieping|31 eenendertigste verdieping|32 tweeendertigste verdieping|33 drieendertigste verdieping|34 vierendertigste verdieping|35 vijfendertigste verdieping|36 zesendertigste verdieping|37 zevenendertigste verdieping|38 achtendertigste verdieping|39 negendertigste verdieping|40 veertigste verdieping|01 dak|02 dak|03 dak|04 dak|05 dak|06 dak|07 dak|08 dak|09 dak|10 dak|11 dak|12 dak|13 dak|14 dak|15 dak|16 dak|17 dak|18 dak|19 dak|20 dak|21 dak|22 dak|23 dak|24 dak|25 dak|26 dak|27 dak|28 dak|29 dak|30 dak|31 dak|32 dak|33 dak|34 dak|35 dak|36 dak|37 dak|38 dak|39 dak|40 dak|41 dak).*` |
| attribute | ObjectPlacement | R | — |
| property | Pset_BuildingStoreyCommon.EntranceLevel | R | — |
| property | Qto_BuildingStoreyBaseQuantities.GrossFloorArea | O | — |
| property | Qto_BuildingStoreyBaseQuantities.GrossHeight | O | — |
| property | Qto_BuildingStoreyBaseQuantities.GrossVolume | O | — |
| property | Qto_BuildingStoreyBaseQuantities.NetFloorArea | O | — |
| property | Qto_BuildingStoreyBaseQuantities.NetHeight | O | — |
| property | Qto_BuildingStoreyBaseQuantities.NetVolume | O | — |


### 9.07 Gebruikseenheid (voorheen eigendom-, en gebruikseenheid)

*File:* [`15-9.07-Gebruikseenheid-voorheen-eigendom-en-gebruikseenheid.ids`](../ids/15-9.07-Gebruikseenheid-voorheen-eigendom-en-gebruikseenheid.ids) · *IFC:* IFC4 IFC4X3_ADD2 · *Checks:* #1 #5

*Applies to:* IFCZONE / IFCSPATIALZONE / IFCSPACE with ObjectType=**Eigendom- en gebruikseenheid** / Gebruikseenheid

| Facet | Name | Card. | Value |
|---|---|---|---|
| classification | classificatie Omgevingswet-Ruimten | O | Gebruikseenheid |
| attribute | Name | R | minLength=1 |
| attribute | Description | R | Bruto Inhoud |

### 9.08 Gebruiksfunctie

*File:* [`16-9.08-Gebruiksfunctie.ids`](../ids/16-9.08-Gebruiksfunctie.ids) · *IFC:* IFC4 IFC4X3_ADD2 · *Checks:* #1 #3 #4 #5 #6 #7 #9 #10 #11 #12 #13 #14 #15 #16 #17

*Applies to:* IFCZONE / IFCSPATIALZONE / IFCSPACE with ObjectType=**Gebruiksfunctie**

| Facet | Name | Card. | Value |
|---|---|---|---|
| classification | classificatie Omgevingswet-Ruimten | O | Gebruiksfunctie |
| attribute | Name | R | patroon `Woonfunctie|Bijeenkomstfunctie|Celfunctie|Gezondheidszorgfunctie|Industriefunctie|Kantoorfunctie|Logiesfunctie|Onderwijsfunctie|Sportfunctie|Winkelfunctie|Overige gebruiksfunctie|Bouwwerk geen gebouw zijnde|Subgebruikfuncties` |
| attribute | Description | R | patroon `Bruto Inhoud|Functioneel Nuttige Inhoud|Gebruiksinhoud|Netto Inhoud|Nuttige inhoud|Programma van Eisen inhoud` |

### 9.09 Nevengebruiksfunctie

*File:* [`17-9.09-Nevengebruiksfunctie.ids`](../ids/17-9.09-Nevengebruiksfunctie.ids) · *IFC:* IFC4X3_ADD2 IFC4 · *Checks:* #1 #4 #5

*Applies to:* IFCSPATIALZONE / IFCSPACE / IFCZONE with ObjectType=**Nevengebruiksfunctie**

| Facet | Name | Card. | Value |
|---|---|---|---|
| attribute | Name | R | patroon `Woonfunctie|Bijeenkomstfunctie|Celfunctie|Gezondheidszorgfunctie|Industriefunctie|Kantoorfunctie|Logiesfunctie|Onderwijsfunctie|Sportfunctie|Winkelfunctie|Overige gebruiksfunctie|Bouwwerk geen gebouw zijnde` |
| attribute | Description | R | patroon `Bruto Inhoud|Functioneel Nuttige Inhoud|Gebruiksinhoud|Netto Inhoud|Nuttige inhoud|Programma van Eisen inhoud` |

### 9.10a Functiegebied

*File:* [`18-9.10a-Functiegebied.ids`](../ids/18-9.10a-Functiegebied.ids) · *IFC:* IFC4 IFC4X3_ADD2 · *Checks:* #9 #10 #11

*Applies to:* IFCSPATIALZONE / IFCSPACE / **IFCZONE** with ObjectType=**Functiegebied**

| Facet | Name | Card. | Value |
|---|---|---|---|
| classification | classificatie Omgevingswet-Ruimten | O | Functiegebied |
| attribute | Name | R | — |
| attribute | Description | R | patroon `Bruto Inhoud|Functioneel Nuttige Inhoud|Gebruiksinhoud|Netto Inhoud|Nuttige inhoud|Programma van Eisen inhoud` |

### 9.10b Verblijfsgebied

*File:* [`19-9.10b-Verblijfsgebied.ids`](../ids/19-9.10b-Verblijfsgebied.ids) · *IFC:* IFC4 IFC4X3_ADD2 · *Checks:* #9 #10 #11 #16 #17

*Applies to:* IFCSPATIALZONE / IFCSPACE / IFCZONE with ObjectType=**Verblijfsgebied**

| Facet | Name | Card. | Value |
|---|---|---|---|
| classification | classificatie Omgevingswet-Ruimten | O | Verblijfsgebied |
| attribute | Name | R | — |
| attribute | Description | R | patroon `Bruto Inhoud|Functioneel Nuttige Inhoud|Gebruiksinhoud|Netto Inhoud|Nuttige inhoud|Programma van Eisen inhoud` |
| property | Pset_SpaceOccupancyRequirements.OccupancyType | R | patroon `matching the pattern Woonfunctie|Bijeenkomstfunctie|Celfunctie|Gezondheidszorgfunctie|Industriefunctie|Kantoorfunctie|Logiesfunctie|Onderwijsfunctie|Sportfunctie|Winkelfunctie|Overige gebruiksfunctie|Bouwwerk geen gebouw zijnde|Subgebruikfuncties` |

### 9.10c Verblijfsgebied met bezettingsgraad

*File:* [`20-9.10c-Verblijfsgebied-met-bezettingsgraad.ids`](../ids/20-9.10c-Verblijfsgebied-met-bezettingsgraad.ids) · *IFC:* IFC4 IFC4X3_ADD2 · *Checks:* #15 #16

*Applies to:* IFCSPATIALZONE / IFCSPACE / IFCZONE with ObjectType=**Verblijfsgebied**

| Facet | Name | Card. | Value |
|---|---|---|---|
| classification | classificatie Omgevingswet-Ruimten | O | Verblijfsgebied |
| attribute | Name | R | — |
| attribute | Description | R | patroon `Bruto Inhoud|Functioneel Nuttige Inhoud|Gebruiksinhoud|Netto Inhoud|Nuttige inhoud|Programma van Eisen inhoud` |
| property | Pset_SpaceOccupancyRequirements.OccupancyNumber | R | — |
| property | Pset_SpaceOccupancyRequirements.OccupancyNumberPeak | R | — |
| property | Pset_SpaceOccupancyRequirements.AreaPerOccupant | R | — |

### 9.10d Gebruiksgebied

*File:* [`21-9.10d-Gebruiksgebied.ids`](../ids/21-9.10d-Gebruiksgebied.ids) · *IFC:* IFC4 IFC4X3_ADD2 · *Checks:* #9 #10 #14 #15

*Applies to:* IFCSPATIALZONE / IFCSPACE / IFCZONE with ObjectType=**Gebruiksgebied**

| Facet | Name | Card. | Value |
|---|---|---|---|
| classification | classificatie Omgevingswet-Ruimten | o | Gebruiksgebied |
| attribute | Name | R | — |
| attribute | Description | R | patroon `Bruto Inhoud|Functioneel Nuttige Inhoud|Gebruiksinhoud|Netto Inhoud|Nuttige inhoud|Programma van Eisen inhoud` |

### 9.10e Bedgebied

*File:* [`22-9.10e-Bedgebied.ids`](../ids/22-9.10e-Bedgebied.ids) · *IFC:* IFC4 IFC4X3_ADD2 · *Checks:* #16

*Applies to:* IFCSPATIALZONE / IFCSPACE / IFCZONE with ObjectType=**Bedgebied**

| Facet | Name | Card. | Value |
|---|---|---|---|
| classification | classificatie Omgevingswet-Ruimten | o | Bedgebied |
| attribute | Name | R | — |
| attribute | Description | R | patroon `Bruto Inhoud|Functioneel Nuttige Inhoud|Gebruiksinhoud|Netto Inhoud|Nuttige inhoud|Programma van Eisen inhoud` |

### 9.10f Restgebied

*File:* [`23-9.10f-Restgebied.ids`](../ids/23-9.10f-Restgebied.ids) · *IFC:* IFC4 IFC4X3_ADD2 · *Checks:* #5 #6

*Applies to:* IFCSPATIALZONE / IFCSPACE / IFCZONE with ObjectType=**Restgebied**

| Facet | Name | Card. | Value |
|---|---|---|---|
| classification | classificatie Omgevingswet-Ruimten | o | Restgebied |
| attribute | Name | R | — |
| attribute | Description | R | patroon `Bruto Inhoud|Functioneel Nuttige Inhoud|Gebruiksinhoud|Netto Inhoud|Nuttige inhoud|Programma van Eisen inhoud` |

### 9.11 Buitengebied

*File:* [`24-9.11-Buitengebied.ids`](../ids/24-9.11-Buitengebied.ids) · *IFC:* IFC4 IFC4X3_ADD2 · *Checks:* #9 #10

*Applies to:* IFCEXTERNALSPATIALELEMENT / IFCZONE / IFCSPATIALZONE / IFCSPACE with ObjectType=Buitengebied

| Facet | Name | Card. | Value |
|---|---|---|---|
| classification | classificatie Omgevingswet-Ruimten | O | Buitengebied |
| attribute | Name | R | — |
| attribute | Description | R | patroon `Bebouwd Terreinvolume|Onbebouwd Terreinvolume|Onderbouwd Terreinvolume|Overbouwd Terreinvolume|Terreinvolume` |
| property | patroon `Pset_.*Common`.IsExternal | R | — |
| property | patroon `Pset_.*Common`.PubliclyAccessible | R | — |
| property | patroon `Pset_.*Common`.HandicapAccessible | R | — |
| property | Pset_SpaceCommon.IsExternal | R | true |

### 9.12a Functieruimte

*File:* [`25-9.12a-Functieruimte.ids`](../ids/25-9.12a-Functieruimte.ids) · *IFC:* IFC4 IFC4X3_ADD2 · *Checks:* #1 #3 #5 #6 #9 #10 #13 #14 #15

*Applies to:* IFCSPACE / IFCZONE with ObjectType=Functieruimte

| Facet | Name | Card. | Value |
|---|---|---|---|
| classification | classificatie Omgevingswet-Ruimten | R | Functieruimte |
| attribute | Name | R | — |
| attribute | Description | R | patroon `Functioneel Nuttige Inhoud|Netto Inhoud|Nuttige inhoud|Programma van Eisen inhoud` |

### 9.12b Verblijfsruimte

*File:* [`26-9.12b-Verblijfsruimte.ids`](../ids/26-9.12b-Verblijfsruimte.ids) · *IFC:* IFC4 IFC4X3_ADD2 · *Checks:* #1 #3 #5 #6 #9 #10 #13 #14 #15 #17

*Applies to:* IFCSPACE / IFCZONE with ObjectType=Verblijfsruimte

| Facet | Name | Card. | Value |
|---|---|---|---|
| classification | classificatie Omgevingswet-Ruimten | O | Verblijfsruimte |
| attribute | Name | R | — |
| attribute | Description | R | patroon `Functioneel Nuttige Inhoud|Netto Inhoud|Nuttige inhoud|Programma van Eisen inhoud` |

### 9.12c Bedruimte

*File:* [`27-9.12c-Bedruimte.ids`](../ids/27-9.12c-Bedruimte.ids) · *IFC:* IFC4 IFC4X3_ADD2 · *Checks:* #16

*Applies to:* IFCSPACE / IFCZONE with ObjectType=Bedruimte

| Facet | Name | Card. | Value |
|---|---|---|---|
| classification | classificatie Omgevingswet-Ruimten | O | Bedruimte |
| attribute | Name | R | — |
| attribute | Description | R | patroon `Functioneel Nuttige Inhoud|Netto Inhoud|Nuttige inhoud|Programma van Eisen inhoud` |

### 9.12d Restruimte

*File:* [`28-9.12d-Restruimte.ids`](../ids/28-9.12d-Restruimte.ids) · *IFC:* IFC4 IFC4X3_ADD2 · *Checks:* #5 #6

*Applies to:* IFCSPACE / IFCZONE with ObjectType=Bedruimte

| Facet | Name | Card. | Value |
|---|---|---|---|
| classification | classificatie Omgevingswet-Ruimten | R | Restruimte |
| attribute | Name | R | — |
| attribute | Description | R | patroon `Functioneel Nuttige Inhoud|Netto Inhoud|Nuttige inhoud|Programma van Eisen inhoud` |

### 9.13 Buitenruimte

*File:* [`29-9.13-Buitenruimte.ids`](../ids/29-9.13-Buitenruimte.ids) · *IFC:* IFC4 IFC4X3_ADD2 · *Checks:* #9 #10

*Applies to:* IFCEXTERNALSPATIALELEMENT / IFCZONE / IFCSPACE with ObjectType=Buitenruimte

| Facet | Name | Card. | Value |
|---|---|---|---|
| classification | classificatie Omgevingswet-Ruimten | R | Buitenruimte |
| attribute | Name | R | — |
| attribute | Description | R | patroon `Bebouwd Terreinvolume|Functioneel Nuttige Inhoud|Netto Inhoud|Nuttige inhoud|Onbebouwd Terreinvolume|Onderbouwd Terreinvolume|Overbouwd Terreinvolume|Programma van Eisen inhoud|Terreinvolume` |
| property | Pset_SpaceCommon.IsExternal | R | — |
| property | patroon `Pset_.*Common`.HandicapAccessible | R | — |
| property | patroon `Pset_.*Common`.PubliclyAccessible | R | — |

### 9.16a Brandcompartiment

*File:* [`30-9.16a-Brandcompartiment.ids`](../ids/30-9.16a-Brandcompartiment.ids) · *IFC:* IFC4 IFC4X3_ADD2 · *Checks:* #7 #8 #14 #15

*Applies to:* IFCZONE / IFCSPATIALZONE with ObjectType=Brandcompartiment

| Facet | Name | Card. | Value |
|---|---|---|---|
| classification | classificatie Omgevingswet-Ruimten | O | Brandcompartiment |
| attribute | Name | R | — |
| attribute | Description | R | patroon `Bruto Inhoud|Gebruiksinhoud|Netto Inhoud` |
| property | Pset_SpaceFireSafetyRequirements.FireRiskFactor | O | — |
| property | Pset_SpaceFireSafetyRequirements.FireExit | O | — |
| property | Pset_SpaceFireSafetyRequirements.FlammableStorage | O | — |
| property | Pset_SpaceFireSafetyRequirements.SprinklerProtection | O | — |
| property | Pset_SpaceFireSafetyRequirements.AirPressurization | O | — |

### 9.16b Subbrandcompartiment

*File:* [`31-9.16b-Subbrandcompartiment.ids`](../ids/31-9.16b-Subbrandcompartiment.ids) · *IFC:* IFC4 IFC4X3_ADD2 · *Checks:* #15

*Applies to:* IFCZONE / IFCSPATIALZONE with ObjectType=Subbrandcompartiment

| Facet | Name | Card. | Value |
|---|---|---|---|
| classification | classificatie Omgevingswet-Ruimten | O | Subbrandcompartiment |
| attribute | Name | R | — |
| attribute | Description | R | patroon `Bruto Inhoud|Gebruiksinhoud|Netto Inhoud` |
| property | Pset_SpaceFireSafetyRequirements.FireRiskFactor | O | — |
| property | Pset_SpaceFireSafetyRequirements.FireExit | O | — |
| property | Pset_SpaceFireSafetyRequirements.FlammableStorage | O | — |
| property | Pset_SpaceFireSafetyRequirements.SprinklerProtection | O | — |
| property | Pset_SpaceFireSafetyRequirements.AirPressurization | O | — |

### 9.16c Vluchtroute

*File:* [`32-9.16c-Vluchtroute.ids`](../ids/32-9.16c-Vluchtroute.ids) · *IFC:* IFC4 IFC4X3_ADD2 · *Checks:* #14 #15 #16

*Applies to:* IFCZONE / IFCSPATIALZONE with ObjectType=Vluchtroute

| Facet | Name | Card. | Value |
|---|---|---|---|
| classification | classificatie Omgevingswet-Ruimten | R | Vluchtroute |
| attribute | Name | R | — |
| attribute | Description | R | patroon `Bruto Inhoud|Gebruiksinhoud|Netto Inhoud` |
| property | Pset_SpaceFireSafetyRequirements.FireRiskFactor | O | — |
| property | Pset_SpaceFireSafetyRequirements.FireExit | R | true |
| property | Pset_SpaceFireSafetyRequirements.FlammableStorage | O | — |
| property | Pset_SpaceFireSafetyRequirements.SprinklerProtection | O | — |
| property | Pset_SpaceFireSafetyRequirements.AirPressurization | O | — |

### 9.17 Tarra Ruimte

*File:* [`33-9.17-Tarra-Ruimte.ids`](../ids/33-9.17-Tarra-Ruimte.ids) · *IFC:* IFC4 IFC4X3_ADD2 · *Checks:* #5 #6 #15

*Applies to:* IFCSPATIALZONE / IFCZONE with ObjectType=Tarra Ruimte

| Facet | Name | Card. | Value |
|---|---|---|---|
| classification | classificatie Omgevingswet-Ruimten | O | TarraRuimte |
| attribute | Name | R | — |
| attribute | Description | R | Tarra Inhoud |

### 9.18a Fysieke elementen IfcBeam

*File:* [`34-9.18a-Fysieke-elementen-IfcBeam.ids`](../ids/34-9.18a-Fysieke-elementen-IfcBeam.ids) · *IFC:* IFC4 IFC4X3_ADD2 · *Checks:* —

*Applies to:* IFCBEAM

| Facet | Name | Card. | Value |
|---|---|---|---|
| property | Pset_BeamCommon.FireRating | O | — |
| property | Pset_BeamCommon.IsExternal | O | — |
| property | Pset_BeamCommon.LoadBearing | R | — |
| property | Pset_BeamCommon.ThermalTransmittance | O | — |

### 9.18b Fysieke elementen IfcColumn

*File:* [`35-9.18b-Fysieke-elementen-IfcColumn.ids`](../ids/35-9.18b-Fysieke-elementen-IfcColumn.ids) · *IFC:* IFC4 IFC4X3_ADD2 · *Checks:* #7 #8

*Applies to:* IFCCOLUMN

| Facet | Name | Card. | Value |
|---|---|---|---|
| property | Pset_ColumnCommon.FireRating | O | — |
| property | Pset_ColumnCommon.IsExternal | O | — |
| property | Pset_ColumnCommon.LoadBearing | R | — |
| property | Pset_ColumnCommon.ThermalTransmittance | O | — |

### 9.18c Fysieke elementen IfcCovering.INSULATION

*File:* [`36-9.18c-Fysieke-elementen-IfcCovering.INSULATION.ids`](../ids/36-9.18c-Fysieke-elementen-IfcCovering.INSULATION.ids) · *IFC:* IFC4 IFC4X3_ADD2 · *Checks:* #11

*Applies to:* IFCCOVERING.INSULATION

| Facet | Name | Card. | Value |
|---|---|---|---|
| property | Pset_CoveringCommon.AcousticRating | O | — |
| property | Pset_CoveringCommon.Combustible | R | — |
| property | Pset_CoveringCommon.FireRating | R | — |
| property | Pset_CoveringCommon.FlammabilityRating | R | — |
| property | Pset_CoveringCommon.IsExternal | O | — |
| property | Pset_CoveringCommon.SurfaceSpreadOfFlame | R | — |
| property | Pset_CoveringCommon.ThermalTransmittance | O | — |

### 9.18d Fysieke elementen IfcCurtainWall

*File:* [`37-9.18d-Fysieke-elementen-IfcCurtainWall.ids`](../ids/37-9.18d-Fysieke-elementen-IfcCurtainWall.ids) · *IFC:* IFC4 IFC4X3_ADD2 · *Checks:* #7 #8 #11 #12 #17

*Applies to:* IFCSLAB

| Facet | Name | Card. | Value |
|---|---|---|---|
| property | Pset_CurtainWallCommon.AcousticRating | O | — |
| property | Pset_CurtainWallCommon.Combustible | O | — |
| property | Pset_CurtainWallCommon.FireRating | O | — |
| property | Pset_CurtainWallCommon.IsExternal | O | — |
| property | Pset_CurtainWallCommon.SurfaceSpreadOfFlame | O | — |
| property | Pset_CurtainWallCommon.ThermalTransmittance | O | — |

### 9.18e Fysieke elementen IfcDoor

*File:* [`38-9.18e-Fysieke-elementen-IfcDoor.ids`](../ids/38-9.18e-Fysieke-elementen-IfcDoor.ids) · *IFC:* IFC4 IFC4X3_ADD2 · *Checks:* #7 #8 #12 #14 #15 #16 #17

*Applies to:* IFCDOOR

| Facet | Name | Card. | Value |
|---|---|---|---|
| property | Pset_DoorCommon.AcousticRating | O | — |
| property | Pset_DoorCommon.FireExit | R | — |
| property | Pset_DoorCommon.FireRating | R | — |
| property | Pset_DoorCommon.HandicapAccessible | O | — |
| property | Pset_DoorCommon.IsExternal | O | — |
| property | Pset_DoorCommon.SecurityRating | O | — |
| property | Pset_DoorCommon.SelfClosing | R | — |
| property | Pset_DoorCommon.SmokeStop | R | — |

### 9.18f Fysieke elementen IfcSensor

*File:* [`39-9.18f-Fysieke-elementen-IfcSensor.ids`](../ids/39-9.18f-Fysieke-elementen-IfcSensor.ids) · *IFC:* IFC4 IFC4X3_ADD2 · *Checks:* —

*Applies to:* IFCSENSOR.SMOKESENSOR

| Facet | Name | Card. | Value |
|---|---|---|---|
| attribute | ObjectType | R | Rookmelder |

### 9.18g Fysieke elementen IfcSlab

*File:* [`40-9.18g-Fysieke-elementen-IfcSlab.ids`](../ids/40-9.18g-Fysieke-elementen-IfcSlab.ids) · *IFC:* IFC4 IFC4X3_ADD2 · *Checks:* #7 #8 #9 #10 #11 #13 #14 #15 #16

*Applies to:* IFCSLAB

| Facet | Name | Card. | Value |
|---|---|---|---|
| property | Pset_SlabCommon.AcousticRating | O | — |
| property | Pset_SlabCommon.Combustible | O | — |
| property | Pset_SlabCommon.FireRating | O | — |
| property | Pset_SlabCommon.IsExternal | O | — |
| property | Pset_SlabCommon.LoadBearing | R | — |
| property | Pset_SlabCommon.SurfaceSpreadOfFlame | O | — |
| property | Pset_SlabCommon.Thermal Transmittance [ThermalTransmittance] | O | — |

### 9.18h Fysieke elementen IfcWall

*File:* [`41-9.18h-Fysieke-elementen-IfcWall.ids`](../ids/41-9.18h-Fysieke-elementen-IfcWall.ids) · *IFC:* IFC4 IFC4X3_ADD2 · *Checks:* #7 #8 #9 #11 #13 #16 #17

*Applies to:* IFCWALL

| Facet | Name | Card. | Value |
|---|---|---|---|
| property | Pset_WallCommon.AcousticRating | O | — |
| property | Pset_WallCommon.Combustible | O | — |
| property | Pset_WallCommon.Compartmentation | O | — |
| property | Pset_WallCommon.FireRating | O | — |
| property | Pset_WallCommon.IsExternal | O | — |
| property | Pset_WallCommon.LoadBearing | R | — |
| property | Pset_WallCommon.SurfaceSpreadOfFlame | O | — |
| property | Pset_WallCommon.ThermalTransmittance | O | — |

### 9.18i Fysieke elementen Ifcwindow

*File:* [`42-9.18i-Fysieke-elementen-Ifcwindow.ids`](../ids/42-9.18i-Fysieke-elementen-Ifcwindow.ids) · *IFC:* IFC4 IFC4X3_ADD2 · *Checks:* #12 #17

*Applies to:* IFCWINDOW

| Facet | Name | Card. | Value |
|---|---|---|---|
| property | Pset_WindowCommon.AcousticRating | O | — |
| property | Pset_WindowCommon.FireExit | R | — |
| property | Pset_WindowCommon.FireRating | R | — |
| property | Pset_WindowCommon.GlazingAreaFraction | O | — |
| property | Pset_WindowCommon.IsExternal | R | — |
| property | Pset_WindowCommon.SecurityRating | O | — |
| property | Pset_WindowCommon.SmokeStop | R | — |
| property | Pset_WindowCommon.ThermalTransmittance | O | — |
