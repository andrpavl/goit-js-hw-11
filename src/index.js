import { onImagesSearch } from './imagesSearch';

const form = document.querySelector('.search-form');
const gallery = document.querySelector('.gallery');

form.addEventListener('submit', onImagesSearch)

