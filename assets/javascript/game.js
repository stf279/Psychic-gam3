"use strict";

const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

let wins = 0;
let losses = 0;
let remainingGuesses = 9;
let round=0;

let soFar = [];

let userGuess = null;

// Force the computer to pick a random number within the length of the array
// and then assign the number's letter equivalent to the compAnswer variable
let compAnswer = alphabet[Math.floor(Math.random() * alphabet.length)];

// using onkeypress because it fires when a valid character is entered (via press AND release) not 
// simply when a key is only pressed or released https://stackoverflow.com/questions/3396754/onkeypress-vs-onkeyup-and-onkeydown
document.onkeypress = function(kp) {

    // assign the singular pressed key to a variable, lower-case it, and use fromCharCode which only accepts UTF-16 code units
    // reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fromCharCode
    let userGuess = String.fromCharCode(kp.keyCode).toLowerCase();
    console.log(`the user has pressed the ${userGuess} key`);

    // validate the keypress using array.indexOf()
    // since indexOf returns -1 if a character is NOT present, it can be used to
    // prevent the user from entering the same character twice in a single round
    // the second part makes sure that the guess is only accepted if it is present
    // in the "alphabet" array - so symbols and numbers aren't accepted and won't
    // count against the user if they press it. 
    // if the guess IS valid, add it to the end of the soFar array and remove a remaining guess

    if (soFar.indexOf(userGuess) < 0 && alphabet.indexOf(userGuess) >= 0) {
        // if the character pressed passes the above test, add it to the end of the soFar array
        soFar[soFar.length]=userGuess;
        // remove one remaining guess
        remainingGuesses--
    }
    // this will handle invalid key presses and alert the user
    else{
        alert("Invalid guess: please choose a letter of the alphabet that you haven't already guessed this round");
    }
   
    // if the guess passes validation AND is correct, then add 1 to wins, dump all the data out of the soFar array, 
    // reset guesses to 9, and force the computer to pick a new random answer from the array
    if (compAnswer === userGuess) {
            wins++;
            remainingGuesses = 9;
            soFar = [];
            round++;
            compAnswer = alphabet[Math.floor(Math.random() * alphabet.length)];
    }
    
    // if the guess passes validation AND the guess is wrong AND the user is out of guesses, 
    // add 1 to losses, dump all the data from the soFar array, reset guesses to 9, and force 
    // the computer to pick a new random answer from the array
    if (remainingGuesses === 0) {
        losses++;
        remainingGuesses = 9;
        soFar = [];
        round++;
        compAnswer = alphabet[Math.floor(Math.random() * alphabet.length)];
    }
    
    // write the results to the HTML page, see the HTML file for the matching IDs
    document.querySelector("#wins").innerHTML = `Wins: ${wins}`;
    document.querySelector("#losses").innerHTML = `Losses: ${losses}`;
    document.querySelector("#guesses").innerHTML = `Guesses Remaining this round: ${remainingGuesses}`;
    document.querySelector("#guessed").innerHTML = `Letters Guessed this round: ${soFar}`;
    document.querySelector("#round").innerHTML = `You have played ${round} rounds`;

}