import React from 'react'
import './EventBookApp.css'

import LoggedNavbar from './../LoggedNavbarApp/LoggedNavbarApp'

export default function EventBookApp(){
    return(
        <>
            <LoggedNavbar/>
            <h1>event book</h1>
        </>
    );
}