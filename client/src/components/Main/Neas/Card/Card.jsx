import React, { useContext,useState,useEffect} from "react";
import { neasContext } from "../../../../context/neasContext";
import uuid4 from "uuid4";
import ReactPaginate from 'react-paginate';

const Card = ()=>{
  const {data} = useContext(neasContext);
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
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };



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
    
    {currentItems.map(item=>(
      <div key={uuid4()} className="neasCard">
        <h3>{item.designation}</h3>
        <p>{item.discovery_date}</p>
        <p>{item.h_mag}</p>
        <p>{item.moid_au}</p>
        <p>{item.q_au_1}</p>
        <p>{item.q_au_2}</p>
        <p>{item.period_yr}</p>
        <p>{item.i_deg}</p>
        <p>{item.pha}</p>
        <p>{item.orbit_class}</p>
      </div>
    ))}
   
    
   </div>
    
  )
}

export default Card;
