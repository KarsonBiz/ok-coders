const prompt = require('prompt-sync')({ sight: true });

const numberToGuess = Math.floor(Math.random() * 10) + 1;

let userGuess = null;
while (numberToGuess != userGuess) {
    userGuess = parseInt(prompt('Guess a number: '));
    console.log(typeof userGuess, typeof numberToGuess);
    if (userGuess != numberToGuess) {
        console.log('WRONG!');
    } else {
        console.log('YOU GUESSED RIGHT!');
    }
}