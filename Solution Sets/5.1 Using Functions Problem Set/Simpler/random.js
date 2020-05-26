"use strict";
// This program generates a random 6 number lottery ticket as well as a set of other "random" :) challenges.

// Make a random number between 0 and 1 and output it
console.log(Math.random());
// Make a random number between 0 and 6 and output it. E.g. 3.4 is a possible output
console.log(Math.round(Math.random()*6));
// Make a random WHOLE number between 1 and 12
console.log(Math.floor(Math.random()*12) + 1);
// Make six WHOLE random numbers between 1 to 49
let num1 = Math.floor(Math.random()*49) + 1;
let num2 = Math.floor(Math.random()*49) + 1;
let num3 = Math.floor(Math.random()*49) + 1;
let num4 = Math.floor(Math.random()*49) + 1;
let num5 = Math.floor(Math.random()*49) + 1;
let num6 = Math.floor(Math.random()*49) + 1;
    //print out the lottery number so that it appears like:
    //The lottery numbers for today are: 22 44 33 09 08 49
console.log(`${num1} ${num2} ${num3} ${num4} ${num5} ${num6} `);

/* Alternative solution:
let i = 0;
let output = "";
while(i < 6) {
    let num = Math.floor(Math.random()*49) + 1;
    output = output + " " + num;
}
console.log(output);
*/