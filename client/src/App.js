import React,{useEffect, useState} from 'react';
import { BrowserRouter } from 'react-router-dom';
import 'normalize.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import axios from 'axios';
import {neasContext} from './context/neasContext';
import {landingsContext} from './context/landingsContext';
import { userContext } from './context/userContext';
import { cartContext } from './context/cartContext';
import {historyContext} from './context/historyContext';

import '../src/styles/styles.scss';



const App = () =>{
  const [data,setData] = useState([]);
  const [landingsData,setLandingsData] = useState([]);
  const [userLogged,setUserLogged] = useState("");
  const [products,setProducts] = useState([]);
  const [history,setHistory] = useState([]);

  return (
    <div className="App">
      <BrowserRouter>
      <userContext.Provider value={{userLogged,setUserLogged}}>
        <historyContext.Provider value={{history,setHistory}}>
        <cartContext.Provider value={{products,setProducts}}>
      <neasContext.Provider value={{data,setData}}>
        <landingsContext.Provider value={{landingsData,setLandingsData}}>
        <Header/>
        <Main/>
        <Footer/>
        </landingsContext.Provider>
        </neasContext.Provider>
        </cartContext.Provider>
        </historyContext.Provider>
        </userContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
