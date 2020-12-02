import React, {Component} from "react"
import { connect } from "react-redux"
import ComedianPreview from "../Components/ComedianPreview"

class FavComics extends React.Component {
    
    render(){
        console.log("fav comics props", this.props)
        // const favComics = this.props.fan.comedians
        
        return (
            <>
            <h1>fav comics</h1>
            {this.props.fan ? 
                this.props.fan.comedians.map(comedian => <ComedianPreview key={comedian.id} comedian={comedian} />) 
            : 
            <p>no comics favorited</p>

            }
            
            </>
        )
    }
    
}
const msp = state => {
    return {currentUser: state.currentUser}
}
export default connect(msp)(FavComics)