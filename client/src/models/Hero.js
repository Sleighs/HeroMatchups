/**
 * Hero Model Class
 * Represents an Overwatch 2 hero with all their stats and information
 */
class Hero {
  constructor(data) {
    // Basic Information
    this.name = data.name;
    this.realName = data.realName || null;
    this.aliases = data.aliases || [];
    this.type = data.type; // 'tank', 'damage', or 'support'
    this.role = data.role; // 'Tank', 'Damage', or 'Support'
    
    // Gameplay Information
    this.counters = data.counters || {};
    this.archetype = data.archetype || [];
    this.difficulty = data.difficulty !== undefined ? data.difficulty : null;
    this.skill = data.skill !== undefined ? data.skill : null;
    
    // Stats
    this.health = data.health;
    this.armor = data.armor;
    this.shields = data.shields;
    
    // Personal Information
    this.status = data.status !== undefined ? data.status : null;
    this.birth = data.birth;
    this.age = data.age;
    this.ages = data.ages || {};
    this.nationality = data.nationality || null;
    
    // Background
    this.occupation = data.occupation || [];
    this.base = data.base || [];
    this.affiliation = data.affiliation || [];
    this.relations = data.relations || null;
    
    // Media
    this.voice = data.voice || null;
    this.quotes = data.quotes || [];
  }

  /**
   * Get the hero's name formatted for use in URLs or keys
   * @returns {string} Hero name without special characters
   */
  getUrlName() {
    return this.name.replace(/[:\s.]/g, '');
  }

  /**
   * Check if this hero counters another hero
   * @param {string} heroName - Name of the hero to check
   * @returns {string|null} Counter value ('+', '++', '-', '--') or null
   */
  getCounterValue(heroName) {
    return this.counters[heroName] || null;
  }

  /**
   * Check if this hero is a counter to another hero
   * @param {string} heroName - Name of the hero to check
   * @returns {boolean} True if this hero counters the target
   */
  countersHero(heroName) {
    const value = this.getCounterValue(heroName);
    return value === '+' || value === '++';
  }

  /**
   * Check if this hero is countered by another hero
   * @param {string} heroName - Name of the hero to check
   * @returns {boolean} True if this hero is countered by the target
   */
  isCounteredBy(heroName) {
    const value = this.getCounterValue(heroName);
    return value === '-' || value === '--';
  }

  /**
   * Get all heroes that this hero counters
   * @returns {string[]} Array of hero names
   */
  getCounteredHeroes() {
    return Object.entries(this.counters)
      .filter(([_, value]) => value === '+' || value === '++')
      .map(([hero, _]) => hero);
  }

  /**
   * Get all heroes that counter this hero
   * @returns {string[]} Array of hero names
   */
  getCounterHeroes() {
    return Object.entries(this.counters)
      .filter(([_, value]) => value === '-' || value === '--')
      .map(([hero, _]) => hero);
  }

  /**
   * Get total health pool for a specific queue type
   * @param {string} queueType - 'openQueue', 'roleQueue', 'sixVSix', or 'pilotForm'
   * @returns {number} Total health (health + armor + shields)
   */
  getTotalHealth(queueType = 'roleQueue') {
    let health = typeof this.health === 'number' ? this.health : (this.health[queueType] || 0);
    let armor = typeof this.armor === 'number' ? this.armor : (this.armor[queueType] || 0);
    let shields = typeof this.shields === 'number' ? this.shields : (this.shields[queueType] || 0);
    
    return health + armor + shields;
  }

  /**
   * Get health breakdown for a specific queue type
   * @param {string} queueType - 'openQueue', 'roleQueue', 'sixVSix', or 'pilotForm'
   * @returns {Object} Object with health, armor, shields, and total
   */
  getHealthBreakdown(queueType = 'roleQueue') {
    let health = typeof this.health === 'number' ? this.health : (this.health[queueType] || 0);
    let armor = typeof this.armor === 'number' ? this.armor : (this.armor[queueType] || 0);
    let shields = typeof this.shields === 'number' ? this.shields : (this.shields[queueType] || 0);
    
    return {
      health,
      armor,
      shields,
      total: health + armor + shields
    };
  }

  /**
   * Check if hero has a specific archetype
   * @param {string} archetypeName - Name of the archetype to check
   * @returns {boolean} True if hero has this archetype
   */
  hasArchetype(archetypeName) {
    return this.archetype.includes(archetypeName);
  }

  /**
   * Get a random quote from this hero
   * @returns {string|null} Random quote or null if no quotes
   */
  getRandomQuote() {
    if (this.quotes.length === 0) return null;
    return this.quotes[Math.floor(Math.random() * this.quotes.length)];
  }

  /**
   * Get hero display name (real name if available, otherwise hero name)
   * @returns {string} Display name
   */
  getDisplayName() {
    return this.realName || this.name;
  }

  /**
   * Convert hero to plain object
   * @returns {Object} Plain object representation
   */
  toJSON() {
    return {
      name: this.name,
      realName: this.realName,
      aliases: this.aliases,
      type: this.type,
      role: this.role,
      counters: this.counters,
      archetype: this.archetype,
      difficulty: this.difficulty,
      skill: this.skill,
      health: this.health,
      armor: this.armor,
      shields: this.shields,
      status: this.status,
      birth: this.birth,
      age: this.age,
      ages: this.ages,
      nationality: this.nationality,
      occupation: this.occupation,
      base: this.base,
      affiliation: this.affiliation,
      relations: this.relations,
      voice: this.voice,
      quotes: this.quotes
    };
  }
}

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = Hero;
}

