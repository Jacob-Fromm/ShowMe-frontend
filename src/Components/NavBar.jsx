import React, {Component} from "react"
// import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > * + *': {
            marginLeft: theme.spacing(2),
        },
    },
}));

export default function Links() {
    const classes = useStyles();
    const preventDefault = (event) => event.preventDefault();


    return (
        <Typography className={classes.root}>
            <Link href="/">Home</Link>
            <Link href="/comedians" >All Comedians</Link>
        </Typography>
    );
}

// function NavBar(){
//     return(
//         <div className="nav-bar">
//             <Link to="/">Home</Link>
//             <Link to="/comedians">All Comedians</Link>
//         </div>
//     )
// }

// export default NavBar