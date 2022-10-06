import React from 'react';
import "./topbar.scss";
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';

function TopBar({menuOpen,setMenuOpen}) {
  return (
    <>
    <div className={'topbar ' + (menuOpen && "active") } id='topbar'>
      <div className='wrapper'>
        <div className='left'>
          <a href='#intro' className='logo'>Usman.</a>
          <div className='itemContainer'>
          <PersonIcon className="icon" />
          <span>+92315-7534540</span>
          </div>
          <div className='itemContainer'>
          <EmailIcon className="icon"/>
          <span>musmanvk18@gmail.com</span>
          </div>
        </div>
        
        <div className='right'>
          <div className='hamburger' onClick={()=>setMenuOpen(!menuOpen)}>
            <span className='line1'></span>
            <span className='line2'></span>
            <span className='line3'></span>
          </div>
        </div>
      </div>
    </div>
    </>)
}

export default TopBar