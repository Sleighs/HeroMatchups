import React, { useEffect, useState } from "react";
import heroData from "../../js/heroData";
import stateManager from "../../js/stateManager";
import './style.css';

export default function MatchupTable() {
  const [heroes, setHeroData] = useState(Object.entries(heroData).sort());

  useEffect(() => {
    // Hero matchup table
        // Dynamically made using character data. The result is an application that isn't game dependent and allows players to choose a game and a table will be generated from the data.
    
    // Create a table element and a tbody element
    var tableBody = document.getElementById("counter-table__table");
    var tblBody = document.createElement("tbody");
    
    tableBody.innerHTML = '';

    // Create row one
    var row1 = document.createElement("tr");
    var emptyCell = document.createElement("td");
    var emptyCell2 = document.createElement("td");
    row1.appendChild(emptyCell);
    row1.classList.add('counter-table__table-head');

    // Add hero names to row 1
    for (var a = 0; a < heroes.length; a++){
        var heroNameCell = document.createElement("td");
        heroNameCell.innerHTML = heroes[a][0];
        heroNameCell.classList.add('create-table__column-head');
        row1.appendChild(heroNameCell);
    }

    row1.appendChild(emptyCell2);
    
    tableBody.appendChild(row1);

    // Create table rows
    for (var b = 0; b < heroes.length; b++){
        var row = document.createElement("tr");
        var rowClass = 'counter-table__row' + b;

        row.classList.add(rowClass);
        
        var rowMatchups = Object.entries(heroes[b][1]['counters']);

        for (var c = -1; c <= heroes.length; c++){
            var cell = document.createElement("td");
            var colClass = 'counter-table__col' + c;
            var hero; 

            cell.classList.add(colClass);

            // Add hero name before matchup values
            if (c > -1 && c < heroes.length){
                hero = heroes[c][0];
            }

            // Create array of matchups for row
            var matchupNames = [];

            for (var d = 0; d < rowMatchups.length; d++){
                matchupNames.push(rowMatchups[d][0]);
            }

            // Create first and last cell
            if ((c === -1) || (c === heroes.length)){
               cell.innerHTML = heroes[b][0]; 
               cell.classList.add('counter-table__row-head');
               
               if (c === heroes.length){
                   cell.classList.add('counter-table__row-head2')
               }
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

                /*
                // Add hover effect to each column
                var colCss = '.' + colClass + ':hover{ background-color:' + 'gray' +' }';
                var colStyle = document.createElement('style');

                if (colStyle.styleSheet) {
                    colStyle.styleSheet.cssText = colCss;
                } else {
                    colStyle.appendChild(document.createTextNode(colCss));
                }
                */

                row.appendChild(cell);

                //document.getElementsByClassName(colClass)[0].appendChild(colStyle);

                
            }
        }

        tableBody.appendChild(row);

        // Add hover effect to each row
        var rowCss = '.' + rowClass + ':hover{ background-color: rgb(208, 208, 208, 1) }';
        var rowStyle = document.createElement('style');

        if (rowStyle.styleSheet) {
            rowStyle.styleSheet.cssText = rowCss;
        } else {
            rowStyle.appendChild(document.createTextNode(rowCss));
        }

        document.getElementsByClassName(rowClass)[0].appendChild(rowStyle);
    }

    // Add a row of names as last row
    var lastRow = document.createElement("tr");
    var emptyCell3 = document.createElement("td");
    lastRow.appendChild(emptyCell3);
    lastRow.classList.add('counter-table__table-foot');

    for (var e = 0; e < heroes.length; e++){
        var heroNameCell = document.createElement("td");
        heroNameCell.innerHTML = heroes[e][0];
        heroNameCell.classList.add('create-table__column-head');
        lastRow.appendChild(heroNameCell);
    }

    tableBody.appendChild(lastRow);
  });

  return (
    <div className="counter-table">
        <hr id="matchup-hr"/>
        
        <h2 id="matchup-table__title">{ stateManager.game + ' Matchups'}</h2>
        
        <p className="counter-table__summary"
            style={{
                fontSize: '11pt',
                opacity: '.7',
                margin: '-5px 2px 20px 2px'
            }}>
            {'The chart below shows all of the heroes and how they matchup against other heroes. '}
        </p>
        
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