import {
LinkedCamera,
  Phone,
  Search,
} from "@mui/icons-material";
import React, { useState } from "react";
import Button from "../../Button/Button";
import img from "../../img/Rectangle 110433.jpg";
import img1 from "../../img/image 37.jpg";
import img2 from "../../img/image 40.jpg";
import img3 from "../../img/image 41.jpg";
import "./QuickOrderPage.css";

import QuickMedicineCard from "./QuickMedicineCard";

import { Link, useNavigate } from "react-router-dom";
import SubNav from "../SubNav/SubNav";
import Navbar from "../Navbar/Navbar";

function QuickOrderPage() {
  const history=useNavigate()
  const [buyMedicine, setBuyMedicine] = useState(false);
  const [address, setAddress] = useState(false);
  const buyMedicineHandle = () => {
    setBuyMedicine(true);
  };
  const addressHandle = () => {
    setAddress(true);
  };
  const [file, setFiles] = useState([0]);
  const fileHandle = (event) => {
    setFiles(event.target.file);
    console.log(event.target.name);
  };
  return (
    <>
     <SubNav />
        <Navbar />
      {!buyMedicine && (
        <div className="quickpage">
          <div className="quickpage_left">
            <h6>upload prescriptions</h6>
            <p>Please attach a prescription to proceed</p>
            <div className="quickpage_left_upload">
              <LinkedCamera className="quickpage_left_upload_icon" />
              <input type="file" onChange={fileHandle}/>
              <p>Upload New</p>
            </div>
            <div className="quickpage_left_camera">
              <img src={img1} />
              <p>SAVED PRESCRIPTIONS</p>
            </div>
            <div className="quickpage_left_attached">
              <img src={img2} />
            </div>
            <button className="quickpage_left_button" onClick={buyMedicineHandle}>Continue</button>
          </div>
          <div className="quickpage_right">
            <h6>Prescription Guide</h6>
            <p>SHOW SAMPLE</p>
            <div className="quickpage_right_sample">
              <div className="quickpage_right_sample_left">
                <img src={img} />
              </div>
              <div className="quickpage_right_sample_right">
                <ul>
                  <li>
                    <p> Don’t crop out any part of the image </p>
                  </li>
                  <li>
                    <p>Avoid blurred image</p>
                  </li>
                  <li>
                    <p>
                      Include details of doctor and patient + clinic visit date
                    </p>
                  </li>
                  <li>
                    <p>Medicines will be dispensed as per prescription</p>
                  </li>
                  <li>
                    <p>Supported files type: jpeg , jpg , png , pdf</p>
                  </li>
                  <li>
                    <p>Maximum allowed file size: 5MB</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
      {buyMedicine && (
        <div className="quickpage_medicine">
          <div className="quickpage_medicine_heading">
            <h6>Medicines</h6>
          </div>

          <div className="quickpage_medicine_top">
            <div className="quickpage_medicine_top_left">
              <span>
                <input type="radio" name='buyType'/>
                <QuickMedicineCard
                  title="order everything as per PRESCRIPTIONS for"
                  dic="duration of Dosage in days"
                  subtitle="e.g. 30"
                />
              </span>{" "}
              <span>
                <input type="radio" name='buyType'/>
                <QuickMedicineCard
                  title="search & add medicines "
                  // dic="duration of Dosage in days"
                  subtitle="Search Health Products"
                  icon={<Search />}
                />
              </span>{" "}
              <span>
                <input type="radio" name='buyType'/>
                <QuickMedicineCard
                  title="Call us for details"
                  // dic="duration of Dosage in days"
                  subtitle="+91 4567893210"
                  ficon={<Phone style={{color:'#28A745'}}/>}
                />
              </span>
              <Link className="quickpage_left_button1" to='/quickorderpage'>continue</Link>
            </div>
            <div className="quickpage_medicine_top_right">
              <img src={img3} />

           
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default QuickOrderPage;
