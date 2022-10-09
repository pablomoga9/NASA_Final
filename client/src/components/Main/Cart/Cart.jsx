import React, { useContext, useEffect } from "react";
import { cartContext } from "../../../context/cartContext";
import { userContext } from "../../../context/userContext";
import { useNavigate } from "react-router-dom";

const Cart = ()=>{
  const {products,setProducts} = useContext(cartContext);
  const {userLogged,setUserLogged} = useContext(userContext);
  const navigate = useNavigate();

  useEffect(()=>{
    if(userLogged===""){
      navigate("/");
    }
  },[])

  function clearCart(){
    setProducts([])
  }

  return(
    <>
  {products.length===0?<h2>No hay productos</h2>:products.map((item,i)=>{
    return <div key={i}>
      <p>{item.orbit_class}</p>
    </div>
  })}
  <button onClick={clearCart}>Vaciar carro</button>
    </>
  )
}

export default Cart;
