import React from 'react'
import './HomeApp.css'

import {useHistory} from 'react-router-dom'
import Navbar from './../NavbarApp/NavbarApp'

export default function HomeApp(){
    const history = useHistory()

    return(
        <>
        {localStorage.getItem('logged') == 'true' ?
        history.push('/eventbook') : <> return(
            <>
                <Navbar/>
                <h1>home app</h1>
                <h2>lovee</h2>
            </>
        );</>
            
        }
        </>
    )
}