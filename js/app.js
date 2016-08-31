//Javascript goes here.
// Function: creates a new paragraph and append it to the bottom of the HTML body.

var createParagraph = function () {
    var para = document.createElement('p');
    para.textContent = 'You clicked the button!';
    document.body.appendChild(para);
}
/*
1. Get references to all the buttons on the page and soter them in an array.
2. Loop through all the buttons and add a click event listener to each one.

When any button is pressed, the createParagraph() function will be run.
*/
var buttons = document.querySelectorAll('button');
for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', createParagraph);
}

var randomNumber = Math.floor(Math.random() * 100) + 1;

var guesses = document.querySelector('.guesses');
var lastResult = document.querySelector('.lastResult');
var lowOrHi = document.querySelector('.lowOrHi');

var guessSubmit = document.querySelector('.guessSubmit');
var guessField = document.querySelector('guessField');

var guessCount = 1;
var resetButton;

var checkGuess = function()
{
    alert('I am a placeholder');
}