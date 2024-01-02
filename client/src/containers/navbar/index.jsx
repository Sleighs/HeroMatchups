import React, { useState, useContext, useEffect } from "react";
import "./style.css";
import { Link } from 'react-router-dom';

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
