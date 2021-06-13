import React, { useState } from "react";
import heroData from "../../js/heroData";

export default function RandomHero() {
    const [currentHero, setCurrentHero] = useState(null);
    const [heroes, setHeroData] = useState(heroData);
    //const [randomHero, setRandomHero] = useState(null);

      
    //var nameEle = document.getElementById("num");
    //var numEle = document.getElementById("alert");
    
  
    function getNumber(max, type) {
        var ele = document.getElementById("num");

      // Generate random number
      var num = Math.floor(Math.random() * Math.floor(max)) + 1;
    
      //ele.innerHTML = num;
    
      // Retrieve the hero using the number and hero type
        console.log(num);

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

      //console.log('name', name);

      setCurrentHero({
          name: name,
          counters: Object.entries(heroes[name].counters)
      })
    
      // Set counters
      
      console.log(currentHero);
    
      //heroCounterTable();
    
      // Print name
      var ele = document.getElementById("num");
      var ele2 = document.getElementById("alert");
      //ele2.innerHTML = name;
    }

  return (
    <div className="">
      <div class="alert-container">
        <div id="alert">name</div>
      </div>
      <div class="hero-container">
        <div id="num">00</div>
      </div>

      <div id="btns-container">
        <h2 id="btns-title" style={{fontSize: '8pt'}}>Get Random Hero</h2>
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
    </div>
  );
}