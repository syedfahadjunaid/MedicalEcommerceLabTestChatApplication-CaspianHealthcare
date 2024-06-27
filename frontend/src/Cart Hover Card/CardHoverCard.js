import React from 'react'
import { Link } from 'react-router-dom'
import './CardHoverCard.css'
function CardHoverCard() {
  return (
    <div className='cardhovercard'>
<div className='cardhovercard_heading'>

    <p>Cart</p>
    <Link to='/cart'>View All</Link>
</div>
    </div>
  )
}

export default CardHoverCard