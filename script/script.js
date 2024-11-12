"use strict";
console.clear();

/*
Snack 1
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore.
*/
const bikes = [
    {
        name: "Bianchi Infinito CV",
        weight: 7.5 // in kg
    },
    {
        name: "Pinarello Dogma F12",
        weight: 6.9 // in kg
    },
    {
        name: "Canyon Ultimate CF SLX",
        weight: 6.8 // in kg
    },
    {
        name: "Trek Émonda SLR 9",
        weight: 6.3 // in kg
    },
    {
        name: "Specialized S-Works Tarmac SL7",
        weight: 6.7 // in kg
    }
];

// console.log(bikes);

let lighterBike = bikes[0];
for (let i = 0; i < bikes.length; i++) {
    if(bikes[i].weight < lighterBike.weight){
        lighterBike = bikes[i];
    }
}
console.log(lighterBike);





/*
Snack2
Creare un array di oggetti di squadre di calcio.
 Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
*/

/*
Snack 3 (Bonus)
Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.
*/
