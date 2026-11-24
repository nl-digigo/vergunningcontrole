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
| Units | objects in millimetres, georeferencing in metres. This requirement is not checked with the IDS |
| Georeferencing | `IfcMapConversion` or `IfcMapConversionScaled` + `IfcProjectedCRS` (in IFC4.3, `IfcMapConversionScaled` is the recommended route for RD with NAP), EPSG:28992 or EPSG:7415, height relative to NAP, export with true north. `MapUnit` of `IfcProjectedCRS` is filled in and is the metre (not checked with the IDS; an IDS can only check its presence) |
| Address | The project address (`Pset_Address`, 9.01c) is optional. Fill it in for a building with a postal address; leave it empty when there are several buildings or functions. The georeferencing determines the location. The address attributes of `IfcSite` and `IfcBuilding` are not requested |
| Storeys | `IfcBuildingStorey.Name` = `<code>[letter] <description>`, e.g. `-1 kelder`, `00 begane grond`, `00a tussenverdieping`, `01 eerste verdieping`. Names and levels the same in all discipline models. `Pset_BuildingStoreyCommon.EntranceLevel` is mandatory; `.AboveGround` is optional |
| Parcel, building and storey | `IfcSite`, `IfcBuilding` and `IfcBuildingStorey` do not need geometry or a placement of their own |
| Entities | Use the correct entity (no `IfcBuildingElementProxy`): preferably: net space = `IfcSpace`; gross volume and areas = `IfcSpatialZone`; groupings (use function, accommodation unit, fire compartment) = `IfcZone` |
| Cadastral parcel | The drawn parcel: a separate `IfcSpatialZone` with ObjectType `Kadastraal Perceel`, not as `IfcSite`. The parcel data (`Pset_LandRegistration`) are on the `IfcSite` (9.03a) |
| Attributes | `GlobalId` mandatory and stable between versions; `Name` and `ObjectType` mandatory; `Description` and `LongName` optional |
| ObjectType | No additional property sets. The meaning is recorded with `ObjectType` on `IfcSpace`, `IfcSpatialZone` and `IfcZone`, using values from the bSDD publication *Omgevingswet-Ruimten* |
| Property sets | Only international buildingSMART Psets and Qtos (e.g. `Pset_SpaceCommon`, `Qto_SpaceBaseQuantities`, `Pset_WallCommon.FireRating`, `.ThermalTransmittance`) |
| Fire properties | Zones (9.16): `Pset_SpaceFireSafetyRequirements`, including `SprinklerProtection` and `SprinklerProtectionAutomatic` (optional); escape route `FireExit` = true (mandatory). Physical elements (9.18): `LoadBearing` for beam, column, slab and wall (mandatory); `Compartmentation` for slab and wall; `FireExit` and `SmokeStop` for door and window and `SelfClosing` for door (optional). `FireRating` (optional) according to NEN-EN 13501-2: class and time in minutes, e.g. `REI 60` or `EI2 30-Sa`. For insulation, `SurfaceSpreadOfFlame` (optional) according to NEN-EN 13501-1, e.g. `B-s1,d0`, not yet including the classes for floorings (fl) and linear pipe insulation (L); `FlammabilityRating` optional. **The value lists are provisional:** decision of the municipal working group of 3 November 2026, subject to alignment with the BIM basis ILS via digiGO |
| Classification | Optionally code objects with NL-SfB table 1, 4-digit, latest published version (2021) via bSDD (NL-SfB is not required when the principles above are applied) |
| Material | Naam Kenmerk Toepassing: *Naa.K.T.* (digiGO, bSDD `nkt/naakt/2.4`) |
| Building services | Group building services objects in an `IfcSystem` |
| Building parts / accommodation units | Still to be investigated further. Preferably `IfcSpatialZone` per building part (different year of construction/building system); `IfcZone` per accommodation unit with the BAG ID. Shared spaces belong to the building, not to an accommodation unit |
| Duplicates | No duplicate or overlapping objects of the same type |
| Building | `IfcBuilding` with ObjectType `Gebouw` and, among others, `Pset_BuildingCommon.BuildingID` (BAG building ID, or 14× `0` for new builds), `NumberOfStoreys`, `YearOfConstruction`, `IsLandmarked`, `GrossPlannedArea`, `NetPlannedArea` |

## Production method: space model

The space model follows the **ILS voor Ruimten in de Omgevingswet**. The steps follow the numbering of the specifications; the order of modelling is given in the [Way of working](#werkwijze) of the modelling guideline.

1. Record georeferencing, project, parcels and building (9.01–9.05).
2. Storeys and storey volume (9.06).
3. Use units, use functions and secondary use functions as zones (9.07–9.09).
4. Areas (*functie-, verblijfs-, gebruiks-, bed- en restgebied*) as `IfcSpatialZone` (9.10–9.11).
5. Spaces (*functie-, verblijfs-, bed- en restruimte, buitenruimte*) as `IfcSpace` (9.12–9.13).
6. Fire compartments, sub-fire compartments, protected sub-fire compartments and escape routes (9.16). Tarra Ruimte (9.17) does not need to be modelled; if a check needs the tarra, it is calculated as gross volume minus net volume.
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
