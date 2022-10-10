import React, { useState } from "react";
import {useForm} from 'react-hook-form';
import axios from 'axios';

function CreateLanding(){
  const {register,formState:{errors},handleSubmit} = useForm();

  const onSubmit = async(form)=>{
    try{
      const res = await axios.post('http://localhost:3000/api/astronomy/landings/create',form)
    }
    catch(error){
      console.log(error);
    }
  }


  return(
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="">Nombre:</label>
        <input type="text" {
          ...register('name',{
            required:true,
            minLength:3
          })}/>{errors.name?.type==='required' && <p>El campo 'Nombre' es requerido</p>}
        <label htmlFor="">Año:</label>
        <input type="text" {
          ...register('year',{
            required:true,
            minLength:3
          })}/>{errors.year?.type==='required' && <p>El campo 'Año' es requerido</p>}
        <label htmlFor="">Masa:</label>
        <input type="text" {
          ...register('mass',{
            required:true,
            minLength:3
          })}/>{errors.mass?.type==='required' && <p>El campo 'Masa' es requerido</p>}
          <input type="submit" value="Enviar"/>
      </form>
    </>
  )
}

export default CreateLanding;
