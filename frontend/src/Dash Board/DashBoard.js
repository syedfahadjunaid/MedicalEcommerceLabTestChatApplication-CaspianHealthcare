import {
  AccountBox,
  ArrowForward,
  CalendarMonth,
  CurrencyExchange,
  CurrencyRupee,
  Face,
} from "@mui/icons-material";
// import { Box, Modal, Typography } from "@mui/material";
import React from "react";
import { useState } from "react";
import Button from "../Button/Button";
import Appoimenttable from "./Appoimenttable";
import "./DashBoard.css";
import DashBoardCategories from "./DashBoardCategories";
import DashBoardNav from "./DashBoardNav";
import PatientBigCard from "./PatientBigCard";
import PatientsCard from "./PatientsCard";
function DashBoard() {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  const [doctorSelect, setDoctorSelect] = useState(false);
  const doctorhandle = () => {
    setDoctorSelect(!doctorSelect);
  };
  return (
    <div className="dashboard">
      {/* <DashBoardNav /> */}
      <div className="dashboard_left">
        <DashBoardCategories
          doctorSelect={doctorSelect}
          setDoctorSelect={setDoctorSelect}
        />
      </div>
      <div className="dashboard_right">
        {!doctorSelect && (
          <>
            <h6>Good morning dr,nemesis</h6>
            <p>nemesis app Web | Admin Dashboard Template</p>
            <div className="dashboard_right_top">
              <div className="dashboard_right_top_earning">
                <CurrencyExchange />
                <span>
                  <p>Earnings </p>
                  <strong>6546</strong>
                </span>
              </div>
              <div className="dashboard_right_top_patients">
                <Face />
                <span>
                  <p>Patients </p>
                  <strong>400</strong>
                </span>
              </div>
              <div className="dashboard_right_top_appoiments">
                <CalendarMonth />
                <span>
                  <p>Appointments </p>
                  <strong>1360</strong>
                </span>
              </div>
              <div className="dashboard_right_top_revenue">
                <CurrencyRupee />
                <span>
                  <p>Total Revenue </p>
                  <strong>25554</strong>
                </span>
              </div>
            </div>
            <div className="dashboard_right_patients">
              <div className="dashboard_right_patients_heading">
                <p>New Patient </p>
                <span>
                  <p>View All</p>
                  <ArrowForward />
                </span>
              </div>
              <div className="dashboard_right_patients_cards">
                <PatientsCard />

                <PatientsCard />
                <PatientsCard />
                <PatientsCard />
                <PatientsCard />
                <PatientsCard />
                <PatientsCard />
                <PatientsCard />
                <PatientsCard />
                <PatientsCard />
                <PatientsCard />
                <PatientsCard />
              </div>
            </div>
            <div className="dashboard_right_latest_appoiment">
              <div className="dashboard_right_latest_appoiment_heading">
                <p>latest Appointment List</p>
                <span>
                  <p>View All</p>
                  <ArrowForward />
                </span>
              </div>
              <div className="dashboard_right_latest_appoiment_table">
                <Appoimenttable />
              </div>
            </div>
          </>
        )}
        <div className="doctor_upload">
          <h6>Add a New Doctor</h6>
          <div className="doctor_upload_top">
            <h6>Personal Information</h6>
            <div className="doctor_upload_top_top">
              <span>
                <AccountBox className="doctor_upload_top_top_icon" />
              </span>
              <form className="doctor_upload_top_top_form">
                <div>
                  <input type="text" placeholder="First Name" />
                  <input type="text" placeholder="Choose a Gender" />
                </div>
                <div>
                  <input type="text" placeholder="Last Name" />
                  <input type="text" placeholder="Date Of Birth" />
                </div>
                <div>
                  <input type="text" placeholder="Email" />
                  <input type="phone" placeholder="Mobile Number" />
                </div>
                <div>
                  <input type="text" placeholder="City" />
                  <input type="phone" placeholder="zip Code" />
                </div>
                <div className="doctor_upload_top_top_form_single">
                  <input type="text" placeholder="user  role " />
                </div>
                <div className="doctor_upload_top_top_form_single">
                  <input type="text" placeholder="Address " />
                </div>
                <div className="doctor_upload_top_top_form_single">
                  <textarea rows={6} placeholder="Bio" />
                </div>
                <Button bg="#6C98FF" color="#fff">
                  Add Doctor
                </Button>
              </form>
            </div>
          </div>
          <div className="doctor_upload_bottom">
            <h6>Medical Information</h6>
            <div className="doctor_upload_bottom_bottom">
              <form className="doctor_upload_bottom_bottom_form">
                <div>
                  <label>Main specialization</label>
                  <input
                    type="text"
                    placeholder="type  1 Main specialization"
                  />
                </div>
                <div>
                  <label>Secondary specialization</label>
                  <input
                    type="text"
                    placeholder="type  2 Main specialization"
                  />
                </div>
                <div>
                  <label>Medical Education</label>
                  <input
                    type="text"
                    placeholder="Medical University"
                  />
                </div>
                <div>
                  <label>your experience</label>
                  <input
                    type="text"
                    placeholder="1 year !!!!!"
                  />
                </div>
               
              </form>
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashBoard;
