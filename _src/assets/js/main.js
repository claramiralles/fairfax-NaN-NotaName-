'use strict';

let userCard = {
  name: '',
  job: '',
  phone: '',
  email: '',
  linkedin: '',
  github: '',
  photo: '',
  palette: 1
};

//PHONE

const inputPhone = document.querySelector('#phone');
const previewPhone = document.querySelector('.phone__icon');

function writePhone(event) {
  userCard.phone = inputPhone.value;
  saveCache();
  previewPhone.href = 'tel:' + inputPhone.value;
}

inputPhone.addEventListener('keyup', writePhone);

//NAME AND JOB

const previewName = document.querySelector('.name');
const inputName = document.querySelector('#name');
const previewJob = document.querySelector('.job');
const inputJob = document.querySelector('#position');

function writeName(event) {
  previewName.innerHTML = inputName.value || 'Nombre Apellido';
  userCard.name = inputName.value;
  saveCache();
}

function writePosition(event) {
  previewJob.innerHTML = inputJob.value || 'Front-end developer';
  userCard.job = inputJob.value;
  saveCache();
}

inputJob.addEventListener('keyup', writePosition);
inputName.addEventListener('keyup', writeName);


//Github
const inputGithub = document.getElementById('github');
const previewGithub = document.querySelector('.github');

function writeGithub(event) {
  const yourGithub = inputGithub.value;
  userCard.github = inputGithub.value;
  saveCache();
  previewGithub.href = yourGithub;
}

inputGithub.addEventListener('keyup', writeGithub);

//Mail
const inputMail = document.getElementById('email');
const previewMail = document.querySelector('.buttonMail');

function writeMail(event) {
  const yourEmail = inputMail.value;
  userCard.email = inputMail.value;
  saveCache();
  previewMail.href = `mailto:${yourEmail}`;
}

inputMail.addEventListener('keyup', writeMail);

//Linkedin
const inputLinkedin = document.getElementById('Linkedin');
const previewLinkedin = document.querySelector('.linkedin');

function writeLinkedin() {
  userCard.linkedin = inputLinkedin.value;
  saveCache();
  previewLinkedin.href = inputLinkedin.value;
}

inputLinkedin.addEventListener('keyup', writeLinkedin);

// THEMES

const cardContainerEl = document.querySelector('.section__preview');
const themeGreenEl = document.getElementById('theme-green');
const themeRedEl = document.getElementById('theme-red');
const themeGreyEl = document.getElementById('theme-grey');

function handlerChangeTheme() {
  if (themeRedEl.checked) {
    userCard.palette = parseInt(themeRedEl.value);
    cardContainerEl.classList.add('theme--red');
    cardContainerEl.classList.remove('theme--grey', 'theme--green');
  } else if (themeGreyEl.checked) {
    userCard.palette = parseInt(themeGreyEl.value);
    cardContainerEl.classList.add('theme--grey');
    cardContainerEl.classList.remove('theme--red', 'theme--green');
  } else {
    userCard.palette = parseInt(themeGreenEl.value);
    cardContainerEl.classList.add('theme--green');
    cardContainerEl.classList.remove('theme--grey', 'theme--red');
  }
  saveCache();
}

themeGreenEl.addEventListener('click', handlerChangeTheme);
themeRedEl.addEventListener('click', handlerChangeTheme);
themeGreyEl.addEventListener('click', handlerChangeTheme);

//COLLAPIBLE FORM

const tabDesign = document.querySelector('.trigger__design');
const tabFill = document.querySelector('.trigger__fill');
const tabShare = document.querySelector('.trigger__share');

function closeAllTabs() {
  tabDesign.nextElementSibling.classList.add('hide');
  tabFill.nextElementSibling.classList.add('hide');
  tabShare.nextElementSibling.classList.add('hide');
}

function openCurrentTab() {
  event.currentTarget.nextElementSibling.classList.remove('hide');
}

function isOpen() {
  return !event.currentTarget.nextElementSibling.classList.contains('hide');
}

function openThisTab(event) {
  if (isOpen(event)) {
    event.currentTarget.nextElementSibling.classList.add('hide');
  } else {
    closeAllTabs(event);
    openCurrentTab(event);
  }
}

tabDesign.addEventListener('click', openThisTab);
tabFill.addEventListener('click', openThisTab);
tabShare.addEventListener('click', openThisTab);

//profile picture
const fr = new FileReader();
const uploadBtn = document.querySelector('.js__profile-trigger');
const fileField = document.querySelector('.js__profile-upload-btn');
const profileImage = document.querySelector('.js__profile-image');
const profilePreview = document.querySelector('.js__profile-preview');

function getImage(e) {
  var myFile = e.currentTarget.files[0];
  fr.addEventListener('load', writeImage);
  fr.readAsDataURL(myFile);
}

function writeImage() {
  profileImage.style.backgroundImage = `url(${fr.result})`;
  profilePreview.style.backgroundImage = `url(${fr.result})`;
  userCard.photo = fr.result;
  saveCache();
}

function fakeFileClick() {
  fileField.click();
}

uploadBtn.addEventListener('click', fakeFileClick);
fileField.addEventListener('change', getImage);

//CREATE CARD

const createEl = document.querySelector('.button__create');
const shareTwitter = document.querySelector('.card__created');

function showTwitterButton() {
  shareTwitter.classList.remove('hide');
  createEl.classList.remove('button__create');
  createEl.classList.add('button__create--clicked');
}

//****RESET **** */

inputName.addEventListener('keyup', getCache);

const btnResetEl = document.querySelector('.button__reset');

function reset() {
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
}
btnResetEl.addEventListener('click', reset);

/*******************************OBJECT************************* */

//ESCUCHADOR

function fillObject() {
  if (themeGreenEl.checked) {
    userCard.palette = parseInt(themeGreenEl.value);
  } else if (themeRedEl.checked) {
    userCard.palette = parseInt(themeRedEl.value);
  } else {
    userCard.palette = parseInt(themeGreyEl.value);
  }
}

function resetCache() {
  localStorage.removeItem('card');
}

function saveCache() {
  const objectString = JSON.stringify(userCard);
  localStorage.setItem('card', objectString);
}

function getCache() {
  const objectString = localStorage.getItem('card');
  const objectParse = JSON.parse(objectString);
  return objectParse;
}

function fillFormFromUserCard() {
  inputName.value = userCard.name;
  previewName.innerHTML = userCard.name;
  inputJob.value = userCard.job;
  previewJob.innerHTML = userCard.job;
  inputPhone.value = userCard.phone;
  previewPhone.href = 'tel:' + userCard.phone;
  inputMail.value = userCard.email;
  previewMail.href = `mailto:${userCard.email}`;
  inputLinkedin.value = userCard.linkedin;
  previewLinkedin.href = userCard.linkedin;
  inputGithub.value = userCard.github;
  previewGithub.href = userCard.github;

  if(!userCard.photo){
    profileImage.classList.add('card__photo--refresh');
  } else {
    profilePreview.style.backgroundImage = `url(${userCard.photo})`;
  }

  if (parseInt(themeGreenEl.value) === userCard.palette) {
    themeGreenEl.checked = true;
    cardContainerEl.classList.remove('theme--grey', 'theme--red');
  } else if (parseInt(themeRedEl.value) === userCard.palette) {
    themeRedEl.checked = true;
    cardContainerEl.classList.add('theme--red');
    cardContainerEl.classList.remove('theme--grey');
  } else if (parseInt(themeGreyEl.value) === userCard.palette) {
    themeGreyEl.checked = true;
    cardContainerEl.classList.remove('theme--red');
    cardContainerEl.classList.add('theme--grey');
  }
}

reloadPage();

function reloadPage() {
  const userCardFromCache = getCache();
  if (userCardFromCache) {
    userCard = userCardFromCache;
    fillFormFromUserCard();
  }
}
//ARROW

const arrowOneEl = document.querySelector('.arrow1');
const subTab1Design = document.querySelector('.fieldset__theme-container');

const arrowTwoEl = document.querySelector('.arrow2');
const subTab2Fill = document.querySelector('.fieldset__fill-container');

const arrowThreeEl = document.querySelector('.arrow3');
const subTab3Share = document.querySelector('.fieldset__share-container');

function interchangeArrowsDownAndUp(event) {
  if (subTab1Design.classList.contains('hide')) {
    arrowOneEl.classList.add('fa-chevron-down');
    arrowOneEl.classList.remove('fa-chevron-up');
  } else {
    arrowOneEl.classList.add('fa-chevron-up');
    arrowOneEl.classList.remove('fa-chevron-down');
  }
  if (subTab2Fill.classList.contains('hide')) {
    arrowTwoEl.classList.add('fa-chevron-down');
    arrowTwoEl.classList.remove('fa-chevron-up');
  } else {
    arrowTwoEl.classList.add('fa-chevron-up');
    arrowTwoEl.classList.remove('fa-chevron-down');
  }

  if (subTab3Share.classList.contains('hide')) {
    arrowThreeEl.classList.add('fa-chevron-down');
    arrowThreeEl.classList.remove('fa-chevron-up');
  } else {
    arrowThreeEl.classList.add('fa-chevron-up');
    arrowThreeEl.classList.remove('fa-chevron-down');
  }
}

interchangeArrowsDownAndUp();

const responseURL = document.querySelector('.card__link');
const responseText = document.querySelector('.form__share-subtitle');
const twitterButton = document.querySelector('.share__twitter');

//enviar datos
function sendRequest() {
  fillObject();
  fetch('https://us-central1-awesome-cards-cf6f0.cloudfunctions.net/card/', {
    method: 'POST',
    body: JSON.stringify(userCard),
    headers: {
      'content-type': 'application/json'
    }
  })
    .then(function(resp) {
      return resp.json();
    })
    .then(function(result) {
      showTwitterButton();
      showURL(result);
    })
    .catch(function(error) {
      console.log(error);
    });
}

function showURL(result) {
  if (result.success) {
    responseText.innerHTML = 'La tarjeta ha sido creada';
    responseURL.innerHTML =
      '<a href=' + result.cardURL + '>' + result.cardURL + '</a>';
    twitterButton.href = `https://twitter.com/intent/tweet?text=Mira%20mi%20nueva%20tarjeta%20digital:%20${
      result.cardURL
    }`;
    twitterButton.classList.remove('hide');
  } else {
    twitterButton.classList.add('hide');
    responseText.innerHTML = 'Ha habido un error';
    createEl.classList.remove('button__create--clicked');
    createEl.classList.add('button__create');
    responseURL.innerHTML = 'ERROR:' + result.error;
  }
}

createEl.addEventListener('click', sendRequest);
tabDesign.addEventListener('click', interchangeArrowsDownAndUp);
tabFill.addEventListener('click', interchangeArrowsDownAndUp);
tabShare.addEventListener('click', interchangeArrowsDownAndUp);
