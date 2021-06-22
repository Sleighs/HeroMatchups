import React, { useEffect, useState } from "react";
import './style.css';

export default function Header() {
    return (
        <div className='header'>
            <p style={{fontSize: '.8em'}}>                       
                <span>HeroMatchups</span>
            </p>
        </div>        
    );
}