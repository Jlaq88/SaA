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
let A, B, C;
// ___________________  Your Sorting Code here ____________________
if(a < b) {
    A = a;
    B = b;

    if(b < c) {
        C = c;
    } else {
        if(a < c) {
            B = c;
            C = b;
        } else {
            A = c;
            B = a;
            C = b;
        }
    }
} else {
    A = b;      // a > b
    B = a;

    if(B < c) {
        C = c;
    } else {
        if(A < c) { // a < c < b
            C = B;
            B = c;
        } else {
            C = B;
            B = A;
            A = c;
        }
    }
}

// --------------------- End of Sorting Code ----------------------
console.log(A + " < " + B + " < " + C);     // Don't change this code