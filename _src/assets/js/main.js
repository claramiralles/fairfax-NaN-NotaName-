'use strict';

//elemento a observar
const inputEl = document.querySelector('.input-box');
const placeName = document.querySelector('.name');


//handler
function liveWrite(event){
    placeName.innerHTML = inputEl.value || "Nombre Apellido";
    }

//listener
inputEl.addEventListener('keyup', liveWrite);