/* eslint-disable no-restricted-globals */
/* eslint-disable no-alert */
/* eslint-disable no-undef */
/* eslint-disable import/named */
/* eslint-disable no-unused-vars */

/* app.js */

/*
  DO NOT FORGET
Edit random.js so getRandomInt(max)
will return a random number from
0 to the value of max (inclusively)

*/
import getRandomInt from './random';
import './style.css';

const farewell = document.querySelector('.farewell');
const suits = ['hearts', 'spades', 'diamonds', 'clubs'];

while (confirm('Would you like to play the game?')) {
  const suit = getRandomInt(0, 3);
  console.log(suits[suit]);
  const test = prompt(
    'Please enter your guess: Hearts, Spades, Diamonds, Clubs'
  );
  if (suits[suit] === test) {
    alert('You are a Winner!');
  } else {
    alert('You did not guess correct :(');
  }
}

farewell.innerHTML = '<h1>Thanks for playing!<h1>';
