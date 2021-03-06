"use strict";
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// In this program you will ask for two float numbers and store them. It will output the length
// of the hypotenuse using the famous pythagorean theorem.
//
// Hint: -You will need import a library for math functions. The square root is Math.sqrt().
//       -Also, int(a), float(a) and string(a) allow you to convert the variable 'a' into a
//        different type.
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let sideA = 3;   // Using hard coded values
let sideB = 4;   // Using hard coded values

// Your calculation here using pythagorean theorem
let hypotenuse = sideA**2 + sideB**2;
hypotenuse = Math.sqrt(hypotenuse);
// Output "If the sides are {sideA} and {sideB} then the hypotenuse is {hypotenuse}"
console.log(`If the sides are ${sideA} and ${sideB} then the hypotenuse ${hypotenuse}`);

