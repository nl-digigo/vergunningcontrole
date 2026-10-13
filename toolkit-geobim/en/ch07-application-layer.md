# Application layer {#applicatielaag}

<p class="leesniveau bestuurlijk">Executive</p>

The application layer describes **which applications and facilities** support the processes, **which transactions** take place between them, and **which open interface standards** are mandatory or taken into account.

<div class="in-het-kort laag-applicatie">

**In brief**

- Ten types of application together make up the chain: from **BIM authoring software** in the market to **VTH case systems** at municipalities and the **DSO Omgevingsloket** as the national gateway.
- **New** are mainly the IDS validation and publication services, the machine-readable legislation service and the rule engine.
- Ten transactions connect the applications, from *submission* to *registration*.
- Connections use open interface standards: OGC APIs, STTR/STOP-TPOD, REST/JSON, Linked Data, ZGW APIs and openCDE.

</div>

## Applications and facilities {#applicaties}

<p class="leesniveau tactisch">Tactical</p>

| Application type | Description and examples | User (role) | Position |
|---|---|---|---|
| BIM authoring software | Design and modelling programs with which architects, engineers and contractors model their buildings in 3D and record all properties. | Applicants (architects, engineers, contractors) create their design here and export a BIM model in IFC format for submission to the municipality. | market (existing) |
| IDS validation service | A service that checks a BIM/IFC model against the Information Delivery Specification (IDS) to see whether it meets the submission requirements. | Applicants use it before submission to check whether their model is complete; municipalities use it on receipt for a quick check. | national or municipal (new) |
| IDS publication service | A national facility where the agreed IDS (information requirements) is published and made available to the market and municipalities. | Municipalities publish their requirements here; applicants consult them in order to supply compliant models. | national (new) |
| GIS service (geo-information facility) | Services that supply or process geodata, for example to position BIM models in their spatial context. | Municipalities consult key registers (BAG, BGT, BRK); applicants use geo datasets to position their design correctly; rule engines use this context information during assessment. | national (existing: PDOK, Kadaster) |
| Machine-readable legislation service | A service that provides legal rules (environment plan, Bbl) in machine-readable form, so that software can apply them. | Municipalities and VNG publish rules; rule engines use them for assessment; applicants gain insight upfront into the requirements that apply to their design. | national (partly existing in the DSO, partly new) |
| Rule checker / rule engine | Software that automatically checks BIM models against machine-readable rules and generates reports. | Municipalities use the rule engine to assess applications faster and more consistently; applicants can run a check upfront to improve their application. | national test environment and market (new) |
| Archiving and storage <span class="buiten-scope">(out of scope)</span> | Systems for the long-term storage of permit files, including BIM models and check reports, in line with the Archives Act. | Municipalities transfer permit files to archive facilities; archive organisations manage and provide the data for the long term and for reuse. | municipal / National Archives (existing, to be adapted) |
| Case systems for permitting, supervision and enforcement (VTH) | Case systems that municipalities use for VTH. | Municipal staff receive, review and decide on applications and integrate check results from national facilities. | municipal (existing, to be adapted) |
| DSO Omgevingsloket | The national facility through which citizens and businesses submit permit applications digitally, and which forwards them to the competent authority. | Applicants submit their application; municipalities receive applications via the DSO; citizens can view and follow applications. | national (existing) |
| Digital twin / visualisation (optional) | Environments in which BIM models and geo-information can be visualised and (possibly combined) used to support business processes. | Municipalities use visualisations for participation and policy-making; citizens see the impact of plans in understandable 3D images; designers can better match their design to its surroundings. | local / regional (optional) |

The "position" column was derived during the conversion from the descriptions in PSA v0.4 and indicates whether a facility already exists or must be built or acquired.

<div class="note" title="Digital twin">

"Digital twin" is an abstract concept in this role. Its meaning in the context of this policy measure still needs to be clarified and worked out. See [[[#beslispunten-en-afwijkingen]]].

</div>

## Transactions {#transacties}

<p class="leesniveau technisch">Technical</p>

| No. | Transaction | Message description | Format / standard | Service used |
|---|---|---|---|---|
| T01 | Submitting the permit application | The applicant submits a permit application with a BIM model (IFC) and metadata (ILS/IDS). | IFC (ISO 16739) [[IFC]], IDS [[IDS]], XML/JSON for accompanying application data | DSO Omgevingsloket (transport to the competent authority) |
| T02 | Validating the application | The IFC model is checked against an IDS; the result is a validation report. | IDS (buildingSMART); validation result as JSON/XML, or as a PDF report for readability | IDS validation service (national or municipal variant) |
| T03 | Publishing submission requirements | Municipalities publish their submission requirements (which data is mandatory in BIM/IFC). | IDS (buildingSMART), REST API or Linked Data endpoint | IDS publication service (national catalogue) |
| T04 | Retrieving geo-information | The municipality and the applicant consult geodata for location and context (parcels, buildings, subsurface, public space). | OGC API Features / WMTS [[OGCAPI]], NEN 3610 [[NEN3610]], CityGML/CityJSON [[CITYJSON]] | GIS service (such as PDOK, Kadaster, Geonovum) |
| T05 | Retrieving machine-readable rules | The municipality and the rule engine consult rules from the Bbl and the environment plan, translated into applicable rules. | STTR [[STTR]], RDF/OWL, SHACL [[SHACL]] | Machine-readable legislation service (DSO STTR/TPOD or Linked Data endpoint) |
| T06 | Automated assessment | The IFC model, geodata and rules are fed into a rule engine; the output is an assessment report. | Input: IFC + JSON/RDF for rules. Output: JSON/XML + PDF report for users | Rule checker / rule engine |
| T07 | Communication to applicant and citizens | Feedback of validation and assessment reports, status updates and the permit decision. | StUF case data or ZGW APIs [[ZGW]]; PDF/A for the formal decision | DSO Omgevingsloket (status and decisions) and the municipal VTH application (case status, communication) |
| T08 | Archiving the permit file <span class="buiten-scope">(out of scope)</span> | Transfer of the complete file (application, BIM model, reports, decision) to an archive facility. | PDF/A (decisions), IFC (model), METS/CMIS (metadata), NEN-ISO 16175 [[NEN-ISO16175]] / OAIS | Archiving and storage facility (municipal or National Archives) |
| T09 | Visualisation and participation (optional) | Publication of BIM/IFC and geodata in a digital twin or viewer: citizens see a 3D view of the building plan. | IFC, CityGML/CityJSON, glTF for 3D viewers, OGC 3D Tiles | Digital twin platform (for example Tygron, Esri, Bentley iTwin) |
| T10 | Registration <span class="buiten-scope">(out of scope)</span> | Deriving geometry and area data from the BIM model to update key registers. | IFC, CityGML/CityJSON | BAG mutation service, BRK/parcel services, PDOK geo services, case/feedback connection |

### Order of the transactions {#volgorde-transacties}

<p class="leesniveau technisch">Technical</p>

1. **Preparation** — T03 (publish requirements) → T04 and T05 (retrieve context and rules) → optionally an upfront T06 by the applicant.
2. **Submission** — T02 (validation by the applicant) → T01 (submission via the DSO).
3. **Handling** — T02 (validation on receipt) → T04 + T05 → T06 (automated assessment) → manual review in the VTH system. During handling: T07 (status updates) and optionally T09 (visualisation, so citizens can follow the application and submit views).
4. **Completion** — T07 (decision and communication) → T08 and T10 (out of scope).

## Interface standards {#interfacestandaarden}

<p class="leesniveau technisch">Technical</p>

| Interface standard | Application |
|---|---|
| OGC APIs (Features, Tiles, WMTS, WFS) [[OGCAPI]] | Geo standards from the Open Geospatial Consortium for exchanging maps and geodata. Interface between BIM/permitting and geo-information (BAG, BGT, BRO, BRK). |
| STTR / STOP-TPOD (DSO rule standards) [[STTR]] | Formats for publishing and providing legal and applicable rules. Interface for machine-readable legislation towards rule engines and the DSO. |
| REST/JSON APIs (Standardisation Forum) [[PTOLU]] | Generic standard for data exchange through web services. Used for connections between validation services, rule engines, VTH systems and national facilities. |
| Linked Data standards (RDF, SPARQL, SHACL, SKOS) [[RDF]] [[SPARQL]] [[SHACL]] [[SKOS]] | W3C standards for semantic data exchange and validation. Interface for providing and querying rules, concepts and semantic links between BIM and regulations. |
| ZGW APIs / StUF (case-based working) [[ZGW]] | Municipal standards for case and document exchange. Interface between the DSO, municipal VTH applications and the archiving of decisions. |
| openCDE API (buildingSMART International) [[OPENCDE]] | A set of open API specifications from buildingSMART for Common Data Environments (CDEs), intended to standardise the exchange of BIM and project data between platforms. |

## Design choices for the solution architecture {#applicatie-ontwerpkeuzes}

<p class="leesniveau technisch">Technical</p>

The PSA does not describe how the facilities are built. This layer does, however, raise the questions the solution architecture must answer:

- **One or several validation services?** A national IDS validation service alongside municipal variants requires agreements on version control of IDS files and on the equivalence of validation results.
- **Where does the rule engine run?** Nationally (test and production environment), at the municipality, or as a market service — and how is the same outcome guaranteed for the same input?
- **How do rules reach the rule engine?** Via STTR from the DSO, via a Linked Data endpoint, or both — and who manages the derived rulesets?
- **How does an assessment result land in the case system?** Via ZGW APIs as a document, as structured data, or both.
- **What role does openCDE play?** As an exchange interface between the design environment and the validation or submission facility.
