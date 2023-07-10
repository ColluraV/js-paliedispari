//utente sceglie pari o dispari e il numero

const btnConferma = document.querySelector(".conferma");
const risultati = document.querySelector("[id=risultato]");

btnConferma.addEventListener("click", function () {

    const sceltaUtente = document.querySelector("[id=pariDispari]").value;
    const inputNum = document.querySelector("[id=numeroInput]").value;
    console.log(inputNum);
   /* console.log (sceltaUtente);*/

//viene generato un numero random da 1 a 6 (da 1 a 5 dispari ha più piossibilità di vincere)

    const numRandom = randomNumber()
    console.log (numRandom)

//sommiamo i due numeri

    const somma = numRandom + parseInt(inputNum);
    console.log ( somma );


// verifichiamo se il risultato è pari o dispari

    const finalResult = envenORnot (somma);
    console.log(finalResult);

//dichiariamo il vinictore

    if ( finalResult === sceltaUtente){
        console.log ("Hai vinto")
        risultati .innerHTML = ("E' uscito il numero "+ numRandom + ", la somma è "+ somma + " e HAI PALESEMENTE VINTO" )

    } else { 
        console.log ("Hai perso")
        risultati .innerHTML = ("E' uscito il numero "+ numRandom + ", la somma è "+ somma + " e HAI PALESEMENTE PERSO" )
    }




    //funzioni 

    function envenORnot(val){

    if(val % 2 == 0 ){
        envenORnot = "pari";
    } else {
        envenORnot = "dispari";
    }
    return envenORnot;
}

    function randomNumber() {
    const random = Math.floor(Math.random() * 6) + 1;
    return random;
}

})