/*
Consegna:
    Scrivi un programma che stampi in console i numeri da 1 a 100, ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”. Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.

BONUS 1: 
    Crea un container nel DOM , aggiungendo ( attraverso la funzione append() ) un elemento html con il numero o la stringa corretta da mostrare.
    
BONUS 2: 
    Applica stili differenti agli elementi aggiunti al DOM nel BONUS 1, a seconda che il valore inserito sia un numero, un fizz, un buzz o un fizzbuzz.
*/

// Creo una variabile "let boxes" che con "querySelector" mi seleziona il primo elemento "#container_boxes"
let boxes = document.querySelector(`#container_boxes`);

/* Creiamo un ciclo "for" che stampi i numeri da 1 a 100 :
    - let i = 1 : crea la variabile e indica da quando iniziare
    - i <= 100 : crea le condizioni e i limiti che il ciclo deve rispettare, in questo caso ( i deve essere minore o uguale a 100 )
    - i++ = incrementa o decrementa il valore dopo ogni ciclo compiuto, in questo caso ( i aumenta di 1 dopo ogni giro )
*/
for (let i = 1; i <= 100; i++) {
    
    // Creo una variabile "box" che mi crea l'elemento "div" ( createElement("div") )
    let box = document.createElement("div");

    // Aggiungo alla variabile "box" un classe "box" ( classList.add("box") )
    box.classList.add("box")    

    /* Creo una serie di condizioni con (if, else, else if):
        - per i numeri che non sono multipli di 3 e di 5
        - per i numeri multipli di 3 e 5 imposto delle operazioni con i modulus (%)
        - per ogni numero che diviso per 3 e/o per 5 mi dia resto zero ( i % "3 o 5" === 0)
    */
    // Quando il numero è multiplo di 3 e 5, stampo FizzBuzz
    if (i % 3 === 0 && i % 5 === 0) {

        // Appendiamo alla variabile "box" la stringa "FizzBuzz" ( .append("FizzBuzz") )
        box.append("FizzBuzz");
        // Appendiamo alla variabile "boxes" la variabile "box" ( .append(box) )
        boxes.append(box);
        // Aggiungo alla variabile "box" la classe "box_fizzbuzz" ( .classList.add("box_fizzbuzz") )
        box.classList.add("box_fizzbuzz")
        
        console.log("FizzBuzz");
    
    // Quando il numero è multiplo di 3, stampo Fizz
    } else if (i % 3 === 0) { 
        
        box.append ("Fizz");
        boxes.append(box);
        box.classList.add("box_fizz")

        console.log("Fizz");        

    // Quando il numero è multiplo di 5, stampo Buzz
    } else if (i % 5 === 0) {
        
        box.append ("Buzz");
        boxes.append(box);
        box.classList.add("box_buzz")

        console.log("Buzz");

    // Quando i numeri non sono multipli di 3 e di 5
    } else {        

        box.append(i)
        boxes.append(box)

        console.log(i);
    }
}