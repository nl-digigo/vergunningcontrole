# Leeswijzer

## Doel

Gemeenten, softwareleveranciers en het VNG Portaal gebruiken dezelfde, openbare set regels. Iedereen kan een regel lezen, testen en verbeteren. Een verbetering op `main` werkt direct in de online test en in batchverwerking.

## Opbouw van de map

```
regels-omgevingsvergunning/
├── index.html            ReSpec-pagina (voegt de hoofdstukken samen)
├── config.js             ReSpec-configuratie
├── assets/               tabelstijl
├── en/                   Engelse vertaling (NL is leidend)
├── hoofdstukken/         beschrijvingen (Markdown, ReSpec)
├── sparql/               SPARQL-queries en -updates, één per bestand (.ttl)
│   └── weergave/         queries voor de 3D-weergave na validatie
├── shacl/                SHACL-shapes, één per bestand (.ttl)
├── regels/               uitwerking per regel BM13-R01 … R17 (tracker, delen 4a–4d)
├── data/
│   ├── catalogus.csv          elk bestand met portaal-id, URI, regels en status
│   └── regels-workflows.csv   per regel: workflow, SPARQL, SHACL
├── tools/controleer-syntax.py controleert de syntaxis van alle .ttl-bestanden
├── CHANGELOG.md
└── CONTRIBUTING.md
```

## Scheiding tussen code en beschrijving

Tot nu toe stond in het VNG Portaal per query een XML-bestand met id, uitleg en de query. Nu is dat gescheiden:

| Wat | Waar |
|---|---|
| uitvoerbare query of shape | `sparql/*.ttl`, `shacl/*.ttl` |
| uitleg voor mensen | `hoofdstukken/*.md` (dit document) |
| id, URI, status, gebruik per regel | `data/catalogus.csv` |
| welke stappen een regel uitvoert | workflow in het portaal, overzicht in `data/regels-workflows.csv` |

## Bestandsextensie

Het VNG Portaal gebruikt `.ttl` voor zowel SHACL (Turtle) als SPARQL. Die afspraak is overgenomen, zodat bestandsnamen in portaal en repository gelijk zijn. Een bestand in `sparql/` bevat dus SPARQL-tekst, geen Turtle.

## Vaste URI

```
https://nl-digigo.github.io/vergunningcontrole/regels-omgevingsvergunning/{map}/{bestand}.ttl
```

Zie [Koppeling met de workflows](#workflowkoppeling).
