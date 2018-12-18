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

//GET NAMES & IMAGES

let list = '';
    for (let i = 0; i < data.length; i++) {
        const nameShow = data[i].show.name;
        const imageShow = data[i].show.image;
        const idShow = data[i].show.id;
        console.log(idShow);

    if (imageShow === null) {
     list += `<li class="item__list" id="${idShow}">
            <h2>${nameShow}</h2>
            <img class="image__size" src="https://via.placeholder.com/210x295/FF9671/666666/?text=TV">
            </li>`; 
    } else {
    list += `<li class="item__list" id="${idShow}">
             <h2>${nameShow}</h2>
             <img class="image__size" src=${imageShow.original}>
             </li>`;}
 }
 listEl.innerHTML = list ; selectFavouriteShow ();
 
});

};

buttonEl.addEventListener('click', showData);

//LOCAL STORAGE

// localStorage.setItem('localData', JSON.stringify(idShow));




//ADD FAVOURITE
const addFavouriteShow = (event) => {
    const currentShow = event.currentTarget;
    currentShow.classList.toggle('add__favourite');
//     const currentFavorite = document.querySelectorAll('add__favourite');
//     console.log(currentFavorite);
//     for (var i = 0; i < NodeList.values; i++) {
//         localStorage.setItem('localData', JSON.stringify(currentFavorite));
// };
};


const selectFavouriteShow = () => {
    const itemShow = document.querySelectorAll('.item__list');
    for ( const item of itemShow) {
        item.addEventListener('click', addFavouriteShow);
    }
};

let savedLocalData = JSON.parse(localStorage.getItem('localData'));

//LOCAL STORAGE



// savedLocalData.push(idShow); // 
// Guardar el LocalStorage en la misma function que favoritos

