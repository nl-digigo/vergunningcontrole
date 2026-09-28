# Beslispunten en afwijkingen {#beslispunten-en-afwijkingen}

<p class="leesniveau bestuurlijk">Bestuurlijk</p>

Dit hoofdstuk geeft een overzicht van de punten waarover volgens de stakeholders besluitvorming nodig is, met per punt een korte toelichting op de discussie. Punten die afwijken van de geldende kaders en (referentie)architecturen maken hier deel van uit. Per punt staat welke functie of welk gremium het besluit neemt om de afwijking op te heffen.

<div class="in-het-kort laag-besluit">

**In het kort**

In PSA v0.4 was dit hoofdstuk nog leeg. De punten hieronder zijn bij de omzetting **afgeleid uit open vragen en markeringen elders in de PSA**. Ze zijn een **voorstel**: het projectteam moet ze bevestigen, aanvullen en per punt een besluitnemer vastleggen.

</div>

## Beslispunten {#beslispunten}

| Nr | Beslispunt | Toelichting | Herkomst in PSA | Besluit door (voorstel) | Status |
|---|---|---|---|---|---|
| BP01 | Eigenaarschap en beheer van de landelijke proef- en productieomgeving | De PSA is hierover niet eenduidig: bij de toekomstige situatie staat „onder beheer van VNG (mogelijk via aanbesteding)”, bij het rule-engine-/validatieserviceplatform „VNG/DigiGO???”. Eigenaarschap bepaalt financiering, aanbesteding, beheer en aansprakelijkheid. | Infrastructuurlaag; toekomstige situatie | stuurgroep BM13 | open |
| BP02 | Aanbestedingsroute voor de landelijke voorziening | De omgeving komt waarschijnlijk boven de Europese drempelwaarde uit. Keuze: zelf bouwen, aanbesteden of een marktdienst afnemen. | Motivatielaag (2014/24/EU); gap-analyse | opdrachtgever BM13, met inkoopadvies | open |
| BP03 | Afbakening: toezicht, archivering en registratie | Deze processen staan in de architectuur maar vallen buiten scope. Besloten moet worden of en wanneer ze in een vervolg worden opgepakt, en wie daarvoor verantwoordelijk is. | Architectuurschets; organisatielaag | stuurgroep BM13 | open |
| BP04 | Betekenis van „digital twin” binnen BM13 | Het begrip is abstract en moet worden verduidelijkt: is het een visualisatievoorziening voor participatie, of een bredere informatievoorziening? | Applicatielaag | projectteam, ter bevestiging in de stuurgroep | open |
| BP05 | Juridische status van validatie- en toetsingsresultaten | Als indieners vooraf valideren en gemeenten automatisch toetsen: welke waarde heeft een rapport in de besluitvorming, en wie is aansprakelijk bij een fout in een regel of ruleset? | Organisatielaag (AP03, toetsingsproces) | BZK en VNG, met juridisch advies | open |
| BP06 | Eigenaarschap van de vertaling van regels naar rulesets | De vertaling van Bbl en omgevingsplan naar machineleesbare regels is een interpretatieslag. Wie stelt de vertaling vast en beheert haar? | Informatielaag; applicatielaag | regelhouders (BZK, gemeenten), met VNG | open |
| BP07 | Verplichte versus aanbevolen standaarden | Voor aanbesteding en voor leveranciers moet per standaard duidelijk zijn of die verplicht is en op welke grond. | Informatie-, applicatie- en infrastructuurlaag | architectuurboard / projectteam | open |
| BP08 | Kwantitatieve businesscase | Voor besluitvorming over investeringen in een landelijke voorziening is een kwantitatieve onderbouwing nodig. De cijfers in v0.4 moeten daarbij worden gelijkgetrokken: de situatieschets noemt „meer dan 90% incompleet”, de businesscase „meer dan de helft”. | Motivatielaag (businesscase) | opdrachtgever BM13 | open |
| BP09 | Rol van het DSO bij checks | Het DSO fungeert als poort en kan op termijn zelf checks uitvoeren. Past dat bij de rolverdeling tussen DSO en de landelijke proef- en productieomgeving? | Toekomstige situatie | BZK/DSO-programma en VNG | open |
| BP10 | Beheer van afsprakenstelsels (ILS, IDS, rulesets) | Beheer volgens BOMOS is genoemd als noodzaak; de beheerorganisatie is nog niet benoemd. | Gap-analyse | stuurgroep BM13, met digiGO | open |

## Afwijkingen {#afwijkingen}

<p class="leesniveau tactisch">Tactisch</p>

Principe AP07 vraagt om afwijkingen van GEBORA en GEMMA expliciet te melden. In PSA v0.4 zijn nog **geen afwijkingen** geïdentificeerd. Mogelijke kandidaten om te toetsen:

| Nr | Mogelijke afwijking | Toelichting | Te toetsen tegen | Besluit door (voorstel) | Status |
|---|---|---|---|---|---|
| AF01 | Tijdelijke landelijke proef- en productieomgeving | Een centrale landelijke voorziening kan op gespannen voet staan met federatief samenwerken (AP04) en Common Ground (AP09), afhankelijk van hoe data wordt opgeslagen. | GEMMA, Common Ground, GEBORA | architectuurboard | te toetsen |
| AF02 | Bestandsuitwisseling van IFC-modellen | Het uitwisselen van complete IFC-bestanden via het DSO wijkt af van het Common Ground-principe om data bij de bron te laten en via API's te bevragen. | Common Ground, GEMMA | architectuurboard | te toetsen |
| AF03 | Gebruik van marktspecifieke digital-twinplatforms | Het noemen van specifieke platforms kan op gespannen voet staan met leveranciersonafhankelijkheid (AP01). | Open standaarden, aanbestedingsregels | projectteam | te toetsen |

## Hoe een beslispunt wordt afgehandeld {#afhandeling-beslispunten}

<p class="leesniveau tactisch">Tactisch</p>

1. Een beslispunt of afwijking wordt als **issue** in de GitHub-repository vastgelegd, met het nummer uit deze tabel in de titel (bijvoorbeeld „BP01 — eigenaarschap proefomgeving”).
2. Het projectteam bereidt het besluit voor; de toelichting in de issue wordt aangevuld met opties en een advies.
3. Na het besluit wordt de tabel bijgewerkt (status *besloten*, met datum en gremium) en wordt de issue gesloten met een verwijzing naar het verslag.
4. Het besluit wordt verwerkt in de betreffende laag en vastgelegd in het wijzigingslog bij de volgende versie.
