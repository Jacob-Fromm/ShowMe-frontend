import { Redirect, Route } from 'react-router-dom'
import React, {Component} from "react"
import { connect } from 'react-redux'
import Welcome from "./Welcome"
import FanPage from "../Containers/FanPage"

class AppWrapper extends Component{
    render(){
        return(
            <> 
            {
                this.props.isLoggedIn ? 
                
                    <div>
                        
                    </div>
                 : 
                 
                 <Redirect to="/welcome" />
                 }
            </>
    
        )
    }
}

const msp = (state) => {
    return {state: state}
}

export default connect(msp)(AppWrapper)