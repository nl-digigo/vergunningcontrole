# Reading guide and introduction

## Who is this for?

| Reader | What you get from this document | Start at |
|---|---|---|
| Permit officer / VTH staff at a municipality | What information you can expect and how to check it | [Scope](#scope), [Acceptance criteria](#acceptatie) |
| Applicant, architect, modeller | What you need to model and deliver | [Table of requirements](#vereisten), [LOIN](#loin), [Information production standard](#standaard) |
| Software vendor | How the requirements are made machine-readable and how the checks work | [LOIN](#loin), [Geometric checking](#geometrie), folder `ids/` |
| Policy maker, digiGO adviser | How this ILS relates to the ILS assessment framework | [Assessment framework](#toetsing) |

## Introduction

This ILS describes the agreements on delivering data to the VTH domain (*vergunningverlening, toezicht en handhaving*: permitting, supervision and enforcement) when applying for an environmental permit. The document is an **example EIR** (*Exchange Information Requirements*) of a municipality: a generic request that any municipality can adopt and add its own requirements to.

The ILS follows NEN-EN ISO 19650-1/-2. We are actively following the revision of the ISO 19650 series (including the move from EIR to *information production requirements*, IPR). See [Management and version control](#beheer).

## Position in the layer model of the toolkit

The toolkit describes each check in six layers. This ILS brings together **layer 2** for all 17 checks:

| Layer | Content | Relation to this ILS |
|---|---|---|
| 0 | Terms and legal source (law, zoning plan, NEN standards) | Referenced from the [Table of requirements](#vereisten) |
| 1 | Method: procedure, context, interpretation | Outside this ILS (check sheet per check) |
| **2** | **Data requirements: BIM and geo information** | **This ILS** |
| 3 | Pseudocode: steps, outcome parameters, municipal variation | Uses the data from layer 2 |
| 4 | Reference encoding: machine-readable rules (SHACL, SPARQL) | See [Geometric checking](#geometrie) |
| 5 | Implementation examples: maturity levels, videos, code | Outside this ILS |

The check sheets (one folder per check) refer to the relevant row in the [Table of requirements](#vereisten) for layer 2.
