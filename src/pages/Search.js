import React from 'react';

import SearchAPI from '../communication/SearchAPI';
import SearchBar from '../components/SearchBar/SearchBar';
import SearchResults from '../components/SearchResults/SearchResults';

class Search extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            query: '',
            showResults: false,
            results: []
        }
    }

    performSearch = query => {
        this.setState({ showResults: true });

        let search = new SearchAPI();
        search.getResults(query).then(
            (response) => {
                let results = response.map(image => {
                    return {
                        img: image.images.fixed_width.url,
                        share: image.bitly_gif_url,
                        title: image.title,
                        user: image.username
                    }
                });

                this.setState({ results });
            }
        );
    }

    cancelSearch = () => {
        this.setState({ showResults: false, query: '' });
    }

    updateQuery = query => this.setState({ query });

    render() {
        const { query, showResults, results } = this.state;

        return (
            <React.Fragment>
                <SearchBar 
                    query={query} 
                    updateQuery={this.updateQuery} 
                    showResults={showResults} 
                    performSearch={this.performSearch} 
                    cancelSearch={this.cancelSearch} 
                />
                {
                    showResults 
                        ? <SearchResults items={results} />
                        : null
                }
            </React.Fragment>
        )
    }
}

export default Search;