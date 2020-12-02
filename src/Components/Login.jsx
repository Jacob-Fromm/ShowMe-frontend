import React, { useState } from "react"
import {useHistory} from "react-router-dom"
import { FormControl, FormLabel, FormHelperText, Input, InputLabel, makeStyles, TextField, Button } from '@material-ui/core';
import { connect } from "react-redux"
import {setUser, getFans} from "../Redux/actions"
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

const Login = (props) => {
    const classes = useStyles();
    let history = useHistory();
    
    const[user, setUser] = useState({
        email: "",
        password: ""
    })
    
    const formChangeHandler = (e) => {
        const { name, value } = e.target
        setUser({ ...user, [name]: value })
    }

    const loginHandler = (e) => {
        e.preventDefault()
        let foundUser = props.fans.find(fan => user.email === fan.email )
        props.loginUser(foundUser)
        history.push("/profile")
    }

    console.log("login props", props)
    

    return (
        <>
            <h2>Login</h2>
            <FormControl>
                <form className={classes.root} noValidate autoComplete="off" onSubmit={loginHandler}>
                <TextField id="standard-basic" name="email" label="email" value={user.email} onChange={formChangeHandler}/>
                <TextField id="standard-password-input" type="password" name="password" label="password" value={user.password} onChange={formChangeHandler}/>
                <Button type="submit">Submit</Button>
                </form>
            </FormControl>
        </>
        
    )
}

const msp = (state) => {
    return {fans: state.fans}
}

const mdp = (dispatch) => {
    return { loginUser: (foundUser) => dispatch(setUser(foundUser)) }
}


export default connect(msp, mdp)(Login)