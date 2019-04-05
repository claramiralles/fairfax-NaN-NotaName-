'use strict';

console.log('>> Ready :)');
//Linkedin input

//declara el card preview
const inputLinkedin=document.querySelector('.linkedin');
//declara el input
const previewLinkedin=document.getElementById('Linkedin');

//declaro la funcion handler -> cuando el value de input tenga texto, quiero que el innerHTML del preview sea ese value 
//cuando el value de input no tenga texto, quiero que el innerHTML del preview este vacio.

const putInputValueInPreview = function () {
if(inputLinkedin===previewLinkedin){
    previewLinkedin.href=inputLinkedin.innerHTML;
} else if (inputLinkedin===''){
    previewLinkedin='';
}
}
//declaro el event listener. quiero escuchar cuando input tenga texto
previewLinkedin.addEventListener('keyup', putInputValueInPreview);