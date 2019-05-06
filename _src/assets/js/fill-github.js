//Github
const inputGithub = document.getElementById('github');
const previewGithub = document.querySelector('.github');

function writeGithub() {
  const yourGithub = inputGithub.value;
  userCard.github = inputGithub.value;
  saveCache();
  previewGithub.href = yourGithub;
}

inputGithub.addEventListener('keyup', writeGithub);