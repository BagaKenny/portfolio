import React from 'react';

// Style
import './imgstyle.css'

const ImgMedium = (props) => {
  return (
    <div>
      <img src={props.url} className="img-medium"></img>
    </div>
  )
}

export default ImgMedium