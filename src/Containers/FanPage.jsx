import React, {Component, useEffect, useState} from "react"
import { connect } from 'react-redux'
import FavComics from "./FavComics"
import {getFans} from "../Redux/actions"
import ComedianPreview from "../Components/ComedianPreview"

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
    console.log("newUser: ", newUser)
    console.log("newUser2: ", newUser2)
    
    // let comics = props.currentUser.comedians.map(comic => comic)
    const comicNames = () => {
        return props.currentUser.comedians.map(comic => <h2>{comic.name}</h2>)
    }


    return(
        <>
            <h1>Welcome, {props.currentUser.name.split(" ")[0]}</h1>
            <h2>Your Favorite Comedians:</h2>
           { props.currentUser.comedians.map(comic => <ComedianPreview fan={props.currentUser} comedian={comic}/>)}
        
        </>
    )
}

const msp = state => {
    return {state: state, currentUser: state.currentUser, fans: state.fans, events: state.events}
}

const mdp = dispatch => {
    return {fetchFans: () => dispatch(getFans())}
}

export default connect(msp, mdp)(FanPage)