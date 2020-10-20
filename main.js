// Scrivere un programma che stampi tutti i numeri da 1 a 100 con queste regole:
// al posto dei multipli di 3, deve stampare "Fizz"
// al posto dei multipli di 5, deve stampare "Buzz"
// al posto dei multipli sia di 3 che di 5, deve stampare "FizzBuzz"

//creo variabile per definire numero massimo
var maxNumber = 100;

//creo variabile per i multipli

//creo ciclo che stampi numeri da 1 a 100
// for (var i = 1; i <= maxNumber; i++) {
//     var currentNumber = i;
//     // console.log(currentNumber);
//     if (currentNumber % 3 == 0 && currentNumber % 5 == 0 ) {
//         console.log("FizzBuzz " + i);
//     } else if (currentNumber % 5 == 0) {
//         console.log("buzz " + i);
//
//     } else if (currentNumber % 3 == 0) {
//         console.log("Fizz " + i);
//     } else {
//         console.log(currentNumber);
//     }
// }

//second method

var i = 1;
while (i <= maxNumber) {
    var numeroCorrente = i;
    // console.log(numeroCorrente);
    //creo variabile per il multiplo di 3
    var multiplo3 = numeroCorrente % 3 == 0;
    //creo variabile per il multiplo di 5
    var multiplo5 = numeroCorrente % 5 == 0;
    //creo la condizione per la stampa fizzbuzz
    if (multiplo3 && multiplo5) {
        console.log("FizzBuzz " + numeroCorrente);
    } else if (multiplo3) {
        console.log("Fizz " + numeroCorrente);
    } else if (multiplo5) {
        console.log("Buzz " + numeroCorrente);
    } else {
        console.log(numeroCorrente);
    }
    i++
}
