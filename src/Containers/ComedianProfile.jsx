import React, { Component, useState } from 'react';
import ComedianInfo from "./ComedianInfoContainer"

function ComedianProfile(){
    return(
        <>
            <h1>Comedian Profile Page</h1>
            <div className="profile-sidebar">
                <ComedianInfo />
            </div>
            
        </>
        
    )
}

export default ComedianProfile