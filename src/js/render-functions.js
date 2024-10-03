import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

export function renderGallery(data, galleryElement) {
  const { hits } = data;
  const formatting = hits
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => `<li class="gallery-item">
              <a href="${largeImageURL}" class="gallery-link">
                  <img src="${webformatURL}" alt="${tags}" class="gallery-image" />
              </a>
              <div class="info">
                  <p class="info-item"><span>Likes</span> ${likes}</p>
                  <p class="info-item"><span>Views</span> ${views}</p>
                  <p class="info-item"><span>Comments</span> ${comments}</p>
                  <p class="info-item"><span>Downloads</span> ${downloads}</p>
              </div>
          </li>`
    )
    .join('');

  galleryElement.innerHTML = formatting;

  //   const lightbox = new SimpleLightbox('.gallery a');
  //   lightbox.refresh();
  // Перенесено
}
  
export function showError(message) {
  iziToast.error({
    title: 'Error',
    message: message,
  });
}