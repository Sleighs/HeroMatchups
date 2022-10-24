import React, { useContext, useEffect, useState, StyleSheet } from "react";
import "./style.css";
import { Footer, Header, Navbar } from "../../containers";
import { MatchupTable, RandomHero, HeroSelection } from "../../components";
import ow1Data from "../../js/ow1Data";
import ow2Data from "../../js/ow2Data";
import { RequestContext } from "../../contexts/RequestContext";

const Home = () => {
  const { 
    getData,
    getAllHeroes,
    getSingleHero,
    heroData,
    setHeroData
  } = useContext(RequestContext)

  var reqCount = 0;

  useEffect(()=>{
    getAllHeroes()
    reqCount = reqCount + 1
    // eslint-disable-line react-hooks/exhaustive-deps
  }, [reqCount])


  return (
    <div className="home">
        <div className='home__body'>
          <div className='home__header-image'></div>

          <div className='page-header__container' >
            <h2 className='page-header__title'>
                Hero Matchups API
            </h2>
          </div>

          <HeroSelection />
          <hr className="home-hr"/>
          <RandomHero />
          {heroData && <MatchupTable />}
        </div>
        <Footer />
    </div>
  );
}

const Testing = (props) => {
  const { 
    getData,
    getAllHeroes,
    getSingleHero,
    heroData,
    setHeroData,
    currentHero,
    setCurrentHero
  } = useContext(RequestContext)

  return(
    <div>    
      <button onClick={()=>{
        console.log(currentHero)
        }}>Get Data</button>
    </div>
  )
}

export default Home