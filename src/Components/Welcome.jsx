import React, { Component } from "react"
import { ToggleButton, ToggleButtonGroup } from "@material-ui/lab"
import ButtonGroup from "../Containers/ButtonGroup"
import { connect } from "react-redux"

function Welcome(props){

    console.log("welcome page props", props)

    const redirect = () => {
        props.routerProps.history.push(`/fans/${props.currentUser.id}`)
    }
    return(
        <div className="welcome-page">
            <h1>ShowMe</h1>
            <h2>The Independent Comedy App</h2>
            <br></br>
            <h3>I am a:</h3>
            <ButtonGroup redirect={redirect} />
        </div>
            
    )
}

const msp = (state) => {
    return {currentUser: state.currentUser}
}

export default connect(msp)(Welcome)