import React from "react";
import "./DoctorCheckout.css";
import img from "../../../img/image 34.jpg";
import SubNav from "../../SubNav/SubNav";
import Navbar from "../../Navbar/Navbar";
function DoctorCheckout() {
  return (
    <div className="doctorcheckout">
       <SubNav />
        <Navbar />
      <div className="doctorcheckout_heading">
        <h6>CHECKOUT</h6>
      </div>
      <div className="doctorcheckout_cart">
        <div className="doctorcheckout_cart_left">
          <div className="doctorcheckout_cart_left_profile">
            <img src={img} />
            <div className="doctorcheckout_cart_left_profile_details">
              <h6>Dr. Sonali Jain</h6>
              <p>PHYSICIAN/ INTERNAL MEDICINE/ COVID CONSULT | 31 YRS. EXP</p>
            </div>
          </div>
          <div className="doctorcheckout_cart_left_appominent">
            <h6>Appointment Details</h6>
            <p>Clinic Visit</p>
            <p>time & date show here </p>
            <p>22 February 2023, 11: 00 AM</p>
            <p>
              APOLLO SUGAR CLINICS GURUGRAMA-26/1, 2nd Floor, Golf Course Road,
              Adjoining DT. Mega MallGurugram, Haryana
            </p>
          </div>
        </div>
        <div className="doctorcheckout_cart_right">
          <h6>PATIENT DETAILS</h6>
          <div className="doctorcheckout_cart_right_top">
            <p>
              Who is the patient? <br/> Make sure to add valid patient details, it
              will be reflected on Prescription and Invoice.
            </p>
            <span>
              <p>nemesis</p>
              <p>+ Add Member</p>
            </span>
            <p>*Please select the patient before proceeding to pay!</p>
          </div>
          <div className="doctorcheckout_cart_right_down">
            <h6>TOTAL CHARGES</h6>
            <div>
              <span className="doctorcheckout_cart_right_down_span_top">
                <p>Sub Total</p>
                <strong>₹1000</strong>
              </span>
            </div>
             <div>
              <span className="doctorcheckout_cart_right_down_span_down">
                <p>To Pay</p>
                <strong>₹1100</strong>
              </span>
            </div>
            <div className="doctorcheckout_cart_right_down_policy">
              <p>One-time Hospital Registration Charges might be applicable for new users.</p>
            </div>
            <div className="doctorcheckout_cart_right_down_paybutton"><p>Pay Now</p></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DoctorCheckout;
