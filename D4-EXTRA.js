// Esercizi aggiuntivi (facoltativi) per D4

/* EXTRA 1
 Scrivi una funzione chiamata "checkArray" che riceve un array di numeri casuali (creati con la funzione "giveMeRandom") e per ogni elemento stampa in console
 se il suo valore è maggiore di 5 o no.
 La funzione deve inoltre ritornare la somma di tutti i valori maggiori di 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function checkArray(numbersArray) {
    let sumOfValuesGreaterThan5 = 0;
  
    for (let i = 0; i < numbersArray.length; i++) {
      const currentValue = numbersArray[i];
      if (currentValue > 5) {
        console.log(`${currentValue} è maggiore di 5.`);
        sumOfValuesGreaterThan5 += currentValue;
      } else {
        console.log(`${currentValue} non è maggiore di 5.`);
      }
    }
    return sumOfValuesGreaterThan5;
}
const numeriCasuali = giveMeRandom(5);
const sommaValoriMaggioriDi5 = checkArray(numeriCasuali);
/* EXTRA 2
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "shoppingCartTotal" che calcola il totale dovuto al negozio (tenendo conto delle quantità di ogni oggetto).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function shoppingCartTotal(cart) {
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
      const item = cart[i];
      if (item.hasOwnProperty("price") && item.hasOwnProperty("quantity")) {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
      } else {
        console.log(`Errore: L'oggetto nella posizione ${i} non ha tutte le proprietà necessarie.`);
      }
    }
    return total;
  }
  const shoppingCart = [
    { id: 1, name: "Prodotto A", price: 20, quantity: 3 },
    { id: 2, name: "Prodotto B", price: 30, quantity: 2 },
  ];
  const totaleSpesa = shoppingCartTotal(shoppingCart);

  console.log("Totale dovuto al negozio:", totaleSpesa);

/* EXTRA 3
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "addToShoppingCart" che riceve un nuovo oggetto dello stesso tipo, lo aggiunge a "shoppingCart" e ritorna il nuovo numero totale degli elementi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 4
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "maxShoppingCart" che riceve l'array "shoppingCart" e ritorna l'oggetto più costoso in esso contenuto.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 5
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "latestShoppingCart" che riceve l'array "shoppingCart" e ritorna l'ultimo elemento.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 6
 Crea una funzione chiamata "loopUntil" che riceve un numero intero come parametro con valore tra 0 e 9.
 La funzione è composta da un ciclo che stampa un numero casuale tra 0 e 9 finchè il numero casuale non è maggiore di x per tre volte di fila.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 7
Crea una funzione chiamata "average" che riceve un array come parametro e ne ritorna la media aritmetica. La funzione salta automaticamente i valori non numerici nell'array.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 8
 Crea una funzione chiamata "longest" che trova la stringa più lunga all'interno di un array di stringhe fornito come parametro.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 9
 Crea una funzione per creare un filtro anti-spam per la tua casella email. La funzione riceve un parametro stringa chiamato "emailContent", e torna un valore booleano.
 La funzione deve ritornare true se "emailContent" non contiene le parole "SPAM" o "SCAM".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 10
 Scrivi una funzione che riceve una data come parametro, e calcola il numero di giorni passati da quella data.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function giorniPassatiDaData(data) {
  const dataCorrente = new Date();
  const differenzaInMillisecondi = dataCorrente - data.getTime();
  const giorniPassati = Math.floor(differenzaInMillisecondi / (1000 * 60 * 60 * 24));

  return giorniPassati;
}
const dataFornita = new Date("2022-01-01");
const giorniTrascorsi = giorniPassatiDaData(dataFornita);

console.log("Giorni passati dalla data fornita:", giorniTrascorsi);
/* EXTRA 11
 Scrivi una funzione chiamata "matrixGenerator" che riceve come parametri due numeri interi, "x" e "y".
 Il risultato deve essere una matrice di "x" volte "y", e i valori devono rispecchiare gli indici della posizione all'interno della matrice.
 Es.: x = 3, y = 2
 ["00","01","02"
 "10","11","12"]
*/

/* SCRIVI QUI LA TUA RISPOSTA */
