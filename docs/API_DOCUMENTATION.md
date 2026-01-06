# Hero Matchups API Documentation

A comprehensive REST API for retrieving strategic matchup information for Overwatch 2 heroes based on aggregated data from win rates, hero kits, and community feedback.

---

## Base URL

```
https://hero-matchups-api.example.com
```

---

## Endpoints

### 1. Get All Heroes

Retrieves information for all available heroes in JSON format.

**Endpoint:**
```
GET /heroes
```

**Description:**
Returns a complete list of all Overwatch 2 heroes with comprehensive information including stats, abilities, counters, and matchup data.

**Parameters:**
None

**Response:**
```json
[
  {
    "name": "Winston",
    "type": "tank",
    "role": "Tank",
    "realName": "Winston",
    "nationality": "Moon (Lunar Colony)",
    "age": 29,
    "occupation": ["Adventurer", "Scientist"],
    "base": ["Lunar Colony"],
    "archetype": ["Initiator"],
    "health": 250,
    "armor": 100,
    "shields": 0,
    "counters": { ... },
    "quotes": [...]
  },
  ...
]
```

**Example Request:**
```bash
curl -X GET https://hero-matchups-api.example.com/heroes
```

---

### 2. Get Single Hero

Retrieves detailed information for a specific hero by name.

**Endpoint:**
```
GET /heroes/:heroName
```

**Parameters:**
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `heroName` | string | Yes | The name of the hero (e.g., "Winston", "D.Va", "Soldier: 76") |

**Response:**
```json
{
  "name": "Winston",
  "type": "tank",
  "role": "Tank",
  "realName": "Winston",
  "nationality": "Moon (Lunar Colony)",
  "age": 29,
  "occupation": ["Adventurer", "Scientist"],
  "base": ["Lunar Colony"],
  "archetype": ["Initiator"],
  "health": 250,
  "armor": 100,
  "shields": 0,
  "counters": {
    "Widowmaker": "++",
    "Reaper": "+",
    "Genji": "+"
  },
  "counteredBy": {
    "Reaper": "--",
    "Widowmaker": "--"
  },
  "quotes": ["Wow, something's not right here."]
}
```

**Example Requests:**
```bash
# Get Winston details
curl -X GET https://hero-matchups-api.example.com/heroes/Winston

# Get D.Va details
curl -X GET https://hero-matchups-api.example.com/heroes/Dva

# Get Soldier: 76 details
curl -X GET https://hero-matchups-api.example.com/heroes/Soldier76
```

---

### 3. Get Heroes by Type

Retrieves information for all heroes of a specific role type.

**Endpoint:**
```
GET /type/:type
```

**Parameters:**
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `type` | string | Yes | The hero role type: `tank`, `damage`, or `support` |

**Valid Options:**
- `tank` - Tank heroes (e.g., Winston, Reinhardt, Sigma)
- `damage` - Damage/DPS heroes (e.g., Tracer, Pharah, Widowmaker)
- `support` - Support heroes (e.g., Mercy, Ana, Lúcio)

**Response:**
```json
[
  {
    "name": "Winston",
    "type": "tank",
    "role": "Tank",
    ...
  },
  {
    "name": "Reinhardt",
    "type": "tank",
    "role": "Tank",
    ...
  },
  ...
]
```

**Example Requests:**
```bash
# Get all tank heroes
curl -X GET https://hero-matchups-api.example.com/type/tank

# Get all damage heroes
curl -X GET https://hero-matchups-api.example.com/type/damage

# Get all support heroes
curl -X GET https://hero-matchups-api.example.com/type/support
```

---

### 4. Get Archetypes

Retrieves all available hero archetypes.

**Endpoint:**
```
GET /archetype
```

**Description:**
Returns a list of all available hero archetypes organized by role.

**Parameters:**
None

**Response:**
```json
{
  "tank": ["Anchor", "Initiator", "First Responder", "Damage Heavy"],
  "damage": ["Anchor", "Flanker", "Sniper", "Scrapper", "Specialist"],
  "support": ["Main Healer", "Pocket Healer", "Utility"]
}
```

**Example Request:**
```bash
curl -X GET https://hero-matchups-api.example.com/archetype
```

---

### 5. Get Heroes by Archetype

Retrieves all heroes of a specific archetype.

**Endpoint:**
```
GET /archetype/:archetypeName
```

**Parameters:**
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `archetypeName` | string | Yes | The archetype name (see options below) |

**Valid Options:**

**Tank Archetypes:**
- `Anchor` - Defensive tanks that hold positions
- `Initiator` - Aggressive tanks that start fights
- `First Responder` - Protective tanks focused on defense
- `Damage Heavy` - Tanks with significant damage output

**Damage Archetypes:**
- `Anchor` - Consistent damage dealers
- `Flanker` - Mobile heroes that attack from unexpected angles
- `Sniper` - Long-range precision damage
- `Scrapper` - Close-range aggressive damage dealers
- `Specialist` - Unique damage roles with specific utilities

**Support Archetypes:**
- `Main Healer` - Primary healing focused heroes
- `Pocket Healer` - Single-target healing specialists
- `Utility` - Support with unique utility abilities

**Response:**
```json
[
  {
    "name": "Winston",
    "type": "tank",
    "role": "Tank",
    "archetype": ["Initiator"],
    ...
  },
  {
    "name": "D.Va",
    "type": "tank",
    "role": "Tank",
    "archetype": ["Initiator"],
    ...
  },
  ...
]
```

**Example Requests:**
```bash
# Get all Initiator tank heroes
curl -X GET https://hero-matchups-api.example.com/archetype/Initiator

# Get all Flanker damage heroes
curl -X GET https://hero-matchups-api.example.com/archetype/Flanker

# Get all Main Healer support heroes
curl -X GET https://hero-matchups-api.example.com/archetype/Main%20Healer
```

---

## Response Data Structure

### Hero Object

Each hero object contains the following fields:

```json
{
  "name": "string",                    // Internal hero name
  "type": "tank|damage|support",       // Role type
  "role": "string",                    // Display role name
  "realName": "string",                // Character's real name
  "nationality": "string",             // Hero's nationality/origin
  "age": "number|null",                // Hero's age
  "occupation": "string|string[]",     // Occupation(s)
  "base": "string|string[]",           // Base of operations
  "archetype": "string[]",             // Archetype classifications
  "health": "number",                  // Base health points
  "armor": "number",                   // Armor value
  "shields": "number",                 // Shield value
  "difficulty": "number|null",         // Difficulty rating (1-3)
  "counters": {                        // Heroes this hero counters
    "heroName": "++|+|-|-"
  },
  "counteredBy": {                     // Heroes that counter this hero
    "heroName": "++|+|-|-"
  },
  "quotes": "string[]"                 // Character quotes
}
```

### Matchup Values

Matchup strength is represented as:
- `++` - Strong counter/matchup
- `+` - Favorable matchup
- `-` - Unfavorable matchup
- `--` - Hard counter/very unfavorable

---

## Error Responses

### 404 Not Found

**Condition:** The requested hero or archetype does not exist.

**Response:**
```json
{
  "error": "Hero not found",
  "message": "No hero found with the name: InvalidHeroName"
}
```

### 400 Bad Request

**Condition:** Invalid parameters provided.

**Response:**
```json
{
  "error": "Invalid type",
  "message": "Type must be one of: tank, damage, support"
}
```

### 500 Internal Server Error

**Condition:** Server encountered an error processing the request.

**Response:**
```json
{
  "error": "Internal server error",
  "message": "An unexpected error occurred. Please try again later."
}
```

---

## Usage Examples

### JavaScript/Node.js

```javascript
// Fetch all heroes
fetch('https://hero-matchups-api.example.com/heroes')
  .then(res => res.json())
  .then(data => console.log(data));

// Fetch specific hero
fetch('https://hero-matchups-api.example.com/heroes/Winston')
  .then(res => res.json())
  .then(data => console.log(data));

// Fetch all tank heroes
fetch('https://hero-matchups-api.example.com/type/tank')
  .then(res => res.json())
  .then(data => console.log(data));

// Fetch all Initiator archetypes
fetch('https://hero-matchups-api.example.com/archetype/Initiator')
  .then(res => res.json())
  .then(data => console.log(data));
```

### Python

```python
import requests

# Fetch all heroes
response = requests.get('https://hero-matchups-api.example.com/heroes')
heroes = response.json()

# Fetch specific hero
response = requests.get('https://hero-matchups-api.example.com/heroes/Winston')
hero = response.json()

# Fetch all damage heroes
response = requests.get('https://hero-matchups-api.example.com/type/damage')
damage_heroes = response.json()
```

### cURL

```bash
# Get all heroes
curl https://hero-matchups-api.example.com/heroes

# Get specific hero with pretty print
curl -s https://hero-matchups-api.example.com/heroes/Winston | jq .

# Get heroes by type
curl https://hero-matchups-api.example.com/type/support
```

---

## Rate Limiting

Currently, there are no rate limits on API requests. However, please use the API responsibly and avoid making unnecessary repeated requests.

---

## Authentication

This API does not require authentication for public endpoints.

---

## Versioning

The current API version is **v1**. Future versions may be released with breaking changes, which will use versioned endpoints (e.g., `/v2/heroes`).

---

## Support

For issues, suggestions, or contributions, please visit the repository:
- **GitHub:** [github.com/Sleighs/hero-matchups-api](https://github.com/Sleighs/hero-matchups-api)

---

## Data Source & Attribution

This API aggregates data from:
- Official Overwatch 2 game statistics
- Community-driven matchup analysis
- Professional player feedback
- Win rate aggregation platforms

Last Updated: January 2026
Game Version: Overwatch 2 - Season 20
