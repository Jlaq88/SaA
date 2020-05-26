"use strict";

// This program will simulate a bingo caller where a bingo call is made up of a letter and a number (e.g. B12)
// The letters are B, I, N, G, O and each letter has a range of values
//  B = 1 to 15
//  I = 16 to 30
//  N = 31 to 45
//  G = 46 to 60
//  O = 61 to 75

// Declare a function called 'pickLetter' that randomly returns one of the letters from BINGO
function pickLetter() {
    let choice = Math.floor(Math.random()*5) + 1;
    if(choice == 1) { return "B" ;}
    if(choice == 2) { return "I" ;}
    if(choice == 3) { return "N" ;}
    if(choice == 4) { return "G" ;}
    if(choice == 5) { return "O" ;}
}

// Declare a function called 'pickNumber' that takes in a 'letter' and then randomly returns a random number in the
// correct range
function pickNumber(letter) {
    let lower = 1;
    if(letter === "I") { lower = 16; }
    else if(letter === "N") { lower = 31; }
    else if(letter === "G") { lower = 46; }
    else if(letter === "O") { lower = 61; }

    return Math.floor(Math.random()*15) + lower;
}

// Call pickLetter and store the result in 'letter'
let letter = pickLetter();

// Call pickNumber and store the result in 'value'
let value = pickNumber(letter);

// Output the bingo call (e.g. B12)
console.log(letter + value);