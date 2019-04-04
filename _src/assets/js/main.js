'use strict';

//elemento a observar tel 
const inputTel = document.querySelector('.phone');
const placePhone = document.querySelector('.phone__icon');


//handler
function liveWrite(event){
    //console.log(placePhone.href)
    placePhone.href = ('tel:' + inputTel.value) || "#";
    }

//listener
inputTel.addEventListener('keyup', liveWrite);