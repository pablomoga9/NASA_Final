import React,{useEffect,useContext} from "react";

import axios from "axios";
import {neasContext} from '../../../context/neasContext';
import Card from './Card/Card';
import CreateNea from "./CreateNea/CreateNea";

const Neas = ()=>{
  const {data,setData} = useContext(neasContext);

  useEffect(()=>{
    
    const getNeas = async()=>{
      try{
        if(data.length==0){
          const res = await axios.get('http://localhost:3000/api/astronomy/neas');
        
          setData(res.data);
          console.log(data);
        }
       
      }
      catch(error){
        console.log(error);
      }
    }

    getNeas();
  },[data])


  return(
    <div>
        <CreateNea/>
        <Card/>
     
    </div>
  )
}

export default Neas;
