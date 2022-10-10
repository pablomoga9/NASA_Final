import React from "react";
import {Route,Routes} from 'react-router-dom';
import Home from './Home/Home';
import Neas from './Neas/Neas';
import Landings from './Landings/Landings';
import LandingsControl from "./LandingsControl/LandingsControl";
import NeasDetail from './NeasDetail/NeasDetail';
import Login from './Login/Login';
import SignUp from './SignUp/SignUp';
import Cart from "./Cart/Cart";
import LandingsDetail from './LandingsDetail/LandingsDetail';
 

const Main = ()=>{
  return <main>
    <Routes>
      <Route element={<Home/>} path={"/"}/>
      <Route element={<Neas/>} path={"/neas"}/>
      <Route element={<Landings/>} path={"/landings"}/>
      <Route element={<LandingsControl/>} path={"/landings/list"}/>
      <Route element={<NeasDetail/>} path={"/neas/detail/:designation"}/>
      <Route element={<Login/>} path={"/login"}/>
      <Route element={<SignUp/>} path={"/signup"}/>
      <Route element={<Cart/>} path={"/cart"}/>
      <Route element={<LandingsDetail/>} path={"/landings/detail/:id"}/>
    </Routes>
    <div className="bg"></div>
    </main>
}

export default Main;
