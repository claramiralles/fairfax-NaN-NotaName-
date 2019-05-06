//Github
const inputGithub = document.getElementById('github');
const previewGithub = document.querySelector('.github');

const writeGithub = () => {
  const yourGithub = inputGithub.value;
  userCard.github = inputGithub.value;
  saveCache();
  previewGithub.href = yourGithub;
}

inputGithub.addEventListener('keyup', writeGithub);