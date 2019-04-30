//Mail
const inputMail = document.getElementById('email');
const previewMail = document.querySelector('.buttonMail');
function writeMail(event) {
  event.currentTarget;
  const yourEmail = inputMail.value;
  userCard.email = inputMail.value;
  saveCache();
  if (!yourEmail) {
    previewMail.classList.add('hide');
  } else {
    previewMail.classList.remove('hide');
    previewMail.href = `mailto:${yourEmail}`;
  }
  console.log(userCard);
}
inputMail.addEventListener('keyup', writeMail);