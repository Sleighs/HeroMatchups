import React, { useContext, useEffect, useState, useMemo } from "react";
import { RequestContext } from "../../contexts/RequestContext";
import { ThemeContext } from "../../contexts/ThemeContext";
import './style.css';

export default function MatchupTable(props) {
  const { heroData } = useContext(RequestContext);
  const { theme } = useContext(ThemeContext);
  const [searchTerm, setSearchTerm] = useState("");
  const [hoveredCell, setHoveredCell] = useState(null);
  const [selectedHero, setSelectedHero] = useState(null);

  // Normalize hero names for consistent matching
  const normalizeHeroName = (name) => {
    const nameMap = {
      "D.Va": "Dva",
      "Soldier: 76": "Soldier76",
      "Junker Queen": "JunkerQueen",
      "Wrecking Ball": "WreckingBall",
      "Torbjörn": "Torbjorn",
      "McCree": "Cassidy"
    };
    return nameMap[name] || name;
  };

  // Sort heroes alphabetically
  const sortedHeroes = useMemo(() => {
    if (!heroData) return [];
    return Object.entries(heroData).sort((a, b) => 
      a[1].name.localeCompare(b[1].name)
    );
  }, [heroData]);

  // Filter heroes based on search
  const filteredHeroes = useMemo(() => {
    if (!searchTerm) return sortedHeroes;
    const term = searchTerm.toLowerCase();
    return sortedHeroes.filter(([_, hero]) => 
      hero.name.toLowerCase().includes(term)
    );
  }, [sortedHeroes, searchTerm]);

  // Get matchup value for a hero pair
  const getMatchupValue = (rowHero, colHero) => {
    const normalizedColName = normalizeHeroName(colHero.name);
    const counters = rowHero.counters;
    
    if (counters && counters[normalizedColName]) {
      return counters[normalizedColName];
    }
    return null;
  };

  // Get CSS class based on matchup value
  const getMatchupClass = (value) => {
    if (!value) return 'counter-table__cell--empty';
    
    const baseValue = value.replace('*', '');
    switch(baseValue) {
      case '++':
        return 'counter-table__cell--very-strong';
      case '+':
        return 'counter-table__cell--strong';
      case '-':
        return 'counter-table__cell--weak';
      case '--':
        return 'counter-table__cell--very-weak';
      default:
        return 'counter-table__cell--empty';
    }
  };

  // Get symbol for matchup
  const getMatchupSymbol = (value) => {
    if (!value) return '';
    return value.replace('*', '');
  };

  const handleCellHover = (rowIndex, colIndex, rowHero, colHero, value) => {
    setHoveredCell({ rowIndex, colIndex, rowHero, colHero, value });
  };

  const handleCellLeave = () => {
    setHoveredCell(null);
  };

  const handleHeroClick = (heroName) => {
    setSelectedHero(selectedHero === heroName ? null : heroName);
  };

  if (!heroData) return null;

  return (
    <div className="counter-table">
      <h2 id="matchup-table__title" className={`__title ${theme}__title`}>
        Overwatch 2 Matchups
      </h2>

      <div className="counter-table__controls">
        <input
          type="text"
          className="counter-table__search"
          placeholder="Search heroes..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        {selectedHero && (
          <button 
            className="counter-table__clear-selection"
            onClick={() => setSelectedHero(null)}
          >
            Clear Selection: {selectedHero}
          </button>
        )}
      </div>

      <div className="counter-table__container">
        <div className="counter-table__scroll-wrapper">
          {/* Column Headers (Top) */}
          <div className="counter-table__header-row">
            <div className="counter-table__corner-cell">
              {/* <span className="counter-table__axis-label counter-table__axis-label--vertical">
                Hero
              </span> */}
              {/* <span className="counter-table__axis-label counter-table__axis-label--horizontal">
                vs Counter
              </span> */}
              <span className="counter-table__axis-label counter-table__axis-label--horizontal">
                Heroes 
              </span> 
            </div>
            {filteredHeroes.map(([key, hero], index) => (
              <div 
                key={`header-${key}`}
                className={`counter-table__header-cell ${
                  selectedHero === hero.name ? 'counter-table__header-cell--selected' : ''
                }`}
                onClick={() => handleHeroClick(hero.name)}
                title={hero.name}
              >
                <span className="counter-table__header-text">{hero.name}</span>
              </div>
            ))}
          </div>

          {/* Data Rows */}
          {filteredHeroes.map(([rowKey, rowHero], rowIndex) => (
            <div 
              key={`row-${rowKey}`}
              className={`counter-table__row ${
                selectedHero === rowHero.name ? 'counter-table__row--selected' : ''
              }`}
            >
              {/* Row Header (Left) */}
              <div 
                className={`counter-table__row-header ${
                  selectedHero === rowHero.name ? 'counter-table__row-header--selected' : ''
                }`}
                onClick={() => handleHeroClick(rowHero.name)}
                title={rowHero.name}
              >
                <span className="counter-table__row-text">{rowHero.name}</span>
              </div>

              {/* Matchup Cells */}
              {filteredHeroes.map(([colKey, colHero], colIndex) => {
                const value = getMatchupValue(rowHero, colHero);
                const matchupClass = getMatchupClass(value);
                const symbol = getMatchupSymbol(value);
                const isHovered = hoveredCell?.rowIndex === rowIndex && hoveredCell?.colIndex === colIndex;
                const isDiagonal = rowHero.name === colHero.name;
                
                return (
                  <div
                    key={`cell-${rowKey}-${colKey}`}
                    className={`counter-table__cell ${matchupClass} ${
                      isDiagonal ? 'counter-table__cell--diagonal' : ''
                    } ${isHovered ? 'counter-table__cell--hovered' : ''}`}
                    onMouseEnter={() => handleCellHover(rowIndex, colIndex, rowHero.name, colHero.name, value)}
                    onMouseLeave={handleCellLeave}
                    title={value ? `${rowHero.name} vs ${colHero.name}: ${symbol}` : ''}
                  >
                    {!isDiagonal && symbol && (
                      <span className="counter-table__cell-symbol">{symbol}</span>
                    )}
                  </div>
                );
              })}
            </div>
          ))}

          {/* Footer Row (Bottom) - Hero Names */}
          <div className="counter-table__footer-row">
            <div className="counter-table__corner-cell counter-table__corner-cell--bottom">
              {/* <span className="counter-table__axis-label counter-table__axis-label--vertical">
                Hero
              </span> */}
              {/* <span className="counter-table__axis-label counter-table__axis-label--horizontal">
                vs Counter
              </span> */}
              <span className="counter-table__axis-label counter-table__axis-label--horizontal">
                Heroes
              </span> 
            </div>
            {filteredHeroes.map(([key, hero], index) => (
              <div 
                key={`footer-${key}`}
                className={`counter-table__footer-cell ${
                  selectedHero === hero.name ? 'counter-table__footer-cell--selected' : ''
                }`}
                onClick={() => handleHeroClick(hero.name)}
                title={hero.name}
              >
                <span className="counter-table__footer-text">{hero.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tooltip */}
      {hoveredCell && hoveredCell.value && (
        <div className="counter-table__tooltip">
          <strong>{hoveredCell.rowHero}</strong> vs <strong>{hoveredCell.colHero}</strong>
          <br />
          Matchup: <span className={`tooltip-value ${getMatchupClass(hoveredCell.value)}`}>
            {getMatchupSymbol(hoveredCell.value)}
          </span>
        </div>
      )}

      {/* Legend */}
      <div className="counter-table__legend">
        <div className="counter-table__legend-item">
          <div className="counter-table__legend-box counter-table__legend-box--very-strong"></div>
          <span>++ Very Strong Counter</span>
        </div>
        <div className="counter-table__legend-item">
          <div className="counter-table__legend-box counter-table__legend-box--strong"></div>
          <span>+ Strong Counter</span>
        </div>
        <div className="counter-table__legend-item">
          <div className="counter-table__legend-box counter-table__legend-box--weak"></div>
          <span>- Weak Against</span>
        </div>
        <div className="counter-table__legend-item">
          <div className="counter-table__legend-box counter-table__legend-box--very-weak"></div>
          <span>-- Very Weak Against</span>
        </div>
      </div>

      <div className="counter-table__info">
        Showing {filteredHeroes.length} heroes × {filteredHeroes.length} matchups = {filteredHeroes.length * filteredHeroes.length} cells
      </div>
    </div>
  );
}
