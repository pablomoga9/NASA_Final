import React, { Component,useContext } from "react";
import {useForm} from 'react-hook-form';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {userContext} from "../../../context/userContext";
import jwt from 'jwt-decode'

const Login = ()=>{
  const {register,formState:{errors},handleSubmit} = useForm();
  const {userLogged,setUserLogged} = useContext(userContext);
  const navigate = useNavigate();

  const onSubmit = async(form)=>{
    try{
      const res = await fetch('http://localhost:3000/api/astronomy/users/login',{
        method:'POST',
        body: JSON.stringify(form),
        headers:{
            'Content-Type': 'application/json'
          },
          credentials:'include'
    })
      const seeUser = await axios.get('http://localhost:3000/api/astronomy/users/checkuser',{withCredentials:true});
      console.log(seeUser.data);
      const userToken = seeUser.data.msg.substr(6,seeUser.data.msg.length);
      
      const user = await jwt(userToken);
      await setUserLogged(user.nickname);
      navigate('/')
    }
    catch(error){
      console.log(error);
    }
  }

  return(
    <>
      <h2>Login</h2>    
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="">Email:</label>
        <input type="text" {
        ...register('email',{
          required:true,
          minLength:3
        })}/>{errors.email?.type==='required'&& <p>El campo 'Email' es requerido</p>}
        <label htmlFor="">Contraseña: </label>
        <input type="password" {
          ...register('password',{
            required:true,
            minLength:3
          })}/>{errors.email?.type==='required'&& <p>El campo 'Contraseña' es requerido</p>}
          <input type="submit" value="Login" />
      </form>
    
    </>
  )
}

export default Login;
