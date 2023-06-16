const API_KEY =
  'live_TxjcGQflbxvuSzHgmvblDnRxjRt8YKYIxaiKw6Fq1TnS0bFloCRxunVoMwmNkM0l';
const URL = 'https://api.thecatapi.com/v1/';

const options = {
  'x-api-key': API_KEY,
};

export function fetchBreeds() {
  return fetch(`${URL}breeds`, options).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json;
  });
}
