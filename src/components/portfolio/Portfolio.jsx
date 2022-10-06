import React, { useState, useEffect } from 'react';
import "./portfolio.scss";
import PortfolioList from '../portfolioList/PortfolioList';
import {featuredPortfolio,webPortfolio,appPortfolio,designPortfolio,brandPortfolio,contentPortfolio} from "../../data.js"

function Portfolio() {

  const[selected,setselected]=useState("featured");
  const[data,setData]=useState([]);

  const list=[
    {
      id:"featured",
      title:"Featured",
    },
    {
      id:"mobile app",
      title:"Mobile App",
    },
    {
      id:"web app",
      title:"Web App",
    },
    {
      id:"design",
      title:"Design",
    },
    {
      id:"branding",
      title:"Branding",
    },
    {
      id:"content",
      title:"Content",
    }
  ]



  useEffect(()=>{

    switch(selected){
      case "featured":
        setData(featuredPortfolio);
        break;
        case "mobile app":
        setData(appPortfolio);
        break;
        case "web app":
        setData(webPortfolio);
        break;
        case "design":
        setData(designPortfolio);
        break;
        case "branding":
        setData(brandPortfolio);
        break;
        case "content":
        setData(contentPortfolio);
        break;
        default:
          setData(featuredPortfolio);
    }


  },[selected])

  return (
    <>
    <div className='portfolio' id='portfolio'>
      <h1>Portfolio</h1>
      <ul>
        {list.map((items)=>(
          <PortfolioList items={items} active={selected===items.id}
            setselected={setselected}
            id={items.id}
          />
        ))}
      </ul>
      <div className='container'>
        
        {data.map((items)=>(
          <div className='items'>
        
          <img src={items.src} alt='App'/>
          <h3>{items.title}</h3>
        </div>
        ))}
        
        
      </div>
    </div>
    </>)
}

export default Portfolio;