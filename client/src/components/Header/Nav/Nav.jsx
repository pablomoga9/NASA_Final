import React, { useContext, useState} from "react";
import {Link} from 'react-router-dom';
import styled from "styled-components";
import BurguerButton from '../BurguerButton/BurguerButton';
import {userContext} from '../../../context/userContext';

function Nav(){
  const [clicked, setClicked] = useState(false);
  const {userLogged,setUserLogged} = useContext(userContext);
  const handleClick = () => {
    setClicked(!clicked)
  }

function handleLogout(){
  setUserLogged("");
}

  // return(
  //   <nav className="nav-bar">
  //     <Link to="/">Home</Link>
  //     <Link to="/new">Nuevo Pokemon</Link>
  //     <Link to="/search">Búsqueda</Link>
  //   </nav>

  // )
  return (
    <>
      <NavContainer>
      <div className='burguer'>
          <BurguerButton clicked={clicked} handleClick={handleClick} />
        </div>
        <div className={`links ${clicked ? 'active' : ''}`}>
          <Link onClick={handleClick} to="/">Home</Link>
          <Link onClick={handleClick} to="/landings">Asteroides</Link>
          <Link onClick={handleClick} to="/neas">NEAs</Link>
          <Link onClick={handleClick} to="/landings/list">Landings List</Link>
          {userLogged===""?<div>
          <Link onClick={handleClick} to="/login">Login</Link>
          <Link onClick={handleClick} to="/signUp">Registro</Link>
          </div>:<Link onClick={handleLogout}>Logout</Link>}
        </div>
      
        <BgDiv className={`initial ${clicked ? ' active' : ''}`}></BgDiv>
      </NavContainer>
    </>
  )


}

export default Nav;


const NavContainer = styled.nav`
  .navButton{
    background-color: #c10230;
    border-color: #c10230;
    border-radius:5px;
    border-style: solid;
    border-width:1px;
    color:#ffffff;
    font-size:14px;
    letter-spacing:1.8px;
    line-height:24px;
    margin:0px 0px 0px 16px;
    padding:8px 24px;
    text-align:center;
    text-transform:uppercase;
    cursor:pointer;
  }
  .navImage{
    width:30%;
    filter:brightness(200%);
    margin:auto;
  }
  padding: .4rem;
  background-image: linear-gradient(to bottom, #070024 55%, rgba(0, 0, 0, 0) 100%);
  display: flex;
  align-items: center;
  justify-content: space-between;
  a{
    color: white;
    text-decoration: none;
    margin-right: 1rem;
    
  }
  .links{
    position: absolute;
    top: -700px;
    left: -2000px;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    transition: all .5s ease;
    a{
      color: white;
      font-size: 2rem;
      display: block;
    }
    @media(min-width: 768px){
      position: initial;
      margin: 0;
      background-image: linear-gradient(to bottom, #348c22, #00864f, #007d6d, #00727b, #1e6578);
      a{
        font-size: 1rem;
        color: white;
        display: inline;
      }
      display: block;
    }
  }
  .links.active{
    width: 100%;
    display: block;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    top: 30%;
    left: 0;
    right: 0;
    text-align: center;
    a{
      font-size: 2rem;
      margin-top: 1rem;
      color: white;
    }
  }
  .burguer{
    @media(min-width: 768px){
      display: none;
      
    }
  }
`

const BgDiv = styled.div`
  background-color: RGBA(0,0,0,0.70);
  position: absolute;
  top: -1000px;
  left: -1000px;
  width: 100%;
  height: 100%;
  z-index: -1;
  transition: all .6s ease ;
  
  &.active{
    border-radius: 0 0 0 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`