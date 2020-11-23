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

class App extends React.Component {

  state = {
    currentUser: {},
    isComedianLoggedIn: false,
    api: []
  }

  componentDidMount = () => {
    fetch("http://localhost:3000/api/v1/comedians")
      .then(response => response.json())
      .then(data => this.setState({
        api: data
      }))
       
  }

  // fetch('http://localhost:3000/api/v1/fans', {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json',
  //     Accept: 'application/json'
  //   },
  //   body: JSON.stringify({
  //     fan: {
  //       name: "sean padden",
  //       email: "seanp@gmail.com",
  //       password: "sean",
  //     }
  //   })
  // })
  //   .then(r => r.json())
  //   .then(console.log)
  comedianSignupSubmitHandler = (newUser) => {
    console.log("new user in app.js", newUser)
    fetch("http://localhost:3000/api/v1/comedians", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "accept": "application/json"
      },
      body: JSON.stringify({
        comedian: {
          name: newUser.name,
          email: newUser.email,
          password: newUser.password,
          personal_website: newUser.website,
          city: newUser.city
        }
      })
    })
      .then(r => r.json())
      .then(user => {
        this.setState({ currentUser: user, isComedianLoggedIn: true })
      })
  }
  
  render(){
      console.log("state in app", this.state.api)
      if (this.state.isComedianLoggedIn) {
        return <Redirect to="/comedian_profile" />
      }
      return (
        <>
        <div className="header">
            <Header />
        </div>
        <Switch>
          <Route exact path="/" render={() => <Welcome /> } />
          <Route path="/signup" render={() => <SignupComedian signupHandler={this.comedianSignupSubmitHandler} />}/>
          <Route path="/comedians" render={() => <ComediansContainer api={this.state.api} /> } />
        </Switch>
        </>
      );
  }
  
}

export default withRouter(App)
