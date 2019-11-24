import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import IconButton from '@material-ui/core/IconButton';
import ArrowBack from '@material-ui/icons/ArrowBack';

import SearchField from './SearchField';

const styles = theme => ({
    parent: {
        position: 'fixed', 
        left: 0, 
        top: 0, 
        width: '100vw', 
        height: '100vh', 
        transition: 'height .3s', 
        backgroundColor: '#FFF',
        zIndex: 10
    },
    searchContainer: {
        display: 'flex', 
        flexDirection: 'row', 
        justifyContent: 'space-between',
        alignItems: 'center', 
        height: 'inherit',
    }
});

class SearchBar extends React.Component {
    renderCancelSearch(showResults) {
        if (showResults)
            return (
                <IconButton 
                    aria-label="cancel search" 
                    onClick={this.props.cancelSearch}
                >
                    <ArrowBack />
                </IconButton>
            );
        else 
            return (
                <span></span>
            );
    }

    render() {
        const { 
            classes, 
            query, 
            updateQuery, 
            showResults, 
            performSearch,
        } = this.props;

        return (
            <div className={classes.parent} style={{ height: showResults ? 90 : '100vh' }}>
                <div className={classes.searchContainer}>
                    { this.renderCancelSearch(showResults) } 
                    <SearchField 
                        query={query} 
                        updateQuery={updateQuery} 
                        performSearch={performSearch} 
                    />
                    <span></span>
                </div>
            </div>
        );
    }
}

SearchBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(SearchBar);