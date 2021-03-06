import React, { useState, useEffect} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { connect } from "react-redux"
import {signupUser, loginUser} from "../Redux/actions"
import {useHistory} from "react-router-dom"

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://jakefrommphotography.com/">
        Jacob Fromm
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const SignUp = props => {
  const classes = useStyles();
  const history = useHistory();

    const [user, setUser] = useState({
        name: "",
        email: "",
        password: ""
    })

    // const [user2, setUser2] = useState(props.currentUser)

    // const validUser = () => {
    //     if (props.currentUser !== {}){
    //         history.push("/profile")
    //     }
    // }

    const formChangeHandler = (e) => {
        const { name, value } = e.target
        setUser({ ...user, [name]: value })

    }

    const submitNewUser = (e) => {
        e.preventDefault()
        console.log("newUser in signup: ", user)
        props.addUser(user)
        // props.login(user)
        setUser({
            name: "",
            email: "",
            password: ""
        })
        history.push("/login")
    }

    // useEffect(() => {
    //     setUser2(props.currentUser)
    //     if (user2) {
    //         localStorage.setItem("token", user2.jwt)
    //         history.push("/profile")
    //     }
    // })

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign Up
        </Typography>
        <form onSubmit={submitNewUser} className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12}>
              <TextField
                value={user.name}
                onChange={formChangeHandler}
                autoComplete="name"
                name="name"
                variant="outlined"
                required
                fullWidth
                id="Name"
                label="Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                value={user.email}
                onChange={formChangeHandler}
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                value={user.password}
                onChange={formChangeHandler}
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Create Account
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="/login" variant="body2">
                Already have an account? Log in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}

const mdp = dispatch => {
    return {
        addUser: (newUser) => dispatch(signupUser(newUser)),
        // login: (userObj) => dispatch(loginUser(userObj)) 
      }
}

const msp = state => {
    return {currentUser: state.currentUser}
}

export default connect(msp, mdp)(SignUp)