/* ESERCIZIO 1
 Scrivi una funzione chiamata "crazySum" che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma di quei due valori, ma se il loro valore è lo stesso allora deve ritornare la loro somma moltiplicata per 3.
*/

function crazySum(a, b){
    if(a === b) {
        return (a+b)*3;
    } else {
        return a+b;
    }
}

console.log(crazySum(10,10));
console.log(crazySum(10,9));

/* ESERCIZIO 2
 Scrivi una funzione chiamata "boundary", che accetta un numero intero come parametro e ritorna true se tale parametro è incluso tra 20 e 100 (incluso) o se è esattamente uguale a 400.
*/

function boundary(x){
    if((x>=20 && x<=100) || x === 400){
        return true;
    } else {
        return false;
    }
}

console.log(boundary(400));
console.log(boundary(80));
console.log(boundary(120));

/* ESERCIZIO 3
 Scrivi una funzione chiamata "reverseString", che accetta una stringa come parametro e la ritorna invertita (es.: EPICODE => EDOCIPE).
*/

function reverseString(txt){
    
    let invertito = "";

    for(let i = txt.length-1; i >=0; i --){
        invertito += txt[i];
    }
    return invertito;
}

console.log(reverseString("dig"));

/* ESERCIZIO 4
 Scrivi una funzione chiamata "upperFirst", che accetta una stringa come parametro e la ritorna rendendo maiuscola ogni lettera iniziale di ogni parola.
*/

function upperFirst(txt){
    let parole = txt.split(" "); //creo un array diparole
    let array = []; //creo array vuoto

    //itero con if per vedere se prima lettera gia garnde oppure no
    for (let parola of parole){
        if(parola.charAt(0).toUpperCase() === parola.charAt(0)){
            array.push(parola);
        } else {
            array.push(parola.charAt(0).toUpperCase() + parola.slice(1).toLowerCase());
        }
    }

    //uso join per unire le parole nell array in una singola stringa separata da spazi
    return array.join(" ");
}

console.log(upperFirst("mario a roma"));
console.log(upperFirst("HELLO CIAO"));
console.log(upperFirst("stringa di prova "))

/* ESERCIZIO 5
 Scrivi una funzione chiamata "giveMeRandom", che accetta come parametro un numero chiamato n e ritorna un array contenente n numeri random contenuti tra 0 e 10.
*/

function giveMeRandom(n){

    const caratteri = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    let txt ="";

    for(let i = 0; i < n; i++){
        //mathfloor arrotonda numero per difetto
        //math random restituisce un numero random ta 0 e 1 
        const indiceCasuale = Math.floor(Math.random() * caratteri.length); 
        txt += caratteri.charAt(indiceCasuale); 
    }

    return txt;
}

console.log(giveMeRandom(11));
console.log(giveMeRandom(1));
console.log(giveMeRandom(35));

//EXTRA:
/* ESERCIZIO 1
 Scrivi una funzione chiamata "area" che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

function area(l1,l2){
    return (l1*l2);
}

console.log("l'area del rettangolo è " + area(10,10));


/* ESERCIZIO 2
 Scrivi una funzione chiamata "crazyDiff" che calcola la differenza assoluta tra un numero fornito e 19.
 Se il valore calcolato è più grande di 19, la funzione deve tornare tale risultato moltiplicato per 3.
*/

function crazyDiff(x){
    let num = Math.abs(x-19); //funzione valore assoluto
    if(num >19){
        return num*3
    } else {
        return num;
    }
}

console.log(crazyDiff(10));
console.log(crazyDiff(119));
console.log(crazyDiff(-38));

/* ESERCIZIO 3
 Scrivi una funzione chiamata "codify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "code" all'inizio della stringa fornita e ritornare il risultato, ma se la stringa fornita comincia proprio con "code" allora deve ritornarla senza modifiche.
*/

function codify(txt){
    if(txt.indexOf("code") != -1 && txt.indexOf("code") === 0){
        return txt;
    } else {
        return "code".concat(txt);
    }
}

console.log(codify("codefools"));
console.log(codify("test"));

/* ESERCIZIO 4
 Scrivi una funzione chiamata "check3and7" la quale accetta un numero intero positivo come parametro.
 La funzione deve controllare che tale parametro sia un multiplo di 3 o di 7, e in tal caso tornare true; altrimenti deve tornare false.
 SUGGERIMENTO: operatore modulo
*/

function check3and7(x){
    if(x % 3 === 0 || x % 7 === 0){
        return true;
    } else {
        return false;
    }
}

console.log(check3and7(49));
console.log(check3and7(9));
console.log(check3and7(5));

/* ESERCIZIO 5
 Scrivi una funzione chiamata "cutString", che accetta una stringa come parametro e la ritorna senza il primo e l'ultimo carattere.
*/

function cutString(txt){
    return txt.slice(1,txt.length-1);
}

console.log(cutString("pane"));
console.log(cutString("epicode"));

