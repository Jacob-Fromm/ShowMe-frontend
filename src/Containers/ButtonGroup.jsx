import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom"

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

export default function BasicButtonGroup() {
    const classes = useStyles();
    const history = useHistory();

    function handleComedianClick(){
        history.push("/signup")
    }

    return (
        <div className={classes.root}>
            <ButtonGroup variant="contained" color="secondary" aria-label="contained primary button group">
                <Button onClick={handleComedianClick}>Comedian</Button>
                <Button>Fan</Button>
                <Button>Producer</Button>
            </ButtonGroup>
        </div>
    );
}