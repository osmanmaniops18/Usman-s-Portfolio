import React, { useState } from 'react';
import "./work.scss";

function Works() {




  const[currentSlide,setcurrentSlide]=useState(0);

  

  const data=[
    {
     id:1,
     icon:"./assets/mobile.png",
     desc:"In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a",
     img:"./assets/Login.png",
     title:"Log In",
     
    },
    {
      id:2,
      icon:"./assets/mobile.png",
      desc:"In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a",
      img:"./assets/to-do.jpg",
      title:"To-Do-App",
      
     },
     {
      id:3,
      icon:"./assets/mobile.png",
      desc:"In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a",
      img:"./assets/ecommerce.jpg",
      title:"E-Commerce",
      
     },
  ]

  const handleClick=(way)=>{
    way==="left"
    ? setcurrentSlide(currentSlide > 0 ? currentSlide -1 :2)
    : setcurrentSlide(currentSlide < data.length -1 ? currentSlide + 1 :0);
  };
  return (
    <>
    <div className='works' id='works'>
      <div className='slider' style={{transform:`translateX(-${currentSlide * 100}vw)`}}>
        { data.map((items)=> ( <div className='container'>
          <div className='items'>
            <div className='left'>
              <div className='leftContainer'>
                <div className="imgContainer">
                 <img src={items.icon} alt='project' />
                </div>
                <h2>{items.title}</h2>
                <p>{items.desc}</p>
              <span>Projects</span>
              </div>
            </div>
            <div className='right'>
              <img src={items.img} alt='' />
            </div>
          </div>
        </div>))}
      </div>
      <img src='assets/down.png' alt='' className='arrow left' onClick={()=>handleClick("left")}/>
      <img src='assets/down.png' alt='' className='arrow right' onClick={()=>handleClick()}/>
    </div>
    </> )
}

export default Works;