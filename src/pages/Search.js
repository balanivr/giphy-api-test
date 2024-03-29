import React from 'react';

import SearchAPI from '../communication/SearchAPI';
import SearchBar from '../components/SearchBar/SearchBar';
import SearchResults from '../components/SearchResults/SearchResults';
import NoResultsFound from '../components/SearchResults/NoResultsFound';

class Search extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            query: '',
            showResults: false,
            results: [],
            noMoreResults: false,
            noResultsFound: false,
            error: null,
        }
    }

    updateQuery = query => this.setState({ query });

    performSearch = (query, start, limit) => {
        if (!query.length)
            return;

        this.setState({ 
            showResults: true, 
            noMoreResults: false, 
            noResultsFound: false,
        });

        let results = [...this.state.results];

        if (!start) {
            results = [];
            start = 0;
        }
        if (!limit) {
            limit = 24;
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
            else {
                if (e.code === 0)
                    this.setState({ noResultsFound: true, error: e });
            }
        });
    }

    cancelSearch = () => {
        this.setState({ showResults: false, query: '' });
    }

    loadMore = () => {
        this.performSearch(this.state.query, this.state.results.length);
    }

    renderResults = () => {
        const { 
            query, 
            showResults, 
            results, 
            noMoreResults, 
            noResultsFound, 
            error, 
        } = this.state;

        if (noResultsFound) 
            return (
                <NoResultsFound query={query} cancelSearch={this.cancelSearch} error={error} />
            );
        else if (showResults)
            return (
                <SearchResults items={results} loadMore={this.loadMore} noMoreResults={noMoreResults} />
            );
    }

    render() {
        const { 
            query, 
            showResults, 
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
                {this.renderResults()}
            </React.Fragment>
        )
    }
}

export default Search;