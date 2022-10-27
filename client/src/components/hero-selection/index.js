import React, { useContext, useEffect, useState } from "react";
import { HeroMatchup } from "..";
import './style.css';

import heroPics from '../../resources/overwatch-assets';
import stateManager from "../../js/stateManager";
import { RequestContext } from "../../contexts/RequestContext";
import { ThemeContext } from "../../contexts/ThemeContext";

export default function HeroSelection(props) {
  const {
    currentHero,
    getSingleHero
  } = useContext(RequestContext)

  const { theme } = useContext(ThemeContext)

  const [highlightedHero, setHighlightedHero] = useState(null);

  function getHeroData(e, name){
    getSingleHero(name)
    setHighlightedHero(name)
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
    var imgCassidy = document.createElement('img');
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
    imgCassidy.classList.add('hero-profile__hero-thumbnail');
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
    imgCassidy.src = heroPics.McCree;
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
    imgBrigitte.setAttribute('title', 'Brigitte');
    imgDva.setAttribute('title', 'Dva');
    imgDoomfist.setAttribute('title', 'Doomfist');
    imgEcho.setAttribute('title', 'Echo');
    imgGenji.setAttribute('title', 'Genji');
    imgHanzo.setAttribute('title', 'Hanzo');
    imgJunkrat.setAttribute('title', 'Junkrat');
    imgJunkerQueen.setAttribute('title', 'JunkerQueen');
    imgKiriko.setAttribute('title', 'Kiriko');
    imgLucio.setAttribute('title', 'Lucio');
    imgCassidy.setAttribute('title', 'Cassidy');
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
    imgSoldier76.setAttribute('title', 'Soldier76');
    imgSombra.setAttribute('title', 'Sombra');
    imgSymmetra.setAttribute('title', 'Symmetra');
    imgTorbjorn.setAttribute('title', 'Torbjorn');
    imgTracer.setAttribute('title', 'Tracer');
    imgWidowmaker.setAttribute('title', 'Widowmaker');
    imgWinston.setAttribute('title', 'Winston');
    imgWreckingBall.setAttribute('title', 'WreckingBall');
    imgZarya.setAttribute('title', 'Zarya');
    imgZenyatta.setAttribute('title', 'Zenyatta');

    // Add onclick to image elements
    imgAna.onclick = (e)=>{getHeroData(e, 'Ana')};
    imgAshe.onclick = (e)=>{getHeroData(e, 'Ashe')};
    imgBaptiste.onclick = (e)=>{getHeroData(e, 'Baptiste')};
    imgBastion.onclick = (e)=>{getHeroData(e, 'Bastion')};
    imgBrigitte.onclick = (e)=>{getHeroData(e, 'Brigitte')};
    imgDva.onclick = (e)=>{getHeroData(e, 'Dva')};
    imgDoomfist.onclick = (e)=>{getHeroData(e, 'Doomfist')};
    imgEcho.onclick = (e)=>{getHeroData(e, 'Echo')};
    imgGenji.onclick = (e)=>{getHeroData(e, 'Genji')};
    imgHanzo.onclick = (e)=>{getHeroData(e, 'Hanzo')};
    imgJunkrat.onclick = (e)=>{getHeroData(e, 'Junkrat')};
    imgJunkerQueen.onclick = (e)=>{getHeroData(e, 'JunkerQueen')};
    imgKiriko.onclick = (e)=>{getHeroData(e, 'Kiriko')};
    imgLucio.onclick = (e)=>{getHeroData(e, 'Lucio')};
    imgCassidy.onclick = (e)=>{getHeroData(e, 'Cassidy')};
    imgMei.onclick = (e)=>{getHeroData(e, 'Mei')};
    imgMercy.onclick = (e)=>{getHeroData(e, 'Mercy')};
    imgMoira.onclick = (e)=>{getHeroData(e, 'Moira')};
    imgOrisa.onclick = (e)=>{getHeroData(e, 'Orisa')};
    imgPharah.onclick = (e)=>{getHeroData(e, 'Pharah')};
    imgReaper.onclick = (e)=>{getHeroData(e, 'Reaper')};
    imgReinhardt.onclick = (e)=>{getHeroData(e, 'Reinhardt')};
    imgRoadhog.onclick = (e)=>{getHeroData(e, 'Roadhog')};
    imgSigma.onclick = (e)=>{getHeroData(e, 'Sigma')};
    imgSojourn.onclick = (e)=>{getHeroData(e, 'Sojourn')};
    imgSoldier76.onclick = (e)=>{getHeroData(e, 'Soldier76')};
    imgSombra.onclick = (e)=>{getHeroData(e, 'Sombra')};
    imgSymmetra.onclick = (e)=>{getHeroData(e, 'Symmetra')};
    imgTorbjorn.onclick = (e)=>{getHeroData(e, 'Torbjorn')}; //Torbjörn
    imgTracer.onclick = (e)=>{getHeroData(e, 'Tracer')};
    imgWidowmaker.onclick = (e)=>{getHeroData(e, 'Widowmaker')};
    imgWinston.onclick = (e)=>{getHeroData(e, 'Winston')};
    imgWreckingBall.onclick = (e)=>{getHeroData(e, 'WreckingBall')};
    imgZarya.onclick = (e)=>{getHeroData(e, 'Zarya')};
    imgZenyatta.onclick = (e)=>{getHeroData(e, 'Zenyatta')};

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
    containerEle.appendChild(imgCassidy);
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

    var elements = document.querySelectorAll(`.hero-profile__hero-thumbnail`)
    elements.forEach(item => item.classList.remove('icon-highlight'))

    if (highlightedHero){
      var updateEle = document.querySelectorAll(`.hero-profile__hero-thumbnail[title=${highlightedHero}]`)
      updateEle[0].classList.add('icon-highlight')
    }
  });
  

  return (
    <div className="hero-profile">      
      <h2 className={`section-heading ${theme}__title`}>Resources</h2>
      
      <p style={{textAlign: '', fontSize: '1.1em' }}>
        <strong>Base URL:</strong> https://hero-matchups-api.herokuapp.com/
      </p>
      
      <section className="resources__section">
        <h3 className="resources__route-style">/heroes</h3>
        <h3 className="resources__route-style">/heroes/:heroName</h3>
        <ul className="resources__list">
          <li><strong>Description:</strong> Retrieves information for all available heroes in JSON. The "heroName" tag retrieves details for only the specified hero.</li>
          <li><strong>URL:</strong> https://hero-matchups-api.herokuapp.com/heroes</li>
          <li><strong>Method:</strong> GET</li>
        </ul>
      </section>
      
      <section className="resources__section">
        <h3 className="resources__route-style">/type/:type</h3>
        <ul className="resources__list">
          <li><strong>Description:</strong> Retrieves information for all heroes of the selected type.</li>
          <li><span><strong>Options:</strong> tank, damage, support</span></li>
          <li><strong>URL:</strong> https://hero-matchups-api.herokuapp.com/type/:type</li>
          <li><strong>Method:</strong> GET</li>
        </ul>
      </section>

      <section className="resources__section">
        <h3 className="resources__route-style">/archetype</h3>
        <h3 className="resources__route-style">/archetype/:archetypeName</h3>
        <ul className="resources__list">
          <li>
            <span><strong>Description:</strong> The "/archetype" route lists all available hero archetypes. The "archetypeName" tag retrieves all heroes of the selected archetype.</span>
            <br/>
          </li>

          <li><span><strong>Options:</strong></span>
            <ul>
              <li><strong>Tank:</strong> Anchor, Initiator, First Responder, Damage Heavy</li>
              <li><strong>Damage: </strong> Anchor, Flanker, Sniper, Scrapper, Specialist</li>
              <li><strong>Suppport: </strong>Main Healer, Pocket Healer, Utility</li>
            </ul>
          </li>
          
          <li><strong>URL:</strong> https://hero-matchups-api.herokuapp.com/archetype/:archetypeName</li>
          <li><strong>Method:</strong> GET</li>
        </ul>
      </section>
      
      <p className="hero-profile__text3" >
        Click hero icons to view matchups
      </p>
      
      <div id="hero-profile__pics-container"></div>

      {!currentHero 
        ? <div style={{height: 155,}}></div> 
        : <HeroMatchup 
          heroName={currentHero.name} 
          matchups={Object.entries(currentHero.counters)} 
          archetypes={currentHero.archetype}
          id={"-profile"} 
          type={"-profile"}
        />
      }
      <div id="hero-profile__hero-select">
        <label 
          for="hero-select" 
          id="choose-hero-text" 
        >
          {'Choose a hero: '}
        </label>
        <select 
          name="hero-selection" 
          id="hero-selection" 
          onChange={(event)=>{
            getHeroData(event.target.value);
          }}
        >
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
            <option value="Junker Queen">Junker Queen</option>
            <option value="Junkrat">Junkrat</option>
            <option value="Kiriko">Kiriko</option>
            <option value="Lucio">Lucio</option>
            <option value="Cassidy">{"Cassidy (McCree)"}</option>
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
            <option value="Soldier76">Soldier: 76</option>
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