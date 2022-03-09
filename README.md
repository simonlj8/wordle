# wordle

Lernia systemutveckling javascript/java VT -22
Simon Ljungström



Ordspel, inlämning 1: Testade algoritmer

Denna uppgift går ut på att skriva en (eller två om så önskas) centrala algoritmer i ett spel inspirerat av “Wordle”, samt test för dessa.
Uppgiften

I denna kurs ska ni bygga ett spel inspirerat av det populära spelet “Wordle”. Det första steget är att skriva den algoritm som utgör de centrala spelreglerna i spelet. Reglerna kan sammanfattas såhär:

Spelet väljer ut ett ord med (vanligtvis) fem bokstäver. Spelaren ska gissa vilket ord det är genom att mata in något ord. Om ordet är korrekt har spelaren vunnit. Om det är fel ord ger spelet feedback som indikerar huruvida några bokstäver i det gissade ordet finns med i det hemliga ordet, och huruvida spelaren placerat dem på rätt plats. Spelaren gissar sedan på nytt.
Moment

    Utforma en lösning på algoritm A nedan
    Tänk igenom och utforma en teststrategi för algoritmen
    Implementera algoritmen i form av en funktion
    Skriv minst två tester, troligtvis fler, som verifierar att funktionen fungerar som den ska
    Dokumentera er teststrategi med kommentarer i testkoden
    Om du vill, upprepa allt för algoritm B (valfritt, men fungerar som underlag för bedömning av kursens helhet)

Algoritm A – feedback

Denna funktion definierar reglerna för den feedback spelet ger när spelaren gissar ett ord. Den ska uppfylla följande kriterier:

    Inputs: Två ord (två textsträngar)
        Ett ord som är gissningen
        Ett ord som är det korrekta ordet
    Kontrollera vilka bokstäver från det ena ordet som förekommer i det andra och i så fall var
    Output: En array med objekt, ett för varje bokstav i samma ordning som de förekommer i det gissade ordet, med följande attribut:
        letter (bokstaven)
        result (ett av följande värden)
            ‘incorrect’: Finns inte med i det andra ordet
            ‘misplaced’: Finns med i det andra ordet, men på annan plats
            ‘correct’: Korrekt plats i det andra ordet 

Exempel:

Orden “CYKLA” (utvalt) och “HALLÅ” (gissning) skulle ge följande tillbaka:

    H / incorrect
    A / misplaced
    L / incorrect (eftersom det redan finns ett korrekt L)
    L / correct
    Å / incorrect

Algoritm B – val av ord (frivillig, krävs ej för godkänt)

Denna funktion är spelets sätt att välja ut ett ord att spela med. Den ska uppfylla följande kriterier:

    Inputs:
        En lista med ord
        En siffra som anger önskad längd
        En indikation på huruvida samma bokstav får förekomma mer än en gång i ordet, eller om alla bokstäver måste vara unika
    Välj slumpmässigt ut ett ord ur listan som uppfyller kriterierna i de övriga parametrarna
    Hantera på något väldefinierat sätt situationen som uppstår när inget passande ord finns
    Output: Det slumpmässigt utvalda ordet

Inlämning

Uppgiften lämnas in genom att koden publiceras på GitHub och en länk till repot skickas in via ItsLearning. Följande kriterier ska vara uppfyllda:

    Inga dependencies
    För varje algoritm (minst A, potentiellt både A och B) ska följande finnas:
        En modul med något passande namn
        En testfil med motsvarande namn
        Testfilen ska innehålla dokumentation i form av kommentarer som beskriver strategin, alltså på vilket sätt testerna är heltäckande
    Test ska gå att köra med “npm test”

Betygskriterier

På denna uppgift kan man få betygen underkänt eller godkänt.
Betyg Godkänd

Enligt kursplanen: För att få betyget Godkänt (G) ska den studerande ha genomfört kursen och nått alla kursens läranderesultat.

Det betyder för denna uppgift:

    Algoritm A är implementerad enligt momenten ovan
    Källkod redovisad via GitHub
    Algoritmen följer specifikationen
    Algoritmen testas heltäckande med minst två tester

