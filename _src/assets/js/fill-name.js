//Name and position
const previewName = document.querySelector('.name');
const inputName = document.querySelector('#name');
const previewJob = document.querySelector('.job');
const inputJob = document.querySelector('#position');

function writeName(event) {
  event.currentTarget;
  previewName.innerHTML = inputName.value || 'Nombre Apellido';
  userCard.name = inputName.value;
  saveCache();
}
inputName.addEventListener('keyup', writeName);

function writePosition(event) {
  event.currentTarget;
  previewJob.innerHTML = inputJob.value || 'Front-end developer';
  userCard.job = inputJob.value;
  saveCache();
}
inputJob.addEventListener('keyup', writePosition);
