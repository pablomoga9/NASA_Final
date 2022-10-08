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
        <Link to={'/neas'}>
           <button>Volver</button>
        </Link>
      </div>
      <img src="https://cdn.mos.cms.futurecdn.net/G8C7X7Po62vG5DcGEpE4He.jpg" alt="" />
      </div>
      :<h2>Loading...</h2>}
      
    </>
  )
}


      

export default NeasDetail;
