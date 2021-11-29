// Dato un elenco degli studenti di una facoltà, con il totale dei loro voti
// let students = [
//     { name: 'Marco', id: 213, grades: 78 },
//     { name: 'Paola', id: 110, grades: 96 },
//     { name: 'Andrea', id: 250, grades: 48 },
//     { name: 'Gaia', id: 145, grades: 74 },
//     { name: 'Luigi', id: 196, grades: 68 },
//     { name: 'Piero', id: 102, grades: 50 },
//     { name: 'Francesca', id: 120, grades: 84 },
//   ];
// 1- Dobbiamo creare delle targhe con il loro nome in maiuscolo. Ci serve quindi un nuovo array di stringhe.
//    Ogni elemento del nuovo array sarà il nome dello studente ma con tutte le lettere maiuscole.
// 2- Dobbiamo creare un nuovo array con gli studenti che hanno un totale di voti superiore a 70
// 3- Dobbiamo creare un nuovo array di tutti gli studenti che hanno un totale di voti superiore a 70 e id superiore a 120

let students = [
    { name: 'Marco', id: 213, grades: 78 },
    { name: 'Paola', id: 110, grades: 96 },
    { name: 'Andrea', id: 250, grades: 48 },
    { name: 'Gaia', id: 145, grades: 74 },
    { name: 'Luigi', id: 196, grades: 68 },
    { name: 'Piero', id: 102, grades: 50 },
    { name: 'Francesca', id: 120, grades: 84 },
];

const studentsNames = [];

students.forEach((element, index) => {

    const { name } = element;

    let textInUpperCase = name.toUpperCase();
    
    studentsNames.push(textInUpperCase);
});

// console.log(studentsNames);

// const studentsGrades = students.filter((element, index, array) => {
//     return element.grades > 70;
// });

// const studentsId = students.filter((element, index, array) => {
//     return element.id > 120;
// });


// const bestStudent = [];
// students.forEach((element, index ) => {

//     const { name, id, grades } = element;

//     if ( grades > 70 && id > 120 ) {
//         pus
//     }
// });

const bestStudents = students.filter((element, index, array) => {
    let result;
    if(element.grades > 70 && element.id > 120) {
        result = true;
    } else {
        result = false;
    }

    let bestStudent = result;
    return bestStudent;
});

console.log(bestStudents);