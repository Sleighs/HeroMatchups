import React, { useState, useEffect } from "react";
import { HeroMatchup } from "..";
import heroData from "../../js/heroData";
import './style.css';

import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
      root: {
        '& > *': {
          margin: theme.spacing(1),
        },
      },
    }));

export default function RandomHero() {
    const [currentHero, setCurrentHero] = useState(null);
    const [heroes, setHeroData] = useState(heroData);
    const [randomNum, setRandomNum] = useState(null);

    
  
    function getNumber(max, type) {
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
    }

    useEffect(()=>{
      
      const getFirstHero = async (number, heroType) => {
        getNumber(number, heroType);
      }

      //getFirstHero(32, 'all');

    });

    const btnClasses = useStyles();

  return (
    <div className="random-hero__container">
      <div class="alert-container">
        
      </div>

      <div id="btns-container">
        <div style={{
          height:'50px'
        }}>
        <h3 style={{
          fontSize: '14pt',
          display: 'inline-block'
        }}>{'Random Hero'}</h3>
        {
          !currentHero ? '':
            <h2 id="alert" style={{
          fontSize: '16pt',
          display: 'inline-block',
          opacity: '.8'
        }}>{ ': ' + currentHero.name + ' '}
          </h2>
        }
        </div>
  
        <div id="random-btns" className={btnClasses.root}>
            <Button className="random-hero__btn" onClick={()=>{getNumber(17, 'dps')}}>
            Damage
            </Button>
            <Button className="random-hero__btn" onClick={()=>{getNumber(8, 'tank')}}>
            Tank
            </Button>
            <Button className="random-hero__btn" onClick={()=>{getNumber(7, 'healer')}}>
            Healer
            </Button>
            <Button className={'random-hero__btn hero-btn'} onClick={()=>{getNumber(32, 'all')}}>
            All Heroes
            </Button>
        </div>
      </div>
      <div>
        {!currentHero ? 
          '' : 
          <HeroMatchup heroName={currentHero.name} matchups={currentHero.matchups} id={"-random"} type={"-random"}/>}
      </div>
    </div>
  );
}