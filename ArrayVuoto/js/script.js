/*
 * Crea un array vuoto e chiedi all’utente un numero
 * da inserire nell’array. Continua a chiedere i numeri
 * all’utente e a inserirli nell’array fino a quando
 * a somma degli elementi è minore di 50.
 */

//Dichiarazione Array vuoto
let num = [];
let somma = 0;

//Inserimento numeri nell'Array
while(somma < 50){

    let x = parseInt( prompt ( 'Inserire un numero: ' ) );
    num.push(x);

    somma += x;

}

alert ("Somma totale raggiunta: " + somma);