import React, { useState, useContext, useEffect } from "react";
import "./style.css";
import firebase from 'firebase';
//import { SignInBtn, UserName, ProfilePic, Login } from "../../components";
//import { UserContext } from "../../contexts/user";
import { Link } from 'react-router-dom';
//import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
//import manager from "../../js/stateManager";
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';
import ExploreOutlinedIcon from '@material-ui/icons/ExploreOutlined';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';


export default function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar__container">
        <Link to="/" className="homepage__navTitle">HeroPick</Link>

        {/*<div className="navbar__navRight">
          <a href="/" title="Home"><HomeOutlinedIcon className="navbar__icon"/></a>
          <a to="/inbox" title="Messages"><SendOutlinedIcon className="navbar__icon"/></a>
          <a href="/movies" title="Explore"><ExploreOutlinedIcon className="navbar__icon"/></a>
          <a href="/favorites" title="Favorites"><FavoriteBorderOutlinedIcon className="navbar__icon"/></a>
          <AccountCircleOutlinedIcon className="navbar__icon"/>
  </div>*/}
      </div>
    </div>
  );
}
