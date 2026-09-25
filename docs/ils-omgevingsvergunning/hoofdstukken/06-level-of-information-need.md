# Level of Information Need

Het Level of Information Need (LOIN, ISO 7817-1:2024) legt per informatiebehoefte vast welke **alfanumerieke informatie**, **geometrie** en **documentatie** nodig is. In deze ILS is het LOIN opgebouwd uit twee delen:

1. **Alfanumeriek** — machineleesbaar vastgelegd in 42 IDS-deelspecificaties (IDS 1.0), afgeleid van de *ILS voor Ruimten in de Omgevingswet* (v0.95). Hieronder per specificatie samengevat.
2. **Geometrisch** — eisen aan de vorm en kwaliteit van de geometrie, die IDS niet kan toetsen. Zie [Geometrische eisen](#loin-geometrie) hieronder en [Geometrische controle](#geometrie).
3. **Documentatie** — aanvullende bestanden conform de stanaard indieningsvereiste (tekeningen PDF/A, rapportages), zie [Informatieproductiestandaard](#standaard).

## LOIN per informatiebehoefte (samenvatting)

| Aspect | Invulling |
|---|---|
| Doel | Geautomatiseerd toetsen van de aanvraag aan 17 checks (OPA en TBA) |
| Mijlpaal | Vooroverleg, aanvraag omgevingsplanactiviteit, aanvraag technische bouwactiviteit |
| Actoren | Aanvrager/modelleur levert, gemeente (vergunningverlener) toetst |
| Objecten | Ruimtelijke objecten (IfcSpace, IfcSpatialZone, IfcZone), gebouw, bouwlagen, fysieke elementen (IfcWall, IfcDoor)) |
| Alfanumeriek | IDS-deelspecificaties 01–42 |
| Geometrie | Volumetrische (solide) ruimten, georeferentie RD/NAP, detailniveau conform tabel hieronder |
| Documentatie | IFC (STEP), PDF/A-tekeningen afgeleid uit het model, IDS-validatierapport (BCF of HTML) |

## Geometrische eisen

| Eis | Toelichting | Nodig voor checks |
|---|---|---|
| G1 Solide geometrie | Ruimten en zones zijn gesloten volumes (geen losse vlakken), zodat oppervlakte en inhoud herberekend kunnen worden | #2 #3 #5 #7 #9 #10 #14–#17 |
| G2 Georeferentie | IfcMapConversion + IfcProjectedCRS, EPSG:28992 (RD) / EPSG:7415 (RD+NAP), eenheden in meters | #1–#6 |
| G3 Hoogteligging | Hoogte ten opzichte van NAP; peil en bouwlaaghoogten consistent tussen aspectmodellen | #2 #4 #6 #10 |
| G4 Geen doublures | Geen dubbele of overlappende objecten van hetzelfde type (bijv. vloer opgeknipt bij export telt niet dubbel) | #3 #5 #7 #13 |
| G5 Hoeveelheden meegeleverd | Quantity sets (Qto_…) door de CAD-software berekend en geëxporteerd; de ontvanger (Gemeente) herberekent ter controle | #3 #5 #7 #13 #15 #17 |
| G6 Meetmethode | Oppervlakten en inhouden volgens NEN 2580; afwijkingen (schuine daken, dakkapellen) expliciet modelleren | #3 #5 #7 #17 |

## LOIN per deelspecificatie (alfanumeriek)

Per specificatie: op welke objecten de eis van toepassing is (applicability) en welke informatie verplicht (**R**), optioneel (**O**) of verboden (**X**) is.

### 9 ILS voor Ruimten in de omgevingswet

*Bestand:* [`01-9-ILS-voor-Ruimten-in-de-omgevingswet.ids`](ids/01-9-ILS-voor-Ruimten-in-de-omgevingswet.ids) · *IFC:* IFC4 IFC4X3_ADD2 · *Checks:* #1 #2 #3 #4 #5 #6 #7 #8 #9 #10 #11 #12 #13 #14 #15 #16 #17

*Van toepassing op:* IFCSPATIALZONE / IFCSPACE / IFCEXTERNALSPATIALELEMENT

Let op dit is geen gebruikelijke check, deze check kijkt of elk in het model aanwezig object ook een eigen geometrie geeft voor deze onderdelen (IfcZone heeft geen eigen geometrie omdat het een relatie object is)

| Facet | Naam | Card. | Waarde |
|---|---|---|---|
| attribute | ObjectPlacement | R | — |
| attribute | Representation | R | — |

### 9.01a Georeferentie

*Bestand:* [`02-9.01a-Georeferentie.ids`](ids/02-9.01a-Georeferentie.ids) · *IFC:* IFC4 IFC4X3_ADD2 · *Checks:* #1 #2 #3 #5 #7 #10 #17

*Van toepassing op:* IFCMAPCONVERSION

| Facet | Naam | Card. | Waarde |
|---|---|---|---|
| attribute | Eastings | R | — |
| attribute | Northings | R | — |
| attribute | OrthogonalHeight | R | — |
| attribute | XAxisAbscissa | R | — |
| attribute | XAxisOrdinate | R | — |
| attribute | Scale | R | — |

### 9.01b Coördinatenstelsel

*Bestand:* [`03-9.01b-Coordinatenstelsel.ids`](ids/03-9.01b-Coordinatenstelsel.ids) · *IFC:* IFC4 IFC4X3_ADD2 · *Checks:* #1 #2 #3 #5 #7 #10 #17

*Van toepassing op:* IFCPROJECTEDCRS

| Facet | Naam | Card. | Waarde |
|---|---|---|---|
| attribute | Name | R | EPSG:7415 \| EPSG:28992 |

### 9.01c Projectadres (IFC4X3_ADD2)

*Bestand:* [`04-9.01c-Projectadres-IFC4X3-ADD2.ids`](ids/04-9.01c-Projectadres-IFC4X3-ADD2.ids) · *IFC:* IFC4X3_ADD2 · *Checks:* #1 #2 #3 #4 #5 #6

*Van toepassing op:* IFCSITE / IFCBUILDING

Adres is indicatief, Georeferentie wordtgebruikt voor het uitvoeren van de omgeving controles. 

| Facet | Naam | Card. | Waarde |
|---|---|---|---|
| property | Pset_Address.AddressLines | R | — |
| property | Pset_Address.Country | R | NL |
| property | Pset_Address.PostalCode | R | — |
| property | Pset_Address.Town | R | — |

### 9.01d Perceeladres (IFC4)

*Bestand:* [`05-9.01d-Perceeladres-IFC4.ids`](ids/05-9.01d-Perceeladres-IFC4.ids) · *IFC:* IFC4 · *Checks:* #1 #2 #3 #4 #5 #6

*Van toepassing op:* IFCSITE

Adres is indicatief, Georeferentie wordtgebruikt voor het uitvoeren van de omgeving controles. 

| Facet | Naam | Card. | Waarde |
|---|---|---|---|
| attribute | SiteAddress | R | — |

### 9.01e Gebouwadres (IFC4)

*Bestand:* [`06-9.01e-Gebouwadres-IFC4.ids`](ids/06-9.01e-Gebouwadres-IFC4.ids) · *IFC:* IFC4 · *Checks:* #1 #2 #3 #4 #5 #6

*Van toepassing op:* IFCBUILDING

Adres is indicatief, Georeferentie wordtgebruikt voor het uitvoeren van de omgeving controles. 

| Facet | Naam | Card. | Waarde |
|---|---|---|---|
| attribute | BuildingAddress | R | — |

### 9.02 Project

*Bestand:* [`07-9.02-Project.ids`](ids/07-9.02-Project.ids) · *IFC:* IFC4 IFC4X3_ADD2 · *Checks:* #1 #2 #3 #4 #5 #6 #7 #8 #9 #10 #11 #12 #13 #14 #15 #16 #17

*Van toepassing op:* IFCPROJECT

| Facet | Naam | Card. | Waarde |
|---|---|---|---|
| attribute | Name | R | — |
| attribute | Description | R | — |
| attribute | Phase | O | patroon `01 Initiatief/haalbaarheid|02 Projectdefinitie|03 Structuurontwerp|04 Voorontwerp|05 Definitief ontwerp|06 Technisch ontwerp/Bestek|07 Prijs- en Contractvorming|07 Prijs- en contractvorming|08 Uitvoering - Uitvoeringsgereed Ontwerp|09 Uitvoering - Directievoering|10 Gebruik/Exploitatie|1. Initiatief|1.1 Iniatief|INI|1.2 Haalbaarheid|HBH|1.3 Projectdefinitie|PD|2. Ontwerp|2.1 Structuurontwerp|SO|2.2 Voorontwerp|VO|2.3 Definitief Ontwerp|DO|2.4 Omgevingsvergunning|OV|3. Engineering|3.1 Technisch Ontwerp|TO|3.2 Uitvoeringsgereed Ontwerp|UO|4. Realisatie|4.1 Uitvoering|UV|4.2 Oplevering & Overdracht|OO|4.3 Onderhoudstermijn|5. Gebruik` |
| attribute | UnitsInContext | R | — |
| property | Pset_ProjectCommon.ProjectType | O | NEWBUILD \| MODIFICATION \| OPERATIONMAINTENANCE \| RENOVATION \| REPAIR |
| property | Pset_ProjectCommon.ProjectInvestmentEstimate | O | — |

### 9.03a Perceel

*Bestand:* [`08-9.03a-Perceel.ids`](ids/08-9.03a-Perceel.ids) · *IFC:* IFC4X3_ADD2 IFC4 · *Checks:* #3 #10 #14 #17

*Van toepassing op:* IFCSITE

| Facet | Naam | Card. | Waarde |
|---|---|---|---|
| attribute | Name | R | — |
| attribute | ObjectType | R | Perceel |
| attribute | ObjectPlacement | R | — |
| property | Pset_LandRegistration.IsPermanentID | R | true |
| property | Pset_LandRegistration.LandID | O | — |
| property | Pset_LandRegistration.LandTitleID | O | — |

### 9.03b Bouwwerkperceel

*Bestand:* [`09-9.03b-Bouwwerkperceel.ids`](ids/09-9.03b-Bouwwerkperceel.ids) · *IFC:* IFC4 IFC4X3_ADD2 · *Checks:* #1 #2 #3 #5 #6 #7 #17

*Van toepassing op:* IFCSPATIALZONE / IFCSPACE / IFCZONE met ObjectType=Bouwwerkperceel

| Facet | Naam | Card. | Waarde |
|---|---|---|---|
| classification | classificatie Omgevingswet-Ruimten | O | Bouwwerkperceel |
| attribute | Name | R | — |
| attribute | Description | R | Terreinvolume |

### 9.04 Kadastraal Perceel

*Bestand:* [`10-9.04-Kadastraal-Perceel.ids`](ids/10-9.04-Kadastraal-Perceel.ids) · *IFC:* IFC4X3_ADD2 IFC4 · *Checks:* #1 #2 #3 #5 #6 #7 #11 #12 #17

*Van toepassing op:* IFCSPATIALZONE / IFCSPACE / IFCZONE met ObjectType=Kadastraal perceel

| Facet | Naam | Card. | Waarde |
|---|---|---|---|
| classification | classificatie Omgevingswet-Ruimten | O | Kadastraalperceel |
| attribute | Name | R | — |
| attribute | Description | R | Terreinvolume |

### 9.05a Gebouw

*Bestand:* [`11-9.05a-Gebouw.ids`](ids/11-9.05a-Gebouw.ids) · *IFC:* IFC4 IFC4X3_ADD2 · *Checks:* #3 #4 #17

*Van toepassing op:* IFCBUILDING

| Facet | Naam | Card. | Waarde |
|---|---|---|---|
| attribute | Name | R | — |
| attribute | ObjectType | R | — |
| property | Pset_BuildingCommon.BuildingID | R | — |
| property | Pset_BuildingCommon.IsPermanentID | R | — |
| property | Pset_BuildingUse.MarketCategory | R | patroon `Woongebouw|Kantoorgebouw|Bijgebouw|Gebedsgebouw|Vestigingsgebouw|Bedrijfsgebouw|Doelgroepengebouw|Installatiegebouw|Recreatiegebouw|Toren` |
| property | Pset_BuildingUse.MarketSubCategory | O | patroon `Aanleunwoning|Aireywoning|Ambtswoning|Apotheek|Appartement|Arbeiderswoning|Bejaardenwoning|Bel-etagewoning|Benedenwoning|Berging inpandig|Berging uitpandig|Bioscoop|Boerderij|Bovenwoning|Bungalow|Bunker|Café|Cafetaria|Cellenkantoor|Drive-inwoning|Duplexwoning|Energiecentrale|Fabriek|Fabrieksschoorsteen|Fietsenstalling inpandig|Fietsenstalling uitpandig|Flexibel verhuurkantoor|Fort|Friendswoning|Garage|Garage inpandig|Garage uitpandig|Gemaalgebouw|Gevangenis|Grachtenpand|Hangar|Herenhuis|Hoekwoning|Hoogbouwkantoor|Hotel|Huisartsenpraktijk|Huiskamer|Kantine|Kantoor|Kantoortuin|Kas|Kasteel|Kazerne|Kinderdagverblijf|Klokkentoren|Loft|Loods|Maatschappelijke dienstverlening|Maisonette|Medisch centrum|Molen|Paalwoning|Parkeergarage niet-openbaar|Parkeergarage openbaar|Parkeergarage stalling|Pastorie|Patiowoning|Portiekwoning|Representatief werkpaleis|Restaurant|Retail|Schakelwoning|Schuur|Short stay|Sportgebouw|Stal|Stalling inpandig|Stalling uitpandig|Supermarkt|Techniekruimte|Theater|Tussenwoning|Twee-onder-één-kap|Twee-onder-een-kapwoning|Verkeersruimte|Voertuigenstalling|Vrijstaand|Vrijstaand huis|Vuurtoren|Watertoren|Winkel|Wooneenheid|Woonoppervlak|Woontoren` |
| property | Pset_BuildingCommon.GrossPlannedArea | O | — |

### 9.05b Gebouwinhoud

*Bestand:* [`12-9.05b-Gebouwinhoud.ids`](ids/12-9.05b-Gebouwinhoud.ids) · *IFC:* IFC4 IFC4X3_ADD2 · *Checks:* #3

*Van toepassing op:* IFCSPATIALZONE / IFCSPACE / IFCZONE met ObjectType=Gebouwinhoud

| Facet | Naam | Card. | Waarde |
|---|---|---|---|
| classification | classificatie Omgevingswet-Ruimten | O | Gebouwinhoud |
| attribute | Name | R | — |
| attribute | ObjectType | R | Gebouwinhoud |
| attribute | Description | R | Bruto Inhoud |

### 9.06a Bouwlaag (voorheen verdieping)

*Bestand:* [`13-9.06a-Bouwlaag-voorheen-verdieping.ids`](ids/13-9.06a-Bouwlaag-voorheen-verdieping.ids) · *IFC:* IFC4 IFC4X3_ADD2 · *Checks:* #1 #2 #3 #4 #6 #9 #10 #16

*Van toepassing op:* IFCBUILDINGSTOREY

NOTE: Qto nog omwisselen met Bouwlaaginhoud

| Facet | Naam | Card. | Waarde |
|---|---|---|---|
| attribute | ObjectType | R | Bouwlaag |
| attribute | Name | R | patroon `.*(-9 kelder|-8 kelder|-7 kelder|-6 kelder|-5 kelder|-4 kelder|-3 kelder|-2 kelder|-1 kelder|00 begane grond|01 eerste verdieping|02 tweede verdieping|03 derde verdieping|04 vierde verdieping|05 vijfde verdieping|06 zesde verdieping|07 zevende verdieping|08 achtste verdieping|09 negende verdieping|10 tiende verdieping|11 elfde verdieping|12 twaalfde verdieping|13 dertiende verdieping|14 veertiende verdieping|15 vijftiende verdieping|16 zestiende verdieping|17 zeventiende verdieping|18 achttiende verdieping|19 negentiende verdieping|20 twintigste verdieping|21 eenentwintigste verdieping|22 tweeentwintigste verdieping|23 drieentwintigste verdieping|24 vierentwintigste verdieping|25 vijfentwintigste verdieping|26 zesentwintigste verdieping|27 zevenentwintigste verdieping|28 achtentwintigste verdieping|29 negentwintigste verdieping|30 dertigste verdieping|31 eenendertigste verdieping|32 tweeendertigste verdieping|33 drieendertigste verdieping|34 vierendertigste verdieping|35 vijfendertigste verdieping|36 zesendertigste verdieping|37 zevenendertigste verdieping|38 achtendertigste verdieping|39 negendertigste verdieping|40 veertigste verdieping|01 dak|02 dak|03 dak|04 dak|05 dak|06 dak|07 dak|08 dak|09 dak|10 dak|11 dak|12 dak|13 dak|14 dak|15 dak|16 dak|17 dak|18 dak|19 dak|20 dak|21 dak|22 dak|23 dak|24 dak|25 dak|26 dak|27 dak|28 dak|29 dak|30 dak|31 dak|32 dak|33 dak|34 dak|35 dak|36 dak|37 dak|38 dak|39 dak|40 dak|41 dak).*` |


### 9.06b Bouwlaaginhoud (voorheen bouwlaagobject)

*Bestand:* [`14-9.06b-Bouwlaaginhoud-voorheen-bouwlaagobject.ids`](ids/14-9.06b-Bouwlaaginhoud-voorheen-bouwlaagobject.ids) · *IFC:* IFC4 IFC4X3_ADD2 · *Checks:* #3 #6

*Van toepassing op:* IFCSPATIALZONE / IFCSPACE / IFCZONE met ObjectType=Bouwlaaginhoud

| Facet | Naam | Card. | Waarde |
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

*Bestand:* [`15-9.07-Gebruikseenheid-voorheen-eigendom-en-gebruikseenheid.ids`](ids/15-9.07-Gebruikseenheid-voorheen-eigendom-en-gebruikseenheid.ids) · *IFC:* IFC4 IFC4X3_ADD2 · *Checks:* #1 #5

*Van toepassing op:* IFCZONE / IFCSPATIALZONE / IFCSPACE met ObjectType=**Eigendom- en gebruikseenheid** / Gebruikseenheid

| Facet | Naam | Card. | Waarde |
|---|---|---|---|
| classification | classificatie Omgevingswet-Ruimten | O | Gebruikseenheid |
| attribute | Name | R | minLength=1 |
| attribute | Description | R | Bruto Inhoud |

### 9.08 Gebruiksfunctie

*Bestand:* [`16-9.08-Gebruiksfunctie.ids`](ids/16-9.08-Gebruiksfunctie.ids) · *IFC:* IFC4 IFC4X3_ADD2 · *Checks:* #1 #3 #4 #5 #6 #7 #9 #10 #11 #12 #13 #14 #15 #16 #17

*Van toepassing op:* IFCZONE / IFCSPATIALZONE / IFCSPACE met ObjectType=**Gebruiksfunctie**

| Facet | Naam | Card. | Waarde |
|---|---|---|---|
| classification | classificatie Omgevingswet-Ruimten | O | Gebruiksfunctie |
| attribute | Name | R | patroon `Woonfunctie|Bijeenkomstfunctie|Celfunctie|Gezondheidszorgfunctie|Industriefunctie|Kantoorfunctie|Logiesfunctie|Onderwijsfunctie|Sportfunctie|Winkelfunctie|Overige gebruiksfunctie|Bouwwerk geen gebouw zijnde|Subgebruikfuncties` |
| attribute | Description | R | patroon `Bruto Inhoud|Functioneel Nuttige Inhoud|Gebruiksinhoud|Netto Inhoud|Nuttige inhoud|Programma van Eisen inhoud` |

### 9.09 Nevengebruiksfunctie

*Bestand:* [`17-9.09-Nevengebruiksfunctie.ids`](ids/17-9.09-Nevengebruiksfunctie.ids) · *IFC:* IFC4X3_ADD2 IFC4 · *Checks:* #1 #4 #5

*Van toepassing op:* IFCSPATIALZONE / IFCSPACE / IFCZONE met ObjectType=**Nevengebruiksfunctie**

| Facet | Naam | Card. | Waarde |
|---|---|---|---|
| attribute | Name | R | patroon `Woonfunctie|Bijeenkomstfunctie|Celfunctie|Gezondheidszorgfunctie|Industriefunctie|Kantoorfunctie|Logiesfunctie|Onderwijsfunctie|Sportfunctie|Winkelfunctie|Overige gebruiksfunctie|Bouwwerk geen gebouw zijnde` |
| attribute | Description | R | patroon `Bruto Inhoud|Functioneel Nuttige Inhoud|Gebruiksinhoud|Netto Inhoud|Nuttige inhoud|Programma van Eisen inhoud` |

### 9.10a Functiegebied

*Bestand:* [`18-9.10a-Functiegebied.ids`](ids/18-9.10a-Functiegebied.ids) · *IFC:* IFC4 IFC4X3_ADD2 · *Checks:* #9 #10 #11

*Van toepassing op:* IFCSPATIALZONE / IFCSPACE / **IFCZONE** met ObjectType=**Functiegebied**

| Facet | Naam | Card. | Waarde |
|---|---|---|---|
| classification | classificatie Omgevingswet-Ruimten | O | Functiegebied |
| attribute | Name | R | — |
| attribute | Description | R | patroon `Bruto Inhoud|Functioneel Nuttige Inhoud|Gebruiksinhoud|Netto Inhoud|Nuttige inhoud|Programma van Eisen inhoud` |

### 9.10b Verblijfsgebied

*Bestand:* [`19-9.10b-Verblijfsgebied.ids`](ids/19-9.10b-Verblijfsgebied.ids) · *IFC:* IFC4 IFC4X3_ADD2 · *Checks:* #9 #10 #11 #16 #17

*Van toepassing op:* IFCSPATIALZONE / IFCSPACE / IFCZONE met ObjectType=**Verblijfsgebied**

| Facet | Naam | Card. | Waarde |
|---|---|---|---|
| classification | classificatie Omgevingswet-Ruimten | O | Verblijfsgebied |
| attribute | Name | R | — |
| attribute | Description | R | patroon `Bruto Inhoud|Functioneel Nuttige Inhoud|Gebruiksinhoud|Netto Inhoud|Nuttige inhoud|Programma van Eisen inhoud` |
| property | Pset_SpaceOccupancyRequirements.OccupancyType | R | patroon `matching the pattern Woonfunctie|Bijeenkomstfunctie|Celfunctie|Gezondheidszorgfunctie|Industriefunctie|Kantoorfunctie|Logiesfunctie|Onderwijsfunctie|Sportfunctie|Winkelfunctie|Overige gebruiksfunctie|Bouwwerk geen gebouw zijnde|Subgebruikfuncties` |

### 9.10c Verblijfsgebied met bezettingsgraad

*Bestand:* [`20-9.10c-Verblijfsgebied-met-bezettingsgraad.ids`](ids/20-9.10c-Verblijfsgebied-met-bezettingsgraad.ids) · *IFC:* IFC4 IFC4X3_ADD2 · *Checks:* #15 #16

*Van toepassing op:* IFCSPATIALZONE / IFCSPACE / IFCZONE met ObjectType=**Verblijfsgebied**

| Facet | Naam | Card. | Waarde |
|---|---|---|---|
| classification | classificatie Omgevingswet-Ruimten | O | Verblijfsgebied |
| attribute | Name | R | — |
| attribute | Description | R | patroon `Bruto Inhoud|Functioneel Nuttige Inhoud|Gebruiksinhoud|Netto Inhoud|Nuttige inhoud|Programma van Eisen inhoud` |
| property | Pset_SpaceOccupancyRequirements.OccupancyNumber | R | — |
| property | Pset_SpaceOccupancyRequirements.OccupancyNumberPeak | R | — |
| property | Pset_SpaceOccupancyRequirements.AreaPerOccupant | R | — |

### 9.10d Gebruiksgebied

*Bestand:* [`21-9.10d-Gebruiksgebied.ids`](ids/21-9.10d-Gebruiksgebied.ids) · *IFC:* IFC4 IFC4X3_ADD2 · *Checks:* #9 #10 #14 #15

*Van toepassing op:* IFCSPATIALZONE / IFCSPACE / IFCZONE met ObjectType=**Gebruiksgebied**

| Facet | Naam | Card. | Waarde |
|---|---|---|---|
| classification | classificatie Omgevingswet-Ruimten | o | Gebruiksgebied |
| attribute | Name | R | — |
| attribute | Description | R | patroon `Bruto Inhoud|Functioneel Nuttige Inhoud|Gebruiksinhoud|Netto Inhoud|Nuttige inhoud|Programma van Eisen inhoud` |

### 9.10e Bedgebied

*Bestand:* [`22-9.10e-Bedgebied.ids`](ids/22-9.10e-Bedgebied.ids) · *IFC:* IFC4 IFC4X3_ADD2 · *Checks:* #16

*Van toepassing op:* IFCSPATIALZONE / IFCSPACE / IFCZONE met ObjectType=**Bedgebied**

| Facet | Naam | Card. | Waarde |
|---|---|---|---|
| classification | classificatie Omgevingswet-Ruimten | o | Bedgebied |
| attribute | Name | R | — |
| attribute | Description | R | patroon `Bruto Inhoud|Functioneel Nuttige Inhoud|Gebruiksinhoud|Netto Inhoud|Nuttige inhoud|Programma van Eisen inhoud` |

### 9.10f Restgebied

*Bestand:* [`23-9.10f-Restgebied.ids`](ids/23-9.10f-Restgebied.ids) · *IFC:* IFC4 IFC4X3_ADD2 · *Checks:* #5 #6

*Van toepassing op:* IFCSPATIALZONE / IFCSPACE / IFCZONE met ObjectType=**Restgebied**

| Facet | Naam | Card. | Waarde |
|---|---|---|---|
| classification | classificatie Omgevingswet-Ruimten | o | Restgebied |
| attribute | Name | R | — |
| attribute | Description | R | patroon `Bruto Inhoud|Functioneel Nuttige Inhoud|Gebruiksinhoud|Netto Inhoud|Nuttige inhoud|Programma van Eisen inhoud` |

### 9.11 Buitengebied

*Bestand:* [`24-9.11-Buitengebied.ids`](ids/24-9.11-Buitengebied.ids) · *IFC:* IFC4 IFC4X3_ADD2 · *Checks:* #9 #10

*Van toepassing op:* IFCEXTERNALSPATIALELEMENT / IFCZONE / IFCSPATIALZONE / IFCSPACE met ObjectType=Buitengebied

| Facet | Naam | Card. | Waarde |
|---|---|---|---|
| classification | classificatie Omgevingswet-Ruimten | O | Buitengebied |
| attribute | Name | R | — |
| attribute | Description | R | patroon `Bebouwd Terreinvolume|Onbebouwd Terreinvolume|Onderbouwd Terreinvolume|Overbouwd Terreinvolume|Terreinvolume` |
| property | patroon `Pset_.*Common`.IsExternal | R | — |
| property | patroon `Pset_.*Common`.PubliclyAccessible | R | — |
| property | patroon `Pset_.*Common`.HandicapAccessible | R | — |
| property | Pset_SpaceCommon.IsExternal | R | true |

### 9.12a Functieruimte

*Bestand:* [`25-9.12a-Functieruimte.ids`](ids/25-9.12a-Functieruimte.ids) · *IFC:* IFC4 IFC4X3_ADD2 · *Checks:* #1 #3 #5 #6 #9 #10 #13 #14 #15

*Van toepassing op:* IFCSPACE / IFCZONE met ObjectType=Functieruimte

| Facet | Naam | Card. | Waarde |
|---|---|---|---|
| classification | classificatie Omgevingswet-Ruimten | R | Functieruimte |
| attribute | Name | R | — |
| attribute | Description | R | patroon `Functioneel Nuttige Inhoud|Netto Inhoud|Nuttige inhoud|Programma van Eisen inhoud` |

### 9.12b Verblijfsruimte

*Bestand:* [`26-9.12b-Verblijfsruimte.ids`](ids/26-9.12b-Verblijfsruimte.ids) · *IFC:* IFC4 IFC4X3_ADD2 · *Checks:* #1 #3 #5 #6 #9 #10 #13 #14 #15 #17

*Van toepassing op:* IFCSPACE / IFCZONE met ObjectType=Verblijfsruimte

| Facet | Naam | Card. | Waarde |
|---|---|---|---|
| classification | classificatie Omgevingswet-Ruimten | O | Verblijfsruimte |
| attribute | Name | R | — |
| attribute | Description | R | patroon `Functioneel Nuttige Inhoud|Netto Inhoud|Nuttige inhoud|Programma van Eisen inhoud` |

### 9.12c Bedruimte

*Bestand:* [`27-9.12c-Bedruimte.ids`](ids/27-9.12c-Bedruimte.ids) · *IFC:* IFC4 IFC4X3_ADD2 · *Checks:* #16

*Van toepassing op:* IFCSPACE / IFCZONE met ObjectType=Bedruimte

| Facet | Naam | Card. | Waarde |
|---|---|---|---|
| classification | classificatie Omgevingswet-Ruimten | O | Bedruimte |
| attribute | Name | R | — |
| attribute | Description | R | patroon `Functioneel Nuttige Inhoud|Netto Inhoud|Nuttige inhoud|Programma van Eisen inhoud` |

### 9.12d Restruimte

*Bestand:* [`28-9.12d-Restruimte.ids`](ids/28-9.12d-Restruimte.ids) · *IFC:* IFC4 IFC4X3_ADD2 · *Checks:* #5 #6

*Van toepassing op:* IFCSPACE / IFCZONE met ObjectType=Bedruimte

| Facet | Naam | Card. | Waarde |
|---|---|---|---|
| classification | classificatie Omgevingswet-Ruimten | R | Restruimte |
| attribute | Name | R | — |
| attribute | Description | R | patroon `Functioneel Nuttige Inhoud|Netto Inhoud|Nuttige inhoud|Programma van Eisen inhoud` |

### 9.13 Buitenruimte

*Bestand:* [`29-9.13-Buitenruimte.ids`](ids/29-9.13-Buitenruimte.ids) · *IFC:* IFC4 IFC4X3_ADD2 · *Checks:* #9 #10

*Van toepassing op:* IFCEXTERNALSPATIALELEMENT / IFCZONE / IFCSPACE met ObjectType=Buitenruimte

| Facet | Naam | Card. | Waarde |
|---|---|---|---|
| classification | classificatie Omgevingswet-Ruimten | R | Buitenruimte |
| attribute | Name | R | — |
| attribute | Description | R | patroon `Bebouwd Terreinvolume|Functioneel Nuttige Inhoud|Netto Inhoud|Nuttige inhoud|Onbebouwd Terreinvolume|Onderbouwd Terreinvolume|Overbouwd Terreinvolume|Programma van Eisen inhoud|Terreinvolume` |
| property | Pset_SpaceCommon.IsExternal | R | — |
| property | patroon `Pset_.*Common`.HandicapAccessible | R | — |
| property | patroon `Pset_.*Common`.PubliclyAccessible | R | — |

### 9.16a Brandcompartiment

*Bestand:* [`30-9.16a-Brandcompartiment.ids`](ids/30-9.16a-Brandcompartiment.ids) · *IFC:* IFC4 IFC4X3_ADD2 · *Checks:* #7 #8 #14 #15

*Van toepassing op:* IFCZONE / IFCSPATIALZONE met ObjectType=Brandcompartiment

| Facet | Naam | Card. | Waarde |
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

*Bestand:* [`31-9.16b-Subbrandcompartiment.ids`](ids/31-9.16b-Subbrandcompartiment.ids) · *IFC:* IFC4 IFC4X3_ADD2 · *Checks:* #15

*Van toepassing op:* IFCZONE / IFCSPATIALZONE met ObjectType=Subbrandcompartiment

| Facet | Naam | Card. | Waarde |
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

*Bestand:* [`32-9.16c-Vluchtroute.ids`](ids/32-9.16c-Vluchtroute.ids) · *IFC:* IFC4 IFC4X3_ADD2 · *Checks:* #14 #15 #16

*Van toepassing op:* IFCZONE / IFCSPATIALZONE met ObjectType=Vluchtroute

| Facet | Naam | Card. | Waarde |
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

*Bestand:* [`33-9.17-Tarra-Ruimte.ids`](ids/33-9.17-Tarra-Ruimte.ids) · *IFC:* IFC4 IFC4X3_ADD2 · *Checks:* #5 #6 #15

*Van toepassing op:* IFCSPATIALZONE / IFCZONE met ObjectType=Tarra Ruimte

| Facet | Naam | Card. | Waarde |
|---|---|---|---|
| classification | classificatie Omgevingswet-Ruimten | O | TarraRuimte |
| attribute | Name | R | — |
| attribute | Description | R | Tarra Inhoud |

### 9.18a Fysieke elementen IfcBeam

*Bestand:* [`34-9.18a-Fysieke-elementen-IfcBeam.ids`](ids/34-9.18a-Fysieke-elementen-IfcBeam.ids) · *IFC:* IFC4 IFC4X3_ADD2 · *Checks:* —

*Van toepassing op:* IFCBEAM

| Facet | Naam | Card. | Waarde |
|---|---|---|---|
| property | Pset_BeamCommon.FireRating | O | — |
| property | Pset_BeamCommon.IsExternal | O | — |
| property | Pset_BeamCommon.LoadBearing | R | — |
| property | Pset_BeamCommon.ThermalTransmittance | O | — |

### 9.18b Fysieke elementen IfcColumn

*Bestand:* [`35-9.18b-Fysieke-elementen-IfcColumn.ids`](ids/35-9.18b-Fysieke-elementen-IfcColumn.ids) · *IFC:* IFC4 IFC4X3_ADD2 · *Checks:* #7 #8

*Van toepassing op:* IFCCOLUMN

| Facet | Naam | Card. | Waarde |
|---|---|---|---|
| property | Pset_ColumnCommon.FireRating | O | — |
| property | Pset_ColumnCommon.IsExternal | O | — |
| property | Pset_ColumnCommon.LoadBearing | R | — |
| property | Pset_ColumnCommon.ThermalTransmittance | O | — |

### 9.18c Fysieke elementen IfcCovering.INSULATION

*Bestand:* [`36-9.18c-Fysieke-elementen-IfcCovering.INSULATION.ids`](ids/36-9.18c-Fysieke-elementen-IfcCovering.INSULATION.ids) · *IFC:* IFC4 IFC4X3_ADD2 · *Checks:* #11

*Van toepassing op:* IFCCOVERING.INSULATION

| Facet | Naam | Card. | Waarde |
|---|---|---|---|
| property | Pset_CoveringCommon.AcousticRating | O | — |
| property | Pset_CoveringCommon.Combustible | R | — |
| property | Pset_CoveringCommon.FireRating | R | — |
| property | Pset_CoveringCommon.FlammabilityRating | R | — |
| property | Pset_CoveringCommon.IsExternal | O | — |
| property | Pset_CoveringCommon.SurfaceSpreadOfFlame | R | — |
| property | Pset_CoveringCommon.ThermalTransmittance | O | — |

### 9.18d Fysieke elementen IfcCurtainWall

*Bestand:* [`37-9.18d-Fysieke-elementen-IfcCurtainWall.ids`](ids/37-9.18d-Fysieke-elementen-IfcCurtainWall.ids) · *IFC:* IFC4 IFC4X3_ADD2 · *Checks:* #7 #8 #11 #12 #17

*Van toepassing op:* IFCSLAB

| Facet | Naam | Card. | Waarde |
|---|---|---|---|
| property | Pset_CurtainWallCommon.AcousticRating | O | — |
| property | Pset_CurtainWallCommon.Combustible | O | — |
| property | Pset_CurtainWallCommon.FireRating | O | — |
| property | Pset_CurtainWallCommon.IsExternal | O | — |
| property | Pset_CurtainWallCommon.SurfaceSpreadOfFlame | O | — |
| property | Pset_CurtainWallCommon.ThermalTransmittance | O | — |

### 9.18e Fysieke elementen IfcDoor

*Bestand:* [`38-9.18e-Fysieke-elementen-IfcDoor.ids`](ids/38-9.18e-Fysieke-elementen-IfcDoor.ids) · *IFC:* IFC4 IFC4X3_ADD2 · *Checks:* #7 #8 #12 #14 #15 #16 #17

*Van toepassing op:* IFCDOOR

| Facet | Naam | Card. | Waarde |
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

*Bestand:* [`39-9.18f-Fysieke-elementen-IfcSensor.ids`](ids/39-9.18f-Fysieke-elementen-IfcSensor.ids) · *IFC:* IFC4 IFC4X3_ADD2 · *Checks:* —

*Van toepassing op:* IFCSENSOR.SMOKESENSOR

| Facet | Naam | Card. | Waarde |
|---|---|---|---|
| attribute | ObjectType | R | Rookmelder |

### 9.18g Fysieke elementen IfcSlab

*Bestand:* [`40-9.18g-Fysieke-elementen-IfcSlab.ids`](ids/40-9.18g-Fysieke-elementen-IfcSlab.ids) · *IFC:* IFC4 IFC4X3_ADD2 · *Checks:* #7 #8 #9 #10 #11 #13 #14 #15 #16

*Van toepassing op:* IFCSLAB

| Facet | Naam | Card. | Waarde |
|---|---|---|---|
| property | Pset_SlabCommon.AcousticRating | O | — |
| property | Pset_SlabCommon.Combustible | O | — |
| property | Pset_SlabCommon.FireRating | O | — |
| property | Pset_SlabCommon.IsExternal | O | — |
| property | Pset_SlabCommon.LoadBearing | R | — |
| property | Pset_SlabCommon.SurfaceSpreadOfFlame | O | — |
| property | Pset_SlabCommon.Thermal Transmittance [ThermalTransmittance] | O | — |

### 9.18h Fysieke elementen IfcWall

*Bestand:* [`41-9.18h-Fysieke-elementen-IfcWall.ids`](ids/41-9.18h-Fysieke-elementen-IfcWall.ids) · *IFC:* IFC4 IFC4X3_ADD2 · *Checks:* #7 #8 #9 #11 #13 #16 #17

*Van toepassing op:* IFCWALL

| Facet | Naam | Card. | Waarde |
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

*Bestand:* [`42-9.18i-Fysieke-elementen-Ifcwindow.ids`](ids/42-9.18i-Fysieke-elementen-Ifcwindow.ids) · *IFC:* IFC4 IFC4X3_ADD2 · *Checks:* #12 #17

*Van toepassing op:* IFCWINDOW

| Facet | Naam | Card. | Waarde |
|---|---|---|---|
| property | Pset_WindowCommon.AcousticRating | O | — |
| property | Pset_WindowCommon.FireExit | R | — |
| property | Pset_WindowCommon.FireRating | R | — |
| property | Pset_WindowCommon.GlazingAreaFraction | O | — |
| property | Pset_WindowCommon.IsExternal | R | — |
| property | Pset_WindowCommon.SecurityRating | O | — |
| property | Pset_WindowCommon.SmokeStop | R | — |
| property | Pset_WindowCommon.ThermalTransmittance | O | — |
