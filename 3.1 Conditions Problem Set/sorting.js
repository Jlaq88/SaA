"use strict";
/* Sorting Thinking Problem
 *
 * You are going to use only if-statements, < and > to sort three numbers.
 *
 * The purpose of this problem is to get you to think about how to break a problem down into stages.
 */
const a = 15;       // Change these values for testing only.
const b = 3;        // What are all the different combinations you need to consider?
const c = 8;
let countera = 0;
let counterb = 0;
let counterc = 0;
let A, B, C;
// ___________________  Your Sorting Code here ____________________

if (a > b) {
  countera = countera + 1
}
if (a > c) {
    countera = countera + 1
}
if (b > a) {
    counterb = counterb + 1
}
if (b > c) {
    counterb = counterb + 1
}
if (c > a) {
    counterc = counterc + 1
}
if (c > b) {
    counterc = counterc + 1
}
if (countera == 2) {
  C = a;
}
if (countera == 1) {
    B = a;
}
if (countera == 0) {
    A = a
}
if (counterb == 2) {
    C = b;
}
if (counterb == 1) {
    B = b
}
if (counterb == 0) {
    A = b
}
if (counterc == 2) {
    C = c
}
if (counterc == 1) {
    B = c
}
if (counterc == 0) {
    A = c
}








// --------------------- End of Sorting Code ----------------------
console.log(A + " < " + B + " < " + C);     // Don't change this code