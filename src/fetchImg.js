import axios from "axios";

const perPage = 40;

export async function fetchImg(query, page = 1) {
    const BASE_URL = 'https://pixabay.com/api/';
    const KEY_API = '35752200-55fbc3ad9b98a84c3d01ddaf0';
    const resp = await axios.get(
            `${BASE_URL}?key=${KEY_API}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true&per_page=${perPage}&page=${page}`
            );
        return resp.data; 
}

