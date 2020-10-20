// Scrivere un programma che stampi tutti i numeri da 1 a 100 con queste regole:
// al posto dei multipli di 3, deve stampare "Fizz"
// al posto dei multipli di 5, deve stampare "Buzz"
// al posto dei multipli sia di 3 che di 5, deve stampare "FizzBuzz"

//creo variabile per definire numero massimo
var maxNumber = 100;

//creo variabile per i multipli

//creo ciclo che stampi numeri da 1 a 100
for (var i = 1; i <= maxNumber; i++) {
    var currentNumber = i;
    // console.log(currentNumber);
    if (currentNumber % 3 == 0) {
        console.log("fizz " + i);
    } else if (currentNumber % 5 == 0) {
        console.log("buzz " + i);

    } else if (currentNumber % 3 == 0 && currentNumber % 5 == 0) {
        console.log("FizzBuzz " + i);
    }
}
