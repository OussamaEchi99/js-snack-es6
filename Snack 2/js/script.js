// Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà:
// Punti fatti e falli subiti.
// Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

// Variabile delle squadre della Seria A
seriaATeam = [
    {
        nome: 'Juventus',
        punti: 0,
        falliSubiti: 0
    },

    {
        nome: 'Milan',
        punti: 0,
        falliSubiti: 0
    },

    {
        nome: 'Inter',
        punti: 0,
        falliSubiti: 0
    },

    {
        nome: 'Roma',
        punti: 0,
        falliSubiti: 0
    },

    {
        nome: 'Napoli',
        punti: 0,
        falliSubiti: 0
    },

    {
        nome: 'Verona',
        punti: 0,
        falliSubiti: 0
    },
];

// Nuova Array
const seriaATeamPoints = [];

// Creo una variabile Che contiene solo il nome e i falli subiti
for (let i = 0; i < seriaATeam.length; i++) {
    let thisItems = seriaATeam[i];
    const randomPunti = getRndInteger(1, 20);
    const randomFalliSubiti = getRndInteger(1, 20);
    thisItems.punti = randomPunti;
    thisItems.falliSubiti = randomFalliSubiti;
}


// Creo ciclo for per leggere tutti i nomi e creare numeri
// random di falli subiti e metterli su ogni scquadra
for (let i = 0; i < seriaATeam.length; i++) {
    // Leggo tutte le object
    thisTeam = seriaATeam[i];
    let { nome, punti, falliSubiti } = thisTeam;
    // Funzione che crea numeri random
    
    // Faccio leggere solo i nome dei Team

    // Destruction
    const seriaATeamClone = {
        nome,
        falliSubiti
    };

    // Pusho tutto nel Array fuori del for
    seriaATeamPoints.push(seriaATeamClone);
}

console.log(seriaATeam);
console.log(seriaATeamPoints);
// FUNCTIONS
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}
