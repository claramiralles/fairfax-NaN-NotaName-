//ESCUCHADOR

function fillObject() {
  if (themeGreenEl.checked) {
    userCard.palette = parseInt(themeGreenEl.value);
  } else if (themeRedEl.checked) {
    userCard.palette = parseInt(themeRedEl.value);
  } else {
    userCard.palette = parseInt(themeGreyEl.value);
  }
}