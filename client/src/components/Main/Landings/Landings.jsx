import React, { useContext, useEffect,useState } from "react";
import { landingsContext } from "../../../context/landingsContext";
import axios from "axios";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

const Landings = () => {
  const { landingsData, setLandingsData } = useContext(landingsContext);
  const [massFilter,setMassFilter] = useState([])
  const landingIcon = new L.Icon({
    iconUrl: require('../../../assets/marker2.png'),
    iconAnchor: null,
    popupAnchor: [0,-5],
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: new L.Point(38, 38),
    className: 'leaflet-div-icon'
  });

  useEffect(() => {
    const getLandings = async () => {
      try {
        if (landingsData.length === 0 && massFilter.length === 0) {
          const res = await axios.get('http://localhost:3000/api/astronomy/landings');
          await setLandingsData(res.data);

        }
      }
      catch (error) {
        console.log(error);
      }
    }
    getLandings();
  }, []);

  const getLandingsByMass = async(e)=>{
      try{
        e.preventDefault();
        const mass=e.target.mass.value;
        
        const res = await axios.get(`http://localhost:3000/api/astronomy/landings/${mass}`);
        setMassFilter(res.data);
        
      }
      catch(error){
        console.log(error);
      }
  }

  return (
    <>
      <MapContainer className="map" style={{ width: '100%', height: '500px' }} center={[51.505, -0.09]} zoom={6} scrollWheelZoom={true}>
        <TileLayer
          attribution="© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>"
          url="https://api.mapbox.com/styles/v1/mogar99/cl8w4411n000j15prntrktrgw/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoibW9nYXI5OSIsImEiOiJja2Z3ZDJoaGQxOXFqMzN0OHBhajdjMXBxIn0.1-1aPslRK9n1m1QAS20q3g"
        />

        {massFilter.length!==0?massFilter.map((landing,i) => 
          landing.geolocation && landing.reclat && landing.reclong?(
            <Marker position={[String(landing.reclat), String(landing.reclong)]} key={i} icon={landingIcon}>
            <Popup>
              <ul>
                <li><h3>{landing.name}</h3></li>
                <li><p>id: {landing.id}</p></li>
                <li> <p>mass: {landing.mass}</p></li>
                <li> <p>year: {landing.year}</p></li>
              </ul>
            </Popup>
          </Marker>):null):landingsData.map((landing,i) => 
          landing.geolocation && landing.reclat && landing.reclong?(
            <Marker position={[String(landing.reclat), String(landing.reclong)]} key={i} icon={landingIcon}>
            <Popup>
              <ul>
                <li><h3>{landing.name}</h3></li>
                <li><p>id: {landing.id}</p></li>
                <li> <p>mass: {landing.mass}</p></li>
                <li> <p>year: {landing.year}</p></li>
              </ul>
            </Popup>
          </Marker>):null)}
            
      </MapContainer>
            <form onSubmit={getLandingsByMass} className="mapForm">
              <label htmlFor="">Max mass:</label>
              <input type="text" name="mass" />
              <input type="submit" value="Do"/>
            </form>
    </>
  )
}

export default Landings;
