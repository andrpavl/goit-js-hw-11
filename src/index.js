import Notiflix from 'notiflix';
import { fetchImg } from "./fetchImg";
import { makeMarkup } from './markup';

const gallery = document.querySelector('.gallery')
const form = document.querySelector('.search-form');
const inputData = document.querySelector('[name="searchQuery"]')

form.addEventListener('submit', onImagesSearch)

async function onImagesSearch(evt) {
    evt.preventDefault();
    const searchQuery = inputData.value.trim();
    if (searchQuery === '') {
        return Notiflix.Notify.failure('Search is empty. You need to print something')
    }
    try {
    const response = await fetchImg(searchQuery);
    if(!response.ok) {
        throw new Error(response.statusText)
    }
    const images = await response.json();
    if (images.hits.length === 0) {
        throw new Error('Sorry, there are no images matching your search query. Please try again.');        
    }
    makeMarkup(images.hits)}
    catch (error) {
    console.log(error);
}}

