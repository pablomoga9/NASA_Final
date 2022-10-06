import React, { useEffect,useState,useContext } from "react";
import axios from "axios";
import { landingsContext } from "../../../context/landingsContext";
import LandingCard from './LandingCard/LandingCard';

const LandingsControl = ()=>{
  const {landingsData,setLandingsData} = useContext(landingsContext);
  
  useEffect(()=>{
    const getLandings = async()=>{
      try{
        if(landingsData.length==0){
          const res = await axios.get('http://localhost:3000/api/astronomy/landings')
          setLandingsData(res.data);
        }
        
      }
      catch(error){
        console.log(error);
      }
    }
    getLandings();
  },[landingsData])

  
  return(
    <>
    {landingsData?landingsData.map((landing,i)=>{
        return <LandingCard key={i} data={landing}/>
    }):null}
    </>
  )
}

export default LandingsControl;
