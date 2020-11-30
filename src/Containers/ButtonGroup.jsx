import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom"
import { connect } from "react-redux"
import {setFan} from "../Redux/actions"

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));

function BasicButtonGroup(props) {
    const classes = useStyles();
    const history = useHistory();

    function handleComedianClick(){
        history.push("/signup")
    }

    function handleFanClick(){
        props.setUserFan()
        // history.push(`/fans/${currentUser.id}`)
    }

    return (
        <div className={classes.root}>
            <ButtonGroup variant="contained" color="secondary" aria-label="contained primary button group">
                <Button onClick={handleComedianClick}>Comedian</Button>
                <Button onClick={handleFanClick}>Fan</Button>
                <Button>Producer</Button>
            </ButtonGroup>
        </div>
    );
}

const mdp = (dispatch) => {
    return {setUserFan: () => dispatch(setFan())}
}

const msp = (state) => {
    return {currentUser: state.currentUser}
}

export default connect(msp, mdp)(BasicButtonGroup)