"use strict";
/*
 * Output the fibonacci sequence and look at patterns with its numbers
 * This sequence goes as follows:
 *      1 1 2 3 5 8 13 21 ...
 * Where sum of the first and second gives the third, second and third gives the fourth, etc.
 *
 * Write a program that generates the first 30 numbers.
 */

// Create two variables numOne and numTwo, and set them both to 1
let numOne = 1;
let numTwo = 1;

// Create a variable called 'next', set it to 0.

let next = 0;
while (next <=50) {
    // Print the first and second numbers of the sequence
    console.log(numOne, numTwo);
// Loop 30 times, output the result each iteration
    numOne = numOne + numTwo;
    numTwo = numOne + numTwo;
    next = next + 1;
}
if (next>50){
    console.log("Goodbye")
}

// Challenge (Easy): output the ratio of numOne/numTwo instead of values.
// Challenge: Change the initial values of numOne and numTwo and describe what happens to the ratio
// Extra-Challenge: Modify the program to use BigInt and find the first 100 fibonacci numbers.