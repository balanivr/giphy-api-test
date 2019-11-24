import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import Search from '@material-ui/icons/Search';

const styles = theme => ({
    searchField: {
        width: '60%',
        minWidth: 200 
    }
});

class SearchField extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            query: '',
        }
    }

    handleChange = event => {
        this.setState({
            query: event.target.value
        });
    };

    handleKeyPress = event => {
        if (event.keyCode === 13)
            this.handleSearch();
    };

    handleSearch = () => {
        this.props.performSearch(this.state.query);
    }

    render() {
        const { classes } = this.props;
        const { query } = this.state;

        return (
            <TextField 
                className={classes.searchField}
                variant="outlined" 
                placeholder="Search for GIFs..." 
                value={query}
                onChange={this.handleChange}
                onKeyDown={this.handleKeyPress}
                InputProps={{
                  endAdornment : 
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="search button"
                        onClick={this.handleSearch}
                      >
                        <Search />
                      </IconButton>
                    </InputAdornment>
                }}
            />
        )
    }
}

SearchField.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(SearchField);