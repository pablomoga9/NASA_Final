import React from "react";
import axios from "axios";
import {useForm} from 'react-hook-form';
import { useState } from "react";

const EditCard = (props)=>{
  const landings = props.data;
  const {register,formState:{errors},handleSubmit} = useForm();
  const [openForm,setOpenForm] = useState("");
  
  const deleteLanding = async()=>{
      try{
        const res = await axios.delete(`http://localhost:3000/api/astronomy/neas/delete/${landings.id}`)
      }
      catch(error){
        console.log(error);
      }
  }


  const openUpdate = async()=>{
    try{
      openForm==="open"?setOpenForm(""):setOpenForm("open");
    }
    catch(error){
      console.log(error);
    }
  }

  const onSubmit = async(form)=>{
    try{
      console.log(form.discovery_date)
      
      
      const res = await axios.put('http://localhost:3000/api/astronomy/neas/update');
    }
    catch(error){
      console.log(error);
    }
  }


  return(
    <>
    <button onClick={deleteLanding}>Borrar</button>
      <button onClick={openUpdate}>Actualizar</button>
      {openForm==="open"?<div>
            <form onSubmit={handleSubmit(onSubmit)}>
               <label htmlFor="">Cambia el año:</label>
              <input placeholder="xxxx-xx-xx" type="text" {
                ...register('year',{
                  required:true,
                  minLength:3
                })
              }/>
              <label htmlFor="">Cambia la masa:</label>
              <input placeholder="30000" type="text" {
                ...register('mass',{
                  required:true,
                  minLength:3
                })
              }/>
              <input type="submit" value="Enviar"/>
            </form>
        </div>:null}
    </>
  )
}

export default EditCard;
