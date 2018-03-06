"use strict";

const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

let wins = 0;
let losses = 0;
let remainingGuesses = 9;
let soFar = [];
let userGuess = null;
let compAnswer = alphabet[Math.floor(Math.random() * alphabet.length)];

document.onkeypress = function(kp) {


    let userGuess = String.fromCharCode(kp.keyCode).toLowerCase();
    console.log(`the user has pressed the ${userGuess} key`);

    if (soFar.indexOf(userGuess) < 0 && alphabet.indexOf(userGuess) >= 0) {
        
        soFar[soFar.length]=userGuess;
       
        remainingGuesses--
    }
    
    else{
        alert("Invalid guess: please choose a letter of the alphabet that you haven't already guessed this round");
    }
   
    if (compAnswer === userGuess) {
            wins++;
            remainingGuesses = 9;
            soFar = [];
            compAnswer = alphabet[Math.floor(Math.random() * alphabet.length)];
    }
    
   
    if (remainingGuesses === 0) {
        losses++;
        remainingGuesses = 9;
        soFar = [];
        compAnswer = alphabet[Math.floor(Math.random() * alphabet.length)];
    }
    
    document.querySelector("#wins").innerHTML = `Wins: ${wins}`;
    document.querySelector("#losses").innerHTML = `Losses: ${losses}`;
    document.querySelector("#guesses").innerHTML = `Guesses Remaining this round: ${remainingGuesses}`;
    document.querySelector("#guessed").innerHTML = `Letters Guessed this round: ${soFar}`;
    

}