import React, { useEffect, useState } from "react";
import heroData from "../../js/heroData";
import './style.css';

export default function MatchupTable() {
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
    row1.classList.add('counter-table__table-head');

    // Add hero names to row 1
    for (var a = 0; a < heroes.length; a++){
        var heroNameCell = document.createElement("td");
        heroNameCell.innerHTML = heroes[a][0];
        heroNameCell.classList.add('create-table__column-head');
        row1.appendChild(heroNameCell);
    }
    
    tableBody.appendChild(row1);

    // Create table rows
    for (var b = 0; b < (heroes.length ); b++){
        var row = document.createElement("tr");
        row.className = 'counter-table__row' + b;

        var rowMatchups = Object.entries(heroes[b][1]['counters']);

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
               cell.classList.add('counter-table__row-head');
               row.appendChild(cell);
            } else {
                // Check if cell has a matchup and if so add value to cell
                if (matchupNames.includes(hero)){ 
                    var eleVal = rowMatchups[matchupNames.indexOf(hero)][1]
                    
                    cell.innerHTML = eleVal;

                    switch(eleVal){
                        case '++':
                        case '++*':
                            cell.classList.add('counter-table__td-doubleplus');
                            break;
                        case '--':
                        case '--*':
                            cell.classList.add('counter-table__td-doubleminus');
                            break;
                        case '+':
                        case '+*':    
                            cell.classList.add('counter-table__td-plus');
                            break;
                        case '-':
                        case '-*':
                            cell.classList.add('counter-table__td-minus');
                           break;
                    }
                }
                cell.classList.add('counter-table__value');
                
                row.appendChild(cell);
            }
        }

        tableBody.appendChild(row);
    }
  });

  return (
    <div className="counter-table">
        <hr id="matchup-hr"/>
        <p className="counter-table__summary">This page shows an updated list of Overwatch counters for each hero. Below is a chart that shows all of the heroes and how they matchup against other heroes.</p>
        <div id="matchup-table__title">
            <h2>{/*OVERWATCH */} MATCHUPS</h2>
        </div>
        <table id="counter-table__table" ></table>
        <div className="counter-table__legend">
            <div>
                <div className="counter-table__legend-td">
                    {'++ very strong'}
                </div>
                <div className="counter-table__legend-td">
                    {'-- very weak'}
                </div>
                <div className="counter-table__legend-td">
                    {'+ strong'}
                </div>
                <div className="counter-table__legend-td">
                    {'- weak'}
                </div>
            </div>
        </div>
    </div>
  );
}