import logo from './logo.svg';
import 'fontsource-roboto';
import { Typography } from '@material-ui/core';
import './App.css';
import React, {Component} from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  withRouter
} from "react-router-dom"; 
import Welcome from "./Components/Welcome"
import SignupComedian from './Components/SignupComedian';
import ComedianProfile from './Components/ComedianPreview';
import ComediansContainer from "./Containers/ComediansContainer"
import Header from "./Components/Header"
import { connect } from 'react-redux'
import { getShows, getComics, getFans, setUser } from "./Redux/actions"
import Links from "./Components/NavBar"
import AppWrapper from "./Components/AppWrapper"
import Login from "./Components/Login"
import FanPage from "./Containers/FanPage"
import NewLogin from "./Components/NewLogin"
import NewSignup from "./Components/NewSignup"
import shadows from '@material-ui/core/styles/shadows';

class App extends React.Component {

  state = {
    currentUser: this.props.currentUser,
    isLoggedIn: this.props.isLoggedIn,
    api: []
  }

  componentDidMount(){
    // this.props.fetchShows()
    // this.props.fetchComics()
    // this.props.fetchFans()
    const token = localStorage.getItem("token")
    if (token) {
      fetch("http://localhost:3000/api/v1/profile", {
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
      })
        .then(resp=>resp.json())
        .then(data => this.props.saveUser(data))
    } else {
      this.props.history.push("/login")
    }
  }

  logoutHandler = () => {
    localStorage.removeItem("token")
    this.props.history.push("/")
    this.props.saveUser(null)
  }

  
  render(){
    
      console.log("redux state in app", this.props.state)
      console.log("current user", this.props.state.currentUser)
      return (
        <>
        <div className="header">
            <Links clickHandler={this.logoutHandler}/>
            <Header />
        </div>
        <Switch>
          <Route path="/comedians" render={() => <ComediansContainer /> } />
          <Route path="/welcome" render={(routerProps) => < Welcome routerProps={routerProps} />} />
          <Route path="/profile" render={
              this.props.state.currentUser ? 
                () => <FanPage />
              : 
                () => <Redirect to="/login" />
              }/>
          <Route path="/login" render={() => <NewLogin />} />
          <Route path="/signup" render={(routerProps) => <NewSignup routerProps={routerProps}/>} />
          <Route exact path="/" component={AppWrapper} />
        </Switch>

        </>
      );
  }
  
}

const mdp = (dispatch) => {
  return { fetchShows: () => dispatch(getShows()), 
    fetchComics: () => dispatch(getComics()), 
    fetchFans: () => dispatch(getFans()),
    saveUser: (userObj) => dispatch(setUser(userObj)) }

}

const msp = (state) => {
  return {state: state}
}

export default withRouter(connect(msp, mdp)((App)))
