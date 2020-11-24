import React, { Component, useState } from 'react';
import { FormControl, FormLabel, FormHelperText, Input, InputLabel, makeStyles, TextField, Button } from '@material-ui/core';
import { addShow } from "../Redux/actions"
import { connect } from 'react-redux'
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

function NewShowForm(props){
    const classes = useStyles();

    const [newShow, setShow] = useState({
        date_time: "2017-05-24T10:30",
        comedian_id: props.comedian.id,
        is_virtual: false,
        venue: "",
        address: "",
        phone_number: "",
        ticket_link: "",
        ticket_price: 0,
        venue_website: ""
    })

    const formChangeHandler = (e) => {
        const { name, value } = e.target
        setShow({ ...newShow, [name]: value })
    }

    const submitShowHandler = (e) => {
        e.preventDefault()
        props.postShow(newShow)
        setShow({
            date_time: "2017-05-24T10:30",
            comedian_id: props.comedian.id,
            is_virtual: false,
            venue: "",
            address: "",
            phone_number: "",
            ticket_link: "",
            ticket_price: 0,
            venue_website: ""
        })
    }



    // const signupHandler = (e) => {
    //     e.preventDefault()
    //     props.signupHandler(newComedian)
    // }

    return(
        <>
            <h2>New Show From</h2>
            <FormControl>
                <form className={classes.root} noValidate autoComplete="off" onSubmit={submitShowHandler}>
                    <TextField
                        id="datetime-local"
                        label="Show Date and Time"
                        type="datetime-local"
                        className={classes.textField}
                        InputLabelProps={{
                            shrink: true,
                        }}
                        value={newShow.date_time}
                        onChange={formChangeHandler}
                    />
                    <TextField id="standard-basic" name="is_virtual" label="Is this show virtual?" value={newShow.is_virtual} onChange={formChangeHandler} />
                    <TextField id="standard-basic" name="venue" label="Venue Name" value={newShow.venue} onChange={formChangeHandler} />
                    <TextField id="standard-basic" name="address" label="Address" value={newShow.address} onChange={formChangeHandler} />
                    <TextField id="standard-basic" name="phone_number" label="Phone Number" value={newShow.phone_number} onChange={formChangeHandler} />
                    <TextField id="standard-basic" name="ticket_link" label="Link to Tickets" value={newShow.ticket_link} onChange={formChangeHandler} />
                    <TextField id="standard-basic" name="ticket_price" label="Ticket Price" value={newShow.ticket_price} onChange={formChangeHandler} />
                    <TextField id="standard-basic" name="venue_website" label="Venue Website" value={newShow.venue_website} onChange={formChangeHandler} />
                    <Button type="submit">Submit</Button>
                    {/* <TextField id="filled-basic" label="Filled" variant="filled" />
                <TextField id="outlined-basic" label="Outlined" variant="outlined" /> */}
                </form>
            </FormControl>
        </>
    )
}


// write to the store
const mdp = (dispatch) => {
    return {postShow: (showObj) => dispatch(addShow(showObj))}
}

export default connect(null, mdp)(NewShowForm)