import React, {Component} from "react"
import { connect } from "react-redux"
import { getShows, getComics } from "../Redux/actions"
import ShowCard from "../Components/ShowCard"

class AllShows extends React.Component {
        
    filterShows = () => {
        return this.props.events.filter(event => event.comedian_id === this.props.comedian.id)
    }

    render(){
        let shows = this.filterShows()
        return (
            <>
                <h1>This Comedian's Shows</h1>
                {shows.map(show => <ShowCard key={show.id} venue={show.venue} show={show} />)}
            </>
        )
    }
    
}

// const mdp = (dispatch) => {
//     return { fetchShows: () => dispatch(getShows()), fetchComics: () => dispatch(getComics()) }

// }

const msp = (state) => {
    return { comedians: state.comedians, events: state.events }
}

export default connect(msp)(AllShows)