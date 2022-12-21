import React, { useEffect, useState } from "react";
import { HeroMatchup } from "..";
import './style.css';

import heroPics from '../../resources/overwatch assets';
import stateManager from "../../js/stateManager";

export default function HeroProfile(props) {
  const [currentHero, setCurrentHero] = useState(null);
  const [heroes, setHeroData] = useState(Object.entries(props.heroData).sort());
  const [hoverHero, setHoverHero] = useState(null);

  function getHeroData(name){
    setCurrentHero({
      name: name,
      matchups: Object.entries(props.heroData[name].counters)
    });
  }

  useEffect(()=>{
    // Create elements for each hero to select and view matchups 
    var containerEle = document.getElementById('hero-profile__pics-container');
    var tankTitleEle = document.createElement('div');
    var damageTitleEle = document.createElement('div');
    var supportTitleEle = document.createElement('div');
    var breakEle1 = document.createElement('br');
    var breakEle2 = document.createElement('br');

    var imgAna = document.createElement('img');
    var imgAshe = document.createElement('img');
    var imgBaptiste = document.createElement('img');
    var imgBastion = document.createElement('img');
    var imgBrigitte = document.createElement('img');
    var imgDva = document.createElement('img');
    var imgDoomfist = document.createElement('img');
    var imgEcho = document.createElement('img');
    var imgGenji = document.createElement('img');
    var imgHanzo = document.createElement('img');
    var imgJunkrat = document.createElement('img');
    var imgJunkerQueen = document.createElement('img');
    var imgKiriko = document.createElement('img');
    var imgLucio = document.createElement('img');
    var imgMcCree = document.createElement('img');
    var imgMei = document.createElement('img');
    var imgMercy = document.createElement('img');
    var imgMoira = document.createElement('img');
    var imgOrisa = document.createElement('img');
    var imgPharah = document.createElement('img');
    var imgReaper = document.createElement('img');
    var imgReinhardt = document.createElement('img');
    var imgRoadhog = document.createElement('img');
    var imgSigma = document.createElement('img');
    var imgSojourn = document.createElement('img');
    var imgSoldier76 = document.createElement('img');
    var imgSombra = document.createElement('img');
    var imgSymmetra = document.createElement('img');
    var imgTorbjorn = document.createElement('img');
    var imgTracer = document.createElement('img');
    var imgWidowmaker = document.createElement('img');
    var imgWinston = document.createElement('img');
    var imgWreckingBall = document.createElement('img');
    var imgZarya = document.createElement('img');
    var imgZenyatta = document.createElement('img');

    // Clear container
    containerEle.innerHTML = '';

    // Add classname to img elements
    tankTitleEle.classList.add('hero-profile__hero-row-title');
    damageTitleEle.classList.add('hero-profile__hero-row-title');
    supportTitleEle.classList.add('hero-profile__hero-row-title');

    imgDva.classList.add('hero-profile__hero-thumbnail');
    imgJunkerQueen.classList.add('hero-profile__hero-thumbnail');
    imgOrisa.classList.add('hero-profile__hero-thumbnail');
    imgReinhardt.classList.add('hero-profile__hero-thumbnail');
    imgRoadhog.classList.add('hero-profile__hero-thumbnail');
    imgSigma.classList.add('hero-profile__hero-thumbnail');
    imgWinston.classList.add('hero-profile__hero-thumbnail');
    imgWreckingBall.classList.add('hero-profile__hero-thumbnail');
    imgZarya.classList.add('hero-profile__hero-thumbnail');
    
    imgAshe.classList.add('hero-profile__hero-thumbnail');
    imgBastion.classList.add('hero-profile__hero-thumbnail');
    imgDoomfist.classList.add('hero-profile__hero-thumbnail');
    imgEcho.classList.add('hero-profile__hero-thumbnail');
    imgGenji.classList.add('hero-profile__hero-thumbnail');
    imgHanzo.classList.add('hero-profile__hero-thumbnail');
    imgJunkrat.classList.add('hero-profile__hero-thumbnail');
    imgMcCree.classList.add('hero-profile__hero-thumbnail');
    imgMei.classList.add('hero-profile__hero-thumbnail');
    imgPharah.classList.add('hero-profile__hero-thumbnail');
    imgReaper.classList.add('hero-profile__hero-thumbnail');
    imgSojourn.classList.add('hero-profile__hero-thumbnail');
    imgSoldier76.classList.add('hero-profile__hero-thumbnail');
    imgSombra.classList.add('hero-profile__hero-thumbnail');
    imgSymmetra.classList.add('hero-profile__hero-thumbnail');
    imgTorbjorn.classList.add('hero-profile__hero-thumbnail');
    imgTracer.classList.add('hero-profile__hero-thumbnail');
    imgWidowmaker.classList.add('hero-profile__hero-thumbnail');

    imgAna.classList.add('hero-profile__hero-thumbnail');
    imgBaptiste.classList.add('hero-profile__hero-thumbnail');
    imgBrigitte.classList.add('hero-profile__hero-thumbnail');
    imgKiriko.classList.add('hero-profile__hero-thumbnail');
    imgLucio.classList.add('hero-profile__hero-thumbnail');
    imgMercy.classList.add('hero-profile__hero-thumbnail');
    imgMoira.classList.add('hero-profile__hero-thumbnail');
    imgZenyatta.classList.add('hero-profile__hero-thumbnail');

    // Add source to image elements
    imgAna.src = heroPics.Ana;
    imgAshe.src = heroPics.Ashe;
    imgBaptiste.src = heroPics.Baptiste;
    imgBastion.src = heroPics.Bastion;
    imgBrigitte.src = heroPics.Brigitte;
    imgDva.src = heroPics.Dva;
    imgDoomfist.src = heroPics.Doomfist;
    imgEcho.src = heroPics.Echo;
    imgGenji.src = heroPics.Genji;
    imgHanzo.src = heroPics.Hanzo;
    imgJunkrat.src = heroPics.Junkrat;
    imgJunkerQueen.src = heroPics.JunkerQueen;
    imgKiriko.src = heroPics.Kiriko;
    imgLucio.src = heroPics.Lucio;
    imgMcCree.src = heroPics.McCree;
    imgMei.src = heroPics.Mei;
    imgMercy.src = heroPics.Mercy;
    imgMoira.src = heroPics.Moira;
    imgOrisa.src = heroPics.Orisa;
    imgPharah.src = heroPics.Pharah;
    imgReaper.src = heroPics.Reaper;
    imgReinhardt.src = heroPics.Reinhardt;
    imgRoadhog.src = heroPics.Roadhog;
    imgSigma.src = heroPics.Sigma;
    imgSojourn.src = heroPics.Sojourn;
    imgSoldier76.src = heroPics.Soldier76;
    imgSombra.src = heroPics.Sombra;
    imgSymmetra.src = heroPics.Symmetra;
    imgTorbjorn.src = heroPics.Torbjorn;
    imgTracer.src = heroPics.Tracer;
    imgWidowmaker.src = heroPics.Widowmaker;
    imgWinston.src = heroPics.Winston;
    imgWreckingBall.src = heroPics.WreckingBall;
    imgZarya.src = heroPics.Zarya;
    imgZenyatta.src = heroPics.Zenyatta;

    imgAna.setAttribute('title', 'Ana');
    imgAshe.setAttribute('title', 'Ashe');
    imgBaptiste.setAttribute('title', 'Baptiste');
    imgBastion.setAttribute('title', 'Bastion');
    imgBrigitte.setAttribute('title', 'Ashe');
    imgDva.setAttribute('title', 'Dva');
    imgDoomfist.setAttribute('title', 'Doomfist');
    imgEcho.setAttribute('title', 'Echo');
    imgGenji.setAttribute('title', 'Genji');
    imgHanzo.setAttribute('title', 'Hanzo');
    imgJunkrat.setAttribute('title', 'Junkrat');
    imgJunkerQueen.setAttribute('title', 'Junker Queen');
    imgKiriko.setAttribute('title', 'Kiriko');
    imgLucio.setAttribute('title', 'Lucio');
    imgMcCree.setAttribute('title', 'McCree');
    imgMei.setAttribute('title', 'Mei');
    imgMercy.setAttribute('title', 'Mercy');
    imgMoira.setAttribute('title', 'Moira');
    imgOrisa.setAttribute('title', 'Orisa');
    imgPharah.setAttribute('title', 'Pharah');
    imgReaper.setAttribute('title', 'Reaper');
    imgReinhardt.setAttribute('title', 'Reinhardt');
    imgRoadhog.setAttribute('title', 'Roadhog');
    imgSigma.setAttribute('title', 'Sigma');
    imgSojourn.setAttribute('title', 'Sojourn');
    imgSoldier76.setAttribute('title', 'Soldier 76');
    imgSombra.setAttribute('title', 'Sombra');
    imgSymmetra.setAttribute('title', 'Symmetra');
    imgTorbjorn.setAttribute('title', 'Torbjorn');
    imgTracer.setAttribute('title', 'Tracer');
    imgWidowmaker.setAttribute('title', 'Widowmaker');
    imgWinston.setAttribute('title', 'Winston');
    imgWreckingBall.setAttribute('title', 'Wrecking Ball');
    imgZarya.setAttribute('title', 'Zarya');
    imgZenyatta.setAttribute('title', 'Zenyatta');

    // Add onclick to image elements
    imgAna.onclick = ()=>{getHeroData('Ana')};
    imgAshe.onclick = ()=>{getHeroData('Ashe')};
    imgBaptiste.onclick = ()=>{getHeroData('Baptiste')};
    imgBastion.onclick = ()=>{getHeroData('Bastion')};
    imgBrigitte.onclick = ()=>{getHeroData('Brigitte')};
    imgDva.onclick = ()=>{getHeroData('Dva')};
    imgDoomfist.onclick = ()=>{getHeroData('Doomfist')};
    imgEcho.onclick = ()=>{getHeroData('Echo')};
    imgGenji.onclick = ()=>{getHeroData('Genji')};
    imgHanzo.onclick = ()=>{getHeroData('Hanzo')};
    imgJunkrat.onclick = ()=>{getHeroData('Junkrat')};
    imgJunkerQueen.onclick = ()=>{getHeroData('JunkerQueen')};
    imgKiriko.onclick = ()=>{getHeroData('Kiriko')};
    imgLucio.onclick = ()=>{getHeroData('Lucio')};
    imgMcCree.onclick = ()=>{getHeroData('McCree')};
    imgMei.onclick = ()=>{getHeroData('Mei')};
    imgMercy.onclick = ()=>{getHeroData('Mercy')};
    imgMoira.onclick = ()=>{getHeroData('Moira')};
    imgOrisa.onclick = ()=>{getHeroData('Orisa')};
    imgPharah.onclick = ()=>{getHeroData('Pharah')};
    imgReaper.onclick = ()=>{getHeroData('Reaper')};
    imgReinhardt.onclick = ()=>{getHeroData('Reinhardt')};
    imgRoadhog.onclick = ()=>{getHeroData('Roadhog')};
    imgSigma.onclick = ()=>{getHeroData('Sigma')};
    imgSojourn.onclick = ()=>{getHeroData('Sojourn')};
    imgSoldier76.onclick = ()=>{getHeroData('Soldier76')};
    imgSombra.onclick = ()=>{getHeroData('Sombra')};
    imgSymmetra.onclick = ()=>{getHeroData('Symmetra')};
    imgTorbjorn.onclick = ()=>{getHeroData('Torbjorn')};
    imgTracer.onclick = ()=>{getHeroData('Tracer')};
    imgWidowmaker.onclick = ()=>{getHeroData('Widowmaker')};
    imgWinston.onclick = ()=>{getHeroData('Winston')};
    imgWreckingBall.onclick = ()=>{getHeroData('WreckingBall')};
    imgZarya.onclick = ()=>{getHeroData('Zarya')};
    imgZenyatta.onclick = ()=>{getHeroData('Zenyatta')};

    // Name titles
    tankTitleEle.innerHTML = 'Tank';
    damageTitleEle.innerHTML = 'Damage';
    supportTitleEle.innerHTML = 'Support';

    // Add image elements to container
    containerEle.appendChild(tankTitleEle);

    containerEle.appendChild(imgDva);
    containerEle.appendChild(imgJunkerQueen);
    containerEle.appendChild(imgOrisa);
    containerEle.appendChild(imgReinhardt);
    containerEle.appendChild(imgRoadhog);
    containerEle.appendChild(imgSigma);
    containerEle.appendChild(imgWinston);
    containerEle.appendChild(imgWreckingBall);
    containerEle.appendChild(imgZarya);

    containerEle.appendChild(breakEle1);

    containerEle.appendChild(damageTitleEle);

    containerEle.appendChild(imgAshe);
    containerEle.appendChild(imgBastion);
    containerEle.appendChild(imgDoomfist);
    containerEle.appendChild(imgEcho);
    containerEle.appendChild(imgGenji);
    containerEle.appendChild(imgHanzo);
    containerEle.appendChild(imgJunkrat);
    containerEle.appendChild(imgMcCree);
    containerEle.appendChild(imgMei);
    containerEle.appendChild(imgPharah);
    containerEle.appendChild(imgReaper);
    containerEle.appendChild(imgSojourn);
    containerEle.appendChild(imgSoldier76);
    containerEle.appendChild(imgSombra);
    containerEle.appendChild(imgSymmetra);
    containerEle.appendChild(imgTorbjorn);
    containerEle.appendChild(imgTracer);
    containerEle.appendChild(imgWidowmaker);
    
    containerEle.appendChild(breakEle2);

    containerEle.appendChild(supportTitleEle);

    containerEle.appendChild(imgAna);
    containerEle.appendChild(imgBaptiste);
    containerEle.appendChild(imgBrigitte);
    containerEle.appendChild(imgKiriko);
    containerEle.appendChild(imgLucio);
    containerEle.appendChild(imgMercy);
    containerEle.appendChild(imgMoira);
    containerEle.appendChild(imgZenyatta);

    //console.log(heroPics)
  });
  

  return (
    <div className="hero-profile">
      <h2 className='hero-profile__title __title'
        title='Click hero icons for matchups'>
          Hero Lookup
      </h2>
      
      <p style={{
        fontSize: '11pt',
        opacity: '.7',
        margin: '-5px 2px 20px 2px'
      }}>{
        'This page shows an updated list of counters for each hero in ' 
        + stateManager.game 
        + ' for the ' 
        + stateManager.date 
        + ' patch. The matchups shown are based on aggregated data from win rates, hero kits and ' 
        + stateManager.game 
        + ' community feedback. Click hero icons to view the matchups.'}</p>
      <div id="hero-profile__pics-container"></div>
      
      {/*!currentHero ? '' :
        <h3 style={{
          color: 'black',
          fontSize: '20pt',
          display: 'inline-block'
          }}>
            {currentHero.name}
        </h3>*/}

      {!currentHero ? 
        <></> :
        <HeroMatchup 
          heroName={currentHero.name} 
          matchups={currentHero.matchups} 
          id={"-profile"} 
          type={"-profile"}
        />
      }

      <div id="hero-profile__hero-select">
        <label for="hero-select" id="choose-hero-text" style={{
          textShadow: '1px 1px 1px rgb(199, 197, 197)'
        }}>Choose a hero: </label>
        <select name="hero-selection" id="hero-selection" onChange={(event)=>{
          getHeroData(event.target.value);
        }}>
            <option value="Ana">Ana</option>
            <option value="Ashe">Ashe</option>
            <option value="Baptiste">Baptiste</option>
            <option value="Bastion">Bastion</option>
            <option value="Brigitte">Brigitte</option>
            <option value="Dva">D.Va</option>
            <option value="Doomfist">Doomfist</option>
            <option value="Echo">Echo</option>
            <option value="Genji">Genji</option>
            <option value="Hanzo">Hanzo</option>
            <option value="Junkrat">Junkrat</option>
            <option value="Junker Queen">Junker Queen</option>
            <option value="Kirko">Kiriko</option>
            <option value="Lucio">Lucio</option>
            <option value="McCree">McCree</option>
            <option value="Mei">Mei</option>
            <option value="Mercy">Mercy</option>
            <option value="Moira">Moira</option>
            <option value="Orisa">Orisa</option>
            <option value="Pharah">Pharah</option>
            <option value="Reaper">Reaper</option>
            <option value="Reinhardt">Reinhardt</option>
            <option value="Roadhog">Roadhog</option>
            <option value="Sigma">Sigma</option>
            <option value="Sojourn">Sojourn</option>
            <option value="Soldier76">Soldier 76</option>
            <option value="Sombra">Sombra</option>
            <option value="Symmetra">Symmetra</option>
            <option value="Torbjorn">Torbjorn</option>
            <option value="Tracer">Tracer</option>
            <option value="Widowmaker">Widowmaker</option>
            <option value="Winston">Winston</option>
            <option value="WreckingBall">Wrecking Ball</option>
            <option value="Zarya">Zarya</option>
            <option value="Zenyatta">Zenyatta</option>
        </select>
      </div>
    </div>
  );
}