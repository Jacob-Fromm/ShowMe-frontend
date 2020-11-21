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
  Redirect
} from "react-router-dom"; 
import Welcome from "./Components/Welcome"
import SignupComedian from './Components/SignupComedian';
import ComedianProfile from './Containers/ComedianProfile';

class App extends React.Component {

  state = {
    currentUser: {},
    isComedianLoggedIn: false
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
  if (this.state.isComedianLoggedIn) {
    return <Redirect to="/comedian_profile" />
  }
  return (
    <Switch>
      <Route exact path="/">
        <Welcome />
      </Route>
      <Route path="/signup">
        <SignupComedian signupHandler={this.comedianSignupSubmitHandler} />
      </Route>
      <Route path="/comedian_profile">
        <ComedianProfile />
      </Route>
    </Switch>

  );
}
  
}

export default App;
