/*
Consegna:
    Scrivi un programma che stampi in console i numeri da 1 a 100, ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”. Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.

BONUS 1: 
    Crea un container nel DOM , aggiungendo ( attraverso la funzione append() ) un elemento html con il numero o la stringa corretta da mostrare.
    
BONUS 2: 
    Applica stili differenti agli elementi aggiunti al DOM nel BONUS 1, a seconda che il valore inserito sia un numero, un fizz, un buzz o un fizzbuzz.
*/

// Creiamo un ciclo che stampi i numeri da 1 a 100
for (let i = 1; i <= 100; i++) {
    
    // Creiamo la condizione per stampare FizzBuzz quando il numero è multiplo di 3 e 5
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    
    // Creiamo la condizione per stampare Fizz quando il numero è multiplo di 3
    } else if (i % 3 === 0) { 
        console.log("Fizz");        

    // Creiamo la condizione per stampare Buzz quando il numero è multiplo di 5
    } else if (i % 5 === 0) {
        console.log("Buzz");

    // Creiamo la condizione per stampare i numeri che non sono multipli di 3 e di 5
    } else {
        console.log(i);
    }
}
