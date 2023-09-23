import axios from 'axios';

const KEY_API = '38482679-fa06f355fbbaefa388f4c969f';
const URL = 'https://pixabay.com/api/';
export let numberPage = 1;
const per_page = 12;

export const fetchData = async (searcheQuery, numberPage) => {
    const { data } = await axios.get(
        `${URL}?key=${KEY_API}&q=${searcheQuery}&page=${numberPage}&image_type=photo&safesearch=true&orientation=horizontal&per_page=${per_page}`
    );
    return data;
};
