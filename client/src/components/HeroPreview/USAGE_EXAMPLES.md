# HeroPreview Component - Usage Examples

## Example 1: Basic Usage

The simplest way to use the HeroPreview component:

```jsx
import React from 'react';
import { HeroPreview } from './components';

function App() {
  return (
    <div className="app">
      <HeroPreview />
    </div>
  );
}

export default App;
```

## Example 2: In a Route

Using with React Router:

```jsx
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { HeroPreview } from './components';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/heroes" element={<HeroPreview />} />
      </Routes>
    </Router>
  );
}
```

## Example 3: With Custom Wrapper

Adding a custom header and footer:

```jsx
import React from 'react';
import { HeroPreview } from './components';

function HeroesPage() {
  return (
    <div className="heroes-page">
      <header className="page-header">
        <h1>Overwatch 2 Hero Database</h1>
        <p>Browse all heroes and their matchups</p>
      </header>
      
      <main>
        <HeroPreview />
      </main>
      
      <footer className="page-footer">
        <p>Data updated for Season 20</p>
      </footer>
    </div>
  );
}

export default HeroesPage;
```

## Example 4: Standalone Demo Page

Complete demo page implementation:

```jsx
import React from "react";
import { HeroPreview } from "../../components";
import "./style.css";

export default function HeroPreviewDemo() {
  return (
    <div className="hero-preview-demo">
      <div className="demo-header">
        <h1 className="demo-title">Overwatch 2 Hero Database</h1>
        <p className="demo-description">
          Browse through all Overwatch 2 heroes and view detailed information 
          including stats, matchups, biography, and more.
        </p>
      </div>
      
      <HeroPreview />
      
      <div className="demo-footer">
        <p>Data is updated for Season 20</p>
      </div>
    </div>
  );
}
```

## Example 5: Using Hero Model Directly

If you want to work with hero data outside the component:

```jsx
import React, { useState, useEffect } from 'react';
import Hero from './models/Hero';
import { heroData } from './js/season20-data';

function CustomHeroDisplay() {
  const [heroes, setHeroes] = useState([]);

  useEffect(() => {
    // Convert to Hero instances
    const heroInstances = heroData.map(data => new Hero(data));
    setHeroes(heroInstances);
  }, []);

  return (
    <div>
      {heroes.map((hero, index) => (
        <div key={index}>
          <h2>{hero.name}</h2>
          <p>Total HP: {hero.getTotalHealth('roleQueue')}</p>
          <p>Counters: {hero.getCounteredHeroes().join(', ')}</p>
        </div>
      ))}
    </div>
  );
}
```

## Example 6: Filtering Heroes by Role

Create a custom filtered view:

```jsx
import React, { useState, useEffect } from 'react';
import Hero from './models/Hero';
import { heroData } from './js/season20-data';
import { HeroPreview } from './components';

function FilteredHeroView() {
  const [role, setRole] = useState('tank');
  const [heroes, setHeroes] = useState([]);

  useEffect(() => {
    const heroInstances = heroData
      .filter(h => h.type === role)
      .map(data => new Hero(data));
    setHeroes(heroInstances);
  }, [role]);

  return (
    <div>
      <select value={role} onChange={(e) => setRole(e.target.value)}>
        <option value="tank">Tanks</option>
        <option value="damage">Damage</option>
        <option value="support">Support</option>
      </select>
      
      <div className="hero-list">
        {heroes.map((hero, idx) => (
          <div key={idx}>
            <h3>{hero.name}</h3>
            <p>{hero.archetype.join(', ')}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
```

## Example 7: Hero Comparison

Compare two heroes side by side:

```jsx
import React, { useState } from 'react';
import Hero from './models/Hero';
import { heroData } from './js/season20-data';

function HeroComparison() {
  const [hero1, setHero1] = useState(null);
  const [hero2, setHero2] = useState(null);

  const heroes = heroData.map(data => new Hero(data));

  const compareHeroes = () => {
    if (!hero1 || !hero2) return null;

    return (
      <div className="comparison">
        <div className="hero-column">
          <h2>{hero1.name}</h2>
          <p>HP: {hero1.getTotalHealth()}</p>
          <p>Difficulty: {hero1.difficulty}/3</p>
        </div>
        
        <div className="vs">VS</div>
        
        <div className="hero-column">
          <h2>{hero2.name}</h2>
          <p>HP: {hero2.getTotalHealth()}</p>
          <p>Difficulty: {hero2.difficulty}/3</p>
        </div>

        <div className="matchup-result">
          {hero1.countersHero(hero2.name) && (
            <p>{hero1.name} counters {hero2.name}!</p>
          )}
          {hero1.isCounteredBy(hero2.name) && (
            <p>{hero2.name} counters {hero1.name}!</p>
          )}
        </div>
      </div>
    );
  };

  return (
    <div>
      <select onChange={(e) => setHero1(heroes.find(h => h.name === e.target.value))}>
        <option>Select Hero 1</option>
        {heroes.map((h, i) => <option key={i} value={h.name}>{h.name}</option>)}
      </select>

      <select onChange={(e) => setHero2(heroes.find(h => h.name === e.target.value))}>
        <option>Select Hero 2</option>
        {heroes.map((h, i) => <option key={i} value={h.name}>{h.name}</option>)}
      </select>

      {compareHeroes()}
    </div>
  );
}
```

## Example 8: Hero Stats Dashboard

Create a stats overview:

```jsx
import React, { useEffect, useState } from 'react';
import Hero from './models/Hero';
import { heroData } from './js/season20-data';

function HeroStatsDashboard() {
  const [stats, setStats] = useState({});

  useEffect(() => {
    const heroes = heroData.map(data => new Hero(data));
    
    const totalHeroes = heroes.length;
    const tanks = heroes.filter(h => h.type === 'tank').length;
    const damage = heroes.filter(h => h.type === 'damage').length;
    const support = heroes.filter(h => h.type === 'support').length;
    
    const avgHP = heroes.reduce((sum, h) => 
      sum + h.getTotalHealth(), 0) / totalHeroes;
    
    setStats({
      totalHeroes,
      tanks,
      damage,
      support,
      avgHP: Math.round(avgHP)
    });
  }, []);

  return (
    <div className="stats-dashboard">
      <h2>Hero Statistics</h2>
      <div className="stat-grid">
        <div className="stat-card">
          <h3>Total Heroes</h3>
          <p>{stats.totalHeroes}</p>
        </div>
        <div className="stat-card">
          <h3>Tanks</h3>
          <p>{stats.tanks}</p>
        </div>
        <div className="stat-card">
          <h3>Damage</h3>
          <p>{stats.damage}</p>
        </div>
        <div className="stat-card">
          <h3>Support</h3>
          <p>{stats.support}</p>
        </div>
        <div className="stat-card">
          <h3>Average HP</h3>
          <p>{stats.avgHP}</p>
        </div>
      </div>
    </div>
  );
}
```

## Example 9: Search Functionality

Add search to find heroes:

```jsx
import React, { useState, useEffect } from 'react';
import Hero from './models/Hero';
import { heroData } from './js/season20-data';

function HeroSearch() {
  const [heroes, setHeroes] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredHeroes, setFilteredHeroes] = useState([]);

  useEffect(() => {
    const heroInstances = heroData.map(data => new Hero(data));
    setHeroes(heroInstances);
    setFilteredHeroes(heroInstances);
  }, []);

  useEffect(() => {
    const results = heroes.filter(hero =>
      hero.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (hero.realName && hero.realName.toLowerCase().includes(searchTerm.toLowerCase()))
    );
    setFilteredHeroes(results);
  }, [searchTerm, heroes]);

  return (
    <div>
      <input
        type="text"
        placeholder="Search heroes..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      
      <div className="search-results">
        {filteredHeroes.map((hero, idx) => (
          <div key={idx} className="hero-result">
            <h3>{hero.name}</h3>
            {hero.realName && <p>{hero.realName}</p>}
          </div>
        ))}
      </div>
    </div>
  );
}
```

## Example 10: Integration with Context API

Using the component with React Context:

```jsx
// HeroContext.jsx
import React, { createContext, useState, useEffect } from 'react';
import Hero from '../models/Hero';
import { heroData } from '../js/season20-data';

export const HeroContext = createContext();

export function HeroProvider({ children }) {
  const [heroes, setHeroes] = useState([]);
  const [selectedHero, setSelectedHero] = useState(null);

  useEffect(() => {
    const heroInstances = heroData.map(data => new Hero(data));
    setHeroes(heroInstances);
  }, []);

  return (
    <HeroContext.Provider value={{ heroes, selectedHero, setSelectedHero }}>
      {children}
    </HeroContext.Provider>
  );
}

// Usage in App
import { HeroProvider } from './contexts/HeroContext';
import { HeroPreview } from './components';

function App() {
  return (
    <HeroProvider>
      <HeroPreview />
    </HeroProvider>
  );
}
```

## Tips

1. **Performance**: The component creates Hero instances on mount. For better performance with large datasets, consider memoization.

2. **Customization**: Override CSS classes to match your app's theme.

3. **Data Updates**: When hero data changes, the component automatically updates.

4. **Accessibility**: The component includes proper alt text and semantic HTML.

5. **Mobile**: The component is fully responsive and works on all screen sizes.

