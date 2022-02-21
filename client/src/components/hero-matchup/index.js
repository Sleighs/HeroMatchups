import React, { useState, useEffect } from "react";
import heroData from "../../js/heroData";
import './style.css';

export default function HeroMatchup({ heroName , matchups, id, type }, props) {
  const {darkMode} = props

  const [heroes, setHeroData] = useState(heroData);

  function heroMatchupTable() {
    var body = document.getElementById("hero-matchup__container" + id);

    body.innerHTML = '';

    // Create a table element and a tbody element
    var tableTitle = document.createElement("h3");
    tableTitle.className = "hero-matchup__table-title";
    tableTitle.innerHTML = heroName + "'s Matchups";
    var tbl = document.createElement("table");
    var tblBody = document.createElement("tbody");
    tbl.classList.add('hero-matchup__tbody');
   
    // Create rows and cells
    for (var i = 0; i < 2; i++) {
      var row = document.createElement("tr");
      
      for (var j = 0; j < matchups.length; j++) {
        // Create a <td> element
        var cell = document.createElement("td");
        var cellText = document.createTextNode(matchups[j][i]);

        if (i === 0) {
          cell.classList.add("counter-hero__td" + type);
        }
 
        if (i === 1) {
          cell.classList.add("counter-type__td" + type);
            
          // Color cells
          switch(matchups[j][i]){
            case '++':
            case '++*':
                cell.classList.add('hero-matchup__td-doubleplus');
                break;
            case '--':
            case '--*':
                cell.classList.add('hero-matchup__td-doubleminus');
                break;
            case '+':
            case '+*':
                cell.classList.add('hero-matchup__td-plus');
                break;
            case '-':
            case '-*':
                cell.classList.add('hero-matchup__td-minus');
                break;
          }
        }
      
        cell.appendChild(cellText);
        row.appendChild(cell);
      }
  
      // add the row to the table body
      tblBody.appendChild(row);
    }
  
    // put the <tbody> in the <table>
    tbl.appendChild(tblBody);
    // appends <table> into <body>
    body.appendChild(tableTitle);
    body.appendChild(tbl);
  }
  
  useEffect(() => {
    heroMatchupTable();
  });

  return (
    <div className={!darkMode ? '' : 'dark-theme'} id={"hero-matchup__container" + id} >
      
    </div>
  );
}