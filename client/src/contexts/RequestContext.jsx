import React, {useState} from "react"
import ow2Data from "../js/season20-data";

const RequestContext = React.createContext()

function RequestContextProvider(props){ 
  const [heroData, setHeroData] = useState(ow2Data || null);
  const [currentHero, setCurrentHero] = useState(null);
  const [currentRandomHero, setCurrentRandomHero] = useState(null);
  
  //const apiUrl = 'https://hero-matchups-api.herokuapp.com'
  const apiUrl = 'https://hero-matchups-api.netlify.app/.netlify/functions/api'

  async function getData() {
    try {
      const res = await fetch(apiUrl);
      const data = await res.json();
      console.log('RequestContext getData', data);
      return data;
    } catch (err) {
      console.log(err);
    }
  }

  async function getAllHeroes() {
    try {
      const res = await fetch(apiUrl + '/heroes');
      const data = await res.json();
      console.log('RequestContext getAllHeroes', data);
      
      // setHeroData(prev => data.sort(
      //   function (a, b) {
      //   if (a['name'] < b['name']){
      //     return -1;
      //   } else if (a['name'] > b['name']){
      //     return 1;
      //   } else {
      //     return 0;   
      //   }
      // }))
      
      return data;
    } catch (err) {
      console.log('RequestContext getAllHeroes', err);
    }
  }

  async function getSingleHero(heroName) {
    try {
      const res = await fetch(apiUrl + '/heroes/' + heroName);
      const data = await res.json();
      console.log(`${heroName}'s Info`, data);
      setCurrentHero(data[0]);
      return data;
    } catch (err) {
      console.log('RequestContext getSingleHero Error', err);
    }
    
  }

  async function getRandomHero() {
    const res = await fetch(apiUrl + '/random/');
    const data = await res.json();

    //console.log(data)

    setCurrentRandomHero(data);
  }

  async function getRandomHeroByType(type) {
    const res = await fetch(apiUrl + '/random/' + type);
    const data = await res.json();

    //console.log(data)

    setCurrentRandomHero(data);
  }

  return(
    <RequestContext.Provider value={{
      apiUrl,
      heroData,
      setHeroData,
      currentHero,
      setCurrentHero,
      currentRandomHero,
      setCurrentRandomHero,
      getData,
      getAllHeroes,
      getSingleHero,
      getRandomHero,
      getRandomHeroByType
    }}>
      {props.children}
    </RequestContext.Provider>
  )
}

export { RequestContext, RequestContextProvider }