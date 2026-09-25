# Kievitsweg — voorbeeldmodellen v2 (eigenschappen opgeschoond)

**Datum:** 25 september 2026 · **Bron:** de set van 17 september (`kievitsweg_bm13_gecorrigeerd`) · **Gereedschap:** IfcOpenShell 0.8.5 / IfcTester

Alle 15 modellen zijn opnieuw bewerkt. Geometrie en objectaantallen zijn ongewijzigd.

## Wat is er gewijzigd

| Onderwerp | Wat | Aantal |
|---|---|---|
| `Pset_SpaceOccupancyRequirements` | `Level`, `Name`, `ObjectType`, `Number` en `Area` verwijderd: die eigenschappen staan niet in deze property set van het IFC-schema. Ze stonden al als attribuut (`Name`, `ObjectType`), als bouwlaagrelatie of als hoeveelheid (`Qto_SpaceBaseQuantities`) in het model | 5 × 52 |
| idem | Property set verwijderd waar er daarna niets meer in stond | 36 |
| idem | `OccupancyType` (SBI-code) gelijkgetrokken naar de CBS-notatie met punten: `2910` → `29.10`, `69203` → `69.20.3` | 39 |
| `Pset_SpaceHeaterTypeCommon` | Volledig verwijderd van alle objecten | 1.061 |
| `Pset_SpaceCommon` | Eigenschap `Reference` verwijderd van alle objecten | 1.125 |
| `Pset_ProjectCommon` | `ProjectInvestmentEstimate` = **10.000.000** als `IfcMonetaryMeasure` | 15 (elk model) |
| `IfcUnitAssignment` | `IfcMonetaryUnit` met valuta **EUR** toegevoegd, zodat het bedrag een eenheid heeft | 15 |

De volledige lijst staat in `wijzigingen_v2.md`.

## Let op: één specificatie faalt nu, door een fout in de IDS

Specificatie **9.02 Project** eist voor `ProjectInvestmentEstimate` het datatype `IFCCOSTITEMTYPEENUM`:

```xml
<ids:property dataType="IFCCOSTITEMTYPEENUM" … >
  <ids:baseName><ids:simpleValue>ProjectInvestmentEstimate</ids:simpleValue></ids:baseName>
```

Volgens het IFC-schema is `Pset_ProjectCommon.ProjectInvestmentEstimate` een **`IfcMonetaryMeasure`**; `IfcCostItemTypeEnum` is het type van een kostenpost, niet van een bedrag. De modellen houden daarom de schema-correcte `IfcMonetaryMeasure`, waardoor de toets op dit punt afkeurt. Zolang de eigenschap ontbrak, viel dit niet op: de eis is `optional`, dus een leeg model slaagde.

**Herstel in de IDS:** `dataType="IFCCOSTITEMTYPEENUM"` → `dataType="IFCMONETARYMEASURE"` in `ids/07-9.02-Project.ids`. Daarna slagen alle 15 modellen weer op alle toepasbare specificaties.

De overige specificaties die vóór deze ronde slaagden, slagen nog steeds (per model 9–26 toepasbare specificaties, alleen 9.02 valt af).

## Bestanden

| Bestand | Inhoud |
|---|---|
| 15 × `Kievitsweg_*.ifc` | de bijgewerkte modellen, zelfde namen als de vorige set |
| `wijzigingen_v2.md` | alle wijzigingen met aantallen en het aantal bestanden |
| `LEESMIJ_v2.md` | dit bestand |

De eerdere bewerkingen (ObjectTypes, classificaties, georeferentie, placeholders) zitten er nog in; zie `RAPPORT_Kievitsweg_ILS-correcties.md` uit de vorige set.
