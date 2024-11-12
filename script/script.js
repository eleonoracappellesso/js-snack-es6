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
    if (bikes[i].weight < lighterBike.weight) {
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
const footballTeams = [
    {
        name: "Juventus",
        points: 0,
        fouls: 0
    },
    {
        name: "Milan",
        points: 0,
        fouls: 0
    },
    {
        name: "Inter",
        points: 0,
        fouls: 0
    },
    {
        name: "Roma",
        points: 0,
        fouls: 0
    },
    {
        name: "Napoli",
        points: 0,
        fouls: 0
    },
];
// genero numeri random per point e fouls
function randomValues(teams) {
    for (var i = 0; i < teams.length; i++) {
        teams[i].points = getRndInteger(0, 10);
        teams[i].fouls = getRndInteger(0, 20);
    }
};
randomValues(footballTeams);
console.log(footballTeams);

// creo un array in cui stampo solo i nomi delle squadre e i falli subiti
const teamFouls = [];
for (let i = 0; i < footballTeams.length; i++) {
    let team = {
        name: footballTeams[i].name,
        fouls: footballTeams[i].fouls
    };
    teamFouls.push(team);
}

console.log("Ecco una lista con i nomi delle squadre e i rispettivi falli subiti: ", teamFouls);

/*
Snack 3 (Bonus)
Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.
*/

function createNewArray(myArray, a, b) {
    if(a < b && a >= 0 && b <= myArray.length){
        return myArray.slice(a, b);
    } else {
        console.log('Errore! Assicurati che tutti i valori siano validi.');
    }
}

const myArray = [12, 7, 23, 39, 5, 28, 14, 19, 20, 31];
let a = 3;
let b = 8;

console.log(`La mia array è: ${myArray}`);

let newArray = createNewArray(myArray, a, b);
console.log(`Tra l'indice a (${a}, compreso) e l'indice b (${b}, escluso), ci sono i seguenti varori: ${newArray}`);