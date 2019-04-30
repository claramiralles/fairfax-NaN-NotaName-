
/****************Cache */

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
    console.log(objectParse);
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
    }else {
    profilePreview.style.backgroundImage = `url(${userCard.photo})`;
    };
    profileImage.style.backgroundImage = `url(${userCard.photo})`;
  
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