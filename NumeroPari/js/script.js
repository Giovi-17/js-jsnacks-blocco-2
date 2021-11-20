/* Inserisci un numero, se è pari stampa il numero,
se è dispari stampa il numero successivo. */

//L'utente inserisce il numero

let num = parseInt( prompt ( 'Inserisci un numero: ' ) );

//Controllo: se pari stampo il numero, altrimenti stampo il numero successivo
if( num %2 === 0 ){
    alert('Il numero e\': ' + num );
}else{
    num += 1
    alert('Il numero e\': ' + num );
}