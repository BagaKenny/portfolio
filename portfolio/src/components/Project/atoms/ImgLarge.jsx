import React from 'react';

// Style
import './imgstyle.css'

const ImgLarge = (props) => {
  return (
    <div className="img-large">
      <img src={props.url} ></img>
    </div>
  )
}

export default ImgLarge