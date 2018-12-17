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


    for (let i = 0; i < data.length; i++) {
        const image = data[i].show.image;
         if (image === null) {
            list += `<li><h2>${nameShow}</h2><img class="image-size" src="https://via.placeholder.com/210x295/cccccc/666666/?text=TV"></li>` 
        }  else {
             list += `<li><h2>${nameShow}</h2><img class="image-size" src=${image.original}></li>`;}
 }
 }
 listEl.innerHTML = list;
});
};

buttonEl.addEventListener('click', showTvshow);

//FAVOURITE 

/**
 * Esta es la función que ejecuta el navegador cuando la usuaria hace click.
 * Y lo que hace es intercambiar la clase que se ocupa de ocultar la imagen
 */
const showTheTv = (e) => {
    const item = e.currentTarget;
    item.classList.toggle('color');
  };
  
  /**
   * Esta nueva función flecha me busca todas las noticias
   * y les añade un listener para el evento 'click':
   * llamará a la función `showTheImage()`
   */
  const addClickListener = () => {
    const shows = listEl.querySelectorAll('.list');
    for (const show of shows) {
      show.addEventListener('click',showTheImage);
    }
  };
  
  // Llamo a mi función y le pado el array de noticias y la referencia a mi lista `.news`
//   getWriteAndMarkMarsNews(api, shows);

