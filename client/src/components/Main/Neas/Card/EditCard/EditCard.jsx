import React, { useContext } from "react";
import axios from "axios";
import {useForm} from 'react-hook-form';
import { useState } from "react";
import { userContext } from "../../../../../context/userContext";

const EditCard = (props)=>{
  const neas = props.data;
  const {register,formState:{errors},handleSubmit} = useForm();
  const [openForm,setOpenForm] = useState("");
  const {userLogged,setUserLogged} = useContext(userContext);
  const deleteNea = async()=>{
    try{
      const res = await axios.delete(`http://localhost:3000/api/astronomy/neas/delete/${neas.designation}`);
      props.remove();
    }
    catch(error){
      console.log(error);
    }
  }

  const addCart = async()=>{
    try{
      props.cart();
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
      const applyForm = {
        designation:neas.designation,
        discovery_date:form.discovery_date,
        h_mag:neas.h_mag,
        i_deg:neas.i_deg,
        moid_au:neas.moid_au,
        orbit_class:form.orbit_class,
        period_yr:neas.period_yr,
        pha:neas.pha,
        q_au_1:neas.q_au_1,
        q_au_2:neas.q_au_2
      }
      console.log(applyForm)
      const res = await axios.put('http://localhost:3000/api/astronomy/neas/update',applyForm);
    }
    catch(error){
      console.log(error);
    }
  }

  
  return(
    <>
      <button onClick={deleteNea}>Borrar</button>
      <button onClick={openUpdate}>Actualizar</button>
      {userLogged===""?null:<button onClick={addCart}>Añadir al carro</button>}
      {openForm==="open"?<div>
            <form onSubmit={handleSubmit(onSubmit)}>
               <label htmlFor="">Cambia la fecha de descubrimiento:</label>
              <input placeholder="xxxx-xx-xx" type="text" {
                ...register('discovery_date',{
                  required:true,
                  minLength:3
                })
              }/>
              <label htmlFor="">Cambia la clase orbital:</label>
              <input placeholder="Apollo" type="text" {
                ...register('orbit_class',{
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
