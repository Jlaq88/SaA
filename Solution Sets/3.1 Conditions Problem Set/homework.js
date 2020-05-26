/* author: your.name
 * date: today...
 * This program will check if the user has completed their homework.
 * Provided the user did their homework (that is they answered true) the program will tell them they have free time
 * should the user have not completed their homework, then the program must tell them to stay home and do it
 * the user must answer in true and false
 * 
 * You might find modulus to be helpful: https://javascript.info/operators//remainder
 */
"use strict";
// Store in a variable whether the user did their homework
let didHomework = true;

// Check if they did their homework
if(didHomework === true) {
    // Write the appropriate message
    console.log("Yeah! Good Job!");
// Otherwise
} else {
    // Write the appropriate message
    console.log("Ah man! Too bad.");
}


