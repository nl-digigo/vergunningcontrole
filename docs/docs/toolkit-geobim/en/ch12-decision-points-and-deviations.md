# Decision points and deviations {#beslispunten-en-afwijkingen}

<p class="leesniveau bestuurlijk">Executive</p>

This chapter gives an overview of the points on which, according to the stakeholders, a decision is needed, with a short explanation of the discussion for each point. Points that deviate from the applicable frameworks and (reference) architectures are included. For each point, it states which function or body takes the decision that resolves the deviation.

<div class="in-het-kort laag-besluit">

**In brief**

In PSA v0.4 this chapter was still empty. The points below were **derived during the conversion from open questions and markings elsewhere in the PSA**. They are a **proposal**: the project team must confirm and complete them, and record a decision-maker for each point.

</div>

## Decision points {#beslispunten}

| No. | Decision point | Explanation | Origin in PSA | Decision by (proposal) | Status |
|---|---|---|---|---|---|
| BP01 | Ownership and management of the national test and production environment | The PSA is not consistent on this: the future situation says "managed by VNG (possibly through procurement)", while the rule engine / validation service platform says "VNG/DigiGO???". Ownership determines funding, procurement, management and liability. | Infrastructure layer; future situation | BM13 steering group | open |
| BP02 | Procurement route for the national facility | The environment will probably exceed the European threshold. Options: build it ourselves, procure it, or buy a market service. | Motivation layer (2014/24/EU); gap analysis | BM13 client, with procurement advice | open |
| BP03 | Scope: supervision, archiving and registration | These processes are in the architecture but out of scope. It must be decided whether and when they will be taken up in a follow-up, and who is responsible. | Architecture sketch; organisation layer | BM13 steering group | open |
| BP04 | Meaning of "digital twin" within BM13 | The concept is abstract and must be clarified: is it a visualisation facility for participation, or a broader information facility? | Application layer | project team, for confirmation by the steering group | open |
| BP05 | Legal status of validation and assessment results | If applicants validate upfront and municipalities assess automatically: what weight does a report carry in decision-making, and who is liable for an error in a rule or ruleset? | Organisation layer (AP03, assessment process) | BZK and VNG, with legal advice | open |
| BP06 | Ownership of translating rules into rulesets | Translating the Bbl and environment plans into machine-readable rules is an act of interpretation. Who approves the translation and manages it? | Information layer; application layer | rule holders (BZK, municipalities), with VNG | open |
| BP07 | Mandatory versus recommended standards | For procurement and for vendors, it must be clear for each standard whether it is mandatory and on what grounds. | Information, application and infrastructure layers | architecture board / project team | open |
| BP08 | Quantitative business case | Decisions on investing in a national facility need a quantitative basis. The figures in v0.4 must also be aligned: the situation sketch mentions "more than 90% incomplete", the business case "more than half". | Motivation layer (business case) | BM13 client | open |
| BP09 | Role of the DSO in checks | The DSO acts as a gateway and may eventually perform checks itself. Does that fit the division of roles between the DSO and the national test and production environment? | Future situation | BZK/DSO programme and VNG | open |
| BP10 | Management of agreement frameworks (ILS, IDS, rulesets) | Management according to BOMOS is named as a necessity; the management organisation has not yet been appointed. | Gap analysis | BM13 steering group, with digiGO | open |

## Deviations {#afwijkingen}

<p class="leesniveau tactisch">Tactical</p>

Principle AP07 requires deviations from GEBORA and GEMMA to be reported explicitly. In PSA v0.4, **no deviations** have been identified yet. Possible candidates to assess:

| No. | Possible deviation | Explanation | To be assessed against | Decision by (proposal) | Status |
|---|---|---|---|---|---|
| AF01 | Temporary national test and production environment | A central national facility may be at odds with federated collaboration (AP04) and Common Ground (AP09), depending on how data is stored. | GEMMA, Common Ground, GEBORA | architecture board | to be assessed |
| AF02 | File exchange of IFC models | Exchanging complete IFC files via the DSO deviates from the Common Ground principle of keeping data at the source and querying it through APIs. | Common Ground, GEMMA | architecture board | to be assessed |
| AF03 | Use of market-specific digital twin platforms | Naming specific platforms may be at odds with vendor independence (AP01). | Open standards, procurement rules | project team | to be assessed |

## How a decision point is handled {#afhandeling-beslispunten}

<p class="leesniveau tactisch">Tactical</p>

1. A decision point or deviation is recorded as an **issue** in the GitHub repository, with the number from this table in the title (for example "BP01 — ownership of test environment").
2. The project team prepares the decision; the explanation in the issue is supplemented with options and a recommendation.
3. After the decision, the table is updated (status *decided*, with date and body) and the issue is closed with a reference to the minutes.
4. The decision is incorporated into the relevant layer and recorded in the change log of the next version.
