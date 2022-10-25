import React, { useContext, useEffect, useState } from "react";
import "./style.css";
import { Footer} from "../../containers";
import { MatchupTable, RandomHero, HeroSelection } from "../../components";
import { RequestContext } from "../../contexts/RequestContext";
import { ThemeContext } from "../../contexts/ThemeContext";
import DarkModeToggle from "react-dark-mode-toggle";

const Home = () => {
  const { getAllHeroes, heroData } = useContext(RequestContext)
  const { theme, setTheme } = useContext(ThemeContext)
  
  const [isDarkMode, setIsDarkMode] = useState(false);

  var reqCount = 0;

  useEffect(()=>{
    getAllHeroes()
    reqCount = reqCount + 1
    // eslint-disable-line react-hooks/exhaustive-deps
  }, [reqCount])

  return (
    <div className="home">
        <div className='home__body'>

          <DarkModeToggle
            className="themeToggleBtn"
            onChange={() => {
              if (theme === 'dark-theme'){
                setTheme('light-theme')
                setIsDarkMode(false)
              } else {
                setTheme('dark-theme')
                setIsDarkMode(true)
              }
            }}
            checked={isDarkMode}
            size={40}          
          />
          
          <div className='page-header__container'>
            <h2 className={`page-header__title ${theme}__title`}>
                Hero Matchups API
            </h2>
          </div>

          <HeroSelection />

          <hr className="home-hr"/>

          <RandomHero />

          {heroData && <MatchupTable />}
        </div>
        <Footer />
    </div>
  );
}

export default Home