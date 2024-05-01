import heroPics from '../resources/overwatch-assets';

export default function getHeroPic(name){
  var hero = name;

  if (name === "D.Va"){
    hero = "Dva"
  } else if (name === "Soldier: 76"){
      hero = "Soldier76"
  } else if (name === "Junker Queen"){
      hero = "JunkerQueen"
  } else if (name === "Wrecking Ball"){
      hero = "WreckingBall"
  } else if (name === "Torbjörn"){
      hero = "Torbjorn"
  } else if (name === "McCree"){
      hero = "Cassidy"
  } 

  var propName = heroPics[hero]

  return propName
}