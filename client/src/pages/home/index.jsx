import React, { useContext, useEffect, useState, lazy, Suspense } from "react";
import "./style.css";
import { Footer} from "../../containers";
import { RandomHero, MatchupTable, HeroSelection, HeroIcon } from "../../components";
import { RequestContext } from "../../contexts/RequestContext";
import { ThemeContext } from "../../contexts/ThemeContext";
import DarkModeToggle from "react-dark-mode-toggle";
import getHeroName from "../../js/getHeroName";
import heroPics from '../../resources/overwatch-assets';
import gameDetails from "../../js/gameDetails";
import getHeroPic from "../../js/getHeroPic";

//const HeroSelection = lazy(() => import('../../components/HeroSelection'));
//const MatchupTable = lazy(() => import('../../components/MatchupTable'));

const Home = () => {
  const { getAllHeroes, heroData, setHeroData } = useContext(RequestContext);
  const { theme, setTheme } = useContext(ThemeContext);
  
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

  useEffect(()=>{
    getHeroData();
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
              'The Hero Matchups API retrieves strategic hero matchup information for ' 
              + gameDetails.game + ' (Season ' + gameDetails.season +
              '). The available information is based on aggregated data from win rates, hero kits and ' 
              + gameDetails.game 
              + ' community feedback. '
            }</span>
            <span className="hero-profile__text2" >
              Check out the repository at <a target="_blank" href="https://github.com/Sleighs/hero-matchups-api/" rel="noreferrer"> github.com/Sleighs/hero-matchups-api</a>   
            </span>
          </p>

          <div className="home-intro__text" style={{
            fontSize: '1.2rem',
            marginTop: '3rem',
          }}>
            <div style={{
              marginBottom: '.7rem',
            }}>New hero updates coming soon, featuring:</div>
            <div id="home__upcoming-heroes-list">{
              gameDetails.upcoming.map(
                (hero, index) =>  
                  <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '.75rem',
                  }} key={index}>
                    <img 
                      className='upcoming-hero-thumbnail__image'
                      title={hero} 
                      src={getHeroPic(hero)}
                      alt={hero}
                    />
                    <span style={{
                      fontSize: '1.05rem',
                      //fontWeight: 'bold',
                    
                    }}>{hero}</span>
                  </div>
                )
              }
            </div>
          </div>
        </div>

        <hr className="home-hr"/>
        
        <HeroSelection />

        <hr className="home-hr"/>
        
        <RandomHero />
        
        <hr className="home-hr" style={{
          marginBottom: '4rem',
        }}/>

        {heroData ? <MatchupTable /> : <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          fontSize: '2rem',
          fontWeight: 'bold',
        }}>Loading...</div>}   
      </div>

{/*       
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        gap: '1rem',
        marginTop: '1rem',
        fontSize: '1.1rem',
        opacity: '.5',
      }}>
        <span>{`Updated: ${gameDetails.date}`}</span>   
      </div> */}
          

      <Footer />
    </div>
  );
}

export default Home