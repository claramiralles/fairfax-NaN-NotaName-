'use strict';

//Linkedin
const inputLinkedin=document.getElementById('Linkedin');
const previewLinkedin=document.querySelector('.linkedin');

function writeLinkedin(event){
    const textLinkedin=event.currentTarget;
    previewLinkedin.href=textLinkedin.value;
}
inputLinkedin.addEventListener('keyup', writeLinkedin);