# Wat de SPARQL- en SHACL-regels doen {#uitleg-regelcodering}

<p class="leesniveau tactisch">Tactisch</p>

Dit hoofdstuk legt in gewone taal uit wat de machineleesbare regels doen. Er staat geen code in. De code zelf staat in [[[#regels-omgevingsvergunning]]].

## Hoe een controle werkt {#uitleg-werking}

Een controle verloopt altijd in vier stappen:

1. **Model inlezen.** Het IFC-model van de aanvrager wordt omgezet naar een vorm die de computer kan doorzoeken. Van elk bouwdeel wordt ook de vorm (geometrie) opgeslagen.
2. **Omgeving erbij halen.** De computer haalt de regels op die op de locatie gelden, zoals de bestemmingsvlakken uit het omgevingsplan.
3. **Afleiden (SPARQL).** De computer berekent wat nodig is voor de toets: hoe groot een bouwdeel is, waar het op de kaart ligt, hoe hoog het komt, of het binnen een vlak ligt. Die uitkomsten worden bij het model opgeslagen.
4. **Toetsen (SHACL).** De computer vergelijkt de uitkomsten met de eis. Voldoet een bouwdeel niet, dan komt het in het validatierapport, met een melding en het nummer (GlobalId) van het bouwdeel. Het portaal toont die bouwdelen in een 3D-viewer.

Afleiden en toetsen zijn bewust gescheiden. Zo kan iedereen de eis lezen zonder de rekenstappen te hoeven begrijpen, en kan een leverancier anders rekenen zolang de uitkomst gelijk is.

## Regel #1: Gebruiksfunctie komt overeen met bestemming {#uitleg-regel-1}

**Wat wordt getoetst.** Ligt het gebouw helemaal binnen een vlak waar wonen is toegestaan?

**Hoe de computer dat doet.**

1. Hij leest uit het model waar het gebouw op de kaart staat (de georeferentie).
2. Hij haalt de bestemmingsvlakken op binnen 400 meter rond die plek, met de bestemming *wonen* of *gemengd*.
3. Hij maakt van elk bouwdeel een bovenaanzicht: de afdruk op de grond (footprint).
4. Per bouwdeel bepaalt hij hoe die afdruk zich verhoudt tot de woonvlakken: ligt hij er helemaal binnen, steekt hij erbuiten, of ligt hij er helemaal naast?
5. Hij toetst: elk bouwdeel dat **niet helemaal binnen** een woonvlak ligt, is een overtreding.

**Wat je in het rapport ziet.** Per bouwdeel dat buiten het vlak uitsteekt een melding met het GlobalId. In de 3D-viewer zie je die wanden samen met de woonvlakken.

**Extra controles bij deze regel.**

- *Maat van de wanden.* Elke wand moet een realistische maat hebben: per richting minstens 1 en hoogstens 100 meter. Zo valt een model met verkeerde eenheden (millimeters in plaats van meters) direct op.
- *Maat van het hele model.* Het gebouw als geheel moet binnen dezelfde grenzen vallen. Dat vangt ook een verkeerde plaatsing op de kaart af.

**Nog open.** De afleiding gebruikt nu alleen *wonen*, terwijl ook *gemengd* wordt opgehaald. Het concept in de tracker maakt de toegestane bestemmingen, de randtolerantie (1 cm) en de zoekstraal instelbaar per gemeente.

## Regel #2: Maximale bouwhoogte {#uitleg-regel-2}

**Wat wordt getoetst.** Is het gebouw niet hoger dan het omgevingsplan toestaat?

**Hoe de computer dat nu doet (eerste versie).**

1. Hij berekent van elk bouwdeel het hoogste punt.
2. Hij zoekt de hoogste wand in het model.
3. Hij toetst: een bouwdeel dat meer dan 1 meter boven de hoogste wand uitsteekt, is een overtreding.

Dit is een eerste, vereenvoudigde controle. Hij vindt uitschieters, maar vergelijkt nog niet met de maximale bouwhoogte uit het plan.

**Hoe het concept het gaat doen.**

1. Hij bepaalt het **peil**: het gemiddelde niveau van de aangrenzende weg, of het ontwerppeil, afhankelijk van de zone. Bron: gemeentelijke hoogtegegevens, anders het AHN.
2. Hij zoekt per hoogtevlak in het plan het hoogste punt van het gebouw.
3. Bouwhoogte = hoogste punt min peil.
4. Schoorstenen en liftopbouwen tellen niet mee, zolang ze niet meer dan 1,5 meter extra hoogte geven.
5. Hij toetst: is de bouwhoogte hoger dan het maximum plus 5 cm meettolerantie, dan is het een overtreding. Ontbreekt de gemeten of de toegestane hoogte, dan meldt hij dat ook.
6. Per hoogtevlak komt er een resultaat: *voldoet* of *voldoet niet*, met de gemeten waarde, de toegestane waarde en het hoogste bouwdeel als bewijs.

## Regel #3 tot en met #17 {#uitleg-regel-3-17}

Voor deze regels is de codering nog niet gemaakt. Wat elke regel nodig heeft, staat in [[[#juridische-begrippen]]].

## Hulpstappen die meerdere regels gebruiken {#uitleg-hulpstappen}

| Stap | Wat hij doet, in gewone taal |
|---|---|
| IFC-woordenboek laden | Laadt de officiële lijst van IFC-begrippen (wand, dak, ruimte …), zodat de computer weet welke soorten bouwdelen er zijn. |
| Bestemmingsvlakken ophalen | Haalt bij het omgevingsplan de vlakken op rond de plek van het gebouw. |
| Omhullende doos berekenen | Zet om elk bouwdeel de kleinste doos die er precies omheen past. Daarmee zijn lengte, breedte en hoogte bekend. |
| Bovenaanzicht maken | Maakt van elk bouwdeel de afdruk op de grond, zoals je het op een kaart ziet. |
| Ligging t.o.v. vlak bepalen | Bepaalt voor elk bouwdeel of het binnen, deels buiten of buiten een vlak ligt. |
| Bouwdelen opvragen | Geeft een lijst van alle bouwdelen met hun vorm, bijvoorbeeld om te controleren of het model goed is ingelezen. |

## Wat het rapport betekent {#uitleg-rapport}

- **Voldoet** (`sh:conforms true`): geen enkel bouwdeel overtreedt de eis.
- **Voldoet niet** (`sh:conforms false`): er is minstens één overtreding. Per overtreding staat erbij welk bouwdeel het is, welke eis het betreft en welke waarde is gevonden.
- **Geen uitkomst**: als informatie ontbreekt (bijvoorbeeld geen georeferentie in het model), kan de computer niet toetsen. Dat hoort de IDS-controle vooraf al te melden.

De computer toetst alleen wat meetbaar is. Keuzes die een mens moet maken, zoals een beroep op gelijkwaardigheid, blijven bij de behandelaar.
