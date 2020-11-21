import React, { Component } from "react"
import { ToggleButton, ToggleButtonGroup } from "@material-ui/lab"
import ButtonGroup from "../Containers/ButtonGroup"

function Welcome(){

    return(
        <div className="welcome-page">
            <h1>ShowMe</h1>
            <h2>The Independent Comedy App</h2>
            <br></br>
            <h3>I am a:</h3>
            <ButtonGroup />
        </div>
            
    )
}

export default Welcome