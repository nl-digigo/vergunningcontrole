# BM13 — GitHub-publicatiestrategie en rolverdeling

**Datum:** 14 september 2026
**Bron:** expertconsult met Elisabeth de Vries (digiGO) van 14 september, plus de projectoverleggen van 17 en 24 augustus en 7 september, de bila's met Jeroen (28 aug, 3 en 10 sep), de GitHub-sessies met Gerlof en Siham (19 en 20 aug) en het overleg met Rolf Jonker over BIM naar GEO (28 aug).
**Status:** voorstel ter vaststelling in het projectoverleg

---

## 1. Waar we staan

We hebben een repo bij digiGO met een aparte branch waarin de 17 checks in lagen 0 t/m 5 in één ReSpec-document worden gezet. Dat document is work in progress, de lagen zijn onderling hernoemd en niet meer consistent, afbeeldingen staan in de markdown-bestanden zelf, er is nog geen begrippenlijst, geen mediamap, geen licentie en geen releaseafspraak. Gerlof heeft daar drie issues voor aangemaakt. Daarnaast staat er een VNG-repo van Peter die nog samengevoegd moet worden.

Het consult met Elisabeth leverde één inhoudelijk kernpunt op dat groter is dan alle tips bij elkaar: **het model van één document met vijf lagen gaat niet werken.** Jeroen verwoordde het zelf al tijdens de sessie — de bovenste laag is publiceerbaar, de onderste laag is nog maanden werk, en als we die aan elkaar knopen kunnen we pas publiceren als het traagste onderdeel klaar is. Elisabeth bevestigde dat en gaf de oplossing: splits naar doelgroep, houd de hoofdstukken als losse markdown-bestanden, en laat de *index* bepalen welke hoofdstukken in welk document terechtkomen. Eén hoofdstuk kan in twee documenten zitten.

Dat is de spil van deze strategie. De rest volgt daaruit.

---

## 2. Zes besluiten die deze maand vallen

| # | Besluit | Advies | Wie besluit |
|---|---|---|---|
| 1 | Eén document met lagen, of een documentfamilie per doelgroep? | **Documentfamilie.** Anders is publicatie gegijzeld door de traagste laag. | Projectteam |
| 2 | Repo-thuis: digiGO of VNG? | **Blijf voorlopig bij digiGO.** Elisabeth: je kunt later verhuizen met behoud van volledige historie. Verhuizen kost nu tijd en levert niets op. Wel nu vastleggen dat het besluit uiterlijk bij v1.0 valt. | Jeroen, met Peter |
| 3 | Licentie | **CC BY voor documenten, open source voor code/queries/IDS.** Dat is wat Elisabeth voor digiGO doet en het is wat leveranciers nodig hebben om de IDS in hun software op te nemen. | Jeroen + Lex, aankaarten bij digiGO |
| 4 | Wie doet het beheer? | **Splits het in tweeën: Peter technisch, Siham redactioneel.** Niet bij Lex — die houdt alleen de ILS/IDS. Zie §4. | Projectteam |
| 5 | Statusmodel | `Werk in uitvoering` → `Gedeeld` → `Definitief` (7 sep afgesproken) koppelen aan de ReSpec `spec-status` in de config. | Peter |
| 6 | Publiceren we het beschrijvende checks-document los, eind september? | **Ja.** Het is af, de koplopers hebben het bekeken, het is het eerste échte wapenfeit. | Jeroen |

---

## 3. De strategie

### 3.1 Repo, branches en publicatie

Elisabeth werkt bij de NLCS met vier sporen, en dat model past één-op-één op ons:

- **`main`** — de actuele, geldende versie. Hier staat wat wij als team "dit geldt nu" noemen.
- **`acceptatie`** — hier zetten we een release klaar waarop softwareleveranciers kunnen testen. Voor ons is dit de plek voor een IDS-release: leveranciers testen acceptatie-x.y, geven foutmeldingen terug, en pas als het schoon is wordt het de nieuwe actuele release. Dit is precies wat we op 28 september aan de leveranciers kunnen aanbieden.
- **`development`** — schetsen, ideeën, halve pseudocode. Rommel mag hier.
- **`docs`** — de map van waaruit GitHub Pages publiceert. Alles wat hier staat, staat online.

De documenten zelf krijgen **geen eigen branch per versie**. Elisabeth was daar expliciet over: ReSpec-documenten worden vanaf één vaste plek gepubliceerd, en versies onderscheiden zich door de padnaam (`/checks/` voor v1, `/checks/2/` voor v2). Branches zijn voor code en voor acceptatie, niet voor documentversies.

Onze huidige branch wijkt sterk af van `main`. Elisabeth' advies: accepteer dat in deze fase, gooi `main` in één keer om en commit opnieuw. Git ziet verplaatste bestanden als nieuwe bestanden, dat is geen ramp. Doe dat slepen lokaal in de verkenner, niet in de webinterface.

### 3.2 Van één lagen-document naar een documentfamilie

Het voorstel, gebaseerd op wat Elisabeth over documentatietheorie zei en op onze eigen lagen 0–7:

| Document | Doelgroep | Aard | Lagen | Status nu |
|---|---|---|---|---|
| **Bedoeling en achtergrond** | bestuurders, managers | levend document, met managementsamenvatting | 0 | te schrijven |
| **Handleiding voor gemeenten** | vergunningverleners, VTH | levend document | 0–2 | grotendeels aanwezig |
| **De 17 checks — beschrijvend** | gemeenten + leveranciers | versies, per release bevroren | 1–2 | **bijna af — eerste publicatie** |
| **Technische specificatie / pseudocode** | softwareleveranciers | versies, per release bevroren | 3–5 | work in progress |
| **ILS Omgevingsvergunning + IDS** | leveranciers, architecten | versies, gekoppeld aan acceptatie-branch | — | in ontwikkeling (Lex) |

Twee dingen maken dit werkbaar:

**Eén hoofdstuk kan in meerdere documenten.** Elisabeth doet dat bij haar informatiemodel verkeersborden: de uitleg over wat je vastlegt staat zowel in de leverancierhandleiding als in de gebruikershandleiding, met bij de leveranciers de code eronder. Wij kunnen dus per check één markdown-bestand met de beschrijving hebben dat in twee documenten opduikt, met de pseudocode alleen in de technische.

**De index bepaalt de inhoud.** Wil je publiceren terwijl niet alles af is, dan zet je alleen de klare hoofdstukken in de index. Gerlofs vraag — "kunnen we alleen de checks publiceren die tot op automatiseringsniveau zijn uitgewerkt?" — is daarmee beantwoord: ja, dat is precies waar de index voor is.

Praktisch: **één markdown-bestand per check**, plus losse bestanden voor inleiding, begrippen, en de toelichtende hoofdstukken. Dat is ook de enige manier waarop vier mensen tegelijk kunnen schrijven zonder merge-conflicten — Elisabeth: als iedereen in zijn eigen hoofdstuk zit is er niets aan de hand.

Er is bovendien een technische reden om te knippen: ReSpec bouwt de HTML in de browser op en een document van honderden pagina's laadt traag.

### 3.3 Werkwijze: iedereen lokaal

Niet meer in de webinterface van GitHub werken. Daar duurt het een kwartier voor je je wijziging terugziet.

1. **GitHub Desktop** — repository klonen naar de eigen computer.
2. **Visual Studio Code** (gratis, Microsoft Store) — de markdown-bestanden bewerken en met *Go Live* de ReSpec direct naast je tekst zien renderen. Elisabeth werkt met de code op het ene scherm en de gerenderde pagina op het andere.
3. **Committen mag vaak** — per afgeronde paragraaf, niet per dag. Hoe vaker je commit en refresht, hoe kleiner de kans op botsingen.
4. **Maar: nooit kapot committen.** ReSpec is gevoelig; één verkeerd leesteken in een opsomming en een heel tekstblok verdwijnt uit de publicatie. Dus: lokaal bekijken, dán committen. Claude Code of Copilot vindt zo'n fout in seconden.

Dit is meteen de grootste drempel in het team. Gerlof, Peter en Willeke moeten dit geïnstalleerd en werkend hebben; Willeke heeft sinds vorige week maandag een GitHub-account. Reserveer daar tijd voor — Elisabeth waarschuwde dat het clone-pad terugvinden en het eenmalig autoriseren van je GitHub-account "even gedoe" is.

### 3.4 Bouwstenen die we nu moeten neerzetten

**Mediamap.** Eén map `media` met PNG, JPG of SVG, en in de markdown verwijzen met een relatief pad (`./media/naam.png`). Afbeeldingen mogen niet meer in de markdown-bestanden zelf staan. Winst: een plaatje dat verbetert, verbetert overal; een nieuwe versie van een document hoeft geen nieuwe kopieën van 40 plaatjes. Alleen als een verbeterde afbeelding de integriteit van een oude versie aantast, maak je een versienummer bij het bestand.

**Begrippenlijst.** Eén markdown-bestand met begrippen en definities, opgenomen in de index van elk document. ReSpec zet dan overal waar de term voorkomt een stippellijn eronder, toont de definitie bij hover en linkt door. Start met de bestaande begrippenlijsten van digiGO en laat Claude Code de opmaak overnemen van Elisabeth' NLCS-lijst. Belangrijke keuze vooraf: **welke termen definiëren we wél en niet.** Denk daar als team scherp over na; het is de kapstok waar de hele documentfamilie aan hangt.

**Interne verwijzingen.** Met een relatief pad plus hash verwijs je naar een paragraaf in een ander hoofdstuk. Wijzigt de titel, dan geeft ReSpec netjes een rode foutmelding dat de referentie stuk is. Dat is een feature — gebruik het.

**Bestandsnaamgeving.** We hebben de nummering van Rolfs repo overgenomen. Houd die vast en leg hem vast in de README, inclusief de laag-aanduiding. De verwarring van vandaag (laag 1 verdwenen, lagen hernoemd) is precies wat een afspraak op papier voorkomt.

### 3.5 Versies, tags en releases

ReSpec-versiebeheer is document-based en dat is simpeler dan het klinkt:

- De **actuele versie** is altijd de verzameling markdown-bestanden.
- Een **oude versie** bewaar je als bevroren HTML — ReSpec heeft daar rechtsboven een snapshot-knop voor — gepubliceerd vanaf dezelfde plek onder een eigen padnaam.
- Bij **elke release zet je een tag in GitHub.** Via die tag kun je via *Browse files* terug naar de exacte bestandstoestand van dat moment. Dit is de stap die we niet mogen vergeten; zonder tag is teruggaan naar "hoe zag het er in oktober uit" onnodig moeizaam.
- De `spec-status` in de ReSpec-config geeft de status weer. Typ er iets onzinnigs in en opslaan: de foutmelding geeft de lijst met toegestane codes. Koppel die aan onze eigen statussen `Werk in uitvoering` / `Gedeeld` / `Definitief`.

Levende documenten (bedoeling, gebruikershandleiding) krijgen geen versienummer maar wel release notes op hoofdlijnen. Technische specificaties zijn per release anders en worden dus wél bevroren.

Let op: Rolf Jonker werkt bij digiGO aan een releaseprotocol. Sluit daarop aan zodra het er is in plaats van een eigen variant te bedenken.

### 3.6 Consultatie en issues

Twee verschillende dingen, allebei nodig:

**Issues** zitten standaard op elke repo en werken meteen. Iedereen met een gratis GitHub-account kan er terecht. Dit is het kanaal voor gemeenten en leveranciers die tegen een fout aanlopen: "de IDS geeft een foutmelding op iets wat niet fout hoort te zijn", wij lossen het op, committen een nieuwe versie, sluiten de issue. Dit is volgens Elisabeth precies waarom digiGO GitHub aantrekkelijk vindt: de community praat mee rond de standaard. Schrijftoegang tot de markdown houden we bij het team.

**Openbare consultatie met commentaar in de kantlijn** is een apart technisch verhaal. Het werkt als commentaar in Word — markeren en reageren, niet de tekst wijzigen — maar de comments worden door een externe dienst bewaard bij een HTML-pagina op een **vaste URL**. Verhuist de pagina, dan zijn de comments weg. Dit moeten we inrichten vóórdat we een consultatieversie publiceren, en Elisabeth zegt erbij dat we daar hulp bij nodig hebben. Zet dat op de agenda ruim vóór de eerste consultatie, niet erna.

### 3.7 Huisstijl en licentie

De opmaak is nu de CROW-huisstijl met een digiGO-logo erin — geleend, en Rolf vindt ook dat dit een keer echt digiGO moet worden. De styling zit in één CSS-bestand, dus als digiGO ooit z'n eigen stijl doorvoert, verandert alles in één klap mee. Wij hoeven daar niets aan te doen behalve **druk zetten**: Elisabeth' advies letterlijk was dat digiGO het "van meerdere kanten moet horen" dat een eigen stylesheet nu nodig is. Doe dat via Jeroen richting Henk Hutink.

Datzelfde geldt voor de licentie. Er is geen digiGO-beleid over onder welke licentie wat gepubliceerd wordt, en Elisabeth zou blij zijn met zo'n beleidsstuk. Wij hebben het nodig, want de vraag die Lex stelde — mag een softwareleverancier onze IDS-file in zijn product opnemen — moet met "ja, onder deze voorwaarden" beantwoord worden. Neem in de tussentijd zelf een expliciete keuze op in de README.

---

## 4. Rolverdeling

Het beheer hoort niet bij Lex. In het consult kwam de vraag "wie is de opperste leider van onze GitHub" van hem, en in de actielijst van vandaag staan vervolgens twaalf van de dertien openstaande punten op zijn naam. Dat is geen rolverdeling, dat is een enkele flessenhals. Lex is in dit project de inhoudelijke motor op open BIM, ILS en IDS — die capaciteit moet daarheen, niet naar mapstructuren en releaseprotocollen.

Daarom: **knip het beheer in tweeën**, technisch en redactioneel, en leg het bij de twee mensen die er het dichtst bij zitten.

### 4.1 De rollen

| Rol | Voorstel | Mandaat en taken |
|---|---|---|
| **Opdrachtgever / eindredactie** | **Jeroen** | Bepaalt wat wanneer naar buiten gaat en met welke status. Hakt knopen door over structuur en scope. Lijn naar de stuurgroep en naar digiGO (Henk Hutink) over huisstijl, licentiebeleid en Rolfs releaseprotocol. |
| **Technisch beheerder van de repo** | **Peter** | De enige echte softwareontwikkelaar in het team en al houder van de VNG-repo. ReSpec-config en `spec-status`, GitHub Pages, toegangsrechten, samenvoegen VNG-repo met digiGO-repo, tags en releases zetten, acceptatie-branch voor leveranciers, later de consultatie-omgeving met commentaar in de kantlijn. |
| **Redactioneel beheerder** | **Siham** | Zij heeft de GitHub-inrichting en het ReSpec-template al opgezet en houdt de lijn met Rolf en Martijn. Bewaakt mapstructuur, bestandsnaamgeving, de index-bestanden, de mediamap en de begrippenlijst. Controleert vóór publicatie of de ReSpec heel is. |
| **Documenteigenaar** | per document, zie 4.2 | Eén naam per document. Schrijft, verwerkt reviews, meldt aan Siham en Peter wanneer het document release-waardig is. |
| **Community-schakel** | **Willeke** | Eerste aanspreekpunt voor gemeenten. Legt uit hoe je als gemeente een issue aanmaakt, verzamelt reacties uit de pilots en zet ze om in issues. Hoeft geen markdown te schrijven maar moet wel kunnen lezen en reviewen in GitHub. |
| **Inhoudelijk trekker open BIM** | **Lex** | Geen beheertaken. ILS Omgevingsvergunning en de IDS per check, plus de inhoudelijke afstemming met digiGO, NEPROM, architecten en leveranciers. Levert tekst aan; anderen zetten hem in de repo. |
| **Vraagbaak ReSpec** | **Elisabeth de Vries (digiGO)** | Collegiaal, per mail, geen projectrol. Zij gaf aan dat ze dit als onderdeel van haar werk als productmanager ziet en dat een halfuurtje vragen altijd kan. Laat Peter en Siham die vragen stellen, met concrete cases, niet met een open sessie. |

### 4.2 Documenteigenaren

| Document | Eigenaar | Reviewers |
|---|---|---|
| Bedoeling en achtergrond | Jeroen | Willeke, Gerlof |
| Handleiding voor gemeenten | Willeke | Jeroen, Gerlof |
| De 17 checks — beschrijvend | Gerlof | Siham, koplopers |
| Technische specificatie / pseudocode | Peter | Siham, leveranciers |
| ILS Omgevingsvergunning + IDS | **Lex** | Peter, Gerlof |
| Geodata-eisen | Gerlof | Peter |
| Begrippenlijst (dwars door alles) | Siham | iedereen, termkeuze met Gerlof en Lex |

Een documenteigenaar is geen exclusieve schrijver — iedereen mag in elk bestand — maar is wel degene die "af" mag zeggen en die de samenhang bewaakt. Lex staat op één document, en dat is het document waar niemand anders het in zijn plaats kan.

### 4.3 Wat er van Lex' bord af gaat

In de actielijst van het consult van 14 september staan deze punten op Lex' naam. Voorstel om ze zo te herverdelen — dit is het lijstje om in het eerstvolgende projectoverleg langs te lopen.

| Actie uit 14 sep | Nu belegd bij | Toelichting |
|---|---|---|
| `spec-status` op Work in progress zetten | **Peter** | Config-werk, hoort bij de technisch beheerder. |
| Commit-hygiëne afspreken en handhaven | **Siham** | Vastleggen in de README, handhaven bij review. |
| Licentie- en copyrightbeleid | **Jeroen** | Dit is een governance-vraag richting digiGO, geen technische. Lex heeft het aangekaart; Jeroen brengt het verder. |
| Consultatie-reviewworkflow inrichten | **Peter** | Vaste URL en externe commentaardienst — echt ontwikkelwerk, met hulp via Elisabeth. |
| Versionering- en releasestrategie | **Peter + Jeroen** | Peter technisch, Jeroen besluit over statussen en momenten. Aansluiten op Rolfs protocol. |
| Mediamap maken, afbeeldingen verplaatsen, paden bijwerken | **Gerlof** | Hij heeft de drie issues aangemaakt en het is zijn content. |
| Begrippenlijst opzetten en auto-linking inschakelen | **Siham** | Start vanuit de bestaande digiGO-lijsten; Lex en Gerlof leveren alleen de termkeuze. |
| Word/hyperlinks-document omzetten naar ReSpec-markdown | **Siham** | Lex levert het bronbestand aan, Siham doet de conversie. |
| Multi-doc structuur, index-bestanden, eerste HTML publiceren | **Siham + Peter** | Na het structuurbesluit van het projectteam. |

Wat bij Lex blijft: de ILS en de IDS per check, en het aanleveren van zijn eigen brontekst. Verder niets.

### 4.4 Samenwerkingsafspraken

1. Werk lokaal, nooit in de webinterface.
2. Commit per afgeronde paragraaf, met een commit-bericht dat zegt wát je bijwerkte.
3. Commit nooit zonder lokaal gerenderd te hebben.
4. Refresh (pull) voordat je begint, ook als je denkt dat je alleen bent.
5. Eén check = één markdown-bestand. Afbeeldingen alleen in `media`.
6. Structuurwijzigingen lopen via Siham — niet zelf hoofdstukken hernummeren, zoals vandaag gebeurde met laag 1.
7. Alles wat een vraag of fout is, wordt een issue. Niet een mailtje.

---

## 5. Planning

| Wanneer | Wat | Wie |
|---|---|---|
| Deze week | Rolverdeling en overdrachtslijst (§4.3) vaststellen | Projectteam |
| Deze week | VS Code + GitHub Desktop installeren, repo klonen, lokale preview werkend | Gerlof, Peter, Willeke |
| Deze week | Mapstructuur opnieuw inrichten: `docs`, `media`, één bestand per check, index-bestanden | Siham |
| Deze week | Afbeeldingen uit de markdown halen en naar `media` verplaatsen, relatieve paden zetten | Gerlof (zijn 3 issues) |
| Deze week | `spec-status` op Werk in uitvoering, GitHub Pages en toegangsrechten op orde | Peter |
| Deze week | README met naamgeving, licentiekeuze en werkafspraken | Siham |
| Week van 22 sep | Begrippenlijst v0 opzetten uit bestaande digiGO-lijsten | Siham |
| Week van 22 sep | Beschrijvend checks-document afronden, reviewronde koplopers | Gerlof, Jeroen |
| Week van 22 sep | Documentfamilie vaststellen in het projectoverleg (besluit 1) | Projectteam |
| Week van 22 sep | ILS v0.1 en IDS per check afronden | Lex |
| **30 sep** | **Eerste publicatie: het beschrijvende checks-document, met tag en release** | Jeroen + Peter |
| 28 sep | Leveranciersoverleg: pseudocode presenteren, acceptatie-branch aankondigen | Jeroen, Siham, Peter |
| 28 sep | Gemeentesessie: GitHub-demo en uitleg over issues als feedbackkanaal | Willeke |
| Oktober | Consultatieomgeving inrichten (vaste URL, commentaar in de kantlijn) | Peter, met hulp via Elisabeth |
| Oktober | Besluit repo-thuis digiGO vs. VNG definitief maken | Jeroen, Peter |
| December | Gemeentedag: de repo als centrale plek presenteren | Willeke, Jeroen |

---

## 6. Risico's

**De installatiedrempel — dit is nu het grootste risico.** Drie van de zes teamleden moeten nog beginnen met VS Code en GitHub Desktop, en het is niet triviaal. Zolang dat blijft hangen, valt het werk vanzelf terug op wie het al kan, en dat is precies de situatie die we met deze rolverdeling proberen te beëindigen. Plan er één gezamenlijk half uur voor, deze week, in plaats van het aan ieders agenda over te laten.

**De flessenhals verplaatst zich naar Siham en Peter.** Het beheer weghalen bij Lex lost niets op als het ongewijzigd op twee andere borden landt. Twee dingen houden dat beheersbaar: de documenteigenaren schrijven zelf (Siham en Peter beheren, ze zijn geen redactiebureau), en de zwaarste technische klus — de consultatie-omgeving — halen we bij digiGO of via Elisabeth naar binnen in plaats van hem zelf uit te vinden. Toets bij beiden expliciet of het past voordat het vastgelegd wordt.

**Kapotte ReSpec zonder dat iemand het merkt.** Een enkel leesteken kan een heel hoofdstuk uit de publicatie laten verdwijnen, zonder foutmelding op de site. Daarom de regel over lokaal renderen vóór het committen, en daarom loopt Siham de gepubliceerde pagina periodiek na.

**Consultatie te laat inrichten.** De comments hangen aan een vaste URL. Publiceren we eerst en verhuizen we daarna, dan is alle opgehaalde feedback weg. Inrichten vóór de eerste consultatieversie.

**Wachten op digiGO.** Huisstijl, licentiebeleid en Rolfs releaseprotocol zijn alle drie afhankelijkheden buiten ons team. Geen van drieën mag onze publicatie van 30 september blokkeren — wij publiceren met de huidige styling en een eigen expliciete licentiekeuze, en passen later aan.

**Structuurbesluit uitstellen.** Zolang besluit 1 niet valt, schrijft iedereen door in een structuur waarvan we vandaag hebben vastgesteld dat die niet houdbaar is. Neem dat besluit in het eerstvolgende projectoverleg.

---

## Bronnen

- [Expertconsult GitHub/ReSpec met Elisabeth de Vries, 14 september 2026]()
- [Proces en transactievisie op VISI in GEMMA en BM13, 14 september 2026](
- [Bila Lex en Jeroen, 10 september 2026](
- [Projectoverleg beleidsmaatregel 13, 7 september 2026]
- [Bila Lex en Jeroen, 3 september 2026]
- [Bespreken GitHub-publicatie BIM naar GEO met Rolf Jonker, 28 augustus 2026])
- [Projectoverleg beleidsmaatregel 13, 24 augustus 2026](
- [Work together publishing method, Lex en Siham, 20 augustus 2026](
- [GitHub — Rules, met Gerlof en Siham, 19 augustus 2026]
- [Projectoverleg beleidsmaatregel 13, 17 augustus 2026]
