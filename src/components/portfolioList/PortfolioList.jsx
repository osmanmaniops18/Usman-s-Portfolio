import React from 'react';
import "./portfolioList.scss";

function PortfolioList({id,items,active,setselected}) {
  return (
    <li className={active ? "portfolioList active" : "portfolioList"} onClick={()=>setselected(id)}>
    {items.title}</li>
  )
}

export default PortfolioList;