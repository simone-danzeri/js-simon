// Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
// Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

// Creo array con dentro 5 numeri casuali
const randArray = generateRandomArray(5, 1, 100);
console.log(randArray);
// Visualizzo in pagina l'array
const myArray = document.querySelector("#rnd-numb");
console.log(myArray);
myArray.innerHTML = randArray;
// Imposto un timer di 30 secondi al refresh della pagina
const countdownTimer = document.querySelector("#countdown");
let timer = 30;
countdownTimer.innerHTML = `Hai ancora ${timer} secondi`;
const clock = setInterval(function () {
  timer--;
  countdownTimer.innerHTML = `Hai ancora ${timer} secondi`;
  if (timer == 0) {
    clearInterval(clock);
    // Al termine del timer faccio scomparire sia il timer che i numeri
    countdownTimer.innerHTML = "";
    myArray.innerHTML = "";
  }
}, 1000);
// Dopo che i numeri ed il timer sono scomparsi devo far uscire 5 prompt che chiedano all'utente di inserire un numero
let myScore = document.querySelector("#score");
const correctNumber = [];
let currPromp;
let score = 0;
const myTimeout = setTimeout(numInput, 31000);
function numInput(){
    for(let i=0; i<5; i++){
        currPromp = parseInt(prompt(`Inserisci il ${i+1}° numero`));
        // Controllo quanti numeri l'utente ha indovinato
        if(randArray.includes(currPromp)){
            correctNumber[score] = currPromp;
            score++;
        }
    }
    myScore.innerHTML = `Ne hai indovinati ${score} su  5`;
}

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

// Funzione che mi crea un determinato numero (num) di prompt all'utente
// num -> un numero intero di prompt per l'utente
// return: tanti prompt quanto è il valore di num
function manyPrompts() {
    let prompts;
    for(let i = 0; i < 5; i++) { // al posto del 5 si deve mettere num ma per questo esercizio mi serviva 5
        prompts = parseInt(prompt('Dimmi un numero'));
        console.log(prompts);
    }
}  

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
