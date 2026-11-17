# Sample models

This ILS comes with a **sample model in IFC**: [`BM13_SPA_XX_M3D_ZZZ_Qto.ifc`](../voorbeeldmodellen/BM13_SPA_XX_M3D_ZZZ_Qto.ifc), in the folder `voorbeeldmodellen/` next to the IDS files. Modellers, software vendors and municipalities can use it to see what the specifications look like in a real file.

Every specification in [Level of Information Need](#loin) carries an excerpt from this model: the STEP lines of an object that belongs to that specification, with the requested property sets, the quantities, the classification reference and, for zones, the grouping. Where the model does not yet meet the specification, this is stated below the excerpt.

## Origin and status

The model is a **terraced house** (*Woning fam. B*, Driebergen-Rijsenburg) in its existing structural state. It was modelled in Revit 2026 and exported to IFC on 17 November 2026.

- **Schema:** IFC4X3_ADD2 (ISO 16739-1:2024).
- **Georeferencing:** `IfcMapConversion` with `IfcProjectedCRS` EPSG:7415 (RD + NAP); `Scale` is 0.001, because the length unit is the millimetre. Areas are in m², volumes in m³.
- **Quantities:** the spaces and areas carry `Qto_SpaceBaseQuantities` or `Qto_SpatialZoneBaseQuantities`. The ILS does not require quantities in the model; they are included as material for checking.
- **Classification:** the spatial objects refer to the *Omgevingswet-Ruimten* classification.

<p class="note">This is a practice model, not a submitted application. Use it to learn and to test, not as evidence of a correct application.</p>

## What the model contains

| Entity | ObjectType | Number | Specification |
|---|---|---|---|
| `IfcProject` | — | 1 | 9.02 |
| `IfcSite` | Perceel | 1 | 9.03a |
| `IfcBuilding` | (empty) | 1 | 9.05a |
| `IfcBuildingStorey` | Bouwlaag | 5 | 9.06a |
| `IfcBuildingStorey` | NAP | 1 | — (reference level) |
| `IfcSpace` | Functieruimte | 16 | 9.12a |
| `IfcSpace` | Verblijfsruimte | 2 | 9.12b |
| `IfcSpace` | Bedruimte | 4 | 9.12c |
| `IfcSpace` | Restruimte | 4 | 9.12d |
| `IfcSpace`, `IfcExternalSpatialElement` | Buitenruimte | 1 + 3 | 9.13 |
| `IfcSpatialZone` | Bouwwerkperceel | 1 | 9.03b |
| `IfcSpatialZone` | Kadastraal Perceel | 1 | 9.04 |
| `IfcSpatialZone` | Bouwlaaginhoud | 4 | 9.06b |
| `IfcSpatialZone` | Gebruiksfunctie | 5 | 9.08 |
| `IfcSpatialZone` | (empty) | 2 | — |
| `IfcZone` | Eigendom- en gebruikseenheid | 1 | 9.07 |
| `IfcZone` | Functiegebied, Verblijfgebied, Gebruiksgebied, Bedgebied, Restgebied | 1 of each | 9.10a–f |
| `IfcZone` | Buitengebied | 1 | 9.11 |
| `IfcZone` | Brandcompartiment, Subbrandcompartiment, Beschermd-subbrandcompartiment, Vluchtroute | 1 of each | 9.16a–d |
| `IfcZone` | Gebouweenheid (2), Terreineenheid (1) | 3 | — |

Physical elements (walls, doors, windows, slabs) are not in this model.

## Checking it yourself

The model and the IDS files belong together. With an IDS 1.0-compliant validator (for example IfcTester from IfcOpenShell, or the buildingSMART Validation Service) you can check the model against the specifications in [`ids/`](../ids/):

```bash
pip install ifcopenshell ifctester
python -m ifctester ids/26-9.12b-Verblijfsruimte.ids voorbeeldmodellen/BM13_SPA_XX_M3D_ZZZ_Qto.ifc
```

## What is not yet correct

When the excerpts were made, the model was compared with the IDS. These points deviate:

- **9.05a Gebouw:** ObjectType is empty; the IDS requires `Gebouw`. `BuildingID` and `IsPermanentID` are missing from `Pset_BuildingCommon`.
- **9.05b Gebouwinhoud:** the two `IfcSpatialZone` objects '01' and '02' (Bruto Inhoud) have no ObjectType, so the IDS does not recognise a building volume.
- **9.06b Bouwlaaginhoud:** the zone '1 kleder' does not follow the storey naming (`-1 kelder`).
- **9.07 Gebruikseenheid:** ObjectType is `Eigendom- en gebruikseenheid` and `Description` is empty; the IDS requires `Gebruikseenheid` and `Bruto Inhoud`.
- **9.10b and 9.10c Verblijfsgebied:** ObjectType is `Verblijfgebied` (without the s). `OccupancyType` and the occupancy data are missing.
- **9.11 Buitengebied:** `Description` is `Bruto Inhoud` instead of a terrain volume; `IsExternal`, `PubliclyAccessible` and `HandicapAccessible` are missing.
- **9.16a–d fire safety:** `Description` describes the purpose of the zone instead of a measuring method (`Bruto Inhoud`, `Gebruiksinhoud` or `Netto Inhoud`). `FireExit` is missing for 9.16c; for 9.16d the ObjectType is `Beschermd-subbrandcompartiment` (with a hyphen).
- **Not in the model:** 9.09 Nevengebruiksfunctie, 9.17 Tarra Ruimte and all physical elements (9.18).
- **Zones without a specification:** `Gebouweenheid` and `Terreineenheid` do not occur in this ILS.

## Archive

The previous standard model `BM13_SPA_XX_M3D_ZZZ.ifc` is in `archief/`. The fifteen Kievitsweg models have been removed from the repository; they can be found in the git history. Their description (readme and change lists) is in `archief/voorbeeldmodellen-kievitsweg/`.
