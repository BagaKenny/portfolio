import React from 'react';

// Style
import './imgstyle.css'

const Video = (props) => {
  return (
    <div className='video-container'>
        <video loop autoPlay> 
        <source src={props.url} type="video/webm"></source>
        </video>
    </div>
  )
}

export default Video