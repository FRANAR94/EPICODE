//ESERCIZI SUGLI IF: 

/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

let a = 10;
let b = 13;
if(a>b){
  console.log("a e magiore di b");
} else {
  console.log("b e magiore di a");
}

/*
ESERCIZIO 2
  Crea un blocco condizionale if/else per mostrare in console il messaggio corretto in ogni condizione.

  num < 5 - mostra in console "Tiny"
  num < 10 - mostra in console "Small"
  num < 15 - mostra in console "Medium"
  num < 20 - mostra in console "Large"
  num >= 20 - mostra in console "Huge"
*/



function Funzione2(){

  let num = document.getElementById("inserimento").value;
  
  if(num<5){
    console.log("Tint");
  } else if(num<10) {
    console.log("small");
  } else if(num<15) {
    console.log("Medium");
  } else if(num<20){
    console.log("large");
  } else if(num>=20){
    console.log("huge");
  } else{
    console.log("errore inserimento");
  }

}



//ESERCIZI SUI CICLI: 

/* ESERCIZIO 3
  Mostra i numeri da 0 a 10 (incluso) in ordine ascendente, ma evitando di mostrare i numeri 3 e 8 (suggerimento: ripassa l'uso di "continue").
*/

for(let i=0; i<=10; i++){
  if(i == 3 || i == 8){
    continue;
  } else {
    console.log(i);
  }
}

/* ESERCIZIO 11
  Scrivi un ciclo in JavaScript per iterare da 0 a 15. Per ciascun elemento, il ciclo deve controllare the il valore corrente sia pari o dispari, e mostrare il risultato in console.
*/

for(let i=0; i<=15; i++){
  if(i%2 == 0){
    console.log(i + "è pari");
  } else {
    console.log(i + "è dispari");
  }
}

//ESERCIZI EXTRA NON OBBLIGATORI

/* ESERCIZIO EXTRA 1
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

let num1 = 6;
let num2 = 3;

if(num1 == 8 || num2 == 8){
  console.log("uno dei due numeri è un 8");
} else if(num1 + num2 == 8){
  console.log("la somma dei due valori è pari ad 8");
} else if(num1 - num2 == 8 || num2 -num1 == 8) {
  console.log("la sottrazione dei due valori è pari a 8");
} else {
  console.log("nessuna delle precedenti");
}

/* ESERCIZIO EXTRA 2
Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

let totalShoppingCart = 70;
if(totalShoppingCart>50){
  console.log("hai diritto alla spedizione gratuita paghi:" + totalShoppingCart);
} else {
  console.log("non hai diritto alla spedizione gratuita paghi:" + (totalShoppingCart+10));
}

/* ESERCIZIO EXTRA 3
  Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando, usando l'algoritmo del codice precedente, se le spedizioni siano gratuite oppure no e e calcolando il totale.
*/
let totalsconto = totalShoppingCart * 0.20;
if(totalShoppingCart>50){
  console.log("è il black friday hai diritto al 20% ed hai diritto alla spedizione gratuita paghi: " + (totalShoppingCart-totalsconto) + " invece di: " + totalShoppingCart);
} else {
  console.log("è il black friday hai diritto al 20% ma non hai diritto alla spedizione gratuita paghi: " + ((totalShoppingCart+10)-totalsconto) + " invece di: " + (totalShoppingCart+10) );
}


/*  ESERCIZIO EXTRA 4
  Usa un operatore ternaio per assegnare ad una variabile chiamata "gender" i valori "male" o "female".
  La scelta deve essere basata sul valore di un'altra variabile booleana chiamata isMale.
  Es. se isMale e' vero, il valore di gender deve essere "male"
*/

let isMale = true;
let gender = isMale ? "male":"Female";
console.log(gender);

/* ESERCIZIO EXTRA 5
  Scrivi un algoritmo che iteri i numeri da 1 a 100, stampandoli in console. Se un valore tuttavia è multiplo di 3 (operatore modulo!), stampa al suo posto la parola "Fizz" e se il numero è multiplo di 5, stampa "Buzz". Se le condizioni si verificano entrambe, stampa "FizzBuzz".
*/

for(let i = 0; i<=100; i++){
  if(i%3 == 0 && i%5 ==0){
    console.log(i + " FizzBuzz");
  } else if(i%3 == 0){
    console.log(i + " Fizz");
  } else if(i%5 == 0){
    console.log(i + " Buzz");
  } else{
    console.log(i + " nessuno e multiplo di nessuno!")
  }
  

}