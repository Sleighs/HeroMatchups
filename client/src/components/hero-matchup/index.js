import React, { useState, useEffect } from "react";
import heroData from "../../js/heroData";

export default function HeroMatchup() {
  const [currentHero, setCurrentHero] = useState({
    name: "",
    counters: null
  });
  const [heroes, setHeroData] = useState(heroData);

  
  
  useEffect(() => {

  });

  return (
    <div className="">
      Matchup
    </div>
  );
}