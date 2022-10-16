import React, { Component } from "react";
import {useParams} from 'react-router-dom';
import axios from 'axios';
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const NeasDetail = ()=>{
  const {designation} = useParams();
  const [detailData,setDetailData] = useState([]);
  useEffect(()=>{
    const fetchDetail = async()=>{
      try{
        const res = await axios.get(`http://localhost:3000/api/astronomy/neas/detail/${designation}`)
        console.log(res.data);
        setDetailData(res.data);
      }
      catch(error){
        console.log(error)
      }
    }
    fetchDetail();
  },[])

  console.log(detailData)
  return(
    <>
      {detailData.length!==0?<div className="detailContainer">
          <div className="detailView">
            <h2>{detailData[0].designation}</h2>
            <p>Campo de fuerza magnética:: {detailData[0].h_mag}</p>
            <p>Distancia mínima de intersección orbital: {detailData[0].moid_au}</p>
            <p>Periodo orbital: {detailData[0].period_yr}</p>
            <p>Asteroide potencialmente peligroso: {detailData[0].pha}/22</p>
            <p>Clase orbital: {detailData[0].orbit_class}</p>
            <p>Fecha de descubrimiento: {detailData[0].discovery_date}</p>
            <Link className="backDetail" to={'/neas'}>
              Volver
            </Link>
        </div>
        <img className="detailImg" src="https://www.thoughtco.com/thmb/-pw1dU4f3Ks8NLStcLfpHoNN9c8=/3000x3000/smart/filters:no_upscale()/asteroid-near-earth---3d-render-469055831-5aa1665e43a1030036cdc7c6.jpg" alt="" />
      </div>
      :<h2>Loading...</h2>}
      
    </>
  )
}


      

export default NeasDetail;
