import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
    main: {
        marginTop: 100,
        width: '100vw',
        height: 'calc(100vh - 100px)',
        display: 'flex',
        flexDirection: 'column', 
        justifyContent: 'center',
        alignItems: 'center', 
    },
    textContainer: {
        marginTop: 50,
    },
    buttonContainer: {
        textAlign: 'center',
        margin: '50px auto',
    }
});

class NoResultsFound extends React.Component {
    render() {
        const { classes, query, cancelSearch } = this.props;

        return (
            <main className={classes.main}>
                <img src="https://media2.giphy.com/media/Db3OfoegpwajK/giphy.gif?cid=790b7611342a92c3f2330c61e8e674f680c42e1235a700c3&rid=giphy.gif"></img>
                <Typography 
                    variant={'h6'} 
                    className={classes.textContainer}
                >
                    {`No Results Found for "${query}"`}
                </Typography>
                <div className={classes.buttonContainer}>
                    <Button 
                        variant={'contained'} 
                        color={'primary'} 
                        onClick={cancelSearch}
                    >
                        Modify Search Query
                    </Button>
                </div>
            </main>
        );
    }
}

export default withStyles(styles, { withTheme: true })(NoResultsFound);