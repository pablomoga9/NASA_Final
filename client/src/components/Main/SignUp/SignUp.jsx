import React, { Component } from "react";
import {useForm} from 'react-hook-form';
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignUp = ()=>{
  const {register,formState:{errors},handleSubmit} = useForm();
  const navigate = useNavigate();


  const onSubmit = async(form)=>{
    try{
      console.log(form.email.substr(0, form.email.indexOf('@')))
      const newForm = {
        nickname:form.email.substr(0, form.email.indexOf('@')),
        password:form.password,
        email:form.email,
        picture:"",
        neasDiscovered:[] 
      }
      const res = await axios.post('http://localhost:3000/api/astronomy/users/create',newForm);
      navigate("/login");
    }
    catch(error){
      console.log(error);
    }
  }

  return(
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="">Escribe un email: </label>
        <input type="text" {
          ...register('email',{
            required:true,
            minLength:3
          })}/>{errors.email?.type==='required'&& <p>El campo 'Email' es requerido</p>}
        <label htmlFor="">Escribe una contraseña: </label>
        <input type="password" {
          ...register('password',{
            required:true,
            minLength:3
          })}/>{errors.email?.type==='required'&& <p>El campo 'Contraseña' es requerido</p>}
        <input type="submit" value="Crear" />
      </form>
    </>
  )
}

export default SignUp;
