import React, { useContext, useEffect,useState } from "react";
import { cartContext } from "../../../context/cartContext";
import { userContext } from "../../../context/userContext";
import { useNavigate } from "react-router-dom";
import {historyContext} from "../../../context/historyContext";
import axios from "axios";
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss';

const Cart = ()=>{
  const {products,setProducts} = useContext(cartContext);
  const {userLogged,setUserLogged} = useContext(userContext);
  const [userHistory,setUserHistory] = useState([]);
  const {history,setHistory} = useContext(historyContext);
  const navigate = useNavigate();

  useEffect(()=>{
    if(userLogged===""){
      navigate("/");
    }
    else{
      const getCart = async()=>{
        try{
          const res = await axios.get(`http://localhost:3000/api/astronomy/users/cart/${userLogged}`);
          setUserHistory(res.data[0].neasDiscovered)
          
        }
        catch(error){
          console.log(error);
        }
      }
      getCart();
    }
  },[])

  function clearCart(){
    setProducts([])
  }

  const buy = async()=>{
    try{
      // await setHistory(products) 
      // console.log(history);
      const res = await axios.put(`http://localhost:3000/api/astronomy/users/cartUpdate/${userLogged}`,products);
      Swal.fire({
        title: 'Compra realizada',
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        }
      })
      setProducts([])
    }
    catch(error){
      console.log(error);
    }
  }

  return(
    <>
      <div className="cartSpace">
        <h2>Productos añadidos</h2>
      <ul className="cartList">
      {products.length===0?<h3>No hay productos</h3>:products.map((item,i)=>{
      return <div key={i}>
        <li>
          <h3>{item.designation||item.name}</h3>
          <p>{item.discovery_date||item.year}</p>
          <p>{item.orbit_class||item.mass}</p>
        </li>
      </div>
    })}
    </ul>
          {products.length===0?null:<button onClick={buy}>Comprar</button>}
          <button onClick={clearCart}>Vaciar carro</button>
      </div>
    
  
    <div className="historyContainer">
      <h2>Historial de compra</h2>
    {userHistory.length===0?null:<ul className="historyList">{userHistory.map((item,i)=>{
    return <li key={i}>
        <h3>{item.designation||item.name}</h3>
          <p>{item.discovery_date||item.year}</p>
          <p>{item.orbit_class||item.mass}</p>
    </li>
  })}
    </ul>}
    </div>
    <div className="bg"></div>
    </>
  )
}

export default Cart;
