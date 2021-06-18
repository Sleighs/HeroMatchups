import React, { useState } from "react";
import { HeroMatchup } from "..";
import heroData from "../../js/heroData";
import './style.css';

export default function HeroProfile() {
  const [currentHero, setCurrentHero] = useState(null);

  function getHeroData(name){
    setCurrentHero({
      name: name,
      matchups: Object.entries(heroData[name].counters)
    });
  }
  

  return (
    <div className="hero-profile">
        <div id="hero-pics-container"></div>

        {!currentHero ? 
          <></> :
          <HeroMatchup heroName={currentHero.name} matchups={currentHero.matchups} id={"-profile"} type={"-profile"}/>
        }

        <div id="hero-profile__hero-select">
          <label for="hero-select" id="choose-hero-text">Choose a hero: </label>
          <select name="hero-selection" id="hero-selection" onChange={(event)=>{
            getHeroData(event.target.value);
          }}>
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
              <option value="Junkrat">Junkrat</option>
              <option value="Lucio">Lucio</option>
              <option value="McCree">McCree</option>
              <option value="Mei">Mei</option>
              <option value="Mercy">Mercy</option>
              <option value="Moira">Moira</option>
              <option value="Orisa">Orisa</option>
              <option value="Pharah">Pharah</option>
              <option value="Reaper">Reaper</option>
              <option value="Reinhardt">Reinhardt</option>
              <option value="Roadhog">Roadhog</option>
              <option value="Sigma">Sigma</option>
              <option value="Soldier76">Soldier 76</option>
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