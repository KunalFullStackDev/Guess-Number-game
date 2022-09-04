'use strict';

// Random number
let number = Math.trunc(Math.random() * 20) + 1;

// score
let score = 20;

// highest score
let highscore = 0;

// check button functionality
document.querySelector('#btn_check').addEventListener('click', () => {

    let guess = Number(document.querySelector('.input').value);

    // guess is empty or 0 
    // To make the falsy statement truthy ('!'guess )
    // this will check if the value in the input box is empty or not
    if (!guess) {
        document.querySelector('.message').textContent = '⛔️ no number!';
    } else if (guess === number) { // Check if the guess equalsTo number
        document.querySelector('.message').textContent = `🎉 Correct Number!`;
        highscore += score;
        document.querySelector('.board').textContent = number;
        document.querySelector('#Highscore_here').textContent = highscore;
        document.getElementById('container').style.backgroundColor = '#40eb34';
    } else if (guess > number) { // Check if the guess is greater then number

        // if the score becomes 0 after, all the choice than
        // checking score is 0 or not
        if (score > 1) { 
            document.querySelector('.message').textContent = `📈 Too high!`;
            score--;
            document.querySelector('#score_here').textContent = score;
        } else {
            document.querySelector('.message').textContent = `😮‍💨 Loose! Try again!`;
            document.querySelector('#score_here').textContent = 0;
        }
    } else if (guess < number) { // Check if the guess is less than number

        // if the score becomes 0 after, all the choice than
        // checking score is 0 or not
        if (score > 1) {
            document.querySelector('.message').textContent = `📉 Too low!`;
            score--;
            document.querySelector('#score_here').textContent = score;
        } else {
            document.querySelector('.message').textContent = `😮‍💨 Loose! Try again!`;
            document.querySelector('#score_here').textContent = 0;
        }
    }
});

// Again button functionality 
document.querySelector('#btn_Again').addEventListener('click', () => {
    // reset the score
    score = 20;

    // reset the new random number
    number = Math.trunc(Math.random() * 20) + 1;
    
    // reset the input box to empty
    document.querySelector('.input').value = '';
    
    // reset the score on dom
    document.querySelector('#score_here').textContent = score;
    
    // reset the message statement
    document.querySelector('.message').textContent = 'Start guessing...';
    
    // reset the guess number board 
    document.querySelector('.board').textContent = '?';
    
    // reset the background color
    document.getElementById('container').style.backgroundColor =
        'rgb(32, 32, 32)';
});
