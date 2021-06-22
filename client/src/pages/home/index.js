import React, { useContext, useEffect, useState } from "react";
import "./style.css";
import { Footer, Header, Navbar } from "../../containers";
import { MatchupTable, HeroProfile, RandomHero } from "../../components";
import stateManager from "../../js/stateManager";

export default function Home() {
  const [alert, setAlert] = useState(true);
  
  useEffect(()=>{
    //console.log(stateManager.game);
  })

  return (
    <div className="home">
        <Header />
        <div style={{
          width: '90%',
          maxWidth: '1080px',
          backgroundColor: 'white',
          boxShadow: '0px 0px 5px .5px rgba(153, 153, 153, 0.4)',
          padding: '10px 15px',
          margin: 'auto'
        }}>
          <RandomHero />
          <hr class="home-hr"/>
          <HeroProfile />
          <MatchupTable />
        </div>
        <Footer />
    </div>
  );
}
