"use strict";
/*
Create a program, starting with pseudo-code, that takes in a sentence and encrypts
it using the Caesar cipher. The encrypted message will be printed to the screen.

A Caesar cipher is a shifting cipher in that all letters the message are replaced
with the letter that is 5 characters to the right of the letter. It will wrap to
the front of the alphabet if it goes too far. For example,
cat! becomes hfy!

**Challenge**: Keep the shifted letters in the range of 48 to 122 so that it is always visible as keyboard characters
*/

// Get the message from user
let message = "The fox has entered the den";
// Use a cipher variable as an empty string
let cipher = "";
// Loop through each letter
let i = 0;
while(i < message.length) {
    // Convert to a number (ASCII -> integer)
    let value = message.charCodeAt(i);
    // Add 5 to value
    value += 5;
    // Turn the number back to a character (letter/number)
    let letter = String.fromCharCode(value);
    // Add the scramble character to the cipher (secret message)
    cipher += letter;

    i++;
}
// Output the encrypted message
console.log(cipher);
