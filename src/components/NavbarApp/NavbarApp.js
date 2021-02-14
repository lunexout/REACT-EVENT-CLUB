import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

import CategoryOutlinedIcon from '@material-ui/icons/CategoryOutlined';

import './NavbarApp.css'
import {Link} from 'react-router-dom'

export default function NavbarApp(){
    return(
        <>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" 
                    // className={classes.menuButton} 
                    color="inherit" aria-label="menu">
                    <Link to="/" className='__link'>
                        <CategoryOutlinedIcon/>
                    </Link>
                    </IconButton>
                    
                    <Typography variant="h6" 
                    // className={classes.title}
                    >
                    <Link to="/" className='__link'>
                        {/* <CategoryOutlinedIcon/> */}
                        EVENTBOOK
                    </Link>
                    </Typography>
                    <div style={{margin:"auto"}}></div>
                    <Link className="__link" to="/signin"><Button color="inherit">Login</Button></Link>
                    <Link className="__link" to="/signup"><Button color="inherit">Register</Button></Link>
                </Toolbar>
            </AppBar>
        </>
    );
}