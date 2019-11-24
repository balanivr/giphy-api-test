import axios from 'axios';

const API_KEY = process.env.REACT_APP_GIPHY_KEY;    

class SearchAPI {
    getResults(query) {
        return new Promise((resolve, reject) => {
            axios.get(
                `http://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${query}`
            ).then(response => {
                let parsed = response.data;
                let results = parsed.data;
                resolve(results);
            }).catch(e => reject(e));
        })
    };
}

export default SearchAPI;