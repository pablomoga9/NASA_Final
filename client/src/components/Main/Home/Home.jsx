import React, { useEffect } from "react";
import axios from 'axios';
import { useState } from "react";

const Home = ()=>{
    const [data,setData] = useState("");

  useEffect(()=>{
    const fetchImage = async()=>{
        try{
            const res = await axios.get(`https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_NASA_APIKEY}`);
            setData(res.data.hdurl);
        }
        catch(error){

        }
    }
    fetchImage()
  })

  return <img src={data} alt="" />
}
export default Home;
