//Github
const inputGithub = document.getElementById('github');
const previewGithub = document.querySelector('.github');

function writeGithub(event) {
  event.currentTarget;
  const yourGithub = inputGithub.value;
  userCard.github = inputGithub.value;
  saveCache();
  if (!yourGithub) {
    previewGithub.classList.add('hide');
  } else {
    previewGithub.classList.remove('hide');
    previewGithub.href = yourGithub;
  }
}
inputGithub.addEventListener('keyup', writeGithub);