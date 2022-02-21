import React, { useContext, useEffect, useState, StyleSheet } from "react";
import "./style.css";
import { Footer, Header, Navbar } from "../../containers";
import { MatchupTable, HeroProfile, RandomHero } from "../../components";


import {
  EmailShareButton,
  FacebookShareButton,
  HatenaShareButton,
  InstapaperShareButton,
  LineShareButton,
  LinkedinShareButton,
  LivejournalShareButton,
  MailruShareButton,
  OKShareButton,
  PinterestShareButton,
  PocketShareButton,
  RedditShareButton,
  TelegramShareButton,
  TumblrShareButton,
  TwitterShareButton,
  ViberShareButton,
  VKShareButton,
  WhatsappShareButton,
  WorkplaceShareButton
} from "react-share";


const Home = () => {
  const [darkModeToggle, setDarkModeToggle] = useState(false);

  const darkMode = () => {

    if (!darkModeToggle) {
      setDarkModeToggle(true)
    } else {
      setDarkModeToggle(false)
    }
    
    console.log('dark mode toggle', darkModeToggle)
  }

  const styles = {
    homeContainer: {
      backgroundColor: !darkModeToggle ? 'rgba(245, 248, 239, 0.3)' : 'black',
      color: !darkModeToggle ? 'rgba(24, 22, 22, 0.8)' : 'white',
    },
    homeBody: {
      backgroundColor: !darkModeToggle ? 'white' : 'black',
      color: 'rgba(24, 22, 22, 0.8)',
    },
    darkModeBtn: {
      
    },
  }

  return (
    <div 
      className="home" 
      style={styles.homeContainer}>
        <Header darkMode={darkModeToggle}/>
        <div className='home__body' style={styles.homeBody}>
          <div className='home__header-image'></div>
          <button className='home__darkModeBtn'
            style={styles.darkModeBtn}
            onClick={()=>{darkMode()}}
          >
            Dark Mode
          </button>
          <HeroProfile darkMode={darkModeToggle}/>
          <hr class="home-hr"/>
          <RandomHero darkMode={darkModeToggle}/>
          <MatchupTable darkMode={darkModeToggle}/>
        </div>
        <Footer />
    </div>
  );
}



export default Home