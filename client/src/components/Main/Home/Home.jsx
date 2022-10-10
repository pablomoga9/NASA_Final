import React, { useEffect } from "react";
import axios from 'axios';
import { useState } from "react";
import YoutubeEmbed from "./YoutubeEmbed/YoutubeEmbed";

const Home = ()=>{
    const [data,setData] = useState("");
    const [info,setInfo] = useState("");

  useEffect(()=>{
    const fetchImage = async()=>{
        try{
            if(data==""){
              const res = await axios.get(`https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_NASA_APIKEY}`);
              setData(res.data);
            }
        }
        catch(error){
          console.log(error)
        }
    }

    fetchImage()
  },[data])


  const showInfo = ()=>{
    try{
     if(info!==""){
      setInfo("");
     }else{
      setInfo(data.explanation)
     }
    }
    catch(error){
      console.log(error)
    }
  }

  return <div className="homeContainer">
     <div className="imageContainer">
     {data.media_type=="video"?<YoutubeEmbed embedId={data.hdurl} />:<img className="homeImage" src={data.hdurl} alt="" />}
      <button onClick={showInfo} className="imageInfo">i</button>
      <p className="imageText">{info}</p>
    </div>
      
  </div> 
 
   

  
  
}
export default Home;
