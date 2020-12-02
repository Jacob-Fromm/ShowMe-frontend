import React, {Component, useEffect, useState} from "react"
import { connect } from 'react-redux'
import FavComics from "./FavComics"
import {getFans} from "../Redux/actions"

function FanPage(props){
    const [newUser, setUser] = useState(
        props.currentUser
    )
    let newUser2 = props.state.fans.filter(user => user.id === props.currentUser.id)

    useEffect(() => {
        setUser(newUser2)
        console.log(newUser)
    }, [props.state.fans])
    console.log("props in fanpage", props)
    return(
        <>
            <h1>Welcome, {props.currentUser.name.split(" ")[0]}</h1>
            <h2>Your Favorite Comedians:</h2>
            <FavComics fan={newUser[0]}/>
        
        </>
    )
}

const msp = state => {
    return {state: state, currentUser: state.currentUser, fans: state.fans}
}

const mdp = dispatch => {
    return {fetchFans: () => dispatch(getFans())}
}

export default connect(msp, mdp)(FanPage)