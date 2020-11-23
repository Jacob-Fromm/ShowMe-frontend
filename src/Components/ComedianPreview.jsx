import React, { Component, useState } from 'react';
import ComedianInfo from "../Containers/ComedianInfoContainer"
import { connect } from "react-redux"
import { NavLink } from "react-router-dom"

function ComedianPreview(props){
   console.log("comedian profile props", props)
    return(
        <>
            <div className="profile">
                <NavLink to={`/comedians/${props.comedian.id}`}>
                    <h2>{props.comedian.name}</h2>
                    <img src={props.comedian.headshot} width="200" height="200" />
                    {/* <ComedianInfo /> */}
                </NavLink>
            </div>
            
        </>
        
    )
}

export default ComedianPreview
