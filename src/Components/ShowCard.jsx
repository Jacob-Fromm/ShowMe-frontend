import React, {Component, useState } from "react"
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { FormControl, FormLabel, FormHelperText, Input, InputLabel, TextField } from '@material-ui/core';
import NewShowForm from "./NewShowForm"

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));

function ShowCard (props) {
    const [editing, setEditing] = useState({
        currentlyEditing: false
    })
    
    const classes = useStyles();

    const clickHandler = (e) => {
        setEditing({
            currentlyEditing: true
        })
        
    }
    
    return (
        <>
            <p>{props.venue}</p>
            <div className={classes.root}>
                <Button variant="contained" size="small" onClick={clickHandler}>edit</Button>
            </div>
        </>
    )
    
}

export default ShowCard