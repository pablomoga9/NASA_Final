import React from "react";
import { useEffect } from "react";

const LandingCard = (props)=>{
  const landing = props.data;
 
  return(
    
    <div className="landingCard">
    <h3>{landing.name}</h3>
    <p>Fecha: {landing.year}</p>
    <p>Masa: {landing.mass}</p>
  </div>
  )
}

export default LandingCard;
