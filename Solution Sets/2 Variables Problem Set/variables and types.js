"use strict";
// Variable & Types
// Explore different types of variables and how they relate to each other
// Students will also look at ways to check the type of a variable
//
// After each comment, add in the JS code that performs the action

// Create a variable called 'aNumber' with the value 3
let aNumber;
aNumber = 3;
// Create a variable called 'aString' with the value "Word"
let aString = "Word";
// Create a variable called 'aBoolean' with the value true
let aBoolean = true;
// Create an empty string variable called answer
let answer = "";
// Find the type of aNumber and store it in answer
answer = typeof aNumber;
// Output "aNumber is {answer}"
console.log(`aNumber is ${answer}`);    // console.log("aNumber is " + answer);
// Find the type of aString and store it in answer
answer = typeof aString;
// Output "aString is {answer}"
console.log(`aString is ${answer}`);    // console.log("aString is " + answer);

// Find the type of aBoolean and store it in answer
answer = typeof aBoolean;
// Output "aBoolean is {answer}"
console.log(`aBoolean is ${answer}`);    // console.log("aBoolean is " + answer);

answer = typeof "13";

// Print out what you think the answer will be
console.log("I think it is a String");
// Output "It is: {answer}"
console.log("It is " + answer);

answer = typeof -5;

// Print out what you think the answer will be
console.log("I think it is a Number");
// Output "It is: {answer}"
console.log("It is " + answer);

answer = typeof (4.0 / 2);

// Print out what you think the answer will be
console.log("I think it is a Number");
// Output "It is: {answer}"
console.log("It is " + answer);