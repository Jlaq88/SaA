/* Sequence
 * Create a loop will print out a sequence that halves when its even and triples (plus one) if its odd.
 */
"use strict";
// Create a variable to store a positive, whole number.
let value = 7;
// Loop while that number is not one.
while(value != 1) {
    // Output the value
    console.log(value);
    // If it is even
    if (value % 2 == 0) {
        // the number will be half its original value
        value = value / 2;
        // Otherwise
    } else {
        // multiply it by 3 plus 1
        value = value * 3 + 1;
    }
}

// CHALLENGE: Happy/Sad Numbers
// Take a number from the user.  Find the sum of the squares of its digits. Check if that sum is 1.
// If the number is not one, repeat the process.  If the number has already come up, stop.  If the number is one stop.
// A happy number is a number that eventually gets to one. A sad number is a number that will never finish and it will
// eventually go into a repetitive pattern.