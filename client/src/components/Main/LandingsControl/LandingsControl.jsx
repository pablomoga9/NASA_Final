import React, { useEffect,useState,useContext } from "react";
import axios from "axios";
import { landingsContext } from "../../../context/landingsContext";
import LandingCard from './LandingCard/LandingCard';
import CreateLanding from './CreateLanding/CreateLanding';

const LandingsControl = ()=>{
  const {landingsData,setLandingsData} = useContext(landingsContext);
  const [name,setName] = useState("");
 

  
  useEffect(()=>{
    const getLandings = async()=>{
      try{
        if(landingsData.length===0){
          const res = await axios.get('http://localhost:3000/api/astronomy/landings');
          setLandingsData(res.data);
        }
       
        console.log(landingsData);
      }
      catch(error){
        console.log(error);
      }
    }
    getLandings();

  },[landingsData])

 
  


  // function handleAscendingDate(){
  //   const sortDate = (landingsData.sort((a,b)=> {return new Date(a.year)-new Date(b.year)}))
  //   setLandingsData(sortDate)
  //   console.log(sortDate);
  //   }
  // function handleDescendingDate (){
  //   const sortDate = (landingsData.sort((a,b)=>{return new Date(b.year) - new Date(a.year)}))
  //   setLandingsData(sortDate)
  //   console.log(sortDate);
  //   }

  //   function handleAscendingMass(){
  //     const sortMass = (landingsData.sort((a,b)=>a.mass - b.mass))
  //     return setLandingsData(sortMass)
  //     console.log(sortMass);
  //   }
  //   function handleDescendingMass(){
  //     const sortMass = (landingsData.sort((a,b)=>b.mass - a.mass))
  //     setLandingsData(sortMass);
  //     console.log(sortMass);
  //   }


  // function handleDelete(i){
  //   console.log("hola")
  //   const leftLandings = landingsData.filter((item,j)=>i!==j);
  //   return setLandingsData(leftLandings)
  // }

  
  return(
    <>
  {/* <div className="searchByName">
    
      <label htmlFor="">Escribe un nombre:</label>
      <input name="name" type="text" className="searchName" onChange={handleChange} />
      
    
  </div>
  <div className="sortFilters">
      <div className="sortPeriod">
        <p>Ordenar por Fecha: </p>
        <button onClick={handleAscendingDate} className="sortAscending">🢁</button>
        <button onClick={handleDescendingDate} className="sortPeriodDescending">🢃</button>
      </div>
      <div className="sortMass">
        <p>Ordenar por Masa: </p>
        <button onClick={handleAscendingMass} className="sortAscending">🢁</button>
        <button onClick={handleDescendingMass} className="sortPeriodDescending">🢃</button>
      </div>
     
    </div>


    {landingsData.map((landing,i)=>{
        return <LandingCard key={i} data={landing} delete={handleDelete(i)}/>
    })} */}
      <div>
        <CreateLanding/>
        <LandingCard/>
      </div>
    </>
  )
}

export default LandingsControl;
