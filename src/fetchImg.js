import axios from "axios";

const BASE_URL = 'https://pixabay.com/api/';
const KEY_API = '35752200-55fbc3ad9b98a84c3d01ddaf0';

export default async function fetchImg(query, page) {
    const url = await `${BASE_URL}?key=${KEY_API}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true&per_page=40&page=${page}`
    const axios = require('axios').default;
    await axios.get(url)
    .then(resp => resp.data.hits)
    .catch(error => console.log(error))
}

