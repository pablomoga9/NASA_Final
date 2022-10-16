import React,{useState} from "react";
import Nav from './Nav/Nav';
import { Link } from "react-router-dom";

const Header = ()=>{
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked(!clicked)
  }
  return <header>
    <Link onClick={handleClick} to='/' className="logoContainer">
      
    <h1 className="headerTitle">NasaApp</h1>
    <img className="logoImg" src="https://www.pngall.com/wp-content/uploads/5/NASA-Logo-PNG-HD-Image.png" alt="" />
    
    </Link>
    <Nav/>
  </header>
}
export default Header;
