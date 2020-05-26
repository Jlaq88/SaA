"use strict";
// This program will look using different string commands.




// Ask the user for a word and store it in a variable called 'word'
let word = "cloudy";
// print the number of letters in the word
console.log(word.length);
// print the first letter of the word
console.log(word[0]);
// print the last letter of the word
console.log(word[word.length - 1]);
// print the word in all capital letters
console.log(word.toUpperCase());
// print the first three characters of the word
console.log(word.substring(0,3));
// rounding down, print the last half of the characters of the word
console.log(word.substring( Math.floor(word.length / 2) ));
// print "It has an 'e'" if the word contains an 'e' or 'E' character.
//word = word.toLowerCase();
if(word.indexOf("e") != -1 && word.indexOf("E") != -1) {
    console.log("It has an 'e'");
} else {
// otherwise, say "It does not have an 'e'"
    console.log("It does not have an 'e'");
}