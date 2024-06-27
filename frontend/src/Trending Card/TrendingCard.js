import React from 'react'
import './TrendingCard.css'
import img from '../img/image 46.jpg'
import { useNavigate } from 'react-router-dom'
function TrendingCard({image,title,link}) {
  const history=useNavigate()
  return (
    <div className='trendingCard' onClick={()=>history(`/product/${link}`)}>
        <div className='trendingCard_img'>
            <img src={image?image:img}/>

        </div>
        <div className='trendingCard_details'>
            <p>{title?title:"Diabetes Care"}</p>

        </div>
    </div>
  )
}

export default TrendingCard