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
console.log(biciclette)

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
    { nome: 'LR Vicenza', punti: 0, falli: 0 }
  ];
  
//creo una funzione per generare numero di punti e falli randomica
function generaNumeriCasuali(squadra) {
    return {
        nome: squadra.nome,
        punti: Math.floor(Math.random() * 100),
        falli: Math.floor(Math.random() * 500)
    };
}

squadre = squadre.map(generaNumeriCasuali);

let squadreFalliSubiti = squadre.map(({nome, falli}) => ({nome, falli}));

console.log(squadre)
console.log(squadreFalliSubiti);

// Selezioniamo l'elemento HTML in cui vogliamo inserire la tabella
const classifica = document.querySelector('#classifica');

// Ordiniamo l'array nomiFalliSubiti in base ai falli subiti in ordine decrescente
squadreFalliSubiti.sort((a, b) => b.falli - a.falli);

// Creiamo la tabella HTML
const tableHTML = `
  <table>
    <thead>
      <tr>
        <th>Squadra</th>
        <th>Falli subiti</th>
      </tr>
    </thead>
    <tbody>
      ${squadreFalliSubiti.map(({ nome, falli }) => `
        <tr>
          <td>${nome}</td>
          <td class="text-center">${falli}</td>
        </tr>
      `).join('')}
    </tbody>
  </table>
`;

// Inseriamo la tabella nella pagina HTML
classifica.innerHTML = tableHTML;


//========================================================================================
/*      Snack 3
Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
l'array generato da parte vostra dovrà essere di ad esempio nomi o cose: ['alberto', 'michele','angelo','simone']
se come numeri ad esempio ho 2 e 4 devo inserire in un array nuovo l'elemento in posizione 3
La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.
Usiamo i nuovi metodi degli array foreach o filter.*/

// creo array di nomi
const nomi = [
    "Alex",
    "Ginevra",
    "Edoardo",
    "Lucia",
    "Riccardo"
]

// soluzione con filter
function valoreIntermedio(array, a, b) {
    return array.filter((value, index) => 
        index > a && index < b
    );
}

const risultato = valoreIntermedio(nomi, 0, 4);

console.log(nomi)
console.log(risultato)

// stampa a schermo
document.getElementById("nomi").innerText = risultato.join(", ");