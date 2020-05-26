////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Counter Program
// This program will count from the lowest value to the highest value by a number of steps.  All three values will be
// given by the user
// CHALLENGE: Dummy proof that code!
//
// EXAMPLE RUN
// Please enter the start value: 2
// Please enter the end value: 9
// Please enter what to skip by: 3
// 2
// 5
// 8
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let guess = prompt("Give number");
let cow = prompt("Give number");
let l = prompt("Give number");
if (guess > cow, l) {
    document.write(guess);

    if (l > cow) {
        document.write(l);
    }
    if (cow > l) {
        document.write(cow);
    }
}
if (cow > guess, l) {
    document.write(cow);

    if (guess > l) {
        document.write(l);
    }
    if (l > guess) {
        document.write(cow);
    }
}
if (l > guess, cow) {
    document.write(l);

    if (guess > cow) {
        document.write(l);
    }
    if (cow > guess) {
        document.write(cow);
    }
}