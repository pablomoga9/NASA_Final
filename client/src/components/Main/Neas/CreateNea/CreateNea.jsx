import React, { useContext, useState } from "react";
import {useForm} from 'react-hook-form';
import axios from "axios";
import {neasContext} from '../../../../context/neasContext';
function CreateNea(){
  const {register,formState:{errors},handleSubmit} = useForm();
  const {data,setData} = useContext(neasContext);

  const onSubmit = async(form)=>{
    try{
      const res = await axios.post('http://localhost:3000/api/astronomy/neas/create',form);
      await setData([form,...data]);
    }
    catch(error){
      console.log(error);
    }
  }
  
  
  return(
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="">Designación:</label>
        <input type="text" {
          ...register('designation',{
            required:true,
            minLength:3
          })}/>{errors.designation?.type==='required' && <p>El campo 'Designación' es requerido</p>}
        <label htmlFor="">Fecha de descubrimiento:</label>
        <input type="text" {
          ...register('discovery_date',{
            required:true,
            minLength:3
          })}/>{errors.discover?.type==='required' && <p>El campo 'Fecha de descubrimiento' es requerido</p>}
        <label htmlFor="">Clase orbital: </label>
        <input type="text" {
          ...register('orbit_class',{
            required:true,
            minLength:3
          })}/>{errors.orbitClass?.type==='required' && <p>El campo 'Clase orbital' es requerido</p>}
          <input type="submit" value="Enviar" />
      </form>
    </>
  )
}

export default CreateNea;
