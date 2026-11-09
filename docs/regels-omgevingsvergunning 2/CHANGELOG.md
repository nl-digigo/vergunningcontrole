# Changelog

Dit project volgt [semantische versies](https://semver.org/lang/nl/). `0.x` = concept, `1.0.0` = vastgesteld.

## [0.1.0] – 2026-11-09

### Toegevoegd
- Mapstructuur met ReSpec, hoofdstukken, data en tools.
- `sparql/`: 7 SPARQL-bestanden uit het VNG Portaal (`SeedData/SPARQL`), zelfde bestandsnamen. `retrieve-building-elements.ttl` en `insert-topological-relations-ifcwall-ifcroof.ttl` stonden alleen in XML en zijn eruit gehaald.
- `sparql/weergave/`: 3 queries voor de 3D-weergave, uit de XML van de SHACL-shapes gehaald.
- `shacl/`: 5 SHACL-shapes uit het VNG Portaal (`SeedData/SHACL`).
- Beschrijvingen per bestand (hoofdstuk 03–05), vertaald uit de XML-uitleg van het portaal.
- `regels/BM13-R01` en `BM13-R02`: concepten 4a–4d uit de tracker (tabblad Layer 4); mappen R03–R17 klaar om te vullen.
- `data/catalogus.csv` (portaal-id → URI) en `data/regels-workflows.csv` (regel → workflow, SPARQL, SHACL).
- `tools/controleer-syntax.py`: syntaxcontrole van alle `.ttl`-bestanden.
- URI-afspraak voor de workflows (hoofdstuk 07).
- `assets/` met tabelstijl, `.nojekyll`, hoofdstuk 09 *Begrippen*, colofon.
- Engelse vertaling in `en/` (NL is leidend).
