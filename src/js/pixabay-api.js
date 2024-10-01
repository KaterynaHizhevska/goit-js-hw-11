const API_KEY = '46278003-3664944736e49f9bfa5b8ba34';
const BASE_URL = 'https://pixabay.com/api/';

export function fetchImages(params) {
  const urlParams = new URLSearchParams(params);
  return fetch(`${BASE_URL}?key=${API_KEY}&${urlParams}`)
    .then(response => {
      if (!response.ok) {
        throw new Error('Something went wrong');
      }
      return response.json();
    })
    .catch(error => {
      throw new Error(error.message);
    });
}