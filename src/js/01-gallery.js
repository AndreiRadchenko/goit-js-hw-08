import { galleryItems } from './gallery-items.js';
import galleryTemplate from '../templates/gallery.hbs';

import SimpleLightbox from 'simplelightbox';

// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryRef = document.querySelector('.gallery');

// function createGalleryMarkup(galleryItemsArray) {
//   return galleryItemsArray
//     .map(({ preview, original, description }) => {
//       return `<a class="gallery__item" href="${original}">
//                 <img class="gallery__image" src="${preview}" alt="${description}" />
//               </a>`;
//     })
//     .join('');
// }
console.log(galleryItems);
galleryRef.insertAdjacentHTML('beforeend', galleryTemplate(galleryItems));
// galleryRef.insertAdjacentHTML('beforeend', createGalleryMarkup(galleryItems));

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
  captionClass: 'custom-caption',
});
