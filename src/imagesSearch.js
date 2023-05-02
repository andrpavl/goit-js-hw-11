import Notiflix from 'notiflix';
import { fetchImg } from './fetchImg';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { makeMarkup } from './markup';

let lightbox = new SimpleLightbox('.gallery a');
const gallery = document.querySelector('.gallery');
const target = document.querySelector('.js-guard');
const perPage = 40;
let currentPage = 1;
let options = {
    root: null,
    rootMargin: "300px",
    threshold: 1.0,
};

export function onImagesSearch(evt) {
    evt.preventDefault();
    gallery.innerHTML = ""
    const { searchQuery } = evt.currentTarget.elements;

    let observer = new IntersectionObserver(onLoad, options);
    function onLoad(entries, observer) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          currentPage += 1;
          fetchImg(searchQuery.value, currentPage)
            .then(data => {
              gallery.insertAdjacentHTML('beforeend', makeMarkup(data));
              lightbox.refresh();
              if (
                data.totalHits < perPage ||
                currentPage === Math.round(data.totalHits / perPage)
              ) {
                currentPage = 1;
                observer.unobserve(target);
              }
            })
            .catch(error => console.log(error));
        }
      });
    }

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