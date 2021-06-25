import React, { useContext, useEffect, useState } from "react";
import "./style.css";
import { Footer, Header, Navbar } from "../../containers";
import { MatchupTable, HeroProfile, RandomHero } from "../../components";

export default function Home() {
  return (
    <div className="home">
        <Header />
        <div className='home__body'>
          <div className='home__header-image'></div>
          <HeroProfile />
          <hr class="home-hr"/>
          
          <RandomHero />
          <MatchupTable />
        </div>
        <Footer />
    </div>
  );
}
