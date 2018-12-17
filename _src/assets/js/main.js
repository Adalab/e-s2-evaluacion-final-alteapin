'use strict';

//HTML elements

const inputEl = document.querySelector('.input');
const buttonEl = document.querySelector('.button');
const listEl = document.querySelector('.list');

function showTvshow(event) {
    event.preventDefault();
    fetch(`http://api.tvmaze.com/search/shows?q=${inputEl.value}`)
    .then(response => response.json())
    .then(data => {
   console.log(data);


});

};











buttonEl.addEventListener('click', showTvshow);

// function searchCharacter(event) {
//     event.preventDefault();
//     fetch(`https://swapi.co/api/people/?search=${inputEl.value}`)
//     .then(response => response.json())
//     .then(data => {
//         console.log(data);
//         const character = data.results;
      
//         let list ="";
//         for(let i=0; i<character.length; i++) {
//             const nameCharacter = character[i].name;
//             const numberOfFilms = character[i].films.length;
//             list += `<li>${nameCharacter} y el número de pelis ${numberOfFilms}</li>` 
//         }

// listEl.innerHTML = list;

//     })
   
    
// }




// buttonEl.addEventListener('click', searchCharacter);