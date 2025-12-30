# HeroPreview Component

A comprehensive React component for displaying Overwatch 2 hero information with an interactive selection interface.

## Features

- **Hero Selection Grid**: Browse all heroes organized by role (Tank, Damage, Support)
- **Role Filtering**: Filter heroes by their role type
- **Detailed Hero View**: Display comprehensive information including:
  - Hero portrait and role badge
  - Real name and aliases
  - Health, armor, and shields stats
  - Archetype tags
  - Difficulty and skill ratings
  - Complete biography (age, nationality, occupation, etc.)
  - Matchup information (counters and countered by)
  - Hero quotes
- **Responsive Design**: Adapts to different screen sizes
- **Smooth Animations**: Fade-in effects and hover interactions

## Usage

### Basic Implementation

```jsx
import { HeroPreview } from '../../components';

function MyPage() {
  return (
    <div>
      <HeroPreview />
    </div>
  );
}
```

### Full Page Example

```jsx
import React from "react";
import { HeroPreview } from "../../components";

export default function HeroDatabase() {
  return (
    <div className="hero-database-page">
      <h1>Overwatch 2 Heroes</h1>
      <HeroPreview />
    </div>
  );
}
```

## Component Structure

```
HeroPreview/
├── index.jsx          # Main component file
├── style.css          # Component styles
└── README.md          # This file
```

## Dependencies

The component requires:
- `Hero` model class from `../../models/Hero`
- `heroData` from `../../js/season20-data`
- Hero images from `../../resources/hero-pics`
- Hero icons from `../../resources/overwatch-assets`
- `getHeroName` utility function from `../../js/getHeroName`

## Component Breakdown

### Main Components

1. **HeroPreview** (Main Container)
   - Manages hero selection state
   - Handles role filtering
   - Renders sidebar and main content area

2. **HeroDetailView** (Detail Display)
   - Shows comprehensive hero information
   - Displays hero portrait, stats, and biography
   - Renders matchup information

3. **StatCard** (Stat Display)
   - Displays individual stat values (HP, Health, Armor, Shields)

4. **BioItem** (Biography Item)
   - Renders individual biography fields

5. **MatchupBadge** (Matchup Display)
   - Shows counter relationships with other heroes
   - Displays hero icon and counter strength

## Styling

The component uses a dark theme with Overwatch-inspired colors:
- **Primary Color**: `#ff9c00` (Orange)
- **Tank**: `#f99e1a`
- **Damage**: `#e02e28`
- **Support**: `#fbbe3e`

### CSS Classes

Key CSS classes for customization:
- `.hero-preview` - Main container
- `.hero-preview__sidebar` - Sidebar with hero grid
- `.hero-preview__main` - Main content area
- `.hero-detail` - Hero detail view
- `.matchup-badge` - Counter relationship badge

## Responsive Breakpoints

- **Desktop**: 1200px+
- **Tablet**: 768px - 1199px
- **Mobile**: < 768px

## Data Structure

The component expects hero data in the following format:

```javascript
{
  name: "D.Va",
  realName: "Hana Song",
  type: "tank",
  role: "Tank",
  counters: { Ana: "+", Zarya: "--" },
  archetype: ["First Responder"],
  difficulty: 2,
  skill: 2,
  health: { roleQueue: 375 },
  armor: { roleQueue: 325 },
  shields: { roleQueue: 0 },
  age: 21,
  nationality: "Korean",
  // ... more fields
}
```

## Hero Model Methods Used

The component utilizes these Hero class methods:
- `getHealthBreakdown(queueType)` - Get health stats
- `getCounteredHeroes()` - Get list of heroes this hero counters
- `getCounterHeroes()` - Get list of heroes that counter this hero
- `getCounterValue(heroName)` - Get counter strength value

## Customization

### Change Default Queue Type

Modify the `getHealthBreakdown` and `getTotalHealth` calls:

```jsx
const healthBreakdown = hero.getHealthBreakdown('sixVSix'); // Instead of 'roleQueue'
```

### Add Custom Sections

Add new sections in the `HeroDetailView` component:

```jsx
<div className="hero-detail__section">
  <h3 className="section-title">Custom Section</h3>
  <div className="custom-content">
    {/* Your custom content */}
  </div>
</div>
```

### Modify Color Scheme

Update CSS variables or colors in `style.css`:

```css
.hero-preview {
  background: linear-gradient(135deg, #your-color-1, #your-color-2);
}
```

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Notes

- Component uses `useState` and `useEffect` for state management
- Hero instances are created once on mount
- Images are lazy-loaded by the browser
- Smooth animations use CSS transitions

## Future Enhancements

Possible improvements:
- Search functionality
- Sort options (alphabetical, by difficulty, etc.)
- Ability comparison between two heroes
- Export hero data to JSON
- Print-friendly view
- Favorite heroes feature
- Share hero profile link

## License

Part of the HeroMatchups project.

