import React, {useEffect, useState} from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import CategoryOutlinedIcon from "@material-ui/icons/CategoryOutlined";


import { Link } from "react-router-dom";

import "./LoggedNavbarApp.css";


import UserModal from './../UserModalApp/UserModalApp'

export default function LoggedNavbarApp() {

  return (
    <>
      <AppBar position="static">
        <Toolbar>

          <IconButton edge="start" color="inherit" aria-label="menu" >
            <Link to="/" className="__link">
              <CategoryOutlinedIcon/>
            </Link>
          </IconButton>

          <Typography variant="h6">
            <Link to="/" className="__link">
              EVENTBOOK
            </Link>
          </Typography>

          <div style={{ margin: "auto" }}></div>

          <Button>
            <UserModal/>
          </Button>


        </Toolbar>
      </AppBar>

    </>
  );
}
