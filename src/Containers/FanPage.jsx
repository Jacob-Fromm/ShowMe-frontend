import React, {Component} from "react"
import { connect } from 'react-redux'

function FanPage(props){
    return(
        <h1>Fan Page</h1>
    )
}

const msp = state => {
    return {state: state}
}

export default connect(msp)(FanPage)