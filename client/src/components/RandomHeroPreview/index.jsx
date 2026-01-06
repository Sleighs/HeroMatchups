import React, { useState, useEffect, useContext, useRef } from "react";
import '../HeroPreview/style.css';
import heroPics from '../../resources/hero-pics';
import heroIcons from '../../resources/overwatch-assets';
import getHeroName from "../../js/getHeroName";
import Hero from "../../models/Hero";
import { RequestContext } from "../../contexts/RequestContext";

const normalizeHeroName = (name) => {
  const nameMap = {
    "Dva": "D.Va",
    "DVa": "D.Va",
    "Soldier76": "Soldier: 76",
    "JunkerQueen": "Junker Queen",
    "WreckingBall": "Wrecking Ball",
    "McCree": "Cassidy"
  };
  return nameMap[name] || name;
};

export default function RandomHeroPreview() {
  const { heroData } = useContext(RequestContext);
  const [selectedHero, setSelectedHero] = useState(null);
  const [heroes, setHeroes] = useState([]);
  const [filterRole, setFilterRole] = useState('all');

  useEffect(() => {
    if (heroData && heroData.length > 0) {
      const heroInstances = heroData.map(data => new Hero(data));
      setHeroes(heroInstances);
      
      if (heroInstances.length > 0 && selectedHero === null) {
        let randomHero = heroInstances[Math.floor(Math.random() * heroInstances.length)];
        setSelectedHero(randomHero);
      }
    }
  }, [heroData]);

  const handleHeroSelect = (hero) => {
    if (!hero) return;
    const heroName = normalizeHeroName(typeof hero === 'string' ? hero : hero?.name);
    let newHero = (hero instanceof Hero) ? hero : heroes.find(h => h.name === heroName);
    setSelectedHero(h => newHero);
  };

  const getRandomHeroByType = (type) => {
    const filtered = heroes.filter(h => h.type === type);
    if (filtered.length > 0) {
      const randomHero = filtered[Math.floor(Math.random() * filtered.length)];
      setSelectedHero(randomHero);
    }
  };

  const getRandomHero = () => {
    if (heroes.length > 0) {
      const randomHero = heroes[Math.floor(Math.random() * heroes.length)];
      setSelectedHero(randomHero);
    }
  };

  const filteredHeroes = filterRole === 'all' 
    ? heroes 
    : heroes.filter(h => h.type === filterRole);

  if (!heroes || heroes.length === 0) {
    return (
      <div className="hero-preview">
        <div className="hero-preview__empty">
          <p>Loading heroes...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="hero-preview">
      <div className="hero-preview__sidebar">
        <div className="hero-preview__filter">
          <button 
            className={`filter-btn ${filterRole === 'all' ? 'active' : ''}`}
            onClick={() => setFilterRole('all')}
          >
            ALL
          </button>
          <button 
            className={`filter-btn tank ${filterRole === 'tank' ? 'active' : ''}`}
            onClick={() => setFilterRole('tank')}
          >
            TANK
          </button>
          <button 
            className={`filter-btn damage ${filterRole === 'damage' ? 'active' : ''}`}
            onClick={() => setFilterRole('damage')}
          >
            DPS
          </button>
          <button 
            className={`filter-btn support ${filterRole === 'support' ? 'active' : ''}`}
            onClick={() => setFilterRole('support')}
          >
            SUPPORT
          </button>
        </div>

        <div className="hero-preview__grid">
          {filteredHeroes.map((hero, index) => {
            const heroKey = getHeroName(hero.name, false);
            return (
              <div
                key={index}
                className={`hero-preview__grid-item ${selectedHero?.name === hero.name ? 'selected' : ''}`}
                onClick={() => handleHeroSelect(hero)}
                title={getHeroName(hero.name, true)}
              >
                <img 
                  src={heroIcons[heroKey]} 
                  alt={hero.name}
                  className={`hero-preview__grid-icon ${hero.type}`}
                />
              </div>
            );
          })}
        </div>
      </div>

      <div className="hero-preview__main">
        {selectedHero ? (
          <>
            <div style={{ padding: '12px', borderBottom: '1px solid rgba(255, 156, 0, 0.2)' }}>
              <div style={{ display: 'flex', gap: '8px' }}>
                <button 
                  className="filter-btn tank"
                  onClick={() => getRandomHeroByType('tank')}
                  style={{ flex: 1 }}
                >
                  Random Tank
                </button>
                <button 
                  className="filter-btn damage"
                  onClick={() => getRandomHeroByType('damage')}
                  style={{ flex: 1 }}
                >
                  Random DPS
                </button>
                <button 
                  className="filter-btn support"
                  onClick={() => getRandomHeroByType('support')}
                  style={{ flex: 1 }}
                >
                  Random Support
                </button>
                <button 
                  className="filter-btn"
                  onClick={() => getRandomHero()}
                  style={{ flex: 1, borderColor: '#ff9c00', color: '#ff9c00' }}
                >
                  Random All
                </button>
              </div>
            </div>
            <HeroDetailView hero={selectedHero} handleHeroSelect={handleHeroSelect} />
          </>
        ) : (
          <div className="hero-preview__empty">
            <p>Select a hero to view details</p>
          </div>
        )}
      </div>
    </div>
  );
}

function HeroDetailView({ hero, handleHeroSelect }) {
  const heroKey = getHeroName(hero.name, false);
  const healthBreakdown = hero.getHealthBreakdown('roleQueue');
  const counteredHeroes = hero.getCounteredHeroes();
  const counterHeroes = hero.getCounterHeroes();

  return (
    <div className="hero-detail">
      <div className="hero-detail__top">
        <div className="hero-detail__portrait">
          <img 
            src={heroPics[heroKey]} 
            alt={hero.name}
            className="hero-detail__portrait-img"
          />
        </div>

        <div className="hero-detail__basic-info">
          <div className="hero-detail__title-row">
            <h1 className="hero-detail__name">{getHeroName(hero.name, true)}</h1>
            <div className={`hero-detail__role-badge ${hero.type}`}>
              {hero.role}
            </div>
          </div>
          
          {hero.realName && (
            <div className="hero-detail__real-name">{hero.realName}</div>
          )}

          <div className="hero-detail__stats-row">
            <div className="stat-item">
              <span className="stat-label">HP</span>
              <span className="stat-value">{healthBreakdown.total}</span>
            </div>
            <div className="stat-item">
              <span className="stat-label">Health</span>
              <span className="stat-value">{healthBreakdown.health}</span>
            </div>
            <div className="stat-item">
              <span className="stat-label">Armor</span>
              <span className="stat-value">{healthBreakdown.armor}</span>
            </div>
            <div className="stat-item">
              <span className="stat-label">Shields</span>
              <span className="stat-value">{healthBreakdown.shields}</span>
            </div>
          </div>

          <div className="hero-detail__meta">
            <div className="meta-item">
              <span className="meta-label">Archetype:</span>
              <span className="meta-value">{hero.archetype.join(' • ')}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-detail__bottom">
        <div className="hero-detail__column">
          <div className="info-section">
            <h3 className="section-title">INFO</h3>
            <div className="info-list">
              {hero.age && <InfoRow label="Age" value={hero.age} />}
              {hero.nationality && <InfoRow label="Nationality" value={hero.nationality} />}
              {hero.occupation && <InfoRow label="Occupation" value={Array.isArray(hero.occupation) ? hero.occupation[0] : hero.occupation} />}
              {hero.base && <InfoRow label="Base" value={Array.isArray(hero.base) ? hero.base[0] : hero.base} />}
            </div>
          </div>

          {hero.quotes && hero.quotes.length > 0 && (
            <div className="info-section quote-section">
              <h3 className="section-title">QUOTE</h3>
              <div className="hero-quote">"{hero.quotes[0]}"</div>
            </div>
          )}
        </div>

        <div className="hero-detail__column">
          <div className="info-section">
            <h3 className="section-title">COUNTERS</h3>
            <div className={`matchup-icons ${counteredHeroes.length > 8 ? 'matchup-icons--many' : ''}`}>
              {counteredHeroes.map((counterName, idx) => {
                const counterKey = getHeroName(counterName, false);
                const counterValue = hero.getCounterValue(counterName);
                return (
                  <div key={idx} className={`matchup-icon good ${counterValue === '++' ? 'strong' : ''}`} title={counterName}
                    onClick={() => handleHeroSelect(counterName)}
                  >
                    <img src={heroIcons[counterKey]} alt={counterName} />
                    <span className="matchup-icon-name">{getHeroName(counterName, true)}</span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="info-section">
            <h3 className="section-title">COUNTERED BY</h3>
            <div className={`matchup-icons ${counterHeroes.length > 8 ? 'matchup-icons--many' : ''}`}>
              {counterHeroes.map((counterName, idx) => {
                const counterKey = getHeroName(counterName, false);
                const counterValue = hero.getCounterValue(counterName);
                return (
                  <div key={idx} className={`matchup-icon bad ${counterValue === '--' ? 'strong' : ''}`} title={counterName}
                     onClick={() => handleHeroSelect(counterName)}
                  >
                    <img src={heroIcons[counterKey]} alt={counterName} />
                    <span className="matchup-icon-name">{getHeroName(counterName, true)}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function InfoRow({ label, value }) {
  return (
    <div className="info-row">
      <span className="info-label">{label}</span>
      <span className="info-value">{value}</span>
    </div>
  );
}
