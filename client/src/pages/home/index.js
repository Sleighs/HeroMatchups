import React, { useContext, useEffect, useState } from "react";
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


export default function Home() {
  return (
    <div className="home">
        <Header />
        <div className='home__body'>
          <div className='home__header-image'></div>
          <HeroProfile />
          <hr class="home-hr"/>
          
          <RandomHero />
          <MatchupTable />
        </div>
        <Footer />
        <RedditShareButton children='hi' url='https://heromatchups.com'/>
    </div>
  );
}
