// THEMES

const cardContainerEl = document.querySelector('.section__preview');
const themeGreenEl = document.getElementById('theme-green');
const themeRedEl = document.getElementById('theme-red');
const themeGreyEl = document.getElementById('theme-grey');

function changeTheme() {
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

themeGreenEl.addEventListener('click', changeTheme);
themeRedEl.addEventListener('click', changeTheme);
themeGreyEl.addEventListener('click', changeTheme);