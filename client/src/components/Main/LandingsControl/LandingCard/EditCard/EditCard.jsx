import React,{useContext} from "react";
import axios from "axios";
import {useForm} from 'react-hook-form';
import { useState } from "react";
import { userContext } from "../../../../../context/userContext";

const EditCard = (props)=>{
  const landings = props.data;
  const {register,formState:{errors},handleSubmit} = useForm();
  const [openForm,setOpenForm] = useState("");
  const {userLogged,setUserLogged} = useContext(userContext);
  
  const deleteLanding = async()=>{
      try{
        const res = await axios.delete(`http://localhost:3000/api/astronomy/neas/delete/${landings.id}`);
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
      const applyForm={
        name:landings.name,
        id:landings.id,
        nametype:landings.nametype,
        reclass:landings.reclass,
        mass:form.mass,
        fall:landings.fall,
        year:form.year,
        reclat:landings.reclat,
        reclong:landings.reclong,
        geolocation:landings.geolocation
      }
      
      const res = await axios.put('http://localhost:3000/api/astronomy/landings/update/',applyForm);
    }
    catch(error){
      console.log(error);
    }
  }


  return(
    <>
    <button onClick={deleteLanding}>Borrar</button>
      <button onClick={openUpdate}>Actualizar</button>
      {userLogged===""?null:<button onClick={addCart}>Añadir al carro</button>}
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
