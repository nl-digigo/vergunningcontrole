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

<a id="loin-geometrie"></a>

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

**Voorbeeld uit het voorbeeldmodel** — `IfcSpace` uit [`Kievitsweg_R25_ILS_Spaces_20250815_LoGeoRef50.ifc`](../voorbeeldmodellen/Kievitsweg_R25_ILS_Spaces_20250815_LoGeoRef50.ifc) (352 objecten van dit type in dat model):

```step
#321=IFCSPACE('2_NwwkeBjBhgaaExdI61Ab',#18,'BVO gemeenschappelijk 00 begane grond','Bruto Inhoud','Bouwlaaginhoud',#312,#320,'BVO 000',.ELEMENT.,.USERDEFINED.,$)
#325=IFCPROPERTYSET('2bMD2XzRJiW3xJVLy0kK51',#18,'Pset_SpaceCommon',$,(#324))
#324=IFCPROPERTYSINGLEVALUE('IsExternal',$,IFCBOOLEAN(.F.),$)
#334=IFCELEMENTQUANTITY('1728IGoH6iAaGvsd64JAWO',#18,'Qto_SpaceBaseQuantities',$,$,(#329,#330,#331,#332))
#329=IFCQUANTITYLENGTH('Height','',$,2999.9999999990991,$)
#330=IFCQUANTITYAREA('GrossFloorArea','',$,30.813460020409657,$)
#331=IFCQUANTITYAREA('NetFloorArea','',$,30.813460020409657,$)
#332=IFCQUANTITYAREA('GrossCeilingArea','',$,30.813460020409657,$)
#174972=IFCCLASSIFICATIONREFERENCE('https://identifier.buildingsmart.org/uri/bsnl/Omgevingswet-Ruimten/0.2.0/class/Bouwlaaginhoud','Bouwlaaginhoud','Bouwlaaginhoud',#170339,$,$)
```

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

**Voorbeeld uit het voorbeeldmodel** — `IfcMapConversion` uit [`Kievitsweg_R25_ILS_Spaces_20250815_LoGeoRef50.ifc`](../voorbeeldmodellen/Kievitsweg_R25_ILS_Spaces_20250815_LoGeoRef50.ifc) (1 objecten van dit type in dat model):

```step
#29=IFCMAPCONVERSION(#22,#28,100702.33770000002,432643.96139999991,-1.2,1.,6.123233995736766E-17,0.001)
#28=IFCPROJECTEDCRS('EPSG:28992','Netherlands, Amersfoort datum, New System','Amersfoort/b','EPSG:5709',$,$,#27)
```

### 9.01b Coördinatenstelsel

*Bestand:* [`03-9.01b-Coordinatenstelsel.ids`](ids/03-9.01b-Coordinatenstelsel.ids) · *IFC:* IFC4 IFC4X3_ADD2 · *Checks:* #1 #2 #3 #5 #7 #10 #17

*Van toepassing op:* IFCPROJECTEDCRS

| Facet | Naam | Card. | Waarde |
|---|---|---|---|
| attribute | Name | R | EPSG:7415 \| EPSG:28992 |

**Voorbeeld uit het voorbeeldmodel** — `IfcProjectedCRS` uit [`Kievitsweg_R25_ILS_Spaces_20250815_LoGeoRef50.ifc`](../voorbeeldmodellen/Kievitsweg_R25_ILS_Spaces_20250815_LoGeoRef50.ifc) (1 objecten van dit type in dat model):

```step
#28=IFCPROJECTEDCRS('EPSG:28992','Netherlands, Amersfoort datum, New System','Amersfoort/b','EPSG:5709',$,$,#27)
```

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

**Voorbeeld uit het voorbeeldmodel** — `IfcSite` uit [`Kievitsweg_R25_ILS_Spaces_20250815_LoGeoRef50.ifc`](../voorbeeldmodellen/Kievitsweg_R25_ILS_Spaces_20250815_LoGeoRef50.ifc) (2 objecten van dit type in dat model):

```step
#57=IFCSITE('1BpW9zAR1AhAgLLMB_5$ac',#18,'Default',$,'Perceel',#56,$,$,.ELEMENT.,(0,0,0,0),(0,0,0,0),0.,$,#170345)
#170347=IFCPROPERTYSET('0KPKjrDqbCCP_6iONx7Po8',#170346,'Pset_Address',$,(#170350,#170351,#170352,#170353))
#170350=IFCPROPERTYSINGLEVALUE('AddressLines',$,IFCLABEL('Kievitsweg ONBEKEND'),$)
#170351=IFCPROPERTYSINGLEVALUE('Town',$,IFCLABEL('ONBEKEND'),$)
#170352=IFCPROPERTYSINGLEVALUE('PostalCode',$,IFCLABEL('ONBEKEND'),$)
#170353=IFCPROPERTYSINGLEVALUE('Country',$,IFCLABEL('NL'),$)
#174966=IFCCLASSIFICATIONREFERENCE('https://identifier.buildingsmart.org/uri/bsnl/Omgevingswet-Ruimten/0.2.0/class/Perceel','Perceel','Perceel',#170339,$,$)
```

### 9.01d Perceeladres (IFC4)

*Bestand:* [`05-9.01d-Perceeladres-IFC4.ids`](ids/05-9.01d-Perceeladres-IFC4.ids) · *IFC:* IFC4 · *Checks:* #1 #2 #3 #4 #5 #6

*Van toepassing op:* IFCSITE

Adres is indicatief, Georeferentie wordtgebruikt voor het uitvoeren van de omgeving controles. 

| Facet | Naam | Card. | Waarde |
|---|---|---|---|
| attribute | SiteAddress | R | — |

**Voorbeeld uit het voorbeeldmodel** — `IfcSite` uit [`Kievitsweg_R25_ILS_Spaces_20250815_LoGeoRef50.ifc`](../voorbeeldmodellen/Kievitsweg_R25_ILS_Spaces_20250815_LoGeoRef50.ifc) (1 objecten van dit type in dat model):

```step
#57=IFCSITE('1BpW9zAR1AhAgLLMB_5$ac',#18,'Default',$,'Perceel',#56,$,$,.ELEMENT.,(0,0,0,0),(0,0,0,0),0.,$,#170345)
#61=IFCPROPERTYSET('2fwhKilC1l8sjRMCZlwk_9',#18,'Pset_SiteCommon',$,(#60))
#60=IFCPROPERTYSINGLEVALUE('Reference',$,IFCIDENTIFIER('Project Information'),$)
#174966=IFCCLASSIFICATIONREFERENCE('https://identifier.buildingsmart.org/uri/bsnl/Omgevingswet-Ruimten/0.2.0/class/Perceel','Perceel','Perceel',#170339,$,$)
```

### 9.01e Gebouwadres (IFC4)

*Bestand:* [`06-9.01e-Gebouwadres-IFC4.ids`](ids/06-9.01e-Gebouwadres-IFC4.ids) · *IFC:* IFC4 · *Checks:* #1 #2 #3 #4 #5 #6

*Van toepassing op:* IFCBUILDING

Adres is indicatief, Georeferentie wordtgebruikt voor het uitvoeren van de omgeving controles. 

| Facet | Naam | Card. | Waarde |
|---|---|---|---|
| attribute | BuildingAddress | R | — |

**Voorbeeld uit het voorbeeldmodel** — `IfcBuilding` uit [`Kievitsweg_R25_ILS_Spaces_20250815_LoGeoRef50.ifc`](../voorbeeldmodellen/Kievitsweg_R25_ILS_Spaces_20250815_LoGeoRef50.ifc) (1 objecten van dit type in dat model):

```step
#37=IFCBUILDING('1BpW9zAR1AhAgLLMB_5$ab',#18,'RottaNova',$,'Gebouw',#35,$,'RottaNova',.ELEMENT.,$,$,#36)
#166475=IFCPROPERTYSET('2fMJu1RoRs3aAdUoxLCh6g',#18,'Pset_BuildingCommon',$,(#58,#60,#166472,#166473,#166474))
#58=IFCPROPERTYSINGLEVALUE('IsPermanentID',$,IFCBOOLEAN(.T.),$)
#60=IFCPROPERTYSINGLEVALUE('Reference',$,IFCIDENTIFIER('Project Information'),$)
#166472=IFCPROPERTYSINGLEVALUE('BuildingID',$,IFCIDENTIFIER('003100000122684'),$)
#166473=IFCPROPERTYSINGLEVALUE('NumberOfStoreys',$,IFCINTEGER(4),$)
#166474=IFCPROPERTYSINGLEVALUE('IsLandmarked',$,IFCLOGICAL(.U.),$)
#166476=IFCPROPERTYSET('3qAZmJCnu0s5SyefglL3qF',#18,'Pset_BuildingElementProxyCommon',$,(#60,#324))
#60=IFCPROPERTYSINGLEVALUE('Reference',$,IFCIDENTIFIER('Project Information'),$)
#324=IFCPROPERTYSINGLEVALUE('IsExternal',$,IFCBOOLEAN(.F.),$)
#166477=IFCPROPERTYSET('1vvlnGK4gBObS$Wh2PX_IN',#18,'Pset_BuildingStoreyCommon',$,(#60,#166451))
#60=IFCPROPERTYSINGLEVALUE('Reference',$,IFCIDENTIFIER('Project Information'),$)
#166451=IFCPROPERTYSINGLEVALUE('AboveGround',$,IFCLOGICAL(.U.),$)
#166478=IFCPROPERTYSET('2YpVL1spxNBVVd4uniblbG',#18,'Pset_BuildingSystemCommon',$,(#60))
#60=IFCPROPERTYSINGLEVALUE('Reference',$,IFCIDENTIFIER('Project Information'),$)
#174968=IFCCLASSIFICATIONREFERENCE('https://identifier.buildingsmart.org/uri/bsnl/Omgevingswet-Ruimten/0.2.0/class/Gebouw','Gebouw','Gebouw',#170339,$,$)
```

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

**Voorbeeld uit het voorbeeldmodel** — `IfcProject` uit [`Kievitsweg_R25_ILS_Spaces_20250815_LoGeoRef50.ifc`](../voorbeeldmodellen/Kievitsweg_R25_ILS_Spaces_20250815_LoGeoRef50.ifc) (1 objecten van dit type in dat model):

```step
#32=IFCPROJECT('1BpW9zAR1AhAgLLMB_5$aa',#18,'AR123-4','Bruto Inhoud','Pand','RottaNove, appartementencomplex','05 Definitief ontwerp',(#22,#30),#170332)
#170341=IFCPROPERTYSET('3nG9sWyIjAWOPy0cZ$k$Na',#170340,'Pset_ProjectCommon',$,(#170344,#174994))
#170344=IFCPROPERTYSINGLEVALUE('ProjectType',$,IFCLABEL('NEWBUILD'),$)
#174994=IFCPROPERTYSINGLEVALUE('ProjectInvestmentEstimate',$,IFCMONETARYMEASURE(10000000.),$)
#174964=IFCCLASSIFICATIONREFERENCE('https://identifier.buildingsmart.org/uri/bsnl/Omgevingswet-Ruimten/0.2.0/class/Project','Project','Project',#170339,$,$)
```

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

**Voorbeeld uit het voorbeeldmodel** — `IfcSite` uit [`Kievitsweg_R25_ILS_Spaces_20250815_LoGeoRef50.ifc`](../voorbeeldmodellen/Kievitsweg_R25_ILS_Spaces_20250815_LoGeoRef50.ifc) (1 objecten van dit type in dat model):

```step
#57=IFCSITE('1BpW9zAR1AhAgLLMB_5$ac',#18,'Default',$,'Perceel',#56,$,$,.ELEMENT.,(0,0,0,0),(0,0,0,0),0.,$,#170345)
#59=IFCPROPERTYSET('3jAdEneQaMgfLg1iw0A5pm',#18,'Pset_LandRegistration',$,(#58))
#58=IFCPROPERTYSINGLEVALUE('IsPermanentID',$,IFCBOOLEAN(.T.),$)
#174966=IFCCLASSIFICATIONREFERENCE('https://identifier.buildingsmart.org/uri/bsnl/Omgevingswet-Ruimten/0.2.0/class/Perceel','Perceel','Perceel',#170339,$,$)
```

### 9.03b Bouwwerkperceel

*Bestand:* [`09-9.03b-Bouwwerkperceel.ids`](ids/09-9.03b-Bouwwerkperceel.ids) · *IFC:* IFC4 IFC4X3_ADD2 · *Checks:* #1 #2 #3 #5 #6 #7 #17

*Van toepassing op:* IFCSPATIALZONE / IFCSPACE / IFCZONE met ObjectType=Bouwwerkperceel

| Facet | Naam | Card. | Waarde |
|---|---|---|---|
| classification | classificatie Omgevingswet-Ruimten | O | Bouwwerkperceel |
| attribute | Name | R | — |
| attribute | Description | R | Terreinvolume |

**Voorbeeld uit het voorbeeldmodel** — `IfcZone` uit [`Kievitsweg_R25_ILS_Spaces_20250815_LoGeoRef50.ifc`](../voorbeeldmodellen/Kievitsweg_R25_ILS_Spaces_20250815_LoGeoRef50.ifc) (1 objecten van dit type in dat model):

```step
#167384=IFCZONE('0qfoyTSoGYxcVghrwRHItK',#18,'Terreinvolume B5319','Terreinvolume','Bouwwerkperceel','')
#174990=IFCCLASSIFICATIONREFERENCE('https://identifier.buildingsmart.org/uri/bsnl/Omgevingswet-Ruimten/0.2.0/class/Bouwwerkperceel','Bouwwerkperceel','Bouwwerkperceel',#170339,$,$)
```

### 9.04 Kadastraal Perceel

*Bestand:* [`10-9.04-Kadastraal-Perceel.ids`](ids/10-9.04-Kadastraal-Perceel.ids) · *IFC:* IFC4X3_ADD2 IFC4 · *Checks:* #1 #2 #3 #5 #6 #7 #11 #12 #17

*Van toepassing op:* IFCSPATIALZONE / IFCSPACE / IFCZONE met ObjectType=Kadastraal perceel

| Facet | Naam | Card. | Waarde |
|---|---|---|---|
| classification | classificatie Omgevingswet-Ruimten | O | Kadastraalperceel |
| attribute | Name | R | — |
| attribute | Description | R | Terreinvolume |

**Voorbeeld uit het voorbeeldmodel** — `IfcSpace` uit [`Kievitsweg_R23_ILS_Spaces_update.ifc`](../voorbeeldmodellen/Kievitsweg_R23_ILS_Spaces_update.ifc) (1 objecten van dit type in dat model):

```step
#8974=IFCSPACE('0Lv4Vd2sHAZO08EfBEh$xm',#18,'Woningbouwprojectperceel X','Terreinvolume','Kadastraal perceel',#8965,#8973,'1',.ELEMENT.,.USERDEFINED.,$)
#8977=IFCPROPERTYSET('36vgPyd$HK9W1V3rFsfcIh',#18,'Pset_SpaceCommon',$,(#121))
#121=IFCPROPERTYSINGLEVALUE('IsExternal',$,IFCBOOLEAN(.F.),$)
#299682=IFCCLASSIFICATIONREFERENCE('https://identifier.buildingsmart.org/uri/bsnl/Omgevingswet-Ruimten/0.2.0/class/Kadastraalperceel','Kadastraalperceel','Kadastraalperceel',#293216,$,$)
```

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

**Voorbeeld uit het voorbeeldmodel** — `IfcBuilding` uit [`Kievitsweg_R25_ILS_Spaces_20250815_LoGeoRef50.ifc`](../voorbeeldmodellen/Kievitsweg_R25_ILS_Spaces_20250815_LoGeoRef50.ifc) (1 objecten van dit type in dat model):

```step
#37=IFCBUILDING('1BpW9zAR1AhAgLLMB_5$ab',#18,'RottaNova',$,'Gebouw',#35,$,'RottaNova',.ELEMENT.,$,$,#36)
#166475=IFCPROPERTYSET('2fMJu1RoRs3aAdUoxLCh6g',#18,'Pset_BuildingCommon',$,(#58,#60,#166472,#166473,#166474))
#58=IFCPROPERTYSINGLEVALUE('IsPermanentID',$,IFCBOOLEAN(.T.),$)
#60=IFCPROPERTYSINGLEVALUE('Reference',$,IFCIDENTIFIER('Project Information'),$)
#166472=IFCPROPERTYSINGLEVALUE('BuildingID',$,IFCIDENTIFIER('003100000122684'),$)
#166473=IFCPROPERTYSINGLEVALUE('NumberOfStoreys',$,IFCINTEGER(4),$)
#166474=IFCPROPERTYSINGLEVALUE('IsLandmarked',$,IFCLOGICAL(.U.),$)
#166481=IFCPROPERTYSET('1xFW6TwXUHq_rgmfjvpag7',#18,'Pset_BuildingUse',$,(#166479,#166480))
#166479=IFCPROPERTYSINGLEVALUE('MarketCategory',$,IFCLABEL('Woongebouw'),$)
#166480=IFCPROPERTYSINGLEVALUE('MarketSubCategory',$,IFCLABEL('Appartement'),$)
#174968=IFCCLASSIFICATIONREFERENCE('https://identifier.buildingsmart.org/uri/bsnl/Omgevingswet-Ruimten/0.2.0/class/Gebouw','Gebouw','Gebouw',#170339,$,$)
```

### 9.05b Gebouwinhoud

*Bestand:* [`12-9.05b-Gebouwinhoud.ids`](ids/12-9.05b-Gebouwinhoud.ids) · *IFC:* IFC4 IFC4X3_ADD2 · *Checks:* #3

*Van toepassing op:* IFCSPATIALZONE / IFCSPACE / IFCZONE met ObjectType=Gebouwinhoud

| Facet | Naam | Card. | Waarde |
|---|---|---|---|
| classification | classificatie Omgevingswet-Ruimten | O | Gebouwinhoud |
| attribute | Name | R | — |
| attribute | ObjectType | R | Gebouwinhoud |
| attribute | Description | R | Bruto Inhoud |

**Voorbeeld uit het voorbeeldmodel** — `IfcZone` uit [`Kievitsweg_R25_ILS_Spaces_20250815_LoGeoRef50.ifc`](../voorbeeldmodellen/Kievitsweg_R25_ILS_Spaces_20250815_LoGeoRef50.ifc) (1 objecten van dit type in dat model):

```step
#170363=IFCZONE('2NsleY4eb17QShv6rwcLwR',#170362,'Gebouwinhoud','Bruto Inhoud','Gebouwinhoud',$)
#174992=IFCCLASSIFICATIONREFERENCE('https://identifier.buildingsmart.org/uri/bsnl/Omgevingswet-Ruimten/0.2.0/class/Gebouwinhoud','Gebouwinhoud','Gebouwinhoud',#170339,$,$)
```

### 9.06a Bouwlaag (voorheen verdieping)

*Bestand:* [`13-9.06a-Bouwlaag-voorheen-verdieping.ids`](ids/13-9.06a-Bouwlaag-voorheen-verdieping.ids) · *IFC:* IFC4 IFC4X3_ADD2 · *Checks:* #1 #2 #3 #4 #6 #9 #10 #16

*Van toepassing op:* IFCBUILDINGSTOREY

NOTE: Qto nog omwisselen met Bouwlaaginhoud

| Facet | Naam | Card. | Waarde |
|---|---|---|---|
| attribute | ObjectType | R | Bouwlaag |
| attribute | Name | R | patroon `.*(-9 kelder|-8 kelder|-7 kelder|-6 kelder|-5 kelder|-4 kelder|-3 kelder|-2 kelder|-1 kelder|00 begane grond|01 eerste verdieping|02 tweede verdieping|03 derde verdieping|04 vierde verdieping|05 vijfde verdieping|06 zesde verdieping|07 zevende verdieping|08 achtste verdieping|09 negende verdieping|10 tiende verdieping|11 elfde verdieping|12 twaalfde verdieping|13 dertiende verdieping|14 veertiende verdieping|15 vijftiende verdieping|16 zestiende verdieping|17 zeventiende verdieping|18 achttiende verdieping|19 negentiende verdieping|20 twintigste verdieping|21 eenentwintigste verdieping|22 tweeentwintigste verdieping|23 drieentwintigste verdieping|24 vierentwintigste verdieping|25 vijfentwintigste verdieping|26 zesentwintigste verdieping|27 zevenentwintigste verdieping|28 achtentwintigste verdieping|29 negentwintigste verdieping|30 dertigste verdieping|31 eenendertigste verdieping|32 tweeendertigste verdieping|33 drieendertigste verdieping|34 vierendertigste verdieping|35 vijfendertigste verdieping|36 zesendertigste verdieping|37 zevenendertigste verdieping|38 achtendertigste verdieping|39 negendertigste verdieping|40 veertigste verdieping|01 dak|02 dak|03 dak|04 dak|05 dak|06 dak|07 dak|08 dak|09 dak|10 dak|11 dak|12 dak|13 dak|14 dak|15 dak|16 dak|17 dak|18 dak|19 dak|20 dak|21 dak|22 dak|23 dak|24 dak|25 dak|26 dak|27 dak|28 dak|29 dak|30 dak|31 dak|32 dak|33 dak|34 dak|35 dak|36 dak|37 dak|38 dak|39 dak|40 dak|41 dak).*` |

**Voorbeeld uit het voorbeeldmodel** — `IfcBuildingStorey` uit [`Kievitsweg_R25_ILS_Spaces_20250815_LoGeoRef50.ifc`](../voorbeeldmodellen/Kievitsweg_R25_ILS_Spaces_20250815_LoGeoRef50.ifc) (4 objecten van dit type in dat model):

```step
#40=IFCBUILDINGSTOREY('1BpW9zAR1AhAgLLM81w0VZ',#18,'00 begane grond','Bruto-Inhoud','Bouwlaag',#39,$,'00 begane grond',.ELEMENT.,0.)
#166452=IFCPROPERTYSET('2kARTUojMYRNJUWhlgPREs',#18,'Pset_BuildingStoreyCommon',$,(#166449,#166450,#166451))
#166449=IFCPROPERTYSINGLEVALUE('Reference',$,IFCIDENTIFIER('Level:BuildingLevel'),$)
#166450=IFCPROPERTYSINGLEVALUE('EntranceLevel',$,IFCBOOLEAN(.T.),$)
#166451=IFCPROPERTYSINGLEVALUE('AboveGround',$,IFCLOGICAL(.U.),$)
#174970=IFCCLASSIFICATIONREFERENCE('https://identifier.buildingsmart.org/uri/bsnl/Omgevingswet-Ruimten/0.2.0/class/Verdieping','Verdieping','Verdieping',#170339,$,$)
```

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

**Voorbeeld uit het voorbeeldmodel** — `IfcSpace` uit [`Kievitsweg_R25_ILS_Spaces_20250815_LoGeoRef50.ifc`](../voorbeeldmodellen/Kievitsweg_R25_ILS_Spaces_20250815_LoGeoRef50.ifc) (37 objecten van dit type in dat model):

```step
#321=IFCSPACE('2_NwwkeBjBhgaaExdI61Ab',#18,'BVO gemeenschappelijk 00 begane grond','Bruto Inhoud','Bouwlaaginhoud',#312,#320,'BVO 000',.ELEMENT.,.USERDEFINED.,$)
#334=IFCELEMENTQUANTITY('1728IGoH6iAaGvsd64JAWO',#18,'Qto_SpaceBaseQuantities',$,$,(#329,#330,#331,#332))
#329=IFCQUANTITYLENGTH('Height','',$,2999.9999999990991,$)
#330=IFCQUANTITYAREA('GrossFloorArea','',$,30.813460020409657,$)
#331=IFCQUANTITYAREA('NetFloorArea','',$,30.813460020409657,$)
#332=IFCQUANTITYAREA('GrossCeilingArea','',$,30.813460020409657,$)
#174972=IFCCLASSIFICATIONREFERENCE('https://identifier.buildingsmart.org/uri/bsnl/Omgevingswet-Ruimten/0.2.0/class/Bouwlaaginhoud','Bouwlaaginhoud','Bouwlaaginhoud',#170339,$,$)
```

### 9.07 Gebruikseenheid (voorheen eigendom-, en gebruikseenheid)

*Bestand:* [`15-9.07-Gebruikseenheid-voorheen-eigendom-en-gebruikseenheid.ids`](ids/15-9.07-Gebruikseenheid-voorheen-eigendom-en-gebruikseenheid.ids) · *IFC:* IFC4 IFC4X3_ADD2 · *Checks:* #1 #5

*Van toepassing op:* IFCZONE / IFCSPATIALZONE / IFCSPACE met ObjectType=**Eigendom- en gebruikseenheid** / Gebruikseenheid

| Facet | Naam | Card. | Waarde |
|---|---|---|---|
| classification | classificatie Omgevingswet-Ruimten | O | Gebruikseenheid |
| attribute | Name | R | minLength=1 |
| attribute | Description | R | Bruto Inhoud |

**Voorbeeld uit het voorbeeldmodel** — `IfcZone` uit [`Kievitsweg_R25_ILS_Spaces_20250815_LoGeoRef50.ifc`](../voorbeeldmodellen/Kievitsweg_R25_ILS_Spaces_20250815_LoGeoRef50.ifc) (46 objecten van dit type in dat model):

```step
#167422=IFCZONE('0jVpICnFSEB5Z5OZceKwz9',#18,'Unit 0.1','Bruto Inhoud','Gebruikseenheid','')
#174986=IFCCLASSIFICATIONREFERENCE('https://identifier.buildingsmart.org/uri/bsnl/Omgevingswet-Ruimten/0.2.0/class/Gebruikseenheid','Gebruikseenheid','Gebruikseenheid',#170339,$,$)
```

### 9.08 Gebruiksfunctie

*Bestand:* [`16-9.08-Gebruiksfunctie.ids`](ids/16-9.08-Gebruiksfunctie.ids) · *IFC:* IFC4 IFC4X3_ADD2 · *Checks:* #1 #3 #4 #5 #6 #7 #9 #10 #11 #12 #13 #14 #15 #16 #17

*Van toepassing op:* IFCZONE / IFCSPATIALZONE / IFCSPACE met ObjectType=**Gebruiksfunctie**

| Facet | Naam | Card. | Waarde |
|---|---|---|---|
| classification | classificatie Omgevingswet-Ruimten | O | Gebruiksfunctie |
| attribute | Name | R | patroon `Woonfunctie|Bijeenkomstfunctie|Celfunctie|Gezondheidszorgfunctie|Industriefunctie|Kantoorfunctie|Logiesfunctie|Onderwijsfunctie|Sportfunctie|Winkelfunctie|Overige gebruiksfunctie|Bouwwerk geen gebouw zijnde|Subgebruikfuncties` |
| attribute | Description | R | patroon `Bruto Inhoud|Functioneel Nuttige Inhoud|Gebruiksinhoud|Netto Inhoud|Nuttige inhoud|Programma van Eisen inhoud` |

**Voorbeeld uit het voorbeeldmodel** — `IfcZone` uit [`Kievitsweg_R25_ILS_Spaces_20250815_LoGeoRef50.ifc`](../voorbeeldmodellen/Kievitsweg_R25_ILS_Spaces_20250815_LoGeoRef50.ifc) (41 objecten van dit type in dat model):

```step
#167396=IFCZONE('0XwVnv4IoIW4I_mBB_Zqxb',#18,'Kantoorfunctie','Gebruiksinhoud','Gebruiksfunctie','Unit 0.1')
#174982=IFCCLASSIFICATIONREFERENCE('https://identifier.buildingsmart.org/uri/bsnl/Omgevingswet-Ruimten/0.2.0/class/Gebruiksfunctie','Gebruiksfunctie','Gebruiksfunctie',#170339,$,$)
```

### 9.09 Nevengebruiksfunctie

*Bestand:* [`17-9.09-Nevengebruiksfunctie.ids`](ids/17-9.09-Nevengebruiksfunctie.ids) · *IFC:* IFC4X3_ADD2 IFC4 · *Checks:* #1 #4 #5

*Van toepassing op:* IFCSPATIALZONE / IFCSPACE / IFCZONE met ObjectType=**Nevengebruiksfunctie**

| Facet | Naam | Card. | Waarde |
|---|---|---|---|
| attribute | Name | R | patroon `Woonfunctie|Bijeenkomstfunctie|Celfunctie|Gezondheidszorgfunctie|Industriefunctie|Kantoorfunctie|Logiesfunctie|Onderwijsfunctie|Sportfunctie|Winkelfunctie|Overige gebruiksfunctie|Bouwwerk geen gebouw zijnde` |
| attribute | Description | R | patroon `Bruto Inhoud|Functioneel Nuttige Inhoud|Gebruiksinhoud|Netto Inhoud|Nuttige inhoud|Programma van Eisen inhoud` |

**Voorbeeld uit het voorbeeldmodel** — `IfcSpace` uit [`Kievitsweg_R25_ILS_Spaces_20250815_LoGeoRef50.ifc`](../voorbeeldmodellen/Kievitsweg_R25_ILS_Spaces_20250815_LoGeoRef50.ifc) (4 objecten van dit type in dat model):

```step
#2534=IFCSPACE('3nr1Ebzzr7IxTW1ALsS6ml',#18,'Kantoorfunctie','Gebruiksinhoud','Nevengebruiksfunctie',#2525,#2533,'Unit 2.8',.ELEMENT.,.USERDEFINED.,$)
#2537=IFCPROPERTYSET('0FoIard14Up6q22xrNYMto',#18,'Pset_SpaceCommon',$,(#324))
#324=IFCPROPERTYSINGLEVALUE('IsExternal',$,IFCBOOLEAN(.F.),$)
#2553=IFCELEMENTQUANTITY('2CEhGFscDVCsz5LEeVKWil',#18,'Qto_SpaceBaseQuantities',$,$,(#2549,#2550,#2551,#2552))
#2549=IFCQUANTITYLENGTH('Height','',$,3000.000000000141,$)
#2550=IFCQUANTITYAREA('GrossFloorArea','',$,20.169017782328506,$)
#2551=IFCQUANTITYAREA('NetFloorArea','',$,20.169017782328506,$)
#2552=IFCQUANTITYAREA('GrossCeilingArea','',$,20.169017782328506,$)
#174984=IFCCLASSIFICATIONREFERENCE('https://identifier.buildingsmart.org/uri/bsnl/Omgevingswet-Ruimten/0.2.0/class/Nevengebruiksfunctie','Nevengebruiksfunctie','Nevengebruiksfunctie',#170339,$,$)
```

### 9.10a Functiegebied

*Bestand:* [`18-9.10a-Functiegebied.ids`](ids/18-9.10a-Functiegebied.ids) · *IFC:* IFC4 IFC4X3_ADD2 · *Checks:* #9 #10 #11

*Van toepassing op:* IFCSPATIALZONE / IFCSPACE / **IFCZONE** met ObjectType=**Functiegebied**

| Facet | Naam | Card. | Waarde |
|---|---|---|---|
| classification | classificatie Omgevingswet-Ruimten | O | Functiegebied |
| attribute | Name | R | — |
| attribute | Description | R | patroon `Bruto Inhoud|Functioneel Nuttige Inhoud|Gebruiksinhoud|Netto Inhoud|Nuttige inhoud|Programma van Eisen inhoud` |

> Dit objecttype komt (nog) niet voor in de voorbeeldmodellen.

### 9.10b Verblijfsgebied

*Bestand:* [`19-9.10b-Verblijfsgebied.ids`](ids/19-9.10b-Verblijfsgebied.ids) · *IFC:* IFC4 IFC4X3_ADD2 · *Checks:* #9 #10 #11 #16 #17

*Van toepassing op:* IFCSPATIALZONE / IFCSPACE / IFCZONE met ObjectType=**Verblijfsgebied**

| Facet | Naam | Card. | Waarde |
|---|---|---|---|
| classification | classificatie Omgevingswet-Ruimten | O | Verblijfsgebied |
| attribute | Name | R | — |
| attribute | Description | R | patroon `Bruto Inhoud|Functioneel Nuttige Inhoud|Gebruiksinhoud|Netto Inhoud|Nuttige inhoud|Programma van Eisen inhoud` |
| property | Pset_SpaceOccupancyRequirements.OccupancyType | R | patroon `matching the pattern Woonfunctie|Bijeenkomstfunctie|Celfunctie|Gezondheidszorgfunctie|Industriefunctie|Kantoorfunctie|Logiesfunctie|Onderwijsfunctie|Sportfunctie|Winkelfunctie|Overige gebruiksfunctie|Bouwwerk geen gebouw zijnde|Subgebruikfuncties` |

> Dit objecttype komt (nog) niet voor in de voorbeeldmodellen.

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

> Dit objecttype komt (nog) niet voor in de voorbeeldmodellen.

### 9.10d Gebruiksgebied

*Bestand:* [`21-9.10d-Gebruiksgebied.ids`](ids/21-9.10d-Gebruiksgebied.ids) · *IFC:* IFC4 IFC4X3_ADD2 · *Checks:* #9 #10 #14 #15

*Van toepassing op:* IFCSPATIALZONE / IFCSPACE / IFCZONE met ObjectType=**Gebruiksgebied**

| Facet | Naam | Card. | Waarde |
|---|---|---|---|
| classification | classificatie Omgevingswet-Ruimten | o | Gebruiksgebied |
| attribute | Name | R | — |
| attribute | Description | R | patroon `Bruto Inhoud|Functioneel Nuttige Inhoud|Gebruiksinhoud|Netto Inhoud|Nuttige inhoud|Programma van Eisen inhoud` |

**Voorbeeld uit het voorbeeldmodel** — `IfcSpace` uit [`Kievitsweg_R25_ILS_Spaces_20250815_LoGeoRef50.ifc`](../voorbeeldmodellen/Kievitsweg_R25_ILS_Spaces_20250815_LoGeoRef50.ifc) (40 objecten van dit type in dat model):

```step
#906=IFCSPACE('28PI48_4v1wusWwyB035x0',#18,'Kantoorgebied','Gebruiksinhoud','Gebruiksgebied',#897,#905,'Unit 0.1',.ELEMENT.,.USERDEFINED.,$)
#909=IFCPROPERTYSET('0Fmd4ukOcOhMAJKnttqFVb',#18,'Pset_SpaceCommon',$,(#324))
#324=IFCPROPERTYSINGLEVALUE('IsExternal',$,IFCBOOLEAN(.F.),$)
#917=IFCELEMENTQUANTITY('1bWZVki7c69x8jf9wlYJDR',#18,'Qto_SpaceBaseQuantities',$,$,(#913,#914,#915,#916))
#913=IFCQUANTITYLENGTH('Height','',$,2999.9999999990991,$)
#914=IFCQUANTITYAREA('GrossFloorArea','',$,130.0574033980827,$)
#915=IFCQUANTITYAREA('NetFloorArea','',$,130.0574033980827,$)
#916=IFCQUANTITYAREA('GrossCeilingArea','',$,130.0574033980827,$)
#174978=IFCCLASSIFICATIONREFERENCE('https://identifier.buildingsmart.org/uri/bsnl/Omgevingswet-Ruimten/0.2.0/class/Gebruiksgebied','Gebruiksgebied','Gebruiksgebied',#170339,$,$)
```

### 9.10e Bedgebied

*Bestand:* [`22-9.10e-Bedgebied.ids`](ids/22-9.10e-Bedgebied.ids) · *IFC:* IFC4 IFC4X3_ADD2 · *Checks:* #16

*Van toepassing op:* IFCSPATIALZONE / IFCSPACE / IFCZONE met ObjectType=**Bedgebied**

| Facet | Naam | Card. | Waarde |
|---|---|---|---|
| classification | classificatie Omgevingswet-Ruimten | o | Bedgebied |
| attribute | Name | R | — |
| attribute | Description | R | patroon `Bruto Inhoud|Functioneel Nuttige Inhoud|Gebruiksinhoud|Netto Inhoud|Nuttige inhoud|Programma van Eisen inhoud` |

> Dit objecttype komt (nog) niet voor in de voorbeeldmodellen.

### 9.10f Restgebied

*Bestand:* [`23-9.10f-Restgebied.ids`](ids/23-9.10f-Restgebied.ids) · *IFC:* IFC4 IFC4X3_ADD2 · *Checks:* #5 #6

*Van toepassing op:* IFCSPATIALZONE / IFCSPACE / IFCZONE met ObjectType=**Restgebied**

| Facet | Naam | Card. | Waarde |
|---|---|---|---|
| classification | classificatie Omgevingswet-Ruimten | o | Restgebied |
| attribute | Name | R | — |
| attribute | Description | R | patroon `Bruto Inhoud|Functioneel Nuttige Inhoud|Gebruiksinhoud|Netto Inhoud|Nuttige inhoud|Programma van Eisen inhoud` |

**Voorbeeld uit het voorbeeldmodel** — `IfcSpace` uit [`Kievitsweg_R25_ILS_Spaces_20250815_LoGeoRef50.ifc`](../voorbeeldmodellen/Kievitsweg_R25_ILS_Spaces_20250815_LoGeoRef50.ifc) (82 objecten van dit type in dat model):

```step
#3250=IFCSPACE('38iTKxc2jD1A3sRO8kaa9S',#18,'Gang','Gebruiksinhoud','Restgebied',#3241,#3249,'Unit 1.4',.ELEMENT.,.USERDEFINED.,$)
#3253=IFCPROPERTYSET('1SZ4tFTVrvIOn70HHBDdbP',#18,'Pset_SpaceCommon',$,(#324))
#324=IFCPROPERTYSINGLEVALUE('IsExternal',$,IFCBOOLEAN(.F.),$)
#3261=IFCELEMENTQUANTITY('0e3JqVOeoAJ4GypHbtp5b9',#18,'Qto_SpaceBaseQuantities',$,$,(#3257,#3258,#3259,#3260))
#3257=IFCQUANTITYLENGTH('Height','',$,3000.0000000001442,$)
#3258=IFCQUANTITYAREA('GrossFloorArea','',$,17.448741999955029,$)
#3259=IFCQUANTITYAREA('NetFloorArea','',$,17.448741999955029,$)
#3260=IFCQUANTITYAREA('GrossCeilingArea','',$,17.448741999955029,$)
#174988=IFCCLASSIFICATIONREFERENCE('https://identifier.buildingsmart.org/uri/bsnl/Omgevingswet-Ruimten/0.2.0/class/Restgebied','Restgebied','Restgebied',#170339,$,$)
```

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

> Dit objecttype komt (nog) niet voor in de voorbeeldmodellen.

### 9.12a Functieruimte

*Bestand:* [`25-9.12a-Functieruimte.ids`](ids/25-9.12a-Functieruimte.ids) · *IFC:* IFC4 IFC4X3_ADD2 · *Checks:* #1 #3 #5 #6 #9 #10 #13 #14 #15

*Van toepassing op:* IFCSPACE / IFCZONE met ObjectType=Functieruimte

| Facet | Naam | Card. | Waarde |
|---|---|---|---|
| classification | classificatie Omgevingswet-Ruimten | R | Functieruimte |
| attribute | Name | R | — |
| attribute | Description | R | patroon `Functioneel Nuttige Inhoud|Netto Inhoud|Nuttige inhoud|Programma van Eisen inhoud` |

> Dit objecttype komt (nog) niet voor in de voorbeeldmodellen.

### 9.12b Verblijfsruimte

*Bestand:* [`26-9.12b-Verblijfsruimte.ids`](ids/26-9.12b-Verblijfsruimte.ids) · *IFC:* IFC4 IFC4X3_ADD2 · *Checks:* #1 #3 #5 #6 #9 #10 #13 #14 #15 #17

*Van toepassing op:* IFCSPACE / IFCZONE met ObjectType=Verblijfsruimte

| Facet | Naam | Card. | Waarde |
|---|---|---|---|
| classification | classificatie Omgevingswet-Ruimten | O | Verblijfsruimte |
| attribute | Name | R | — |
| attribute | Description | R | patroon `Functioneel Nuttige Inhoud|Netto Inhoud|Nuttige inhoud|Programma van Eisen inhoud` |

**Voorbeeld uit het voorbeeldmodel** — `IfcSpace` uit [`Kievitsweg_R25_ILS_Spaces_20250815_LoGeoRef50.ifc`](../voorbeeldmodellen/Kievitsweg_R25_ILS_Spaces_20250815_LoGeoRef50.ifc) (44 objecten van dit type in dat model):

```step
#724=IFCSPACE('1pfVRwvVr8lAFON85LaJsX',#18,'Kantoorruimte','Netto Inhoud','Verblijfsruimte',#715,#723,'Unit 0.1',.ELEMENT.,.USERDEFINED.,$)
#727=IFCPROPERTYSET('2raBtM_sZ5A4FxGH_fvMsa',#18,'Pset_SpaceCommon',$,(#324))
#324=IFCPROPERTYSINGLEVALUE('IsExternal',$,IFCBOOLEAN(.F.),$)
#735=IFCELEMENTQUANTITY('2WlonQODz2LVlPlbpj$fkp',#18,'Qto_SpaceBaseQuantities',$,$,(#731,#732,#733,#734))
#731=IFCQUANTITYLENGTH('Height','',$,2999.9999999990991,$)
#732=IFCQUANTITYAREA('GrossFloorArea','',$,130.01609501956449,$)
#733=IFCQUANTITYAREA('NetFloorArea','',$,130.01609501956449,$)
#734=IFCQUANTITYAREA('GrossCeilingArea','',$,130.01609501956449,$)
#174974=IFCCLASSIFICATIONREFERENCE('https://identifier.buildingsmart.org/uri/bsnl/Omgevingswet-Ruimten/0.2.0/class/Verblijfsruimte','Verblijfsruimte','Verblijfsruimte',#170339,$,$)
```

### 9.12c Bedruimte

*Bestand:* [`27-9.12c-Bedruimte.ids`](ids/27-9.12c-Bedruimte.ids) · *IFC:* IFC4 IFC4X3_ADD2 · *Checks:* #16

*Van toepassing op:* IFCSPACE / IFCZONE met ObjectType=Bedruimte

| Facet | Naam | Card. | Waarde |
|---|---|---|---|
| classification | classificatie Omgevingswet-Ruimten | O | Bedruimte |
| attribute | Name | R | — |
| attribute | Description | R | patroon `Functioneel Nuttige Inhoud|Netto Inhoud|Nuttige inhoud|Programma van Eisen inhoud` |

> Dit objecttype komt (nog) niet voor in de voorbeeldmodellen.

### 9.12d Restruimte

*Bestand:* [`28-9.12d-Restruimte.ids`](ids/28-9.12d-Restruimte.ids) · *IFC:* IFC4 IFC4X3_ADD2 · *Checks:* #5 #6

*Van toepassing op:* IFCSPACE / IFCZONE met ObjectType=Bedruimte

| Facet | Naam | Card. | Waarde |
|---|---|---|---|
| classification | classificatie Omgevingswet-Ruimten | R | Restruimte |
| attribute | Name | R | — |
| attribute | Description | R | patroon `Functioneel Nuttige Inhoud|Netto Inhoud|Nuttige inhoud|Programma van Eisen inhoud` |

> Dit objecttype komt (nog) niet voor in de voorbeeldmodellen.

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

> Dit objecttype komt (nog) niet voor in de voorbeeldmodellen.

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

**Voorbeeld uit het voorbeeldmodel** — `IfcZone` uit [`Kievitsweg_R25_ILS_Spaces_20250815_LoGeoRef50.ifc`](../voorbeeldmodellen/Kievitsweg_R25_ILS_Spaces_20250815_LoGeoRef50.ifc) (1 objecten van dit type in dat model):

```step
#167394=IFCZONE('2lUV3_EIwqfyZgIUrXDZAL',#18,'Brandcompartimenten','Bruto Inhoud','Brandcompartiment','')
#174980=IFCCLASSIFICATIONREFERENCE('https://identifier.buildingsmart.org/uri/bsnl/Omgevingswet-Ruimten/0.2.0/class/Brandcompartiment','Brandcompartiment','Brandcompartiment',#170339,$,$)
```

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

> Dit objecttype komt (nog) niet voor in de voorbeeldmodellen.

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

> Dit objecttype komt (nog) niet voor in de voorbeeldmodellen.

### 9.17 Tarra Ruimte

*Bestand:* [`33-9.17-Tarra-Ruimte.ids`](ids/33-9.17-Tarra-Ruimte.ids) · *IFC:* IFC4 IFC4X3_ADD2 · *Checks:* #5 #6 #15

*Van toepassing op:* IFCSPATIALZONE / IFCZONE met ObjectType=Tarra Ruimte

| Facet | Naam | Card. | Waarde |
|---|---|---|---|
| classification | classificatie Omgevingswet-Ruimten | O | TarraRuimte |
| attribute | Name | R | — |
| attribute | Description | R | Tarra Inhoud |

> Dit objecttype komt (nog) niet voor in de voorbeeldmodellen.

### 9.18a Fysieke elementen IfcBeam

*Bestand:* [`34-9.18a-Fysieke-elementen-IfcBeam.ids`](ids/34-9.18a-Fysieke-elementen-IfcBeam.ids) · *IFC:* IFC4 IFC4X3_ADD2 · *Checks:* —

*Van toepassing op:* IFCBEAM

| Facet | Naam | Card. | Waarde |
|---|---|---|---|
| property | Pset_BeamCommon.FireRating | O | — |
| property | Pset_BeamCommon.IsExternal | O | — |
| property | Pset_BeamCommon.LoadBearing | R | — |
| property | Pset_BeamCommon.ThermalTransmittance | O | — |

> Dit objecttype komt (nog) niet voor in de voorbeeldmodellen.

### 9.18b Fysieke elementen IfcColumn

*Bestand:* [`35-9.18b-Fysieke-elementen-IfcColumn.ids`](ids/35-9.18b-Fysieke-elementen-IfcColumn.ids) · *IFC:* IFC4 IFC4X3_ADD2 · *Checks:* #7 #8

*Van toepassing op:* IFCCOLUMN

| Facet | Naam | Card. | Waarde |
|---|---|---|---|
| property | Pset_ColumnCommon.FireRating | O | — |
| property | Pset_ColumnCommon.IsExternal | O | — |
| property | Pset_ColumnCommon.LoadBearing | R | — |
| property | Pset_ColumnCommon.ThermalTransmittance | O | — |

**Voorbeeld uit het voorbeeldmodel** — `IfcColumn` uit [`Kievitsweg_R25_ILS_Spaces_20250815_LoGeoRef50.ifc`](../voorbeeldmodellen/Kievitsweg_R25_ILS_Spaces_20250815_LoGeoRef50.ifc) (8 objecten van dit type in dat model):

```step
#26907=IFCCOLUMN('3iQJYrXizBjvVqtsM8p_Iz',#18,'28_SCO_UN_stalenkolom vierkant:vierkant 150x150x8mm:1585669',$,'28_SCO_UN_stalenkolom vierkant:vierkant 150x150x8mm',#26906,#26903,'1585669',.COLUMN.)
#26913=IFCELEMENTQUANTITY('309thyaBfJCZJkzSHgj1En',#18,'Qto_ColumnBaseQuantities',$,$,(#26908,#26909,#26910,#26911,#26912))
#26908=IFCQUANTITYLENGTH('Length',$,$,2720.0000000001446,$)
#26909=IFCQUANTITYAREA('CrossSectionArea',$,$,0.022376261101283629,$)
#26910=IFCQUANTITYAREA('OuterSurfaceArea',$,$,3.0152042245685728,$)
#26911=IFCQUANTITYVOLUME('GrossVolume',$,$,0.060863430195494714,$)
#26912=IFCQUANTITYVOLUME('NetVolume',$,$,0.012060052842404204,$)
#26916=IFCPROPERTYSET('1BiOdeu4Fc60gpYvOaS15v',#18,'Pset_ColumnCommon',$,(#8700,#9553,#26915))
#8700=IFCPROPERTYSINGLEVALUE('LoadBearing',$,IFCBOOLEAN(.T.),$)
#9553=IFCPROPERTYSINGLEVALUE('IsExternal',$,IFCBOOLEAN(.T.),$)
#26915=IFCPROPERTYSINGLEVALUE('Reference',$,IFCIDENTIFIER('28_SCO_UN_stalenkolom vierkant:vierkant 150x150x8mm'),$)
#26923=IFCCLASSIFICATIONREFERENCE('https://www.csiresources.org/standards/uniformat','28.10','hoofddraagconstructies; kolommen en liggers, algemeen (verzamelniveau)',#33,'',$)
```

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

**Voorbeeld uit het voorbeeldmodel** — `IfcCovering` uit [`Kievitsweg_R23_ILS_Spaces_update.ifc`](../voorbeeldmodellen/Kievitsweg_R23_ILS_Spaces_update.ifc) (1 objecten van dit type in dat model):

```step
#277641=IFCCOVERING('297We$InzE5PF3vN4yGKKJ',#18,'Pipe Insulation:Default:4862563',$,'Pipe Insulation:Default',#277631,#277640,'4862563',.INSULATION.)
#277642=IFCPROPERTYSET('2UhGMRmOlteK2ambh1s7j3',#18,'Pset_CoveringCommon',$,(#121,#277621,#299646,#299647,#299648,#299649))
#121=IFCPROPERTYSINGLEVALUE('IsExternal',$,IFCBOOLEAN(.F.),$)
#277621=IFCPROPERTYSINGLEVALUE('Reference',$,IFCIDENTIFIER('Default'),$)
#299646=IFCPROPERTYSINGLEVALUE('FireRating',$,IFCLABEL('ONBEKEND'),$)
#299647=IFCPROPERTYSINGLEVALUE('Combustible',$,IFCBOOLEAN(.F.),$)
#299648=IFCPROPERTYSINGLEVALUE('FlammabilityRating',$,IFCLABEL('ONBEKEND'),$)
#299649=IFCPROPERTYSINGLEVALUE('SurfaceSpreadOfFlame',$,IFCLABEL('ONBEKEND'),$)
```

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

**Voorbeeld uit het voorbeeldmodel** — `IfcSlab` uit [`Kievitsweg_R25_ILS_Spaces_20250815_LoGeoRef50.ifc`](../voorbeeldmodellen/Kievitsweg_R25_ILS_Spaces_20250815_LoGeoRef50.ifc) (86 objecten van dit type in dat model):

```step
#8494=IFCSLAB('30j12cBYP5wvTXvxUtcNMS',#18,'Floor:28_FL_kanaalplaatvloer 200 (totaal 320) ge\X2\00EF\X0\soleerd:1256398',$,'Floor:28_FL_kanaalplaatvloer 200 (totaal 320) ge\X2\00EF\X0\soleerd',#8479,#8493,'1256398',.FLOOR.)
#8747=IFCELEMENTQUANTITY('2v5mf_AkrlIj6kRWguHAhm',#18,'Qto_SlabBaseQuantities',$,$,(#8692,#8693,#8694,#8741,#8742,#8743,#8744,#8745,#8746))
#8692=IFCPHYSICALCOMPLEXQUANTITY('Materiaal Steen Beton prefab',$,(#8688),'Layer',$,$)
#8693=IFCPHYSICALCOMPLEXQUANTITY('Materiaal Overig Isolatie 130mm',$,(#8690),'Layer',$,$)
#8694=IFCQUANTITYLENGTH('Width',$,$,320.,$)
#8741=IFCQUANTITYLENGTH('Depth','',$,120.,$)
#8742=IFCQUANTITYLENGTH('Perimeter','',$,440.813648293965,$)
#8743=IFCQUANTITYAREA('GrossArea','',$,667.06192500000134,$)
#8744=IFCQUANTITYAREA('NetArea','',$,657.07975000000101,$)
#8745=IFCQUANTITYVOLUME('GrossVolume','',$,80.047431000000159,$)
#8746=IFCQUANTITYVOLUME('NetVolume','',$,210.26552000000027,$)
#8749=IFCCLASSIFICATIONREFERENCE('https://www.csiresources.org/standards/uniformat','13.22','vloeren op grondslag; constructief, vloeren als gebouwonderdeel',#33,'',$)
```

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

**Voorbeeld uit het voorbeeldmodel** — `IfcDoor` uit [`Kievitsweg_R25_ILS_Spaces_20250815_LoGeoRef50.ifc`](../voorbeeldmodellen/Kievitsweg_R25_ILS_Spaces_20250815_LoGeoRef50.ifc) (243 objecten van dit type in dat model):

```step
#14690=IFCDOOR('3eXLmp4cX03h4AXAklt$F2',#18,'31_DO_UN_schuifdeur_1:schuifdeur:1392587',$,'31_DO_UN_schuifdeur_1:schuifdeur',#14689,#14683,'1392587',2346.0000000001569,2720.995043731768,.DOOR.,.NOTDEFINED.,$)
#14797=IFCPROPERTYSET('2nqhy24eU8QDm73AcbE_pq',#18,'Pset_DoorCommon',$,(#9553,#14795,#14796,#170366,#170367,#170368))
#9553=IFCPROPERTYSINGLEVALUE('IsExternal',$,IFCBOOLEAN(.T.),$)
#14795=IFCPROPERTYSINGLEVALUE('Reference',$,IFCIDENTIFIER('31_DO_UN_schuifdeur_1:schuifdeur'),$)
#14796=IFCPROPERTYSINGLEVALUE('FireExit',$,IFCBOOLEAN(.F.),$)
#170366=IFCPROPERTYSINGLEVALUE('FireRating',$,IFCLABEL('ONBEKEND'),$)
#170367=IFCPROPERTYSINGLEVALUE('SelfClosing',$,IFCBOOLEAN(.F.),$)
#170368=IFCPROPERTYSINGLEVALUE('SmokeStop',$,IFCBOOLEAN(.F.),$)
#14801=IFCPROPERTYSET('2_6mo0GXL7hhn54MKhXyr2',#18,'Pset_DoorCommon',$,(#9569,#9570,#14796,#14799,#14800))
#9569=IFCPROPERTYSINGLEVALUE('Geluidwering',$,IFCREAL(0.),$)
#9570=IFCPROPERTYSINGLEVALUE('AkousticRating',$,IFCREAL(0.),$)
#14796=IFCPROPERTYSINGLEVALUE('FireExit',$,IFCBOOLEAN(.F.),$)
#14799=IFCPROPERTYSINGLEVALUE('Brandweer_ingang',$,IFCBOOLEAN(.F.),$)
#14800=IFCPROPERTYSINGLEVALUE('Entrance',$,IFCBOOLEAN(.F.),$)
#14833=IFCELEMENTQUANTITY('3Z$6kbcPU6Q1m1xQP2d0Ip',#18,'Qto_DoorBaseQuantities',$,$,(#14830,#14831,#14832))
#14830=IFCQUANTITYLENGTH('Width','',$,2561.9900874635396,$)
#14831=IFCQUANTITYLENGTH('Height','',$,2346.0000000001446,$)
#14832=IFCQUANTITYAREA('Area','',$,6.0104287451898344,$)
#14862=IFCCLASSIFICATIONREFERENCE('https://www.csiresources.org/standards/uniformat','31.30','buitenwandopeningen; gevuld met deuren, algemeen (verzamelniveau)',#33,'',$)
```

### 9.18f Fysieke elementen IfcSensor

*Bestand:* [`39-9.18f-Fysieke-elementen-IfcSensor.ids`](ids/39-9.18f-Fysieke-elementen-IfcSensor.ids) · *IFC:* IFC4 IFC4X3_ADD2 · *Checks:* —

*Van toepassing op:* IFCSENSOR.SMOKESENSOR

| Facet | Naam | Card. | Waarde |
|---|---|---|---|
| attribute | ObjectType | R | Rookmelder |

> Dit objecttype komt (nog) niet voor in de voorbeeldmodellen.

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

**Voorbeeld uit het voorbeeldmodel** — `IfcSlab` uit [`Kievitsweg_R25_ILS_Spaces_20250815_LoGeoRef50.ifc`](../voorbeeldmodellen/Kievitsweg_R25_ILS_Spaces_20250815_LoGeoRef50.ifc) (86 objecten van dit type in dat model):

```step
#8494=IFCSLAB('30j12cBYP5wvTXvxUtcNMS',#18,'Floor:28_FL_kanaalplaatvloer 200 (totaal 320) ge\X2\00EF\X0\soleerd:1256398',$,'Floor:28_FL_kanaalplaatvloer 200 (totaal 320) ge\X2\00EF\X0\soleerd',#8479,#8493,'1256398',.FLOOR.)
#8701=IFCPROPERTYSET('132da3Gooyh_SJhYibZQZ_',#18,'Pset_SlabCommon',$,(#324,#8695,#8699,#8700))
#324=IFCPROPERTYSINGLEVALUE('IsExternal',$,IFCBOOLEAN(.F.),$)
#8695=IFCPROPERTYSINGLEVALUE('Reference',$,IFCIDENTIFIER('Floor:28_FL_kanaalplaatvloer 200 (totaal 320) ge\X2\00EF\X0\soleerd'),$)
#8699=IFCPROPERTYSINGLEVALUE('PitchAngle',$,IFCPLANEANGLEMEASURE(0.),$)
#8700=IFCPROPERTYSINGLEVALUE('LoadBearing',$,IFCBOOLEAN(.T.),$)
#8704=IFCPROPERTYSET('29DKKDtVb8Xhb$YQC6REA9',#18,'Pset_SlabCommon',$,(#8702,#8703))
#8702=IFCPROPERTYSINGLEVALUE('Assembly Code',$,IFCTEXT('13.22'),$)
#8703=IFCPROPERTYSINGLEVALUE('Type',$,IFCLABEL('28_FL_kanaalplaatvloer 200 (totaal 320) ge\X2\00EF\X0\soleerd'),$)
#8747=IFCELEMENTQUANTITY('2v5mf_AkrlIj6kRWguHAhm',#18,'Qto_SlabBaseQuantities',$,$,(#8692,#8693,#8694,#8741,#8742,#8743,#8744,#8745,#8746))
#8692=IFCPHYSICALCOMPLEXQUANTITY('Materiaal Steen Beton prefab',$,(#8688),'Layer',$,$)
#8693=IFCPHYSICALCOMPLEXQUANTITY('Materiaal Overig Isolatie 130mm',$,(#8690),'Layer',$,$)
#8694=IFCQUANTITYLENGTH('Width',$,$,320.,$)
#8741=IFCQUANTITYLENGTH('Depth','',$,120.,$)
#8742=IFCQUANTITYLENGTH('Perimeter','',$,440.813648293965,$)
#8743=IFCQUANTITYAREA('GrossArea','',$,667.06192500000134,$)
#8744=IFCQUANTITYAREA('NetArea','',$,657.07975000000101,$)
#8745=IFCQUANTITYVOLUME('GrossVolume','',$,80.047431000000159,$)
#8746=IFCQUANTITYVOLUME('NetVolume','',$,210.26552000000027,$)
#8749=IFCCLASSIFICATIONREFERENCE('https://www.csiresources.org/standards/uniformat','13.22','vloeren op grondslag; constructief, vloeren als gebouwonderdeel',#33,'',$)
```

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

**Voorbeeld uit het voorbeeldmodel** — `IfcWall` uit [`Kievitsweg_R25_ILS_Spaces_20250815_LoGeoRef50.ifc`](../voorbeeldmodellen/Kievitsweg_R25_ILS_Spaces_20250815_LoGeoRef50.ifc) (1067 objecten van dit type in dat model):

```step
#9479=IFCWALL('1JI9R0Oc93N9td5LTF8LJv',#18,'Basic Wall:21_WA_gevelmetselwerk rood 100_GEN-KC:1257053',$,'Basic Wall:21_WA_gevelmetselwerk rood 100_GEN-KC',#9453,#9478,'1257053',.NOTDEFINED.)
#9545=IFCELEMENTQUANTITY('1w1iA0O3N6oWUAHoOIrNQh',#18,'Qto_WallBaseQuantities',$,$,(#9537,#9538,#9539,#9540,#9541,#9542,#9543,#9544))
#9537=IFCQUANTITYLENGTH('Height',$,$,2999.9999999997763,$)
#9538=IFCQUANTITYLENGTH('Length',$,$,669.99999999999932,$)
#9539=IFCQUANTITYLENGTH('Width',$,$,100.,$)
#9540=IFCQUANTITYAREA('GrossFootprintArea',$,$,0.066999999999999935,$)
#9541=IFCQUANTITYVOLUME('GrossVolume',$,$,0.20099999999998483,$)
#9542=IFCQUANTITYAREA('GrossSideArea',$,$,2.0099999999998479,$)
#9543=IFCQUANTITYAREA('NetSideArea',$,$,2.0099999999998501,$)
#9544=IFCQUANTITYVOLUME('NetVolume',$,$,0.2009999999999848,$)
#9556=IFCPROPERTYSET('14XUi4782UOK$3QN8Aytt0',#18,'Pset_WallCommon',$,(#9549,#9553,#9554,#9555))
#9549=IFCPROPERTYSINGLEVALUE('Reference',$,IFCIDENTIFIER('Basic Wall:21_WA_gevelmetselwerk rood 100_GEN-KC'),$)
#9553=IFCPROPERTYSINGLEVALUE('IsExternal',$,IFCBOOLEAN(.T.),$)
#9554=IFCPROPERTYSINGLEVALUE('LoadBearing',$,IFCBOOLEAN(.F.),$)
#9555=IFCPROPERTYSINGLEVALUE('ExtendToStructure',$,IFCBOOLEAN(.F.),$)
#9562=IFCPROPERTYSET('1l2eSyWyP4nO121_VcxDjk',#18,'Pset_WallCommon',$,(#9557,#9558,#9559,#9560,#9561))
#9557=IFCPROPERTYSINGLEVALUE('Assembly Code',$,IFCTEXT('21.12'),$)
#9558=IFCPROPERTYSINGLEVALUE('Afwerking',$,IFCTEXT('Wasserstrich'),$)
#9559=IFCPROPERTYSINGLEVALUE('behandeling',$,IFCTEXT('vlaams verband, voeg licht verdiept'),$)
#9560=IFCPROPERTYSINGLEVALUE('Kleur',$,IFCTEXT('zalm gemeleerd'),$)
#9561=IFCPROPERTYSINGLEVALUE('Description',$,IFCTEXT('metselwerk'),$)
#9612=IFCCLASSIFICATIONREFERENCE('https://www.csiresources.org/standards/uniformat','21.12','buitenwanden; niet constructief, spouwwanden',#33,'',$)
```

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

**Voorbeeld uit het voorbeeldmodel** — `IfcWindow` uit [`Kievitsweg_R25_ILS_Spaces_20250815_LoGeoRef50.ifc`](../voorbeeldmodellen/Kievitsweg_R25_ILS_Spaces_20250815_LoGeoRef50.ifc) (271 objecten van dit type in dat model):

```step
#38016=IFCWINDOW('3MYujeMmvALA8nd2FXOv7j',#18,'31_WIN_UN_WI_subvak:glas 2:1879903',$,'31_WIN_UN_WI_subvak:glas 2',#38015,#38012,'1879903',335.47854847096835,1500.0000000000018,.WINDOW.,.NOTDEFINED.,$)
#38019=IFCPROPERTYSET('0rwkKm3JCaxzoUn2jynZxi',#18,'Pset_WindowCommon',$,(#324,#38017,#172734,#172735,#172736))
#324=IFCPROPERTYSINGLEVALUE('IsExternal',$,IFCBOOLEAN(.F.),$)
#38017=IFCPROPERTYSINGLEVALUE('Reference',$,IFCIDENTIFIER('31_WIN_UN_WI_subvak:glas 2'),$)
#172734=IFCPROPERTYSINGLEVALUE('FireRating',$,IFCLABEL('ONBEKEND'),$)
#172735=IFCPROPERTYSINGLEVALUE('FireExit',$,IFCBOOLEAN(.F.),$)
#172736=IFCPROPERTYSINGLEVALUE('SmokeStop',$,IFCBOOLEAN(.F.),$)
#38023=IFCPROPERTYSET('2wktA_wFX7LOPXT85myrjR',#18,'Pset_WindowCommon',$,(#9569,#9570,#38020,#38021,#38022))
#9569=IFCPROPERTYSINGLEVALUE('Geluidwering',$,IFCREAL(0.),$)
#9570=IFCPROPERTYSINGLEVALUE('AkousticRating',$,IFCREAL(0.),$)
#38020=IFCPROPERTYSINGLEVALUE('Family',$,IFCLABEL('31_WIN_UN_WI_subvak'),$)
#38021=IFCPROPERTYSINGLEVALUE('Family and Type',$,IFCLABEL('31_WIN_UN_WI_subvak: glas 2'),$)
#38022=IFCPROPERTYSINGLEVALUE('Type',$,IFCLABEL('glas 2'),$)
#38031=IFCELEMENTQUANTITY('2FlwSIFfLF6uK47sLdhUm9',#18,'Qto_WindowBaseQuantities',$,$,(#38027,#38028,#38029,#38030))
#38027=IFCQUANTITYLENGTH('Width','',$,1100.9950437317652,$)
#38028=IFCQUANTITYLENGTH('Height','',$,2106.0000000001423,$)
#38029=IFCQUANTITYLENGTH('Perimeter','',$,2225.9900874635364,$)
#38030=IFCQUANTITYAREA('Area','',$,2.3186955620992542,$)
#15229=IFCCLASSIFICATIONREFERENCE('https://www.csiresources.org/standards/uniformat','31.20','buitenwandopeningen; gevuld met ramen, algemeen (verzamelniveau)',#33,'',$)
```

