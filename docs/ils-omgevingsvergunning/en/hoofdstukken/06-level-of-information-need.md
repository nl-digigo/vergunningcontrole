# Level of Information Need

The Level of Information Need (LOIN, ISO 7817-1:2024) sets out, for each information need, which **alphanumeric information**, **geometry** and **documentation** is required. In this ILS, the LOIN is made up of the following parts:

1. **Alphanumeric** — recorded in machine-readable form in 46 IDS sub-specifications (IDS 1.0): 45 current modelling requirements; 9.17 is withdrawn but retained for compatibility. Summarised per specification below; the IDS content (names, values) is kept in Dutch.
2. **Geometric** — requirements on the shape and quality of the geometry, which IDS cannot check. See [Geometric requirements](#loin-geometrie) below and [Geometric checking](#geometrie).
3. **Documentation** — additional files as required by the standard submission requirements (PDF/A drawings, reports), see [Information production standard](#standaard).

## LOIN per information need (summary)

| Aspect | Content |
|---|---|
| Purpose | Automated checking of the application against 17 checks (OPA and TBA) |
| Milestone | Preliminary consultation (*vooroverleg*), *omgevingsplanactiviteit* application, *technische bouwactiviteit* application; which specifications are mandatory per milestone is shown in the [matrix per milestone](#mijlpalenmatrix) |
| Actors | Applicant/modeller delivers, municipality (permit authority) checks |
| Objects | Spatial objects (IfcSpace, IfcSpatialZone, IfcZone), building, storeys, physical elements (IfcWall, IfcDoor, IfcRoof, IfcStair, IfcRamp, IfcTransportElement, IfcRailing) |
| Alphanumeric | IDS sub-specifications 01–49 (05, 06 and 39 withdrawn) |
| Geometry | Volumetric (solid) spaces, RD/NAP georeferencing, level of detail as in the table below |
| Documentation | IFC (STEP), PDF/A drawings derived from the model, IDS validation report (BCF or HTML) |

<a id="loin-geometrie"></a>

## Geometric requirements

| Requirement | Explanation | Needed for checks |
|---|---|---|
| G1 Solid geometry | Spaces and zones are closed volumes (no loose surfaces), so that area and volume can be recalculated | #2 #3 #5 #7 #9 #10 #14–#17 |
| G2 Georeferencing | IfcMapConversion or IfcMapConversionScaled + IfcProjectedCRS (in IFC4.3, IfcMapConversionScaled is the recommended route for RD with NAP), EPSG:28992 (RD) / EPSG:7415 (RD+NAP), units in metres. `MapUnit` of `IfcProjectedCRS` is filled in and is the metre (not checked with the IDS; an IDS can only check its presence) | #1–#6 |
| G3 Elevation | Height relative to NAP; datum level and storey heights consistent across discipline models | #2 #4 #6 #10 |
| G4 No duplicates | No duplicate or overlapping objects of the same type (e.g. a slab split on export must not be counted twice) | #3 #5 #7 #13 |
| G5 Quantities included | Quantity sets (Qto_…) calculated and exported by the CAD software; the recipient (the municipality) recalculates them as a check | #3 #5 #7 #13 #15 #17 |
| G6 Measuring method | Areas and volumes according to NEN 2580; model exceptions (pitched roofs, dormers) explicitly | #3 #5 #7 #17 |

## LOIN per sub-specification (alphanumeric)

Per specification: which objects the requirement applies to (applicability) and which information is required (**R**), optional (**O**) or prohibited (**X**). Specification names and values are the original Dutch IDS content.

In the tables, the colour in the *Facet* column shows the kind of requirement: **attribute** in blue, **property** in green and **classification** in purple. `ObjectType` is shown as required in the table, also where the IDS uses it to determine which objects the specification applies to.

> The STEP excerpts come from the sample model [BM13_SPA_XX_M3D_ZZZ_Qto.ifc](../voorbeeldmodellen/BM13_SPA_XX_M3D_ZZZ_Qto.ifc). Object types that do not occur in this model have no excerpt. Where the model still deviates from the specification, this is stated below the excerpt; see also [Sample models](#voorbeeldmodellen).

### 9 ILS Omgevingsvergunning

*File:* [`01-9.00-ILS-Omgevingsvergunning.ids`](../ids/01-9.00-ILS-Omgevingsvergunning.ids) · *IFC:* IFC4 IFC4X3_ADD2 · *Checks:* #1 #2 #3 #4 #5 #6 #7 #8 #9 #10 #11 #12 #13 #14 #15 #16 #17

*Applies to:* IfcZone, IfcSpatialZone, IfcSpace or IfcExternalSpatialElement

This specification applies to all spatial objects and requires a filled-in `GlobalId` and a filled-in `Name`. That spaces and areas have geometry of their own is a geometric requirement (G1) and is not checked with the IDS. An `IfcZone` has no geometry of its own, because it is a relationship object.

| Facet | Name | Card. | Value |
|---|---|---|---|
| attribute | GlobalId | R | — |
| attribute | Name | R | — |

**Example from the sample model** — `IfcSpace` with ObjectType `Functieruimte` from [`BM13_SPA_XX_M3D_ZZZ_Qto.ifc`](../voorbeeldmodellen/BM13_SPA_XX_M3D_ZZZ_Qto.ifc) (57 objects in the model):

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

*File:* [`02-9.01a-Georeferentie.ids`](../ids/02-9.01a-Georeferentie.ids) · *IFC:* IFC4 IFC4X3_ADD2 · *Checks:* #1 #2 #3 #4 #5 #6 #7 #10 #17

*Applies to:* IfcMapConversion or IfcMapConversionScaled

| Facet | Name | Card. | Value |
|---|---|---|---|
| attribute | Eastings | R | — |
| attribute | Northings | R | — |
| attribute | OrthogonalHeight | R | — |
| attribute | XAxisAbscissa | R | — |
| attribute | XAxisOrdinate | R | — |
| attribute | Scale | R | — |

**Example from the sample model** — `IfcMapConversion` from [`BM13_SPA_XX_M3D_ZZZ_Qto.ifc`](../voorbeeldmodellen/BM13_SPA_XX_M3D_ZZZ_Qto.ifc) (1 object in the model):

```step
#21=IFCMAPCONVERSION(#14,#20,146995.99999999998,451443.99999999996,4.0000000000000009,1.,6.123233995736766E-017,0.001);
```

### 9.01b Coördinatenstelsel

*File:* [`03-9.01b-Coordinatenstelsel.ids`](../ids/03-9.01b-Coordinatenstelsel.ids) · *IFC:* IFC4 IFC4X3_ADD2 · *Checks:* #1 #2 #3 #4 #5 #6 #7 #10 #17

*Applies to:* IfcProjectedCRS

| Facet | Name | Card. | Value |
|---|---|---|---|
| attribute | Name | R | EPSG:7415 \| EPSG:28992 |

**Example from the sample model** — `IfcProjectedCRS` from [`BM13_SPA_XX_M3D_ZZZ_Qto.ifc`](../voorbeeldmodellen/BM13_SPA_XX_M3D_ZZZ_Qto.ifc) (1 object in the model):

```step
#20=IFCPROJECTEDCRS('EPSG:7415','Netherlands, Amersfoort datum, New System','Amersfoort/b',$,$,$,#19);
```

### 9.01c Projectadres (IFC4X3_ADD2)

*File:* [`04-9.01c-Projectadres-IFC4X3-ADD2.ids`](../ids/04-9.01c-Projectadres-IFC4X3-ADD2.ids) · *IFC:* IFC4X3_ADD2 · *Checks:* #1 #2 #3 #4 #5 #6

*Applies to:* IfcSite or IfcBuilding

The project address is optional. Fill it in for a building with a postal address; leave it empty when there are several buildings or functions. The location follows from the georeferencing (9.01a and 9.01b), not from the address.

| Facet | Name | Card. | Value |
|---|---|---|---|
| property | Pset_Address.AddressLines | O | — |
| property | Pset_Address.Country | O | NL |
| property | Pset_Address.PostalCode | O | — |
| property | Pset_Address.Town | O | — |

**Example from the sample model** — `IfcBuilding` from [`BM13_SPA_XX_M3D_ZZZ_Qto.ifc`](../voorbeeldmodellen/BM13_SPA_XX_M3D_ZZZ_Qto.ifc) (2 objects in the model):

```step
#29=IFCBUILDING('1W5FQV6hz2U80I8tmdGsoB',#7,'Gezins tussen woning',$,$,#28,$,'Gezins tussen woning',.ELEMENT.,$,$,$);
#2548=IFCPROPERTYSET('3mDybgfXJ$6cFueBW8MDLl',#7,'Pset_Address',$,(#2544,#2545,#2546,#2547));
#2544=IFCPROPERTYLISTVALUE('AddressLines',$,(IFCLABEL('Valkenkamp 61')),$);
#2545=IFCPROPERTYSINGLEVALUE('Town',$,IFCLABEL('Driebergen-Rijsenburg'),$);
#2546=IFCPROPERTYSINGLEVALUE('PostalCode',$,IFCLABEL('3972 ZB'),$);
#2547=IFCPROPERTYSINGLEVALUE('Country',$,IFCLABEL('NL'),$);
```

### 9.01f Verticaal datum (NAP)

*File:* [`44-9.01f-Verticaal-datum.ids`](../ids/44-9.01f-Verticaal-datum.ids) · *IFC:* IFC4 IFC4X3_ADD2 · *Checks:* #2 #4 #6 #10

*Applies to:* IfcProjectedCRS with `Name` = EPSG:28992

| Facet | Name | Card. | Value |
|---|---|---|---|
| attribute | VerticalDatum | R | EPSG:5709 |

> No object in the sample model falls under the applicability of this specification.

### 9.02 Project

*File:* [`07-9.02-Project.ids`](../ids/07-9.02-Project.ids) · *IFC:* IFC4 IFC4X3_ADD2 · *Checks:* #1 #2 #3 #4 #5 #6 #7 #8 #9 #10 #11 #12 #13 #14 #15 #16 #17

*Applies to:* IfcProject

The requirement on units (objects in millimetres, georeferencing in metres, see [Information production standard](#standaard)) still applies, but is not checked with the IDS.

| Facet | Name | Card. | Value |
|---|---|---|---|
| attribute | Name | R | — |
| attribute | Description | R | — |
| attribute | Phase | O | pattern `01 Initiatief/haalbaarheid|02 Projectdefinitie|03 Structuurontwerp|04 Voorontwerp|05 Definitief ontwerp|06 Technisch ontwerp/Bestek|07 Prijs- en Contractvorming|07 Prijs- en contractvorming|08 Uitvoering - Uitvoeringsgereed Ontwerp|09 Uitvoering - Directievoering|10 Gebruik/Exploitatie|1. Initiatief|1.1 Iniatief|INI|1.2 Haalbaarheid|HBH|1.3 Projectdefinitie|PD|2. Ontwerp|2.1 Structuurontwerp|SO|2.2 Voorontwerp|VO|2.3 Definitief Ontwerp|DO|2.4 Omgevingsvergunning|OV|3. Engineering|3.1 Technisch Ontwerp|TO|3.2 Uitvoeringsgereed Ontwerp|UO|4. Realisatie|4.1 Uitvoering|UV|4.2 Oplevering & Overdracht|OO|4.3 Onderhoudstermijn|5. Gebruik` |
| property | Pset_ProjectCommon.ProjectType | O | NEWBUILD \| MODIFICATION \| OPERATIONMAINTENANCE \| RENOVATION \| REPAIR |
| property | Pset_ProjectCommon.ProjectInvestmentEstimate | O | — |

**Example from the sample model** — `IfcProject` from [`BM13_SPA_XX_M3D_ZZZ_Qto.ifc`](../voorbeeldmodellen/BM13_SPA_XX_M3D_ZZZ_Qto.ifc) (1 object in the model):

```step
#22=IFCPROJECT('1W5FQV6hz2U80I8tmdGsoA',#7,'3583269901','Bestaande huidige bouwkundige staat',$,'Woning fam. B','5. Gebruik',(#14),#2681);
#24=IFCPROPERTYSET('067Qt_S8luiRs0mvafG9w$',#7,'Pset_ProjectCommon',$,(#23));
#23=IFCPROPERTYENUMERATEDVALUE('ProjectType',$,(IFCLABEL('MODIFICATION')),$);
```

### 9.03a Perceel

*File:* [`08-9.03a-Perceel.ids`](../ids/08-9.03a-Perceel.ids) · *IFC:* IFC4X3_ADD2 IFC4 · *Checks:* #3 #10 #14 #17

*Applies to:* IfcSite

An `IfcSite` does not need geometry or a placement of its own. The cadastral parcel is a separate object (9.04).

| Facet | Name | Card. | Value |
|---|---|---|---|
| attribute | Name | R | — |
| attribute | ObjectType | R | Perceel |
| property | Pset_LandRegistration.IsPermanentID | R | true |
| property | Pset_LandRegistration.LandID | O | — |
| property | Pset_LandRegistration.LandTitleID | O | — |

**Example from the sample model** — `IfcSite` with ObjectType `Perceel` from [`BM13_SPA_XX_M3D_ZZZ_Qto.ifc`](../voorbeeldmodellen/BM13_SPA_XX_M3D_ZZZ_Qto.ifc) (1 object in the model):

```step
#60=IFCSITE('1W5FQV6hz2U80I8tmdGso8',#7,'Wildbaan','Utrechtse Heuvelrug','Perceel',#59,$,'Driebergen-Rijsenburg',.ELEMENT.,(52,3,4,501647),(5,16,13,857307),4.0000000000000009,$,$);
#69=IFCPROPERTYSET('3wk2$TGv4AWXVlCdRahrgC',#7,'Pset_LandRegistration',$,(#66,#67,#68));
#66=IFCPROPERTYSINGLEVALUE('LandID',$,IFCIDENTIFIER('(DBG01) C 2449'),$);
#67=IFCPROPERTYSINGLEVALUE('IsPermanentID',$,IFCBOOLEAN(.T.),$);
#68=IFCPROPERTYSINGLEVALUE('LandTitleID',$,IFCIDENTIFIER('Driebergen-Rijsenburg'),$);
```

### 9.03b Bouwwerkperceel

*File:* [`09-9.03b-Bouwwerkperceel.ids`](../ids/09-9.03b-Bouwwerkperceel.ids) · *IFC:* IFC4 IFC4X3_ADD2 · *Checks:* #1 #2 #3 #5 #6 #7 #17

*Applies to:* IfcZone, IfcSpatialZone or IfcSpace, each with ObjectType

| Facet | Name | Card. | Value |
|---|---|---|---|
| attribute | ObjectType | R | Bouwwerkperceel |
| classification | classification Omgevingswet-Ruimten | O | Bouwwerkperceel |
| attribute | Name | R | — |
| attribute | Description | R | Terreinvolume |

**Example from the sample model** — `IfcSpatialZone` with ObjectType `Bouwwerkperceel` from [`BM13_SPA_XX_M3D_ZZZ_Qto.ifc`](../voorbeeldmodellen/BM13_SPA_XX_M3D_ZZZ_Qto.ifc) (1 object in the model):

```step
#1994=IFCSPATIALZONE('2nSP8tGs98Tv7GL2eZsOvx',#7,'Tussenwoning project x','Terreinvolume','Bouwwerkperceel',#1986,#1993,$,.USERDEFINED.);
#2002=IFCELEMENTQUANTITY('18EkKd8PFNHmnM2o2JfgHV',#7,'Qto_SpatialZoneBaseQuantities',$,$,(#2001));
#2001=IFCQUANTITYLENGTH('Height','',$,2799.9999999999995,$);
#2663=IFCRELASSOCIATESCLASSIFICATION('2sEN8Dbz5hirbs0$SdVm2U',#7,'Bouwwerkperceel',':Bouwwerkperceel',(#1994),#2004);
#2004=IFCCLASSIFICATIONREFERENCE($,'Bouwwerkperceel',$,#33,$,$);
```

### 9.04 Kadastraal Perceel

*File:* [`10-9.04-Kadastraal-Perceel.ids`](../ids/10-9.04-Kadastraal-Perceel.ids) · *IFC:* IFC4X3_ADD2 IFC4 · *Checks:* #1 #2 #3 #5 #6 #7 #11 #12 #17

*Applies to:* IfcZone, IfcSpatialZone or IfcSpace, each with ObjectType

| Facet | Name | Card. | Value |
|---|---|---|---|
| attribute | ObjectType | R | Kadastraal Perceel |
| classification | classification Omgevingswet-Ruimten | O | Kadastraalperceel |
| attribute | Name | R | — |
| attribute | Description | R | Terreinvolume |

**Example from the sample model** — `IfcSpatialZone` with ObjectType `Kadastraal Perceel` from [`BM13_SPA_XX_M3D_ZZZ_Qto.ifc`](../voorbeeldmodellen/BM13_SPA_XX_M3D_ZZZ_Qto.ifc) (1 object in the model):

```step
#1974=IFCSPATIALZONE('2nSP8tGs98Tv7GL2eZsOxf',#7,'Tussenwoning project x','Terreinvolume','Kadastraal Perceel',#1966,#1973,$,.USERDEFINED.);
#1982=IFCELEMENTQUANTITY('1KZz3vXaK_T2KM45omoKIj',#7,'Qto_SpatialZoneBaseQuantities',$,$,(#1981));
#1981=IFCQUANTITYLENGTH('Height','',$,2799.9999999999995,$);
#2662=IFCRELASSOCIATESCLASSIFICATION('2bH2Y$N8ziB5Qb5ULhmbaM',#7,'Kadastraalperceel',':Kadastraalperceel',(#1974),#1984);
#1984=IFCCLASSIFICATIONREFERENCE($,'Kadastraalperceel',$,#33,$,$);
```

### 9.05a Gebouw

*File:* [`11-9.05a-Gebouw.ids`](../ids/11-9.05a-Gebouw.ids) · *IFC:* IFC4 IFC4X3_ADD2 · *Checks:* #3 #4 #17

*Applies to:* IfcBuilding

An `IfcBuilding` does not need geometry or a placement of its own.

| Facet | Name | Card. | Value |
|---|---|---|---|
| attribute | Name | R | — |
| attribute | ObjectType | R | Gebouw |
| property | Pset_BuildingCommon.BuildingID | R | — |
| property | Pset_BuildingCommon.IsPermanentID | R | — |
| property | Pset_BuildingUse.MarketCategory | R | pattern `Woongebouw|Kantoorgebouw|Bijgebouw|Gebedsgebouw|Vestigingsgebouw|Bedrijfsgebouw|Doelgroepengebouw|Installatiegebouw|Recreatiegebouw|Toren` |
| property | Pset_BuildingUse.MarketSubCategory | O | pattern `Aanleunwoning|Aireywoning|Ambtswoning|Apotheek|Appartement|Arbeiderswoning|Bejaardenwoning|Bel-etagewoning|Benedenwoning|Berging inpandig|Berging uitpandig|Bioscoop|Boerderij|Bovenwoning|Bungalow|Bunker|Café|Cafetaria|Cellenkantoor|Drive-inwoning|Duplexwoning|Energiecentrale|Fabriek|Fabrieksschoorsteen|Fietsenstalling inpandig|Fietsenstalling uitpandig|Flexibel verhuurkantoor|Fort|Friendswoning|Garage|Garage inpandig|Garage uitpandig|Gemaalgebouw|Gevangenis|Grachtenpand|Hangar|Herenhuis|Hoekwoning|Hoogbouwkantoor|Hotel|Huisartsenpraktijk|Huiskamer|Kantine|Kantoor|Kantoortuin|Kas|Kasteel|Kazerne|Kinderdagverblijf|Klokkentoren|Loft|Loods|Maatschappelijke dienstverlening|Maisonette|Medisch centrum|Molen|Paalwoning|Parkeergarage niet-openbaar|Parkeergarage openbaar|Parkeergarage stalling|Pastorie|Patiowoning|Portiekwoning|Representatief werkpaleis|Restaurant|Retail|Schakelwoning|Schuur|Short stay|Sportgebouw|Stal|Stalling inpandig|Stalling uitpandig|Supermarkt|Techniekruimte|Theater|Tussenwoning|Twee-onder-één-kap|Twee-onder-een-kapwoning|Verkeersruimte|Voertuigenstalling|Vrijstaand|Vrijstaand huis|Vuurtoren|Watertoren|Winkel|Wooneenheid|Woonoppervlak|Woontoren` |
| property | Pset_BuildingCommon.GrossPlannedArea | O | — |

**Example from the sample model** — `IfcBuilding` from [`BM13_SPA_XX_M3D_ZZZ_Qto.ifc`](../voorbeeldmodellen/BM13_SPA_XX_M3D_ZZZ_Qto.ifc) (1 object in the model):

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

> Still missing or incorrect for this object: `ObjectType`, `Pset_BuildingCommon.BuildingID`, `Pset_BuildingCommon.IsPermanentID`.

### 9.05b Gebouwinhoud

*File:* [`12-9.05b-Gebouwinhoud.ids`](../ids/12-9.05b-Gebouwinhoud.ids) · *IFC:* IFC4 IFC4X3_ADD2 · *Checks:* #3

*Applies to:* IfcZone, IfcSpatialZone or IfcSpace, each with ObjectType

| Facet | Name | Card. | Value |
|---|---|---|---|
| attribute | ObjectType | R | Gebouwinhoud |
| classification | classification Omgevingswet-Ruimten | O | Gebouwinhoud |
| attribute | Name | R | — |
| attribute | Description | R | Bruto Inhoud |

> This object type does not (yet) occur in the sample model.

### 9.06a Bouwlaag (voorheen verdieping)

*File:* [`13-9.06a Bouwlaag kenmerk.ids`](../ids/13-9.06a%20Bouwlaag%20kenmerk.ids) · *IFC:* IFC4 IFC4X3_ADD2 · *Checks:* #1 #2 #3 #4 #6 #9 #10 #16

*Applies to:* IfcBuildingStorey

An `IfcBuildingStorey` does not need geometry or a placement of its own. `EntranceLevel` indicates whether the storey is an entrance level of the building. `AboveGround` indicates whether the storey lies entirely above ground level (`TRUE`), entirely below it (`FALSE`), or partly above and partly below it, for example on sloping terrain (`UNKNOWN`).

| Facet | Name | Card. | Value |
|---|---|---|---|
| attribute | ObjectType | R | Bouwlaag |
| attribute | Name | R | pattern `.*(-9 kelder|-8 kelder|-7 kelder|-6 kelder|-5 kelder|-4 kelder|-3 kelder|-2 kelder|-1 kelder|00 begane grond|01 eerste verdieping|02 tweede verdieping|03 derde verdieping|04 vierde verdieping|05 vijfde verdieping|06 zesde verdieping|07 zevende verdieping|08 achtste verdieping|09 negende verdieping|10 tiende verdieping|11 elfde verdieping|12 twaalfde verdieping|13 dertiende verdieping|14 veertiende verdieping|15 vijftiende verdieping|16 zestiende verdieping|17 zeventiende verdieping|18 achttiende verdieping|19 negentiende verdieping|20 twintigste verdieping|21 eenentwintigste verdieping|22 tweeentwintigste verdieping|23 drieentwintigste verdieping|24 vierentwintigste verdieping|25 vijfentwintigste verdieping|26 zesentwintigste verdieping|27 zevenentwintigste verdieping|28 achtentwintigste verdieping|29 negentwintigste verdieping|30 dertigste verdieping|31 eenendertigste verdieping|32 tweeendertigste verdieping|33 drieendertigste verdieping|34 vierendertigste verdieping|35 vijfendertigste verdieping|36 zesendertigste verdieping|37 zevenendertigste verdieping|38 achtendertigste verdieping|39 negendertigste verdieping|40 veertigste verdieping|01 dak|02 dak|03 dak|04 dak|05 dak|06 dak|07 dak|08 dak|09 dak|10 dak|11 dak|12 dak|13 dak|14 dak|15 dak|16 dak|17 dak|18 dak|19 dak|20 dak|21 dak|22 dak|23 dak|24 dak|25 dak|26 dak|27 dak|28 dak|29 dak|30 dak|31 dak|32 dak|33 dak|34 dak|35 dak|36 dak|37 dak|38 dak|39 dak|40 dak|41 dak).*` |
| attribute | Elevation | O | — |
| property | Pset_BuildingStoreyCommon.EntranceLevel | R | — |
| property | Pset_BuildingStoreyCommon.AboveGround | O | — |

**Example from the sample model** — `IfcBuildingStorey` with ObjectType `Bouwlaag` from [`BM13_SPA_XX_M3D_ZZZ_Qto.ifc`](../voorbeeldmodellen/BM13_SPA_XX_M3D_ZZZ_Qto.ifc) (6 objects in the model):

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

*File:* [`14-9.06b-Bouwlaaginhoud object.ids`](../ids/14-9.06b-Bouwlaaginhoud%20object.ids) · *IFC:* IFC4 IFC4X3_ADD2 · *Checks:* #3 #6

*Applies to:* IfcZone, IfcSpatialZone or IfcSpace, each with ObjectType

| Facet | Name | Card. | Value |
|---|---|---|---|
| attribute | ObjectType | R | Bouwlaaginhoud |
| classification | classification Omgevingswet-Ruimten | O | Bouwlaaginhoud |
| attribute | Description | R | Bruto Inhoud |
| attribute | Name | R | pattern `.*(-9 kelder|-8 kelder|-7 kelder|-6 kelder|-5 kelder|-4 kelder|-3 kelder|-2 kelder|-1 kelder|00 begane grond|01 eerste verdieping|02 tweede verdieping|03 derde verdieping|04 vierde verdieping|05 vijfde verdieping|06 zesde verdieping|07 zevende verdieping|08 achtste verdieping|09 negende verdieping|10 tiende verdieping|11 elfde verdieping|12 twaalfde verdieping|13 dertiende verdieping|14 veertiende verdieping|15 vijftiende verdieping|16 zestiende verdieping|17 zeventiende verdieping|18 achttiende verdieping|19 negentiende verdieping|20 twintigste verdieping|21 eenentwintigste verdieping|22 tweeentwintigste verdieping|23 drieentwintigste verdieping|24 vierentwintigste verdieping|25 vijfentwintigste verdieping|26 zesentwintigste verdieping|27 zevenentwintigste verdieping|28 achtentwintigste verdieping|29 negentwintigste verdieping|30 dertigste verdieping|31 eenendertigste verdieping|32 tweeendertigste verdieping|33 drieendertigste verdieping|34 vierendertigste verdieping|35 vijfendertigste verdieping|36 zesendertigste verdieping|37 zevenendertigste verdieping|38 achtendertigste verdieping|39 negendertigste verdieping|40 veertigste verdieping|01 dak|02 dak|03 dak|04 dak|05 dak|06 dak|07 dak|08 dak|09 dak|10 dak|11 dak|12 dak|13 dak|14 dak|15 dak|16 dak|17 dak|18 dak|19 dak|20 dak|21 dak|22 dak|23 dak|24 dak|25 dak|26 dak|27 dak|28 dak|29 dak|30 dak|31 dak|32 dak|33 dak|34 dak|35 dak|36 dak|37 dak|38 dak|39 dak|40 dak|41 dak).*` |

**Example from the sample model** — `IfcSpatialZone` with ObjectType `Bouwlaaginhoud` from [`BM13_SPA_XX_M3D_ZZZ_Qto.ifc`](../voorbeeldmodellen/BM13_SPA_XX_M3D_ZZZ_Qto.ifc) (4 objects in the model):

```step
#1913=IFCSPATIALZONE('1z8c0Rt$P1juhD14cpfraR',#7,'00 begane grond','Bruto Inhoud','Bouwlaaginhoud',#1900,#1912,$,.USERDEFINED.);
#1923=IFCELEMENTQUANTITY('0N0jV7ACH0g_fk2tgXZeGE',#7,'Qto_SpatialZoneBaseQuantities',$,$,(#1922));
#1922=IFCQUANTITYLENGTH('Height','',$,2799.9999999999995,$);
#2661=IFCRELASSOCIATESCLASSIFICATION('1Vd5LvBGYt2FJvCEYnplVm',#7,'Bouwlaaginhoud',':Bouwlaaginhoud',(#1913,#1936,#1955,#2289),#1925);
#1925=IFCCLASSIFICATIONREFERENCE($,'Bouwlaaginhoud',$,#33,$,$);
```

### 9.07 Gebruikseenheid (voorheen eigendom-, en gebruikseenheid)

*File:* [`15-9.07-Gebruikseenheid-voorheen-eigendom-en-gebruikseenheid.ids`](../ids/15-9.07-Gebruikseenheid-voorheen-eigendom-en-gebruikseenheid.ids) · *IFC:* IFC4 IFC4X3_ADD2 · *Checks:* #1 #5

*Applies to:* IfcZone, IfcSpatialZone or IfcSpace, each with ObjectType

| Facet | Name | Card. | Value |
|---|---|---|---|
| attribute | ObjectType | R | Gebruikseenheid |
| classification | classification Omgevingswet-Ruimten | O | Gebruikseenheid |
| attribute | Name | R | minLength=1 |
| attribute | Description | R | Bruto Inhoud |

**Example from the sample model** — `IfcZone` with ObjectType `Eigendom- en gebruikseenheid` from [`BM13_SPA_XX_M3D_ZZZ_Qto.ifc`](../voorbeeldmodellen/BM13_SPA_XX_M3D_ZZZ_Qto.ifc) (1 object in the model):

```step
#2635=IFCZONE('2CH63veOF2Vi2W2Y7gpUBN',#7,'123456','','Eigendom- en gebruikseenheid','<zone long name 2>');
#2680=IFCRELASSOCIATESCLASSIFICATION('2AcL_Dff4TOgASRUn_wNo7',#7,'[Omgevingswet-Ruimten] Eigendom- en gebruikseenheid:','[Omgevingswet-Ruimten] Eigendom- en gebruikseenheid::',(#2635),#1916);
#1916=IFCCLASSIFICATIONREFERENCE($,'Eigendom- en gebruikseenheid',$,#33,$,$);
#2636=IFCRELASSIGNSTOGROUP('2wO7yNGhQM9H5xTb2F8w5m',#7,'Spatial Zone Assignment',$,(#1913,#1936,#1955,#1974,#1994,#2289,#2313,#2338,#2357,#2376,#2395),$,#2635);
```

> In the sample model this object has ObjectType `Eigendom- en gebruikseenheid`; the IDS requires `Gebruikseenheid`. The object therefore does not yet fall under this specification.

> Still missing or incorrect for this object: `Description`.

### 9.08 Gebruiksfunctie

*File:* [`16-9.08-Gebruiksfunctie.ids`](../ids/16-9.08-Gebruiksfunctie.ids) · *IFC:* IFC4 IFC4X3_ADD2 · *Checks:* #1 #3 #4 #5 #6 #7 #9 #10 #11 #12 #13 #14 #15 #16 #17

*Applies to:* IfcZone, IfcSpatialZone or IfcSpace, each with ObjectType

| Facet | Name | Card. | Value |
|---|---|---|---|
| attribute | ObjectType | R | Gebruiksfunctie |
| classification | classification Omgevingswet-Ruimten | O | Gebruiksfunctie |
| attribute | Name | R | pattern `Woonfunctie|Bijeenkomstfunctie|Celfunctie|Gezondheidszorgfunctie|Industriefunctie|Kantoorfunctie|Logiesfunctie|Onderwijsfunctie|Sportfunctie|Winkelfunctie|Overige gebruiksfunctie|Bouwwerk geen gebouw zijnde|Subgebruikfuncties` |
| attribute | Description | R | pattern `Bruto Inhoud|Functioneel Nuttige Inhoud|Gebruiksinhoud|Netto Inhoud|Nuttige inhoud|Programma van Eisen inhoud` |

**Example from the sample model** — `IfcSpatialZone` with ObjectType `Gebruiksfunctie` from [`BM13_SPA_XX_M3D_ZZZ_Qto.ifc`](../voorbeeldmodellen/BM13_SPA_XX_M3D_ZZZ_Qto.ifc) (5 objects in the model):

```step
#2313=IFCSPATIALZONE('1$7yMFpWX8dA7$wAWHtXmI',#7,'Woonfunctie','Bruto Inhoud','Gebruiksfunctie',#2300,#2312,$,.USERDEFINED.);
#2321=IFCELEMENTQUANTITY('0g2JNmobigiETvZntyzuWY',#7,'Qto_SpatialZoneBaseQuantities',$,$,(#2320));
#2320=IFCQUANTITYLENGTH('Height','',$,1000.0000000000001,$);
#2664=IFCRELASSOCIATESCLASSIFICATION('2MCGFkL3zeiHIrwNXaM5Nz',#7,'Gebruiksfunctie',':Gebruiksfunctie',(#2313,#2338,#2357,#2376,#2395),#2323);
#2323=IFCCLASSIFICATIONREFERENCE($,'Gebruiksfunctie',$,#33,$,$);
```

### 9.09 Nevengebruiksfunctie

*File:* [`17-9.09-Nevengebruiksfunctie.ids`](../ids/17-9.09-Nevengebruiksfunctie.ids) · *IFC:* IFC4X3_ADD2 IFC4 · *Checks:* #1 #4 #5

*Applies to:* IfcZone, IfcSpatialZone or IfcSpace, each with ObjectType

| Facet | Name | Card. | Value |
|---|---|---|---|
| attribute | ObjectType | R | Nevengebruiksfunctie |
| attribute | Name | R | pattern `Woonfunctie|Bijeenkomstfunctie|Celfunctie|Gezondheidszorgfunctie|Industriefunctie|Kantoorfunctie|Logiesfunctie|Onderwijsfunctie|Sportfunctie|Winkelfunctie|Overige gebruiksfunctie|Bouwwerk geen gebouw zijnde` |
| attribute | Description | R | pattern `Bruto Inhoud|Functioneel Nuttige Inhoud|Gebruiksinhoud|Netto Inhoud|Nuttige inhoud|Programma van Eisen inhoud` |

> This object type does not (yet) occur in the sample model.

### 9.10a Functiegebied

*File:* [`18-9.10a-Functiegebied.ids`](../ids/18-9.10a-Functiegebied.ids) · *IFC:* IFC4 IFC4X3_ADD2 · *Checks:* #9 #10 #11

*Applies to:* IfcZone, IfcSpatialZone or IfcSpace, each with ObjectType

| Facet | Name | Card. | Value |
|---|---|---|---|
| attribute | ObjectType | R | Functiegebied |
| classification | classification Omgevingswet-Ruimten | O | Functiegebied |
| attribute | Name | R | — |
| attribute | Description | R | pattern `Bruto Inhoud|Functioneel Nuttige Inhoud|Gebruiksinhoud|Netto Inhoud|Nuttige inhoud|Programma van Eisen inhoud` |

**Example from the sample model** — `IfcZone` with ObjectType `Functiegebied` from [`BM13_SPA_XX_M3D_ZZZ_Qto.ifc`](../voorbeeldmodellen/BM13_SPA_XX_M3D_ZZZ_Qto.ifc) (1 object in the model):

```step
#2611=IFCZONE('3KbFT4QU1U0tb$EQShahy6',#7,'F1','Bruto Inhoud','Functiegebied','functiegebied');
#2670=IFCRELASSOCIATESCLASSIFICATION('1cL1VuYEWPgSwRFzAhRL91',#7,'[Omgevingswet-Ruimten] Functiegebied:','[Omgevingswet-Ruimten] Functiegebied::',(#2611),#128);
#128=IFCCLASSIFICATIONREFERENCE($,'Functiegebied',$,#33,$,$);
#2612=IFCRELASSIGNSTOGROUP('0IJIJH1IkN3Qkc3ioarscS',#7,'Spatial Zone Assignment',$,(#124,#178,#309,#596,#683,#760,#1092,#1151,#1210,#1243,#1305,#1522,#1639,#1716,#1811,#1844),$,#2611);
```

### 9.10b Verblijfsgebied

*File:* [`19-9.10b-Verblijfsgebied.ids`](../ids/19-9.10b-Verblijfsgebied.ids) · *IFC:* IFC4 IFC4X3_ADD2 · *Checks:* #9 #10 #11 #16 #17

*Applies to:* IfcZone, IfcSpatialZone or IfcSpace, each with ObjectType

| Facet | Name | Card. | Value |
|---|---|---|---|
| attribute | ObjectType | R | Verblijfsgebied |
| classification | classification Omgevingswet-Ruimten | O | Verblijfsgebied |
| attribute | Name | R | — |
| attribute | Description | R | pattern `Bruto Inhoud|Functioneel Nuttige Inhoud|Gebruiksinhoud|Netto Inhoud|Nuttige inhoud|Programma van Eisen inhoud` |
| property | Pset_SpaceOccupancyRequirements.OccupancyType | R | pattern `Woonfunctie|Bijeenkomstfunctie|Celfunctie|Gezondheidszorgfunctie|Industriefunctie|Kantoorfunctie|Logiesfunctie|Onderwijsfunctie|Sportfunctie|Winkelfunctie|Overige gebruiksfunctie|Bouwwerk geen gebouw zijnde|Subgebruikfuncties` |

**Example from the sample model** — `IfcZone` with ObjectType `Verblijfgebied` from [`BM13_SPA_XX_M3D_ZZZ_Qto.ifc`](../voorbeeldmodellen/BM13_SPA_XX_M3D_ZZZ_Qto.ifc) (1 object in the model):

```step
#2621=IFCZONE('3ZKnaZOntWbQC$q1k1gslS',#7,'V1','Bruto Inhoud','Verblijfgebied','verblijfgebied');
#2675=IFCRELASSOCIATESCLASSIFICATION('00k5k7TMBlcTdC9zSoNouU',#7,'[Omgevingswet-Ruimten] Verblijfsgebied:','[Omgevingswet-Ruimten] Verblijfsgebied::',(#2621),#420);
#420=IFCCLASSIFICATIONREFERENCE($,'Verblijfsgebied',$,#33,$,$);
#2622=IFCRELASSIGNSTOGROUP('0FSIUuMZr1V3xTl4OxkNSp',#7,'Spatial Zone Assignment',$,(#418,#494),$,#2621);
```

> In the sample model this object has ObjectType `Verblijfgebied`; the IDS requires `Verblijfsgebied`. The object therefore does not yet fall under this specification.

> Still missing or incorrect for this object: `Pset_SpaceOccupancyRequirements.OccupancyType`.

### 9.10c Verblijfsgebied met bezettingsgraad

*File:* [`20-9.10c-Verblijfsgebied-met-bezettingsgraad.ids`](../ids/20-9.10c-Verblijfsgebied-met-bezettingsgraad.ids) · *IFC:* IFC4 IFC4X3_ADD2 · *Checks:* #15 #16

*Applies to:* IfcZone, IfcSpatialZone or IfcSpace, each with ObjectType and `OccupancyType` from the list in the IDS

| Facet | Name | Card. | Value |
|---|---|---|---|
| attribute | ObjectType | R | Verblijfsgebied |
| classification | classification Omgevingswet-Ruimten | O | Verblijfsgebied |
| attribute | Name | R | — |
| attribute | Description | R | pattern `Bruto Inhoud|Functioneel Nuttige Inhoud|Gebruiksinhoud|Netto Inhoud|Nuttige inhoud|Programma van Eisen inhoud` |
| property | Pset_SpaceOccupancyRequirements.OccupancyNumber | R | — |
| property | Pset_SpaceOccupancyRequirements.OccupancyNumberPeak | R | — |
| property | Pset_SpaceOccupancyRequirements.AreaPerOccupant | R | — |

**Example from the sample model** — `IfcZone` with ObjectType `Verblijfgebied` from [`BM13_SPA_XX_M3D_ZZZ_Qto.ifc`](../voorbeeldmodellen/BM13_SPA_XX_M3D_ZZZ_Qto.ifc) (1 object in the model):

```step
#2621=IFCZONE('3ZKnaZOntWbQC$q1k1gslS',#7,'V1','Bruto Inhoud','Verblijfgebied','verblijfgebied');
#2675=IFCRELASSOCIATESCLASSIFICATION('00k5k7TMBlcTdC9zSoNouU',#7,'[Omgevingswet-Ruimten] Verblijfsgebied:','[Omgevingswet-Ruimten] Verblijfsgebied::',(#2621),#420);
#420=IFCCLASSIFICATIONREFERENCE($,'Verblijfsgebied',$,#33,$,$);
#2622=IFCRELASSIGNSTOGROUP('0FSIUuMZr1V3xTl4OxkNSp',#7,'Spatial Zone Assignment',$,(#418,#494),$,#2621);
```

> In the sample model this object has ObjectType `Verblijfgebied`; the IDS requires `Verblijfsgebied`. The object therefore does not yet fall under this specification.

> Still missing or incorrect for this object: `Pset_SpaceOccupancyRequirements.OccupancyNumber`, `Pset_SpaceOccupancyRequirements.OccupancyNumberPeak`, `Pset_SpaceOccupancyRequirements.AreaPerOccupant`.

### 9.10d Gebruiksgebied

*File:* [`21-9.10d-Gebruiksgebied.ids`](../ids/21-9.10d-Gebruiksgebied.ids) · *IFC:* IFC4 IFC4X3_ADD2 · *Checks:* #9 #10 #14 #15

*Applies to:* IfcZone, IfcSpatialZone or IfcSpace, each with ObjectType

| Facet | Name | Card. | Value |
|---|---|---|---|
| attribute | ObjectType | R | Gebruiksgebied |
| classification | classification Omgevingswet-Ruimten | O | Gebruiksgebied |
| attribute | Name | R | — |
| attribute | Description | R | pattern `Bruto Inhoud|Functioneel Nuttige Inhoud|Gebruiksinhoud|Netto Inhoud|Nuttige inhoud|Programma van Eisen inhoud` |

**Example from the sample model** — `IfcZone` with ObjectType `Gebruiksgebied` from [`BM13_SPA_XX_M3D_ZZZ_Qto.ifc`](../voorbeeldmodellen/BM13_SPA_XX_M3D_ZZZ_Qto.ifc) (1 object in the model):

```step
#2609=IFCZONE('31zRPUMH3LofpkI5ahu_$w',#7,'GG','Bruto Inhoud','Gebruiksgebied','gebruiksgebied');
#2669=IFCRELASSOCIATESCLASSIFICATION('1Y1B5MAh6tgSW4uyop$j2I',#7,'[Omgevingswet-Ruimten] Gebruiksgebied','[Omgevingswet-Ruimten] Gebruiksgebied:',(#2609),#127);
#127=IFCCLASSIFICATIONREFERENCE($,'Gebruiksgebied',$,#33,$,$);
#2610=IFCRELASSIGNSTOGROUP('2Te_vMOYcUWRsoQdnHW3bg',#7,'Spatial Zone Assignment',$,(#124,#178,#309,#418,#494,#596,#683,#760,#865,#956,#1033,#1092,#1151,#1210,#1243,#1305,#1522,#1599,#1639,#1716,#1811,#1844),$,#2609);
```

### 9.10e Bedgebied

*File:* [`22-9.10e-Bedgebied.ids`](../ids/22-9.10e-Bedgebied.ids) · *IFC:* IFC4 IFC4X3_ADD2 · *Checks:* #16

*Applies to:* IfcZone, IfcSpatialZone or IfcSpace, each with ObjectType

| Facet | Name | Card. | Value |
|---|---|---|---|
| attribute | ObjectType | R | Bedgebied |
| classification | classification Omgevingswet-Ruimten | O | Bedgebied |
| attribute | Name | R | — |
| attribute | Description | R | pattern `Bruto Inhoud|Functioneel Nuttige Inhoud|Gebruiksinhoud|Netto Inhoud|Nuttige inhoud|Programma van Eisen inhoud` |

**Example from the sample model** — `IfcZone` with ObjectType `Bedgebied` from [`BM13_SPA_XX_M3D_ZZZ_Qto.ifc`](../voorbeeldmodellen/BM13_SPA_XX_M3D_ZZZ_Qto.ifc) (1 object in the model):

```step
#2623=IFCZONE('3bAhetpnYI9nypvWySNTvR',#7,'B1','Bruto Inhoud','Bedgebied','bedgebied');
#2676=IFCRELASSOCIATESCLASSIFICATION('3DcxobJxgpm9Y5qGOW3eCM',#7,'[Omgevingswet-Ruimten] Bedgebied:','[Omgevingswet-Ruimten] Bedgebied::',(#2623),#867);
#867=IFCCLASSIFICATIONREFERENCE($,'Bedgebied',$,#33,$,$);
#2624=IFCRELASSIGNSTOGROUP('0OjNZcFMMkWF45Krj0Nlyz',#7,'Spatial Zone Assignment',$,(#865,#956,#1033,#1599),$,#2623);
```

### 9.10f Restgebied

*File:* [`23-9.10f-Restgebied.ids`](../ids/23-9.10f-Restgebied.ids) · *IFC:* IFC4 IFC4X3_ADD2 · *Checks:* #5 #6

*Applies to:* IfcZone, IfcSpatialZone or IfcSpace, each with ObjectType

| Facet | Name | Card. | Value |
|---|---|---|---|
| attribute | ObjectType | R | Restgebied |
| classification | classification Omgevingswet-Ruimten | O | Restgebied |
| attribute | Name | R | — |
| attribute | Description | R | pattern `Bruto Inhoud|Functioneel Nuttige Inhoud|Gebruiksinhoud|Netto Inhoud|Nuttige inhoud|Programma van Eisen inhoud` |

**Example from the sample model** — `IfcZone` with ObjectType `Restgebied` from [`BM13_SPA_XX_M3D_ZZZ_Qto.ifc`](../voorbeeldmodellen/BM13_SPA_XX_M3D_ZZZ_Qto.ifc) (1 object in the model):

```step
#2625=IFCZONE('3kqceNtMqyAdm$8hz6Ab7x',#7,'RG','Bruto Inhoud','Restgebied','restgebied');
#2677=IFCRELASSOCIATESCLASSIFICATION('2rraADDdC9oFQtkHyGtfKT',#7,'[Omgevingswet-Ruimten] Restgebied','[Omgevingswet-Ruimten] Restgebied:',(#2625),#1407);
#1407=IFCCLASSIFICATIONREFERENCE($,'Restgebied',$,#33,$,$);
#2626=IFCRELASSIGNSTOGROUP('3k3jXRGzWeznVSHHNKXXh5',#7,'Spatial Zone Assignment',$,(#1405,#1681,#2024,#2056),$,#2625);
```

### 9.11 Buitengebied

*File:* [`24-9.11-Buitengebied.ids`](../ids/24-9.11-Buitengebied.ids) · *IFC:* IFC4 IFC4X3_ADD2 · *Checks:* #9 #10

*Applies to:* IfcZone, IfcSpatialZone, IfcSpace or IfcExternalSpatialElement, each with ObjectType

| Facet | Name | Card. | Value |
|---|---|---|---|
| attribute | ObjectType | R | Buitengebied |
| classification | classification Omgevingswet-Ruimten | O | Buitengebied |
| attribute | Name | R | — |
| attribute | Description | R | pattern `Bebouwd Terreinvolume|Onbebouwd Terreinvolume|Onderbouwd Terreinvolume|Overbouwd Terreinvolume|Terreinvolume` |
| property | pattern `Pset_.*Common`.IsExternal | R | — |
| property | pattern `Pset_.*Common`.PubliclyAccessible | R | — |
| property | pattern `Pset_.*Common`.HandicapAccessible | R | — |
| property | Pset_SpaceCommon.IsExternal | R | true |

**Example from the sample model** — `IfcZone` with ObjectType `Buitengebied` from [`BM13_SPA_XX_M3D_ZZZ_Qto.ifc`](../voorbeeldmodellen/BM13_SPA_XX_M3D_ZZZ_Qto.ifc) (1 object in the model):

```step
#2633=IFCZONE('0DuLprvnrjEqyeA1qE4tcl',#7,'BG','Bruto Inhoud','Buitengebied','buitengebied');
#2679=IFCRELASSOCIATESCLASSIFICATION('1f4nV161RhuB3ThgDUiYm3',#7,'[Omgevingswet-Ruimten] Buitengebied','[Omgevingswet-Ruimten] Buitengebied:',(#2633),#1880);
#1880=IFCCLASSIFICATIONREFERENCE($,'Buitengebied',$,#33,$,$);
#2634=IFCRELASSIGNSTOGROUP('2KeY2HLY4Y3LnTc4R_V$uy',#7,'Spatial Zone Assignment',$,(#1876),$,#2633);
```

> Still missing or incorrect for this object: `Description`, ``Pset_.*Common`.IsExternal`, ``Pset_.*Common`.PubliclyAccessible`, ``Pset_.*Common`.HandicapAccessible`, `Pset_SpaceCommon.IsExternal`.

### 9.12a Functieruimte

*File:* [`25-9.12a-Functieruimte.ids`](../ids/25-9.12a-Functieruimte.ids) · *IFC:* IFC4 IFC4X3_ADD2 · *Checks:* #1 #3 #5 #6 #9 #10 #13 #14 #15

*Applies to:* IfcZone or IfcSpace, each with ObjectType

| Facet | Name | Card. | Value |
|---|---|---|---|
| attribute | ObjectType | R | Functieruimte |
| classification | classification Omgevingswet-Ruimten | O | Functieruimte |
| attribute | Name | R | — |
| attribute | Description | R | pattern `Functioneel Nuttige Inhoud|Netto Inhoud|Nuttige inhoud|Programma van Eisen inhoud` |

**Example from the sample model** — `IfcSpace` with ObjectType `Functieruimte` from [`BM13_SPA_XX_M3D_ZZZ_Qto.ifc`](../voorbeeldmodellen/BM13_SPA_XX_M3D_ZZZ_Qto.ifc) (16 objects in the model):

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

*File:* [`26-9.12b-Verblijfsruimte.ids`](../ids/26-9.12b-Verblijfsruimte.ids) · *IFC:* IFC4 IFC4X3_ADD2 · *Checks:* #1 #3 #5 #6 #9 #10 #13 #14 #15 #17

*Applies to:* IfcZone or IfcSpace, each with ObjectType

| Facet | Name | Card. | Value |
|---|---|---|---|
| attribute | ObjectType | R | Verblijfsruimte |
| classification | classification Omgevingswet-Ruimten | O | Verblijfsruimte |
| attribute | Name | R | — |
| attribute | Description | R | pattern `Functioneel Nuttige Inhoud|Netto Inhoud|Nuttige inhoud|Programma van Eisen inhoud` |

**Example from the sample model** — `IfcSpace` with ObjectType `Verblijfsruimte` from [`BM13_SPA_XX_M3D_ZZZ_Qto.ifc`](../voorbeeldmodellen/BM13_SPA_XX_M3D_ZZZ_Qto.ifc) (2 objects in the model):

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

*File:* [`27-9.12c-Bedruimte.ids`](../ids/27-9.12c-Bedruimte.ids) · *IFC:* IFC4 IFC4X3_ADD2 · *Checks:* #16

*Applies to:* IfcZone or IfcSpace, each with ObjectType

| Facet | Name | Card. | Value |
|---|---|---|---|
| attribute | ObjectType | R | Bedruimte |
| classification | classification Omgevingswet-Ruimten | O | Bedruimte |
| attribute | Name | R | — |
| attribute | Description | R | pattern `Functioneel Nuttige Inhoud|Netto Inhoud|Nuttige inhoud|Programma van Eisen inhoud` |

**Example from the sample model** — `IfcSpace` with ObjectType `Bedruimte` from [`BM13_SPA_XX_M3D_ZZZ_Qto.ifc`](../voorbeeldmodellen/BM13_SPA_XX_M3D_ZZZ_Qto.ifc) (4 objects in the model):

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

*File:* [`28-9.12d-Restruimte.ids`](../ids/28-9.12d-Restruimte.ids) · *IFC:* IFC4 IFC4X3_ADD2 · *Checks:* #5 #6

*Applies to:* IfcZone or IfcSpace, each with ObjectType

| Facet | Name | Card. | Value |
|---|---|---|---|
| attribute | ObjectType | R | Restruimte |
| classification | classification Omgevingswet-Ruimten | O | Restruimte |
| attribute | Name | R | — |
| attribute | Description | R | pattern `Functioneel Nuttige Inhoud|Netto Inhoud|Nuttige inhoud|Programma van Eisen inhoud` |

**Example from the sample model** — `IfcSpace` with ObjectType `Restruimte` from [`BM13_SPA_XX_M3D_ZZZ_Qto.ifc`](../voorbeeldmodellen/BM13_SPA_XX_M3D_ZZZ_Qto.ifc) (4 objects in the model):

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

*File:* [`29-9.13-Buitenruimte.ids`](../ids/29-9.13-Buitenruimte.ids) · *IFC:* IFC4 IFC4X3_ADD2 · *Checks:* #9 #10

*Applies to:* IfcZone, IfcSpace or IfcExternalSpatialElement, each with ObjectType and `IsExternal` = true

| Facet | Name | Card. | Value |
|---|---|---|---|
| attribute | ObjectType | R | Buitenruimte |
| classification | classification Omgevingswet-Ruimten | O | Buitenruimte |
| attribute | Name | R | — |
| attribute | Description | R | pattern `Bebouwd Terreinvolume|Functioneel Nuttige Inhoud|Netto Inhoud|Nuttige inhoud|Onbebouwd Terreinvolume|Onderbouwd Terreinvolume|Overbouwd Terreinvolume|Programma van Eisen inhoud|Terreinvolume` |
| property | Pset_SpaceCommon.IsExternal | R | — |
| property | pattern `Pset_.*Common`.HandicapAccessible | R | — |
| property | pattern `Pset_.*Common`.PubliclyAccessible | R | — |

**Example from the sample model** — `IfcSpace` with ObjectType `Buitenruimte` from [`BM13_SPA_XX_M3D_ZZZ_Qto.ifc`](../voorbeeldmodellen/BM13_SPA_XX_M3D_ZZZ_Qto.ifc) (4 objects in the model):

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

*File:* [`30-9.16a-Brandcompartiment.ids`](../ids/30-9.16a-Brandcompartiment.ids) · *IFC:* IFC4 IFC4X3_ADD2 · *Checks:* #7 #8 #14 #15

*Applies to:* IfcZone or IfcSpatialZone, each with ObjectType

| Facet | Name | Card. | Value |
|---|---|---|---|
| attribute | ObjectType | R | Brandcompartiment |
| classification | classification Omgevingswet-Ruimten | O | Brandcompartiment |
| attribute | Name | R | — |
| attribute | Description | R | pattern `Bruto Inhoud|Gebruiksinhoud|Netto Inhoud` |
| property | Pset_SpaceFireSafetyRequirements.FireRiskFactor | O | — |
| property | Pset_SpaceFireSafetyRequirements.FireExit | O | — |
| property | Pset_SpaceFireSafetyRequirements.FlammableStorage | O | — |
| property | Pset_SpaceFireSafetyRequirements.SprinklerProtection | O | — |
| property | Pset_SpaceFireSafetyRequirements.SprinklerProtectionAutomatic | O | — |
| property | Pset_SpaceFireSafetyRequirements.AirPressurization | O | — |

**Example from the sample model** — `IfcZone` with ObjectType `Brandcompartiment` from [`BM13_SPA_XX_M3D_ZZZ_Qto.ifc`](../voorbeeldmodellen/BM13_SPA_XX_M3D_ZZZ_Qto.ifc) (1 object in the model):

```step
#2613=IFCZONE('0t4FvuABxUaOmTinQ46K5a',#7,'BC_01','Beperking van uitbreiding van brand','Brandcompartiment','brandcompartiment');
#2671=IFCRELASSOCIATESCLASSIFICATION('0pbctsK57ujwizi3YQ7tF8',#7,'[Omgevingswet-Ruimten] Brandcompartiment:','[Omgevingswet-Ruimten] Brandcompartiment::',(#2613),#129);
#129=IFCCLASSIFICATIONREFERENCE($,'Brandcompartiment',$,#33,$,$);
#2614=IFCRELASSIGNSTOGROUP('17U7VPBnOUGctnXDu9Fooe',#7,'Spatial Zone Assignment',$,(#124,#178,#309,#418,#494,#596,#683,#760,#865,#956,#1033,#1092,#1151,#1210,#1243,#1305,#1405,#1522,#1599,#1639,#1681,#1716,#1811),$,#2613);
```

> Still missing or incorrect for this object: `Description`.

### 9.16b Subbrandcompartiment

*File:* [`31-9.16b-Subbrandcompartiment.ids`](../ids/31-9.16b-Subbrandcompartiment.ids) · *IFC:* IFC4 IFC4X3_ADD2 · *Checks:* #15

*Applies to:* IfcZone or IfcSpatialZone, each with ObjectType

| Facet | Name | Card. | Value |
|---|---|---|---|
| attribute | ObjectType | R | Subbrandcompartiment |
| classification | classification Omgevingswet-Ruimten | O | Subbrandcompartiment |
| attribute | Name | R | — |
| attribute | Description | R | pattern `Bruto Inhoud|Gebruiksinhoud|Netto Inhoud` |
| property | Pset_SpaceFireSafetyRequirements.FireRiskFactor | O | — |
| property | Pset_SpaceFireSafetyRequirements.FireExit | O | — |
| property | Pset_SpaceFireSafetyRequirements.FlammableStorage | O | — |
| property | Pset_SpaceFireSafetyRequirements.SprinklerProtection | O | — |
| property | Pset_SpaceFireSafetyRequirements.SprinklerProtectionAutomatic | O | — |
| property | Pset_SpaceFireSafetyRequirements.AirPressurization | O | — |

**Example from the sample model** — `IfcZone` with ObjectType `Subbrandcompartiment` from [`BM13_SPA_XX_M3D_ZZZ_Qto.ifc`](../voorbeeldmodellen/BM13_SPA_XX_M3D_ZZZ_Qto.ifc) (1 object in the model):

```step
#2615=IFCZONE('1gL$6OmzknJGkM_VD0vL8J',#7,'BC_01.1','Verdere beperking van uitbreiding van brand','Subbrandcompartiment','subrandcompartiment');
#2672=IFCRELASSOCIATESCLASSIFICATION('0kLQctNqBzwwYbbXlfOx12',#7,'[Omgevingswet-Ruimten] Subbrandcompartiment:','[Omgevingswet-Ruimten] Subbrandcompartiment::',(#2615),#130);
#130=IFCCLASSIFICATIONREFERENCE($,'Subbrandcompartiment',$,#33,$,$);
#2616=IFCRELASSIGNSTOGROUP('27D3gw$h9T2JhlHA1ba5_2',#7,'Spatial Zone Assignment',$,(#124),$,#2615);
```

> Still missing or incorrect for this object: `Description`.

### 9.16c Vluchtroute

*File:* [`32-9.16c-Vluchtroute.ids`](../ids/32-9.16c-Vluchtroute.ids) · *IFC:* IFC4 IFC4X3_ADD2 · *Checks:* #14 #15 #16

*Applies to:* IfcZone or IfcSpatialZone, each with ObjectType

| Facet | Name | Card. | Value |
|---|---|---|---|
| attribute | ObjectType | R | Vluchtroute |
| classification | classification Omgevingswet-Ruimten | O | Vluchtroute |
| attribute | Name | R | — |
| attribute | Description | R | pattern `Bruto Inhoud|Gebruiksinhoud|Netto Inhoud` |
| property | Pset_SpaceFireSafetyRequirements.FireRiskFactor | O | — |
| property | Pset_SpaceFireSafetyRequirements.FireExit | R | true |
| property | Pset_SpaceFireSafetyRequirements.FlammableStorage | O | — |
| property | Pset_SpaceFireSafetyRequirements.SprinklerProtection | O | — |
| property | Pset_SpaceFireSafetyRequirements.AirPressurization | O | — |

**Example from the sample model** — `IfcZone` with ObjectType `Vluchtroute` from [`BM13_SPA_XX_M3D_ZZZ_Qto.ifc`](../voorbeeldmodellen/BM13_SPA_XX_M3D_ZZZ_Qto.ifc) (1 object in the model):

```step
#2619=IFCZONE('1B5wI_0SnF_W4gCEA3Mk5R',#7,'VR_V','Een bouwwerk heeft zodanige vluchtroutes dat bij brand een veilige plaats kan worden bereikt','Vluchtroute','vluchtroute');
#2674=IFCRELASSOCIATESCLASSIFICATION('2EsYaSIWw36$J6FWtIzx3V',#7,'[Omgevingswet-Ruimten] Vluchtroute:','[Omgevingswet-Ruimten] Vluchtroute::',(#2619),#132);
#132=IFCCLASSIFICATIONREFERENCE($,'Vluchtroute',$,#33,$,$);
#2620=IFCRELASSIGNSTOGROUP('3zGdRk05fg27GigdiIS8ki',#7,'Spatial Zone Assignment',$,(#124,#309,#683,#1305,#1639,#1716,#1811),$,#2619);
```

> Still missing or incorrect for this object: `Description`, `Pset_SpaceFireSafetyRequirements.FireExit`.

### 9.16d Beschermd subbrandcompartiment

*File:* [`43-9.16d-Beschermd-subbrandcompartiment.ids`](../ids/43-9.16d-Beschermd-subbrandcompartiment.ids) · *IFC:* IFC4 IFC4X3_ADD2 · *Checks:* #15

*Applies to:* IfcZone or IfcSpatialZone, each with ObjectType

A protected sub-fire compartment (*beschermd subbrandcompartiment*) has the same requirements as a sub-fire compartment (9.16b), with ObjectType `Beschermd subbrandcompartiment`.

| Facet | Name | Card. | Value |
|---|---|---|---|
| attribute | ObjectType | R | Beschermd subbrandcompartiment |
| classification | classification Omgevingswet-Ruimten | O | Subbrandcompartiment |
| attribute | Name | R | — |
| attribute | Description | R | pattern `Bruto Inhoud|Gebruiksinhoud|Netto Inhoud` |
| property | Pset_SpaceFireSafetyRequirements.FireRiskFactor | O | — |
| property | Pset_SpaceFireSafetyRequirements.FireExit | O | — |
| property | Pset_SpaceFireSafetyRequirements.FlammableStorage | O | — |
| property | Pset_SpaceFireSafetyRequirements.SprinklerProtection | O | — |
| property | Pset_SpaceFireSafetyRequirements.SprinklerProtectionAutomatic | O | — |
| property | Pset_SpaceFireSafetyRequirements.AirPressurization | O | — |

**Example from the sample model** — `IfcZone` with ObjectType `Beschermd-subbrandcompartiment` from [`BM13_SPA_XX_M3D_ZZZ_Qto.ifc`](../voorbeeldmodellen/BM13_SPA_XX_M3D_ZZZ_Qto.ifc) (1 object in the model):

```step
#2617=IFCZONE('0oLbdj7ySpws9JgjrgA5bU',#7,'BC_01.1.1','Verdere beperking van verspreiding van rook','Beschermd-subbrandcompartiment','beschermde-subrandcompartiment');
#2673=IFCRELASSOCIATESCLASSIFICATION('263W4hhNVIriPbPJAKJCZO',#7,'[Omgevingswet-Ruimten] Beschermd-subbrandcompartiment:','[Omgevingswet-Ruimten] Beschermd-subbrandcompartiment::',(#2617),#131);
#131=IFCCLASSIFICATIONREFERENCE($,'Beschermd-subbrandcompartiment',$,#33,$,$);
#2618=IFCRELASSIGNSTOGROUP('2_erm2BqHz82v_tzIZ$xF0',#7,'Spatial Zone Assignment',$,(#124),$,#2617);
```

> In the sample model this object has ObjectType `Beschermd-subbrandcompartiment`; the IDS requires `Beschermd subbrandcompartiment`. The object therefore does not yet fall under this specification.

> Still missing or incorrect for this object: `Description`.

### 9.17 Tarra Ruimte

> Withdrawn per 0.2.1. The modeller does not have to model Tarra Ruimte. If a check needs the tarra, it is calculated from the model (the difference between gross and net volume) and is not requested.

*File:* [`33-9.17-Tarra-Ruimte.ids`](../ids/33-9.17-Tarra-Ruimte.ids) · *IFC:* IFC4 IFC4X3_ADD2 · *Status:* requirements are retained for compatibility.

*Applies to:* IfcZone or IfcSpatialZone, each with ObjectType

| Facet | Name | Card. | Value |
|---|---|---|---|
| attribute | ObjectType | R | Tarra Ruimte |
| classification | classification Omgevingswet-Ruimten | O | TarraRuimte |
| attribute | Name | R | — |
| attribute | Description | R | Tarra Inhoud |

> Correct: the sample model does not contain Tarra Ruimte; it is no longer a modelling requirement.

### 9.18a Fysieke elementen IfcBeam

*File:* [`34-9.18a-Fysieke-elementen-IfcBeam.ids`](../ids/34-9.18a-Fysieke-elementen-IfcBeam.ids) · *IFC:* IFC4 IFC4X3_ADD2 · *Checks:* #7 #8

*Applies to:* IfcBeam

| Facet | Name | Card. | Value |
|---|---|---|---|
| property | Pset_BeamCommon.FireRating | O | pattern `(R|E|RE|REI|REW|EI|EI1|EI2|EW) (15|20|30|45|60|90|120|180|240|360)(-(Sa|S200|C[0-5]?|M))*` |
| property | Pset_BeamCommon.IsExternal | O | — |
| property | Pset_BeamCommon.LoadBearing | R | — |
| property | Pset_BeamCommon.ThermalTransmittance | O | — |

> This object type does not (yet) occur in the sample model.

### 9.18b Fysieke elementen IfcColumn

*File:* [`35-9.18b-Fysieke-elementen-IfcColumn.ids`](../ids/35-9.18b-Fysieke-elementen-IfcColumn.ids) · *IFC:* IFC4 IFC4X3_ADD2 · *Checks:* #7 #8

*Applies to:* IfcColumn

| Facet | Name | Card. | Value |
|---|---|---|---|
| property | Pset_ColumnCommon.FireRating | O | pattern `(R|E|RE|REI|REW|EI|EI1|EI2|EW) (15|20|30|45|60|90|120|180|240|360)(-(Sa|S200|C[0-5]?|M))*` |
| property | Pset_ColumnCommon.IsExternal | O | — |
| property | Pset_ColumnCommon.LoadBearing | R | — |
| property | Pset_ColumnCommon.ThermalTransmittance | O | — |

> This object type does not (yet) occur in the sample model.

### 9.18c Fysieke elementen IfcCovering.INSULATION

*File:* [`36-9.18c-Fysieke-elementen-IfcCovering.INSULATION.ids`](../ids/36-9.18c-Fysieke-elementen-IfcCovering.INSULATION.ids) · *IFC:* IFC4 IFC4X3_ADD2 · *Checks:* #11

*Applies to:* IfcCovering (PredefinedType INSULATION)

| Facet | Name | Card. | Value |
|---|---|---|---|
| property | Pset_CoveringCommon.AcousticRating | O | — |
| property | Pset_CoveringCommon.Combustible | R | — |
| property | Pset_CoveringCommon.FireRating | O | pattern `(R|E|RE|REI|REW|EI|EI1|EI2|EW) (15|20|30|45|60|90|120|180|240|360)(-(Sa|S200|C[0-5]?|M))*` |
| property | Pset_CoveringCommon.FlammabilityRating | O | — |
| property | Pset_CoveringCommon.IsExternal | O | — |
| property | Pset_CoveringCommon.SurfaceSpreadOfFlame | O | pattern `(A1|A2|B|C|D|E|F)(-s[1-3])?(,d[0-2])?` |
| property | Pset_CoveringCommon.ThermalTransmittance | O | — |

> This object type does not (yet) occur in the sample model.

### 9.18d Fysieke elementen IfcCurtainWall

*File:* [`37-9.18d-Fysieke-elementen-IfcCurtainWall.ids`](../ids/37-9.18d-Fysieke-elementen-IfcCurtainWall.ids) · *IFC:* IFC4 IFC4X3_ADD2 · *Checks:* #7 #8 #11 #12 #17

*Applies to:* IfcCurtainWall

| Facet | Name | Card. | Value |
|---|---|---|---|
| property | Pset_CurtainWallCommon.AcousticRating | O | — |
| property | Pset_CurtainWallCommon.Combustible | O | — |
| property | Pset_CurtainWallCommon.FireRating | O | pattern `(R|E|RE|REI|REW|EI|EI1|EI2|EW) (15|20|30|45|60|90|120|180|240|360)(-(Sa|S200|C[0-5]?|M))*` |
| property | Pset_CurtainWallCommon.IsExternal | O | — |
| property | Pset_CurtainWallCommon.SurfaceSpreadOfFlame | O | — |
| property | Pset_CurtainWallCommon.ThermalTransmittance | O | — |

> This object type does not (yet) occur in the sample model.

### 9.18e Fysieke elementen IfcDoor

*File:* [`38-9.18e-Fysieke-elementen-IfcDoor.ids`](../ids/38-9.18e-Fysieke-elementen-IfcDoor.ids) · *IFC:* IFC4 IFC4X3_ADD2 · *Checks:* #7 #8 #12 #14 #15 #16 #17

*Applies to:* IfcDoor

| Facet | Name | Card. | Value |
|---|---|---|---|
| attribute | OverallHeight | O | — |
| attribute | OverallWidth | O | — |
| property | Pset_DoorCommon.AcousticRating | O | — |
| property | Pset_DoorCommon.FireExit | O | — |
| property | Pset_DoorCommon.FireRating | O | pattern `(R|E|RE|REI|REW|EI|EI1|EI2|EW) (15|20|30|45|60|90|120|180|240|360)(-(Sa|S200|C[0-5]?|M))*` |
| property | Pset_DoorCommon.GlazingAreaFraction | O | — |
| property | Pset_DoorCommon.HandicapAccessible | O | — |
| property | Pset_DoorCommon.IsExternal | O | — |
| property | Pset_DoorCommon.SecurityRating | O | — |
| property | Pset_DoorCommon.SelfClosing | O | — |
| property | Pset_DoorCommon.SmokeStop | O | — |
| property | Pset_DoorCommon.ThermalTransmittance | O | — |

> This object type does not (yet) occur in the sample model.

### 9.18g Fysieke elementen IfcSlab

*File:* [`40-9.18g-Fysieke-elementen-IfcSlab.ids`](../ids/40-9.18g-Fysieke-elementen-IfcSlab.ids) · *IFC:* IFC4 IFC4X3_ADD2 · *Checks:* #7 #8 #9 #10 #11 #13 #14 #15 #16

*Applies to:* IfcSlab

| Facet | Name | Card. | Value |
|---|---|---|---|
| property | Pset_SlabCommon.AcousticRating | O | — |
| property | Pset_SlabCommon.Combustible | O | — |
| property | Pset_SlabCommon.Compartmentation | O | — |
| property | Pset_SlabCommon.FireRating | O | pattern `(R|E|RE|REI|REW|EI|EI1|EI2|EW) (15|20|30|45|60|90|120|180|240|360)(-(Sa|S200|C[0-5]?|M))*` |
| property | Pset_SlabCommon.IsExternal | O | — |
| property | Pset_SlabCommon.LoadBearing | R | — |
| property | Pset_SlabCommon.SurfaceSpreadOfFlame | O | — |
| property | Pset_SlabCommon.ThermalTransmittance | O | — |

> This object type does not (yet) occur in the sample model.

### 9.18h Fysieke elementen IfcWall

*File:* [`41-9.18h-Fysieke-elementen-IfcWall.ids`](../ids/41-9.18h-Fysieke-elementen-IfcWall.ids) · *IFC:* IFC4 IFC4X3_ADD2 · *Checks:* #7 #8 #9 #11 #13 #16 #17

*Applies to:* IfcWall

| Facet | Name | Card. | Value |
|---|---|---|---|
| property | Pset_WallCommon.AcousticRating | O | — |
| property | Pset_WallCommon.Combustible | O | — |
| property | Pset_WallCommon.Compartmentation | O | — |
| property | Pset_WallCommon.FireRating | O | pattern `(R|E|RE|REI|REW|EI|EI1|EI2|EW) (15|20|30|45|60|90|120|180|240|360)(-(Sa|S200|C[0-5]?|M))*` |
| property | Pset_WallCommon.IsExternal | O | — |
| property | Pset_WallCommon.LoadBearing | R | — |
| property | Pset_WallCommon.SurfaceSpreadOfFlame | O | — |
| property | Pset_WallCommon.ThermalTransmittance | O | — |

> This object type does not (yet) occur in the sample model.

### 9.18i Fysieke elementen IfcWindow

*File:* [`42-9.18i-Fysieke-elementen-IfcWindow.ids`](../ids/42-9.18i-Fysieke-elementen-IfcWindow.ids) · *IFC:* IFC4 IFC4X3_ADD2 · *Checks:* #12 #17

*Applies to:* IfcWindow

| Facet | Name | Card. | Value |
|---|---|---|---|
| property | Pset_WindowCommon.AcousticRating | O | — |
| property | Pset_WindowCommon.FireExit | O | — |
| property | Pset_WindowCommon.FireRating | O | pattern `(R|E|RE|REI|REW|EI|EI1|EI2|EW) (15|20|30|45|60|90|120|180|240|360)(-(Sa|S200|C[0-5]?|M))*` |
| property | Pset_WindowCommon.GlazingAreaFraction | O | — |
| property | Pset_WindowCommon.IsExternal | R | — |
| property | Pset_WindowCommon.SecurityRating | O | — |
| property | Pset_WindowCommon.SmokeStop | O | — |
| property | Pset_WindowCommon.ThermalTransmittance | O | — |

> This object type does not (yet) occur in the sample model.

### 9.18j Fysieke elementen IfcRoof

*File:* [`45-9.18j-Fysieke-elementen-IfcRoof.ids`](../ids/45-9.18j-Fysieke-elementen-IfcRoof.ids) · *IFC:* IFC4 IFC4X3_ADD2 · *Checks:* #2 #6 #9 #11 #13 #16

*Applies to:* IfcRoof

| Facet | Name | Card. | Value |
|---|---|---|---|
| property | Pset_RoofCommon.AcousticRating | O | — |
| property | Pset_RoofCommon.FireRating | O | pattern `(R|E|RE|REI|REW|EI|EI1|EI2|EW) (15|20|30|45|60|90|120|180|240|360)(-(Sa|S200|C[0-5]?|M))*` |
| property | Pset_RoofCommon.IsExternal | O | — |
| property | Pset_RoofCommon.ThermalTransmittance | O | — |

> This object type does not (yet) occur in the sample model.

### 9.18k Fysieke elementen IfcStair

*File:* [`46-9.18k-Fysieke-elementen-IfcStair.ids`](../ids/46-9.18k-Fysieke-elementen-IfcStair.ids) · *IFC:* IFC4 IFC4X3_ADD2 · *Checks:* #10 #16

*Applies to:* IfcStair

| Facet | Name | Card. | Value |
|---|---|---|---|
| property | Pset_StairCommon.NumberOfRiser | O | — |
| property | Pset_StairCommon.NumberOfTreads | O | — |
| property | Pset_StairCommon.RiserHeight | O | — |
| property | Pset_StairCommon.TreadLength | O | — |
| property | Pset_StairCommon.RequiredHeadroom | O | — |
| property | Pset_StairCommon.HandicapAccessible | O | — |
| property | Pset_StairCommon.FireExit | O | — |
| property | Pset_StairCommon.FireRating | O | pattern `(R|E|RE|REI|REW|EI|EI1|EI2|EW) (15|20|30|45|60|90|120|180|240|360)(-(Sa|S200|C[0-5]?|M))*` |
| property | Pset_StairCommon.IsExternal | O | — |

> This object type does not (yet) occur in the sample model.

### 9.18l Fysieke elementen IfcRamp

*File:* [`47-9.18l-Fysieke-elementen-IfcRamp.ids`](../ids/47-9.18l-Fysieke-elementen-IfcRamp.ids) · *IFC:* IFC4 IFC4X3_ADD2 · *Checks:* #10

*Applies to:* IfcRamp

| Facet | Name | Card. | Value |
|---|---|---|---|
| property | Pset_RampCommon.RequiredSlope | O | — |
| property | Pset_RampCommon.RequiredHeadroom | O | — |
| property | Pset_RampCommon.HandicapAccessible | O | — |
| property | Pset_RampCommon.FireExit | O | — |
| property | Pset_RampCommon.FireRating | O | pattern `(R|E|RE|REI|REW|EI|EI1|EI2|EW) (15|20|30|45|60|90|120|180|240|360)(-(Sa|S200|C[0-5]?|M))*` |
| property | Pset_RampCommon.IsExternal | O | — |

> This object type does not (yet) occur in the sample model.

### 9.18m Fysieke elementen IfcTransportElement.ELEVATOR

*File:* [`48-9.18m-Fysieke-elementen-IfcTransportElement.ELEVATOR.ids`](../ids/48-9.18m-Fysieke-elementen-IfcTransportElement.ELEVATOR.ids) · *IFC:* IFC4 IFC4X3_ADD2 · *Checks:* #9 #10

*Applies to:* IfcTransportElement (PredefinedType ELEVATOR)

| Facet | Name | Card. | Value |
|---|---|---|---|
| property | Pset_TransportElementElevator.ClearWidth | O | — |
| property | Pset_TransportElementElevator.ClearDepth | O | — |
| property | Pset_TransportElementElevator.ClearHeight | O | — |
| property | Pset_TransportElementElevator.FireFightingLift | O | — |
| property | Pset_TransportElementCommon.CapacityPeople | O | — |
| property | Pset_TransportElementCommon.FireExit | O | — |

> This object type does not (yet) occur in the sample model.

### 9.18n Fysieke elementen IfcRailing

*File:* [`49-9.18n-Fysieke-elementen-IfcRailing.ids`](../ids/49-9.18n-Fysieke-elementen-IfcRailing.ids) · *IFC:* IFC4 IFC4X3_ADD2 · *Checks:* #10

*Applies to:* IfcRailing

| Facet | Name | Card. | Value |
|---|---|---|---|
| property | Pset_RailingCommon.Height | O | — |
| property | Pset_RailingCommon.IsExternal | O | — |

> This object type does not (yet) occur in the sample model.
