import React, { Component } from "react";
import {useForm} from 'react-hook-form';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

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
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Registro satisfactorio',
        showConfirmButton: false,
        timer: 1500
      })
      navigate("/login")
      console.log(res.data)
      // res.data==="alreadyexists"?console.log("user exists"):navigate("/login");
      
    }
    catch(error){
      console.log(error);
    }
  }

  return(
    <>
     
      <form data-aos="fade-left"  data-aos-duration="2000" className="createForm" onSubmit={handleSubmit(onSubmit)}>
        <h1 className="loginTitle">Registro</h1>
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
        <input className="sendCreate" type="submit" value="Crear" />
      </form>
     
    </>
  )
}

export default SignUp;
