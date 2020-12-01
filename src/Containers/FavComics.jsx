import React, {Component} from "react"
import { connect } from "react-redux"
import ComedianPreview from "../Components/ComedianPreview"

class FavComics extends React.Component {
    
    render(){
        console.log("fav comics props", this.props)
        const favComics = this.props.currentUser.comedians
        
        return (
            <>
            <h1>fav comics</h1>
            {favComics.length === 0 ? 
                <p>no comics favorited</p>
            : 
                favComics.map(comedian => <ComedianPreview key={comedian.id} comedian={comedian} />) 

            }
            
            </>
        )
    }
    
}
const msp = state => {
    return {currentUser: state.currentUser}
}
export default connect(msp)(FavComics)