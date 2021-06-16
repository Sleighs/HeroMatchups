import React, { useState, useEffect } from "react";
import { HeroMatchup } from "..";
import heroData from "../../js/heroData";

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
      })
    
      // Set counters
      console.log(currentHero);
    
      //heroCounterTable();
    }

    useEffect(()=>{
      

    });

  return (
    <div className="">
      <div class="alert-container">
        
        
      </div>

      <div id="btns-container">
        <h2 id="alert" style={{fontSize: '12pt'}}>{
          !currentHero ? 'Get Random Hero' : currentHero.name + ' '}
          <span id="num" style={{display: 'inline-block'}}>{/*!randomNum ? '' : '(' + randomNum + ')'*/}</span>
        </h2>
  
        <div id="random-btns">
            <button class="btn" onClick={()=>{getNumber(17, 'dps')}}>
            DPS
            </button>
            <button class="btn" onClick={()=>{getNumber(8, 'tank')}}>
            Tank
            </button>
            <button class="btn" onClick={()=>{getNumber(7, 'healer')}}>
            Healer
            </button>
            <button class="btn hero-btn" onClick={()=>{getNumber(32, 'all')}}>
            All Heroes
            </button>
        </div>
      </div>
      
      {!currentHero ? '' :
      <HeroMatchup heroName={currentHero.name} matchups={currentHero.matchups}/>
      }
    </div>
  );
}