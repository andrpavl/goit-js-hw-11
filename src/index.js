import axios from "axios";
import { fetchImg } from "./fetchImg";
import Notiflix from 'notiflix';


const form = document.querySelector('.search-form')
const queryInput = document.querySelector('input[name="searchQuery"]')

form.addEventListener('submit', (evt) => {
    evt.preventDefault();
   fetchImg(queryInput)
   .then((result) => {
    console.log(result);
   })
   .catch((err) => {
    Notiflix.Notify.failure('Sorry, there are no images matching your search query. Please try again.');
   });
})