"use strict";
// The name game where it replaces the first letter of banana with other letters

// Create a variable call prefixes that stores "JKLMNOPQ"
let prefixes = "JKLMNOPQ";

// Hard code your name into a variable
let name = "banana";
// Remove the first letter and store the rest
name = name.substring(1);  // Same as .substring(1, name.length);
// Loop through all the prefixes
let i = 0;
while(i < prefixes.length) {
    // Add the prefix to the name and output to the user
    console.log(prefixes[i] + name);  // Concatenation
    i++; // i = i + 1;
}