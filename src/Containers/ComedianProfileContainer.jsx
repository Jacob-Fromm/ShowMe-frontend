import React, { Component, useState } from 'react';
import ComedianInfo from "../Containers/ComedianInfoContainer"
import { connect } from "react-redux"
import { NavLink } from "react-router-dom"

function ComedianProfileContainer(props) {
    console.log("comedian profile props", props)
    return (
        <>
            <div className="profile">
                    <h2>{props.comedian.name}</h2>
                    <img src={props.comedian.headshot} width="200" height="200" />
                    {/* <ComedianInfo /> */}
            </div>
            <div className="edit-form">
                <form className="edit-form">
                    <input type="text" name="name" placeholder="enter name"></input>
                </form>
            </div>

        </>

    )
}

export default ComedianProfileContainer