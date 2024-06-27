import {
  CalendarMonth,
  Edit,
  Face,
  FmdGood,
  Vaccines,
} from "@mui/icons-material";
import React from "react";
import LabTestNav from "../Components/Lab Test Nav/LabTestNav";
import CoupanCard1 from "../Coupan Card/CoupanCard1";
import HealthCheckOutCard from "../HealthCheckOut Card/HealthCheckOutCard";
import SubTotalCard from "../Sub Total Card/SubTotalCard";
import "./LabTestPay.css";
import LabTestCheckOutCard from "../LabTestCheckOutCard/LabTestCheckOutCard";
import DoctorConsultentCard from "../DoctorConsultentCard/DoctorConsultentCard";
import SubNav from "../Components/SubNav/SubNav";
import Navbar from "../Components/Navbar/Navbar";
function LabTestPay() {
  return (
    <div className="labtestpay">
       <SubNav />
        <Navbar />
      <LabTestNav />
      <div className="labtestpay_top">
        <div className="labtestpay_top_left">
          <div className="labtestpay_top_left_heading">
            <span>order overview</span>
            <span>
              <Vaccines /> + Add more test{" "}
            </span>
          </div>
          <div className="labtestpay_top_left_patient_details">
            <div className="labtestpay_top_left_patient_details_heading">
              <h6>patient details</h6>
              <span>
                <Edit />
                <p> Edit details</p>
              </span>
            </div>
            <div className="labtestpay_top_left_patient_details_container">
              <div className="labtestpay_top_left_patient_details_container_patients">
                <span className="labtestpay_top_left_patient_details_container_patients_span">
                  <Face />
                  <p style={{color:'#2A7FBA' ,fontWeight:'500',fontSize:'18px'}}>Patient</p>
                </span>
                <p style={{color:'#DC3545',fontSize:'18px',fontWeight:'500'}}>+ ADD PATIENT</p>
                <span style={{marginLeft:'15px',marginTop:'10px' ,fontSize:'18px',fontWeight:"400"}}>
                  nemeis
                  <br/>
                  <small style={{fontSize:'18px',fontWeight:"400"}}>23, male</small>
                </span>
              </div>
              <div className="labtestpay_top_left_patient_details_container_address">
                <span className="labtestpay_top_left_patient_details_container_address_span">
                  <FmdGood />
                  <p style={{color:'#2A7FBA' ,fontWeight:'500',fontSize:'18px'}}>Address</p>
                </span>
                <p style={{fontSize:'16px',fontWeight:'500'}}>for home sample collection</p>
                <p style={{fontSize:'18px' ,fontWeight:"400"}}>nemesis ,<br/> new lucknow lucknow, 226001</p>
              </div>
              <div className="labtestpay_top_left_patient_details_container_timeanddate">
                <span className="labtestpay_top_left_patient_details_container_timeanddate_span">
                  <CalendarMonth />
                  <p style={{color:'#2A7FBA' ,fontWeight:'500',fontSize:'18px'}}>Time & date slot</p>
                </span>
                <p style={{fontSize:'16px',fontWeight:'500'}}>for home sample collection</p>
                <p style={{fontSize:'18px' ,fontWeight:"400"}}>februay 19, 2023 01:00PM - 02:00PM</p>
              </div>
            </div>
          </div>
          <LabTestCheckOutCard width='836px'/>
          <DoctorConsultentCard width='836px'/>
        </div>
        <div className="labtestpay_top_right">
          <HealthCheckOutCard />
          <span>
            <CoupanCard1 />
          </span>

          <SubTotalCard />
        </div>
      </div>
    </div>
  );
}

export default LabTestPay;
