/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/
/*
    Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
                
    I data types ci dicono il tipo di valore che una variabile(contenitore di informazioni) può assumere. 

    1) Numeber: 
    rappresenta sia numeri interi che con virgola. 
    presenta valori speciali quali infinity e NaN. 

    2) String: 
    rppresenta una sequenza di caratteri contenuti tra doppi o singoli apici. 

    3) Boolean: 
    rappresenta una variabile che puo' assumenre solo due valori(vero e falso), utilizzato per le espressioni logiche 

    4) Undefined e null: 
    undefined: rappresenta una variabile a cui non è stato assegnato alcun valore ma di cui esiste il contenitore
    null: rappresenta una variabile a cui viene intenzionalmente non assegnato alcun valore. 

    5) Oggetto: 
    Collezione in coppia chiave valore i quali valori servono a descrivere l'etità. es persona {età=30 anni nome=Francesco
    ecc} 

    6)array
    Collezione in coppia indice valore

    7)funzioni 
    In js possono essere assegnate a varibili o passati come argomenti 

    NOTE: 
    A)tipizzazione dinamica 
    in js e possibile assegnare prima un tipo e successivamente un altro alla stessa variabile 
    B)type.of serve per verificare il tipo di una variabile
*/

/* ESERCIZIO 2
 Descrivi cos'è un oggetto in JavaScript, con parole tue.
*/

/* 
    Un oggetto è la descrizione, attraverso variabili, funzioni ecc in coppia chiave:valore, di un entità. 
    es.descriviamo un entità aereo. 

    let aereo = { 
        nome: "aquila", 
        tipo: "boing", 
        VelMax: 1000, 
        partenza: function() { 
            console.log("pronto a partire"); 
        } 
    }; 
*/



/* ESERCIZIO 3
 Scriti il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

//esercizio 3
let a = 12;
let b = 20;
let somma = a+b;
//oppure
let sum = 12+20;
console.log("esercizio 3 = ",somma);
console.log("esercizio 3 = ",sum);

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

let x = 12;

/* ESERCIZIO 5
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

let name = "Francesco"; 
console.log("esercizio 5 = ",name);

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

let sott = 4 - x;
console.log("esercizio 6 = ",sott);

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 Infine, verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
 NON HAI BISOGNO DI UN BLOCCO IF/ELSE. E' sufficiente utilizzare console.log().
*/

let name1 = "john";
let name2 = "John";

let test = name1==name2;
console.log(test);

test = name1 == name2.toLowerCase();
console.log(test);
