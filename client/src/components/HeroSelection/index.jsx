import React, { useContext, useEffect, useState } from "react";
import { HeroMatchup } from "..";
import './style.css';

import heroPics from '../../resources/hero-pics';
import { RequestContext } from "../../contexts/RequestContext";
import getHeroName from "../../js/getHeroName";

export default function HeroSelection(props) {
  const {
    apiUrl,
    currentHero,
    getSingleHero,
    heroData
  } = useContext(RequestContext)


  const [highlightedHero, setHighlightedHero] = useState(null);

  function getHeroData(e, name){
    getSingleHero(name)
    setHighlightedHero(getHeroName(name, false))
  }

  useEffect(()=>{
    var elements = document.querySelectorAll(`.hero-profile__hero-thumbnail`)
    elements.forEach(item => item.classList.remove('icon-highlight'))

    if (highlightedHero){
      var updateEle = document.querySelectorAll(`.hero-profile__hero-thumbnail[title=${highlightedHero}]`)
      updateEle[0].classList.add('icon-highlight')
    }
  }, []);
  

  return (
    <div className="hero-profile"> 
      <p className="hero-profile__text3" >
        Click hero icons to view matchups
      </p>     

      {heroData &&
      <div id="hero-profile__pics-container">
        <div className="hero-profile__hero-section">
          <div className="hero-profile__hero-row-title">Tank</div>
          {heroData.map((hero, index) => {
            //console.log('tank hero ' + index, hero)
            if (hero.type === 'tank'){
              return(
                <HeroIcon 
                  name={getHeroName(hero.name, true)} 
                  src={heroPics[getHeroName(hero.name, false)]}
                  handleClick={(e)=>{getHeroData(e, getHeroName(hero.name, false))}}
                  index={index}
                  heroTitle={getHeroName(hero.name, false)}
                  key={index}
                />)
            }
          })}
        </div>

        <div className="hero-profile__hero-section">
          <div className="hero-profile__hero-row-title">Damage</div>
          {heroData.map((hero, index) => {
            if (hero.type === 'damage'){
              return(
                <HeroIcon 
                  name={getHeroName(hero.name, true)} 
                  src={heroPics[getHeroName(hero.name, false)]}
                  handleClick={(e)=>{getHeroData(e, getHeroName(hero.name, false))}}
                  index={index}
                  heroTitle={getHeroName(hero.name, false)}
                  key={index}
                />)
            }
          })}
        </div>

        <div className="hero-profile__hero-section">
          <div className="hero-profile__hero-row-title">Support</div>
          {heroData.map((hero, index) => {
            if (hero.type === 'support'){
              return(
                <HeroIcon 
                  name={getHeroName(hero.name, true)} 
                  src={heroPics[getHeroName(hero.name, false)]}
                  handleClick={(e)=>{getHeroData(e, getHeroName(hero.name, false))}}
                  index={index}
                  heroTitle={getHeroName(hero.name, false)}
                  key={index}
                />)
            }
          })}
        </div>
      </div>}

      {!currentHero 
        ? 
          <div style={{height: 155, width: '100%',}}></div> 
        : 
          <HeroMatchup 
            heroName={currentHero.name} 
            matchups={ currentHero && currentHero.counters ? Object.entries(currentHero.counters) : []} 
            archetypes={currentHero.archetype}
            id={"-profile"} 
            type={"-profile"}
          />
      }

      <div id="hero-profile__hero-select">
        <label 
          htmlFor="hero-select" 
          id="choose-hero-text" 
        >
          {'Choose a hero: '}
        </label>
        <select 
          name="hero-selection" 
          id="hero-selection" 
          onChange={(event)=>{
            getHeroData(event, event.target.value);
          }}
        >
          {heroData && heroData.map((hero) => (
            <option
              key={hero.name}
              value={getHeroName(hero.name, false)}
            >
              {getHeroName(hero.name, true)}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

const HeroIcon = (props) => {
  const {
    src, 
    name, 
    handleClick,
    index,
    heroTitle
  } = props
  
  return(
    <img className="hero-profile__hero-thumbnail"
      onClick={handleClick}
      src={src} 
      alt={name} 
      title={heroTitle}
      key={index}
    />
  )
}