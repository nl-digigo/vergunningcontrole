# Layer model {#lagenmodel}

<p class="leesniveau tactisch">Tactical</p>

This toolkit thinks in layers in two ways. They look alike, but answer different questions.

- The **rule layers** (0 to 5) follow a single rule from legal text to software: *how does this rule become automatically checkable?*
- The **architecture layers** (motivation to infrastructure) describe the system around it: *what is needed nationally to make this work for all municipalities?*

## Rule layers: from legal text to software {#regellagen}

Every check passes through the same six layers. Each layer builds on the previous one.

| Layer | What it is | What a municipality sees | Where in this toolkit |
|---|---|---|---|
| **0 — Rule foundation** | legal source, interpretation and definitions | the rule text and how it is interpreted | [[[#regelinterpretatie]]], parts *Regulations* and *Remarks* |
| **1 — Check and approach** | what exactly is checked and how that is done today | the steps of the current manual check | [[[#regelinterpretatie]]], parts *Check* and *Working method* |
| **2 — Information requirements** | which BIM and geodata are needed | which data the application must contain | [[[#informatiebehoefte-geo-bim]]] and [[[#ils-omgevingsvergunning]]] |
| **3 — Procedure** | software-independent steps (pseudocode) | the calculation in plain words | [[[#voorbeeld-regel-2]]] |
| **4 — Machine-readable rule** | a formal representation that software can read | nothing — this is for software | [[[#regelcodering]]] |
| **5 — Reference implementation** | how a vendor performs the check | the result in their own software | [[[#voorbeeld-regel-2]]] |

Layers 0 to 2 have been worked out for all seventeen checks. Layers 3 to 5 have been worked out for rule #2 as an example; the other checks will follow.

Different software packages can implement the same agreed rule in their own way. What is fixed is the meaning of the rule and the test case, not the technology.

<div class="issue" title="Additions to layers 1 and 2">

- Give municipalities a standardised naming for the objects that rules refer to; STOP/TPOD does not provide this. Examples: reference level (peil), building height.
- Include the minimum data requirements for the seventeen checks (to be agreed with Gerlof).
- Ensure consistent naming on the municipal side: how municipalities record their data in STOP/TPOD.

</div>

## Architecture layers: the system around it {#architectuurlagen}

The architecture chapters follow a fixed structure. Each chapter starts with an *In brief* box.

| Layer | Question | Chapter |
|---|---|---|
| Motivation | why, and within which frameworks? | [[[#motivatielaag]]] |
| Organisation | who does what, and what shifts? | [[[#organisatielaag]]] |
| Information | which data and standards? | [[[#informatielaag]]] |
| Application | which facilities and connections? | [[[#applicatielaag]]] |
| Infrastructure | which systems and technology does it run on? | [[[#infrastructuurlaag]]] |

What still needs to be decided is collected in [[[#beslispunten-en-afwijkingen]]].
