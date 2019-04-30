//****RESET **** */

inputName.addEventListener('keyup', getCache);
//me traigo class='button__reset' el botón de reset // y todos los elementos a los que le aplicaré reset. (ya están arriba)
//poner listener al boton de reset con click
//declarar función
// cuando haga click en listener todos los elementos deberán volver a su estado original. //tiene que ver con el catcha? Tengo que poner todos en original.

const btnResetEl = document.querySelector('.button__reset');

function reset() {
  //name y job
  previewName.innerHTML = 'Nombre Apellido';
  previewJob.innerHTML = 'Front-end developer';
  inputName.value = '';
  inputJob.value = '';
  //phone
  previewPhone.classList.remove('hide');
  previewPhone.href = '';
  inputPhone.value = '';
  // Github
  previewGithub.classList.remove('hide');
  previewGithub.href = '';
  inputGithub.value = '';
  //Mail
  inputMail.value = '';
  const previewMail = document.querySelector('.buttonMail'); //la tngo que declarar fuera porque si no lo hago se me queda el href  y el oculto.
  previewMail.classList.remove('hide');
  previewMail.href = '';
  //Linkedin
  inputLinkedin.value = '';
  const previewLinkedin = document.querySelector('.linkedin'); //lo mismo que con email
  previewLinkedin.classList.remove('hide');
  previewLinkedin.href = '';
  //THEMES
  cardContainerEl.classList.remove('theme--grey');
  cardContainerEl.classList.remove('theme--red');
  cardContainerEl.classList.add('theme--green');
  //default img
  profileImage.classList.add('card__photo--refresh');
  profilePreview.style.backgroundImage = "url('#')";

  resetCache();
}
btnResetEl.addEventListener('click', reset);
