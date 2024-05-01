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

  const getUpcomingHeroes = () => {
    let upcomingHeroes = [...gameDetails.upcoming];

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

    // Remove children from id=home__upcoming-heroes-list


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
            marginTop: '2rem',
          }}>
            <span>New hero updates coming soon, featuring:</span>
            <div id="home__upcoming-heroes-list">{
            //() => {
              gameDetails.upcoming.map(
                (hero, index) =>  
                  <HeroIcon 
                    name={getHeroName(hero, true)} 
                    src={heroPics[getHeroName(hero, false)]}
                    handleClick={null}
                    //handleClick={(e)=>{getHeroData(e, getHeroName(hero, false))}}
                    index={index}
                    heroTitle={getHeroName(hero, false)}
                    key={index}
                  />
                )
              //}
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