import React, { useContext, useEffect, useState } from "react";
import "./style.css";
import { Navbar } from "../../containers";
import { MatchupTable, HeroProfile, RandomHero } from "../../components";

export default function Home() {
  const [alert, setAlert] = useState(true);

  return (
    <div className="home">
        <div style={{
          width: '90%',
          maxWidth: '1080px',
          backgroundColor: 'white',
          boxShadow: '0px 0px 5px 1px rgba(153, 153, 153, 0.4)',
          padding: '10px 15px',
          margin: 'auto'
        }}>
          <RandomHero />
          <hr class="home-hr"/>
          <HeroProfile />
          <MatchupTable />
        </div>
        
    </div>
  );
}
