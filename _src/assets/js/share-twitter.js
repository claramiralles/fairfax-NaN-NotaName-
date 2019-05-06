//CREATE CARD

const buttonCreateEl = document.querySelector('.button__create');
const shareTwitter = document.querySelector('.card__created');

function showTwitterButton() {
  shareTwitter.classList.remove('hide');
  buttonCreateEl.classList.remove('button__create');
  buttonCreateEl.classList.add('button__create--clicked');
}