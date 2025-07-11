// JSON-String mit Buchdaten
const buchDaten = `[
    {"titel": "Mansfield Park", "veröffentlicht": 1814, "seiten": 480},
    {"titel": "Stolz und Vorurteil", "veröffentlicht": 1813, "seiten": 432},
    {"titel": "Emma", "veröffentlicht": 1816, "seiten": 392},
    {"titel": "Der große Gatsby", "veröffentlicht": 1925, "seiten": 180},
    {"titel": "1984", "veröffentlicht": 1949, "seiten": 328}
]`;


function buchAnalyse(buchDaten){

    // Konvertiere JSON-String in ein JavaScript-Objekt
    const buchObjekte = JSON.parse(buchDaten); 

    // Zähle die Anzahl der Bücher und gib sie aus
    console.log(`Anzahl der Bücher: ${buchObjekte.length}`);


    let buchMitMeistenSeiten = buchObjekte[0];

    // FInde das Buch mit der meisten Seitenanzahl
    buchObjekte.forEach(buch => { 
        if (buch.seiten > buchMitMeistenSeiten.seiten) {
            buchMitMeistenSeiten = buch;
        }
    });

    // Gib das Buch mit der höchsten Seitenanzahl aus
    console.log(`Das Buch "${buchMitMeistenSeiten.titel}" ist mit "${buchMitMeistenSeiten.seiten}" Seiten, das Buch mit den meisten Seiten`);    
    
    // Gib das Buch mit der höchsten Seitenanzahl aus
    // const alteBuecher = buchObjekte.filter(buch => buch.veröffentlicht < 1900); // Zum Testen >Bücher vor 1900<, um nur eine Teilmenge anzuzeigen
    const alteBuecher = buchObjekte.filter(buch => buch.veröffentlicht < 2000);     

    // Erstelle ein Array mit den Titeln der alten Bücher
    const alteBuchTitel = alteBuecher.map(buch => buch.titel);
    
    // Gib die Titel der alten Bücher aus
    console.log(alteBuchTitel); 

    // Sortiere das Array alphabetisch und gib es aus
    console.log(alteBuchTitel.sort());
    
    // Konvertiere das sortierte Array zurück in einen JSON-String und gib ihn aus
    const jsonBuchTitel = JSON.stringify(alteBuchTitel);
    console.log(jsonBuchTitel);
}

// Funktionsaufruf
buchAnalyse(buchDaten);
