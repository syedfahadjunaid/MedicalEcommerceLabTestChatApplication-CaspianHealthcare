import React from 'react'
import './Banner.css'
function Banner({img}) {
  return (
    <div className='banner'>
        <img src={img} alt='banner'/>
    </div>
  )
}

export default Banner