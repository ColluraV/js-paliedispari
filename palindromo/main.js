const btnConferma = document.querySelector(".conferma");
const result = document.querySelector("[id=risultato]");
const divPal = document.querySelector("[id=palDiv]");


//scriviamo il nome

btnConferma.addEventListener("click", function () {

    const inputNome = document.querySelector("[id=nomeInput]").value;
    console.log(inputNome);
    
    const revNome = palindromo(inputNome);
    console.log(revNome);
            
    result .innerHTML = ("Il nome al contrario è "+ revNome)

    if ( inputNome === revNome){
        divPal.innerHTML = (" è PALINDROMO!")
    } else {
        divPal.innerHTML = (" NON è PALINDROMO!")
    }


})



 function palindromo (word){
        let revWord = '';
        for ( let i= word.length - 1; i >= 0; i-- ){
            
            const lettera = word[i];
            revWord = revWord + lettera;
        
        }
        return revWord;
    }