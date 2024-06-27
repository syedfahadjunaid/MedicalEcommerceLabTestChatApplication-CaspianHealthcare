import {
  Dashboard,
  KeyboardArrowDown,
  KeyboardArrowRight,
} from "@mui/icons-material";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "./DashBoardCategories.css";
import img from '../img/3698384 1.jpg'
function DashBoardCategories({setDoctorSelect,doctorSelect}) {
  // const [doctorSelect, setDoctorSelect] = useState(false);
  // const doctorhandle = () => {
  //   setDoctorSelect(!doctorSelect);
  // };
  useEffect(() => {
    console.log(doctorSelect);
  }, [doctorSelect]);
  return (
    <div className="dashboardCategories">
      <div className="dashboardCategories_heading">
        <Dashboard className="dashboardCategories_heading_icon" />
        <h6>Dashboard</h6>
      </div>
      <div className="dashboardCategories_doctor">
        <span onClick={()=>setDoctorSelect(!doctorSelect)}>
          <p>Doctor</p>
          {!doctorSelect && (
            <KeyboardArrowRight className="dashboardCategories_doctor_arrow" />
          )}
          {doctorSelect && (
            <KeyboardArrowDown className="dashboardCategories_doctor_arrow" />
          )}
        </span>
        {doctorSelect && (
          <div className="dashboardCategories_doctor_detail">
            <p>Add Doctor</p>
            <p>All Doctor</p>
          </div>
        )}
      </div>
      <div className="dashboardCategories_patients">
        <span>
          <p>Patients</p>
          <KeyboardArrowRight />
        </span>
      </div>
      <div className="dashboardCategories_appoiments">
        <p>Appointement</p>
      </div>
      <div className="dashboardCategories_labtest">
        <span>
          <p>LAB test </p>
          <KeyboardArrowRight />
        </span>
      </div>
      <div className="dashboardCategories_setting">
        <span>
          <p>Settings </p>
          <KeyboardArrowRight />
        </span>
      </div>
      <img src={img} className='dashboardCategories_img'/>
    </div>
  );
}

export default DashBoardCategories;
