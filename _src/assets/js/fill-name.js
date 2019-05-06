//NAME AND JOB

const previewName = document.querySelector('.name');
const inputName = document.querySelector('#name');
const previewJob = document.querySelector('.job');
const inputJob = document.querySelector('#position');

function writeName() {
  previewName.innerHTML = inputName.value || 'Nombre Apellido';
  userCard.name = inputName.value;
  saveCache();
}

function writeJob() {
  previewJob.innerHTML = inputJob.value || 'Front-end developer';
  userCard.job = inputJob.value;
  saveCache();
}

inputJob.addEventListener('keyup', writeJob);
inputName.addEventListener('keyup', writeName);
