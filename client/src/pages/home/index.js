import React, { useContext, useEffect } from "react";
import "./style.css";
import { Footer} from "../../containers";
import { MatchupTable, RandomHero, HeroSelection } from "../../components";
import { RequestContext } from "../../contexts/RequestContext";
import { ThemeContext } from "../../contexts/ThemeContext";

const Home = () => {
  const { getAllHeroes, heroData } = useContext(RequestContext)
  const { theme, setTheme } = useContext(ThemeContext)

  var reqCount = 0;

  useEffect(()=>{
    getAllHeroes()
    reqCount = reqCount + 1
    // eslint-disable-line react-hooks/exhaustive-deps
  }, [reqCount])

  return (
    <div className="home">
        <div className='home__body'>
          <div className='theme-toggle' 
          style={{display: 'none', float: 'right'}}
            onClick={()=>{
              if (theme === 'dark-theme'){
                setTheme('light-theme')
              } else {
                setTheme('dark-theme')
              }
            }}>
            {theme === 'dark-theme' ? 'light on' : 'light off'}
          </div>
          
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