import React, {Component, useState } from "react"
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { FormControl, FormLabel, FormHelperText, Input, InputLabel, TextField } from '@material-ui/core';
import EditShowForm from "./EditShowForm"
import { connect } from 'react-redux'
import {deleteShow} from "../Redux/actions"

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
    const showObj = props.show
    const deleteHandler = () => {
        props.destroyShow(showObj)
    }
    
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
                <p>{props.show.date_time} at {props.venue}</p>
                <p>Tickets: {props.show.ticket_link }</p>
                <div className={classes.root}>
                    <Button variant="contained" size="small" onClick={toggle}>edit</Button>
                </div>
                <div className={classes.root}>
                    <Button variant="contained" size="small" onClick={deleteHandler}>delete</Button>
                </div>
            
            </>
        
        }
        </>
    )
    
}

const mdp = (dispatch) => {
    return { destroyShow: (showObj) => dispatch(deleteShow(showObj)) }
}

export default connect(null, mdp)(ShowCard)
