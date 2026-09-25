# Information production standard and methods

## Standards and guidelines

- NEN-EN ISO 19650-1/-2 (information management)
- NPR-CEN/TR 17439 / 17654 (European implementation guides)
- ISO 7817-1:2024 Level of Information Need
- ISO 16739-1:2024 IFC 4.3
- buildingSMART IDS 1.0
- DSGO agreement framework (specific agreements, georeferencing)
- BIM basis ILS and ILS Ontwerp en Engineering (digiGO)
- STB 2025 (BNA/NL Ingenieurs)
- NEN 2580 (areas and volumes), NEN 2699 (investment costs), NEN 2767 (condition assessment)


## File naming (information containers)

There is not yet a national agreement on file naming for permit applications. This is therefore a **recommended** convention, in line with ISO 19650-2 (national annex):

```
<Project>[_<BuildingPart>]_<Discipline>_<System>_<Type>_<Storey>[_<SequenceNumber>].<ext>
```

| Field | Values | Example |
|---|---|---|
| Project | Unique project code | `1234` |
| Building part (optional) | Sub-building | `Hoofdgebouw`, `VleugelA` |
| Discipline | STB 2025 themes: `OOG` `KEU` `ARC` `CON` `INS` `INS-W` `INS-E` `BFY` `DZH` `VEI` `TOE` `BAG` … | `ARC` |
| System | `XX` not applicable · `ZZ` all | `XX` |
| Type | `M3D` 3D model (IFC) · `TEK` drawing · `BER` calculation · `POI` point cloud · `SPE` specification · … | `M3D` |
| Storey | `K01` basement · `P00` ground floor · `P01` … · `D05` roof · `ZZZ` multiple · `XXX` not applicable | `ZZZ` |
| Sequence number | `0001`–`9999` | `0001` |

Example: `1234_Hoofdgebouw_ARC_XX_M3D_ZZZ_0001.ifc`

## Status codes and metadata

Coding according to ISO 19650, if the CDE works with it:

| Code | Meaning |
|---|---|
| S0 | Work in progress |
| S1 | Shared within the project team, initiating party, coordination |
| S2 | Shared within the project team, initiating party, reference |
| S3 | Shared within the project team, initiating party, comment |
| S4 | Shared within the project team, initiating party, approval by the initiating party |
| S5 | Shared for acceptance by the permit-granting authority |
| **S5 → submit** | Status when submitting via the *Omgevingsloket* |
| A1, A2 … | Published and accepted |

Recommended metadata: phase (STB 2025 code), organisation, status, revision, classification (NL-SfB), description and date. Whether metadata can be passed along through the DSO is still an open question.

## Agreements on the IFC model

The points below are assessed for model quality using a checklist outside the IDS files. The BIM basis ILS indicates that agreements should be made on the points below.

| Topic | Agreement |
|---|---|
| Format | IFC STEP (`.ifc`), IFC 4.3 (ISO 16739-1:2024). IFC4 ADD2 TC1 is allowed as long as the software does not support IFC 4.3 |
| Header | `FILE_NAME` fully filled in; `TimeStamp` counts as the version date. The municipality decides whether the header must be **anonymised** on publication. This builds on the DUTO-BIM project and will need to be discussed with the National Archives and municipal archives. |
| Units | objects in millimetres, georeferencing in metres |
| Georeferencing | `IfcMapConversion` + `IfcProjectedCRS`, EPSG:28992 or EPSG:7415, height relative to NAP, export with true north |
| Storeys | `IfcBuildingStorey.Name` = `<code>[letter] <description>`, e.g. `-1 kelder`, `00 begane grond`, `00a tussenverdieping`, `01 eerste verdieping`. Names and levels the same in all discipline models |
| Entities | Use the correct entity (no `IfcBuildingElementProxy`): preferably: net space = `IfcSpace`; gross volume and areas = `IfcSpatialZone`; groupings (use function, accommodation unit, fire compartment) = `IfcZone` |
| Cadastral parcel | As `IfcSpatialZone` with `Pset_LandRegistration`, not as `IfcSite` |
| Attributes | `GlobalId` mandatory and stable between versions; `Name` and `ObjectType` mandatory; `Description` and `LongName` optional |
| ObjectType | No additional property sets. The meaning is recorded with `ObjectType` on `IfcSpace`, `IfcSpatialZone` and `IfcZone`, using values from the bSDD publication *Omgevingswet-Ruimten* |
| Property sets | Only international buildingSMART Psets and Qtos (e.g. `Pset_SpaceCommon`, `Qto_SpaceBaseQuantities`, `Pset_WallCommon.FireRating`, `.ThermalTransmittance`) |
| Classification | Optionally code objects with NL-SfB table 1, 4-digit, latest published version (2021) via bSDD (NL-SfB is not required when the principles above are applied) |
| Material | Naam Kenmerk Toepassing: *Naa.K.T.* (digiGO, bSDD `nkt/naakt/2.4`) |
| Building services | Group building services objects in an `IfcSystem` |
| Building parts / accommodation units | Still to be investigated further. Preferably `IfcSpatialZone` per building part (different year of construction/building system); `IfcZone` per accommodation unit with the BAG ID. Shared spaces belong to the building, not to an accommodation unit |
| Duplicates | No duplicate or overlapping objects of the same type |
| Building | `IfcBuilding` with, among others, `Pset_BuildingCommon.BuildingID` (BAG building ID, or 14× `0` for new builds), `NumberOfStoreys`, `YearOfConstruction`, `IsLandmarked`, `GrossPlannedArea`, `NetPlannedArea` |

## Production method: space model

The space model follows the **ILS voor Ruimten in de Omgevingswet**:

1. Record georeferencing, project, parcels and building (9.01–9.05).
2. Storeys and storey volume (9.06).
3. Use units, use functions and secondary use functions as zones (9.07–9.09).
4. Areas (*functie-, verblijfs-, gebruiks-, bed- en restgebied*) as `IfcSpatialZone` (9.10–9.11).
5. Spaces (*functie-, verblijfs-, bed- en restruimte, buitenruimte*) as `IfcSpace` (9.12–9.13).
6. Fire compartments, sub-fire compartments and escape routes (9.16) and *tarraruimte* (9.17).
7. Physical elements with the properties the checks need (9.18).
8. Have the quantities (Qto) calculated and exported, then check them yourself with the IDS files.

## Unstructured information

| Type | Format |
|---|---|
| Documents, non-editable drawings | PDF/A (ISO 32000-2:2020) |
| Drawings from the model | PDF/A, plus DXF for dimensioning. For every storey and elevation, with project data from the model in the title block |
| Editable documents | DOCX |
| Spreadsheets | XLSX |
| Point clouds (existing buildings) | E57 |
| Issues / feedback | BCF 3.0 |
