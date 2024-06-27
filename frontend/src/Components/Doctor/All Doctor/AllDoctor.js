import {
  AccountBalance,
  CalendarMonth,
  FilterAlt,
  LocationOn,
  Medication,
  Report,
  Search,
  Sort,
} from "@mui/icons-material";
import React from "react";
import { Link } from "react-router-dom";
import Button from "../../../Button/Button";
import img from "../../../img/Rectangle 176.jpg";
import DoctorCard from "../Doctor Card/DoctorCard";
import DoctorSpecialistCard from "../Doctor Card/DoctorSpecialistCard";
import "./AllDoctor.css";
import { useState } from "react";
import img1 from "../../../img/Rectangle 94.jpg";
import { Box, Modal, Typography } from "@mui/material";
// import Calendar from 'react-calendar';
import DateTimePicker from 'react-datetime-picker';
import 'react-datetime-picker/dist/DateTimePicker.css';
import 'react-calendar/dist/Calendar.css';
import 'react-clock/dist/Clock.css';
import SubNav from "../../SubNav/SubNav";
import Navbar from "../../Navbar/Navbar";
import Footer from "../../../Footer/Footer";

function AllDoctor() {
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);  
  const [search, setSearch] = useState(false);
  const [value, onChange] = useState(new Date());

  console.log(value)
  const searchHandle = () => {
    setSearch(true);
  };
  const [searchData, setSearchData] = useState("");
  const getSearchData = (event) => {
    console.log(event.target.value);
  };
  return (
    <>
     <div className="alldoctor">
       <SubNav />
        <Navbar />
      <div className="alldoctor_emergency">
        <div className="alldoctor_emergency_left">
          <p>Emergency number </p>
          <Report />
          <p>+91 1234567890</p>
        </div>
        <div className="alldoctor_emergency_right">
          <Button bg="#FFC107" color="#fff">
            Book for call
          </Button>
        </div>
      </div>
      <div className="alldoctor_doctor_search">
        <div className="alldoctor_doctor_search_left">
          <div className="alldoctor_doctor_search_left_top">
            <h6>Online Doctor Consultation</h6>
            <span>
              <div>
                <input type="text" placeholder="Location" />
                <LocationOn className="alldoctor_doctor_search_left_top_location" />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="search a doctor"
                  onChange={getSearchData}
                />
                <Search
                  className="alldoctor_doctor_search_left_top_search"
                  onClick={searchHandle}
                />
              </div>
            </span>
          </div>
          {!search && (
            <div className="alldoctor_doctor_search_left_bottom">
              <p>
                Feeling unwell? Tell us your symptoms for a quick assessment and
                get appropriate care !
              </p>
            </div>
          )}
          {search && (
            <div className="alldoctor_doctor_search_left_bottom">
              <div className="doctorsearchfilter_top">
                <span>
                  <Sort />
                  <p>Sort By</p>:
                  <select>
                    <option>Low to High</option>
                    <option>High to Low </option>
                  </select>
                </span>
                <span onClick={handleOpen} style={{cursor:'pointer'}}>
                  <FilterAlt className="doctorsearchfilter_top_icon" />
                  <p>Filter</p>
                </span>
              </div>
            </div>
          )}
          {search && (
            <div className="search_ads">
              <div className="search_ads_left">
                <img src={img1} />
                <span>Ads</span>
              </div>
              <div className="search_ads_right">
              <img src={img1} />
                <span>Ads</span>
              </div>
            </div>
          )}
        </div>
        <div className="alldoctor_doctor_search_right">
          <div className="alldoctor_doctor_search_right_chooseUs">
            <h6>Why caspian health-care</h6>
            <p>Lorem ipsum dolor sit,Lorem ipsum dolor sit</p>{" "}
            <p>Lorem ipsum dolor sit,Lorem ipsum dolor sit</p>{" "}
            <p>Lorem ipsum dolor sit,Lorem ipsum dolor sit</p>{" "}
            <p>Lorem ipsum dolor sit,Lorem ipsum dolor sit</p>{" "}
            <p>Lorem ipsum dolor sit,Lorem ipsum dolor sit</p>
          </div>
          {/* <div className="alldoctor_doctor_search_right_links">
            <Link
              className="alldoctor_doctor_search_right_links_icon_link"
              to="#"
            >
              <Medication className="alldoctor_doctor_search_right_links_icon" />{" "}
              Choose the doctor
            </Link>
            <Link
              className="alldoctor_doctor_search_right_links_icon_link"
              to="#"
            >
              <CalendarMonth className="alldoctor_doctor_search_right_links_icon" />{" "}
              Book a slot
            </Link>
            <Link
              className="alldoctor_doctor_search_right_links_icon_link"
              to="#"
            >
              <AccountBalance className="alldoctor_doctor_search_right_links_icon" />{" "}
              Make payment
            </Link>
          </div> */}
        </div>
      </div>
      {!search && (
        <div className="alldoctor_display_cards">
          <div className="alldoctor_display_card">
            <img src={img} />
            <div className="alldoctor_display_card_text">
              <p>Dermatology</p>
            </div>
          </div>
          <div className="alldoctor_display_card">
            <img src={img} />
            <div className="alldoctor_display_card_text">
              <p>General Physician</p>
            </div>
          </div>
          <div className="alldoctor_display_card">
            <img src={img} />
            <div className="alldoctor_display_card_text">
              <p>Paediatrics</p>
            </div>
          </div>
          <div className="alldoctor_display_card">
            <img src={img} />
            <div className="alldoctor_display_card_text">
              <p>Recommended Doctors</p>
            </div>
          </div>
        </div>
      )}

      <div className="alldoctor_specialties_cards ">
        <div className="alldoctor_specialties_cards_heading">
        <h6> SPECIALTIES</h6>
        </div>
      
        {!search && (
          <div className="alldoctor_specialties_card">
            <DoctorCard />
            <DoctorCard />
            <DoctorCard />
            <DoctorCard />
            <DoctorCard />
            <DoctorCard />
          </div>
        )}
        {search && (
          <div className="alldoctor_specialties_card">
            <DoctorCard />
            <DoctorCard />
            <DoctorCard />
            <DoctorCard />
            <DoctorCard />
            <DoctorCard />
            <DoctorCard />
            <DoctorCard />
            <DoctorCard />
            <DoctorCard />
          </div>
        )}
      </div>
      {!search && (
        <div className="alldoctor_specialties_specialties_cards">
          <div className="alldoctor_specialties_specialties_cards_heading">
          <h6> SPECIALTIES</h6>
          </div>
         
          <div className="alldoctor_specialties_specialties_cards_card">
            <DoctorSpecialistCard />
            <DoctorSpecialistCard />
            <DoctorSpecialistCard />
            <DoctorSpecialistCard />
            <DoctorSpecialistCard />
            <DoctorSpecialistCard />
            <DoctorSpecialistCard />
            <DoctorSpecialistCard />
            <DoctorSpecialistCard />
            <DoctorSpecialistCard />
            <DoctorSpecialistCard />
            <DoctorSpecialistCard />
          </div>
        </div>
      )}
       <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <DateTimePicker onChange={onChange} value={value} />
        </Box>
      </Modal>
    </div>
    <Footer/>
    </>
   
  );
}

export default AllDoctor;
