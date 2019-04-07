'use strict';

//elemento a observar Phone
const inputPhone = document.querySelector('#phone');
const previewPhone = document.querySelector('.phone__icon');

//handler
function writePhone(event){
    if (!inputPhone.value){
        previewPhone.classList.add('hide');
    } else {
        previewPhone.href = ('tel:' + inputPhone.value);
        previewPhone.classList.remove('hide');
    }
}

//listener
inputPhone.addEventListener('keyup', writePhone);
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

// function writeGithub(event){
//     const textGithub = event.currentTarget;
//     previewGithub.href = textGithub.value;
// }

function writeGithub(){
     const yourGithub = inputGithub.value;
     if(!yourGithub){
         previewGithub.classList.add('hide');
     } else{
        previewGithub.classList.remove('hide');
        previewGithub.href = yourGithub;
     }
}
inputGithub.addEventListener('keyup', writeGithub);

//Mail
const inputMail = document.getElementById('email');

function writeMail() {
    const yourEmail=inputMail.value;
    const previewMail=document.querySelector(".buttonMail");    
    if (!yourEmail){
        previewMail.classList.add("hide");
    }else{
        previewMail.classList.remove("hide");
        previewMail.href=`mailto:${yourEmail}`;
    }
}
inputMail.addEventListener("keyup",writeMail);

//Linkedin
const inputLinkedin = document.getElementById('Linkedin');

function writeLinkedin(event){

const previewLinkedin = document.querySelector('.linkedin');
const textLinkedin = event.currentTarget;

if (!inputLinkedin.value){
    previewLinkedin.classList.add("hide");
}else{
    previewLinkedin.classList.remove("hide");
    previewLinkedin.href=inputLinkedin.value;
}
}

inputLinkedin.addEventListener('keyup', writeLinkedin);

<<<<<<< HEAD
=======

// THEMES

const cardContainerEl = document.querySelector('.card__preview');
const themeGreenEl= document.getElementById('theme-green');
const themeRedEl= document.getElementById('theme-red');
const themeGreyEl= document.getElementById('theme-grey');

function handlerChangeTheme(event){
    if (themeRedEl.checked){
        cardContainerEl.classList.add('theme--red');
        cardContainerEl.classList.remove('theme--grey');
    }
    else if (themeGreyEl.checked){
    cardContainerEl.classList.add('theme--grey');
    cardContainerEl.classList.remove('theme--red');
    }
    else{
    cardContainerEl.classList.remove('theme--grey', 'theme--red');
    }
   }

themeGreenEl.addEventListener('click', handlerChangeTheme);
themeRedEl.addEventListener('click', handlerChangeTheme);
themeGreyEl.addEventListener('click', handlerChangeTheme);
>>>>>>> 77dd5b37969e9c0ba2b4fb6098f4c4123a7c96df
