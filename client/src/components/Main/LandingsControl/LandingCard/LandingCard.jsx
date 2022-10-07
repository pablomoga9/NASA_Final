import axios from "axios";
import React from "react";
import { useEffect } from "react";

const LandingCard = (props)=>{
  const landing = props.data;
 

  const deleteLanding = async()=>{
    try{
      const res = await axios.delete(`http://localhost:3000/api/astronomy/landings/delete/${landing.id}`);
    }
    catch(error){
      console.log(error);
    }
  }

  return(
    
    <div className="landingCard">
    <h3>{landing.name}</h3>
    <p>Fecha: {landing.year}</p>
    <p>Masa: {landing.mass}</p>
    <button onClick={deleteLanding}>Delete</button>
  </div>
  )
}

export default LandingCard;
