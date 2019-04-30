//elemento html
const createEl = document.querySelector('.button__create');
const shareTwitter = document.querySelector('.card__created');
//handler
function showTwitterButton() {
  shareTwitter.classList.remove('hide');
  createEl.classList.remove('button__create');
  createEl.classList.add('button__create--clicked');
}