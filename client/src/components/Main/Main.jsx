import React from "react";
import {Route,Routes} from 'react-router-dom';
import Home from './Home/Home';
import Neas from './Neas/Neas';
import Landings from './Landings/Landings';
import LandingsControl from "./LandingsControl/LandingsControl";
import NeasDetail from './NeasDetail/NeasDetail';

const Main = ()=>{
  return <main>
    <Routes>
      <Route element={<Home/>} path={"/"}/>
      <Route element={<Neas/>} path={"/neas"}/>
      <Route element={<Landings/>} path={"/landings"}/>
      <Route element={<LandingsControl/>} path={"/landings/list"}/>
      <Route element={<NeasDetail/>} path={"/neas/detail/:designation"}/>
    </Routes>
    </main>
}

export default Main;
