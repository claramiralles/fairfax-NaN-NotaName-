//****RESET **** */

inputName.addEventListener('keyup', getCache);

const btnResetEl = document.querySelector('.button__reset');

const reset = () => {
  //name y job
  previewName.innerHTML = 'Nombre Apellido';
  previewJob.innerHTML = 'Front-end developer';
  inputName.value = '';
  inputJob.value = '';
  //phone
  previewPhone.href = '';
  inputPhone.value = '';
  // Github
  previewGithub.href = '';
  inputGithub.value = '';
  //Mail
  inputMail.value = '';
  previewMail.href = '';
  //Linkedin
  inputLinkedin.value = '';
  previewLinkedin.href = '';
  //THEMES
  cardContainerEl.classList.remove('theme--grey');
  cardContainerEl.classList.remove('theme--red');
  cardContainerEl.classList.add('theme--green');
  //default img
  profileImage.classList.add('card__photo--refresh');
  profilePreview.style.backgroundImage = "url('#')";

  resetCache();
};

btnResetEl.addEventListener('click', reset);