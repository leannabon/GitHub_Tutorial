"use strict"

const jokeButton = document.getElementById('joke-button');
const jokeDisplay = document.getElementById('joke-display');

jokeButton.addEventListener('click', () => {
    fetch('https://api.chucknorris.io/jokes/random')
.then(Response => Response.json())
.then(joke => {
    jokeDisplay.textContent = joke.value;
})
})