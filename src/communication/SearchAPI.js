import axios from 'axios';

const API_KEY = process.env.REACT_APP_GIPHY_KEY;    

class SearchAPI {
    getResults(query, start, limit) {
        return new Promise((resolve, reject) => {
            axios.get(
                `http://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${query}&offset=${start}&limit=${limit}`
            ).then(response => {
                let parsed = response.data;
                let results = parsed.data;

                if (results.length)
                    resolve(results);
                else
                    reject({ message: 'No results found' });
            }).catch(e => reject(e));
        })
    };
}

export default SearchAPI;