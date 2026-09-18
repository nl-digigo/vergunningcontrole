# Geometric checking

## The problem

IDS only checks **attributes and properties**, not geometry. Yet most checks need geometry: areas, heights, widths and distances. In practice this often goes wrong:

- Different programs calculate different areas from the same IFC model.
- On export, one slab is sometimes split into several IFC objects. Simply adding up the areas then gives a wrong result.
- Pitched roofs and dormers are hard to interpret according to NEN 2580.
- Rules such as the maximum eaves height (*goothoogte*) have not yet been defined independently of software.

## Approach: two-step check

| Step | Who | What | Why |
|---|---|---|---|
| **1. Deliver** | The applicant's CAD software | Calculates quantities and exports them in IFC Quantity Sets (`Qto_…`) | The source software knows the model best |
| **2. Recalculate** | The municipality's receiving software | Recalculates the quantities from the solid geometry and compares them with step 1 | This exposes export errors and makes the result reliable |

Prerequisite: the model contains **solid geometry** (requirement G1 in the [LOIN](#loin-geometrie)). If the difference between step 1 and step 2 stays below the threshold (AC6), the check uses the delivered value. If it exceeds the threshold, the assessor is alerted.

## Technical set-up (layer 4)

The checks are built in two layers, so that they do not depend on a single software package:

```
IFC file
   │  convert
   ▼
RDF graph (ifcOWL, RDF translation of the IFC EXPRESS schema)
   │  filter
   ▼
SPARQL rule per check  ──calls──▶  generic geometry functions
                                    (calculate_projected_area,
                                     get_bounding_box, …)
   │
   ▼
Result per check (passes / fails / manual review)
```

**Example: eaves height (related to check #2)**

1. A SPARQL rule selects all roof geometry.
2. For each roof object, the rule calls `get_bounding_box`.
3. The bounding boxes give the minimum and maximum height relative to NAP, and with that the eaves height and building height.
4. The result is compared with the standard in the zoning plan.

**Example: building coverage percentage (check #3)**

`calculate_projected_area` on the gross volume (9.05b *Gebouwinhoud*) gives the built-up area. This is divided by the area of the building plot (9.03b *Bouwwerkperceel*).

The SPARQL rules and generic functions will be placed in the shared GitHub repository (layer 4).

## Bottleneck: status of the RDF translation of IFC

The approach relies on an RDF translation of IFC. That translation is an open specification, but **not a formally adopted buildingSMART standard** (unlike EXPRESS, the ISO schema, and XSD, the XML translation). This creates risks:

- **Vendor lock-in and fragmentation:** commercial tools develop their own ontologies, so rules cannot be exchanged.
- **Extra mapping layers:** domain ontologies (e.g. from FireBIM) add complexity.

**BM13 position:** buildingSMART International should formalise this ontology. Alignment with the Dutch information models that semantically connect base registers and domain models is also desirable. This will be raised through a strategic note to the digiGO steering group and through the questions to buildingSMART.
