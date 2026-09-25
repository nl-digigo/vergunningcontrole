# Sample models

This ILS comes with a set of **sample models in IFC**. They are in the folder [`voorbeeldmodellen/`](../../voorbeeldmodellen/) next to the IDS files, so that modellers, software vendors and municipalities can see what the specifications look like in a real file.

Every specification in [Level of Information Need](#loin) carries an excerpt from these models: the STEP lines of an object that meets that specification, with its property sets and its classification reference. This shows, per specification, how the properties end up in the IFC file.

## Origin and status

The models come from the **RottaNova / Kievitsweg** project (Kuiper Compagnons), an apartment building with residential and office functions. They are **practice models**, not a submitted application:

- The spatial objects have been updated to the names and *bepalingsmethoden* (measuring methods) of this ILS, and carry the *Omgevingswet-Ruimten* classification.
- Where data was missing in the source model, a **placeholder** was inserted. Every object with a placeholder carries a property set `BM13_Placeholders` listing the properties concerned. These are mainly fire properties of doors and windows (`FireRating` = `ONBEKEND`, `FireExit`/`SelfClosing`/`SmokeStop` = `false`) and the address data.
- The investment in `Pset_ProjectCommon.ProjectInvestmentEstimate` (10 million euro) is a fictitious amount, included to show the data type and the currency.

<p class="note">Use these models to learn and to test, not as evidence of a correct application. In a real application the placeholders must be replaced by actual values.</p>

## The files

One combined model (two export versions) and thirteen partial models, each with one kind of object, handy for testing a single specification.

| File | MB | Objects | Main ObjectTypes |
|---|---|---|---|
| `Kievitsweg_R23_ILS_Spaces_update.ifc` | 17.4 | 4,486 | Restruimte (90), Restgebied (70), Verblijfsruimte (43), Gebruiksfunctie (41) |
| `Kievitsweg_R25_ILS_Spaces_20250815_LoGeoRef50.ifc` | 14.4 | 4,205 | Restruimte (91), Restgebied (82), Gebruikseenheid (46), Verblijfsruimte (44) |
| `Kievitsweg_Brandcompartiment.ifc` | 11.1 | 56 | Gebruikseenheid (35), Brandcompartiment (23) |
| `Kievitsweg_Eigendom-_en_gebruikseenheid.ifc` | 11.1 | 33 | Gebruikseenheid (35) |
| `Kievitsweg_Gebruiksfunctie.ifc` | 11.2 | 48 | Gebruiksfunctie (41), Bouwlaaginhoud (9), Gebouwinhoud (1) |
| `Kievitsweg_Gebruiksgebied.ifc` | 11.1 | 37 | Gebruiksgebied (29) |
| `Kievitsweg_Nevengebruiksfunctie.ifc` | 11.1 | 8 | Nevengebruiksfunctie (4) |
| `Kievitsweg_Restgebied.ifc` | 11.2 | 78 | Restgebied (70) |
| `Kievitsweg_Restruimte.ifc` | 11.2 | 98 | Restruimte (90) |
| `Kievitsweg_Verblijfsruimte.ifc` | 11.1 | 51 | Verblijfsruimte (43) |
| `Kievitsweg_Terreinvolume.ifc` | 11.1 | 12 | Bouwwerkperceel, Kadastraal perceel, Bebouwd and Onbebouwd Terrein |
| `Kievitsweg_IsExternalTrue_LoadBearingTrue.ifc` | 11.1 | 25 | physical elements: external walls, load-bearing |
| `Kievitsweg_IsExternalTrue_LoadBearingFalse.ifc` | 12.3 | 670 | physical elements: external walls, non-load-bearing |
| `Kievitsweg_IsExternalFalse_LoadBearingTrue.ifc` | 11.3 | 125 | physical elements: internal walls, load-bearing |
| `Kievitsweg_IsExternalFalse_LoadBearingFalse.ifc` | 11.7 | 476 | physical elements: internal walls, non-load-bearing |

All models are IFC4, georeferenced in EPSG:28992 with `VerticalDatum` EPSG:5709, and `IfcMapConversion.Scale` is set explicitly to 0.001 (millimetres to metres).

## Checking them yourself

The models and the IDS files belong together. With an IDS 1.0-compliant validator (for example IfcTester from IfcOpenShell, or the buildingSMART Validation Service) you can check a model against the specifications in [`ids/`](../../ids/):

```bash
pip install ifcopenshell ifctester
python -m ifctester ids/26-9.12b-Verblijfsruimte.ids voorbeeldmodellen/Kievitsweg_Verblijfsruimte.ifc
```

All 15 models pass the specifications that apply to them.

## What is deliberately still wrong

These points were left in, because they call for a decision or for modelling work. They are usable as practice material:

- **Fire compartments are `IfcSpace`**, while specification 9.16a only checks `IfcZone` and `IfcSpatialZone`. According to the [modelling guideline](#modelleerrichtlijn) a compartment should be a zone.
- **Areas are `IfcSpace`** instead of the recommended `IfcSpatialZone`.
- **Duplicate `Pset_DoorCommon`**: besides the standard set, the export delivers a second set with the same name and its own properties (`Geluidwering`, `Brandweer_ingang`). This is visible in the excerpt at specification 9.18e.
- **Tarraruimte and tarra volume are missing**, as are quantities (volume) on the storeys.
- **The cadastral parcel is an `IfcSpace`**, while the ILS prescribes `IfcSpatialZone`.

A full description of what was changed and what is still open is in `voorbeeldmodellen/LEESMIJ.md`.
