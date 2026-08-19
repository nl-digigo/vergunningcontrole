## Informatiemodel

> DEF
> Een <dfn>informatiemodel</dfn> maakt een representatie van de werkelijkheid die eenvoudig(er) door een systeem te verwerken is.

> NOTE
> Opmerking over deze tekst.

> EXAMPLE "hallo"
> IMBOR is een [=informatiemodel=].

> ISSUE #1

> ADVISEMENT
> Notabele opmerking

### Het gebruik van referentiepunten
Voor kleine netwerken worden vaste meetpunten op plekken gezet waarvan met een bepaalde zekerheid aangenomen kan worden dat deze niet verstoord worden of verdwijnen. De meetpunten worden in RDNAP bepaald, en kunnen beschouwd worden als stabiel in het terrein. De bepaling in RD wordt door middel van RTK-<a>GNSS</a> uitgevoerd met een nauwkeurigheid van 2-3 cm. Wanneer het niet mogelijk is meetpunten direct via RTK-GNSS te bepalen, bijvoorbeeld als de meetpunten in een muur/wand zitten, worden er tijdelijke punten gemaakt en via tachymetrie de RD-coördinaten ingemeten. Door middel van waterpassing wordt de hoogte (H) met mm-nauwkeurigheid bepaald.

Bij het verwerken van langgerekte netwerken kan er gekozen worden voor referentievelden, deze wordt op dezelfde manier bepaald, maar alleen via GNSS gekoppeld aan RD-coördinaten. Voor de NAP-hoogte kan een waterpassing uitgevoerd worden per veld. Het geodetisch netwerk wordt gebruikt om een puntenwolk te georefereren, hiervan wordt een BIM-model gemaakt. Er kan een controle uitgevoerd worden door de coördinaten en het BIM-model te vergelijken.

### Geografische uitlijning
Geografische uitlijning (in de Engelstalige literatuur aangeduid als footprint alignment) vereist dat zowel het planimetrische (XY) als het altimetrische (Z) component expliciet worden meegenomen. Om een ongerefereerd model te transformeren naar een gerefereerde ruimtelijke omgeving, is het noodzakelijk gebruik te maken van bestaande, stabiele objecten waarvan de verplaatsing in de tijd verwaarloosbaar is. Hierbij wordt een iteratief uitlijningsproces toegepast. Dit proces start met een initiële, grove schatting van het planimetrische component, waarna het altimetrische component verder wordt verfijnd op basis van patroonherkenning. Voor toepassing binnen infrastructuur- en B&U-projecten kunnen twee typen objecten als referentie worden ingezet: (1) noklijnen en (2) straatmeubilair.

*Noklijnen*
Als de planimetrische componenten van de dataset op de juiste plek liggen, is het nog steeds van belang om de hoogtecomponent op de juiste manier te refereren. Vanuit het Integraal Hoogtevoorziening Nederland (IHN)-project is gebleken dat er in Nederland methoden beschikbaar zijn om data die niet zijn gerefereerd of die geen 3D-informatie bevatten, te koppelen aan bestaande referentiesystemen. Hiervoor kan bijvoorbeeld gebruik worden gemaakt van noklijnen die zijn geëxtraheerd uit het [Actueel Hoogtebestand Nederland (AHN)](https://www.ahn.nl/integrale-hoogtevoorziening-nederland)
Deze methode, vrij beschikbaar via de dataroom van het AHN, maakt h
