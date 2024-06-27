import React from 'react'
import './DoctorConsultentCard.css'
function DoctorConsultentCard({width}) {
  return (
    <div className='doctorconsultentcard' style={{width:`${width}`}}>
        <p className='doctorconsultentcard_first'>Consult a Doctor FREE with this order!</p>
        <p className='doctorconsultentcard_last'>You can consult online once your test report is generated</p>
    </div>
  )
}

export default DoctorConsultentCard