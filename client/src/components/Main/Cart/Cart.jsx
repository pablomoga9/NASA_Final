import React, { useContext, useEffect, useState } from "react";
import { cartContext } from "../../../context/cartContext";
import { userContext } from "../../../context/userContext";
import { useNavigate } from "react-router-dom";
import { historyContext } from "../../../context/historyContext";
import axios from "axios";
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import "bootswatch/dist/lux/bootstrap.min.css"

const stripePromise = loadStripe("pk_test_51MPTt5CSfHjUvrMmlhrE8oMS9QyWBjyiPOgbcjLYoaTAUT5pEzliZVsRFCEqIBO5VexwuUuAIk2cCaJHqvdsMxud00evKvXYVZ")

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const { products, setProducts } = useContext(cartContext);
  const { userLogged, setUserLogged } = useContext(userContext);
  const [loading, setLoading] = useState(false);



  const buy = async () => {
    try {
      // await setHistory(products) 
      // console.log(history);
      const res = await axios.put(`http://localhost:3000/api/astronomy/users/cartUpdate/${userLogged}`, products);
      Swal.fire({
        title: `Compra realizada`,
        text:products.length * 10 + "EUR",
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        }
      })
      setProducts([])
    }
    catch (error) {
      console.log(error);
    }
  }



  const handleSubmit = async (e) => {
    e.preventDefault();

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });
    setLoading(true);

    if (!error) {
      // console.log(paymentMethod)
      const { id } = paymentMethod;
      try {
        const { data } = await axios.post(
          "http://localhost:3000/api/checkout",
          {
            id, amount: products.length===0?0:products.length * 100
          }
        );
        console.log(data);

        elements.getElement(CardElement).clear();
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    }
  };

  console.log(!stripe || loading);

  return (
    <form className="card card-body" onSubmit={handleSubmit}>
      {/* User Card Input */}
      <div className="form-group">
        <CardElement />
      </div>

      <button disabled={!stripe} onClick={buy} className="btn btn-success">
        {loading ? (
          <div className="spinner-border text-light" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        ) : (
          "Buy"
        )}
      </button>
    </form>
  );
};

const Cart = () => {
  const { products, setProducts } = useContext(cartContext);
  const { userLogged, setUserLogged } = useContext(userContext);
  const [userHistory, setUserHistory] = useState([]);
  const { history, setHistory } = useContext(historyContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (userLogged === "") {
      navigate("/");
    }
    else {
      const getCart = async () => {
        try {
          const res = await axios.get(`http://localhost:3000/api/astronomy/users/cart/${userLogged}`);
          setUserHistory(res.data[0].neasDiscovered)

        }
        catch (error) {
          console.log(error);
        }
      }
      getCart();
    }
  }, [])

  function clearCart() {
    setProducts([])
  }

  

  return (
    <>
      <div data-aos="fade-left" data-aos-duration="2000" className="cartSpace">
        <h2>Productos añadidos</h2>
        <ul className="cartList">
          {products.length === 0 ? <h3>No hay productos</h3> : products.map((item, i) => {
            return <div key={i}>
              <li>
                <h3>{item.designation || item.name}</h3>
                <p>{item.discovery_date || item.year}</p>
                <p>{item.orbit_class || item.mass}</p>
              </li>
            </div>
          })}
        </ul>
        {/* {products.length === 0 ? null : <button onClick={buy}>Comprar</button>} */}
        {products.length === 0 ? null : <Elements stripe={stripePromise}>
          <div className='container p-4'>
            <div className='row'>
              <div className='col-md-4 offset-md-4'>
                <CheckoutForm />
              </div>
            </div>
          </div>
        </Elements>}
        <button onClick={clearCart}>Vaciar carro</button>
      </div>


      <div data-aos="fade-left" data-aos-duration="2000" className="historyContainer">
        <h2>Historial de compra</h2>
        {userHistory.length === 0 ? null : <ul className="historyList">{userHistory.map((item, i) => {
          return <li key={i}>
            <h3>{item.designation || item.name}</h3>
            <p>{item.discovery_date || item.year}</p>
            <p>{item.orbit_class || item.mass}</p>
          </li>
        })}
        </ul>}
      </div>
      <div className="bg"></div>
    </>
  )
}

export default Cart;
