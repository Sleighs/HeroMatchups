import React, { useState, useEffect } from "react";
import './style.css';
import heroPics from '../../resources/hero-pics';
import heroIcons from '../../resources/overwatch-assets';
import getHeroName from "../../js/getHeroName";
import Hero from "../../models/Hero";
import { heroData } from "../../js/season20-data";

export default function HeroPreview() {
  const [selectedHero, setSelectedHero] = useState(null);
  const [heroes, setHeroes] = useState([]);
  const [filterRole, setFilterRole] = useState('all');

  useEffect(() => {
    // Convert hero data to Hero class instances
    const heroInstances = heroData.map(data => new Hero(data));
    setHeroes(heroInstances);
    
    // Set initial hero to first one
    if (heroInstances.length > 0) {
      setSelectedHero(heroInstances[0]);
    }
  }, []);

  const handleHeroSelect = (hero) => {
    setSelectedHero(hero);
  };

  const filteredHeroes = filterRole === 'all' 
    ? heroes 
    : heroes.filter(h => h.type === filterRole);

  return (
    <div className="hero-preview">
      <div className="hero-preview__sidebar">
        <h2 className="hero-preview__sidebar-title">Select a Hero</h2>
        
        <div className="hero-preview__filter">
          <button 
            className={`filter-btn ${filterRole === 'all' ? 'active' : ''}`}
            onClick={() => setFilterRole('all')}
          >
            All
          </button>
          <button 
            className={`filter-btn tank ${filterRole === 'tank' ? 'active' : ''}`}
            onClick={() => setFilterRole('tank')}
          >
            Tank
          </button>
          <button 
            className={`filter-btn damage ${filterRole === 'damage' ? 'active' : ''}`}
            onClick={() => setFilterRole('damage')}
          >
            Damage
          </button>
          <button 
            className={`filter-btn support ${filterRole === 'support' ? 'active' : ''}`}
            onClick={() => setFilterRole('support')}
          >
            Support
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
                title={hero.name}
              >
                <img 
                  src={heroIcons[heroKey]} 
                  alt={hero.name}
                  className={`hero-preview__grid-icon ${hero.type}`}
                />
                <span className="hero-preview__grid-name">{getHeroName(hero.name, true)}</span>
              </div>
            );
          })}
        </div>
      </div>

      <div className="hero-preview__main">
        {selectedHero ? (
          <HeroDetailView hero={selectedHero} />
        ) : (
          <div className="hero-preview__empty">
            <p>Select a hero to view details</p>
          </div>
        )}
      </div>
    </div>
  );
}

function HeroDetailView({ hero }) {
  const heroKey = getHeroName(hero.name, false);
  const healthBreakdown = hero.getHealthBreakdown('roleQueue');
  const counteredHeroes = hero.getCounteredHeroes();
  const counterHeroes = hero.getCounterHeroes();

  return (
    <div className="hero-detail">
      <div className="hero-detail__header">
        <div className="hero-detail__portrait">
          <img 
            src={heroPics[heroKey]} 
            alt={hero.name}
            className="hero-detail__portrait-img"
          />
          <div className={`hero-detail__role-badge ${hero.type}`}>
            {hero.role}
          </div>
        </div>

        <div className="hero-detail__header-info">
          <h1 className="hero-detail__name">{getHeroName(hero.name, true)}</h1>
          {hero.realName && (
            <p className="hero-detail__real-name">{hero.realName}</p>
          )}
          {hero.aliases && hero.aliases.length > 0 && (
            <p className="hero-detail__aliases">
              <em>aka: {hero.aliases.join(', ')}</em>
            </p>
          )}

          <div className="hero-detail__stats-grid">
            <StatCard 
              label="Total HP" 
              value={healthBreakdown.total}
              className="stat-hp"
            />
            <StatCard 
              label="Health" 
              value={healthBreakdown.health}
              className="stat-health"
            />
            <StatCard 
              label="Armor" 
              value={healthBreakdown.armor}
              className="stat-armor"
            />
            <StatCard 
              label="Shields" 
              value={healthBreakdown.shields}
              className="stat-shields"
            />
          </div>

          <div className="hero-detail__tags">
            {hero.archetype.map((arch, idx) => (
              <span key={idx} className="hero-detail__tag archetype">
                {arch}
              </span>
            ))}
          </div>

          {(hero.difficulty !== null || hero.skill !== null) && (
            <div className="hero-detail__difficulty">
              {hero.difficulty !== null && (
                <div className="difficulty-item">
                  <span className="label">Difficulty:</span>
                  <div className="rating">
                    {[...Array(3)].map((_, i) => (
                      <span 
                        key={i} 
                        className={`star ${i < hero.difficulty ? 'filled' : ''}`}
                      >
                        ★
                      </span>
                    ))}
                  </div>
                </div>
              )}
              {hero.skill !== null && (
                <div className="difficulty-item">
                  <span className="label">Skill:</span>
                  <div className="rating">
                    {[...Array(3)].map((_, i) => (
                      <span 
                        key={i} 
                        className={`star ${i < hero.skill ? 'filled' : ''}`}
                      >
                        ★
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      <div className="hero-detail__content">
        <div className="hero-detail__section">
          <h3 className="section-title">Biography</h3>
          <div className="bio-grid">
            {hero.age && (
              <BioItem label="Age" value={hero.age} />
            )}
            {hero.birth && (
              <BioItem label="Birth" value={hero.birth} />
            )}
            {hero.nationality && (
              <BioItem label="Nationality" value={hero.nationality} />
            )}
            {hero.status && (
              <BioItem label="Status" value={hero.status} />
            )}
            {hero.occupation && hero.occupation.length > 0 && (
              <BioItem 
                label="Occupation" 
                value={Array.isArray(hero.occupation) ? hero.occupation.join(', ') : hero.occupation} 
              />
            )}
            {hero.base && hero.base.length > 0 && (
              <BioItem 
                label="Base" 
                value={Array.isArray(hero.base) ? hero.base.join(', ') : hero.base} 
              />
            )}
            {hero.affiliation && hero.affiliation.length > 0 && (
              <BioItem 
                label="Affiliation" 
                value={Array.isArray(hero.affiliation) ? hero.affiliation.join(', ') : hero.affiliation} 
              />
            )}
            {hero.relations && hero.relations.length > 0 && (
              <BioItem 
                label="Relations" 
                value={Array.isArray(hero.relations) ? hero.relations.join(', ') : hero.relations} 
              />
            )}
            {hero.voice && (
              <BioItem 
                label="Voice Actor" 
                value={Array.isArray(hero.voice) ? hero.voice.join(', ') : hero.voice} 
              />
            )}
          </div>
        </div>

        <div className="hero-detail__section">
          <h3 className="section-title">Matchups</h3>
          <div className="matchups-container">
            {counteredHeroes.length > 0 && (
              <div className="matchup-group">
                <h4 className="matchup-title good">
                  Counters ({counteredHeroes.length})
                </h4>
                <div className="matchup-list">
                  {counteredHeroes.map((counterName, idx) => {
                    const counterValue = hero.getCounterValue(counterName);
                    return (
                      <MatchupBadge 
                        key={idx} 
                        heroName={counterName} 
                        value={counterValue}
                        type="counter"
                      />
                    );
                  })}
                </div>
              </div>
            )}

            {counterHeroes.length > 0 && (
              <div className="matchup-group">
                <h4 className="matchup-title bad">
                  Countered By ({counterHeroes.length})
                </h4>
                <div className="matchup-list">
                  {counterHeroes.map((counterName, idx) => {
                    const counterValue = hero.getCounterValue(counterName);
                    return (
                      <MatchupBadge 
                        key={idx} 
                        heroName={counterName} 
                        value={counterValue}
                        type="countered"
                      />
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>

        {hero.quotes && hero.quotes.length > 0 && (
          <div className="hero-detail__section">
            <h3 className="section-title">Quotes</h3>
            <div className="quotes-container">
              {hero.quotes.map((quote, idx) => (
                <blockquote key={idx} className="hero-quote">
                  "{quote}"
                </blockquote>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function StatCard({ label, value, className }) {
  return (
    <div className={`stat-card ${className}`}>
      <div className="stat-card__label">{label}</div>
      <div className="stat-card__value">{value}</div>
    </div>
  );
}

function BioItem({ label, value }) {
  return (
    <div className="bio-item">
      <span className="bio-label">{label}:</span>
      <span className="bio-value">{value}</span>
    </div>
  );
}

function MatchupBadge({ heroName, value, type }) {
  const heroKey = getHeroName(heroName, false);
  const strength = value === '++' || value === '--' ? 'strong' : 'normal';
  
  return (
    <div className={`matchup-badge ${type} ${strength}`}>
      <img 
        src={heroIcons[heroKey]} 
        alt={heroName}
        className="matchup-badge__icon"
      />
      <span className="matchup-badge__name">{getHeroName(heroName, true)}</span>
      <span className="matchup-badge__value">{value}</span>
    </div>
  );
}

