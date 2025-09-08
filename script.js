//ESERCIZI DI BASE SU VARIABILI E TIPI


let citta = 'Napoli';
console.log(citta); // Napoli

const PI = 3.14;
PI = 3.15; // ERRORE 


let temperature = 25;
console.log("La temperatura è " + temperature + " gradi"); 


let vuota;
console.log(vuota); // undefined



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

let resto = 17 % 3;
console.log("Resto: " + resto); // 2


let punti= 50;
punti += 10; 
console.log(punti); // 60


console.log(5 == "5"); // true
console.log(5 === "5"); // false
console.log(5 != 7);  // true  
console.log(8 !== "8"); // true