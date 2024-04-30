import React from "react";
import './style.css';

export default function Footer() {
    return (
        <div className='footer' style={{
          display: 'flex',
          justifyContent: 'center',
        }}>
            <p 
              onClick={() => {
                window.scrollTo({
                  top: 0,
                  behavior: 'smooth'
                });
              }}
              style={{
                  fontSize: '.9em',
                  letterSpacing: '1px',
              }}
            >
                Hero Matchups API &#169; 2024
            </p>
            {/* back to top button 
            <div className='back-to-top'
              onClick={() => {
                window.scrollTo({
                  top: 0,
                  behavior: 'smooth'
                });
              }}
            >Back to top
            </div>*/}
        </div>        
    );
}