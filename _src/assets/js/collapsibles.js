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