'use strict';

//elemento a observar tel 
const inputPhone = document.querySelector('.phone');
const previewPhone = document.querySelector('.phone__icon');


//handler
function writePhone(event){
    //console.log(placePhone.href)
    previewPhone.href = ('tel:' + inputPhone.value) || "#";
    }

//listener
inputPhone.addEventListener('keyup', writePhone);