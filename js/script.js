// Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
// Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.




// Creo array con dentro 5 numeri casuali
const randArray = generateRandomArray(5, 1, 100);
console.log(randArray);
// Visualizzo in pagina l'array
const myArray = document.querySelector('#rnd-numb');
console.log(myArray);
myArray.innerHTML = randArray;
// Imposto un timer di 30 secondi al refresh della pagina
const countdownTimer = document.querySelector('#countdown');
let timer = 30;
countdownTimer.innerHTML =  `Hai ancora ${timer} secondi`;
const clock = setInterval(function() {
    timer--;
    countdownTimer.innerHTML =  `Hai ancora ${timer} secondi`;
    if(timer == 0) {
        clearInterval(clock);
        // Al termine del timer faccio scomparire sia il timer che i numeri
        countdownTimer.innerHTML = '';
        myArray.innerHTML = '';

    }
}, 1000); 



// FUNCTIONS

// Genera un array di arrayLength numeri random non ripetuti
// arrayLength -> numero intero che definisce la lunghezza dell'array tornato
// numMin -> numero intero minimo da generare
// numMax -> numero intero massimo da generare
// return: un array di arrayLength numeri random
function generateRandomArray(arrayLength, numMin, numMax) {
  // Creiamo un array vuoto
  const randomNumbersArray = [];

  // finche non ci sono arrayLength numeri nell'array:
  while (randomNumbersArray.length < arrayLength) {
    // genero un numero random
    const randNumber = getRndInteger(numMin, numMax);
    // se il numero random non esiste nell'array lo pusho
    if (!randomNumbersArray.includes(randNumber)) {
      randomNumbersArray.push(randNumber);
    }
  }

  return randomNumbersArray;
}

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
