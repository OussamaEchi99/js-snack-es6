// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore utilizzando destructuring e template literal nel DOM.

// Creo una array con dentro gli object
// La object contiene nome della bici da corsa e il suo peso
let rancingBike = [

    {
        nome: 'Wilier 0 SLR',
        peso: '6.5 Kg'
    },

    {
        nome: 'Cannondale SuperSix EVOHi-MOD Disc Dura Ace',
        peso: '8.0 Kg'
    },

    {
        nome: 'Trek Emonda 2020',
        peso: '6.81 Kg'
    },

    {
        nome: 'Trek Emonda SLR',
        peso: '4.65 Kg'
    },

    {
        nome: 'SAVA Phantom 2.0 700C',
        peso: '8.1 Kg'
    }

];

// Creo una variabile e gli do un default per iniziare la ricerca
let lightestBike = rancingBike[0];

// Faccio il ciclo for per trovare la bici da corsa più leggera
for (let i = 0; i < rancingBike.length; i++) {
    thisBike = rancingBike[i];
    
    if ( thisBike.peso < lightestBike.peso ) {
        lightestBike = thisBike;
    }
    console.log(lightestBike);
    
}

console.log(lightestBike);

// Destructuring
// Variavile del object,dandoli nome e peso
const { nome, peso } = lightestBike;

// Template literal
const BikeHTML = `

    <h2>La bici da corsa più veloce al mondo è <span>${nome}.</span></h2>
    <h2>Il suo peso complessivo è di <span>${peso}.</span></h2>

`
// Manipolo HTML per inserire i dati trovati
// Output
const bikeContainer = document.getElementById('linghest_bike');
bikeContainer.innerHTML = BikeHTML;