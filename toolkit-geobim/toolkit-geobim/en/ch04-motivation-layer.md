# Motivation layer {#motivatielaag}

<p class="leesniveau bestuurlijk">Executive</p>

The motivation layer describes **why** Policy Measure 13 exists and **within which frameworks** the solution must fit: laws and regulations, architecture principles and the business case.

<div class="in-het-kort laag-motivatie">

**In brief**

- The measure must make the permitting process for buildings **faster, more consistent and less error-prone**, and so help speed up housing construction.
- The legal foundation is the **Environment and Planning Act** (Omgevingswet) with the **Bbl** and the municipal environment plans; the Archives Act, the Digital Government Act, the GDPR and European frameworks for data and interoperability also apply, among others.
- Ten **architecture principles** steer the design. At their core: open standards, record once and use many times, federated collaboration, and privacy and security *by design*.
- The **business case** rests on six drivers, from shorter lead times to more trust between municipalities and the market.

</div>

## Laws and regulations {#wet-en-regelgeving}

<p class="leesniveau tactisch">Tactical</p>

This section gives a first indication of the laws, regulations and policy agreements that apply. These may also include orders in council (AMvBs) and ministerial regulations.

### National laws and regulations {#nationale-wetgeving}

| Law or regulation | Impact on this project |
|---|---|
| Environment and Planning Act (Omgevingswet, 2024) [[OMGEVINGSWET]] | Sets the legal basis and the digital service desk (DSO) for permit applications, and requires integrated assessment. BM13 must connect to the DSO and the Omgevingswet standards (applicable rules, STTR). |
| Buildings (Living Environment) Decree (Bbl) [[BBL]] | Contains the technical building requirements that applications must meet, and is the source for the rulesets in the rule engine. BM13 must make these rules machine-readable and apply them in checks. |
| Municipal environment plans (spatial rules) | Local legal frameworks that must become available as machine-readable rules; needed to assess environment plan activities (OPA). |
| Archives Act (Archiefwet) [[ARCHIEFWET]] | Requires permit files to be preserved long-term; BIM models therefore also fall under the archiving obligation. This underlines the need for agreements on storage and accessibility. |
| Digital Government Act (Wdo) [[WDO]] | Requires open standards for digital data exchange. BM13 must therefore apply IFC, IDS, OGC APIs and similar standards. |
| GDPR / Police Data Act (Wpg) [[AVG]] | Personal data in permit applications must be protected; privacy and information security must be explicitly built into the solution. |
| Addresses and Buildings Key Register Act (Wet BAG) [[WET-BAG]] | Ensures that building and address data from permits is fed back to the authentic register. BM13 must therefore support data exchange with the BAG structure (object IDs, geolocation). |
| Large-Scale Topography Key Register Act (Wet BGT) [[WET-BGT]] | Requires the physical context of building plans to be recorded using BGT object definitions. BM13 must align with this to position BIM models correctly and check them against topography. |

### European frameworks and initiatives {#europese-kaders}

| Law or regulation | Impact on this project |
|---|---|
| INSPIRE Directive (2007/2/EC) [[INSPIRE]] | Requires member states to make spatial data available in a standardised, digital form; relevant for the geo-BIM integration in BM13. |
| EU Public Procurement Directive (2014/24/EU) [[AANBESTEDING-EU]] | The national test and production environment will probably exceed the threshold; a procurement procedure is then required. |
| EU Data Governance Act and Data Act (2023/2025) [[DGA]] [[DATA-ACT]] | Promote interoperability and reuse of data, including in the construction and environment domains. BM13 must open up data services according to European principles. |
| Frameworks for digital interoperability (CEF/EIF) [[EIF]] | European reference architecture for interoperability. BM13 must design data services according to these principles: open, reusable and interoperable. |
| European research projects (CHEK, ACCORD, DigiChecks) [[CHEK]] [[ACCORD]] | Provide methods for rule checking, BIM–geo integration and Linked Data rules. BM13 must monitor these and integrate them where possible. |

## Architecture principles {#architectuurprincipes}

<p class="leesniveau tactisch">Tactical</p>

This section describes the architecture frameworks (principles, guidelines) and other requirements that apply, including policy standards.

| No. | Principle | Application in this project | Basis |
|---|---|---|---|
| AP01 | Open standards, unless… | All information exchange (BIM/IFC, IDS, geo standards, applicable rules) uses open, internationally supported standards (IFC from buildingSMART, OGC APIs, ISO standards). This guarantees interoperability and prevents vendor lock-in. | Mandatory nationally (Standardisation Forum) [[PTOLU]]; in line with EU Digital Europe / Data Act |
| AP02 | Record once, use many times | The BIM model submitted with the permit application must then be reusable for assessment, supervision, enforcement, key registers (BAG, BGT) and digital twins. No more duplicate processes. | GEBORA and sector objectives (efficient, future-proof information provision) |
| AP03 | Separation of responsibilities | The applicant is responsible for delivering correct and complete BIM data; the municipality is responsible for assessment and decision-making. Agreements in the ILS/IDS lay down these responsibilities. | National (legally from the Omgevingswet); ensures clarity in the chain |
| AP04 | Federated collaboration | No central database, but agreements on interoperable data services and exchange (DSGO/DSO). Municipalities and market parties keep data at the source, but share via national facilities (test and production environment). | GEBORA/digiGO and European interoperability (EIF) |
| AP05 | Transparency and traceability | Every check and change in permitting must be traceable: who checked what, which rules were applied and what the outcome was. This supports legal robustness and archiving. | National (Archives Act, GDPR); EU (GDPR accountability principle) |
| AP06 | Privacy and security by design | Privacy and security are built in from the start of the BIM services and the test environment (authorisation, logging, data minimisation), for example by separating publicly accessible 3D visualisations from internal detailed information. | Mandatory under the GDPR and BIO, in line with the EU Cybersecurity Act |
| AP07 | Conform to reference architectures | All new facilities (validation service, rule engine, test environment) must fit within GEBORA and GEMMA. Deviations are reported explicitly in the PSA. | Mandatory within Dutch government (NORA principle) |
| AP08 | International alignment and reuse | Dutch agreements (ILS, IDS, data-driven rules) align with European approaches and contribute to international standardisation where possible. | EU directives and research programmes require alignment with international interoperability |
| AP09 | Common Ground | Governments share information through standardised APIs and layered data services instead of exchanging files. BM13 keeps permit data at the source and makes it available through open connections (DSGO/DSO). | Municipal information vision |
| AP10 | Organising together / joint municipal delivery | Municipalities develop and manage generic facilities together, so that knowledge, standards and facilities from BM13 are reusable across all municipalities and are not rebuilt by each one. | Municipal information vision |

<div class="note" title="Numbering of principles">

The numbers AP01–AP10 were added during the conversion to ReSpec, so that issues, decision points and follow-up documents (such as the solution architecture) can refer to a principle unambiguously.

</div>

## Business case {#businesscase}

<p class="leesniveau bestuurlijk">Executive</p>

The business case shows why the policy measure has social and economic value, which returns and benefits are expected, and how it contributes to the goals of the chain and of society.

| No. | Driver | Current situation | Future situation |
|---|---|---|---|
| D1 | Shorter permitting lead times | Applications are often returned several times because they are incomplete, so lead times can run to many months. Municipalities work sequentially and in a strongly document-driven way. | With BIM/IFC and upfront validation services, applicants can submit complete applications straight away; the process becomes shorter and more predictable. Municipalities can decide faster and let projects start sooner. |
| D2 | Higher quality and consistency of assessment | Assessment is largely manual and depends on the interpretation of individual permit officers, leading to differences in quality and outcomes. | Rules are made machine-readable and applied automatically through rule engines; assessment becomes reproducible and consistent. This strengthens legal certainty and reliability. |
| D3 | Fewer incomplete or incorrect applications | More than half of applications do not meet the submission requirements, causing delays, extra work and frustration for applicants and municipalities. | Applicants validate their BIM model beforehand with a national check facility, so only complete and correct applications are submitted. This prevents repeated back-and-forth. |
| D4 | Avoiding duplicate work by making better use of BIM data the market already produces | Developers and contractors create BIM models, but must also supply extra 2D documentation and PDFs specifically for the permit application. | Municipalities use the same BIM model directly for assessment, supervision and key registers. Duplicate work disappears and existing market data is used to the full. |
| D5 | Relieving permit officers by automating checks | Municipalities face shortages of VTH staff, who spend a lot of time on administrative checks and detailed reviews. | A rule engine performs routine checks automatically, so staff can focus on complex or high-risk aspects. This reduces workload and increases efficiency. |
| D6 | Better collaboration and trust between municipalities and market parties | Communication between applicants and municipalities is fragmented and often reactive, with unclear requirements and frustration on both sides. | National agreements on IFC, IDS and rules create a shared language and a transparent process. This builds trust and supports equal collaboration across the chain. |

<div class="issue" title="Quantify the business case">

The business case is currently qualitative. Decisions about the national facility need a quantitative basis: expected time saved per application, reduction in inadmissible applications, FTEs needed and saved, and the costs of building and running the facility. See [[[#beslispunten-en-afwijkingen]]].

</div>

## From goal to solution {#doel-naar-oplossing}

<p class="leesniveau technisch">Technical</p>

The table below shows how drivers and principles carry through into the other layers. This is the thread that the solution architecture develops further.

| Driver / principle | Organisation layer | Information layer | Application layer | Infrastructure layer |
|---|---|---|---|---|
| D1, D3 — lead time and completeness | validation process shifts to the applicant | IDS as a machine-readable submission requirement | IDS validation service, IDS publication service | national test and production environment |
| D2, D5 — quality and relief | assessment process largely automated | applicable rules, rulesets | machine-readable legislation service, rule engine | rule engine / validation service platform |
| D4, AP02 — record once | design and submission process based on the same model | IFC as the core file | BIM authoring software, archiving | archive facility |
| AP01 — open standards | — | IFC, IDS, NEN 2660, NEN 3610, STTR | OGC APIs, REST/JSON, Linked Data | Digikoppeling, TLS, OAuth 2.0 |
| AP04, AP09 — federated, Common Ground | data stays with the source holder | Linked Data, data services | API connections instead of file exchange | DSGO, DSO, publish–find–bind |
| AP05, AP06 — traceable, by design | accountability per check | validation report, assessment result | logging in every service | IAM, process monitoring, PKIoverheid |

## Relation to other layers and open points {#motivatie-open-punten}

<p class="leesniveau tactisch">Tactical</p>

- **Environment plans** differ per municipality. How municipal variation is accommodated in machine-readable rules has not yet been worked out.
- The **procurement obligation** for the national test and production environment is an assumption that must be checked legally.
- For the EU projects (CHEK, ACCORD, DigiChecks), it has not yet been decided which parts BM13 will adopt.
