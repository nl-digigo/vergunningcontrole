# Beheer, versiebeheer en doorontwikkeling

## Beheerorganisatie

| Rol | Invulling (voorstel) |
|---|---|
| Eigenaar en uitgever | VNG |
| Projectleiding, publicatiebesluit en reviewflow | Jeroen de Ruig (VNG) |
| Opsteller ILS en IDS (laag 2 BIM) | Lex Ransijn (VDCbase, in opdracht van VNG) |
| Afstemming en draagvlak | Pilot Gemeenten: Nieuwkoop, Apeldoorn, Veenendaal, Eindhoven, Rotterdam, Alkmaar, Sudwest-Fryslan, Groningen, Hengelo, Epe, ODMH, Utrecht
| Afstemming en draagvlak | Software leveranciers: Future Insight, Triply, Struck, D-Studio, BIM-Connected, Avolve, Solibri, Semmtech, IMAGEM
| Afstemming en draagvlak | Stuurgroep: BNA, NEPROM, NL Ingenieurs, Woningbouwers NL, digiGO, Bouwend Nederland |
| Beheer na afloop van Beleidsmaatregel 13 | Nog te bepalen VNG, DSO, digiGO, volgens BOMOS |

We scheiden managementverantwoordelijkheden (vaststellen, prioriteren) van productieverantwoordelijkheden (redigeren, IDS onderhouden).

## Wijzigingsprocedure

1. **Signaleren:** iedereen kan een GitHub-*issue* aanmaken met een sjabloon (vraag, fout, wijzigingsvoorstel). Gemeenten zonder GitHub-account melden per e-mail; de redactie zet die meldingen om in een issue.
2. **Beoordelen:** de redactie labelt het issue (`redactioneel`, `inhoudelijk`, `ids`, `beslispunt`) en koppelt het aan een release-mijlpaal.
3. **Uitwerken:** wijzigingen worden in een *branch* gemaakt en via een *pull request* ingediend, met ten minste één review door een andere redacteur.
4. **Besluiten:** redactionele wijzigingen neemt de redactie zelf mee. Inhoudelijke wijzigingen en beslispunten gaan naar het BM13-projectoverleg; wijzigingen met impact op de markt gaan naar digiGO.
5. **Publiceren:** bij een release wordt een tag gezet, het CHANGELOG bijgewerkt en de ReSpec-pagina opnieuw gegenereerd.

## Versiebeheer

- **Semantische versies:** `0.x` = concept, `1.0.0` = vastgesteld. *Major* = niet-compatibele wijziging in de IDS of acceptatiecriteria, *minor* = nieuwe eisen of checks, *patch* = redactioneel.
- IDS-bestanden krijgen hetzelfde versienummer als de ILS (`ids:info/version`). LET op deze moeten nog evt def hernummerd worden.
- **Onderliggende normen:** bij een nieuwe versie van IFC, IDS of bSDD *Omgevingswet-Ruimten* maken we een impactanalyse in een issue. Een oudere IFC-versie blijft minimaal één *minor*-release toegestaan.

## ISO 19650-transitieplan

De herziene ISO 19650-serie wordt naar verwachting eind 2026 vastgesteld. Zodra dat gebeurt:

1. passen we de terminologie aan (EIR → IPR *information production requirements*);
2. controleren we de hoofdstukindeling tegen het ILS-Referentiesjabloon;
3. brengen we dit uit als *minor*-release met een overgangstermijn.

## Community

- Openbare repository met issues en discussies als laagdrempelig meldpunt.
- Periodiek (voorstel: per kwartaal) een gebruikersoverleg met gemeenten, softwareleveranciers en modelleurs.
- Wijzigingen worden toegelicht in het CHANGELOG en bij grotere releases met een korte video.

## Implementatiepad (voorstel)

| Fase | Periode | Status van de ILS |
|---|---|---|
| Pilot | 2026 | Aanbevolen, bij pilotgemeenten |
| Opschaling | 2027 | Aanbevolen, opgenomen in het register van digiGO |
| Norm | Nog te bepalen | Mogelijk verplicht als indieningsvereiste bij digitale 3D-aanvragen |

## Ontwikkelagenda

- Informatieleveringsprocessen uitwerken volgens IDM (ISO 29481) in samenhang met de GEMMA-procesmodellen.
- Informatieprotocol opstellen (juridische status van het model).
- Welstand (ID11) en BAG-mutaties (ID12) toevoegen.
- Andere gebruiksfuncties dan wonen toevoegen.
- EU-regelgeving verkennen: digitaal productpaspoort (CPR) en digitaal gebouwenlogboek (EPBD).
