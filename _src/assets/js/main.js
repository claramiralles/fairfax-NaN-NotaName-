'use strict';

const namePreview=document.querySelector('.name');
const nameInput=document.querySelector('#name');
const jobPreview=document.querySelector('.job');
const jobInput=document.querySelector('#position');


function writeName(event){
    namePreview.innerHTML=nameInput.value || "Nombre Apellido";
}
nameInput.addEventListener('keyup', writeName);

function writePosition(event){
    jobPreview.innerHTML=jobInput.value || "Front-end developer";
}
jobInput.addEventListener('keyup', writePosition);




