function cropLetter(letter, text) {
    let i = 0;
    while(i < text.length) {
        //document.write(text[i]);
        if(letter !== text[i]) {
            console.log(text[i]);
        }
        i = i + 1;
    }
}
// Get the sentence and the letter from the user
let sentence = "kitten";
let aLetter = "t";
// Call the function
cropLetter(aLetter, sentence);