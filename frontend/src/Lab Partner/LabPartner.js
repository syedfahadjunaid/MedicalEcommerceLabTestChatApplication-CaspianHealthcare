import React from "react";
import "./LabPartner.css";
import img from '.././img/image 19.jpg'
function LabPartner() {
  return (
    <div className="labpatner">
      <div className="labpatner_left">
        <h6>Lab Name</h6>
        <p>
          "We wanted to collaborate with a diagnostic platform that shares our
          values of maintaining high quality at every step of the patient
          journey. From choosing the lab tests to delivering the test reports,
          1mg ensures that the quality is intact in the entire process ensuring
          a smooth patient journey."
        </p>
      </div>
      <div className="labpatner_right">
   <img src={img}/>
      </div>
    </div>
  );
}

export default LabPartner;
