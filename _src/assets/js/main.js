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
let genderlist ='';
    for (let i = 0; i < data.length; i++) {
        const nameShow = data[i].show.name;
        const genderShow = data[i].show.genres;
        const imageShow = data[i].show.image;
        const idShow = data[i].show.id;
        console.log(idShow);

for ( const gender of genderShow) {
 genderlist += `<li>${gender}</li>`;
}

    if (imageShow === null) {
     list += `<li class="item__list" id="${idShow}">
            <h2>${nameShow}</h2>
            <ul>${genderlist}</ul>
            <img class="image__size" src="https://via.placeholder.com/210x295/FF9671/666666/?text=TV">
            </li>`; 
    } else {
    list += `<li class="item__list" id="${idShow}">
             <h2>${nameShow}</h2>
             <ul>${genderlist}</ul>
             <img class="image__size" src=${imageShow.original}>
             </li>`;}
 }
 listEl.innerHTML = list ; selectFavouriteShow ();
 
});

};

buttonEl.addEventListener('click', showData);

//LOCAL STORAGE
//ADD FAVOURITE

const addFavouriteShow = (event) => {
    const currentShow = event.currentTarget;
    currentShow.classList.toggle('add__favourite');


    const idItem = document.querySelectorAll('item__list');
    // const input = document.querySelectorAll('add__favourite');

    let itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];
    itemsArray.push(idItem);
    localStorage.setItem('items', JSON.stringify(itemsArray));

};


const showName = (event) => {
    const currentShowname = event.currentTarget;
    console.log(currentShowname);
    const nameCurrent = currentShowname.querySelector('h2');
    console.log(nameCurrent.innerHTML);
}


const selectFavouriteShow = () => {
    const itemShow = document.querySelectorAll('.item__list');
    for (const item of itemShow){
        // console.log(itemShow);
        item.addEventListener('click', showName);
    }
  
};





