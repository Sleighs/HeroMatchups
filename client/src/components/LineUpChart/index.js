import React, { useContext, useEffect, useState } from "react";
import heroPics from "../../Assets/overwatch-icons";
import { DataContext } from "../../Context/DataContext";
import { ThemeContext } from "../../Context/ThemeContext";
import './style.css';

export default function LineUpChart(props) {
  const { heroData, lineUpHeroes, setLineUpHeroes } = useContext(DataContext)
  const { theme } = useContext(ThemeContext)

  const [heroes, setHeroes] = useState(Object.entries(heroData).sort(
    ((a, b) => (a[1].name > b[1].name) ? 1 : -1)
  ));
  const [test, setTest] = useState(0)
  
  useEffect(() => {
    // Hero matchup table

    // Suited for interchangeability between games

    // Create a table element and a tbody element
    var tableBody = document.getElementById("lineup-table__table");
    var tblBody = document.createElement("lineup-tbody");
    
    tableBody.innerHTML = '';

    // Create row one
    var row1 = document.createElement("tr");
    var emptyCell = document.createElement("td");
    var emptyCell2 = document.createElement("td");
    row1.appendChild(emptyCell);
    row1.classList.add('lineup-table__table-head');

    lineUpHeroes.forEach((hero, i) => {
        var heroNameCell = document.createElement("td");
        heroNameCell.innerHTML = String(lineUpHeroes[i])
        heroNameCell.classList.add('lineup-table__column-head');
        //row1.appendChild(heroNameCell);
    })

    row1.appendChild(emptyCell2);
    
    tableBody.appendChild(row1);

    // Create table rows
    for (var b = 0; b < heroes.length; b++){
        var rowScore = 0;
        var row = document.createElement("tr");
        var rowClass = 'lineup-table__row' + b;

        row.classList.add('lineup-table__row')
        row.classList.add(rowClass);
        
        var rowMatchups = Object.entries(heroes[b][1]['counters']);

        var firstCell = document.createElement("td");
        firstCell.innerHTML = heroes[b][1].name.toUpperCase(); 
        firstCell.classList.add('lineup-table__row-head');
        row.appendChild(firstCell);

        // Create table columns
            // add cell to row if item exists
        lineUpHeroes.forEach((hero, i) => {
            var cell = document.createElement("td");
            var colClass = 'lineup-table__col' + i;

            cell.classList.add(colClass);

            // Create array of matchups for row
                //Get matchup from rowMatchups of hero using hash table and add value to cell
            
            // Get indexes of counters object
            var hash = {};
            for (var i = 0 ; i < rowMatchups.length; i += 1) {
                hash[rowMatchups[i][0]] = i;
            }

            var val = hero;
            var eleVal = '';

            // If index of hero exists set td value to counter value
            if (hash.hasOwnProperty(val)) {
                eleVal = rowMatchups[hash[val]][1];
            }
            
            cell.innerHTML = eleVal;

            // Add style to value td
            switch(eleVal){
                case '++':
                case '++*':
                    rowScore -= 20;
                    cell.classList.add('lineup-table__td-doubleplus');
                    break;
                case '--':
                case '--*':
                    rowScore += 20;
                    cell.classList.add('lineup-table__td-doubleminus');
                    break;
                case '+':
                case '+*': 
                    rowScore -= 10;   
                    cell.classList.add('lineup-table__td-plus');
                    break;
                case '-':
                case '-*':
                    rowScore += 10;
                    cell.classList.add('lineup-table__td-minus');
                    break;
            }
            cell.classList.add('lineup-table__value');

            row.appendChild(cell);
        })
        
        // Add empty cell
        var emptyCell3 = document.createElement("td");
        var emptyCell3Class = 'lineup-empty2-col';
        emptyCell3.classList.add(emptyCell3Class);
        row.appendChild(emptyCell3);

        // Add archetype cell
        var archetypeCell = document.createElement("td");
        var archCellClass = 'lineup-table__archetype-col';
        archetypeCell.classList.add(archCellClass);
        archetypeCell.innerText = String(heroes[b][1]['archetype']);
        row.appendChild(archetypeCell);

        // Add row score cell
        if (rowScore > 0){
            rowScore = '+' + String(rowScore)
        } else {
            rowScore = String(rowScore)
        }
        // add a switch for rowScore color
        var rowScoreCell = document.createElement("td");
        var rowScoreCellClass = 'lineup-table__row-score-col';
        rowScoreCell.classList.add(rowScoreCellClass);
        if (rowScore > 0) {
            rowScoreCell.classList.add('lineup-table__row-score-positive');
        } else if (rowScore < 0) {
            rowScoreCell.classList.add('lineup-table__row-score-negative');
        }
        rowScoreCell.innerText = rowScore;
        row.appendChild(rowScoreCell);

        // Add row to table 
        tableBody.appendChild(row);

        // Add hover effect to each row
        var rowCss = '.' + rowClass + ':hover{ background-color: rgb(208, 208, 208, 1) }';
        var rowStyle = document.createElement('style');

        //rowStyle.appendChild(document.createTextNode(rowCss));

        document.getElementsByClassName(rowClass)[0].appendChild(rowStyle); 
    }
  });

  return (
    <>
    {heroData && 
    <div className="lineup-table">
        <div className="hero-lineup-selection">
            {lineUpHeroes.map((item, i) =>
                <HeroLineupSelect lineUpIndex={i} key={i} test={test} setTest={setTest}/>    
            )}
        </div>
        
        <table id="lineup-table__table" ></table>

        <div className="lineup-table__legend">
            <div>
                <div className="lineup-table__legend-td">
                    <div className="lineup-table__legend-color"  style={{backgroundColor: 'rgb(43, 180, 66)',}}>+</div>
                    <span className="lineup-table__legend-text">{'Very strong against'}</span>
                </div>
                <div className="lineup-table__legend-td">
                    <div className="lineup-table__legend-color" style={{backgroundColor: 'rgb(162, 255, 185)',}}>+</div>
                    <span className="lineup-table__legend-text">{'Strong against'}</span>
                </div>
                <div className="lineup-table__legend-td">
                    <div className="lineup-table__legend-color" style={{backgroundColor: 'rgb(228, 77, 1)',}}>-</div>
                    <span className="lineup-table__legend-text">{'Very weak against'}</span>
                </div>
                <div className="lineup-table__legend-td">
                    <div className="lineup-table__legend-color" style={{backgroundColor: 'rgb(248, 204, 183)',}}>-</div>
                    <span className="lineup-table__legend-text">{'Weak against'}</span>
                </div>
            </div>
        </div>
    </div>
    }
    </>
  );
}


const HeroLineupSelect = ({lineUpIndex, test, setTest}, props) => {
  const { 
    heroData, 
    lineUpHeroes, 
    setLineUpHeroes 
  } = useContext(DataContext)

  const [picUrl, setPicUrl] = useState(`url(${heroPics[lineUpHeroes[lineUpIndex]]})`)
  const [selectVal, setSelectVal] = useState(lineUpHeroes[lineUpIndex])
    
  useEffect(()=>{
    setPicUrl(`url(${heroPics[lineUpHeroes[lineUpIndex]]})`)
    setTest(prev => prev += 1)
    //console.log(test)
  }, [lineUpHeroes, picUrl])

  return (
    <div className="hero-lineup-select__container">
        <div 
            className="hero-lineup-select__image"
            style={{
                backgroundImage: picUrl
            }}
        >
            <div className="hero-lineup-select__container-name-text">{lineUpHeroes[lineUpIndex]}</div>
        </div>
        <div className="hero-lineup-select__select-container">
            <select 
                className="hero-lineup-select__select-input"
                value={selectVal}
                onChange={(e) =>{
                    setLineUpHeroes(prev => {
                        var newList = prev
                        newList.splice(lineUpIndex, 1, e.target.value)
                        return newList
                    })
                    setSelectVal(e.target.value)
                    setPicUrl(`url(${heroPics[e.target.value]})`)
                }}
            >
                <optgroup label="Tanks">
                    <option value="Dva">D.Va</option>
                    <option value="Doomfist">Doomfist</option>
                    <option value="JunkerQueen">Junker Queen</option>
                    <option value="Mauga">Mauga</option>
                    <option value="Orisa">Orisa</option>
                    <option value="Reinhardt">Reinhardt</option>
                    <option value="Roadhog">Roadhog</option>
                    <option value="Sigma">Sigma</option>
                    <option value="Winston">Winston</option>
                    <option value="WreckingBall">Wrecking Ball</option>
                    <option value="Zarya">Zarya</option>
                </optgroup>
                <optgroup label="Damage">
                    <option value="Ashe">Ashe</option>
                    <option value="Bastion">Bastion</option>
                    <option value="Cassidy">Cassidy/McCree</option>
                    <option value="Echo">Echo</option>
                    <option value="Genji">Genji</option>
                    <option value="Hanzo">Hanzo</option>
                    <option value="Junkrat">Junkrat</option>
                    <option value="Mei">Mei</option>
                    <option value="Pharah">Pharah</option>
                    <option value="Reaper">Reaper</option>
                    <option value="Sojourn">Sojourn</option>
                    <option value="Soldier76">Soldier: 76</option>
                    <option value="Sombra">Sombra</option>
                    <option value="Symmetra">Symmetra</option>
                    <option value="Torbjorn">Torbjorn</option>
                    <option value="Tracer">Tracer</option>             
                    <option value="Widowmaker">Widowmaker</option>
                </optgroup>
                <optgroup label="Support">
                    <option value="Ana">Ana</option>
                    <option value="Baptiste">Baptiste</option>
                    <option value="Brigitte">Brigitte</option>
                    <option value="Illari">Illari</option>
                    <option value="Kiriko">Kiriko</option>
                    <option value="Lifeweaver">Lifeweaver</option>
                    <option value="Lucio">Lucio</option>
                    <option value="Mercy">Mercy</option>
                    <option value="Moira">Moira</option>
                    <option value="Zenyatta">Zenyatta</option>
                </optgroup>
            </select>    
        </div>
    </div>
  )
}