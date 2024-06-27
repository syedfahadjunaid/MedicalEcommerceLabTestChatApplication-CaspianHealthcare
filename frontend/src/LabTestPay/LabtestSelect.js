import React from 'react'
import './LabtestSelect.css'
import Cartcard from '../Cart Card/Cartcard'
import DoctorConsultentCard from '../DoctorConsultentCard/DoctorConsultentCard'
import CoupanCard from '../Coupan Card/CoupanCard'
import TestInformationCard from '../TestInformationCard/TestInformationCard'
import SubTotalCard from '../Sub Total Card/SubTotalCard'
import HealthCheckOutCard from '../HealthCheckOut Card/HealthCheckOutCard'
import img from '../img/CA-125-labtest-image.jpg'
import SubNav from '../Components/SubNav/SubNav'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Footer/Footer'
function LabtestSelect() {
  return (
    <>
      <div className='labtestselect'>
         <SubNav />
        <Navbar />
        <div className='labtestselect_heading'>
            <h6>Cart</h6>
        </div>
        <div className='labtestselect_top'>
            <div className='labtestselect_top_left'>
                <Cartcard productimg={img} setQuantity1={1}/>
                <DoctorConsultentCard width='600px'/>
                <CoupanCard/>
                <TestInformationCard/>
            </div>
            <div className='labtestselect_top_right'>
                <HealthCheckOutCard/>
                <SubTotalCard submitbuttom='SCHEDULE' link='/labcheckoutcard'/>
            </div>
        </div>
    </div>
    <Footer/>
    </>
  
  )
}

export default LabtestSelect