// Dato l'array di nomi:
// const myArray = ['Michele', 'Fabio', 'Roberto', 'Giovanni', 'Simone', 'Chiara'];
// e dati due numeri min e max (min più piccolo di max).
// Creiamo un nuovo array contenente i valori che hanno la posizione compresa tra i due numeri.
// Eseguiamo questo esercizio prima con forEach e poi con filter.

const myArray = ['Michele', 'Fabio', 'Roberto', 'Giovanni', 'Simone', 'Chiara'];

// const newArray = [];
// myArray.forEach((element, index) => {

//     if (index > 3 && index < 5 ) {
//         newArray.push(element);
//     }

// });

const newArray = myArray.filter( (element, index) => {

    return index > 3 && index < 5;
});
console.log(newArray);