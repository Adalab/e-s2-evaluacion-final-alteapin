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
        let idShow = data[i].show.id;
        console.log(idShow);

    if (imageShow === null) {
     list += `<li class="item__list">
            <h2>${nameShow}</h2>
            <img class="image__size" src="https://via.placeholder.com/210x295/FF9671/666666/?text=TV">
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


//LOCAL STORAGE



idShow.push(idShow); // ¿Podría ser el item del for de favoritos?
localStorage.setItem('localData', JSON.stringify(idShow));
const savedLocalData = JSON.parse(localStorage.getItem('localData'));


// Guardar el LocalStorage en la misma function que favoritos