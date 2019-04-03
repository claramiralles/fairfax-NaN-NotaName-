'use strict';

console.log('>> Ready :)');

const formGithub = document.getElementById('github');
const previewGithub = document.querySelector('.github');

function writeGithub(event){
    console.log('Hola');
    const textGithub = event.currentTarget;

    previewGithub.href = textGithub.value;
}

formGithub.addEventListener('keyup', writeGithub);