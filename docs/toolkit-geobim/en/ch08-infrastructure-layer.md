# Infrastructure layer (network) {#infrastructuurlaag}

<p class="leesniveau bestuurlijk">Executive</p>

The infrastructure layer describes the **information infrastructure** that is needed: the central (market) facilities and systems, and the **technical standards** that are mandatory or taken into account. In the NORA/GEBORA overview, this is called the network layer.

<div class="in-het-kort laag-infra">

**In brief**

- BM13 builds on **existing systems**: the DSO, the DSGO, the key registers and the municipal VTH systems.
- **New** is a national **test and production environment** for validation and rule checking. Who will manage it (VNG, digiGO or another party) is still an open question.
- The infrastructure works in a **federated** way (*publish–find–bind*): data stays at the source and is shared through secured APIs.
- Security follows BIO/ISO 27001; access runs through IAM (eHerkenning, DigiD, eIDAS); connections use TLS and OAuth 2.0.
- Municipalities and market parties can **connect in phases** through SaaS connections.

</div>

## Facilities and systems {#voorzieningen}

<p class="leesniveau tactisch">Tactical</p>

| Facility / system | Application | Status |
|---|---|---|
| DSO — Digital System for the Environment and Planning Act | The national facility for submitting, routing and publishing environmental permits. Acts as the gateway between applicants and municipalities and processes applications, rules and decisions. | existing |
| DSGO — Digital System for the Built Environment [[DSGO]] | A federated agreement framework for secure, standardised data sharing in the construction and real-estate chain. Contains frameworks for APIs, semantics and governance; the basis for BIM and rule exchange. | existing |
| IAM — Identity & Access Management (authorisation system) | A system for authentication, authorisation and access management through eIDAS, DigiD and eHerkenning. Provides secure access for applicants, municipalities and chain partners to national and local facilities. | existing, to be connected |
| Process monitoring and logging service | A generic facility for audit trails, performance measurement and error detection in the chain. Monitors transactions (application, validation, assessment) and logs who did what and when; essential for accountability and GDPR compliance. | new or to be reused |
| Digital approval and signature service | Services for digitally signing and approving decisions, based on the eIDAS Regulation. Supports formal decision-making at municipalities and ensures that digital permits are legally valid. | possibly external |
| Geo facilities (PDOK, Kadaster, Geonovum) | Central geodata platforms with access to key registers (BAG, BGT, BRK, BRO). Provide geo context for permit applications and assessment; connected through OGC APIs and NEN 3610. | existing |
| Rule engine / validation service platform (manager still to be decided) | A national test and production environment for automated checks and validation of BIM models. Performs IDS validation and rule assessment on IFC models and returns reports. | new |
| Municipal VTH systems | Local or regional case systems for permitting, supervision and enforcement. Receive applications via the DSO, show check results and record decisions. | existing, to be adapted |
| Archive facility (municipal / National Archives) <span class="buiten-scope">(out of scope)</span> | Infrastructure for the long-term digital preservation of permit files. Stores IFC models, decisions and reports in line with the Archives Act. | existing, to be adapted |
| Digital twin and visualisation platforms (optional) | Local or regional platforms for 3D display of building plans and their surroundings. Give insight to citizens and policy-makers and link BIM and geodata for participation. | optional |

<div class="issue" title="Management of the rule engine and validation service platform">

In PSA v0.4, the manager of this platform is listed as "VNG/DigiGO???", while the future situation assumes management by VNG (possibly through procurement). Who will own and manage the national test and production environment has not yet been decided. This is included as a decision point in [[[#beslispunten-en-afwijkingen]]].

</div>

## Architecture patterns {#infra-patronen}

<p class="leesniveau technisch">Technical</p>

| Pattern | What it means for BM13 |
|---|---|
| Federated data sharing (*publish–find–bind*) | Source holders **publish** data and services with metadata; consumers **find** them through a catalogue (e.g. the IDS publication service or DSGO services); and **bind** to them through a standardised API. There is no central database holding all permit data. |
| API-first | Every facility offers its functions through documented APIs (REST/JSON, possibly GraphQL), so that facilities can be replaced or scaled independently of each other. |
| Cloud and SaaS | The test and production environment runs on cloud platforms with redundancy and failover; municipalities and market parties connect through SaaS connections. |
| Phased scale-up | Start with a test environment and front-runner municipalities; expand step by step to production and more municipalities once agreement frameworks and management are in place. |
| Security by design | Security according to BIO/ISO 27001, encrypted connections (TLS 1.3), authorisation through OAuth 2.0 and central logging from the first version. A separate section on privacy and information security still needs to be written. |

## Technical standards per facility {#technische-standaarden}

<p class="leesniveau technisch">Technical</p>

The technical standards from PSA v0.4 are grouped below by the facility they apply to.

### DSO and DSGO {#standaarden-dso-dsgo}

| Technical standard | Application |
|---|---|
| REST/JSON APIs (Standardisation Forum) | Exchange between the DSO, municipalities and chain partners. |
| STTR and STOP/TPOD [[STTR]] | Standards for publishing and providing legal and applicable rules (DSO). |
| XML / Digikoppeling [[DIGIKOPPELING]] | Secure and reliable message exchange between government bodies (DSO). |
| TLS 1.3 + OAuth 2.0 [[TLS13]] [[OAUTH2]] | Secure connections and authentication for the DSO. |
| Linked Data (RDF, OWL, SPARQL, SHACL) | Semantic interoperability between BIM, rules and registers (DSGO). |
| API-first (REST / GraphQL) | Pattern for federated data sharing through standardised endpoints (DSGO). |
| BOMOS (management standard) | Management of open standards within the system (DSGO). |
| JSON-LD [[JSON-LD]] | Exchange format for structured Linked Data (DSGO). |

### Identity & Access Management {#standaarden-iam}

| Technical standard | Application |
|---|---|
| eIDAS, DigiD, eHerkenning [[EIDAS]] | European and Dutch standards for authentication. |
| SAML 2.0 / OpenID Connect | Identity federation between national and local platforms. |
| OAuth 2.0 [[OAUTH2]] | Authorisation protocol for APIs. |

### Process monitoring and logging {#standaarden-logging}

| Technical standard | Application |
|---|---|
| PKIoverheid certificates | Digital signatures and secure connections. |
| CEF eDelivery / Logius Digikoppeling | Standardised logging and message exchange between government bodies. |
| OpenTelemetry / ISO 27035 | Standards for monitoring, logging and incident management. |
| JSON / Syslog / REST | Technical formats for log data and status messages. |

### Digital approval and signature {#standaarden-signature}

| Technical standard | Application |
|---|---|
| eIDAS Regulation (EU 910/2014) [[EIDAS]] | Legal basis for electronic signatures. |
| XAdES / PAdES / CAdES | Standards for digital signatures on XML, PDF and other documents. |
| PKIoverheid | Certificates for signing by recognised authorities. |

### Geo facilities, visualisation and archive {#standaarden-geo-archief}

| Technical standard | Facility | Application |
|---|---|---|
| OGC APIs (Features, Tiles, WFS, WMTS) [[OGCAPI]] | geo facilities | Access to geodata and maps. |
| glTF / 3D Tiles / WebGL | digital twin / visualisation | Visualisation formats for 3D display in browsers. |
| BagIt / NEN-ISO 16175 [[NEN-ISO16175]] | archive facility | Standards for the transfer and accessibility of archival data. |
| METS / CMIS / OAIS model | archive facility | Standards for long-term digital archiving. |
