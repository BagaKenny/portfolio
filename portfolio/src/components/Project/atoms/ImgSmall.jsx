import React from 'react';

// Style
import './imgstyle.css'

const ImgSmall = (props) => {
  return (
    <div>
      <img src={props.url} className="img-small"></img>
    </div>
  )
}

export default ImgSmall
