

// console.log(userCard);
//CREAR OBJETO VACIO

//ESCUCHADOR
//createEl.addEventListener('click', fillObject);
//FUNCIÓN PARA LLENAR EL OBJETO CON LOS VALORES DE LOS INPUTS

function fillObject() {
    if (themeGreenEl.checked) {
      userCard.palette = parseInt(themeGreenEl.value);
    } else if (themeRedEl.checked) {
      userCard.palette = parseInt(themeRedEl.value);
    } else {
      userCard.palette = parseInt(themeGreyEl.value);
    }
  
    // userCard.name = inputName.value;
    // userCard.job = inputJob.value;
    // userCard.phone = inputPhone.value;
    // userCard.email = inputMail.value;
    // userCard.linkedin = inputLinkedin.value;
    // userCard.github = inputGithub.value;
    // userCard.photo = `url(${fr.result})`;
  
    console.log(userCard);
  }