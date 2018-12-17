'use strict';

//HTML elements

const inputEl = document.querySelector('.input');
const buttonEl = document.querySelector('.button');
const listEl = document.querySelector('.list');
const imageEl = document.querySelector('.image');

function showTvshow(event) {
    event.preventDefault();
    fetch(`https://api.tvmaze.com/search/shows?q=${inputEl.value}`)
        .then(response => response.json())
        .then(data => {
console.log(data);
          
let list = "";
for (let i = 0; i < data.length; i++) {
const nameShow = data[i].show.name;
console.log(nameShow);

list += `<li><h2>${nameShow}</h2></li>`;


for (let i = 0; i < data.length; i++) {
    const image = data[i].show.image;
    // const showImage = image.original;
    

if (image === null) {
    list += `<li><h2>${nameShow}</h2><img class="image-size" src="https://via.placeholder.com/210x295/cccccc/666666/?text=TV"></li>`
} else {
 list += `<li><h2>${nameShow}</h2><img class="image-size" src=${image.original}></li>`;
}

    }
    

}


listEl.innerHTML = list;

});
};

buttonEl.addEventListener('click', showTvshow);
