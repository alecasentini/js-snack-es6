/*Snack 1
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore utilizzando destructuring e template literal*/

// creo array con biciclette
const biciclette = [
    { nome: "Bianchi", peso: 6 },
    { nome: "Specialized", peso: 7 },
    { nome: "Trek", peso: 8 },
    { nome: "Cannondale", peso: 6.5 },
    { nome: "Pinarello", peso: 6.2 },
    { nome: "Colnago", peso: 6.8 },
    { nome: "Scott", peso: 7.5 },
    { nome: "Giant", peso: 8.2 },
];

// Trovo la bici con il peso minore
let biciLeggera = biciclette[0];
for (let i = 1; i < biciclette.length; i++) {
  if (biciclette[i].peso < biciLeggera.peso) {
    biciLeggera = biciclette[i];
  }
}

const { nome, peso } = biciLeggera;