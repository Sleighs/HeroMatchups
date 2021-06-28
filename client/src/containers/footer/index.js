import React, { useEffect, useState } from "react";
import './style.css';

export default function Footer() {
    return (
        <div className='footer'>
            <p style={{
                fontSize: '.75em',
                letterSpacing: '1px'
            }}>
                HeroMatchups &#169; 2021
                                       
                {/*
                    <span>By Samuel Wright</span>
                &nbsp; &nbsp; &nbsp;
                <a href='https://github.com/Sleighs/HeroMatchups' style={{color: '#C6BABD'}}>GitHub</a>
                */}
            </p>
        </div>        
    );
}