
const BASE_URL = 'https://pixabay.com/api/';
const KEY_API = '35752200-55fbc3ad9b98a84c3d01ddaf0';
const form = document.querySelector('.search-form')
const queryInput = document.querySelector('input[name="searchQuery"]')

const params = {
  q: queryInput,
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: true,
};


