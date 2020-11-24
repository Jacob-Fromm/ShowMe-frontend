import React, {Component} from "react"
import { connect } from "react-redux"
import { getShows, getComics } from "../Redux/actions"
import ShowCard from "../Components/ShowCard"

class AllShows extends React.Component {
        
  

    // componentDidMount(){
    //     this.props.fetchShows()
    // }

    render(){
        // console.log("allshows state", this.props.fetchShows())
        // console.log("digging into props:", this.props.comedian.events)
        let shows = this.props.comedian.events
        console.log("all shows props", this.props)
        return (
            <>
                <h1>This Comedian's Shows</h1>
                {shows.map(show => <ShowCard key={show.id} venue={show.venue} />)}
            </>
        )
    }
    
}

// const mdp = (dispatch) => {
//     return { fetchShows: () => dispatch(getShows()), fetchComics: () => dispatch(getComics()) }

// }

const msp = (state) => {
    return { comedians: state.comedians, shows: state.shows }
}

export default connect(msp)(AllShows)