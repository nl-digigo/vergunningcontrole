# Information layer {#informatielaag}

<p class="leesniveau bestuurlijk">Executive</p>

The information layer describes **which information** is central to the permitting chain (the business objects according to GEBORA) and **which information standards** are needed to exchange that information unambiguously.

<div class="in-het-kort laag-informatie">

**In brief**

- Seven business objects are central. The main shift: the **permit application** is no longer a PDF with 2D drawings, but a **BIM/IFC file with metadata**.
- **IFC** is the core file, **IDS** records in machine-readable form what must be in that file, and the **ILS** records the agreements on which information is delivered at which moment.
- **Rules** (Bbl, environment plan) become machine-readable and are linked to BIM objects with Linked Data; **geo-information** from the key registers provides the right position and context.
- General government standards (security, privacy, accessibility, archiving) apply, as well as specific construction standards.

</div>

## Business objects {#bedrijfsobjecten}

<p class="leesniveau tactisch">Tactical</p>

| Business object | Definition and application in this architecture |
|---|---|
| <dfn data-lt="permit applications">Permit application</dfn> | The formal request from an applicant to the municipality for permission to build. This is the central business object in the value stream. It is no longer submitted as a PDF or 2D drawing, but as a digital BIM/IFC file with the associated metadata. |
| Building / design (BIM information) | The object the permit concerns, including design, structure and use function. It is modelled in a BIM (IFC), in which geometry and properties are recorded, and can be used directly for assessment, supervision and key registers. |
| <dfn data-lt="applicable rules">Environment rule / applicable rule</dfn> | Legal rules from the Bbl and the environment plan, translated into applicable (machine-readable) rules. These are the input for the rule engine to check automatically whether a design complies with laws and regulations. |
| Geo object / location | Objects from key registers such as BAG (buildings), BGT (topography), BRO (subsurface) and BRK (cadastral data). Needed for the correct georeferencing of a BIM model and the spatial context in permitting. |
| <dfn data-lt="validation report|assessment result">Validation report / assessment result</dfn> | The result of validation (IDS check) or assessment by a rule engine. This report goes back to applicants and municipalities as evidence of whether the application is complete and complies with the rules. |
| Permit decision | The municipality's decision to grant or refuse the permit. This is the end product of the process, archived and made available together with BIM models and reports. |
| Permit file / archival record | The set of documents, BIM models and decisions belonging to a permit application. It must be preserved in the long term in line with the Archives Act and remain usable for supervision, enforcement and digital twins. |

### How the business objects relate {#samenhang-bedrijfsobjecten}

<p class="leesniveau technisch">Technical</p>

A permit application **contains** a building design (BIM information) and **refers to** a location (geo objects). The design is **validated** against an IDS and **assessed** against applicable rules; this produces a validation report and an assessment result. On that basis, the competent authority takes a permit decision. Together, the application, model, reports and decision form the permit file.

| From | Relationship | To | Cardinality (proposal) |
|---|---|---|---|
| Permit application | contains | Building / design (BIM information) | 1 — 1..* |
| Permit application | concerns | Geo object / location | 1 — 1..* |
| Building / design | is validated with | IDS (submission requirements) | * — 1..* |
| Building / design | is assessed against | Environment rule / applicable rule | * — * |
| Validation or assessment | produces | Validation report / assessment result | 1 — 1 |
| Permit application | leads to | Permit decision | 1 — 0..1 |
| Permit file | comprises | application, model, reports, decision | 1 — * |

The cardinalities were added as a proposal during the conversion and must be confirmed in the information modelling (NEN 2660).

## Information standards — general {#informatiestandaarden-algemeen}

<p class="leesniveau technisch">Technical</p>

A first indication of the relevant (functional) information standards, which of them are mandatory, and which other standards are taken into account.

| Information standard | Application in this project |
|---|---|
| NEN-ISO/IEC 27001 and 27002 (information security) [[ISO27001]] | Framework for security measures and risk management. Mandatory for all government bodies (BIO). Ensures the confidentiality, integrity and availability of permit data. |
| GDPR — data minimisation and data portability [[AVG]] | Privacy legislation, applied to data exchange and storage. Personal data in permit applications (e.g. the applicant's name and address) must be processed in line with the GDPR. |
| Digikoppeling [[DIGIKOPPELING]] | Standard for secure and reliable data exchange between government bodies. Needed for connections between municipalities, the DSO and national facilities (DSGO). |
| Digilevering | Uniform standard for supplying data from key registers. Relevant for BM13 when BAG, BGT, BRK or BRO are used in the permitting process. |
| Digital accessibility (WCAG 2.1) [[WCAG21]] | Guidelines for the digital accessibility of information for citizens. Public access to permits and 3D visualisations must meet the accessibility guidelines. |
| eIDAS and eHerkenning [[EIDAS]] | European and Dutch standards for digital identification and authentication. Applicants log in with eHerkenning or DigiD, which ensures secure and recognised access. |
| Digital archiving (NEN-ISO 16175, PDF/A, OAIS model) [[NEN-ISO16175]] | Standards and best practices for long-term digital archiving. Permit files, including BIM/IFC, must be stored durably and remain accessible. |
| Linked Data (RDF, SPARQL, OWL, SHACL) [[RDF]] [[SPARQL]] [[OWL2]] [[SHACL]] | Generic web standards for semantic data exchange. Used for machine-readable legislation and the connection with the DSO and rule engines. |
| OGC APIs / INSPIRE [[OGCAPI]] [[INSPIRE]] | Standards for geodata exchange, mandatory for EU member states. Used to link BIM and geo context (positioning the building, public space). |
| Standardisation Forum — comply or explain [[PTOLU]] | The Dutch list of mandatory open standards (e.g. REST, JSON, TLS, SAML, XML). BM13 must comply, unless a reasoned deviation is made. |

## Information standards — construction and geo {#informatiestandaarden-bouw}

<p class="leesniveau technisch">Technical</p>

| Information standard | Application in this project |
|---|---|
| IFC — Industry Foundation Classes (ISO 16739, buildingSMART) [[IFC]] | Open BIM standard for exchanging building information. The core file in which applicants deliver their design (geometry, properties, relationships) with the permit application; the basis for validation and assessment. |
| IDS — Information Delivery Specification (buildingSMART) [[IDS]] | Specification for checking the content of IFC models against predefined information requirements. Used to check whether a supplied BIM model meets the municipalities' submission requirements (completeness). |
| ILS — Information Delivery Specification (various Dutch specifications) | Dutch agreements on which information must be exchanged at which moment. Together with IDS, the basis for national agreements on which BIM information is mandatory for permitting. Examples: miniGIM, ILS Ruimten, miniBIM, ILS O&E. |
| BIM basis ILS [[BIMBASISILS]] | A practical, widely supported Dutch implementation of the ILS. Gives concrete guidance on which attributes and object information must be supplied at a minimum with permit applications. |
| NL-SfB and ETIM classifications | Systems for classifying building elements, materials and products. Support a shared language between market and municipalities when supplying data in BIM models. |
| CityGML / CityJSON (OGC standards) [[CITYJSON]] | Standards for 3D city models and geo-information exchange. Needed to position BIM models correctly in their spatial context (link with BAG, BGT and subsurface). |
| BIM–geo conversion (BIMGeo) | Dutch agreements on transformation between BIM and geo standards. Important for correctly linking the building (BIM) to geo objects (BAG, BGT) in permitting. |
| DSO applicable rules (STTR, STOP/TPOD) [[STTR]] | Formats and standards for publishing legal and applicable rules under the Omgevingswet. Make legal rules from the Bbl and environment plans machine-readable and applicable in a rule engine. |
| NEN 2660 (semantic standard for built-environment information) [[NEN2660]] | Dutch standard for semantic interoperability in construction. Provides the basis for unambiguous definitions of objects and attributes; essential for automated assessment and data exchange. |
| NEN 3610 — Basic model for geo-information [[NEN3610]] | The Dutch basic model for geo-information (BAG, BGT, BRK, BRO, etc.). BM13 must follow NEN 3610 when drafting agreements on combining BIM and geo, so that geo-information can be provided and reused unambiguously. |
| mvdXML — Model View Definition XML (buildingSMART) [[MVDXML]] | Specifies which subsets of IFC data are needed for a particular use case. Can be used to filter only the relevant data from a BIM model for permitting (e.g. areas, functions, fire-safety information). |

<div class="issue" title="Distinguish mandatory and recommended standards">

PSA v0.4 does not yet state for each standard whether it is **mandatory** (for example through the comply-or-explain list, legislation or BIO) or **recommended**. That distinction is needed for procurement and for software vendors. Proposal: add a "status" column and state the source of the obligation for each standard.

</div>

## From law to check: the information chain {#informatieketen}

<p class="leesniveau technisch">Technical</p>

The information layer connects three chains that come together in the rule engine:

1. **BIM chain** — the ILS describes functionally which information is needed; the IDS makes this machine-readable; the IFC model contains the information; the IDS validation service checks the model against the IDS and produces a validation report.
2. **Geo chain** — geo objects from the key registers (NEN 3610) are provided through OGC APIs; BIM–geo agreements (CityGML/CityJSON, georeferencing in IFC) position the model at the right place in its surroundings.
3. **Rule chain** — legal rules (Bbl, environment plan) are recorded as applicable rules (STTR) or as Linked Data (RDF/OWL); rulesets are derived from these, for example as SHACL shapes or SPARQL queries, which the rule engine applies to the (enriched) BIM model.

A shared conceptual layer (NEN 2660, classifications such as NL-SfB and ETIM) ensures that the terms in rules, IDS and IFC model refer to the same thing. Without that semantic link, a rule such as "the clear height of a habitable room" cannot be assessed automatically and reliably.

<div class="note" title="Relation to the checks">

The individual checks — data requirements per check, pseudocode, reference encoding — are worked out in the check documentation of Policy Measure 13. This PSA only sets the framework within which that work takes place.

</div>
