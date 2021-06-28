import React, { useState, useContext, useEffect } from "react";
import "./style.css";
import firebase from 'firebase';
import { Link } from 'react-router-dom';

import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';
import ExploreOutlinedIcon from '@material-ui/icons/ExploreOutlined';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';


export default function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar__container">
        <Link to="/" className="homepage__navTitle">HeroMatchups</Link>

        <div className="navbar__navRight">

        </div>
      </div>
    </div>
  );
}
