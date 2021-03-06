import React, { Component, useState } from 'react';
import { FormControl, FormLabel, FormHelperText, Input, InputLabel, makeStyles, TextField, Button } from '@material-ui/core';
import { addShow, editShow } from "../Redux/actions"
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

function EditShowForm(props) {
    const classes = useStyles();
    console.log("edit show form props", props)
    const [editedShow, setShow] = useState({
        id: props.show.id,
        date_time: props.show.date_time,
        comedian_id: props.show.comedian_id,
        is_virtual: props.show.is_virtual,
        venue: props.show.venue,
        address: props.show.address,
        phone_number: props.show.phone_number,
        ticket_link: props.show.ticket_link,
        ticket_price: props.show.ticket_price,
        venue_website: props.show.venue_website
    })

    const formChangeHandler = (e) => {
        const { name, value } = e.target
        setShow({ ...editedShow, [name]: value })
    }

    // const submitShowHandler = (e) => {
    //     e.preventDefault()
    //     props.postShow(newShow)
    //     setShow({
    //         date_time: "2017-05-24T10:30",
    //         comedian_id: props.comedian.id,
    //         is_virtual: false,
    //         venue: "",
    //         address: "",
    //         phone_number: "",
    //         ticket_link: "",
    //         ticket_price: 0,
    //         venue_website: ""
    //     })
    // }



    const editShowSubmitHandler = (e) => {
        e.preventDefault()
        props.patchShow(editedShow)
    }

    return (
        <>
            <h3>Edit Show Form</h3>
            <FormControl>
                <form className={classes.root} noValidate autoComplete="off" onSubmit={editShowSubmitHandler}>
                    <TextField
                        id="datetime-local"
                        label="Show Date and Time"
                        type="datetime-local"
                        className={classes.textField}
                        InputLabelProps={{
                            shrink: true,
                        }}
                        value={editedShow.date_time}
                        onChange={formChangeHandler}
                    />
                    <TextField id="standard-basic" name="is_virtual" label="Is this show virtual?" value={editedShow.is_virtual} onChange={formChangeHandler} />
                    <TextField id="standard-basic" name="venue" label="Venue Name" value={editedShow.venue} onChange={formChangeHandler} />
                    <TextField id="standard-basic" name="address" label="Address" value={editedShow.address} onChange={formChangeHandler} />
                    <TextField id="standard-basic" name="phone_number" label="Phone Number" value={editedShow.phone_number} onChange={formChangeHandler} />
                    <TextField id="standard-basic" name="ticket_link" label="Link to Tickets" value={editedShow.ticket_link} onChange={formChangeHandler} />
                    <TextField id="standard-basic" name="ticket_price" label="Ticket Price" value={editedShow.ticket_price} onChange={formChangeHandler} />
                    <TextField id="standard-basic" name="venue_website" label="Venue Website" value={editedShow.venue_website} onChange={formChangeHandler} />
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
    return { patchShow: (showObj) => dispatch(editShow(showObj)) }
}

export default connect(null, mdp)(EditShowForm)