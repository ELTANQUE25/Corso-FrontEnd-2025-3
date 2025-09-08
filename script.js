//ESERCIZI DI BASE SU VARIABILI E TIPI


//1. Crea una variabile let citta = "Palermo"; e stampala in console.
let citta = 'Napoli';
console.log(citta); // Napoli


//2. Crea una costante const pi = 3.14; e prova a riassegnarla. Che errore ottieni?
const PI = 3.14;
PI = 3.15; // ERRORE 

//3. Crea una variabile let temperatura = 25; e stampa in console "La temperatura è 25 gradi" .
let temperature = 25;
console.log("La temperatura è " + temperature + " gradi"); 

//4. Dichiarane una let vuota; e stampane il valore. Che ottieni?
let vuota;
console.log(vuota); // undefined


//5. Stampa il tipo di queste variabili:
let numero = 42;
let parola = "ciao";
let flag = false;
let nulla = null;
let nonDefinito;

console.log(typeof numero); // number
console.log(typeof parola); // string
console.log(typeof flag); // boolean
console.log(typeof nulla); // object
console.log(typeof nonDefinito); // undefined


//OPERATORI
//1. Calcola 7 + 5 , 10 - 3 , 4 * 6 , 20 / 4 e stampali.
let a = 7;
let b = 5;
let somma = a + b; // 12
let c = 10;
let d= 3;
let differenza = c - d; // 7
let e = 4;
let f = 6;
let prodotto = e * f; // 24
let g = 20;
let h = 4;
let quoziente = g / h; // 5

console.log("Somma: " + somma);
console.log("Differenza: " + differenza);
console.log("Prodotto: " + prodotto);
console.log("Quoziente: " + quoziente);

//2. Calcola il resto di 17 % 3 .
let resto = 17 % 3;
console.log("Resto: " + resto); // 2

//3. Usa l’operatore += per sommare 10 a una variabile let punti = 50; .
let punti= 50;
punti += 10; 
console.log(punti); // 60

//4. Confronta e prendi visione:
console.log(5 == "5"); // true
console.log(5 === "5"); // false
console.log(5 != 7);  // true  
console.log(8 !== "8"); // true

//CONDIZIONI
//1 Crea una variabile let eta = 20; e stampa "Maggiorenne" se >= 18, altrimenti
"Minorenne" .

let eta = 20;
if (eta >= 18) {
    console.log("Sei maggiorenne.");
} else {
    console.log("Sei minorenne.");
}

// 2 Crea una variabile let voto = 30; e stampa "Ottimo" se è 30, "Buono" se è >= 18,
"Insufficiente" altrimenti.

let voto = 30;
if (voto == 30) {
    console.log("Ottimo");
} else if (voto >= 18) {
    console.log("Buono");
} else {
    console.log("Insufficiente");
}

//3. Usa un if...else if...else per salutare in base a let ora = 9, 15, 21 .
let ora = 9;
if (ora < 15) {
    console.log("Buongiorno");
} else if (ora < 21) {
    console.log("Buon pomeriggio");
} else {
    console.log("Buonasera");
}