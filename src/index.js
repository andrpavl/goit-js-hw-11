import Notiflix from 'notiflix';
import axios from "axios";

const BASE_URL = 'https://pixabay.com/api/';
const KEY_API = '35752200-55fbc3ad9b98a84c3d01ddaf0';

const gallery = document.querySelector('.gallery')
const form = document.querySelector('.search-form');
const inputData = document.querySelector('[name="searchQuery"]')

form.addEventListener('submit', onImagesSearch)

async function onImagesSearch(evt) {
    evt.preventDefault();
    gallery.innerHTML = ""
    const searchQuery = inputData.value.trim();
    // console.log(searchQuery);

    if (searchQuery === '') {
        return Notiflix.Notify.failure('Search is empty. You need to print something')
    } else {
       try {
        const data = await axios.get(`${BASE_URL}?key=${KEY_API}&q=${searchQuery}&image_type=photo&orientation=horizontal&safesearch=true&per_page=40&page=1`);
        gallery.insertAdjacentHTML('beforeend', makeMarkup(data.data.hits))
        }
       catch (error) {
        console.log(error)
        }
}}

function makeMarkup(data) {
    const markup = data.map(image => {
       return `<div class="photo-card">
        <img src="${image.webformatURL}" alt="${image.tags}" loading="lazy" />
        <div class="info">
          <p class="info-item">
            <b>${image.likes}</b>
          </p>
          <p class="info-item">
            <b>${image.views}</b>
          </p>
          <p class="info-item">
            <b>${image.comments}</b>
          </p>
          <p class="info-item">
            <b>${image.downloads}</b>
          </p>
        </div>
      </div>`
      
    }).join('');
    return markup;
}

export async function fetchImg(query, page) {
    try {
        const resp = await axios.get(`${BASE_URL}?key=${KEY_API}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true&per_page=40&page=${page}`);
        return resp.data;
    } catch (error) {
       console.log(error);
    }
}
