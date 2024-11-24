

//esercizio 1
let ese1 = `Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.<br><br>
            
I data types ci dicono il tipo di valore che una variabile(contenitore di informazioni) può assumere. <br> <br>

1) Numeber: <br>
rappresenta sia numeri interi che con virgola. <br>
presenta valori speciali quali infinity e NaN. <br> <br>

2) String: <br>
rppresenta una sequenza di caratteri contenuti tra doppi o singoli apici. <br> <br>

3) Boolean: <br>
rappresenta una variabile che puo' assumenre solo due valori(vero e falso), utilizzato per le espressioni logiche <br><br>

4) Undefined e null: <br>
undefined: rappresenta una variabile a cui non è stato assegnato alcun valore ma di cui esiste il contenitore <br>
null: rappresenta una variabile a cui viene intenzionalmente non assegnato alcun valore. <br> <br>

5) Oggetto: <br>
Collezione in coppia chiave valore i quali valori servono a descrivere l'etità. es persona {età=30 anni nome=Francesco
ecc} <br><br>

6)array <br>
Collezione in coppia indice valore <br><br>

7)funzioni <br>
In js possono essere assegnate a varibili o passati come argomenti <br><br>

NOTE: <br>
A)tipizzazione dinamica <br>
in js e possibile assegnare prima un tipo e successivamente un altro alla stessa variabile <br>
B)type.of serve per verificare il tipo di una variabile <br>`


//esercizio 2
let ese2 = `Descrivi cos'è un oggetto in JavaScript, con parole tue. <br> <br> 
Un oggetto è la descrizione, attraverso variabili, funzioni ecc in coppia chiave:valore, di un entità. <br>
es.descriviamo un entità aereo. <br> <br>
let aereo = { <br>
    nome: "aquila", <br>
    tipo: "boing", <br>
    VelMax: 1000, <br>
    partenza: function() { <br>
        console.log("pronto a partire"); <br>
    } <br>
};<br>
`

//esercizio 3
let a = 12;
let b = 20;
let somma = a+b;
//oppure
let sum = 12+20;
console.log("esercizio 3 = ",somma);
console.log("esercizio 3 = ",sum);

let ese3  = `<p>Scrivi il codice necessario ad effettuare un'addizione (una somma) dei numeri ${a} e ${b}. <br><br> let a = 12 <br> let b = 20 <br> let somma = a + b <br><br> Sommando ${a} e ${b} il risultato è: ${somma}</p>`; //uso le template litteral per inserire html e variabili 

//esercizio 4
let x = 12;
let ese4 = `<p>Crea una variable di nome "x" e assegna ad essa il numero 12. <br><br>let x = 12;</p>`;

//esercizio 5
let name = "Francesco"; 
console.log("esercizio 5 = ",name);

let ese5 = `<p>Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa. <br><br>let name = "Francesco"; <br><br>console.log("esercizio 5 = ",name);</p>`

//esercizio6
let sott = 4 - x;
console.log("esercizio 6 = ",sott);

let ese6 =`<p> Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata(che contiene il numero 12) <br> let sott = 4 - x;<br>console.log("esercizio 6 = ",sott); <br> la sottrazione tra 4 e x (${x}) è uguale a =  ${sott}</p>`

//esercizio 7

let name1 = "john";
let name2 = "John";

let test = name1==name2;
console.log(test);

let test2 = name1 == name2.toLowerCase();
console.log(test);

let ese7 = `<p> Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
Infine, verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
NON HAI BISOGNO DI UN BLOCCO IF/ELSE. E' sufficiente utilizzare console.log().</p> <br>
codice
<br>
let name1 = "john";<br>
let name2 = "John";<br>

let test = name1==name2;<br>
console.log(test);<br>

test = name1 == name2.toLowerCase();<br>
console.log(test);<br><br>
name1 == name2 : ${test} <br> name1 == name2.toLowerCase() : ${test2}; `



//funzioni ed eventi


function esercizio(txt){
    let divVuoto = document.getElementById("DivVuoto");
    divVuoto.innerHTML = txt;
}


document.getElementById("es1").addEventListener("click", function() {
    esercizio(ese1);
});

document.getElementById("es2").addEventListener("click", function() {
    esercizio(ese2);
});

document.getElementById("es3").addEventListener("click", function() {
    esercizio(ese3);
});

document.getElementById("es4").addEventListener("click", function() {
    esercizio(ese4);
});

document.getElementById("es5").addEventListener("click", function() {
    esercizio(ese5);
});

document.getElementById("es6").addEventListener("click", function() {
    esercizio(ese6);
});

document.getElementById("es7").addEventListener("click", function() {
    esercizio(ese7);
});
