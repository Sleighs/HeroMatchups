import React, { useContext, useEffect, useState, lazy, Suspense } from "react";
import "./style.css";
import { Footer} from "../../containers";
import { RandomHero, MatchupTable, HeroSelection, HeroIcon, HeroPreview } from "../../components";
import { RequestContext } from "../../contexts/RequestContext";
import { ThemeContext } from "../../contexts/ThemeContext";
import DarkModeToggle from "react-dark-mode-toggle";
import stateManager from "../../js/stateManager";
import getHeroName from "../../js/getHeroName";
import heroPics from '../../resources/hero-pics';

//const HeroSelection = lazy(() => import('../../components/HeroSelection'));
//const MatchupTable = lazy(() => import('../../components/MatchupTable'));

const Home = () => {
  const { getAllHeroes, heroData, setHeroData } = useContext(RequestContext)
  const { theme, setTheme } = useContext(ThemeContext)
  
  const [isDarkMode, setIsDarkMode] = useState(false);

  let reqCount = 0;

  const getHeroData = async () => {
    const data = await getAllHeroes();
    //console.log('getHeroData', data);
    if (data){
      setHeroData(prev => data.sort(
        function (a, b) {
        if (a['name'] < b['name']){
          return -1;
        } else if (a['name'] > b['name']){
          return 1;
        } else {
          return 0;   
        }
      }))
    }
  }

  const getUpcomingHeroes = () => {
    let upcomingHeroes = [...stateManager.upcoming];

    let eleId = document.getElementById('home__upcoming-heroes-list');

    for (let i = 0; i < upcomingHeroes.length; i++){
      let hero = document.createElement('div');
      hero.classList.add('home__upcoming-hero');
      hero.innerHTML = upcomingHeroes[i]; 
      eleId.appendChild(hero);
    }
  }


  useEffect(()=>{
    getHeroData();
    getUpcomingHeroes();
        
    reqCount = reqCount + 1
    // eslint-disable-line react-hooks/exhaustive-deps
  }, [reqCount])

  return (
    <div className="home">
      <div className='home__body'>
        {/* <DarkModeToggle
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
        /> */}
        
        <div className='page-header__container'>
          <h2 className={`page-header__title ${theme}__title`}>
              Hero Matchups API
          </h2>
        </div>

        <div className="home-intro__text-container">
          <p className="home-intro__text">
            <span>{
              'The Hero Matchups API retrieves strategic matchup information for each hero in ' 
              + stateManager.game 
              + ' for the season '
              + stateManager.season 
              + ' ' 
              + stateManager.date 
              + ' patch. The available information is based on aggregated data from win rates, hero kits and ' 
              + stateManager.game 
              + ' community feedback. '
            }</span>
            <span className="hero-profile__text2" >
              Check out the repository at <a target="_blank" href="https://github.com/Sleighs/hero-matchups-api/" rel="noreferrer"> github.com/Sleighs/hero-matchups-api</a>   
            </span>
          </p>
          <div>
            <span>New hero updates coming soon, featuring:</span>
            <div id="home__upcoming-heroes-list">{stateManager.upcoming.map(
              (hero, index) =>  
                <HeroIcon 
                  name={getHeroName(hero, true)} 
                  src={heroPics[getHeroName(hero, false)]}
                  handleClick={null}
                  //handleClick={(e)=>{getHeroData(e, getHeroName(hero, false))}}
                  index={index}
                  heroTitle={getHeroName(hero, false)}
                  key={index}
                  type="upcoming"
                />
              )}</div>
            
            </div>
        </div>

        <HeroPreview />

        <hr className="home-hr"/>

        {/* <Suspense fallback={<div></div>}>
          <HeroSelection />
        </Suspense> */}
        
        <HeroSelection />

        <hr className="home-hr"/>
        
        <RandomHero />
        
        {heroData ? <MatchupTable /> : <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          fontSize: '2rem',
          fontWeight: 'bold',
        }}>Loading...</div>}
      </div>

      <Footer />
    </div>
  );
}

export default Home