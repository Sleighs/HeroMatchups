import React, { useEffect, useState } from "react";
import heroData from "../../js/heroData";
import './style.css';

export default function CounterTable() {
  const [heroes, setHeroData] = useState(Object.entries(heroData).sort());

  useEffect(() => {
    // Create a table element and a tbody element
    var tableBody = document.getElementById("counter-table__table");
    var tblBody = document.createElement("tbody");
    
    tableBody.innerHTML = '';

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
        row.className = 'counter-table__row' + b;
        row.onClick = (event) => {
            console.log('hello'); //event.target.value);

            // Remove highlight from all rows
            var allRows = tableBody.children;
            /*allRows.forEach((node)=>{
                node.classList.remove('counter-table__row-highlight')
            });*/

            // Add highlight
            row.classList.add('counter-table__row-highlight');
        };

        var rowMatchups = Object.entries(heroes[b][1]['counters']);

        for (var c = -1; c < heroes.length; c++){
            var cell = document.createElement("td");
            var hero; 

            // Add hero name before matchup values
            if (c > -1){
                hero = heroes[c][0];
                cell.className = 'counter-table__row-head';
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
                cell.className = 'counter-table__value';
                row.appendChild(cell);
            }
        }
        tableBody.appendChild(row);
    }
  })

  return (
    <div className="counter-table">
        <h2 id="counter-table__title">OVERWATCH COUNTERS</h2>
        <table id="counter-table__table" ></table>
    </div>
  );
}