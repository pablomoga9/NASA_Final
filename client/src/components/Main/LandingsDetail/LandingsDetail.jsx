import React from "react";
import {useParams} from 'react-router-dom';
import axios from 'axios';
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const LandingsDetail = ()=>{
  const {id} = useParams();
  const [detailData,setDetailData] = useState([]);

  useEffect(()=>{
    const fetchDetail = async()=>{
      try{
        const res = await axios.get(`http://localhost:3000/api/astronomy/landings/detail/${id}`);
        setDetailData(res.data);
      }
      catch(error){
        console.log(error);
      }
    }
    fetchDetail();
  },[])


  return(
    <>
      {detailData.length!==0?<div className="detailContainer">
        <div className="detailView">
          <h2>{detailData[0].name}</h2>
          <p>Clase: {detailData[0].name}</p>
          <p>Masa: {detailData[0].mass}</p>
          <p>Año: {detailData[0].year}</p>
          <h4>Geolocaclización</h4>
          <p>Latitud: {detailData[0].reclat}</p>
          <p>Longitud: {detailData[0].reclong}</p>
          <Link to={'/landings/list'}>
            <button>Volver</button>
          </Link>
        </div>
          <img src="https://img.atlasobscura.com/4XUByddG2AeijfQnvJ8VUclunQLxPvBotpiMcxRWziI/rt:fill/w:1200/el:1/q:81/sm:1/scp:1/ar:1/aHR0cHM6Ly9hdGxh/cy1kZXYuczMuYW1h/em9uYXdzLmNvbS91/cGxvYWRzL2Fzc2V0/cy8yYjhkYjU1Mjcw/YWQyOTAyYTRfR2V0/dHlJbWFnZXMtMTAx/NzgwNTMuanBn.jpg" alt="" />
      </div>:<h2>Loading...</h2>}
     
    </>
  )
}

export default LandingsDetail;
