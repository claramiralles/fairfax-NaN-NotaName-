//Linkedin
const inputLinkedin = document.getElementById('Linkedin');
const previewLinkedin = document.querySelector('.linkedin');

const writeLinkedin = () => {
  userCard.linkedin = inputLinkedin.value;
  saveCache();
  previewLinkedin.href = inputLinkedin.value;
}

inputLinkedin.addEventListener('keyup', writeLinkedin);