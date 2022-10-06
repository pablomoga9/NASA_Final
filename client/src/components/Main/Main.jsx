import React from "react";
import {Route,Routes} from 'react-router-dom';
import Home from './Home/Home';
import Neas from './Neas/Neas';
import Landings from './Landings/Landings';
import LandingsControl from "./Landings/LandingsControl/LandingsControl";

const Main = ()=>{
  return <main>
    <Routes>
      <Route element={<Home/>} path={"/"}/>
      <Route element={<Neas/>} path={"/neas"}/>
      <Route element={<Landings/>} path={"/landings"}/>
      <Route element={<LandingsControl/>} path={"/landings/list"}/>
    </Routes>
    </main>
}

export default Main;
