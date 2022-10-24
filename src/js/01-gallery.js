// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const refs = {
  galleryContainer: document.querySelector('.gallery'),
};

refs.galleryContainer.insertAdjacentHTML(
  'beforeend',
  galleryCreateMarkup(galleryItems)
);

function galleryCreateMarkup(gallery) {
  return gallery
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
              <a class="gallery__link" href="${original}">
              <img
              class="gallery__image"
              src="${preview}"
              alt="${description}"
              />
               </a>
              </div>`;
    })
    .join(' ');
}

new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
  docClose: true,
  uniqueImages: true,
});
