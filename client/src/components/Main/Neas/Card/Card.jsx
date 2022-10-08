import React, { useContext,useState,useEffect} from "react";
import { neasContext } from "../../../../context/neasContext";
import uuid4 from "uuid4";
import ReactPaginate from 'react-paginate';
import axios from "axios";
import EditCard from './EditCard/EditCard';

const Card = ()=>{
  const {data,setData} = useContext(neasContext);
  const itemsPerPage = 10;
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
   
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(data.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(data.length / itemsPerPage));
  }, [itemOffset, itemsPerPage,data]);

  
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data.length;
    setItemOffset(newOffset);
  };


  function handleAscendingPeriod(){
    const endOffset = itemOffset + itemsPerPage;
    const sortPeriod = (data.sort((a,b)=> {return new Date(a.discovery_date)-new Date(b.discovery_date)}))
    setCurrentItems(sortPeriod.slice(itemOffset, endOffset));
    
  }
  function handleDescendingPeriod (){
    const endOffset = itemOffset + itemsPerPage;
    const sortPeriod = (data.sort((a,b)=>{return new Date(b.discovery_date) - new Date(a.discovery_date)}))
    setCurrentItems(sortPeriod.slice(itemOffset, endOffset));
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
        <p>Ordenar por Periodo: </p>
        <button onClick={handleAscendingPeriod} className="sortAscending">🢁</button>
        <button onClick={handleDescendingPeriod} className="sortPeriodDescending">🢃</button>
      </div>
     
    </div>
    {currentItems.map((item,i)=>(
      <div key={uuid4()} className="neasCard" >
        <h3>{item.designation}</h3>
        <p>Fecha descubrimiento: {item.discovery_date}</p>
        <p>Periodo del año: {item.period_yr}</p>
        <p>Clase orbital: {item.orbit_class}</p>
        <EditCard key={i} data={item} />
      </div>
    ))}
   
    
   </div>
    
  )
}

export default Card;
