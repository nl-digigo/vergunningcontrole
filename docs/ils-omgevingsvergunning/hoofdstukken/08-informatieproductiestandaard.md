# Informatieproductiestandaard en -methoden

## Normen en richtlijnen

- NEN-EN ISO 19650-1/-2 (informatiemanagement) en NPR-CEN/TR 17439 / 17654 (Europese implementatiegidsen)
- ISO 7817-1:2024 Level of Information Need
- ISO 16739-1:2024 IFC 4.3
- buildingSMART IDS 1.0
- NEN 2580 (oppervlakten en inhouden), NEN 2699 (investeringskosten), NEN 2767 (conditiemeting)
- BIM basis ILS en ILS Ontwerp en Engineering (digiGO)
- DSGO-afsprakenstelsel (specifieke afspraken, georefereren)
- STB 2025 (BNA/NL Ingenieurs)

## Bestandsnaamgeving (informatiecontainers)

Er is nog geen landelijke afspraak over bestandsnaamgeving bij vergunningaanvragen. Daarom deze **aanbevolen** conventie, in lijn met ISO 19650-2 (nationale bijlage):

```
<Project>[_<Panddeel>]_<Discipline>_<Systeem>_<Type>_<Bouwlaag>[_<Volgnummer>].<ext>
```

| Veld | Waarden | Voorbeeld |
|---|---|---|
| Project | Unieke projectcode | `18BA` |
| Panddeel (optioneel) | Deelgebouw | `Hoofdgebouw`, `VleugelA` |
| Discipline | STB 2025-thema's: `OOG` `KEU` `ARC` `CON` `INS` `INS-W` `INS-E` `BFY` `DZH` `VEI` `TOE` `BAG` … | `ARC` |
| Systeem | `XX` n.v.t. · `ZZ` alle | `XX` |
| Type | `M3D` 3D-model (IFC) · `TEK` tekening · `BER` berekening · `POI` puntenwolk · `SPE` specificatie · … | `M3D` |
| Bouwlaag | `K01` kelder · `P00` begane grond · `P01` … · `D05` dak · `ZZZ` meerdere · `XXX` n.v.t. | `ZZZ` |
| Volgnummer | `0001`–`9999` | `0001` |

Voorbeeld: `18BA_Hoofdgebouw_ARC_XX_M3D_ZZZ_0001.ifc`

## Statuscodering en metadata

Codering volgens ISO 19650 als het CDE daarmee werkt:

| Code | Betekenis |
|---|---|
| S0 | Werk in uitvoering |
| S1–S4 | Gedeeld binnen het leveringsteam (coördinatie, referentie, commentaar, goedkeuring hoofdopdrachtnemer) |
| S5 | Gedeeld voor acceptatie door de opdrachtgever |
| **S5 → indienen** | Status bij indienen via het Omgevingsloket |
| A1, A2 … | Gepubliceerd en geaccepteerd |

Aanbevolen metadata: fase (STB 2025-code), organisatie, status, revisie, classificatie (NL-SfB), omschrijving en datum. Of metadata via het DSO kan worden meegegeven, is nog een open vraag.

## Afspraken over het IFC-model

| Onderwerp | Afspraak |
|---|---|
| Formaat | IFC STEP (`.ifc`), IFC 4.3 (ISO 16739-1:2024). IFC4 ADD2 TC1 is toegestaan zolang de software IFC 4.3 niet ondersteunt |
| Header | `FILE_NAME` volledig gevuld; `TimeStamp` geldt als versiedatum. De gemeente beoordeelt of de header bij publicatie geanonimiseerd moet worden |
| Eenheden | SI; objecten in millimeters, georeferentie in meters |
| Georeferentie | `IfcMapConversion` + `IfcProjectedCRS`, EPSG:28992 of EPSG:7415, hoogte ten opzichte van NAP, exporteren met het ware noorden |
| Bouwlagen | `IfcBuildingStorey.Name` = `<code>[letter] <omschrijving>`, bijv. `-1 kelder`, `00 begane grond`, `00a tussenverdieping`, `01 eerste verdieping`. Namen en peilen gelijk in alle aspectmodellen |
| Entiteiten | Juiste entiteit gebruiken (geen `IfcBuildingElementProxy`): netto ruimte = `IfcSpace`; bruto inhoud en gebieden = `IfcSpatialZone`; groeperingen (gebruiksfunctie, verblijfsobject, brandcompartiment) = `IfcZone` |
| Kadastraal perceel | Als `IfcSpatialZone` met `Pset_LandRegistration`, niet als `IfcSite` |
| Attributen | `GlobalId` verplicht en stabiel tussen versies; `Name` en `ObjectType` verplicht; `Description` en `LongName` optioneel |
| ObjectType | Geen aanvullende property sets. De betekenis wordt vastgelegd met `ObjectType` op `IfcSpace`, `IfcSpatialZone` en `IfcZone`, met waarden uit de bSDD-publicatie *Omgevingswet-Ruimten* |
| Property sets | Alleen internationale buildingSMART-Psets en -Qto's (bijv. `Pset_SpaceCommon`, `Qto_SpaceBaseQuantities`, `Pset_WallCommon.FireRating`, `.ThermalTransmittance`) |
| Classificatie | NL-SfB tabel 1, 4-cijferig, laatst gepubliceerde versie (2021) via bSDD |
| Materiaal | Naa.K.T. (digiGO, bSDD `nkt/naakt/2.4`) |
| Installaties | Installatieobjecten groeperen in `IfcSystem` |
| Panddelen / verblijfsobjecten | `IfcSpatialZone` per panddeel (ander bouwjaar/bouwsysteem); `IfcZone` per verblijfsobject met het BAG-ID. Gemeenschappelijke ruimten horen bij het pand, niet bij een verblijfsobject |
| Doublures | Geen dubbele of overlappende objecten van hetzelfde type |
| Gebouw | `IfcBuilding` met o.a. `Pset_BuildingCommon.BuildingID` (BAG-pand-ID, of 14× `0` bij nieuwbouw), `NumberOfStoreys`, `YearOfConstruction`, `IsLandmarked`, `GrossPlannedArea`, `NetPlannedArea` |

## Productiemethode: ruimtemodel

Het ruimtemodel volgt de **ILS voor Ruimten in de Omgevingswet**:

1. Georeferentie, project, percelen en gebouw vastleggen (9.01–9.05).
2. Bouwlagen en bouwlaaginhouden modelleren (9.06).
3. Gebruikseenheden, gebruiksfuncties en nevengebruiksfuncties als zones (9.07–9.09).
4. Gebieden (functie-, verblijfs-, gebruiks-, bed- en restgebied) als `IfcSpatialZone` (9.10–9.11).
5. Ruimten (functie-, verblijfs-, bed- en restruimte, buitenruimte) als `IfcSpace` (9.12–9.13).
6. Brandcompartimenten, subbrandcompartimenten en vluchtroutes (9.16) en tarraruimte (9.17).
7. Fysieke elementen met de eigenschappen die de checks nodig hebben (9.18).
8. Hoeveelheden (Qto) laten berekenen en exporteren, daarna zelf controleren met de IDS-bestanden.

## Ongestructureerde informatie

| Soort | Formaat |
|---|---|
| Documenten, niet-bewerkbare tekeningen | PDF/A (ISO 32000-2:2020) |
| Tekeningen uit het model | PDF/A, plus DXF voor maatvoering. Van elke bouwlaag en elk aanzicht, met projectgegevens uit het model in de titelhoek |
| Bewerkbare documenten | DOCX |
| Spreadsheets | XLSX |
| Puntenwolken (bestaande bouw) | E57 |
| Issues / terugkoppeling | BCF 3.0 |
