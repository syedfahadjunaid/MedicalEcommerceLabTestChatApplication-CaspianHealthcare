import { Delete } from '@mui/icons-material'
import React from 'react'
import './LabTestCheckOutCard.css'
import DoctorConsultentCard from '../DoctorConsultentCard/DoctorConsultentCard'
function LabTestCheckOutCard({width}) {
  return (
    <>
    <div className='labtestcheckoutcard' style={{width:`${width}`}}>
        <div className='labtestcheckoutcard_heading'>
            <p>PATHOLOGY TESTS (1)</p>
            <p>Tata 1mg Labs (Tata 1mg Technologies Private Limited )</p>
        </div>
        <div className='labtestcheckoutcard_details'>
           <div>
           <span>
                <p className='labtestcheckoutcard_details_test'>Comprehensive Gold Full Body Checkup</p>
                <p className='labtestcheckoutcard_details_testtime'>E-Reports with in 24 hours post sample collection</p>
            </span>
            <span>
                <strong className='labtestcheckoutcard_details_price'>₹2000</strong>
                <p className='labtestcheckoutcard_details_discount'>Mrp <s>3000</s></p>
            </span>
            
            </div> 
         <div>
            <span className='labtestcheckoutcard_details_remove'>
                <Delete/>
                <p>Remove</p>
            </span>
            <span className='labtestcheckoutcard_details_patient'>
                1 patient
            </span>
         </div>
        </div>
    </div>
   
    </>
  )
}

export default LabTestCheckOutCard