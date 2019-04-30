//Linkedin
const inputLinkedin = document.getElementById('Linkedin');
const previewLinkedin = document.querySelector('.linkedin');

function writeLinkedin() {
  userCard.linkedin = inputLinkedin.value;
  saveCache();

  if (!inputLinkedin.value) {
    previewLinkedin.classList.add('hide');
  } else {
    previewLinkedin.classList.remove('hide');
    previewLinkedin.href = inputLinkedin.value;
  }
}

inputLinkedin.addEventListener('keyup', writeLinkedin);