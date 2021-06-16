import React, { useContext, useEffect, useState } from "react";
import "./style.css";
import { Navbar } from "../../containers";
import { CounterTable, HeroProfile, RandomHero } from "../../components";

export default function Home() {
  const [alert, setAlert] = useState(true);

  useEffect(
    ()=>{

    }
  )

  return (
    <div className="home" style={{width:'800px', margin: 'auto'}}>
        <RandomHero />
        <HeroProfile />
        <CounterTable />
    </div>
  );
}
