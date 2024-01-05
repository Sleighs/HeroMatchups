import React, { useContext, useEffect, useState } from "react";
import { RequestContext } from "../../contexts/RequestContext";
import { ThemeContext } from "../../contexts/ThemeContext";
import './style.css';

export default function MatchupTable(props) {
  const { heroData } = useContext(RequestContext)
  const { theme } = useContext(ThemeContext)

  const [heroes, setHeroes] = useState(Object.entries(heroData).sort(
    ((a, b) => (a[1].name > b[1].name) ? 1 : -1)
  ));
  
  const makeTable = () => {
    // Create a table element and a tbody element
    let tableBody = document.getElementById("counter-table__table");
    // var tblBody = document.createElement("tbody");
    
    tableBody.innerHTML = '';

    // Create row one
    let row1 = document.createElement("tr");
    let emptyCell = document.createElement("td");
    let emptyCell2 = document.createElement("td");
    row1.appendChild(emptyCell);
    row1.classList.add('counter-table__table-head');

    // Add hero names to row 1
    for (let a = 0; a < heroes.length; a++){
      let heroNameCell = document.createElement("td");
        heroNameCell.innerHTML = heroes[a][1].name;
        heroNameCell.classList.add('create-table__column-head');
        row1.appendChild(heroNameCell);
    }

    row1.appendChild(emptyCell2);
    
    tableBody.appendChild(row1);

    // Create table rows
    for (let b = 0; b < heroes.length; b++){
      let row = document.createElement("tr");
      let rowClass = 'counter-table__row' + b ;

        row.classList.add('counter-table__row');
        row.classList.add(rowClass);
        
        let rowMatchups = Object.entries(heroes[b][1]['counters']);

        for (var c = -1; c <= heroes.length; c++){
          let cell = document.createElement("td");
          let colClass = 'counter-table__col' + c;
          let hero; 

            cell.classList.add(colClass);
            cell.classList.add('counter-table__col');
            
            // Add hero name before matchup values
            if (c > -1 && c < heroes.length){
                if (heroes[c][1].name === "D.Va"){
                    hero = "Dva"
                } else if (heroes[c][1].name === "Soldier: 76"){
                    hero = "Soldier76"
                } else if (heroes[c][1].name === "Junker Queen"){
                    hero = "JunkerQueen"
                } else if (heroes[c][1].name === "Wrecking Ball"){
                    hero = "WreckingBall"
                } else if (heroes[c][1].name === "Torbjörn"){
                    hero = "Torbjorn"
                } else if (heroes[c][1].name === "McCree"){
                    hero = "Cassidy"
                } else {
                    hero = heroes[c][1].name;
                }
            }

            // Create array of matchups for row
            var matchupNames = [];

            for (var d = 0; d < rowMatchups.length; d++){
                matchupNames.push(rowMatchups[d][0]);
            }

            // Create first and last cell
            if ((c === -1) || (c === heroes.length)){
               //cell.innerHTML = heroes[b][1].name; 
               cell.classList.add('counter-table__row-head');
               cell.classList.add('counter-table__row-head-special');
               
              //  // Add hero name to first cell
              //   if (c === -1){
              //       cell.innerHTML = heroes[b][1].name;
              //   } else
              //   // add hero name to last cell
              //   if (c === heroes.length){
              //       cell.innerHTML = heroes[b][1].name;
              //   }

               if (c === heroes.length){
                   //cell.classList.add('counter-table__row-head2')
               }
               row.appendChild(cell);

            } else {
                // Check if cell has a matchup and if so add value to cell
                if (matchupNames.includes(hero)){ 
                    var eleVal = rowMatchups[matchupNames.indexOf(hero)][1]
                    
                    cell.innerHTML = eleVal;

                    switch (eleVal){
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
                cell.classList.add('counter-table__col-value');

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
        heroNameCell.innerHTML = heroes[e][1].name;
        heroNameCell.classList.add('create-table__column-head');
        lastRow.appendChild(heroNameCell);
    }

    tableBody.appendChild(lastRow);
  }

  const generateYList = () => {
    let yList = document.getElementById("counter-table__y-list");
    //yList.innerHTML = '';
    while (yList.firstChild) {
      yList.removeChild(yList.firstChild);
    }

    // Add first cell
    let emptyCell = document.createElement("span");
    emptyCell.classList.add('counter-table__y-list-name-head');
    yList.appendChild(emptyCell);
    
    for (let a = 0; a < heroes.length; a++){
      let heroNameCell = document.createElement("span");
        heroNameCell.innerHTML = heroes[a][1].name;
        heroNameCell.classList.add('counter-table__value');
        heroNameCell.classList.add('counter-table__y-list-name');
        yList.appendChild(heroNameCell);
    }

    let emptyCell2 = document.createElement("span");
    emptyCell2.classList.add('counter-table__y-list-name-head');
    emptyCell2.style.border = 'none';
    yList.appendChild(emptyCell2);
  }


  useEffect(() => {
    if (heroData) {
      generateYList();
      makeTable();
      //console.log('MatchupTable heroes', heroes)
    }
  }, []);

  return (
    <>
    {heroData && 
    <div className="counter-table">
      <h2 id="matchup-table__title" className={`__title ${theme}__title`}>Overwatch 2 Matchups</h2>

      <div className="counter-table__table-container">
        <span className="counter-table__table-y-title">Heroes {/*&#8592; Heroes &#8594;*/}</span>
        <div className="counter-table__table-main">
          <span className="counter-table__table-x-title">Counters {/*&#8592; Counters &#8594;*/}</span>  
          <div id="counter-table__y-list"></div>
          <table id="counter-table__table" ></table>
        </div>
      </div>
      

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
    }
    </>
  );
}