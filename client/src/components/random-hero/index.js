import React, { useState, useEffect, useContext } from "react";
import { HeroMatchup } from "..";
import './style.css';

import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import { RequestContext } from "../../contexts/RequestContext";

const useStyles = makeStyles((theme) => ({
      root: {
        '& > *': {
          margin: theme.spacing(1),
        },
      },
    }));

export default function RandomHero(props) {
    const { 
      heroData, 
      currentRandomHero, 
      getRandomHero,
      getRandomHeroByType
    } = useContext(RequestContext)

    const [current, setCurrent] = useState(0);
    const [heroes, setHeroData] = useState(heroData);
    const [randomNum, setRandomNum] = useState(null);

    /*function getNumber(max, type) {
      // Generate random number
      var num = Math.floor(Math.random() * Math.floor(max)) + 1;
      setRandomNum(num);
      getHeroName(num, type);
    }
  
    function getHeroName(num, type) {
      var name;
      var heroList = [];
    
      // Create array from the heroes object
      var heroesArr = Object.entries(heroes);
    
      // Fill new array with heroes of the selected type
      heroesArr.forEach((hero, i) => {
        if (type !== "all") {
          if (hero[1].type === type) {
            heroList.push(heroesArr[i]);
          }
        } else {
          heroList.push(heroesArr[i]);
        }
      });
    
      // Set name
      name = heroList[num - 1][0];

      setCurrentHero({
          name: name,
          matchups: Object.entries(heroes[name].counters)
      });
    }*/


    const btnClasses = useStyles();

  return (
    <div className="random-hero__container">
      <div className="btns-container __title" >
        <div>
          <h3 className='random-hero__title __title'>Random Hero</h3>
          {
            !currentRandomHero ? '':
              <h3 className='random-hero__title-name'>{currentRandomHero.name}</h3>
          }
        </div>
        
        <div id="random-btns" className={btnClasses.root}>
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