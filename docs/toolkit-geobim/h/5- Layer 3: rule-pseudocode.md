## Example — Rule #2: Maximum Building Height

### Layer 0 — Rule foundation / interpretation

Purpose: define **what the legal rule actually means** before touching software.

> **Rule ID:** BM13-R02
> 
> 
> **Check:** Does the proposed building exceed the maximum permitted building height at this location?
> 
> **Legal source:** Applicable environmental-plan provision / location-based rule
> 
> **Definition:** Building height is measured from the applicable reference level to the highest relevant point of the building.
> 
> **Interpretation questions:** Are rooftop installations included? Which reference level applies? Are there local exceptions?
> 
> **Dependencies:** Applicable regulatory working area, reference-level definition, building geometry.
> 

This is the normative interpretation layer.

---

### Layer 1 — Check & approach

This describes how a VTH officer would conceptually perform the test.

```
1. Identify the application location.
2. Determine which maximum-height rule applies there.
3. Obtain the permitted maximum height.
4. Determine the applicable reference level.
5. Determine the highest relevant point of the proposed building.
6. Calculate building height.
7. Compare measured height with permitted height.
8. Report result and evidence.
```

---

### Layer 2 — Data requirements

Now specify **what information is required and where it comes from**.

| Information | Type | Example source |
| --- | --- | --- |
| Proposed building geometry | BIM | IFC |
| Roof / relevant upper geometry | BIM | IfcRoof / geometry |
| Rooftop installations | BIM | relevant IFC elements |
| BIM georeferencing | BIM | IfcMapConversion |
| Parcel | GEO | BRK |
| Terrain/reference data | GEO | municipal height data / AHN |
| Rule working area | Regulation/GEO | DSO / Regels op de kaart / STOP-TPOD |
| Maximum allowed height | Regulation | applicable environmental rule |
| Interpretation profile | Regulatory metadata | BM13 rule specification |

I would also define the reusable derived properties:

```
DER-02 = Reference level
DER-03 = Building height
```

---

### Layer 3 — Software-independent pseudocode

This is what you can give to **all vendors regardless of technology**.

```
PROCEDURE CHECK_MAXIMUM_BUILDING_HEIGHT(application):

    location =
        GET_APPLICATION_LOCATION(application)

    bim_model =
        GET_SUBMITTED_BIM_MODEL(application)

    IF bim_model is missing:
        RETURN INSUFFICIENT_DATA

    georeference =
        GET_BIM_GEOREFERENCE(bim_model)

    IF georeference is missing:
        RETURN INSUFFICIENT_DATA

    building =
        GET_BUILDING_GEOMETRY(bim_model)

    // Retrieve applicable regulatory rule
    height_rule =
        GET_APPLICABLE_RULE(
            location,
            rule_type = "MaximumBuildingHeight"
        )

    IF height_rule does not exist:
        RETURN NOT_APPLICABLE

    permitted_height =
        GET_PARAMETER(
            height_rule,
            "maximumHeight"
        )

    // Determine regulatory reference level
    reference_definition =
        GET_PARAMETER(
            height_rule,
            "referenceLevelDefinition"
        )

    reference_level =
        GET_REFERENCE_LEVEL(
            location,
            reference_definition,
            preferred_source = municipal_height_data,
            fallback_source = AHN
        )

    IF reference_level is missing:
        RETURN INSUFFICIENT_DATA

    // Determine which BIM geometry counts
    relevant_geometry =
        FILTER_HEIGHT_RELEVANT_GEOMETRY(
            building,
            interpretation = height_rule.interpretation
        )

    IF interpretation is unresolved:
        RETURN REVIEW_REQUIRED

    highest_point =
        MAX_Z(relevant_geometry)

    measured_height =
        highest_point - reference_level

    tolerance =
        GET_PARAMETER(
            height_rule,
            "tolerance"
        )

    IF measured_height <= permitted_height + tolerance:

        RETURN COMPLIANT WITH {
            measured_height,
            permitted_height,
            reference_level,
            highest_point
        }

    ELSE:

        RETURN NON_COMPLIANT WITH {
            measured_height,
            permitted_height,
            reference_level,
            highest_point
        }
```

That is **Layer 3**.

The key idea is:

> every supplier can implement this differently, but the computational interpretation remains the same.
> 

---

# Layer 4 — Machine-readable rule representation

Now you can represent the same rule formally.

I would separate:

**rule metadata / parameters**

from

**validation shape**

from

**calculation query**.

For example, a simplified RDF rule instance:

```
@prefix bm13: <https://example.org/bm13/> .
@prefix xsd:  <http://www.w3.org/2001/XMLSchema#> .

bm13:R02_MaximumBuildingHeight
    a bm13:PermitRule ;
    bm13:ruleId "BM13-R02" ;
    bm13:ruleType bm13:MaximumBuildingHeight ;
    bm13:maximumHeight "12.0"^^xsd:decimal ;
    bm13:unit "m" ;
    bm13:tolerance "0.05"^^xsd:decimal ;
    bm13:referenceLevelSource bm13:MunicipalReferenceLevel ;
    bm13:fallbackReferenceLevelSource bm13:AHN ;
    bm13:resultProperty bm13:buildingHeight .
```

That gives you a **machine-readable rule object**.

---

# SHACL example

Assume your processing pipeline has already derived:

```
buildingHeight = 12.37 m
maximumHeight = 12.00 m
```

Then SHACL can validate the result.

```
@prefix sh:   <http://www.w3.org/ns/shacl#> .
@prefix bm13: <https://example.org/bm13/> .
@prefix xsd:  <http://www.w3.org/2001/XMLSchema#> .

bm13:MaximumHeightShape
    a sh:NodeShape ;

    sh:targetClass bm13:BuildingPermitCase ;

    sh:sparql [
        a sh:SPARQLConstraint ;

        sh:message
            "Building exceeds the maximum permitted height." ;

        sh:select """
            PREFIX bm13: <https://example.org/bm13/>

            SELECT $this
                   ?measuredHeight
                   ?maximumHeight
            WHERE {

                $this bm13:buildingHeight ?measuredHeight ;
                      bm13:maximumPermittedHeight ?maximumHeight .

                FILTER (?measuredHeight > ?maximumHeight)
            }
        """
    ] .
```

This says:

> for every permit case, if measured building height is greater than the maximum permitted height, report a violation.
> 

---

# Better SHACL example with tolerance

Because your BM13 Layer 4 should also preserve tolerance:

```
bm13:MaximumHeightShape
    a sh:NodeShape ;
    sh:targetClass bm13:BuildingPermitCase ;

    sh:sparql [
        a sh:SPARQLConstraint ;

        sh:message
          "Measured building height exceeds the permitted height including tolerance." ;

        sh:select """
            PREFIX bm13: <https://example.org/bm13/>

            SELECT $this
                   ?measured
                   ?allowed
                   ?tolerance
            WHERE {

                $this
                    bm13:buildingHeight ?measured ;
                    bm13:maximumPermittedHeight ?allowed ;
                    bm13:heightTolerance ?tolerance .

                FILTER(
                    ?measured >
                    (?allowed + ?tolerance)
                )
            }
        """
    ] .
```

---

# SPARQL example — derive the compliance result

SPARQL can also produce a result object.

```
PREFIX bm13: <https://example.org/bm13/>

CONSTRUCT {

    ?case
        bm13:checkResult ?result .

    ?result
        a bm13:RuleCheckResult ;
        bm13:rule bm13:R02_MaximumBuildingHeight ;
        bm13:status ?status ;
        bm13:measuredValue ?measured ;
        bm13:allowedValue ?allowed ;
        bm13:tolerance ?tolerance .

}
WHERE {

    ?case
        a bm13:BuildingPermitCase ;
        bm13:buildingHeight ?measured ;
        bm13:maximumPermittedHeight ?allowed ;
        bm13:heightTolerance ?tolerance .

    BIND(
        IF(
            ?measured <= (?allowed + ?tolerance),
            bm13:Compliant,
            bm13:NonCompliant
        )
        AS ?status
    )

    BIND(
        IRI(
            CONCAT(
                STR(?case),
                "/result/R02"
            )
        )
        AS ?result
    )
}
```

This can generate a reusable result graph instead of only displaying a pass/fail message.

---

# More complete machine-readable input graph

You could represent one case like:

```
bm13:PermitCase_001
    a bm13:BuildingPermitCase ;

    bm13:applicationLocation
        bm13:Location_001 ;

    bm13:building
        bm13:Building_001 ;

    bm13:buildingHeight
        "12.37"^^xsd:decimal ;

    bm13:maximumPermittedHeight
        "12.00"^^xsd:decimal ;

    bm13:heightTolerance
        "0.05"^^xsd:decimal ;

    bm13:referenceLevel
        "1.84"^^xsd:decimal ;

    bm13:highestPoint
        "14.21"^^xsd:decimal .
```

Then SHACL/SPARQL evaluates this graph.

---

# But there is an important architectural distinction

I would **not try to do every geometry operation directly in SHACL/SPARQL**.

For example:

```
highest point of IFC model
building footprint
shortest escape route
daylight obstruction angle
3D distance
```

Those may be better computed by a geometry engine.

Then publish the result back into the shared graph:

```
IFC / geometry engine
        ↓
DER-03 BuildingHeight = 12.37 m
        ↓
RDF graph
        ↓
SHACL / SPARQL rule
        ↓
COMPLIANT / NON_COMPLIANT
```

That is much cleaner than pretending SPARQL itself should be a complete 3D computational geometry engine.

---

# Layer 5 — Reference implementation

This is where the vendor-specific architecture starts.

## Vendor implementation A — Semantic

```
IFC
 ↓
IFC → RDF transformation
 ↓
Geo RDF / linked data
 ↓
Derived geometry service
 ↓
RDF knowledge graph
 ↓
SHACL + SPARQL
 ↓
Result graph
 ↓
VTH interface
```

## Vendor implementation B — Conventional rule engine

```
IFC parser
 ↓
Geometry engine
 ↓
Geo APIs
 ↓
Internal C#/Java/Python rule engine
 ↓
BM13 pseudocode implemented directly
 ↓
JSON result
 ↓
VTH interface
```

## Vendor implementation C — Semi-automated

```
IFC + GEO viewer
 ↓
Software calculates building height
 ↓
Applicable maximum shown
 ↓
Human compares / validates
 ↓
Result recorded
```

All three can still be considered implementations of:

> **BM13-R02**
> 

because they follow the same:

**interpretation + inputs + derived property + comparison + result definition.**

That is exactly your national-scale argument.

---

## I would present the six layers visually as

```
LAYER 0
LEGAL MEANING
"What does maximum building height mean?"
        ↓

LAYER 1
CHECKING METHOD
"Measure height and compare with permitted value"
        ↓

LAYER 2
DATA
IFC + parcel + rule area + reference level
        ↓

LAYER 3
PSEUDOCODE
height = highestPoint - referenceLevel
        ↓

LAYER 4
MACHINE-READABLE RULE
RDF + SHACL + SPARQL
        ↓

LAYER 5
SOFTWARE IMPLEMENTATIONS

Vendor A → SHACL/SPARQL
Vendor B → C#/rule engine
Vendor C → visual/semi-automated

        ↓

SAME REGULATORY MEANING
SAME TEST CASE
COMPARABLE RESULT
```



> **Layer 4 standardizes the computational representation; Layer 5 demonstrates that the same rule can be implemented through different technologies and automation levels.**
>
