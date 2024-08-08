
let randomNumber = parseInt(Math.floor(Math.random() * 100) + 1);
alert(randomNumber)
const submit= document.querySelector('#subt')
const userInput= document.querySelector('#guessField')
const guessSlot= document.querySelector('.guesses')
const remaining= document.querySelector('.lastresult')
const lowOrHi= document.querySelector('.lowOrHi')
const startOver= document.querySelector('.resultparas')

const p = document.createElement('p')

let prevGuess = [];
let numGuess = 1;
let playGame = true;
if(playGame){
    submit.addEventListener('click',function(e){
       e.preventDefault();
     const guess =  parseInt(userInput.value);
     validGuess(guess);
    });
}

function validGuess(guess){
if(isNaN(guess)){
    alert('plz enter the valid number ')
}
else if (guess < 1){
    alert('plz enter the valid number ')
}
else if (guess > 100){
    alert('plz enter the valid number ')
}
else{
    prevGuess.push(guess);
    if(numGuess===11){
        displayGuess(guess);
        console.log(guess)
        displayMessage(`game over . Random number was ${randomNumber}`)
        endGame();
    }
    else{
        displayGuess(guess);
        checkGuess(guess);
    }
}
}

function checkGuess(guess){
if (guess === randomNumber){
    displayMessage(`your guessed it right ` );
    endGame();
}
else if (guess < randomNumber){
    displayMessage(`the number is toooo low!`)
}
else if (guess > randomNumber){
    displayMessage(`the number is toooo high!`)
}
}
function displayGuess(guess){

  userInput.value = "";
  guessSlot.innerHTML += `${guess},`;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`;
}
function displayMessage(message){
    console.log(message)
lowOrHi.innerHTML = `<h2>${message}</h2>`
} 

function endGame(){
userInput.value= '';
userInput.setAttribute('disabled','');
p.classList.add('button');
p.innerHTML =`<h2 id="newGame"> start new Game </h2>`;
startOver.appendChild(p);
playGame = false;
newGame();

};
function newGame(){
    const newgameButton= document.querySelector('#newGame');
    newgameButton.addEventListener('click',function(e){
        randomNumber = parseInt(Math.floor(Math.random() * 100) + 1);
        prevGuess=[];
        numGuess = 1;
        guessSlot.innerHTML = '';
        remaining.innerHTML = `${11 - numGuess}`;
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);
         playGame=true;
    })
    
       

    
};

















