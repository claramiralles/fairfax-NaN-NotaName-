//ARROW

const arrowOneEl = document.querySelector('.arrow1');
const collapsibleOneEl = document.querySelector('.fieldset__theme-container');

const arrowTwoEl = document.querySelector('.arrow2');
const collapsibleTwoEl = document.querySelector('.fieldset__fill-container');

const arrowThreeEl = document.querySelector('.arrow3');
const collapsibleThreeEl = document.querySelector('.fieldset__share-container');

function changeImage(container, image) {
  if (container.classList.contains('hide')) {
    image.classList.add('fa-chevron-down');
    image.classList.remove('fa-chevron-up');
  } else {
    image.classList.add('fa-chevron-up');
    image.classList.remove('fa-chevron-down');
  }
}

function interchangeArrowsDownAndUp() {
  changeImage(collapsibleOneEl, arrowOneEl);
  changeImage(collapsibleTwoEl, arrowTwoEl);
  changeImage(collapsibleThreeEl, arrowThreeEl);
}
interchangeArrowsDownAndUp();

tabDesign.addEventListener('click', interchangeArrowsDownAndUp);
tabFill.addEventListener('click', interchangeArrowsDownAndUp);
tabShare.addEventListener('click', interchangeArrowsDownAndUp);