const message = document.querySelector('.message');
const number = document.querySelector('.number');

'use strict';
let secretnumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    message.textContent = 'Input a number please 😒';
  }
  //IF WE WIN
  else if (guess === secretnumber) {
    if (score > highscore) {
      highscore = score;
    }
    number.textContent = secretnumber;

    displayMessage('Correct number 🎉');
    document.querySelector('body').style.backgroundColor = '#32CD32';
    document.querySelector('h1').textContent = 'You win 🎇';
    document.querySelector('.highscore').textContent = highscore;
    
  } else if (guess !== secretnumber) {
    if (score > 1) {

      displayMessage(guess > secretnumber ? 'Too High👆' : 'Too low👇');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lose 🎃';
      document.querySelector('body').style.backgroundColor = '#FF0000';
      document.querySelector('h1').textContent = 'You lose 🎃';
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretnumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.message').textContent = 'Start guessing...';

  document.querySelector('h1').textContent = 'Guess My Number!';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('.highscore').textContent = highscore;
});
