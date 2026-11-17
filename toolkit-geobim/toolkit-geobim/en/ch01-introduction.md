# Introduction {#inleiding}

## Background {#aanleiding}

Building rules today are written in legal texts: the municipality's environment plan and the Buildings (Living Environment) Decree (Bbl). Software cannot read or apply those texts. As a result, assessing a building application is manual work: a permit officer interprets the rule, looks up the right data in drawings and maps, and does the calculation. That is slow, differs between municipalities and does not scale.

VNG Policy Measure 13 is working on a solution: making rules **machine-readable** (software can read them) and **machine-executable** (software can apply them to a BIM model and to geodata). Part of the assessment then becomes automatic, repeatable and the same for everyone.

## Purpose of this toolkit {#doel}

This toolkit brings together what a municipality or vendor needs to get started:

- a shared explanation of the **seventeen checks** and how they are assessed today;
- the **information requirements** per check: which data from the BIM model and which geodata are needed;
- the route from rule text to **machine-readable rule**, in layers;
- the **architecture** in which this can work nationally;
- the **decision points** that are still open.

## Audiences and reading levels {#doelgroepen}

Chapters and sections are marked with a reading level, so every reader can quickly see what is meant for them:

| Reading level | For whom | What you will find |
|---|---|---|
| <span class="leesniveau bestuurlijk">Executive</span> | executives, managers | the why, the frameworks and the choices |
| <span class="leesniveau tactisch">Tactical</span> | permit officers, information managers, VTH | how the process and the assessment change |
| <span class="leesniveau technisch">Technical</span> | architects, software vendors | data, standards, pseudocode and rule encoding |

## How to read this document {#leeswijzer}

- [[[#lagenmodel]]] explains the two ways this toolkit thinks in layers: the layers of a rule and the layers of the architecture.
- [[[#begrippen]]] contains the terms used throughout the toolkit.
- [[[#motivatielaag]]] to [[[#infrastructuurlaag]]] describe the architecture, from laws and regulations to infrastructure.
- [[[#regelinterpretatie]]] describes the check, working method and regulatory source for each rule.
- [[[#informatiebehoefte-geo-bim]]] describes which BIM and geodata each check needs.
- [[[#regelcodering]]] describes how a check is recorded in machine-readable form.
- [[[#beslispunten-en-afwijkingen]]] lists the open decision points.
- The annexes contain a fully worked example (rule #2), an overview of BIM viewers and the ILS specifications.

## Status of this document {#status-toelichting}

This is a **working draft**. Chapters may still change, disappear or be split up. Comments are welcome through the issues of the GitHub repository.

<div class="note" title="Translation status">

This English version is a translation of the Dutch original. Quoted rules and legal provisions are unofficial translations. Where the two versions differ, the Dutch version prevails.

</div>
