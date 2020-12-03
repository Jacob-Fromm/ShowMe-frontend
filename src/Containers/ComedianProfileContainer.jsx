import React, { Component, useState } from 'react';
import ComedianInfo from "../Containers/ComedianInfoContainer"
import { connect } from "react-redux"
import { NavLink } from "react-router-dom"
import NewShowForm from "../Components/NewShowForm"
import AllShows from "./ShowsContainer"
import { getShows, getComics } from "../Redux/actions"


class ComedianProfileContainer extends React.Component {
    // console.log("comedian profile props", this.props)

   
    render(){
        
        
        return (
            <>
                <div>
                    <h2>{this.props.comedian.name}</h2>
                    <img src={this.props.comedian.headshot} width="200" />
                    {/* <ComedianInfo /> */}
                </div>
                {/* <div className="edit-form">
                    <form className="edit-form">
                        <input type="text" name="name" placeholder="enter name"></input>
                    </form>
                </div> */}
                <div className="new-show-form">
                    <NewShowForm comedian={this.props.comedian} />
                </div>
                <div className="list-of-shows">
                    <AllShows comedian={this.props.comedian} />
                </div>

            </>

        )
    }
    
}

const mdp = (dispatch) => {
    return { fetchShows: () => dispatch(getShows()), fetchComics: () => dispatch(getComics()) }

}

const msp = (state) => {
    return { comedians: state.comedians, events: state.events }
}

export default connect(msp, mdp)(ComedianProfileContainer)