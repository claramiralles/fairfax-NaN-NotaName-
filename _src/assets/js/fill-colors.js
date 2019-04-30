// THEMES

const cardContainerEl = document.querySelector('.section__preview');
const themeGreenEl = document.getElementById('theme-green');
const themeRedEl = document.getElementById('theme-red');
const themeGreyEl = document.getElementById('theme-grey');

function handlerChangeTheme() {
  if (themeRedEl.checked) {
    userCard.palette = parseInt(themeRedEl.value);
    cardContainerEl.classList.add('theme--red');
    cardContainerEl.classList.remove('theme--grey');
  } else if (themeGreyEl.checked) {
    userCard.palette = parseInt(themeGreyEl.value);
    cardContainerEl.classList.add('theme--grey');
    cardContainerEl.classList.remove('theme--red');
  } else {
    userCard.palette = parseInt(themeGreenEl.value);
    cardContainerEl.classList.remove('theme--grey', 'theme--red');
  }
  saveCache();
}

themeGreenEl.addEventListener('click', handlerChangeTheme);
themeRedEl.addEventListener('click', handlerChangeTheme);
themeGreyEl.addEventListener('click', handlerChangeTheme);