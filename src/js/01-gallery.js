import { galleryItems } from './gallery-items.js';
import galleryTemplate from '../templates/gallery.hbs';
import SimpleLightbox from 'simplelightbox';

// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryRef = document.querySelector('.gallery');
galleryRef.insertAdjacentHTML('beforeend', galleryTemplate(galleryItems));

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
  captionClass: 'custom-caption',
});
