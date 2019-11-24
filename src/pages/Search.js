import React from 'react';

import SearchBar from '../components/SearchBar/SearchBar';
import SearchResults from '../components/SearchResults/SearchResults';

export default class Search extends React.Component {
    render() {
        return (
            <React.Fragment>
                <SearchBar />
                <SearchResults />
            </React.Fragment>
        )
    }
}
