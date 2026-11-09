# BM13 Rule Specification Guide for Software Vendors


## Contents

- [Start here — reading guide for vendors](#start-here--reading-guide-for-vendors)
- [1. Purpose, scope and conventions](#1-purpose-scope-and-conventions)
- [2. Processing pipeline and data (applies to every check)](#2-processing-pipeline-and-data-applies-to-every-check)
- [3. Common result model](#3-common-result-model)
- [4. Generic function library](#4-generic-function-library)
- [5. Check #1 — BM13-R01 Use function matches the designation ("Wonen")](#5-check-1--bm13-r01-use-function-matches-the-designation-wonen)
- [6. Check #2 — BM13-R02 Maximum building height](#6-check-2--bm13-r02-maximum-building-height)
- [Checks #3–#6 — Omgevingsplan (OPA)](#checks-36--omgevingsplan-opa)
  - [BM13-R03 — Maximum building coverage percentage (ILS check #3)](#bm13-r03--maximum-building-coverage-percentage-ils-check-3)
  - [BM13-R04 — Use function limited to x storeys (ILS check #4)](#bm13-r04--use-function-limited-to-x-storeys-ils-check-4)
  - [BM13-R05 — Home-based business: maximum share of usable floor area (ILS check #5)](#bm13-r05--home-based-business-maximum-share-of-usable-floor-area-ils-check-5)
  - [BM13-R06 — Maximum number of storeys (ILS check #6)](#bm13-r06--maximum-number-of-storeys-ils-check-6)
- [Checks #7–#17 — Bbl (TBA)](#checks-717--bbl-tba)
  - [BM13-R07 — Fire compartments (ILS check #7)](#bm13-r07--fire-compartments-ils-check-7)
  - [BM13-R08 — Fire resistance (ILS check #8)](#bm13-r08--fire-resistance-ils-check-8)
  - [BM13-R09 — Clear width (ILS check #9)](#bm13-r09--clear-width-ils-check-9)
  - [BM13-R10 — Height difference (ILS check #10)](#bm13-r10--height-difference-ils-check-10)
  - [BM13-R11 — Rc value (ILS check #11)](#bm13-r11--rc-value-ils-check-11)
  - [BM13-R12 — U value (ILS check #12)](#bm13-r12--u-value-ils-check-12)
  - [BM13-R13 — MPG, environmental performance (ILS check #13)](#bm13-r13--mpg-environmental-performance-ils-check-13)
  - [BM13-R14 — Escape routes (ILS check #14)](#bm13-r14--escape-routes-ils-check-14)
  - [BM13-R15 — Walking distance (ILS check #15)](#bm13-r15--walking-distance-ils-check-15)
  - [BM13-R16 — Escape width (ILS check #16)](#bm13-r16--escape-width-ils-check-16)
  - [BM13-R17 — Daylight (ILS check #17)](#bm13-r17--daylight-ils-check-17)
- [7. Conformance test cases](#7-conformance-test-cases)
- [8. Review notes on the source PDF (for rule owners)](#8-review-notes-on-the-source-pdf-for-rule-owners)
- [9. Open questions for rule owners](#9-open-questions-for-rule-owners)
- [Annex A — Data requirement register (DR IDs) and IDS](#annex-a--data-requirement-register-dr-ids-and-ids)
- [Annex B — BM13 supplementary IDS (bm13-supplement.ids, v0.3)](#annex-b--bm13-supplementary-ids-bm13-supplementids-v03)

## Start here — reading guide for vendors

**What this is.** The vendor specification of the BM13 checks. For each of the 17 checks of the *ILS Omgevingsvergunning*, it says what the check means, which steps and standard functions you implement, which data you may rely on, and what result you return. The ILS says **what the applicant delivers** (layer 2); this guide says **how your software checks it** (layers 0, 1 and 3 are binding; layers 4 and 5 are examples). Section 1.5 connects the two documents chapter by chapter.

### What you implement — five building blocks

| # | Building block | Where | Done when |
| --- | --- | --- | --- |
| 1 | **Intake:** accept the IFC model, run the IDS files of the check (ILS IDS + BM13 supplement), validate the georeferencing | [§2](#2-processing-pipeline-and-data-applies-to-every-check), [§1.5](#15-relation-to-the-ils-omgevingsvergunning), [Annex A.3](#a3-the-bm13-supplementary-ids) | IDS results equal those of the reference IDS tool |
| 2 | **Standard functions** F00–F45, each with its fixed contract | [§4](#4-generic-function-library) | Every function meets its card: input, output, behaviour, on failure |
| 3 | **Check logic** per check (Layer 3 pseudocode) | [§5](#5-check-1--bm13-r01-use-function-matches-the-designation-wonen), [§6](#6-check-2--bm13-r02-maximum-building-height), [#3–#6](#checks-36--omgevingsplan-opa), [#7–#17](#checks-717--bbl-tba) | Same steps, same functions, same parameters |
| 4 | **Result object** and result precedence | [§3](#3-common-result-model) | Every check returns a `RuleCheckResult` with values, evidence, sources and notes |
| 5 | **Conformance tests** | [§7](#7-conformance-test-cases) | Expected status and evidence for every test case |

**Conformance in one sentence:** an implementation is conformant for a check when, on the reference test models, it returns the same status and the same evidence as the reference — whatever technology it uses.

### Document map

| Part | Contents | Section |
| --- | --- | --- |
| Foundations | Purpose, six-layer model, naming, the 17 checks at a glance, relation to the ILS | [§1](#1-purpose-scope-and-conventions) |
| Pipeline and data | Input, processing steps, generic BIM and GEO data specification (Layer 2) | [§2](#2-processing-pipeline-and-data-applies-to-every-check) |
| Results | Result model, pseudocode notation, result precedence | [§3](#3-common-result-model) |
| Functions | Standard function catalogue and cards F00–F45 | [§4](#4-generic-function-library) |
| Checks | #1 in [§5](#5-check-1--bm13-r01-use-function-matches-the-designation-wonen) and #2 in [§6](#6-check-2--bm13-r02-maximum-building-height) (worked out in full, incl. layers 4–5); #3–#6 and #7–#17 in the [Omgevingsplan](#checks-36--omgevingsplan-opa) and [Bbl](#checks-717--bbl-tba) parts | [§5](#5-check-1--bm13-r01-use-function-matches-the-designation-wonen), [§6](#6-check-2--bm13-r02-maximum-building-height), [#3–#6](#checks-36--omgevingsplan-opa), [#7–#17](#checks-717--bbl-tba) |
| Conformance | Test cases | [§7](#7-conformance-test-cases) |
| For rule owners | Review of the source PDF; open interpretation questions | [§8](#8-review-notes-on-the-source-pdf-for-rule-owners), [§9](#9-open-questions-for-rule-owners) |
| [Annex A](#annex-a--data-requirement-register-dr-ids-and-ids) | Data requirement register, BM13 IDS supplement, minimum requirement sets | [Annex A](#annex-a--data-requirement-register-dr-ids-and-ids) |

### Suggested implementation order

A proposal, aligned with the ILS implementation path (pilot 2026, scale-up 2027). Each wave reuses the functions of the waves before it.

| Wave | Checks | New functions | Why this order | Target |
| --- | --- | --- | --- | --- |
| 1 | #1, #2, #4, #6 | F00–F04, F07–F16, F18–F24, F27 | Omgevingsplan checks needed at ILS milestone M2; small function set | Q4 2026 (pilot) |
| 2 | #3, #5, #12, #13 | F05, F25, F26, F28–F30, F36, F41 | Area- and property-based; reuse the wave-1 pipeline | Q1 2027 |
| 3 | #7, #8, #9, #14, #15, #16 | F31–F35, F37, F38, F42–F45 | Need the route network and space boundaries (S11) | Q2 2027 |
| 4 | #10, #11, #17 | F39, F40 | Most interpretation and external calculation | Q3 2027 |

### Not final yet

- Test cases are written for all 17 checks ([§7](#7-conformance-test-cases)); the IFC test files for #3–#17 are still to be built.
- The machine-readable Bbl table (DR-LAW-01) that F29 reads does not exist yet.
- Rule-profile values — e.g. the reference-level method per zone — are set by each municipality ([§9](#9-open-questions-for-rule-owners)).
- The BM13 supplement S01–S15 is a change proposal to the ILS editors ([Annex A.4](#a4-gaps-to-raise-with-the-ils-editors), A.6).

## 1. Purpose, scope and conventions

This guide tells every software vendor, in one shared language, **what** a BM13 rule checks, **which da****ta** it needs, and **how the result must be computed and reported** — without prescribing **which technology** to use. A vendor may implement a rule with SPARQL/SHACL on a triple store, with a C#/Java/Python rule engine, or as a semi-automated viewer workflow. The implementation is conformant when it produces the same result as the reference test cases in [section 7](#7-conformance-test-cases).

### 1.1 Normative and informative text

| Marker | Meaning | Binding for vendors? |
| --- | --- | --- |
| **SHALL / SHALL NOT** | Requirement | Yes |
| **SHOULD** | Recommendation; deviation must be documented | Partly |
| **MAY** | Option | No |
| *Example implementation* (in italics) | How the VNG reference implementation does it (Apache Jena Fuseki, GEOM ontology, BINX/Base64 geometry, RDF Geometry Kernel) | No — illustrative only |

The choices for ifcOWL, CityRDF, GEOM and even RDF itself are **derived choices**. SPARQL/SHACL is used to write the rules down neutrally *as data*; a vendor may translate them into any public or proprietary format.

### 1.2 The six-layer model

Every rule in this guide is written in the same six layers. Layers 0–4 are **shared and normative**; layer 5 is **vendor-specific**.

| Layer | Question it answers | Owner | Form |
| --- | --- | --- | --- |
| 0 — Legal meaning | What does the rule mean? | Municipality / rule owner | Rule foundation: text + interpretation choices |
| 1 — Minimum requirements | What must be available before the check can run? | VNG / BM13 | Numbered requirements M01…, each MUST / SHOULD / MAY |
| 2 — Mapping | Where does each requirement come from: which IFC entity, ILS IDS file, BM13 supplement, GEO standard? | VNG / BM13 | Mapping table per requirement |
| 3 — Steps, functions and pseudocode | Which steps and standard functions compute the check? | VNG / BM13 | Step table + technology-neutral pseudocode |
| 4 — Machine-readable rule | How is it represented as data? | VNG / BM13 | RDF parameters + SPARQL + SHACL |
| 5 — Implementation | How does product X run it? | Vendor | Any technology |

In the ILS layer model (ILS [§1.3](#13-naming-conventions)), layer 1 is the method and layer 2 the data requirements. This guide keeps the ILS data requirements but splits them into **Layer 1** (what is needed) and **Layer 2** (where it comes from), and places the method — the steps — in **Layer 3**, next to the pseudocode that implements them.

> **Key principle:** every vendor may implement the rule differently, but the **interpretation, inputs, derived properties, comparison and result definition** stay identical.

### 1.3 Naming conventions

- **Rule IDs:** `BM13-Rnn` (e.g. `BM13-R01`).
- **Generic functions:** `Fnn` with an UPPER\_SNAKE\_CASE name ([section 4](#4-generic-function-library)).
- **Derived properties** (values computed once and reused by several rules): `DER-nn` (e.g. `DER-03 BuildingHeight`).
- **Parameters** that a municipality may set per rule: written in `camelCase` and stored in the rule's RDF description, never hard-coded in the software.

### 1.4 The 17 checks at a glance

Checks #1 and #2 are worked out in [§5](#5-check-1--bm13-r01-use-function-matches-the-designation-wonen) and [§6](#6-check-2--bm13-r02-maximum-building-height). Checks #3–#6 are in [Checks #3–#6 — Omgevingsplan](#checks-36--omgevingsplan-opa) and checks #7–#17 in [Checks #7–#17 — Bbl](#checks-717--bbl-tba), in exactly the same template. Rule ID `BM13-Rnn` = ILS check #nn.

| # | Check | Rule ID | ILS activity | ILS milestone | Where | Minimum set | Automation |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | Use function matches the designation | BM13-R01 | OPA (ID01) | M1\*, M2, M3 | [§5](#5-check-1--bm13-r01-use-function-matches-the-designation-wonen) | MR-R01 | full |
| 2 | Maximum building height | BM13-R02 | OPA (ID01) | M1\*, M2, M3 | [§6](#6-check-2--bm13-r02-maximum-building-height) | MR-R02 | full |
| 3 | Maximum building coverage % | BM13-R03 | OPA (ID01) | M1\*, M2, M3 | [BM13-R03](#bm13-r03--maximum-building-coverage-percentage-ils-check-3) | MR-R03 | full; existing buildings may need review |
| 4 | Use function limited to x storeys | BM13-R04 | OPA (ID01) | M1\*, M2, M3 | [BM13-R04](#bm13-r04--use-function-limited-to-x-storeys-ils-check-4) | MR-R04 | full |
| 5 | Home-based business share | BM13-R05 | OPA (ID01) | M1\*, M2, M3 | [BM13-R05](#bm13-r05--home-based-business-maximum-share-of-usable-floor-area-ils-check-5) | MR-R05 | full; activity may need review |
| 6 | Maximum number of storeys | BM13-R06 | OPA (ID01) | M1\*, M2, M3 | [BM13-R06](#bm13-r06--maximum-number-of-storeys-ils-check-6) | MR-R06 | full; storey definition may need review |
| 7 | Fire compartments | BM13-R07 | TBA (ID02) | M3 | [BM13-R07](#bm13-r07--fire-compartments-ils-check-7) | MR-R07 | partial (WBDBO) |
| 8 | Fire resistance | BM13-R08 | TBA (ID02) | M3 | [BM13-R08](#bm13-r08--fire-resistance-ils-check-8) | MR-R08 | full when ratings are modelled |
| 9 | Clear width | BM13-R09 | TBA (ID02) | M3 | [BM13-R09](#bm13-r09--clear-width-ils-check-9) | MR-R09 | full |
| 10 | Height difference | BM13-R10 | TBA (ID02) | M3 | [BM13-R10](#bm13-r10--height-difference-ils-check-10) | MR-R10 | partial (rain protection) |
| 11 | Rc value | BM13-R11 | TBA (ID02) | M3 | [BM13-R11](#bm13-r11--rc-value-ils-check-11) | MR-R11 | partial (BENG calculation leading) |
| 12 | U value | BM13-R12 | TBA (ID02) | M3 | [BM13-R12](#bm13-r12--u-value-ils-check-12) | MR-R12 | full |
| 13 | MPG | BM13-R13 | TBA (ID02) | M3 | [BM13-R13](#bm13-r13--mpg-environmental-performance-ils-check-13) | MR-R13 | assisted (score from the supplied calculation) |
| 14 | Escape routes | BM13-R14 | TBA (ID02) | M3 | [BM13-R14](#bm13-r14--escape-routes-ils-check-14) | MR-R14 | full |
| 15 | Walking distance | BM13-R15 | TBA (ID02) | M3 | [BM13-R15](#bm13-r15--walking-distance-ils-check-15) | MR-R15 | full |
| 16 | Escape width | BM13-R16 | TBA (ID02) | M3 | [BM13-R16](#bm13-r16--escape-width-ils-check-16) | MR-R16 | partial (door opening angle) |
| 17 | Daylight | BM13-R17 | TBA (ID02) | M3 | [BM13-R17](#bm13-r17--daylight-ils-check-17) | MR-R17 | partial (NEN 2057) |

\* indicative at M1 (preliminary consultation), see [§1.5](#15-relation-to-the-ils-omgevingsvergunning).

### 1.5 Relation to the ILS Omgevingsvergunning

The *ILS Omgevingsvergunning* (VNG, working version 0.1.0) and this guide are two halves of one chain.

|  | ILS Omgevingsvergunning | This guide |
| --- | --- | --- |
| Audience | Applicant, modeller, municipality | Software vendor, rule owner |
| Answers | What information is delivered, in which format, when and by whom | What each check means, how software runs it, what it returns |
| Six-layer model (ILS [§1.3](#13-naming-conventions)) | Layer 2 — data requirements, for all 17 checks | Layers 0, 1 and 3 (binding); 4 and 5 (examples); per check a selection of layer 2 |
| Machine-readable part | 42 IDS files (folder `ids/`) | BM13 supplement `bm13-supplement.ids` ([Annex B](#annex-b--bm13-supplementary-ids-bm13-supplementids-v03)) (S01–S15) and the standard functions |

#### ILS chapter → this guide

| ILS chapter | What it says | Where it lands here |
| --- | --- | --- |
| [§1.3](#13-naming-conventions) Layer model | The ILS is layer 2 for all 17 checks; the check sheets carry the other layers | [§1.2](#12-the-six-layer-model); Layers 0–3 of every check |
| [§3.2](#32-mapping-from-shacl-reports) Information objectives | ID01 = OPA (#1–#6), ID02 = TBA (#7–#17) | [§1.4](#14-the-17-checks-at-a-glance); the check table in Layer 1 of every check |
| [§3.4](#34-standard-result-precedence) The 17 checks | Numbers and names | Rule ID BM13-Rnn = ILS check #nn |
| [§4.2](#4-generic-function-library) Milestones M1–M4 | M1: #1–#6 indicative on a minimum IDS set; M2: #1–#6; M3: #1–#17, ID01 information delivered again | Milestone table below |
| [§5](#5-check-1--bm13-r01-use-function-matches-the-designation-wonen) Table of requirements | IDS files per check | The check table in Layer 1 of every check; the IDS lookup in the tabs |
| [§6.1](#6-check-2--bm13-r02-maximum-building-height)–6.3 LOIN | Alphanumeric requirements per sub-specification | [§2.7](#27-generic-data-specification-layer-2).1 (B-lines); [Annex A.1](#a1-register) (`ILS-9.xx` IDs) |
| [§6.2](#6-check-2--bm13-r02-maximum-building-height) Geometric requirements G1–G6 | Solid, georeferenced, NAP, no duplicates, quantities, NEN 2580 | `ILS-G1`…`G6` in [Annex A.1](#a1-register); B20, B21 in [§2.7](#27-generic-data-specification-layer-2).1 |
| [§7.1](#71-pre-flight-all-rules) Acceptance criteria AC1–AC7 | Admissibility of the model | Intake — mapping below |
| [§7.2](#72-bm13-r01-bestemming) Who checks | The same IDS files for applicant and municipality; IDS tool certification as reference | F00 uses exactly those IDS files; [§7](#7-conformance-test-cases) conformance |
| [§8.4](#8-review-notes-on-the-source-pdf-for-rule-owners) Agreements on the IFC model | IFC 4.3, units, georeferencing, storey names, no proxies, `ObjectType` + bSDD, buildingSMART Psets only | [§2.1](#21-input-requirements), [§2.7](#27-generic-data-specification-layer-2).1; the BM13 supplement follows the same rules |
| [§9.2](#9-open-questions-for-rule-owners) Two-step geometric check | The CAD tool delivers quantities; the recipient recalculates | F25 `CALCULATE_AREA` (delivered vs recalculated) |
| [§9.3](#9-open-questions-for-rule-owners) Technical set-up (layer 4) | SPARQL rules calling generic geometry functions | [§4](#4-generic-function-library) function catalogue; Layer 4 of #1 and #2 |
| [§9.4](#9-open-questions-for-rule-owners) RDF bottleneck | The RDF translation of IFC is not a formal buildingSMART standard | [§1.1](#11-normative-and-informative-text): RDF is a derived choice, not required |
| §10 Reference information | IFC, bSDD, BAG, BRK, BGT, Regels op de kaart, Bbl | [§2.7](#27-generic-data-specification-layer-2).2 (G-lines) |
| §14 Open issues | e.g. OP05 thresholds, OP06 reference IDS tool, OP07 RDF formalisation | [§9](#9-open-questions-for-rule-owners) and [Annex A.4](#a4-gaps-to-raise-with-the-ils-editors) |

#### Acceptance criteria in the check pipeline

The ILS decides admissibility once per delivery. The checks reuse that outcome; a model is never rejected twice.

| ILS criterion | What | Where it runs here | Result if it fails |
| --- | --- | --- | --- |
| AC1 | Valid IFC 4.3 (or IFC4 ADD2 TC1), maximum size | F20 `GET_SUBMITTED_BIM_MODEL` | `INSUFFICIENT_DATA` for every check |
| AC2 | File header filled | Before F00 (line B02) | Note (request for correction) |
| AC3 | All IDS specifications of the milestone | F00 `CHECK_MINIMUM_REQUIREMENTS`, with the IDS files of the check | MUST → `INSUFFICIENT_DATA`; SHOULD → note |
| AC4 | Georeferenced; position within the cadastral parcels | F01 + F21 `VALIDATE_GEOREFERENCE` | `INSUFFICIENT_DATA`; partly outside → `REVIEW_REQUIRED` |
| AC5 | Solid geometry, no duplicates (G1, G4) | F00 geometry checks | G1 → `INSUFFICIENT_DATA`; G4 → note |
| AC6 | Quantities within the threshold (G5) | F25 `CALCULATE_AREA` | `REVIEW_REQUIRED` |
| AC7 | File name convention | F20 (flag only) | Note |

#### Milestones: which checks run when

| ILS milestone | Checks that run | IDS applied by F00 |
| --- | --- | --- |
| M1 Preliminary consultation | #1–#6, **indicative** (advice, not a decision) | The ILS M1 minimum set (9.01a–e, 9.02, 9.03, 9.04, 9.05a, 9.06a, 9.08). Proposal: other missing data gives `REVIEW_REQUIRED` instead of `INSUFFICIENT_DATA` |
| M2 OPA application | #1–#6 | The full IDS list of each check (Layer 1) |
| M3 TBA application | #1–#17; #1–#6 again, to flag changes since M2 | The full IDS list of each check |

#### The BM13 supplement and the ILS

The ILS allows no extra property sets, and the BM13 supplement follows that rule. S01–S15 are **change proposals** to the ILS editors ([Annex A.4](#a4-gaps-to-raise-with-the-ils-editors), A.6). Once the ILS adopts one, its BM13 ID is retired and the ILS number is used instead (governance rule, [Annex A.0](#a0-id-scheme)).

## 2. Processing pipeline and data (applies to every check)

### 2.1 Input requirements

The starting point of every automated check is the submitted building model. The software **SHALL** accept:

1. An IFC file in STEP Physical File Format (`.ifc`), optionally zipped (`.ifczip`), according to **IFC 4.3 (ISO 16739-1:2024)**. IFC4 ADD2 TC1 is allowed while the authoring software does not support IFC 4.3 (ILS Omgevingsvergunning [§8.4](#8-review-notes-on-the-source-pdf-for-rule-owners)).
2. **Georeferencing embedded in the IFC**: `IfcMapConversion` (Eastings, Northings, OrthogonalHeight, XAxisAbscissa/XAxisOrdinate, Scale) linked to an `IfcProjectedCRS` with EPSG:28992 (RD New) or EPSG:7415 (RD New + NAP). Heights relative to NAP. These are data requirements ILS-9.01a and ILS-9.01b ([Annex A](#annex-a--data-requirement-register-dr-ids-and-ids)).
3. The **application location** (address, BAG id or parcel) from the permit application. This is used as a cross-check against the georeferencing, never as a replacement for it.
4. All other model content as listed per rule in its **layer 2 table by DR ID**. The BIM part of every DR ID is checked with IDS before any rule runs ([Annex A.2](#a2-how-the-register-is-used-in-every-rule)).

If any of these is missing, rules that depend on it **SHALL** return `INSUFFICIENT_DATA` ([section 3](#3-common-result-model)) instead of guessing.

### 2.2 Step 1 — Make the model content queryable

The software converts the IFC content into its own internal representation. Conceptually this happens in two parts:

| Part | What | Neutral requirement | *Example implementation* |
| --- | --- | --- | --- |
| A | Non-geometric data (classes, properties, relations, georeferencing) | Every IFC entity, attribute and property set remains traceable to its IFC `GlobalId` | *IFCtoRDF converter (Java) → ifcOWL, output `myfile.ttl`* |
| B | Geometric data (shape of each element) | Each element gets one evaluable geometry, in model coordinates, with the same `GlobalId` | *IFCGeometry2RDF → GEOM ontology, geometry as Base64 BINX string, output `myfile_geometry.trig`* |

Geometry **MAY** be stored with design intent (as in the example) or as a plain mesh (glTF, OBJ, OpenUSD). What matters is that functions F02, F07, F08 and F10 ([section 4](#4-generic-function-library)) can evaluate it.

### 2.3 Step 2 — Load into a data store

Part A and B are loaded into one queryable store (dataset). *The example uses Apache Jena Fuseki with a SPARQL endpoint.* Any commercial or open-source store, or a non-RDF database, is allowed.

### 2.4 Step 3 — Pre-flight validation (always run before any rule)

Three checks protect every rule against wrong conclusions caused by bad input. They are shared across all rules:

1. **Model data complete** → F00 `CHECK_MINIMUM_REQUIREMENTS` runs the IDS files of the check.
2. **Georeferencing present** → F01 `GET_BIM_GEOREFERENCE` returns values.
3. **Georeferencing plausible** → F21 `VALIDATE_GEOREFERENCE`: correct CRS, scale consistent with the model units, model modelled locally (F03), no unit error (F04), model at the application location.

If a pre-flight check fails, all dependent rules **SHALL** return `INSUFFICIENT_DATA` with the pre-flight result attached as evidence.

### 2.5 Step 4 — Enrich with context data (GEO)

Using the georeferenced location, the software retrieves surrounding data from national sources and stores it next to the model:

| Data | Source | Function |
| --- | --- | --- |
| Existing buildings | BAG via PDOK | F05 `GET_PDOK_FEATURES("Buildings")` |
| Cadastral parcels | BRK via PDOK | F05 `GET_PDOK_FEATURES("Parcels")` |
| Regulatory areas (functions, building planes, height rules) | DSO — Regels op de kaart (STOP/TPOD), and IMRO for the temporary part of the omgevingsplan | Zones with value constraints, defined in the rule (no lookup function) |
| Terrain / reference height | Municipal height data, fallback AHN | F11 `GET_REFERENCE_LEVEL` |

### 2.6 Step 5 — Derive properties, then evaluate rules

Heavy geometry is computed **once** by the geometry engine and written back as derived properties (`DER-nn`). Rules then only compare derived values with rule parameters. This keeps SPARQL/SHACL simple and keeps results identical across vendors:

```
IFC + GEO context
   ↓  geometry engine (F02, F07, F08, F10, F12)
Derived properties (DER-01 … DER-nn)
   ↓  rule logic (SPARQL / SHACL / own engine)
Rule results (section 3 result model)
   ↓
VTH interface + evidence (3D view, report)
```

### 2.7 Generic data specification (Layer 2)

This is the **one** data specification for BIM and GEO that all checks draw from. It describes each kind of data once — what it is, where it comes from, in which standard and with which quality — **independent of any check**. The Layer 2 table of each check is only a selection from these lines. The ID in the last column links to the register ([Annex A.1](#a1-register)) and to the IDS files.

#### 2.7.1 BIM data (the submitted IFC model)

| ID | Data | IFC entity / attribute | Standard / format | Quality requirement | Checked by | DR ID |
| --- | --- | --- | --- | --- | --- | --- |
| B01 | Model file | IFC STEP (`.ifc`) | IFC 4.3 (ISO 16739-1:2024); IFC4 ADD2 TC1 allowed | Schema-valid; one file per building | Schema validation (ILS AC1) | — |
| B02 | File header | `FILE_NAME` | ISO 10303-21 | Name, time stamp, author, organisation filled | Header check (ILS AC2) | — |
| B03 | Units | `IfcUnitAssignment` | SI | Length unit declared; objects in mm, georeferencing in m | IDS | — (ILS [§8.4](#8-review-notes-on-the-source-pdf-for-rule-owners)) |
| B04 | Georeferencing | `IfcMapConversion` (Eastings, Northings, OrthogonalHeight, XAxisAbscissa, XAxisOrdinate, Scale), `IfcProjectedCRS` | EPSG:28992 / EPSG:7415, heights in NAP | Exactly one; scale consistent with units; model modelled locally | IDS + F21 | ILS-9.01a, 9.01b |
| B05 | Project | `IfcProject` Name, Description, Phase | ILS 9.02 | Name and description filled | IDS | ILS-9.02 |
| B06 | Addresses | `Pset_Address`, `SiteAddress`, `BuildingAddress` | ILS 9.01c–e | Country NL, postcode, town | IDS | ILS-9.01c–e |
| B07 | Site and parcels in the model | `IfcSite`; cadastral parcel and building plot as `IfcSpatialZone` + `Pset_LandRegistration` | bSDD *Omgevingswet-Ruimten* | Parcel as spatial zone, not as `IfcSite` | IDS | ILS-9.03a, 9.03b, 9.04 |
| B08 | Building | `IfcBuilding`, `Pset_BuildingCommon.BuildingID`, `Pset_BuildingUse.MarketCategory` | ILS 9.05a | Exactly one per file; BAG id or 14× `0` for new build | IDS | ILS-9.05a, BM13-S08 |
| B09 | Storeys | `IfcBuildingStorey` Name, Elevation, `Pset_BuildingStoreyCommon.EntranceLevel` | ILS naming (`00 begane grond`, …) | Same names and levels in all discipline models; one entrance level | IDS | ILS-9.06a, BM13-S07 |
| B10 | Gross volumes | `IfcSpatialZone` *Gebouwinhoud*, *Bouwlaaginhoud* | bSDD *Omgevingswet-Ruimten*; NEN 2580 | Closed solids | IDS + geometry check | ILS-9.05b, 9.06b |
| B11 | Use functions and use units | `IfcZone` with `ObjectType` *Gebruiksfunctie*, *Nevengebruiksfunctie*, *Gebruikseenheid* | bSDD *Omgevingswet-Ruimten*; Bbl use functions | `Name` = Bbl use function (e.g. *Woonfunctie*) | IDS | ILS-9.07, 9.08, 9.09 |
| B12 | Areas | `IfcSpatialZone` *Functiegebied*, *Verblijfsgebied* (+ occupancy), *Gebruiksgebied*, *Bedgebied*, *Restgebied*, *Buitengebied* | bSDD *Omgevingswet-Ruimten* | Closed solids; occupancy where required | IDS | ILS-9.10a–f, 9.11 |
| B13 | Spaces | `IfcSpace` *Functieruimte*, *Verblijfsruimte*, *Bedruimte*, *Restruimte*, *Buitenruimte*; *Tarra ruimte* | bSDD *Omgevingswet-Ruimten*; NEN 2580 | Closed solids; no overlaps | IDS | ILS-9.12a–d, 9.13, 9.17 |
| B14 | Fire-safety zones | `IfcZone` / `IfcSpatialZone` *Brandcompartiment*, *Subbrandcompartiment*, *Vluchtroute* | bSDD *Omgevingswet-Ruimten* | Complete cover of the use areas | IDS | ILS-9.16a–c |
| B15 | Physical elements | `IfcWall`, `IfcSlab` (with PredefinedType), `IfcRoof`, `IfcColumn`, `IfcBeam`, `IfcCurtainWall`, `IfcDoor`, `IfcWindow`, `IfcCovering.INSULATION` | IFC 4.3 | Body geometry; contained in a storey; roof identifiable; no proxies | IDS | ILS-9.18a–i, BM13-S01, S02, S03, S04 |
| B16 | Element properties | `Pset_…Common`: IsExternal, LoadBearing, FireRating, ThermalTransmittance, FireExit, SmokeStop, SelfClosing | buildingSMART property sets only | Filled where the element needs it; fire rating in EN 13501 notation (e.g. `EI 60`) | IDS | ILS-9.18a–i, BM13-S12, S13 |
| B17 | Stairs, ramps, lifts, roof-top installations | `IfcStair`, `IfcRamp` + flight Psets; `IfcTransportElement.ELEVATOR`; `IfcChimney` | IFC 4.3 | Own class and geometry | IDS | BM13-S05, S09, S10 |
| B18 | Doors and windows dimensions | `OverallWidth`, `OverallHeight`; `GlazingAreaFraction` | IFC 4.3 | Filled on every door and window | IDS | BM13-S14, S15 |
| B19 | Space boundaries | `IfcRelSpaceBoundary` (second level) | IFC 4.3 | Exported for all spaces and zones | IDS | BM13-S11 |
| B20 | Quantities | `Qto_…BaseQuantities` | NEN 2580 | Calculated by the authoring tool; deviation from recalculation within the threshold (ILS AC6) | F25 | ILS-G5, ILS-G6 |
| B21 | Geometry quality | all geometry | ILS [§6.2](#6-check-2--bm13-r02-maximum-building-height) | Closed solids (G1); metres (G2); NAP-consistent (G3); no duplicates (G4) | Geometry check | ILS-G1–G4 |
| B22 | Classification and material | NL-SfB table 1; Naa.K.T. | bSDD | Optional for the checks | — | — |

#### 2.7.2 GEO, regulation and supplied data

| ID | Data | Content | Source / standard | Quality requirement | Read by | DR ID |
| --- | --- | --- | --- | --- | --- | --- |
| G01 | Application data | Location (address, BAG ids, parcel ids), activity, SBI code, buildings to demolish | DSO application (Omgevingsloket) | Location present | F19, F30 | DR-APP-01 |
| G02 | Parcels | Parcel geometry and id | BRK (Kadaster) via PDOK | RD New; valid on application date | F05 | DR-GEO-02 |
| G03 | Existing buildings | Footprint, building id, height | BAG via PDOK; 3D BAG for heights | RD New; heights in NAP | F05 | DR-GEO-06, DR-GEO-08 |
| G04 | Public space | Road, water and green surfaces; centre lines | BGT via PDOK | RD New | F11, F38 | DR-GEO-07 |
| G05 | Terrain and road elevation | Surface and road heights | Municipal height data; fallback AHN (DTM) | m NAP; source and resolution recorded | F11, F32 | DR-GEO-04 |
| G06 | Rule zones with value constraints | Zone id, area, value constraints (e.g. maximum height, coverage %, reference-level method), legal source, valid from | Omgevingsplan: STOP/TPOD via DSO (Regels op de kaart, Ozon); temporary part IMRO | Defined in the rule when it is set up; RD New | F23 | DR-GEO-01, 03, 09 |
| G07 | National rules | Bbl steering tables, members and values | wetten.overheid.nl; machine-readable Bbl table | Version valid on the application date | F29 | DR-LAW-01 |
| G08 | Supplied calculations | MPG score; BENG / NTA 8800 values; WBDBO and equivalence | Documents from the applicant | Tool, version and date stated | F41 | DR-DOC-01–03 |
| G09 | Rule profile | Interpretation parameters of each rule | BM13 rule specification (layer 4a) | Set by the municipality; versioned | F23 | DR-REG-nn |

**Generic rules for all GEO and regulation data:** coordinates in RD New (EPSG:28992), heights in m NAP; every value carries its source, id and retrieval date, and a snapshot is stored with the result, so a check can be repeated with the same data.

## 3. Common result model

Every rule **SHALL** end in exactly one of five statuses. A plain pass/fail is not enough: the permit officer must be able to see *why* a rule could not be decided.

| Status | Meaning | Typical cause |
| --- | --- | --- |
| `COMPLIANT` | The rule was evaluated and is met | — |
| `NON_COMPLIANT` | The rule was evaluated and is not met | Height exceeded; element outside designated area |
| `NOT_APPLICABLE` | The rule does not apply at this location or to this project | No height rule in the omgevingsplan here |
| `INSUFFICIENT_DATA` | Required input is missing or failed pre-flight | No `IfcMapConversion`; unit error; API unavailable |
| `REVIEW_REQUIRED` | Data is present but the outcome depends on a human interpretation | Element lies exactly on a boundary; unresolved local exception |

### 3.1 Result object

Each result **SHALL** carry the fields below, whatever the technology (RDF, JSON, database record):

```
RuleCheckResult
    ruleId            e.g. "BM13-R02"
    ruleVersion       version of the rule specification used
    caseId            permit application id
    status            one of the five statuses above
    measuredValue     value computed from the model (if any), with unit
    allowedValue      value from the regulation (if any), with unit
    tolerance         tolerance applied (if any)
    evidence[]        list of { element GlobalId, relation or value, geometry reference }
    sources[]         list of { dataset, id, retrieval date }  e.g. DSO area id, AHN tile
    message           human-readable explanation in Dutch and English
    timestamp         moment of evaluation
```

### 3.2 Mapping from SHACL reports

When SHACL is used, the `sh:ValidationReport` maps to the result model like this:

| SHACL output | Result status |
| --- | --- |
| `sh:conforms true`, rule applicable | `COMPLIANT` |
| `sh:result` with `sh:resultSeverity sh:Violation` | `NON_COMPLIANT` (each `sh:focusNode` becomes an `evidence` entry) |
| `sh:result` with `sh:resultSeverity sh:Warning` | `REVIEW_REQUIRED` |
| Pre-flight shape violated | `INSUFFICIENT_DATA` |
| No applicable rule area found | `NOT_APPLICABLE` (decided before SHACL runs) |

The report **SHOULD** be written back into the store so that later steps (3D highlighting of failing elements, the permit report) can query it.

### 3.3 How to read the pseudocode (applies to every rule)

Every check is written the same way. **Layer 1** lists the minimum requirements (M01, M02, …). **Layer 2** maps each requirement to IFC, the ILS IDS files, the BM13 supplement and GEO standards. **Layer 3** gives the steps — as a step table that names the functions and the requirements each step uses, and as software-independent pseudocode. The pseudocode contains **no implementation code**: it only calls standard functions from [section 4](#4-generic-function-library) and does simple arithmetic and comparisons. Comments `// Step n` link the pseudocode to the step table.

| Notation | Meaning |
| --- | --- |
| `x = FUNCTION_NAME(...)` | Call a standard function from [section 4](#4-generic-function-library) and keep the answer in `x`. The catalogue ID is given in a comment, e.g. `// F11`. |
| `GET_PARAMETER(rule, "name")` | Read a value from the applicable plan rule or from the BM13 rule profile (F23). Values are never hard-coded. A plural name means all values of a repeated property (e.g. `exemptClasses`). |
| `RETURN STATUS WITH { … }` | End the procedure with that status. The values in braces become the result's values and evidence (F18 `MAKE_RESULT`, [section 3.1](#31-result-object)). |
| `list ADD item` | Add an item to a list. |
| `// text` | Explanation only. |
| Units | Lengths in metres, areas in m², heights in m NAP, plan coordinates in RD New (EPSG:28992). |

### 3.4 Standard result precedence

A rule can meet several outcomes while it runs. The final status is decided in the same way for every rule:

1. `INSUFFICIENT_DATA` and `NOT_APPLICABLE` **stop the rule at once**. Nothing after that step runs.
2. Otherwise the most serious finding wins: `NON_COMPLIANT` › `REVIEW_REQUIRED` › `COMPLIANT`.
3. Warnings from SHOULD-level minimum requirements (e.g. a proxy element was found) never change the status on their own. They are always attached to the result as **notes**, so the officer sees them.
4. Functions never decide compliance. They return a value or a failure (`INSUFFICIENT_DATA` / `REVIEW_REQUIRED`); only the rule decides `COMPLIANT` or `NON_COMPLIANT`.

## 4. Generic function library

SPARQL and SHACL cannot do geometry, topology or API calls on their own. These operations are defined once, as **reusable generic functions** with a fixed contract. Every vendor builds its own version (their geometry engine will differ), but the **inputs, outputs and behaviour SHALL match** the contract below. *The VNG example implementation provides each function as a C# service in a Docker container, called from Jena Fuseki as a SPARQL extension function.*

### 4.0 Overview and mapping to the source document

**Standard function contract.** Every function is specified with the same seven fields: *ID, Name, Purpose, Input, Output, Behaviour, On failure*. Names are UPPER\_SNAKE\_CASE and start with a verb (GET, SELECT, CHECK, VALIDATE, PROJECT, MEASURE, CLIP, UNION, MAKE). All functions follow the units in [section 3.3](#33-how-to-read-the-pseudocode-applies-to-every-rule) and the failure rule in [section 3.4](#34-standard-result-precedence).

| ID | Name | What it does, in plain words | Input → Output | On failure | From PDF | Used by |
| --- | --- | --- | --- | --- | --- | --- |
| F00 | `CHECK_MINIMUM_REQUIREMENTS` | Runs the IDS files of the check and the geometry checks on the model | model, MR set → passed / failed DR IDs, warnings | `INSUFFICIENT_DATA` (MUST failed) | — | every rule, step 1 |
| F01 | `GET_BIM_GEOREFERENCE` | Reads where the model sits in RD New / NAP | model → eastings, northings, orthogonalHeight, rotation, scale, CRS | `INSUFFICIENT_DATA` (none), `REVIEW_REQUIRED` (several) | [§2.1](#21-input-requirements) | every rule, step 2 |
| F02 | `GET_BOUNDING_BOX` | Gives the smallest box around a shape | geometry → minX…maxZ | — | [§2.2](#22-step-1--make-the-model-content-queryable), [§3.1](#31-result-object) getAABBox | F03, F04, F12 |
| F03 | `VALIDATE_MODEL_LOCATION` | Detects a model already in world coordinates (double offset) | model, maxLocalExtent → elements too far from origin | `INSUFFICIENT_DATA` | [§2.3](#23-step-2--load-into-a-data-store) | F21 |
| F04 | `VALIDATE_MODEL_SCALE` | Detects mm/m unit errors | model, min/maxExtent → extents | `INSUFFICIENT_DATA` / `REVIEW_REQUIRED` | [§2.4](#24-step-3--pre-flight-validation-always-run-before-any-rule) | F21 |
| F05 | `GET_PDOK_FEATURES` | Fetches existing buildings (BAG) or parcels (BRK) around the site | type, location, radius → features | `INSUFFICIENT_DATA` (service down) | [§2.5](#25-step-4--enrich-with-context-data-geo)–2.7, [§3.2](#32-mapping-from-shacl-reports) pdokFeature | F21, reporting |
| F07 | `PROJECT_TO_2D` | Makes the flat footprint of a 3D part | geometry → polygon | — | [§2.11](#2-processing-pipeline-and-data-applies-to-every-check), [§3.4](#34-standard-result-precedence) projection | R01 |
| F08 | `TOPOLOGICAL_RELATION` | Says whether a footprint lies inside, on the edge of, across or outside an area | footprint, area, tolerance → WITHIN / COVERED\_BY / OVERLAPS / TOUCHES / DISJOINT / EQUALS / CONTAINS | — | [§2.12](#2-processing-pipeline-and-data-applies-to-every-check) | R01 |
| F09 | `TO_WORLD_COORDINATES` | Moves model geometry to RD New / NAP | geometry, georeference → geometry | — | implicit in PDF | F22 |
| F10 | `FILTER_RELEVANT_GEOMETRY` | Keeps the building parts that count for a rule, applying its interpretation (profile, exemptions) | building, interpretation → elements, unresolved | — (unresolved → rule flags `REVIEW_REQUIRED`) | new | R01, R02 |
| F11 | `GET_REFERENCE_LEVEL` | Determines the *peil* | zone, building → value in m NAP, method, source | `INSUFFICIENT_DATA` (no height), `REVIEW_REQUIRED` (sources disagree or road unclear) | new | R02 |
| F12 | `MAX_Z` | Finds the highest point of a set of parts and the part it belongs to | geometry → z in m NAP, GlobalId | — | new | R02 |
| F13 | `GET_USE_FUNCTIONS` | Reads what the building will be used for | model → use functions with zone GlobalId | `INSUFFICIENT_DATA` (none) | new | R01 |
| F14 | `UNION_AREAS` | Merges several areas into one | areas → one (multi)polygon + source ids | — | new | R01 |
| F15 | `CLIP_TO_AREA` | Keeps only the parts of a building that stand above a given area | elements, area → clipped elements | — | new | R02 |
| F16 | `MEASURE_OUTSIDE` | Measures how much of a footprint lies outside an area | footprint, area → m² outside, max distance outside | — | new | R01 |
| F17 | `GET_SUPPORTING_ROOF_LEVEL` | Finds the roof surface directly below a roof-top installation | element, roofs → z in m NAP | `REVIEW_REQUIRED` (no roof below) | new | F10 |
| F18 | `MAKE_RESULT` | Builds the standard result object (used by every `RETURN … WITH`) | status, values, evidence, sources, notes → RuleCheckResult | — | [§2.13](#2-processing-pipeline-and-data-applies-to-every-check) report | every rule, last step |
| F19 | `GET_APPLICATION_LOCATION` | Reads the location of the activity from the permit application | application → address, BAG ids, parcel ids, point in RD New | `INSUFFICIENT_DATA` (no location) | new | every rule |
| F20 | `GET_SUBMITTED_BIM_MODEL` | Takes the IFC model from the permit application | application → model | `INSUFFICIENT_DATA` (missing or not valid IFC) | new | every rule |
| F21 | `VALIDATE_GEOREFERENCE` | Checks that the georeferencing can be trusted: CRS, scale, local modelling, position | model, georeference, location → checks passed / failed | `INSUFFICIENT_DATA`, `REVIEW_REQUIRED` | [§2.3](#23-step-2--load-into-a-data-store), [§2.4](#24-step-3--pre-flight-validation-always-run-before-any-rule) combined | every rule, step 2 |
| F22 | `GET_BUILDING_GEOMETRY` | Gives every building element with its geometry in RD New / m NAP | model, georeference → elements | `INSUFFICIENT_DATA` (no evaluable geometry) | new | R01, R02 |
| F23 | `GET_PARAMETER` | Reads one value of a rule: from the zone's value constraints, else from the BM13 rule profile | rule or rule ID, name → value + origin | `INSUFFICIENT_DATA` (not set anywhere) | new | R01, R02 |

**Functions added for checks #3–#17** (same contract; cards below F23):

| ID | Name | What it does, in plain words | Input → Output | On failure | Used by |
| --- | --- | --- | --- | --- | --- |
| F24 | `GET_ZONES` | Gets the zones or spaces of one kind (e.g. *Brandcompartiment*, *Verblijfsgebied*) | model, objectType → zones with geometry, storey, quantities | — (empty list) | R03–R17 |
| F25 | `CALCULATE_AREA` | Calculates an area by a named method and compares it with the delivered quantity | geometry, method → m², delivered value, deviation | `REVIEW_REQUIRED` (deviation too large) | R03, R05, R07, R13, R15, R17 |
| F26 | `INTERSECT_AREAS` | Gives the part two areas have in common | area, area → area | — | R03 |
| F27 | `COUNT_STOREYS` | Counts storeys following the plan's definition | model, definition, reference level → count, storeys | `REVIEW_REQUIRED` (storey cannot be classified) | R04, R06 |
| F28 | `GET_PROPERTY` | Reads one property of an element | element, `Pset.Property` → value | missing → empty | R07–R17 |
| F29 | `GET_BBL_REQUIREMENT` | Finds, via the Bbl steering table, which members apply to a use function and returns the required value | article, use function, subject, date → value + article reference | `INSUFFICIENT_DATA` (use function unknown) | R07–R17 |
| F30 | `GET_APPLICATION_DATA` | Reads a field from the DSO application (e.g. SBI code) | application, field → value | missing → empty | R05 |
| F31 | `MEASURE_CLEAR_DIMENSIONS` | Measures the clear width and clear height of a door, passage, route or space | object → clear width, clear height | `REVIEW_REQUIRED` (not measurable) | R09, R16 |
| F32 | `MEASURE_HEIGHT_DIFFERENCE` | Measures the height difference between two floors, or a floor and the adjoining terrain | a, b → m | — | R10, R15 |
| F33 | `BUILD_ROUTE_NETWORK` | Builds the walkable network of spaces, doors, stairs and ramps | model, mode (`ACCESS` / `ESCAPE`) → network | `REVIEW_REQUIRED` (spaces not connected) | R09, R10, R14–R16 |
| F34 | `FIND_ROUTE` | Finds the shortest route between two places in the network | network, from, to → path, length, elements passed | none found → empty | R09, R10, R14, R16 |
| F35 | `GET_MAX_WALKING_DISTANCE` | Finds the farthest point of an area and its walking distance to the nearest exit | area, exits, network → point, distance | — | R15 |
| F36 | `GET_ENCLOSING_ELEMENTS` | Lists the walls, floors, doors and windows around a zone and what lies on the other side | zone → elements with adjacent condition | `REVIEW_REQUIRED` (gaps in the enclosure) | R07, R08, R11, R12, R17 |
| F37 | `PARSE_FIRE_RATING` | Turns a fire rating text into criteria and minutes (e.g. `EI 60`) | text → criteria, minutes | `REVIEW_REQUIRED` (not readable) | R07, R08 |
| F38 | `MIRROR_AT_BOUNDARY` | Mirrors the building at the parcel boundary, or at the centre line of an adjoining road, water or public green (*spiegelprincipe*) | geometry, boundary → mirrored geometry | — | R07, R17 |
| F39 | `DERIVE_RC_FROM_U` | Derives the thermal resistance Rc from a U-value | U, element kind → Rc (indicative) | — | R11 |
| F40 | `CALCULATE_EQUIVALENT_DAYLIGHT_AREA` | Calculates the equivalent daylight area of a space (NEN 2057) | space, openings, surroundings → m² | `REVIEW_REQUIRED` (opening or obstruction not determinable) | R17 |
| F41 | `GET_EXTERNAL_CALCULATION` | Reads the key results of a calculation the applicant supplied (MPG, BENG, WBDBO, equivalence) | application, type → results, tool, version, date | `INSUFFICIENT_DATA` (not supplied) | R07, R08, R11–R13 |
| F42 | `GET_OCCUPANCY` | Gives the number of people a zone is designed for | zone → persons | missing → empty | R15, R16 |
| F43 | `CALCULATE_WBDBO` | Calculates the resistance to fire spread between two compartments or to the mirrored building (NEN 6068) | from, to → minutes | `REVIEW_REQUIRED` | R07 |
| F44 | `CALCULATE_FLOW_CAPACITY` | Calculates how many people can pass along an escape route (Bbl art. 4.80) | route → persons | `REVIEW_REQUIRED` | R16 |

| ID | Name | What it does, in plain words | Input → Output | On failure | Used by |
| --- | --- | --- | --- | --- | --- |
| F45 | `MEASURE_DISTANCE` | Measures the straight-line distance between two points or elements | a, b → m | — | R15 |

---

### F00 — CHECK\_MINIMUM\_REQUIREMENTS(model, mrSet)

**Purpose:** make sure a rule only runs on data that is good enough. It is always step 1 of every rule.

**Input:** the submitted model; the rule's minimum requirement set (`MR-R01`, `MR-R02`, …, [Annex A.5](#a5-standard-minimum-requirement-sets)).

**Output:** `{ status, failed[], warnings[] }` — `status` is `OK` or `INSUFFICIENT_DATA`; `failed` and `warnings` list DR IDs with the reason.

**Behaviour:**

1. For every **BIM** DR ID in the set, run the matching IDS specification (the ILS files of the check and the BM13 supplement) with an IDS 1.0 tool.
2. Run the geometry checks for the `ILS-Gn` requirements in the set, where tooling exists.
3. Georeferencing is validated separately by F21 `VALIDATE_GEOREFERENCE` (step 2 of every rule).
4. **GEO and regulatory** DR IDs are checked when their function (F11, F23) answers.
5. A failed **MUST** requirement → `status = INSUFFICIENT_DATA`. A failed **SHOULD** requirement → added to `warnings`, `status` stays `OK`.

**On failure:** `INSUFFICIENT_DATA`, with the IDS report attached as evidence.

---

### F01 — GET\_BIM\_GEOREFERENCE(model)

**Purpose:** read how the local model coordinates relate to RD New / NAP.

**Input:** the converted model.

**Output:** `{ eastings, northings, orthogonalHeight, xAxisAbscissa, xAxisOrdinate, scale, targetCRS }`.

**Behaviour:**

1. Find the `IfcMapConversion` of the project's geometric representation context.
2. Read Eastings, Northings, OrthogonalHeight; read XAxisAbscissa/XAxisOrdinate (default 1/0 = no rotation) and Scale (default 1).
3. Read `IfcProjectedCRS.Name`; it **SHALL** be `EPSG:28992` or `EPSG:7415`.
4. If more than one `IfcMapConversion` exists, return `REVIEW_REQUIRED`; if none, return `INSUFFICIENT_DATA`.

*Example (ifcOWL):* the PDF [§2.1](#21-input-requirements) query, extended with height, rotation and CRS:

```sparql
PREFIX ifc: <https://standards.buildingsmart.org/IFC/DEV/IFC4/ADD2/OWL#>
PREFIX express: <https://w3id.org/express#>
SELECT ?e ?n ?h WHERE {
  ?mc a ifc:IfcMapConversion ;
      ifc:eastings_IfcMapConversion  [ express:hasDouble ?e ] ;
      ifc:northings_IfcMapConversion [ express:hasDouble ?n ] ;
      ifc:orthogonalHeight_IfcMapConversion [ express:hasDouble ?h ] .
}
```

*Expected result for the test model:* `e = 84112.80`, `n = 431810.28` (Hoogvliet, Rotterdam).

---

### F02 — GET\_BOUNDING\_BOX(geometry)

**Purpose:** return the axis-aligned bounding box (AABB) of any 2D or 3D geometry.

**Output:** `{ minX, maxX, minY, maxY, minZ, maxZ }` in the coordinate system of the input geometry, in metres.

**Behaviour:** evaluate the geometry and take the minimum and maximum of all vertex coordinates. The result **SHALL** be written back per element so that SHACL shapes can use it (`bboxMinX` … `bboxMaxZ`).

---

### F03 — VALIDATE\_MODEL\_LOCATION(model, maxLocalExtent = 100 m)

**Purpose:** detect models that are placed in world coordinates *and* carry a map conversion (double georeferencing), or are placed far from their local origin.

**Behaviour:**

1. For every element, compute its bounding box relative to the local origin (F02).
2. If any coordinate lies outside `[-maxLocalExtent, +maxLocalExtent]`, report that element.
3. `maxLocalExtent` is a **parameter** (default 100 m); large sites or infrastructure need a larger value.

**Result:** violations → pre-flight fails → dependent rules return `INSUFFICIENT_DATA`.

---

### F04 — VALIDATE\_MODEL\_SCALE(model, minExtent = 1 m, maxExtent = 100 m)

**Purpose:** catch unit errors (millimetres read as metres, or the reverse).

**Behaviour:**

1. Compute the overall extent of all elements in X, Y and Z.
2. If an extent is smaller than `minExtent` or larger than `maxExtent`, report a probable unit error.
3. Both limits are **parameters**; the check is a plausibility test, so a failure **SHOULD** be reported as `REVIEW_REQUIRED` unless the extent differs by a factor of \~1000 (then `INSUFFICIENT_DATA`).

---

### F05 — GET\_PDOK\_FEATURES(featureType, location, searchRadius)

**Purpose:** fetch existing buildings (BAG) or cadastral parcels (BRK) around the project.

**Input:** `featureType` ∈ {`Buildings`, `Parcels`}; `location` = (eastings, northings) from F01; `searchRadius` (parameter, e.g. 50 m).

**Output:** list of `{ id, name, geometry, retrievalDate }` — `id` is the BAG pand-id or BRK perceel-id.

**Behaviour:** query the PDOK OGC API / WFS with a bounding box around the location; store the features in a separate named graph or table (e.g. `buildings`, `parcels`), replacing earlier results for the same case.

---

### F06 — removed: rule zones with value constraints

`GET_APPLICABLE_RULE` is **no longer a function**. The rules that apply are **defined in the rule itself** (layers 0 and 4a): each BM13 rule holds its zones, and **each zone carries its own value constraints**.

```
Zone
    id            e.g. "NL.IMRO.0599…/height-A"
    area          geometry in RD New
    constraints   e.g. maximumHeight = 12.0 m, tolerance = 0.05 m,
                       referenceLevelMethod = AVERAGE_ROAD_ELEVATION
    legalSource   plan, article, valid from
```

- The zones and their values are taken from DSO (STOP/TPOD) or IMRO **when the rule is set up**, not looked up during a check.
- A check reads a value with F23 `GET_PARAMETER(zone, "maximumHeight")`.
- A check only determines geometrically **which** zones the building lies in (F08, F15, F26). A building in no zone of the rule → `NOT_APPLICABLE`.
- The number F06 stays reserved, so the other function IDs do not change.

---

### F07 — PROJECT\_TO\_2D(geometry)

**Purpose:** create the 2D footprint of a 3D element, for comparison with 2D map areas.

**Behaviour:** project all points onto the plane z = 0 along the negative z-axis, take the union of the projected faces and return a valid polygon (or multipolygon) with counter-clockwise outer rings. Projecting a geometry that is already flat in z = 0 **SHALL NOT** invert its winding.

**Variant:** `PROJECT_TO_2D(set of elements)` returns the union footprint of the whole building.

---

### F08 — TOPOLOGICAL\_RELATION(geometryA, geometryB, tolerance)

**Purpose:** determine the spatial relation of A relative to B, both 2D and in the same CRS.

**Output:** one value from this fixed list (based on the OGC Simple Features / DE-9IM model, also used by GeoSPARQL):

| Value | Meaning (A relative to B) | GeoSPARQL | PDF term |
| --- | --- | --- | --- |
| `WITHIN` | A lies completely inside B, not touching B's boundary | `sfWithin` | "CONTAINED BY" |
| `COVERED_BY` | A lies inside B and touches B's boundary | `ehCoveredBy` | — |
| `OVERLAPS` | A lies partly inside and partly outside B | `sfOverlaps` | — |
| `TOUCHES` | A and B only share a boundary | `sfTouches` | — |
| `DISJOINT` | A and B have nothing in common | `sfDisjoint` | "DISJUNCT" |
| `CONTAINS`, `EQUALS` | B inside A / identical | `sfContains`, `sfEquals` | — |

**Tolerance:** differences smaller than `tolerance` (parameter, default 0.01 m) **SHALL** be treated as touching, so that small modelling or rounding differences do not produce false violations.

---

### F09 — TO\_WORLD\_COORDINATES(geometry, georeference)

**Purpose:** transform model coordinates to RD New / NAP so that BIM and GEO can be compared.

**Behaviour (IFC4 `IfcMapConversion`):**

```
θ   = atan2(xAxisOrdinate, xAxisAbscissa)
X   = scale · (x·cosθ − y·sinθ) + eastings
Y   = scale · (x·sinθ + y·cosθ) + northings
Z   = scale · z + orthogonalHeight          // NAP
```

Every GEO comparison (F08, F11) **SHALL** use transformed geometry; comparing local coordinates with RD coordinates is a conformance error.

---

### F10 — FILTER\_RELEVANT\_GEOMETRY(building, interpretation)

**Purpose:** decide which IFC elements take part in a rule. This is a *legal interpretation* made explicit, so it is a rule **parameter**, not a vendor choice.

**Default profiles:**

| Profile | Includes | Excludes |
| --- | --- | --- |
| `BUILDING_VOLUME` (R01) | `IfcWall`, `IfcSlab`, `IfcRoof`, `IfcColumn`, `IfcBeam`, `IfcCurtainWall`, `IfcStair`, `IfcRamp`, `IfcDoor`, `IfcWindow`, `IfcRailing`, `IfcBuildingElementProxy` | `IfcSpace`, `IfcOpeningElement`, `IfcAnnotation`, `IfcSite`, `IfcVirtualElement`, `IfcGrid`, space boundaries |
| `HEIGHT_RELEVANT` (R02) | as above, above ground level | plus the elements the rule owner marks as exempt (e.g. chimneys, antennas, lift overruns up to a set height) |

**Behaviour:**

1. Keep the elements whose class is in the profile.
2. `BUILDING_VOLUME`: when `includeBelowGround = false`, remove elements whose highest point lies below the entrance level (ILS-9.06a).
3. `HEIGHT_RELEVANT`: for each element of an exempt class, `extra = MAX_Z(element) − GET_SUPPORTING_ROOF_LEVEL(element)` (F12, F17). If `extra ≤ exemptMaxExtraHeight`, remove it; otherwise it keeps counting.

**Output:** `{ elements, unresolved }`. `unresolved` lists elements the profile cannot classify (e.g. proxies, an installation with no roof below). The rule reports them as `REVIEW_REQUIRED`.

> `FILTER_HEIGHT_RELEVANT_GEOMETRY(building)` in earlier drafts is the same as `FILTER_RELEVANT_GEOMETRY(building, "HEIGHT_RELEVANT")`: one function, one profile per rule.

---

### F11 — GET\_REFERENCE\_LEVEL(zone, building)

**Purpose:** determine the reference level (*peil*) from which heights and storeys are measured, in m NAP.

**Input:** the zone — its value constraint `referenceLevelMethod` says which method applies — and the building in RD New / m NAP (F22).

**Two methods.** The choice is a value constraint of each zone, so neighbouring zones may use different methods:

| Method | In plain words | How | Data |
| --- | --- | --- | --- |
| **1 — `AVERAGE_ROAD_ELEVATION`** | The average elevation of the road next to the building | (1) Take the road the building faces (the road of its address; BGT road surface). (2) Take the stretch of that road along the building front, extended by `sampleMargin` on both sides. (3) Sample the elevation every `sampleSpacing` metres along the road axis. (4) The reference level is the average of the samples. | BGT road (DR-GEO-07); municipal height data, fallback AHN (DR-GEO-04) |
| **2 — `DESIGN_ELEVATION`** | The design reference level the designer sets in the model | (1) Take the storey marked `EntranceLevel = true` (ILS-9.06a). (2) Its elevation plus `OrthogonalHeight` gives the level in m NAP (F09). (3) Cross-check with `IfcSite.RefElevation` when present. | IFC model (ILS-9.06a, ILS-9.01a) |

**Output:** `{ value (m NAP), method, source, samples[] }` — `samples` only for method 1.

**On failure:** method 1 — no adjacent road or no height data → `INSUFFICIENT_DATA`; several adjacent roads and the rule profile does not say which counts → `REVIEW_REQUIRED`. Method 2 — no entrance level → `INSUFFICIENT_DATA`; entrance level and `RefElevation` differ by more than `tolerance` → `REVIEW_REQUIRED`.

---

### F12 — MAX\_Z(geometry)

**Purpose:** return the highest Z value (m NAP, after F09) of a set of elements, and the `GlobalId` of the element where it occurs.

**Behaviour:** maximum of `maxZ` over the elements' true geometry. A bounding box (F02) **MAY** be used as a fast upper bound, but a `NON_COMPLIANT` outcome **SHALL** be confirmed on the real geometry, because a bounding box can overestimate the height of sloped or rotated parts.

---

### F13 — GET\_USE\_FUNCTIONS(model)

**Purpose:** find out what the building will be used for.

**Input:** the model.

**Output:** list of `{ zoneGlobalId, useFunction }`.

**Behaviour:**

1. Take every `IfcZone`, `IfcSpatialZone` or `IfcSpace` with `ObjectType = "Gebruiksfunctie"` (data requirement ILS-9.08).
2. The use function is the zone's `Name` (e.g. `Woonfunctie`). Compare it case-insensitively with the Bbl use functions.
3. Secondary use functions (*Nevengebruiksfunctie*, ILS-9.09) are returned separately, marked `secondary`.

**On failure:** no use-function zone → `INSUFFICIENT_DATA`.

---

### F14 — UNION\_AREAS(areas)

**Purpose:** merge several regulatory areas into one area, so that a building spanning two neighbouring areas is judged against both together.

**Input:** list of areas (zones of the rule), in RD New.

**Output:** `{ geometry, sourceIds[] }` — one valid (multi)polygon plus the ids of the areas it came from.

**Behaviour:** geometric union; gaps smaller than the rule's tolerance are closed.

---

### F15 — CLIP\_TO\_AREA(elements, area)

**Purpose:** keep only the parts of a building that stand above a given 2D area (e.g. one height area).

**Input:** elements in world coordinates (after F09); a 2D area.

**Output:** the elements cut by the vertical prism over the area. Elements that do not reach the area are left out.

---

### F16 — MEASURE\_OUTSIDE(footprint, area)

**Purpose:** tell the officer *how much* of a building part lies outside the allowed area.

**Input:** a footprint (from F07) and an area, both in RD New.

**Output:** `{ outsideArea (m²), maxDistanceOutside (m) }`.

**Behaviour:** footprint minus area; the largest distance from the area boundary to a point of the remainder.

---

### F17 — GET\_SUPPORTING\_ROOF\_LEVEL(element, roofs)

**Purpose:** find the roof an installation stands on, so its extra height above the roof can be measured.

**Input:** a roof-top element (e.g. `IfcChimney`); the roof elements (BM13-S03), in world coordinates.

**Output:** z in m NAP of the roof surface directly below the element's footprint.

**On failure:** no roof below the element → `REVIEW_REQUIRED`.

---

### F18 — MAKE\_RESULT(ruleId, status, values, evidence, sources, notes)

**Purpose:** return every rule result in the same shape.

**Output:** a `RuleCheckResult` as in [section 3.1](#31-result-object). Adds `ruleVersion`, `caseId`, `timestamp` and a message in Dutch and English. The `notes` carry the SHOULD-level warnings from F00.

---

### F19 — GET\_APPLICATION\_LOCATION(application)

**Purpose:** know where the applicant says the activity takes place.

**Output:** `{ address, bagIds[], parcelIds[], point }` — `point` in RD New.

**Behaviour:** read the location of the activity from the DSO application. It is used to fetch the plan rules and to cross-check the georeferencing (F21), never to replace it.

**On failure:** no location in the application → `INSUFFICIENT_DATA`.

---

### F20 — GET\_SUBMITTED\_BIM\_MODEL(application)

**Purpose:** take the model the rule will test.

**Output:** one IFC model. With several discipline models, the architectural model (`ARC` in the ILS file name) is used.

**On failure:** no IFC file, or not valid IFC (ILS acceptance criterion AC1) → `INSUFFICIENT_DATA`.

---

### F21 — VALIDATE\_GEOREFERENCE(model, georeference, location)

**Purpose:** make sure the model sits where it should, at the right size, before any BIM–GEO comparison.

**Output:** `{ status, checks[] }`, one line per check below.

**Behaviour:**

1. **CRS:** `IfcProjectedCRS.Name` is EPSG:28992 or EPSG:7415 (ILS-9.01b).
2. **Scale:** `IfcMapConversion.Scale` matches the model's length unit (e.g. 0.001 for a model in millimetres and a CRS in metres), and the model extents are plausible (F04).
3. **Local modelling:** the model is modelled near its local origin (F03).
4. **Position:** after F09, the model footprint intersects the application parcels from F19 (ILS acceptance criterion AC4).

**On failure:** checks 1–3 fail, or the model does not touch the parcels → `INSUFFICIENT_DATA`. Model partly outside the parcels → `REVIEW_REQUIRED`.

---

### F22 — GET\_BUILDING\_GEOMETRY(model, georeference)

**Purpose:** give the rule the building in real-world coordinates.

**Output:** list of `{ GlobalId, class, storey, geometry }`, geometry in RD New and m NAP.

**Behaviour:** evaluate the body geometry of every building element (BM13-S01) and transform it with F09.

**On failure:** no evaluable geometry → `INSUFFICIENT_DATA`.

---

### F23 — GET\_PARAMETER(rule, name)

**Purpose:** read one value a rule needs, without hard-coding it.

**Input:** a zone of the rule or a BM13 rule ID (e.g. `"BM13-R01"`); the parameter name.

**Output:** `{ value, unit, origin }`.

**Behaviour:** look in this order and stop at the first hit: (1) the zone's value constraints, e.g. its *normwaarde* for `maximumHeight`; (2) the municipality's BM13 rule profile (DR-REG, layer 4a); (3) the national BM13 default. The `origin` goes into the result's sources.

**On failure:** not set anywhere → `INSUFFICIENT_DATA`.

---

### F24 — GET\_ZONES(model, objectType)

**Purpose:** get the modelled zones or spaces of one kind.

**Output:** list of `{ GlobalId, name, objectType, storey, geometry, quantities }`.

**Behaviour:** take every `IfcZone`, `IfcSpatialZone` and `IfcSpace` whose `ObjectType` (or bSDD class in *Omgevingswet-Ruimten*) equals `objectType`, e.g. `Gebruiksfunctie`, `Brandcompartiment`, `Subbrandcompartiment`, `Vluchtroute`, `Verblijfsgebied`, `Gebruiksgebied`, `Bouwlaaginhoud`. F13 `GET_USE_FUNCTIONS` is `GET_ZONES(model, "Gebruiksfunctie")` with the zone name as use function.

---

### F25 — CALCULATE\_AREA(geometry, method)

**Purpose:** one way to calculate every area, so all vendors get the same number.

**Input:** a geometry; `method` ∈ `PROJECTED` (2D footprint), `NEN2580_BVO`, `NEN2580_GO`, `NEN2057_FLOOR`.

A fifth method, `NTA8800_OPENING`, gives the projected area of a window, door or frame per NTA 8800 (used by R12).

**Output:** `{ value (m²), delivered, deviation (%) }`.

**Behaviour:** calculate from the solid geometry (ILS G1). When the model carries the matching quantity (`Qto_…`), compare both (the ILS two-step check). A deviation above the municipality's threshold (ILS AC6) → `REVIEW_REQUIRED`; otherwise the delivered value is used.

---

### F26 — INTERSECT\_AREAS(a, b)

**Output:** the 2D area that `a` and `b` have in common (RD New).

---

### F27 — COUNT\_STOREYS(model, definition, referenceLevel)

**Purpose:** count storeys the way the plan defines them.

**Output:** `{ count, storeys[] }`, each storey marked `COUNTED` or `NOT_COUNTED` with the reason.

**Behaviour:** start from the storeys of ILS-9.06a and their volumes (ILS-9.06b). Apply the `definition` from the rule profile: does a basement below the reference level count, does a roof storey or attic count, does a mezzanine (`00a`) count, what minimum height or floor share makes a storey count.

**On failure:** a storey that the definition cannot classify → `REVIEW_REQUIRED`.

---

### F28 — GET\_PROPERTY(element, name)

**Output:** the value of property `name` (`Pset_….Property`, or an attribute such as `OverallWidth`), with its unit; empty when missing.

---

### F29 — GET\_BBL\_REQUIREMENT(article, useFunction, subject, date)

**Purpose:** read the Bbl the same way everywhere.

**Behaviour:** (1) open the steering table (*aansturingstabel*) of the article for the use function; (2) find the members that apply; (3) return the required value(s) for `subject`, with article and member as reference. Source: DR-LAW-01, the Bbl version valid on the application date.

**Output:** `{ value, unit, article, member }`, or `NOT_APPLICABLE` when the steering table assigns no requirement.

**On failure:** use function unknown → `INSUFFICIENT_DATA`.

---

### F30 — GET\_APPLICATION\_DATA(application, field)

**Output:** a field of the DSO application, e.g. the activity description, the SBI code or the applicant; empty when missing.

---

### F31 — MEASURE\_CLEAR\_DIMENSIONS(object)

**Purpose:** measure *clear* width and height, not the nominal size.

**Behaviour:** doors: the clear opening between the frame (`IfcDoor` geometry or lining); spaces and route segments: the narrowest width of the 2D footprint along the direction of travel, and the height from floor to the lowest obstacle above; stairs: the clear width between handrails or walls.

**Output:** `{ clearWidth, clearHeight }` in metres.

---

### F32 — MEASURE\_HEIGHT\_DIFFERENCE(a, b)

**Output:** the height difference in metres between the finished floor levels of `a` and `b`. `b` may be the adjoining terrain (DR-GEO-04 or the model's site level).

---

### F33 — BUILD\_ROUTE\_NETWORK(model, mode)

**Purpose:** one walkable network for all route checks.

**Behaviour:** nodes are spaces and zones; edges are doors, openings, stairs and ramps between them (from space boundaries, BM13-S11, or geometric adjacency). `ACCESS` mode also uses lifts. `ESCAPE` mode never uses lifts or windows (Bbl definition of *vluchtroute*).

**On failure:** spaces that cannot be connected → `REVIEW_REQUIRED`.

---

### F34 — FIND\_ROUTE(network, from, to)

**Output:** `{ path, length (m), elementsPassed[] }` for the shortest route; empty when none exists.

---

### F35 — GET\_MAX\_WALKING\_DISTANCE(area, exits, network)

**Output:** `{ farthestPoint, distance (m) }`: the point in `area` whose shortest walk (around walls and fixed obstacles) to the nearest of `exits` is longest.

---

### F36 — GET\_ENCLOSING\_ELEMENTS(zone)

**Output:** list of `{ element, adjacentCondition }`, with `adjacentCondition` ∈ outside air, ground, crawl space, water, unheated space, other fire compartment, other building.

**Behaviour:** from space boundaries (BM13-S11); fallback: geometric adjacency plus `IsExternal`.

**On failure:** gaps in the enclosure → `REVIEW_REQUIRED`.

---

### F37 — PARSE\_FIRE\_RATING(text)

**Output:** `{ criteria, minutes }`, e.g. `"EI 60"` → criteria E and I, 60 minutes; `"REI 90"` → R, E, I, 90.

**On failure:** not readable → `REVIEW_REQUIRED`.

---

### F38 — MIRROR\_AT\_BOUNDARY(geometry, boundary)

**Purpose:** apply the mirror principle (*spiegelprincipe*).

**Behaviour:** mirror the building at the parcel boundary; where the parcel borders a public road, water or public green, mirror at its centre line (DR-GEO-07).

---

### F39 — DERIVE\_RC\_FROM\_U(U, elementKind)

**Output:** `Rc = 1/U − (Rsi + Rse)`, with the surface resistances per element kind as parameters (NTA 8800). The result is **indicative**: when a provisional BENG / NTA 8800 calculation is supplied (DR-DOC-02), that calculation is leading.

---

### F40 — CALCULATE\_EQUIVALENT\_DAYLIGHT\_AREA(space, openings, surroundings)

**Behaviour:** per NEN 2057: for each daylight opening of the space, take its effective glazed area and reduce it for the obstruction (obstruction angle towards the surroundings, or towards the mirrored boundary, F38) and for overhangs; sum per space. Surroundings: DR-GEO-06/08.

**On failure:** an opening or obstruction that cannot be determined → `REVIEW_REQUIRED`.

---

### F41 — GET\_EXTERNAL\_CALCULATION(application, type)

**Purpose:** use calculations that are not done on the model itself.

**Input:** `type` ∈ `MPG`, `BENG`, `WBDBO`, `EQUIVALENCE`.

**Output:** key results (e.g. MPG score in €/m² BVO), tool, version, date.

**On failure:** not supplied → `INSUFFICIENT_DATA`.

---

### F42 — GET\_OCCUPANCY(zone)

**Output:** persons: `Pset_SpaceOccupancyRequirements.OccupancyNumber` (ILS-9.10c); else floor area / `AreaPerOccupant`; empty when neither is present.

---

### F43 — CALCULATE\_WBDBO(from, to)

**Output:** resistance to fire spread in minutes (NEN 6068) from one compartment to another, or to the mirrored building. At lower maturity levels this value MAY be taken from a supplied calculation (F41 `WBDBO`).

---

### F44 — CALCULATE\_FLOW\_CAPACITY(route)

**Output:** the number of persons that can pass along the route (Bbl art. 4.80), from the clear widths of doors and stairs on the route (F31) and the Bbl factors (F29).

---

### F45 — MEASURE\_DISTANCE(a, b)

**Output:** the shortest straight-line distance in metres between two points or elements (e.g. two exits of a fire compartment), in the same coordinate system.

## 5. Check #1 — BM13-R01 Use function matches the designation ("Wonen")

### Layer 0 — Rule foundation / interpretation

Purpose: define **what the legal rule actually means** before touching software.

> **Rule ID:** BM13-R01 (ILS check #1 *Gebruiksfunctie komt overeen met bestemming*)
>
> **Check:** Is the proposed building, with its intended use, located entirely within an area where that use is allowed (designation *Wonen*)?
>
> **Legal source:** Omgevingsplan. Temporary part: enkelbestemming "Wonen" in IMRO (`NL.IMRO.…`). New part: *gebiedsaanwijzing* of type *Functie* "wonen" in STOP/TPOD, published via DSO / Regels op de kaart.
>
> **Definition:** "Located within" means the vertical projection of every building part that belongs to the building volume lies inside the merged areas with an allowed designation. Touching the boundary counts as inside. The rule has two parts: **R01a** — is the intended use residential? **R01b** — does the building lie inside the *Wonen* area?
>
> **Interpretation questions:** Do overhanging balconies, eaves and canopies count? Do underground parts count? Which other designations also allow housing (e.g. *Gemengd*, *Centrum*)? What boundary tolerance is acceptable? Is a partial overlap always a violation, or a case for review?
>
> **Dependencies:** Applicable designation areas, list of allowed designations, intended use, building geometry, georeferencing.
>
> **Out of scope:** *Bouwvlak* and *maatvoeringsaanduidingen* — separate rules, built with the same functions.

This is the normative interpretation layer.

### Layer 1 — Minimum requirements

What must be available before the check can run. MUST missing → `INSUFFICIENT_DATA`; SHOULD missing → note; MAY = context only ([section 3.4](#34-standard-result-precedence)). Together they form minimum set **MR-R01** ([Annex A.5](#a5-standard-minimum-requirement-sets)).

| Check | ILS objective | ILS milestone | Geometry needed (ILS) | ILS IDS files | Minimum set |
| --- | --- | --- | --- | --- | --- |
| #1 | ID01 (OPA) | M1 (indicative), M2, M3 | no — BM13 does need footprints ([Annex A.4](#a4-gaps-to-raise-with-the-ils-editors)) | 15 | MR-R01 = MR-BASE + … |

| Req. | What must be available | Level | Why the check needs it |
| --- | --- | --- | --- |
| M01 | A valid IFC model of one building, with project data and named storeys (elevation, entrance level) | MUST | Every step reads the model and its storeys |
| M02 | Building elements with closed body geometry, each inside a storey; no proxy elements (SHOULD) | MUST | Footprints are computed from the element geometry |
| M03 | Georeferencing to RD New / NAP with the right scale, model placed at the application location | MUST | The building is compared with map zones |
| M04 | The use function(s) of the building | MUST | Decides whether the check applies (R01a) |
| M05 | Use units, secondary use functions and spaces | SHOULD | Evidence per use unit and space |
| M06 | Balconies, canopies and other external slabs recognisable | SHOULD | Overhangs may count as building volume |
| M07 | Addresses, building plot and cadastral parcel in the model | SHOULD | Cross-check of the location |
| M08 | The designation zones of the rule, each with its designation | MUST | They form the allowed area |
| M09 | The rule profile: allowed designations, element profile, below-ground parts, boundary tolerance, partial-overlap policy | MUST | The interpretation choices of Layer 0 |

### Layer 2 — Mapping to IFC, ILS and GEO standards

| Req. | IFC entity / attribute / property set | ILS IDS (file no.) | BM13 supplement | GEO / regulation standard and source | DR ID |
| --- | --- | --- | --- | --- | --- |
| M01 | `IfcProject`; one `IfcBuilding`; `IfcBuildingStorey` Name, Elevation, `Pset_BuildingStoreyCommon.EntranceLevel` | 9 (01), 9.02 (07), 9.06a (13) | S07, S08 | IFC 4.3 / IFC4 ADD2 TC1 (ILS AC1, AC2) | ILS-9, 9.02, 9.06a |
| M02 | `IfcWall`, `IfcSlab`, `IfcRoof`, `IfcColumn`, … `Representation`; `IfcRelContainedInSpatialStructure` | — | S01, S02 | ILS [§6.2](#6-check-2--bm13-r02-maximum-building-height) G1, G4 (AC5) | BM13-S01, ILS-G1 |
| M03 | `IfcMapConversion` (Eastings, Northings, OrthogonalHeight, rotation, Scale), `IfcProjectedCRS` | 9.01a (02), 9.01b (03) | — | EPSG:28992 / EPSG:7415 (NAP); ILS AC4; BRK parcels for the position check | ILS-9.01a, 9.01b, ILS-G2 |
| M04 | `IfcZone` with `ObjectType` = *Gebruiksfunctie*; `Name` = use function (e.g. *Woonfunctie*) | 9.08 (16) | — | bSDD *Omgevingswet-Ruimten*; Bbl use functions | ILS-9.08 |
| M05 | `IfcZone` *Gebruikseenheid*, *Nevengebruiksfunctie*; `IfcSpace` *Functieruimte*, *Verblijfsruimte* | 9.07 (15), 9.09 (17), 9.12a (25), 9.12b (26) | — | bSDD *Omgevingswet-Ruimten* | ILS-9.07, 9.09, 9.12a, 9.12b |
| M06 | `IfcSlab` PredefinedType; `Pset_SlabCommon.IsExternal` | — | S04 | — | BM13-S04 |
| M07 | `Pset_Address`, `SiteAddress`, `BuildingAddress`; `IfcSpatialZone` *Bouwwerkperceel*, *Kadastraal perceel* + `Pset_LandRegistration` | 9.01c–e (04–06), 9.03b (09), 9.04 (10) | — | BRK (cross-check) | ILS-9.01c–e, 9.03b, 9.04 |
| M08 | — | — | — | Omgevingsplan: *gebiedsaanwijzing* Functie (STOP/TPOD via DSO / Regels op de kaart); temporary part: *enkelbestemming* (IMRO); RD New | DR-GEO-01 |
| M09 | — | — | — | BM13 rule specification, layer 4a | DR-REG-01 |

**Derived properties:** DER-10 element footprint · DER-11 building footprint · DER-12 allowed area · DER-13 relation per element.

### Layer 3 — Steps, functions and pseudocode

**Generic workflow:** `F19 → F20 → F00 → F01 → F21 → F13 → F23 → F14 → F22 → F10 → F07 → F08 → F16 → F18`

| Step | What happens | Standard functions | Uses | Output / stops when |
| --- | --- | --- | --- | --- |
| 1 | Take the application and the model; run the IDS files of the check | F19, F20, F00 | M01–M07 | MUST missing → `INSUFFICIENT_DATA` |
| 2 | Read and validate the georeferencing | F01, F21 | M03 | failed → `INSUFFICIENT_DATA` |
| 3 | Determine the intended use | F13, F23 | M04, M09 | no residential use → `NOT_APPLICABLE` |
| 4 | Take the designation zones of the rule | — (rule data) | M08 | designation zones |
| 5 | Keep the zones with an allowed designation and merge them | F23, F14 | M08, M09 | DER-12; none → `NON_COMPLIANT` |
| 6 | Determine the building parts that count | F22, F10 | M02, M06, M09 | relevant parts |
| 7 | Calculate the footprint of each part | F07 | M02 | DER-10 |
| 8 | Compare each footprint with the allowed area; measure what lies outside | F08, F16 | M09 (tolerance) | DER-13 |
| 9 | Report result and evidence | F18 | — | `RuleCheckResult` |

**Pseudocode** (notation: [section 3.3](#33-how-to-read-the-pseudocode-applies-to-every-rule); final status: [section 3.4](#34-standard-result-precedence)):

```
PROCEDURE CHECK_BESTEMMING(application):

    // Step 1 — Model and IDS check
    location =
        GET_APPLICATION_LOCATION(application)                    // F19

    bim_model =
        GET_SUBMITTED_BIM_MODEL(application)                     // F20

    IF bim_model is missing:
        RETURN INSUFFICIENT_DATA

    data_check =
        CHECK_MINIMUM_REQUIREMENTS(bim_model, "MR-R01")          // F00: IDS of check #1

    IF data_check.status = INSUFFICIENT_DATA:
        RETURN INSUFFICIENT_DATA WITH { data_check.failed }

    // Step 2 — Georeferencing
    georeference =
        GET_BIM_GEOREFERENCE(bim_model)                          // F01

    IF georeference is missing:
        RETURN INSUFFICIENT_DATA

    georeference_check =
        VALIDATE_GEOREFERENCE(bim_model, georeference, location) // F21

    IF georeference_check.status = INSUFFICIENT_DATA:
        RETURN INSUFFICIENT_DATA WITH { georeference_check.checks }

    // Step 3 — Intended use
    use_functions =
        GET_USE_FUNCTIONS(bim_model)                             // F13

    checked_uses =
        GET_PARAMETER("BM13-R01", "checkedUses")                 // F23

    IF no use in use_functions is in checked_uses:
        RETURN NOT_APPLICABLE

    // Step 4 — Designation zones of the rule
    designation_zones =
        the zones of rule BM13-R01, each with its value constraint
        "designation"                                            // defined in the rule, DR-GEO-01

    // Step 5 — Allowed area
    allowed_designations =
        GET_PARAMETER("BM13-R01", "allowedDesignations")         // F23

    allowed_zones =
        the designation_zones whose designation is in allowed_designations

    IF allowed_zones is empty:
        RETURN NON_COMPLIANT WITH { designation_zones }

    allowed_area =
        UNION_AREAS(allowed_zones)                               // F14, DER-12

    // Step 6 — Determine which BIM geometry counts
    building =
        GET_BUILDING_GEOMETRY(bim_model, georeference)           // F22

    relevant_geometry =
        FILTER_RELEVANT_GEOMETRY(
            building,
            interpretation = GET_PARAMETER("BM13-R01", "elementProfile")
        )                                                        // F10

    // Steps 7 and 8 — Footprint and comparison
    tolerance =
        GET_PARAMETER("BM13-R01", "boundaryTolerance")           // F23

    parts_outside = empty list

    FOR EACH part IN relevant_geometry.elements:

        footprint =
            PROJECT_TO_2D(part)                                  // F07, DER-10

        relation =
            TOPOLOGICAL_RELATION(footprint, allowed_area, tolerance)   // F08, DER-13

        IF relation is not WITHIN, COVERED_BY or EQUALS:
            parts_outside ADD {
                part.GlobalId,
                relation,
                MEASURE_OUTSIDE(footprint, allowed_area)         // F16
            }

    // Step 9 — Report result and evidence
    overlap_policy =
        GET_PARAMETER("BM13-R01", "partialOverlapPolicy")        // F23

    IF parts_outside is not empty:

        IF overlap_policy = REVIEW AND every relation in parts_outside is OVERLAPS:
            RETURN REVIEW_REQUIRED WITH { parts_outside, allowed_area.sourceIds }

        RETURN NON_COMPLIANT WITH { parts_outside, allowed_area.sourceIds }

    IF relevant_geometry.unresolved is not empty:
        RETURN REVIEW_REQUIRED WITH { relevant_geometry.unresolved, allowed_area.sourceIds }

    RETURN COMPLIANT WITH { allowed_area.sourceIds, data_check.warnings }
```

**Why a union of areas (step 2):** a building can legitimately span two adjacent *Wonen* areas (two separate plan objects). Testing each element against each area separately — as the PDF query does — would wrongly flag it as `OVERLAPS` for both. Testing against the union gives the correct `WITHIN`.

**Why `TOUCHES` is a violation:** an element that only touches the area from outside lies entirely outside it.

### Layer 4 — Machine-readable rule

**4a. Rule parameters (RDF)** — the only part a municipality edits:

```turtle
@prefix bm13: <https://example.org/bm13/> .
@prefix xsd:  <http://www.w3.org/2001/XMLSchema#> .

bm13:R01_BestemmingWonen
    a bm13:PermitRule ;
    bm13:ruleId              "BM13-R01" ;
    bm13:ruleVersion         "0.1" ;
    bm13:ruleType            bm13:FunctionalDesignation ;
    bm13:checkedUse          "woonfunctie" ;
    bm13:allowedDesignation  "Wonen" ;          # repeat for "Gemengd" etc. if allowed
    bm13:areaType            bm13:Function ;
    bm13:elementProfile      bm13:BUILDING_VOLUME ;
    bm13:includeBelowGround  false ;
    bm13:boundaryTolerance   "0.01"^^xsd:decimal ;  # metres
    bm13:partialOverlapPolicy bm13:NonCompliant ;
    bm13:searchRadius        "50"^^xsd:decimal .
```

**4b. SPARQL — derive the relation per element (DER-13).** Uses the generic functions; *`ext:` is the example implementation's function namespace.*

```sparql
PREFIX bm13: <https://example.org/bm13/>
PREFIX geom: <https://rdf.bg/geometry/>
PREFIX dso:  <http://rdf.bg/areas/>
PREFIX ext:  <http://rdf.bg/geometry-ext.ttl#>

INSERT { GRAPH <urn:bm13:derived> {
    ?element bm13:designationRelation ?relation ;
             bm13:checkedAgainst      bm13:R01_BestemmingWonen .
} }
WHERE {
  # union of all allowed designation areas (DER-12)
  { SELECT (ext:union(?areaGeom) AS ?allowedArea) WHERE {
      bm13:R01_BestemmingWonen bm13:allowedDesignation ?allowed .
      GRAPH <urn:bm13:areas> { ?area dso:name ?allowed ; dso:geometry ?areaGeom . }
  } }
  bm13:R01_BestemmingWonen bm13:boundaryTolerance ?tol .
  # relevant elements only (F10), already transformed and projected (F09 + F07)
  GRAPH <https://rdf.bg/geometries/> {
    ?element a geom:Geometry ;
             bm13:inProfile bm13:BUILDING_VOLUME ;
             geom:projectionBase64Data ?footprint .
  }
  BIND(ext:topologicalRelation(?footprint, ?allowedArea, ?tol) AS ?relation)
}
```

**4c. SHACL — validate (corrected version of PDF [§2.13](#2-processing-pipeline-and-data-applies-to-every-check)):**

```turtle
@prefix sh:   <http://www.w3.org/ns/shacl#> .
@prefix bm13: <https://example.org/bm13/> .
@prefix geom: <https://rdf.bg/geometry/> .
@prefix xsd:  <http://www.w3.org/2001/XMLSchema#> .

bm13:R01_Shape
    a sh:NodeShape ;
    sh:targetSubjectsOf bm13:designationRelation ;
    sh:sparql [
        a sh:SPARQLConstraint ;
        sh:prefixes bm13:prefixes ;
        sh:message "BM13-R01: element {?globalId} is {?relation} the permitted Wonen area." ;
        sh:select """
            SELECT $this ?globalId ?relation
            WHERE {
                $this bm13:designationRelation ?relation ;
                      geom:globalId ?globalId .
                FILTER (?relation NOT IN ("WITHIN", "COVERED_BY", "EQUALS"))
            }
        """ ;
    ] ;
    sh:severity sh:Violation .

bm13:prefixes sh:declare
    [ sh:prefix "bm13" ; sh:namespace "https://example.org/bm13/"^^xsd:anyURI ] ,
    [ sh:prefix "geom" ; sh:namespace "https://rdf.bg/geometry/"^^xsd:anyURI ] .
```

Differences with the PDF shape: it targets only elements that were checked (not every geometry, so spaces and openings are no longer reported); it accepts `COVERED_BY` (elements on the boundary); `$this` is written without the stray backtick; and the message names the relation found.

**4d. Expected report when a wall lies outside (same form as PDF [§2.13](#2-processing-pipeline-and-data-applies-to-every-check)):**

```turtle
[ a sh:ValidationReport ;
  sh:conforms false ;
  sh:result [
      a sh:ValidationResult ;
      sh:focusNode      geom:IfcWall_63599 ;
      sh:resultMessage  "BM13-R01: element 1rMUAck_9AwBoilNJA$Dtt is OVERLAPS the permitted Wonen area." ;
      sh:resultSeverity sh:Violation ;
      sh:sourceShape    bm13:R01_Shape ;
      sh:value          "OVERLAPS" ] ] .
```

→ mapped to `NON_COMPLIANT`, evidence = `IfcWall` `1rMUAck_9AwBoilNJA$Dtt`, source = the IMRO/DSO area ids used.

### Layer 5 — Reference implementations

|  | Vendor A — semantic | Vendor B — conventional engine | Vendor C — semi-automated |
| --- | --- | --- | --- |
| Model | IFC → ifcOWL + GEOM in a triple store | IFC parsed with own library (e.g. IfcOpenShell, xBIM) | IFC opened in a GeoBIM viewer |
| Areas | Rule zones stored as RDF with their value constraints | Rule zones loaded from DSO/Ozon when the rule is set up | Plan map layer from DSO |
| Geometry | F07/F08 as SPARQL functions | Footprints and relation with GEOS/NetTopologySuite | Viewer computes footprint |
| Logic | SHACL shape 4c | Pseudocode layer 3 in C#/Java/Python | Officer confirms highlighted outcome |
| Output | SHACL report → result model | JSON result model | Recorded decision + screenshot |

All three are conformant implementations of BM13-R01 as long as they pass the test cases in [section 7](#7-conformance-test-cases).

## 6. Check #2 — BM13-R02 Maximum building height

### Layer 0 — Rule foundation / interpretation

Purpose: define **what the legal rule actually means** before touching software.

> **Rule ID:** BM13-R02 (ILS check #2 *Maximale bouwhoogte*)
>
> **Check:** Does the proposed building exceed the maximum permitted building height at this location?
>
> **Legal source:** Applicable environmental-plan provision / location-based rule: in the temporary part of the omgevingsplan a *maatvoeringsaanduiding* "maximum bouwhoogte (m)" (IMRO); in the new part an *omgevingsnorm* with a *normwaarde* (STOP/TPOD). The definitions of *peil* and *bouwhoogte* are in the plan's *begrippen* and *wijze van meten*.
>
> **Definition:** Building height is measured from the reference level (*peil*) to the highest relevant point of the building. Subordinate parts (chimneys, antennas, lift overruns) do not count, within the limits the plan sets. The reference level is set **per zone** by one of two methods, a value constraint of the zone: **(1)** the average elevation of the adjacent road; **(2)** the design elevation set by the designer (the entrance level of the model, in m NAP). See F11.
>
> **Interpretation questions:** Are rooftop installations included? Which reference level applies? Are there local exceptions? Is a measuring tolerance accepted? If the building lies in two height areas, is each part tested against its own area (default: yes)?
>
> **Dependencies:** Applicable regulatory working area, reference-level definition, building geometry.
>
> **Out of scope:** *Goothoogte* (eaves height) and roof pitch — separate rules, built with the same functions.

This is the normative interpretation layer.

### Layer 1 — Minimum requirements

What must be available before the check can run. MUST missing → `INSUFFICIENT_DATA`; SHOULD missing → note; MAY = context only ([section 3.4](#34-standard-result-precedence)). Together they form minimum set **MR-R02** ([Annex A.5](#a5-standard-minimum-requirement-sets)).

| Check | ILS objective | ILS milestone | Geometry needed (ILS) | ILS IDS files | Minimum set |
| --- | --- | --- | --- | --- | --- |
| #2 | ID01 (OPA) | M1 (indicative), M2, M3 | yes (height, bounding box) | 10 | MR-R02 = MR-BASE + … |

| Req. | What must be available | Level | Why the check needs it |
| --- | --- | --- | --- |
| M01 | A valid IFC model of one building, with project data and named storeys (elevation, entrance level) | MUST | Every step reads the model and its storeys |
| M02 | Building elements with closed body geometry, each inside a storey; no proxy elements (SHOULD) | MUST | The highest point is computed from the geometry |
| M03 | Georeferencing to RD New / NAP with the right scale, heights consistent in NAP, model at the application location | MUST | Heights are compared in NAP; zones are map data |
| M04 | The roof, recognisable as roof | MUST | The highest relevant point is usually on the roof |
| M05 | Roof-top installations (chimney, lift overrun) in their own class | SHOULD | Needed to apply the exemptions |
| M06 | The design elevation: the entrance-level storey (reference-level method 2) | MUST for zones with method 2 | Reference level (*peil*) |
| M07 | The adjacent road and its elevation (reference-level method 1) | MUST for zones with method 1 | Reference level (*peil*) |
| M08 | The height zones of the rule, each with maximum height, tolerance and reference-level method | MUST | Permitted height per zone |
| M09 | The rule profile: exempt classes and their maximum extra height | MUST | Which parts count for height |
| M10 | Addresses, building plot and cadastral parcel in the model | SHOULD | Cross-check of the location |

### Layer 2 — Mapping to IFC, ILS and GEO standards

| Req. | IFC entity / attribute / property set | ILS IDS (file no.) | BM13 supplement | GEO / regulation standard and source | DR ID |
| --- | --- | --- | --- | --- | --- |
| M01 | `IfcProject`; one `IfcBuilding`; `IfcBuildingStorey` Name, Elevation, `Pset_BuildingStoreyCommon.EntranceLevel` | 9 (01), 9.02 (07), 9.06a (13) | S07, S08 | IFC 4.3 / IFC4 ADD2 TC1 (ILS AC1, AC2) | ILS-9, 9.02, 9.06a |
| M02 | Building elements `Representation`; `IfcRelContainedInSpatialStructure` | — | S01, S02 | ILS [§6.2](#6-check-2--bm13-r02-maximum-building-height) G1, G4 | BM13-S01, ILS-G1 |
| M03 | `IfcMapConversion` (incl. `OrthogonalHeight`), `IfcProjectedCRS` | 9.01a (02), 9.01b (03) | — | EPSG:7415 (RD New + NAP); ILS AC4; ILS [§6.2](#6-check-2--bm13-r02-maximum-building-height) G2, G3 | ILS-9.01a, 9.01b, ILS-G2, G3 |
| M04 | `IfcRoof`, or `IfcSlab` PredefinedType `ROOF`, with `Representation` | — | S03 | — | BM13-S03 |
| M05 | `IfcChimney`, `IfcTransportElement` with `Representation` | — | S05 | — | BM13-S05 |
| M06 | `IfcBuildingStorey` with `EntranceLevel = true` and Elevation; `IfcSite.RefElevation` (cross-check) | 9.06a (13) | S07 | NAP via `IfcMapConversion.OrthogonalHeight` | ILS-9.06a |
| M07 | — | — | — | BGT road surfaces (PDOK); municipal height data, fallback AHN (DTM); m NAP | DR-GEO-07, DR-GEO-04 |
| M08 | — | — | — | Omgevingsplan: *omgevingsnorm* with *normwaarde* (STOP/TPOD via DSO); temporary part: *maatvoering* "maximum bouwhoogte" (IMRO); RD New | DR-GEO-03 |
| M09 | — | — | — | BM13 rule specification, layer 4a | DR-REG-02 |
| M10 | `Pset_Address`, `SiteAddress`, `BuildingAddress`; *Bouwwerkperceel*, *Kadastraal perceel* | 9.01c–e (04–06), 9.03b (09), 9.04 (10) | — | BRK (cross-check) | ILS-9.01c–e, 9.03b, 9.04 |

**Derived properties:** DER-02 reference level · DER-03 building height · DER-04 highest point.

### Layer 3 — Steps, functions and pseudocode

**Generic workflow:** `F19 → F20 → F00 → F01 → F21 → F22 → F10 → F15 → F23 → F11 → F12 → compare → F18`

| Step | What happens | Standard functions | Uses | Output / stops when |
| --- | --- | --- | --- | --- |
| 1 | Take the application and the model; run the IDS files of the check | F19, F20, F00 | M01–M05, M10 | MUST missing → `INSUFFICIENT_DATA` |
| 2 | Read and validate the georeferencing | F01, F21 | M03 | failed → `INSUFFICIENT_DATA` |
| 3 | Take the height zones of the rule and keep those the building stands in | F15 | M08 | none → `NOT_APPLICABLE` |
| 4 | Obtain the permitted maximum height of each zone | F23 | M08 | permitted height per zone |
| 5 | Determine the reference level of each zone with the zone's method | F23, F11 | M06 or M07 | DER-02; data missing → `INSUFFICIENT_DATA` |
| 6 | Determine the highest relevant point in each zone | F22, F10, F15, F12 | M02, M04, M05, M09 | DER-04 |
| 7 | Calculate building height = highest point − reference level | — | — | DER-03 |
| 8 | Compare with the permitted height plus tolerance | F23 | M08 | status per zone |
| 9 | Report result and evidence | F18 | — | `RuleCheckResult` |

**Pseudocode** (notation: [section 3.3](#33-how-to-read-the-pseudocode-applies-to-every-rule); final status: [section 3.4](#34-standard-result-precedence)):

```
PROCEDURE CHECK_MAXIMUM_BUILDING_HEIGHT(application):

    // Step 1 — Model and IDS check
    location =
        GET_APPLICATION_LOCATION(application)                    // F19

    bim_model =
        GET_SUBMITTED_BIM_MODEL(application)                     // F20

    IF bim_model is missing:
        RETURN INSUFFICIENT_DATA

    data_check =
        CHECK_MINIMUM_REQUIREMENTS(bim_model, "MR-R02")          // F00: IDS of check #2

    IF data_check.status = INSUFFICIENT_DATA:
        RETURN INSUFFICIENT_DATA WITH { data_check.failed }

    // Step 2 — Georeferencing
    georeference =
        GET_BIM_GEOREFERENCE(bim_model)                          // F01

    IF georeference is missing:
        RETURN INSUFFICIENT_DATA

    georeference_check =
        VALIDATE_GEOREFERENCE(bim_model, georeference, location) // F21

    IF georeference_check.status = INSUFFICIENT_DATA:
        RETURN INSUFFICIENT_DATA WITH { georeference_check.checks }

    building =
        GET_BUILDING_GEOMETRY(bim_model, georeference)           // F22: RD New, m NAP

    // Step 6 — Determine which BIM geometry counts
    relevant_geometry =
        FILTER_RELEVANT_GEOMETRY(
            building,
            interpretation = "HEIGHT_RELEVANT"
        )                                                        // F10: applies exemptions

    review_reasons = empty list

    IF relevant_geometry.unresolved is not empty:                // interpretation unresolved
        review_reasons ADD relevant_geometry.unresolved

    // Step 3 — Height zones of the rule, each with its value constraints
    height_zones =
        the zones of rule BM13-R02                               // defined in the rule, DR-GEO-03

    results = empty list

    FOR EACH zone IN height_zones:

        geometry_here =
            CLIP_TO_AREA(relevant_geometry.elements, zone.area)  // F15

        IF geometry_here is empty:                               // building not in this zone
            CONTINUE

        // Step 4 — Permitted height of this zone
        permitted_height =
            GET_PARAMETER(zone, "maximumHeight")                 // F23

        tolerance =
            GET_PARAMETER(zone, "tolerance")                     // F23

        // Step 5 — Reference level of this zone
        reference_level =
            GET_REFERENCE_LEVEL(zone, building)                  // F11, DER-02
            // method = GET_PARAMETER(zone, "referenceLevelMethod"):
            //   AVERAGE_ROAD_ELEVATION  or  DESIGN_ELEVATION

        IF reference_level.status = INSUFFICIENT_DATA:
            RETURN INSUFFICIENT_DATA WITH { zone.id, reference_level.reason }

        IF reference_level.status = REVIEW_REQUIRED:
            review_reasons ADD { zone.id, reference_level.reason }

        // Step 6 — Highest relevant point in this zone
        highest_point =
            MAX_Z(geometry_here)                                 // F12, DER-04

        // Step 7 — Building height
        measured_height =
            highest_point.z - reference_level.value              // DER-03

        // Step 8 — Compare
        IF measured_height <= permitted_height + tolerance:
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
```

Every result carries the same four values as in the original example: **measured height, permitted height, reference level and highest point** — per height area.

**Height is compared in NAP on both sides.** The model's local Z is converted with `OrthogonalHeight` (F09); the *peil* comes from GEO in NAP. Mixing a local Z with a NAP *peil* is the single most common source of wrong height results.

**Per height area (step 4):** a building that straddles a 9 m area and a 12 m area must meet 9 m for the part above the 9 m area. Taking one overall maximum would hide that violation.

**Why review does not stop the rule (difference with the first draft):** the first draft returned `REVIEW_REQUIRED` as soon as the interpretation was unresolved. Now the rule still measures, so a clear exceedance is reported as `NON_COMPLIANT`, and the open point is attached as a review reason ([section 3.4](#34-standard-result-precedence)).

The key idea is:

> every supplier can implement this differently, but the computational interpretation remains the same.

### Layer 4 — Machine-readable rule

**4a. Rule parameters (RDF):**

```turtle
@prefix bm13: <https://example.org/bm13/> .
@prefix xsd:  <http://www.w3.org/2001/XMLSchema#> .

bm13:R02_MaximumBuildingHeight
    a bm13:PermitRule ;
    bm13:ruleId                    "BM13-R02" ;
    bm13:ruleVersion               "0.1" ;
    bm13:ruleType                  bm13:MaximumBuildingHeight ;
    bm13:areaType                  bm13:MaximumBuildingHeight ;   # value comes from the area
    bm13:unit                      "m" ;
    bm13:tolerance                 "0.05"^^xsd:decimal ;
    bm13:referenceLevelMethod      bm13:AverageRoadElevation ;    # or bm13:DesignElevation — set per zone
    bm13:referenceLevelSource      bm13:MunicipalHeightData ;
    bm13:fallbackReferenceSource   bm13:AHN ;
    bm13:elementProfile            bm13:HEIGHT_RELEVANT ;
    bm13:exemptClass               "IfcChimney" , "IfcTransportElement" ;
    bm13:exemptMaxExtraHeight      "1.5"^^xsd:decimal ;
    bm13:searchRadius              "50"^^xsd:decimal ;
    bm13:resultProperty            bm13:buildingHeight .
```

**4b. SPARQL — write the derived values per case and height area.** The geometry engine (F11, F12) has already written `bm13:referenceLevel` and, per area, `bm13:highestPoint`; this query only computes and links:

```sparql
PREFIX bm13: <https://example.org/bm13/>

INSERT { GRAPH <urn:bm13:derived> {
    ?check a bm13:HeightCheck ;
           bm13:case                   ?case ;
           bm13:heightArea             ?area ;
           bm13:buildingHeight         ?measured ;
           bm13:maximumPermittedHeight ?allowed ;
           bm13:heightTolerance        ?tol ;
           bm13:highestElement         ?element .
} }
WHERE {
  ?case a bm13:BuildingPermitCase ;
        bm13:referenceLevel ?peil ;
        bm13:partInHeightArea [ bm13:heightArea   ?area ;
                                bm13:highestPoint ?top ;
                                bm13:highestElement ?element ] .
  ?area bm13:normValue ?allowed .
  bm13:R02_MaximumBuildingHeight bm13:tolerance ?tol .
  BIND (?top - ?peil AS ?measured)
  BIND (IRI(CONCAT(STR(?case), "/R02/", STRAFTER(STR(?area), "#"))) AS ?check)
}
```

**4c. SHACL — validate:**

```turtle
@prefix sh:   <http://www.w3.org/ns/shacl#> .
@prefix bm13: <https://example.org/bm13/> .

bm13:R02_Shape
    a sh:NodeShape ;
    sh:targetClass bm13:HeightCheck ;
    # completeness: every check must carry the numbers
    sh:property [ sh:path bm13:buildingHeight ;         sh:minCount 1 ; sh:severity sh:Violation ;
                  sh:message "BM13-R02: building height could not be derived." ] ;
    sh:property [ sh:path bm13:maximumPermittedHeight ; sh:minCount 1 ; sh:severity sh:Violation ;
                  sh:message "BM13-R02: no permitted height for this area." ] ;
    # compliance
    sh:sparql [
        a sh:SPARQLConstraint ;
        sh:prefixes bm13:prefixes ;
        sh:message "BM13-R02: height {?measured} m exceeds permitted {?allowed} m (+{?tol} m tolerance) in area {?area}." ;
        sh:select """
            SELECT $this ?measured ?allowed ?tol ?area
            WHERE {
                $this bm13:buildingHeight         ?measured ;
                      bm13:maximumPermittedHeight ?allowed ;
                      bm13:heightTolerance        ?tol ;
                      bm13:heightArea             ?area .
                FILTER (?measured > (?allowed + ?tol))
            }
        """ ;
    ] ;
    sh:severity sh:Violation .
```

**4d. SPARQL — build the result object ([section 3](#3-common-result-model) model):**

```sparql
PREFIX bm13: <https://example.org/bm13/>

CONSTRUCT {
    ?check bm13:checkResult ?result .
    ?result a bm13:RuleCheckResult ;
            bm13:rule          bm13:R02_MaximumBuildingHeight ;
            bm13:status        ?status ;
            bm13:measuredValue ?measured ;
            bm13:allowedValue  ?allowed ;
            bm13:tolerance     ?tol ;
            bm13:evidence      ?element .
}
WHERE {
    ?check a bm13:HeightCheck ;
           bm13:buildingHeight ?measured ;
           bm13:maximumPermittedHeight ?allowed ;
           bm13:heightTolerance ?tol ;
           bm13:highestElement ?element .
    BIND (IF(?measured <= ?allowed + ?tol, bm13:Compliant, bm13:NonCompliant) AS ?status)
    BIND (IRI(CONCAT(STR(?check), "/result")) AS ?result)
}
```

**Worked example (values from the test model):** highest point 14.21 m NAP, *peil* 1.84 m NAP → building height 12.37 m. Permitted 12.00 m + 0.05 m tolerance = 12.05 m. 12.37 > 12.05 → `NON_COMPLIANT`, evidence = the roof element holding the highest point.

### Layer 5 — Reference implementations

|  | Vendor A — semantic | Vendor B — conventional engine | Vendor C — semi-automated |
| --- | --- | --- | --- |
| Height areas | Height zones stored as RDF with their value constraints | DSO/Ozon REST call | Plan layer in viewer |
| Peil | F11 service (municipal data / AHN) writes `bm13:referenceLevel` | Own AHN/WCS client | Officer picks the point; software reads AHN |
| Highest point | F12 in geometry kernel writes `bm13:highestPoint` | Own geometry library | Viewer shows highest point and its element |
| Logic | SHACL 4c + CONSTRUCT 4d | Pseudocode layer 3 | Software calculates, officer confirms |
| Output | Result graph | JSON result model | Recorded decision with the three numbers |

## Checks #3–#6 — Omgevingsplan (OPA)

Every check uses the template of R01 and R02 ([§5](#5-check-1--bm13-r01-use-function-matches-the-designation-wonen), [§6](#6-check-2--bm13-r02-maximum-building-height)): **Layer 0** rule foundation, **Layer 1** minimum requirements (M01, M02, …), **Layer 2** mapping of each requirement to IFC, the ILS IDS files, the BM13 supplement and GEO standards, **Layer 3** steps, standard functions and software-independent pseudocode. Functions F00–F45 are defined in [section 4](#4-generic-function-library) of the guide, minimum sets in [Annex A.5](#a5-standard-minimum-requirement-sets), notation in [section 3.3](#33-how-to-read-the-pseudocode-applies-to-every-rule) and result precedence in [section 3.4](#34-standard-result-precedence).

**Link to the ILS Omgevingsvergunning:** each check's Layer 1 table gives its ILS check number, information objective (ID01) and ILS IDS files. These checks run at ILS milestones M1 (indicative), M2 and M3. How the ILS chapters, milestones and acceptance criteria AC1–AC7 fit into the checks is described in the guide, [§1.5](#15-relation-to-the-ils-omgevingsvergunning).

#### Generic workflow (the same for every check)

| Stage | What happens | Standard functions |
| --- | --- | --- |
| **A. Intake** | Take the application and the model; run the IDS files of the check | F19 `GET_APPLICATION_LOCATION`, F20 `GET_SUBMITTED_BIM_MODEL`, F00 `CHECK_MINIMUM_REQUIREMENTS` |
| **B. Georeference** *(checks that compare with the map)* | Read and validate the georeferencing | F01 `GET_BIM_GEOREFERENCE`, F21 `VALIDATE_GEOREFERENCE` |
| **C. Rule** | Take the zones of the rule the building lies in and read their value constraints | Zones of the rule with their value constraints (defined in the rule); F23 `GET_PARAMETER` (Bbl checks: F29 `GET_BBL_REQUIREMENT`) |
| **D. Building data** | Get the building, the zones and the parts that count | F22 `GET_BUILDING_GEOMETRY`, F24 `GET_ZONES`, F10 `FILTER_RELEVANT_GEOMETRY` |
| **E. Measure** | The measurement that is specific to the check | e.g. F25 area, F27 storeys, F12 height |
| **F. Compare** | Measured value against permitted value (+ tolerance) | — (plain comparison) |
| **G. Report** | Result with values, evidence and sources | F18 `MAKE_RESULT` |

Each check shows its own workflow as one line of function IDs, in the order they run, above its step table.

#### F10 profiles used in this part

| Profile | Includes | Used by |
| --- | --- | --- |
| `COVERAGE_RELEVANT` | Building parts on or above ground level that form the built-up area; overhangs and balconies only if the rule profile says so | R03 |

#### IDS file lookup

Checks list ILS sub-specifications as *spec (file no.)*, e.g. 9.03a (08). The file names are:

| No. | Spec | File | No. | Spec | File |
| --- | --- | --- | --- | --- | --- |
| 01 | 9 | `01-9-ILS-voor-Ruimten-in-de-omgevingswet.ids` | 22 | 9.10e | `22-9.10e-Bedgebied.ids` |
| 02 | 9.01a | `02-9.01a-Georeferentie.ids` | 23 | 9.10f | `23-9.10f-Restgebied.ids` |
| 03 | 9.01b | `03-9.01b-Coordinatenstelsel.ids` | 24 | 9.11 | `24-9.11-Buitengebied.ids` |
| 04 | 9.01c | `04-9.01c-Projectadres-IFC4X3-ADD2.ids` | 25 | 9.12a | `25-9.12a-Functieruimte.ids` |
| 05 | 9.01d | `05-9.01d-Perceeladres-IFC4.ids` | 26 | 9.12b | `26-9.12b-Verblijfsruimte.ids` |
| 06 | 9.01e | `06-9.01e-Gebouwadres-IFC4.ids` | 27 | 9.12c | `27-9.12c-Bedruimte.ids` |
| 07 | 9.02 | `07-9.02-Project.ids` | 28 | 9.12d | `28-9.12d-Restruimte.ids` |
| 08 | 9.03a | `08-9.03a-Perceel.ids` | 29 | 9.13 | `29-9.13-Buitenruimte.ids` |
| 09 | 9.03b | `09-9.03b-Bouwwerkperceel.ids` | 30 | 9.16a | `30-9.16a-Brandcompartiment.ids` |
| 10 | 9.04 | `10-9.04-Kadastraal-Perceel.ids` | 31 | 9.16b | `31-9.16b-Subbrandcompartiment.ids` |
| 11 | 9.05a | `11-9.05a-Gebouw.ids` | 32 | 9.16c | `32-9.16c-Vluchtroute.ids` |
| 12 | 9.05b | `12-9.05b-Gebouwinhoud.ids` | 33 | 9.17 | `33-9.17-Tarra-Ruimte.ids` |
| 13 | 9.06a | `13-9.06a-Bouwlaag-voorheen-verdieping.ids` | 34 | 9.18a | `34-9.18a-Fysieke-elementen-IfcBeam.ids` |
| 14 | 9.06b | `14-9.06b-Bouwlaaginhoud-voorheen-bouwlaagobject.ids` | 35 | 9.18b | `35-9.18b-Fysieke-elementen-IfcColumn.ids` |
| 15 | 9.07 | `15-9.07-Gebruikseenheid-voorheen-eigendom-en-gebruikseenheid.ids` | 36 | 9.18c | `36-9.18c-Fysieke-elementen-IfcCovering.INSULATION.ids` |
| 16 | 9.08 | `16-9.08-Gebruiksfunctie.ids` | 37 | 9.18d | `37-9.18d-Fysieke-elementen-IfcCurtainWall.ids` |
| 17 | 9.09 | `17-9.09-Nevengebruiksfunctie.ids` | 38 | 9.18e | `38-9.18e-Fysieke-elementen-IfcDoor.ids` |
| 18 | 9.10a | `18-9.10a-Functiegebied.ids` | 39 | 9.18f | `39-9.18f-Fysieke-elementen-IfcSensor.ids` |
| 19 | 9.10b | `19-9.10b-Verblijfsgebied.ids` | 40 | 9.18g | `40-9.18g-Fysieke-elementen-IfcSlab.ids` |
| 20 | 9.10c | `20-9.10c-Verblijfsgebied-met-bezettingsgraad.ids` | 41 | 9.18h | `41-9.18h-Fysieke-elementen-IfcWall.ids` |
| 21 | 9.10d | `21-9.10d-Gebruiksgebied.ids` | 42 | 9.18i | `42-9.18i-Fysieke-elementen-Ifcwindow.ids` |

The BM13 supplement is `bm13-supplement.ids` ([Annex B](#annex-b--bm13-supplementary-ids-bm13-supplementids-v03)) (S01–S15; guide, [Annex A.3](#a3-the-bm13-supplementary-ids) and A.6).

### BM13-R03 — Maximum building coverage percentage (ILS check #3)

#### Layer 0 — Rule foundation / interpretation

> **Rule ID:** BM13-R03 (ILS check #3 *Maximaal bebouwingspercentage*)
>
> **Check:** Does the built-up area — the new building plus the existing buildings that remain — exceed the maximum building coverage percentage for the reference area?
>
> **Legal source:** Omgevingsplan (Regels op de kaart) with a zoning and a norm for the maximum *bebouwingspercentage*; possibly a *paraplubestemmingsplan* with general rules. NEN 2580 for area determination.
>
> **Definition:** coverage % = built-up area inside the reference area ÷ area of the reference area × 100. The built-up area is the projection at ground level (*maaiveld*) of all new and existing buildings and building parts that count.
>
> **Interpretation questions:** Which reference area applies — the parcel, the *bouwvlak* or the *bebouwingsgebied*? Which buildings and parts count (annexes, outbuildings, overhangs, basements)? Is the norm based on area (m²) or on volume (m³)? How are split plots handled?
>
> **Dependencies:** Plan norm at the location, reference-area geometry, footprints of the new and existing buildings, georeferencing.
>
> **Out of scope:** The volume-based variant — same workflow, with the gross volume of ILS-9.05b instead of the projected area (parameter `basis`).

This is the normative interpretation layer.

#### Layer 1 — Minimum requirements

What must be available before the check can run. MUST missing → `INSUFFICIENT_DATA`; SHOULD missing → note; MAY = context only ([section 3.4](#34-standard-result-precedence)). Together they form minimum set **MR-R03** ([Annex A.5](#a5-standard-minimum-requirement-sets)).

| Check | ILS objective | ILS milestone | Geometry needed (ILS) | ILS IDS files | Minimum set |
| --- | --- | --- | --- | --- | --- |
| #3 | ID01 (OPA) | M1 (indicative), M2, M3 | yes (projected area) | 17 | MR-R03 = MR-BASE + M04–M12 |

| Req. | What must be available | Level | Why the check needs it |
| --- | --- | --- | --- |
| M01 | A valid IFC model of one building, with project data and named storeys (elevation, entrance level) | MUST | Every step reads the model and its storeys |
| M02 | Building elements with closed body geometry, each inside a storey; no proxy elements (SHOULD) | MUST | The footprint is computed from the element geometry |
| M03 | Georeferencing to RD New / NAP with the right scale, model placed at the application location | MUST | The footprint is compared with parcels, existing buildings and zones |
| M04 | The gross building volume (*Gebouwinhoud*) as a closed solid | MUST | Projected footprint of the new building |
| M05 | Quantities calculated by the authoring tool | MUST | Two-step check: recalculated area against reported area |
| M06 | Areas following NEN 2580 | SHOULD | Same measuring rules as the plan |
| M07 | The cadastral parcel(s) of the plot | MUST | Reference area when the zone says `PARCEL` |
| M08 | The existing buildings on the parcel | MUST | They count towards the built-up area |
| M09 | The buildings to be demolished | SHOULD | They are removed from the existing footprint |
| M10 | The coverage zones of the rule, each with maximumCoverage, tolerance and referenceArea; the building-plane (*bouwvlak*) zones | MUST | Permitted percentage and reference area per zone |
| M11 | The rule profile: which parts count (`COVERAGE_RELEVANT`), below-ground parts, overhangs | MUST | The interpretation choices of Layer 0 |
| M12 | Addresses, parcel, building plot, storey volumes, use function and spaces in the model | SHOULD | Cross-check of location and evidence |

#### Layer 2 — Mapping to IFC, ILS and GEO standards

| Req. | IFC entity / attribute / property set | ILS IDS (file no.) | BM13 supplement | GEO / regulation standard and source | DR ID |
| --- | --- | --- | --- | --- | --- |
| M01 | `IfcProject`; one `IfcBuilding`; `IfcBuildingStorey` Name, Elevation, `Pset_BuildingStoreyCommon.EntranceLevel` | 9 (01), 9.02 (07), 9.06a (13) | S07, S08 | IFC 4.3 / IFC4 ADD2 TC1 (ILS AC1, AC2) | ILS-9, 9.02, 9.06a |
| M02 | Building elements `Representation`; `IfcRelContainedInSpatialStructure` | — | S01, S02 | ILS [§6.2](#6-check-2--bm13-r02-maximum-building-height) G1, G4 (AC5) | BM13-S01, ILS-G1 |
| M03 | `IfcMapConversion` (Eastings, Northings, OrthogonalHeight, rotation, Scale), `IfcProjectedCRS` | 9.01a (02), 9.01b (03) | — | EPSG:28992 / EPSG:7415 (NAP); ILS AC4 | ILS-9.01a, 9.01b, ILS-G2 |
| M04 | `IfcSpatialZone` `ObjectType` = *Gebouwinhoud*, closed `Representation` | 9.05b (12) | — | bSDD *Omgevingswet-Ruimten*; NEN 2580 | ILS-9.05b |
| M05 | `Qto_…BaseQuantities` (gross / footprint area) | — | — | ILS [§6.2](#6-check-2--bm13-r02-maximum-building-height) G5; ILS AC6 | ILS-G5 |
| M06 | `Qto_…BaseQuantities` following NEN 2580 | — | — | NEN 2580; ILS [§6.2](#6-check-2--bm13-r02-maximum-building-height) G6 | ILS-G6 |
| M07 | — | — | — | BRK parcels (Kadaster) via PDOK; RD New | DR-GEO-02 |
| M08 | — | — | — | BAG buildings via PDOK; RD New | DR-GEO-06 |
| M09 | — | — | — | DSO application (Omgevingsloket) | DR-APP-01 |
| M10 | — | — | — | Omgevingsplan: *omgevingsnorm* bebouwingspercentage + *bouwvlak* (STOP/TPOD via DSO); temporary part: *maatvoering* maximum bebouwingspercentage (IMRO); RD New | DR-GEO-09 |
| M11 | — | — | — | BM13 rule specification, layer 4a | DR-REG-03 |
| M12 | `Pset_Address`; `IfcSpatialZone` *Perceel*, *Bouwwerkperceel*, *Kadastraal perceel*, *Bouwlaaginhoud*; `IfcBuilding`; `IfcZone` *Gebruiksfunctie*; `IfcSpace` *Functieruimte*, *Verblijfsruimte* | 9.01c–e (04–06), 9.03a (08), 9.03b (09), 9.04 (10), 9.05a (11), 9.06b (14), 9.08 (16), 9.12a (25), 9.12b (26) | — | bSDD *Omgevingswet-Ruimten*; BRK (cross-check) | ILS-9.01c–e, 9.03a, 9.03b, 9.04, 9.05a, 9.06b, 9.08, 9.12a, 9.12b |

**Derived properties:** DER-30 reference area · DER-31 new footprint · DER-32 existing footprint · DER-33 built-up area · DER-34 coverage %.

#### Layer 3 — Steps, functions and pseudocode

**Generic workflow:** `F19 → F20 → F00 → F01 → F21 → F22 → F10 → F07 → F14 → F05 → F30 → F26 → F23 → F25 → compare → F18`

| Step | What happens | Standard functions | Uses | Output / stops when |
| --- | --- | --- | --- | --- |
| 1 | Take the application and the model; run the IDS files of the check | F19, F20, F00 | M01–M12 | MUST missing → `INSUFFICIENT_DATA` |
| 2 | Read and validate the georeferencing | F01, F21 | M03 | failed → `INSUFFICIENT_DATA` |
| 3 | Take the coverage zones the building lies in; read the permitted percentage of each | F26, F23 | M10 | none → `NOT_APPLICABLE` |
| 4 | Determine the reference area of each zone: parcel, *bouwvlak* or the zone itself (value constraint referenceArea) | F23, F05, F14 | M07, M10 | DER-30 |
| 5 | Determine the footprint of the new building | F22, F10, F07, F14 | M02, M04, M11 | DER-31 |
| 6 | Determine the footprints of existing buildings that remain (minus buildings to be demolished) | F05, F30, F14 | M08, M09 | DER-32 |
| 7 | Merge the footprints, keep the part inside the reference area, calculate both areas | F14, F26, F25 | M05, M06 | DER-33 (m²) |
| 8 | Calculate the coverage percentage and compare with the permitted percentage plus tolerance | F23 | M10 | DER-34; status per zone |
| 9 | Report result and evidence | F18 | — | `RuleCheckResult` |

**Pseudocode** (notation: [section 3.3](#33-how-to-read-the-pseudocode-applies-to-every-rule); final status: [section 3.4](#34-standard-result-precedence)):

```
PROCEDURE CHECK_BUILDING_COVERAGE(application):

    // Step 1 — Model and IDS check
    location   = GET_APPLICATION_LOCATION(application)                 // F19
    bim_model  = GET_SUBMITTED_BIM_MODEL(application)                  // F20
    IF bim_model is missing:
        RETURN INSUFFICIENT_DATA
    data_check = CHECK_MINIMUM_REQUIREMENTS(bim_model, "MR-R03")       // F00
    IF data_check.status = INSUFFICIENT_DATA:
        RETURN INSUFFICIENT_DATA WITH { data_check.failed }

    // Step 2 — Georeferencing
    georeference = GET_BIM_GEOREFERENCE(bim_model)                     // F01
    IF georeference is missing
       OR VALIDATE_GEOREFERENCE(bim_model, georeference, location).status = INSUFFICIENT_DATA:   // F21
        RETURN INSUFFICIENT_DATA

    // Step 5 — Footprint of the new building
    building      = GET_BUILDING_GEOMETRY(bim_model, georeference)     // F22
    relevant      = FILTER_RELEVANT_GEOMETRY(building, "COVERAGE_RELEVANT")   // F10
    new_footprint = UNION_AREAS(PROJECT_TO_2D(part) FOR EACH part IN relevant.elements)   // F07, F14, DER-31

    // Step 6 — Footprints of existing buildings that remain
    existing      = GET_PDOK_FEATURES("Buildings", location)           // F05
    demolished    = GET_APPLICATION_DATA(application, "buildingsToDemolish")   // F30
    existing_footprint = UNION_AREAS(existing WITHOUT demolished)      // F14, DER-32

    // Step 3 — Coverage zones of the rule, each with its value constraints
    coverage_zones = the zones of rule BM13-R03                        // defined in the rule, DR-GEO-09

    review_reasons = empty list
    results        = empty list

    FOR EACH zone IN coverage_zones:

        IF INTERSECT_AREAS(zone.area, new_footprint) is empty:         // F26: building not in this zone
            CONTINUE

        permitted = GET_PARAMETER(zone, "maximumCoverage")             // F23, %
        tolerance = GET_PARAMETER(zone, "tolerance")                   // F23, % points

        // Step 4 — Reference area of this zone
        reference_type = GET_PARAMETER(zone, "referenceArea")          // PARCEL, BUILDING_PLANE or ZONE
        IF reference_type = PARCEL:
            reference_area = UNION_AREAS(GET_PDOK_FEATURES("Parcels", location))   // F05, F14
        ELSE IF reference_type = BUILDING_PLANE:
            reference_area = UNION_AREAS(the building-plane zones of the rule)     // F14
        ELSE:
            reference_area = zone.area                                 // DER-30

        // Step 7 — Built-up area inside the reference area
        built_up      = INTERSECT_AREAS(UNION_AREAS(new_footprint, existing_footprint),
                                        reference_area)                // F14, F26
        built_area    = CALCULATE_AREA(built_up, "PROJECTED")          // F25, DER-33
        reference_m2  = CALCULATE_AREA(reference_area, "PROJECTED")    // F25
        IF built_area.status = REVIEW_REQUIRED:
            review_reasons ADD built_area.deviation

        // Step 8 — Coverage and comparison
        coverage = built_area.value / reference_m2.value × 100         // DER-34
        IF coverage <= permitted + tolerance:
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
```

**Why the footprints are merged before measuring:** a new building that replaces or touches an existing one would otherwise be counted twice where they overlap.

### BM13-R04 — Use function limited to x storeys (ILS check #4)

#### Layer 0 — Rule foundation / interpretation

> **Rule ID:** BM13-R04 (ILS check #4 *Gebruiksfunctie / bestemming beperkt tot x bouwlagen*)
>
> **Check:** Is each use function of the building located only on the storeys where the plan allows it? Examples: *wonen* only on the upper floors; a shop only on the ground floor; a business on at most one storey.
>
> **Legal source:** Omgevingsplan (Regels op de kaart): designation or function indication with a storey restriction, and its explanation in the plan rules; possibly a *paraplubestemmingsplan*.
>
> **Definition:** For every use-function zone, the storeys it occupies must lie within the storeys the rule permits — either a range of storeys (e.g. only storey 0) or a maximum number of storeys. Storeys are counted with the same definition as check #6.
>
> **Interpretation questions:** How are storeys counted (basement, mezzanine, roof storey)? Does an entrance, stairwell or storage room of an upper-floor dwelling on the ground floor count as that use on the ground floor? Does a zone that spans two storeys count on both?
>
> **Dependencies:** Check #1 (the use function is allowed at all), the storey definition (check #6), the use-function zones.

This is the normative interpretation layer.

#### Layer 1 — Minimum requirements

What must be available before the check can run. MUST missing → `INSUFFICIENT_DATA`; SHOULD missing → note; MAY = context only ([section 3.4](#34-standard-result-precedence)). Together they form minimum set **MR-R04** ([Annex A.5](#a5-standard-minimum-requirement-sets)).

| Check | ILS objective | ILS milestone | Geometry needed (ILS) | ILS IDS files | Minimum set |
| --- | --- | --- | --- | --- | --- |
| #4 | ID01 (OPA) | M1 (indicative), M2, M3 | yes (storeys) | 9 | MR-R04 = MR-CORE + M03–M09 |

No georeferencing is needed: the zones of the rule are matched with the application location (F19). When that location lies in more than one zone, the result is `REVIEW_REQUIRED`.

| Req. | What must be available | Level | Why the check needs it |
| --- | --- | --- | --- |
| M01 | A valid IFC model of one building, with project data and named storeys (elevation, entrance level) | MUST | Storeys are what the rule restricts |
| M02 | Building elements with closed body geometry, each inside a storey; no proxy elements (SHOULD) | MUST | Storeys must contain their elements |
| M03 | The use function zones, each linked to its storeys | MUST | Which use function lies on which storey |
| M04 | Secondary use functions | SHOULD | Some plans restrict these separately |
| M05 | The building object | SHOULD | Building-level evidence |
| M06 | The application location (address, BAG ids, parcel ids) | MUST | Selects the zone(s) of the rule |
| M07 | The zones of the rule, each with its storey restriction per use function (e.g. only on the ground floor) | MUST | Permitted storeys per use function |
| M08 | The rule profile: storey definition and numbering (ground floor, basement, mezzanine) | MUST | The interpretation choices of Layer 0 |
| M09 | Addresses in the model | SHOULD | Cross-check with the application location |

#### Layer 2 — Mapping to IFC, ILS and GEO standards

| Req. | IFC entity / attribute / property set | ILS IDS (file no.) | BM13 supplement | GEO / regulation standard and source | DR ID |
| --- | --- | --- | --- | --- | --- |
| M01 | `IfcProject`; one `IfcBuilding`; `IfcBuildingStorey` Name, Elevation, `Pset_BuildingStoreyCommon.EntranceLevel` | 9 (01), 9.02 (07), 9.06a (13) | S07, S08 | IFC 4.3 / IFC4 ADD2 TC1 (ILS AC1, AC2) | ILS-9, 9.02, 9.06a |
| M02 | Building elements `Representation`; `IfcRelContainedInSpatialStructure` | — | S01, S02 | ILS [§6.2](#6-check-2--bm13-r02-maximum-building-height) G1, G4 (AC5) | BM13-S01, ILS-G1 |
| M03 | `IfcZone` `ObjectType` = *Gebruiksfunctie*, `Name` = Bbl use function; spaces per storey | 9.08 (16) | — | bSDD *Omgevingswet-Ruimten*; Bbl use functions | ILS-9.08 |
| M04 | `IfcZone` `ObjectType` = *Nevengebruiksfunctie* | 9.09 (17) | — | bSDD *Omgevingswet-Ruimten* | ILS-9.09 |
| M05 | `IfcBuilding`, `Pset_BuildingCommon.BuildingID` | 9.05a (11) | S08 | BAG id (or 14× `0` for new build) | ILS-9.05a |
| M06 | — | — | — | DSO application (Omgevingsloket); BAG / BRK ids | DR-APP-01 |
| M07 | — | — | — | Omgevingsplan: *gebiedsaanwijzing* Functie with storey norm (STOP/TPOD via DSO); temporary part: *aanduiding* (IMRO); RD New | DR-GEO-01, DR-GEO-09 |
| M08 | — | — | — | BM13 rule specification, layer 4a | DR-REG-04 |
| M09 | `Pset_Address`, `SiteAddress`, `BuildingAddress` | 9.01c–e (04–06) | — | BAG addresses (cross-check) | ILS-9.01c–e |

**Derived properties:** DER-40 use function per storey · DER-41 storey numbers.

#### Layer 3 — Steps, functions and pseudocode

**Generic workflow:** `F19 → F20 → F00 → F08 → F23 → F24 → F27 → compare → F18`

| Step | What happens | Standard functions | Uses | Output / stops when |
| --- | --- | --- | --- | --- |
| 1 | Take the application and the model; run the IDS files of the check | F19, F20, F00 | M01–M05, M09 | MUST missing → `INSUFFICIENT_DATA` |
| 2 | Take the zones of the rule that contain the application location; read the storey restriction per use function | F08, F23 | M06, M07 | none → `NOT_APPLICABLE`; more than one → `REVIEW_REQUIRED` |
| 3 | Determine the use-function zones and their storeys | F24 | M03, M04 | DER-40 |
| 4 | Count and number the storeys following the plan definition | F27 | M01, M08 | DER-41 |
| 5 | Compare the storeys of each use function with the permitted storeys | — | M07 | status per use function |
| 6 | Report result and evidence | F18 | — | `RuleCheckResult` |

**Pseudocode** (notation: [section 3.3](#33-how-to-read-the-pseudocode-applies-to-every-rule); final status: [section 3.4](#34-standard-result-precedence)):

```
PROCEDURE CHECK_USE_FUNCTION_STOREYS(application):

    // Step 1 — Model and IDS check
    location   = GET_APPLICATION_LOCATION(application)                 // F19
    bim_model  = GET_SUBMITTED_BIM_MODEL(application)                  // F20
    IF bim_model is missing:
        RETURN INSUFFICIENT_DATA
    data_check = CHECK_MINIMUM_REQUIREMENTS(bim_model, "MR-R04")       // F00
    IF data_check.status = INSUFFICIENT_DATA:
        RETURN INSUFFICIENT_DATA WITH { data_check.failed }

    // Step 2 — Zones of the rule at the location, each with its storey restriction
    zones_here = the zones of rule BM13-R04 whose area contains location.point   // F08, DR-GEO-09
    IF zones_here is empty:
        RETURN NOT_APPLICABLE

    review_reasons = empty list
    IF COUNT(zones_here) > 1:
        review_reasons ADD "location lies in more than one zone"

    // Steps 3 and 4 — Use functions and storeys
    use_zones = GET_ZONES(bim_model, "Gebruiksfunctie")
                + GET_ZONES(bim_model, "Nevengebruiksfunctie")         // F24
    storeys   = COUNT_STOREYS(bim_model,
                    definition     = GET_PARAMETER("BM13-R04", "storeyDefinition"),   // F23
                    referenceLevel = "ENTRANCE_LEVEL")                  // F27, DER-41
    IF storeys.status = REVIEW_REQUIRED:
        review_reasons ADD storeys.reason

    // Step 5 — Compare per use function
    results = empty list
    FOR EACH zone IN zones_here:
        use          = GET_PARAMETER(zone, "useFunction")              // F23, e.g. "Woonfunctie"
        zones_of_use = the use_zones whose name is use
        storeys_used = the storey numbers of zones_of_use              // DER-40

        IF zone has "maxStoreys":
            allowed_ok = COUNT(storeys_used) <= GET_PARAMETER(zone, "maxStoreys")
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
```

### BM13-R05 — Home-based business: maximum share of usable floor area (ILS check #5)

#### Layer 0 — Rule foundation / interpretation

> **Rule ID:** BM13-R05 (ILS check #5 *Beroep aan huis: maximaal 50% gebruiksoppervlakte*)
>
> **Check:** Does the usable floor area of a secondary business use (*beroep aan huis*, e.g. an office) exceed the maximum share permitted within the residential use function?
>
> **Legal source:** Omgevingsplan (Regels op de kaart) with a norm for the maximum share (often 50%, sometimes also a maximum in m²) for *beroep aan huis*; municipal policy rules that are not yet on the map; NEN 2580 for the usable floor area (GO).
>
> **Definition:** share = GO of the zones used for the business ÷ GO of the whole residential use function (business part included) × 100.
>
> **Interpretation questions:** Does the activity qualify as *beroep aan huis* (SBI code list; some SBI codes are permit-free)? Are outbuildings included in the denominator? Are unnamed spaces counted as living or as business? Is there also an absolute maximum in m²?
>
> **Dependencies:** Use-function and secondary-use zones, NEN 2580 areas, the activity from the application, the plan norm at the location.
>
> **Out of scope:** Whether the applicant is an interested party (Kadaster check): a legal admissibility question, not a model check.

This is the normative interpretation layer.

#### Layer 1 — Minimum requirements

What must be available before the check can run. MUST missing → `INSUFFICIENT_DATA`; SHOULD missing → note; MAY = context only ([section 3.4](#34-standard-result-precedence)). Together they form minimum set **MR-R05** ([Annex A.5](#a5-standard-minimum-requirement-sets)).

| Check | ILS objective | ILS milestone | Geometry needed (ILS) | ILS IDS files | Minimum set |
| --- | --- | --- | --- | --- | --- |
| #5 | ID01 (OPA) | M1 (indicative), M2, M3 | yes (area) | 17 | MR-R05 = MR-BASE + M04–M13 |

| Req. | What must be available | Level | Why the check needs it |
| --- | --- | --- | --- |
| M01 | A valid IFC model of one building, with project data and named storeys (elevation, entrance level) | MUST | Every step reads the model and its storeys |
| M02 | Building elements with closed body geometry, each inside a storey; no proxy elements (SHOULD) | MUST | Areas are computed from closed solids |
| M03 | Georeferencing to RD New / NAP with the right scale, model placed at the application location | MUST | The building is matched with the home-business zone |
| M04 | The use function zones (*Woonfunctie* and the business part) | MUST | The two areas that are compared |
| M05 | The secondary use function for the business activity | MUST | Identifies the business part |
| M06 | The use units | MUST | The share is computed per dwelling |
| M07 | Quantities calculated by the authoring tool | MUST | Two-step check of the areas |
| M08 | Areas following NEN 2580 (usable floor area, GO) | SHOULD | Same measuring rules as the plan |
| M09 | Spaces: function spaces, residential spaces, remaining spaces and areas, tare spaces | SHOULD | Flags spaces that could be used for the business |
| M10 | The activity and SBI code in the application | SHOULD | Qualifies the activity as *beroep aan huis* |
| M11 | The home-business zones of the rule, each with maximumShare and maximumArea | MUST | Permitted share and m² maximum |
| M12 | The rule profile: list of allowed activities, what counts as business area | MUST | The interpretation choices of Layer 0 |
| M13 | Addresses, building plot and cadastral parcel in the model | SHOULD | Cross-check of the location |

#### Layer 2 — Mapping to IFC, ILS and GEO standards

| Req. | IFC entity / attribute / property set | ILS IDS (file no.) | BM13 supplement | GEO / regulation standard and source | DR ID |
| --- | --- | --- | --- | --- | --- |
| M01 | `IfcProject`; one `IfcBuilding`; `IfcBuildingStorey` Name, Elevation, `Pset_BuildingStoreyCommon.EntranceLevel` | 9 (01), 9.02 (07), 9.06a (13) | S07, S08 | IFC 4.3 / IFC4 ADD2 TC1 (ILS AC1, AC2) | ILS-9, 9.02, 9.06a |
| M02 | Building elements `Representation`; `IfcRelContainedInSpatialStructure` | — | S01, S02 | ILS [§6.2](#6-check-2--bm13-r02-maximum-building-height) G1, G4 (AC5) | BM13-S01, ILS-G1 |
| M03 | `IfcMapConversion`, `IfcProjectedCRS` | 9.01a (02), 9.01b (03) | — | EPSG:28992 / EPSG:7415 (NAP); ILS AC4 | ILS-9.01a, 9.01b, ILS-G2 |
| M04 | `IfcZone` `ObjectType` = *Gebruiksfunctie* | 9.08 (16) | — | bSDD *Omgevingswet-Ruimten*; Bbl use functions | ILS-9.08 |
| M05 | `IfcZone` `ObjectType` = *Nevengebruiksfunctie* | 9.09 (17) | — | bSDD *Omgevingswet-Ruimten* | ILS-9.09 |
| M06 | `IfcZone` `ObjectType` = *Gebruikseenheid* | 9.07 (15) | — | bSDD *Omgevingswet-Ruimten* | ILS-9.07 |
| M07 | `Qto_…BaseQuantities` (NetFloorArea) | — | — | ILS [§6.2](#6-check-2--bm13-r02-maximum-building-height) G5; ILS AC6 | ILS-G5 |
| M08 | `Qto_…BaseQuantities` following NEN 2580 | — | — | NEN 2580 (GO); ILS [§6.2](#6-check-2--bm13-r02-maximum-building-height) G6 | ILS-G6 |
| M09 | `IfcSpace` *Functieruimte*, *Verblijfsruimte*, *Restruimte*, *Tarra ruimte*; `IfcSpatialZone` *Restgebied* | 9.10f (23), 9.12a (25), 9.12b (26), 9.12d (28), 9.17 (33) | — | bSDD *Omgevingswet-Ruimten*; NEN 2580 | ILS-9.10f, 9.12a, 9.12b, 9.12d, 9.17 |
| M10 | — | — | — | DSO application; SBI code list (KvK / CBS) | DR-APP-01 |
| M11 | — | — | — | Omgevingsplan: *gebiedsaanwijzing* / *omgevingsnorm* for *beroep aan huis* (STOP/TPOD via DSO); temporary part: IMRO; RD New | DR-GEO-09 |
| M12 | — | — | — | BM13 rule specification, layer 4a | DR-REG-05 |
| M13 | `Pset_Address`; `IfcSpatialZone` *Bouwwerkperceel*, *Kadastraal perceel* + `Pset_LandRegistration` | 9.01c–e (04–06), 9.03b (09), 9.04 (10) | — | BRK (cross-check) | ILS-9.01c–e, 9.03b, 9.04 |

**Derived properties:** DER-50 business GO · DER-51 residential GO · DER-52 business share %.

#### Layer 3 — Steps, functions and pseudocode

**Generic workflow:** `F19 → F20 → F00 → F01 → F21 → F24 → F30 → F23 → F08 → F23 → F25 → compare → F18`

| Step | What happens | Standard functions | Uses | Output / stops when |
| --- | --- | --- | --- | --- |
| 1 | Take the application and the model; run the IDS files of the check | F19, F20, F00 | M01–M09, M13 | MUST missing → `INSUFFICIENT_DATA` |
| 2 | Read and validate the georeferencing | F01, F21 | M03 | failed → `INSUFFICIENT_DATA` |
| 3 | Qualify the activity: read activity and SBI code, check against the allowed list | F30, F23 | M10, M12 | not allowed → `NON_COMPLIANT`; unclear → `REVIEW_REQUIRED` |
| 4 | Take the home-business zone that contains the location; read maximumShare and maximumArea | F08, F23 | M11 | none → `NOT_APPLICABLE` |
| 5 | Determine the residential zones and the business zones | F24 | M04, M05, M06 | zones per use unit |
| 6 | Calculate the usable floor area (NEN 2580 GO) of both | F25 | M07, M08 | DER-50, DER-51 |
| 7 | Flag unnamed spaces that could later be used for the business | F24 | M09 | review notes |
| 8 | Calculate the share and compare with maximumShare and maximumArea | — | M11 | DER-52; status |
| 9 | Report result and evidence | F18 | — | `RuleCheckResult` |

**Pseudocode** (notation: [section 3.3](#33-how-to-read-the-pseudocode-applies-to-every-rule); final status: [section 3.4](#34-standard-result-precedence)):

```
PROCEDURE CHECK_HOME_BUSINESS_SHARE(application):

    // Step 1 — Model and IDS check
    location   = GET_APPLICATION_LOCATION(application)                 // F19
    bim_model  = GET_SUBMITTED_BIM_MODEL(application)                  // F20
    IF bim_model is missing:
        RETURN INSUFFICIENT_DATA
    data_check = CHECK_MINIMUM_REQUIREMENTS(bim_model, "MR-R05")       // F00
    IF data_check.status = INSUFFICIENT_DATA:
        RETURN INSUFFICIENT_DATA WITH { data_check.failed }

    // Step 2 — Georeferencing
    georeference = GET_BIM_GEOREFERENCE(bim_model)                     // F01
    IF georeference is missing
       OR VALIDATE_GEOREFERENCE(bim_model, georeference, location).status = INSUFFICIENT_DATA:   // F21
        RETURN INSUFFICIENT_DATA

    // Step 5 — Residential and business zones
    residential = the zones of GET_ZONES(bim_model, "Gebruiksfunctie") named "Woonfunctie"   // F24
    business    = GET_ZONES(bim_model, "Nevengebruiksfunctie")         // F24
    IF business is empty:
        RETURN NOT_APPLICABLE                                          // no home business applied for

    review_reasons = empty list

    // Step 3 — Qualify the activity
    sbi_code   = GET_APPLICATION_DATA(application, "sbiCode")          // F30
    qualifying = GET_PARAMETER("BM13-R05", "qualifyingSbiCodes")       // F23
    IF sbi_code is missing:
        review_reasons ADD "activity could not be qualified"
    ELSE IF sbi_code is not in qualifying:
        RETURN NON_COMPLIANT WITH { sbi_code, "activity is not a home-based business" }

    // Step 4 — Home-business zone of the rule at the location, with its value constraints
    zones_here = the zones of rule BM13-R05 whose area contains location.point   // F08, DR-GEO-09
    IF zones_here is empty:
        RETURN NOT_APPLICABLE
    zone          = zones_here[1]
    permitted     = GET_PARAMETER(zone, "maximumShare")                // F23, %
    permitted_m2  = GET_PARAMETER(zone, "maximumArea")                 // F23, may be empty

    // Step 6 — Usable floor areas (NEN 2580)
    business_go    = SUM OF CALCULATE_AREA(zone, "NEN2580_GO") FOR EACH zone IN business      // F25, DER-50
    residential_go = SUM OF CALCULATE_AREA(zone, "NEN2580_GO") FOR EACH zone IN residential   // F25, DER-51
    IF any area calculation returned REVIEW_REQUIRED:
        review_reasons ADD "delivered and recalculated areas differ"

    // Step 7 — Unnamed spaces
    unnamed = GET_ZONES(bim_model, "Restruimte") + GET_ZONES(bim_model, "Restgebied")   // F24
    IF unnamed is not empty:
        review_reasons ADD { "unnamed spaces present", unnamed }

    // Step 8 — Share and comparison
    share = business_go / residential_go × 100                          // DER-52
    IF share > permitted OR (permitted_m2 is set AND business_go > permitted_m2):
        RETURN NON_COMPLIANT WITH { share, permitted, business_go, permitted_m2, business }

    // Step 9 — Report result and evidence
    IF review_reasons is not empty:
        RETURN REVIEW_REQUIRED WITH { share, permitted, business_go, review_reasons, data_check.warnings }
    RETURN COMPLIANT WITH { share, permitted, business_go, residential_go, data_check.warnings }
```

**Why unnamed spaces are flagged:** the inventory notes that unnamed spaces can later be used for something not allowed today. The check cannot know their future use, so it shows them to the officer.

### BM13-R06 — Maximum number of storeys (ILS check #6)

#### Layer 0 — Rule foundation / interpretation

> **Rule ID:** BM13-R06 (ILS check #6 *Maximum aantal bouwlagen*)
>
> **Check:** Does the number of storeys exceed the maximum permitted number of storeys at this location?
>
> **Legal source:** Omgevingsplan (Regels op de kaart, or the municipality's own GEO application) with a zoning and a norm for the maximum number of *bouwlagen*; the plan's definition of *bouwlaag*; NEN 2580 terms.
>
> **Definition:** The number of storeys is counted from the reference level (set per zone: (1) the average road elevation or (2) the design elevation, see F11), following the plan's definition of *bouwlaag*. When no maximum is set, the check is complete.
>
> **Interpretation questions:** Does a basement (storey −1) count? Does a roof storey count — for a flat roof and for a pitched roof? Does a mezzanine count? Which reference level applies? NEN 2580 and the Bbl interpret *bouwlaag* differently.
>
> **Dependencies:** Plan norm at the location, storey definition in the rule profile, reference level (shared with check #2).

This is the normative interpretation layer.

#### Layer 1 — Minimum requirements

What must be available before the check can run. MUST missing → `INSUFFICIENT_DATA`; SHOULD missing → note; MAY = context only ([section 3.4](#34-standard-result-precedence)). Together they form minimum set **MR-R06** ([Annex A.5](#a5-standard-minimum-requirement-sets)).

| Check | ILS objective | ILS milestone | Geometry needed (ILS) | ILS IDS files | Minimum set |
| --- | --- | --- | --- | --- | --- |
| #6 | ID01 (OPA) | M1 (indicative), M2, M3 | yes (storeys) | 15 | MR-R06 = MR-CORE + M03–M10 |

| Req. | What must be available | Level | Why the check needs it |
| --- | --- | --- | --- |
| M01 | A valid IFC model of one building, with project data and named storeys (elevation, entrance level) | MUST | Storeys are what the rule counts |
| M02 | Building elements with closed body geometry, each inside a storey; no proxy elements (SHOULD) | MUST | Storey heights come from the geometry |
| M03 | Storey volumes (*Bouwlaaginhoud*) as closed solids | MUST | Which storeys lie above the reference level |
| M04 | Use function, spaces, remaining spaces and tare spaces | SHOULD | Tells a storey from a mezzanine or roof-top space |
| M05 | The application location | MUST | Selects the zone(s) of the rule |
| M06 | The zones of the rule, each with maximumStoreys and referenceLevelMethod | MUST | Permitted number of storeys and how *peil* is set |
| M07 | The design elevation: the entrance-level storey | MUST for zones with method 2 | Reference level (*peil*) |
| M08 | Georeferencing, the adjacent road (BGT) and its elevation | MUST for zones with method 1 | Reference level (*peil*) |
| M09 | The rule profile: storey definition (basement, attic, mezzanine) | MUST | The interpretation choices of Layer 0 |
| M10 | Addresses, building plot and cadastral parcel in the model | SHOULD | Cross-check of the location |

#### Layer 2 — Mapping to IFC, ILS and GEO standards

| Req. | IFC entity / attribute / property set | ILS IDS (file no.) | BM13 supplement | GEO / regulation standard and source | DR ID |
| --- | --- | --- | --- | --- | --- |
| M01 | `IfcProject`; one `IfcBuilding`; `IfcBuildingStorey` Name, Elevation, `Pset_BuildingStoreyCommon.EntranceLevel` | 9 (01), 9.02 (07), 9.06a (13) | S07, S08 | IFC 4.3 / IFC4 ADD2 TC1 (ILS AC1, AC2) | ILS-9, 9.02, 9.06a |
| M02 | Building elements `Representation`; `IfcRelContainedInSpatialStructure` | — | S01, S02 | ILS [§6.2](#6-check-2--bm13-r02-maximum-building-height) G1, G4 (AC5) | BM13-S01, ILS-G1 |
| M03 | `IfcSpatialZone` `ObjectType` = *Bouwlaaginhoud*, closed `Representation` | 9.06b (14) | — | bSDD *Omgevingswet-Ruimten*; NEN 2580 | ILS-9.06b |
| M04 | `IfcZone` *Gebruiksfunctie*; `IfcSpace` *Functieruimte*, *Verblijfsruimte*, *Restruimte*, *Tarra ruimte*; `IfcSpatialZone` *Restgebied* | 9.08 (16), 9.10f (23), 9.12a (25), 9.12b (26), 9.12d (28), 9.17 (33) | — | bSDD *Omgevingswet-Ruimten* | ILS-9.08, 9.10f, 9.12a, 9.12b, 9.12d, 9.17 |
| M05 | — | — | — | DSO application (Omgevingsloket) | DR-APP-01 |
| M06 | — | — | — | Omgevingsplan: *omgevingsnorm* maximum aantal bouwlagen (STOP/TPOD via DSO); temporary part: *maatvoering* (IMRO); RD New | DR-GEO-09 |
| M07 | `IfcBuildingStorey` with `EntranceLevel = true` and Elevation | 9.06a (13) | S07 | NAP via `IfcMapConversion.OrthogonalHeight` | ILS-9.06a |
| M08 | `IfcMapConversion`, `IfcProjectedCRS` | 9.01a (02), 9.01b (03) | — | EPSG:7415; BGT road surfaces (PDOK); municipal height data, fallback AHN (DTM) | ILS-9.01a, 9.01b, DR-GEO-07, DR-GEO-04 |
| M09 | — | — | — | BM13 rule specification, layer 4a | DR-REG-06 |
| M10 | `Pset_Address`; `IfcSpatialZone` *Bouwwerkperceel*, *Kadastraal perceel* | 9.01c–e (04–06), 9.03b (09), 9.04 (10) | — | BRK (cross-check) | ILS-9.01c–e, 9.03b, 9.04 |

**Derived properties:** DER-60 reference level · DER-61 storeys counted.

#### Layer 3 — Steps, functions and pseudocode

**Generic workflow:** `F19 → F20 → F00 → F08 → F23 → (F01 → F21) → F22 → F11 → F27 → compare → F18` — F01 and F21 only when the zone uses reference-level method 1 (average road elevation).

| Step | What happens | Standard functions | Uses | Output / stops when |
| --- | --- | --- | --- | --- |
| 1 | Take the application and the model; run the IDS files of the check | F19, F20, F00 | M01–M04, M10 | MUST missing → `INSUFFICIENT_DATA` |
| 2 | Take the zones that contain the application location; read maximumStoreys and referenceLevelMethod | F08, F23 | M05, M06 | none → `NOT_APPLICABLE` |
| 3 | Determine the reference level with the zone's method: (1) average road elevation — needs georeferencing — or (2) design elevation | F23, F01, F21, F22, F11 | M07 or M08 | DER-60; data missing → `INSUFFICIENT_DATA` |
| 4 | Count the storeys above the reference level following the plan definition | F27 | M01, M03, M04, M09 | DER-61, with reasons |
| 5 | Compare the counted storeys with maximumStoreys | — | M06 | status per zone |
| 6 | Report result and evidence | F18 | — | `RuleCheckResult` |

**Pseudocode** (notation: [section 3.3](#33-how-to-read-the-pseudocode-applies-to-every-rule); final status: [section 3.4](#34-standard-result-precedence)):

```
PROCEDURE CHECK_MAXIMUM_STOREYS(application):

    // Step 1 — Model and IDS check
    location   = GET_APPLICATION_LOCATION(application)                 // F19
    bim_model  = GET_SUBMITTED_BIM_MODEL(application)                  // F20
    IF bim_model is missing:
        RETURN INSUFFICIENT_DATA
    data_check = CHECK_MINIMUM_REQUIREMENTS(bim_model, "MR-R06")       // F00
    IF data_check.status = INSUFFICIENT_DATA:
        RETURN INSUFFICIENT_DATA WITH { data_check.failed }

    // Step 2 — Zones of the rule at the location, each with its value constraints
    zones_here = the zones of rule BM13-R06 whose area contains location.point   // F08, DR-GEO-09
    IF zones_here is empty:
        RETURN NOT_APPLICABLE                                          // no maximum = done

    review_reasons = empty list
    results        = empty list

    FOR EACH zone IN zones_here:

        // Step 3 — Reference level with the zone's method
        method = GET_PARAMETER(zone, "referenceLevelMethod")           // F23
        IF method = AVERAGE_ROAD_ELEVATION:
            georeference = GET_BIM_GEOREFERENCE(bim_model)             // F01
            IF georeference is missing
               OR VALIDATE_GEOREFERENCE(bim_model, georeference, location).status = INSUFFICIENT_DATA:   // F21
                RETURN INSUFFICIENT_DATA WITH { zone.id, "method 1 needs georeferencing" }
            building = GET_BUILDING_GEOMETRY(bim_model, georeference)  // F22
        ELSE:                                                          // DESIGN_ELEVATION
            building = GET_BUILDING_GEOMETRY(bim_model, NONE)          // F22

        reference_level = GET_REFERENCE_LEVEL(zone, building)          // F11, DER-60
        IF reference_level.status = INSUFFICIENT_DATA:
            RETURN INSUFFICIENT_DATA WITH { zone.id, reference_level.reason }
        IF reference_level.status = REVIEW_REQUIRED:
            review_reasons ADD { zone.id, reference_level.reason }

        // Step 4 — Count the storeys
        storeys = COUNT_STOREYS(bim_model,
                      definition     = GET_PARAMETER("BM13-R06", "storeyDefinition"),   // F23
                      referenceLevel = reference_level)                 // F27, DER-61
        IF storeys.status = REVIEW_REQUIRED:
            review_reasons ADD storeys.reason                          // e.g. attic cannot be classified

        // Step 5 — Compare
        permitted = GET_PARAMETER(zone, "maximumStoreys")              // F23
        IF storeys.count <= permitted:
            results ADD { zone.id, COMPLIANT, storeys.count, permitted, storeys.storeys }
        ELSE:
            results ADD { zone.id, NON_COMPLIANT, storeys.count, permitted, storeys.storeys }

    // Step 6 — Report result and evidence
    IF any result in results is NON_COMPLIANT:
        RETURN NON_COMPLIANT WITH { results, review_reasons, data_check.warnings }
    IF review_reasons is not empty:
        RETURN REVIEW_REQUIRED WITH { results, review_reasons, data_check.warnings }
    RETURN COMPLIANT WITH { results, data_check.warnings }
```

**Note on the minimum set:** MR-R06 is based on MR-CORE (no georeferencing). A zone that uses reference-level method 1 also needs ILS-9.01a/b, F21 and DR-GEO-04/07.

**Why every storey is reported with a reason:** the counting definition is the main source of disagreement (basement, attic, mezzanine). Showing `COUNTED` / `NOT_COUNTED` and why per storey lets the officer follow the count.

## Checks #7–#17 — Bbl (TBA)

Every check uses the template of R01 and R02 ([§5](#5-check-1--bm13-r01-use-function-matches-the-designation-wonen), [§6](#6-check-2--bm13-r02-maximum-building-height)): **Layer 0** rule foundation, **Layer 1** minimum requirements (M01, M02, …), **Layer 2** mapping of each requirement to IFC, the ILS IDS files, the BM13 supplement and GEO / regulation standards, **Layer 3** steps, standard functions and software-independent pseudocode. Functions F00–F45 are defined in [section 4](#4-generic-function-library) of the guide, minimum sets in [Annex A.5](#a5-standard-minimum-requirement-sets), notation in [section 3.3](#33-how-to-read-the-pseudocode-applies-to-every-rule) and result precedence in [section 3.4](#34-standard-result-precedence).

**Link to the ILS Omgevingsvergunning:** each check's Layer 1 table gives its ILS check number, information objective (ID02) and ILS IDS files. These checks run at ILS milestone M3, together with checks #1–#6 again. How the ILS chapters, milestones and acceptance criteria AC1–AC7 fit into the checks is described in the guide, [§1.5](#15-relation-to-the-ils-omgevingsvergunning).

#### Generic workflow (the same for every check)

| Stage | What happens | Standard functions |
| --- | --- | --- |
| **A. Intake** | Take the application and the model; run the IDS files of the check | F19, F20, F00 |
| **B. Georeference** *(only checks that compare with the surroundings: #7, #10, #17)* | Read and validate the georeferencing | F01, F21 |
| **C. Rule (Bbl lookup)** | Main use function → steering table → required values | F13, F29 |
| **D. Building data** | Get the zones and elements the check needs | F24, F22, F36 |
| **E. Measure** | The measurement that is specific to the check | e.g. F25, F31, F35, F40 |
| **F. Compare** | Measured value against required value | — |
| **G. Report** | Result with values, evidence and sources | F18 |

Each check shows its own workflow as one line of function IDs, in the order they run, above its step table.

#### Standard Bbl lookup (stage C, used by every check in this part)

The inventory describes the same four moves for every Bbl check. They are standardized once:

1. **Main use function** — the main or combined use function of the new building, *without* secondary use functions: F13 `GET_USE_FUNCTIONS`.
2. **Steering table** — the *aansturingstabel* of the paragraph gives the members that apply to that use function: F29 `GET_BBL_REQUIREMENT`.
3. **Required values** — F29 returns the value, unit, article and member, from the Bbl version valid on the application date (DR-LAW-01). Articles change (e.g. art. 4.158 per 1 July 2026), so values are **never hard-coded**.
4. **Equivalence** — if the applicant claims an equivalent solution (*gelijkwaardigheid*, e.g. NEN 6060 / 6079), F41 `GET_EXTERNAL_CALCULATION(…, "EQUIVALENCE")` reads it and the result is `REVIEW_REQUIRED`: a person decides.

In the pseudocode this is written as:

```
use_function = main use function of GET_USE_FUNCTIONS(bim_model)          // F13
requirement  = GET_BBL_REQUIREMENT(steering_table, use_function, subject, date)  // F29, e.g. "4.49"

// Checks that stay inside the building call GET_BUILDING_GEOMETRY(bim_model, NONE):
// the geometry then stays in local model coordinates (metres).
```

#### IDS file lookup

Checks list ILS sub-specifications as *spec (file no.)*, e.g. 9.16a (30). The full file names are in the [IDS file lookup](#ids-file-lookup) of checks #3–#6; the files for this part are:

| No. | Spec | File | No. | Spec | File |
| --- | --- | --- | --- | --- | --- |
| 01 | 9 | `01-9-ILS-voor-Ruimten-in-de-omgevingswet.ids` | 24 | 9.11 | `24-9.11-Buitengebied.ids` |
| 02 | 9.01a | `02-9.01a-Georeferentie.ids` | 25 | 9.12a | `25-9.12a-Functieruimte.ids` |
| 03 | 9.01b | `03-9.01b-Coordinatenstelsel.ids` | 26 | 9.12b | `26-9.12b-Verblijfsruimte.ids` |
| 07 | 9.02 | `07-9.02-Project.ids` | 27 | 9.12c | `27-9.12c-Bedruimte.ids` |
| 08 | 9.03a | `08-9.03a-Perceel.ids` | 29 | 9.13 | `29-9.13-Buitenruimte.ids` |
| 09 | 9.03b | `09-9.03b-Bouwwerkperceel.ids` | 30 | 9.16a | `30-9.16a-Brandcompartiment.ids` |
| 10 | 9.04 | `10-9.04-Kadastraal-Perceel.ids` | 31 | 9.16b | `31-9.16b-Subbrandcompartiment.ids` |
| 11 | 9.05a | `11-9.05a-Gebouw.ids` | 32 | 9.16c | `32-9.16c-Vluchtroute.ids` |
| 13 | 9.06a | `13-9.06a-Bouwlaag-voorheen-verdieping.ids` | 33 | 9.17 | `33-9.17-Tarra-Ruimte.ids` |
| 16 | 9.08 | `16-9.08-Gebruiksfunctie.ids` | 35 | 9.18b | `35-9.18b-Fysieke-elementen-IfcColumn.ids` |
| 18 | 9.10a | `18-9.10a-Functiegebied.ids` | 36 | 9.18c | `36-9.18c-Fysieke-elementen-IfcCovering.INSULATION.ids` |
| 19 | 9.10b | `19-9.10b-Verblijfsgebied.ids` | 37 | 9.18d | `37-9.18d-Fysieke-elementen-IfcCurtainWall.ids` |
| 20 | 9.10c | `20-9.10c-Verblijfsgebied-met-bezettingsgraad.ids` | 38 | 9.18e | `38-9.18e-Fysieke-elementen-IfcDoor.ids` |
| 21 | 9.10d | `21-9.10d-Gebruiksgebied.ids` | 40 | 9.18g | `40-9.18g-Fysieke-elementen-IfcSlab.ids` |
| 22 | 9.10e | `22-9.10e-Bedgebied.ids` | 41 | 9.18h | `41-9.18h-Fysieke-elementen-IfcWall.ids` |
| — | — | — | 42 | 9.18i | `42-9.18i-Fysieke-elementen-Ifcwindow.ids` |

BM13 supplement: `bm13-supplement.ids` ([Annex B](#annex-b--bm13-supplementary-ids-bm13-supplementids-v03)) (S01–S15; guide, [Annex A.3](#a3-the-bm13-supplementary-ids) and A.6).

### BM13-R07 — Fire compartments (ILS check #7)

#### Layer 0 — Rule foundation / interpretation

> **Rule ID:** BM13-R07 (ILS check #7 *Brandcompartimenten*)
>
> **Check:** Is the building divided into fire compartments; is every compartment no larger than the maximum usable floor area for its use function; and is the resistance to fire spread (WBDBO) to other compartments, to other buildings on the same plot and to the mirrored building across the boundary sufficient?
>
> **Legal source:** Bbl [§4.2](#4-generic-function-library).8: steering table art. 4.49, art. 4.50, 4.51, 4.52, 4.53, 4.54. NEN 6068 (WBDBO), NEN 6060 / NEN 6079 for equivalence, NEN 2580 for areas.
>
> **Definition:** Every part of the building with a use function lies in a fire compartment (unless the steering table exempts it). The usable floor area (GO) of each compartment is at most the Bbl maximum. The WBDBO from each compartment to another compartment, and to the building mirrored at the parcel boundary or at the centre line of an adjoining road, water or public green (*spiegelprincipe*), is at least the Bbl value in minutes.
>
> **Interpretation questions:** Which exemptions from the steering table apply? Is a larger compartment accepted through equivalence (NEN 6060 / 6079) — a human judgement? Where exactly is the mirror line? Which checking level does the municipality apply, and does it or the *Veiligheidsregio* check?
>
> **Dependencies:** Main use function, compartment zones, enclosing elements and their fire ratings (check #8), parcel boundary, adjoining public space, other buildings on the plot.
>
> **Automation level:** compartment presence and area: full. WBDBO: partial — calculated (F43) or taken from a supplied calculation (F41).

This is the normative interpretation layer.

#### Layer 1 — Minimum requirements

What must be available before the check can run. MUST missing → `INSUFFICIENT_DATA`; SHOULD missing → note; MAY = context only ([section 3.4](#34-standard-result-precedence)). Together they form minimum set **MR-R07** ([Annex A.5](#a5-standard-minimum-requirement-sets)).

| Check | ILS objective | ILS milestone | Geometry needed (ILS) | ILS IDS files | Minimum set |
| --- | --- | --- | --- | --- | --- |
| #7 | ID02 (TBA) | M3 | yes (compartment area) | 13 | MR-R07 = MR-BASE + M04–M14 |

| Req. | What must be available | Level | Why the check needs it |
| --- | --- | --- | --- |
| M01 | A valid IFC model of one building, with project data and named storeys (elevation, entrance level) | MUST | Every step reads the model and its storeys |
| M02 | Building elements with closed body geometry, each inside a storey; no proxy elements (SHOULD) | MUST | Compartments and separations are geometric |
| M03 | Georeferencing to RD New / NAP with the right scale, model placed at the application location | MUST | Mirror principle at the parcel boundary |
| M04 | The use function zones | MUST | Selects the Bbl requirements |
| M05 | The fire compartments as closed solids | MUST | The object of the check |
| M06 | Quantities calculated by the authoring tool | MUST | Two-step check of the compartment area |
| M07 | Second-level space boundaries | MUST | Which element separates which compartments |
| M08 | Fire rating on compartment walls, floors, columns, doors and curtain walls | SHOULD | Input for the WBDBO calculation |
| M09 | Existing buildings on and around the plot | SHOULD | WBDBO to other buildings |
| M10 | Public space (road, water, green) with centre lines | SHOULD | Mirror line when the plot borders public space |
| M11 | Fire-safety documents (WBDBO calculation, equivalence claim) | SHOULD | Leading when supplied; review of equivalence |
| M12 | The Bbl requirements via steering table 4.49 | MUST | Maximum GO per compartment, WBDBO minutes |
| M13 | The rule profile: mirror principle, what counts as one building | MUST | The interpretation choices of Layer 0 |
| M14 | Building plot and cadastral parcel in the model | SHOULD | The boundary for the mirror principle |

#### Layer 2 — Mapping to IFC, ILS and GEO standards

| Req. | IFC entity / attribute / property set | ILS IDS (file no.) | BM13 supplement | GEO / regulation standard and source | DR ID |
| --- | --- | --- | --- | --- | --- |
| M01 | `IfcProject`; one `IfcBuilding`; `IfcBuildingStorey` Name, Elevation, `Pset_BuildingStoreyCommon.EntranceLevel` | 9 (01), 9.02 (07) | S07, S08 | IFC 4.3 / IFC4 ADD2 TC1 (ILS AC1, AC2) | ILS-9, 9.02 |
| M02 | Building elements `Representation`; `IfcRelContainedInSpatialStructure` | — | S01, S02 | ILS [§6.2](#6-check-2--bm13-r02-maximum-building-height) G1, G4 (AC5) | BM13-S01, ILS-G1 |
| M03 | `IfcMapConversion`, `IfcProjectedCRS` | 9.01a (02), 9.01b (03) | — | EPSG:28992 / EPSG:7415 (NAP); ILS AC4 | ILS-9.01a, 9.01b, ILS-G2 |
| M04 | `IfcZone` `ObjectType` = *Gebruiksfunctie* | 9.08 (16) | — | bSDD *Omgevingswet-Ruimten*; Bbl use functions | ILS-9.08 |
| M05 | `IfcZone` / `IfcSpatialZone` *Brandcompartiment* | 9.16a (30) | — | bSDD *Omgevingswet-Ruimten* | ILS-9.16a |
| M06 | `Qto_…BaseQuantities` | — | — | NEN 2580; ILS [§6.2](#6-check-2--bm13-r02-maximum-building-height) G5; ILS AC6 | ILS-G5 |
| M07 | `IfcRelSpaceBoundary` (second level) | — | S11 | IFC 4.3 | BM13-S11 |
| M08 | `IfcColumn`, `IfcCurtainWall`, `IfcDoor`, `IfcSlab`, `IfcWall`; `Pset_…Common.FireRating` | 9.18b (35), 9.18d (37), 9.18e (38), 9.18g (40), 9.18h (41) | S13 | EN 13501-2 notation (e.g. `EI 60`); NEN 6068 | ILS-9.18b, d, e, g, h, BM13-S13 |
| M09 | — | — | — | BAG via PDOK; RD New | DR-GEO-06 |
| M10 | — | — | — | BGT road, water and green surfaces via PDOK | DR-GEO-07 |
| M11 | — | — | — | Applicant documents (NEN 6068 calculation) | DR-DOC-03 |
| M12 | — | — | — | Bbl steering table 4.49 (wetten.overheid.nl; machine-readable Bbl table) | DR-LAW-01 |
| M13 | — | — | — | BM13 rule specification, layer 4a | DR-REG-07 |
| M14 | `IfcSpatialZone` *Bouwwerkperceel*, *Kadastraal perceel* + `Pset_LandRegistration` | 9.03b (09), 9.04 (10) | — | BRK (cross-check) | ILS-9.03b, 9.04 |

**Derived properties:** DER-70 area outside any compartment · DER-71 GO per compartment · DER-72 WBDBO between compartments · DER-73 WBDBO to the mirrored and neighbouring buildings.

#### Layer 3 — Steps, functions and pseudocode

**Generic workflow:** `F19 → F20 → F00 → F01 → F21 → F13 → F29 → F24 → F14 → F26 → F25 → F36 → F43 → F38 → F05 → F41 → compare → F18`

| Step | What happens | Standard functions | Uses | Output / stops when |
| --- | --- | --- | --- | --- |
| 1 | Take the application and the model; run the IDS files of the check | F19, F20, F00 | M01–M08, M14 | MUST missing → `INSUFFICIENT_DATA` |
| 2 | Read and validate the georeferencing | F01, F21 | M03 | failed → `INSUFFICIENT_DATA` |
| 3 | Determine the main use function; look up the Bbl requirements via steering table 4.49 | F13, F29 | M04, M12 | max GO, WBDBO minutes; none → `NOT_APPLICABLE` |
| 4 | Get the fire compartments; check that every use-function area lies inside one | F24, F14, F26 | M04, M05 | DER-70; area outside → `NON_COMPLIANT` |
| 5 | Calculate the usable floor area of each compartment and compare with the maximum | F25 | M05, M06 | DER-71 |
| 6 | Determine the WBDBO between compartments | F36, F43 (or F41) | M07, M08, M11 | DER-72 |
| 7 | Mirror the building at the boundary; determine the WBDBO to the mirrored building and to other buildings | F38, F05, F43 (or F41) | M03, M09, M10, M14 | DER-73 |
| 8 | If an equivalent solution is claimed, attach it for review | F41 | M11, M13 | `REVIEW_REQUIRED` |
| 9 | Report result and evidence | F18 | — | `RuleCheckResult` |

**Pseudocode** (notation: [section 3.3](#33-how-to-read-the-pseudocode-applies-to-every-rule); final status: [section 3.4](#34-standard-result-precedence)):

```
PROCEDURE CHECK_FIRE_COMPARTMENTS(application):

    // Step 1 — Model and IDS check
    location   = GET_APPLICATION_LOCATION(application)                 // F19
    bim_model  = GET_SUBMITTED_BIM_MODEL(application)                  // F20
    IF bim_model is missing:
        RETURN INSUFFICIENT_DATA
    data_check = CHECK_MINIMUM_REQUIREMENTS(bim_model, "MR-R07")       // F00
    IF data_check.status = INSUFFICIENT_DATA:
        RETURN INSUFFICIENT_DATA WITH { data_check.failed }

    // Step 2 — Georeferencing
    georeference = GET_BIM_GEOREFERENCE(bim_model)                     // F01
    IF georeference is missing
       OR VALIDATE_GEOREFERENCE(bim_model, georeference, location).status = INSUFFICIENT_DATA:   // F21
        RETURN INSUFFICIENT_DATA

    // Step 3 — Bbl lookup
    use_function = main use function of GET_USE_FUNCTIONS(bim_model)  // F13
    date         = application date
    max_go       = GET_BBL_REQUIREMENT("4.49", use_function, "maximumCompartmentArea", date)   // F29
    wbdbo_req    = GET_BBL_REQUIREMENT("4.49", use_function, "minimumWBDBO", date)            // F29
    IF max_go = NOT_APPLICABLE AND wbdbo_req = NOT_APPLICABLE:
        RETURN NOT_APPLICABLE

    results        = empty list
    review_reasons = empty list

    // Step 4 — Every use-function area inside a compartment
    compartments = GET_ZONES(bim_model, "Brandcompartiment")           // F24
    use_zones    = GET_ZONES(bim_model, "Gebruiksfunctie")             // F24
    uncovered    = UNION_AREAS(use_zones) outside UNION_AREAS(compartments)   // F14, F26, DER-70
    IF uncovered is not empty:
        results ADD { NON_COMPLIANT, "area outside any fire compartment", uncovered }

    // Step 5 — Compartment size
    FOR EACH compartment IN compartments:
        go = CALCULATE_AREA(compartment, "NEN2580_GO")                 // F25, DER-71
        IF go.status = REVIEW_REQUIRED:
            review_reasons ADD go.deviation
        IF go.value > max_go.value:
            results ADD { compartment.GlobalId, NON_COMPLIANT, go.value, max_go }
        ELSE:
            results ADD { compartment.GlobalId, COMPLIANT, go.value, max_go }

    // Step 6 — WBDBO between compartments
    FOR EACH pair of adjoining compartments (a, b):
        wbdbo = CALCULATE_WBDBO(a, b)                                  // F43 (or F41 "WBDBO"), DER-72
        IF wbdbo.status = REVIEW_REQUIRED:
            review_reasons ADD { a, b, wbdbo.reason }
        ELSE IF wbdbo.minutes < wbdbo_req.value:
            results ADD { a, b, NON_COMPLIANT, wbdbo.minutes, wbdbo_req }

    // Step 7 — WBDBO to the mirrored building and to other buildings on the plot
    building  = GET_BUILDING_GEOMETRY(bim_model, georeference)         // F22
    mirrored  = MIRROR_AT_BOUNDARY(building, parcel boundary or centre line)   // F38
    neighbours = GET_PDOK_FEATURES("Buildings", location) on the same parcel   // F05
    FOR EACH target IN { mirrored } + neighbours:
        FOR EACH compartment IN compartments:
            wbdbo = CALCULATE_WBDBO(compartment, target)               // F43 (or F41), DER-73
            IF wbdbo.minutes < wbdbo_req.value:
                results ADD { compartment, target, NON_COMPLIANT, wbdbo.minutes, wbdbo_req }

    // Step 8 — Equivalence
    equivalence = GET_EXTERNAL_CALCULATION(application, "EQUIVALENCE") // F41
    IF equivalence is supplied:
        review_reasons ADD { "equivalent solution claimed", equivalence }

    // Step 9 — Report result and evidence
    IF any result in results is NON_COMPLIANT AND equivalence is not supplied:
        RETURN NON_COMPLIANT WITH { results, review_reasons, data_check.warnings }
    IF review_reasons is not empty OR any result in results is NON_COMPLIANT:
        RETURN REVIEW_REQUIRED WITH { results, review_reasons, data_check.warnings }
    RETURN COMPLIANT WITH { results, data_check.warnings }
```

**Why an equivalence claim turns a violation into a review:** the inventory notes that larger compartments can be accepted through an equivalence assessment, weighing the surroundings and fire brigade deployment. Software cannot make that judgement.

### BM13-R08 — Fire resistance (ILS check #8)

#### Layer 0 — Rule foundation / interpretation

> **Rule ID:** BM13-R08 (ILS check #8 *Brandwerendheid*)
>
> **Check:** Do the construction elements that enclose a fire compartment have sufficient fire resistance?
>
> **Legal source:** As check #7: Bbl [§4.2](#4-generic-function-library).8 with steering table 4.49; classification per EN 13501-2 (criteria R, E, I and minutes).
>
> **Definition:** Every wall, floor, door, window, column or curtain wall that separates a fire compartment from another compartment or from the outside has a fire rating whose criteria and minutes are at least those required for that separation.
>
> **Interpretation questions:** Is the element rating enough, or must the whole separation (incl. paths via the façade) be assessed as WBDBO (check #7)? Where does the rating come from — product classification or calculation? The inventory notes the check is not needed for applications without enclosed spaces, or for adjoining buildings with an industrial or other use under 50 m² (existing buildings under 100 m²).
>
> **Dependencies:** Check #7 (compartments), enclosing elements, space boundaries.

This is the normative interpretation layer.

#### Layer 1 — Minimum requirements

What must be available before the check can run. MUST missing → `INSUFFICIENT_DATA`; SHOULD missing → note; MAY = context only ([section 3.4](#34-standard-result-precedence)). Together they form minimum set **MR-R08** ([Annex A.5](#a5-standard-minimum-requirement-sets)).

| Check | ILS objective | ILS milestone | Geometry needed (ILS) | ILS IDS files | Minimum set |
| --- | --- | --- | --- | --- | --- |
| #8 | ID02 (TBA) | M3 | limited | 8 | MR-R08 = MR-CORE + M03–M10 |

| Req. | What must be available | Level | Why the check needs it |
| --- | --- | --- | --- |
| M01 | A valid IFC model of one building, with project data and named storeys (elevation, entrance level) | MUST | Every step reads the model and its storeys |
| M02 | Building elements with closed body geometry, each inside a storey; no proxy elements (SHOULD) | MUST | Separating elements must be identifiable |
| M03 | The use function zones | MUST | Selects the required fire resistance |
| M04 | The fire compartments | MUST | The boundaries that must resist fire |
| M05 | Second-level space boundaries | MUST | Which element encloses which compartment |
| M06 | Fire rating on compartment walls, floors, columns, doors and curtain walls | MUST | The value that is checked |
| M07 | The physical elements (columns, curtain walls, doors, slabs, walls) as own classes | SHOULD | Element-level evidence |
| M08 | Fire-safety documents (fire-resistance statements, equivalence claim) | SHOULD | Leading when supplied |
| M09 | The Bbl requirements via steering table 4.49 | MUST | Required criteria (R, E, I) and minutes |
| M10 | The rule profile: scope exemptions (no enclosed spaces, small adjoining building) | MUST | The interpretation choices of Layer 0 |

#### Layer 2 — Mapping to IFC, ILS and GEO standards

| Req. | IFC entity / attribute / property set | ILS IDS (file no.) | BM13 supplement | GEO / regulation standard and source | DR ID |
| --- | --- | --- | --- | --- | --- |
| M01 | `IfcProject`; one `IfcBuilding`; `IfcBuildingStorey` Name, Elevation, `Pset_BuildingStoreyCommon.EntranceLevel` | 9 (01), 9.02 (07) | S07, S08 | IFC 4.3 / IFC4 ADD2 TC1 (ILS AC1, AC2) | ILS-9, 9.02 |
| M02 | Building elements `Representation`; `IfcRelContainedInSpatialStructure` | — | S01, S02 | ILS [§6.2](#6-check-2--bm13-r02-maximum-building-height) G1, G4 (AC5) | BM13-S01, ILS-G1 |
| M03 | `IfcZone` `ObjectType` = *Gebruiksfunctie* | 9.08 (16) | — | bSDD *Omgevingswet-Ruimten*; Bbl use functions | ILS-9.08 |
| M04 | `IfcZone` / `IfcSpatialZone` *Brandcompartiment* | 9.16a (30) | — | bSDD *Omgevingswet-Ruimten* | ILS-9.16a |
| M05 | `IfcRelSpaceBoundary` (second level) | — | S11 | IFC 4.3 | BM13-S11 |
| M06 | `Pset_WallCommon`, `Pset_SlabCommon`, `Pset_ColumnCommon`, `Pset_DoorCommon`, `Pset_CurtainWallCommon` `.FireRating` | — | S13 (S13a walls, S13b floors, S13c columns) | EN 13501-2 notation (e.g. `REI 60`) | BM13-S13 |
| M07 | `IfcColumn`, `IfcCurtainWall`, `IfcDoor`, `IfcSlab`, `IfcWall` | 9.18b (35), 9.18d (37), 9.18e (38), 9.18g (40), 9.18h (41) | — | IFC 4.3 | ILS-9.18b, d, e, g, h |
| M08 | — | — | — | Applicant documents (test reports, NEN 6069 / EN 13501-2 classification) | DR-DOC-03 |
| M09 | — | — | — | Bbl steering table 4.49 | DR-LAW-01 |
| M10 | — | — | — | BM13 rule specification, layer 4a | DR-REG-08 |

**Derived properties:** DER-80 separating elements per compartment · DER-81 parsed fire rating.

#### Layer 3 — Steps, functions and pseudocode

**Generic workflow:** `F19 → F20 → F00 → F13 → F29 → F24 → F25 → F36 → F28 → F37 → compare → F18`

| Step | What happens | Standard functions | Uses | Output / stops when |
| --- | --- | --- | --- | --- |
| 1 | Take the application and the model; run the IDS files of the check | F19, F20, F00 | M01–M07 | MUST missing → `INSUFFICIENT_DATA` |
| 2 | Determine the main use function; look up the required fire resistance via steering table 4.49 | F13, F29 | M03, M09 | required criteria and minutes |
| 3 | Apply the scope exemptions of the rule profile | F24, F25 | M04, M10 | exempt → `NOT_APPLICABLE` |
| 4 | Get the fire compartments | F24 | M04 | compartments |
| 5 | Get the elements that enclose each compartment and what lies behind them | F36 | M05, M07 | DER-80 |
| 6 | Read and parse the fire rating of each element | F28, F37 | M06, M08 | DER-81; unreadable → `REVIEW_REQUIRED` |
| 7 | Compare with the required criteria and minutes | — | M09 | status per element |
| 8 | Report result and evidence | F18 | — | `RuleCheckResult` |

**Pseudocode** (notation: [section 3.3](#33-how-to-read-the-pseudocode-applies-to-every-rule); final status: [section 3.4](#34-standard-result-precedence)):

```
PROCEDURE CHECK_FIRE_RESISTANCE(application):

    // Step 1 — Model and IDS check
    location   = GET_APPLICATION_LOCATION(application)                 // F19, for the report
    bim_model  = GET_SUBMITTED_BIM_MODEL(application)                  // F20
    IF bim_model is missing:
        RETURN INSUFFICIENT_DATA
    data_check = CHECK_MINIMUM_REQUIREMENTS(bim_model, "MR-R08")       // F00
    IF data_check.status = INSUFFICIENT_DATA:
        RETURN INSUFFICIENT_DATA WITH { data_check.failed }

    // Step 2 — Bbl lookup
    use_function = main use function of GET_USE_FUNCTIONS(bim_model)  // F13
    required     = GET_BBL_REQUIREMENT("4.49", use_function,
                       "fireResistanceOfSeparation", application date) // F29: criteria + minutes
    IF required = NOT_APPLICABLE:
        RETURN NOT_APPLICABLE

    // Step 3 — Scope exemption
    IF the model matches GET_PARAMETER("BM13-R08", "exemptWhen"):      // F23, F24, F25
        RETURN NOT_APPLICABLE

    results        = empty list
    review_reasons = empty list

    // Steps 4 and 5 — Compartments and their separating elements
    FOR EACH compartment IN GET_ZONES(bim_model, "Brandcompartiment"): // F24
        enclosure = GET_ENCLOSING_ELEMENTS(compartment)                // F36, DER-80
        IF enclosure.status = REVIEW_REQUIRED:
            review_reasons ADD { compartment, "gaps in the enclosure" }

        FOR EACH (element, behind) IN enclosure.elements:
            IF behind is not "other fire compartment" and not "outside air":
                CONTINUE

            // Step 6 — Fire rating
            rating = PARSE_FIRE_RATING(GET_PROPERTY(element, "FireRating"))   // F28, F37, DER-81
            IF rating.status = REVIEW_REQUIRED:
                review_reasons ADD { element.GlobalId, "fire rating not readable" }
                CONTINUE

            // Step 7 — Compare
            IF rating.criteria contain required.criteria AND rating.minutes >= required.minutes:
                results ADD { element.GlobalId, COMPLIANT, rating, required }
            ELSE:
                results ADD { element.GlobalId, NON_COMPLIANT, rating, required, compartment }

    // Step 8 — Report result and evidence
    IF any result in results is NON_COMPLIANT:
        RETURN NON_COMPLIANT WITH { results, review_reasons, data_check.warnings }
    IF review_reasons is not empty:
        RETURN REVIEW_REQUIRED WITH { results, review_reasons, data_check.warnings }
    RETURN COMPLIANT WITH { results, data_check.warnings }
```

### BM13-R09 — Clear width (ILS check #9)

#### Layer 0 — Rule foundation / interpretation

> **Rule ID:** BM13-R09 (ILS check #9 *Vrije breedte*)
>
> **Check:** Are the spaces accessible: are the clear width and clear height of all passages and traffic routes, and the clear width and area of the lift, at least what the Bbl requires?
>
> **Legal source:** Bbl [§4.6](#4-generic-function-library).1: steering table 4.176, art. 4.180 and 4.181.
>
> **Definition:** For each traffic route from the access to the use areas, residential spaces, toilet, bathroom, storage, outdoor space and shared circulation space, every door, passage and route segment has at least the required clear width and clear height; where a lift is required or present, its clear width and floor area meet the requirement.
>
> **Interpretation questions:** The Bbl does not name a measuring standard for clear width, clear height and area — how are door frames, handrails and skirting treated? Which spaces must be reachable for the use function (steering table)?
>
> **Dependencies:** Main use function, spaces and areas, doors, lifts, traffic routes.

This is the normative interpretation layer.

#### Layer 1 — Minimum requirements

What must be available before the check can run. MUST missing → `INSUFFICIENT_DATA`; SHOULD missing → note; MAY = context only ([section 3.4](#34-standard-result-precedence)). Together they form minimum set **MR-R09** ([Annex A.5](#a5-standard-minimum-requirement-sets)).

| Check | ILS objective | ILS milestone | Geometry needed (ILS) | ILS IDS files | Minimum set |
| --- | --- | --- | --- | --- | --- |
| #9 | ID02 (TBA) | M3 | yes (width) | 13 | MR-R09 = MR-CORE + M03–M11 |

| Req. | What must be available | Level | Why the check needs it |
| --- | --- | --- | --- |
| M01 | A valid IFC model of one building, with project data and named storeys (elevation, entrance level) | MUST | Routes run over storeys from the entrance level |
| M02 | Building elements with closed body geometry, each inside a storey; no proxy elements (SHOULD) | MUST | Passages are measured in the geometry |
| M03 | The use function zones | MUST | Selects the Bbl requirements |
| M04 | Residential areas, use areas, function spaces and residential spaces | MUST | The spaces that must be reachable |
| M05 | Function areas, outdoor areas and outdoor spaces | SHOULD | Outdoor space and shared circulation to reach |
| M06 | Width and height on every door | MUST | Clear passage dimensions |
| M07 | Lifts as own class, with geometry | SHOULD | Lift size where a lift is present or required |
| M08 | Second-level space boundaries | SHOULD | Connects spaces through doors and openings |
| M09 | Slabs and walls as own classes | SHOULD | Route segments and their clear width |
| M10 | The Bbl requirements via steering table 4.176 | MUST | Required clear width, clear height, lift size |
| M11 | The rule profile: which spaces must be reachable, how clear width is measured | MUST | The interpretation choices of Layer 0 |

#### Layer 2 — Mapping to IFC, ILS and GEO standards

| Req. | IFC entity / attribute / property set | ILS IDS (file no.) | BM13 supplement | GEO / regulation standard and source | DR ID |
| --- | --- | --- | --- | --- | --- |
| M01 | `IfcProject`; one `IfcBuilding`; `IfcBuildingStorey` Name, Elevation, `Pset_BuildingStoreyCommon.EntranceLevel` | 9 (01), 9.02 (07), 9.06a (13) | S07, S08 | IFC 4.3 / IFC4 ADD2 TC1 (ILS AC1, AC2) | ILS-9, 9.02, 9.06a |
| M02 | Building elements `Representation`; `IfcRelContainedInSpatialStructure` | — | S01, S02 | ILS [§6.2](#6-check-2--bm13-r02-maximum-building-height) G1, G4 (AC5) | BM13-S01, ILS-G1 |
| M03 | `IfcZone` `ObjectType` = *Gebruiksfunctie* | 9.08 (16) | — | bSDD *Omgevingswet-Ruimten*; Bbl use functions | ILS-9.08 |
| M04 | `IfcSpatialZone` *Verblijfsgebied*, *Gebruiksgebied*; `IfcSpace` *Functieruimte*, *Verblijfsruimte* | 9.10b (19), 9.10d (21), 9.12a (25), 9.12b (26) | — | bSDD *Omgevingswet-Ruimten*; NEN 2580 | ILS-9.10b, 9.10d, 9.12a, 9.12b |
| M05 | `IfcSpatialZone` *Functiegebied*, *Buitengebied*; `IfcSpace` *Buitenruimte* | 9.10a (18), 9.11 (24), 9.13 (29) | — | bSDD *Omgevingswet-Ruimten* | ILS-9.10a, 9.11, 9.13 |
| M06 | `IfcDoor.OverallWidth`, `OverallHeight` | — | S14 | IFC 4.3 | BM13-S14 |
| M07 | `IfcTransportElement` PredefinedType `ELEVATOR`, with `Representation` | — | S10 | IFC 4.3 | BM13-S10 |
| M08 | `IfcRelSpaceBoundary` (second level) | — | S11 | IFC 4.3 | BM13-S11 |
| M09 | `IfcSlab`, `IfcWall` | 9.18g (40), 9.18h (41) | — | IFC 4.3 | ILS-9.18g, 9.18h |
| M10 | — | — | — | Bbl steering table 4.176 (accessibility) | DR-LAW-01 |
| M11 | — | — | — | BM13 rule specification, layer 4a | DR-REG-09 |

**Derived properties:** DER-90 traffic routes · DER-91 clear width and height per passage · DER-92 lift size.

#### Layer 3 — Steps, functions and pseudocode

**Generic workflow:** `F19 → F20 → F00 → F13 → F29 → F24 → F22 → F33 → F34 → F31 → F25 → compare → F18`

| Step | What happens | Standard functions | Uses | Output / stops when |
| --- | --- | --- | --- | --- |
| 1 | Take the application and the model; run the IDS files of the check | F19, F20, F00 | M01–M09 | MUST missing → `INSUFFICIENT_DATA` |
| 2 | Determine the main use function; look up the requirements via steering table 4.176 | F13, F29 | M03, M10 | required clear width, clear height, lift size |
| 3 | Determine the spaces to reach: use areas, residential spaces, toilet, bathroom, storage, outdoor space, shared circulation | F24 | M04, M05, M11 | spaces to reach |
| 4 | Determine whether a lift is present | F22 | M07 | lifts |
| 5 | Determine the traffic route(s) from the access to each space | F33 (ACCESS), F34 | M04, M06, M08, M09 | DER-90; no route → `NON_COMPLIANT` |
| 6 | Measure the clear width and clear height of every door, passage and route segment | F31 | M06, M09 | DER-91 |
| 7 | Measure the clear width and floor area of the lift | F31, F25 | M07 | DER-92 |
| 8 | Compare with the Bbl values | — | M10 | status per element |
| 9 | Report result and evidence | F18 | — | `RuleCheckResult` |

**Pseudocode** (notation: [section 3.3](#33-how-to-read-the-pseudocode-applies-to-every-rule); final status: [section 3.4](#34-standard-result-precedence)):

```
PROCEDURE CHECK_CLEAR_WIDTH(application):

    // Step 1 — Model and IDS check
    location   = GET_APPLICATION_LOCATION(application)                 // F19, for the report
    bim_model  = GET_SUBMITTED_BIM_MODEL(application)                  // F20
    IF bim_model is missing:
        RETURN INSUFFICIENT_DATA
    data_check = CHECK_MINIMUM_REQUIREMENTS(bim_model, "MR-R09")       // F00
    IF data_check.status = INSUFFICIENT_DATA:
        RETURN INSUFFICIENT_DATA WITH { data_check.failed }

    // Step 2 — Bbl lookup
    use_function = main use function of GET_USE_FUNCTIONS(bim_model)  // F13
    date         = application date
    min_width    = GET_BBL_REQUIREMENT("4.176", use_function, "clearWidth", date)    // F29
    min_height   = GET_BBL_REQUIREMENT("4.176", use_function, "clearHeight", date)   // F29
    lift_req     = GET_BBL_REQUIREMENT("4.176", use_function, "liftDimensions", date) // F29
    spaces_to_reach = GET_BBL_REQUIREMENT("4.176", use_function, "spacesToReach", date)

    // Steps 3 and 4 — Spaces and lifts
    targets  = GET_ZONES(bim_model, each type in spaces_to_reach)      // F24
    building = GET_BUILDING_GEOMETRY(bim_model, NONE)                  // F22, local coordinates
    lifts    = the elements of building of class IfcTransportElement.ELEVATOR

    // Step 5 — Traffic routes
    network = BUILD_ROUTE_NETWORK(bim_model, "ACCESS")                  // F33
    access  = the space with the main entrance (entrance level, ILS-9.06a)

    results        = empty list
    review_reasons = empty list
    IF network.status = REVIEW_REQUIRED:
        review_reasons ADD network.reason

    FOR EACH target IN targets:
        route = FIND_ROUTE(network, access, target)                    // F34, DER-90
        IF route is empty:
            results ADD { target.GlobalId, NON_COMPLIANT, "space not reachable" }
            CONTINUE

        // Step 6 — Clear dimensions on the route
        FOR EACH passage IN route.elementsPassed:
            size = MEASURE_CLEAR_DIMENSIONS(passage)                   // F31, DER-91
            IF size.status = REVIEW_REQUIRED:
                review_reasons ADD { passage.GlobalId, "not measurable" }
            ELSE IF size.clearWidth < min_width.value OR size.clearHeight < min_height.value:
                results ADD { passage.GlobalId, NON_COMPLIANT, size, min_width, min_height }
            ELSE:
                results ADD { passage.GlobalId, COMPLIANT, size }

    // Step 7 — Lift
    IF lift_req is not NOT_APPLICABLE:
        IF lifts is empty:
            results ADD { NON_COMPLIANT, "lift required but not present" }
        FOR EACH lift IN lifts:
            lift_width = MEASURE_CLEAR_DIMENSIONS(lift).clearWidth     // F31
            lift_area  = CALCULATE_AREA(lift, "PROJECTED")             // F25, DER-92
            IF lift_width < lift_req.width OR lift_area.value < lift_req.area:
                results ADD { lift.GlobalId, NON_COMPLIANT, lift_width, lift_area, lift_req }

    // Steps 8 and 9 — Compare and report
    IF any result in results is NON_COMPLIANT:
        RETURN NON_COMPLIANT WITH { results, review_reasons, data_check.warnings }
    IF review_reasons is not empty:
        RETURN REVIEW_REQUIRED WITH { results, review_reasons, data_check.warnings }
    RETURN COMPLIANT WITH { results, data_check.warnings }
```

### BM13-R10 — Height difference (ILS check #10)

#### Layer 0 — Rule foundation / interpretation

> **Rule ID:** BM13-R10 (ILS check #10 *Hoogteverschil*)
>
> **Check:** Two parts. **(a) Safety:** can height differences on a traffic route be bridged safely (stair or ramp, landings, dimensions)? **(b) Accessibility:** can height differences between the main access, the circulation, the residential areas and the outdoor spaces be bridged (ramp or lift)?
>
> **Legal source:** (a) Bbl [§4.2](#4-generic-function-library).4: steering table 4.24, art. 4.25–4.33. (b) Bbl [§4.6](#4-generic-function-library).1: steering table 4.179, art. 4.182. NEN 2778 for rain protection.
>
> **Definition:** For every traffic route, each height difference between floors, and between a floor and the adjoining terrain, is bridged by the means the Bbl requires above its threshold, and those means have the required dimensions. The inventory names these thresholds: a stair or ramp above 0.21 m; a stair landing above 4 m (safety); a ramp above 0.20 m and a lift above 3 m, with a maximum of 1 m for some differences (accessibility). The check always reads the values through F29.
>
> **Interpretation questions:** The Bbl names no measuring standard for height differences and dimensions — finished floor level or structural level? Which adjoining terrain level applies? Is rain protection (NEN 2778) in scope for the model check?
>
> **Dependencies:** Main use function, spaces and routes, stairs, ramps, lifts, adjoining terrain level.
>
> **Out of scope:** Rain protection (NEN 2778) — reported as a review note.

This is the normative interpretation layer.

#### Layer 1 — Minimum requirements

What must be available before the check can run. MUST missing → `INSUFFICIENT_DATA`; SHOULD missing → note; MAY = context only ([section 3.4](#34-standard-result-precedence)). Together they form minimum set **MR-R10** ([Annex A.5](#a5-standard-minimum-requirement-sets)).

| Check | ILS objective | ILS milestone | Geometry needed (ILS) | ILS IDS files | Minimum set |
| --- | --- | --- | --- | --- | --- |
| #10 | ID02 (TBA) | M3 | yes (height) | 15 | MR-R10 = MR-BASE + M04–M14 |

| Req. | What must be available | Level | Why the check needs it |
| --- | --- | --- | --- |
| M01 | A valid IFC model of one building, with project data and named storeys (elevation, entrance level) | MUST | Floor levels and the entrance level |
| M02 | Building elements with closed body geometry, each inside a storey; no proxy elements (SHOULD) | MUST | Height differences are measured in the geometry |
| M03 | Georeferencing to RD New / NAP with the right scale, heights consistent in NAP | MUST | Floor level against adjoining terrain |
| M04 | The use function zones | MUST | Selects the Bbl requirements |
| M05 | Use areas, function spaces and residential spaces | MUST | Start and end of each route |
| M06 | Function areas, residential areas, outdoor areas and outdoor spaces | SHOULD | Further spaces on the routes |
| M07 | Stairs and ramps as own classes, with riser, tread, slope and clear width | MUST | The means that bridge height differences |
| M08 | Lifts as own class, with geometry | SHOULD | Alternative to a stair or ramp |
| M09 | Second-level space boundaries | SHOULD | Connects spaces into routes |
| M10 | Slabs as own class | SHOULD | Floor levels along the route |
| M11 | The parcel in the model | SHOULD | Where the adjoining terrain lies |
| M12 | The adjoining terrain elevation | MUST | Height difference at the access |
| M13 | The Bbl requirements via steering tables 4.24 and 4.179 | MUST | Thresholds and stair / ramp dimensions |
| M14 | The rule profile: which height differences count, measuring points | MUST | The interpretation choices of Layer 0 |

#### Layer 2 — Mapping to IFC, ILS and GEO standards

| Req. | IFC entity / attribute / property set | ILS IDS (file no.) | BM13 supplement | GEO / regulation standard and source | DR ID |
| --- | --- | --- | --- | --- | --- |
| M01 | `IfcProject`; one `IfcBuilding`; `IfcBuildingStorey` Name, Elevation, `Pset_BuildingStoreyCommon.EntranceLevel` | 9 (01), 9.02 (07), 9.06a (13) | S07, S08 | IFC 4.3 / IFC4 ADD2 TC1 (ILS AC1, AC2) | ILS-9, 9.02, 9.06a |
| M02 | Building elements `Representation`; `IfcRelContainedInSpatialStructure` | — | S01, S02 | ILS [§6.2](#6-check-2--bm13-r02-maximum-building-height) G1, G4 (AC5) | BM13-S01, ILS-G1 |
| M03 | `IfcMapConversion` (incl. `OrthogonalHeight`), `IfcProjectedCRS` | 9.01a (02), 9.01b (03) | — | EPSG:7415 (RD New + NAP); ILS AC4; ILS [§6.2](#6-check-2--bm13-r02-maximum-building-height) G2, G3 | ILS-9.01a, 9.01b, ILS-G2, G3 |
| M04 | `IfcZone` `ObjectType` = *Gebruiksfunctie* | 9.08 (16) | — | bSDD *Omgevingswet-Ruimten*; Bbl use functions | ILS-9.08 |
| M05 | `IfcSpatialZone` *Gebruiksgebied*; `IfcSpace` *Functieruimte*, *Verblijfsruimte* | 9.10d (21), 9.12a (25), 9.12b (26) | — | bSDD *Omgevingswet-Ruimten* | ILS-9.10d, 9.12a, 9.12b |
| M06 | `IfcSpatialZone` *Functiegebied*, *Verblijfsgebied*, *Buitengebied*; `IfcSpace` *Buitenruimte* | 9.10a (18), 9.10b (19), 9.11 (24), 9.13 (29) | — | bSDD *Omgevingswet-Ruimten* | ILS-9.10a, 9.10b, 9.11, 9.13 |
| M07 | `IfcStair` / `IfcRamp` with flights; `Pset_StairFlightCommon` (RiserHeight, TreadLength, ClearWidth); `Pset_RampFlightCommon` (Slope, ClearWidth) | — | S09 (S09a stairs, S09b ramps) | IFC 4.3 | BM13-S09 |
| M08 | `IfcTransportElement` PredefinedType `ELEVATOR` | — | S10 | IFC 4.3 | BM13-S10 |
| M09 | `IfcRelSpaceBoundary` (second level) | — | S11 | IFC 4.3 | BM13-S11 |
| M10 | `IfcSlab` | 9.18g (40) | — | IFC 4.3 | ILS-9.18g |
| M11 | `IfcSpatialZone` *Perceel* | 9.03a (08) | — | BRK (cross-check) | ILS-9.03a |
| M12 | — | — | — | Municipal height data, fallback AHN (DTM); m NAP | DR-GEO-04 |
| M13 | — | — | — | Bbl steering tables 4.24 and 4.179; NEN 2778 (rain protection at the threshold, review only) | DR-LAW-01 |
| M14 | — | — | — | BM13 rule specification, layer 4a | DR-REG-10 |

**Derived properties:** DER-100 traffic routes · DER-101 height differences · DER-102 stair and ramp dimensions.

#### Layer 3 — Steps, functions and pseudocode

**Generic workflow:** `F19 → F20 → F00 → F01 → F21 → F13 → F29 → F24 → F22 → F33 → F34 → F32 → F28 → F31 → compare → F18`

| Step | What happens | Standard functions | Uses | Output / stops when |
| --- | --- | --- | --- | --- |
| 1 | Take the application and the model; run the IDS files of the check | F19, F20, F00 | M01–M11 | MUST missing → `INSUFFICIENT_DATA` |
| 2 | Read and validate the georeferencing | F01, F21 | M03 | failed → `INSUFFICIENT_DATA` |
| 3 | Determine the main use function; look up the requirements via steering tables 4.24 and 4.179 | F13, F29 | M04, M13 | thresholds and dimensions |
| 4 | Determine the spaces, the main access and the traffic routes | F24, F33, F34 | M05, M06, M09 | DER-100 |
| 5 | Measure the height differences along each route and between floor and adjoining terrain | F32 | M02, M10, M12 | DER-101 |
| 6 | Where a difference exceeds a threshold, check that the required stair, ramp, landing or lift is on the route | F22, F34 | M07, M08, M14 | presence per difference |
| 7 | Check the dimensions of stairs and ramps (riser, tread, slope, clear width) | F28, F31 | M07 | DER-102 |
| 8 | Compare with the Bbl values | — | M13 | status per route |
| 9 | Report result and evidence | F18 | — | `RuleCheckResult` |

**Pseudocode** (notation: [section 3.3](#33-how-to-read-the-pseudocode-applies-to-every-rule); final status: [section 3.4](#34-standard-result-precedence)):

```
PROCEDURE CHECK_HEIGHT_DIFFERENCE(application):

    // Step 1 — Model and IDS check
    location   = GET_APPLICATION_LOCATION(application)                 // F19
    bim_model  = GET_SUBMITTED_BIM_MODEL(application)                  // F20
    IF bim_model is missing:
        RETURN INSUFFICIENT_DATA
    data_check = CHECK_MINIMUM_REQUIREMENTS(bim_model, "MR-R10")       // F00
    IF data_check.status = INSUFFICIENT_DATA:
        RETURN INSUFFICIENT_DATA WITH { data_check.failed }

    // Step 2 — Georeferencing
    georeference = GET_BIM_GEOREFERENCE(bim_model)                     // F01
    IF georeference is missing
       OR VALIDATE_GEOREFERENCE(bim_model, georeference, location).status = INSUFFICIENT_DATA:   // F21
        RETURN INSUFFICIENT_DATA

    // Step 3 — Bbl lookup (safety and accessibility)
    use_function = main use function of GET_USE_FUNCTIONS(bim_model)  // F13
    date         = application date
    safety       = GET_BBL_REQUIREMENT("4.24",  use_function, "heightDifferenceMeans", date)  // F29
    access       = GET_BBL_REQUIREMENT("4.179", use_function, "heightDifferenceMeans", date)  // F29
    // each gives a list of { threshold, requiredMeans, dimensions }

    // Step 4 — Spaces and routes
    building = GET_BUILDING_GEOMETRY(bim_model, georeference)          // F22
    network  = BUILD_ROUTE_NETWORK(bim_model, "ACCESS")                 // F33
    entrance = the space with the main entrance (entrance level, ILS-9.06a)
    targets  = GET_ZONES(bim_model, each space type named by safety and access)   // F24
    terrain  = "ADJOINING_TERRAIN"                                     // F32 reads it: DR-GEO-04 or IfcSite

    results        = empty list
    review_reasons = [ "rain protection (NEN 2778) not checked on the model" ]

    FOR EACH target IN targets:
        route = FIND_ROUTE(network, entrance, target)                  // F34, DER-100

        // Step 5 — Height differences along the route and to the terrain
        differences = MEASURE_HEIGHT_DIFFERENCE(a, b)
                      FOR EACH consecutive pair (a, b) on route        // F32, DER-101
        differences ADD MEASURE_HEIGHT_DIFFERENCE(entrance, terrain)  // F32

        FOR EACH difference IN differences:
            FOR EACH requirement IN safety + access:
                IF difference.value <= requirement.threshold:
                    CONTINUE

                // Step 6 — Required means present?
                means = the stairs, ramps, landings or lifts on route at this difference
                IF means does not include requirement.requiredMeans:
                    results ADD { difference, NON_COMPLIANT, "missing " + requirement.requiredMeans }
                    CONTINUE

                // Step 7 — Dimensions of stairs and ramps
                FOR EACH element IN means:
                    riser = GET_PROPERTY(element, "Pset_StairFlightCommon.RiserHeight")   // F28
                    tread = GET_PROPERTY(element, "Pset_StairFlightCommon.TreadLength")   // F28
                    slope = GET_PROPERTY(element, "Pset_RampFlightCommon.Slope")          // F28
                    width = MEASURE_CLEAR_DIMENSIONS(element).clearWidth                 // F31, DER-102
                    IF any measured value is outside requirement.dimensions:
                        results ADD { element.GlobalId, NON_COMPLIANT, riser, tread, slope, width }
                    ELSE:
                        results ADD { element.GlobalId, COMPLIANT }

    // Steps 8 and 9 — Compare and report
    IF any result in results is NON_COMPLIANT:
        RETURN NON_COMPLIANT WITH { results, review_reasons, data_check.warnings }
    RETURN REVIEW_REQUIRED WITH { results, review_reasons, data_check.warnings }
```

**Why the result is at best `REVIEW_REQUIRED`:** rain protection (NEN 2778) is part of the Bbl requirement but cannot be read from the model. Until it can, a person confirms that part. When the rule profile excludes rain protection from the model check, the last line returns `COMPLIANT`.

### BM13-R11 — Rc value (ILS check #11)

#### Layer 0 — Rule foundation / interpretation

> **Rule ID:** BM13-R11 (ILS check #11 *Rc-waarde*)
>
> **Check:** Do the external walls, roofs and floors around residential areas, function areas, toilets and bathrooms have at least the required thermal resistance (Rc)?
>
> **Legal source:** Bbl [§4.4](#4-generic-function-library).1: steering table 4.148B, art. 4.152. NTA 8800 for the calculation of Rc.
>
> **Definition:** Every wall, roof and floor that separates these areas from outside air, ground, crawl space, water or an unheated space has an Rc of at least the value that art. 4.152 gives for that situation. Values for new buildings are currently 4.7 (façade), 6.3 (roof) and 3.7 (floor) m²·K/W — always read through F29 from the Bbl version in force.
>
> **Interpretation questions:** Which area measuring method applies (net area)? Is an Rc derived from the model's U-value acceptable, or is only the NTA 8800 calculation valid? The inventory notes that a provisional BENG calculation is needed for the application, and a certified one after completion.
>
> **Dependencies:** Main use function, areas and spaces, enclosing elements and what lies behind them, U-values (check #12 is closely related).
>
> **Automation level:** partial — indicative from the model (F39); the supplied BENG / NTA 8800 calculation is leading.

This is the normative interpretation layer.

#### Layer 1 — Minimum requirements

What must be available before the check can run. MUST missing → `INSUFFICIENT_DATA`; SHOULD missing → note; MAY = context only ([section 3.4](#34-standard-result-precedence)). Together they form minimum set **MR-R11** ([Annex A.5](#a5-standard-minimum-requirement-sets)).

| Check | ILS objective | ILS milestone | Geometry needed (ILS) | ILS IDS files | Minimum set |
| --- | --- | --- | --- | --- | --- |
| #11 | ID02 (TBA) | M3 | no (property) | 10 | MR-R11 = MR-CORE + M03–M11 |

| Req. | What must be available | Level | Why the check needs it |
| --- | --- | --- | --- |
| M01 | A valid IFC model of one building, with project data and named storeys (elevation, entrance level) | MUST | Every step reads the model and its storeys |
| M02 | Building elements with closed body geometry, each inside a storey; no proxy elements (SHOULD) | MUST | Separations must be identifiable |
| M03 | The use function zones | MUST | Selects the Bbl requirements |
| M04 | Function areas and residential areas | MUST | The heated areas whose separations are checked |
| M05 | Second-level space boundaries | MUST | What lies behind each separation (outside, ground, unheated) |
| M06 | A U-value and the "is external" flag on every external wall, roof, floor, window, door and curtain wall | MUST | Rc is derived from U |
| M07 | Insulation layers, curtain walls, slabs and walls as own classes | SHOULD | Element-level evidence |
| M08 | The BENG / NTA 8800 calculation | SHOULD | Leading Rc per construction when supplied |
| M09 | The Bbl requirements via steering table 4.148B (art. 4.152) | MUST | Required Rc per element kind and adjacency |
| M10 | The rule profile: tolerance, which separations count | MUST | The interpretation choices of Layer 0 |
| M11 | The cadastral parcel in the model | MAY | Context only |

#### Layer 2 — Mapping to IFC, ILS and GEO standards

| Req. | IFC entity / attribute / property set | ILS IDS (file no.) | BM13 supplement | GEO / regulation standard and source | DR ID |
| --- | --- | --- | --- | --- | --- |
| M01 | `IfcProject`; one `IfcBuilding`; `IfcBuildingStorey` Name, Elevation, `Pset_BuildingStoreyCommon.EntranceLevel` | 9 (01), 9.02 (07) | S07, S08 | IFC 4.3 / IFC4 ADD2 TC1 (ILS AC1, AC2) | ILS-9, 9.02 |
| M02 | Building elements `Representation`; `IfcRelContainedInSpatialStructure` | — | S01, S02 | ILS [§6.2](#6-check-2--bm13-r02-maximum-building-height) G1, G4 (AC5) | BM13-S01, ILS-G1 |
| M03 | `IfcZone` `ObjectType` = *Gebruiksfunctie* | 9.08 (16) | — | bSDD *Omgevingswet-Ruimten*; Bbl use functions | ILS-9.08 |
| M04 | `IfcSpatialZone` *Functiegebied*, *Verblijfsgebied* | 9.10a (18), 9.10b (19) | — | bSDD *Omgevingswet-Ruimten* | ILS-9.10a, 9.10b |
| M05 | `IfcRelSpaceBoundary` (second level) | — | S11 | IFC 4.3 | BM13-S11 |
| M06 | `Pset_…Common.ThermalTransmittance`, `Pset_…Common.IsExternal` | — | S12 | NTA 8800 | BM13-S12 |
| M07 | `IfcCovering` PredefinedType `INSULATION`, `IfcCurtainWall`, `IfcSlab`, `IfcWall` | 9.18c (36), 9.18d (37), 9.18g (40), 9.18h (41) | — | IFC 4.3 | ILS-9.18c, d, g, h |
| M08 | — | — | — | Applicant documents: BENG / NTA 8800 calculation | DR-DOC-02 |
| M09 | — | — | — | Bbl steering table 4.148B, art. 4.152 | DR-LAW-01 |
| M10 | — | — | — | BM13 rule specification, layer 4a | DR-REG-11 |
| M11 | `IfcSpatialZone` *Kadastraal perceel* | 9.04 (10) | — | BRK (cross-check) | ILS-9.04 |

**Derived properties:** DER-110 external separations with adjacency · DER-111 Rc per element.

#### Layer 3 — Steps, functions and pseudocode

**Generic workflow:** `F19 → F20 → F00 → F13 → F29 → F24 → F36 → F28 → F39 → F41 → compare → F18`

| Step | What happens | Standard functions | Uses | Output / stops when |
| --- | --- | --- | --- | --- |
| 1 | Take the application and the model; run the IDS files of the check | F19, F20, F00 | M01–M07, M11 | MUST missing → `INSUFFICIENT_DATA` |
| 2 | Determine the main use function; look up the required Rc per situation via steering table 4.148B | F13, F29 | M03, M09 | required Rc per element kind and adjacency |
| 3 | Determine the residential areas, function areas, toilets and bathrooms | F24 | M04 | zones |
| 4 | Get their enclosing walls, roofs and floors and what lies behind them | F36 | M05, M07 | DER-110 |
| 5 | Read the U-value of each element and derive Rc | F28, F39 | M06 | DER-111 (indicative) |
| 6 | Read the supplied BENG / NTA 8800 calculation, if present | F41 | M08 | Rc per construction (leading) |
| 7 | Compare Rc with the required value | — | M09, M10 | status per element |
| 8 | Report result and evidence | F18 | — | `RuleCheckResult` |

**Pseudocode** (notation: [section 3.3](#33-how-to-read-the-pseudocode-applies-to-every-rule); final status: [section 3.4](#34-standard-result-precedence)):

```
PROCEDURE CHECK_RC_VALUE(application):

    // Step 1 — Model and IDS check
    location   = GET_APPLICATION_LOCATION(application)                 // F19, for the report
    bim_model  = GET_SUBMITTED_BIM_MODEL(application)                  // F20
    IF bim_model is missing:
        RETURN INSUFFICIENT_DATA
    data_check = CHECK_MINIMUM_REQUIREMENTS(bim_model, "MR-R11")       // F00
    IF data_check.status = INSUFFICIENT_DATA:
        RETURN INSUFFICIENT_DATA WITH { data_check.failed }

    // Step 2 — Bbl lookup
    use_function = main use function of GET_USE_FUNCTIONS(bim_model)  // F13
    date         = application date

    // Step 6 — Supplied calculation (leading when present)
    beng = GET_EXTERNAL_CALCULATION(application, "BENG")               // F41

    results        = empty list
    review_reasons = empty list
    IF beng is not supplied:
        review_reasons ADD "no BENG / NTA 8800 calculation: Rc derived from the model is indicative"

    // Steps 3 and 4 — Areas and their external separations
    zones = GET_ZONES(bim_model, "Verblijfsgebied") + GET_ZONES(bim_model, "Functiegebied")
            + toilets and bathrooms                                     // F24
    FOR EACH zone IN zones:
        FOR EACH (element, behind) IN GET_ENCLOSING_ELEMENTS(zone).elements:   // F36, DER-110
            IF behind not in { outside air, ground, crawl space, water, unheated space }:
                CONTINUE

            kind     = wall, roof or floor (from the element class and position)
            required = GET_BBL_REQUIREMENT("4.148B", use_function,
                           "Rc/" + kind + "/" + behind, date)          // F29

            // Step 5 — Rc of the element
            IF beng is supplied AND beng has an Rc for this construction:
                rc = beng.Rc of this construction
            ELSE:
                rc = DERIVE_RC_FROM_U(GET_PROPERTY(element, "ThermalTransmittance"), kind)  // F28, F39, DER-111

            // Step 7 — Compare
            IF rc >= required.value:
                results ADD { element.GlobalId, COMPLIANT, rc, required }
            ELSE:
                results ADD { element.GlobalId, NON_COMPLIANT, rc, required, behind }

    // Step 8 — Report result and evidence
    IF any result in results is NON_COMPLIANT:
        RETURN NON_COMPLIANT WITH { results, review_reasons, data_check.warnings }
    IF review_reasons is not empty:
        RETURN REVIEW_REQUIRED WITH { results, review_reasons, data_check.warnings }
    RETURN COMPLIANT WITH { results, data_check.warnings }
```

### BM13-R12 — U value (ILS check #12)

#### Layer 0 — Rule foundation / interpretation

> **Rule ID:** BM13-R12 (ILS check #12 *U-waarde*)
>
> **Check:** Do the windows, doors and frames in the external vertical separations have a low enough thermal transmittance (U-value) — on average over their total area, and each one on its own?
>
> **Legal source:** Bbl [§4.4](#4-generic-function-library).1: steering table 4.148B, art. 4.153. NTA 8800 for the projected area and the U-value.
>
> **Definition:** The area-weighted average U-value of all windows, doors and frames (and what can be equated with them, e.g. curtain walls) in the external vertical separations is at most the required average; and every single one is at most the required maximum. Values for new buildings are currently 1.65 W/m²·K on average and 2.2 W/m²·K per element — always read through F29.
>
> **Interpretation questions:** Which elements count as "equal to" windows, doors and frames? Are doors to unheated spaces included? Roof windows are not vertical — are they out of scope here? The inventory notes a provisional BENG calculation is needed for the application.
>
> **Dependencies:** Main use function, the enclosure of heated areas, check #11 (closely related).
>
> **Automation level:** full when U-values are in the model; the supplied BENG / NTA 8800 calculation is leading when present.

This is the normative interpretation layer.

#### Layer 1 — Minimum requirements

What must be available before the check can run. MUST missing → `INSUFFICIENT_DATA`; SHOULD missing → note; MAY = context only ([section 3.4](#34-standard-result-precedence)). Together they form minimum set **MR-R12** ([Annex A.5](#a5-standard-minimum-requirement-sets)).

| Check | ILS objective | ILS milestone | Geometry needed (ILS) | ILS IDS files | Minimum set |
| --- | --- | --- | --- | --- | --- |
| #12 | ID02 (TBA) | M3 | no (property) | 7 | MR-R12 = MR-CORE + M03–M11 |

| Req. | What must be available | Level | Why the check needs it |
| --- | --- | --- | --- |
| M01 | A valid IFC model of one building, with project data and named storeys (elevation, entrance level) | MUST | Every step reads the model and its storeys |
| M02 | Building elements with closed body geometry, each inside a storey; no proxy elements (SHOULD) | MUST | Opening areas come from the geometry |
| M03 | The use function zones | MUST | Selects the Bbl requirements |
| M04 | A U-value and the "is external" flag on every window, door and curtain wall | MUST | The value that is checked |
| M05 | Curtain walls, doors and windows as own classes | SHOULD | Element-level evidence |
| M06 | Second-level space boundaries | SHOULD | Which openings bound a heated area |
| M07 | The BENG / NTA 8800 calculation | SHOULD | Leading U per element when supplied |
| M08 | The Bbl requirements via steering table 4.148B (art. 4.153) | MUST | Required average and maximum U |
| M09 | The rule profile: which openings count, tolerance | MUST | The interpretation choices of Layer 0 |
| M10 | The cadastral parcel in the model | MAY | Context only |
| M11 | The heated areas: function areas and residential areas | SHOULD | Limits the check to openings of heated areas |

#### Layer 2 — Mapping to IFC, ILS and GEO standards

| Req. | IFC entity / attribute / property set | ILS IDS (file no.) | BM13 supplement | GEO / regulation standard and source | DR ID |
| --- | --- | --- | --- | --- | --- |
| M01 | `IfcProject`; one `IfcBuilding`; `IfcBuildingStorey` Name, Elevation, `Pset_BuildingStoreyCommon.EntranceLevel` | 9 (01), 9.02 (07) | S07, S08 | IFC 4.3 / IFC4 ADD2 TC1 (ILS AC1, AC2) | ILS-9, 9.02 |
| M02 | Building elements `Representation`; `IfcRelContainedInSpatialStructure` | — | S01, S02 | ILS [§6.2](#6-check-2--bm13-r02-maximum-building-height) G1, G4 (AC5) | BM13-S01, ILS-G1 |
| M03 | `IfcZone` `ObjectType` = *Gebruiksfunctie* | 9.08 (16) | — | bSDD *Omgevingswet-Ruimten*; Bbl use functions | ILS-9.08 |
| M04 | `Pset_WindowCommon`, `Pset_DoorCommon`, `Pset_CurtainWallCommon` `.ThermalTransmittance`, `.IsExternal` | — | S12 | NTA 8800 | BM13-S12 |
| M05 | `IfcCurtainWall`, `IfcDoor`, `IfcWindow` | 9.18d (37), 9.18e (38), 9.18i (42) | — | IFC 4.3 | ILS-9.18d, e, i |
| M06 | `IfcRelSpaceBoundary` (second level) | — | S11 | IFC 4.3 | BM13-S11 |
| M07 | — | — | — | Applicant documents: BENG / NTA 8800 calculation | DR-DOC-02 |
| M08 | — | — | — | Bbl steering table 4.148B, art. 4.153 | DR-LAW-01 |
| M09 | — | — | — | BM13 rule specification, layer 4a | DR-REG-12 |
| M10 | `IfcSpatialZone` *Kadastraal perceel* | 9.04 (10) | — | BRK (cross-check) | ILS-9.04 |
| M11 | `IfcSpatialZone` *Functiegebied*, *Verblijfsgebied* | 9.10a (18), 9.10b (19) — added by BM13 | — | bSDD *Omgevingswet-Ruimten* | ILS-9.10a, 9.10b |

**Derived properties:** DER-120 openings in external vertical separations · DER-121 projected area per element · DER-122 average U.

#### Layer 3 — Steps, functions and pseudocode

**Generic workflow:** `F19 → F20 → F00 → F13 → F29 → F24 → F36 → F28 → F25 → F41 → compare → F18`

| Step | What happens | Standard functions | Uses | Output / stops when |
| --- | --- | --- | --- | --- |
| 1 | Take the application and the model; run the IDS files of the check | F19, F20, F00 | M01–M06, M10, M11 | MUST missing → `INSUFFICIENT_DATA` |
| 2 | Determine the main use function; look up the required average and maximum U via steering table 4.148B | F13, F29 | M03, M08 | required U values |
| 3 | Get the windows, doors, frames and curtain walls in the external vertical separations of the heated areas | F24, F36 | M05, M06, M11 | DER-120 |
| 4 | Determine the projected area of each opening (NTA 8800) | F25 (NTA8800\_OPENING) | M02, M05 | DER-121 |
| 5 | Read the U-value of each; use the supplied BENG / NTA 8800 calculation when present | F28, F41 | M04, M07 | U per element |
| 6 | Calculate the area-weighted average U | — | — | DER-122 |
| 7 | Compare the average and every single U with the requirements | — | M08, M09 | status |
| 8 | Report result and evidence | F18 | — | `RuleCheckResult` |

**Pseudocode** (notation: [section 3.3](#33-how-to-read-the-pseudocode-applies-to-every-rule); final status: [section 3.4](#34-standard-result-precedence)):

```
PROCEDURE CHECK_U_VALUE(application):

    // Step 1 — Model and IDS check
    location   = GET_APPLICATION_LOCATION(application)                 // F19, for the report
    bim_model  = GET_SUBMITTED_BIM_MODEL(application)                  // F20
    IF bim_model is missing:
        RETURN INSUFFICIENT_DATA
    data_check = CHECK_MINIMUM_REQUIREMENTS(bim_model, "MR-R12")       // F00
    IF data_check.status = INSUFFICIENT_DATA:
        RETURN INSUFFICIENT_DATA WITH { data_check.failed }

    // Step 2 — Bbl lookup
    use_function = main use function of GET_USE_FUNCTIONS(bim_model)  // F13
    date         = application date
    max_average  = GET_BBL_REQUIREMENT("4.148B", use_function, "averageU", date)   // F29
    max_single   = GET_BBL_REQUIREMENT("4.148B", use_function, "maximumU", date)   // F29
    IF max_average = NOT_APPLICABLE:
        RETURN NOT_APPLICABLE

    beng           = GET_EXTERNAL_CALCULATION(application, "BENG")     // F41
    results        = empty list
    review_reasons = empty list

    // Step 3 — Openings in the external vertical separations of heated areas
    heated   = GET_ZONES(bim_model, "Verblijfsgebied") + GET_ZONES(bim_model, "Functiegebied")   // F24
    openings = empty list
    FOR EACH zone IN heated:
        FOR EACH (element, behind) IN GET_ENCLOSING_ELEMENTS(zone).elements:   // F36
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
        area = CALCULATE_AREA(element, "NTA8800_OPENING")              // F25, DER-121
        IF beng is supplied AND beng has a U for this element:
            u = beng.U of this element
        ELSE:
            u = GET_PROPERTY(element, "ThermalTransmittance")          // F28
        sum_ua = sum_ua + u × area.value
        sum_a  = sum_a + area.value

        // Step 7 — Each element on its own
        IF u > max_single.value:
            results ADD { element.GlobalId, NON_COMPLIANT, u, max_single }

    // Step 6 — Area-weighted average
    average_u = sum_ua / sum_a                                          // DER-122

    // Step 7 — Average
    IF average_u > max_average.value:
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
```

### BM13-R13 — MPG, environmental performance (ILS check #13)

#### Layer 0 — Rule foundation / interpretation

> **Rule ID:** BM13-R13 (ILS check #13 *MPG*)
>
> **Check:** Is the environmental impact of the materials used in the building (the environmental performance, MPG) within the limit for its use function(s)?
>
> **Legal source:** Bbl [§4.4](#4-generic-function-library).2: art. 4.158 with steering table 4.158, and art. 4.159; *Bepalingsmethode Milieuprestatie Bouwwerken*; NEN 2580. The article changes per 1 July 2026; F29 always uses the version valid on the application date.
>
> **Definition:** The environmental performance calculated with the *Bepalingsmethode* is at most the Bbl limit. For a residential function, the limit follows from member 3a (depending on the usable floor area). For an office function, from member 3b (depending on the loss area ÷ usable floor area). For combined use functions on one parcel, a weighted limit applies (member 4).
>
> **Interpretation questions:** Which building counts as a *woongebouw* (see the Bbl note on residential buildings with shared access)? Must the areas in the MPG calculation match the model's NEN 2580 areas, and within which tolerance?
>
> **Dependencies:** Use functions and their usable floor area, the external separations (loss area, offices), the supplied MPG calculation.
>
> **Automation level:** the MPG score itself comes from the supplied calculation (F41); the model is used to check the areas and to pick the right limit.

This is the normative interpretation layer.

#### Layer 1 — Minimum requirements

What must be available before the check can run. MUST missing → `INSUFFICIENT_DATA`; SHOULD missing → note; MAY = context only ([section 3.4](#34-standard-result-precedence)). Together they form minimum set **MR-R13** ([Annex A.5](#a5-standard-minimum-requirement-sets)).

| Check | ILS objective | ILS milestone | Geometry needed (ILS) | ILS IDS files | Minimum set |
| --- | --- | --- | --- | --- | --- |
| #13 | ID02 (TBA) | M3 | no (quantities) | 7 | MR-R13 = MR-CORE + M03–M09 |

| Req. | What must be available | Level | Why the check needs it |
| --- | --- | --- | --- |
| M01 | A valid IFC model of one building, with project data and named storeys (elevation, entrance level) | MUST | Every step reads the model and its storeys |
| M02 | Building elements with closed body geometry, each inside a storey; no proxy elements (SHOULD) | MUST | Areas and loss areas come from the geometry |
| M03 | The use function zones | MUST | The MPG limit depends on the use function |
| M04 | Quantities calculated by the authoring tool | MUST | GO per use function; cross-check with the MPG calculation |
| M05 | The MPG calculation (score, tool, version, date, areas used) | MUST | The value that is checked |
| M06 | Function spaces and residential spaces | SHOULD | Evidence for the area per use function |
| M07 | Slabs and walls as own classes | SHOULD | Loss area (external separations) for offices |
| M08 | The Bbl requirements: art. 4.158 and 4.159 | MUST | MPG limit, weighted for combined use functions |
| M09 | The rule profile: tolerance on area differences | MUST | The interpretation choices of Layer 0 |

#### Layer 2 — Mapping to IFC, ILS and GEO standards

| Req. | IFC entity / attribute / property set | ILS IDS (file no.) | BM13 supplement | GEO / regulation standard and source | DR ID |
| --- | --- | --- | --- | --- | --- |
| M01 | `IfcProject`; one `IfcBuilding`; `IfcBuildingStorey` Name, Elevation, `Pset_BuildingStoreyCommon.EntranceLevel` | 9 (01), 9.02 (07) | S07, S08 | IFC 4.3 / IFC4 ADD2 TC1 (ILS AC1, AC2) | ILS-9, 9.02 |
| M02 | Building elements `Representation`; `IfcRelContainedInSpatialStructure` | — | S01, S02 | ILS [§6.2](#6-check-2--bm13-r02-maximum-building-height) G1, G4 (AC5) | BM13-S01, ILS-G1 |
| M03 | `IfcZone` `ObjectType` = *Gebruiksfunctie* | 9.08 (16) | — | bSDD *Omgevingswet-Ruimten*; Bbl use functions | ILS-9.08 |
| M04 | `Qto_…BaseQuantities` | — | — | NEN 2580 (GO); ILS [§6.2](#6-check-2--bm13-r02-maximum-building-height) G5; ILS AC6 | ILS-G5 |
| M05 | — | — | — | Applicant documents: MPG calculation (Bepalingsmethode Milieuprestatie Bouwwerken) | DR-DOC-01 |
| M06 | `IfcSpace` *Functieruimte*, *Verblijfsruimte* | 9.12a (25), 9.12b (26) | — | bSDD *Omgevingswet-Ruimten*; NEN 2580 | ILS-9.12a, 9.12b |
| M07 | `IfcSlab`, `IfcWall` with `IsExternal` | 9.18g (40), 9.18h (41) | — | IFC 4.3 | ILS-9.18g, 9.18h |
| M08 | — | — | — | Bbl art. 4.158, 4.159 | DR-LAW-01 |
| M09 | — | — | — | BM13 rule specification, layer 4a | DR-REG-13 |

**Derived properties:** DER-130 GO per use function · DER-131 loss-area ratio · DER-132 applicable MPG limit.

#### Layer 3 — Steps, functions and pseudocode

**Generic workflow:** `F19 → F20 → F00 → F13 → F24 → F25 → F36 → F29 → F41 → compare → F18`

| Step | What happens | Standard functions | Uses | Output / stops when |
| --- | --- | --- | --- | --- |
| 1 | Take the application and the model; run the IDS files of the check | F19, F20, F00 | M01–M07 | MUST missing → `INSUFFICIENT_DATA` |
| 2 | Determine the use function(s) of the building (combined functions allowed) | F13 | M03 | use functions |
| 3 | Calculate the usable floor area (NEN 2580 GO) per use function | F24, F25 | M03, M04, M06 | DER-130 |
| 4 | For an office function: calculate the loss area (all external separations) and divide by GO | F36, F25 | M07 | DER-131 |
| 5 | Look up the MPG limit per use function via art. 4.158; for combined functions the weighted limit (member 4) | F29 | M08 | DER-132 |
| 6 | Read the MPG score from the supplied calculation and compare its areas with the model | F41 | M05, M09 | MPG score; areas differ → `REVIEW_REQUIRED` |
| 7 | Compare the score with the limit | — | M08 | status |
| 8 | Report result and evidence | F18 | — | `RuleCheckResult` |

**Pseudocode** (notation: [section 3.3](#33-how-to-read-the-pseudocode-applies-to-every-rule); final status: [section 3.4](#34-standard-result-precedence)):

```
PROCEDURE CHECK_MPG(application):

    // Step 1 — Model and IDS check
    location   = GET_APPLICATION_LOCATION(application)                 // F19, for the report
    bim_model  = GET_SUBMITTED_BIM_MODEL(application)                  // F20
    IF bim_model is missing:
        RETURN INSUFFICIENT_DATA
    data_check = CHECK_MINIMUM_REQUIREMENTS(bim_model, "MR-R13")       // F00: includes DR-DOC-01
    IF data_check.status = INSUFFICIENT_DATA:
        RETURN INSUFFICIENT_DATA WITH { data_check.failed }

    date           = application date
    review_reasons = empty list

    // Steps 2 and 3 — Use functions and their usable floor area
    use_zones = GET_ZONES(bim_model, "Gebruiksfunctie")                // F24 (F13 gives the names)
    go_per_use = empty list
    FOR EACH zone IN use_zones:
        go = CALCULATE_AREA(zone, "NEN2580_GO")                        // F25, DER-130
        go_per_use ADD { zone.name, go.value }
        IF go.status = REVIEW_REQUIRED:
            review_reasons ADD go.deviation

    // Step 4 — Loss-area ratio for offices
    FOR EACH entry IN go_per_use WHERE entry.name = "Kantoorfunctie":
        loss_area = SUM OF CALCULATE_AREA(element, "NEN2580_BVO")
                    FOR EACH (element, behind) IN GET_ENCLOSING_ELEMENTS(zone of entry)
                    WHERE behind = outside air                         // F36, F25
        entry.lossRatio = loss_area / entry.go                        // DER-131

    // Step 5 — Applicable limit (weighted for combined use functions)
    limit = GET_BBL_REQUIREMENT("4.158", go_per_use, "maximumMPG", date)   // F29, DER-132
    IF limit = NOT_APPLICABLE:
        RETURN NOT_APPLICABLE

    // Step 6 — MPG score from the supplied calculation
    mpg = GET_EXTERNAL_CALCULATION(application, "MPG")                  // F41
    IF mpg is not supplied:
        RETURN INSUFFICIENT_DATA WITH { "no MPG calculation supplied" }
    IF mpg.area differs from SUM of go_per_use by more than GET_PARAMETER("BM13-R13", "areaTolerance"):   // F23
        review_reasons ADD { "areas in MPG calculation and model differ", mpg.area }

    // Step 7 — Compare
    IF mpg.score > limit.value:
        RETURN NON_COMPLIANT WITH { mpg.score, limit, mpg.tool, mpg.version, review_reasons }

    // Step 8 — Report result and evidence
    IF review_reasons is not empty:
        RETURN REVIEW_REQUIRED WITH { mpg.score, limit, review_reasons, data_check.warnings }
    RETURN COMPLIANT WITH { mpg.score, limit, mpg.tool, mpg.version, data_check.warnings }
```

**Why F29 receives the list of use functions:** for combined use functions the Bbl sets a weighted limit (member 4). Doing the weighting inside the standard lookup keeps it identical for every vendor.

### BM13-R14 — Escape routes (ILS check #14)

#### Layer 0 — Rule foundation / interpretation

> **Rule ID:** BM13-R14 (ILS check #14 *Vluchtwegen*)
>
> **Check:** Does every space for people have an escape route by which a safe place can be reached in case of fire, meeting the conditions of art. 4.65?
>
> **Legal source:** Bbl [§4.2](#4-generic-function-library).10: steering table 4.64, art. 4.65 *Vluchtroute*.
>
> **Definition:** An escape route (*vluchtroute*) is a route that starts in a space for people, runs only over floors, stairs or ramps, and ends at a safe place. It may not use a lift and cannot run through a window. For every use area and residential space such a route exists, and it meets the conditions that the steering table assigns to the use function.
>
> **Interpretation questions:** Which places count as a safe place for this building (outside at ground level, another compartment, a protected route)? Must the computed route follow the escape-route zones the designer modelled (ILS-9.16c)?
>
> **Dependencies:** Main use function, use areas and spaces, fire compartments (check #7), modelled escape routes, doors and stairs; checks #15 and #16 use the same routes.

This is the normative interpretation layer.

#### Layer 1 — Minimum requirements

What must be available before the check can run. MUST missing → `INSUFFICIENT_DATA`; SHOULD missing → note; MAY = context only ([section 3.4](#34-standard-result-precedence)). Together they form minimum set **MR-R14** ([Annex A.5](#a5-standard-minimum-requirement-sets)).

| Check | ILS objective | ILS milestone | Geometry needed (ILS) | ILS IDS files | Minimum set |
| --- | --- | --- | --- | --- | --- |
| #14 | ID02 (TBA) | M3 | yes (route) | 11 | MR-R14 = MR-CORE + M03–M11 |

| Req. | What must be available | Level | Why the check needs it |
| --- | --- | --- | --- |
| M01 | A valid IFC model of one building, with project data and named storeys (elevation, entrance level) | MUST | Routes run over storeys to the entrance level |
| M02 | Building elements with closed body geometry, each inside a storey; no proxy elements (SHOULD) | MUST | Routes are traced through the geometry |
| M03 | The use function zones | MUST | Selects the Bbl requirements |
| M04 | Use areas, function spaces and residential spaces | MUST | Every one needs an escape route |
| M05 | The fire compartments | MUST | Conditions of art. 4.65 depend on compartments |
| M06 | The escape routes as modelled | MUST | The routes that are tested |
| M07 | Second-level space boundaries | MUST | Connects spaces into the escape network |
| M08 | Doors, slabs, stairs and ramps as own classes | SHOULD | Route segments; stairs on the route |
| M09 | The parcel in the model | SHOULD | Where the safe place (public road, open air) lies |
| M10 | The Bbl requirements via steering table 4.64 (art. 4.65) | MUST | Conditions for every escape route |
| M11 | The rule profile: definition of safe places | MUST | The interpretation choices of Layer 0 |

#### Layer 2 — Mapping to IFC, ILS and GEO standards

| Req. | IFC entity / attribute / property set | ILS IDS (file no.) | BM13 supplement | GEO / regulation standard and source | DR ID |
| --- | --- | --- | --- | --- | --- |
| M01 | `IfcProject`; one `IfcBuilding`; `IfcBuildingStorey` Name, Elevation, `Pset_BuildingStoreyCommon.EntranceLevel` | 9 (01), 9.02 (07) | S07, S08 | IFC 4.3 / IFC4 ADD2 TC1 (ILS AC1, AC2) | ILS-9, 9.02 |
| M02 | Building elements `Representation`; `IfcRelContainedInSpatialStructure` | — | S01, S02 | ILS [§6.2](#6-check-2--bm13-r02-maximum-building-height) G1, G4 (AC5) | BM13-S01, ILS-G1 |
| M03 | `IfcZone` `ObjectType` = *Gebruiksfunctie* | 9.08 (16) | — | bSDD *Omgevingswet-Ruimten*; Bbl use functions | ILS-9.08 |
| M04 | `IfcSpatialZone` *Gebruiksgebied*; `IfcSpace` *Functieruimte*, *Verblijfsruimte* | 9.10d (21), 9.12a (25), 9.12b (26) | — | bSDD *Omgevingswet-Ruimten* | ILS-9.10d, 9.12a, 9.12b |
| M05 | `IfcZone` / `IfcSpatialZone` *Brandcompartiment* | 9.16a (30) | — | bSDD *Omgevingswet-Ruimten* | ILS-9.16a |
| M06 | `IfcZone` / `IfcSpatialZone` *Vluchtroute* | 9.16c (32) | — | bSDD *Omgevingswet-Ruimten* | ILS-9.16c |
| M07 | `IfcRelSpaceBoundary` (second level) | — | S11 | IFC 4.3 | BM13-S11 |
| M08 | `IfcDoor`, `IfcSlab`; `IfcStair` / `IfcRamp` with flights | 9.18e (38), 9.18g (40) | S09 | IFC 4.3 | ILS-9.18e, 9.18g, BM13-S09 |
| M09 | `IfcSpatialZone` *Perceel* | 9.03a (08) | — | BRK; BGT public road (context) | ILS-9.03a |
| M10 | — | — | — | Bbl steering table 4.64, art. 4.65 | DR-LAW-01 |
| M11 | — | — | — | BM13 rule specification, layer 4a | DR-REG-14 |

**Derived properties:** DER-140 safe places · DER-141 escape route per space.

#### Layer 3 — Steps, functions and pseudocode

**Generic workflow:** `F19 → F20 → F00 → F13 → F29 → F24 → F33 → F34 → compare → F18`

| Step | What happens | Standard functions | Uses | Output / stops when |
| --- | --- | --- | --- | --- |
| 1 | Take the application and the model; run the IDS files of the check | F19, F20, F00 | M01–M09 | MUST missing → `INSUFFICIENT_DATA` |
| 2 | Determine the main use function; look up the escape-route conditions via steering table 4.64 | F13, F29 | M03, M10 | conditions of art. 4.65 |
| 3 | Determine the use areas, residential spaces, fire compartments and modelled escape routes | F24 | M04, M05, M06 | zones |
| 4 | Determine the safe places | F23, F24 | M09, M11 | DER-140 |
| 5 | Build the escape network (no lifts, no windows) and find a route from every space to a safe place | F33 (ESCAPE), F34 | M06, M07, M08 | DER-141; no route → `NON_COMPLIANT` |
| 6 | Test each route against the conditions of art. 4.65 | — | M10 | status per space |
| 7 | Report result and evidence | F18 | — | `RuleCheckResult` |

**Pseudocode** (notation: [section 3.3](#33-how-to-read-the-pseudocode-applies-to-every-rule); final status: [section 3.4](#34-standard-result-precedence)):

```
PROCEDURE CHECK_ESCAPE_ROUTES(application):

    // Step 1 — Model and IDS check
    location   = GET_APPLICATION_LOCATION(application)                 // F19, for the report
    bim_model  = GET_SUBMITTED_BIM_MODEL(application)                  // F20
    IF bim_model is missing:
        RETURN INSUFFICIENT_DATA
    data_check = CHECK_MINIMUM_REQUIREMENTS(bim_model, "MR-R14")       // F00
    IF data_check.status = INSUFFICIENT_DATA:
        RETURN INSUFFICIENT_DATA WITH { data_check.failed }

    // Step 2 — Bbl lookup
    use_function = main use function of GET_USE_FUNCTIONS(bim_model)  // F13
    conditions   = GET_BBL_REQUIREMENT("4.64", use_function,
                       "escapeRouteConditions", application date)      // F29: list of conditions of art. 4.65
    IF conditions = NOT_APPLICABLE:
        RETURN NOT_APPLICABLE

    // Steps 3 and 4 — Spaces, compartments, modelled routes, safe places
    spaces       = GET_ZONES(bim_model, "Gebruiksgebied")
                   + GET_ZONES(bim_model, "Verblijfsruimte")           // F24
    compartments = GET_ZONES(bim_model, "Brandcompartiment")           // F24
    modelled     = GET_ZONES(bim_model, "Vluchtroute")                 // F24
    safe_places  = the places named by GET_PARAMETER("BM13-R14", "safePlaces")   // F23, DER-140

    // Step 5 — Escape network and routes
    network = BUILD_ROUTE_NETWORK(bim_model, "ESCAPE")                  // F33: no lifts, no windows
    results        = empty list
    review_reasons = empty list
    IF network.status = REVIEW_REQUIRED:
        review_reasons ADD network.reason

    FOR EACH space IN spaces:
        route = the shortest of FIND_ROUTE(network, space, place)
                FOR EACH place IN safe_places                          // F34, DER-141
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
```

### BM13-R15 — Walking distance (ILS check #15)

#### Layer 0 — Rule foundation / interpretation

> **Rule ID:** BM13-R15 (ILS check #15 *Loopafstand*)
>
> **Check:** Is the (corrected) walking distance from every point in a use area to at least one exit of the sub-fire compartment it lies in no longer than the Bbl allows? And are the additional conditions of art. 4.66 met?
>
> **Legal source:** Bbl [§4.2](#4-generic-function-library).10: steering table 4.64, art. 4.66 *Vluchten naar de uitgang van een brandcompartiment*; NEN 2580.
>
> **Definition:** Per the inventory: the corrected walking distance is the distance from the farthest point of a use area to the exit of the (sub-)fire compartment, multiplied by 1.5; in a use area that is not further divided, and in a residential space, the factor is 1. Also: the height difference between floors within one fire compartment is at most 4 m (art. 4.66 member 6); a compartment or residential space for more than 150 persons has at least 2 exits at least 5 m apart.
>
> **Interpretation questions:** Which factor applies to which area? How are furniture and fixed obstacles treated when measuring? Is the occupancy taken from the model or from the Bbl occupancy per m²?
>
> **Dependencies:** Main use function, use areas, (sub-)fire compartments and their exits, occupancy, floor levels; check #14 (same network).
>
> **Automation level:** full once the escape network can be built; the inventory notes that architects usually supply their own table, which the municipality may recalculate fully or by sample.

This is the normative interpretation layer.

#### Layer 1 — Minimum requirements

What must be available before the check can run. MUST missing → `INSUFFICIENT_DATA`; SHOULD missing → note; MAY = context only ([section 3.4](#34-standard-result-precedence)). Together they form minimum set **MR-R15** ([Annex A.5](#a5-standard-minimum-requirement-sets)).

| Check | ILS objective | ILS milestone | Geometry needed (ILS) | ILS IDS files | Minimum set |
| --- | --- | --- | --- | --- | --- |
| #15 | ID02 (TBA) | M3 | yes (distance) | 13 | MR-R15 = MR-CORE + M03–M12 |

| Req. | What must be available | Level | Why the check needs it |
| --- | --- | --- | --- |
| M01 | A valid IFC model of one building, with project data and named storeys (elevation, entrance level) | MUST | Floor levels within a compartment |
| M02 | Building elements with closed body geometry, each inside a storey; no proxy elements (SHOULD) | MUST | Walking distances are measured in the geometry |
| M03 | The use function zones | MUST | Selects the Bbl requirements |
| M04 | Use areas, function spaces and residential spaces | MUST | The farthest point is taken per use area |
| M05 | The fire compartments and sub-fire compartments | MUST | Distances run to the exit of the sub-fire compartment |
| M06 | Second-level space boundaries | MUST | Exits and the walking network |
| M07 | Residential areas with occupancy (persons) | SHOULD | Two exits above 150 persons |
| M08 | The escape routes and tare spaces | SHOULD | Circulation that forms the network |
| M09 | Doors and slabs as own classes | SHOULD | Exits and floor levels |
| M10 | Quantities calculated by the authoring tool | SHOULD | Floor area for the occupancy cross-check |
| M11 | The Bbl requirements via steering table 4.64 (art. 4.66) | MUST | Maximum walking distance, correction factor, 4 m, 150 persons |
| M12 | The rule profile: walking-line method, obstacle clearance | MUST | The interpretation choices of Layer 0 |

#### Layer 2 — Mapping to IFC, ILS and GEO standards

| Req. | IFC entity / attribute / property set | ILS IDS (file no.) | BM13 supplement | GEO / regulation standard and source | DR ID |
| --- | --- | --- | --- | --- | --- |
| M01 | `IfcProject`; one `IfcBuilding`; `IfcBuildingStorey` Name, Elevation, `Pset_BuildingStoreyCommon.EntranceLevel` | 9 (01), 9.02 (07) | S07, S08 | IFC 4.3 / IFC4 ADD2 TC1 (ILS AC1, AC2) | ILS-9, 9.02 |
| M02 | Building elements `Representation`; `IfcRelContainedInSpatialStructure` | — | S01, S02 | ILS [§6.2](#6-check-2--bm13-r02-maximum-building-height) G1, G4 (AC5) | BM13-S01, ILS-G1 |
| M03 | `IfcZone` `ObjectType` = *Gebruiksfunctie* | 9.08 (16) | — | bSDD *Omgevingswet-Ruimten*; Bbl use functions | ILS-9.08 |
| M04 | `IfcSpatialZone` *Gebruiksgebied*; `IfcSpace` *Functieruimte*, *Verblijfsruimte* | 9.10d (21), 9.12a (25), 9.12b (26) | — | bSDD *Omgevingswet-Ruimten* | ILS-9.10d, 9.12a, 9.12b |
| M05 | `IfcZone` / `IfcSpatialZone` *Brandcompartiment*, *Subbrandcompartiment* | 9.16a (30), 9.16b (31) | — | bSDD *Omgevingswet-Ruimten* | ILS-9.16a, 9.16b |
| M06 | `IfcRelSpaceBoundary` (second level) | — | S11 | IFC 4.3 | BM13-S11 |
| M07 | `IfcSpatialZone` *Verblijfsgebied met bezettingsgraad* (occupancy property) | 9.10c (20) | — | bSDD *Omgevingswet-Ruimten* | ILS-9.10c |
| M08 | `IfcZone` / `IfcSpatialZone` *Vluchtroute*; `IfcSpace` *Tarra ruimte* | 9.16c (32), 9.17 (33) | — | bSDD *Omgevingswet-Ruimten* | ILS-9.16c, 9.17 |
| M09 | `IfcDoor`, `IfcSlab` | 9.18e (38), 9.18g (40) | — | IFC 4.3 | ILS-9.18e, 9.18g |
| M10 | `Qto_…BaseQuantities` | — | — | NEN 2580; ILS [§6.2](#6-check-2--bm13-r02-maximum-building-height) G5 | ILS-G5 |
| M11 | — | — | — | Bbl steering table 4.64, art. 4.66 | DR-LAW-01 |
| M12 | — | — | — | BM13 rule specification, layer 4a | DR-REG-15 |

**Derived properties:** DER-150 exits per sub-fire compartment · DER-151 walking distance · DER-152 corrected walking distance · DER-153 height difference within a compartment.

#### Layer 3 — Steps, functions and pseudocode

**Generic workflow:** `F19 → F20 → F00 → F13 → F29 → F24 → F36 → F33 → F35 → F32 → F42 → F45 → compare → F18`

| Step | What happens | Standard functions | Uses | Output / stops when |
| --- | --- | --- | --- | --- |
| 1 | Take the application and the model; run the IDS files of the check | F19, F20, F00 | M01–M10 | MUST missing → `INSUFFICIENT_DATA` |
| 2 | Determine the main use function; look up the art. 4.66 values via steering table 4.64 | F13, F29 | M03, M11 | limits |
| 3 | Determine the fire compartments, sub-fire compartments, use areas and residential spaces | F24 | M04, M05 | zones |
| 4 | Determine the exits of each sub-fire compartment | F36 | M05, M06, M09 | DER-150 |
| 5 | Build the escape network; per use area find the farthest point and its walking distance to the nearest exit | F33 (ESCAPE), F35 | M06, M08, M12 | DER-151 |
| 6 | Apply the correction factor (1.5, or 1 for an undivided use area and a residential space) and compare | F23 | M11, M12 | DER-152 |
| 7 | Measure the height difference between floors within each fire compartment; compare with the maximum (4 m) | F32 | M01, M05, M09 | DER-153 |
| 8 | For compartments and residential spaces for more than 150 persons: check at least 2 exits, at least 5 m apart | F42, F45 | M07, M10 | exits check |
| 9 | Report result and evidence | F18 | — | `RuleCheckResult` |

**Pseudocode** (notation: [section 3.3](#33-how-to-read-the-pseudocode-applies-to-every-rule); final status: [section 3.4](#34-standard-result-precedence)):

```
PROCEDURE CHECK_WALKING_DISTANCE(application):

    // Step 1 — Model and IDS check
    location   = GET_APPLICATION_LOCATION(application)                 // F19, for the report
    bim_model  = GET_SUBMITTED_BIM_MODEL(application)                  // F20
    IF bim_model is missing:
        RETURN INSUFFICIENT_DATA
    data_check = CHECK_MINIMUM_REQUIREMENTS(bim_model, "MR-R15")       // F00
    IF data_check.status = INSUFFICIENT_DATA:
        RETURN INSUFFICIENT_DATA WITH { data_check.failed }

    // Step 2 — Bbl lookup
    use_function   = main use function of GET_USE_FUNCTIONS(bim_model) // F13
    date           = application date
    max_distance   = GET_BBL_REQUIREMENT("4.64", use_function, "maximumWalkingDistance", date)   // F29
    max_floor_diff = GET_BBL_REQUIREMENT("4.64", use_function, "maximumFloorDifference", date)   // F29, 4 m
    exits_rule     = GET_BBL_REQUIREMENT("4.64", use_function, "twoExitsAbove", date)            // F29, 150 persons, 5 m

    // Step 3 — Zones
    compartments     = GET_ZONES(bim_model, "Brandcompartiment")       // F24
    sub_compartments = GET_ZONES(bim_model, "Subbrandcompartiment")    // F24
    areas            = GET_ZONES(bim_model, "Gebruiksgebied")
                       + GET_ZONES(bim_model, "Verblijfsruimte")       // F24

    network        = BUILD_ROUTE_NETWORK(bim_model, "ESCAPE")           // F33
    results        = empty list
    review_reasons = empty list

    // Steps 4–6 — Walking distance per area
    FOR EACH area IN areas:
        sub   = the sub-fire compartment that contains area
        exits = the doors of GET_ENCLOSING_ELEMENTS(sub) that lead out of sub   // F36, DER-150
        walk  = GET_MAX_WALKING_DISTANCE(area, exits, network)          // F35, DER-151
        factor = GET_PARAMETER("BM13-R15", "correctionFactor", area type)      // F23: 1.5 or 1
        corrected = walk.distance × factor                              // DER-152
        IF corrected <= max_distance.value:
            results ADD { area.GlobalId, COMPLIANT, corrected, max_distance, walk.farthestPoint }
        ELSE:
            results ADD { area.GlobalId, NON_COMPLIANT, corrected, max_distance, walk.farthestPoint }

    FOR EACH compartment IN compartments:

        // Step 7 — Floor height difference within the compartment
        floor_diff = the largest MEASURE_HEIGHT_DIFFERENCE(a, b)
                     FOR EACH pair of floors (a, b) in compartment      // F32, DER-153
        IF floor_diff > max_floor_diff.value:
            results ADD { compartment.GlobalId, NON_COMPLIANT, floor_diff, max_floor_diff }

        // Step 8 — Two exits for more than the threshold of persons
        persons = GET_OCCUPANCY(compartment)                            // F42
        IF persons is empty:
            review_reasons ADD { compartment.GlobalId, "occupancy unknown" }
        ELSE IF persons > exits_rule.persons:
            exits = the doors of GET_ENCLOSING_ELEMENTS(compartment) that lead out   // F36
            IF COUNT(exits) < 2
               OR the largest MEASURE_DISTANCE(e1, e2) FOR EACH pair of exits < exits_rule.distance:   // F45
                results ADD { compartment.GlobalId, NON_COMPLIANT, "too few or too close exits", exits }

    // Step 9 — Report result and evidence
    IF any result in results is NON_COMPLIANT:
        RETURN NON_COMPLIANT WITH { results, review_reasons, data_check.warnings }
    IF review_reasons is not empty:
        RETURN REVIEW_REQUIRED WITH { results, review_reasons, data_check.warnings }
    RETURN COMPLIANT WITH { results, data_check.warnings }
```

The same two-exit test also applies to a residential space for more than 150 persons; it is run in the same way on those spaces.

### BM13-R16 — Escape width (ILS check #16)

#### Layer 0 — Rule foundation / interpretation

> **Rule ID:** BM13-R16 (ILS check #16 *Vluchtbreedte*)
>
> **Check:** Two parts. **(a) Free passage:** do the escape routes have the required clear width and clear height, and is the floor area of residential areas that are reached via a stair within the limit? **(b) Flow capacity:** can the escape routes let through the number of persons that depend on them?
>
> **Legal source:** Bbl [§4.2](#4-generic-function-library).11: steering table 4.73, art. 4.78 (free passage) and art. 4.80 (flow capacity).
>
> **Definition:** (a) Every door, passage and stair on an escape route has at least the required clear width and clear height; residential areas that are reached via a stair stay within the floor-area limit. (b) Per escape route, the flow capacity calculated from its doors and stairs is at least the number of persons assigned to that route.
>
> **Interpretation questions:** How are persons assigned to routes when several routes exist? How are double doors and their opening angle treated — the opening angle is not a standard IFC property? Who checks: the municipality or the fire brigade (the inventory notes working agreements differ)?
>
> **Dependencies:** Escape routes (check #14), occupancy (check #15), doors, stairs, residential and bed areas.

This is the normative interpretation layer.

#### Layer 1 — Minimum requirements

What must be available before the check can run. MUST missing → `INSUFFICIENT_DATA`; SHOULD missing → note; MAY = context only ([section 3.4](#34-standard-result-precedence)). Together they form minimum set **MR-R16** ([Annex A.5](#a5-standard-minimum-requirement-sets)).

| Check | ILS objective | ILS milestone | Geometry needed (ILS) | ILS IDS files | Minimum set |
| --- | --- | --- | --- | --- | --- |
| #16 | ID02 (TBA) | M3 | yes (width) | 12 | MR-R16 = MR-CORE + M03–M12 |

| Req. | What must be available | Level | Why the check needs it |
| --- | --- | --- | --- |
| M01 | A valid IFC model of one building, with project data and named storeys (elevation, entrance level) | MUST | Routes run over storeys to the entrance level |
| M02 | Building elements with closed body geometry, each inside a storey; no proxy elements (SHOULD) | MUST | Clear dimensions are measured in the geometry |
| M03 | The use function zones | MUST | Selects the Bbl requirements |
| M04 | The residential areas | MUST | Start of each escape route; area limit via a stair |
| M05 | The escape routes as modelled | MUST | The routes that are measured |
| M06 | Stairs and ramps as own classes, with clear width | MUST | Stairs on the route |
| M07 | Doors with width, height and the fire-exit flag | MUST | Clear passage of every door on the route |
| M08 | Residential areas with occupancy, bed areas and bed spaces | SHOULD | Persons per route for the flow capacity |
| M09 | Slabs and walls as own classes | SHOULD | Route segments and their clear width |
| M10 | Second-level space boundaries | SHOULD | Connects spaces into the escape network |
| M11 | The Bbl requirements via steering table 4.73 (art. 4.78, 4.80) | MUST | Clear width, clear height, area limit, flow factors |
| M12 | The rule profile: persons per m² when occupancy is missing | MUST | The interpretation choices of Layer 0 |

#### Layer 2 — Mapping to IFC, ILS and GEO standards

| Req. | IFC entity / attribute / property set | ILS IDS (file no.) | BM13 supplement | GEO / regulation standard and source | DR ID |
| --- | --- | --- | --- | --- | --- |
| M01 | `IfcProject`; one `IfcBuilding`; `IfcBuildingStorey` Name, Elevation, `Pset_BuildingStoreyCommon.EntranceLevel` | 9 (01), 9.02 (07), 9.06a (13) | S07, S08 | IFC 4.3 / IFC4 ADD2 TC1 (ILS AC1, AC2) | ILS-9, 9.02, 9.06a |
| M02 | Building elements `Representation`; `IfcRelContainedInSpatialStructure` | — | S01, S02 | ILS [§6.2](#6-check-2--bm13-r02-maximum-building-height) G1, G4 (AC5) | BM13-S01, ILS-G1 |
| M03 | `IfcZone` `ObjectType` = *Gebruiksfunctie* | 9.08 (16) | — | bSDD *Omgevingswet-Ruimten*; Bbl use functions | ILS-9.08 |
| M04 | `IfcSpatialZone` *Verblijfsgebied* | 9.10b (19) | — | bSDD *Omgevingswet-Ruimten* | ILS-9.10b |
| M05 | `IfcZone` / `IfcSpatialZone` *Vluchtroute* | 9.16c (32) | — | bSDD *Omgevingswet-Ruimten* | ILS-9.16c |
| M06 | `IfcStair` / `IfcRamp` with flights; `Pset_StairFlightCommon`, `Pset_RampFlightCommon` (ClearWidth) | — | S09 | IFC 4.3 | BM13-S09 |
| M07 | `IfcDoor.OverallWidth`, `OverallHeight`; `Pset_DoorCommon.FireExit` | 9.18e (38) | S14 | IFC 4.3 | ILS-9.18e, BM13-S14 |
| M08 | `IfcSpatialZone` *Verblijfsgebied met bezettingsgraad*, *Bedgebied*; `IfcSpace` *Bedruimte* | 9.10c (20), 9.10e (22), 9.12c (27) | — | bSDD *Omgevingswet-Ruimten* | ILS-9.10c, 9.10e, 9.12c |
| M09 | `IfcSlab`, `IfcWall` | 9.18g (40), 9.18h (41) | — | IFC 4.3 | ILS-9.18g, 9.18h |
| M10 | `IfcRelSpaceBoundary` (second level) | — | S11 | IFC 4.3 | BM13-S11 |
| M11 | — | — | — | Bbl steering table 4.73, art. 4.78, 4.80 | DR-LAW-01 |
| M12 | — | — | — | BM13 rule specification, layer 4a | DR-REG-16 |

**Derived properties:** DER-160 escape routes · DER-161 clear dimensions · DER-162 floor area via stair · DER-163 persons per route · DER-164 flow capacity.

#### Layer 3 — Steps, functions and pseudocode

**Generic workflow:** `F19 → F20 → F00 → F13 → F29 → F24 → F33 → F34 → F31 → F25 → F42 → F44 → compare → F18`

| Step | What happens | Standard functions | Uses | Output / stops when |
| --- | --- | --- | --- | --- |
| 1 | Take the application and the model; run the IDS files of the check | F19, F20, F00 | M01–M10 | MUST missing → `INSUFFICIENT_DATA` |
| 2 | Determine the main use function; look up the requirements via steering table 4.73 | F13, F29 | M03, M11 | clear width, clear height, area limit, flow factors |
| 3 | Determine the escape routes, residential areas and bed areas | F24, F33 (ESCAPE), F34 | M04, M05, M08, M10 | DER-160 |
| 4 | Measure the clear width and clear height of every door, passage and stair on each route | F31 | M06, M07, M09 | DER-161 |
| 5 | For residential areas reached via a stair: calculate their floor area and compare with the limit | F25 | M04, M06 | DER-162 |
| 6 | Determine the number of persons that depend on each route | F42 | M08, M12 | DER-163 |
| 7 | Calculate the flow capacity of each route and compare with its persons | F44 | M11 | DER-164 |
| 8 | Report result and evidence | F18 | — | `RuleCheckResult` |

**Pseudocode** (notation: [section 3.3](#33-how-to-read-the-pseudocode-applies-to-every-rule); final status: [section 3.4](#34-standard-result-precedence)):

```
PROCEDURE CHECK_ESCAPE_WIDTH(application):

    // Step 1 — Model and IDS check
    location   = GET_APPLICATION_LOCATION(application)                 // F19, for the report
    bim_model  = GET_SUBMITTED_BIM_MODEL(application)                  // F20
    IF bim_model is missing:
        RETURN INSUFFICIENT_DATA
    data_check = CHECK_MINIMUM_REQUIREMENTS(bim_model, "MR-R16")       // F00
    IF data_check.status = INSUFFICIENT_DATA:
        RETURN INSUFFICIENT_DATA WITH { data_check.failed }

    // Step 2 — Bbl lookup
    use_function = main use function of GET_USE_FUNCTIONS(bim_model)  // F13
    date         = application date
    min_width    = GET_BBL_REQUIREMENT("4.73", use_function, "escapeClearWidth", date)    // F29
    min_height   = GET_BBL_REQUIREMENT("4.73", use_function, "escapeClearHeight", date)   // F29
    area_limit   = GET_BBL_REQUIREMENT("4.73", use_function, "areaViaStair", date)        // F29

    // Step 3 — Escape routes from every residential and bed area
    areas   = GET_ZONES(bim_model, "Verblijfsgebied") + GET_ZONES(bim_model, "Bedgebied")   // F24
    network = BUILD_ROUTE_NETWORK(bim_model, "ESCAPE")                  // F33
    safe_places = the places named by GET_PARAMETER("BM13-R14", "safePlaces")   // F23, same as check #14
    routes  = for each area, the shortest FIND_ROUTE(network, area, place)
              over all safe_places                                      // F34, DER-160

    results        = empty list
    review_reasons = empty list

    // Step 4 — Free passage on every route
    FOR EACH passage IN the doors, passages and stairs of all routes:
        size = MEASURE_CLEAR_DIMENSIONS(passage)                       // F31, DER-161
        IF size.clearWidth < min_width.value OR size.clearHeight < min_height.value:
            results ADD { passage.GlobalId, NON_COMPLIANT, size, min_width, min_height }

    // Step 5 — Floor area of residential areas reached via a stair
    IF area_limit is not NOT_APPLICABLE:
        FOR EACH area IN areas whose route contains a stair:
            floor = CALCULATE_AREA(area, "NEN2580_GO")                 // F25, DER-162
            IF floor.value > area_limit.value:
                results ADD { area.GlobalId, NON_COMPLIANT, floor.value, area_limit }

    // Steps 6 and 7 — Flow capacity per route
    FOR EACH route IN the distinct routes:
        persons = SUM OF GET_OCCUPANCY(area)                            // F42, DER-163
                  FOR EACH area assigned to route
                  (assignment rule: GET_PARAMETER("BM13-R16", "personAssignment"))   // F23
        IF persons is empty:
            review_reasons ADD { route, "occupancy unknown" }
            CONTINUE
        capacity = CALCULATE_FLOW_CAPACITY(route)                      // F44, DER-164
        IF capacity.status = REVIEW_REQUIRED:                          // e.g. double-door opening angle unknown
            review_reasons ADD { route, capacity.reason }
        ELSE IF capacity.persons < persons:
            results ADD { route, NON_COMPLIANT, capacity.persons, persons }
        ELSE:
            results ADD { route, COMPLIANT, capacity.persons, persons }

    // Step 8 — Report result and evidence
    IF any result in results is NON_COMPLIANT:
        RETURN NON_COMPLIANT WITH { results, review_reasons, data_check.warnings }
    IF review_reasons is not empty:
        RETURN REVIEW_REQUIRED WITH { results, review_reasons, data_check.warnings }
    RETURN COMPLIANT WITH { results, data_check.warnings }
```

### BM13-R17 — Daylight (ILS check #17)

#### Layer 0 — Rule foundation / interpretation

> **Rule ID:** BM13-R17 (ILS check #17 *Daglicht*)
>
> **Check:** Can enough daylight enter the building: does every residential area and residential space have at least the required equivalent daylight area?
>
> **Legal source:** Bbl [§4.3](#4-generic-function-library).10: steering table 4.146, art. 4.147. NEN 2057 for the daylight opening, the obstruction angle, the floor area and the equivalent daylight area.
>
> **Definition:** For every residential area (*verblijfsgebied*) and residential space (*verblijfsruimte*), the equivalent daylight area of its daylight openings, reduced for obstruction by what stands in front of them, is at least what art. 4.147 requires for the use function (a minimum per space and a minimum share of the floor area). Obstruction is measured towards the surroundings, and towards the parcel boundary or the centre line of an adjoining road, water or public green (mirror principle).
>
> **Interpretation questions:** Which surroundings count as obstruction (existing buildings only, or also what the plan allows)? Are glazed doors daylight openings? How are overhangs and balconies above the opening treated?
>
> **Dependencies:** Main use function, residential areas and spaces, external walls with windows and doors, the parcel boundary, adjoining public space, surrounding buildings.
>
> **Automation level:** partial — the NEN 2057 calculation (F40) is complex; results the function cannot determine go to review.

This is the normative interpretation layer.

#### Layer 1 — Minimum requirements

What must be available before the check can run. MUST missing → `INSUFFICIENT_DATA`; SHOULD missing → note; MAY = context only ([section 3.4](#34-standard-result-precedence)). Together they form minimum set **MR-R17** ([Annex A.5](#a5-standard-minimum-requirement-sets)).

| Check | ILS objective | ILS milestone | Geometry needed (ILS) | ILS IDS files | Minimum set |
| --- | --- | --- | --- | --- | --- |
| #17 | ID02 (TBA) | M3 | yes (area) | 15 | MR-R17 = MR-BASE + M04–M14 |

| Req. | What must be available | Level | Why the check needs it |
| --- | --- | --- | --- |
| M01 | A valid IFC model of one building, with project data and named storeys (elevation, entrance level) | MUST | Every step reads the model and its storeys |
| M02 | Building elements with closed body geometry, each inside a storey; no proxy elements (SHOULD) | MUST | Openings and obstructions are geometric |
| M03 | Georeferencing to RD New / NAP with the right scale, model placed at the application location | MUST | The surroundings are map data |
| M04 | The use function zones | MUST | Selects the Bbl requirements |
| M05 | Residential areas and residential spaces | MUST | The spaces that need daylight |
| M06 | Windows with width, height and the "is external" flag | MUST | Daylight openings |
| M07 | The cadastral parcel of the plot | MUST | Mirror line at the parcel boundary |
| M08 | Curtain walls, doors and walls as own classes | SHOULD | Glazed doors and facades also let in daylight |
| M09 | Building, parcel, building plot in the model | SHOULD | Cross-check of the location |
| M10 | Quantities, areas following NEN 2580 | SHOULD | Cross-check of the floor area |
| M11 | Existing buildings (with heights) and public space around the plot | SHOULD | Obstructions and centre lines of road, water, green |
| M12 | Second-level space boundaries | SHOULD | Which opening belongs to which space |
| M13 | The Bbl requirements via steering table 4.146 (art. 4.147) and NEN 2057 | MUST | Minimum equivalent daylight area per space and share of floor area |
| M14 | The rule profile: which openings count, obstruction angle method | MUST | The interpretation choices of Layer 0 |

#### Layer 2 — Mapping to IFC, ILS and GEO standards

| Req. | IFC entity / attribute / property set | ILS IDS (file no.) | BM13 supplement | GEO / regulation standard and source | DR ID |
| --- | --- | --- | --- | --- | --- |
| M01 | `IfcProject`; one `IfcBuilding`; `IfcBuildingStorey` Name, Elevation, `Pset_BuildingStoreyCommon.EntranceLevel` | 9 (01), 9.02 (07) | S07, S08 | IFC 4.3 / IFC4 ADD2 TC1 (ILS AC1, AC2) | ILS-9, 9.02 |
| M02 | Building elements `Representation`; `IfcRelContainedInSpatialStructure` | — | S01, S02 | ILS [§6.2](#6-check-2--bm13-r02-maximum-building-height) G1, G4 (AC5) | BM13-S01, ILS-G1 |
| M03 | `IfcMapConversion` (incl. `OrthogonalHeight`), `IfcProjectedCRS` | 9.01a (02), 9.01b (03) | — | EPSG:28992 / EPSG:7415 (NAP); ILS AC4 | ILS-9.01a, 9.01b, ILS-G2 |
| M04 | `IfcZone` `ObjectType` = *Gebruiksfunctie* | 9.08 (16) | — | bSDD *Omgevingswet-Ruimten*; Bbl use functions | ILS-9.08 |
| M05 | `IfcSpatialZone` *Verblijfsgebied*; `IfcSpace` *Verblijfsruimte* | 9.10b (19), 9.12b (26) | — | bSDD *Omgevingswet-Ruimten*; NEN 2057 | ILS-9.10b, 9.12b |
| M06 | `IfcWindow.OverallWidth`, `OverallHeight`; `Pset_WindowCommon.IsExternal`; `GlazingAreaFraction` | 9.18i (42) | S15 | NEN 2057 | ILS-9.18i, BM13-S15 |
| M07 | — | — | — | BRK parcels via PDOK; RD New | DR-GEO-02 |
| M08 | `IfcCurtainWall`, `IfcDoor`, `IfcWall` | 9.18d (37), 9.18e (38), 9.18h (41) | — | IFC 4.3 | ILS-9.18d, e, h |
| M09 | `IfcBuilding`; `IfcSpatialZone` *Perceel*, *Bouwwerkperceel*, *Kadastraal perceel* | 9.05a (11), 9.03a (08), 9.03b (09), 9.04 (10) | — | BRK (cross-check) | ILS-9.05a, 9.03a, 9.03b, 9.04 |
| M10 | `Qto_…BaseQuantities` | — | — | NEN 2580; ILS [§6.2](#6-check-2--bm13-r02-maximum-building-height) G5, G6 | ILS-G5, ILS-G6 |
| M11 | — | — | — | BAG via PDOK; BGT road, water, green; 3D BAG heights | DR-GEO-06, DR-GEO-07, DR-GEO-08 |
| M12 | `IfcRelSpaceBoundary` (second level) | — | S11 | IFC 4.3 | BM13-S11 |
| M13 | — | — | — | Bbl steering table 4.146, art. 4.147; NEN 2057 | DR-LAW-01 |
| M14 | — | — | — | BM13 rule specification, layer 4a | DR-REG-17 |

**Derived properties:** DER-170 daylight openings · DER-171 obstructions · DER-172 floor area (NEN 2057) · DER-173 equivalent daylight area.

#### Layer 3 — Steps, functions and pseudocode

**Generic workflow:** `F19 → F20 → F00 → F01 → F21 → F13 → F29 → F24 → F36 → F22 → F05 → F38 → F25 → F40 → compare → F18`

| Step | What happens | Standard functions | Uses | Output / stops when |
| --- | --- | --- | --- | --- |
| 1 | Take the application and the model; run the IDS files of the check | F19, F20, F00 | M01–M06, M08–M10, M12 | MUST missing → `INSUFFICIENT_DATA` |
| 2 | Read and validate the georeferencing | F01, F21 | M03 | failed → `INSUFFICIENT_DATA` |
| 3 | Determine the main use function; look up the daylight requirements via steering table 4.146 | F13, F29 | M04, M13 | minimum per space, minimum share of floor area |
| 4 | Determine the residential areas and residential spaces | F24 | M05 | zones |
| 5 | Determine their external walls and the daylight openings (windows, glazed doors) in them | F36 | M06, M08, M12 | DER-170 |
| 6 | Determine the surroundings: buildings around, and the mirrored parcel boundary or road / water / green centre line | F22, F05, F38 | M07, M11, M14 | DER-171 |
| 7 | Calculate the floor area (NEN 2057) and the equivalent daylight area of each space | F25 (NEN2057\_FLOOR), F40 | M05, M06, M10 | DER-172, DER-173 |
| 8 | Compare per space and per residential area with the requirements | — | M13 | status per space |
| 9 | Report result and evidence | F18 | — | `RuleCheckResult` |

**Pseudocode** (notation: [section 3.3](#33-how-to-read-the-pseudocode-applies-to-every-rule); final status: [section 3.4](#34-standard-result-precedence)):

```
PROCEDURE CHECK_DAYLIGHT(application):

    // Step 1 — Model and IDS check
    location   = GET_APPLICATION_LOCATION(application)                 // F19
    bim_model  = GET_SUBMITTED_BIM_MODEL(application)                  // F20
    IF bim_model is missing:
        RETURN INSUFFICIENT_DATA
    data_check = CHECK_MINIMUM_REQUIREMENTS(bim_model, "MR-R17")       // F00
    IF data_check.status = INSUFFICIENT_DATA:
        RETURN INSUFFICIENT_DATA WITH { data_check.failed }

    // Step 2 — Georeferencing
    georeference = GET_BIM_GEOREFERENCE(bim_model)                     // F01
    IF georeference is missing
       OR VALIDATE_GEOREFERENCE(bim_model, georeference, location).status = INSUFFICIENT_DATA:   // F21
        RETURN INSUFFICIENT_DATA

    // Step 3 — Bbl lookup
    use_function = main use function of GET_USE_FUNCTIONS(bim_model)  // F13
    date         = application date
    min_per_space = GET_BBL_REQUIREMENT("4.146", use_function, "daylightPerSpace", date)   // F29, m²
    min_share     = GET_BBL_REQUIREMENT("4.146", use_function, "daylightShare", date)      // F29, % of floor area
    IF min_per_space = NOT_APPLICABLE AND min_share = NOT_APPLICABLE:
        RETURN NOT_APPLICABLE

    // Step 6 — Surroundings
    building     = GET_BUILDING_GEOMETRY(bim_model, georeference)      // F22
    neighbours   = GET_PDOK_FEATURES("Buildings", location)            // F05, with 3D BAG heights
    mirrored     = MIRROR_AT_BOUNDARY(building, parcel boundary or centre line)   // F38
    surroundings = neighbours + mirrored                               // DER-171

    results        = empty list
    review_reasons = empty list

    // Steps 4, 5 and 7 — Per residential space
    FOR EACH space IN GET_ZONES(bim_model, "Verblijfsruimte"):         // F24
        openings = the windows and glazed doors of GET_ENCLOSING_ELEMENTS(space)
                   whose other side is outside air                     // F36, DER-170
        daylight = CALCULATE_EQUIVALENT_DAYLIGHT_AREA(space, openings, surroundings)   // F40, DER-173
        IF daylight.status = REVIEW_REQUIRED:
            review_reasons ADD { space.GlobalId, daylight.reason }
            CONTINUE
        IF daylight.value < min_per_space.value:
            results ADD { space.GlobalId, NON_COMPLIANT, daylight.value, min_per_space }
        ELSE:
            results ADD { space.GlobalId, COMPLIANT, daylight.value, min_per_space }
        space.daylight = daylight.value

    // Step 8 — Per residential area: share of the floor area
    FOR EACH area IN GET_ZONES(bim_model, "Verblijfsgebied"):          // F24
        floor = CALCULATE_AREA(area, "NEN2057_FLOOR")                  // F25, DER-172
        total = SUM OF space.daylight FOR EACH space in area
        IF total < floor.value × min_share.value / 100:
            results ADD { area.GlobalId, NON_COMPLIANT, total, floor.value, min_share }
        ELSE:
            results ADD { area.GlobalId, COMPLIANT, total, floor.value, min_share }

    // Step 9 — Report result and evidence
    IF any result in results is NON_COMPLIANT:
        RETURN NON_COMPLIANT WITH { results, review_reasons, data_check.warnings }
    IF review_reasons is not empty:
        RETURN REVIEW_REQUIRED WITH { results, review_reasons, data_check.warnings }
    RETURN COMPLIANT WITH { results, data_check.warnings }
```

## 7. Conformance test cases

A vendor implementation is conformant when it returns the **expected status** and the **expected evidence** for every case below. VNG provides one IFC file and one frozen snapshot of the GEO/regulatory data per case, so results do not change when DSO or AHN are updated.

**Coverage:** the cases below cover the pre-flight and all 17 checks (7.2–7.18). Each case comes with one IFC file and one frozen GEO and Bbl snapshot. The IFC files for checks #3–#17 are still to be built.

### 7.1 Pre-flight (all rules)

| Case | Input | Expected |
| --- | --- | --- |
| PF-01 | Valid model, `IfcMapConversion` E 84112.80 / N 431810.28 | Pre-flight passes |
| PF-02 | No `IfcMapConversion` | All rules `INSUFFICIENT_DATA` |
| PF-03 | Model already in RD coordinates *and* a map conversion (double offset) | F03 fails → `INSUFFICIENT_DATA`, elements listed |
| PF-04 | Model exported in mm, read as m (extent \~34 000 m) | F04 fails → `INSUFFICIENT_DATA` |

### 7.2 BM13-R01 Bestemming

| Case | Situation | Expected status | Expected evidence |
| --- | --- | --- | --- |
| R01-01 | Building fully inside one *Wonen* area | `COMPLIANT` | Area id used |
| R01-02 | Building spans two adjacent *Wonen* areas | `COMPLIANT` | Both area ids (tests the union) |
| R01-03 | Façade wall exactly on the *Wonen* boundary (within 0.01 m) | `COMPLIANT` | Relation `COVERED_BY` |
| R01-04 | Balcony projects 1.2 m over a *Tuin* area | `NON_COMPLIANT` | Balcony `GlobalId`, relation `OVERLAPS`, area outside ≈ 1.2 m × width |
| R01-05 | Whole building on a *Verkeer* area | `NON_COMPLIANT` | All elements `DISJOINT`, or "no Wonen area" |
| R01-06 | `IfcSpace` objects extend beyond the boundary, walls do not | `COMPLIANT` | Spaces are ignored (profile F10) |
| R01-07 | No Gebruiksfunctie zone in the model (DR ILS-9.08 fails) | `INSUFFICIENT_DATA` | "No intended use" |
| R01-08 | Intended use is *kantoorfunctie* | `NOT_APPLICABLE` for R01 (a separate office-designation rule applies) | — |
| R01-09 | DSO service not reachable | `INSUFFICIENT_DATA` | "DSO not reachable" — never `COMPLIANT` |

### 7.3 BM13-R02 Maximum building height

| Case | Situation | Expected status | Expected values |
| --- | --- | --- | --- |
| R02-01 | Highest point 13.80 m NAP, peil 1.84, max 12.00 | `COMPLIANT` | 11.96 m ≤ 12.05 m |
| R02-02 | Highest point 14.21 m NAP, peil 1.84, max 12.00 | `NON_COMPLIANT` | 12.37 m > 12.05 m; roof element named |
| R02-03 | Height exactly 12.05 m | `COMPLIANT` | Boundary value is inclusive |
| R02-04 | Chimney 1.0 m above roof, exempt up to 1.5 m | Status of the rest of the building | Chimney ignored |
| R02-05 | Lift overrun 2.3 m above roof, exempt up to 1.5 m | Evaluated **with** the overrun | Overrun counts |
| R02-06 | Building in a 9 m area and a 12 m area; part in 9 m area is 10.2 m | `NON_COMPLIANT` | Per-area results; 9 m area fails |
| R02-07 | No height rule at the location | `NOT_APPLICABLE` | — |
| R02-08 | `OrthogonalHeight` missing | `INSUFFICIENT_DATA` | "No height reference" |
| R02-09 | Zone uses reference-level method 1 (average road elevation); no road elevation data available | `INSUFFICIENT_DATA` | "No road elevation" |
| R02-10 | Roof modelled as unclassified `IfcBuildingElementProxy` | `REVIEW_REQUIRED` (proxy is still included in the height) | Proxy `GlobalId` |

**How to read the cases for checks #3–#17.** Plan values (percentages, storeys, shares, reference-level method) are written into the test zones and quoted as numbers. Bbl values are **not** repeated here: they come from the frozen Bbl snapshot through F29 and are written *limit*. "*limit* − 0.05 m" means 0.05 m below the value in the snapshot. That way the cases stay valid when the Bbl table (DR-LAW-01) is updated. Boundary values are always inclusive ([section 3.4](#34-standard-result-precedence)).

### 7.4 BM13-R03 Maximum building coverage %

| Case | Situation | Expected status | Expected evidence |
| --- | --- | --- | --- |
| R03-01 | Parcel 500 m²; new footprint 150 m²; no existing buildings; zone maximumCoverage 40 %, referenceArea `PARCEL` | COMPLIANT | 30 % ≤ 40 %; parcel id |
| R03-02 | As R03-01, plus an existing shed of 60 m² that remains | NON\_COMPLIANT | 42 % > 40 %; shed BAG id |
| R03-03 | As R03-02, shed listed as to be demolished in the application | COMPLIANT | 30 %; shed excluded (DR-APP-01) |
| R03-04 | Coverage exactly 40.00 % | COMPLIANT | Boundary value is inclusive |
| R03-05 | referenceArea `BUILDING_PLANE`; *bouwvlak* 200 m²; footprint 180 m²; maximumCoverage 80 % | NON\_COMPLIANT | 90 % > 80 %; *bouwvlak* id |
| R03-06 | Balcony overhang of 8 m²; profile says overhangs do not count | Status of the rest of the building | Balcony GlobalId, excluded (F10) |
| R03-07 | Building in no coverage zone | NOT\_APPLICABLE | — |
| R03-08 | referenceArea `PARCEL`; BRK service not reachable | INSUFFICIENT\_DATA | "BRK not reachable" — never COMPLIANT |
| R03-09 | Recalculated footprint differs from the reported quantity beyond the ILS AC6 threshold | REVIEW\_REQUIRED | Both areas |

### 7.5 BM13-R04 Use limited to storeys

| Case | Situation | Expected status | Expected evidence |
| --- | --- | --- | --- |
| R04-01 | Zone: *Detailhandel* only on the ground floor; shop zone on storey `00` | COMPLIANT | Zone id; storey `00` |
| R04-02 | As R04-01, shop zone also on storey `01` | NON\_COMPLIANT | Storey `01`, shop zone GlobalId |
| R04-03 | Dwellings above the shop; the restriction applies only to the shop | COMPLIANT | Dwellings not evaluated |
| R04-04 | Application location lies in two zones with different restrictions | REVIEW\_REQUIRED | Both zone ids |
| R04-05 | Location in no zone with a storey restriction | NOT\_APPLICABLE | — |
| R04-06 | *Gebruiksfunctie* zone not linked to any storey | INSUFFICIENT\_DATA | "Use function without storey" |
| R04-07 | Mezzanine modelled as its own storey; profile: a mezzanine is not a storey | Evaluated with the storey below | Numbering and its reason |

### 7.6 BM13-R05 Home business (*beroep aan huis*)

| Case | Situation | Expected status | Expected evidence |
| --- | --- | --- | --- |
| R05-01 | Dwelling GO 120 m², business part 30 m²; maximumShare 30 %, maximumArea 40 m²; allowed SBI code | COMPLIANT | 25 %; 30 m² |
| R05-02 | As R05-01, business part 45 m² | NON\_COMPLIANT | 37.5 % > 30 % |
| R05-03 | Dwelling GO 200 m², business part 50 m² | NON\_COMPLIANT | 25 % ≤ 30 %, but 50 m² > 40 m² |
| R05-04 | SBI code not on the allowed list | NON\_COMPLIANT | SBI code |
| R05-05 | No SBI code, only a free-text activity | REVIEW\_REQUIRED | Activity text |
| R05-06 | Unnamed *Restruimte* of 12 m² next to the business part | Status of the share, plus a note | Space GlobalId flagged |
| R05-07 | No *Nevengebruiksfunctie* zone in the model | INSUFFICIENT\_DATA | "No business part" |
| R05-08 | Location in no home-business zone | NOT\_APPLICABLE | — |

### 7.7 BM13-R06 Maximum number of storeys

| Case | Situation | Expected status | Expected evidence |
| --- | --- | --- | --- |
| R06-01 | maximumStoreys 3; method 2 (design elevation); storeys `00`, `01`, `02` | COMPLIANT | 3 ≤ 3 |
| R06-02 | As R06-01, plus storey `03` | NON\_COMPLIANT | 4 > 3; storey `03` |
| R06-03 | Basement fully below the reference level | COMPLIANT | Basement not counted, with reason |
| R06-04 | Basement ceiling 1.50 m above the reference level; profile counts a storey from 1.20 m | NON\_COMPLIANT (4 > 3) | Basement counted, with reason |
| R06-05 | Method 1 (average road elevation); no road elevation data | INSUFFICIENT\_DATA | "No road elevation" |
| R06-06 | Method 1; model not georeferenced | INSUFFICIENT\_DATA | "No georeferencing" |
| R06-07 | Attic under a pitched roof; profile counts an attic as a storey | Evaluated with the attic | Attic counted, with reason |
| R06-08 | Location in no zone with maximumStoreys | NOT\_APPLICABLE | — |

### 7.8 BM13-R07 Fire compartment size and WBDBO

| Case | Situation | Expected status | Expected evidence |
| --- | --- | --- | --- |
| R07-01 | One compartment; GO below *limit*; WBDBO to the mirrored building ≥ *limit* | COMPLIANT | GO, WBDBO minutes |
| R07-02 | Compartment GO above *limit* | NON\_COMPLIANT | Compartment GlobalId, GO |
| R07-03 | Part of a use-function area lies in no compartment | NON\_COMPLIANT | DER-70 area (m²) |
| R07-04 | WBDBO between two compartments below *limit* | NON\_COMPLIANT | Both compartment ids, minutes |
| R07-05 | Façade 2 m from the parcel boundary; WBDBO to the mirrored building below *limit* | NON\_COMPLIANT | Mirror line, minutes |
| R07-06 | Plot borders a road | Mirror at the road centre line | BGT feature id |
| R07-07 | Applicant claims an equivalent solution | REVIEW\_REQUIRED | Document reference |
| R07-08 | Model not georeferenced | INSUFFICIENT\_DATA | "No georeferencing" |
| R07-09 | No *Brandcompartiment* in the model | INSUFFICIENT\_DATA | "No fire compartments" |

### 7.9 BM13-R08 Fire resistance of separations

| Case | Situation | Expected status | Expected evidence |
| --- | --- | --- | --- |
| R08-01 | All enclosing elements rated ≥ *limit* with the required criteria | COMPLIANT | Rating per element |
| R08-02 | One compartment door rated 30 minutes below *limit* | NON\_COMPLIANT | Door GlobalId, rating |
| R08-03 | FireRating written as "60 min" (not EN 13501-2 notation) | REVIEW\_REQUIRED | Element GlobalId, raw value |
| R08-04 | FireRating missing on a compartment wall | INSUFFICIENT\_DATA | BM13-S13a failed |
| R08-05 | Load-bearing column needs criterion R but is rated EI | NON\_COMPLIANT | Missing criterion R |
| R08-06 | Small adjoining building, exempt in the rule profile | NOT\_APPLICABLE | Exemption reason |
| R08-07 | No second-level space boundaries | INSUFFICIENT\_DATA | BM13-S11 failed |

### 7.10 BM13-R09 Accessibility: clear width, height and lift

| Case | Situation | Expected status | Expected evidence |
| --- | --- | --- | --- |
| R09-01 | Every door and passage on the route ≥ *limit* | COMPLIANT | Narrowest passage |
| R09-02 | Bathroom door *limit* − 0.05 m | NON\_COMPLIANT | Door GlobalId, clear width |
| R09-03 | Door clear width exactly *limit* | COMPLIANT | Boundary value is inclusive |
| R09-04 | Storage space not reachable (no door) | NON\_COMPLIANT | "No route" to the space |
| R09-05 | Lift required; cabin smaller than *limit* | NON\_COMPLIANT | Lift GlobalId, size |
| R09-06 | No lift, and the use function does not require one | COMPLIANT | — |
| R09-07 | A door on the route without `OverallWidth` | INSUFFICIENT\_DATA | BM13-S14 failed |

### 7.11 BM13-R10 Height differences, stairs and ramps

| Case | Situation | Expected status | Expected evidence |
| --- | --- | --- | --- |
| R10-01 | Floor–terrain difference below *limit*; stairs and ramps within *limits* | COMPLIANT | Differences per route |
| R10-02 | Floor–terrain difference above *limit*; no ramp or stair at the access | NON\_COMPLIANT | Access, difference (m) |
| R10-03 | Stair riser height above *limit* | NON\_COMPLIANT | Stair GlobalId, riser |
| R10-04 | Ramp slope above *limit* | NON\_COMPLIANT | Ramp GlobalId, slope |
| R10-05 | Stair without `Pset_StairFlightCommon` values | INSUFFICIENT\_DATA | BM13-S09a failed |
| R10-06 | No terrain elevation data | INSUFFICIENT\_DATA | "No terrain elevation" |
| R10-07 | Lift on the route instead of a ramp | Evaluated with the lift | Lift GlobalId |

### 7.12 BM13-R11 Thermal resistance (Rc)

| Case | Situation | Expected status | Expected evidence |
| --- | --- | --- | --- |
| R11-01 | Every external wall, roof and floor has a U-value that derives to Rc ≥ *limit* | COMPLIANT | Rc per element (indicative) |
| R11-02 | Roof U-value derives to Rc below *limit*; no BENG calculation | NON\_COMPLIANT | Roof GlobalId, derived Rc |
| R11-03 | As R11-02, but the BENG / NTA 8800 calculation gives Rc ≥ *limit* | COMPLIANT, plus a note | Calculation leading; mismatch noted |
| R11-04 | Wall between a residential area and an unheated storage | Compared with the *limit* for that adjacency | Adjacency from space boundaries |
| R11-05 | `ThermalTransmittance` missing on an external wall | INSUFFICIENT\_DATA | BM13-S12 failed |

### 7.13 BM13-R12 U-value of windows, doors and frames

| Case | Situation | Expected status | Expected evidence |
| --- | --- | --- | --- |
| R12-01 | Every opening ≤ maximum *limit*; area-weighted average ≤ average *limit* | COMPLIANT | Average U |
| R12-02 | One window above the maximum *limit* | NON\_COMPLIANT | Window GlobalId, U |
| R12-03 | Each opening ≤ maximum, but the weighted average above the average *limit* | NON\_COMPLIANT | Average U, areas |
| R12-04 | Window in an internal wall | Not evaluated | Window excluded (not external) |
| R12-05 | Door in the façade without `ThermalTransmittance` | INSUFFICIENT\_DATA | BM13-S12 failed |
| R12-06 | BENG calculation gives other U-values than the model | Calculation leading, plus a note | Both values |

### 7.14 BM13-R13 Environmental performance (MPG)

| Case | Situation | Expected status | Expected evidence |
| --- | --- | --- | --- |
| R13-01 | Residential building; score ≤ *limit*; areas in the calculation match the model | COMPLIANT | Score, *limit* |
| R13-02 | Score above *limit* | NON\_COMPLIANT | Score, *limit* |
| R13-03 | Offices and dwellings combined | Compared with the weighted *limit* (art. 4.158 member 4) | GO per use function, weighted limit |
| R13-04 | No MPG calculation supplied | INSUFFICIENT\_DATA | DR-DOC-01 missing |
| R13-05 | GO in the calculation differs from the model beyond the profile tolerance | REVIEW\_REQUIRED | Both areas |
| R13-06 | Use function without an MPG requirement | NOT\_APPLICABLE | — |

### 7.15 BM13-R14 Escape routes

| Case | Situation | Expected status | Expected evidence |
| --- | --- | --- | --- |
| R14-01 | Every space has a route to a safe place that meets art. 4.65 | COMPLIANT | Route per space |
| R14-02 | Bedroom reachable for escape only through a window | NON\_COMPLIANT | Space GlobalId; windows are not in the network |
| R14-03 | Only escape route runs through a lift | NON\_COMPLIANT | Lifts are not in the network |
| R14-04 | Route passes through another use unit where the conditions do not allow it | NON\_COMPLIANT | Condition of art. 4.65 that fails |
| R14-05 | No *Vluchtroute* zone in the model | INSUFFICIENT\_DATA | ILS-9.16c failed |
| R14-06 | No second-level space boundaries | INSUFFICIENT\_DATA | BM13-S11 failed |

### 7.16 BM13-R15 Walking distance and exits

| Case | Situation | Expected status | Expected evidence |
| --- | --- | --- | --- |
| R15-01 | Corrected walking distance of every use area ≤ *limit* | COMPLIANT | Farthest point, distance |
| R15-02 | Farthest point 1 m beyond *limit* | NON\_COMPLIANT | Point coordinates, distance |
| R15-03 | Undivided use area with a residential space | Factor 1 applied, not 1.5 | Factor used |
| R15-04 | Height difference between floors in one compartment 4.20 m | NON\_COMPLIANT | 4.20 m > 4 m |
| R15-05 | Compartment for 180 persons with one exit | NON\_COMPLIANT | Persons, number of exits |
| R15-06 | As R15-05 with two exits 4 m apart | NON\_COMPLIANT | 4 m < 5 m |
| R15-07 | No occupancy in the model | Distances evaluated; exit count skipped with a note | "No occupancy" |
| R15-08 | No *Subbrandcompartiment* in the model | INSUFFICIENT\_DATA | ILS-9.16b failed |

### 7.17 BM13-R16 Escape route dimensions and flow capacity

| Case | Situation | Expected status | Expected evidence |
| --- | --- | --- | --- |
| R16-01 | Every door, passage and stair on the escape routes ≥ *limit*; flow capacity ≥ persons | COMPLIANT | Narrowest element, capacity |
| R16-02 | Escape door *limit* − 0.05 m | NON\_COMPLIANT | Door GlobalId, clear width |
| R16-03 | Residential area reached via a stair above the area *limit* | NON\_COMPLIANT | Area (m²) |
| R16-04 | Persons depending on a route exceed its flow capacity | NON\_COMPLIANT | Persons, capacity |
| R16-05 | No occupancy in the model | Persons from the profile default, plus a note | Default used |
| R16-06 | Escape door without `OverallWidth` | INSUFFICIENT\_DATA | BM13-S14 failed |

### 7.18 BM13-R17 Daylight

| Case | Situation | Expected status | Expected evidence |
| --- | --- | --- | --- |
| R17-01 | Every residential space and area has equivalent daylight area ≥ *limit* | COMPLIANT | Area per space |
| R17-02 | One residential space below *limit* | NON\_COMPLIANT | Space GlobalId, area |
| R17-03 | Window facing an existing building 5 m away | Obstruction applied | BAG id, obstruction angle |
| R17-04 | Window facing the parcel boundary 2 m away | Obstruction by the mirrored boundary | Mirror line |
| R17-05 | Window without `IsExternal` | INSUFFICIENT\_DATA | BM13-S15 failed |
| R17-06 | Model not georeferenced | INSUFFICIENT\_DATA | "No georeferencing" |
| R17-07 | 3D BAG heights not available | REVIEW\_REQUIRED | "No neighbour heights" |

## 8. Review notes on the source PDF (for rule owners)

The PDF is a strong proof of concept. Before it is sent to vendors as a reference, these points should be fixed so vendors do not copy the errors.

| # | Where | Issue | Proposed fix |
| --- | --- | --- | --- |
| 1 | [§2.2](#22-step-1--make-the-model-content-queryable) | Title says *getAABBox*, the query binds `ext:aabb` but writes `geom:projectionBase64Data` (copied from [§2.11](#2-processing-pipeline-and-data-applies-to-every-check)) | Write `geom:bboxMinX` … `geom:bboxMaxZ`; filter on those |
| 2 | [§2.3](#23-step-2--load-into-a-data-store), [§2.4](#24-step-3--pre-flight-validation-always-run-before-any-rule) | Thresholds (±100 m, 1–100 m) are hard-coded | Make them rule parameters (F03, F04) |
| 3 | [§2.3](#23-step-2--load-into-a-data-store) | X/Y are offset by eastings/northings but Z is not offset by `OrthogonalHeight` | Treat Z consistently (local or NAP) |
| 4 | [§2.4](#24-step-3--pre-flight-validation-always-run-before-any-rule) | Message says "All values must be in \[1, 100\]" but the test is on the **extent** | Reword: "model extent outside 1–100 m, probable unit error" |
| 5 | [§2.5](#25-step-4--enrich-with-context-data-geo)–2.9 | Function names in headings (*eachBuilding*, *eachParcel*, *eachSpatialPlansDestinationArea*) differ from those in the queries (`vng:pdokFeature`, `vng:dsoArea`) | One name per function (F05; F06 is removed — zones are defined in the rule) |
| 6 | [§2.7](#27-generic-data-specification-layer-2), [§2.9](#2-processing-pipeline-and-data-applies-to-every-check) | Text says it adds "building information" / "parcels" — copy-paste | Describe what each query really adds |
| 7 | [§2.9](#2-processing-pipeline-and-data-applies-to-every-check) | `DROP` targets graph `spatialplans-destinationareas.ttl` but `INSERT` writes `areas.ttl` — old data is never cleared | Use the same graph name in both |
| 8 | [§3.3](#33-how-to-read-the-pseudocode-applies-to-every-rule) | *dsoArea* "retrieves a parcel" | It retrieves regulatory (designation) areas |
| 9 | [§2.12](#2-processing-pipeline-and-data-applies-to-every-check) | Prefix `geom:` is `http://rdf.bg/geometry/` here, `https://rdf.bg/geometry/` elsewhere — queries silently match nothing | One namespace everywhere |
| 10 | [§2.12](#2-processing-pipeline-and-data-applies-to-every-check) | Relation is computed for every pair of geometries (`LIMIT 500`), including element–element pairs; the IFC geometry is not transformed to RD first | Compare transformed element footprints with the **union** of allowed areas only (R01 layer 4b) |
| 11 | [§2.13](#2-processing-pipeline-and-data-applies-to-every-check) | `` `$this `` has a stray backtick | `$this` |
| 12 | [§2.13](#2-processing-pipeline-and-data-applies-to-every-check) | Only `CONTAINED BY` passes: walls on the boundary fail; `IfcSpace`, openings and annotations are also tested | Accept `WITHIN`/`COVERED_BY`/`EQUALS`; target only the relevant-element profile (F10) |
| 13 | [§2.12](#2-processing-pipeline-and-data-applies-to-every-check)–2.13 | Relation vocabulary ("CONTAINED BY", "DISJUNCT") is ad hoc | Use the fixed DE-9IM/GeoSPARQL list in F08 |
| 14 | [§2.10](#2-processing-pipeline-and-data-applies-to-every-check) | Designation is matched on the name string "Wonen" | Match on designation type/group, with names as parameters |
| 15 | whole doc | The use check (is it a residential building?) is missing | Add R01a |
| 16 | [§1](#1-purpose-scope-and-conventions) | The example uses the commercial RDF Geometry Kernel | State explicitly that the reference results must also be reproducible with an open-source kernel, so the test set is neutral |

## 9. Open questions for rule owners

These are legal interpretation choices. They belong in layer 0 and **SHALL NOT** be decided by a vendor.

**BM13-R01 Bestemming**

1. Do overhanging balconies, eaves and canopies count towards "located within"?
2. Are underground parts (basements) tested against the designation?
3. Which other designations also allow housing (e.g. *Gemengd*, *Centrum*)?
4. Is a partial overlap always `NON_COMPLIANT`, or `REVIEW_REQUIRED` below a set area?
5. The intended use comes from ILS-9.08 zones. When a building has several use functions, is each *Gebruiksfunctie* zone tested against the designation separately (default: yes)?

**Also open for R01:** should the use check (R01a) stay part of BM13-R01, or become a separate rule?

**BM13-R02 Maximum building height**

1. Which *peil* definition applies per municipality or per plan?
2. Which roof-top parts are exempt, and up to what extra height or roof share?
3. Is a measuring tolerance legally acceptable at all? If not, set `tolerance = 0` and report measurement uncertainty separately.
4. Which reference-level method applies in each zone — (1) average road elevation or (2) design elevation — and, for method 1, which road stretch and sample spacing?
5. Which height source is authoritative when municipal data and AHN differ?

## Annex A — Data requirement register (DR IDs) and IDS

Every data requirement used by a BM13 rule has **one fixed ID**. Rules refer to data only through these IDs (layer 2), so a vendor, an applicant and a municipality all mean the same thing. The BIM part of the register is not reinvented here: it **reuses the sub-specification numbers of the ILS Omgevingsvergunning v0.1**, which already delivers layer 2 for checks #1–#17. Only where R01/R02 need more than the ILS checks today, a small BM13 supplement is added, written by the same ILS rules (buildingSMART Psets only, no extra property sets, meaning via `ObjectType` and bSDD).

### A.0 ID scheme

| Prefix | Meaning | Maintained in | Checked by |
| --- | --- | --- | --- |
| `ILS-9.xx` | Sub-specification of the ILS Omgevingsvergunning (e.g. `ILS-9.08` = *Gebruiksfunctie*) | ILS repository, folder `ids/` | IDS 1.0 — the same file for applicant and municipality |
| `ILS-Gn` | Geometric requirement G1–G6 of the ILS (LOIN [§6.2](#6-check-2--bm13-r02-maximum-building-height)) | ILS | Geometry pre-check (acceptance criteria AC4–AC6) |
| `BM13-Snn` | BM13 supplementary BIM requirement, not (yet) in the ILS | `bm13-supplement.ids` ([Annex B](#annex-b--bm13-supplementary-ids-bm13-supplementids-v03)) | IDS 1.0 |
| `DR-GEO-nn` | Data from base registers and DSO | This guide | Response checks inside F05, F11 |
| `DR-REG-nn` | Rule parameters set by the rule owner | This guide, layer 4a | Shape on the rule description |

**Governance rules:** an ID never changes meaning; a change in meaning gets a new ID. A `BM13-Snn` that the ILS adopts is retired and replaced by the new ILS number in every rule's layer 2.

**Prefixes added for checks #3–#17:**

| Prefix | Meaning | Checked by |
| --- | --- | --- |
| `DR-LAW-nn` | National rules: the Bbl (steering tables and article values) | Version check on the application date (F29) |
| `DR-APP-nn` | Data from the DSO application form | F30 |
| `DR-DOC-nn` | A calculation document the applicant supplies (MPG, BENG, fire safety) | F41 |

### A.1 Register

"If missing" says what a rule returns when this requirement fails. A failed data requirement never produces `NON_COMPLIANT`: an incomplete model is not a violating building plan.

| DR ID | Requirement | Source | R01 | R02 | If missing |
| --- | --- | --- | --- | --- | --- |
| ILS-9 | Spatial elements (`IfcSpatialZone`, `IfcSpace`, `IfcExternalSpatialElement`) have `ObjectPlacement` and `Representation` | ILS file 01 | ✓ | ✓ | `INSUFFICIENT_DATA` |
| ILS-9.01a | `IfcMapConversion`: Eastings, Northings, OrthogonalHeight, XAxisAbscissa, XAxisOrdinate, Scale | ILS 02 | ✓ | ✓ | `INSUFFICIENT_DATA` |
| ILS-9.01b | `IfcProjectedCRS.Name` = EPSG:7415 or EPSG:28992 | ILS 03 | ✓ | ✓ | `INSUFFICIENT_DATA` |
| ILS-9.01c–e | Project, parcel and building address | ILS 04–06 | ✓ | ✓ | `REVIEW_REQUIRED` (cross-check only) |
| ILS-9.02 | Project: Name, Description, UnitsInContext | ILS 07 | ✓ | ✓ | `INSUFFICIENT_DATA` |
| ILS-9.03b | *Bouwwerkperceel* zone | ILS 09 | ✓ | ✓ | `REVIEW_REQUIRED` |
| ILS-9.04 | *Kadastraal perceel* zone | ILS 10 | ✓ | ✓ | `REVIEW_REQUIRED` |
| ILS-9.06a | *Bouwlaag*: ObjectType, Name pattern, `EntranceLevel` | ILS 13 | ✓ | ✓ | `INSUFFICIENT_DATA` |
| ILS-9.07 | *Gebruikseenheid* zone | ILS 15 | ✓ | — | `REVIEW_REQUIRED` |
| ILS-9.08 | *Gebruiksfunctie* zone, `Name` = use function (e.g. *Woonfunctie*) | ILS 16 | ✓ | — | `INSUFFICIENT_DATA` |
| ILS-9.09 | *Nevengebruiksfunctie* zone | ILS 17 | ✓ | — | Not blocking (only if present) |
| ILS-9.12a, 9.12b | *Functieruimte*, *Verblijfsruimte* | ILS 25, 26 | ✓ | — | `REVIEW_REQUIRED` |
| BM13-S01 | Building elements have body geometry and are contained in a storey | BM13 supplement | ✓ | ✓ | `INSUFFICIENT_DATA` |
| BM13-S02 | No `IfcBuildingElementProxy` (makes ILS [§8.4](#8-review-notes-on-the-source-pdf-for-rule-owners) checkable) | BM13 supplement | ✓ | ✓ | `REVIEW_REQUIRED` |
| BM13-S03 | At least one roof: `IfcRoof` or `IfcSlab.ROOF` with geometry | BM13 supplement | — | ✓ | `INSUFFICIENT_DATA` |
| BM13-S04 | Slabs have PredefinedType and `Pset_SlabCommon.IsExternal` | BM13 supplement | ✓ | ✓ | `REVIEW_REQUIRED` |
| BM13-S05 | Chimneys / lift overruns as `IfcChimney` / `IfcTransportElement` with geometry | BM13 supplement | — | ✓ | `REVIEW_REQUIRED` |
| BM13-S06 | Doors have `Pset_DoorCommon.IsExternal` | BM13 supplement | — | ✓ | `REVIEW_REQUIRED` |
| BM13-S07 | Storeys have `Elevation` | BM13 supplement | ✓ | ✓ | `INSUFFICIENT_DATA` |
| BM13-S08 | Exactly one `IfcBuilding` per file | BM13 supplement | ✓ | ✓ | `INSUFFICIENT_DATA` |
| ILS-G1 | Solid (closed) geometry | ILS [§6.2](#6-check-2--bm13-r02-maximum-building-height) | ✓ | ✓ | `INSUFFICIENT_DATA` |
| ILS-G2 | Georeferencing in metres | ILS [§6.2](#6-check-2--bm13-r02-maximum-building-height) | ✓ | ✓ | `INSUFFICIENT_DATA` |
| ILS-G3 | Heights relative to NAP, consistent across models | ILS [§6.2](#6-check-2--bm13-r02-maximum-building-height) | — | ✓ | `INSUFFICIENT_DATA` |
| ILS-G4 | No duplicate or overlapping objects | ILS [§6.2](#6-check-2--bm13-r02-maximum-building-height) | ✓ | ✓ | `REVIEW_REQUIRED` |
| DR-GEO-01 | Designation / function areas with geometry, name, legal source, valid-from | DSO (STOP/TPOD), IMRO | ✓ | — | `INSUFFICIENT_DATA` if the service fails |
| DR-GEO-02 | Cadastral parcels | BRK via PDOK | ✓ | ✓ | Not blocking (reporting) |
| DR-GEO-03 | Height areas with *normwaarde* and unit | DSO (omgevingsnorm), IMRO (maatvoering) | — | ✓ | `NOT_APPLICABLE` if no area; `INSUFFICIENT_DATA` if the service fails |
| DR-GEO-04 | Road / terrain height at the relevant point | Municipal height data; AHN DTM | — | ✓ | `INSUFFICIENT_DATA` |
| DR-GEO-05 | Existing buildings (context, 3D view) | BAG via PDOK | — | — | Not blocking |
| DR-REG-01 | BM13-R01 parameters ([§5](#5-check-1--bm13-r01-use-function-matches-the-designation-wonen) layer 4a) | This guide | ✓ | — | Rule cannot run |
| DR-REG-02 | BM13-R02 parameters ([§6](#6-check-2--bm13-r02-maximum-building-height) layer 4a) | This guide | — | ✓ | Rule cannot run |

**Register additions for checks #3–#17:**

| DR ID | Requirement | Source | Used by | If missing |
| --- | --- | --- | --- | --- |
| ILS-9.03a … ILS-9.18i | All other ILS sub-specifications, as listed per check in its Layer 1 | ILS files 08–42 | R03–R17 | per minimum set (A.5) |
| ILS-G5 | Quantities (`Qto_…`) calculated and exported | ILS [§6.2](#6-check-2--bm13-r02-maximum-building-height) | R03, R05, R07, R13, R15, R17 | `REVIEW_REQUIRED` |
| ILS-G6 | Areas and volumes by NEN 2580; model exceptions explicit | ILS [§6.2](#6-check-2--bm13-r02-maximum-building-height) | R03, R05, R07, R13, R17 | `REVIEW_REQUIRED` |
| DR-GEO-06 | Existing buildings on and next to the plot (footprint, height) | BAG / 3D BAG via PDOK | R03, R07, R17 | per rule |
| DR-GEO-07 | Adjoining public space: centre lines of roads, water, public green | BGT via PDOK | R07, R17 | `REVIEW_REQUIRED` |
| DR-GEO-08 | Surrounding buildings in 3D, for daylight obstruction | 3D BAG | R17 | `REVIEW_REQUIRED` |
| DR-GEO-09 | Other plan norms at the location: building coverage %, maximum storeys, use limited to storeys, home-business share | DSO (STOP/TPOD), IMRO | R03–R06 | `NOT_APPLICABLE` if no norm; `INSUFFICIENT_DATA` if the service fails |
| DR-LAW-01 | Bbl steering tables and article values, version valid on the application date | wetten.overheid.nl; machine-readable Bbl table (to be set up by BM13) | R07–R17 | `INSUFFICIENT_DATA` |
| DR-APP-01 | Application data: activity, SBI code, applicant | DSO application | R05 | `REVIEW_REQUIRED` |
| DR-DOC-01 | MPG calculation (*Bepalingsmethode Milieuprestatie Bouwwerken*, NMD data) | Supplied document | R13 | `INSUFFICIENT_DATA` |
| DR-DOC-02 | Provisional BENG / NTA 8800 calculation | Supplied document | R11, R12 | `REVIEW_REQUIRED` |
| DR-DOC-03 | Fire safety calculation (WBDBO NEN 6068; equivalence NEN 6060 / 6079) | Supplied document | R07, R08 | `REVIEW_REQUIRED` |
| DR-REG-03 … DR-REG-17 | Rule profile per check (the parameters behind the Layer 0 choices) | BM13 rule specification | one per rule | Rule cannot run |
| BM13-S09 … S15 | Supplementary specifications for checks #3–#17 (A.6) | bm13-supplement.ids | see A.6 | per minimum set |

### A.2 How the register is used in every rule

The data check runs **before** the rule logic, with the same IDS files the applicant used for the self-check (ILS acceptance criterion AC3):

```
PROCEDURE CHECK_DATA_REQUIREMENTS(model, rule):

    flag = NONE
    FOR EACH drId IN rule.dataRequirements:               // from layer 4a
        IF drId is BIM:
            outcome = RUN_IDS_SPECIFICATION(model, drId)   // IDS 1.0 tool
        ELSE:
            outcome = RESPONSE_CHECK(drId)                 // F05 / F11 result

        IF outcome = FAIL:
            IF register[drId].ifMissing = INSUFFICIENT_DATA:
                RETURN INSUFFICIENT_DATA(evidence = IDS report / service error, drId)
            IF register[drId].ifMissing = REVIEW_REQUIRED:
                flag = REVIEW_REQUIRED                    // continue, but mark the result

    RETURN flag
```

The link from rule to DR IDs is itself machine-readable, as part of the rule description (layer 4a):

```turtle
bm13:R01_BestemmingWonen       bm13:minimumRequirementSet bm13:MR-R01 .
bm13:R02_MaximumBuildingHeight bm13:minimumRequirementSet bm13:MR-R02 .
```

The sets themselves are defined once, in A.5.

### A.3 The BM13 supplementary IDS

File `bm13-supplement.ids` ([Annex B](#annex-b--bm13-supplementary-ids-bm13-supplementids-v03)), version 0.3 (IDS 1.0, `ifcVersion` IFC4 and IFC4X3\_ADD2, like the ILS). It holds 18 `BM13-Snn` specifications — S01–S08 for R01/R02 and S09–S15 for R03–R17, with S09 and S13 split into parts — and nothing that the ILS already checks. Status:

- Validated against the IDS 1.0 XML schema.
- Tested with IfcTester (IfcOpenShell 0.8.5) on a small compliant test model with walls, slabs, roof, column, door, window, stair flight, ramp flight, lift and a space boundary: all 18 pass.
- Tested on broken copies: S01–S08 (a proxy added, roof slab untyped, `IsExternal` removed) fail exactly where expected; S09–S15 (one error per specification: no riser height, no slope, lift without geometry, space boundary without geometry, external wall without U-value, compartment wall / floor / column without fire rating, door without width, window without `IsExternal`) each fail.

Example — how "no proxies" is expressed (a *prohibited* specification: `maxOccurs="0"`):

```xml
<specification name="BM13-S02 No building element proxies" ifcVersion="IFC4 IFC4X3_ADD2">
  <applicability minOccurs="0" maxOccurs="0">
    <entity><name><simpleValue>IFCBUILDINGELEMENTPROXY</simpleValue></name></entity>
  </applicability>
  <requirements>
    <attribute cardinality="required"><name><simpleValue>GlobalId</simpleValue></name></attribute>
  </requirements>
</specification>
```

### A.4 Gaps to raise with the ILS editors

1. **Physical elements for check #1.** The ILS lists only spatial specifications for check #1. R01 tests building elements (e.g. a balcony over *Tuin*). Proposal: add BM13-S01 and S04 to the ILS, or accept 9.05b *Gebouwinhoud* (solid gross volume) as the footprint source.
2. **"No proxies" is not machine-checked.** ILS [§8.4](#8-review-notes-on-the-source-pdf-for-rule-owners) forbids `IfcBuildingElementProxy`, but no IDS enforces it → BM13-S02.
3. **`IsExternal` is optional** in ILS 9.18e (doors) and 9.18g (slabs); R01 and R02 need it → BM13-S04, S06.
4. **Roof and roof-top installations are not specified** for check #2 → BM13-S03, S05.
5. **Main entrance — resolved.** The reference level no longer depends on the main entrance. It uses (1) the average road elevation or (2) the design elevation, chosen per zone (F11).

### A.5 Standard minimum requirement sets

Every rule names **one** minimum requirement set. A set is built from the base set plus the rule's own additions, and every requirement has one of three levels:

| Level | Meaning | Effect when not met |
| --- | --- | --- |
| **MUST** | The rule cannot give a trustworthy answer without it | Rule stops: `INSUFFICIENT_DATA` |
| **SHOULD** | The rule can run, but the officer must know about the gap | Rule runs; a **note** is attached to the result ([section 3.4](#34-standard-result-precedence)) |
| **MAY** | Context or reporting only | No effect on the result |

#### MR-BASE — every BM13 rule

| Level | DR IDs | In plain words |
| --- | --- | --- |
| MUST | ILS-9, ILS-9.01a, ILS-9.01b, ILS-9.02 | The model is georeferenced in RD New / NAP and has project data |
| MUST | ILS-9.06a, BM13-S07, BM13-S08 | One building, with named storeys, their elevations and the entrance level |
| MUST | BM13-S01, ILS-G1, ILS-G2 | Building elements have closed geometry, in metres, inside a storey |
| MUST | F21 VALIDATE\_GEOREFERENCE | Correct CRS and scale, modelled locally, placed at the application location |
| SHOULD | BM13-S02, ILS-G4 | No proxy elements, no duplicate objects |
| SHOULD | ILS-9.01c–e, ILS-9.03b, ILS-9.04 | Addresses, building plot and cadastral parcel in the model |
| MAY | DR-GEO-02, DR-GEO-05 | Parcels and existing buildings from PDOK, for the report and 3D view |

#### MR-R01 = MR-BASE + … (Bestemming)

| Level | DR IDs | In plain words |
| --- | --- | --- |
| MUST | ILS-9.08 | The use function of the building is modelled |
| MUST | DR-GEO-01 | The designation areas can be retrieved for the location |
| MUST | DR-REG-01 | The municipality has set the R01 parameters |
| SHOULD | BM13-S04 | Slabs are typed and say whether they are external (balconies, canopies) |
| SHOULD | ILS-9.07, ILS-9.12a, ILS-9.12b | Use units and spaces are modelled |
| MAY | ILS-9.09 | Secondary use functions (checked only if present) |

#### MR-R02 = MR-BASE + … (Maximum building height)

| Level | DR IDs | In plain words |
| --- | --- | --- |
| MUST | BM13-S03 | The roof can be identified |
| MUST | ILS-G3 | Heights are relative to NAP and consistent across models |
| MUST | DR-GEO-03 | The height areas can be retrieved (the service answers; *no* area means `NOT_APPLICABLE`, not missing data) |
| MUST | DR-GEO-04 | A road or terrain height is available for the *peil* |
| MUST | DR-REG-02 | The municipality has set the R02 parameters |
| SHOULD | BM13-S05 | Roof-top installations have their own class, so exemptions can be applied |

**Machine-readable form** (part of the rule descriptions, layer 4a):

```turtle
bm13:MR-BASE a bm13:MinimumRequirementSet ;
    bm13:must   "ILS-9", "ILS-9.01a", "ILS-9.01b", "ILS-9.02", "ILS-9.06a",
                "BM13-S01", "BM13-S07", "BM13-S08", "ILS-G1", "ILS-G2", "F21" ;
    bm13:should "BM13-S02", "ILS-G4", "ILS-9.01c", "ILS-9.01d", "ILS-9.01e", "ILS-9.03b", "ILS-9.04" ;
    bm13:may    "DR-GEO-02", "DR-GEO-05" .

bm13:MR-R01 a bm13:MinimumRequirementSet ;
    bm13:extends bm13:MR-BASE ;
    bm13:must   "ILS-9.08", "DR-GEO-01", "DR-REG-01" ;
    bm13:should "BM13-S04", "ILS-9.07", "ILS-9.12a", "ILS-9.12b" ;
    bm13:may    "ILS-9.09" .

bm13:MR-R02 a bm13:MinimumRequirementSet ;
    bm13:extends bm13:MR-BASE ;
    bm13:must   "BM13-S03", "ILS-G3", "DR-GEO-03", "DR-GEO-04", "DR-REG-02" ;
    bm13:should "BM13-S05" .
```

> Where the A.1 register column "If missing" and these levels differ, **A.5 is leading**: MUST = `INSUFFICIENT_DATA`, SHOULD = note.

#### MR-CORE — checks that stay inside the building

The Bbl checks that only look inside the building do not need georeferencing (the ILS does not list 9.01a/b for them). They use **MR-CORE**: MR-BASE without the georeferencing lines.

| Level | DR IDs |
| --- | --- |
| MUST | ILS-9, ILS-9.02, ILS-9.06a, BM13-S01, BM13-S07, BM13-S08, ILS-G1 |
| SHOULD | BM13-S02, ILS-G4 |

#### MR-R03 … MR-R17

| Set | Base | MUST (in addition) | SHOULD (in addition) |
| --- | --- | --- | --- |
| MR-R03 Building coverage % | MR-BASE | ILS-9.05b, ILS-G5, DR-GEO-02, DR-GEO-06, DR-GEO-09, DR-REG-03 | ILS-9.03a, 9.05a, 9.06b, 9.08, 9.12a, 9.12b, ILS-G6, DR-APP-01 |
| MR-R04 Use limited to x storeys | MR-CORE | ILS-9.08, DR-GEO-01, DR-GEO-09, DR-REG-04 | ILS-9.05a, 9.09 |
| MR-R05 Home business ≤ x % | MR-BASE | ILS-9.07, 9.08, 9.09, ILS-G5, DR-GEO-09, DR-REG-05 | ILS-9.10f, 9.12a, 9.12b, 9.12d, 9.17, ILS-G6, DR-APP-01 |
| MR-R06 Maximum storeys | MR-CORE | ILS-9.06b, DR-GEO-09, DR-REG-06 | ILS-9.08, 9.10f, 9.12a, 9.12b, 9.12d, 9.17, DR-GEO-04 |
| MR-R07 Fire compartments | MR-BASE | ILS-9.08, 9.16a, ILS-G5, BM13-S11, DR-LAW-01, DR-REG-07 | ILS-9.18b, 9.18d, 9.18e, 9.18g, 9.18h, BM13-S13, DR-GEO-06, DR-GEO-07, DR-DOC-03 |
| MR-R08 Fire resistance | MR-CORE | ILS-9.08, 9.16a, BM13-S11, BM13-S13, DR-LAW-01, DR-REG-08 | ILS-9.18b, 9.18d, 9.18e, 9.18g, 9.18h, DR-DOC-03 |
| MR-R09 Clear width | MR-CORE | ILS-9.08, 9.10b, 9.10d, 9.12a, 9.12b, BM13-S14, DR-LAW-01, DR-REG-09 | ILS-9.10a, 9.11, 9.13, 9.18g, 9.18h, BM13-S10, BM13-S11 |
| MR-R10 Height difference | MR-BASE | ILS-9.08, 9.10d, 9.12a, 9.12b, BM13-S09, DR-GEO-04, DR-LAW-01, DR-REG-10 | ILS-9.03a, 9.10a, 9.10b, 9.11, 9.13, 9.18g, BM13-S10, BM13-S11 |
| MR-R11 Rc value | MR-CORE | ILS-9.08, 9.10a, 9.10b, BM13-S11, BM13-S12, DR-LAW-01, DR-REG-11 | ILS-9.18c, 9.18d, 9.18g, 9.18h, DR-DOC-02 |
| MR-R12 U value | MR-CORE | ILS-9.08, BM13-S12, DR-LAW-01, DR-REG-12 | ILS-9.10a, 9.10b, 9.18d, 9.18e, 9.18i, BM13-S11, DR-DOC-02 |
| MR-R13 MPG | MR-CORE | ILS-9.08, ILS-G5, DR-DOC-01, DR-LAW-01, DR-REG-13 | ILS-9.12a, 9.12b, 9.18g, 9.18h |
| MR-R14 Escape routes | MR-CORE | ILS-9.08, 9.10d, 9.12a, 9.12b, 9.16a, 9.16c, BM13-S11, DR-LAW-01, DR-REG-14 | ILS-9.03a, 9.18e, 9.18g, BM13-S09 |
| MR-R15 Walking distance | MR-CORE | ILS-9.08, 9.10d, 9.12a, 9.12b, 9.16a, 9.16b, BM13-S11, DR-LAW-01, DR-REG-15 | ILS-9.10c, 9.16c, 9.17, 9.18e, 9.18g, ILS-G5 |
| MR-R16 Escape width | MR-CORE | ILS-9.08, 9.10b, 9.16c, BM13-S09, BM13-S14, DR-LAW-01, DR-REG-16 | ILS-9.10c, 9.10e, 9.12c, 9.18e, 9.18g, 9.18h, BM13-S11 |
| MR-R17 Daylight | MR-BASE | ILS-9.08, 9.10b, 9.12b, BM13-S15, DR-GEO-02, DR-LAW-01, DR-REG-17 | ILS-9.03a, 9.03b, 9.05a, 9.18d, 9.18e, 9.18h, 9.18i, ILS-G5, ILS-G6, DR-GEO-06, DR-GEO-07, DR-GEO-08, BM13-S11 |

### A.6 Supplementary specifications for checks #3–#17

Since version 0.3 these are part of `bm13-supplement.ids` ([Annex B](#annex-b--bm13-supplementary-ids-bm13-supplementids-v03)) (S09 as S09a stairs / S09b ramps; S13 as S13a walls / S13b floors / S13c columns). They follow the same ILS rules (buildingSMART property sets only, no extra property sets). Two limits of IDS, handled elsewhere:

- **S11** can check that second-level space boundaries exist and are complete, not that *every* space is bounded — F36 checks that.
- **S13** applies to walls marked `Compartmentation = true`, floor slabs and load-bearing columns. IDS cannot know which elements bound a fire compartment — check #8 (F36) finds those.

| ID | Requirement | Why | Used by |
| --- | --- | --- | --- |
| BM13-S09 | Stairs and ramps modelled as `IfcStair` / `IfcRamp` with flights; `Pset_StairFlightCommon` (RiserHeight, TreadLength, ClearWidth) and `Pset_RampFlightCommon` (Slope, ClearWidth) | Height differences, escape routes, escape width | R10, R14, R16 |
| BM13-S10 | Lifts as `IfcTransportElement` with PredefinedType `ELEVATOR`, with geometry | Accessibility above a height difference; excluded from escape routes | R09, R10 |
| BM13-S11 | Second-level space boundaries (`IfcRelSpaceBoundary`) exported | Adjacency: routes, enclosures, what lies behind a wall | R07–R11, R14–R17 |
| BM13-S12 | `ThermalTransmittance` filled on external walls, roofs, floors, windows, doors and curtain walls (optional in ILS 9.18) | Rc and U checks | R11, R12 |
| BM13-S13 | `FireRating` filled on walls, slabs, doors, columns and curtain walls that bound a fire compartment (optional in ILS 9.18) | Fire resistance and compartments | R07, R08 |
| BM13-S14 | Doors with `OverallWidth` and `OverallHeight`; `Pset_DoorCommon.FireExit` on doors in escape routes | Clear width, escape width | R09, R16 |
| BM13-S15 | Windows with `OverallWidth`, `OverallHeight` and `Pset_WindowCommon.IsExternal`; `GlazingAreaFraction` recommended | Daylight | R17 |

## Annex B — BM13 supplementary IDS (bm13-supplement.ids, v0.3)

Full text of the supplement, specs S01–S15 (IDS 1.0). Save it as `bm13-supplement.ids` ([Annex B](#annex-b--bm13-supplementary-ids-bm13-supplementids-v03)) and run it together with the ILS IDS files listed per check, for example with IfcTester:

```bash
pip install ifctester ifcopenshell
python -m ifctester bm13-supplement.ids model.ifc
```

```xml
<?xml version="1.0" encoding="UTF-8"?>
<ids xmlns="http://standards.buildingsmart.org/IDS"
     xmlns:xs="http://www.w3.org/2001/XMLSchema"
     xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
     xsi:schemaLocation="http://standards.buildingsmart.org/IDS http://standards.buildingsmart.org/IDS/1.0/ids.xsd">
  <info>
    <title>BM13 supplementary IDS - checks #1 to #17</title>
    <copyright>VNG - Beleidsmaatregel 13</copyright>
    <version>0.3</version>
    <description>Supplement to the ILS Omgevingsvergunning v0.1 IDS set. Contains ONLY the BIM data requirements that the BM13 checks #1-#17 need and that the ILS does not yet check (S01-S08 for R01/R02, S09-S15 for R03-R17). Use together with the ILS IDS files listed per check. Follows ILS section 8.4: buildingSMART property sets only, no additional property sets.</description>
    <date>2026-09-28</date>
    <purpose>Digital building permit - automated compliance checking (BM13)</purpose>
    <milestone>M2 OPA application; repeated at M3</milestone>
  </info>
  <specifications>

    <specification name="BM13-S01 Building elements have body geometry and are contained in a storey"
                   ifcVersion="IFC4 IFC4X3_ADD2"
                   description="Physical building elements carry a shape representation and belong to a storey, so footprints (R01) and highest points (R02) can be computed per element."
                   instructions="Export all building elements with 3D body geometry and assign each one to an IfcBuildingStorey.">
      <applicability minOccurs="1" maxOccurs="unbounded">
        <entity>
          <name>
            <xs:restriction base="xs:string">
              <xs:enumeration value="IFCWALL"/>
              <xs:enumeration value="IFCSLAB"/>
              <xs:enumeration value="IFCROOF"/>
              <xs:enumeration value="IFCCOLUMN"/>
              <xs:enumeration value="IFCBEAM"/>
              <xs:enumeration value="IFCCURTAINWALL"/>
              <xs:enumeration value="IFCSTAIR"/>
              <xs:enumeration value="IFCRAMP"/>
              <xs:enumeration value="IFCDOOR"/>
              <xs:enumeration value="IFCWINDOW"/>
              <xs:enumeration value="IFCRAILING"/>
            </xs:restriction>
          </name>
        </entity>
      </applicability>
      <requirements>
        <attribute cardinality="required"><name><simpleValue>Representation</simpleValue></name></attribute>
        <partOf relation="IFCRELCONTAINEDINSPATIALSTRUCTURE" cardinality="required">
          <entity><name><simpleValue>IFCBUILDINGSTOREY</simpleValue></name></entity>
        </partOf>
      </requirements>
    </specification>

    <specification name="BM13-S02 No building element proxies"
                   ifcVersion="IFC4 IFC4X3_ADD2"
                   description="Makes ILS section 8.4 ('use the correct entity, no IfcBuildingElementProxy') machine-checkable. A proxy cannot be classified as height-relevant or exempt."
                   instructions="Replace every IfcBuildingElementProxy with the correct IFC class.">
      <applicability minOccurs="0" maxOccurs="0">
        <entity><name><simpleValue>IFCBUILDINGELEMENTPROXY</simpleValue></name></entity>
      </applicability>
      <requirements>
        <attribute cardinality="required"><name><simpleValue>GlobalId</simpleValue></name></attribute>
      </requirements>
    </specification>

    <specification name="BM13-S03 Roof is identifiable"
                   ifcVersion="IFC4 IFC4X3_ADD2"
                   description="The model contains at least one roof: IfcRoof, or IfcSlab with PredefinedType ROOF, with geometry. Needed to find the highest relevant point (R02)."
                   instructions="Model roofs as IfcRoof or as IfcSlab.ROOF, never as a generic slab.">
      <applicability minOccurs="1" maxOccurs="unbounded">
        <entity>
          <name>
            <xs:restriction base="xs:string">
              <xs:enumeration value="IFCROOF"/>
              <xs:enumeration value="IFCSLAB"/>
            </xs:restriction>
          </name>
          <predefinedType><simpleValue>ROOF</simpleValue></predefinedType>
        </entity>
      </applicability>
      <requirements>
        <attribute cardinality="required"><name><simpleValue>Representation</simpleValue></name></attribute>
      </requirements>
    </specification>

    <specification name="BM13-S04 Slabs are typed and state whether they are external"
                   ifcVersion="IFC4 IFC4X3_ADD2"
                   description="Slabs carry a PredefinedType and Pset_SlabCommon.IsExternal (optional in ILS 9.18g, required here), so balconies and canopies (R01) and roof slabs (R02) can be identified."
                   instructions="Balconies and canopies: IfcSlab with IsExternal = true.">
      <applicability minOccurs="0" maxOccurs="unbounded">
        <entity><name><simpleValue>IFCSLAB</simpleValue></name></entity>
      </applicability>
      <requirements>
        <attribute cardinality="required">
          <name><simpleValue>PredefinedType</simpleValue></name>
          <value>
            <xs:restriction base="xs:string">
              <xs:enumeration value="FLOOR"/>
              <xs:enumeration value="ROOF"/>
              <xs:enumeration value="LANDING"/>
              <xs:enumeration value="BASESLAB"/>
              <xs:enumeration value="USERDEFINED"/>
            </xs:restriction>
          </value>
        </attribute>
        <property dataType="IFCBOOLEAN" cardinality="required">
          <propertySet><simpleValue>Pset_SlabCommon</simpleValue></propertySet>
          <baseName><simpleValue>IsExternal</simpleValue></baseName>
        </property>
      </requirements>
    </specification>

    <specification name="BM13-S05 Roof-top installations have their own class and geometry"
                   ifcVersion="IFC4 IFC4X3_ADD2"
                   description="Chimneys and lift overruns are modelled with their own IFC class and geometry, so the exemption for subordinate parts can be applied (R02)."
                   instructions="Use IfcChimney for chimneys and IfcTransportElement for lift shafts and overruns.">
      <applicability minOccurs="0" maxOccurs="unbounded">
        <entity>
          <name>
            <xs:restriction base="xs:string">
              <xs:enumeration value="IFCCHIMNEY"/>
              <xs:enumeration value="IFCTRANSPORTELEMENT"/>
            </xs:restriction>
          </name>
        </entity>
      </applicability>
      <requirements>
        <attribute cardinality="required"><name><simpleValue>Representation</simpleValue></name></attribute>
      </requirements>
    </specification>

    <specification name="BM13-S06 Doors state whether they are external"
                   ifcVersion="IFC4 IFC4X3_ADD2"
                   description="Pset_DoorCommon.IsExternal is filled (optional in ILS 9.18e, required here), so candidate main entrances on the entrance level (ILS 9.06a EntranceLevel) can be found for the peil (R02)."
                   instructions="Set IsExternal true on every door in the facade.">
      <applicability minOccurs="1" maxOccurs="unbounded">
        <entity><name><simpleValue>IFCDOOR</simpleValue></name></entity>
      </applicability>
      <requirements>
        <property dataType="IFCBOOLEAN" cardinality="required">
          <propertySet><simpleValue>Pset_DoorCommon</simpleValue></propertySet>
          <baseName><simpleValue>IsExternal</simpleValue></baseName>
        </property>
      </requirements>
    </specification>

    <specification name="BM13-S07 Storeys have an elevation"
                   ifcVersion="IFC4 IFC4X3_ADD2"
                   description="Every storey has an Elevation, used to separate above-ground from below-ground parts (R01 includeBelowGround, R02)."
                   instructions="Elevation relative to the model's local z = 0; the same in all discipline models.">
      <applicability minOccurs="1" maxOccurs="unbounded">
        <entity><name><simpleValue>IFCBUILDINGSTOREY</simpleValue></name></entity>
      </applicability>
      <requirements>
        <attribute cardinality="required"><name><simpleValue>Elevation</simpleValue></name></attribute>
      </requirements>
    </specification>

    <specification name="BM13-S08 Exactly one building per model"
                   ifcVersion="IFC4 IFC4X3_ADD2"
                   description="One IfcBuilding per IFC file, so building-level results (use function, height) are unambiguous."
                   instructions="Deliver one IFC per building for multi-building applications.">
      <applicability minOccurs="1" maxOccurs="1">
        <entity><name><simpleValue>IFCBUILDING</simpleValue></name></entity>
      </applicability>
      <requirements>
        <attribute cardinality="required"><name><simpleValue>Name</simpleValue></name></attribute>
      </requirements>
    </specification>

    <!-- ===================== Checks #3-#17 (S09-S15) ===================== -->

    <specification name="BM13-S09a Stair flights have riser height and tread length"
                   ifcVersion="IFC4 IFC4X3_ADD2"
                   description="Stair flights carry Pset_StairFlightCommon.RiserHeight and TreadLength and have geometry (height difference, escape routes, escape width)."
                   instructions="Model stairs as IfcStair with IfcStairFlight parts; fill RiserHeight and TreadLength.">
      <applicability minOccurs="0" maxOccurs="unbounded">
        <entity><name><simpleValue>IFCSTAIRFLIGHT</simpleValue></name></entity>
      </applicability>
      <requirements>
        <attribute cardinality="required"><name><simpleValue>Representation</simpleValue></name></attribute>
        <property dataType="IFCPOSITIVELENGTHMEASURE" cardinality="required">
          <propertySet><simpleValue>Pset_StairFlightCommon</simpleValue></propertySet>
          <baseName><simpleValue>RiserHeight</simpleValue></baseName>
        </property>
        <property dataType="IFCPOSITIVELENGTHMEASURE" cardinality="required">
          <propertySet><simpleValue>Pset_StairFlightCommon</simpleValue></propertySet>
          <baseName><simpleValue>TreadLength</simpleValue></baseName>
        </property>
      </requirements>
    </specification>

    <specification name="BM13-S09b Ramp flights have slope and clear width"
                   ifcVersion="IFC4 IFC4X3_ADD2"
                   description="Ramp flights carry Pset_RampFlightCommon.Slope and ClearWidth and have geometry."
                   instructions="Model ramps as IfcRamp with IfcRampFlight parts; fill Slope and ClearWidth.">
      <applicability minOccurs="0" maxOccurs="unbounded">
        <entity><name><simpleValue>IFCRAMPFLIGHT</simpleValue></name></entity>
      </applicability>
      <requirements>
        <attribute cardinality="required"><name><simpleValue>Representation</simpleValue></name></attribute>
        <property dataType="IFCPLANEANGLEMEASURE" cardinality="required">
          <propertySet><simpleValue>Pset_RampFlightCommon</simpleValue></propertySet>
          <baseName><simpleValue>Slope</simpleValue></baseName>
        </property>
        <property dataType="IFCPOSITIVELENGTHMEASURE" cardinality="required">
          <propertySet><simpleValue>Pset_RampFlightCommon</simpleValue></propertySet>
          <baseName><simpleValue>ClearWidth</simpleValue></baseName>
        </property>
      </requirements>
    </specification>

    <specification name="BM13-S10 Lifts are modelled as elevators with geometry"
                   ifcVersion="IFC4 IFC4X3_ADD2"
                   description="Lifts are IfcTransportElement with PredefinedType ELEVATOR and geometry (accessibility; excluded from escape routes)."
                   instructions="Use IfcTransportElement.ELEVATOR for every lift and lift shaft car.">
      <applicability minOccurs="0" maxOccurs="unbounded">
        <entity>
          <name><simpleValue>IFCTRANSPORTELEMENT</simpleValue></name>
          <predefinedType><simpleValue>ELEVATOR</simpleValue></predefinedType>
        </entity>
      </applicability>
      <requirements>
        <attribute cardinality="required"><name><simpleValue>Representation</simpleValue></name></attribute>
      </requirements>
    </specification>

    <specification name="BM13-S11 Second-level space boundaries are exported"
                   ifcVersion="IFC4 IFC4X3_ADD2"
                   description="The model contains second-level space boundaries, each with its building element and connection geometry (adjacency for routes and enclosures). IDS can only test that they exist and are complete; whether every space is bounded is checked by F36."
                   instructions="Export 2nd-level space boundaries (IfcRelSpaceBoundary2ndLevel) from the authoring tool.">
      <applicability minOccurs="1" maxOccurs="unbounded">
        <entity><name><simpleValue>IFCRELSPACEBOUNDARY2NDLEVEL</simpleValue></name></entity>
      </applicability>
      <requirements>
        <attribute cardinality="required"><name><simpleValue>RelatingSpace</simpleValue></name></attribute>
        <attribute cardinality="required"><name><simpleValue>RelatedBuildingElement</simpleValue></name></attribute>
        <attribute cardinality="required"><name><simpleValue>ConnectionGeometry</simpleValue></name></attribute>
      </requirements>
    </specification>

    <specification name="BM13-S12 External envelope elements have a U-value"
                   ifcVersion="IFC4 IFC4X3_ADD2"
                   description="External walls, slabs, roofs, windows, doors and curtain walls carry ThermalTransmittance in their Pset_...Common (Rc and U checks). Optional in ILS 9.18, required here."
                   instructions="Fill ThermalTransmittance (W/m2K) on every element with IsExternal = true.">
      <applicability minOccurs="0" maxOccurs="unbounded">
        <entity>
          <name>
            <xs:restriction base="xs:string">
              <xs:enumeration value="IFCWALL"/>
              <xs:enumeration value="IFCSLAB"/>
              <xs:enumeration value="IFCROOF"/>
              <xs:enumeration value="IFCWINDOW"/>
              <xs:enumeration value="IFCDOOR"/>
              <xs:enumeration value="IFCCURTAINWALL"/>
            </xs:restriction>
          </name>
        </entity>
        <property dataType="IFCBOOLEAN">
          <propertySet><xs:restriction base="xs:string"><xs:pattern value="Pset_.*Common"/></xs:restriction></propertySet>
          <baseName><simpleValue>IsExternal</simpleValue></baseName>
          <value><simpleValue>true</simpleValue></value>
        </property>
      </applicability>
      <requirements>
        <property dataType="IFCTHERMALTRANSMITTANCEMEASURE" cardinality="required">
          <propertySet><xs:restriction base="xs:string"><xs:pattern value="Pset_.*Common"/></xs:restriction></propertySet>
          <baseName><simpleValue>ThermalTransmittance</simpleValue></baseName>
        </property>
      </requirements>
    </specification>

    <specification name="BM13-S13a Compartment walls have a fire rating"
                   ifcVersion="IFC4 IFC4X3_ADD2"
                   description="Walls marked Pset_WallCommon.Compartmentation = true carry FireRating (fire compartments, fire resistance)."
                   instructions="Set Compartmentation = true on walls that bound a fire compartment and fill FireRating (e.g. EI 60).">
      <applicability minOccurs="0" maxOccurs="unbounded">
        <entity><name><simpleValue>IFCWALL</simpleValue></name></entity>
        <property dataType="IFCBOOLEAN">
          <propertySet><simpleValue>Pset_WallCommon</simpleValue></propertySet>
          <baseName><simpleValue>Compartmentation</simpleValue></baseName>
          <value><simpleValue>true</simpleValue></value>
        </property>
      </applicability>
      <requirements>
        <property dataType="IFCLABEL" cardinality="required">
          <propertySet><simpleValue>Pset_WallCommon</simpleValue></propertySet>
          <baseName><simpleValue>FireRating</simpleValue></baseName>
        </property>
      </requirements>
    </specification>

    <specification name="BM13-S13b Floors have a fire rating"
                   ifcVersion="IFC4 IFC4X3_ADD2"
                   description="Floor slabs carry Pset_SlabCommon.FireRating (floors usually separate compartments)."
                   instructions="Fill FireRating on every floor slab.">
      <applicability minOccurs="0" maxOccurs="unbounded">
        <entity>
          <name><simpleValue>IFCSLAB</simpleValue></name>
          <predefinedType><simpleValue>FLOOR</simpleValue></predefinedType>
        </entity>
      </applicability>
      <requirements>
        <property dataType="IFCLABEL" cardinality="required">
          <propertySet><simpleValue>Pset_SlabCommon</simpleValue></propertySet>
          <baseName><simpleValue>FireRating</simpleValue></baseName>
        </property>
      </requirements>
    </specification>

    <specification name="BM13-S13c Load-bearing columns have a fire rating"
                   ifcVersion="IFC4 IFC4X3_ADD2"
                   description="Columns with Pset_ColumnCommon.LoadBearing = true carry FireRating."
                   instructions="Fill FireRating on every load-bearing column.">
      <applicability minOccurs="0" maxOccurs="unbounded">
        <entity><name><simpleValue>IFCCOLUMN</simpleValue></name></entity>
        <property dataType="IFCBOOLEAN">
          <propertySet><simpleValue>Pset_ColumnCommon</simpleValue></propertySet>
          <baseName><simpleValue>LoadBearing</simpleValue></baseName>
          <value><simpleValue>true</simpleValue></value>
        </property>
      </applicability>
      <requirements>
        <property dataType="IFCLABEL" cardinality="required">
          <propertySet><simpleValue>Pset_ColumnCommon</simpleValue></propertySet>
          <baseName><simpleValue>FireRating</simpleValue></baseName>
        </property>
      </requirements>
    </specification>

    <specification name="BM13-S14 Doors have overall width and height"
                   ifcVersion="IFC4 IFC4X3_ADD2"
                   description="Every door carries OverallWidth and OverallHeight (clear width, escape width). Pset_DoorCommon.FireExit is already required by ILS 9.18e."
                   instructions="Export OverallWidth and OverallHeight on every IfcDoor.">
      <applicability minOccurs="0" maxOccurs="unbounded">
        <entity><name><simpleValue>IFCDOOR</simpleValue></name></entity>
      </applicability>
      <requirements>
        <attribute cardinality="required"><name><simpleValue>OverallWidth</simpleValue></name></attribute>
        <attribute cardinality="required"><name><simpleValue>OverallHeight</simpleValue></name></attribute>
      </requirements>
    </specification>

    <specification name="BM13-S15 Windows have overall size and state whether they are external"
                   ifcVersion="IFC4 IFC4X3_ADD2"
                   description="Every window carries OverallWidth, OverallHeight and Pset_WindowCommon.IsExternal (daylight)."
                   instructions="Export OverallWidth and OverallHeight on every IfcWindow; fill IsExternal. GlazingAreaFraction is recommended.">
      <applicability minOccurs="0" maxOccurs="unbounded">
        <entity><name><simpleValue>IFCWINDOW</simpleValue></name></entity>
      </applicability>
      <requirements>
        <attribute cardinality="required"><name><simpleValue>OverallWidth</simpleValue></name></attribute>
        <attribute cardinality="required"><name><simpleValue>OverallHeight</simpleValue></name></attribute>
        <property dataType="IFCBOOLEAN" cardinality="required">
          <propertySet><simpleValue>Pset_WindowCommon</simpleValue></propertySet>
          <baseName><simpleValue>IsExternal</simpleValue></baseName>
        </property>
      </requirements>
    </specification>

  </specifications>
</ids>
```
