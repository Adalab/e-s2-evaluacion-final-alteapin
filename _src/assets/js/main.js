'use strict';

//HTML elements

const inputEl = document.querySelector('.input');
const buttonEl = document.querySelector('.button');
const listEl = document.querySelector('.list');

//API

function showData(event) {
    event.preventDefault();
    fetch(`https://api.tvmaze.com/search/shows?q=${inputEl.value}`)
        .then(response => response.json())
        .then(data => {
            console.log(data);

let list = '';
    for (let i = 0; i < data.length; i++) {
        const nameShow = data[i].show.name;
    const imageShow = data[i].show.image;
    if (imageShow === null) {
     list += `<li class="item__list">
            <h2>${nameShow}</h2>
            <img class="image__size" src="https://via.placeholder.com/210x295/cccccc/666666/?text=TV">
            </li>`; 
    } else {
    list += `<li class="item__list">
             <h2>${nameShow}</h2>
             <img class="image__size" src=${imageShow.original}>
             </li>`;}
 }
 listEl.innerHTML = list ; selectFavouriteShow ();
 });

};

buttonEl.addEventListener('click', showData);

//ADD FAVOURITE

const addFavouriteShow = (event) => {
    const currentShow = event.currentTarget;
    currentShow.classList.toggle('add__favourite');
};



const selectFavouriteShow = () => {
    const itemShow = document.querySelectorAll('.item__list');
    for ( const item of itemShow) {
        item.addEventListener('click', addFavouriteShow);
    }
};

//if (saveData) {
//     const allShowslocal = document.querySelectorAll('.list__item');
//     console.log('all', allShowslocal);

//     for (let i=0; i < allShowslocal.length; i++) {
//       // let currentSerie = allShowslocal[i].value;
//       for(let j=0; j < saveData.length; j++){
//         if (allShowslocal[i].value === saveData[j]) {
//           console.log('tengo el elemento', allShowslocal[i].value );
//           allShowslocal[i].classList.add('list__item--fav');
//         }
//       }
//     }
//   }


//sacar el id / como en name e image


//   const saveData = JSON.parse(localStorage.getItem('saveLocal'));
//   console.log(saveData);

//en la misma función que el fetch