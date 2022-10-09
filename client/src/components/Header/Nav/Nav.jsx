import React, { useContext, useState} from "react";
import {Link} from 'react-router-dom';
import styled from "styled-components";
import {userContext} from '../../../context/userContext';
import axios from "axios";
import {cartContext} from '../../../context/cartContext';

function Nav(){
  const [clicked, setClicked] = useState(false);
  const {userLogged,setUserLogged} = useContext(userContext);
  const {products,setProducts} = useContext(cartContext);
  const handleClick = () => {
    setClicked(!clicked)
  }

const handleLogout= async()=>{
  try{
    const res = axios.get('http://localhost:3000/api/astronomy/users/logout',{withCredentials:true})
    setUserLogged("");
    setProducts("");
  }
  catch(error){
    console.log(error);
  }
  
}


  return (
    <>
      <NavContainer>
      <div className='burguer'>
        
        </div>
        <div className={`links ${clicked ? 'active' : ''}`}>
          <Link onClick={handleClick} to="/">Home</Link>
          <Link onClick={handleClick} to="/landings">Asteroides</Link>
          <Link onClick={handleClick} to="/neas">NEAs</Link>
          <Link onClick={handleClick} to="/landings/list">Landings List</Link>
          {userLogged===""?<div>
          <Link onClick={handleClick} to="/login">Login</Link>
          <Link onClick={handleClick} to="/signUp">Registro</Link>
          </div>:<div>
              <p className="nickname">{userLogged}</p>
              <Link to="/cart">Carro{`(${products.length})`}</Link>
              <Link onClick={handleLogout}>Logout</Link>
            </div>}
        </div>
      </NavContainer>
    </>
  )


}

export default Nav;


const NavContainer = styled.nav`
 
   
  //     position: initial;
  //     margin: 0;
  //     background-image: linear-gradient(to bottom, #348c22, #00864f, #007d6d, #00727b, #1e6578);
  //     a{
  //       font-size: 1rem;
  //       color: white;
  //       display: inline;
  //     }
  //     display: block;
  //   }
  
  // .links.active{
  //   width: 100%;
  //   display: block;
  //   position: absolute;
  //   margin-left: auto;
  //   margin-right: auto;
  //   top: 30%;
  //   left: 0;
  //   right: 0;
  //   text-align: center;
  //   a{
  //     font-size: 2rem;
  //     margin-top: 1rem;
  //     color: white;
  //   }
  // }
  // .burguer{
  //   @media(min-width: 768px){
  //     display: none;
      
  //   }
  // }
`

