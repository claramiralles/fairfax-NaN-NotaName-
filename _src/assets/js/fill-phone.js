//PHONE

const inputPhone = document.querySelector('#phone');
const previewPhone = document.querySelector('.phone__icon');

function writePhone() {
  userCard.phone = inputPhone.value;
  saveCache();
  previewPhone.href = 'tel:' + inputPhone.value;
}

inputPhone.addEventListener('keyup', writePhone);