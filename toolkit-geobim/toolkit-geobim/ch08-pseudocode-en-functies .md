# Pseudocode en functies {#pseudocode-en-functies}

<p class="leesniveau technisch">Technisch</p>

Dit hoofdstuk beschrijft per check de **pseudocode**: de stappen die software doorloopt, los van een programmeertaal. De stappen roepen **standaardfuncties** aan (F00–F47). Die functies zijn één keer beschreven en worden in meerdere checks hergebruikt. De pseudocode is de brug tussen de regelinterpretatie ([[[#regelinterpretatie]]]) en de uitvoerbare SPARQL en SHACL ([[[#regelcodering]]]).

De pseudocode en de technische toelichting bij de functies zijn Engelstalig, net als [[[#voorbeeld-regel-2]]], zodat softwareleveranciers ze direct kunnen gebruiken.

| | |
|---|---|
| **Bron** | BM13-tracker, tabbladen *Pseudocode*, *Functions* en *Geometry operations* |
| **Checks** | 17 procedures, één per check |
| **Functies** | 47 standaardfuncties (F00–F47, F06 vervallen); 28 nog open |
| **Stand** | Functietabel samengevoegd met de leveranciers-tracker op 6-10-2026; F46–F47 toegevoegd op 5-10-2026 |

## Zo lees je de pseudocode {#pc-leeswijzer}

Elke procedure eindigt met één uitkomst:

| Uitkomst | Betekenis |
|---|---|
| `COMPLIANT` | Voldoet |
| `NON_COMPLIANT` | Voldoet niet |
| `REVIEW_REQUIRED` | Beoordeling nodig: een mens moet kijken |
| `NOT_APPLICABLE` | Niet van toepassing |
| `INSUFFICIENT_DATA` | Onvoldoende gegevens om te toetsen |

Verwijzingen in de commentaarregels (`//`):

| Code | Betekenis |
|---|---|
| `Fnn` | Standaardfunctie, zie [Standaardfuncties](#pc-functies) |
| `MR-Rnn` | Minimale gegevens die het model voor check nn moet bevatten (IDS) |
| `DER-nn` | Afgeleide waarde (derivation) uit de regelinterpretatie |
| `DR-GEO-nn` | Geo-gegevens die de regel zelf meebrengt (zones met waardebeperkingen) |

## Overzicht per check {#pc-overzicht}

| Check | Onderwerp | Procedure | Functies |
|---|---|---|---|
| **#1** | [Gebruiksfunctie komt overeen met bestemming ("Wonen")](#pc-regel-1) | `CHECK_BESTEMMING` | [F00](#f00), [F01](#f01), [F07](#f07), [F08](#f08), [F10](#f10), [F13](#f13), [F14](#f14), [F16](#f16), [F19](#f19), [F20](#f20), [F21](#f21), [F22](#f22), [F23](#f23) |
| **#2** | [Maximale bouwhoogte](#pc-regel-2) | `CHECK_MAXIMUM_BUILDING_HEIGHT` | [F00](#f00), [F01](#f01), [F10](#f10), [F11](#f11), [F12](#f12), [F15](#f15), [F19](#f19), [F20](#f20), [F21](#f21), [F22](#f22), [F23](#f23) |
| **#3** | [Maximaal bebouwingspercentage](#pc-regel-3) | `CHECK_BUILDING_COVERAGE` | [F00](#f00), [F01](#f01), [F05](#f05), [F07](#f07), [F10](#f10), [F14](#f14), [F19](#f19), [F20](#f20), [F21](#f21), [F22](#f22), [F23](#f23), [F25](#f25), [F26](#f26), [F30](#f30) |
| **#4** | [Gebruiksfunctie beperkt tot x bouwlagen](#pc-regel-4) | `CHECK_USE_FUNCTION_STOREYS` | [F00](#f00), [F08](#f08), [F19](#f19), [F20](#f20), [F23](#f23), [F24](#f24), [F27](#f27) |
| **#5** | [Beroep aan huis: maximaal aandeel gebruiksoppervlakte](#pc-regel-5) | `CHECK_HOME_BUSINESS_SHARE` | [F00](#f00), [F01](#f01), [F08](#f08), [F19](#f19), [F20](#f20), [F21](#f21), [F23](#f23), [F24](#f24), [F25](#f25), [F30](#f30) |
| **#6** | [Maximum aantal bouwlagen](#pc-regel-6) | `CHECK_MAXIMUM_STOREYS` | [F00](#f00), [F01](#f01), [F08](#f08), [F11](#f11), [F19](#f19), [F20](#f20), [F21](#f21), [F22](#f22), [F23](#f23), [F27](#f27) |
| **#7** | [Brandcompartimenten](#pc-regel-7) | `CHECK_FIRE_COMPARTMENTS` | [F00](#f00), [F01](#f01), [F05](#f05), [F13](#f13), [F14](#f14), [F19](#f19), [F20](#f20), [F21](#f21), [F22](#f22), [F24](#f24), [F25](#f25), [F26](#f26), [F29](#f29), [F38](#f38), [F41](#f41), [F43](#f43) |
| **#8** | [Brandwerendheid](#pc-regel-8) | `CHECK_FIRE_RESISTANCE` | [F00](#f00), [F13](#f13), [F19](#f19), [F20](#f20), [F23](#f23), [F24](#f24), [F25](#f25), [F28](#f28), [F29](#f29), [F36](#f36), [F37](#f37) |
| **#9** | [Vrije breedte](#pc-regel-9) | `CHECK_CLEAR_WIDTH` | [F00](#f00), [F13](#f13), [F19](#f19), [F20](#f20), [F22](#f22), [F24](#f24), [F25](#f25), [F29](#f29), [F31](#f31), [F33](#f33), [F34](#f34) |
| **#10** | [Hoogteverschil](#pc-regel-10) | `CHECK_HEIGHT_DIFFERENCE` | [F00](#f00), [F01](#f01), [F13](#f13), [F19](#f19), [F20](#f20), [F21](#f21), [F22](#f22), [F24](#f24), [F28](#f28), [F29](#f29), [F31](#f31), [F32](#f32), [F33](#f33), [F34](#f34) |
| **#11** | [Rc-waarde](#pc-regel-11) | `CHECK_RC_VALUE` | [F00](#f00), [F13](#f13), [F19](#f19), [F20](#f20), [F24](#f24), [F28](#f28), [F29](#f29), [F36](#f36), [F39](#f39), [F41](#f41) |
| **#12** | [U-waarde](#pc-regel-12) | `CHECK_U_VALUE` | [F00](#f00), [F13](#f13), [F19](#f19), [F20](#f20), [F24](#f24), [F25](#f25), [F28](#f28), [F29](#f29), [F36](#f36), [F41](#f41) |
| **#13** | [MPG, milieuprestatie](#pc-regel-13) | `CHECK_MPG` | [F00](#f00), [F13](#f13), [F19](#f19), [F20](#f20), [F23](#f23), [F24](#f24), [F25](#f25), [F29](#f29), [F36](#f36), [F41](#f41) |
| **#14** | [Vluchtwegen](#pc-regel-14) | `CHECK_ESCAPE_ROUTES` | [F00](#f00), [F13](#f13), [F19](#f19), [F20](#f20), [F23](#f23), [F24](#f24), [F29](#f29), [F33](#f33), [F34](#f34) |
| **#15** | [Loopafstand](#pc-regel-15) | `CHECK_WALKING_DISTANCE` | [F00](#f00), [F13](#f13), [F19](#f19), [F20](#f20), [F23](#f23), [F24](#f24), [F29](#f29), [F32](#f32), [F33](#f33), [F35](#f35), [F36](#f36), [F42](#f42), [F45](#f45) |
| **#16** | [Vluchtbreedte](#pc-regel-16) | `CHECK_ESCAPE_WIDTH` | [F00](#f00), [F13](#f13), [F19](#f19), [F20](#f20), [F23](#f23), [F24](#f24), [F25](#f25), [F29](#f29), [F31](#f31), [F33](#f33), [F34](#f34), [F42](#f42), [F44](#f44) |
| **#17** | [Daglicht](#pc-regel-17) | `CHECK_DAYLIGHT` | [F00](#f00), [F01](#f01), [F05](#f05), [F13](#f13), [F19](#f19), [F20](#f20), [F21](#f21), [F22](#f22), [F24](#f24), [F25](#f25), [F29](#f29), [F36](#f36), [F38](#f38), [F40](#f40) |

---

## Pseudocode per check {#pc-checks}

### 01 — Gebruiksfunctie komt overeen met bestemming ("Wonen") {#pc-regel-1}

| | |
|---|---|
| **Regel-ID** | `BM13-R01` |
| **Procedure** | `CHECK_BESTEMMING` |
| **Functies** | [F00](#f00), [F01](#f01), [F07](#f07), [F08](#f08), [F10](#f10), [F13](#f13), [F14](#f14), [F16](#f16), [F19](#f19), [F20](#f20), [F21](#f21), [F22](#f22), [F23](#f23) |
| **Interpretatie** | [[[#regel-1]]] |

<pre class="nohighlight pseudocode">
PROCEDURE CHECK_BESTEMMING(application):

    // Step 1 — Model and IDS check
    location =
        GET_APPLICATION_LOCATION(application)                    // <a href="#f19">F19</a>

    bim_model =
        GET_SUBMITTED_BIM_MODEL(application)                     // <a href="#f20">F20</a>

    IF bim_model is missing:
        RETURN INSUFFICIENT_DATA

    data_check =
        CHECK_MINIMUM_REQUIREMENTS(bim_model, "MR-R01")          // <a href="#f00">F00</a>: IDS of check #1

    IF data_check.status = INSUFFICIENT_DATA:
        RETURN INSUFFICIENT_DATA WITH { data_check.failed }

    // Step 2 — Georeferencing
    georeference =
        GET_BIM_GEOREFERENCE(bim_model)                          // <a href="#f01">F01</a>

    IF georeference is missing:
        RETURN INSUFFICIENT_DATA

    georeference_check =
        VALIDATE_GEOREFERENCE(bim_model, georeference, location) // <a href="#f21">F21</a>

    IF georeference_check.status = INSUFFICIENT_DATA:
        RETURN INSUFFICIENT_DATA WITH { georeference_check.checks }

    // Step 3 — Intended use
    use_functions =
        GET_USE_FUNCTIONS(bim_model)                             // <a href="#f13">F13</a>

    checked_uses =
        GET_PARAMETER("BM13-R01", "checkedUses")                 // <a href="#f23">F23</a>

    IF no use in use_functions is in checked_uses:
        RETURN NOT_APPLICABLE

    // Step 4 — Designation zones of the rule
    designation_zones =
        the zones of rule BM13-R01, each with its value constraint
        "designation"                                            // defined in the rule, DR-GEO-01

    // Step 5 — Allowed area
    allowed_designations =
        GET_PARAMETER("BM13-R01", "allowedDesignations")         // <a href="#f23">F23</a>

    allowed_zones =
        the designation_zones whose designation is in allowed_designations

    IF allowed_zones is empty:
        RETURN NON_COMPLIANT WITH { designation_zones }

    allowed_area =
        UNION_AREAS(allowed_zones)                               // <a href="#f14">F14</a>, DER-12

    // Step 6 — Determine which BIM geometry counts
    building =
        GET_BUILDING_GEOMETRY(bim_model, georeference)           // <a href="#f22">F22</a>

    relevant_geometry =
        FILTER_RELEVANT_GEOMETRY(
            building,
            interpretation = GET_PARAMETER("BM13-R01", "elementProfile")
        )                                                        // <a href="#f10">F10</a>

    // Steps 7 and 8 — Footprint and comparison
    tolerance =
        GET_PARAMETER("BM13-R01", "boundaryTolerance")           // <a href="#f23">F23</a>

    parts_outside = empty list

    FOR EACH part IN relevant_geometry.elements:

        footprint =
            PROJECT_TO_2D(part)                                  // <a href="#f07">F07</a>, DER-10

        relation =
            TOPOLOGICAL_RELATION(footprint, allowed_area, tolerance)   // <a href="#f08">F08</a>, DER-13

        IF relation is not WITHIN, COVERED_BY or EQUALS:
            parts_outside ADD {
                part.GlobalId,
                relation,
                MEASURE_OUTSIDE(footprint, allowed_area)         // <a href="#f16">F16</a>
            }

    // Step 9 — Report result and evidence
    overlap_policy =
        GET_PARAMETER("BM13-R01", "partialOverlapPolicy")        // <a href="#f23">F23</a>

    IF parts_outside is not empty:

        IF overlap_policy = REVIEW AND every relation in parts_outside is OVERLAPS:
            RETURN REVIEW_REQUIRED WITH { parts_outside, allowed_area.sourceIds }

        RETURN NON_COMPLIANT WITH { parts_outside, allowed_area.sourceIds }

    IF relevant_geometry.unresolved is not empty:
        RETURN REVIEW_REQUIRED WITH { relevant_geometry.unresolved, allowed_area.sourceIds }

    RETURN COMPLIANT WITH { allowed_area.sourceIds, data_check.warnings }
</pre>

### 02 — Maximale bouwhoogte {#pc-regel-2}

| | |
|---|---|
| **Regel-ID** | `BM13-R02` |
| **Procedure** | `CHECK_MAXIMUM_BUILDING_HEIGHT` |
| **Functies** | [F00](#f00), [F01](#f01), [F10](#f10), [F11](#f11), [F12](#f12), [F15](#f15), [F19](#f19), [F20](#f20), [F21](#f21), [F22](#f22), [F23](#f23) |
| **Interpretatie** | [[[#regel-2]]] |

<pre class="nohighlight pseudocode">
PROCEDURE CHECK_MAXIMUM_BUILDING_HEIGHT(application):

    // Step 1 — Model and IDS check
    location =
        GET_APPLICATION_LOCATION(application)                    // <a href="#f19">F19</a>

    bim_model =
        GET_SUBMITTED_BIM_MODEL(application)                     // <a href="#f20">F20</a>

    IF bim_model is missing:
        RETURN INSUFFICIENT_DATA

    data_check =
        CHECK_MINIMUM_REQUIREMENTS(bim_model, "MR-R02")          // <a href="#f00">F00</a>: IDS of check #2

    IF data_check.status = INSUFFICIENT_DATA:
        RETURN INSUFFICIENT_DATA WITH { data_check.failed }

    // Step 2 — Georeferencing
    georeference =
        GET_BIM_GEOREFERENCE(bim_model)                          // <a href="#f01">F01</a>

    IF georeference is missing:
        RETURN INSUFFICIENT_DATA

    georeference_check =
        VALIDATE_GEOREFERENCE(bim_model, georeference, location) // <a href="#f21">F21</a>

    IF georeference_check.status = INSUFFICIENT_DATA:
        RETURN INSUFFICIENT_DATA WITH { georeference_check.checks }

    building =
        GET_BUILDING_GEOMETRY(bim_model, georeference)           // <a href="#f22">F22</a>: RD New, m NAP

    // Step 6 — Determine which BIM geometry counts
    relevant_geometry =
        FILTER_RELEVANT_GEOMETRY(
            building,
            interpretation = "HEIGHT_RELEVANT"
        )                                                        // <a href="#f10">F10</a>: applies exemptions

    review_reasons = empty list

    IF relevant_geometry.unresolved is not empty:                // interpretation unresolved
        review_reasons ADD relevant_geometry.unresolved

    // Step 3 — Height zones of the rule, each with its value constraints
    height_zones =
        the zones of rule BM13-R02                               // defined in the rule, DR-GEO-03

    results = empty list

    FOR EACH zone IN height_zones:

        geometry_here =
            CLIP_TO_AREA(relevant_geometry.elements, zone.area)  // <a href="#f15">F15</a>

        IF geometry_here is empty:                               // building not in this zone
            CONTINUE

        // Step 4 — Permitted height of this zone
        permitted_height =
            GET_PARAMETER(zone, "maximumHeight")                 // <a href="#f23">F23</a>

        tolerance =
            GET_PARAMETER(zone, "tolerance")                     // <a href="#f23">F23</a>

        // Step 5 — Reference level of this zone
        reference_level =
            GET_REFERENCE_LEVEL(zone, building)                  // <a href="#f11">F11</a>, DER-02
            // method = GET_PARAMETER(zone, "referenceLevelMethod"):
            //   AVERAGE_ROAD_ELEVATION  or  DESIGN_ELEVATION

        IF reference_level.status = INSUFFICIENT_DATA:
            RETURN INSUFFICIENT_DATA WITH { zone.id, reference_level.reason }

        IF reference_level.status = REVIEW_REQUIRED:
            review_reasons ADD { zone.id, reference_level.reason }

        // Step 6 — Highest relevant point in this zone
        highest_point =
            MAX_Z(geometry_here)                                 // <a href="#f12">F12</a>, DER-04

        // Step 7 — Building height
        measured_height =
            highest_point.z - reference_level.value              // DER-03

        // Step 8 — Compare
        IF measured_height &lt;= permitted_height + tolerance:
            results ADD { zone.id, COMPLIANT,
                          measured_height, permitted_height, tolerance,
                          reference_level, highest_point }
        ELSE:
            results ADD { zone.id, NON_COMPLIANT,
                          measured_height, permitted_height, tolerance,
                          reference_level, highest_point }

    IF results is empty:                                         // building lies in no height zone
        RETURN NOT_APPLICABLE

    // Step 9 — Report result and evidence
    IF any result in results is NON_COMPLIANT:
        RETURN NON_COMPLIANT WITH { results, review_reasons, data_check.warnings }

    IF review_reasons is not empty:
        RETURN REVIEW_REQUIRED WITH { results, review_reasons, data_check.warnings }

    RETURN COMPLIANT WITH { results, data_check.warnings }
</pre>

### 03 — Maximaal bebouwingspercentage {#pc-regel-3}

| | |
|---|---|
| **Regel-ID** | `BM13-R03` |
| **Procedure** | `CHECK_BUILDING_COVERAGE` |
| **Functies** | [F00](#f00), [F01](#f01), [F05](#f05), [F07](#f07), [F10](#f10), [F14](#f14), [F19](#f19), [F20](#f20), [F21](#f21), [F22](#f22), [F23](#f23), [F25](#f25), [F26](#f26), [F30](#f30) |
| **Interpretatie** | [[[#regel-3]]] |

<pre class="nohighlight pseudocode">
PROCEDURE CHECK_BUILDING_COVERAGE(application):

    // Step 1 — Model and IDS check
    location   = GET_APPLICATION_LOCATION(application)                 // <a href="#f19">F19</a>
    bim_model  = GET_SUBMITTED_BIM_MODEL(application)                  // <a href="#f20">F20</a>
    IF bim_model is missing:
        RETURN INSUFFICIENT_DATA
    data_check = CHECK_MINIMUM_REQUIREMENTS(bim_model, "MR-R03")       // <a href="#f00">F00</a>
    IF data_check.status = INSUFFICIENT_DATA:
        RETURN INSUFFICIENT_DATA WITH { data_check.failed }

    // Step 2 — Georeferencing
    georeference = GET_BIM_GEOREFERENCE(bim_model)                     // <a href="#f01">F01</a>
    IF georeference is missing
       OR VALIDATE_GEOREFERENCE(bim_model, georeference, location).status = INSUFFICIENT_DATA:   // <a href="#f21">F21</a>
        RETURN INSUFFICIENT_DATA

    // Step 5 — Footprint of the new building
    building      = GET_BUILDING_GEOMETRY(bim_model, georeference)     // <a href="#f22">F22</a>
    relevant      = FILTER_RELEVANT_GEOMETRY(building, "COVERAGE_RELEVANT")   // <a href="#f10">F10</a>
    new_footprint = UNION_AREAS(PROJECT_TO_2D(part) FOR EACH part IN relevant.elements)   // <a href="#f07">F07</a>, <a href="#f14">F14</a>, DER-31

    // Step 6 — Footprints of existing buildings that remain
    existing      = GET_PDOK_FEATURES("Buildings", location)           // <a href="#f05">F05</a>
    demolished    = GET_APPLICATION_DATA(application, "buildingsToDemolish")   // <a href="#f30">F30</a>
    existing_footprint = UNION_AREAS(existing WITHOUT demolished)      // <a href="#f14">F14</a>, DER-32

    // Step 3 — Coverage zones of the rule, each with its value constraints
    coverage_zones = the zones of rule BM13-R03                        // defined in the rule, DR-GEO-09

    review_reasons = empty list
    results        = empty list

    FOR EACH zone IN coverage_zones:

        IF INTERSECT_AREAS(zone.area, new_footprint) is empty:         // <a href="#f26">F26</a>: building not in this zone
            CONTINUE

        permitted = GET_PARAMETER(zone, "maximumCoverage")             // <a href="#f23">F23</a>, %
        tolerance = GET_PARAMETER(zone, "tolerance")                   // <a href="#f23">F23</a>, % points

        // Step 4 — Reference area of this zone
        reference_type = GET_PARAMETER(zone, "referenceArea")          // PARCEL, BUILDING_PLANE or ZONE
        IF reference_type = PARCEL:
            reference_area = UNION_AREAS(GET_PDOK_FEATURES("Parcels", location))   // <a href="#f05">F05</a>, <a href="#f14">F14</a>
        ELSE IF reference_type = BUILDING_PLANE:
            reference_area = UNION_AREAS(the building-plane zones of the rule)     // <a href="#f14">F14</a>
        ELSE:
            reference_area = zone.area                                 // DER-30

        // Step 7 — Built-up area inside the reference area
        built_up      = INTERSECT_AREAS(UNION_AREAS(new_footprint, existing_footprint),
                                        reference_area)                // <a href="#f14">F14</a>, <a href="#f26">F26</a>
        built_area    = CALCULATE_AREA(built_up, "PROJECTED")          // <a href="#f25">F25</a>, DER-33
        reference_m2  = CALCULATE_AREA(reference_area, "PROJECTED")    // <a href="#f25">F25</a>
        IF built_area.status = REVIEW_REQUIRED:
            review_reasons ADD built_area.deviation

        // Step 8 — Coverage and comparison
        coverage = built_area.value / reference_m2.value × 100         // DER-34
        IF coverage &lt;= permitted + tolerance:
            results ADD { zone.id, COMPLIANT, coverage, permitted, built_area, reference_m2 }
        ELSE:
            results ADD { zone.id, NON_COMPLIANT, coverage, permitted, built_area, reference_m2 }

    IF results is empty:                                               // building lies in no coverage zone
        RETURN NOT_APPLICABLE

    // Step 9 — Report result and evidence
    IF any result in results is NON_COMPLIANT:
        RETURN NON_COMPLIANT WITH { results, review_reasons, data_check.warnings }
    IF review_reasons is not empty:
        RETURN REVIEW_REQUIRED WITH { results, review_reasons, data_check.warnings }
    RETURN COMPLIANT WITH { results, data_check.warnings }
</pre>

### 04 — Gebruiksfunctie beperkt tot x bouwlagen {#pc-regel-4}

| | |
|---|---|
| **Regel-ID** | `BM13-R04` |
| **Procedure** | `CHECK_USE_FUNCTION_STOREYS` |
| **Functies** | [F00](#f00), [F08](#f08), [F19](#f19), [F20](#f20), [F23](#f23), [F24](#f24), [F27](#f27) |
| **Interpretatie** | [[[#regel-4]]] |

<pre class="nohighlight pseudocode">
PROCEDURE CHECK_USE_FUNCTION_STOREYS(application):

    // Step 1 — Model and IDS check
    location   = GET_APPLICATION_LOCATION(application)                 // <a href="#f19">F19</a>
    bim_model  = GET_SUBMITTED_BIM_MODEL(application)                  // <a href="#f20">F20</a>
    IF bim_model is missing:
        RETURN INSUFFICIENT_DATA
    data_check = CHECK_MINIMUM_REQUIREMENTS(bim_model, "MR-R04")       // <a href="#f00">F00</a>
    IF data_check.status = INSUFFICIENT_DATA:
        RETURN INSUFFICIENT_DATA WITH { data_check.failed }

    // Step 2 — Zones of the rule at the location, each with its storey restriction
    zones_here = the zones of rule BM13-R04 whose area contains location.point   // <a href="#f08">F08</a>, DR-GEO-09
    IF zones_here is empty:
        RETURN NOT_APPLICABLE

    review_reasons = empty list
    IF COUNT(zones_here) &gt; 1:
        review_reasons ADD "location lies in more than one zone"

    // Steps 3 and 4 — Use functions and storeys
    use_zones = GET_ZONES(bim_model, "Gebruiksfunctie")
                + GET_ZONES(bim_model, "Nevengebruiksfunctie")         // <a href="#f24">F24</a>
    storeys   = COUNT_STOREYS(bim_model,
                    definition     = GET_PARAMETER("BM13-R04", "storeyDefinition"),   // <a href="#f23">F23</a>
                    referenceLevel = "ENTRANCE_LEVEL")                  // <a href="#f27">F27</a>, DER-41
    IF storeys.status = REVIEW_REQUIRED:
        review_reasons ADD storeys.reason

    // Step 5 — Compare per use function
    results = empty list
    FOR EACH zone IN zones_here:
        use          = GET_PARAMETER(zone, "useFunction")              // <a href="#f23">F23</a>, e.g. "Woonfunctie"
        zones_of_use = the use_zones whose name is use
        storeys_used = the storey numbers of zones_of_use              // DER-40

        IF zone has "maxStoreys":
            allowed_ok = COUNT(storeys_used) &lt;= GET_PARAMETER(zone, "maxStoreys")
        ELSE:
            lowest  = GET_PARAMETER(zone, "lowestStorey")              // e.g. 1 = first floor
            highest = GET_PARAMETER(zone, "highestStorey")             // e.g. 0 = ground floor
            allowed_ok = every storey in storeys_used is between lowest and highest

        IF allowed_ok:
            results ADD { zone.id, COMPLIANT, use, storeys_used }
        ELSE:
            results ADD { zone.id, NON_COMPLIANT, use, storeys_used, zones_of_use }

    // Step 6 — Report result and evidence
    IF any result in results is NON_COMPLIANT:
        RETURN NON_COMPLIANT WITH { results, review_reasons, data_check.warnings }
    IF review_reasons is not empty:
        RETURN REVIEW_REQUIRED WITH { results, review_reasons, data_check.warnings }
    RETURN COMPLIANT WITH { results, data_check.warnings }
</pre>

### 05 — Beroep aan huis: maximaal aandeel gebruiksoppervlakte {#pc-regel-5}

| | |
|---|---|
| **Regel-ID** | `BM13-R05` |
| **Procedure** | `CHECK_HOME_BUSINESS_SHARE` |
| **Functies** | [F00](#f00), [F01](#f01), [F08](#f08), [F19](#f19), [F20](#f20), [F21](#f21), [F23](#f23), [F24](#f24), [F25](#f25), [F30](#f30) |
| **Interpretatie** | [[[#regel-5]]] |

<pre class="nohighlight pseudocode">
PROCEDURE CHECK_HOME_BUSINESS_SHARE(application):

    // Step 1 — Model and IDS check
    location   = GET_APPLICATION_LOCATION(application)                 // <a href="#f19">F19</a>
    bim_model  = GET_SUBMITTED_BIM_MODEL(application)                  // <a href="#f20">F20</a>
    IF bim_model is missing:
        RETURN INSUFFICIENT_DATA
    data_check = CHECK_MINIMUM_REQUIREMENTS(bim_model, "MR-R05")       // <a href="#f00">F00</a>
    IF data_check.status = INSUFFICIENT_DATA:
        RETURN INSUFFICIENT_DATA WITH { data_check.failed }

    // Step 2 — Georeferencing
    georeference = GET_BIM_GEOREFERENCE(bim_model)                     // <a href="#f01">F01</a>
    IF georeference is missing
       OR VALIDATE_GEOREFERENCE(bim_model, georeference, location).status = INSUFFICIENT_DATA:   // <a href="#f21">F21</a>
        RETURN INSUFFICIENT_DATA

    // Step 5 — Residential and business zones
    residential = the zones of GET_ZONES(bim_model, "Gebruiksfunctie") named "Woonfunctie"   // <a href="#f24">F24</a>
    business    = GET_ZONES(bim_model, "Nevengebruiksfunctie")         // <a href="#f24">F24</a>
    IF business is empty:
        RETURN NOT_APPLICABLE                                          // no home business applied for

    review_reasons = empty list

    // Step 3 — Qualify the activity
    sbi_code   = GET_APPLICATION_DATA(application, "sbiCode")          // <a href="#f30">F30</a>
    qualifying = GET_PARAMETER("BM13-R05", "qualifyingSbiCodes")       // <a href="#f23">F23</a>
    IF sbi_code is missing:
        review_reasons ADD "activity could not be qualified"
    ELSE IF sbi_code is not in qualifying:
        RETURN NON_COMPLIANT WITH { sbi_code, "activity is not a home-based business" }

    // Step 4 — Home-business zone of the rule at the location, with its value constraints
    zones_here = the zones of rule BM13-R05 whose area contains location.point   // <a href="#f08">F08</a>, DR-GEO-09
    IF zones_here is empty:
        RETURN NOT_APPLICABLE
    zone          = zones_here[1]
    permitted     = GET_PARAMETER(zone, "maximumShare")                // <a href="#f23">F23</a>, %
    permitted_m2  = GET_PARAMETER(zone, "maximumArea")                 // <a href="#f23">F23</a>, may be empty

    // Step 6 — Usable floor areas (NEN 2580)
    business_go    = SUM OF CALCULATE_AREA(zone, "NEN2580_GO") FOR EACH zone IN business      // <a href="#f25">F25</a>, DER-50
    residential_go = SUM OF CALCULATE_AREA(zone, "NEN2580_GO") FOR EACH zone IN residential   // <a href="#f25">F25</a>, DER-51
    IF any area calculation returned REVIEW_REQUIRED:
        review_reasons ADD "delivered and recalculated areas differ"

    // Step 7 — Unnamed spaces
    unnamed = GET_ZONES(bim_model, "Restruimte") + GET_ZONES(bim_model, "Restgebied")   // <a href="#f24">F24</a>
    IF unnamed is not empty:
        review_reasons ADD { "unnamed spaces present", unnamed }

    // Step 8 — Share and comparison
    share = business_go / residential_go × 100                          // DER-52
    IF share &gt; permitted OR (permitted_m2 is set AND business_go &gt; permitted_m2):
        RETURN NON_COMPLIANT WITH { share, permitted, business_go, permitted_m2, business }

    // Step 9 — Report result and evidence
    IF review_reasons is not empty:
        RETURN REVIEW_REQUIRED WITH { share, permitted, business_go, review_reasons, data_check.warnings }
    RETURN COMPLIANT WITH { share, permitted, business_go, residential_go, data_check.warnings }
</pre>

### 06 — Maximum aantal bouwlagen {#pc-regel-6}

| | |
|---|---|
| **Regel-ID** | `BM13-R06` |
| **Procedure** | `CHECK_MAXIMUM_STOREYS` |
| **Functies** | [F00](#f00), [F01](#f01), [F08](#f08), [F11](#f11), [F19](#f19), [F20](#f20), [F21](#f21), [F22](#f22), [F23](#f23), [F27](#f27) |
| **Interpretatie** | [[[#regel-6]]] |

<pre class="nohighlight pseudocode">
PROCEDURE CHECK_MAXIMUM_STOREYS(application):

    // Step 1 — Model and IDS check
    location   = GET_APPLICATION_LOCATION(application)                 // <a href="#f19">F19</a>
    bim_model  = GET_SUBMITTED_BIM_MODEL(application)                  // <a href="#f20">F20</a>
    IF bim_model is missing:
        RETURN INSUFFICIENT_DATA
    data_check = CHECK_MINIMUM_REQUIREMENTS(bim_model, "MR-R06")       // <a href="#f00">F00</a>
    IF data_check.status = INSUFFICIENT_DATA:
        RETURN INSUFFICIENT_DATA WITH { data_check.failed }

    // Step 2 — Zones of the rule at the location, each with its value constraints
    zones_here = the zones of rule BM13-R06 whose area contains location.point   // <a href="#f08">F08</a>, DR-GEO-09
    IF zones_here is empty:
        RETURN NOT_APPLICABLE                                          // no maximum = done

    review_reasons = empty list
    results        = empty list

    FOR EACH zone IN zones_here:

        // Step 3 — Reference level with the zone's method
        method = GET_PARAMETER(zone, "referenceLevelMethod")           // <a href="#f23">F23</a>
        IF method = AVERAGE_ROAD_ELEVATION:
            georeference = GET_BIM_GEOREFERENCE(bim_model)             // <a href="#f01">F01</a>
            IF georeference is missing
               OR VALIDATE_GEOREFERENCE(bim_model, georeference, location).status = INSUFFICIENT_DATA:   // <a href="#f21">F21</a>
                RETURN INSUFFICIENT_DATA WITH { zone.id, "method 1 needs georeferencing" }
            building = GET_BUILDING_GEOMETRY(bim_model, georeference)  // <a href="#f22">F22</a>
        ELSE:                                                          // DESIGN_ELEVATION
            building = GET_BUILDING_GEOMETRY(bim_model, NONE)          // <a href="#f22">F22</a>

        reference_level = GET_REFERENCE_LEVEL(zone, building)          // <a href="#f11">F11</a>, DER-60
        IF reference_level.status = INSUFFICIENT_DATA:
            RETURN INSUFFICIENT_DATA WITH { zone.id, reference_level.reason }
        IF reference_level.status = REVIEW_REQUIRED:
            review_reasons ADD { zone.id, reference_level.reason }

        // Step 4 — Count the storeys
        storeys = COUNT_STOREYS(bim_model,
                      definition     = GET_PARAMETER("BM13-R06", "storeyDefinition"),   // <a href="#f23">F23</a>
                      referenceLevel = reference_level)                 // <a href="#f27">F27</a>, DER-61
        IF storeys.status = REVIEW_REQUIRED:
            review_reasons ADD storeys.reason                          // e.g. attic cannot be classified

        // Step 5 — Compare
        permitted = GET_PARAMETER(zone, "maximumStoreys")              // <a href="#f23">F23</a>
        IF storeys.count &lt;= permitted:
            results ADD { zone.id, COMPLIANT, storeys.count, permitted, storeys.storeys }
        ELSE:
            results ADD { zone.id, NON_COMPLIANT, storeys.count, permitted, storeys.storeys }

    // Step 6 — Report result and evidence
    IF any result in results is NON_COMPLIANT:
        RETURN NON_COMPLIANT WITH { results, review_reasons, data_check.warnings }
    IF review_reasons is not empty:
        RETURN REVIEW_REQUIRED WITH { results, review_reasons, data_check.warnings }
    RETURN COMPLIANT WITH { results, data_check.warnings }
</pre>

### 07 — Brandcompartimenten {#pc-regel-7}

| | |
|---|---|
| **Regel-ID** | `BM13-R07` |
| **Procedure** | `CHECK_FIRE_COMPARTMENTS` |
| **Functies** | [F00](#f00), [F01](#f01), [F05](#f05), [F13](#f13), [F14](#f14), [F19](#f19), [F20](#f20), [F21](#f21), [F22](#f22), [F24](#f24), [F25](#f25), [F26](#f26), [F29](#f29), [F38](#f38), [F41](#f41), [F43](#f43) |
| **Interpretatie** | [[[#regel-7]]] |

<pre class="nohighlight pseudocode">
PROCEDURE CHECK_FIRE_COMPARTMENTS(application):

    // Step 1 — Model and IDS check
    location   = GET_APPLICATION_LOCATION(application)                 // <a href="#f19">F19</a>
    bim_model  = GET_SUBMITTED_BIM_MODEL(application)                  // <a href="#f20">F20</a>
    IF bim_model is missing:
        RETURN INSUFFICIENT_DATA
    data_check = CHECK_MINIMUM_REQUIREMENTS(bim_model, "MR-R07")       // <a href="#f00">F00</a>
    IF data_check.status = INSUFFICIENT_DATA:
        RETURN INSUFFICIENT_DATA WITH { data_check.failed }

    // Step 2 — Georeferencing
    georeference = GET_BIM_GEOREFERENCE(bim_model)                     // <a href="#f01">F01</a>
    IF georeference is missing
       OR VALIDATE_GEOREFERENCE(bim_model, georeference, location).status = INSUFFICIENT_DATA:   // <a href="#f21">F21</a>
        RETURN INSUFFICIENT_DATA

    // Step 3 — Bbl lookup
    use_function = main use function of GET_USE_FUNCTIONS(bim_model)  // <a href="#f13">F13</a>
    date         = application date
    max_go       = GET_BBL_REQUIREMENT("4.49", use_function, "maximumCompartmentArea", date)   // <a href="#f29">F29</a>
    wbdbo_req    = GET_BBL_REQUIREMENT("4.49", use_function, "minimumWBDBO", date)            // <a href="#f29">F29</a>
    IF max_go = NOT_APPLICABLE AND wbdbo_req = NOT_APPLICABLE:
        RETURN NOT_APPLICABLE

    results        = empty list
    review_reasons = empty list

    // Step 4 — Every use-function area inside a compartment
    compartments = GET_ZONES(bim_model, "Brandcompartiment")           // <a href="#f24">F24</a>
    use_zones    = GET_ZONES(bim_model, "Gebruiksfunctie")             // <a href="#f24">F24</a>
    uncovered    = UNION_AREAS(use_zones) outside UNION_AREAS(compartments)   // <a href="#f14">F14</a>, <a href="#f26">F26</a>, DER-70
    IF uncovered is not empty:
        results ADD { NON_COMPLIANT, "area outside any fire compartment", uncovered }

    // Step 5 — Compartment size
    FOR EACH compartment IN compartments:
        go = CALCULATE_AREA(compartment, "NEN2580_GO")                 // <a href="#f25">F25</a>, DER-71
        IF go.status = REVIEW_REQUIRED:
            review_reasons ADD go.deviation
        IF go.value &gt; max_go.value:
            results ADD { compartment.GlobalId, NON_COMPLIANT, go.value, max_go }
        ELSE:
            results ADD { compartment.GlobalId, COMPLIANT, go.value, max_go }

    // Step 6 — WBDBO between compartments
    FOR EACH pair of adjoining compartments (a, b):
        wbdbo = CALCULATE_WBDBO(a, b)                                  // <a href="#f43">F43</a> (or <a href="#f41">F41</a> "WBDBO"), DER-72
        IF wbdbo.status = REVIEW_REQUIRED:
            review_reasons ADD { a, b, wbdbo.reason }
        ELSE IF wbdbo.minutes &lt; wbdbo_req.value:
            results ADD { a, b, NON_COMPLIANT, wbdbo.minutes, wbdbo_req }

    // Step 7 — WBDBO to the mirrored building and to other buildings on the plot
    building  = GET_BUILDING_GEOMETRY(bim_model, georeference)         // <a href="#f22">F22</a>
    mirrored  = MIRROR_AT_BOUNDARY(building, parcel boundary or centre line)   // <a href="#f38">F38</a>
    neighbours = GET_PDOK_FEATURES("Buildings", location) on the same parcel   // <a href="#f05">F05</a>
    FOR EACH target IN { mirrored } + neighbours:
        FOR EACH compartment IN compartments:
            wbdbo = CALCULATE_WBDBO(compartment, target)               // <a href="#f43">F43</a> (or <a href="#f41">F41</a>), DER-73
            IF wbdbo.minutes &lt; wbdbo_req.value:
                results ADD { compartment, target, NON_COMPLIANT, wbdbo.minutes, wbdbo_req }

    // Step 8 — Equivalence
    equivalence = GET_EXTERNAL_CALCULATION(application, "EQUIVALENCE") // <a href="#f41">F41</a>
    IF equivalence is supplied:
        review_reasons ADD { "equivalent solution claimed", equivalence }

    // Step 9 — Report result and evidence
    IF any result in results is NON_COMPLIANT AND equivalence is not supplied:
        RETURN NON_COMPLIANT WITH { results, review_reasons, data_check.warnings }
    IF review_reasons is not empty OR any result in results is NON_COMPLIANT:
        RETURN REVIEW_REQUIRED WITH { results, review_reasons, data_check.warnings }
    RETURN COMPLIANT WITH { results, data_check.warnings }
</pre>

### 08 — Brandwerendheid {#pc-regel-8}

| | |
|---|---|
| **Regel-ID** | `BM13-R08` |
| **Procedure** | `CHECK_FIRE_RESISTANCE` |
| **Functies** | [F00](#f00), [F13](#f13), [F19](#f19), [F20](#f20), [F23](#f23), [F24](#f24), [F25](#f25), [F28](#f28), [F29](#f29), [F36](#f36), [F37](#f37) |
| **Interpretatie** | [[[#regel-8]]] |

<pre class="nohighlight pseudocode">
PROCEDURE CHECK_FIRE_RESISTANCE(application):

    // Step 1 — Model and IDS check
    location   = GET_APPLICATION_LOCATION(application)                 // <a href="#f19">F19</a>, for the report
    bim_model  = GET_SUBMITTED_BIM_MODEL(application)                  // <a href="#f20">F20</a>
    IF bim_model is missing:
        RETURN INSUFFICIENT_DATA
    data_check = CHECK_MINIMUM_REQUIREMENTS(bim_model, "MR-R08")       // <a href="#f00">F00</a>
    IF data_check.status = INSUFFICIENT_DATA:
        RETURN INSUFFICIENT_DATA WITH { data_check.failed }

    // Step 2 — Bbl lookup
    use_function = main use function of GET_USE_FUNCTIONS(bim_model)  // <a href="#f13">F13</a>
    required     = GET_BBL_REQUIREMENT("4.49", use_function,
                       "fireResistanceOfSeparation", application date) // <a href="#f29">F29</a>: criteria + minutes
    IF required = NOT_APPLICABLE:
        RETURN NOT_APPLICABLE

    // Step 3 — Scope exemption
    IF the model matches GET_PARAMETER("BM13-R08", "exemptWhen"):      // <a href="#f23">F23</a>, <a href="#f24">F24</a>, <a href="#f25">F25</a>
        RETURN NOT_APPLICABLE

    results        = empty list
    review_reasons = empty list

    // Steps 4 and 5 — Compartments and their separating elements
    FOR EACH compartment IN GET_ZONES(bim_model, "Brandcompartiment"): // <a href="#f24">F24</a>
        enclosure = GET_ENCLOSING_ELEMENTS(compartment)                // <a href="#f36">F36</a>, DER-80
        IF enclosure.status = REVIEW_REQUIRED:
            review_reasons ADD { compartment, "gaps in the enclosure" }

        FOR EACH (element, behind) IN enclosure.elements:
            IF behind is not "other fire compartment" and not "outside air":
                CONTINUE

            // Step 6 — Fire rating
            rating = PARSE_FIRE_RATING(GET_PROPERTY(element, "FireRating"))   // <a href="#f28">F28</a>, <a href="#f37">F37</a>, DER-81
            IF rating.status = REVIEW_REQUIRED:
                review_reasons ADD { element.GlobalId, "fire rating not readable" }
                CONTINUE

            // Step 7 — Compare
            IF rating.criteria contain required.criteria AND rating.minutes &gt;= required.minutes:
                results ADD { element.GlobalId, COMPLIANT, rating, required }
            ELSE:
                results ADD { element.GlobalId, NON_COMPLIANT, rating, required, compartment }

    // Step 8 — Report result and evidence
    IF any result in results is NON_COMPLIANT:
        RETURN NON_COMPLIANT WITH { results, review_reasons, data_check.warnings }
    IF review_reasons is not empty:
        RETURN REVIEW_REQUIRED WITH { results, review_reasons, data_check.warnings }
    RETURN COMPLIANT WITH { results, data_check.warnings }
</pre>

### 09 — Vrije breedte {#pc-regel-9}

| | |
|---|---|
| **Regel-ID** | `BM13-R09` |
| **Procedure** | `CHECK_CLEAR_WIDTH` |
| **Functies** | [F00](#f00), [F13](#f13), [F19](#f19), [F20](#f20), [F22](#f22), [F24](#f24), [F25](#f25), [F29](#f29), [F31](#f31), [F33](#f33), [F34](#f34) |
| **Interpretatie** | [[[#regel-9]]] |

<pre class="nohighlight pseudocode">
PROCEDURE CHECK_CLEAR_WIDTH(application):

    // Step 1 — Model and IDS check
    location   = GET_APPLICATION_LOCATION(application)                 // <a href="#f19">F19</a>, for the report
    bim_model  = GET_SUBMITTED_BIM_MODEL(application)                  // <a href="#f20">F20</a>
    IF bim_model is missing:
        RETURN INSUFFICIENT_DATA
    data_check = CHECK_MINIMUM_REQUIREMENTS(bim_model, "MR-R09")       // <a href="#f00">F00</a>
    IF data_check.status = INSUFFICIENT_DATA:
        RETURN INSUFFICIENT_DATA WITH { data_check.failed }

    // Step 2 — Bbl lookup
    use_function = main use function of GET_USE_FUNCTIONS(bim_model)  // <a href="#f13">F13</a>
    date         = application date
    min_width    = GET_BBL_REQUIREMENT("4.176", use_function, "clearWidth", date)    // <a href="#f29">F29</a>
    min_height   = GET_BBL_REQUIREMENT("4.176", use_function, "clearHeight", date)   // <a href="#f29">F29</a>
    lift_req     = GET_BBL_REQUIREMENT("4.176", use_function, "liftDimensions", date) // <a href="#f29">F29</a>
    spaces_to_reach = GET_BBL_REQUIREMENT("4.176", use_function, "spacesToReach", date)

    // Steps 3 and 4 — Spaces and lifts
    targets  = GET_ZONES(bim_model, each type in spaces_to_reach)      // <a href="#f24">F24</a>
    building = GET_BUILDING_GEOMETRY(bim_model, NONE)                  // <a href="#f22">F22</a>, local coordinates
    lifts    = the elements of building of class IfcTransportElement.ELEVATOR

    // Step 5 — Traffic routes
    network = BUILD_ROUTE_NETWORK(bim_model, "ACCESS")                  // <a href="#f33">F33</a>
    access  = the space with the main entrance (entrance level, ILS-9.06a)

    results        = empty list
    review_reasons = empty list
    IF network.status = REVIEW_REQUIRED:
        review_reasons ADD network.reason

    FOR EACH target IN targets:
        route = FIND_ROUTE(network, access, target)                    // <a href="#f34">F34</a>, DER-90
        IF route is empty:
            results ADD { target.GlobalId, NON_COMPLIANT, "space not reachable" }
            CONTINUE

        // Step 6 — Clear dimensions on the route
        FOR EACH passage IN route.elementsPassed:
            size = MEASURE_CLEAR_DIMENSIONS(passage)                   // <a href="#f31">F31</a>, DER-91
            IF size.status = REVIEW_REQUIRED:
                review_reasons ADD { passage.GlobalId, "not measurable" }
            ELSE IF size.clearWidth &lt; min_width.value OR size.clearHeight &lt; min_height.value:
                results ADD { passage.GlobalId, NON_COMPLIANT, size, min_width, min_height }
            ELSE:
                results ADD { passage.GlobalId, COMPLIANT, size }

    // Step 7 — Lift
    IF lift_req is not NOT_APPLICABLE:
        IF lifts is empty:
            results ADD { NON_COMPLIANT, "lift required but not present" }
        FOR EACH lift IN lifts:
            lift_width = MEASURE_CLEAR_DIMENSIONS(lift).clearWidth     // <a href="#f31">F31</a>
            lift_area  = CALCULATE_AREA(lift, "PROJECTED")             // <a href="#f25">F25</a>, DER-92
            IF lift_width &lt; lift_req.width OR lift_area.value &lt; lift_req.area:
                results ADD { lift.GlobalId, NON_COMPLIANT, lift_width, lift_area, lift_req }

    // Steps 8 and 9 — Compare and report
    IF any result in results is NON_COMPLIANT:
        RETURN NON_COMPLIANT WITH { results, review_reasons, data_check.warnings }
    IF review_reasons is not empty:
        RETURN REVIEW_REQUIRED WITH { results, review_reasons, data_check.warnings }
    RETURN COMPLIANT WITH { results, data_check.warnings }
</pre>

### 10 — Hoogteverschil {#pc-regel-10}

| | |
|---|---|
| **Regel-ID** | `BM13-R10` |
| **Procedure** | `CHECK_HEIGHT_DIFFERENCE` |
| **Functies** | [F00](#f00), [F01](#f01), [F13](#f13), [F19](#f19), [F20](#f20), [F21](#f21), [F22](#f22), [F24](#f24), [F28](#f28), [F29](#f29), [F31](#f31), [F32](#f32), [F33](#f33), [F34](#f34) |
| **Interpretatie** | [[[#regel-10]]] |

<pre class="nohighlight pseudocode">
PROCEDURE CHECK_HEIGHT_DIFFERENCE(application):

    // Step 1 — Model and IDS check
    location   = GET_APPLICATION_LOCATION(application)                 // <a href="#f19">F19</a>
    bim_model  = GET_SUBMITTED_BIM_MODEL(application)                  // <a href="#f20">F20</a>
    IF bim_model is missing:
        RETURN INSUFFICIENT_DATA
    data_check = CHECK_MINIMUM_REQUIREMENTS(bim_model, "MR-R10")       // <a href="#f00">F00</a>
    IF data_check.status = INSUFFICIENT_DATA:
        RETURN INSUFFICIENT_DATA WITH { data_check.failed }

    // Step 2 — Georeferencing
    georeference = GET_BIM_GEOREFERENCE(bim_model)                     // <a href="#f01">F01</a>
    IF georeference is missing
       OR VALIDATE_GEOREFERENCE(bim_model, georeference, location).status = INSUFFICIENT_DATA:   // <a href="#f21">F21</a>
        RETURN INSUFFICIENT_DATA

    // Step 3 — Bbl lookup (safety and accessibility)
    use_function = main use function of GET_USE_FUNCTIONS(bim_model)  // <a href="#f13">F13</a>
    date         = application date
    safety       = GET_BBL_REQUIREMENT("4.24",  use_function, "heightDifferenceMeans", date)  // <a href="#f29">F29</a>
    access       = GET_BBL_REQUIREMENT("4.179", use_function, "heightDifferenceMeans", date)  // <a href="#f29">F29</a>
    // each gives a list of { threshold, requiredMeans, dimensions }

    // Step 4 — Spaces and routes
    building = GET_BUILDING_GEOMETRY(bim_model, georeference)          // <a href="#f22">F22</a>
    network  = BUILD_ROUTE_NETWORK(bim_model, "ACCESS")                 // <a href="#f33">F33</a>
    entrance = the space with the main entrance (entrance level, ILS-9.06a)
    targets  = GET_ZONES(bim_model, each space type named by safety and access)   // <a href="#f24">F24</a>
    terrain  = "ADJOINING_TERRAIN"                                     // <a href="#f32">F32</a> reads it: DR-GEO-04 or IfcSite

    results        = empty list
    review_reasons = [ "rain protection (NEN 2778) not checked on the model" ]

    FOR EACH target IN targets:
        route = FIND_ROUTE(network, entrance, target)                  // <a href="#f34">F34</a>, DER-100

        // Step 5 — Height differences along the route and to the terrain
        differences = MEASURE_HEIGHT_DIFFERENCE(a, b)
                      FOR EACH consecutive pair (a, b) on route        // <a href="#f32">F32</a>, DER-101
        differences ADD MEASURE_HEIGHT_DIFFERENCE(entrance, terrain)  // <a href="#f32">F32</a>

        FOR EACH difference IN differences:
            FOR EACH requirement IN safety + access:
                IF difference.value &lt;= requirement.threshold:
                    CONTINUE

                // Step 6 — Required means present?
                means = the stairs, ramps, landings or lifts on route at this difference
                IF means does not include requirement.requiredMeans:
                    results ADD { difference, NON_COMPLIANT, "missing " + requirement.requiredMeans }
                    CONTINUE

                // Step 7 — Dimensions of stairs and ramps
                FOR EACH element IN means:
                    riser = GET_PROPERTY(element, "Pset_StairFlightCommon.RiserHeight")   // <a href="#f28">F28</a>
                    tread = GET_PROPERTY(element, "Pset_StairFlightCommon.TreadLength")   // <a href="#f28">F28</a>
                    slope = GET_PROPERTY(element, "Pset_RampFlightCommon.Slope")          // <a href="#f28">F28</a>
                    width = MEASURE_CLEAR_DIMENSIONS(element).clearWidth                 // <a href="#f31">F31</a>, DER-102
                    IF any measured value is outside requirement.dimensions:
                        results ADD { element.GlobalId, NON_COMPLIANT, riser, tread, slope, width }
                    ELSE:
                        results ADD { element.GlobalId, COMPLIANT }

    // Steps 8 and 9 — Compare and report
    IF any result in results is NON_COMPLIANT:
        RETURN NON_COMPLIANT WITH { results, review_reasons, data_check.warnings }
    RETURN REVIEW_REQUIRED WITH { results, review_reasons, data_check.warnings }
</pre>

### 11 — Rc-waarde {#pc-regel-11}

| | |
|---|---|
| **Regel-ID** | `BM13-R11` |
| **Procedure** | `CHECK_RC_VALUE` |
| **Functies** | [F00](#f00), [F13](#f13), [F19](#f19), [F20](#f20), [F24](#f24), [F28](#f28), [F29](#f29), [F36](#f36), [F39](#f39), [F41](#f41) |
| **Interpretatie** | [[[#regel-11]]] |

<pre class="nohighlight pseudocode">
PROCEDURE CHECK_RC_VALUE(application):

    // Step 1 — Model and IDS check
    location   = GET_APPLICATION_LOCATION(application)                 // <a href="#f19">F19</a>, for the report
    bim_model  = GET_SUBMITTED_BIM_MODEL(application)                  // <a href="#f20">F20</a>
    IF bim_model is missing:
        RETURN INSUFFICIENT_DATA
    data_check = CHECK_MINIMUM_REQUIREMENTS(bim_model, "MR-R11")       // <a href="#f00">F00</a>
    IF data_check.status = INSUFFICIENT_DATA:
        RETURN INSUFFICIENT_DATA WITH { data_check.failed }

    // Step 2 — Bbl lookup
    use_function = main use function of GET_USE_FUNCTIONS(bim_model)  // <a href="#f13">F13</a>
    date         = application date

    // Step 6 — Supplied calculation (leading when present)
    beng = GET_EXTERNAL_CALCULATION(application, "BENG")               // <a href="#f41">F41</a>

    results        = empty list
    review_reasons = empty list
    IF beng is not supplied:
        review_reasons ADD "no BENG / NTA 8800 calculation: Rc derived from the model is indicative"

    // Steps 3 and 4 — Areas and their external separations
    zones = GET_ZONES(bim_model, "Verblijfsgebied") + GET_ZONES(bim_model, "Functiegebied")
            + toilets and bathrooms                                     // <a href="#f24">F24</a>
    FOR EACH zone IN zones:
        FOR EACH (element, behind) IN GET_ENCLOSING_ELEMENTS(zone).elements:   // <a href="#f36">F36</a>, DER-110
            IF behind not in { outside air, ground, crawl space, water, unheated space }:
                CONTINUE

            kind     = wall, roof or floor (from the element class and position)
            required = GET_BBL_REQUIREMENT("4.148B", use_function,
                           "Rc/" + kind + "/" + behind, date)          // <a href="#f29">F29</a>

            // Step 5 — Rc of the element
            IF beng is supplied AND beng has an Rc for this construction:
                rc = beng.Rc of this construction
            ELSE:
                rc = DERIVE_RC_FROM_U(GET_PROPERTY(element, "ThermalTransmittance"), kind)  // <a href="#f28">F28</a>, <a href="#f39">F39</a>, DER-111

            // Step 7 — Compare
            IF rc &gt;= required.value:
                results ADD { element.GlobalId, COMPLIANT, rc, required }
            ELSE:
                results ADD { element.GlobalId, NON_COMPLIANT, rc, required, behind }

    // Step 8 — Report result and evidence
    IF any result in results is NON_COMPLIANT:
        RETURN NON_COMPLIANT WITH { results, review_reasons, data_check.warnings }
    IF review_reasons is not empty:
        RETURN REVIEW_REQUIRED WITH { results, review_reasons, data_check.warnings }
    RETURN COMPLIANT WITH { results, data_check.warnings }
</pre>

### 12 — U-waarde {#pc-regel-12}

| | |
|---|---|
| **Regel-ID** | `BM13-R12` |
| **Procedure** | `CHECK_U_VALUE` |
| **Functies** | [F00](#f00), [F13](#f13), [F19](#f19), [F20](#f20), [F24](#f24), [F25](#f25), [F28](#f28), [F29](#f29), [F36](#f36), [F41](#f41) |
| **Interpretatie** | [[[#regel-12]]] |

<pre class="nohighlight pseudocode">
PROCEDURE CHECK_U_VALUE(application):

    // Step 1 — Model and IDS check
    location   = GET_APPLICATION_LOCATION(application)                 // <a href="#f19">F19</a>, for the report
    bim_model  = GET_SUBMITTED_BIM_MODEL(application)                  // <a href="#f20">F20</a>
    IF bim_model is missing:
        RETURN INSUFFICIENT_DATA
    data_check = CHECK_MINIMUM_REQUIREMENTS(bim_model, "MR-R12")       // <a href="#f00">F00</a>
    IF data_check.status = INSUFFICIENT_DATA:
        RETURN INSUFFICIENT_DATA WITH { data_check.failed }

    // Step 2 — Bbl lookup
    use_function = main use function of GET_USE_FUNCTIONS(bim_model)  // <a href="#f13">F13</a>
    date         = application date
    max_average  = GET_BBL_REQUIREMENT("4.148B", use_function, "averageU", date)   // <a href="#f29">F29</a>
    max_single   = GET_BBL_REQUIREMENT("4.148B", use_function, "maximumU", date)   // <a href="#f29">F29</a>
    IF max_average = NOT_APPLICABLE:
        RETURN NOT_APPLICABLE

    beng           = GET_EXTERNAL_CALCULATION(application, "BENG")     // <a href="#f41">F41</a>
    results        = empty list
    review_reasons = empty list

    // Step 3 — Openings in the external vertical separations of heated areas
    heated   = GET_ZONES(bim_model, "Verblijfsgebied") + GET_ZONES(bim_model, "Functiegebied")   // <a href="#f24">F24</a>
    openings = empty list
    FOR EACH zone IN heated:
        FOR EACH (element, behind) IN GET_ENCLOSING_ELEMENTS(zone).elements:   // <a href="#f36">F36</a>
            IF element is a window, door or curtain wall
               AND element is vertical
               AND behind in { outside air, unheated space }:
                openings ADD element                                   // DER-120 (each element once)

    IF openings is empty:
        RETURN NOT_APPLICABLE

    // Steps 4 and 5 — Area and U-value per element
    sum_ua = 0
    sum_a  = 0
    FOR EACH element IN openings:
        area = CALCULATE_AREA(element, "NTA8800_OPENING")              // <a href="#f25">F25</a>, DER-121
        IF beng is supplied AND beng has a U for this element:
            u = beng.U of this element
        ELSE:
            u = GET_PROPERTY(element, "ThermalTransmittance")          // <a href="#f28">F28</a>
        sum_ua = sum_ua + u × area.value
        sum_a  = sum_a + area.value

        // Step 7 — Each element on its own
        IF u &gt; max_single.value:
            results ADD { element.GlobalId, NON_COMPLIANT, u, max_single }

    // Step 6 — Area-weighted average
    average_u = sum_ua / sum_a                                          // DER-122

    // Step 7 — Average
    IF average_u &gt; max_average.value:
        results ADD { NON_COMPLIANT, "average U too high", average_u, max_average }
    ELSE:
        results ADD { COMPLIANT, average_u, max_average }

    IF beng is not supplied:
        review_reasons ADD "no BENG / NTA 8800 calculation: U-values taken from the model"

    // Step 8 — Report result and evidence
    IF any result in results is NON_COMPLIANT:
        RETURN NON_COMPLIANT WITH { results, review_reasons, data_check.warnings }
    IF review_reasons is not empty:
        RETURN REVIEW_REQUIRED WITH { results, review_reasons, data_check.warnings }
    RETURN COMPLIANT WITH { results, data_check.warnings }
</pre>

### 13 — MPG, milieuprestatie {#pc-regel-13}

| | |
|---|---|
| **Regel-ID** | `BM13-R13` |
| **Procedure** | `CHECK_MPG` |
| **Functies** | [F00](#f00), [F13](#f13), [F19](#f19), [F20](#f20), [F23](#f23), [F24](#f24), [F25](#f25), [F29](#f29), [F36](#f36), [F41](#f41) |
| **Interpretatie** | [[[#regel-13]]] |

<pre class="nohighlight pseudocode">
PROCEDURE CHECK_MPG(application):

    // Step 1 — Model and IDS check
    location   = GET_APPLICATION_LOCATION(application)                 // <a href="#f19">F19</a>, for the report
    bim_model  = GET_SUBMITTED_BIM_MODEL(application)                  // <a href="#f20">F20</a>
    IF bim_model is missing:
        RETURN INSUFFICIENT_DATA
    data_check = CHECK_MINIMUM_REQUIREMENTS(bim_model, "MR-R13")       // <a href="#f00">F00</a>: includes DR-DOC-01
    IF data_check.status = INSUFFICIENT_DATA:
        RETURN INSUFFICIENT_DATA WITH { data_check.failed }

    date           = application date
    review_reasons = empty list

    // Steps 2 and 3 — Use functions and their usable floor area
    use_zones = GET_ZONES(bim_model, "Gebruiksfunctie")                // <a href="#f24">F24</a> (<a href="#f13">F13</a> gives the names)
    go_per_use = empty list
    FOR EACH zone IN use_zones:
        go = CALCULATE_AREA(zone, "NEN2580_GO")                        // <a href="#f25">F25</a>, DER-130
        go_per_use ADD { zone.name, go.value }
        IF go.status = REVIEW_REQUIRED:
            review_reasons ADD go.deviation

    // Step 4 — Loss-area ratio for offices
    FOR EACH entry IN go_per_use WHERE entry.name = "Kantoorfunctie":
        loss_area = SUM OF CALCULATE_AREA(element, "NEN2580_BVO")
                    FOR EACH (element, behind) IN GET_ENCLOSING_ELEMENTS(zone of entry)
                    WHERE behind = outside air                         // <a href="#f36">F36</a>, <a href="#f25">F25</a>
        entry.lossRatio = loss_area / entry.go                        // DER-131

    // Step 5 — Applicable limit (weighted for combined use functions)
    limit = GET_BBL_REQUIREMENT("4.158", go_per_use, "maximumMPG", date)   // <a href="#f29">F29</a>, DER-132
    IF limit = NOT_APPLICABLE:
        RETURN NOT_APPLICABLE

    // Step 6 — MPG score from the supplied calculation
    mpg = GET_EXTERNAL_CALCULATION(application, "MPG")                  // <a href="#f41">F41</a>
    IF mpg is not supplied:
        RETURN INSUFFICIENT_DATA WITH { "no MPG calculation supplied" }
    IF mpg.area differs from SUM of go_per_use by more than GET_PARAMETER("BM13-R13", "areaTolerance"):   // <a href="#f23">F23</a>
        review_reasons ADD { "areas in MPG calculation and model differ", mpg.area }

    // Step 7 — Compare
    IF mpg.score &gt; limit.value:
        RETURN NON_COMPLIANT WITH { mpg.score, limit, mpg.tool, mpg.version, review_reasons }

    // Step 8 — Report result and evidence
    IF review_reasons is not empty:
        RETURN REVIEW_REQUIRED WITH { mpg.score, limit, review_reasons, data_check.warnings }
    RETURN COMPLIANT WITH { mpg.score, limit, mpg.tool, mpg.version, data_check.warnings }
</pre>

### 14 — Vluchtwegen {#pc-regel-14}

| | |
|---|---|
| **Regel-ID** | `BM13-R14` |
| **Procedure** | `CHECK_ESCAPE_ROUTES` |
| **Functies** | [F00](#f00), [F13](#f13), [F19](#f19), [F20](#f20), [F23](#f23), [F24](#f24), [F29](#f29), [F33](#f33), [F34](#f34) |
| **Interpretatie** | [[[#regel-14]]] |

<pre class="nohighlight pseudocode">
PROCEDURE CHECK_ESCAPE_ROUTES(application):

    // Step 1 — Model and IDS check
    location   = GET_APPLICATION_LOCATION(application)                 // <a href="#f19">F19</a>, for the report
    bim_model  = GET_SUBMITTED_BIM_MODEL(application)                  // <a href="#f20">F20</a>
    IF bim_model is missing:
        RETURN INSUFFICIENT_DATA
    data_check = CHECK_MINIMUM_REQUIREMENTS(bim_model, "MR-R14")       // <a href="#f00">F00</a>
    IF data_check.status = INSUFFICIENT_DATA:
        RETURN INSUFFICIENT_DATA WITH { data_check.failed }

    // Step 2 — Bbl lookup
    use_function = main use function of GET_USE_FUNCTIONS(bim_model)  // <a href="#f13">F13</a>
    conditions   = GET_BBL_REQUIREMENT("4.64", use_function,
                       "escapeRouteConditions", application date)      // <a href="#f29">F29</a>: list of conditions of art. 4.65
    IF conditions = NOT_APPLICABLE:
        RETURN NOT_APPLICABLE

    // Steps 3 and 4 — Spaces, compartments, modelled routes, safe places
    spaces       = GET_ZONES(bim_model, "Gebruiksgebied")
                   + GET_ZONES(bim_model, "Verblijfsruimte")           // <a href="#f24">F24</a>
    compartments = GET_ZONES(bim_model, "Brandcompartiment")           // <a href="#f24">F24</a>
    modelled     = GET_ZONES(bim_model, "Vluchtroute")                 // <a href="#f24">F24</a>
    safe_places  = the places named by GET_PARAMETER("BM13-R14", "safePlaces")   // <a href="#f23">F23</a>, DER-140

    // Step 5 — Escape network and routes
    network = BUILD_ROUTE_NETWORK(bim_model, "ESCAPE")                  // <a href="#f33">F33</a>: no lifts, no windows
    results        = empty list
    review_reasons = empty list
    IF network.status = REVIEW_REQUIRED:
        review_reasons ADD network.reason

    FOR EACH space IN spaces:
        route = the shortest of FIND_ROUTE(network, space, place)
                FOR EACH place IN safe_places                          // <a href="#f34">F34</a>, DER-141
        IF route is empty:
            results ADD { space.GlobalId, NON_COMPLIANT, "no escape route to a safe place" }
            CONTINUE

        // Step 6 — Conditions of art. 4.65
        failed = the conditions in conditions that route does not meet
                 (e.g. which compartments it crosses, which modelled routes it uses)
        IF failed is empty:
            results ADD { space.GlobalId, COMPLIANT, route }
        ELSE:
            results ADD { space.GlobalId, NON_COMPLIANT, route, failed }

        IF route leaves the modelled escape-route zones:
            review_reasons ADD { space.GlobalId, "computed route differs from modelled route" }

    // Step 7 — Report result and evidence
    IF any result in results is NON_COMPLIANT:
        RETURN NON_COMPLIANT WITH { results, review_reasons, data_check.warnings }
    IF review_reasons is not empty:
        RETURN REVIEW_REQUIRED WITH { results, review_reasons, data_check.warnings }
    RETURN COMPLIANT WITH { results, data_check.warnings }
</pre>

### 15 — Loopafstand {#pc-regel-15}

| | |
|---|---|
| **Regel-ID** | `BM13-R15` |
| **Procedure** | `CHECK_WALKING_DISTANCE` |
| **Functies** | [F00](#f00), [F13](#f13), [F19](#f19), [F20](#f20), [F23](#f23), [F24](#f24), [F29](#f29), [F32](#f32), [F33](#f33), [F35](#f35), [F36](#f36), [F42](#f42), [F45](#f45) |
| **Interpretatie** | [[[#regel-15]]] |

<pre class="nohighlight pseudocode">
PROCEDURE CHECK_WALKING_DISTANCE(application):

    // Step 1 — Model and IDS check
    location   = GET_APPLICATION_LOCATION(application)                 // <a href="#f19">F19</a>, for the report
    bim_model  = GET_SUBMITTED_BIM_MODEL(application)                  // <a href="#f20">F20</a>
    IF bim_model is missing:
        RETURN INSUFFICIENT_DATA
    data_check = CHECK_MINIMUM_REQUIREMENTS(bim_model, "MR-R15")       // <a href="#f00">F00</a>
    IF data_check.status = INSUFFICIENT_DATA:
        RETURN INSUFFICIENT_DATA WITH { data_check.failed }

    // Step 2 — Bbl lookup
    use_function   = main use function of GET_USE_FUNCTIONS(bim_model) // <a href="#f13">F13</a>
    date           = application date
    max_distance   = GET_BBL_REQUIREMENT("4.64", use_function, "maximumWalkingDistance", date)   // <a href="#f29">F29</a>
    max_floor_diff = GET_BBL_REQUIREMENT("4.64", use_function, "maximumFloorDifference", date)   // <a href="#f29">F29</a>, 4 m
    exits_rule     = GET_BBL_REQUIREMENT("4.64", use_function, "twoExitsAbove", date)            // <a href="#f29">F29</a>, 150 persons, 5 m

    // Step 3 — Zones
    compartments     = GET_ZONES(bim_model, "Brandcompartiment")       // <a href="#f24">F24</a>
    sub_compartments = GET_ZONES(bim_model, "Subbrandcompartiment")    // <a href="#f24">F24</a>
    areas            = GET_ZONES(bim_model, "Gebruiksgebied")
                       + GET_ZONES(bim_model, "Verblijfsruimte")       // <a href="#f24">F24</a>

    network        = BUILD_ROUTE_NETWORK(bim_model, "ESCAPE")           // <a href="#f33">F33</a>
    results        = empty list
    review_reasons = empty list

    // Steps 4–6 — Walking distance per area
    FOR EACH area IN areas:
        sub   = the sub-fire compartment that contains area
        exits = the doors of GET_ENCLOSING_ELEMENTS(sub) that lead out of sub   // <a href="#f36">F36</a>, DER-150
        walk  = GET_MAX_WALKING_DISTANCE(area, exits, network)          // <a href="#f35">F35</a>, DER-151
        factor = GET_PARAMETER("BM13-R15", "correctionFactor", area type)      // <a href="#f23">F23</a>: 1.5 or 1
        corrected = walk.distance × factor                              // DER-152
        IF corrected &lt;= max_distance.value:
            results ADD { area.GlobalId, COMPLIANT, corrected, max_distance, walk.farthestPoint }
        ELSE:
            results ADD { area.GlobalId, NON_COMPLIANT, corrected, max_distance, walk.farthestPoint }

    FOR EACH compartment IN compartments:

        // Step 7 — Floor height difference within the compartment
        floor_diff = the largest MEASURE_HEIGHT_DIFFERENCE(a, b)
                     FOR EACH pair of floors (a, b) in compartment      // <a href="#f32">F32</a>, DER-153
        IF floor_diff &gt; max_floor_diff.value:
            results ADD { compartment.GlobalId, NON_COMPLIANT, floor_diff, max_floor_diff }

        // Step 8 — Two exits for more than the threshold of persons
        persons = GET_OCCUPANCY(compartment)                            // <a href="#f42">F42</a>
        IF persons is empty:
            review_reasons ADD { compartment.GlobalId, "occupancy unknown" }
        ELSE IF persons &gt; exits_rule.persons:
            exits = the doors of GET_ENCLOSING_ELEMENTS(compartment) that lead out   // <a href="#f36">F36</a>
            IF COUNT(exits) &lt; 2
               OR the largest MEASURE_DISTANCE(e1, e2) FOR EACH pair of exits &lt; exits_rule.distance:   // <a href="#f45">F45</a>
                results ADD { compartment.GlobalId, NON_COMPLIANT, "too few or too close exits", exits }

    // Step 9 — Report result and evidence
    IF any result in results is NON_COMPLIANT:
        RETURN NON_COMPLIANT WITH { results, review_reasons, data_check.warnings }
    IF review_reasons is not empty:
        RETURN REVIEW_REQUIRED WITH { results, review_reasons, data_check.warnings }
    RETURN COMPLIANT WITH { results, data_check.warnings }
</pre>

### 16 — Vluchtbreedte {#pc-regel-16}

| | |
|---|---|
| **Regel-ID** | `BM13-R16` |
| **Procedure** | `CHECK_ESCAPE_WIDTH` |
| **Functies** | [F00](#f00), [F13](#f13), [F19](#f19), [F20](#f20), [F23](#f23), [F24](#f24), [F25](#f25), [F29](#f29), [F31](#f31), [F33](#f33), [F34](#f34), [F42](#f42), [F44](#f44) |
| **Interpretatie** | [[[#regel-16]]] |

<pre class="nohighlight pseudocode">
PROCEDURE CHECK_ESCAPE_WIDTH(application):

    // Step 1 — Model and IDS check
    location   = GET_APPLICATION_LOCATION(application)                 // <a href="#f19">F19</a>, for the report
    bim_model  = GET_SUBMITTED_BIM_MODEL(application)                  // <a href="#f20">F20</a>
    IF bim_model is missing:
        RETURN INSUFFICIENT_DATA
    data_check = CHECK_MINIMUM_REQUIREMENTS(bim_model, "MR-R16")       // <a href="#f00">F00</a>
    IF data_check.status = INSUFFICIENT_DATA:
        RETURN INSUFFICIENT_DATA WITH { data_check.failed }

    // Step 2 — Bbl lookup
    use_function = main use function of GET_USE_FUNCTIONS(bim_model)  // <a href="#f13">F13</a>
    date         = application date
    min_width    = GET_BBL_REQUIREMENT("4.73", use_function, "escapeClearWidth", date)    // <a href="#f29">F29</a>
    min_height   = GET_BBL_REQUIREMENT("4.73", use_function, "escapeClearHeight", date)   // <a href="#f29">F29</a>
    area_limit   = GET_BBL_REQUIREMENT("4.73", use_function, "areaViaStair", date)        // <a href="#f29">F29</a>

    // Step 3 — Escape routes from every residential and bed area
    areas   = GET_ZONES(bim_model, "Verblijfsgebied") + GET_ZONES(bim_model, "Bedgebied")   // <a href="#f24">F24</a>
    network = BUILD_ROUTE_NETWORK(bim_model, "ESCAPE")                  // <a href="#f33">F33</a>
    safe_places = the places named by GET_PARAMETER("BM13-R14", "safePlaces")   // <a href="#f23">F23</a>, same as check #14
    routes  = for each area, the shortest FIND_ROUTE(network, area, place)
              over all safe_places                                      // <a href="#f34">F34</a>, DER-160

    results        = empty list
    review_reasons = empty list

    // Step 4 — Free passage on every route
    FOR EACH passage IN the doors, passages and stairs of all routes:
        size = MEASURE_CLEAR_DIMENSIONS(passage)                       // <a href="#f31">F31</a>, DER-161
        IF size.clearWidth &lt; min_width.value OR size.clearHeight &lt; min_height.value:
            results ADD { passage.GlobalId, NON_COMPLIANT, size, min_width, min_height }

    // Step 5 — Floor area of residential areas reached via a stair
    IF area_limit is not NOT_APPLICABLE:
        FOR EACH area IN areas whose route contains a stair:
            floor = CALCULATE_AREA(area, "NEN2580_GO")                 // <a href="#f25">F25</a>, DER-162
            IF floor.value &gt; area_limit.value:
                results ADD { area.GlobalId, NON_COMPLIANT, floor.value, area_limit }

    // Steps 6 and 7 — Flow capacity per route
    FOR EACH route IN the distinct routes:
        persons = SUM OF GET_OCCUPANCY(area)                            // <a href="#f42">F42</a>, DER-163
                  FOR EACH area assigned to route
                  (assignment rule: GET_PARAMETER("BM13-R16", "personAssignment"))   // <a href="#f23">F23</a>
        IF persons is empty:
            review_reasons ADD { route, "occupancy unknown" }
            CONTINUE
        capacity = CALCULATE_FLOW_CAPACITY(route)                      // <a href="#f44">F44</a>, DER-164
        IF capacity.status = REVIEW_REQUIRED:                          // e.g. double-door opening angle unknown
            review_reasons ADD { route, capacity.reason }
        ELSE IF capacity.persons &lt; persons:
            results ADD { route, NON_COMPLIANT, capacity.persons, persons }
        ELSE:
            results ADD { route, COMPLIANT, capacity.persons, persons }

    // Step 8 — Report result and evidence
    IF any result in results is NON_COMPLIANT:
        RETURN NON_COMPLIANT WITH { results, review_reasons, data_check.warnings }
    IF review_reasons is not empty:
        RETURN REVIEW_REQUIRED WITH { results, review_reasons, data_check.warnings }
    RETURN COMPLIANT WITH { results, data_check.warnings }
</pre>

### 17 — Daglicht {#pc-regel-17}

| | |
|---|---|
| **Regel-ID** | `BM13-R17` |
| **Procedure** | `CHECK_DAYLIGHT` |
| **Functies** | [F00](#f00), [F01](#f01), [F05](#f05), [F13](#f13), [F19](#f19), [F20](#f20), [F21](#f21), [F22](#f22), [F24](#f24), [F25](#f25), [F29](#f29), [F36](#f36), [F38](#f38), [F40](#f40) |
| **Interpretatie** | [[[#regel-17]]] |

<pre class="nohighlight pseudocode">
PROCEDURE CHECK_DAYLIGHT(application):

    // Step 1 — Model and IDS check
    location   = GET_APPLICATION_LOCATION(application)                 // <a href="#f19">F19</a>
    bim_model  = GET_SUBMITTED_BIM_MODEL(application)                  // <a href="#f20">F20</a>
    IF bim_model is missing:
        RETURN INSUFFICIENT_DATA
    data_check = CHECK_MINIMUM_REQUIREMENTS(bim_model, "MR-R17")       // <a href="#f00">F00</a>
    IF data_check.status = INSUFFICIENT_DATA:
        RETURN INSUFFICIENT_DATA WITH { data_check.failed }

    // Step 2 — Georeferencing
    georeference = GET_BIM_GEOREFERENCE(bim_model)                     // <a href="#f01">F01</a>
    IF georeference is missing
       OR VALIDATE_GEOREFERENCE(bim_model, georeference, location).status = INSUFFICIENT_DATA:   // <a href="#f21">F21</a>
        RETURN INSUFFICIENT_DATA

    // Step 3 — Bbl lookup
    use_function = main use function of GET_USE_FUNCTIONS(bim_model)  // <a href="#f13">F13</a>
    date         = application date
    min_per_space = GET_BBL_REQUIREMENT("4.146", use_function, "daylightPerSpace", date)   // <a href="#f29">F29</a>, m²
    min_share     = GET_BBL_REQUIREMENT("4.146", use_function, "daylightShare", date)      // <a href="#f29">F29</a>, % of floor area
    IF min_per_space = NOT_APPLICABLE AND min_share = NOT_APPLICABLE:
        RETURN NOT_APPLICABLE

    // Step 6 — Surroundings
    building     = GET_BUILDING_GEOMETRY(bim_model, georeference)      // <a href="#f22">F22</a>
    neighbours   = GET_PDOK_FEATURES("Buildings", location)            // <a href="#f05">F05</a>, with 3D BAG heights
    mirrored     = MIRROR_AT_BOUNDARY(building, parcel boundary or centre line)   // <a href="#f38">F38</a>
    surroundings = neighbours + mirrored                               // DER-171

    results        = empty list
    review_reasons = empty list

    // Steps 4, 5 and 7 — Per residential space
    FOR EACH space IN GET_ZONES(bim_model, "Verblijfsruimte"):         // <a href="#f24">F24</a>
        openings = the windows and glazed doors of GET_ENCLOSING_ELEMENTS(space)
                   whose other side is outside air                     // <a href="#f36">F36</a>, DER-170
        daylight = CALCULATE_EQUIVALENT_DAYLIGHT_AREA(space, openings, surroundings)   // <a href="#f40">F40</a>, DER-173
        IF daylight.status = REVIEW_REQUIRED:
            review_reasons ADD { space.GlobalId, daylight.reason }
            CONTINUE
        IF daylight.value &lt; min_per_space.value:
            results ADD { space.GlobalId, NON_COMPLIANT, daylight.value, min_per_space }
        ELSE:
            results ADD { space.GlobalId, COMPLIANT, daylight.value, min_per_space }
        space.daylight = daylight.value

    // Step 8 — Per residential area: share of the floor area
    FOR EACH area IN GET_ZONES(bim_model, "Verblijfsgebied"):          // <a href="#f24">F24</a>
        floor = CALCULATE_AREA(area, "NEN2057_FLOOR")                  // <a href="#f25">F25</a>, DER-172
        total = SUM OF space.daylight FOR EACH space in area
        IF total &lt; floor.value × min_share.value / 100:
            results ADD { area.GlobalId, NON_COMPLIANT, total, floor.value, min_share }
        ELSE:
            results ADD { area.GlobalId, COMPLIANT, total, floor.value, min_share }

    // Step 9 — Report result and evidence
    IF any result in results is NON_COMPLIANT:
        RETURN NON_COMPLIANT WITH { results, review_reasons, data_check.warnings }
    IF review_reasons is not empty:
        RETURN REVIEW_REQUIRED WITH { results, review_reasons, data_check.warnings }
    RETURN COMPLIANT WITH { results, data_check.warnings }
</pre>

---

## Standaardfuncties {#pc-functies}

Een functie doet één ding en geeft bij een fout een vaste uitkomst terug. Kolom *Type* zegt hoe de functie wordt gebouwd: als SPARQL-query, als SHACL-shape, als generieke (geometrie)functie, als platformstap vóór de regel, of samengesteld uit meerdere.

| ID | Functie | Wat het doet | Type | Status | Checks |
|---|---|---|---|---|---|
| [F00](#f00) | `CHECK_MINIMUM_REQUIREMENTS` | Controleert vóór alles of het model de gegevens bevat die de check nodig heeft | Platformstap | Open | 17 |
| [F01](#f01) | `GET_BIM_GEOREFERENCE` | Leest waar het model ligt in RD New / NAP | SPARQL | Gesloten | 8 |
| [F02](#f02) | `GET_BOUNDING_BOX` | Geeft de kleinste doos om een vorm | Generiek | Gesloten | via andere functies |
| [F03](#f03) | `VALIDATE_MODEL_LOCATION` | Herkent een model dat al in wereldcoördinaten staat (dubbele verschuiving) | SHACL / pseudocode | Gesloten | via andere functies |
| [F04](#f04) | `VALIDATE_MODEL_SCALE` | Herkent fouten in eenheden (mm / m) | SHACL / pseudocode | Gesloten | via andere functies |
| [F05](#f05) | `GET_PDOK_FEATURES` | Haalt bestaande gebouwen (BAG) of percelen (BRK) rond de locatie op | Generiek | Gesloten | 3 |
| [F07](#f07) | `PROJECT_TO_2D` | Maakt de platte footprint van een 3D-deel | Generiek | Gesloten | 2 |
| [F08](#f08) | `TOPOLOGICAL_RELATION` | Zegt of een footprint binnen, op de rand van, over of buiten een vlak ligt | Generiek | Gesloten | 4 |
| [F09](#f09) | `TO_WORLD_COORDINATES` | Zet modelgeometrie om naar RD New / NAP | Open | Open | via andere functies |
| [F10](#f10) | `FILTER_RELEVANT_GEOMETRY` | Houdt de bouwdelen over die voor een regel meetellen, volgens de interpretatie (profiel, uitzonderingen) | SPARQL | Gesloten | 3 |
| [F11](#f11) | `GET_REFERENCE_LEVEL` | Bepaalt het peil | Samengesteld | Open | 2 |
| [F12](#f12) | `MAX_Z` | Vindt het hoogste punt van een set delen en het deel waar het bij hoort | SPARQL | Gesloten | 1 |
| [F13](#f13) | `GET_USE_FUNCTIONS` | Leest waarvoor het gebouw gebruikt gaat worden | SPARQL | Gesloten | 12 |
| [F14](#f14) | `UNION_AREAS` | Voegt meerdere vlakken samen tot één | Generiek | Open | 3 |
| [F15](#f15) | `CLIP_TO_AREA` | Houdt alleen de delen van een gebouw over die boven een bepaald vlak staan | Samengesteld | Open | 1 |
| [F16](#f16) | `MEASURE_OUTSIDE` | Meet hoeveel van een footprint buiten een vlak ligt | Generiek | Open | 1 |
| [F17](#f17) | `GET_SUPPORTING_ROOF_LEVEL` | Vindt het dakvlak direct onder een dakopbouw | Samengesteld | Open | via andere functies |
| [F18](#f18) | `MAKE_RESULT` | Bouwt het standaard resultaatobject | SPARQL | Gesloten | 17 |
| [F19](#f19) | `GET_APPLICATION_LOCATION` | Leest de locatie van de activiteit uit de vergunningaanvraag | SPARQL | Open | 17 |
| [F20](#f20) | `GET_SUBMITTED_BIM_MODEL` | Haalt het IFC-model uit de vergunningaanvraag | Platformstap | Open | 17 |
| [F21](#f21) | `VALIDATE_GEOREFERENCE` | Controleert of de georeferentie te vertrouwen is | SPARQL | Gesloten | 8 |
| [F22](#f22) | `GET_BUILDING_GEOMETRY` | Geeft elk bouwdeel met zijn geometrie in RD New / m NAP | Mogelijk niet nodig | Open | 7 |
| [F23](#f23) | `GET_PARAMETER` | Leest één waarde van een regel: uit de waardebeperkingen van de zone, anders uit het regelprofiel | Mogelijk niet nodig / complex | Open | 8 |
| [F24](#f24) | `GET_ZONES` | Haalt de zones of ruimten van één soort op | SPARQL | Gesloten | 13 |
| [F25](#f25) | `CALCULATE_AREA` | Berekent een oppervlakte volgens een benoemde methode en vergelijkt die met de aangeleverde hoeveelheid | Generiek | Gesloten | 9 |
| [F26](#f26) | `INTERSECT_AREAS` | Geeft het deel dat twee vlakken gemeen hebben | Generiek | Open | 2 |
| [F27](#f27) | `COUNT_STOREYS` | Telt bouwlagen volgens de definitie in het plan | SPARQL | Open | 2 |
| [F28](#f28) | `GET_PROPERTY` | Leest één eigenschap van een element | SPARQL | Gesloten | 4 |
| [F29](#f29) | `GET_BBL_REQUIREMENT` | Zoekt via de Bbl-sturingstabel de vereiste waarde voor een gebruiksfunctie | Open | Open | 11 |
| [F30](#f30) | `GET_APPLICATION_DATA` | Leest een veld uit de DSO-aanvraag (bijv. SBI-code) | Open | Open | 2 |
| [F31](#f31) | `MEASURE_CLEAR_DIMENSIONS` | Meet de vrije breedte en vrije hoogte van een deur, doorgang, route of ruimte | Generiek | Open | 3 |
| [F32](#f32) | `MEASURE_HEIGHT_DIFFERENCE` | Meet het hoogteverschil tussen twee vloeren, of tussen een vloer en het aansluitende terrein | Generiek | Open | 2 |
| [F33](#f33) | `BUILD_ROUTE_NETWORK` | Bouwt het beloopbare netwerk van ruimten, deuren, trappen en hellingbanen | Generiek | Open | 5 |
| [F34](#f34) | `FIND_ROUTE` | Vindt de kortste route tussen twee plekken in het netwerk | Generiek | Open | 4 |
| [F35](#f35) | `GET_MAX_WALKING_DISTANCE` | Vindt het verst gelegen punt van een gebied en de loopafstand naar de dichtstbijzijnde uitgang | SPARQL | Gesloten | 1 |
| [F36](#f36) | `GET_ENCLOSING_ELEMENTS` | Geeft de wanden, vloeren, deuren en ramen rond een zone en wat aan de andere kant ligt | SPARQL | Gesloten | 7 |
| [F37](#f37) | `PARSE_FIRE_RATING` | Zet een brandwerendheidstekst om in criteria en minuten | SPARQL | Gesloten | 1 |
| [F38](#f38) | `MIRROR_AT_BOUNDARY` | Maakt de gespiegelde referentiegeometrie voor de brandveiligheidscheck; nut en meetmethode worden nog beoordeeld | Mogelijk niet nodig | Eerste feedback ontvangen | 2 |
| [F39](#f39) | `DERIVE_RC_FROM_U` | Leidt de warmteweerstand Rc af uit een U-waarde | SPARQL | Open | 1 |
| [F40](#f40) | `CALCULATE_EQUIVALENT_DAYLIGHT_AREA` | Berekent de equivalente daglichtoppervlakte; toepassing en omgang met omliggende bebouwing worden nog beoordeeld | Samengesteld | Open | 1 |
| [F41](#f41) | `GET_EXTERNAL_CALCULATION` | Leest de hoofdresultaten van een berekening die de aanvrager aanlevert (MPG, BENG, WBDBO, gelijkwaardigheid) | Open | Open | 4 |
| [F42](#f42) | `GET_OCCUPANCY` | Geeft het aantal personen waarvoor een zone is ontworpen | SPARQL | Open | 2 |
| [F43](#f43) | `CALCULATE_WBDBO` | Berekent hoeveel minuten brand nodig heeft om over te slaan tussen compartimenten of naar het gespiegelde gebouw (NEN 6068) | Samengesteld | Open | 1 |
| [F44](#f44) | `CALCULATE_FLOW_CAPACITY` | Berekent hoeveel personen een vluchtroute kunnen passeren (Bbl art. 4.80) | SPARQL | Open | 1 |
| [F45](#f45) | `MEASURE_DISTANCE` | Meet de rechte afstand tussen twee punten of elementen | Generiek | Gesloten | 1 |
| [F46](#f46) | `GET_3D_SURROUNDINGS` | Haalt de bestaande gebouwen rond de locatie in 3D op, met hun hoogte | Generiek | Open | nog in geen workflow |
| [F47](#f47) | `GET_PERMITTED_ENVELOPE` | Bouwt het 3D-volume dat de buurman mag bouwen (3D-bestemmingsregeling) | Samengesteld | Open | nog in geen workflow |

### F00 — CHECK_MINIMUM_REQUIREMENTS {#f00}

Controleert vóór alles of het model de gegevens bevat die de check nodig heeft.

| | |
|---|---|
| **Invoer → uitvoer** | model, minimum set (MR-Rnn) → passed / failed requirements, warnings |
| **Bij falen** | INSUFFICIENT_DATA when a MUST requirement fails |
| **Type** | Platformstap |
| **Status** | Open |
| **Gebruikt in** | [#1](#pc-regel-1), [#2](#pc-regel-2), [#3](#pc-regel-3), [#4](#pc-regel-4), [#5](#pc-regel-5), [#6](#pc-regel-6), [#7](#pc-regel-7), [#8](#pc-regel-8), [#9](#pc-regel-9), [#10](#pc-regel-10), [#11](#pc-regel-11), [#12](#pc-regel-12), [#13](#pc-regel-13), [#14](#pc-regel-14), [#15](#pc-regel-15), [#16](#pc-regel-16), [#17](#pc-regel-17) |

**Implementatie.** Run the ILS IDS files of the check plus bm13-supplement.ids with any IDS 1.0 validator (e.g. IfcTester), and the ILS geometry checks G1–G6. Map each failed MUST to INSUFFICIENT_DATA, each failed SHOULD to a note. Run it as a platform step before the rule, not inside it.

<div class="issue" title="Open vraag">

Turn into a platform step (IDS run), not a rule function  
Owner: Lex. Due: 2026-10-16.

</div>

### F01 — GET_BIM_GEOREFERENCE {#f01}

Leest waar het model ligt in RD New / NAP.

| | |
|---|---|
| **Invoer → uitvoer** | model → eastings, northings, orthogonal height, rotation, scale, CRS |
| **Bij falen** | INSUFFICIENT_DATA (none); REVIEW_REQUIRED (more than one) |
| **Type** | SPARQL |
| **Status** | Gesloten |
| **Gebruikt in** | [#1](#pc-regel-1), [#2](#pc-regel-2), [#3](#pc-regel-3), [#5](#pc-regel-5), [#6](#pc-regel-6), [#7](#pc-regel-7), [#10](#pc-regel-10), [#17](#pc-regel-17) |

**Implementatie.** Query IfcMapConversion and IfcProjectedCRS (SPARQL or IFC API). Rotation = atan2(XAxisOrdinate, XAxisAbscissa). Scale defaults to 1.

### F02 — GET_BOUNDING_BOX {#f02}

Geeft de kleinste doos om een vorm.

| | |
|---|---|
| **Invoer → uitvoer** | geometry → minX, minY, minZ, maxX, maxY, maxZ |
| **Bij falen** | — |
| **Type** | Generiek |
| **Status** | Gesloten |
| **Gebruikt in** | via andere functies |

**Implementatie.** Axis-aligned box from the element's tessellated geometry, with any geometry kernel (e.g. IfcOpenShell, Open CASCADE).

<div class="issue" title="Open vraag">

Peter update (logged 6 Oct 2026): Peter lists GeometryBoundingBox; candidate mapping to F02. See Geometry operations for implementation follow-up.

</div>

### F03 — VALIDATE_MODEL_LOCATION {#f03}

Herkent een model dat al in wereldcoördinaten staat (dubbele verschuiving).

| | |
|---|---|
| **Invoer → uitvoer** | model, maxLocalExtent (100 m) → elements too far from the origin |
| **Bij falen** | INSUFFICIENT_DATA |
| **Type** | SHACL / pseudocode |
| **Status** | Gesloten |
| **Gebruikt in** | via andere functies |

**Implementatie.** SHACL shape: if IfcMapConversion is present, every element's local coordinates must stay within maxLocalExtent of the origin. Report offending elements.

### F04 — VALIDATE_MODEL_SCALE {#f04}

Herkent fouten in eenheden (mm / m).

| | |
|---|---|
| **Invoer → uitvoer** | model, min / max extent (1–100 m) → extents |
| **Bij falen** | INSUFFICIENT_DATA or REVIEW_REQUIRED |
| **Type** | SHACL / pseudocode |
| **Status** | Gesloten |
| **Gebruikt in** | via andere functies |

**Implementatie.** SHACL shape on the overall model extent read with the declared length unit: outside 1–100 m points to a unit error (e.g. mm read as m).

### F05 — GET_PDOK_FEATURES {#f05}

Haalt bestaande gebouwen (BAG) of percelen (BRK) rond de locatie op.

| | |
|---|---|
| **Invoer → uitvoer** | type, location, search radius → features with id and geometry |
| **Bij falen** | INSUFFICIENT_DATA (service not reachable) — never COMPLIANT |
| **Type** | Generiek |
| **Status** | Gesloten |
| **Gebruikt in** | [#3](#pc-regel-3), [#7](#pc-regel-7), [#17](#pc-regel-17) |

**Implementatie.** Call the PDOK OGC API Features / WFS for BAG or BRK with a bounding box around the location in EPSG:28992. Store the response as a dated snapshot so the result can be reproduced.

### F07 — PROJECT_TO_2D {#f07}

Maakt de platte footprint van een 3D-deel.

| | |
|---|---|
| **Invoer → uitvoer** | geometry → polygon in RD New |
| **Bij falen** | — |
| **Type** | Generiek |
| **Status** | Gesloten |
| **Gebruikt in** | [#1](#pc-regel-1), [#3](#pc-regel-3) |

**Implementatie.** Project all faces onto the XY plane and union them into one polygon. Keep holes as holes (do not invert them).

<div class="issue" title="Open vraag">

Peter update (logged 6 Oct 2026): Peter proposes GeometryProjection with a definable plane. Candidate mapping to F07 requires review: current contract uses the XY plane.

</div>

### F08 — TOPOLOGICAL_RELATION {#f08}

Zegt of een footprint binnen, op de rand van, over of buiten een vlak ligt.

| | |
|---|---|
| **Invoer → uitvoer** | footprint, area, tolerance → WITHIN / COVERED_BY / OVERLAPS / TOUCHES / DISJOINT / EQUALS / CONTAINS |
| **Bij falen** | — |
| **Type** | Generiek |
| **Status** | Gesloten |
| **Gebruikt in** | [#1](#pc-regel-1), [#4](#pc-regel-4), [#5](#pc-regel-5), [#6](#pc-regel-6) |

**Implementatie.** DE-9IM predicates from a geometry library (GEOS, Shapely, JTS). Differences smaller than the tolerance count as on the boundary.

### F09 — TO_WORLD_COORDINATES {#f09}

Zet modelgeometrie om naar RD New / NAP.

| | |
|---|---|
| **Invoer → uitvoer** | geometry, georeference → geometry in world coordinates |
| **Bij falen** | — |
| **Type** | Open |
| **Status** | Open |
| **Gebruikt in** | via andere functies |

**Implementatie.** Apply IfcMapConversion: scale, rotate by the angle from F01, then add Eastings, Northings and OrthogonalHeight.

<div class="issue" title="Open vraag">

Decide: SPARQL or generic function  
Owner: Peter. Due: 2026-10-09.  
Peter update (logged 6 Oct 2026): Peter lists GeometryTransformation; candidate implementation mapping to F09 requires confirmation.

</div>

### F10 — FILTER_RELEVANT_GEOMETRY {#f10}

Houdt de bouwdelen over die voor een regel meetellen, volgens de interpretatie (profiel, uitzonderingen).

| | |
|---|---|
| **Invoer → uitvoer** | building, interpretation profile → elements, unresolved elements |
| **Bij falen** | — (unresolved elements → rule returns REVIEW_REQUIRED) |
| **Type** | SPARQL |
| **Status** | Gesloten |
| **Gebruikt in** | [#1](#pc-regel-1), [#2](#pc-regel-2), [#3](#pc-regel-3) |

**Implementatie.** Filter by IFC class and PredefinedType following the named profile (e.g. COVERAGE_RELEVANT). Proxies and unknown classes go to the 'unresolved' list.

### F11 — GET_REFERENCE_LEVEL {#f11}

Bepaalt het peil.

| | |
|---|---|
| **Invoer → uitvoer** | zone, building → value in m NAP, method, source |
| **Bij falen** | INSUFFICIENT_DATA (no height); REVIEW_REQUIRED (sources disagree) |
| **Type** | Samengesteld |
| **Status** | Open |
| **Gebruikt in** | [#2](#pc-regel-2), [#6](#pc-regel-6) |

**Implementatie.** Two methods, chosen per zone: (1) average elevation of the adjacent road (BGT road surface + municipal height data, fallback AHN); (2) design elevation = elevation of the entrance-level storey in NAP. Combines an API call, a calculation and possibly a manual step.

<div class="issue" title="Open vraag">

Reference-level method per zone, incl. fixed offsets (e.g. +15 cm); where the plan defines peil; agree a shared term list  
Owner: Municipalities, RegelRecht. Due: 2026-10-09.

</div>

### F12 — MAX_Z {#f12}

Vindt het hoogste punt van een set delen en het deel waar het bij hoort.

| | |
|---|---|
| **Invoer → uitvoer** | geometry → z in m NAP, GlobalId |
| **Bij falen** | — |
| **Type** | SPARQL |
| **Status** | Gesloten |
| **Gebruikt in** | [#2](#pc-regel-2) |

**Implementatie.** Maximum of maxZ from F02 over the relevant elements, in NAP.

### F13 — GET_USE_FUNCTIONS {#f13}

Leest waarvoor het gebouw gebruikt gaat worden.

| | |
|---|---|
| **Invoer → uitvoer** | model → use functions with zone GlobalId |
| **Bij falen** | INSUFFICIENT_DATA (none) |
| **Type** | SPARQL |
| **Status** | Gesloten |
| **Gebruikt in** | [#1](#pc-regel-1), [#7](#pc-regel-7), [#8](#pc-regel-8), [#9](#pc-regel-9), [#10](#pc-regel-10), [#11](#pc-regel-11), [#12](#pc-regel-12), [#13](#pc-regel-13), [#14](#pc-regel-14), [#15](#pc-regel-15), [#16](#pc-regel-16), [#17](#pc-regel-17) |

**Implementatie.** Query IfcZone with ObjectType 'Gebruiksfunctie'; Name = Bbl use function (ILS 9.08).

<div class="issue" title="Open vraag">

Ask municipalities how is it defined in each municipality? stop and tpod defined

</div>

### F14 — UNION_AREAS {#f14}

Voegt meerdere vlakken samen tot één.

| | |
|---|---|
| **Invoer → uitvoer** | areas → one (multi)polygon + source ids |
| **Bij falen** | — |
| **Type** | Generiek |
| **Status** | Open |
| **Gebruikt in** | [#1](#pc-regel-1), [#3](#pc-regel-3), [#7](#pc-regel-7) |

**Implementatie.** Polygon union from a geometry library. To be merged with F26 into one BOOLEAN_OPERATION.

<div class="issue" title="Open vraag">

Merge with F26 into one BOOLEAN_OPERATION  
Owner: Siham +peter. Due: 2026-10-16.  
Peter update (logged 6 Oct 2026): Peter lists GeometryBooleanOperation; supports discussion of the proposed F14/F26 merge, not a confirmed merge.

</div>

### F15 — CLIP_TO_AREA {#f15}

Houdt alleen de delen van een gebouw over die boven een bepaald vlak staan.

| | |
|---|---|
| **Invoer → uitvoer** | elements, area → clipped elements |
| **Bij falen** | — |
| **Type** | Samengesteld |
| **Status** | Open |
| **Gebruikt in** | [#2](#pc-regel-2) |

**Implementatie.** Intersect each element's footprint (F07) with the area; keep the 3D part above the intersection. Boolean intersection + projection + SPARQL selection.

<div class="issue" title="Open vraag">

Write pseudocode  
Owner: Siham +peter. Due: 2026-10-16.

</div>

### F16 — MEASURE_OUTSIDE {#f16}

Meet hoeveel van een footprint buiten een vlak ligt.

| | |
|---|---|
| **Invoer → uitvoer** | footprint, area → m² outside, max distance outside |
| **Bij falen** | — |
| **Type** | Generiek |
| **Status** | Open |
| **Gebruikt in** | [#1](#pc-regel-1) |

**Implementatie.** Area of (footprint minus area); max distance of the outside part to the area. Will become a formula in the pseudocode.

<div class="issue" title="Open vraag">

Replace by a formula in the pseudocode  
Owner: Siham +peter. Due: 2026-10-16.

</div>

### F17 — GET_SUPPORTING_ROOF_LEVEL {#f17}

Vindt het dakvlak direct onder een dakopbouw.

| | |
|---|---|
| **Invoer → uitvoer** | element, roofs → z in m NAP |
| **Bij falen** | REVIEW_REQUIRED (no roof below) |
| **Type** | Samengesteld |
| **Status** | Open |
| **Gebruikt in** | via andere functies |

**Implementatie.** Take IfcRoof or IfcSlab with PredefinedType ROOF under the installation's footprint; return the top level of that roof.

<div class="issue" title="Open vraag">

Rules for roof-top installations; roofs as IfcRoof in IDS  
Owner: Municipalities, Lex. Due: 2026-10-16.

</div>

### F18 — MAKE_RESULT {#f18}

Bouwt het standaard resultaatobject.

| | |
|---|---|
| **Invoer → uitvoer** | status, values, evidence, sources, notes → RuleCheckResult |
| **Bij falen** | — |
| **Type** | SPARQL |
| **Status** | Gesloten |
| **Gebruikt in** | [#1](#pc-regel-1), [#2](#pc-regel-2), [#3](#pc-regel-3), [#4](#pc-regel-4), [#5](#pc-regel-5), [#6](#pc-regel-6), [#7](#pc-regel-7), [#8](#pc-regel-8), [#9](#pc-regel-9), [#10](#pc-regel-10), [#11](#pc-regel-11), [#12](#pc-regel-12), [#13](#pc-regel-13), [#14](#pc-regel-14), [#15](#pc-regel-15), [#16](#pc-regel-16), [#17](#pc-regel-17) |

**Implementatie.** Assemble the RuleCheckResult (guide §3.1). Final status follows the precedence in §3.4.

### F19 — GET_APPLICATION_LOCATION {#f19}

Leest de locatie van de activiteit uit de vergunningaanvraag.

| | |
|---|---|
| **Invoer → uitvoer** | application → address, BAG ids, parcel ids, point in RD New |
| **Bij falen** | INSUFFICIENT_DATA (no location) |
| **Type** | SPARQL |
| **Status** | Open |
| **Gebruikt in** | [#1](#pc-regel-1), [#2](#pc-regel-2), [#3](#pc-regel-3), [#4](#pc-regel-4), [#5](#pc-regel-5), [#6](#pc-regel-6), [#7](#pc-regel-7), [#8](#pc-regel-8), [#9](#pc-regel-9), [#10](#pc-regel-10), [#11](#pc-regel-11), [#12](#pc-regel-12), [#13](#pc-regel-13), [#14](#pc-regel-14), [#15](#pc-regel-15), [#16](#pc-regel-16), [#17](#pc-regel-17) |

**Implementatie.** Read the location from the DSO application; cross-check with the addresses and parcels in the model (ILS 9.01c–e, 9.03, 9.04).

<div class="issue" title="Open vraag">

Address / plot / parcel ids check (IDS 9.01c–e, 9.03, 9.04); location from DSO  
Owner: Lex, RegelRecht. Due: 2026-10-16.

</div>

### F20 — GET_SUBMITTED_BIM_MODEL {#f20}

Haalt het IFC-model uit de vergunningaanvraag.

| | |
|---|---|
| **Invoer → uitvoer** | application → model |
| **Bij falen** | INSUFFICIENT_DATA (missing or not valid IFC) |
| **Type** | Platformstap |
| **Status** | Open |
| **Gebruikt in** | [#1](#pc-regel-1), [#2](#pc-regel-2), [#3](#pc-regel-3), [#4](#pc-regel-4), [#5](#pc-regel-5), [#6](#pc-regel-6), [#7](#pc-regel-7), [#8](#pc-regel-8), [#9](#pc-regel-9), [#10](#pc-regel-10), [#11](#pc-regel-11), [#12](#pc-regel-12), [#13](#pc-regel-13), [#14](#pc-regel-14), [#15](#pc-regel-15), [#16](#pc-regel-16), [#17](#pc-regel-17) |

**Implementatie.** Get the IFC file from the application and check it opens and is schema-valid (ILS AC1, AC2). Platform step.

<div class="issue" title="Open vraag">

Turn into a platform step  
Owner: Siham / all team. Due: 2026-10-16.

</div>

### F21 — VALIDATE_GEOREFERENCE {#f21}

Controleert of de georeferentie te vertrouwen is.

| | |
|---|---|
| **Invoer → uitvoer** | model, georeference, location → checks passed / failed |
| **Bij falen** | INSUFFICIENT_DATA or REVIEW_REQUIRED |
| **Type** | SPARQL |
| **Status** | Gesloten |
| **Gebruikt in** | [#1](#pc-regel-1), [#2](#pc-regel-2), [#3](#pc-regel-3), [#5](#pc-regel-5), [#6](#pc-regel-6), [#7](#pc-regel-7), [#10](#pc-regel-10), [#17](#pc-regel-17) |

**Implementatie.** Combine: CRS is EPSG:28992 / 7415; scale fits the units (F04); model is modelled locally (F03); footprint lies near the application location (uses F02).

### F22 — GET_BUILDING_GEOMETRY {#f22}

Geeft elk bouwdeel met zijn geometrie in RD New / m NAP.

| | |
|---|---|
| **Invoer → uitvoer** | model, georeference → elements |
| **Bij falen** | INSUFFICIENT_DATA (no evaluable geometry) |
| **Type** | Mogelijk niet nodig |
| **Status** | Open |
| **Gebruikt in** | [#1](#pc-regel-1), [#2](#pc-regel-2), [#3](#pc-regel-3), [#6](#pc-regel-6), [#9](#pc-regel-9), [#10](#pc-regel-10), [#17](#pc-regel-17) |

**Implementatie.** Element geometry transformed with F09. May be dropped if each rule reads geometry directly.

<div class="issue" title="Open vraag">

Decide to drop or keep  
Owner: Siham/all team. Due: 2026-10-16.

</div>

### F23 — GET_PARAMETER {#f23}

Leest één waarde van een regel: uit de waardebeperkingen van de zone, anders uit het regelprofiel.

| | |
|---|---|
| **Invoer → uitvoer** | rule, name → value + origin |
| **Bij falen** | INSUFFICIENT_DATA (not set anywhere) |
| **Type** | Mogelijk niet nodig / complex |
| **Status** | Open |
| **Gebruikt in** | [#1](#pc-regel-1), [#2](#pc-regel-2), [#3](#pc-regel-3), [#4](#pc-regel-4), [#5](#pc-regel-5), [#6](#pc-regel-6), [#14](#pc-regel-14), [#15](#pc-regel-15) |

**Implementatie.** Read the value constraint attached to the plan zone (STOP/TPOD); fall back to the BM13 rule profile. May be dropped.

<div class="issue" title="Open vraag">

Where do zone values live (STOP/TPOD)? Then drop or keep  
Owner: RegelRecht. Due: 2026-10-09. Easy for the moment to be done manually to be investigated with Stop/tpod if the differences between municpalitie son how values are defined can be tackled and aligned in the future? ( question to stop/tpod)

</div>

### F24 — GET_ZONES {#f24}

Haalt de zones of ruimten van één soort op.

| | |
|---|---|
| **Invoer → uitvoer** | model, objectType → zones with geometry, storey, quantities |
| **Bij falen** | — (empty list) |
| **Type** | SPARQL |
| **Status** | Gesloten |
| **Gebruikt in** | [#4](#pc-regel-4), [#5](#pc-regel-5), [#7](#pc-regel-7), [#8](#pc-regel-8), [#9](#pc-regel-9), [#10](#pc-regel-10), [#11](#pc-regel-11), [#12](#pc-regel-12), [#13](#pc-regel-13), [#14](#pc-regel-14), [#15](#pc-regel-15), [#16](#pc-regel-16), [#17](#pc-regel-17) |

**Implementatie.** Query IfcZone / IfcSpatialZone / IfcSpace by ObjectType (bSDD Omgevingswet-Ruimten, e.g. Brandcompartiment, Verblijfsgebied).

### F25 — CALCULATE_AREA {#f25}

Berekent een oppervlakte volgens een benoemde methode en vergelijkt die met de aangeleverde hoeveelheid.

| | |
|---|---|
| **Invoer → uitvoer** | geometry, method → m², delivered value, deviation |
| **Bij falen** | REVIEW_REQUIRED (deviation too large) |
| **Type** | Generiek |
| **Status** | Gesloten |
| **Gebruikt in** | [#3](#pc-regel-3), [#5](#pc-regel-5), [#7](#pc-regel-7), [#8](#pc-regel-8), [#9](#pc-regel-9), [#12](#pc-regel-12), [#13](#pc-regel-13), [#16](#pc-regel-16), [#17](#pc-regel-17) |

**Implementatie.** Methods: PROJECTED, NEN2580_BVO, NEN2580_GO, NEN2057_FLOOR, NTA8800_OPENING. Compare with the Qto value from the model (ILS AC6).

### F26 — INTERSECT_AREAS {#f26}

Geeft het deel dat twee vlakken gemeen hebben.

| | |
|---|---|
| **Invoer → uitvoer** | area, area → area |
| **Bij falen** | — |
| **Type** | Generiek |
| **Status** | Open |
| **Gebruikt in** | [#3](#pc-regel-3), [#7](#pc-regel-7) |

**Implementatie.** Polygon intersection from a geometry library. To be merged with F14 into one BOOLEAN_OPERATION.

<div class="issue" title="Open vraag">

Merge with F14 into one BOOLEAN_OPERATION  
Owner: Siham+peter. Due: 2026-10-16.  
Peter update (logged 6 Oct 2026): Peter lists GeometryBooleanOperation; supports discussion of the proposed F14/F26 merge, not a confirmed merge.

</div>

### F27 — COUNT_STOREYS {#f27}

Telt bouwlagen volgens de definitie in het plan.

| | |
|---|---|
| **Invoer → uitvoer** | model, definition, reference level → count, storeys |
| **Bij falen** | REVIEW_REQUIRED (storey cannot be classified) |
| **Type** | SPARQL |
| **Status** | Open |
| **Gebruikt in** | [#4](#pc-regel-4), [#6](#pc-regel-6) |

**Implementatie.** Read storeys (ILS 9.06a), classify each one (basement, ground, attic, mezzanine) against the reference level and the plan's definition, then count. Harder than it looks.

<div class="issue" title="Open vraag">

Storey classification via 9.06a; storey definition (basement, attic, mezzanine)  
Owner: Lex, Municipalities. Due: 2026-10-16.

</div>

### F28 — GET_PROPERTY {#f28}

Leest één eigenschap van een element.

| | |
|---|---|
| **Invoer → uitvoer** | element, Pset.Property → value |
| **Bij falen** | missing → empty (IDS reports it) |
| **Type** | SPARQL |
| **Status** | Gesloten |
| **Gebruikt in** | [#8](#pc-regel-8), [#10](#pc-regel-10), [#11](#pc-regel-11), [#12](#pc-regel-12) |

**Implementatie.** Read the property from the buildingSMART property set (SPARQL or IFC API).

### F29 — GET_BBL_REQUIREMENT {#f29}

Zoekt via de Bbl-sturingstabel de vereiste waarde voor een gebruiksfunctie.

| | |
|---|---|
| **Invoer → uitvoer** | article, use function, subject, date → value + article reference |
| **Bij falen** | INSUFFICIENT_DATA (use function unknown) |
| **Type** | Open |
| **Status** | Open |
| **Gebruikt in** | [#7](#pc-regel-7), [#8](#pc-regel-8), [#9](#pc-regel-9), [#10](#pc-regel-10), [#11](#pc-regel-11), [#12](#pc-regel-12), [#13](#pc-regel-13), [#14](#pc-regel-14), [#15](#pc-regel-15), [#16](#pc-regel-16), [#17](#pc-regel-17) |

**Implementatie.** Look up the machine-readable Bbl table valid on the application date. Never hard-code Bbl values.

<div class="issue" title="Open vraag">

Machine-readable Bbl steering tables: is RegelRecht building these?  
Owner: RegelRecht. Due: 2026-10-09.

</div>

### F30 — GET_APPLICATION_DATA {#f30}

Leest een veld uit de DSO-aanvraag (bijv. SBI-code).

| | |
|---|---|
| **Invoer → uitvoer** | application, field → value |
| **Bij falen** | missing → empty |
| **Type** | Open |
| **Status** | Open |
| **Gebruikt in** | [#3](#pc-regel-3), [#5](#pc-regel-5) |

**Implementatie.** Read the field from the DSO application, probably through an API with some processing.

<div class="issue" title="Open vraag">

Can application data (SBI code, buildings to demolish) come via a DSO API?  
Owner: RegelRecht. Due: 2026-10-09.

</div>

### F31 — MEASURE_CLEAR_DIMENSIONS {#f31}

Meet de vrije breedte en vrije hoogte van een deur, doorgang, route of ruimte.

| | |
|---|---|
| **Invoer → uitvoer** | object → clear width, clear height |
| **Bij falen** | REVIEW_REQUIRED (not measurable) |
| **Type** | Generiek |
| **Status** | Open |
| **Gebruikt in** | [#9](#pc-regel-9), [#10](#pc-regel-10), [#16](#pc-regel-16) |

**Implementatie.** Doors: from OverallWidth / OverallHeight minus frame. Passages and routes: narrowest cross-section in the geometry.

<div class="issue" title="Open vraag">

Clear width/height of doors and passages in IDS? How are clear dimensions measured?  
Owner: Lex, Municipalities. Due: 2026-10-16.

</div>

### F32 — MEASURE_HEIGHT_DIFFERENCE {#f32}

Meet het hoogteverschil tussen twee vloeren, of tussen een vloer en het aansluitende terrein.

| | |
|---|---|
| **Invoer → uitvoer** | a, b → m |
| **Bij falen** | — |
| **Type** | Generiek |
| **Status** | Open |
| **Gebruikt in** | [#10](#pc-regel-10), [#15](#pc-regel-15) |

**Implementatie.** Difference of the top levels of two slabs, or of a floor and the terrain height (AHN / municipal data) at the access.

<div class="issue" title="Open vraag">

How vendors measure height differences  
Owner: Vendors. Due: 2026-10-09.

</div>

### F33 — BUILD_ROUTE_NETWORK {#f33}

Bouwt het beloopbare netwerk van ruimten, deuren, trappen en hellingbanen.

| | |
|---|---|
| **Invoer → uitvoer** | model, mode (ACCESS / ESCAPE) → network |
| **Bij falen** | REVIEW_REQUIRED (spaces not connected) |
| **Type** | Generiek |
| **Status** | Open |
| **Gebruikt in** | [#9](#pc-regel-9), [#10](#pc-regel-10), [#14](#pc-regel-14), [#15](#pc-regel-15), [#16](#pc-regel-16) |

**Implementatie.** Graph with spaces, doors, stairs and ramps as nodes; edges from second-level space boundaries (BM13-S11). ESCAPE mode leaves out lifts and windows.

<div class="issue" title="Open vraag">

Can the route network be shared or made public?  
Owner: DStudio / Vendors. Due: 2026-10-09.

</div>

### F34 — FIND_ROUTE {#f34}

Vindt de kortste route tussen twee plekken in het netwerk.

| | |
|---|---|
| **Invoer → uitvoer** | network, from, to → path, length, elements passed |
| **Bij falen** | none found → empty |
| **Type** | Generiek |
| **Status** | Open |
| **Gebruikt in** | [#9](#pc-regel-9), [#10](#pc-regel-10), [#14](#pc-regel-14), [#16](#pc-regel-16) |

**Implementatie.** Shortest path (e.g. Dijkstra) on the network from F33, with an agreed walking line.

<div class="issue" title="Open vraag">

Can route finding be shared or made public?  
Owner: DStudio / Vendors. Due: 2026-10-09.

</div>

### F35 — GET_MAX_WALKING_DISTANCE {#f35}

Vindt het verst gelegen punt van een gebied en de loopafstand naar de dichtstbijzijnde uitgang.

| | |
|---|---|
| **Invoer → uitvoer** | area, exits, network → point, distance |
| **Bij falen** | — |
| **Type** | SPARQL |
| **Status** | Gesloten |
| **Gebruikt in** | [#15](#pc-regel-15) |

**Implementatie.** Sample points over the area, compute the walking distance through the network to the nearest exit, return the maximum.

### F36 — GET_ENCLOSING_ELEMENTS {#f36}

Geeft de wanden, vloeren, deuren en ramen rond een zone en wat aan de andere kant ligt.

| | |
|---|---|
| **Invoer → uitvoer** | zone → elements with adjacent condition (outside, ground, other zone) |
| **Bij falen** | REVIEW_REQUIRED (gaps in the enclosure) |
| **Type** | SPARQL |
| **Status** | Gesloten |
| **Gebruikt in** | [#7](#pc-regel-7), [#8](#pc-regel-8), [#11](#pc-regel-11), [#12](#pc-regel-12), [#13](#pc-regel-13), [#15](#pc-regel-15), [#17](#pc-regel-17) |

**Implementatie.** Use second-level space boundaries (IfcRelSpaceBoundary) to find the bounding elements and the space or condition on the other side.

### F37 — PARSE_FIRE_RATING {#f37}

Zet een brandwerendheidstekst om in criteria en minuten.

| | |
|---|---|
| **Invoer → uitvoer** | text (e.g. 'REI 60') → criteria, minutes |
| **Bij falen** | REVIEW_REQUIRED (not readable) |
| **Type** | SPARQL |
| **Status** | Gesloten |
| **Gebruikt in** | [#8](#pc-regel-8) |

**Implementatie.** Parse EN 13501-2 notation: letters R, E, I, W, … and the number of minutes.

### F38 — MIRROR_AT_BOUNDARY {#f38}

Maakt de gespiegelde referentiegeometrie voor de brandveiligheidscheck; nut en meetmethode worden nog beoordeeld.

| | |
|---|---|
| **Invoer → uitvoer** | geometry, boundary → mirrored geometry |
| **Bij falen** | — |
| **Type** | Mogelijk niet nodig |
| **Status** | Eerste feedback ontvangen |
| **Gebruikt in** | [#7](#pc-regel-7), [#17](#pc-regel-17) |

**Implementatie.** Pending clarification: determine the applicable mirror-symmetry method, façade geometry, reference boundary and distance accuracy. Peter to develop pseudocode after the scope is confirmed. PDOK / 3D BAG is a possible geometry source, not an agreed substitute for the method.

<div class="issue" title="Open vraag">

First feedback received. Clarify whether mirror symmetry is required and the façade-based distance measurement and accuracy. Assess whether PDOK / 3D BAG supplies the necessary geometry; replacement of the mirror principle is not decided.  
Owner: Gerlof. Due: 2026-10-09. Follow-up: Peter to develop pseudocode.  
Sources: https://iplo.nl/regelgeving/regels-voor-activiteiten/technische-bouwactiviteit/nieuwbouw/rijksregels/brandcompartiment/spiegelsymmetrie/  
https://bvmgroepnederland.nl/kennispublicaties/spiegelsymmetrie/

</div>

### F39 — DERIVE_RC_FROM_U {#f39}

Leidt de warmteweerstand Rc af uit een U-waarde.

| | |
|---|---|
| **Invoer → uitvoer** | U, element kind → Rc (indicative) |
| **Bij falen** | — |
| **Type** | SPARQL |
| **Status** | Open |
| **Gebruikt in** | [#11](#pc-regel-11) |

**Implementatie.** Rc = 1/U minus the standard surface resistances for that element kind. Indicative only; a supplied BENG calculation is leading.

<div class="issue" title="Open vraag">

Can the ILS/IDS deliver U / Rc values on elements?  
Owner: Lex. Due: 2026-10-16.

</div>

### F40 — CALCULATE_EQUIVALENT_DAYLIGHT_AREA {#f40}

Berekent de equivalente daglichtoppervlakte; toepassing en omgang met omliggende bebouwing worden nog beoordeeld.

| | |
|---|---|
| **Invoer → uitvoer** | space, openings, applicable rule profile, relevant obstructions if required → m² |
| **Bij falen** | REVIEW_REQUIRED (opening or obstruction not determinable) |
| **Type** | Samengesteld |
| **Status** | Open |
| **Gebruikt in** | [#17](#pc-regel-17) |

**Implementatie.** Pending clarification of Bbl / NEN 2057 scope and exclusions. Specify the relevant openings, obstructions and factors before writing pseudocode. Do not automatically include surrounding buildings. Revising or removing this function remains an open decision.

<div class="issue" title="Open vraag">

Clarify the daylight checking scope: the internal review questions using surrounding buildings for the Bbl check. Review the applicable Bbl provisions and NEN 2057 before deciding whether to revise or remove the function.  
Owner: Gerlof; Siham to clarify the proposal. Due: 2026-10-09.  
Source: https://iplo.nl/regelgeving/regels-voor-activiteiten/technische-bouwactiviteit/nieuwbouw/rijksregels/daglichttoetreding/

</div>

### F41 — GET_EXTERNAL_CALCULATION {#f41}

Leest de hoofdresultaten van een berekening die de aanvrager aanlevert (MPG, BENG, WBDBO, gelijkwaardigheid).

| | |
|---|---|
| **Invoer → uitvoer** | application, type → results, tool, version, date |
| **Bij falen** | INSUFFICIENT_DATA (not supplied) |
| **Type** | Open |
| **Status** | Open |
| **Gebruikt in** | [#7](#pc-regel-7), [#11](#pc-regel-11), [#12](#pc-regel-12), [#13](#pc-regel-13) |

**Implementatie.** Read the results from the supplied document or file; record tool, version and date. Possibly IFC properties in future (NTA 8800 parameters).

<div class="issue" title="Open vraag">

MPG / BENG / WBDBO results as IFC properties? Confirm NTA 8800 with Peter  
Owner: Lex, DStudio / Vendors. Due: 2026-10-16.

</div>

### F42 — GET_OCCUPANCY {#f42}

Geeft het aantal personen waarvoor een zone is ontworpen.

| | |
|---|---|
| **Invoer → uitvoer** | zone → persons |
| **Bij falen** | missing → empty |
| **Type** | SPARQL |
| **Status** | Open |
| **Gebruikt in** | [#15](#pc-regel-15), [#16](#pc-regel-16) |

**Implementatie.** Read the occupancy property of the zone (ILS 9.10c); otherwise a default table by building type and size (to be agreed).

<div class="issue" title="Open vraag">

Occupancy per zone in IDS, or a default table by building type and size?  
Owner: Lex. Due: 2026-10-16.

</div>

### F43 — CALCULATE_WBDBO {#f43}

Berekent hoeveel minuten brand nodig heeft om over te slaan tussen compartimenten of naar het gespiegelde gebouw (NEN 6068).

| | |
|---|---|
| **Invoer → uitvoer** | from, to → minutes |
| **Bij falen** | REVIEW_REQUIRED |
| **Type** | Samengesteld |
| **Status** | Open |
| **Gebruikt in** | [#7](#pc-regel-7) |

**Implementatie.** NEN 6068 calculation from the fire resistance of the separating elements and the distances. At lower maturity the value is taken from a supplied calculation (F41).

<div class="issue" title="Open vraag">

Explain the NEN 6068 calculation; then write pseudocode  
Owner: Fire-safety expert. Due: 2026-10-09.

</div>

### F44 — CALCULATE_FLOW_CAPACITY {#f44}

Berekent hoeveel personen een vluchtroute kunnen passeren (Bbl art. 4.80).

| | |
|---|---|
| **Invoer → uitvoer** | route → persons |
| **Bij falen** | REVIEW_REQUIRED |
| **Type** | SPARQL |
| **Status** | Open |
| **Gebruikt in** | [#16](#pc-regel-16) |

**Implementatie.** Table lookup from the clear width (F31) following Bbl art. 4.80.

<div class="issue" title="Open vraag">

Bbl 4.80 table machine-readable?  
Owner: RegelRecht. Due: 2026-10-09.

</div>

### F45 — MEASURE_DISTANCE {#f45}

Meet de rechte afstand tussen twee punten of elementen.

| | |
|---|---|
| **Invoer → uitvoer** | a, b → m |
| **Bij falen** | — |
| **Type** | Generiek |
| **Status** | Gesloten |
| **Gebruikt in** | [#15](#pc-regel-15) |

**Implementatie.** Euclidean distance between points, or minimum distance between two geometries.

### F46 — GET_3D_SURROUNDINGS {#f46}

Haalt de bestaande gebouwen rond de locatie in 3D op, met hun hoogte.

| | |
|---|---|
| **Invoer → uitvoer** | location, search radius → building solids (LoD2) with BAG id and height in m NAP |
| **Bij falen** | REVIEW_REQUIRED (no 3D data, or data outdated) |
| **Type** | Generiek |
| **Status** | Open |
| **Gebruikt in** | nog in geen workflow |

**Implementatie.** Call 3D BAG (LoD2) for a radius around the site in EPSG:7415; store a dated snapshot. Used for real obstructions in daylight; does not replace the mirror for fire safety.

**Opmerking.** suggestion to chang mirror building

<div class="issue" title="Open vraag">

New 5 Oct: which LoD and radius? Missing or outdated buildings? (Gerlof, 9 Oct)

</div>

### F47 — GET_PERMITTED_ENVELOPE {#f47}

Bouwt het 3D-volume dat de buurman mag bouwen (3D-bestemmingsregeling).

| | |
|---|---|
| **Invoer → uitvoer** | neighbouring parcel, zoning plan → buildable solid (building plane extruded to maximum height) |
| **Bij falen** | INSUFFICIENT_DATA (plan values not machine-readable) |
| **Type** | Samengesteld |
| **Status** | Open |
| **Gebruikt in** | nog in geen workflow |

**Implementatie.** Take the building plane and maximum height of the neighbouring zone from STOP/TPOD and extrude it to a 3D solid. Vision: more realistic than the mirror; today only as an equivalent solution (gelijkwaardigheid), case by case.

<div class="issue" title="Open vraag">

New 5 Oct: plan values available in 3D? Accepted as equivalence? (Gerlof, RegelRecht, fire-safety expert, 16 Oct)

</div>

---

## Geometrie-operaties in het VNG Portaal {#pc-geometrie}

Peter Bonsma (RDF Ltd) bouwt in het VNG Portaal een set geometrie-operaties. Deze tabel legt vast welke standaardfunctie elke operatie mogelijk invult. Geen enkele koppeling is al bevestigd.

| Operatie | Doel | Mogelijke functie | Stand | Volgende stap | Eigenaar |
|---|---|---|---|---|---|
| `GeometryBoundingBox` | Bounding box around geometry | [F02](#f02) — GET_BOUNDING_BOX | Peter reports building the listed operations; completion not demonstrated | Confirm contract, axis alignment and test cases | Peter |
| `GeometrySphere` | Primitive for software validation only | No compliance function ID assigned | Software-validation fixture; completion not demonstrated | Define expected geometry and test assertions | Peter |
| `GeometryBox` | Primitive for software validation only | No compliance function ID assigned | Software-validation fixture; completion not demonstrated | Define expected geometry and test assertions | Peter |
| `GeometryCylinder` | Primitive for software validation only | No compliance function ID assigned | Software-validation fixture; completion not demonstrated | Define expected geometry and test assertions | Peter |
| `GeometryTransformation` | Transform geometry | [F09](#f09) — TO_WORLD_COORDINATES (candidate) | Building reported; correspondence to F09 not confirmed | Confirm transformation scope, CRS, rotation, scale and units | Peter |
| `GeometryBooleanOperation` | Boolean geometry operation | [F14](#f14) / [F26](#f26) — proposed shared operation | Building reported; merge decision remains open | Confirm supported operations, dimensionality, tolerances and ID mapping | Siham + Peter |
| `GeometryColor` | Geometry colour / presentation helper (role to confirm) | No direct compliance function mapping identified | Listed by Peter; compliance role not established | Confirm whether this is a visualisation helper | Peter |
| `GeometryProjection` | Projection based on a definable plane | [F07](#f07) — PROJECT_TO_2D (candidate; currently XY plane) | Building reported; broader plane contract not agreed | Confirm plane definition and relationship to current XY projection | Peter |
