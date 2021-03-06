import React, {useState, useEffect} from "react"
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {useHistory} from "react-router-dom" 
import { connect } from "react-redux"
import { loginUser } from "../Redux/actions"


function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://jakefrommphotography.com/">
                ShowMe
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
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

function NewLogin(props) {
    const classes = useStyles();
    const history = useHistory();

    const [user, setUser] = useState({
        email: "",
        password: ""
    })

    // const [user2, setUser2] = useState(props.currentUser)

    const formChangeHandler = (e) => {
        const { name, value } = e.target
        setUser({ ...user, [name]: value })
       
    }
    
    const submitLoginHandler = (e) => {
        e.preventDefault()
        props.login(user)
        
    }


    // useEffect(() => {
    //     setUser2(props.currentUser)
    //     if (user2) {
    //         localStorage.setItem("token", user.jwt)
    //         // history.push("/profile")
    //     }
    // })

    // console.log("useEffect user2: ", user2)
    // console.log("login user2? ", !!user2)
    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <InsertEmoticonIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign In
        </Typography>
                <form onSubmit={submitLoginHandler}className={classes.form} noValidate>
                    <TextField
                        value={user.email}
                        onChange={formChangeHandler}
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                    />
                    <TextField
                        value={user.password}
                        onChange={formChangeHandler}
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                    />
                    {/* <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label="Remember me"
                    /> */}
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Sign In
          </Button>
                    <Grid container>
                        {/* <Grid item xs>
                            <Link href="#" variant="body2">
                                Forgot password?
              </Link>
                        </Grid> */}
                        <Grid item>
                            <Link href="/signup" variant="body2">
                                {"Don't have an account? Sign Up"}
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
            <Box mt={8}>
                <Copyright />
            </Box>
        </Container>
    );
}

const mdp = dispatch => {
    return {login: (userObj) => dispatch(loginUser(userObj))}
}

const msp = state => {
    return {currentUser: state.currentUser}
}

export default connect(msp, mdp)(NewLogin)