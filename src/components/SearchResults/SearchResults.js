import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import withWidth, { isWidthUp } from '@material-ui/core/withWidth';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
    main: {
        marginTop: 100,
    },
    gridContainer: {
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
    gridTile: {
        width: '100%', 
        height: '100%', 
        backgroundRepeat: 'no-repeat', 
        backgroundSize: 'cover', 
        backgroundPosition: 'center',
        backgroundColor: '#ededed',
    },
    buttonContainer: {
        textAlign: 'center',
        margin: '50px auto',
    }
});

class SearchResults extends React.Component {
    getGridListCols = () => {
        if (isWidthUp('xl', this.props.width)) {
            return 5;
        }
    
        if (isWidthUp('lg', this.props.width)) {
            return 4;
        }
    
        if (isWidthUp('md', this.props.width)) {
            return 3;
        }
    
        return 2;
    }

    render() {
        const { 
            classes, 
            items, 
            loadMore, 
            noMoreResults, 
        } = this.props;

        return (
            <main className={classes.main}>
                <div className={classes.gridContainer}>
                    <GridList cellHeight={160} className={classes.gridList} cols={this.getGridListCols()}>
                        {
                            items.map(
                                tile => (
                                    <GridListTile key={tile.img} cols={1}>
                                        <a href={tile.share} target="_blank" rel="noopener noreferrer">
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
                <div className={classes.buttonContainer}>
                    {
                        noMoreResults 
                        ? <Typography variant={'h6'}>End of Results</Typography>
                        : <Button 
                            variant={'contained'} 
                            color={'primary'} 
                            onClick={loadMore}
                        >
                            {'Load More'}
                        </Button>
                    }
                </div>
            </main>
        );
    }
}

export default withStyles(styles, { withTheme: true })(withWidth()(SearchResults));