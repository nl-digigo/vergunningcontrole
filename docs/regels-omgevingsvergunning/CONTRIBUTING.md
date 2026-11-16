# Bijdragen

1. **Vraag of fout?** Maak een issue aan.
2. **Bestaande query of shape verbeteren?** Pas het `.ttl`-bestand aan in `sparql/` of `shacl/`. **Verander de bestandsnaam niet**: workflows verwijzen ernaar. Werkt de nieuwe versie anders dan de oude (andere uitvoer, andere eigenschappen), maak dan een nieuw bestand met een nieuwe naam.
3. **Nieuwe query of shape?** Eén query of shape per bestand, naam in kleine letters met koppeltekens (`insert-…`, `validate-…`, `retrieve-…`). Voeg een sectie toe in het juiste hoofdstuk en een regel in `data/catalogus.csv`.
4. **Regel uitwerken (R03–R17)?** Zet de delen 4a–4d in `regels/BM13-Rxx/` en werk `hoofdstukken/06-regels.md` bij.
5. **Altijd vóór een pull request:** `python tools/controleer-syntax.py` moet zonder fouten eindigen.
6. Minimaal één andere redacteur reviewt. Inhoudelijke wijzigingen en beslispunten gaan langs het BM13-projectoverleg.
7. Noteer de wijziging in `CHANGELOG.md`.
