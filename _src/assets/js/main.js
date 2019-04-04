'use strict';

//Name and position
const previewName=document.querySelector('.name');
const inputName=document.querySelector('#name');
const previewJob=document.querySelector('.job');
const inputJob=document.querySelector('#position');


function writeName(event){
    previewName.innerHTML=inputName.value || "Nombre Apellido";
}
inputName.addEventListener('keyup', writeName);

function writePosition(event){
    previewJob.innerHTML=inputJob.value || "Front-end developer";
}
inputJob.addEventListener('keyup', writePosition);


//Github
const inputGithub = document.getElementById('github');
const previewGithub = document.querySelector('.github');

function writeGithub(event){
    console.log('Hola');
    const textGithub = event.currentTarget;

    previewGithub.href = textGithub.value;
}

inputGithub.addEventListener('keyup', writeGithub);
