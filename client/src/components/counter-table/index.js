import React, { useEffect, useState } from "react";
import heroData from "../../js/heroData";

export default function CounterTable() {
  const [heroes, setHeroData] = useState(Object.entries(heroData).sort());

  useEffect(() => {
    // Create table
    var tableBody = document.getElementById("counter-table__table");

    tableBody.innerHTML = '';

    // Create a table element and a tbody element
    var tbl = document.createElement("table");
    var tblBody = document.createElement("tbody");

    // Create row one
    var row1 = document.createElement("tr");
    var emptyCell = document.createElement("td");
    row1.appendChild(emptyCell);

    // Add hero names to row 1
    for (var a = 0; a < heroes.length; a++){
        var heroNameCell = document.createElement("td");
        heroNameCell.innerHTML = heroes[a][0];
        row1.appendChild(heroNameCell);
    }
    
    tableBody.appendChild(row1);

    // Create table rows
    for (var b = 0; b < (heroes.length ); b++){
        var row = document.createElement("tr");
        var rowMatchups = Object.entries(heroes[b][1]['counters']);
        //console.log("rowMatchups", rowMatchups);

        for (var c = -1; c < heroes.length; c++){
            var cell = document.createElement("td");
            var hero; 

            // Add hero name before matchup values
            if (c > -1){
                hero = heroes[c][0];
            }

            // Create array of matchups for row
            var matchupNames = [];

            for (var d = 0; d < rowMatchups.length; d++){
                matchupNames.push(rowMatchups[d][0]);
            }

            // Create first cell
            if (c === -1){
               cell.innerHTML = heroes[b][0]; 
               row.appendChild(cell);
            } else {
                // Check if cell has a matchup and if so add value to cell
                if (matchupNames.includes(hero)){ 
                    cell.innerHTML = rowMatchups[matchupNames.indexOf(hero)][1];
                }
                row.appendChild(cell);
            }
        }
        tableBody.appendChild(row);
    }
  })

  return (
    <div className="counter-table">
        <h2 id="counter-table__title">OVERWATCH COUNTERS</h2>
        <div 
        id="counter-table__table" 
        style={{
            fontSize: '9pt'
        }}>
            
        </div>
    </div>
  );
}