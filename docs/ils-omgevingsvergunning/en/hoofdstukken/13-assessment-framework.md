# Accountability against the digiGO ILS assessment framework

For each criterion of the *Toetsingskader ILS* (ILS assessment framework, instrument v1.1), this chapter shows where and how this ILS meets it. It is a **self-assessment** in preparation for the formal assessment. The scores (1–10) are given by the independent adviser. Criterion names are translated; the Dutch framework is authoritative.

Criterion type: **T** = threshold (*drempel*) · **W** = weighty (*zwaarwegend*) · **A** = ambition level (*ambitieniveau*; signal, not counted).

Status: ✅ in place · 🟡 partly / fill-in format · ⬜ still to do

## 4.1 Openness

| Criterion | Type | Status | Justification | Location |
|---|---|---|---|---|
| Free availability | T | ✅ | Everything is published openly on GitHub (ReSpec page, IDS files, CSV), free of charge and without an account | README, [Reference information](#referentie) |
| No exclusion | T | ✅ | Only open standards (IFC, IDS, bSDD, BCF); no preference for any software. Everyone can take part | [Information production standard](#standaard) |
| Open development process | W | 🟡 | BM13 provides the framework. Input comes through public issues and pull requests and through the consultation of municipalities (Word version with targeted questions) | [Management](#beheer) |

## 4.2 Design

| Criterion | Type | Status | Justification | Location |
|---|---|---|---|---|
| Basis in an information model | A | 🟡 | IFC (ISO 16739-1) as the information model, with bSDD *Omgevingswet-Ruimten* for the Dutch terms; GEMMA/NORA for the process context. **Decision question for digiGO:** does IFC count as an information model? | [Reference information](#referentie) |
| Traceability of the motivation layer | W | ✅ | Traceable from municipal task (permitting, supervision, assessment, enforcement) through information objective and check to IDS | [Perspectives](#perspectieven), [Table of requirements](#vereisten) |
| Perspectives and purposes | W | ✅ | 17 checks, split over 2 activities (OPA, TBA), residential building type, as part of the substantive handling of the application | [Perspectives](#perspectieven) |
| Management/production separation | A | ✅ | The municipality steers; the applicant produces the model | [Perspectives](#perspectieven), [Responsibilities](#verantwoordelijkheden) |
| Information production milestones | T | ✅ | M1 preliminary consultation, M2 OPA application, M3 TBA application, M4 acceptance; linked to STB 2025 and GEMMA, with a fill-in format for the schedule | [Milestones](#mijlpalen) |
| Level of Information Need | W | ✅ | Built from the IDS (alphanumeric) plus geometric requirements G1–G6 | [LOIN](#loin) |
| Naming and status codes | W | 🟡 | Recommended convention according to ISO 19650; no national agreement yet | [Information production standard](#standaard) |
| Alignment with design guidelines and principles | W | 🟡 | Explanation of the criterion: does the ILS follow the ten principles for data exchange? Here: machine-readable (IDS), open international standards (IFC), common language (bSDD), single registration and multiple use (BAG/BRK IDs), function before technology. Still to be checked explicitly | This chapter |
| Alignment with European implementation guidelines | W | 🟡 | Reference to NPR-CEN/TR 17654 and 17439 included; structure still to be compared | [Information production standard](#standaard) |
| Acceptance criteria | T | ✅ | AC1–AC7: schema, header, IDS validation, georeferencing, geometry, quantity check, naming. Dependency on the IFC parser noted | [Acceptance criteria](#acceptatie) |
| Reference information and shared resources | W | ✅ | Official IFC schema, bSDD publication, IDS, NL-SfB, Naa.K.T., base registers | [Reference information](#referentie) |
| Document form: explanation and data template | W | ✅ | Explanation (this ReSpec page) plus data template (42 IDS files and CSV). A more extensive explanatory part will follow | Folders `ids/`, `data/` |

## 4.3 Suitability

| Criterion | Type | Status | Justification | Location |
|---|---|---|---|---|
| Scope | T | ✅ | Municipality, OPA/BOPA and technical building activity, residential function | [Scope](#scope) |
| Field of application | T | ✅ | Roles according to GEMMA and ISO 19650, with a responsibility matrix | [Scope](#scope), [Responsibilities](#verantwoordelijkheden) |
| Alignment with other ILSs | W | ✅ | Aligned with ILS O&E on the use of `ObjectType`; talks with miniBIM; principles of the BIM basis ILS followed; based on the ILS voor Ruimten | [Position](#scope) |
| Up to date | W | ✅ | IFC 4.3, IDS 1.0, ISO 7817-1:2024; builds on the DSGO agreements; follows the ISO 19650 revision | [Management](#beheer) |
| Quality of the underlying information model | W | ✅ | IFC is ISO-adopted and widely used across the sector; aligned with GEMMA | [Reference information](#referentie) |
| Content coverage | T | 🟡 | Based on the 17 checks for municipalities, it is clear per category what, who, when and why. The organisation and asset perspectives are described, but the OIR/AIR themselves are out of scope | [Table of requirements](#vereisten), [Perspectives](#perspectieven) |

## 4.4 Standards and interoperability

| Criterion | Type | Status | Justification | Location |
|---|---|---|---|---|
| International Psets | W | ✅ | No additional Psets. There is a method for filling in attributes: `IfcSpace`, `IfcSpatialZone` and `IfcZone` are extended with `ObjectType` values from the bSDD | [Information production standard](#standaard) |
| Machine readability | A | ✅ | 42 IDS 1.0 files | Folder `ids/` |
| IFC version | W | ✅ | IFC 4.3 (ISO 16739-1:2024); IFC4 ADD2 TC1 temporarily allowed | [Information production standard](#standaard) |
| Information delivery process | A | ⬜ | Desired: IDM (ISO 29481) together with the GEMMA process models | [Management](#beheer) |
| Prepared for EU regulations | A | ⬜ | More information needed first (DPP/CPR, digital building logbook/EPBD) | [Management](#beheer) |

## 4.5 Development and management

| Criterion | Type | Status | Justification | Location |
|---|---|---|---|---|
| Management organisation | T | 🟡 | VNG is owner and publisher; the project leader (Jeroen de Ruig) takes the publication decision. Structural management after BM13 is still to be decided | [Management](#beheer) |
| Change procedure | W | 🟡 | Proposal worked out (issues → PR → review → decision → release) | [Management](#beheer) |
| Version control | W | 🟡 | Proposal: semver, tags, CHANGELOG, impact analysis for new standard versions | [Management](#beheer) |
| ISO transition plan | A | 🟡 | Three-step proposal | [Management](#beheer) |
| Community involvement | A | 🟡 | Proposal: issues, discussions and a quarterly user meeting | [Management](#beheer) |

## 4.6 Support and adoption

| Criterion | Type | Status | Justification | Location |
|---|---|---|---|---|
| Industry acceptance | W | 🟡 | Through the steering group, with BNA, NEPROM, NL Ingenieurs, Woningbouwers NL, digiGO and Bouwend Nederland | — |
| End-user consultation | W | 🟡 | Consultation held for the ILS voor Ruimten; consultation of municipalities on the checks is ongoing | — |
| Implementation path | W | 🟡 | Proposal: pilot 2026, scale-up 2027 | [Management](#beheer) |

## 4.7 Alignment with the ILS reference template

| Criterion | Type | Status | Justification | Location |
|---|---|---|---|---|
| Position relative to related documents | W | 🟡 | Table of related documents. Recommendation: also draft an information protocol, responsibility matrix and IDMs | [Position](#scope) |
| Content/format distinction for project-specific parts | W | ✅ | Explanation of the criterion: do not leave project-specific parts empty, but provide a fixed fill-in format. Done here for project information, team and milestones | [Milestones](#mijlpalen), [Responsibilities](#verantwoordelijkheden) |
| Coverage of mandatory parts | T | ✅ | See the mapping below | This chapter |
| Content quality of Part A and B | W | — | To be assessed by an expert (tab *Inhoudelijke kwaliteit*) | — |

### Mapping to the ILS reference template

| Part | Component (template) | Template status | Chapter in this ILS |
|---|---|---|---|
| A | Scope and field of application | Mandatory | [Scope](#scope) |
| A | Position relative to related documents | Mandatory | [Scope](#scope) |
| A | Perspectives and purposes | Mandatory | [Perspectives](#perspectieven) |
| A | Acceptance criteria | Mandatory | [Acceptance criteria](#acceptatie) |
| A | Information production standard | Mandatory | [Information production standard](#standaard) |
| A | Production methods and procedures | Mandatory | [Information production standard](#standaard), [Geometric checking](#geometrie) |
| A | Reference information and shared resources | Mandatory | [Reference information](#referentie) |
| A | Information production team / responsibility matrix | Mandatory | [Responsibilities](#verantwoordelijkheden) |
| A | Project information | Mandatory | [Milestones](#mijlpalen) (fill-in format) |
| A | Information production milestones and schedule | Mandatory | [Milestones](#mijlpalen) |
| A | Level of Information Need | Mandatory | [LOIN](#loin) |
| A | Basis in an information model | Optional | [Reference information](#referentie) |
| A | Management/production separation | Optional | [Perspectives](#perspectieven) |
| B | Object type / element structure (OTL) | Mandatory | bSDD *Omgevingswet-Ruimten*; [LOIN](#loin) |
| B | Parameter list per element | Mandatory | [LOIN per sub-specification](#loin) |
| B | Enumerations / value lists | Mandatory | In the IDS (`xs:enumeration`) and the bSDD |
| B | Phase columns | Mandatory | [Milestones](#mijlpalen), column *Minimum IDS set* |
| B | Project sheet / execution plan | Mandatory | [Milestones](#mijlpalen) (fill-in format) |
| B | IDS validation file | Optional | Folder `ids/` |
