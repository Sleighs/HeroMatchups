import React from "react";
import './style.css';
import stateManager from "../../js/stateManager";

export default function Footer() {
    return (
        <div className='footer'>
          <div className="footer-links" style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            gap: '2rem',
            letterSpacing: '1px',
          }}>
            <div 
              style={{
                  fontSize: '1.1em',
                  letterSpacing: '1px',
                  opacity: '.5',
              }}
            >
                Hero Matchups API
            </div>
            <div style={{
              display: 'flex',
              fontSize: '1.1rem',
              opacity: '.5',
            }}>
              {`Updated: ${stateManager.date}`} 
            </div>

          </div>
            
            {/* back to top button */}
            <div className='back-to-top'
              onClick={() => {
                window.scrollTo({
                  top: 0,
                  behavior: 'smooth'
                });
              }}
              style={{
                fontSize: '.9em',
                letterSpacing: '1px',
                opacity: '.5',
            }}
            >Back to top
            </div>
          
        </div>        
    );
}