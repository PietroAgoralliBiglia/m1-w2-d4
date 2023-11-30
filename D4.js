/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/
/* SCRIVI QUI LA TUA RISPOSTA */

function area(l1, l2) {
    const result = l1 * l2;
    return result;
  }
  
  const lunghezza = 5;
  const larghezza = 8;
  
  const risultatoArea = area(lunghezza, larghezza);
  console.log("L'area del rettangolo è:", risultatoArea);

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function crazySum(num1, num2) {
    if (num1 === num2) {
      return (num1 + num2) * 3;
    } else {
      return num1 + num2;
    }
  }
  const risultato1 = crazySum(3, 5);
  const risultato2 = crazySum(7, 7);
  console.log("Risultato 1:", risultato1);
  console.log("Risultato 2:", risultato2);

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function crazyDiff(numero) {
  const differenzaAssoluta = Math.abs(numero - 19);
  if (numero > 19) {
    return differenzaAssoluta * 3;
  } else {
    return differenzaAssoluta;
  }
}
const risultato1 = crazyDiff(15); // Differenza assoluta (|15 - 19|)
const risultato2 = crazyDiff(25); // Differenza assoluta moltiplicata per tre (|25 - 19|) * 3

console.log("Risultato 1:", risultato1);
console.log("Risultato 2:", risultato2);

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function boundary(n) {
    return (n >= 20 && n <= 100) || n === 400;
  }
  console.log(boundary(30));  // true (compreso tra 20 e 100)
  console.log(boundary(150)); // false (non compreso tra 20 e 100)
  console.log(boundary(400)); // true (uguale a 400)

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function epify(stringa) {
    if (stringa.startsWith("EPICODE")) {
      return stringa;
    } else {
      return "EPICODE" + stringa;
    }
  }
  const risultato1 = epify("Hello");
  const risultato2 = epify("EPICODEWorld");

  console.log("Risultato 1:", risultato1);
  console.log("Risultato 2:", risultato2);

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function check3and7(numero) {
    if (numero > 0) {
      if (numero % 3 === 0 || numero % 7 === 0) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }
  console.log(check3and7(9));
  console.log(check3and7(14));
  console.log(check3and7(5));
  console.log(check3and7(-2));

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function reverseString(inputString) {
    return inputString.split('').reverse().join('');
}
const risultato = reverseString("EPICODE");
console.log("Risultato:", risultato); // "EDOCIPE"

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function upperFirst(inputString) {
    const wordsArray = inputString.split(' ');
    const capitalizedWords = wordsArray.map(word => word.charAt(0).toUpperCase() + word.slice(1));
    const resultString = capitalizedWords.join(' ');

  return resultString;
}
const risultato = upperFirst("esempio");
console.log("Risultato:", risultato);

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function cutString(inputString) {
    if (inputString.length >= 2) {
        return inputString.slice(1, -1);
  } else {
    return "";
  }
}
const risultato = cutString("EPICODE");
console.log("Risultato:", risultato);

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function giveMeRandom(n) {
  const randomNumbers = [];

  for (let i = 0; i < n; i++) {
    const randomNumber = Math.floor(Math.random() * 11);
    randomNumbers.push(randomNumber);
  }
  return randomNumbers;
}
const risultato = giveMeRandom(5);
console.log("Risultato:", risultato); // Un array con 5 numeri casuali tra 0 e 10