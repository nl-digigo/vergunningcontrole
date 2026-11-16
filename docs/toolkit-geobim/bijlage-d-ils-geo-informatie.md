# ILS voor geo-informatie — specificaties {#ils-geo-informatie}

Dit hoofdstuk beschrijft de informatiebehoefte vereisten voor geo-informatie bij een omgevingsvergunningaanvraag.
| | |
|---|---|
| **Bron** | `BM13 Minimale data vereisten - GEO-v13 (6 oktober 2026)` — 28 specificaties |
| **Begrippen** | Stelselcatalogus: https://stelselcatalogus.nl/ |
| **Processtap** | GEMMA 015-02 Inhoudelijk behandelen vergunningaanvraag / 015-02-02 Toetsen activiteiten aan regelgeving |
| **Checks** | 17 regels uit de BM13-regelinventarisatie v0.3, 3-7-2026 |

## Overzicht per Informatiebehoefte 

De 17 checks komen uit de BM13-regelinventarisatie v0.3, 3-7-2026. Regels #1–#6 betreffen het omgevingsplan (OPA), regels #7–#17 het Besluit bouwwerken leefomgeving (Bbl). Voor deze 17 checks zijn de volgende informatiebehoefte vereisten (DR-GEO-xx) voor geo-informatie gedefinieerd. Deze zijn uitgesplitst naar afzonderlijke dataspecificaties (#id).

| Informatiebehoefte id | Informatiebehoefte |  Specificatie iD |
|---------|---------|---------|
| DR-GEO-01 | Werkingsgebied type gebiedsaanwijzing / functie | 29 |
| DR-GEO-02 | Kadastrale situatie | 4, 5, 6 |
| DR-GEO-03 | Werkingsgebied omgevingsnorm  / bebouwingshoogte | 30 |
| DR-GEO-04 | Hoogtegegevens (referentiepeil) | 1, 2 |
| DR-GEO-05 | Beeldmateriaal | 3 |
| DR-GEO-06 | Bestaande bebouwing | 7, 8, 9, 10, 11, 12, 14 |
| DR-GEO-07 | Openbare ruimte (wegen, spoor, water, groen) | 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28 |
| DR-GEO-08 | Bestaande bebouwing (3D hoogte) | 13 |
| DR-GEO-09 | Werkingsgebied omgevingsnorm  / bebouwingspercentage | 31 |
| DR-GEO-10 | Werkingsgebied omgevingsnorm  / aantal bouwlagen | 32 |

## Overzicht per check

De dataspecificaties per informatiebehoefte zijn als volgt gekoppeld aan de 17 checks:

| Check | Id | Onderwerp | Specificaties |
|---------|---------|---------|---------|
| #1 | BM13-R01 |Gebruiksfunctie komt overeen met bestemming | 4, 29 |
| #2 | BM13-R02 |Maximale bouwhoogte | 1, 2, 4, 30 |
| #3 | BM13-R03 |Maximaal bebouwingspercentage | 1, 2, 3, 4, 7, 13, 14, 31 |
| #4 | BM13-R04 |Gebruiksfunctie/bestemming beperkt tot x aantal bouwlagen | 29 |
| #5 | BM13-R05 |Beroep aan huis: max. 50% gebruiksoppervlakte | 4, 7, 8, 9, 10, 11, 12, 13, 29 |
| #6 | BM13-R06 |Maximum aantal bouwlagen | 32 |
| #7 | BM13-R07 |Brandcompartimenten | 4, 5, 6, 7, 8, 9, 10, 11, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28 |
| #8 | BM13-R08 |Brandwerendheid | 4, 5, 6, 7, 8, 9, 10, 11, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28 |
| #9 | BM13-R09 |Vrije breedte | — |
| #10 | BM13-R10 |Hoogteverschil | 1, 2, 15, 16, 17, 18, 19, 20, 21, 24 |
| #11 | BM13-R11 |Rc-waarde | 7, 8, 13 |
| #12 | BM13-R12 |U-waarde | — |
| #13 | BM13-R13 |MPG | — |
| #14 | BM13-R14 |Vluchtwegen | 15, 16,  17, 18 |
| #15 | BM13-R15 |Loopafstand | — |
| #16 | BM13-R16 |Vluchtbreedte | — |
| #17 | BM13-R17 |Daglicht | 4, 5, 6, 7, 8, 13, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28 |

## Overzicht per specificatie

De volgende dataspecificaties zijn gedefinieerd:

| Nr | Specificatie | Databron | BM13-checks |
|-----|-----|-----|-----|
| 1 | 1.01a Terreinmodel - 1 | Actueel Hoogtebestand Nederland (AHN) | #2, #3, #10 |
| 2 | 1.01b Terreinmodel - 2 | Basisvoorziening 3D | #2, #3, #10 |
| 3 | 1.02 Luchtfoto | NL luchtfoto | #3 |
| 4 | 1.03a (Kadastraal) Perceel | Basisregistratie Kadaster (BRK) | #1, #2, #3, #5, #7, #8, #17 |
| 5 | 1.03b Tenaamstelling | Basisregistratie Kadaster (BRK) | #7, #8, #17 |
| 6 | 1.03c Naam eigenaar | Basisregistratie Kadaster (BRK) | #7, #8, #17 |
| 7 | 1.04a Bestaande bebouwing (Gebouwen) - 1 | Basisregistratie Adressen en Gebouwen (BAG) | #3, #5, #7, #8, #11, #17 |
| 8 | 1.04b BAG - status pand | Basisregistratie Adressen en Gebouwen (BAG) | #5, #7, #8, #11, #17 |
| 9 | 1.05a Bestaande bebouwing (adressen) | Basisregistratie Adressen en Gebouwen (BAG) | #5, #7, #8 |
| 10 | 1.05b BAG - status verblijfsobject | Basisregistratie Adressen en Gebouwen (BAG) | #5, #7, #8 |
| 11 | 1.05c BAG - gebruiksdoel verblijfsobject | Basisregistratie Adressen en Gebouwen (BAG) | #5, #7, #8 |
| 12 | 1.05d BAG - gebruiksoppervlakte verblijfsobject | Basisregistratie Adressen en Gebouwen (BAG) | #5 |
| 13 | 1.06 Bestaande bebouwing (Gebouwen) - 2 | 3D BAG | #3, #5, #7, #8, #11, #17 |
| 14 | 1.07 Overige bouwwerken | Basisregistratie Grootschalige Topografie (BGT) | #3, #7, #8 |
| 15 | 1.08a Openbaar toegankelijke wegen (Weg) | Basisregistratie Grootschalige Topografie (BGT) | #7, #8, #10, #14, #17 |
| 16 | 1.08b BGT - functie wegdeel | Basisregistratie Grootschalige Topografie (BGT) | #7, #8, #10, #14, #17 |
| 17 | 1.08c BGT - ondersteunend wegdeel | Basisregistratie Grootschalige Topografie (BGT) | #7, #8, #10, #14, #17 |
| 18 | 1.08d BGT - functie ondersteunend wegdeel | Basisregistratie Grootschalige Topografie (BGT) | #7, #8, #10, #14, #17 |
| 19 | 1.09a Spoor | Basisregistratie Grootschalige Topografie (BGT) | #7, #8, #17 |
| 20 | 1.09b BGT - functie spoor | Basisregistratie Grootschalige Topografie (BGT) | #7, #8, #17 |
| 21 | 1.10a Openbaar toegankelijke ruimte | Basisregistratie Grootschalige Topografie (BGT) | #7, #8, #10, #17 |
| 22 | 1.10b BGT - fysiek voorkomen begroeid terreindeel | Basisregistratie Grootschalige Topografie (BGT) | #7, #8, #10, #17 |
| 23 | 1.11a BGT - onbegroeid terreindeel | Basisregistratie Grootschalige Topografie (BGT) | #7, #8, #10, #17 |
| 24 | 1.11b BGT - fysiek voorkomen onbegroeid terreindeel | Basisregistratie Grootschalige Topografie (BGT) | #7, #8, #10, #17 |
| 25 | 1.12a Water | Basisregistratie Grootschalige Topografie (BGT) | #7, #8, #17 |
| 26 | 1.12b BGT - type waterdeel | Basisregistratie Grootschalige Topografie (BGT) | #7, #8, #17 |
| 27 | 1.12c BGT - ondersteunend waterdeel | Basisregistratie Grootschalige Topografie (BGT) | #7, #8, #17 |
| 28 | 2.12d BGT - type ondersteunend waterdeel | Basisregistratie Grootschalige Topografie (BGT) | #7, #8, #17 |
| 29 | 2.01a Werkingsgebied type gebiedsaanwijzing / functie | Digitaal Stelsel Omgevingswet | #1, #4, #5 |
| 30 | 2.01b Werkingsgebied omgevingsnorm  / bebouwingshoogte | Digitaal Stelsel Omgevingswet | #2 |
| 31 | 2.01c Werkingsgebied omgevingsnorm  / bebouwingspercentage | Digitaal Stelsel Omgevingswet | #3 |
| 32 | 2.01d Werkingsgebied omgevingsnorm  / aantal bouwlagen | Digitaal Stelsel Omgevingswet | #6 |


## Beschrijving per specificatie
Alle specificaties betreffen Open Data, die via Landelijke voorzieningen beschikbaar is.
Voor elke specificatie gelden (wettelijke) richtlijnen voor de te hanteren datakwaliteit. Kwaliteitseisen zijn vastgelegd per databron. Validatie van de vereiste kwaliteit vindt plaats bij de bron.

### 01 - 1.01a Terreinmodel

<table>
<tr><td><strong>Begrip</strong></td><td>Digitaal Terreinmodel (DTM)</td></tr>
<tr><td><strong>Databron</strong></td><td>Actueel Hoogtebestand Nederland (AHN)</td></tr>
<tr><td><strong>CityGML 2.0</strong></td><td>ReliefFeature</td></tr>
<tr><td><strong>CityGML 3.0</strong></td><td>ReliefFeature</td></tr>
<tr><td><strong>Definitie</strong></td><td>https://www.ahn.nl/producten</td></tr>
<tr><td><strong>Dimensie</strong></td><td>3D</td></tr>
<tr><td><strong>Coordinatenstelsel (CRS)</strong></td><td>RD+NAP (EPSG:7415)</td></tr>
<tr><td><strong>Informatiemodel</strong></td><td>LAZ</td></tr>
<tr><td><strong>Dataformaat</strong></td><td>.laz en GeoTiff</td></tr>
<tr><td><strong>Metadata</strong></td><td>https://nationaalgeoregister.nl/geonetwork/srv/dut/catalog.search#/metadata/e68e51b9-9061-4212-b83b-b7e81c2bf059</td></tr>
<tr><td><strong>Toegangspunt</strong></td><td>https://api.ellipsis-drive.com/v3/ogc/features/0820faae-5240-499b-8486-cf406433cf71?request=getCapabilities</td></tr>
</table>

### 02 - 1.01b Terreinmodel

<table>
<tr><td><strong>Begrip</strong></td><td>Digitaal Terreinmodel (DTM)</td></tr>
<tr><td><strong>Databron</strong></td><td>Basisvoorziening 3D</td></tr>
<tr><td><strong>CityGML 2.0</strong></td><td>ReliefFeature</td></tr>
<tr><td><strong>CityGML 3.0</strong></td><td>ReliefFeature</td></tr>
<tr><td><strong>Definitie</strong></td><td>https://3d.kadaster.nl/productbeschrijving/</td></tr>
<tr><td><strong>Dimensie</strong></td><td>3D</td></tr>
<tr><td><strong>Coordinatenstelsel (CRS)</strong></td><td>WGS84 (EPSG:4326)</td></tr>
<tr><td><strong>Informatiemodel</strong></td><td>Quantized mesh</td></tr>
<tr><td><strong>Dataformaat</strong></td><td>Quantized mesh</td></tr>
<tr><td><strong>Metadata</strong></td><td>https://nationaalgeoregister.nl/geonetwork/srv/dut/catalog.search#/metadata/364ade50-5aae-4420-9d9b-ad4ebca2d032</td></tr>
<tr><td><strong>Toegangspunt</strong></td><td>https://api.pdok.nl/kadaster/3d-basisvoorziening/ogc/v1</td></tr>
</table>

### 03 - 1.02 Luchtfoto

<table>
<tr><td><strong>Begrip</strong></td><td>NL luchtfoto</td></tr>
<tr><td><strong>Databron</strong></td><td>Beeldmateriaal Nederland</td></tr>
<tr><td><strong>CityGML 2.0</strong></td><td><em>n.v.t.</em></td></tr>
<tr><td><strong>CityGML 3.0</strong></td><td><em>n.v.t.</em></td></tr>
<tr><td><strong>Definitie</strong></td><td>https://www.beeldmateriaal.nl/producten</td></tr>
<tr><td><strong>Dimensie</strong></td><td>2D</td></tr>
<tr><td><strong>Coordinatenstelsel (CRS)</strong></td><td>RD (EPSG:28992)</td></tr>
<tr><td><strong>Informatiemodel</strong></td><td>GeoTIFF</td></tr>
<tr><td><strong>Dataformaat</strong></td><td>GeoTiff</td></tr>
<tr><td><strong>Metadata</strong></td><td>https://nationaalgeoregister.nl/geonetwork/srv/dut/catalog.search#/metadata/7b424340-25c5-4c95-8dbf-bf1d87888566</td></tr>
<tr><td><strong>Toegangspunt</strong></td><td><em>https://service.pdok.nl/hwh/luchtfotorgb/wms/v1_0?request=GetCapabilities&service=wms</em></td></tr>
</table>

### 04 - 1.03a (Kadastraal) Perceel

<table>
<tr><td><strong>Begrip</strong></td><td>BRK - Perceel</td></tr>
<tr><td><strong>Databron</strong></td><td>Basisregistratie Kadaster (BRK)</td></tr>
<tr><td><strong>CityGML 2.0</strong></td><td>GenericCityObject</td></tr>
<tr><td><strong>CityGML 3.0</strong></td><td>GenericLogicalSpace</td></tr>
<tr><td><strong>Definitie</strong></td><td>https://stelselcatalogus.nl/detail/objecttype?id=https:%2F%2Fpurl.stelselcatalogus.nl%2Fmkg%2Fbrk%2Fb9fd1c65-1d17-4129-a237-3d00a1667312</td></tr>
<tr><td><strong>Dimensie</strong></td><td>2D</td></tr>
<tr><td><strong>Coordinatenstelsel (CRS)</strong></td><td>RD (EPSG:28992)</td></tr>
<tr><td><strong>Informatiemodel</strong></td><td>IMKAD / DKK (GML)</td></tr>
<tr><td><strong>Dataformaat</strong></td><td>GML (WFS), GeoJSON en VectorTiles</td></tr>
<tr><td><strong>Metadata</strong></td><td>https://nationaalgeoregister.nl/geonetwork/srv/dut/catalog.search#/metadata/a29917b9-3426-4041-a11b-69bcb2256904</td></tr>
<tr><td><strong>Toegangspunt</strong></td><td>https://api.pdok.nl/kadaster/brk-kadastrale-kaart/ogc/v1</td></tr>
</table>

### 05 - 1.03b Eigenaar perceel

<table>
<tr><td><strong>Begrip</strong></td><td>BRK - Tenaamstelling</td></tr>
<tr><td><strong>Databron</strong></td><td>Basisregistratie Kadaster (BRK)</td></tr>
<tr><td><strong>Definitie</strong></td><td>https://stelselcatalogus.nl/detail/objecttype?id=https:%2F%2Fpurl.stelselcatalogus.nl%2Fmkg%2Fbrk%2F8a8cbe3b-00a1-486d-a5c5-0a4888374985</td></tr>
<tr><td><strong>Dimensie</strong></td><td>2D</td></tr>
<tr><td><strong>Coordinatenstelsel (CRS)</strong></td><td>RD (EPSG:28992)</td></tr>
<tr><td><strong>Informatiemodel</strong></td><td>IMKAD</td></tr>
<tr><td><strong>Dataformaat</strong></td><td>XML, JSON</td></tr>
<tr><td><strong>Metadata</strong></td><td><em>niet beschikbaar</em></td></tr>
<tr><td><strong>Toegangspunt</strong></td><td>https://www.kadaster.nl/zakelijk/producten/eigendom/brk-bevragen</td></tr>
</table>

### 06 - 1.03c Naam eigenaar

<table>
<tr><td><strong>Begrip</strong></td><td>BRK - Persoon</td></tr>
<tr><td><strong>Databron</strong></td><td>Basisregistratie Kadaster (BRK)</td></tr>
<tr><td><strong>Definitie</strong></td><td>https://stelselcatalogus.nl/detail/objecttype?id=https:%2F%2Fpurl.stelselcatalogus.nl%2Fmkg%2Fbrk%2Fbf2d680a-fd4f-4b37-bd71-1dea25f3eddd</td></tr>
<tr><td><strong>Informatiemodel</strong></td><td>IMKAD</td></tr>
<tr><td><strong>Dataformaat</strong></td><td>XML, JSON</td></tr>
<tr><td><strong>Metadata</strong></td><td><em>niet beschikbaar</em></td></tr>
<tr><td><strong>Toegangspunt</strong></td><td>https://www.kadaster.nl/zakelijk/producten/eigendom/brk-bevragen</td></tr>
</table>

### 07 - 1.04a Bestaande bebouwing (Gebouwen) - 1

<table>
<tr><td><strong>Begrip</strong></td><td>BAG-panden</td></tr>
<tr><td><strong>Databron</strong></td><td>Basisregistratie Adressen en Gebouwen (BAG)</td></tr>
<tr><td><strong>CityGML 2.0</strong></td><td>BuildingPart</td></tr>
<tr><td><strong>CityGML 3.0</strong></td><td>BuildingPart</td></tr>
<tr><td><strong>Definitie</strong></td><td>https://stelselcatalogus.nl/detail/objecttype?id=https:%2F%2Fpurl.stelselcatalogus.nl%2Fmkg%2Fbag%2Ff31b46a2-b6b3-48d1-bfd3-a624bb2757c6</td></tr>
<tr><td><strong>Dimensie</strong></td><td>2D</td></tr>
<tr><td><strong>Coordinatenstelsel (CRS)</strong></td><td>RD (EPSG:28992)</td></tr>
<tr><td><strong>Informatiemodel</strong></td><td>IMBAG (CityGML)</td></tr>
<tr><td><strong>Dataformaat</strong></td><td>GML (WFS), GeoJSON en VectorTiles</td></tr>
<tr><td><strong>Metadata</strong></td><td>https://nationaalgeoregister.nl/geonetwork/srv/dut/catalog.search#/metadata/aa3b5e6e-7baa-40c0-8972-3353e927ec2f</td></tr>
<tr><td><strong>Toegangspunt</strong></td><td>https://api.bag.kadaster.nl/lvbag/individuelebevragingen/v2/</td></tr>
</table>

### 08 - 1.04b BAG - status pand

<table>
<tr><td><strong>Begrip</strong></td><td>BAG - status pand</td></tr>
<tr><td><strong>Databron</strong></td><td>Basisregistratie Adressen en Gebouwen (BAG)</td></tr>
<tr><td><strong>Definitie</strong></td><td>https://stelselcatalogus.nl/detail/attribuutsoort?id=https:%2F%2Fpurl.stelselcatalogus.nl%2Fmkg%2Fbag%2F9ba0e95d-5be3-4c08-9c46-4e98286392bd</td></tr>
<tr><td><strong>Informatiemodel</strong></td><td>IMBAG (CityGML)</td></tr>
<tr><td><strong>Dataformaat</strong></td><td>GML (WFS), GeoJSON en VectorTiles</td></tr>
<tr><td><strong>Metadata</strong></td><td>https://nationaalgeoregister.nl/geonetwork/srv/dut/catalog.search#/metadata/aa3b5e6e-7baa-40c0-8972-3353e927ec2f</td></tr>
<tr><td><strong>Toegangspunt</strong></td><td>https://api.bag.kadaster.nl/lvbag/individuelebevragingen/v2/</td></tr>
</table>

### 09 - 1.05a Bestaande bebouwing (adressen)

<table>
<tr><td><strong>Begrip</strong></td><td>BAG - verblijfsobject</td></tr>
<tr><td><strong>Databron</strong></td><td>Basisregistratie Adressen en Gebouwen (BAG)</td></tr>
<tr><td><strong>CityGML 2.0</strong></td><td>Room</td></tr>
<tr><td><strong>CityGML 3.0</strong></td><td>BuildingUnit</td></tr>
<tr><td><strong>Definitie</strong></td><td>https://stelselcatalogus.nl/detail/objecttype?id=https:%2F%2Fpurl.stelselcatalogus.nl%2Fmkg%2Fbrk%2Fdb6aad7d-d1e2-441a-a6fc-16b99b12cb28</td></tr>
<tr><td><strong>Dimensie</strong></td><td>2D</td></tr>
<tr><td><strong>Coordinatenstelsel (CRS)</strong></td><td>RD (EPSG:28992)</td></tr>
<tr><td><strong>Informatiemodel</strong></td><td>IMBAG (CityGML)</td></tr>
<tr><td><strong>Dataformaat</strong></td><td>GML (WFS), GeoJSON en VectorTiles</td></tr>
<tr><td><strong>Metadata</strong></td><td>https://nationaalgeoregister.nl/geonetwork/srv/dut/catalog.search#/metadata/aa3b5e6e-7baa-40c0-8972-3353e927ec2f</td></tr>
<tr><td><strong>Toegangspunt</strong></td><td>https://api.bag.kadaster.nl/lvbag/individuelebevragingen/v2/</td></tr>
</table>

### 10 - 1.05b BAG - status verblijfsobject

<table>
<tr><td><strong>Begrip</strong></td><td>BAG - status verblijfsobject</td></tr>
<tr><td><strong>Databron</strong></td><td>Basisregistratie Adressen en Gebouwen (BAG)</td></tr>
<tr><td><strong>Definitie</strong></td><td>https://stelselcatalogus.nl/detail/attribuutsoort?id=https:%2F%2Fpurl.stelselcatalogus.nl%2Fmkg%2Fbag%2F6ad4108e-b958-47ca-a0a0-abb836f2722e</td></tr>
<tr><td><strong>Informatiemodel</strong></td><td>IMBAG (CityGML)</td></tr>
<tr><td><strong>Dataformaat</strong></td><td>GML (WFS), GeoJSON en VectorTiles</td></tr>
<tr><td><strong>Metadata</strong></td><td>https://nationaalgeoregister.nl/geonetwork/srv/dut/catalog.search#/metadata/aa3b5e6e-7baa-40c0-8972-3353e927ec2f</td></tr>
<tr><td><strong>Toegangspunt</strong></td><td>https://api.bag.kadaster.nl/lvbag/individuelebevragingen/v2/</td></tr>
</table>

### 11 - 1.05c BAG - gebruiksdoel verblijfsobject

<table>
<tr><td><strong>Begrip</strong></td><td>BAG - gebruiksdoel verblijfsobject</td></tr>
<tr><td><strong>Databron</strong></td><td>Basisregistratie Adressen en Gebouwen (BAG)</td></tr>
<tr><td><strong>Definitie</strong></td><td>https://stelselcatalogus.nl/detail/attribuutsoort?id=https:%2F%2Fpurl.stelselcatalogus.nl%2Fmkg%2Fbag%2F3b4f790f-1bf3-47f5-9160-d181e2a155d8</td></tr>
<tr><td><strong>Dimensie</strong></td><td><em>niet gespecificeerd</em></td></tr>
<tr><td><strong>Coordinatenstelsel (CRS)</strong></td><td><em>niet gespecificeerd</em></td></tr>
<tr><td><strong>Informatiemodel</strong></td><td>IMBAG (CityGML)</td></tr>
<tr><td><strong>Dataformaat</strong></td><td>GML (WFS), GeoJSON en VectorTiles</td></tr>
<tr><td><strong>Metadata</strong></td><td>https://nationaalgeoregister.nl/geonetwork/srv/dut/catalog.search#/metadata/aa3b5e6e-7baa-40c0-8972-3353e927ec2f</td></tr>
<tr><td><strong>Toegangspunt</strong></td><td>https://api.bag.kadaster.nl/lvbag/individuelebevragingen/v2/</td></tr>
</table>

### 12 - 1.05d BAG - gebruiksoppervlakte verblijfsobject

<table>
<tr><td><strong>Begrip</strong></td><td>BAG - Gebruiksoppervlakte verblijfsobject</td></tr>
<tr><td><strong>Databron</strong></td><td>Basisregistratie Adressen en Gebouwen (BAG)</td></tr>
<tr><td><strong>Definitie</strong></td><td>https://stelselcatalogus.nl/detail/attribuutsoort?id=https:%2F%2Fpurl.stelselcatalogus.nl%2Fmkg%2Fbag%2F55c06ea8-feb7-4392-89ba-a251a4606c5a</td></tr>
<tr><td><strong>Dimensie</strong></td><td><em>niet gespecificeerd</em></td></tr>
<tr><td><strong>Coordinatenstelsel (CRS)</strong></td><td><em>niet gespecificeerd</em></td></tr>
<tr><td><strong>Informatiemodel</strong></td><td>IMBAG (CityGML)</td></tr>
<tr><td><strong>Dataformaat</strong></td><td>GML (WFS), GeoJSON en VectorTiles</td></tr>
<tr><td><strong>Metadata</strong></td><td>https://nationaalgeoregister.nl/geonetwork/srv/dut/catalog.search#/metadata/aa3b5e6e-7baa-40c0-8972-3353e927ec2f</td></tr>
<tr><td><strong>Toegangspunt</strong></td><td>https://api.bag.kadaster.nl/lvbag/individuelebevragingen/v2/</td></tr>
</table>

### 13 - 1.06 Bestaande bebouwing (Gebouwen) - 2

<table>
<tr><td><strong>Begrip</strong></td><td>3D BAG</td></tr>
<tr><td><strong>Databron</strong></td><td>3D BAG</td></tr>
<tr><td><strong>CityGML 2.0</strong></td><td>BuildingPart</td></tr>
<tr><td><strong>CityGML 3.0</strong></td><td>BuildingPart</td></tr>
<tr><td><strong>Definitie</strong></td><td>https://docs.3dbag.nl/nl/</td></tr>
<tr><td><strong>Dimensie</strong></td><td>3D</td></tr>
<tr><td><strong>Coordinatenstelsel (CRS)</strong></td><td>RD+NAP (EPSG:7415)</td></tr>
<tr><td><strong>Informatiemodel</strong></td><td>CityGML</td></tr>
<tr><td><strong>Dataformaat</strong></td><td>CityJSON, 3D Tiles (glTF), GeoPackage</td></tr>
<tr><td><strong>Metadata</strong></td><td>https://docs.3dbag.nl/nl/</td></tr>
<tr><td><strong>Toegangspunt</strong></td><td>https://api.3dbag.nl/api.html</td></tr>
</table>

### 14 - 1.07 Overige bouwwerken

<table>
<tr><td><strong>Begrip</strong></td><td>BGT - overige bouwwerk</td></tr>
<tr><td><strong>Databron</strong></td><td>Basisregistratie Grootschalige Topografie (BGT)</td></tr>
<tr><td><strong>CityGML 2.0</strong></td><td>_site</td></tr>
<tr><td><strong>CityGML 3.0</strong></td><td>OtherConstruction</td></tr>
<tr><td><strong>Definitie</strong></td><td>https://stelselcatalogus.nl/detail/objecttype?id=https:%2F%2Fpurl.stelselcatalogus.nl%2Fmkg%2Fbgt%2F333255c2-7038-434f-a137-7467ef8f5af4</td></tr>
<tr><td><strong>Dimensie</strong></td><td>2D</td></tr>
<tr><td><strong>Coordinatenstelsel (CRS)</strong></td><td>RD (EPSG:28992)</td></tr>
<tr><td><strong>Informatiemodel</strong></td><td>IMGEO (CityGML)</td></tr>
<tr><td><strong>Dataformaat</strong></td><td>GML (WFS), GeoJSON, JSON-FG en VectorTiles</td></tr>
<tr><td><strong>Metadata</strong></td><td>https://nationaalgeoregister.nl/geonetwork/srv/dut/catalog.search#/metadata/2cb4769c-b56e-48fa-8685-c48f61b9a319</td></tr>
<tr><td><strong>Toegangspunt</strong></td><td>https://api.pdok.nl/lv/bgt/ogc/v1</td></tr>
</table>

### 15 - 1.08a Openbaar toegankelijke wegen (Weg)

<table>
<tr><td><strong>Begrip</strong></td><td>BGT - wegdeel</td></tr>
<tr><td><strong>Databron</strong></td><td>Basisregistratie Grootschalige Topografie (BGT)</td></tr>
<tr><td><strong>CityGML 2.0</strong></td><td>Road</td></tr>
<tr><td><strong>CityGML 3.0</strong></td><td>Road</td></tr>
<tr><td><strong>Definitie</strong></td><td>https://stelselcatalogus.nl/detail/objecttype?id=https:%2F%2Fpurl.stelselcatalogus.nl%2Fmkg%2Fbgt%2Fa1cd188f-1eac-43e3-bfcc-067fb38ebc44</td></tr>
<tr><td><strong>Dimensie</strong></td><td>2D</td></tr>
<tr><td><strong>Coordinatenstelsel (CRS)</strong></td><td>RD (EPSG:28992)</td></tr>
<tr><td><strong>Informatiemodel</strong></td><td>IMGEO (CityGML)</td></tr>
<tr><td><strong>Dataformaat</strong></td><td>GML (WFS), GeoJSON, JSON-FG en VectorTiles</td></tr>
<tr><td><strong>Metadata</strong></td><td>https://nationaalgeoregister.nl/geonetwork/srv/dut/catalog.search#/metadata/2cb4769c-b56e-48fa-8685-c48f61b9a319</td></tr>
<tr><td><strong>Toegangspunt</strong></td><td>https://api.pdok.nl/lv/bgt/ogc/v1</td></tr>
</table>

### 16 - 1.08b BGT - functie wegdeel

<table>
<tr><td><strong>Begrip</strong></td><td>BGT - functie wegdeel</td></tr>
<tr><td><strong>Databron</strong></td><td>Basisregistratie Grootschalige Topografie (BGT)</td></tr>
<tr><td><strong>Definitie</strong></td><td>https://stelselcatalogus.nl/detail/attribuutsoort?id=https:%2F%2Fpurl.stelselcatalogus.nl%2Fmkg%2Fbgt%2Fa6f9e868-e0bc-4c1e-85da-014db2f05062</td></tr>
<tr><td><strong>Dimensie</strong></td><td><em>niet gespecificeerd</em></td></tr>
<tr><td><strong>Coordinatenstelsel (CRS)</strong></td><td><em>niet gespecificeerd</em></td></tr>
<tr><td><strong>Informatiemodel</strong></td><td>IMGEO (CityGML)</td></tr>
<tr><td><strong>Dataformaat</strong></td><td>GML (WFS), GeoJSON, JSON-FG en VectorTiles</td></tr>
<tr><td><strong>Metadata</strong></td><td>https://nationaalgeoregister.nl/geonetwork/srv/dut/catalog.search#/metadata/2cb4769c-b56e-48fa-8685-c48f61b9a319</td></tr>
<tr><td><strong>Toegangspunt</strong></td><td>https://api.pdok.nl/lv/bgt/ogc/v1</td></tr>
</table>

### 17 1.08c BGT - ondersteunend wegdeel

<table>
<tr><td><strong>Begrip</strong></td><td>BGT - ondersteunend wegdeel</td></tr>
<tr><td><strong>Databron</strong></td><td>Basisregistratie Grootschalige Topografie (BGT)</td></tr>
<tr><td><strong>Definitie</strong></td><td>https://stelselcatalogus.nl/detail/objecttype?id=https:%2F%2Fpurl.stelselcatalogus.nl%2Fmkg%2Fbgt%2Fd1f6d762-5df4-4fa6-82b7-f60dc7347ea9</td></tr>
<tr><td><strong>Dimensie</strong></td><td>2D</td></tr>
<tr><td><strong>Coordinatenstelsel (CRS)</strong></td><td>RD (EPSG:28992)</td></tr>
<tr><td><strong>Informatiemodel</strong></td><td>IMGEO (CityGML)</td></tr>
<tr><td><strong>Dataformaat</strong></td><td>GML (WFS), GeoJSON, JSON-FG en VectorTiles</td></tr>
<tr><td><strong>Metadata</strong></td><td>https://nationaalgeoregister.nl/geonetwork/srv/dut/catalog.search#/metadata/2cb4769c-b56e-48fa-8685-c48f61b9a319</td></tr>
<tr><td><strong>Toegangspunt</strong></td><td>https://api.pdok.nl/lv/bgt/ogc/v1</td></tr>
</table>

### 18 - 1.08d BGT - functie ondersteunend wegdeel

<table>
<tr><td><strong>Begrip</strong></td><td>BGT - functie ondersteunend wegdeel</td></tr>
<tr><td><strong>Databron</strong></td><td>Basisregistratie Grootschalige Topografie (BGT)</td></tr>
<tr><td><strong>Definitie</strong></td><td>https://stelselcatalogus.nl/detail/attribuutsoort?id=https:%2F%2Fpurl.stelselcatalogus.nl%2Fmkg%2Fbgt%2F3908183e-1608-434e-8135-9984b3dbf9d1</td></tr>
<tr><td><strong>Dimensie</strong></td><td><em>niet gespecificeerd</em></td></tr>
<tr><td><strong>Coordinatenstelsel (CRS)</strong></td><td><em>niet gespecificeerd</em></td></tr>
<tr><td><strong>Informatiemodel</strong></td><td>IMGEO (CityGML)</td></tr>
<tr><td><strong>Dataformaat</strong></td><td>GML (WFS), GeoJSON, JSON-FG en VectorTiles</td></tr>
<tr><td><strong>Metadata</strong></td><td>https://nationaalgeoregister.nl/geonetwork/srv/dut/catalog.search#/metadata/2cb4769c-b56e-48fa-8685-c48f61b9a319</td></tr>
<tr><td><strong>Toegangspunt</strong></td><td>https://api.pdok.nl/lv/bgt/ogc/v1</td></tr>
</table>

### 19 - 1.09a Spoor

<table>
<tr><td><strong>Begrip</strong></td><td>BGT - spoor</td></tr>
<tr><td><strong>Databron</strong></td><td>Basisregistratie Grootschalige Topografie (BGT)</td></tr>
<tr><td><strong>CityGML 2.0</strong></td><td>Railway</td></tr>
<tr><td><strong>CityGML 3.0</strong></td><td><em>niet gespecificeerd</em></td></tr>
<tr><td><strong>Definitie</strong></td><td>https://stelselcatalogus.nl/detail/objecttype?id=https:%2F%2Fpurl.stelselcatalogus.nl%2Fmkg%2Fbgt%2F3fdd1dc1-c2be-4ac3-abff-7feed7118fb2</td></tr>
<tr><td><strong>Dimensie</strong></td><td>2D</td></tr>
<tr><td><strong>Coordinatenstelsel (CRS)</strong></td><td>RD (EPSG:28992)</td></tr>
<tr><td><strong>Informatiemodel</strong></td><td>IMGEO (CityGML)</td></tr>
<tr><td><strong>Dataformaat</strong></td><td>GML (WFS), GeoJSON, JSON-FG en VectorTiles</td></tr>
<tr><td><strong>Metadata</strong></td><td>https://nationaalgeoregister.nl/geonetwork/srv/dut/catalog.search#/metadata/2cb4769c-b56e-48fa-8685-c48f61b9a319</td></tr>
<tr><td><strong>Toegangspunt</strong></td><td>https://api.pdok.nl/lv/bgt/ogc/v1</td></tr>
</table>

### 20 - 1.09b BGT - functie spoor

<table>
<tr><td><strong>Begrip</strong></td><td>BGT - functie spoor</td></tr>
<tr><td><strong>Databron</strong></td><td>Basisregistratie Grootschalige Topografie (BGT)</td></tr>
<tr><td><strong>Definitie</strong></td><td>https://stelselcatalogus.nl/detail/attribuutsoort?id=https:%2F%2Fpurl.stelselcatalogus.nl%2Fmkg%2Fbgt%2F79d479b5-e5fc-4387-97db-391006fca169</td></tr>
<tr><td><strong>Dimensie</strong></td><td><em>niet gespecificeerd</em></td></tr>
<tr><td><strong>Coordinatenstelsel (CRS)</strong></td><td><em>niet gespecificeerd</em></td></tr>
<tr><td><strong>Informatiemodel</strong></td><td>IMGEO (CityGML)</td></tr>
<tr><td><strong>Dataformaat</strong></td><td>GML (WFS), GeoJSON, JSON-FG en VectorTiles</td></tr>
<tr><td><strong>Metadata</strong></td><td>https://nationaalgeoregister.nl/geonetwork/srv/dut/catalog.search#/metadata/2cb4769c-b56e-48fa-8685-c48f61b9a319</td></tr>
<tr><td><strong>Toegangspunt</strong></td><td>https://api.pdok.nl/lv/bgt/ogc/v1</td></tr>
</table>

### 21 - 1.10a Openbaar toegankelijke ruimte

<table>
<tr><td><strong>Begrip</strong></td><td>BGT - begroeid terreindeel</td></tr>
<tr><td><strong>Databron</strong></td><td>Basisregistratie Grootschalige Topografie (BGT)</td></tr>
<tr><td><strong>CityGML 2.0</strong></td><td>PlantCover</td></tr>
<tr><td><strong>CityGML 3.0</strong></td><td>PlantCover</td></tr>
<tr><td><strong>Definitie</strong></td><td>https://stelselcatalogus.nl/detail/objecttype?id=https:%2F%2Fpurl.stelselcatalogus.nl%2Fmkg%2Fbgt%2Fe6726ca4-d166-4331-96f5-a6b6c823b145</td></tr>
<tr><td><strong>Dimensie</strong></td><td>2D</td></tr>
<tr><td><strong>Coordinatenstelsel (CRS)</strong></td><td>RD (EPSG:28992)</td></tr>
<tr><td><strong>Informatiemodel</strong></td><td>IMGEO (CityGML)</td></tr>
<tr><td><strong>Dataformaat</strong></td><td>GML (WFS), GeoJSON, JSON-FG en VectorTiles</td></tr>
<tr><td><strong>Metadata</strong></td><td>https://nationaalgeoregister.nl/geonetwork/srv/dut/catalog.search#/metadata/2cb4769c-b56e-48fa-8685-c48f61b9a319</td></tr>
<tr><td><strong>Toegangspunt</strong></td><td>https://api.pdok.nl/lv/bgt/ogc/v1</td></tr>
</table>

### 22 - 1.10b BGT - fysiek voorkomen begroeid terreindeel

<table>
<tr><td><strong>Begrip</strong></td><td>BGT - fysiek voorkomen begroeid terreindeel</td></tr>
<tr><td><strong>Databron</strong></td><td>Basisregistratie Grootschalige Topografie (BGT)</td></tr>
<tr><td><strong>Definitie</strong></td><td>https://stelselcatalogus.nl/detail/attribuutsoort?id=https:%2F%2Fpurl.stelselcatalogus.nl%2Fmkg%2Fbgt%2F1b6baa04-8873-4687-a1c8-421763ab8084</td></tr>
<tr><td><strong>Dimensie</strong></td><td><em>niet gespecificeerd</em></td></tr>
<tr><td><strong>Coordinatenstelsel (CRS)</strong></td><td><em>niet gespecificeerd</em></td></tr>
<tr><td><strong>Informatiemodel</strong></td><td>IMGEO (CityGML)</td></tr>
<tr><td><strong>Dataformaat</strong></td><td>GML (WFS), GeoJSON, JSON-FG en VectorTiles</td></tr>
<tr><td><strong>Metadata</strong></td><td>https://nationaalgeoregister.nl/geonetwork/srv/dut/catalog.search#/metadata/2cb4769c-b56e-48fa-8685-c48f61b9a319</td></tr>
<tr><td><strong>Toegangspunt</strong></td><td>https://api.pdok.nl/lv/bgt/ogc/v1</td></tr>
</table>

### 23 - 1.11a BGT - onbegroeid terreindeel

<table>
<tr><td><strong>Begrip</strong></td><td>BGT - onbegroeid terreindeel</td></tr>
<tr><td><strong>Databron</strong></td><td>Basisregistratie Grootschalige Topografie (BGT)</td></tr>
<tr><td><strong>CityGML 2.0</strong></td><td>LandUse</td></tr>
<tr><td><strong>CityGML 3.0</strong></td><td>LandUse</td></tr>
<tr><td><strong>Definitie</strong></td><td>https://stelselcatalogus.nl/detail/objecttype?id=https:%2F%2Fpurl.stelselcatalogus.nl%2Fmkg%2Fbgt%2F373bea25-2ca2-42b6-92c6-fc0867ec8182</td></tr>
<tr><td><strong>Dimensie</strong></td><td>2D</td></tr>
<tr><td><strong>Coordinatenstelsel (CRS)</strong></td><td>RD (EPSG:28992)</td></tr>
<tr><td><strong>Informatiemodel</strong></td><td>IMGEO (CityGML)</td></tr>
<tr><td><strong>Dataformaat</strong></td><td>GML (WFS), GeoJSON, JSON-FG en VectorTiles</td></tr>
<tr><td><strong>Metadata</strong></td><td>https://nationaalgeoregister.nl/geonetwork/srv/dut/catalog.search#/metadata/2cb4769c-b56e-48fa-8685-c48f61b9a319</td></tr>
<tr><td><strong>Toegangspunt</strong></td><td>https://api.pdok.nl/lv/bgt/ogc/v1</td></tr>
</table>

### 24 - 1.11b BGT - fysiek voorkomen onbegroeid terreindeel

<table>
<tr><td><strong>Begrip</strong></td><td>BGT - fysiek voorkomen onbegroeid terreindeel</td></tr>
<tr><td><strong>Databron</strong></td><td>Basisregistratie Grootschalige Topografie (BGT)</td></tr>
<tr><td><strong>Definitie</strong></td><td>https://stelselcatalogus.nl/detail/attribuutsoort?id=https:%2F%2Fpurl.stelselcatalogus.nl%2Fmkg%2Fbgt%2F1b6baa04-8873-4687-a1c8-421763ab8084</td></tr>
<tr><td><strong>Dimensie</strong></td><td><em>niet gespecificeerd</em></td></tr>
<tr><td><strong>Coordinatenstelsel (CRS)</strong></td><td><em>niet gespecificeerd</em></td></tr>
<tr><td><strong>Informatiemodel</strong></td><td>IMGEO (CityGML)</td></tr>
<tr><td><strong>Dataformaat</strong></td><td>GML (WFS), GeoJSON, JSON-FG en VectorTiles</td></tr>
<tr><td><strong>Metadata</strong></td><td>https://nationaalgeoregister.nl/geonetwork/srv/dut/catalog.search#/metadata/2cb4769c-b56e-48fa-8685-c48f61b9a319</td></tr>
<tr><td><strong>Toegangspunt</strong></td><td>https://api.pdok.nl/lv/bgt/ogc/v1</td></tr>
</table>

### 25 - 1.12a Water

<table>
<tr><td><strong>Begrip</strong></td><td>BGT - waterdeel</td></tr>
<tr><td><strong>Databron</strong></td><td>Basisregistratie Grootschalige Topografie (BGT)</td></tr>
<tr><td><strong>CityGML 2.0</strong></td><td>WaterBody</td></tr>
<tr><td><strong>CityGML 3.0</strong></td><td>WaterBody</td></tr>
<tr><td><strong>Definitie</strong></td><td>https://stelselcatalogus.nl/detail/objecttype?id=https:%2F%2Fpurl.stelselcatalogus.nl%2Fmkg%2Fbgt%2Fd27277eb-91cf-48f9-b4dd-17d5bea401fb</td></tr>
<tr><td><strong>Dimensie</strong></td><td>2D</td></tr>
<tr><td><strong>Coordinatenstelsel (CRS)</strong></td><td>RD (EPSG:28992)</td></tr>
<tr><td><strong>Informatiemodel</strong></td><td>IMGEO (CityGML)</td></tr>
<tr><td><strong>Dataformaat</strong></td><td>GML (WFS), GeoJSON, JSON-FG en VectorTiles</td></tr>
<tr><td><strong>Metadata</strong></td><td>https://nationaalgeoregister.nl/geonetwork/srv/dut/catalog.search#/metadata/2cb4769c-b56e-48fa-8685-c48f61b9a319</td></tr>
<tr><td><strong>Toegangspunt</strong></td><td>https://api.pdok.nl/lv/bgt/ogc/v1</td></tr>
</table>

### 26 - 1.12b BGT - type waterdeel

<table>
<tr><td><strong>Begrip</strong></td><td>BGT - type waterdeel</td></tr>
<tr><td><strong>Databron</strong></td><td>Basisregistratie Grootschalige Topografie (BGT)</td></tr>
<tr><td><strong>Definitie</strong></td><td>https://stelselcatalogus.nl/detail/attribuutsoort?id=https:%2F%2Fpurl.stelselcatalogus.nl%2Fmkg%2Fbgt%2F2d729345-0f93-4f2b-8126-481f160d0fc6</td></tr>
<tr><td><strong>Dimensie</strong></td><td><em>niet gespecificeerd</em></td></tr>
<tr><td><strong>Coordinatenstelsel (CRS)</strong></td><td><em>niet gespecificeerd</em></td></tr>
<tr><td><strong>Informatiemodel</strong></td><td>IMGEO (CityGML)</td></tr>
<tr><td><strong>Dataformaat</strong></td><td>GML (WFS), GeoJSON, JSON-FG en VectorTiles</td></tr>
<tr><td><strong>Metadata</strong></td><td>https://nationaalgeoregister.nl/geonetwork/srv/dut/catalog.search#/metadata/2cb4769c-b56e-48fa-8685-c48f61b9a319</td></tr>
<tr><td><strong>Toegangspunt</strong></td><td>https://api.pdok.nl/lv/bgt/ogc/v1</td></tr>
</table>

### 27 - 1.12c BGT - ondersteunend waterdeel

<table>
<tr><td><strong>Begrip</strong></td><td>BGT - ondersteunend waterdeel</td></tr>
<tr><td><strong>Databron</strong></td><td>Basisregistratie Grootschalige Topografie (BGT)</td></tr>
<tr><td><strong>Definitie</strong></td><td>https://stelselcatalogus.nl/detail/objecttype?id=https:%2F%2Fpurl.stelselcatalogus.nl%2Fmkg%2Fbgt%2F9515c15e-bb4e-4359-9059-cca1d527fe8c</td></tr>
<tr><td><strong>Dimensie</strong></td><td>2D</td></tr>
<tr><td><strong>Coordinatenstelsel (CRS)</strong></td><td>RD (EPSG:28992)</td></tr>
<tr><td><strong>Informatiemodel</strong></td><td>IMGEO (CityGML)</td></tr>
<tr><td><strong>Dataformaat</strong></td><td>GML (WFS), GeoJSON, JSON-FG en VectorTiles</td></tr>
<tr><td><strong>Metadata</strong></td><td>https://nationaalgeoregister.nl/geonetwork/srv/dut/catalog.search#/metadata/2cb4769c-b56e-48fa-8685-c48f61b9a319</td></tr>
<tr><td><strong>Toegangspunt</strong></td><td>https://api.pdok.nl/lv/bgt/ogc/v1</td></tr>
</table>

### 28 - 1.12d BGT - type ondersteunend waterdeel

<table>
<tr><td><strong>Begrip</strong></td><td>BGT - type ondersteunend waterdeel</td></tr>
<tr><td><strong>Databron</strong></td><td>Basisregistratie Grootschalige Topografie (BGT)</td></tr>
<tr><td><strong>Definitie</strong></td><td>https://stelselcatalogus.nl/detail/attribuutsoort?id=https:%2F%2Fpurl.stelselcatalogus.nl%2Fmkg%2Fbgt%2F0d98b138-1321-4f3c-8236-aab9e7316625</td></tr>
<tr><td><strong>Dimensie</strong></td><td>2D</td></tr>
<tr><td><strong>Coordinatenstelsel (CRS)</strong></td><td><em>niet gespecificeerd</em></td></tr>
<tr><td><strong>Informatiemodel</strong></td><td>IMGEO (CityGML)</td></tr>
<tr><td><strong>Dataformaat</strong></td><td>GML (WFS), GeoJSON, JSON-FG en VectorTiles</td></tr>
<tr><td><strong>Metadata</strong></td><td>https://nationaalgeoregister.nl/geonetwork/srv/dut/catalog.search#/metadata/2cb4769c-b56e-48fa-8685-c48f61b9a319</td></tr>
<tr><td><strong>Toegangspunt</strong></td><td>https://api.pdok.nl/lv/bgt/ogc/v1</td></tr>
</table>

### 29 - 2.01a Omgevingsplan - Werkingsgebied type gebiedsaanwijzing / functie

<table>
<tr><td><strong>Begrip</strong></td><td>Werkingsgebied type gebiedsaanwijzing / functie</td></tr>
<tr><td><strong>Databron</strong></td><td>Toepassingsprofielen Omgevingswet (TPOD)</td></tr>
<tr><td><strong>Definitie</strong></td><td>http://standaarden.omgevingswet.overheid.nl/typegebiedsaanwijzing/id/concept/Functie</td></tr>
<tr><td><strong>Dimensie</strong></td><td>2D</td></tr>
<tr><td><strong>Coordinatenstelsel (CRS)</strong></td><td><em>RD (EPSG:28992)</em></td></tr>
<tr><td><strong>Informatiemodel</strong></td><td>IMOW</td></tr>
<tr><td><strong>Dataformaat</strong></td><td>GML (bron) en GeoJson (Api bevraging)</td></tr>
<tr><td><strong>Metadata</strong></td><td>https://standaarden.omgevingswet.overheid.nl/typegebiedsaanwijzing/doc/20241014000000/concept/Functie</td></tr>
<tr><td><strong>Toegangspunt</strong></td><td>https://service.omgevingswet.overheid.nl/publiek/omgevingsdocumenten/api/geometrieopvragen/v1/</td></tr>
</table>

### 30 - 2.01b Omgevingsplan - Werkingsgebied omgevingsnorm / bebouwingshoogte

<table>
<tr><td><strong>Begrip</strong></td><td>Werkingsgebied omgevingsnorm / hoogte</td></tr>
<tr><td><strong>Databron</strong></td><td>Toepassingsprofielen Omgevingswet (TPOD)</td></tr>
<tr><td><strong>Definitie</strong></td><td>http://standaarden.omgevingswet.overheid.nl/typenorm/id/concept/Hoogte</td></tr>
<tr><td><strong>Dimensie</strong></td><td>2D</td></tr>
<tr><td><strong>Coordinatenstelsel (CRS)</strong></td><td><em>RD (EPSG:28992)</em></td></tr>
<tr><td><strong>Informatiemodel</strong></td><td>IMOW</td></tr>
<tr><td><strong>Dataformaat</strong></td><td>GML (bron) en GeoJson (Api bevraging)</td></tr>
<tr><td><strong>Metadata</strong></td><td>https://standaarden.omgevingswet.overheid.nl/typenorm/doc/20241014000000/concept/Hoogte</td></tr>
<tr><td><strong>Toegangspunt</strong></td><td>https://service.omgevingswet.overheid.nl/publiek/omgevingsdocumenten/api/geometrieopvragen/v1/</td></tr>
</table>

### 31 - 2.01c Omgevingsplan - Werkingsgebied omgevingsnorm / bebouwingspercentage

<table>
<tr><td><strong>Begrip</strong></td><td>Werkingsgebied omgevingsnorm / bebouwingspercentage</td></tr>
<tr><td><strong>Databron</strong></td><td>Toepassingsprofielen Omgevingswet (TPOD)</td></tr>
<tr><td><strong>Definitie</strong></td><td>http://standaarden.omgevingswet.overheid.nl/typenorm/id/concept/Bebouwingspercentage</td></tr>
<tr><td><strong>Dimensie</strong></td><td>2D</td></tr>
<tr><td><strong>Coordinatenstelsel (CRS)</strong></td><td><em>RD (EPSG:28992)</em></td></tr>
<tr><td><strong>Informatiemodel</strong></td><td>IMOW</td></tr>
<tr><td><strong>Dataformaat</strong></td><td>GML (bron) en GeoJson (Api bevraging)</td></tr>
<tr><td><strong>Metadata</strong></td><td>https://standaarden.omgevingswet.overheid.nl/typenorm/doc/20241014000000/concept/Bebouwingspercentage</td></tr>
<tr><td><strong>Toegangspunt</strong></td><td>https://service.omgevingswet.overheid.nl/publiek/omgevingsdocumenten/api/geometrieopvragen/v1/</td></tr>
</table>

### 32 - 2.01d Omgevingsplan - Werkingsgebied omgevingsnorm / aantal bouwlagen

<table>
<tr><td><strong>Begrip</strong></td><td>Werkingsgebied omgevingsnorm / aantal bouwlagen</td></tr>
<tr><td><strong>Databron</strong></td><td>Toepassingsprofielen Omgevingswet (TPOD)</td></tr>
<tr><td><strong>Definitie</strong></td><td>http://standaarden.omgevingswet.overheid.nl/typenorm/id/concept/AantalBouwlagen</td></tr>
<tr><td><strong>Dimensie</strong></td><td>2D</td></tr>
<tr><td><strong>Coordinatenstelsel (CRS)</strong></td><td><em>RD (EPSG:28992)</em></td></tr>
<tr><td><strong>Informatiemodel</strong></td><td>IMOW</td></tr>
<tr><td><strong>Dataformaat</strong></td><td>GML (bron) en GeoJson (Api bevraging)</td></tr>
<tr><td><strong>Metadata</strong></td><td>https://standaarden.omgevingswet.overheid.nl/typenorm/doc/20241014000000/concept/AantalBouwlagen</td></tr>
<tr><td><strong>Toegangspunt</strong></td><td>https://service.omgevingswet.overheid.nl/publiek/omgevingsdocumenten/api/geometrieopvragen/v1/</td></tr>
</table>


#### Ad #29 t/m #32 :
Een geometrie identificatie op zich heeft geen functionele betekenis. De geometrie is gekoppeld aan locaties en werkingsgebieden van juridische regels in een Omgevingsplan. Voordat er gericht kan worden bevraagd op de geometrie van specifieke werkingsgebieden van regelgeving en omgevingsnormen uit een Omgevingsplan is de identificatie van het brondocument (Omgevingsplan) op die locatie nodig en een overzicht van alle identificaties van de in dat brondocument opgenomen locaties en werkgebieden van juridische regels.
Het opvragen van de locaties binnen een omgevingsplan kan via de volgende API: https://service.omgevingswet.overheid.nl/publiek/omgevingsdocumenten/api/toepasbaaropvragen/v7/
