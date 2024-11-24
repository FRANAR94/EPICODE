// Il tuo compito è creare un sito e-commerce per Smartphones. 
// L'homepage che stai per creare sarà la vetrina dei prodotti disponibili, con qualche informazione per ciascun prodotto. 
// Non sono richieste funzionalità di carrello/cassa.
// - Completa gli esercizi dall'1 al 6 SOLAMENTE con HTML
// - Completa gli altri esercizi con JS

//ESERCIZI IN HTML

// ESERCIZIO 1: Inserisci un tag h1 con il nome del tuo negozio
// ESERCIZIO 2: Aggiungi una tabella con i 5 prodotti più in vista del tuo negozio
// ESERCIZIO 3: Aggiungi per ogni prodotto un'immagine, un titolo, una descrizione e un prezzo
// ESERCIZIO 4: Per ogni elemento della tabella aggiungi un link di Amazon al prodotto esistente
// ESERCIZIO 5: Aggiungi un footer con il nome e l'indirizzo del tuo negozio
// ESERCIZIO 6: Aggiungi un campo testuale in cui l'utente può lasciare un commento su un prodotto (al momento non serve inserire nessuna "vera" funzionalità di POST/salvataggio!)

//ESERCIZI IN JS
// ESERCIZIO 7: Scrivi una funzione per cambiare il contenuto del tag h1 in qualcos'altro

function ese7(){
    let titolo = document.querySelector("h1");
    titolo.innerText = "cambio contenuto titolo";
    setInterval(() => {
        titolo.innerText = "bazar nokia";
    }, 2000);
}

// ESERCIZIO 8: Scrivi una funzione per cambiare il colore di background della pagina

function ese8(){
    let x = document.querySelector("body");
    x.style.backgroundColor = "yellow";
    setInterval(() => {
        x.style.backgroundColor = "whitesmoke";
    }, 2000);
}

// ESERCIZIO 9: Scrivi una funzione per cambiare l'indirizzo presente nel futuro in un altro, fittizio

function ese9(){
    let ind = document.querySelector("#indirizzo");
    ind.innerText = "";
    ind.innerText = "Bazar 3310 : Roma, via salerno xxxxx"
}

// ESERCIZIO 10: Scrivi una funzione per aggiungere una classe CSS ad ogni link Amazon della tabella

function ese10(){
    let ex10 = document.querySelectorAll("a");
    for(let elem of ex10){
        elem.classList.toggle("but");
    }
}

// ESERCIZIO 11: Scrivi una funzione per aggiungere/togliere una classe CSS a tutte le immagini della tabella; questa classe deve modificare la visibilità/invisibilità dell'immagine

function ese11(){
    let ex11 = document.querySelectorAll("img");
    for(let elem of ex11){
        elem.classList.toggle("mod_img")
    }
}


// ESERCIZIO 12: Scrivi una funzione per cambiare il colore del prezzo di ogni prodotto in uno differente, ogni volta che viene invocata

function ese12(){
    let price = document.querySelectorAll(".price");
    for(let elem of price){
        
        let r = Math.floor(Math.random() * 255);
        let g = Math.floor(Math.random() * 255);
        let b = Math.floor(Math.random() * 255);

        elem.style.color = `rgb(${r}, ${g}, ${b})`;
    }
}
