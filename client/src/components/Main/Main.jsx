import React from "react";
import {Route,Routes} from 'react-router-dom';
import Home from './Home/Home';
import Neas from './Neas/Neas';
import Landings from './Landings/Landings';

const Main = ()=>{
  return <main>
    <Routes>
      <Route element={<Home/>} path={"/"}/>
      <Route element={<Neas/>} path={"/neas"}/>
      <Route element={<Landings/>} path={"/landings"}/>
    </Routes>
    </main>
}

export default Main;
