'use strict';

let alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

let guess = Math.floor(Math.random() * 26);

let myGuess = alpha [guess];

let player = prompt("Please guess a letter:", "");

let win = 0;

let loss = 0;





console.log(guess);
console.log(myGuess);