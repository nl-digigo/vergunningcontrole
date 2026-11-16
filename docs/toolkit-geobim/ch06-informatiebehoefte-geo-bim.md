# Informatiebehoefte: geo- en BIM-data {#informatiebehoefte-geo-bim}

Dit hoofdstuk geeft een overzicht van de uitgewerkte en gecombineerde informatiebehoefte voor de 17 checks. De gedetailleerde specificaties zijn terug te vinden in bijlage c (ILS omgevingsvergunning) en bijlage d (ILS Geo-informatie). 

| | |
|---|---|
| **Bron** | BM13-tracker, tabbladen *Datarequirements* |
| **Checks** | 17 checks, één tabel met informatiebehoefte (minimale vereiste) per check |


## Regel #1: BM13-R01 Gebruiksfunctie komt overeen met bestemming

| Minimum requirement | Informatiebehoefte | Level | Type | IFC entiteit / property | Geo begrippen |
|---------|---------|---------|---------|---------|---------|
| M01 | Een valide gebouwmodel met projectdata en bouwlagen (hoogte en toegangsniveau) | MUST | BIM | IfcProject; one IfcBuilding; IfcBuildingStorey Name, Elevation, Pset_BuildingStoreyCommon.EntranceLevel | - |
| M02 | Constructieonderdelen met gesloten geometrie per bouwlaag | MUST | BIM | IfcWall, IfcSlab, IfcRoof, IfcColumn, … Representation; IfcRelContainedInSpatialStructure | - |
| M03 | Georeferentie in RD New / NAP met de juiste schaling, BIM geplaatst op de vergunning locatie | MUST | BIM  | IfcMapConversion (Eastings, Northings, OrthogonalHeight, rotation, Scale), IfcProjectedCRS | -  |
| M04 | De gebruiksfuncties in het gebouw | MUST | BIM  | IfcZone with ObjectType = Gebruiksfunctie; Name = use function (e.g. Woonfunctie) | -  |
| M05 | Gebruikseenheden, nevenfuncties and ruimten | SHOULD | BIM  | IfcZone Gebruikseenheid, Nevengebruiksfunctie; IfcSpace Functieruimte, Verblijfsruimte | -  |
| M06 | Externe gebouwdelen (balkon, luifel etc.) | SHOULD | BIM  | IfcSlab PredefinedType; Pset_SlabCommon.IsExternal | -  |
| M07 | Adres, bouwwerkperceel en kadastraal perceel (in model) | SHOULD | BIM  | Pset_Address, SiteAddress, BuildingAddress; IfcSpatialZone Bouwwerkperceel, Kadastraal perceel + Pset_LandRegistration | -  |
| M08 | De toegestane (gebruiks-) functie op de locatie | MUST | GEO  | - | Werkingsgebied gebiedsaanwijzing / functie (STOP/TPOD) of Enkelbestemming (IMRO) / DR-GEO-01 |
| M10 | Kadastrale perceelsgrenzen | MUST | GEO  | - | Perceelgrens / DR-GEO-02  |



## Regel #2: Maximale bouwhoogte

| Minimum requirement | Informatiebehoefte | Level | Type | IFC entiteit / property | Geo begrippen |
|---------|---------|---------|---------|---------|---------|
| M01 | Een valide gebouwmodel met projectdata en bouwlagen (hoogte en toegangsniveau) | MUST | BIM | IfcProject; one IfcBuilding; IfcBuildingStorey Name, Elevation, Pset_BuildingStoreyCommon.EntranceLevel | - |
| M02 | Constructieonderdelen met gesloten geometrie per bouwlaag | MUST | BIM | IfcWall, IfcSlab, IfcRoof, IfcColumn, … Representation; IfcRelContainedInSpatialStructure | - |
| M03 | Georeferentie in RD New / NAP met de juiste schaling, BIM geplaatst op de vergunning locatie | Must | BIM  | IfcMapConversion (Eastings, Northings, OrthogonalHeight, rotation, Scale), IfcProjectedCRS | -  |
| M04 | Het dak herkenbaar als dak | MUST | BIM  | IfcRoof, or IfcSlab PredefinedType ROOF, with Representation | -  |
| M05 | Gebouwinstallaties (schoorstenen, lift, dakrailing etc.) | SHOULD | BIM  | IfcChimney, IfcTransportElement with Representation | -  |
| M06 | De NAP hoogte van de hoofdtoegang tot het gebouw op de begane grond (referentiepeil methode 2) | MUST (voor locaties met referentiepeil methode 2) | BIM  | IfcBuildingStorey with EntranceLevel = true and Elevation; IfcSite.RefElevation (cross-check) | -  |
| M07 | De hoogte van de dichtstbijzijnde openbare weg (referentiepeil methode 1) | MUST (voor locaties met referentiepeil methode 1)| GEO | - | Algemeen Hoogtebestand Nederland (DTM) / DR-GEO-04 |
| M08 | De maximale bebouwingshoogte op de locatie | MUST | GEO  | - | Werkingsgebied omgevingsnorm / bebouwingshoogte (STOP/TPOD) of Maatvoering maximale bouwhoogte (IMRO) / DR-GEO-03 |
| M10 | Adres, bouwwerkperceel en kadastraal perceel (in model) | SHOULD | BIM  | Pset_Address, SiteAddress, BuildingAddress; IfcSpatialZone Bouwwerkperceel, Kadastraal perceel + Pset_LandRegistration | -  |
| M11 | Kadastrale perceelsgrenzen van de locatie | MUST | GEO  | - | Perceelgrens / DR-GEO-02  |

### Ad M07: 
We verwijzen hier naar het terreinmodel op basis van het landsdekkende Hoogtebestand Nederland (AHN). Sommige gemeenten hebben daarnaast nog terreinmodel op basis van eigen hoogtebestanden.


## Regel #3: Maximaal bebouwingspercentage

| Minimum requirement | Informatiebehoefte | Level | Type | IFC entiteit / property | Geo begrippen |
|---------|---------|---------|---------|---------|---------|
| M01 | Een valide gebouwmodel met projectdata en bouwlagen (hoogte en toegangsniveau) | MUST | BIM | IfcProject; one IfcBuilding; IfcBuildingStorey Name, Elevation, Pset_BuildingStoreyCommon.EntranceLevel | - |
| M02 | Constructieonderdelen met gesloten geometrie per bouwlaag | MUST | BIM | IfcWall, IfcSlab, IfcRoof, IfcColumn, … Representation; IfcRelContainedInSpatialStructure | - |
| M03 | Georeferentie in RD New / NAP met de juiste schaling, BIM geplaatst op de vergunning locatie | MUST | BIM  | IfcMapConversion (Eastings, Northings, OrthogonalHeight, rotation, Scale), IfcProjectedCRS | - |
| M04 | Gebouwinhoud als een gesloten geometrisch volume | MUST | BIM  | IfcSpatialZone ObjectType = Gebouwinhoud, closed Representation | - |
| M05 | Berekende hoeveelheden (bruto inhoud, oppervlakte, m2, m3) door de ontwerpsoftware | MUST | BIM  | Qto_…BaseQuantities (gross / footprint area)| - |
| M06 | Oppervlaktes bepaald volgens NEN2580 | SHOULD | BIM  | Qto_…BaseQuantities (gross / footprint area) | - |
| M07 | Kadastrale perceelsgrenzen van de locatie| MUST | GEO  | - | Perceelgrens / DR-GEO-02 |
| M08 | De bestaande bebouwing op de locatie | MUST | GEO  | - | BAG - panden en BGT overige bouwwerken / DR-GEO-06 |
| M10 | Het maximale bebouwingspercentage op de locatie | MUST | GEO  | - | Werkingsgebied omgevingsnorm / bebouwingspercentage (STOP/TPOD) of maatvoering maximum bebouwingspercentage (IMRO) / DR-GEO-09| 
| M12 | Adressen, perceelsaanduiding, bouwwerkperceel, bouwlagen, gebruiksfuncties en ruimten in het model | SHOULD | BIM  | Pset_Address; IfcSpatialZone Perceel, Bouwwerkperceel, Kadastraal perceel, Bouwlaaginhoud; IfcBuilding; IfcZone Gebruiksfunctie; IfcSpace Functieruimte, Verblijfsruimte | - |
| M13 | De luchtfoto van de locatie | SHOULD | GEO  | - | Luchtfoto / DR-GEO-05 |

### Ad M09
Nb. We verwijzen hier naar de jaarlijkse landsdekkende luchtfoto's Beeldmateriaal Nederland. Sommige gemeenten hebben daarnaast nog eigen luchtfoto's.


## Regel #4: Gebruiksfunctie / Bestemming beperkt tot x aantal bouwlagen

| Minimum requirement | Informatiebehoefte | Level | Type | IFC entiteit / property | Geo begrippen |
|---------|---------|---------|---------|---------|---------|
| M01 | Een valide gebouwmodel met projectdata en bouwlagen (hoogte en toegangsniveau) | MUST | BIM | IfcProject; one IfcBuilding; IfcBuildingStorey Name, Elevation, Pset_BuildingStoreyCommon.EntranceLevel | - |
| M02 | Constructieonderdelen met gesloten geometrie per bouwlaag | MUST | BIM | IfcWall, IfcSlab, IfcRoof, IfcColumn, … Representation; IfcRelContainedInSpatialStructure | - |
| M03 | Gebruiksfuncties per bouwlaag | MUST | BIM  | IfcZone ObjectType = Gebruiksfunctie, Name = Bbl use function; spaces per storey | - |
| M04 | Neven gebruiksfuncties | SHOULD | BIM  | IfcZone ObjectType = Nevengebruiksfunctie | - |
| M05 | Het gebouw en zijn (BAG-)pandidenticatie (indien beschikbaar) | SHOULD | BIM  | IfcBuilding, Pset_BuildingCommon.BuildingID | - |
| M07 | Toegestane gebruiksfuncties (en beperkingen) per bouwlaag op de locatie| MUST | GEO  | - | Werkingsgebied gebiedsaanwijzing / functie met bouwlaagnorm(STOP/TPOD) of Aanduiding (IMRO) / DR-GEO-09 |  |
| M09 | Adres (-sen) van het gebouw | SHOULD | BIM  | Pset_Address, SiteAddress, BuildingAddress = VBO-adres (BAG) |  |
| M10 | Georeferentie in RD New / NAP met de juiste schaling, BIM geplaatst op de vergunning locatie | MUST | BIM  | IfcMapConversion (Eastings, Northings, OrthogonalHeight, rotation, Scale), IfcProjectedCRS | - |


## Regel #5: Beroep aan huis: maximaal 50% gebruiksoppervlakte bedrijfsgebonden kantoor

| Minimum requirement | Informatiebehoefte | Level | Type | IFC entiteit / property | Geo begrippen |
|---------|---------|---------|---------|---------|---------|
| M01 | Een valide gebouwmodel met projectdata en bouwlagen (hoogte en toegangsniveau) | MUST | BIM | IfcProject; one IfcBuilding; IfcBuildingStorey Name, Elevation, Pset_BuildingStoreyCommon.EntranceLevel | - |
| M02 | Constructieonderdelen met gesloten geometrie per bouwlaag | MUST | BIM | IfcWall, IfcSlab, IfcRoof, IfcColumn, … Representation; IfcRelContainedInSpatialStructure | - |
| M03 | Georeferentie in RD New / NAP met de juiste schaling, BIM geplaatst op de vergunning locatie | MUST | BIM  | IfcMapConversion (Eastings, Northings, OrthogonalHeight, rotation, Scale), IfcProjectedCRS | - |
| M04 | De gebruiksfuncties in het gebouw | MUST | BIM  | IfcZone with ObjectType = Gebruiksfunctie; Name = use function (e.g. Woonfunctie) | -  |
| M05 | Neven gebruiksfuncties | SHOULD | BIM  | IfcZone ObjectType = Nevengebruiksfunctie | - |
| M06 | De gebruikseenheden in het gebouw | MUST | BIM  | IfcZone ObjectType = Gebruikseenheid | - |
| M07 | Berekende hoeveelheden (bruto inhoud, oppervlakte, m2, m3) door de ontwerpsoftware | MUST | BIM  | Qto_…BaseQuantities (gross / footprint area)| - |
| M08 | Oppervlaktes bepaald volgens NEN2580 | SHOULD | BIM  | Qto_…BaseQuantities (gross / footprint area) | - |
| M09 | Ruimten, functies en oppervlaktes| SHOULD | BIM  | IfcSpace Functieruimte, Verblijfsruimte, Restruimte, Tarra ruimte; IfcSpatialZone Restgebied | - |
| M11 | Maximale gebruiksoppervlakte en aandeel beroep aan huis op de locatie | MUST | GEO  | - | Werkingsgebied gebiedsaanwijzing / omgevingsnorm voor beroep aan huis (STOP/TPOD), aanwijzing (IMRO) / DR-GEO-09 |
| M13 | Adres, bouwwerkperceel en kadastraal perceel (in model) | SHOULD | BIM  | Pset_Address, SiteAddress, BuildingAddress; IfcSpatialZone Bouwwerkperceel, Kadastraal perceel + Pset_LandRegistration | -  |


## Regel #6: Maximum aantal bouwlagen

| Minimum requirement | Informatiebehoefte | Level | Type | IFC entiteit / property | Geo begrippen |
|---------|---------|---------|---------|---------|---------|
| M01 | Een valide gebouwmodel met projectdata en bouwlagen (hoogte en toegangsniveau) | MUST | BIM | IfcProject; one IfcBuilding; IfcBuildingStorey Name, Elevation, Pset_BuildingStoreyCommon.EntranceLevel | - |
| M02 | Constructieonderdelen met gesloten geometrie per bouwlaag | MUST | BIM | IfcWall, IfcSlab, IfcRoof, IfcColumn, … Representation; IfcRelContainedInSpatialStructure | - |
| M03 | Bouwlagen als geometrisch volume | MUST | BIM  | IfcSpatialZone ObjectType = Bouwlaaginhoud, closed Representation | - |
| M04 | Ruimten, functies en oppervlaktes| SHOULD | BIM  | IfcSpace Functieruimte, Verblijfsruimte, Restruimte, Tarra ruimte; IfcSpatialZone Restgebied | - |
| M06 | Maximum aantal bouwlagen op de locatie | MUST | GEO  | - | Werkingsgebied gebiedsaanwijzing / omgevingsnorm voor maximum aantal bouwlagen (STOP/TPOD), maatvoering (IMRO) / DR-GEO-09|
| M07 | De NAP hoogte van de hoofdtoegang tot het gebouw op de begane grond (referentiepeil methode 2) | MUST (voor locaties met referentiepeil methode 2) | BIM  | IfcBuildingStorey with EntranceLevel = true and Elevation; IfcSite.RefElevation (cross-check) | -  |
| M08 | De hoogte van de dichtstbijzijnde openbare weg (referentiepeil methode 1) | MUST (voor locaties met referentiepeil methode 1)| GEO | - | Algemeen Hoogtebestand Nederland (DTM) / DR-GEO-04|
| M10 | Adres, bouwwerkperceel en kadastraal perceel (in model) | SHOULD | BIM  | Pset_Address, SiteAddress, BuildingAddress; IfcSpatialZone Bouwwerkperceel, Kadastraal perceel + Pset_LandRegistration | -  |
| M11 | Georeferentie in RD New / NAP met de juiste schaling, BIM geplaatst op de vergunning locatie | MUST | BIM  | IfcMapConversion (Eastings, Northings, OrthogonalHeight, rotation, Scale), IfcProjectedCRS | - |

### Ad M08: 
We verwijzen hier naar het terreinmodel op basis van het landsdekkende Hoogtebestand Nederland (AHN). Sommige gemeenten hebben daarnaast nog terreinmodel op basis van eigen hoogtebestanden.


## Regel #7: Brandcompartimenten

| Minimum requirement | Informatiebehoefte | Level | Type | IFC entiteit / property | Geo begrippen |
|---------|---------|---------|---------|---------|---------|
| M01 | Een valide gebouwmodel met projectdata en bouwlagen (hoogte en toegangsniveau) | MUST | BIM | IfcProject; one IfcBuilding; IfcBuildingStorey Name, Elevation, Pset_BuildingStoreyCommon.EntranceLevel | - |
| M02 | Constructieonderdelen met gesloten geometrie per bouwlaag | MUST | BIM | IfcWall, IfcSlab, IfcRoof, IfcColumn, … Representation; IfcRelContainedInSpatialStructure | - |
| M03 | Bouwlagen als geometrisch volume | MUST | BIM  | IfcSpatialZone ObjectType = Bouwlaaginhoud, closed Representation | - |
| M04 | De gebruiksfuncties in het gebouw | MUST | BIM  | IfcZone with ObjectType = Gebruiksfunctie; Name = use function (e.g. Woonfunctie) | -  |
| M05 | De brandcompartimenten als geometrisch volume | MUST | BIM  | IfcZone / IfcSpatialZone Brandcompartiment | -  |
| M06 | Berekende hoeveelheden (bruto inhoud, oppervlakte, m2, m3) door de ontwerpsoftware | MUST | BIM  | Qto_…BaseQuantities (gross / footprint area)| - |
| M07 | Ruimten en begrenzing op bouwlaag 2 | MUST | BIM  | IfcRelSpaceBoundary (second level) | - |
| M08 | Brandwerendheid van wanden, vloeren, kolommen, deuren en vliesgevels | SHOULD | BIM  | IfcColumn, IfcCurtainWall, IfcDoor, IfcSlab, IfcWall; Pset_…Common.FireRating | - |
| M09 | De bestaande bebouwing op de locatie | SHOULD | GEO  | - | BAG - panden en BGT overige bouwwerken / DR-GEO-06 |
| M10 | De openbare ruimte (wegen / spoor, water en groen) | SHOULD | GEO  | - | BGT openbare ruimte (wegen, spoor, water en terrein) / DR-GEO-07 |
| M14 | Adres, bouwwerkperceel en kadastraal perceel (in model) | SHOULD | BIM  | Pset_Address, SiteAddress, BuildingAddress; IfcSpatialZone Bouwwerkperceel, Kadastraal perceel + Pset_LandRegistration | -  |
| M15 | Georeferentie in RD New / NAP met de juiste schaling, BIM geplaatst op de vergunning locatie | MUST | BIM  | IfcMapConversion (Eastings, Northings, OrthogonalHeight, rotation, Scale), IfcProjectedCRS | - |

### Ad M9 en M10
Omgevingsdata is waarschijnlijk alleen in een bepaalde zone / buffer rond het bouwplan gewenst. In principe alleen direct aangrenzende percelen. Waarbij de ligging van de grens essentieel is. Waarbij een aangrenzend perceel met dezelfde eigenaar als het te bebouwen perceel als hetzelfde perceel beschouw kan worden. En de situatietekening met perceelsgrenzen die afwijken van de BRK, leidend is, uitgaande van een later te verkavelen perceel.


## Regel #8: Brandwerendheid

| Minimum requirement | Informatiebehoefte | Level | Type | IFC entiteit / property | Geo begrippen |
|---------|---------|---------|---------|---------|---------|
| M01 | Een valide gebouwmodel met projectdata en bouwlagen (hoogte en toegangsniveau) | MUST | BIM | IfcProject; one IfcBuilding; IfcBuildingStorey Name, Elevation, Pset_BuildingStoreyCommon.EntranceLevel | - |
| M02 | Constructieonderdelen met gesloten geometrie per bouwlaag | MUST | BIM | IfcWall, IfcSlab, IfcRoof, IfcColumn, … Representation; IfcRelContainedInSpatialStructure | - |
| M03 | De gebruiksfuncties in het gebouw | MUST | BIM  | IfcZone with ObjectType = Gebruiksfunctie; Name = use function (e.g. Woonfunctie) | -  |
| M04 | De brandcompartimenten als geometrisch volume | MUST | BIM  | IfcZone / IfcSpatialZone Brandcompartiment | -  |
| M05 | Ruimten en begrenzing op bouwlaag 2 | MUST | BIM  | IfcRelSpaceBoundary (second level) | - |
| M06 | Brandwerendheid van wanden, vloeren, kolommen, deuren en vliesgevels | SHOULD | BIM  | IfcColumn, IfcCurtainWall, IfcDoor, IfcSlab, IfcWall; Pset_…Common.FireRating | - |
| M07 | Wanden, vloeren, kolommen, deuren en vliesgevels als fysieke onderdelen | SHOULD | BIM  | IfcColumn, IfcCurtainWall, IfcDoor, IfcSlab, IfcWall | - |
| M11 | Georeferentie in RD New / NAP met de juiste schaling, BIM geplaatst op de vergunning locatie | MUST | BIM  | IfcMapConversion (Eastings, Northings, OrthogonalHeight, rotation, Scale), IfcProjectedCRS | - |


## Regel #9: Vrije breedte

| Minimum requirement | Informatiebehoefte | Level | Type | IFC entiteit / property | Geo begrippen |
|---------|---------|---------|---------|---------|---------|
| M01 | Een valide gebouwmodel met projectdata en bouwlagen (hoogte en toegangsniveau) | MUST | BIM | IfcProject; one IfcBuilding; IfcBuildingStorey Name, Elevation, Pset_BuildingStoreyCommon.EntranceLevel | - |
| M02 | Constructieonderdelen met gesloten geometrie per bouwlaag | MUST | BIM | IfcWall, IfcSlab, IfcRoof, IfcColumn, … Representation; IfcRelContainedInSpatialStructure | - |
| M03 | De gebruiksfuncties in het gebouw | MUST | BIM  | IfcZone with ObjectType = Gebruiksfunctie; Name = use function (e.g. Woonfunctie) | -  |
| M04 | Woonruimten, gebruiksruimten en functieruimten | MUST | BIM  | IfcSpatialZone Verblijfsgebied, Gebruiksgebied; IfcSpace Functieruimte, Verblijfsruimte | -  |
| M05 | Functieruimten en (gebouwgebonden) buitenruimte | MUST | BIM  | IfcSpatialZone Functiegebied, Buitengebied; IfcSpace Buitenruimte | -  |
| M06 | Breedte en hoogte deuren | MUST | BIM  | IfcDoor.OverallWidth, OverallHeight| - |
| M07 | Lift als apart onderdeel met geometrie | MUST | BIM  | IfcTransportElement PredefinedType ELEVATOR, with Representation | - |
| M08 | Ruimten en begrenzing op bouwlaag 2 | MUST | BIM  | IfcRelSpaceBoundary (second level) | - |
| M09 | Wanden, vloeren als fysieke onderdelen | SHOULD | BIM  |  IfcSlab, IfcWall | - |
| M08 | Brandwerendheid van wanden, vloeren, kolommen, deuren en vliesgevels | SHOULD | BIM  | IfcColumn, IfcCurtainWall, IfcDoor, IfcSlab, IfcWall; Pset_…Common.FireRating | - |
| M09 | De bestaande bebouwing op de locatie | SHOULD | GEO  | - | BAG - panden en BGT overige bouwwerken / DR-GEO-06 |
| M10 | De openbare ruimte (wegen / spoor, water en groen) | SHOULD | GEO  | - | BGT openbare ruimte (wegen, spoor, water en terrein) / DR-GEO-07 |
| M11 | Adres, bouwwerkperceel en kadastraal perceel (in model) | SHOULD | BIM  | Pset_Address, SiteAddress, BuildingAddress; IfcSpatialZone Bouwwerkperceel, Kadastraal perceel + Pset_LandRegistration | -  |


## Regel #10: Hoogteverschil
| Minimum requirement | Informatiebehoefte | Level | Type | IFC entiteit / property | Geo begrippen |
|---------|---------|---------|---------|---------|---------|
| M01 | Een valide gebouwmodel met projectdata en bouwlagen (hoogte en toegangsniveau) | MUST | BIM | IfcProject; one IfcBuilding; IfcBuildingStorey Name, Elevation, Pset_BuildingStoreyCommon.EntranceLevel | - |
| M02 | Constructieonderdelen met gesloten geometrie per bouwlaag | MUST | BIM | IfcWall, IfcSlab, IfcRoof, IfcColumn, … Representation; IfcRelContainedInSpatialStructure | - |
| M03 | Georeferentie in RD New / NAP met de juiste schaling, BIM geplaatst op de vergunning locatie | MUST | BIM  | IfcMapConversion (Eastings, Northings, OrthogonalHeight, rotation, Scale), IfcProjectedCRS | - |
| M04 | De gebruiksfuncties in het gebouw | MUST | BIM  | IfcZone with ObjectType = Gebruiksfunctie; Name = use function (e.g. Woonfunctie) | -  |
| M05| Woonruimten, gebruiksruimten en functieruimten | MUST | BIM  | IfcSpatialZone Verblijfsgebied, Gebruiksgebied; IfcSpace Functieruimte, Verblijfsruimte | -  |
| M06 | Functieruimten en (gebouwgebonden) buitenruimte | MUST | BIM  | IfcSpatialZone Functiegebied, Buitengebied; IfcSpace Buitenruimte | -  |
| M07 | Trappen en hellingbaan (helling, breedte, traptredenafmeting etc.) als apart onderdeel met geometrie | MUST | BIM  | IfcStair / IfcRamp with flights; Pset_StairFlightCommon (RiserHeight, TreadLength, ClearWidth); Pset_RampFlightCommon (Slope, ClearWidth) | - |
| M08 | Lift als apart onderdeel met geometrie | MUST | BIM  | IfcTransportElement PredefinedType ELEVATOR, with Representation | - |
| M09 | Ruimten en begrenzing op bouwlaag 2 | MUST | BIM  | IfcRelSpaceBoundary (second level) | - |
| M10 | Wanden als fysieke onderdelen | SHOULD | BIM  |  IfcSlab | - |
| M11 | Kadastraal perceel (in model) | SHOULD | BIM  |  IfcSpatialZone Kadastraal perceel + Pset_LandRegistration | -  |
| M12 | De hoogte van het terrein / maaiveld | MUST (voor locaties met referentiepeil methode 1)| GEO | - | Algemeen Hoogtebestand Nederland (DTM) |
| M13 | De openbare ruimte (wegen / spoor, water en terrein) | SHOULD | GEO  | - | BGT openbare ruimte (wegen, spoor, water en groen) / DR-GEO-07|

### Ad M12 en M13
Indien het gebouw direct grenst aan de openbare buitenruimte. In dat geval is de toegang tot de openbare weg / openbare ruimte en het referentiepeil / maaiveld van belang.
We verwijzen hier naar het terreinmodel op basis van het landsdekkende Hoogtebestand Nederland (AHN). Sommige gemeenten hebben daarnaast nog terreinmodel op basis van eigen hoogtebestanden.


## Regel #11: Rc-waarde

| Minimum requirement | Informatiebehoefte | Level | Type | IFC entiteit / property | Geo begrippen |
|---------|---------|---------|---------|---------|---------|
| M01 | Een valide gebouwmodel met projectdata en bouwlagen (hoogte en toegangsniveau) | MUST | BIM | IfcProject; one IfcBuilding; IfcBuildingStorey Name, Elevation, Pset_BuildingStoreyCommon.EntranceLevel | - |
| M02 | Constructieonderdelen met gesloten geometrie per bouwlaag | MUST | BIM | IfcWall, IfcSlab, IfcRoof, IfcColumn, … Representation; IfcRelContainedInSpatialStructure | - |
| M03 | De gebruiksfuncties in het gebouw | MUST | BIM  | IfcZone with ObjectType = Gebruiksfunctie; Name = use function (e.g. Woonfunctie) | -  |
| M04 | Woonruimten, gebruiksruimten en functieruimten | MUST | BIM  | IfcSpatialZone Verblijfsgebied, Gebruiksgebied; IfcSpace Functieruimte, Verblijfsruimte | -  |
| M05 | Ruimten en begrenzing op bouwlaag 2 | MUST | BIM  | IfcRelSpaceBoundary (second level) | - |
| M06 | Isolatiewaarden op alle buitenmuren, dak, vloer, ramen en deuren (grenzend aan buiten) | SHOULD | BIM  | Pset_…Common.ThermalTransmittance, Pset_…Common.IsExternal | - |
| M07 | Geisoleerde constructiedelen (muren, vloeren en vliesgevel)als aparte objecten | SHOULD | BIM  |  IfcCovering PredefinedType INSULATION, IfcCurtainWall, IfcSlab, IfcWall | - |
| M11 | Kadastraal perceel (in model) | MAY | BIM  |  IfcSpatialZone Kadastraal perceel + Pset_LandRegistration | -  |


## Regel #12: U-waarde

| Minimum requirement | Informatiebehoefte | Level | Type | IFC entiteit / property | Geo begrippen |
|---------|---------|---------|---------|---------|---------|
| M01 | Een valide gebouwmodel met projectdata en bouwlagen (hoogte en toegangsniveau) | MUST | BIM | IfcProject; one IfcBuilding; IfcBuildingStorey Name, Elevation, Pset_BuildingStoreyCommon.EntranceLevel | - |
| M02 | Constructieonderdelen met gesloten geometrie per bouwlaag | MUST | BIM | IfcWall, IfcSlab, IfcRoof, IfcColumn, … Representation; IfcRelContainedInSpatialStructure | - |
| M03 | De gebruiksfuncties in het gebouw | MUST | BIM  | IfcZone with ObjectType = Gebruiksfunctie; Name = use function (e.g. Woonfunctie) | -  |
| M04 | Isolatiewaarden op alle buitenmuren, ramen en deuren (grenzend aan buiten) | SHOULD | BIM  | Pset_…Common.ThermalTransmittance, Pset_…Common.IsExternal | - |
| M05 | Vliesgevel, deuren en ramen als aparte objecten | SHOULD | BIM  |  IfcCurtainWall, IfcDoor, IfcWindow | - |
| M06 | Ruimten en begrenzing op bouwlaag 2 | MUST | BIM  | IfcRelSpaceBoundary (second level) | - |
| M10 | Kadastraal perceel (in model) | SHOULD | BIM  |  IfcSpatialZone Kadastraal perceel + Pset_LandRegistration | -  |
| M11 | Verwarmde ruimten (verblijfsruimten en functieruimten) | MUST | BIM  | IfcSpatialZone Functiegebied, Verblijfsgebied | - |


## Regel #13: MPG

| Minimum requirement | Informatiebehoefte | Level | Type | IFC entiteit / property | Geo begrippen |
|---------|---------|---------|---------|---------|---------|
| M01 | Een valide gebouwmodel met projectdata en bouwlagen (hoogte en toegangsniveau) | MUST | BIM | IfcProject; one IfcBuilding; IfcBuildingStorey Name, Elevation, Pset_BuildingStoreyCommon.EntranceLevel | - |
| M02 | Constructieonderdelen met gesloten geometrie per bouwlaag | MUST | BIM | IfcWall, IfcSlab, IfcRoof, IfcColumn, … Representation; IfcRelContainedInSpatialStructure | - |
| M03 | De gebruiksfuncties in het gebouw | MUST | BIM  | IfcZone with ObjectType = Gebruiksfunctie; Name = use function (e.g. Woonfunctie) | -  |
| M04 | Berekende hoeveelheden (bruto inhoud, oppervlakte, m2, m3) door de ontwerpsoftware | MUST | BIM  | Qto_…BaseQuantities (gross / footprint area)| - |
| M06 | Woonruimten, gebruiksruimten en functieruimten | MUST | BIM  | IfcSpatialZone Verblijfsgebied, Gebruiksgebied; IfcSpace Functieruimte, Verblijfsruimte | -  |
| M07 | Vloeren en wanden als aparte objecten | SHOULD | BIM  |  IfcSlab, IfcWall with IsExternal | - |



## Regel #14: Vluchtwegen

| Minimum requirement | Informatiebehoefte | Level | Type | IFC entiteit / property | Geo begrippen |
|---------|---------|---------|---------|---------|---------|
| M01 | Een valide gebouwmodel met projectdata en bouwlagen (hoogte en toegangsniveau) | MUST | BIM | IfcProject; one IfcBuilding; IfcBuildingStorey Name, Elevation, Pset_BuildingStoreyCommon.EntranceLevel | - |
| M02 | Constructieonderdelen met gesloten geometrie per bouwlaag | MUST | BIM | IfcWall, IfcSlab, IfcRoof, IfcColumn, … Representation; IfcRelContainedInSpatialStructure | - |
| M03 | De gebruiksfuncties in het gebouw | MUST | BIM  | IfcZone with ObjectType = Gebruiksfunctie; Name = use function (e.g. Woonfunctie) | -  |
| M04 | Gebruiksruimten, functieruimten en woonruimten | MUST | BIM  | IfcSpatialZone Verblijfsgebied, Gebruiksgebied; IfcSpace Functieruimte, Verblijfsruimte | -  |
| M05 | De brandcompartimenten als geometrisch volume | MUST | BIM  | IfcZone / IfcSpatialZone Brandcompartiment | -  |
| M06 | De vluchtroute (gemodelleerd) | MUST | BIM  | IfcZone / IfcSpatialZone Vluchtroute | -  |
| M07 | Ruimten en begrenzing op bouwlaag 2 | MUST | BIM  | IfcRelSpaceBoundary (second level) | - |
| M08 | Deuren, vloeren, trappen en hellingbanen als aparte objecten2 | SHOULD | BIM  | IfcDoor, IfcSlab; IfcStair / IfcRamp with flights | - |
| M09 | Kadastraal perceel (in model) | SHOULD | BIM  |  IfcSpatialZone Kadastraal perceel + Pset_LandRegistration | -  |
| M12 | Openbare weg | SHOULD | GEO  | - | BGT Weg / DR-GEO-07 |



## Regel #15: Loopafstand

| Minimum requirement | Informatiebehoefte | Level | Type | IFC entiteit / property | Geo begrippen |
|---------|---------|---------|---------|---------|---------|
| M01 | Een valide gebouwmodel met projectdata en bouwlagen (hoogte en toegangsniveau) | MUST | BIM | IfcProject; one IfcBuilding; IfcBuildingStorey Name, Elevation, Pset_BuildingStoreyCommon.EntranceLevel | - |
| M02 | Constructieonderdelen met gesloten geometrie per bouwlaag | MUST | BIM | IfcWall, IfcSlab, IfcRoof, IfcColumn, … Representation; IfcRelContainedInSpatialStructure | - |
| M03 | De gebruiksfuncties in het gebouw | MUST | BIM  | IfcZone with ObjectType = Gebruiksfunctie; Name = use function (e.g. Woonfunctie) | -  |
| M04 | Gebruiksruimten, functieruimten en woonruimten | MUST | BIM  | IfcSpatialZone Verblijfsgebied, Gebruiksgebied; IfcSpace Functieruimte, Verblijfsruimte | -  |
| M05 | De brandcompartimenten als geometrisch volume | MUST | BIM  | IfcZone / IfcSpatialZone Brandcompartiment | -  |
| M06 | Ruimten en begrenzing op bouwlaag 2 | MUST | BIM  | IfcRelSpaceBoundary (second level) | - |
| M07 | Woonruimten en bezettingsgraad | SHOULD | BIM  | IfcSpatialZone Verblijfsgebied met bezettingsgraad (occupancy property) | -  |
| M08 | De vluchtroute (gemodelleerd) en tarra ruimte | SHOULD | BIM  | IfcZone / IfcSpatialZone Vluchtroute; IfcSpace Tarra ruimte | -  |
| M09 | Deuren en vloeren als aparte objecten | SHOULD | BIM  | IfcDoor, IfcSlab | - |
| M10 | Berekende hoeveelheden (bruto inhoud, oppervlakte, m2, m3) door de ontwerpsoftware | MUST | BIM  | Qto_…BaseQuantities (gross / footprint area)| - |


## Regel #16: Vluchtbreedte

| Minimum requirement | Informatiebehoefte | Level | Type | IFC entiteit / property | Geo begrippen |
|---------|---------|---------|---------|---------|---------|
| M01 | Een valide gebouwmodel met projectdata en bouwlagen (hoogte en toegangsniveau) | MUST | BIM | IfcProject; one IfcBuilding; IfcBuildingStorey Name, Elevation, Pset_BuildingStoreyCommon.EntranceLevel | - |
| M02 | Constructieonderdelen met gesloten geometrie per bouwlaag | MUST | BIM | IfcWall, IfcSlab, IfcRoof, IfcColumn, … Representation; IfcRelContainedInSpatialStructure | - |
| M03 | De gebruiksfuncties in het gebouw | MUST | BIM  | IfcZone with ObjectType = Gebruiksfunctie; Name = use function (e.g. Woonfunctie) | -  |
| M04 | Woonruimten | MUST | BIM  | IfcSpatialZone Verblijfsgebied | -  |
| M05 | De vluchtroute (gemodelleerd) | MUST | BIM  | IfcZone / IfcSpatialZone Vluchtroute | -  |
| M06 | Trappen en hellingbanen als aparte objecten met vrije breedte | MUST | BIM  | IfcStair / IfcRamp with flights; Pset_StairFlightCommon, Pset_RampFlightCommon (ClearWidth) | -  |
| M07 | Deuren met breedte en hoogte en nooduitgang kenmerk | MUST | BIM  | IfcDoor.OverallWidth, OverallHeight; Pset_DoorCommon.FireExit | -  |
| M08 | Woonruimten met bezettingsgraad, bedgebied en bedruimten | SHOULD | BIM  | IfcSpatialZone Verblijfsgebied met bezettingsgraad, Bedgebied; IfcSpace Bedruimte | -  |
| M09 | Vloeren en wanden als aparte objecten | SHOULD | BIM  | IfcWall, IfcSlab | - |
| M10 | Ruimten en begrenzing op bouwlaag 2 | MUST | BIM  | IfcRelSpaceBoundary (second level) | - |



## Regel #17: Daglicht

| Minimum requirement | Informatiebehoefte | Level | Type | IFC entiteit / property | Geo begrippen |
|---------|---------|---------|---------|---------|---------|
| M01 | Een valide gebouwmodel met projectdata en bouwlagen (hoogte en toegangsniveau) | MUST | BIM | IfcProject; one IfcBuilding; IfcBuildingStorey Name, Elevation, Pset_BuildingStoreyCommon.EntranceLevel | - |
| M02 | Constructieonderdelen met gesloten geometrie per bouwlaag | MUST | BIM | IfcWall, IfcSlab, IfcRoof, IfcColumn, … Representation; IfcRelContainedInSpatialStructure | - |
| M03 | Georeferentie in RD New / NAP met de juiste schaling, BIM geplaatst op de vergunning locatie | MUST | BIM  | IfcMapConversion (Eastings, Northings, OrthogonalHeight, rotation, Scale), IfcProjectedCRS | - |
| M04 | De gebruiksfuncties in het gebouw | MUST | BIM  | IfcZone with ObjectType = Gebruiksfunctie; Name = use function (e.g. Woonfunctie) | -  |
| M06 | Ramen met hoogte en breedte en grenzend aan buitenruimte | MUST | BIM  | IfcWindow.OverallWidth, OverallHeight; Pset_WindowCommon.IsExternal; GlazingAreaFraction | - |
| M07 | Kadastraal perceel (in model) | SHOULD | BIM  |  IfcSpatialZone Kadastraal perceel + Pset_LandRegistration | -  |
| M08 | Vliesgevels, deuren en wanden als aparte objecten | SHOULD | BIM  | IfcCurtainWall, IfcDoor, IfcWall | - |
| M09 | Gebouw, kadastraal perceel en bouwwerkperceel in het model | SHOULD | BIM  | IfcBuilding; IfcSpatialZone Perceel, Bouwwerkperceel, Kadastraal perceel | - |
| M10 | Oppervlaktes bepaald volgens NEN2580 | SHOULD | BIM  | Qto_…BaseQuantities (gross / footprint area) | - |
| M11 | Bestaande bebouwing met hoogte | SHOULD | GEO  | - | 3D BAG / DR-GEO-08 |
| M12 | Ruimten en begrenzing op bouwlaag 2 | SHOULD | BIM  | IfcRelSpaceBoundary (second level) | - |
| M15 | Openbare ruimte | SHOULD | GEO  | - | BGT Terrein / DR-GEO-07 |

