import React, {Component} from "react"
import { connect } from 'react-redux'
import FavComics from "./FavComics"

function FanPage(props){
    let user = props.currentUser
    console.log("user in fanpage", user)
    return(
        <>
            <h1>Welcome, {user.name.split(" ")[0]}</h1>
            <h2>Your Favorite Comedians:</h2>
            <FavComics fan={user}/>
        
        </>
    )
}

const msp = state => {
    return {state: state, currentUser: state.currentUser}
}

export default connect(msp)(FanPage)