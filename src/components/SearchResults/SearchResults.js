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
        marginTop: 100,
        marginBottom: 100, 
    },
    gridList: {
        width: '80%',
        maxWidth: 1080,
        minWidth: 200
    },
    gridTile: {
        width: '100%', 
        height: '100%', 
        backgroundRepeat: 'no-repeat', 
        backgroundSize: 'cover', 
        backgroundPosition: 'center',
    }
});

class SearchResults extends React.Component {
    render() {
        const { classes, items } = this.props;

        return (
            <div className={classes.root}>
                <GridList cellHeight={160} className={classes.gridList} cols={5}>
                    {
                        items.map(
                            tile => (
                                <GridListTile key={tile.img} cols={1}>
                                    <a href={tile.share} target="_blank">
                                        <div 
                                            className={classes.gridTile} 
                                            style={{ backgroundImage: `url('${tile.img}')` }}
                                        ></div>
                                    </a>
                                </GridListTile>
                            )
                        )
                    }
                </GridList>
            </div>
        );
    }
}

export default withStyles(styles, { withTheme: true })(SearchResults);