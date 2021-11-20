/*
 * Generatore di “nomi cognomi” casuali: prendendo
 * una lista di nomi e una lista di cognomi,
 * Gatsby vuole generare una falsa lista di invitati.
 */

//Array con nomi e cognomi
let nome = ["Luca", "Giovanni", "Mattia", "Alessandro", "Gennaro"];
let cognome = ["Di Caprio", "Nuzzo", "Ventrone", "Piscitelli", "Lipardi"];

//
for(let i = 0; i < nome.length ; i++){

    const k = nome.length;
    const x = Math.floor(Math.random() * k - 1) + 1;
    const y = Math.floor(Math.random() * k - 1) + 1; 
    const vNome = nome[x];
    const vCognome = cognome[y];

    const visualizza = `
    
    Il nome e' ${vNome} ${vCognome}

    `

    alert(visualizza);

}