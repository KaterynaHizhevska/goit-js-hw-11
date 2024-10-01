import './css/styles.css';

import { fetchImages } from './js/pixabay-api.js';
import { renderGallery, showError } from './js/render-functions.js';

const form = document.querySelector('.form');
const input = document.querySelector('.input');
const loader = document.querySelector('.loader');
const gallery = document.querySelector('.gallery');

function disableLoader() {
  loader.classList.remove('active');
  loader.classList.add('hidden');
}

function activateLoader() {
  loader.classList.remove('hidden');
  loader.classList.add('active');
}

form.addEventListener('submit', event => {
    event.preventDefault();
    
     const search = input.value.trim();
  if (search === '') {
    showError(
      'Sorry, there are no images matching your search query. Please try again!'
    );
    return;
    }
    
    const params = {
    q: search,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  };
  gallery.innerHTML = '';
    activateLoader();
    
    fetchImages(params)
    .then(data => {
      disableLoader();
      if (data.hits.length === 0) {
        showError(
          'Sorry, there are no images matching your search query. Please try again!'
        );
        return;
      }
      renderGallery(data, gallery);
    })
    .catch(error => {
      showError('Something went wrong. Please try again later.');
    });

  form.reset();
});