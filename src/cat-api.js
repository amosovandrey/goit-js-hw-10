const API_KEY =
  'live_RmnFc4VeMGf3cxN1Oo0CiMQXRuIjI47DUP52eWTzCY7QBfozJJWlgEk8bSuD4lSU';

const URL = 'https://api.thecatapi.com/v1/';

const options = {
  headers: {
    'x-api-key': API_KEY,
  },
};

export function fetchBreeds() {
  return fetch(`${URL}breeds?`, options).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}

export function fetchCatByBreed(breedId) {
  return fetch(
    `${URL}images/search?breed_ids=${breedId}&has_breeds=1`,
    options
  ).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}
