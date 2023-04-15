import React from "react";
import './style.css';

export default function Footer() {
    return (
        <div className='footer'>
            <p style={{
                fontSize: '.85em',
                letterSpacing: '1px'
            }}>
                Hero Matchups API &#169; 2023
            </p>
        </div>        
    );
}