import React from 'react';
import "./testimonial.scss";

function Testimonial() {

  const data=[
    {
      id:1,
      name:"Usman",
      title:"React Developer",
      img:"assets/usman.png",
      desc:"Fresh Web Developer specializing in front and backend development.Experienced with all stages of the development cycle for dynamic web projects ",
      icon:"assets/youtube.png",
      
    },
    {
      id:2,
      name:"Usman",
      title:"Web Developer",
      img:"assets/usman.png",
      
      desc:"I'm React .js Developer by proffessional.Well Versed in numerous programming languages including HTML5,CSS3,JavaScript,MySQl and PHP.",
      icon:"assets/linkdin.png",
      featured:true,
    },
    // {
    //   id:3,
    //   name:"Usman",
    //   title:"React Developer",
    //   img:"assets/usman.png",
    //   icon:"assets/linkdin.png",
    //   desc:"It is a long established fact that a reader will be distracted It is a long established fact that a reader will be distracted",
     
      
    // },
  ]
  return (
    <>
    <div className='testimonial' id='testimonial'>
      <h1>Testimonial</h1>
      <div className="container">
      {data.map((items)=>(
        <div className={items.featured ? "card featured" : "card"}>
          <div className='top'>
            <img src='assets/down.png' alt='' className='left' />
            <img src={items.img} alt='' className='user' />
            <img src={items.icon} alt='' className='right' />
          </div>
          <div className='center'>
         {items.desc}
          </div>
          <div className='bottom'>
            <h3>{items.name}</h3>
            <h4>{items.title}</h4>
          </div>
        </div>
        ))}
      </div>
    </div>
    </>)
}

export default Testimonial;