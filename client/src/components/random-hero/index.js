import React, { useEffect, useContext } from "react";
import { HeroMatchup } from "..";
import './style.css';
import { RequestContext } from "../../contexts/RequestContext";
import heroPics from "../../resources/overwatch-assets";
import { ThemeContext } from "../../contexts/ThemeContext";

export default function RandomHero(props) {
    const { 
      currentRandomHero, 
      getRandomHero,
      getRandomHeroByType
    } = useContext(RequestContext)
    const { theme } = useContext(ThemeContext)

    function getHeroPic(name){
      var hero = name;

      if (name === "D.Va"){
        hero = "Dva"
      } else if (name === "Soldier: 76"){
          hero = "Soldier76"
      } else if (name === "Junker Queen"){
          hero = "JunkerQueen"
      } else if (name === "Wrecking Ball"){
          hero = "WreckingBall"
      } else if (name === "Torbjörn"){
          hero = "Torbjorn"
      } else if (name === "McCree"){
          hero = "Cassidy"
      } 

      var propName = heroPics[hero]

      return propName
    }

  useEffect(()=>{
    getHeroPic("Reaper")
  }, [])

  return (
    <div className="random-hero__container">
      <div className="btns-container __title" >
        <div>
          <h2 className={`random-hero__title __title section-heading ${theme}__title`}>Random Hero API</h2>
        </div>

        <section className="resources__section">
          <h3 className="resources__route-style">/random</h3> 
          <h3 className="resources__route-style">/random/:type</h3>
          <ul className="resources__list">
            <li><strong>Description:</strong> Gets a random character. The "/type" tag retrieves a random hero of the given type, choices include "tank", "damage" and "supoort".  </li>
            <li><strong>URL:</strong> https://hero-matchups-api.herokuapp.com/random</li>
            <li><strong>Method:</strong> GET</li>
          </ul>
        </section>
        
        <div id="random-btns">
          <button 
            className="random-hero__btn" 
            onClick={()=>{getRandomHeroByType('damage')}}
          >
            Damage
          </button>
          <button 
            className="random-hero__btn" 
            onClick={()=>{getRandomHeroByType('tank')}}
          >
            Tank
          </button>
          <button 
            className="random-hero__btn" 
            onClick={()=>{getRandomHeroByType('support')}}
          >
            Support
          </button>
          <button 
            className={'random-hero__btn hero-btn'} 
            onClick={()=>{getRandomHero()}}
            >
            All Heroes
          </button>
        </div>
        {!currentRandomHero ? '':
          <div className="random-hero-thumbnail__container">
            <img 
              className='random-hero-thumbnail__image'
              title={currentRandomHero.name} 
              src={getHeroPic(currentRandomHero.name)}
              alt=''
            />
            <div className='random-hero__title-name'>
              <h3>{currentRandomHero.name}</h3>
            </div>
          </div>}
      </div>

      <div>
        {!currentRandomHero 
          ? <div style={{height: 225,}}></div> 
          : <HeroMatchup 
              heroName={currentRandomHero.name} 
              matchups={Object.entries(currentRandomHero.counters)} 
              archetypes={currentRandomHero.archetype}
              id={"-random"} 
              type={"-random"}
          />}
      </div>
    </div>
  );
}