/*
 * Crea un array di numeri interi e fai la somma di tutti gli elementi
 * che sono in posizione dispari
 */

//Array di numeri interi
const num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let sommaD = 0;


//Sommo gli elementi in posizione dispari
for( let i = 0; i < num.length; i++ ){

    if(i % 2 === 0){
        sommaD += num[i];
    }

}

alert("La somma totale e': " + sommaD);