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