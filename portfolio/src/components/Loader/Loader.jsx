import React, { useRef, useEffect } from 'react'

const Loader = () => {
  return (
    <div className='loading-screen'>
        <div className='loading-section'>
            <div className='title'>Baga</div>
            <div className='bracket'>(</div>
            <div className='loader'></div>
            <div className='bracket bracket2'>)</div>
            <div className='title'>Kenny Jr</div>
        </div>
    </div>
  )
}

export default Loader