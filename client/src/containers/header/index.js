import React, { useEffect, useState } from "react";
import './style.css';

export default function Header() {
    useEffect(()=>{
        // Get random color for link hover
        
        var randomColor = (max) => {
            var colorVal = 'rgb(1, 182, 228, .6)';
            var randomInt = Math.floor(Math.random() * max);

            switch(randomInt) {
                case 0:

                    break;
                case 1:
                    colorVal = 'rgb(226, 13, 59, .6)';//'rgb(255, 180, 193)';
                    break;
            }

            return colorVal;
        };

        var css = '.header a:hover{ color:' + randomColor(2) +' }';
        var style = document.createElement('style');

        if (style.styleSheet) {
            style.styleSheet.cssText = css;
        } else {
            style.appendChild(document.createTextNode(css));
        }

        document.getElementsByClassName('header')[0].appendChild(style);
    });

    return (
        <div className='header'>
            <a 
              className='header-link'
              href='/' 
              style={{
                  fontSize: '.9em',
                  display: 'block',
                  testDecoration: 'none',
                  margin: 'auto'
              }}
              
            >                       
                Hero Matchups
            </a>
        </div>        
    );
}