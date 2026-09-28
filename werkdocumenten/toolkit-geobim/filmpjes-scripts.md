# Filmpjes — scripts

**Videoreeks BIM-vergunningscontroles voor gemeenten**
Uitgesproken door Lex, in de ik-vorm. Toon: vlot en collegiaal — alsof je naast een collega zit en even iets laat zien.
Bij het werkplan `BM13_filmpjes_playlist_werkplan.md`, opgesteld 27 augustus 2026.

---

## Voor je begint: drie afspraken die in élk script terugkomen

**1. De rode draad is één aanvraag.** Door de hele reeks loopt dezelfde casus: *de aanvraag aan de Molenstraat* — een gebouw met woningen, en op de begane grond een ruimte waarvan je je kunt afvragen of dat nou wonen is of iets anders. Elk filmpje pakt die aanvraag weer op. Zo bouwt de kijker één verhaal op in plaats van tien losse trucjes.

> ⚠ **Vervang "Molenstraat" en de aantallen door wat er straks écht in het voorbeeldmodel zit.** Zodra het Veenendaal-model bewerkt is, één keer alle scripts langs en de casusgegevens gelijktrekken. Doe dat vóór je opneemt, niet erna.

**2. Elk filmpje opent met de belofte en sluit met de winst.** Eerste zin: wat ga je hierna kunnen. Laatste zin: wat je nu kunt, en wat er in het volgende filmpje gebeurt. Nooit koud beginnen, nooit doodlopen.

**3. Bij elke handeling zeg je het dóél, niet alleen de knop.** Dat was de scherpste kritiek op de bestaande filmpjes: er wordt geklikt zonder dat iemand weet waaróm. Dus niet "ik zet spaces aan", maar "ik wil weten of hier gewoond wordt, en dat zit in de spaces".

**Over de spreekstijl:** korte zinnen. Adempauzes. Je mag best zeggen "even kijken hoor" of "ja, precies". Dat maakt het menselijk. Wat je níét doet: verontschuldigen ("sorry dat dit ingewikkeld is"), of jezelf onderbreken met details. Als je merkt dat je een zijpad in wilt — laat het weg, dat wordt gewoon een eigen filmpje.

**Verboden woorden in deze reeks:** SPARQL. Verder: elke afkorting die je niet in dezelfde zin uitlegt.

---

## De videoblokken — hoe je ze vult

Bij elk filmpje staat een blok tussen `▼ VIDEOBLOK` en `▲ EINDE VIDEOBLOK`. Zodra een filmpje online staat, hoef je daar maar één ding te doen: **de placeholder vervangen door de YouTube-ID.**

De ID is het stukje achter `v=` in de URL. Bij `https://www.youtube.com/watch?v=dQw4w9WgXcQ` is dat dus `dQw4w9WgXcQ`.

Zoek in dit bestand op `FILMPJE-1` en vervang alle voorkomens door die ID. Klaar — er staat dan een klikbare thumbnail op de pagina die de video op YouTube opent.

**Waarom een thumbnail en geen ingesloten speler?** Omdat GitHub in gewone markdown-bestanden geen `<iframe>` toelaat: die wordt eruit gefilterd en je ziet niets. Een afbeelding met een link eromheen werkt overal — op github.com, op GitHub Pages, en in elke markdown-viewer.

Draai je de pagina via **GitHub Pages** (Jekyll of ReSpec)? Dan mag een iframe wél. In elk blok staat die variant al klaar, uitgecommentarieerd: haal de `<!--` en `-->` eromheen weg en verwijder de thumbnail-regel erboven. Dan speelt de video af op de pagina zelf.

> **Tip:** houd de placeholders in dit scriptdocument staan tot een filmpje echt gepubliceerd is. Zolang er `FILMPJE-7` staat, zie je in één oogopslag wat er nog niet online staat.

**Voor de publieke pagina** gebruik je niet dit bestand maar `filmpjes.md` — dezelfde blokken, maar zonder scripts, opnametips en interne aantekeningen.

---

# Filmpje 1 — Wat is een BIM-model, en wat is een IFC?

<!-- ▼ VIDEOBLOK — vervang FILMPJE-1 door de YouTube-ID (het stukje na v= in de URL) ▼ -->

[![Filmpje 1 — Wat is een BIM-model, en wat is een IFC?](https://img.youtube.com/vi/FILMPJE-1/hqdefault.jpg)](https://www.youtube.com/watch?v=FILMPJE-1)

<!-- Voor GitHub Pages kun je in plaats van bovenstaande regel dit gebruiken (werkt niet op github.com zelf):
<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/bOxQxctZF-4?si=rHDYlFUa64GxZkaP" title="Filmpje 1 — Wat is een BIM-model, en wat is een IFC?" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
-->

<!-- ▲ EINDE VIDEOBLOK ▲ -->

**Duur:** 2 minuten · **Leerdoel:** de kijker weet wat hij binnenkrijgt en waar het vandaan komt.
**In beeld:** een pdf-bouwtekening → Revit met een simpel gebouwtje → het exportmenu → een IFC-bestand in de verkenner.

---

Hoi. Je krijgt binnenkort iets nieuws op je bureau. En ik wil je in twee minuten laten zien wat dat is, zodat je niet schrikt als het er ligt.

*[BEELD: stapel pdf-tekeningen op het scherm]*

<iframe width="560" height="315" src="https://www.youtube.com/embed/bOxQxctZF-4?si=rHDYlFUa64GxZkaP" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

Dit is wat je nu binnenkrijgt bij een vergunningsaanvraag. Pdf'jes. Tekeningen. Je print ze uit, je legt de plattegrond naast de doorsnede, en je gaat meten en tellen.

*[BEELD: overgang naar Revit, een eenvoudig woongebouw in 3D]*

Maar de architect die dit getekend heeft, werkt allang niet meer in pdf. Die werkt in software als deze — dit is Revit, er zijn er meer. En hij tekent hier geen lijntjes. Hij zet een wánd neer. Een raam. Een deur. Het programma weet dus dat dit een buitenwand is van beton, twee-en-een-halve meter hoog.

Dat is een BIM-model. Een gebouw dat wéét wat het is.

*[BEELD: klik naar het exportmenu, kies IFC]*

En dan komt het leuke. Die architect kan dat model wegschrijven in een bestandsformaat dat iedereen kan openen. Dat heet IFC.

Vergelijk het met Word. Je typt in Word, en je slaat op als docx. Dan kan iemand anders het openen, ook al heeft die geen Word.

*[BEELD: het IFC-bestand in de verkenner, één icoontje]*

Zo werkt IFC ook. De architect tekent in zíjn programma, slaat op als IFC, en jij kunt het openen. Met gratis software. Zonder dat je die dure tekenprogramma's hoeft te hebben.

Dus: BIM is het model. IFC is het bestand waarin het bij jou terechtkomt.

In het volgende filmpje krijgen we er eentje binnen — en gaan we hem openmaken.

---

**Playlist-toelichting (2 regels):**
> Je krijgt straks geen pdf meer, maar een IFC-bestand. In dit filmpje leg ik in twee minuten uit wat dat is en waar het vandaan komt.
> Start hier als je nog nooit met BIM hebt gewerkt.

**Opnametip:** de Word-vergelijking is het hart van dit filmpje. Zeg hem rustig en laat er een seconde stilte achter vallen. Dat is het moment waarop het kwartje valt.

---

# Filmpje 2 — Er komt een aanvraag binnen. Wat doe je?

<!-- ▼ VIDEOBLOK — vervang FILMPJE-2 door de YouTube-ID (het stukje na v= in de URL) ▼ -->

[![Filmpje 2 — Er komt een aanvraag binnen](https://img.youtube.com/vi/FILMPJE-2/hqdefault.jpg)](https://www.youtube.com/watch?v=FILMPJE-2)

<!-- Voor GitHub Pages kun je in plaats van bovenstaande regel dit gebruiken (werkt niet op github.com zelf):
<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/FILMPJE-2" title="Filmpje 2 — Er komt een aanvraag binnen" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
-->

<!-- ▲ EINDE VIDEOBLOK ▲ -->

**Duur:** 2 minuten · **Leerdoel:** de kijker durft het bestand op te slaan en te openen.
**In beeld:** het Omgevingsloket (of een still daarvan) → downloaden → map op de schijf → viewer openen.

> ⚠ **Openstaand:** we hebben geen demomateriaal van een aanvraag die daadwerkelijk binnenkomt via het Omgevingsloket. Kies vóór de opname: screencapture van een testomgeving, of een still met voice-over. Niet improviseren tijdens het opnemen.

---

Daar is-ie. De aanvraag aan de Molenstraat.

*[BEELD: het Omgevingsloket, de aanvraag met bijlagen]*

Zoals altijd zit er van alles bij. De aanvraagformulieren, de tekeningen, de berekeningen. Maar hier zit nu ook dit tussen.

*[BEELD: inzoomen op het IFC-bestand in de bijlagenlijst]*

Een IFC. Het model van het gebouw.

En nu doe je precies wat je met elke bijlage doet: je haalt hem binnen.

*[BEELD: downloaden, en dan de map op de schijf]*

Ik zet hem hier in mijn projectmap, bij de rest van de aanvraag. Meer is het niet. Het is gewoon een bestand.

Wat je waarschijnlijk ziet: als je erop dubbelklikt, gebeurt er niks. Of Windows vraagt waarmee je het wil openen. Dat is normaal — je hebt nog geen programma dat IFC kent.

*[BEELD: rechtermuisknop, "openen met", en dan de viewer]*

Dus dat regelen we nu. Ik heb hier een BIM-viewer staan. Gratis. Die installeer je in twee minuten, en daar gaan we het volgende filmpje aan besteden.

*[BEELD: het model klapt open in de viewer, gebouwtje draait rustig rond]*

En dan zie je dit. Dat is de Molenstraat.

Nog even voor de goede orde: je hoeft hier niks mee te doen wat je nu niet ook al doet. De pdf's blijven voorlopig gewoon komen. Dit is er iets bíj, waarmee je dingen kunt controleren die je op papier nooit zag.

Volgende filmpje: hoe zo'n viewer werkt.

---

**Playlist-toelichting:**
> Er komt een aanvraag binnen met een IFC erbij. Ik laat zien hoe je het bestand opslaat en waarmee je het openmaakt.
> Twee minuten, geen voorkennis nodig.

**Opnametip:** het zinnetje *"het is gewoon een bestand"* is belangrijker dan het lijkt. Veel mensen denken dat BIM een systeem is waar ze op moeten inloggen. Neem dat weg.

---

# Filmpje 3 — Hoe werkt een BIM-viewer?

<!-- ▼ VIDEOBLOK — vervang FILMPJE-3 door de YouTube-ID (het stukje na v= in de URL) ▼ -->

[![Filmpje 3 — Hoe werkt een BIM-viewer?](https://img.youtube.com/vi/FILMPJE-3/hqdefault.jpg)](https://www.youtube.com/watch?v=FILMPJE-3)

<!-- Voor GitHub Pages kun je in plaats van bovenstaande regel dit gebruiken (werkt niet op github.com zelf):
<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/FILMPJE-3" title="Filmpje 3 — Hoe werkt een BIM-viewer?" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
-->

<!-- ▲ EINDE VIDEOBLOK ▲ -->

**Duur:** 3 tot 4 minuten · **Leerdoel:** de kijker kent de basisindeling en weet dat hij zelf een viewer mag kiezen.
**In beeld:** twee, hooguit drie viewers naast elkaar — met hetzelfde model.

> ⚠ **Keuze vooraf:** welke viewers laten we zien? Twee of drie, niet meer. Onze eigen viewer niet extra uitlichten. Alle getoonde viewers moeten op het VNG-lijstje staan. En check of BIM Permit inmiddels echt gratis is in Nederland vóórdat je hem in beeld brengt.

---

Goed. Je hebt het model van de Molenstraat openstaan. Dan gaan we nu even rondkijken.

*[BEELD: viewer 1, het model in het midden]*

En het eerste wat ik je wil meegeven: er zijn heel veel van dit soort viewers. Heel veel. En een flink deel is gratis. Op onze website staat een lijst — kijk daar even, kies er eentje, het maakt echt niet zoveel uit welke.

Waarom niet? Omdat ze allemaal ongeveer hetzelfde zijn opgebouwd. Kijk maar mee.

*[BEELD: cursor naar het linkerpaneel]*

Links staat altijd de opbouw van het gebouw. Het project, het perceel, het gebouw, de verdiepingen, en daaronder alles wat erop staat. Je kunt hier dingen aan- en uitzetten met die oogjes.

*[BEELD: een verdieping uitzetten en weer aanzetten]*

Kijk — verdieping weg. En weer terug. Meer is het niet.

*[BEELD: cursor naar rechts, klik op een wand]*

En rechts staan de eigenschappen. Ik klik op een wand… en daar staat wat het is. Het type, de afmetingen, het materiaal. Alles wat de architect erin gestopt heeft, kun jij hier lezen.

*[BEELD: draaien, zoomen, pannen]*

Draaien doe je met de muis, zoomen met het wieltje. Even spelen, dat went binnen een minuut.

*[BEELD: naast elkaar, viewer 2 met hetzelfde model]*

En dan nu het punt van dit filmpje. Dit is een ándere viewer. Andere kleurtjes, andere knoppen.

*[BEELD: cursor wijst links, dan rechts]*

Maar: opbouw links. Eigenschappen rechts.

Dat is precies waarom je niet hoeft te schrikken als jouw gemeente straks iets anders kiest dan je buurgemeente. Je bent niet iets aan het leren wat je bij één programma kwijt bent. Je leert hoe IFC in elkaar zit, en dat is overal hetzelfde.

Zoek er dus eentje uit van de lijst en ga ermee aan de slag.

In het volgende filmpje gaan we iets nuttigs doen: we halen precies dat stukje van het gebouw naar voren dat we nodig hebben.

---

**Playlist-toelichting:**
> Er zijn veel BIM-viewers en veel ervan zijn gratis. Ik laat zien hoe ze werken — en waarom ze allemáál ongeveer hetzelfde werken.
> Kies er eentje van de lijst op onze site en kijk mee.

**Opnametip:** het moment waarop je twee viewers naast elkaar zet en zegt "opbouw links, eigenschappen rechts" is de kern. Overweeg daar een simpele pijl of cirkel in beeld te zetten.

---

# Filmpje 4 — Filteren: alleen zien wat je nodig hebt

<!-- ▼ VIDEOBLOK — vervang FILMPJE-4 door de YouTube-ID (het stukje na v= in de URL) ▼ -->

[![Filmpje 4 — Filteren](https://img.youtube.com/vi/FILMPJE-4/hqdefault.jpg)](https://www.youtube.com/watch?v=FILMPJE-4)

<!-- Voor GitHub Pages kun je in plaats van bovenstaande regel dit gebruiken (werkt niet op github.com zelf):
<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/FILMPJE-4" title="Filmpje 4 — Filteren" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
-->

<!-- ▲ EINDE VIDEOBLOK ▲ -->

**Duur:** 3 minuten · **Leerdoel:** de kijker kan een subset isoleren en snapt waarom dat de sleutel tot elke check is.
**In beeld:** de Molenstraat, filteren op klasse, meetfunctie.

---

Nu wordt het praktisch.

*[BEELD: het volledige model, druk, veel onderdelen]*

Dit is het hele gebouw. Alles staat aan. En eerlijk is eerlijk: hier word je niet veel wijzer van. Er is gewoon te véél.

Maar dat hoeft ook niet. Want als jij een aanvraag beoordeelt, kijk je nooit naar alles tegelijk. Je kijkt naar de gevel. Of naar de ramen. Of naar de hoogte van één verdieping.

Dus dat gaan we hier ook doen: we halen eruit wat we nodig hebben, en de rest zetten we even weg.

*[BEELD: het filterpaneel, filteren op klasse]*

Hier kan ik filteren op wat iets ís. Dit heet in IFC een klasse. En let op: dat staat allemaal in het Engels. Dat is niet omdat wij moeilijk doen — IFC is een internationale standaard, dus een raam heet daar `window`. Wen daar maar aan, het zijn er niet zoveel.

*[BEELD: alleen windows aanvinken]*

Kijk. Alle ramen van het gebouw. En alleen de ramen.

*[BEELD: switchen naar walls]*

En dit zijn alle wanden.

*[BEELD: het gebouw weer compleet, dan alleen de gevel]*

En dít is waar het om gaat. Stel, je wilt de gevel beoordelen. Dan wil je de binnenwanden niet zien, want die leiden je af. Je zet ze uit, en je houdt over waar je iets van moet vinden.

*[BEELD: meetfunctie, maat op de gevel]*

En als je dan toch bezig bent — hier kun je gewoon meten. Even van vloer tot vloer. Dat is de verdiepingshoogte. Zonder liniaal, zonder schaalstok, zonder rekenen.

*[BEELD: terug naar het complete model]*

Onthou dit filmpje goed, want dit is de stap die je bij élke controle zet. Eerst filteren tot je alleen ziet wat je beoordeelt. Dán pas beoordelen.

Vanaf het volgende filmpje gaan we dat doen. Echte checks, op de Molenstraat.

---

**Playlist-toelichting:**
> Voordat je iets kunt controleren, moet je het kunnen vinden. Ik laat zien hoe je alleen de ramen, alleen de wanden of alleen de gevel in beeld krijgt.
> Dit is de stap die je bij elke check opnieuw zet.

**Opnametip:** het Engels-punt kort houden en luchtig brengen. Voor veel kijkers is dat een echte drempel, maar als jij er niet zwaar over doet, doen zij dat ook niet.

---

# Filmpje 5a — Wat is geo-informatie? *(Gerlof)*

<!-- ▼ VIDEOBLOK — vervang FILMPJE-5a door de YouTube-ID (het stukje na v= in de URL) ▼ -->

[![Filmpje 5a — Wat is geo-informatie?](https://img.youtube.com/vi/FILMPJE-5a/hqdefault.jpg)](https://www.youtube.com/watch?v=FILMPJE-5)

<!-- Voor GitHub Pages kun je in plaats van bovenstaande regel dit gebruiken (werkt niet op github.com zelf):
<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/FILMPJE-5" title="Filmpje 5 — Wat is geo-informatie?" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
-->

<!-- ▲ EINDE VIDEOBLOK ▲ -->

**Duur:** 2 tot 3 minuten · **Leerdoel:** de kijker weet wat PDOK is en dat de kaartlagen gratis beschikbaar zijn.
**In beeld:** de PDOK-website, kaartlagen aan en uit.

> Dit filmpje maakt Gerlof. Het script staat in de ik-vorm; pas het aan naar wie het inspreekt.

---

Even weg van het gebouw. We gaan naar de kaart.

*[BEELD: de PDOK-website, startpagina]*

Want een gebouw staat ergens. En bij een vergunning is dat "ergens" minstens zo belangrijk als het gebouw zelf. Past het binnen het perceel? Staat het niet over de rooilijn? Wat geldt er op die plek?

Dat soort informatie heet geo-informatie. En het mooie is: die is er al. Landelijk, gratis, voor iedereen.

*[BEELD: doorklikken naar de kaartlagen]*

Dit is PDOK. Hier staan de kaartlagen van Nederland bij elkaar. De kadastrale kaart met alle perceelsgrenzen. Luchtfoto's. De basisregistratie adressen en gebouwen. En nog een hele rij meer.

*[BEELD: een kaartlaag aanzetten — kadastrale kaart over een luchtfoto]*

Kijk, dit is de luchtfoto. En hier leg ik de perceelsgrenzen eroverheen. Je ziet meteen welk stuk grond van wie is.

*[BEELD: nog een laag erbij]*

En je kunt lagen stapelen. Elke laag vertelt iets anders over dezelfde plek.

*[BEELD: uitzoomen naar heel Nederland]*

Dit geldt voor het hele land. Dus ook voor jouw gemeente, ook voor de Molenstraat.

Waarom vertel ik dit? Omdat we in het volgende filmpje laten zien hoe je deze geodata kunt gebruiken in GIS. 
Neem even twee minuten om zelf op deze site rond te klikken. Dat is de beste voorbereiding op wat hierna komt.

---

**Playlist-toelichting:**
> De kaartlagen van heel Nederland staan gratis online bij PDOK. Ik laat zien wat daar staat, voor heel nederland en hoe je ze kunt previewen.
> Kijk dit filmpje voordat je aan het GIS-filmpje begint.

**Opnametip:** dit filmpje bestond nog niet en is precies waarom het bestaande geo-filmpje niet landde. Niet inkorten — dit is het aanloopje.

---
# Filmpje 5b — Wat is GIS? *(Gerlof)*

<!-- ▼ VIDEOBLOK — vervang FILMPJE-5b door de YouTube-ID (het stukje na v= in de URL) ▼ -->

[![Filmpje 5b — Wat is geo-informatie?](https://img.youtube.com/vi/FILMPJE-5b/hqdefault.jpg)](https://www.youtube.com/watch?v=FILMPJE-5b)

<!-- Voor GitHub Pages kun je in plaats van bovenstaande regel dit gebruiken (werkt niet op github.com zelf):
<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/FILMPJE-5" title="Filmpje 5b — Wat is GIS?" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
-->

<!-- ▲ EINDE VIDEOBLOK ▲ -->

**Duur:** 2 tot 3 minuten · **Leerdoel:** de kijker weet wat GIS is en dat je in bijvoorbeeld Qgis kaartlagen uit PDOK kunt bekijken, bevragen en over elkaar heen leggen.
**In beeld:** Qgis, een leeg project.

> Dit filmpje maakt Gerlof. Het script staat in de ik-vorm; pas het aan naar wie het inspreekt.
Even weg van het gebouw. We gaan naar de kaart.

---

*[BEELD: Qgis, leeg project]*

GIS is het computerprogramma waarmee je geodata kunt bekijken, bevragen en combineren. Wat je hier zit is Qgis, dat is een OpenSource GIS. Net als PDOK is Qgis gratis en voor iedereen te gebruiken.
In Qgis kun je kaartlagen uit PDOK bekijken. Je richt op die wijze je eigen "projectomgeving" in.

*[BEELD: PDOK plugin]*

In Qgis kun je losse functies toevoegen via het Plugin menu. Ik heb de PDOK knop toegevoegd. Daarmee heb je toegang tot alle  kaartlagen in PDOK. Kies daar de geodata die je nodig hebt voor je project. Ik kies bijvoorbeeld de luchtfoto, de kadastrale kaart met de panden uit de BAG. En voeg deze toe aan mijn projectomgeving. Ze verschijnen dan in de legenda en ik kan ze zichtbaar maken in het kaartvenster.

*[BEELD: Legenda en kaartvenster en aan- en uitzetten van de kaartlagen]*

Kijk, dit is de luchtfoto. En hier leg ik de perceelsgrenzen eroverheen. Je ziet meteen welk stuk grond van wie is.

*[BEELD: nog een laag erbij]*

En je kunt lagen stapelen. Nu heb ik ook de kaart met BAG-panden er over heen gelegd. Op deze manier kun je alle geodata die je wilt gebruiken voor het beoordelen van een vergunningaanvraag opzoeken en toevoegen. Voor elke  locatie in je gemeente heb je de relevante informatie over de omgeving dan beschikbaar.

*[BEELD: uitzoomen naar gemeente of juist inzoomen op een locatie]*

Waarom vertel ik dit? Omdat we in het volgende filmpje het gebouw en de kaart bij elkaar gaan brengen. Het model van de aanvraag, precies op de goede plek op de kaart. En dan kun je in één oogopslag zien of het klopt.
Met Qgis kun je nog veel meer dan wat we hier laten zien. Voor nu is dit eerst voldoende om te weten. Wil je meer weten, dan er misschien ook wel een collega, die je meer kan vertellen.

---

**Playlist-toelichting:**
> De informatie over de omgeving (uit PDOK) bekijken en gebruiken in GIS. Ik laat zien hoe je dat in QGIS voor elkaar krijgt.
> Kijk eerst het filmpje over geo-informatie.

**Opnametip:** begin niet met klikken. De eerste twintig seconden zijn alleen uitleg van wat je gaat doen en waarom. Dat ontbrak in de vorige versie en dat was de belangrijkste klacht.

**Opnametip:** dit filmpje bestaat nog niet en is wel van belang omdat we anders te snel van PDOK naar GIS en BIM stappen.


# Filmpje 6a — Het model op de kaart: BIM in een GIS-omgeving *(Gerlof)*

<!-- ▼ VIDEOBLOK — vervang FILMPJE-6A door de YouTube-ID (het stukje na v= in de URL) ▼ -->

[![Filmpje 6a — Het model op de kaart](https://img.youtube.com/vi/FILMPJE-6A/hqdefault.jpg)](https://www.youtube.com/watch?v=FILMPJE-6A)

<!-- Voor GitHub Pages kun je in plaats van bovenstaande regel dit gebruiken (werkt niet op github.com zelf):
<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/FILMPJE-6A" title="Filmpje 6a — Het model op de kaart" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
-->

<!-- ▲ EINDE VIDEOBLOK ▲ -->

**Duur:** 3 tot 4 minuten · **Leerdoel:** de kijker kan een model in QGIS naast de kaart zetten.
**In beeld:** QGIS met de PDOK-plugin, het model van de Molenstraat.

> Dit is de opgeknipte versie van het bestaande filmpje van 9 minuten. **Alles wat PDOK uitlegt gaat eruit** — dat is nu filmpje 5. Wat erin blijft: de handeling zelf, mét een introductie die vertelt wat je gaat doen.

---

Nu gaan we die twee bij elkaar brengen: het gebouw van de Molenstraat, en de kaart van de plek waar het komt te staan.

Waarom? Omdat je dan kunt zien of het gebouw staat waar het volgens de aanvraag hoort te staan. Op het goede perceel, binnen de grenzen, in de goede richting. Dat is een van de eerste dingen die je bij een aanvraag beoordeelt — alleen deed je dat tot nu toe met een tekening naast een kaart.

*[BEELD: QGIS opent, leeg project]*

Ik gebruik hiervoor QGIS. Dat is gratis en open source, met een grote gebruikersgroep, dus je vindt overal hulp. Maar: gebruik vooral je eigen GIS-omgeving als je die al hebt. De stappen zijn overal hetzelfde, alleen de knoppen zitten ergens anders.

*[BEELD: PDOK-plugin, kaartlaag toevoegen]*

Eerst de ondergrond. Via de PDOK-plugin haal ik de kaartlagen binnen die je in het vorige filmpje gezien hebt. Kadastrale kaart, luchtfoto.

*[BEELD: inzoomen op het perceel aan de Molenstraat]*

Daar is ons perceel.

*[BEELD: model inladen]*

En nu het gebouw erbij.

*[BEELD: het model verschijnt op de kaart]*

Kijk. Daar staat-ie. Op de kaart, op zijn eigen perceel, op ware grootte.

*[BEELD: inzoomen op de perceelsgrens]*

En dit is precies wat je wilde zien. Het gebouw ten opzichte van de grens. Geen tekening naast een kaart, maar één plaatje waar het allebei in zit.

*[BEELD: rustig ronddraaien]*

Dit heeft trouwens één belangrijke voorwaarde, en daar loop je in de praktijk tegenaan: het model moet goed gepositioneerd zijn door de architect. Zit dat niet goed, dan staat je gebouw scheef of ergens in een weiland. Dat is meteen ook iets om op te controleren — en dat doen we in het filmpje over de geokoppeling.

---

**Playlist-toelichting:**
> Het model van de aanvraag, op de kaart, op het echte perceel. Ik laat zien hoe je dat in QGIS voor elkaar krijgt.
> Kijk eerst het filmpje over geo-informatie.

**Opnametip:** begin niet met klikken. De eerste twintig seconden zijn alleen uitleg van wat je gaat doen en waarom. Dat ontbrak in de vorige versie en dat was de belangrijkste klacht.

---

# Filmpje 6b — Andersom: de kaart in je BIM-viewer

<!-- ▼ VIDEOBLOK — vervang FILMPJE-6B door de YouTube-ID (het stukje na v= in de URL) ▼ -->

[![Filmpje 6b — De kaart in je BIM-viewer](https://img.youtube.com/vi/FILMPJE-6B/hqdefault.jpg)](https://www.youtube.com/watch?v=FILMPJE-6B)

<!-- Voor GitHub Pages kun je in plaats van bovenstaande regel dit gebruiken (werkt niet op github.com zelf):
<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/FILMPJE-6B" title="Filmpje 6b — De kaart in je BIM-viewer" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
-->

<!-- ▲ EINDE VIDEOBLOK ▲ -->

**Duur:** 3 minuten · **Leerdoel:** de kijker weet dat er twee routes zijn en kan kiezen.
**In beeld:** een viewer die kaartlagen ondersteunt, met het model van de Molenstraat.

---

Er is nog een tweede manier, en die is voor veel mensen makkelijker.

In het vorige filmpje haalden we het gebouw naar de kaart toe. Nu doen we het omgekeerd: we halen de kaart naar het gebouw.

*[BEELD: viewer met het model, nog zonder ondergrond]*

Sommige BIM-viewers kunnen namelijk zelf kaartlagen inladen. Dan hoef je helemaal geen GIS-programma open te hebben.

*[BEELD: kaartlagen aanzetten — kadastrale kaart, dan een luchtfoto eronder]*

Kijk — hier zet ik de kadastrale kaart aan. En daar de luchtfoto. En daar staat het gebouw, midden op zijn perceel.

*[BEELD: laag aan en uit zetten]*

Aan. Uit. Aan.

*[BEELD: doorsnede maken]*

En dit is ook handig: hier kun je een doorsnede maken. Je snijdt het gebouw gewoon open en kijkt naar binnen. Dat scheelt je een hele set doorsnedetekeningen.

*[BEELD: naast elkaar: QGIS en de viewer]*

Dus: welke van de twee moet je nou hebben?

Dat hangt ervan af. Werk je al met GIS in je gemeente, en wil je het model naast al je andere kaartlagen leggen? Dan is de route van het vorige filmpje logischer.

Wil je gewoon snel even zien of dat gebouw op de goede plek staat, zonder gedoe? Dan is dit sneller.

Je kunt ze allebei. En je hoeft niet te kiezen — probeer ze allebei een keer en kijk wat bij jouw werk past.

---

**Playlist-toelichting:**
> Je kunt het gebouw naar de kaart brengen, of de kaart naar het gebouw. Ik laat de tweede route zien en leg uit wanneer je welke kiest.
> Optioneel — kies de route die bij jouw werk past.

**Opnametip:** ⚠ het model in de huidige Struk-opname staat 45° verdraaid en er is geen rotatieknop. Corrigeer het model vóór de opname, of houd dat stuk uit beeld.

---

# Filmpje 7 — Je eerste check: wordt hier gewoond?

<!-- ▼ VIDEOBLOK — vervang FILMPJE-7 door de YouTube-ID (het stukje na v= in de URL) ▼ -->

[![Filmpje 7 — Wordt hier gewoond?](https://img.youtube.com/vi/FILMPJE-7/hqdefault.jpg)](https://www.youtube.com/watch?v=FILMPJE-7)

<!-- Voor GitHub Pages kun je in plaats van bovenstaande regel dit gebruiken (werkt niet op github.com zelf):
<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/FILMPJE-7" title="Filmpje 7 — Wordt hier gewoond?" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
-->

<!-- ▲ EINDE VIDEOBLOK ▲ -->

**Duur:** 2 tot 3 minuten · **Leerdoel:** de kijker kan de gebruiksfunctie aflezen uit de spaces.
**In beeld:** IFC Lite, spaces aanzetten, functie aflezen.

> 🎬 **Dit filmpje maak je als eerste**, van kop tot staart, als proef voor de hele reeks.

---

Dit is het filmpje waar we naartoe hebben gewerkt. We gaan een échte controle doen op de aanvraag aan de Molenstraat.

En we beginnen met de allereerste vraag die je jezelf bij zo'n aanvraag stelt: wat is dit eigenlijk voor gebouw? Wordt hier gewoond, of zit hier een kantoor, of allebei?

Op papier zoek je dat op in de aanvraagformulieren, en je hoopt dat het klopt met de tekeningen. Hier kun je het gewoon in het model nakijken.

*[BEELD: het model van de Molenstraat, volledig]*

Want in een BIM-model zitten niet alleen wanden en vloeren. Er zitten ook rúimtes in. De lege ruimte tussen de wanden — de woonkamer, de gang, de berging. Die heten in IFC `spaces`. En elke space kan een functie hebben.

*[BEELD: linkerpaneel, spaces zoeken in de lijst]*

Eén ding moet je weten, anders zoek je je scheel: **spaces staan standaard uit**. Bijna elke viewer verbergt ze, want anders zie je alleen maar blokken.

*[BEELD: spaces aanvinken — gekleurde blokken verschijnen in het gebouw]*

Daar zijn ze.

*[BEELD: alle andere onderdelen uitzetten, alleen spaces blijven over]*

En nu doe ik wat we in filmpje vier geleerd hebben: alles wat ik niet nodig heb, zet ik uit. Wanden weg, vloeren weg. Ik hou de ruimtes over.

*[BEELD: het gebouw als kleurenblokken, laag voor laag]*

Kijk hoe overzichtelijk dat is. Dit is het gebouw als verzameling ruimtes.

*[BEELD: klik op een ruimte op de eerste verdieping, rechterpaneel toont eigenschappen]*

Ik klik er eentje aan. En rechts, bij de eigenschappen…

*[BEELD: inzoomen op de functie in het rechterpaneel]*

…staat de functie. Wonen.

*[BEELD: nog een paar ruimtes aanklikken op dezelfde verdieping]*

En deze ook. En deze ook. Op deze verdieping wordt gewoond, dat is duidelijk.

*[BEELD: naar de begane grond, klik op de ruimte vooraan]*

En dan die ruimte op de begane grond waar we ons iets bij afvroegen. Even klikken…

*[BEELD: de functie in beeld]*

Kijk. Dáár staat het.

*[BEELD: terug naar het hele gebouw]*

Dat is je eerste check. In een halve minuut, zonder één tekening open te slaan, weet je wat voor gebouw dit is en welke functie waar zit.

En dat is meteen iets om te controleren: staat dit ook zo in de aanvraag? Want als het model iets anders zegt dan het formulier, dan heb je een vraag voor de aanvrager.

Volgende filmpje: de gevel.

---

**Playlist-toelichting:**
> Wordt hier gewoond of niet? Ik laat zien hoe je dat rechtstreeks uit het model afleest, via de ruimtes.
> Je eerste echte controle — in twee minuten.

**Opnametip:** dit is het proeffilmpje. Bekijk het na de montage één keer volledig terug met de vraag: zou iemand die niets van BIM weet dit kunnen volgen? Zo niet, opnieuw — dit filmpje bepaalt het format van de hele reeks.

---

# Filmpje 8 — Check twee: binnenwand of buitenwand?

<!-- ▼ VIDEOBLOK — vervang FILMPJE-8 door de YouTube-ID (het stukje na v= in de URL) ▼ -->

[![Filmpje 8 — Binnenwand of buitenwand?](https://img.youtube.com/vi/FILMPJE-8/hqdefault.jpg)](https://www.youtube.com/watch?v=FILMPJE-8)

<!-- Voor GitHub Pages kun je in plaats van bovenstaande regel dit gebruiken (werkt niet op github.com zelf):
<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/FILMPJE-8" title="Filmpje 8 — Binnenwand of buitenwand?" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
-->

<!-- ▲ EINDE VIDEOBLOK ▲ -->

**Duur:** 2 tot 3 minuten · **Leerdoel:** de kijker kan de gevel isoleren van de binnenwanden.
**In beeld:** IFC Lite, filteren op wanden, dan op het kenmerk binnen/buiten.

---

Nog een controle, en deze gebruik je vaker dan je denkt.

Als je iets over de gevel moet zeggen — hoogte, materiaal, hoeveel raam er in zit — dan wil je alleen de buitenwanden zien. En niet de binnenmuren, want die zitten in de weg.

*[BEELD: het complete model]*

Dat kun je op het oog doen. Dan draai je het gebouw rond en probeer je te zien wat gevel is. Maar dat is precies het soort werk waar je fouten in maakt.

*[BEELD: filteren op walls, alle wanden in beeld]*

Het kan makkelijker. Eerst filter ik op wanden — dat ken je uit filmpje vier. Dit zijn alle wanden van het gebouw, binnen en buiten door elkaar.

*[BEELD: klik op een gevelwand, rechterpaneel]*

En nu klik ik op eentje. En als ik hier rechts kijk bij de eigenschappen…

*[BEELD: inzoomen op het kenmerk buitenwand]*

…dan staat er een kenmerk dat zegt of dit een buitenwand is of niet. De architect heeft dat er niet zelf in getypt, dat zet zijn programma er automatisch bij.

*[BEELD: filteren op dat kenmerk — alleen buitenwanden blijven staan]*

En daar kan ik dus op filteren.

*[BEELD: het gebouw als lege gevelschil, langzaam ronddraaiend]*

Daar staat je gevel. Kaal, zonder binnenwanden, van alle kanten te bekijken.

*[BEELD: omdraaien van het filter — alleen binnenwanden]*

En dit is de andere kant op: alleen de binnenwanden. Handig als je naar de indeling kijkt.

*[BEELD: alles weer aan]*

Simpel, hè? En dat is precies het punt van deze filmpjes. Het is geen hogere wiskunde. Je zet iets aan, je zet iets uit, en je kijkt naar wat je nodig hebt.

Vanaf hier gaan we de checks een voor een langs. Elke check krijgt zijn eigen filmpje, dus je kunt precies dat filmpje pakken waar jij nu iets aan hebt.

---

**Playlist-toelichting:**
> De gevel bekijken zonder dat de binnenmuren in de weg zitten. Ik laat zien hoe je daarop filtert.
> Bouwt voort op het filmpje over filteren.

**Opnametip:** *"Simpel, hè?"* — die zin mag er echt in. Dat is de hele boodschap van de reeks in twee woorden.

---

# Filmpje 9 — Staat het gebouw op de goede plek? *(de geokoppeling)*

<!-- ▼ VIDEOBLOK — vervang FILMPJE-9 door de YouTube-ID (het stukje na v= in de URL) ▼ -->

[![Filmpje 9 — Staat het gebouw op de goede plek?](https://img.youtube.com/vi/FILMPJE-9/hqdefault.jpg)](https://www.youtube.com/watch?v=FILMPJE-9)

<!-- Voor GitHub Pages kun je in plaats van bovenstaande regel dit gebruiken (werkt niet op github.com zelf):
<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/FILMPJE-9" title="Filmpje 9 — Staat het gebouw op de goede plek?" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
-->

<!-- ▲ EINDE VIDEOBLOK ▲ -->

**Duur:** 3 minuten · **Leerdoel:** de kijker kan controleren of het model correct gepositioneerd is.
**In beeld:** model op de kaart, perceelsgrens, en een voorbeeld van wat er misgaat.

> ⚠ **Deze wacht op het bewerkte voorbeeldmodel.** Voor een geloofwaardige demo heb je een model nodig dat góéd gepositioneerd is — en idealiter ook eentje waarbij het misgaat, om te laten zien hoe je dat herkent.

---

We hebben het gebouw op de kaart gezet. Nu gaan we controleren of dat ook klópt.

Want dit is een van de eerste dingen die je bij elke aanvraag beoordeelt: staat het gebouw waar het hoort te staan? Op het goede perceel, binnen de grenzen, in de goede richting?

*[BEELD: het model op de kaart, netjes op het perceel]*

Bij de Molenstraat ziet dat er goed uit. Het gebouw staat op het perceel, keurig binnen de grens.

*[BEELD: inzoomen op de perceelsgrens, afstand meten]*

En dat kun je nameten. Van de gevel tot de erfgrens — dat is de afstand die in je regels staat.

*[BEELD: een tweede, slecht gepositioneerd model]*

Maar het gaat ook regelmatig mis, en daar wil ik je op voorbereiden. Kijk hier eens.

*[BEELD: het gebouw staat verdraaid of naast het perceel]*

Dit model staat scheef. Of hier: dit staat honderden meters verderop, of zelfs in zee.

Wat er dan aan de hand is: het model is niet goed gepositioneerd door de architect. In BIM moet je opgeven waar op de wereld je gebouw staat en welke kant het op wijst — en dat wordt regelmatig vergeten of verkeerd ingevuld.

*[BEELD: terug naar het goede model]*

Belangrijk om te weten: dat betekent níét dat de aanvraag niet klopt. Het gebouw zelf kan prima zijn. Het is het model dat niet goed is aangeleverd.

En dat is dus een vraag aan de aanvrager: kun je het model opnieuw aanleveren, goed gepositioneerd? Dat is voor een architect een kwestie van een instelling aanpassen.

*[BEELD: het model netjes op zijn plek]*

Als dat op orde is, kun je verder. En dan wordt alles wat hierna komt betrouwbaar — want elke controle waarbij de omgeving een rol speelt, staat of valt hiermee.

---

**Playlist-toelichting:**
> Staat het gebouw op het goede perceel en in de goede richting? Ik laat zien hoe je dat controleert en wat je doet als het misgaat.
> Kijk eerst de filmpjes over geo-informatie en het model op de kaart.

---

# Bonus — kop en staart voor het bestaande Struk-filmpje

<!-- ▼ VIDEOBLOK — vervang FILMPJE-STRUK door de YouTube-ID (het stukje na v= in de URL) ▼ -->

[![Bonus — Wat zit er allemaal in een model?](https://img.youtube.com/vi/FILMPJE-STRUK/hqdefault.jpg)](https://www.youtube.com/watch?v=FILMPJE-STRUK)

<!-- Voor GitHub Pages kun je in plaats van bovenstaande regel dit gebruiken (werkt niet op github.com zelf):
<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/FILMPJE-STRUK" title="Bonus — Wat zit er allemaal in een model?" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
-->

<!-- ▲ EINDE VIDEOBLOK ▲ -->

Het bestaande filmpje is goed; er hoeft alleen iets omheen. Twee korte stukjes, in te spreken over een still of een rustig draaiend model.

**Intro (± 20 seconden):**

> Even iets laten zien wat verder gaat dan alleen kijken. Want een viewer kan meer dan een gebouw draaien: je kunt er kaartlagen bij halen, doorsnedes maken, en de eigenschappen bekijken die de architect erin gestopt heeft. Ik doorloop dat hier in een minuutje. Kijk vooral naar hoeveel informatie er in zo'n model blijkt te zitten.

**Afsluiting (± 20 seconden):**

> Dat is dus wat er allemaal in zit: de materialen, de classificaties, de bouwlaaghoogtes — tot een materiaalpaspoort aan toe. Je hoeft dat niet allemaal te gebruiken. Maar het is er wel, en dat is precies waarom een model meer waard is dan een pdf. In de volgende filmpjes gebruiken we hiervan wat we nodig hebben.

---

# Geparkeerd — Filmpje X: voldoet dit model aan de informatie-eisen? *(IDS)*

<!-- ▼ VIDEOBLOK — vervang FILMPJE-IDS door de YouTube-ID (het stukje na v= in de URL) ▼ -->

[![Filmpje X — Voldoet dit model aan de informatie-eisen?](https://img.youtube.com/vi/FILMPJE-IDS/hqdefault.jpg)](https://www.youtube.com/watch?v=FILMPJE-IDS)

<!-- Voor GitHub Pages kun je in plaats van bovenstaande regel dit gebruiken (werkt niet op github.com zelf):
<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/FILMPJE-IDS" title="Filmpje X — Voldoet dit model aan de informatie-eisen?" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
-->

<!-- ▲ EINDE VIDEOBLOK ▲ -->

**Wacht op:** de IDS. Zonder IDS kun je het niet voorschrijven en dus ook niet demonstreren.

**Uitgangspunt voor als het zover is:** het gaat hier niet over de vraag of het gebouw goed is, maar of het bestánd compleet is. Zitten alle gegevens erin die wij nodig hebben om te kunnen toetsen? Dat is een controle die je vooraan in het proces doet — nog vóór alle andere checks. Als het model niet compleet is, hoef je aan de rest niet te beginnen.

**Openingszin die past bij de reeks:**

> Alle controles die we tot nu toe gedaan hebben, hebben één ding gemeen: ze werken alleen als de informatie er in zit. En dat is niet altijd zo. Dus daar gaan we nu iets aan doen — we controleren of het model compleet is, nog voordat we het inhoudelijk bekijken.

---

## Nog te doen voordat je opneemt

| # | Wat | Waarom het blokkeert |
|---|---|---|
| 1 | Casusgegevens gelijktrekken over alle scripts zodra het voorbeeldmodel er is | "Molenstraat" en de aantallen moeten kloppen met wat er in beeld staat |
| 2 | Kiezen welke twee of drie viewers in filmpje 3 komen | script 3 kan niet af |
| 3 | Bevestigen dat BIM Permit gratis is in NL | bepaalt of hij in filmpje 3 mag |
| 4 | Oplossen hoe we "binnenkomst via het Omgevingsloket" in beeld brengen | filmpje 2 |
| 5 | Het Veenendaal-model laten bewerken door de studenten | filmpjes 7, 8 en 9 |
| 6 | Een slecht gepositioneerd model regelen als tegenvoorbeeld | filmpje 9 |
| 7 | Scripts 5, 6a en 6b met Gerlof doornemen | hij spreekt ze in |
| 8 | De geodraaiing in de Struk-opname corrigeren of uit beeld houden | filmpje 6b |

---

*Scripts gebaseerd op de afspraken uit het overleg van 24 augustus 2026 — [opname](https://fathom.video/calls/796092361). Toon, spreker en rode draad vastgesteld op 27 augustus 2026.*
