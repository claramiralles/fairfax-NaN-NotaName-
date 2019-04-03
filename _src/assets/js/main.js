'use strict';

const inputUserName = document.getElementById('user-name');
const userName = document.querySelector('.name');

function handleInputUserNameChange(){
    const name = inputUserName.value;
    
    if (name === ''){
        userName.innerHTML=`Nombre Apellido`;
    }else{
        userName.innerHTML=name;
    }
    console.log(`Funciona`);
}
inputUserName.addEventListener('keyup', handleInputUserNameChange);