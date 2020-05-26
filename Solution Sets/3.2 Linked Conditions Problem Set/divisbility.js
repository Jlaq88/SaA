/* author: your.name
 * date: today...
 * This project will determine if a number is divisible by 2, 3, or 6
 * You might find modulus to be helpful: https://javascript.info/operators#remainder
 */
"use strict";

// Create a variable, value, and set it to some Number
let value = 54;

// Check if the number is divisible by 2 or not. If it is not divisible by 2, state the remainder.
if(value % 2 === 0 ) {
    console.log("Divisible by 2");
} else {
    console.log("Divide by 2 gives a remainder of " + value % 2);
}
// Check if the number is divisible by 3 or not. If it is not divisible by 3, state the remainder.
if(value % 3 === 0 ) {
    console.log("Divisible by 3");
} else {
    console.log("Divide by 3 gives a remainder of " + value % 3);
}
// Check if the number is divisible by 6 or not. If it is not divisible by 6, state the remainder.
if(value % 6 === 0 ) {
    console.log("Divisible by 6");
} else {
    console.log("Divide by 6 gives a remainder of " + value % 6);
}
// ***Challenge*** Can this be achieved with only the program executing only two comparisons for any given situation?

