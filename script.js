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
console.log(5 === "5"); // false confronta anche il tipo
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

//CICLI
//1. Stampa i numeri da 1 a 20 con un ciclo for .
for (let i = 1; i <= 20; i++) {
    console.log(i);
}

//2. Stampa i numeri pari da 2 a 20.
for (let i = 2; i <= 20; i += 2) {
    console.log(i);
}

//3. Con un ciclo while stampa i numeri da 10 a 1 (conto alla rovescia).
let count = 10;
while (count >= 1) {
    console.log(count);
    count--;
}

//Con un ciclo for stampa la tabellina del 5 (da 5x1 a 5x10 ).
for (let i = 1; i <= 10; i++) {
    console.log("5 x " + i + " = " + (5 * i)); //In ogni iterazione, viene eseguita la moltiplicazione di 5 per il valore di i
}

//5. Somma i numeri da 1 a 100 con un ciclo for .
let somma= 0;
for (let i = 1; i <= 100; i++) {
    somma += i; // Aggiungi il valore di i alla variabile somma
}   
console.log(somma);

//FUNZIONI
//1. Scrivi una funzione saluta() che stampa "Ciao!" .
function saluta(nome) {
    console.log("Ciao " + nome + "!");
} 
saluta("Mariangela");

//2. Scrivi una funzione somma(a, b) che restituisce la somma.
function somma(a, b) {
    return a + b;
}
let risultato1 = somma(5, 7);
console.log(risultato1); 

//3. Scrivi una funzione moltiplica(a, b) che restituisce il prodotto.
function moltiplica(a, b) {
	return a*b;
}
let risultato2 = moltiplica(2,3);
console.log ("Risultato: "+ risultato2);

//4. Scrivi una funzione isPari(numero) che restituisce true se il numero è pari.
function isPari (numero) {
if (numero % 2 ==0)
return true;
else {
    return false;
}
}
let risultato3 = isPari(4);
console.log(risultato3);

//5. Crea una funzione quadrato(numero) che restituisce il quadrato del numero.
function quadrato(numero) {
return numero*numero;
}

let risultato4 = quadrato(5);
console.log(risultato4);

//6. Scrivi una funzione presentati(nome, eta) che stampa:
function presentati(nome, eta) {
console.log ("Ciao, mi chiamo " + nome + " e ho " + eta + " anni");
}

presentati("Mariangela", 29);

//ARRAY
//1. Crea un array frutti = ["mela", "banana", "pera"] e stampane il primo elemento.

let frutti = ["mela", "banana", "pera"];
console.log(frutti[0]); // mela

//2. Aggiungi "kiwi" alla fine dell’array e stampalo.
frutti.push("kiwi");
console.log(frutti);

//3. Rimuovi l’ultimo elemento con .pop() e stampalo.
let ultimoFrutto = frutti.pop();
console.log(ultimoFrutto);

//4. Stampa tutti gli elementi con un ciclo for .
for (let i = 0; i < frutti.length; i++) {
    console.log(frutti[i]);
}

// 5. Stampa la lunghezza dell’array.
console.log(frutti.length);

//OGGETTI