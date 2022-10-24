import React, { useState, useEffect, useContext } from "react";
import { HeroMatchup } from "..";
import './style.css';
import { RequestContext } from "../../contexts/RequestContext";
import heroPics from "../../resources/overwatch-assets";

export default function RandomHero(props) {
    const { 
      heroData, 
      currentRandomHero, 
      getRandomHero,
      getRandomHeroByType
    } = useContext(RequestContext)

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
          <h3 className='random-hero__title __title'>Random Hero</h3>
        </div>
        
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
        {
            !currentRandomHero ? '':
              <div className="random-hero-thumbnail__container">
                <img 
                  className='random-hero-thumbnail__image'
                  title={currentRandomHero.name} 
                  src={getHeroPic(currentRandomHero.name)}
                  alt=''
                />
                <h3 className='random-hero__title-name'>
                  {currentRandomHero.name}
                </h3>
              </div>
          }
          
      </div>

      <div>
        {!currentRandomHero 
          ? <div style={{height: 125,}}></div> 
          : <HeroMatchup 
              heroName={currentRandomHero.name} 
              matchups={Object.entries(currentRandomHero.counters)} 
              id={"-random"} 
              type={"-random"}
          />}
      </div>
    </div>
  );
}