import React from "react";
import { withStyles } from 'material-ui/styles'
import PropTypes from 'prop-types';
import Button from 'material-ui/Button';

const styles = {
    button: {
        backgroundColor: "rgb(249, 249, 249)",
        boxShadow: "0px 0px 10px",
        width: "110px"
    }
}

function OverridesClassNames(props) {
    return (
        <Button raised disableRipple className={props.classes.button}>
            {props.children ? props.children : 'class names'}
        </Button>)
};

OverridesClassNames.propTypes = {
    children: PropTypes.node,
    classes: PropTypes.object.isRequired
}

export default withStyles(styles)(OverridesClassNames)
