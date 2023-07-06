/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
*/

/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/

const area = function (l1, l2) {
  const areaRettangolo = l1 * l2;
  return areaRettangolo;
};
console.log("area rettangolo:", area(5, 10));

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

const crazySum = function (n1, n2) {
  const sum = n1 + n2;
  if (n1 === n2) {
    const mult = (n1 + n2) * 3;
    return mult;
  }
  return sum;
};
console.log("Somma numeri diversi:", crazySum(10, 20));
console.log("Somma numeri interi:", crazySum(20, 20));

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

const crazyDiff = function (n) {
  let differenza = Math.abs(n - 19);

  if (n > 19) {
    differenza *= 3;
  }

  return differenza;
};

console.log("differenza numeri < 19:", crazyDiff(10));
console.log("differenza numeri > 19:", crazyDiff(30));

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

const boundary = function (n) {
  if ((n >= 20 && n <= 100) || n === 400) {
    return true;
  }
};

console.log("numero < 20 :", boundary(10));
console.log("numero >= 20 && <=100 :", boundary(50));
console.log("numero = 400", boundary(400));

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

const epify = function (string) {
  if (string.indexOf("EPICODE") === 0) {
    return string;
  } else {
    return "EPICODE " + string;
  }
};

console.log(epify("ciao "));
console.log(epify("EPICODE"));

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

const check3and7 = function (n) {
  if ((n > 0 && n % 3 === 0) || n % 7 === 0) {
    return "é multiplo di 3 o di 7";
  } else if (n > 0 && n !== 3 && n !== 7) {
    return "é un numero positivo ";
  } else if (n < 0 && n !== 3 && n !== 7) {
    return "inserisci un numero positivo";
  }
};

console.log(check3and7(1));
console.log(check3and7(21));
console.log(check3and7(48));
console.log(check3and7(-5));

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

const reverseString = function (string) {
  let reversedStr = "";
  for (let i = string.length - 1; i >= 0; i--) {
    reversedStr += string[i];
  }
  return reversedStr;
};

console.log(reverseString("ciao EPICODE"));

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

const upperFirst = function (string) {
  const words = string.split(" ");
  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    const wordCap = word[0].toUpperCase() + word.slice(1);
    words[i] = wordCap;
  }
  return words.join(" ");
};

console.log(upperFirst("ciao epicode"));

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

const cutString = function (string) {
  return string.slice(1, -1);
};

console.log(cutString("EPICODE"));

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

const giveMeRandom = function (n) {
  const numberArray = [];
  for (let i = 0; i < n; i++) {
    const randomNum = Math.floor(Math.random() * 11);
    numberArray.push(randomNum);
  }
  return numberArray;
};

console.log(giveMeRandom(5));
console.log(giveMeRandom(8));
