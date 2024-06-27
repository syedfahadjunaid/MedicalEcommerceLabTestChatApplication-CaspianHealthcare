import React from "react";
import "./PatientBigCard.css";
import img from "../img/Rectangle 110478.jpg";
function PatientBigCard({}) {
  return (
    <div className="patientBigCard">
      <div className="patientBigCard_top">
        <div className="patientBigCard_top_left">
          <img src={img} />
        </div>
        <div className="patientBigCard_top_right">
          <div className="patientBigCard_top_right_top">
            <span>
              <p>Airi Satou</p>
              <span>
                <p>23 , M</p>
                <p>19-01-23</p>
              </span>
              <button >Close</button>
            </span>
          </div>
          <div className="patientBigCard_top_right_bottom">
            <p>
              Lorem ipsum dolor sit amet consectetur. Hendrerit tortor aliquam
              cursus risus venenatis nunc curabitur mattis amet. Lacus sit
              posuere donec dui commodo sed. Pellentesque eget sed purus montes
              ac nunc.
            </p>
            <span>
            Patient of  this doctor
            </span>
          </div>
        </div>
      </div>
      <div className="patientBigCard_bottom">
        <span>
            <p>Number</p>
            <strong>+91 45454545454</strong>
        </span>
        <span>
     <p>prescriptions</p>
        </span>
        <span>LAB  test </span>
      </div>
    </div>
  );
}

export default PatientBigCard;
