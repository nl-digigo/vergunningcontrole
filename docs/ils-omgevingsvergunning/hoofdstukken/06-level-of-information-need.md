# Level of Information Need

Het Level of Information Need (LOIN, ISO 7817-1:2024) legt per informatiebehoefte vast welke **alfanumerieke informatie**, **geometrie** en **documentatie** nodig is. In deze ILS is het LOIN opgebouwd uit twee delen:

1. **Alfanumeriek** — machineleesbaar vastgelegd in 41 IDS-deelspecificaties (IDS 1.0), afgeleid van de IDS-bestanden van de ILS Omgevingsvergunning 0.2.0. Hieronder per specificatie samengevat.
2. **Geometrisch** — eisen aan de vorm en kwaliteit van de geometrie, die IDS niet kan toetsen. Zie [Geometrische eisen](#loin-geometrie) hieronder en [Geometrische controle](#geometrie).
3. **Documentatie** — aanvullende bestanden conform de stanaard indieningsvereiste (tekeningen PDF/A, rapportages), zie [Informatieproductiestandaard](#standaard).

## LOIN per informatiebehoefte (samenvatting)

| Aspect | Invulling |
|---|---|
| Doel | Geautomatiseerd toetsen van de aanvraag aan 17 checks (OPA en TBA) |
| Mijlpaal | Vooroverleg, aanvraag omgevingsplanactiviteit, aanvraag technische bouwactiviteit; welke specificaties per mijlpaal verplicht zijn, staat in de [matrix per mijlpaal](#mijlpalenmatrix) |
| Actoren | Aanvrager/modelleur levert, gemeente (vergunningverlener) toetst |
| Objecten | Ruimtelijke objecten (IfcSpace, IfcSpatialZone, IfcZone), gebouw, bouwlagen, fysieke elementen (IfcWall, IfcDoor)) |
| Alfanumeriek | IDS-deelspecificaties 01–44 (05, 06 en 39 vervallen) |
| Geometrie | Volumetrische (solide) ruimten, georeferentie RD/NAP, detailniveau conform tabel hieronder |
| Documentatie | IFC (STEP), PDF/A-tekeningen afgeleid uit het model, IDS-validatierapport (BCF of HTML) |

<a id="loin-geometrie"></a>

## Geometrische eisen

| Eis | Toelichting | Nodig voor checks |
|---|---|---|
| G1 Solide geometrie | Ruimten en zones zijn gesloten volumes (geen losse vlakken), zodat oppervlakte en inhoud herberekend kunnen worden | #2 #3 #5 #7 #9 #10 #14–#17 |
| G2 Georeferentie | IfcMapConversion of IfcMapConversionScaled + IfcProjectedCRS (in IFC4.3 is IfcMapConversionScaled de aanbevolen route voor RD met NAP), EPSG:28992 (RD) / EPSG:7415 (RD+NAP), eenheden in meters. `MapUnit` van `IfcProjectedCRS` is ingevuld en is de meter (niet met de IDS gecontroleerd; een IDS kan alleen de aanwezigheid toetsen) | #1–#6 |
| G3 Hoogteligging | Hoogte ten opzichte van NAP; peil en bouwlaaghoogten consistent tussen aspectmodellen | #2 #4 #6 #10 |
| G4 Geen doublures | Geen dubbele of overlappende objecten van hetzelfde type (bijv. vloer opgeknipt bij export telt niet dubbel) | #3 #5 #7 #13 |
| G5 Hoeveelheden meegeleverd | Quantity sets (Qto_…) door de CAD-software berekend en geëxporteerd; de ontvanger (Gemeente) herberekent ter controle | #3 #5 #7 #13 #15 #17 |
| G6 Meetmethode | Oppervlakten en inhouden volgens NEN 2580; afwijkingen (schuine daken, dakkapellen) expliciet modelleren | #3 #5 #7 #17 |

## LOIN per deelspecificatie (alfanumeriek)

Per specificatie: op welke objecten de eis van toepassing is (applicability) en welke informatie verplicht (**R**), optioneel (**O**) of verboden (**X**) is.

In de tabellen geeft de kleur in de kolom *Facet* de soort eis aan: **attribute** in blauw, **property** in groen en **classification** in paars. `ObjectType` staat in de tabel als verplicht, ook waar de IDS het gebruikt om te bepalen op welke objecten de specificatie van toepassing is.

> De STEP-fragmenten komen uit het voorbeeldmodel [BM13_SPA_XX_M3D_ZZZ_Qto.ifc](voorbeeldmodellen/BM13_SPA_XX_M3D_ZZZ_Qto.ifc). Objecttypen die niet in dit model voorkomen, hebben geen fragment. Waar het model nog afwijkt van de specificatie, staat dat onder het fragment; zie ook [Voorbeeldmodellen](#voorbeeldmodellen).

### 9 ILS Omgevingsvergunning

*Bestand:* [`01-9.00-ILS-Omgevingsvergunning.ids`](ids/01-9.00-ILS-Omgevingsvergunning.ids) · *IFC:* IFC4 IFC4X3_ADD2 · *Checks:* #1 #2 #3 #4 #5 #6 #7 #8 #9 #10 #11 #12 #13 #14 #15 #16 #17

*Van toepassing op:* IfcZone, IfcSpatialZone, IfcSpace of IfcExternalSpatialElement

Deze specificatie geldt voor alle ruimtelijke objecten en vraagt een gevulde `GlobalId` en een gevulde `Name`. Dat ruimten en gebieden een eigen geometrie hebben, is een geometrische eis (G1) en wordt niet met de IDS gecontroleerd. Een `IfcZone` heeft geen eigen geometrie, omdat het een relatieobject is.

| Facet | Naam | Card. | Waarde |
|---|---|---|---|
| attribute | GlobalId | R | — |
| attribute | Name | R | — |

**Voorbeeld uit het voorbeeldmodel** - [`BM13_SPA_XX_M3D_ZZZ_Qto.ifc`](voorbeeldmodellen/BM13_SPA_XX_M3D_ZZZ_Qto.ifc): `IfcSpace` met ObjectType `Functieruimte` (57 objecten in het model):

```step
#124=IFCSPACE('3fkWy0pSzEHfnVjDYMlHkY',#7,'Hal','Functioneel Nuttige Inhoud','Functieruimte',#79,#116,'Hal',.ELEMENT.,.USERDEFINED.,$);
#150=IFCELEMENTQUANTITY('2rMx5yzCU0JSm8rpJjTjn1',#7,'Qto_SpaceBaseQuantities',$,$,(#145,#146,#147,#148,#149));
#145=IFCQUANTITYLENGTH('Height','',$,3048.,$);
#146=IFCQUANTITYAREA('GrossFloorArea','',$,3.2486999999999999,$);
#147=IFCQUANTITYAREA('NetFloorArea','',$,3.2486999999999999,$);
#148=IFCQUANTITYAREA('GrossCeilingArea','',$,3.2486999999999999,$);
#149=IFCQUANTITYVOLUME('NetVolume','',$,8.511593999999997,$);
#2656=IFCRELASSOCIATESCLASSIFICATION('3l6ScGRYfhhYdwDM3Vdgqp',#7,'Functieruimte',':Functieruimte',(#124,#178,#309,#596,#683,#760,#1092,#1151,#1210,#1243,#1305,#1522,#1639,#1716,#1811,#1844),#152);
#152=IFCCLASSIFICATIONREFERENCE($,'Functieruimte',$,#33,$,$);
```

### 9.01a Georeferentie

*Bestand:* [`02-9.01a-Georeferentie.ids`](ids/02-9.01a-Georeferentie.ids) · *IFC:* IFC4 IFC4X3_ADD2 · *Checks:* #1 #2 #3 #4 #5 #6 #7 #10 #17

*Van toepassing op:* IfcMapConversion of IfcMapConversionScaled

| Facet | Naam | Card. | Waarde |
|---|---|---|---|
| attribute | Eastings | R | — |
| attribute | Northings | R | — |
| attribute | OrthogonalHeight | R | — |
| attribute | XAxisAbscissa | R | — |
| attribute | XAxisOrdinate | R | — |
| attribute | Scale | R | — |

**Voorbeeld uit het voorbeeldmodel** - [`BM13_SPA_XX_M3D_ZZZ_Qto.ifc`](voorbeeldmodellen/BM13_SPA_XX_M3D_ZZZ_Qto.ifc): `IfcMapConversion` (1 object in het model):

```step
#21=IFCMAPCONVERSION(#14,#20,146995.99999999998,451443.99999999996,4.0000000000000009,1.,6.123233995736766E-017,0.001);
```

### 9.01b Coördinatenstelsel

*Bestand:* [`03-9.01b-Coordinatenstelsel.ids`](ids/03-9.01b-Coordinatenstelsel.ids) · *IFC:* IFC4 IFC4X3_ADD2 · *Checks:* #1 #2 #3 #4 #5 #6 #7 #10 #17

*Van toepassing op:* IfcProjectedCRS

| Facet | Naam | Card. | Waarde |
|---|---|---|---|
| attribute | Name | R | EPSG:7415 \| EPSG:28992 |

**Voorbeeld uit het voorbeeldmodel** - [`BM13_SPA_XX_M3D_ZZZ_Qto.ifc`](voorbeeldmodellen/BM13_SPA_XX_M3D_ZZZ_Qto.ifc): `IfcProjectedCRS` (1 object in het model):

```step
#20=IFCPROJECTEDCRS('EPSG:7415','Netherlands, Amersfoort datum, New System','Amersfoort/b',$,$,$,#19);
```

### 9.01c Projectadres (IFC4X3_ADD2)

*Bestand:* [`04-9.01c-Projectadres-IFC4X3-ADD2.ids`](ids/04-9.01c-Projectadres-IFC4X3-ADD2.ids) · *IFC:* IFC4X3_ADD2 · *Checks:* #1 #2 #3 #4 #5 #6

*Van toepassing op:* IfcSite of IfcBuilding

Het projectadres is optioneel. Vul het in bij een gebouw met een postadres; laat het leeg bij meerdere gebouwen of functies. De locatie volgt uit de georeferentie (9.01a en 9.01b), niet uit het adres.

| Facet | Naam | Card. | Waarde |
|---|---|---|---|
| property | Pset_Address.AddressLines | O | — |
| property | Pset_Address.Country | O | NL |
| property | Pset_Address.PostalCode | O | — |
| property | Pset_Address.Town | O | — |

**Voorbeeld uit het voorbeeldmodel** - [`BM13_SPA_XX_M3D_ZZZ_Qto.ifc`](voorbeeldmodellen/BM13_SPA_XX_M3D_ZZZ_Qto.ifc): `IfcBuilding` (2 objecten in het model):

```step
#29=IFCBUILDING('1W5FQV6hz2U80I8tmdGsoB',#7,'Gezins tussen woning',$,$,#28,$,'Gezins tussen woning',.ELEMENT.,$,$,$);
#2548=IFCPROPERTYSET('3mDybgfXJ$6cFueBW8MDLl',#7,'Pset_Address',$,(#2544,#2545,#2546,#2547));
#2544=IFCPROPERTYLISTVALUE('AddressLines',$,(IFCLABEL('Valkenkamp 61')),$);
#2545=IFCPROPERTYSINGLEVALUE('Town',$,IFCLABEL('Driebergen-Rijsenburg'),$);
#2546=IFCPROPERTYSINGLEVALUE('PostalCode',$,IFCLABEL('3972 ZB'),$);
#2547=IFCPROPERTYSINGLEVALUE('Country',$,IFCLABEL('NL'),$);
```

### 9.01f Verticaal datum (NAP)

*Bestand:* [`44-9.01f-Verticaal-datum.ids`](ids/44-9.01f-Verticaal-datum.ids) · *IFC:* IFC4 IFC4X3_ADD2 · *Checks:* #2 #4 #6 #10

*Van toepassing op:* IfcProjectedCRS met `Name` = EPSG:28992

| Facet | Naam | Card. | Waarde |
|---|---|---|---|
| attribute | VerticalDatum | R | EPSG:5709 |

> Geen object in het voorbeeldmodel valt onder de applicability van deze specificatie.

### 9.02 Project

*Bestand:* [`07-9.02-Project.ids`](ids/07-9.02-Project.ids) · *IFC:* IFC4 IFC4X3_ADD2 · *Checks:* #1 #2 #3 #4 #5 #6 #7 #8 #9 #10 #11 #12 #13 #14 #15 #16 #17

*Van toepassing op:* IfcProject

De eis aan de eenheden (objecten in millimeters, georeferentie in meters, zie [Informatieproductiestandaard](#standaard)) blijft gelden, maar wordt niet met de IDS gecontroleerd.

| Facet | Naam | Card. | Waarde |
|---|---|---|---|
| attribute | Name | R | — |
| attribute | Description | R | — |
| attribute | Phase | O | patroon `01 Initiatief/haalbaarheid|02 Projectdefinitie|03 Structuurontwerp|04 Voorontwerp|05 Definitief ontwerp|06 Technisch ontwerp/Bestek|07 Prijs- en Contractvorming|07 Prijs- en contractvorming|08 Uitvoering - Uitvoeringsgereed Ontwerp|09 Uitvoering - Directievoering|10 Gebruik/Exploitatie|1. Initiatief|1.1 Iniatief|INI|1.2 Haalbaarheid|HBH|1.3 Projectdefinitie|PD|2. Ontwerp|2.1 Structuurontwerp|SO|2.2 Voorontwerp|VO|2.3 Definitief Ontwerp|DO|2.4 Omgevingsvergunning|OV|3. Engineering|3.1 Technisch Ontwerp|TO|3.2 Uitvoeringsgereed Ontwerp|UO|4. Realisatie|4.1 Uitvoering|UV|4.2 Oplevering & Overdracht|OO|4.3 Onderhoudstermijn|5. Gebruik` |
| property | Pset_ProjectCommon.ProjectType | O | NEWBUILD \| MODIFICATION \| OPERATIONMAINTENANCE \| RENOVATION \| REPAIR |
| property | Pset_ProjectCommon.ProjectInvestmentEstimate | O | — |

**Voorbeeld uit het voorbeeldmodel** - [`BM13_SPA_XX_M3D_ZZZ_Qto.ifc`](voorbeeldmodellen/BM13_SPA_XX_M3D_ZZZ_Qto.ifc): `IfcProject` (1 object in het model):

```step
#22=IFCPROJECT('1W5FQV6hz2U80I8tmdGsoA',#7,'3583269901','Bestaande huidige bouwkundige staat',$,'Woning fam. B','5. Gebruik',(#14),#2681);
#24=IFCPROPERTYSET('067Qt_S8luiRs0mvafG9w$',#7,'Pset_ProjectCommon',$,(#23));
#23=IFCPROPERTYENUMERATEDVALUE('ProjectType',$,(IFCLABEL('MODIFICATION')),$);
```

### 9.03a Perceel

*Bestand:* [`08-9.03a-Perceel.ids`](ids/08-9.03a-Perceel.ids) · *IFC:* IFC4X3_ADD2 IFC4 · *Checks:* #3 #10 #14 #17

*Van toepassing op:* IfcSite

Een `IfcSite` hoeft geen eigen geometrie of plaatsing te hebben. Het Kadastraal Perceel is een eigen object (9.04).

| Facet | Naam | Card. | Waarde |
|---|---|---|---|
| attribute | Name | R | — |
| attribute | ObjectType | R | Perceel |
| property | Pset_LandRegistration.IsPermanentID | R | true |
| property | Pset_LandRegistration.LandID | O | — |
| property | Pset_LandRegistration.LandTitleID | O | — |

**Voorbeeld uit het voorbeeldmodel** - [`BM13_SPA_XX_M3D_ZZZ_Qto.ifc`](voorbeeldmodellen/BM13_SPA_XX_M3D_ZZZ_Qto.ifc): `IfcSite` met ObjectType `Perceel` (1 object in het model):

```step
#60=IFCSITE('1W5FQV6hz2U80I8tmdGso8',#7,'Wildbaan','Utrechtse Heuvelrug','Perceel',#59,$,'Driebergen-Rijsenburg',.ELEMENT.,(52,3,4,501647),(5,16,13,857307),4.0000000000000009,$,$);
#69=IFCPROPERTYSET('3wk2$TGv4AWXVlCdRahrgC',#7,'Pset_LandRegistration',$,(#66,#67,#68));
#66=IFCPROPERTYSINGLEVALUE('LandID',$,IFCIDENTIFIER('(DBG01) C 2449'),$);
#67=IFCPROPERTYSINGLEVALUE('IsPermanentID',$,IFCBOOLEAN(.T.),$);
#68=IFCPROPERTYSINGLEVALUE('LandTitleID',$,IFCIDENTIFIER('Driebergen-Rijsenburg'),$);
```

### 9.03b Bouwwerkperceel

*Bestand:* [`09-9.03b-Bouwwerkperceel.ids`](ids/09-9.03b-Bouwwerkperceel.ids) · *IFC:* IFC4 IFC4X3_ADD2 · *Checks:* #1 #2 #3 #5 #6 #7 #17

*Van toepassing op:* IfcZone, IfcSpatialZone of IfcSpace, elk met ObjectType

| Facet | Naam | Card. | Waarde |
|---|---|---|---|
| attribute | ObjectType | R | Bouwwerkperceel |
| classification | classificatie Omgevingswet-Ruimten | O | Bouwwerkperceel |
| attribute | Name | R | — |
| attribute | Description | R | Terreinvolume |

**Voorbeeld uit het voorbeeldmodel** - [`BM13_SPA_XX_M3D_ZZZ_Qto.ifc`](voorbeeldmodellen/BM13_SPA_XX_M3D_ZZZ_Qto.ifc): `IfcSpatialZone` met ObjectType `Bouwwerkperceel` (1 object in het model):

```step
#1994=IFCSPATIALZONE('2nSP8tGs98Tv7GL2eZsOvx',#7,'Tussenwoning project x','Terreinvolume','Bouwwerkperceel',#1986,#1993,$,.USERDEFINED.);
#2002=IFCELEMENTQUANTITY('18EkKd8PFNHmnM2o2JfgHV',#7,'Qto_SpatialZoneBaseQuantities',$,$,(#2001));
#2001=IFCQUANTITYLENGTH('Height','',$,2799.9999999999995,$);
#2663=IFCRELASSOCIATESCLASSIFICATION('2sEN8Dbz5hirbs0$SdVm2U',#7,'Bouwwerkperceel',':Bouwwerkperceel',(#1994),#2004);
#2004=IFCCLASSIFICATIONREFERENCE($,'Bouwwerkperceel',$,#33,$,$);
```

### 9.04 Kadastraal Perceel

*Bestand:* [`10-9.04-Kadastraal-Perceel.ids`](ids/10-9.04-Kadastraal-Perceel.ids) · *IFC:* IFC4X3_ADD2 IFC4 · *Checks:* #1 #2 #3 #5 #6 #7 #11 #12 #17

*Van toepassing op:* IfcZone, IfcSpatialZone of IfcSpace, elk met ObjectType

| Facet | Naam | Card. | Waarde |
|---|---|---|---|
| attribute | ObjectType | R | Kadastraal Perceel |
| classification | classificatie Omgevingswet-Ruimten | O | Kadastraalperceel |
| attribute | Name | R | — |
| attribute | Description | R | Terreinvolume |

**Voorbeeld uit het voorbeeldmodel** - [`BM13_SPA_XX_M3D_ZZZ_Qto.ifc`](voorbeeldmodellen/BM13_SPA_XX_M3D_ZZZ_Qto.ifc): `IfcSpatialZone` met ObjectType `Kadastraal Perceel` (1 object in het model):

```step
#1974=IFCSPATIALZONE('2nSP8tGs98Tv7GL2eZsOxf',#7,'Tussenwoning project x','Terreinvolume','Kadastraal Perceel',#1966,#1973,$,.USERDEFINED.);
#1982=IFCELEMENTQUANTITY('1KZz3vXaK_T2KM45omoKIj',#7,'Qto_SpatialZoneBaseQuantities',$,$,(#1981));
#1981=IFCQUANTITYLENGTH('Height','',$,2799.9999999999995,$);
#2662=IFCRELASSOCIATESCLASSIFICATION('2bH2Y$N8ziB5Qb5ULhmbaM',#7,'Kadastraalperceel',':Kadastraalperceel',(#1974),#1984);
#1984=IFCCLASSIFICATIONREFERENCE($,'Kadastraalperceel',$,#33,$,$);
```

### 9.05a Gebouw

*Bestand:* [`11-9.05a-Gebouw.ids`](ids/11-9.05a-Gebouw.ids) · *IFC:* IFC4 IFC4X3_ADD2 · *Checks:* #3 #4 #17

*Van toepassing op:* IfcBuilding

Een `IfcBuilding` hoeft geen eigen geometrie of plaatsing te hebben.

| Facet | Naam | Card. | Waarde |
|---|---|---|---|
| attribute | Name | R | — |
| attribute | ObjectType | R | Gebouw |
| property | Pset_BuildingCommon.BuildingID | R | — |
| property | Pset_BuildingCommon.IsPermanentID | R | — |
| property | Pset_BuildingUse.MarketCategory | R | patroon `Woongebouw|Kantoorgebouw|Bijgebouw|Gebedsgebouw|Vestigingsgebouw|Bedrijfsgebouw|Doelgroepengebouw|Installatiegebouw|Recreatiegebouw|Toren` |
| property | Pset_BuildingUse.MarketSubCategory | O | patroon `Aanleunwoning|Aireywoning|Ambtswoning|Apotheek|Appartement|Arbeiderswoning|Bejaardenwoning|Bel-etagewoning|Benedenwoning|Berging inpandig|Berging uitpandig|Bioscoop|Boerderij|Bovenwoning|Bungalow|Bunker|Café|Cafetaria|Cellenkantoor|Drive-inwoning|Duplexwoning|Energiecentrale|Fabriek|Fabrieksschoorsteen|Fietsenstalling inpandig|Fietsenstalling uitpandig|Flexibel verhuurkantoor|Fort|Friendswoning|Garage|Garage inpandig|Garage uitpandig|Gemaalgebouw|Gevangenis|Grachtenpand|Hangar|Herenhuis|Hoekwoning|Hoogbouwkantoor|Hotel|Huisartsenpraktijk|Huiskamer|Kantine|Kantoor|Kantoortuin|Kas|Kasteel|Kazerne|Kinderdagverblijf|Klokkentoren|Loft|Loods|Maatschappelijke dienstverlening|Maisonette|Medisch centrum|Molen|Paalwoning|Parkeergarage niet-openbaar|Parkeergarage openbaar|Parkeergarage stalling|Pastorie|Patiowoning|Portiekwoning|Representatief werkpaleis|Restaurant|Retail|Schakelwoning|Schuur|Short stay|Sportgebouw|Stal|Stalling inpandig|Stalling uitpandig|Supermarkt|Techniekruimte|Theater|Tussenwoning|Twee-onder-één-kap|Twee-onder-een-kapwoning|Verkeersruimte|Voertuigenstalling|Vrijstaand|Vrijstaand huis|Vuurtoren|Watertoren|Winkel|Wooneenheid|Woonoppervlak|Woontoren` |
| property | Pset_BuildingCommon.GrossPlannedArea | O | — |

**Voorbeeld uit het voorbeeldmodel** - [`BM13_SPA_XX_M3D_ZZZ_Qto.ifc`](voorbeeldmodellen/BM13_SPA_XX_M3D_ZZZ_Qto.ifc): `IfcBuilding` (1 object in het model):

```step
#29=IFCBUILDING('1W5FQV6hz2U80I8tmdGsoB',#7,'Gezins tussen woning',$,$,#28,$,'Gezins tussen woning',.ELEMENT.,$,$,$);
#2554=IFCPROPERTYSET('2rRebQpCC6u$uL0mHpnovD',#7,'Pset_BuildingCommon',$,(#70,#2549,#2550,#2551,#2552,#2553));
#70=IFCPROPERTYSINGLEVALUE('Reference',$,IFCIDENTIFIER('Project Information'),$);
#2549=IFCPROPERTYSINGLEVALUE('ConstructionMethod',$,IFCLABEL('-'),$);
#2550=IFCPROPERTYSINGLEVALUE('FireProtectionClass',$,IFCLABEL('nvt'),$);
#2551=IFCPROPERTYSINGLEVALUE('NumberOfStoreys',$,IFCCOUNTMEASURE(10),$);
#2552=IFCPROPERTYSINGLEVALUE('YearOfLastRefurbishment',$,IFCLABEL('1982'),$);
#2553=IFCPROPERTYSINGLEVALUE('IsLandmarked',$,IFCLOGICAL(.U.),$);
#2557=IFCPROPERTYSET('1hVs9geIz7L0nxAN5j5rZK',#7,'Pset_BuildingUse',$,(#2555,#2556));
#2555=IFCPROPERTYSINGLEVALUE('MarketCategory',$,IFCLABEL('Woongebouw'),$);
#2556=IFCPROPERTYSINGLEVALUE('MarketSubCategory',$,IFCLABEL('Tussenwoning'),$);
```

> Bij dit object ontbreekt nog of klopt nog niet: `ObjectType`, `Pset_BuildingCommon.BuildingID`, `Pset_BuildingCommon.IsPermanentID`.

### 9.05b Gebouwinhoud

*Bestand:* [`12-9.05b-Gebouwinhoud.ids`](ids/12-9.05b-Gebouwinhoud.ids) · *IFC:* IFC4 IFC4X3_ADD2 · *Checks:* #3

*Van toepassing op:* IfcZone, IfcSpatialZone of IfcSpace, elk met ObjectType

| Facet | Naam | Card. | Waarde |
|---|---|---|---|
| attribute | ObjectType | R | Gebouwinhoud |
| classification | classificatie Omgevingswet-Ruimten | O | Gebouwinhoud |
| attribute | Name | R | — |
| attribute | Description | R | Bruto Inhoud |

> Dit objecttype komt (nog) niet voor in het voorbeeldmodel.

### 9.06a Bouwlaag (voorheen verdieping)

*Bestand:* [`13-9.06a Bouwlaag kenmerk.ids`](ids/13-9.06a%20Bouwlaag%20kenmerk.ids) · *IFC:* IFC4 IFC4X3_ADD2 · *Checks:* #1 #2 #3 #4 #6 #9 #10 #16

*Van toepassing op:* IfcBuildingStorey

Een `IfcBuildingStorey` hoeft geen eigen geometrie of plaatsing te hebben. `EntranceLevel` geeft aan of de bouwlaag een entreeniveau van het gebouw is. `AboveGround` geeft aan of de bouwlaag geheel boven het maaiveld ligt (`TRUE`), geheel eronder (`FALSE`) of deels erboven en deels eronder, bijvoorbeeld bij een hellend terrein (`UNKNOWN`).

| Facet | Naam | Card. | Waarde |
|---|---|---|---|
| attribute | ObjectType | R | Bouwlaag |
| attribute | Name | R | patroon `.*(-9 kelder|-8 kelder|-7 kelder|-6 kelder|-5 kelder|-4 kelder|-3 kelder|-2 kelder|-1 kelder|00 begane grond|01 eerste verdieping|02 tweede verdieping|03 derde verdieping|04 vierde verdieping|05 vijfde verdieping|06 zesde verdieping|07 zevende verdieping|08 achtste verdieping|09 negende verdieping|10 tiende verdieping|11 elfde verdieping|12 twaalfde verdieping|13 dertiende verdieping|14 veertiende verdieping|15 vijftiende verdieping|16 zestiende verdieping|17 zeventiende verdieping|18 achttiende verdieping|19 negentiende verdieping|20 twintigste verdieping|21 eenentwintigste verdieping|22 tweeentwintigste verdieping|23 drieentwintigste verdieping|24 vierentwintigste verdieping|25 vijfentwintigste verdieping|26 zesentwintigste verdieping|27 zevenentwintigste verdieping|28 achtentwintigste verdieping|29 negentwintigste verdieping|30 dertigste verdieping|31 eenendertigste verdieping|32 tweeendertigste verdieping|33 drieendertigste verdieping|34 vierendertigste verdieping|35 vijfendertigste verdieping|36 zesendertigste verdieping|37 zevenendertigste verdieping|38 achtendertigste verdieping|39 negendertigste verdieping|40 veertigste verdieping|01 dak|02 dak|03 dak|04 dak|05 dak|06 dak|07 dak|08 dak|09 dak|10 dak|11 dak|12 dak|13 dak|14 dak|15 dak|16 dak|17 dak|18 dak|19 dak|20 dak|21 dak|22 dak|23 dak|24 dak|25 dak|26 dak|27 dak|28 dak|29 dak|30 dak|31 dak|32 dak|33 dak|34 dak|35 dak|36 dak|37 dak|38 dak|39 dak|40 dak|41 dak).*` |
| property | Pset_BuildingStoreyCommon.EntranceLevel | R | — |
| property | Pset_BuildingStoreyCommon.AboveGround | O | — |

**Voorbeeld uit het voorbeeldmodel** - [`BM13_SPA_XX_M3D_ZZZ_Qto.ifc`](voorbeeldmodellen/BM13_SPA_XX_M3D_ZZZ_Qto.ifc): `IfcBuildingStorey` met ObjectType `Bouwlaag` (6 objecten in het model):

```step
#38=IFCBUILDINGSTOREY('3NGCzV8Hb5P8aTBNLJtLol',#7,'-1 kelder',$,'Bouwlaag',#37,$,'kelder',.ELEMENT.,$);
#2508=IFCPROPERTYSET('1k4yS5KY5snZTp6eAeZEY6',#7,'Pset_BuildingStoreyCommon',$,(#2505,#2506,#2507));
#2505=IFCPROPERTYSINGLEVALUE('Reference',$,IFCIDENTIFIER('verdiepingsnaam'),$);
#2506=IFCPROPERTYSINGLEVALUE('EntranceLevel',$,IFCBOOLEAN(.F.),$);
#2507=IFCPROPERTYSINGLEVALUE('AboveGround',$,IFCLOGICAL(.F.),$);
#2655=IFCRELASSOCIATESCLASSIFICATION('02aApc3QwFxT1GcvKm6$cT',#7,'Bouwlaag',':Bouwlaag',(#32,#38,#42,#46,#50,#54),#34);
#34=IFCCLASSIFICATIONREFERENCE($,'Bouwlaag',$,#33,$,$);
```

### 9.06b Bouwlaaginhoud (voorheen bouwlaagobject)

*Bestand:* [`14-9.06b-Bouwlaaginhoud object.ids`](ids/14-9.06b-Bouwlaaginhoud%20object.ids) · *IFC:* IFC4 IFC4X3_ADD2 · *Checks:* #3 #6

*Van toepassing op:* IfcZone, IfcSpatialZone of IfcSpace, elk met ObjectType

| Facet | Naam | Card. | Waarde |
|---|---|---|---|
| attribute | ObjectType | R | Bouwlaaginhoud |
| classification | classificatie Omgevingswet-Ruimten | O | Bouwlaaginhoud |
| attribute | Description | R | Bruto Inhoud |
| attribute | Name | R | patroon `.*(-9 kelder|-8 kelder|-7 kelder|-6 kelder|-5 kelder|-4 kelder|-3 kelder|-2 kelder|-1 kelder|00 begane grond|01 eerste verdieping|02 tweede verdieping|03 derde verdieping|04 vierde verdieping|05 vijfde verdieping|06 zesde verdieping|07 zevende verdieping|08 achtste verdieping|09 negende verdieping|10 tiende verdieping|11 elfde verdieping|12 twaalfde verdieping|13 dertiende verdieping|14 veertiende verdieping|15 vijftiende verdieping|16 zestiende verdieping|17 zeventiende verdieping|18 achttiende verdieping|19 negentiende verdieping|20 twintigste verdieping|21 eenentwintigste verdieping|22 tweeentwintigste verdieping|23 drieentwintigste verdieping|24 vierentwintigste verdieping|25 vijfentwintigste verdieping|26 zesentwintigste verdieping|27 zevenentwintigste verdieping|28 achtentwintigste verdieping|29 negentwintigste verdieping|30 dertigste verdieping|31 eenendertigste verdieping|32 tweeendertigste verdieping|33 drieendertigste verdieping|34 vierendertigste verdieping|35 vijfendertigste verdieping|36 zesendertigste verdieping|37 zevenendertigste verdieping|38 achtendertigste verdieping|39 negendertigste verdieping|40 veertigste verdieping|01 dak|02 dak|03 dak|04 dak|05 dak|06 dak|07 dak|08 dak|09 dak|10 dak|11 dak|12 dak|13 dak|14 dak|15 dak|16 dak|17 dak|18 dak|19 dak|20 dak|21 dak|22 dak|23 dak|24 dak|25 dak|26 dak|27 dak|28 dak|29 dak|30 dak|31 dak|32 dak|33 dak|34 dak|35 dak|36 dak|37 dak|38 dak|39 dak|40 dak|41 dak).*` |

**Voorbeeld uit het voorbeeldmodel** - [`BM13_SPA_XX_M3D_ZZZ_Qto.ifc`](voorbeeldmodellen/BM13_SPA_XX_M3D_ZZZ_Qto.ifc): `IfcSpatialZone` met ObjectType `Bouwlaaginhoud` (4 objecten in het model):

```step
#1913=IFCSPATIALZONE('1z8c0Rt$P1juhD14cpfraR',#7,'00 begane grond','Bruto Inhoud','Bouwlaaginhoud',#1900,#1912,$,.USERDEFINED.);
#1923=IFCELEMENTQUANTITY('0N0jV7ACH0g_fk2tgXZeGE',#7,'Qto_SpatialZoneBaseQuantities',$,$,(#1922));
#1922=IFCQUANTITYLENGTH('Height','',$,2799.9999999999995,$);
#2661=IFCRELASSOCIATESCLASSIFICATION('1Vd5LvBGYt2FJvCEYnplVm',#7,'Bouwlaaginhoud',':Bouwlaaginhoud',(#1913,#1936,#1955,#2289),#1925);
#1925=IFCCLASSIFICATIONREFERENCE($,'Bouwlaaginhoud',$,#33,$,$);
```

### 9.07 Gebruikseenheid (voorheen eigendom-, en gebruikseenheid)

*Bestand:* [`15-9.07-Gebruikseenheid-voorheen-eigendom-en-gebruikseenheid.ids`](ids/15-9.07-Gebruikseenheid-voorheen-eigendom-en-gebruikseenheid.ids) · *IFC:* IFC4 IFC4X3_ADD2 · *Checks:* #1 #5

*Van toepassing op:* IfcZone, IfcSpatialZone of IfcSpace, elk met ObjectType

| Facet | Naam | Card. | Waarde |
|---|---|---|---|
| attribute | ObjectType | R | Gebruikseenheid |
| classification | classificatie Omgevingswet-Ruimten | O | Gebruikseenheid |
| attribute | Name | R | minLength=1 |
| attribute | Description | R | Bruto Inhoud |

**Voorbeeld uit het voorbeeldmodel** - [`BM13_SPA_XX_M3D_ZZZ_Qto.ifc`](voorbeeldmodellen/BM13_SPA_XX_M3D_ZZZ_Qto.ifc): `IfcZone` met ObjectType `Eigendom- en gebruikseenheid` (1 object in het model):

```step
#2635=IFCZONE('2CH63veOF2Vi2W2Y7gpUBN',#7,'123456','','Eigendom- en gebruikseenheid','<zone long name 2>');
#2680=IFCRELASSOCIATESCLASSIFICATION('2AcL_Dff4TOgASRUn_wNo7',#7,'[Omgevingswet-Ruimten] Eigendom- en gebruikseenheid:','[Omgevingswet-Ruimten] Eigendom- en gebruikseenheid::',(#2635),#1916);
#1916=IFCCLASSIFICATIONREFERENCE($,'Eigendom- en gebruikseenheid',$,#33,$,$);
#2636=IFCRELASSIGNSTOGROUP('2wO7yNGhQM9H5xTb2F8w5m',#7,'Spatial Zone Assignment',$,(#1913,#1936,#1955,#1974,#1994,#2289,#2313,#2338,#2357,#2376,#2395),$,#2635);
```

> In het voorbeeldmodel heeft dit object ObjectType `Eigendom- en gebruikseenheid`; de IDS vraagt `Gebruikseenheid`. Het object valt daardoor nog niet onder deze specificatie.

> Bij dit object ontbreekt nog of klopt nog niet: `Description`.

### 9.08 Gebruiksfunctie

*Bestand:* [`16-9.08-Gebruiksfunctie.ids`](ids/16-9.08-Gebruiksfunctie.ids) · *IFC:* IFC4 IFC4X3_ADD2 · *Checks:* #1 #3 #4 #5 #6 #7 #9 #10 #11 #12 #13 #14 #15 #16 #17

*Van toepassing op:* IfcZone, IfcSpatialZone of IfcSpace, elk met ObjectType

| Facet | Naam | Card. | Waarde |
|---|---|---|---|
| attribute | ObjectType | R | Gebruiksfunctie |
| classification | classificatie Omgevingswet-Ruimten | O | Gebruiksfunctie |
| attribute | Name | R | patroon `Woonfunctie|Bijeenkomstfunctie|Celfunctie|Gezondheidszorgfunctie|Industriefunctie|Kantoorfunctie|Logiesfunctie|Onderwijsfunctie|Sportfunctie|Winkelfunctie|Overige gebruiksfunctie|Bouwwerk geen gebouw zijnde|Subgebruikfuncties` |
| attribute | Description | R | patroon `Bruto Inhoud|Functioneel Nuttige Inhoud|Gebruiksinhoud|Netto Inhoud|Nuttige inhoud|Programma van Eisen inhoud` |

**Voorbeeld uit het voorbeeldmodel** - [`BM13_SPA_XX_M3D_ZZZ_Qto.ifc`](voorbeeldmodellen/BM13_SPA_XX_M3D_ZZZ_Qto.ifc): `IfcSpatialZone` met ObjectType `Gebruiksfunctie` (5 objecten in het model):

```step
#2313=IFCSPATIALZONE('1$7yMFpWX8dA7$wAWHtXmI',#7,'Woonfunctie','Bruto Inhoud','Gebruiksfunctie',#2300,#2312,$,.USERDEFINED.);
#2321=IFCELEMENTQUANTITY('0g2JNmobigiETvZntyzuWY',#7,'Qto_SpatialZoneBaseQuantities',$,$,(#2320));
#2320=IFCQUANTITYLENGTH('Height','',$,1000.0000000000001,$);
#2664=IFCRELASSOCIATESCLASSIFICATION('2MCGFkL3zeiHIrwNXaM5Nz',#7,'Gebruiksfunctie',':Gebruiksfunctie',(#2313,#2338,#2357,#2376,#2395),#2323);
#2323=IFCCLASSIFICATIONREFERENCE($,'Gebruiksfunctie',$,#33,$,$);
```

### 9.09 Nevengebruiksfunctie

*Bestand:* [`17-9.09-Nevengebruiksfunctie.ids`](ids/17-9.09-Nevengebruiksfunctie.ids) · *IFC:* IFC4X3_ADD2 IFC4 · *Checks:* #1 #4 #5

*Van toepassing op:* IfcZone, IfcSpatialZone of IfcSpace, elk met ObjectType

| Facet | Naam | Card. | Waarde |
|---|---|---|---|
| attribute | ObjectType | R | Nevengebruiksfunctie |
| attribute | Name | R | patroon `Woonfunctie|Bijeenkomstfunctie|Celfunctie|Gezondheidszorgfunctie|Industriefunctie|Kantoorfunctie|Logiesfunctie|Onderwijsfunctie|Sportfunctie|Winkelfunctie|Overige gebruiksfunctie|Bouwwerk geen gebouw zijnde` |
| attribute | Description | R | patroon `Bruto Inhoud|Functioneel Nuttige Inhoud|Gebruiksinhoud|Netto Inhoud|Nuttige inhoud|Programma van Eisen inhoud` |

> Dit objecttype komt (nog) niet voor in het voorbeeldmodel.

### 9.10a Functiegebied

*Bestand:* [`18-9.10a-Functiegebied.ids`](ids/18-9.10a-Functiegebied.ids) · *IFC:* IFC4 IFC4X3_ADD2 · *Checks:* #9 #10 #11

*Van toepassing op:* IfcZone, IfcSpatialZone of IfcSpace, elk met ObjectType

| Facet | Naam | Card. | Waarde |
|---|---|---|---|
| attribute | ObjectType | R | Functiegebied |
| classification | classificatie Omgevingswet-Ruimten | O | Functiegebied |
| attribute | Name | R | — |
| attribute | Description | R | patroon `Bruto Inhoud|Functioneel Nuttige Inhoud|Gebruiksinhoud|Netto Inhoud|Nuttige inhoud|Programma van Eisen inhoud` |

**Voorbeeld uit het voorbeeldmodel** - [`BM13_SPA_XX_M3D_ZZZ_Qto.ifc`](voorbeeldmodellen/BM13_SPA_XX_M3D_ZZZ_Qto.ifc): `IfcZone` met ObjectType `Functiegebied` (1 object in het model):

```step
#2611=IFCZONE('3KbFT4QU1U0tb$EQShahy6',#7,'F1','Bruto Inhoud','Functiegebied','functiegebied');
#2670=IFCRELASSOCIATESCLASSIFICATION('1cL1VuYEWPgSwRFzAhRL91',#7,'[Omgevingswet-Ruimten] Functiegebied:','[Omgevingswet-Ruimten] Functiegebied::',(#2611),#128);
#128=IFCCLASSIFICATIONREFERENCE($,'Functiegebied',$,#33,$,$);
#2612=IFCRELASSIGNSTOGROUP('0IJIJH1IkN3Qkc3ioarscS',#7,'Spatial Zone Assignment',$,(#124,#178,#309,#596,#683,#760,#1092,#1151,#1210,#1243,#1305,#1522,#1639,#1716,#1811,#1844),$,#2611);
```

### 9.10b Verblijfsgebied

*Bestand:* [`19-9.10b-Verblijfsgebied.ids`](ids/19-9.10b-Verblijfsgebied.ids) · *IFC:* IFC4 IFC4X3_ADD2 · *Checks:* #9 #10 #11 #16 #17

*Van toepassing op:* IfcZone, IfcSpatialZone of IfcSpace, elk met ObjectType

| Facet | Naam | Card. | Waarde |
|---|---|---|---|
| attribute | ObjectType | R | Verblijfsgebied |
| classification | classificatie Omgevingswet-Ruimten | O | Verblijfsgebied |
| attribute | Name | R | — |
| attribute | Description | R | patroon `Bruto Inhoud|Functioneel Nuttige Inhoud|Gebruiksinhoud|Netto Inhoud|Nuttige inhoud|Programma van Eisen inhoud` |
| property | Pset_SpaceOccupancyRequirements.OccupancyType | R | patroon `Woonfunctie|Bijeenkomstfunctie|Celfunctie|Gezondheidszorgfunctie|Industriefunctie|Kantoorfunctie|Logiesfunctie|Onderwijsfunctie|Sportfunctie|Winkelfunctie|Overige gebruiksfunctie|Bouwwerk geen gebouw zijnde|Subgebruikfuncties` |

**Voorbeeld uit het voorbeeldmodel** - [`BM13_SPA_XX_M3D_ZZZ_Qto.ifc`](voorbeeldmodellen/BM13_SPA_XX_M3D_ZZZ_Qto.ifc): `IfcZone` met ObjectType `Verblijfgebied` (1 object in het model):

```step
#2621=IFCZONE('3ZKnaZOntWbQC$q1k1gslS',#7,'V1','Bruto Inhoud','Verblijfgebied','verblijfgebied');
#2675=IFCRELASSOCIATESCLASSIFICATION('00k5k7TMBlcTdC9zSoNouU',#7,'[Omgevingswet-Ruimten] Verblijfsgebied:','[Omgevingswet-Ruimten] Verblijfsgebied::',(#2621),#420);
#420=IFCCLASSIFICATIONREFERENCE($,'Verblijfsgebied',$,#33,$,$);
#2622=IFCRELASSIGNSTOGROUP('0FSIUuMZr1V3xTl4OxkNSp',#7,'Spatial Zone Assignment',$,(#418,#494),$,#2621);
```

> In het voorbeeldmodel heeft dit object ObjectType `Verblijfgebied`; de IDS vraagt `Verblijfsgebied`. Het object valt daardoor nog niet onder deze specificatie.

> Bij dit object ontbreekt nog of klopt nog niet: `Pset_SpaceOccupancyRequirements.OccupancyType`.

### 9.10c Verblijfsgebied met bezettingsgraad

*Bestand:* [`20-9.10c-Verblijfsgebied-met-bezettingsgraad.ids`](ids/20-9.10c-Verblijfsgebied-met-bezettingsgraad.ids) · *IFC:* IFC4 IFC4X3_ADD2 · *Checks:* #15 #16

*Van toepassing op:* IfcZone, IfcSpatialZone of IfcSpace, elk met ObjectType en `OccupancyType` volgens de lijst in de IDS

| Facet | Naam | Card. | Waarde |
|---|---|---|---|
| attribute | ObjectType | R | Verblijfsgebied |
| classification | classificatie Omgevingswet-Ruimten | O | Verblijfsgebied |
| attribute | Name | R | — |
| attribute | Description | R | patroon `Bruto Inhoud|Functioneel Nuttige Inhoud|Gebruiksinhoud|Netto Inhoud|Nuttige inhoud|Programma van Eisen inhoud` |
| property | Pset_SpaceOccupancyRequirements.OccupancyNumber | R | — |
| property | Pset_SpaceOccupancyRequirements.OccupancyNumberPeak | R | — |
| property | Pset_SpaceOccupancyRequirements.AreaPerOccupant | R | — |

**Voorbeeld uit het voorbeeldmodel** - [`BM13_SPA_XX_M3D_ZZZ_Qto.ifc`](voorbeeldmodellen/BM13_SPA_XX_M3D_ZZZ_Qto.ifc): `IfcZone` met ObjectType `Verblijfgebied` (1 object in het model):

```step
#2621=IFCZONE('3ZKnaZOntWbQC$q1k1gslS',#7,'V1','Bruto Inhoud','Verblijfgebied','verblijfgebied');
#2675=IFCRELASSOCIATESCLASSIFICATION('00k5k7TMBlcTdC9zSoNouU',#7,'[Omgevingswet-Ruimten] Verblijfsgebied:','[Omgevingswet-Ruimten] Verblijfsgebied::',(#2621),#420);
#420=IFCCLASSIFICATIONREFERENCE($,'Verblijfsgebied',$,#33,$,$);
#2622=IFCRELASSIGNSTOGROUP('0FSIUuMZr1V3xTl4OxkNSp',#7,'Spatial Zone Assignment',$,(#418,#494),$,#2621);
```

> In het voorbeeldmodel heeft dit object ObjectType `Verblijfgebied`; de IDS vraagt `Verblijfsgebied`. Het object valt daardoor nog niet onder deze specificatie.

> Bij dit object ontbreekt nog of klopt nog niet: `Pset_SpaceOccupancyRequirements.OccupancyNumber`, `Pset_SpaceOccupancyRequirements.OccupancyNumberPeak`, `Pset_SpaceOccupancyRequirements.AreaPerOccupant`.

### 9.10d Gebruiksgebied

*Bestand:* [`21-9.10d-Gebruiksgebied.ids`](ids/21-9.10d-Gebruiksgebied.ids) · *IFC:* IFC4 IFC4X3_ADD2 · *Checks:* #9 #10 #14 #15

*Van toepassing op:* IfcZone, IfcSpatialZone of IfcSpace, elk met ObjectType

| Facet | Naam | Card. | Waarde |
|---|---|---|---|
| attribute | ObjectType | R | Gebruiksgebied |
| classification | classificatie Omgevingswet-Ruimten | O | Gebruiksgebied |
| attribute | Name | R | — |
| attribute | Description | R | patroon `Bruto Inhoud|Functioneel Nuttige Inhoud|Gebruiksinhoud|Netto Inhoud|Nuttige inhoud|Programma van Eisen inhoud` |

**Voorbeeld uit het voorbeeldmodel** - [`BM13_SPA_XX_M3D_ZZZ_Qto.ifc`](voorbeeldmodellen/BM13_SPA_XX_M3D_ZZZ_Qto.ifc): `IfcZone` met ObjectType `Gebruiksgebied` (1 object in het model):

```step
#2609=IFCZONE('31zRPUMH3LofpkI5ahu_$w',#7,'GG','Bruto Inhoud','Gebruiksgebied','gebruiksgebied');
#2669=IFCRELASSOCIATESCLASSIFICATION('1Y1B5MAh6tgSW4uyop$j2I',#7,'[Omgevingswet-Ruimten] Gebruiksgebied','[Omgevingswet-Ruimten] Gebruiksgebied:',(#2609),#127);
#127=IFCCLASSIFICATIONREFERENCE($,'Gebruiksgebied',$,#33,$,$);
#2610=IFCRELASSIGNSTOGROUP('2Te_vMOYcUWRsoQdnHW3bg',#7,'Spatial Zone Assignment',$,(#124,#178,#309,#418,#494,#596,#683,#760,#865,#956,#1033,#1092,#1151,#1210,#1243,#1305,#1522,#1599,#1639,#1716,#1811,#1844),$,#2609);
```

### 9.10e Bedgebied

*Bestand:* [`22-9.10e-Bedgebied.ids`](ids/22-9.10e-Bedgebied.ids) · *IFC:* IFC4 IFC4X3_ADD2 · *Checks:* #16

*Van toepassing op:* IfcZone, IfcSpatialZone of IfcSpace, elk met ObjectType

| Facet | Naam | Card. | Waarde |
|---|---|---|---|
| attribute | ObjectType | R | Bedgebied |
| classification | classificatie Omgevingswet-Ruimten | O | Bedgebied |
| attribute | Name | R | — |
| attribute | Description | R | patroon `Bruto Inhoud|Functioneel Nuttige Inhoud|Gebruiksinhoud|Netto Inhoud|Nuttige inhoud|Programma van Eisen inhoud` |

**Voorbeeld uit het voorbeeldmodel** - [`BM13_SPA_XX_M3D_ZZZ_Qto.ifc`](voorbeeldmodellen/BM13_SPA_XX_M3D_ZZZ_Qto.ifc): `IfcZone` met ObjectType `Bedgebied` (1 object in het model):

```step
#2623=IFCZONE('3bAhetpnYI9nypvWySNTvR',#7,'B1','Bruto Inhoud','Bedgebied','bedgebied');
#2676=IFCRELASSOCIATESCLASSIFICATION('3DcxobJxgpm9Y5qGOW3eCM',#7,'[Omgevingswet-Ruimten] Bedgebied:','[Omgevingswet-Ruimten] Bedgebied::',(#2623),#867);
#867=IFCCLASSIFICATIONREFERENCE($,'Bedgebied',$,#33,$,$);
#2624=IFCRELASSIGNSTOGROUP('0OjNZcFMMkWF45Krj0Nlyz',#7,'Spatial Zone Assignment',$,(#865,#956,#1033,#1599),$,#2623);
```

### 9.10f Restgebied

*Bestand:* [`23-9.10f-Restgebied.ids`](ids/23-9.10f-Restgebied.ids) · *IFC:* IFC4 IFC4X3_ADD2 · *Checks:* #5 #6

*Van toepassing op:* IfcZone, IfcSpatialZone of IfcSpace, elk met ObjectType

| Facet | Naam | Card. | Waarde |
|---|---|---|---|
| attribute | ObjectType | R | Restgebied |
| classification | classificatie Omgevingswet-Ruimten | O | Restgebied |
| attribute | Name | R | — |
| attribute | Description | R | patroon `Bruto Inhoud|Functioneel Nuttige Inhoud|Gebruiksinhoud|Netto Inhoud|Nuttige inhoud|Programma van Eisen inhoud` |

**Voorbeeld uit het voorbeeldmodel** - [`BM13_SPA_XX_M3D_ZZZ_Qto.ifc`](voorbeeldmodellen/BM13_SPA_XX_M3D_ZZZ_Qto.ifc): `IfcZone` met ObjectType `Restgebied` (1 object in het model):

```step
#2625=IFCZONE('3kqceNtMqyAdm$8hz6Ab7x',#7,'RG','Bruto Inhoud','Restgebied','restgebied');
#2677=IFCRELASSOCIATESCLASSIFICATION('2rraADDdC9oFQtkHyGtfKT',#7,'[Omgevingswet-Ruimten] Restgebied','[Omgevingswet-Ruimten] Restgebied:',(#2625),#1407);
#1407=IFCCLASSIFICATIONREFERENCE($,'Restgebied',$,#33,$,$);
#2626=IFCRELASSIGNSTOGROUP('3k3jXRGzWeznVSHHNKXXh5',#7,'Spatial Zone Assignment',$,(#1405,#1681,#2024,#2056),$,#2625);
```

### 9.11 Buitengebied

*Bestand:* [`24-9.11-Buitengebied.ids`](ids/24-9.11-Buitengebied.ids) · *IFC:* IFC4 IFC4X3_ADD2 · *Checks:* #9 #10

*Van toepassing op:* IfcZone, IfcSpatialZone, IfcSpace of IfcExternalSpatialElement, elk met ObjectType

| Facet | Naam | Card. | Waarde |
|---|---|---|---|
| attribute | ObjectType | R | Buitengebied |
| classification | classificatie Omgevingswet-Ruimten | O | Buitengebied |
| attribute | Name | R | — |
| attribute | Description | R | patroon `Bebouwd Terreinvolume|Onbebouwd Terreinvolume|Onderbouwd Terreinvolume|Overbouwd Terreinvolume|Terreinvolume` |
| property | patroon `Pset_.*Common`.IsExternal | R | — |
| property | patroon `Pset_.*Common`.PubliclyAccessible | R | — |
| property | patroon `Pset_.*Common`.HandicapAccessible | R | — |
| property | Pset_SpaceCommon.IsExternal | R | true |

**Voorbeeld uit het voorbeeldmodel** - [`BM13_SPA_XX_M3D_ZZZ_Qto.ifc`](voorbeeldmodellen/BM13_SPA_XX_M3D_ZZZ_Qto.ifc): `IfcZone` met ObjectType `Buitengebied` (1 object in het model):

```step
#2633=IFCZONE('0DuLprvnrjEqyeA1qE4tcl',#7,'BG','Bruto Inhoud','Buitengebied','buitengebied');
#2679=IFCRELASSOCIATESCLASSIFICATION('1f4nV161RhuB3ThgDUiYm3',#7,'[Omgevingswet-Ruimten] Buitengebied','[Omgevingswet-Ruimten] Buitengebied:',(#2633),#1880);
#1880=IFCCLASSIFICATIONREFERENCE($,'Buitengebied',$,#33,$,$);
#2634=IFCRELASSIGNSTOGROUP('2KeY2HLY4Y3LnTc4R_V$uy',#7,'Spatial Zone Assignment',$,(#1876),$,#2633);
```

> Bij dit object ontbreekt nog of klopt nog niet: `Description`, ``Pset_.*Common`.IsExternal`, ``Pset_.*Common`.PubliclyAccessible`, ``Pset_.*Common`.HandicapAccessible`, `Pset_SpaceCommon.IsExternal`.

### 9.12a Functieruimte

*Bestand:* [`25-9.12a-Functieruimte.ids`](ids/25-9.12a-Functieruimte.ids) · *IFC:* IFC4 IFC4X3_ADD2 · *Checks:* #1 #3 #5 #6 #9 #10 #13 #14 #15

*Van toepassing op:* IfcZone of IfcSpace, elk met ObjectType

| Facet | Naam | Card. | Waarde |
|---|---|---|---|
| attribute | ObjectType | R | Functieruimte |
| classification | classificatie Omgevingswet-Ruimten | O | Functieruimte |
| attribute | Name | R | — |
| attribute | Description | R | patroon `Functioneel Nuttige Inhoud|Netto Inhoud|Nuttige inhoud|Programma van Eisen inhoud` |

**Voorbeeld uit het voorbeeldmodel** - [`BM13_SPA_XX_M3D_ZZZ_Qto.ifc`](voorbeeldmodellen/BM13_SPA_XX_M3D_ZZZ_Qto.ifc): `IfcSpace` met ObjectType `Functieruimte` (16 objecten in het model):

```step
#124=IFCSPACE('3fkWy0pSzEHfnVjDYMlHkY',#7,'Hal','Functioneel Nuttige Inhoud','Functieruimte',#79,#116,'Hal',.ELEMENT.,.USERDEFINED.,$);
#150=IFCELEMENTQUANTITY('2rMx5yzCU0JSm8rpJjTjn1',#7,'Qto_SpaceBaseQuantities',$,$,(#145,#146,#147,#148,#149));
#145=IFCQUANTITYLENGTH('Height','',$,3048.,$);
#146=IFCQUANTITYAREA('GrossFloorArea','',$,3.2486999999999999,$);
#147=IFCQUANTITYAREA('NetFloorArea','',$,3.2486999999999999,$);
#148=IFCQUANTITYAREA('GrossCeilingArea','',$,3.2486999999999999,$);
#149=IFCQUANTITYVOLUME('NetVolume','',$,8.511593999999997,$);
#2656=IFCRELASSOCIATESCLASSIFICATION('3l6ScGRYfhhYdwDM3Vdgqp',#7,'Functieruimte',':Functieruimte',(#124,#178,#309,#596,#683,#760,#1092,#1151,#1210,#1243,#1305,#1522,#1639,#1716,#1811,#1844),#152);
#152=IFCCLASSIFICATIONREFERENCE($,'Functieruimte',$,#33,$,$);
```

### 9.12b Verblijfsruimte

*Bestand:* [`26-9.12b-Verblijfsruimte.ids`](ids/26-9.12b-Verblijfsruimte.ids) · *IFC:* IFC4 IFC4X3_ADD2 · *Checks:* #1 #3 #5 #6 #9 #10 #13 #14 #15 #17

*Van toepassing op:* IfcZone of IfcSpace, elk met ObjectType

| Facet | Naam | Card. | Waarde |
|---|---|---|---|
| attribute | ObjectType | R | Verblijfsruimte |
| classification | classificatie Omgevingswet-Ruimten | O | Verblijfsruimte |
| attribute | Name | R | — |
| attribute | Description | R | patroon `Functioneel Nuttige Inhoud|Netto Inhoud|Nuttige inhoud|Programma van Eisen inhoud` |

**Voorbeeld uit het voorbeeldmodel** - [`BM13_SPA_XX_M3D_ZZZ_Qto.ifc`](voorbeeldmodellen/BM13_SPA_XX_M3D_ZZZ_Qto.ifc): `IfcSpace` met ObjectType `Verblijfsruimte` (2 objecten in het model):

```step
#418=IFCSPACE('3fkWy0pSzEHfnVjDYMlHkv',#7,'Woonkamer','Functioneel Nuttige Inhoud','Verblijfsruimte',#329,#406,'Woonkamer',.ELEMENT.,.USERDEFINED.,$);
#439=IFCELEMENTQUANTITY('3RzMfYNd91CoQDz2Do8sfL',#7,'Qto_SpaceBaseQuantities',$,$,(#434,#435,#436,#437,#438));
#434=IFCQUANTITYLENGTH('Height','',$,3047.9999999999995,$);
#435=IFCQUANTITYAREA('GrossFloorArea','',$,18.226134000000005,$);
#436=IFCQUANTITYAREA('NetFloorArea','',$,18.226134000000005,$);
#437=IFCQUANTITYAREA('GrossCeilingArea','',$,18.226134000000005,$);
#438=IFCQUANTITYVOLUME('NetVolume','',$,47.762101079999987,$);
#2657=IFCRELASSOCIATESCLASSIFICATION('0zM_wBwBtvFdnetjKQVc6g',#7,'Verblijfsruimte',':Verblijfsruimte',(#418,#494),#441);
#441=IFCCLASSIFICATIONREFERENCE($,'Verblijfsruimte',$,#33,$,$);
```

### 9.12c Bedruimte

*Bestand:* [`27-9.12c-Bedruimte.ids`](ids/27-9.12c-Bedruimte.ids) · *IFC:* IFC4 IFC4X3_ADD2 · *Checks:* #16

*Van toepassing op:* IfcZone of IfcSpace, elk met ObjectType

| Facet | Naam | Card. | Waarde |
|---|---|---|---|
| attribute | ObjectType | R | Bedruimte |
| classification | classificatie Omgevingswet-Ruimten | O | Bedruimte |
| attribute | Name | R | — |
| attribute | Description | R | patroon `Functioneel Nuttige Inhoud|Netto Inhoud|Nuttige inhoud|Programma van Eisen inhoud` |

**Voorbeeld uit het voorbeeldmodel** - [`BM13_SPA_XX_M3D_ZZZ_Qto.ifc`](voorbeeldmodellen/BM13_SPA_XX_M3D_ZZZ_Qto.ifc): `IfcSpace` met ObjectType `Bedruimte` (4 objecten in het model):

```step
#865=IFCSPACE('3fkWy0pSzEHfnVjDYMlHWr',#7,'Slaapkamer','Functioneel Nuttige Inhoud','Bedruimte',#780,#853,'Slaapkamer',.ELEMENT.,.USERDEFINED.,$);
#883=IFCELEMENTQUANTITY('2sJqi1kJ4Tf3zEGI1dzsyX',#7,'Qto_SpaceBaseQuantities',$,$,(#878,#879,#880,#881,#882));
#878=IFCQUANTITYLENGTH('Height','',$,3048.,$);
#879=IFCQUANTITYAREA('GrossFloorArea','',$,15.662548199999947,$);
#880=IFCQUANTITYAREA('NetFloorArea','',$,15.662548199999947,$);
#881=IFCQUANTITYAREA('GrossCeilingArea','',$,15.662548199999947,$);
#882=IFCQUANTITYVOLUME('NetVolume','',$,37.915518443999865,$);
#2658=IFCRELASSOCIATESCLASSIFICATION('27p1Q8LQdzLtLjIg7oWvXx',#7,'Bedruimte',':Bedruimte',(#865,#956,#1033,#1599),#885);
#885=IFCCLASSIFICATIONREFERENCE($,'Bedruimte',$,#33,$,$);
```

### 9.12d Restruimte

*Bestand:* [`28-9.12d-Restruimte.ids`](ids/28-9.12d-Restruimte.ids) · *IFC:* IFC4 IFC4X3_ADD2 · *Checks:* #5 #6

*Van toepassing op:* IfcZone of IfcSpace, elk met ObjectType

| Facet | Naam | Card. | Waarde |
|---|---|---|---|
| attribute | ObjectType | R | Restruimte |
| classification | classificatie Omgevingswet-Ruimten | O | Restruimte |
| attribute | Name | R | — |
| attribute | Description | R | patroon `Functioneel Nuttige Inhoud|Netto Inhoud|Nuttige inhoud|Programma van Eisen inhoud` |

**Voorbeeld uit het voorbeeldmodel** - [`BM13_SPA_XX_M3D_ZZZ_Qto.ifc`](voorbeeldmodellen/BM13_SPA_XX_M3D_ZZZ_Qto.ifc): `IfcSpace` met ObjectType `Restruimte` (4 objecten in het model):

```step
#1405=IFCSPACE('3fkWy0pSzEHfnVjDYMlHWG',#7,'Techniek','Functioneel Nuttige Inhoud','Restruimte',#1325,#1392,'Techniek',.ELEMENT.,.USERDEFINED.,$);
#1423=IFCELEMENTQUANTITY('1e4umVYEUdWZMNLvrTZwpG',#7,'Qto_SpaceBaseQuantities',$,$,(#1418,#1419,#1420,#1421,#1422));
#1418=IFCQUANTITYLENGTH('Height','',$,3048.,$);
#1419=IFCQUANTITYAREA('GrossFloorArea','',$,5.4842804543468535,$);
#1420=IFCQUANTITYAREA('NetFloorArea','',$,5.4842804543468535,$);
#1421=IFCQUANTITYAREA('GrossCeilingArea','',$,5.4842804543468535,$);
#1422=IFCQUANTITYVOLUME('NetVolume','',$,8.7044183493949525,$);
#2659=IFCRELASSOCIATESCLASSIFICATION('24vjXscOpN0lwz_WdfubEi',#7,'Restruimte',':Restruimte',(#1405,#1681,#2024,#2056),#1425);
#1425=IFCCLASSIFICATIONREFERENCE($,'Restruimte',$,#33,$,$);
```

### 9.13 Buitenruimte

*Bestand:* [`29-9.13-Buitenruimte.ids`](ids/29-9.13-Buitenruimte.ids) · *IFC:* IFC4 IFC4X3_ADD2 · *Checks:* #9 #10

*Van toepassing op:* IfcZone, IfcSpace of IfcExternalSpatialElement, elk met ObjectType en `IsExternal` = true

| Facet | Naam | Card. | Waarde |
|---|---|---|---|
| attribute | ObjectType | R | Buitenruimte |
| classification | classificatie Omgevingswet-Ruimten | O | Buitenruimte |
| attribute | Name | R | — |
| attribute | Description | R | patroon `Bebouwd Terreinvolume|Functioneel Nuttige Inhoud|Netto Inhoud|Nuttige inhoud|Onbebouwd Terreinvolume|Onderbouwd Terreinvolume|Overbouwd Terreinvolume|Programma van Eisen inhoud|Terreinvolume` |
| property | Pset_SpaceCommon.IsExternal | R | — |
| property | patroon `Pset_.*Common`.HandicapAccessible | R | — |
| property | patroon `Pset_.*Common`.PubliclyAccessible | R | — |

**Voorbeeld uit het voorbeeldmodel** - [`BM13_SPA_XX_M3D_ZZZ_Qto.ifc`](voorbeeldmodellen/BM13_SPA_XX_M3D_ZZZ_Qto.ifc): `IfcSpace` met ObjectType `Buitenruimte` (4 objecten in het model):

```step
#1876=IFCSPACE('0IvSXyEiX0d8ITjWoHxU$I',#7,'Overdekte buitenruimten','Overbouwd Terreinvolume','Buitenruimte',#1864,#1875,'Overdekte buitenruimten',.ELEMENT.,.USERDEFINED.,$);
#1882=IFCPROPERTYSET('0F6VrMtxODeNArwOhqR6K_',#7,'Pset_SpaceCommon',$,(#134,#135,#1878,#1881));
#134=IFCPROPERTYSINGLEVALUE('PubliclyAccessible',$,IFCBOOLEAN(.F.),$);
#135=IFCPROPERTYSINGLEVALUE('HandicapAccessible',$,IFCBOOLEAN(.F.),$);
#1878=IFCPROPERTYSINGLEVALUE('IsExternal',$,IFCBOOLEAN(.T.),$);
#1881=IFCPROPERTYSINGLEVALUE('Reference',$,IFCIDENTIFIER('Overdekte buitenruimten T1.3'),$);
#1896=IFCELEMENTQUANTITY('1lDnAm1ady1GEI0x7reYBx',#7,'Qto_SpaceBaseQuantities',$,$,(#1890,#1891,#1892,#1893,#1894,#1895));
#1890=IFCQUANTITYLENGTH('Height','',$,3047.9999999999995,$);
#1891=IFCQUANTITYAREA('GrossFloorArea','',$,4.3500000000000156,$);
#1892=IFCQUANTITYAREA('NetFloorArea','',$,4.3500000000000156,$);
#1893=IFCQUANTITYAREA('GrossCeilingArea','',$,4.3500000000000156,$);
#1894=IFCQUANTITYVOLUME('GrossVolume','',$,10.222500000000037,$);
#1895=IFCQUANTITYVOLUME('NetVolume','',$,10.222500000000039,$);
#2660=IFCRELASSOCIATESCLASSIFICATION('0mytdXd28Buq$v$EdhR3uH',#7,'Buitenruimte',':Buitenruimte',(#1876,#2168,#2242,#2264),#1898);
#1898=IFCCLASSIFICATIONREFERENCE($,'Buitenruimte',$,#33,$,$);
```

### 9.16a Brandcompartiment

*Bestand:* [`30-9.16a-Brandcompartiment.ids`](ids/30-9.16a-Brandcompartiment.ids) · *IFC:* IFC4 IFC4X3_ADD2 · *Checks:* #7 #8 #14 #15

*Van toepassing op:* IfcZone of IfcSpatialZone, elk met ObjectType

| Facet | Naam | Card. | Waarde |
|---|---|---|---|
| attribute | ObjectType | R | Brandcompartiment |
| classification | classificatie Omgevingswet-Ruimten | O | Brandcompartiment |
| attribute | Name | R | — |
| attribute | Description | R | patroon `Bruto Inhoud|Gebruiksinhoud|Netto Inhoud` |
| property | Pset_SpaceFireSafetyRequirements.FireRiskFactor | O | — |
| property | Pset_SpaceFireSafetyRequirements.FireExit | O | — |
| property | Pset_SpaceFireSafetyRequirements.FlammableStorage | O | — |
| property | Pset_SpaceFireSafetyRequirements.SprinklerProtection | O | — |
| property | Pset_SpaceFireSafetyRequirements.SprinklerProtectionAutomatic | O | — |
| property | Pset_SpaceFireSafetyRequirements.AirPressurization | O | — |

**Voorbeeld uit het voorbeeldmodel** - [`BM13_SPA_XX_M3D_ZZZ_Qto.ifc`](voorbeeldmodellen/BM13_SPA_XX_M3D_ZZZ_Qto.ifc): `IfcZone` met ObjectType `Brandcompartiment` (1 object in het model):

```step
#2613=IFCZONE('0t4FvuABxUaOmTinQ46K5a',#7,'BC_01','Beperking van uitbreiding van brand','Brandcompartiment','brandcompartiment');
#2671=IFCRELASSOCIATESCLASSIFICATION('0pbctsK57ujwizi3YQ7tF8',#7,'[Omgevingswet-Ruimten] Brandcompartiment:','[Omgevingswet-Ruimten] Brandcompartiment::',(#2613),#129);
#129=IFCCLASSIFICATIONREFERENCE($,'Brandcompartiment',$,#33,$,$);
#2614=IFCRELASSIGNSTOGROUP('17U7VPBnOUGctnXDu9Fooe',#7,'Spatial Zone Assignment',$,(#124,#178,#309,#418,#494,#596,#683,#760,#865,#956,#1033,#1092,#1151,#1210,#1243,#1305,#1405,#1522,#1599,#1639,#1681,#1716,#1811),$,#2613);
```

> Bij dit object ontbreekt nog of klopt nog niet: `Description`.

### 9.16b Subbrandcompartiment

*Bestand:* [`31-9.16b-Subbrandcompartiment.ids`](ids/31-9.16b-Subbrandcompartiment.ids) · *IFC:* IFC4 IFC4X3_ADD2 · *Checks:* #15

*Van toepassing op:* IfcZone of IfcSpatialZone, elk met ObjectType

| Facet | Naam | Card. | Waarde |
|---|---|---|---|
| attribute | ObjectType | R | Subbrandcompartiment |
| classification | classificatie Omgevingswet-Ruimten | O | Subbrandcompartiment |
| attribute | Name | R | — |
| attribute | Description | R | patroon `Bruto Inhoud|Gebruiksinhoud|Netto Inhoud` |
| property | Pset_SpaceFireSafetyRequirements.FireRiskFactor | O | — |
| property | Pset_SpaceFireSafetyRequirements.FireExit | O | — |
| property | Pset_SpaceFireSafetyRequirements.FlammableStorage | O | — |
| property | Pset_SpaceFireSafetyRequirements.SprinklerProtection | O | — |
| property | Pset_SpaceFireSafetyRequirements.SprinklerProtectionAutomatic | O | — |
| property | Pset_SpaceFireSafetyRequirements.AirPressurization | O | — |

**Voorbeeld uit het voorbeeldmodel** - [`BM13_SPA_XX_M3D_ZZZ_Qto.ifc`](voorbeeldmodellen/BM13_SPA_XX_M3D_ZZZ_Qto.ifc): `IfcZone` met ObjectType `Subbrandcompartiment` (1 object in het model):

```step
#2615=IFCZONE('1gL$6OmzknJGkM_VD0vL8J',#7,'BC_01.1','Verdere beperking van uitbreiding van brand','Subbrandcompartiment','subrandcompartiment');
#2672=IFCRELASSOCIATESCLASSIFICATION('0kLQctNqBzwwYbbXlfOx12',#7,'[Omgevingswet-Ruimten] Subbrandcompartiment:','[Omgevingswet-Ruimten] Subbrandcompartiment::',(#2615),#130);
#130=IFCCLASSIFICATIONREFERENCE($,'Subbrandcompartiment',$,#33,$,$);
#2616=IFCRELASSIGNSTOGROUP('27D3gw$h9T2JhlHA1ba5_2',#7,'Spatial Zone Assignment',$,(#124),$,#2615);
```

> Bij dit object ontbreekt nog of klopt nog niet: `Description`.

### 9.16c Vluchtroute

*Bestand:* [`32-9.16c-Vluchtroute.ids`](ids/32-9.16c-Vluchtroute.ids) · *IFC:* IFC4 IFC4X3_ADD2 · *Checks:* #14 #15 #16

*Van toepassing op:* IfcZone of IfcSpatialZone, elk met ObjectType

| Facet | Naam | Card. | Waarde |
|---|---|---|---|
| attribute | ObjectType | R | Vluchtroute |
| classification | classificatie Omgevingswet-Ruimten | O | Vluchtroute |
| attribute | Name | R | — |
| attribute | Description | R | patroon `Bruto Inhoud|Gebruiksinhoud|Netto Inhoud` |
| property | Pset_SpaceFireSafetyRequirements.FireRiskFactor | O | — |
| property | Pset_SpaceFireSafetyRequirements.FireExit | R | true |
| property | Pset_SpaceFireSafetyRequirements.FlammableStorage | O | — |
| property | Pset_SpaceFireSafetyRequirements.SprinklerProtection | O | — |
| property | Pset_SpaceFireSafetyRequirements.AirPressurization | O | — |

**Voorbeeld uit het voorbeeldmodel** - [`BM13_SPA_XX_M3D_ZZZ_Qto.ifc`](voorbeeldmodellen/BM13_SPA_XX_M3D_ZZZ_Qto.ifc): `IfcZone` met ObjectType `Vluchtroute` (1 object in het model):

```step
#2619=IFCZONE('1B5wI_0SnF_W4gCEA3Mk5R',#7,'VR_V','Een bouwwerk heeft zodanige vluchtroutes dat bij brand een veilige plaats kan worden bereikt','Vluchtroute','vluchtroute');
#2674=IFCRELASSOCIATESCLASSIFICATION('2EsYaSIWw36$J6FWtIzx3V',#7,'[Omgevingswet-Ruimten] Vluchtroute:','[Omgevingswet-Ruimten] Vluchtroute::',(#2619),#132);
#132=IFCCLASSIFICATIONREFERENCE($,'Vluchtroute',$,#33,$,$);
#2620=IFCRELASSIGNSTOGROUP('3zGdRk05fg27GigdiIS8ki',#7,'Spatial Zone Assignment',$,(#124,#309,#683,#1305,#1639,#1716,#1811),$,#2619);
```

> Bij dit object ontbreekt nog of klopt nog niet: `Description`, `Pset_SpaceFireSafetyRequirements.FireExit`.

### 9.16d Beschermd subbrandcompartiment

*Bestand:* [`43-9.16d-Beschermd-subbrandcompartiment.ids`](ids/43-9.16d-Beschermd-subbrandcompartiment.ids) · *IFC:* IFC4 IFC4X3_ADD2 · *Checks:* #15

*Van toepassing op:* IfcZone of IfcSpatialZone, elk met ObjectType

Een beschermd subbrandcompartiment heeft dezelfde eisen als een subbrandcompartiment (9.16b), met ObjectType `Beschermd subbrandcompartiment`.

| Facet | Naam | Card. | Waarde |
|---|---|---|---|
| attribute | ObjectType | R | Beschermd subbrandcompartiment |
| classification | classificatie Omgevingswet-Ruimten | O | Subbrandcompartiment |
| attribute | Name | R | — |
| attribute | Description | R | patroon `Bruto Inhoud|Gebruiksinhoud|Netto Inhoud` |
| property | Pset_SpaceFireSafetyRequirements.FireRiskFactor | O | — |
| property | Pset_SpaceFireSafetyRequirements.FireExit | O | — |
| property | Pset_SpaceFireSafetyRequirements.FlammableStorage | O | — |
| property | Pset_SpaceFireSafetyRequirements.SprinklerProtection | O | — |
| property | Pset_SpaceFireSafetyRequirements.SprinklerProtectionAutomatic | O | — |
| property | Pset_SpaceFireSafetyRequirements.AirPressurization | O | — |

**Voorbeeld uit het voorbeeldmodel** - [`BM13_SPA_XX_M3D_ZZZ_Qto.ifc`](voorbeeldmodellen/BM13_SPA_XX_M3D_ZZZ_Qto.ifc): `IfcZone` met ObjectType `Beschermd-subbrandcompartiment` (1 object in het model):

```step
#2617=IFCZONE('0oLbdj7ySpws9JgjrgA5bU',#7,'BC_01.1.1','Verdere beperking van verspreiding van rook','Beschermd-subbrandcompartiment','beschermde-subrandcompartiment');
#2673=IFCRELASSOCIATESCLASSIFICATION('263W4hhNVIriPbPJAKJCZO',#7,'[Omgevingswet-Ruimten] Beschermd-subbrandcompartiment:','[Omgevingswet-Ruimten] Beschermd-subbrandcompartiment::',(#2617),#131);
#131=IFCCLASSIFICATIONREFERENCE($,'Beschermd-subbrandcompartiment',$,#33,$,$);
#2618=IFCRELASSIGNSTOGROUP('2_erm2BqHz82v_tzIZ$xF0',#7,'Spatial Zone Assignment',$,(#124),$,#2617);
```

> In het voorbeeldmodel heeft dit object ObjectType `Beschermd-subbrandcompartiment`; de IDS vraagt `Beschermd subbrandcompartiment`. Het object valt daardoor nog niet onder deze specificatie.

> Bij dit object ontbreekt nog of klopt nog niet: `Description`.

### 9.17 Tarra Ruimte

*Bestand:* [`33-9.17-Tarra-Ruimte.ids`](ids/33-9.17-Tarra-Ruimte.ids) · *IFC:* IFC4 IFC4X3_ADD2 · *Checks:* #5 #6 #15

*Van toepassing op:* IfcZone of IfcSpatialZone, elk met ObjectType

| Facet | Naam | Card. | Waarde |
|---|---|---|---|
| attribute | ObjectType | R | Tarra Ruimte |
| classification | classificatie Omgevingswet-Ruimten | O | TarraRuimte |
| attribute | Name | R | — |
| attribute | Description | R | Tarra Inhoud |

> Dit objecttype komt (nog) niet voor in het voorbeeldmodel.

### 9.18a Fysieke elementen IfcBeam

*Bestand:* [`34-9.18a-Fysieke-elementen-IfcBeam.ids`](ids/34-9.18a-Fysieke-elementen-IfcBeam.ids) · *IFC:* IFC4 IFC4X3_ADD2 · *Checks:* #7 #8

*Van toepassing op:* IfcBeam

| Facet | Naam | Card. | Waarde |
|---|---|---|---|
| property | Pset_BeamCommon.FireRating | O | patroon `(R|E|RE|REI|REW|EI|EI1|EI2|EW) (15|20|30|45|60|90|120|180|240|360)(-(Sa|S200|C[0-5]?|M))*` |
| property | Pset_BeamCommon.IsExternal | O | — |
| property | Pset_BeamCommon.LoadBearing | R | — |
| property | Pset_BeamCommon.ThermalTransmittance | O | — |

> Dit objecttype komt (nog) niet voor in het voorbeeldmodel.

### 9.18b Fysieke elementen IfcColumn

*Bestand:* [`35-9.18b-Fysieke-elementen-IfcColumn.ids`](ids/35-9.18b-Fysieke-elementen-IfcColumn.ids) · *IFC:* IFC4 IFC4X3_ADD2 · *Checks:* #7 #8

*Van toepassing op:* IfcColumn

| Facet | Naam | Card. | Waarde |
|---|---|---|---|
| property | Pset_ColumnCommon.FireRating | O | patroon `(R|E|RE|REI|REW|EI|EI1|EI2|EW) (15|20|30|45|60|90|120|180|240|360)(-(Sa|S200|C[0-5]?|M))*` |
| property | Pset_ColumnCommon.IsExternal | O | — |
| property | Pset_ColumnCommon.LoadBearing | R | — |
| property | Pset_ColumnCommon.ThermalTransmittance | O | — |

> Dit objecttype komt (nog) niet voor in het voorbeeldmodel.

### 9.18c Fysieke elementen IfcCovering.INSULATION

*Bestand:* [`36-9.18c-Fysieke-elementen-IfcCovering.INSULATION.ids`](ids/36-9.18c-Fysieke-elementen-IfcCovering.INSULATION.ids) · *IFC:* IFC4 IFC4X3_ADD2 · *Checks:* #11

*Van toepassing op:* IfcCovering (PredefinedType INSULATION)

| Facet | Naam | Card. | Waarde |
|---|---|---|---|
| property | Pset_CoveringCommon.AcousticRating | O | — |
| property | Pset_CoveringCommon.Combustible | R | — |
| property | Pset_CoveringCommon.FireRating | O | patroon `(R|E|RE|REI|REW|EI|EI1|EI2|EW) (15|20|30|45|60|90|120|180|240|360)(-(Sa|S200|C[0-5]?|M))*` |
| property | Pset_CoveringCommon.FlammabilityRating | O | — |
| property | Pset_CoveringCommon.IsExternal | O | — |
| property | Pset_CoveringCommon.SurfaceSpreadOfFlame | O | patroon `(A1|A2|B|C|D|E|F)(-s[1-3])?(,d[0-2])?` |
| property | Pset_CoveringCommon.ThermalTransmittance | O | — |

> Dit objecttype komt (nog) niet voor in het voorbeeldmodel.

### 9.18d Fysieke elementen IfcCurtainWall

*Bestand:* [`37-9.18d-Fysieke-elementen-IfcCurtainWall.ids`](ids/37-9.18d-Fysieke-elementen-IfcCurtainWall.ids) · *IFC:* IFC4 IFC4X3_ADD2 · *Checks:* #7 #8 #11 #12 #17

*Van toepassing op:* IfcCurtainWall

| Facet | Naam | Card. | Waarde |
|---|---|---|---|
| property | Pset_CurtainWallCommon.AcousticRating | O | — |
| property | Pset_CurtainWallCommon.Combustible | O | — |
| property | Pset_CurtainWallCommon.FireRating | O | patroon `(R|E|RE|REI|REW|EI|EI1|EI2|EW) (15|20|30|45|60|90|120|180|240|360)(-(Sa|S200|C[0-5]?|M))*` |
| property | Pset_CurtainWallCommon.IsExternal | O | — |
| property | Pset_CurtainWallCommon.SurfaceSpreadOfFlame | O | — |
| property | Pset_CurtainWallCommon.ThermalTransmittance | O | — |

> Dit objecttype komt (nog) niet voor in het voorbeeldmodel.

### 9.18e Fysieke elementen IfcDoor

*Bestand:* [`38-9.18e-Fysieke-elementen-IfcDoor.ids`](ids/38-9.18e-Fysieke-elementen-IfcDoor.ids) · *IFC:* IFC4 IFC4X3_ADD2 · *Checks:* #7 #8 #12 #14 #15 #16 #17

*Van toepassing op:* IfcDoor

| Facet | Naam | Card. | Waarde |
|---|---|---|---|
| property | Pset_DoorCommon.AcousticRating | O | — |
| property | Pset_DoorCommon.FireExit | O | — |
| property | Pset_DoorCommon.FireRating | O | patroon `(R|E|RE|REI|REW|EI|EI1|EI2|EW) (15|20|30|45|60|90|120|180|240|360)(-(Sa|S200|C[0-5]?|M))*` |
| property | Pset_DoorCommon.HandicapAccessible | O | — |
| property | Pset_DoorCommon.IsExternal | O | — |
| property | Pset_DoorCommon.SecurityRating | O | — |
| property | Pset_DoorCommon.SelfClosing | O | — |
| property | Pset_DoorCommon.SmokeStop | O | — |

> Dit objecttype komt (nog) niet voor in het voorbeeldmodel.

### 9.18g Fysieke elementen IfcSlab

*Bestand:* [`40-9.18g-Fysieke-elementen-IfcSlab.ids`](ids/40-9.18g-Fysieke-elementen-IfcSlab.ids) · *IFC:* IFC4 IFC4X3_ADD2 · *Checks:* #7 #8 #9 #10 #11 #13 #14 #15 #16

*Van toepassing op:* IfcSlab

| Facet | Naam | Card. | Waarde |
|---|---|---|---|
| property | Pset_SlabCommon.AcousticRating | O | — |
| property | Pset_SlabCommon.Combustible | O | — |
| property | Pset_SlabCommon.Compartmentation | O | — |
| property | Pset_SlabCommon.FireRating | O | patroon `(R|E|RE|REI|REW|EI|EI1|EI2|EW) (15|20|30|45|60|90|120|180|240|360)(-(Sa|S200|C[0-5]?|M))*` |
| property | Pset_SlabCommon.IsExternal | O | — |
| property | Pset_SlabCommon.LoadBearing | R | — |
| property | Pset_SlabCommon.SurfaceSpreadOfFlame | O | — |
| property | Pset_SlabCommon.ThermalTransmittance | O | — |

> Dit objecttype komt (nog) niet voor in het voorbeeldmodel.

### 9.18h Fysieke elementen IfcWall

*Bestand:* [`41-9.18h-Fysieke-elementen-IfcWall.ids`](ids/41-9.18h-Fysieke-elementen-IfcWall.ids) · *IFC:* IFC4 IFC4X3_ADD2 · *Checks:* #7 #8 #9 #11 #13 #16 #17

*Van toepassing op:* IfcWall

| Facet | Naam | Card. | Waarde |
|---|---|---|---|
| property | Pset_WallCommon.AcousticRating | O | — |
| property | Pset_WallCommon.Combustible | O | — |
| property | Pset_WallCommon.Compartmentation | O | — |
| property | Pset_WallCommon.FireRating | O | patroon `(R|E|RE|REI|REW|EI|EI1|EI2|EW) (15|20|30|45|60|90|120|180|240|360)(-(Sa|S200|C[0-5]?|M))*` |
| property | Pset_WallCommon.IsExternal | O | — |
| property | Pset_WallCommon.LoadBearing | R | — |
| property | Pset_WallCommon.SurfaceSpreadOfFlame | O | — |
| property | Pset_WallCommon.ThermalTransmittance | O | — |

> Dit objecttype komt (nog) niet voor in het voorbeeldmodel.

### 9.18i Fysieke elementen Ifcwindow

*Bestand:* [`42-9.18i-Fysieke-elementen-IfcWindow.ids`](ids/42-9.18i-Fysieke-elementen-IfcWindow.ids) · *IFC:* IFC4 IFC4X3_ADD2 · *Checks:* #12 #17

*Van toepassing op:* IfcWindow

| Facet | Naam | Card. | Waarde |
|---|---|---|---|
| property | Pset_WindowCommon.AcousticRating | O | — |
| property | Pset_WindowCommon.FireExit | O | — |
| property | Pset_WindowCommon.FireRating | O | patroon `(R|E|RE|REI|REW|EI|EI1|EI2|EW) (15|20|30|45|60|90|120|180|240|360)(-(Sa|S200|C[0-5]?|M))*` |
| property | Pset_WindowCommon.GlazingAreaFraction | O | — |
| property | Pset_WindowCommon.IsExternal | R | — |
| property | Pset_WindowCommon.SecurityRating | O | — |
| property | Pset_WindowCommon.SmokeStop | O | — |
| property | Pset_WindowCommon.ThermalTransmittance | O | — |

> Dit objecttype komt (nog) niet voor in het voorbeeldmodel.
