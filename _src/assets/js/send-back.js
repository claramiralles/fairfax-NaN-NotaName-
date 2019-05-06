const responseURL = document.querySelector('.card__link');
const responseText = document.querySelector('.form__share-subtitle');
const twitterButton = document.querySelector('.share__twitter');
//enviar datos
function sendRequest() {
  fillObject();
  fetch('https://us-central1-awesome-cards-cf6f0.cloudfunctions.net/card/', {
    method: 'POST',
    body: JSON.stringify(userCard),
    headers: {
      'content-type': 'application/json'
    }
  })
    .then(function(resp) {
      return resp.json();
    })
    .then(function(result) {
      showTwitterButton();
      showURL(result);
    })
    .catch(function(error) {
      console.log(error);
    });
}

function showURL(result) {
  if (result.success) {
    responseText.innerHTML = 'La tarjeta ha sido creada';
    responseURL.innerHTML =
      '<a href=' + result.cardURL + '>' + result.cardURL + '</a>';
    twitterButton.href = `https://twitter.com/intent/tweet?text=Mira%20mi%20nueva%20tarjeta%20digital:%20${
      result.cardURL
    }`;
    twitterButton.classList.remove('hide');
  } else {
    twitterButton.classList.add('hide');
    responseText.innerHTML = 'Ha habido un error';
    createEl.classList.remove('button__create--clicked');
    createEl.classList.add('button__create');
    responseURL.innerHTML = 'ERROR:' + result.error;
  }
}

createEl.addEventListener('click', sendRequest);
tabDesign.addEventListener('click', interchangeArrowsDownAndUp);
tabFill.addEventListener('click', interchangeArrowsDownAndUp);
tabShare.addEventListener('click', interchangeArrowsDownAndUp);