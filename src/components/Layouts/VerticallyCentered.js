import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    container: {
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'center',
        width: '100%',
        height: '100%',
    }
});

class VerticallyCentered extends React.Component {
    render() {
        const { classes } = this.props;
        // const classes = useStyles(this.props);

        return (
            <div className={classes.container}>
                { this.props.children }
            </div>
        );
    }
}

VerticallyCentered.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(VerticallyCentered);