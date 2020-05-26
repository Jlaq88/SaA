"use strict";
// This program looks at different comparison operators

// Create an integer variable named num, set the value to 12
let num = 12;
// Create a boolean variable named greater, set the value to num greater than 0
let greater = num > 0;
// Create a boolean variable named lesser, set the value to num less than 15
let lesser = num < 15;
// Set a variable to number between 0 and 15
let number = 7;
// If the number is less than 0, print that it is too low.
if(number < 0) {
    console.log("Too Low");
}
// If the number is greater than 15, print that it is too high.
if(number > 15) {
    console.log("Too High");
}
// If the number is greater than 0 and less than 15, print that it is just right.
if(number > 0 && number < 15) {
    console.log("Just Right");
}
// If the number is equal to 0 or 15, print that is it on the edge.
if(number === 0 || number === 15) {
    console.log("living on the edge");
}
