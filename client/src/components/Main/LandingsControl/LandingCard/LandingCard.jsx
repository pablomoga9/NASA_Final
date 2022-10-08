import React,{useContext,useState,useEffect} from "react";
import axios from "axios";
import {landingsContext} from "../../../../context/landingsContext";
import uuid4 from "uuid4";
import ReactPaginate from 'react-paginate';
import EditCard from './EditCard/EditCard';
import {Link} from "react-router-dom";

const LandingCard = ()=>{
  const {landingsData,setLandingsData} = useContext(landingsContext);
 const itemsPerPage = 10;
 const [currentItems,setCurrentItems] = useState([]);
 const [pageCount,setPageCount] = useState(0);
 const [itemOffset,setItemOffset] = useState(0);

 useEffect(() => {
   
  const endOffset = itemOffset + itemsPerPage;
  setCurrentItems(landingsData.slice(itemOffset, endOffset));
  setPageCount(Math.ceil(landingsData.length / itemsPerPage));
}, [itemOffset, itemsPerPage,landingsData]);

const handlePageClick = (event) => {
  const newOffset = (event.selected * itemsPerPage) % landingsData.length;
  setItemOffset(newOffset);
};


  function handleAscendingDate(){
      const endOffset = itemOffset + itemsPerPage;
      const sortDate = (landingsData.sort((a,b)=> {return new Date(a.year)-new Date(b.year)}))
      setCurrentItems(sortDate.slice(itemOffset,endOffset));
    }

    function handleDescendingDate (){
      const endOffset = itemOffset + itemsPerPage;
      const sortDate = (landingsData.sort((a,b)=>{return new Date(b.year) - new Date(a.year)}))
      setCurrentItems(sortDate.slice(itemOffset,endOffset));
    }

    function handleAscendingMass(){
      const endOffset = itemOffset + itemsPerPage;
      const sortMass = (landingsData.sort((a,b)=>a.mass - b.mass))
      setCurrentItems(sortMass.slice(itemOffset,endOffset));
    }
    function handleDescendingMass(){
      const endOffset = itemOffset + itemsPerPage;
      const sortMass = (landingsData.sort((a,b)=>b.mass - a.mass))
      setCurrentItems(sortMass.slice(itemOffset,endOffset));
    }

  return(<div>
      <ReactPaginate
    breakLabel="..."
    nextLabel="next"
    onPageChange={handlePageClick}
    pageRangeDisplayed={1}
    pageCount={pageCount}
    previousLabel="previous"
    renderOnZeroPageCount={null}
    containerClassName="pagination"
    pageLinkClassName="page-num"
    previousLinkClassName="page-num"
    nextLinkClassName="page-num"
    activateLinkClassName="active"
  />
      <div className="sortFilters">
      <div className="sortPeriod">
        <p>Ordenar por Fecha: </p>
        <button onClick={handleAscendingDate} className="sortAscending">🢁</button>
        <button onClick={handleDescendingDate} className="sortPeriodDescending">🢃</button>
      </div>
      <div className="sortMass">
        <p>Ordenar por Masa: </p>
        <button onClick={handleAscendingMass} className="sortAscending">🢁</button>
        <button onClick={handleDescendingMass} className="sortPeriodDescending">🢃</button>
      </div>
     
    </div>
    {currentItems.map((item,i)=>(
      <div key={uuid4()} className="landingCard" >
       <Link to={`/landings/detail/${item.id}`}><h3>{item.name}</h3></Link>
        <p>Año: {item.year}</p>
        <p>Masa: {item.mass}</p>
        <EditCard key={i} data={item} />
      </div>
    ))}

  </div>
    
   
  )
}

export default LandingCard;
