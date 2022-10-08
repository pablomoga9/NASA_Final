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
        <label htmlFor="">Name:</label>
      </form>
    </>
  )
}

export default CreateLanding;
