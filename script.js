let randomNum = parseInt(Math.round(Math.random()*10)+20)
console.log(randomNum)

let userGuess = document.querySelector('#input-field')
let submit = document.querySelector('#submit')
let remaining = document.querySelector('#remaining')
let message = document.querySelector("#message")
let guessSlot = document.querySelector("#guesses")
let srtGameBtn = document.querySelector("#newGame")

const p = document.createElement('p');
let prevGuess = []
let playGame = true;
let numGuess = 0;

if(playGame){
    submit.addEventListener('click', function(e){
        e.preventDefault();
        let guess = parseInt(userGuess.value)
        validateGuess(guess)
    })
}

function validateGuess(guess){
    if(isNaN(guess)){
        alert("Please Enter Valid Number")
    }
    else if(guess<10){
        alert("Your Guess Should Be Above 9");
    }
    else if(guess>30){
        alert("Your Guess Should Be Under 31");
    }
    else{
        prevGuess.push(guess);
        if(numGuess === 10){
            displayGuess();
            displayMessage(`Game Over. Random number Was${randomNum}`)
            endGame();
        }
        else{
            checkGuess(guess);
            displayGuess(guess);
        }
    }
}

function checkGuess(guess){
    if(guess<randomNum){
        displayMessage("Number is Tooo Low")
    }
    else if(guess>randomNum){
        displayMessage("Number is Tooo High")
    }
    else{
        displayMessage("You guessed it right")
        endGame();
    }
}
function displayGuess(guess){
    userGuess.value = ""
    guessSlot.innerHTML = `${prevGuess}`
    numGuess++;
    console.log(numGuess);
    remaining.innerHTML = 10-numGuess
}

// Note 
// p.classList.add('button') use this to make p tag like as button 

function displayMessage(msg){
    message.innerHTML= `${msg}`;
}

function newGame(){
    srtGameBtn.addEventListener('click', function() {
        randomNum = parseInt(Math.round(Math.random()*10)+10);
        prevGuess = [];
        numGuess = 0;
        guessSlot.innerHTML = ''
        userGuess.removeAttribute('disabled')
        remaining.innerHTML = 10-numGuess
        playGame = true;
        srtGameBtn.style.display="none"
    })
}
function endGame(){
    userGuess.value = ""
    userGuess.setAttribute('disabled','')
    playGame =  false;
    srtGameBtn.style.display="block"
    newGame();
}
