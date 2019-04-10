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

//COLLAPIBLE FORM
//Declarar variables para cada parte clickable del formulario.
const tabDesign = document.querySelector(".trigger__design");
const tabFill = document.querySelector(".trigger__fill");
const tabShare = document.querySelector(".trigger__share");

//función para cerrar todos los trozos de formulario.
//cojo la parte clickable, .nexElementSibling selecciona el siguiente hermano (el <div> de abajo que contiene todo el contenido). y lo escondo añadiendo la clase "hide" que hace "display: none" para que no quede el hueco en blanco.
function closeAllTabs () {
    tabDesign.nextElementSibling.classList.add("hide");
    tabFill.nextElementSibling.classList.add("hide");
    tabShare.nextElementSibling.classList.add("hide");
};

//Función que abre el trozo de formulario en el que se ha hecho click.
//event.currentTarget para seleccionar donde hemos hecho click, su .nextElementSibling para ir al <div> de abajo con el form, y le quitamos la claes "hide" para que vuelva a mostrarse.
function openCurrentTab () {
    event.currentTarget.nextElementSibling.classList.remove("hide");
};

//He añadido esto para comprobar si donde hemos hecho click está abierto o cerrado y recoja el valor.
function isOpen () {
    return !event.currentTarget.nextElementSibling.classList.contains("hide");
};

//Funcion que incluye las otra dos.
//Si está abierto lo cerramos (he añadido esta parte para poder cerrar todos los trozos a la vez, se me hacía raro no poder hacerlo. Que al hacer click en algo abierto no se cerrara).
//Si no (está cerrado), cerramos todos y abrimos el que hemos clickado.

function openThisTab (event) {
    if (isOpen(event)) {
        event.currentTarget.nextElementSibling.classList.add("hide");
    } else {
    closeAllTabs(event);
    openCurrentTab(event);
    }
}

//Listeners para todos!
tabDesign.addEventListener("click",openThisTab);
tabFill.addEventListener("click",openThisTab);
tabShare.addEventListener("click",openThisTab);


//Flechas

//Declarar variables para cada flecha hacia arriba (la que aparece por defecto en el colapsable cuando esta sin abrir)

const arrowOneEl = document.querySelector(".arrow1");
const subTab1Design=document.querySelector('.fieldset__theme-container');

const arrowTwoEl = document.querySelector(".arrow2");
const subTab2Fill=document.querySelector(".fieldset__fill-container");

const arrowThreeEl = document.querySelector(".arrow3");
const subTab3Share=document.querySelector(".fieldset__share-container");

function interchangeArrowsDownAndUp (event) {

   if (subTab1Design.classList.contains("hide")) {
        arrowOneEl.classList.add("fa-chevron-down");
        arrowOneEl.classList.remove("fa-chevron-up");
    } else {
        arrowOneEl.classList.add("fa-chevron-up");
        arrowOneEl.classList.remove("fa-chevron-down");
    }
    if (subTab2Fill.classList.contains("hide")) {
        arrowTwoEl.classList.add("fa-chevron-down");
        arrowTwoEl.classList.remove("fa-chevron-up")
    } else {
        arrowTwoEl.classList.add("fa-chevron-up");
        arrowTwoEl.classList.remove("fa-chevron-down");
    };
    
    if (subTab3Share.classList.contains("hide")) {
        arrowThreeEl.classList.add("fa-chevron-down");
        arrowThreeEl.classList.remove("fa-chevron-up");
    } else {
    arrowThreeEl.classList.add("fa-chevron-up");
    arrowThreeEl.classList.remove("fa-chevron-down");
    };


//Listeners para cada elemento
tabDesign.addEventListener("click", interchangeArrowsDownAndUp);
tabFill.addEventListener("click", interchangeArrowsDownAndUp);
tabShare.addEventListener("click", interchangeArrowsDownAndUp);
}

