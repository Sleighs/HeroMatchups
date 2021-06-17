import React, { useState, useEffect } from "react";
import heroData from "../../js/heroData";
import './style.css';

export default function HeroMatchup({ heroName , matchups, id }) {
  const [heroes, setHeroData] = useState(heroData);

  function heroMatchupTable() {
    var body = document.getElementById("hero-matchup__container" + id);

    body.innerHTML = '';

    // Create a table element and a tbody element
    var tableTitle = document.createElement("h3");
    tableTitle.className = "table-title";
    tableTitle.innerHTML = heroName + "'s Matchups";
    var tbl = document.createElement("table");
    var tblBody = document.createElement("tbody");
   
    // Create rows and cells
    for (var i = 0; i < 2; i++) {
      var row = document.createElement("tr");
  
      for (var j = 0; j < matchups.length; j++) {
        // Create a <td> element
        var cell = document.createElement("td");
        if (i === 0) {
          cell.className = "counter-hero-td";
        }
        if (i === 1) {
          cell.className = "counter-type-td";
        
        }
  
        var cellText = document.createTextNode(matchups[j][i]);
        /*
        console.log(cellText);

        switch(cellText){
          case '++':
              cell.classList.add('hero-matchup__td-doubleplus');
              break;
          case '--':
              cell.classList.add('hero-matchup__td-doubleminus');
              break;
          case '+':
              cell.classList.add('hero-matchup__td-plus');
              break;
          case '-':
              cell.classList.add('hero-matchup-minus');
             break;
      }
      */
        cell.appendChild(cellText);
        row.appendChild(cell);




      }
  
      // add the row to the end of the table body
      tblBody.appendChild(row);
    }
  
    // put the <tbody> in the <table>
    tbl.appendChild(tblBody);
    // appends <table> into <body>
    body.appendChild(tableTitle);
    body.appendChild(tbl);
    /* */
  }
  
  
  useEffect(() => {
    heroMatchupTable();
    console.log(heroName)
  });

  return (
    <div className="" id={"hero-matchup__container" + id}>
      
    </div>
  );
}