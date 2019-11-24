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
            results: [],
            noMoreResults: true,
        }
    }

    updateQuery = query => this.setState({ query });

    performSearch = (query, start, limit) => {
        this.setState({ showResults: true, noMoreResults: false });
        let results = [...this.state.results];

        if (!start) {
            results = [];
            start = 0;
        }
        if (!limit) {
            limit = 25;
        }

        let search = new SearchAPI();
        search.getResults(query, start, limit).then(
            (response) => {
                response.forEach(image => {
                    results.push({
                        img: image.images.fixed_width.url,
                        share: image.bitly_gif_url,
                        title: image.title,
                        user: image.username
                    })
                });

                this.setState({ results });
            }
        ).catch((e) => {
            console.log(e.message);

            if (results.length) {
                this.setState({ noMoreResults: true });
            }
        });
    }

    cancelSearch = () => {
        this.setState({ showResults: false, query: '' });
    }

    loadMore = () => {
        this.performSearch(this.state.query, this.state.results.length);
    }

    render() {
        const { 
            query, 
            showResults, 
            results, 
            noMoreResults, 
        } = this.state;

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
                        ? <SearchResults 
                            items={results} 
                            loadMore={this.loadMore} 
                            noMoreResults={noMoreResults}
                        />
                        : null
                }
            </React.Fragment>
        )
    }
}

export default Search;