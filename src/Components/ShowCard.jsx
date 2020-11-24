import React, {Component, useState } from "react"
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { FormControl, FormLabel, FormHelperText, Input, InputLabel, TextField } from '@material-ui/core';
import EditShowForm from "./EditShowForm"

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));

function ShowCard (props) {
    const [isEditing, setEditing] = useState(false)
    const toggle = React.useCallback(() => setEditing(!isEditing));
    
    const classes = useStyles();
    console.log(props)
    
    return (
        <>
        {isEditing ?
            <>
                <p>{props.venue}</p>
                    <EditShowForm show={props.show}/>
                    <div className={classes.root}>
                        <Button variant="contained" size="small" onClick={toggle}>cancel</Button>
                    </div>
                
            </>
        :
        <>
            <p>{props.venue}</p>
            <div className={classes.root}>
                <Button variant="contained" size="small" onClick={toggle}>edit</Button>
            </div>
        
        </>
        
        }
        </>
    )
    
}

export default ShowCard