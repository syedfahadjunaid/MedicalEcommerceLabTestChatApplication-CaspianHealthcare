import React from 'react'
import './FeatureCard.css'
import img from '.././img/image 19.jpg'
function FeatureCard({image}) {
  return (
    <div className='featureCard'>
        <div className='featureCard_img'>
            <img src={image?image:img}/>
        </div>
        {/* <div className='featureCard_title'>
            Title
        </div> */}
    </div>
  )
}

export default FeatureCard