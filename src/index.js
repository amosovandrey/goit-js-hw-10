import Notiflix from 'notiflix';

import { fetchBreeds, fetchCatByBreed } from './cat-api';

const selectEL = document.querySelector('.breed-select');
const loaderEl = document.querySelector('.loader');
const errorEl = document.querySelector('.error');
const cardEl = document.querySelector('.cat-info');

hideElement(selectEL);
hideElement(errorEl);

fetchBreeds()
  .then(breeds => {
    showElement(selectEL);
    renderOptionEl(breeds);
    hideElement(loaderEl);
    selectEL.addEventListener('change', renderCat);
  })
  .catch(error => showError(error));

function renderOptionEl(breeds) {
  const markup = breeds
    .map(breed => {
      return `
          <option value='${breed.id}'>${breed.name}</option>
      `;
    })
    .join('');

  selectEL.innerHTML = markup;
}

function renderCat() {
  hideElement(cardEl);
  showElement(loaderEl);
  const breedId = selectEL.value;

  fetchCatByBreed(breedId)
    .then(cat => {
      const imageUrl = cat[0].url;
      const breedName = cat[0].breeds[0].name;
      const description = cat[0].breeds[0].description;
      const temperament = cat[0].breeds[0].temperament;

      const markup = `<h2>${breedName}</h2>
        <p class="desc-text"><strong>Description:</strong> ${description}</p>
        <p class="temper-text"> <strong>Temperament:</strong> ${temperament}</p>
        <img src="${imageUrl}" width=320 alt="${breedName}" />
      `;

      cardEl.innerHTML = markup;
      hideElement(loaderEl);
      showElement(cardEl);
    })
    .catch(error => showError(error));
}

function showError(error) {
  Notiflix.Notify.failure(
    `Oops! 😮 This what's went wrong: ${error}! Try reloading the page!`,
    {
      position: 'center-top',
      timeout: 4500,
      pauseOnHover: true,
      clickToClose: true,
    }
  );
}

function hideElement(element) {
  element.classList.add('hidden');
}

function showElement(element) {
  element.classList.remove('hidden');
}
