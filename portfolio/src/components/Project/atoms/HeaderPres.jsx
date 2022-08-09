import React from 'react'

// Style
import './headerpres.css';

// image

import HeaderImg from '../../../assets/hmbs/HOME MADE BY SOPHIE.webm'

const HeaderPres = () => {
  return (
    <div>
      <div className='header-pres-container'>
        <video loop autoPlay> 
        <source src={HeaderImg} type="video/webm"></source>
        </video>
      </div>
      <div className='header-pres-main'>
        
      </div>
    </div>
  )
}

export default HeaderPres
