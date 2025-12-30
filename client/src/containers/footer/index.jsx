import React from "react";
import './style.css';

export default function Footer() {
    const currentYear = new Date().getFullYear();
    
    return (
        <div className='footer'>
            <div className="footer-content">
                {/* <p className="footer-quote">
                    "You create your own reality" - Play with intention. Win with consciousness.
                </p> */}
                <p className="footer-copyright">
                    {/* Hero Matchups &#169; {currentYear} · Made with ❤️ for the OW2 Community */}
                    Hero Matchups &#169; {currentYear}
                </p>
                <p className="footer-credits">
                    Created by <a href="http://samuelwright.dev" target="_blank" rel="noreferrer">Samuel Wright</a>
                </p>
            </div>
        </div>        
    );
}