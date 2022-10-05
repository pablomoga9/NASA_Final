import React, { useContext,useEffect} from "react";
import { landingsContext } from "../../../context/landingsContext";
import axios from "axios";
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

const Landings = () =>{
    const {landingsData,setLandingsData} = useContext(landingsContext);
    const landingIcon = new L.Icon({
      iconUrl: require('https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/36211/comet-meteorite-clipart-md.png'),
      iconRetinaUrl: require('https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/36211/comet-meteorite-clipart-md.png'),
      iconAnchor: null,
      popupAnchor: null,
      shadowUrl: null,
      shadowSize: null,
      shadowAnchor: null,
      iconSize: new L.Point(60, 75),
      className: 'leaflet-div-icon'
  });
  
    useEffect(()=>{
      const getLandings = async()=>{
        try{
          if(landingsData.length==0){
            const res = await axios.get('http://localhost:3000/api/astronomy/landings');
            await setLandingsData(res.data);
            
          }
        } 
        catch(error){
          console.log(error);
        }
      }
      getLandings();
   },[landingsData]);

 
  
    return(
    <>
        <MapContainer style={{width:'100%',height:'500px'}} center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
      <TileLayer
        attribution="© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>"
        url="https://api.mapbox.com/styles/v1/mogar99/cl8w4411n000j15prntrktrgw/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoibW9nYXI5OSIsImEiOiJja2Z3ZDJoaGQxOXFqMzN0OHBhajdjMXBxIn0.1-1aPslRK9n1m1QAS20q3g"
      />
      <Marker position={[51.505, -0.09]} icon={landingIcon}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
    </>
    )
}

export default Landings;
