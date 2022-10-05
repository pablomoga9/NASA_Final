import React,{useState} from 'react';
import { BrowserRouter } from 'react-router-dom';
import 'normalize.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';

import {neasContext} from './context/neasContext';
import {landingsContext} from './context/landingsContext';

import '../src/styles/styles.scss';



const App = () =>{
  const [data,setData] = useState([]);
  const [landingsData,setLandingsData] = useState([]);


  return (
    <div className="App">
      <BrowserRouter>
      <neasContext.Provider value={{data,setData}}>
        <landingsContext.Provider value={{landingsData,setLandingsData}}>
        <Header/>
        <Main/>
        <Footer/>
        </landingsContext.Provider>
        </neasContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
