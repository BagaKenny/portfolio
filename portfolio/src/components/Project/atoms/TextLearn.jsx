import React from 'react'

// Style

import './projectpres.css'
import Technology from './Technology'

// Data

import Data from '../../utils/data.json'


const TextLearn = (props) => {
  return (
    <div className='text-context-container lesson-learn'>
    <h1>
      What I learned
    </h1>
     <ul className='text-learn-list'>
      <li>I went into this project assuming the app would only provide a single function: to watch products and subscribe to the newsletter. I learned very quickly, however, that users needed information they didn’t have access to, in order to make those decisions. </li>
      <li>People search for things to watch in many different ways, and if those variables are available for filtering purposes, they would rather have more, not less options </li>
      <li>People wanted the website to tell them how they could make the most of what they had; or they wanted to know what action to take in order for them to save money. </li>
     </ul>
    </div>
  )
}

export default TextLearn
