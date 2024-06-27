import React from 'react'
import './FeatureNormalCard.css'
import img1 from '../img/Rectangle 130.jpg'
import img2 from '../img/image 3.jpg'
import { useNavigate } from 'react-router-dom'
function FeatureNormalCard() {
    const history=useNavigate()
  return (
    <div className='featurenormalcard' onClick={()=>history('/singlepage/11')}>
        <img src={img1}/>
        <span>
            <img src={img2}/>
        </span>
    </div>
  )
}

export default FeatureNormalCard