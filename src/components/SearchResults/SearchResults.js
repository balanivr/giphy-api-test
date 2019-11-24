import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';

const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
    },
    gridList: {
        width: '80%',
        maxWidth: 1080,
        minWidth: 200
    },
});

const gifs = [];

class SearchResults extends React.Component {
    render() {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                <GridList cellHeight={160} className={classes.gridList} cols={5}>
                    {gifs.map(tile => (
                        <GridListTile key={tile.img} cols={1}>
                            {/* <img src={tile.img} alt={tile.title} /> */}
                        </GridListTile>
                    ))}
                </GridList>
            </div>
        );
    }
}

export default withStyles(styles, { withTheme: true })(SearchResults);