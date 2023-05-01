import Notiflix from 'notiflix';
import { makeMarkup } from './markup';
import { fetchImg } from './fetchImg';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

let lightbox = new SimpleLightbox('.gallery a');
const gallery = document.querySelector('.gallery');
const form = document.querySelector('.search-form');
let page = 1;

form.addEventListener('submit', onImagesSearch)

function onImagesSearch(evt) {
    evt.preventDefault();
    gallery.innerHTML = ""
    const { searchQuery } = evt.currentTarget.elements;
    fetchImg(searchQuery.value)
    .then(data => {
        if(data.hits.length) {
            Notiflix.Notify.info(`Hooray! We found ${data.totalHits} images.`);
            gallery.insertAdjacentHTML('beforeend', makeMarkup(data));
            lightbox.refresh();
        } else {
            Notiflix.Notify.failure(
                'Sorry, there are no images matching your search query. Please try again.'
              );
        }
    })
    .catch(error => 
       console.log(error)
      );
}