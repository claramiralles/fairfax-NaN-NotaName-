'use strict';

//elemento a observar Phone
const inputPhone = document.querySelector('.phone');
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

function writeGithub(event){
    console.log('Hola');
    const textGithub = event.currentTarget;

    previewGithub.href = textGithub.value;
}

inputGithub.addEventListener('keyup', writeGithub);

//Mail
const inputMail=document.querySelector(".input-mail");

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

//collapse

const collapseTriggerFill = document.querySelector('.trigger__fill');
const collapseFill = document.querySelector('.wrapper__fill');
const collapseFillContent = document.querySelector('.wrapper__fill-content');


// function collapse(){
//     console.log('Frustacion');
//     if (collapseFill.classList.contains('.open')){
//         collapseFill.classList.remove('open');
//         // collapseFill.height(0);
//     } else{
//         collapseFill.classList.add('open');
//         collapseFill.height(collapseFillContent.outerheight(true));
//     }
// }

// collapseTriggerFill.addEventListener('click', collapse);


