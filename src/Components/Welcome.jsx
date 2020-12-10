import React, { Component } from "react"
import { ToggleButton, ToggleButtonGroup } from "@material-ui/lab"
import ButtonGroup from "../Containers/ButtonGroup"
import { connect } from "react-redux"
import ComediansContainer from "../Containers/ComediansContainer"

function Welcome(props){

    console.log("welcome page props", props)

    const redirect = () => {
        props.routerProps.history.push(`/fans/${props.currentUser.id}`)
    }
    return(
        <div className="welcome-page">
            <h3>I am a:</h3>
            <ButtonGroup redirect={redirect} />
            <ComediansContainer />
        </div>
            
    )
}

const msp = (state) => {
    return {currentUser: state.currentUser}
}

export default connect(msp)(Welcome)