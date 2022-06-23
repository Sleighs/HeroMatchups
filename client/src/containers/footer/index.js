import React, { useEffect, useState } from "react";
import './style.css';

export default function Footer() {
    return (
        <div className='footer'>
            <p style={{
                fontSize: '.75em',
                letterSpacing: '1px'
            }}>
                Hero Matchups &#169; 2021
            </p>
        </div>        
    );
}