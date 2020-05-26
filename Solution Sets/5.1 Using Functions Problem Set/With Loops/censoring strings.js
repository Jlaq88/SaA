"use strict";
// Program removes all vowels from an input string and replaces them with an asterix '*' //////

// Create a string variable of all the vowels
let vowels = "aeiou";
// Get input from the user asking for a sentence
let sentence = "The pigeon flies over the roost at dawn.";
// Create a variable that will store the censored string
let cleanSentence = "";
// Loop for each letter in the sentence
let i = 0;
while(i < sentence.length) {
    // add either the letter or the censor "*" character if the letter is a vowel
    let letter = sentence[i];
    if(vowels.indexOf(letter) === -1) {
        cleanSentence += letter;
    } else {
        cleanSentence += "*";
    }
    i++;
}
// Print the cleaned sentence
console.log(cleanSentence);
