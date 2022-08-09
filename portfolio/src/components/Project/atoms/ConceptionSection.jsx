import React from 'react'

// Component
import ProjectPresentation from './ProjectPresentation'

// Styles
import './conception.css'

// Data

import Data from '../../utils/data.json'



const ConceptionSection = (props) => {

  return (
    <div>
    <div className='conception-container'>
      <h2>Conception</h2>
      <div src={props.url} className="conception-bg"></div>
    </div>
      <ProjectPresentation />
    </div>
  )
}

export default ConceptionSection
