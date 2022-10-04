import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import 'normalize.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';

import '../src/styles/styles.scss';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Main/>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
