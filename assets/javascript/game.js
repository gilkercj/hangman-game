// usedLetters and availableLetters will be displayed for the user to see what options are available
// hiddenWords is the list of randomly selected words the user will guess
// wordChoice will be the holder for the randomly selected word


// displayedLetters will the array that changes as guesses are made...
//the init state will display "_" for each of the letters in the word and change with correct choices


// js variables
window.onload = function() {
var usedLetters = [];
var availableLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var hiddenWords = ["copper", "tenuous", "branch", "spicy", "dinosaur", "harmony", "daisy", "unsteady", "brisket", "dance", "aquatic", "supercalifragilisticexpialidocious"];
var wordChoice;
var wordArr = []
var displayedLetters = [];
var tries = 10;




// makes the blank spaces display with the correct amount

function makeHidden() {

    for (var i = 0; i < wordArr.length; i++) {
        displayedLetters.push("_");
    }
    
    
}

// replaces blank spot with letter on correct choice

function revealLetter(input) {
    if (wordArr.indexOf(input) > -1) {
        for (var i = 0; i < wordArr.length; i++) {
            if (wordArr[i] == input) {
                displayedLetters[i] = input;
                console.log("arr: " + wordArr);
                
            }
        }
    }
}


// picks word at random for guessing 

function pickWord() {
    var i = Math.floor(Math.random() * hiddenWords.length);
    console.log(i);
    wordChoice = hiddenWords[i];
    wordArr = wordChoice.split("");
    console.log(wordChoice);
    console.log(wordArr);
}

// removes used letters from availablility upon use

function lettersLeft(input) {

    if (availableLetters.indexOf(input) > -1) {
        for (var i = 0; i < availableLetters.length; i++) {
            if (availableLetters[i] == input) {
                availableLetters[i] = " ";
                console.log("text    " + availableLetters);
            }
        }
    }

}

// checks if you choose correctly

function checkLetter(input, word) {
    if (word.indexOf(input) > -1) { //needs to be changed to an arr for "word"
        console.log("checked letter worked");
    }else if (word.indexOf(input) == -1) {
        if(usedLetters.indexOf(input) > -1){
            alert(" You already used letter");
        }else{
        usedLetters.push(input);
        tries--;
        console.log(tries)
        }
        
    }
}

function win() {
    if( displayedLetters.join('') == wordChoice && tries > 0) {
        document.getElementById("title").innerHTML = "YOU WIN!!!";
    }
}

function lose() {
    if (tries < 1) {
        document.getElementById("title").innerHTML = "Sorry, You Lose...refresh to try again"  ;
        input = null;
    } 
}


pickWord();
makeHidden();

document.getElementById("word").innerHTML = displayedLetters;

document.onkeyup = function (event) {

    var input = event.key;

    console.log(input);


    lettersLeft(input);
    checkLetter(input, wordArr);
    revealLetter(input);
    document.getElementById("word").innerHTML = displayedLetters;
    document.getElementById("available").innerHTML = usedLetters;
    document.getElementById("chances").innerHTML = tries;
    console.log("string: " + displayedLetters.join(''));    

    win();
    lose();
}

}