import React from 'react'

// Style

import './projectpres.css'
import Technology from './Technology'

// Data

import Data from '../../utils/data.json'


const TextContext = (props) => {
  return (
    <div className='text-context-container'>
      <p className='text-context-p'>
      {props.firstText}
      <span className='text-context-p-span'>
      {props.secondText}
      </span>
      </p>
      {props.technology && <div className='text-header-div'>
      <hr />

      <Technology ui={Data[0].tech.ux} style={{color: 'white'}}/>
      </div>}
    </div>
  )
}

export default TextContext
