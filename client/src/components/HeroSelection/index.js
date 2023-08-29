import React, { useContext, useEffect, useState } from "react";
import { HeroMatchup } from "..";
import './style.css';

import heroPics from '../../resources/overwatch-assets';
import { RequestContext } from "../../contexts/RequestContext";
import { ThemeContext } from "../../contexts/ThemeContext";
import getHeroName from "../../js/getHeroName";

export default function HeroSelection(props) {
  const {
    apiUrl,
    currentHero,
    getSingleHero,
    heroData
  } = useContext(RequestContext)

  const { theme } = useContext(ThemeContext)

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
  });
  

  return (
    <div className="hero-profile">      
      <h2 className={`section-heading ${theme}__title`}>Resources</h2>
      
      <p style={{textAlign: '', fontSize: '1.2em' }}>
        <strong>Base URL: </strong>{apiUrl}
      </p>
      
      <section className="resources__section">
        <h3 className="resources__route-style">/heroes</h3>
        <h3 className="resources__route-style">/heroes/:heroName</h3>
        <ul className="resources__list">
          <li><strong>Description:</strong> Retrieves information for all available heroes in JSON. The "heroName" tag retrieves details for only the specified hero.</li>
          <li className='api-url'><span><strong>URL:</strong> {apiUrl}/heroes</span></li>
          <li><strong>Method:</strong> GET</li>
        </ul>
      </section>
      
      <section className="resources__section">
        <h3 className="resources__route-style">/type/:type</h3>
        <ul className="resources__list">
          <li><strong>Description:</strong> Retrieves information for all heroes of the selected type.</li>
          <li><span><strong>Options:</strong> tank, damage, support</span></li>
          <li className='api-url'><strong>URL:</strong> {apiUrl}/type/:type</li>
          <li><strong>Method:</strong> GET</li>
        </ul>
      </section>

      <section className="resources__section">
        <h3 className="resources__route-style">/archetype</h3>
        <h3 className="resources__route-style">/archetype/:archetypeName</h3>
        <ul className="resources__list">
          <li>
            <span><strong>Description:</strong> The "/archetype" route lists all available hero archetypes. The "archetypeName" tag retrieves all heroes of the selected archetype.</span>
            <br/>
          </li>

          <li><span><strong>Options:</strong></span>
            <ul>
              <li><strong>Tank:</strong> Anchor, Initiator, First Responder, Damage Heavy</li>
              <li><strong>Damage: </strong> Anchor, Flanker, Sniper, Scrapper, Specialist</li>
              <li><strong>Suppport: </strong>Main Healer, Pocket Healer, Utility</li>
            </ul>
          </li>
          
          <li className='api-url'>
            <span><strong>URL:</strong> {apiUrl}/archetype/:archetypeName</span>
          </li>
          <li><strong>Method:</strong> GET</li>
        </ul>
      </section>
      
      <p className="hero-profile__text3" >
        Click hero icons to view matchups
      </p>
      
      {heroData &&
      <div id="hero-profile__pics-container">
        <div className="hero-profile__hero-section">
          <div className="hero-profile__hero-row-title">Tank</div>
          {heroData.map((hero, index) => {
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
            matchups={Object.entries(currentHero.counters)} 
            archetypes={currentHero.archetype}
            id={"-profile"} 
            type={"-profile"}
          />
      }

      <div id="hero-profile__hero-select">
        <label 
          for="hero-select" 
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
            <option value="Ana">Ana</option>
            <option value="Ashe">Ashe</option>
            <option value="Baptiste">Baptiste</option>
            <option value="Bastion">Bastion</option>
            <option value="Brigitte">Brigitte</option>
            <option value="Dva">D.Va</option>
            <option value="Doomfist">Doomfist</option>
            <option value="Echo">Echo</option>
            <option value="Genji">Genji</option>
            <option value="Hanzo">Hanzo</option>
            <option value="Illari">Illari</option>
            <option value="Junker Queen">Junker Queen</option>
            <option value="Junkrat">Junkrat</option>
            <option value="Kiriko">Kiriko</option>
            <option value="Lifeweaver">Lifeweaver</option>
            <option value="Lucio">Lucio</option>
            <option value="Cassidy">{"Cassidy (McCree)"}</option>
            <option value="Mei">Mei</option>
            <option value="Mercy">Mercy</option>
            <option value="Moira">Moira</option>
            <option value="Orisa">Orisa</option>
            <option value="Pharah">Pharah</option>
            <option value="Reaper">Reaper</option>
            <option value="Reinhardt">Reinhardt</option>
            <option value="Roadhog">Roadhog</option>
            <option value="Sigma">Sigma</option>
            <option value="Sojourn">Sojourn</option>
            <option value="Soldier76">Soldier: 76</option>
            <option value="Sombra">Sombra</option>
            <option value="Symmetra">Symmetra</option>
            <option value="Torbjorn">Torbjorn</option>
            <option value="Tracer">Tracer</option>
            <option value="Widowmaker">Widowmaker</option>
            <option value="Winston">Winston</option>
            <option value="WreckingBall">Wrecking Ball</option>
            <option value="Zarya">Zarya</option>
            <option value="Zenyatta">Zenyatta</option>
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