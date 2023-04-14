/*    Snack 1
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

// Stampo la bici leggera a schermo
const pesoMinore = document.getElementById("peso-minore");
pesoMinore.innerHTML = `La bici più leggera è la ${nome}, che pesa solo ${peso} kg!`;

//========================================================================================
/*     Snack 2
Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà:
Punti fatti e falli subiti.
Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.*/

// creo array con squadre di calcio
let squadre = [
    { nome: 'Juventus', punti: 0, falli: 0 },
    { nome: 'Inter', punti: 0, falli: 0 },
    { nome: 'Milan', punti: 0, falli: 0 },
    { nome: 'Napoli', punti: 0, falli: 0 },
    { nome: 'Roma', punti: 0, falli: 0 },
    { nome: 'Atalanta', punti: 0, falli: 0 },
    { nome: 'Lazio', punti: 0, falli: 0 },
    { nome: 'Fiorentina', punti: 0, falli: 0 },
    { nome: 'Sampdoria', punti: 0, falli: 0 },
    { nome: 'Torino', punti: 0, falli: 0 },
    { nome: 'Cagliari', punti: 0, falli: 0 },
    { nome: 'Bologna', punti: 0, falli: 0 },
    { nome: 'Genoa', punti: 0, falli: 0 },
    { nome: 'Udinese', punti: 0, falli: 0 },
    { nome: 'Bari', punti: 0, falli: 0 },
    { nome: 'Palermo', punti: 0, falli: 0 },
    { nome: 'Parma', punti: 0, falli: 0 },
    { nome: 'Vicenza', punti: 0, falli: 0 }
  ];
  