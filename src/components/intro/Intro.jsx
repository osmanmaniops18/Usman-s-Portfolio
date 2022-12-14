import React, { useEffect,useRef } from 'react';
import "./intro.scss";
import { init } from 'ityped';



function Intro() {

  const textRef=useRef();

  useEffect(()=>{
    init(textRef.current, { showCursor: false,
      // backDelay:  1500,
      // backSpeed:  60, 
      strings: ['Developer', 'Designer', 'Content Creator' ], });
  },[]);
  return (
    <>
    <div className='intro' id='intro'>
      <div className='left'>
        <div className='imagecontainer'>
          <img src='assets/usman.png' alt='usman'/>
        </div>
      </div>
      <div className='right'>
        <div className='wrapper'>
          <h2>Hi There.I'm</h2>
          <h1>M.Usman Haider</h1>
          <h3>React <span  ref={textRef}></span></h3>
        </div>
        <a href='#portfolio'>
          <img src='assets/down.png' alt='down'/>
        </a>
      </div>
    </div>
    </>)
}

export default Intro;