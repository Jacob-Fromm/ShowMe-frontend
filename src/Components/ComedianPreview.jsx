import React, { Component, useState } from 'react';
import ComedianInfo from "../Containers/ComedianInfoContainer"
import { connect } from "react-redux"
import { NavLink } from "react-router-dom"
import {followComic, getFans, setUser} from "../Redux/actions"

function ComedianPreview(props){
   console.log("comedian profile props", props)
   const followObj = {comedian_id: props.comedian.id, fan_id: props.currentUser.id}
   
   const subscribeClickHandler = e => {
        props.followComic(followObj)
   }

    return(
        <>
            <div className="profile">
                <NavLink to={`/comedians/${props.comedian.id}`}>
                    <h2>{props.comedian.name}</h2>
                    <img src={props.comedian.headshot} width="200" />
                </NavLink>
                    <p>upcoming shows:</p>
                    {props.comedian.events.map(show => <p>{show.date_time}: {show.venue}</p>)}
                    {/* <ComedianInfo /> */}
                <br></br>
                <button onClick={subscribeClickHandler}>SUBSCRIBE</button>
            </div>
            
        </>
        
    )
}

// const mdp = dispatch => {
//     return { subscribeToComic: (followObj) => dispatch(followComic(followObj)) }
// }

const msp = state => {
    return {currentUser: state.currentUser}
}

const mdp = dispatch => {
    return {followComic: (followObj) => dispatch(followComic(followObj))}
}

export default connect(msp, mdp)(ComedianPreview)
