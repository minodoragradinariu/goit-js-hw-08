// Add imports above this line 
import { galleryItems } from './gallery-items';
// Change code below this line
// Importăm SimpleLightbox și stilurile CSS
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

// Referință către containerul galeriei
const galleryContainer = document.querySelector('.gallery');

// Funcție pentru a genera markup-ul galeriei
function createGalleryMarkup(items) {
  return items.map(({ preview, original, description }) => {
    return `
      <li class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            alt="${description}"
          />
        </a>
      </li>`;
  }).join('');
}

// Adăugăm markup-ul în containerul galeriei
galleryContainer.innerHTML = createGalleryMarkup(galleryItems);

// Inițializăm SimpleLightbox cu opțiuni
const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

// Opțional: Eveniment pentru a preveni comportamentul default
galleryContainer.addEventListener('click', (event) => {
  event.preventDefault();
});
