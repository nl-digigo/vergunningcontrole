# Organisation layer {#organisatielaag}

<p class="leesniveau bestuurlijk">Executive</p>

The organisation layer describes **who** is involved and **which processes** change: the value streams in permitting, the obstacles within them, and the chain, business and process roles according to GEBORA.

<div class="in-het-kort laag-organisatie">

**In brief**

- The permitting value stream moves from **document-driven to data-driven**.
- Six processes are in scope: interpretation and preparation, design, submission, validation, assessment and communication. Archiving and registration are described but are **out of scope**.
- The biggest shift: **validation happens upfront, by the applicant**, and **assessment is largely automated**. The permit officer keeps the final say.
- Ten actors are involved, from the permit applicant and the competent authority to the rule provider, the data provider and the software vendor.

</div>

## Value streams and processes {#waardestromen}

<p class="leesniveau tactisch">Tactical</p>

For each process: today's obstacles, what BM13 changes, and the impact.

| Process | Obstacle today | With BM13 | Impact |
|---|---|---|---|
| Interpretation and preparation | Designers and developers must look up regulations themselves, interpret them and translate them into their design; this is time-consuming and error-prone. It is often unclear exactly which rules apply at a location, which leads to many correction rounds. | Through digital services, designers get direct insight into applicable, machine-readable rules that can be consulted automatically while modelling. | Faster preparation, fewer errors, designs match the requirements better from the start. |
| Design | Architects and developers create BIM models with all relevant data, but these are often converted to 2D documents for the permit: duplicate work. | The BIM model is used directly as the basis for the application. | Richer, more consistent and reusable information. |
| Submission | Applications are often submitted incomplete and in different formats, causing a lot of feedback and delay. | Applicants submit digitally using a BIM/IFC model with the associated metadata and georeferencing. | A uniform, complete application that can be processed straight away. |
| Validation | Validation mainly lies with the municipality: applications are checked and often returned for completion. | Applicants check their BIM model beforehand using a national IDS validation service. | Far fewer incomplete applications; the municipal review only starts once the data is complete. |
| Assessment | Assessment is manual and depends on individual interpretation; it is slow and inconsistent. | Rules from the Bbl and the environment plan are made machine-readable and applied automatically through a rule engine. | Faster, more consistent and legally more robust assessment. |
| Communication | Communication between municipalities, applicants and citizens is fragmented and often reactive. | Process results (validation reports, assessment outcomes) are shared digitally and transparently; citizens get access to understandable 3D visualisations. | More trust and better participation. |
| Archiving <span class="buiten-scope">(out of scope)</span> | Permit files are mostly stored as PDFs and separate documents, without a link to the original BIM model. | BIM models and validation and assessment reports are preserved digitally in the long term, in line with the Archives Act. | Reusable for supervision, enforcement and key registers; long-term accessibility ensured. |
| Registration <span class="buiten-scope">(out of scope)</span> | After granting a permit, the municipality updates the key registers (BAG, BGT, BRK) with data on the completed building. | This process can be partly automated by reusing information from the approved BIM model directly. | More up-to-date and consistent registration. |

### What shifts in responsibility? {#verschuiving}

<p class="leesniveau bestuurlijk">Executive</p>

The change is more than digitising the existing process. Two shifts need executive attention:

1. **From checking afterwards to quality upfront.** The applicant becomes responsible for an application that demonstrably meets the submission requirements (principle AP03). This requires a reliable, publicly available validation facility and clear agreements on the legal status of a validation report.
2. **From human interpretation to recorded rules.** When rules become machine-readable, interpretation moves from the permit officer to the moment the rules are translated. Who performs that translation, who approves it and who is liable for errors must be assigned.

## Actors {#actoren}

<p class="leesniveau tactisch">Tactical</p>

The actors are taken from the standard GEBORA role model. For each actor: the use case, the information needs and the information flows.

| Actor | Use case | Information needs | Information flows |
|---|---|---|---|
| **Permit applicant** (e.g. developer, architect, engineer) | Submitting a permit application for a building, including design and technical data. | Access to current rules (environment plan, Bbl) in machine-readable form; specifications of the data to be supplied (ILS/IDS); feedback on the completeness and correctness of the application (validation report). | Supplies the BIM/IFC model + metadata via the DSO. Receives rules, validation outcomes and assessment reports back. |
| **Competent authority** (e.g. municipality, VTH department) | Assessing and deciding on the permit application. | Complete and validated BIM models (IFC); geo-information (BAG, BGT, subsurface, public space); automatic assessment results from the rule engine; participation and objection information from citizens. | Receives IFC models and validation reports via the DSO/test environment. Requests and processes geo-information from national and municipal sources. The decision (permit) goes back to the applicant and is made available to citizens. |
| **Rule holder** (e.g. the municipality for the environment plan, the national government/BZK for the Bbl) | Adopting and managing (legal) rules. | Agreement frameworks (ILS, IDS, BIM/IFC, geo standards); input from pilots for further development. | Makes standards available (e.g. via the Standardisation Forum/digiGO). Supplies geo-information via PDOK/Kadaster to municipalities and applicants. |
| **Rule provider / publication facility** (e.g. DSO) | Publishing and providing (applicable) rules as a service. | Current, structured legal and applicable rules from rule holders (such as municipalities and BZK) in order to make them available digitally. | Receives rules in STOP/TPOD and STTR format from competent authorities and publishes them as machine-readable services for municipalities, software vendors and applicants. |
| **Register holder (source holder)** (BAG: municipalities; BGT: several source holders, including municipalities and water boards; BRK: Kadaster as registering body) | Creating, supplying, registering and managing authentic source data. | Current information on granted and amended permits in order to update object and location data in the key registers (BAG, BGT, BRK). | Receives changes and building object data from municipalities and supplies updated registrations back to national facilities and data providers. |
| **Data provider** (national facility, e.g. PDOK) | Distributing and publishing geo datasets (not a source holder). | Standardised source data and metadata from register holders in order to publish reliable, current geo datasets. | Receives data from authentic registers and makes it available through OGC APIs and web services to municipalities, rule engines and designers. |
| **Standards manager** (business role; e.g. Geonovum) | Managing and publishing (geo) standards and profiles; not rules or registers. | Practical feedback on the use and applicability of standards (such as IFC, IDS, NEN 3610) in the pilot environments. | Receives feedback from municipalities, vendors and applicants and publishes updated standards documentation, profiles and guidelines for national use. |
| **Rule engine / validation service provider** (software vendor / data service provider, DSP under DSGO; e.g. VCS Rotterdam, software vendors) | Automatically checking BIM models against rules. | Machine-readable rules (environment plan, Bbl); IFC models from the submission process. | Receives IFC models and rules. Returns validation reports and assessment results to the municipality and the applicant. |
| **Citizens / surroundings** | Viewing permit applications and possibly lodging objections. | Access to permit decisions and visualisations (2D/3D); clear communication about the status and consequences of permits. | The municipality provides the permit and visualisation via the DSO or its own channel. Citizens return views or objections to the municipality. |
| **Registering body / key register holder** (e.g. Kadaster, National Archives) | Long-term storage and reuse of permit data and models. | Access to complete permit files, including BIM/IFC; metadata for long-term access and linking with key registers. | The municipality supplies files and BIM models to the archive facility. The archive makes data available for supervision, enforcement and policy. |

## Actors and processes {#actoren-processen}

<p class="leesniveau tactisch">Tactical</p>

Which actor is involved in which process? (● = relationship named in PSA v0.4)

| Actor | Interpretation | Design | Submission | Validation | Assessment | Communication | Archiving* | Supervision* |
|---|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
| Permit applicant | ● | ● | ● | ● | | | | |
| Competent authority | | | | ● | ● | ● | ● | |
| Rule holder | | | | | | | | |
| Rule provider / publication facility | ● | ● | | ● | ● | | | |
| Register holder | | | | | ● | ● | ● | |
| Data provider | ● | | | ● | ● | | | |
| Standards manager | | | | ● | ● | ● | ● | |
| Rule engine / validation service provider | | | | ● | ● | | | |
| Citizens / surroundings | | | | | | ● | | |
| Registering body | | | | | | | ● | ● |

\* outside the scope of this policy measure. The markings come from the column "relationship with value streams" in PSA v0.4. For the rule holder, v0.4 names no relationship; this still needs to be added.

## Organisational impact {#organisatorische-impact}

<p class="leesniveau tactisch">Tactical</p>

| For | Impact | Point of attention |
|---|---|---|
| VTH departments | Work shifts from checking to reviewing exceptions and complex aspects | Training in reading BIM models and assessment reports; revision of work processes and mandates |
| Municipal rule holders | Environment plan rules must be drafted in machine-readable form | Capacity and knowledge for drafting applicable rules |
| Applicants | More responsibility upfront; fewer correction rounds | Availability of validation facilities and a clear ILS/IDS |
| National parties | New management role for agreement frameworks and facilities | Governance, funding and management according to BOMOS |
