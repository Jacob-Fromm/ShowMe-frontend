import React, { Component, useState } from 'react';
import { FormControl, FormLabel, FormHelperText, Input, InputLabel, makeStyles, TextField, Button } from '@material-ui/core';
import { connect } from 'react-redux'
import { addComic } from "../Redux/actions"
import {Redirect, Link} from "react-router-dom"
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



function SignupComedian(props){
    const classes = useStyles();
    
    const [newComedian, setComedian] = useState({
        name: "",
        email: "",
        password: "",
        headshot_link: "",
        website: "",
        city: "",
        genre: ""
    })

    const [isLoggedIn, setLoggedIn] = useState(false)
    // const toggle = React.useCallback(() => setLoggedin(!isLoggedIn));


    const changeHandler = (e) => {
        const {name, value} = e.target
        setComedian({...newComedian, [name]: value})
    }

    console.log("signup props", props)

    const comedianSubmitHandler = (e) => {
       e.preventDefault()
       props.postComic(newComedian)
       setLoggedIn(true)
    }

    return(
        <>
        
        {isLoggedIn ? 
           
             < Redirect to = "/comedians" />
           
            
           
            
            
            : 
        
            <div className="signup">
                <h1>Comedian Signup</h1>
                {/* <form>
                    <input name="name" type="text" placeholder="enter name" value={newComedian["name"]} onChange={changeHandler} /> <br></br><br></br>
                    <input name="headshot_link" type="text" placeholder="enter link to headshot" value={newComedian["headshot_link"]} onChange={changeHandler} /> <br></br><br></br>
                    <input name="website" type="text" placeholder="enter personal website" value={newComedian["website"]} onChange={changeHandler} /> <br></br><br></br>
                    <input name="city" type="text" placeholder="enter city" value={newComedian["city"]} onChange={changeHandler} /> <br></br><br></br>
                    <input name="genre" type="text" placeholder="enter genre" value={newComedian["genre"]} onChange={changeHandler} /> <br></br><br></br>
                </form> */}
    
                <FormControl>
                    <form className={classes.root} noValidate autoComplete="off" onSubmit={comedianSubmitHandler}>
                        <TextField id="standard-basic" name="name" label="Name" value={newComedian.name} onChange={changeHandler} />
                        <TextField id="standard-basic" name="email" label="Email" value={newComedian.email} onChange={changeHandler} />
                        <TextField id="standard-basic" name="password" label="Password" value={newComedian.password} onChange={changeHandler} />
                        <TextField id="standard-basic" name="website" label="Website" value={newComedian.website} onChange={changeHandler} />
                        <TextField id="standard-basic" name="headshot_link" label="Link to Headshot" value={newComedian.headshot_link} onChange={changeHandler} />
                        <TextField id="standard-basic" name="city" label="City" value={newComedian.city} onChange={changeHandler} />
                        <TextField id="standard-basic" name="genre" label="Genre" value={newComedian.genre} onChange={changeHandler} />
                        <Button type="submit">Submit</Button>
                        {/* <TextField id="filled-basic" label="Filled" variant="filled" />
                    <TextField id="outlined-basic" label="Outlined" variant="outlined" /> */}
                    </form>
                </FormControl>
    
                
            </div>
        
        }
        </>
        
    )
}

const mdp = (dispatch) => {
    return { postComic: (comedianObj) => dispatch(addComic(comedianObj)) }
}

export default connect(null, mdp)(SignupComedian)