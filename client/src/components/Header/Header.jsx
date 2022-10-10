import React from "react";
import Nav from './Nav/Nav';


const Header = ()=>{
  return <header>
    <div className="logoContainer">
    <h1 className="headerTitle">NasaApp</h1>
    <img className="logoImg" src="https://www.pngall.com/wp-content/uploads/5/NASA-Logo-PNG-HD-Image.png" alt="" />
    
    </div>
    <Nav/>
  </header>
}
export default Header;
