import React from 'react'
import './DoctorSpecialistCard.css'
import img from '../../../img/Ellipse 34.jpg'
function DoctorSpecialistCard() {
  return (
    <div className='doctorSpecialistCard'>
        <div className='doctorSpecialistCard_left'>
            <img src={img}/>
        </div>
        <div className='doctorSpecialistCard_right'>
            <h6>Allergist and Clinical Immunologist</h6>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
        </div>
    </div>
  )
}

export default DoctorSpecialistCard