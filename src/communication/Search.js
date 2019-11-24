import axios from 'axios';

const API_KEY = process.env.REACT_APP_GIPHY_KEY;    

class Search {
    getResults = query => {
        axios.get(
            `http://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${query}`
        ).then(result => {
            console.log(result);
        });
    };
}

export default Search;