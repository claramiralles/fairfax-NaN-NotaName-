//elemento a observar Phone
const inputPhone = document.querySelector('#phone');
const previewPhone = document.querySelector('.phone__icon');

//handler
function writePhone(event) {
  event.currentTarget;
  userCard.phone = inputPhone.value;
  saveCache();
  if (!inputPhone.value) {
    previewPhone.classList.add('hide');
  } else {
    previewPhone.href = 'tel:' + inputPhone.value;
    previewPhone.classList.remove('hide');
  }
}
//listener
inputPhone.addEventListener('keyup', writePhone);