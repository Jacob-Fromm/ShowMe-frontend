import React, {Component} from "react"

import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import {Link as RouterLink} from "react-router-dom"
import Typography from '@material-ui/core/Typography';
import { connect } from "react-redux"

const useStyles = makeStyles((theme) => ({
    root: {
        '& > * + *': {
            marginLeft: theme.spacing(2),
        },
    },
}));

function Links(props) {
    const classes = useStyles();
    // const preventDefault = (event) => event.preventDefault();


    return (
        <Typography className={classes.root}>
            <Link component={RouterLink} to="/" >Home</Link>
            <Link component={RouterLink} to="/comedians"  >All Comedians</Link>
            <Link component={RouterLink} to="/signup" >Create Account</Link>
            <Link component={RouterLink} to="/profile" >Profile</Link>
            {props.user ? 
                
                <Link onClick={props.clickHandler} component={RouterLink} to="/" >Log Out</Link>
                : 
                
                <Link component={RouterLink} to="/login" >Log In</Link>
            }
        </Typography>
    );
}

const msp = state => {
    return {user: state.currentUser}
}

export default connect(msp)(Links)



// export default NavBar