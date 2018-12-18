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

let list = "";
    for (let i = 0; i < data.length; i++) {
        const nameShow = data[i].show.name;
        console.log(nameShow);


    for (let i = 0; i < data.length; i++) {
    const imageShow = data[i].show.image;
    if (imageShow === null) {
     list += `<li class="item__list">
            <h2>${nameShow}</h2>
            <img class="image__size" src="https://via.placeholder.com/210x295/cccccc/666666/?text=TV">
            </li>`; 
    }else {
    list += `<li class="item__list">
             <h2>${nameShow}</h2>
             <img class="image__size" src=${imageShow.original}>
             </li>`;}
 }
 }

 listEl.innerHTML = `${list}` ; selectFavouriteShow ();

});
};

buttonEl.addEventListener('click', showData);


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
