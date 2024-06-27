import React from 'react'
import './Banner1.css'
function Banner1({img}) {
  return (
    <div className='banner1'>
        <img src={img} alt='banner1'/>
    </div>
  )
}

export default Banner1