//Mail
const inputMail = document.getElementById('email');
const previewMail = document.querySelector('.buttonMail');

const writeMail = () => {
  const yourEmail = inputMail.value;
  userCard.email = inputMail.value;
  saveCache();
  previewMail.href = `mailto:${yourEmail}`;
}

inputMail.addEventListener('keyup', writeMail);