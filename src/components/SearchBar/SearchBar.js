import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import SearchField from './SearchField';

const styles = theme => ({
    verticallyCentered: {
        display: 'flex', 
        flexDirection: 'row', 
        justifyContent: 'center',
        alignItems: 'center', 
        height: 'inherit',
    }
});

class SearchBar extends React.Component {
    render() {
        const { classes } = this.props;

        return (
            <div style={{ position: 'fixed', left: 0, top: 0, width: '100vw', height: '100vh', transition: 'height .3s' }}>
                <div className={classes.verticallyCentered}>
                    <SearchField />
                </div>
            </div>
        );
    }
}

SearchBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(SearchBar);