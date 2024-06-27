import React from "react";
import "./DoctorCard.css";
import img from "../../../img/media.jpg";
import img1 from "../../../img/Ellipse 34.jpg";
import { Bookmark, HealthAndSafety, Language, LocationOn, Share, Star } from "@mui/icons-material";
import Button from "../../../Button/Button";
import { useNavigate } from "react-router-dom";

function DoctorCard() {
  const history=useNavigate()
  return (
    <div className="doctorcard">
      <div className="doctorcard_first">
        <img src={img} alt='doctor_hospital' loading="lazy"/>
      </div>
      <div className="doctorcard_second">
        <div className="doctorcard_second_left">
          <img src={img1} alt='doctor_profile_pic' loading="lazy"/>
          <span>
           
            <p> 100% Trusted</p>
            <HealthAndSafety />
          </span>
        </div>
        <div className="doctorcard_second_right">
          <div>
            <p>Dr Darshana R</p>
            <span>
              <p>4.9</p>
              <Star className="doctorcard_second_right_icon"/>
            </span>
          </div>
          <div className="doctorcard_second_right_details">
           <p>
           General Physician / Internal Medicine Specialist
           </p>
          </div>
          <div>
            <p>9 years  Exp</p>
          </div>
          <div>
            <p>Fees</p>
            <strong>₹500</strong>
          </div>
        </div>
      </div>
      <div className="doctorcard_third">
        <div>
            <span>
                <Language/>
            </span>
            <span>
                <p>English, Hindi, Telugu, Tamil, Kannada</p>
            </span>
        </div>
         <div>
            <span>
                <LocationOn style={{color:'#DC3545'}}/>
            </span>
            <span>
                <p> lucknow 266001,new lucknow </p>
            </span>
        </div>
      </div>
      <div className="doctorcard_fourth">
        <span onClick={()=>history('/doctorcheckout')}>
        <Button bg='#6C98FF' color='#fff' >book now appointment</Button>
        </span>
       
        <Bookmark className="doctorcard_fourth_icon"/>
        <Share className="doctorcard_fourth_icon"/>
      </div>
    </div>
  );
}

export default DoctorCard;
