import React from 'react'
import './Filter.css'

function Filter() {
  return (
    <div className='filterDiv'>
        <button className='filterBtn'>
        Conciertos
        </button>
        <button className='filterBtn'>
        Montañismo
        </button>
        <button className='filterBtn'>
        Senderismo
        </button>
    </div>
  )
}

export default Filter;