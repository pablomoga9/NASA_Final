import React from "react";
import axios from "axios";

const EditCard = (props)=>{
  const neas = props.data;

  const deleteNea = async()=>{
    try{
      const res = await axios.delete(`http://localhost:3000/api/astronomy/neas/delete/${neas.designation}`);
    }
    catch(error){
      console.log(error);
    }
  }

  const updateNea = async()=>{
    try{
      const res = await axios.put(``)
    }
    catch(error){
      
    }
  }


  return(
    <>
      <button onClick={deleteNea}>Borrar</button>
      <button onClick={updateNea}>Actualizar</button>
    </>
  )
}

export default EditCard;
