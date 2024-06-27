import React, { useState } from "react";
import "./PatientsCard.css";
import img from "../img/Rectangle 110478.jpg";
import { ArrowForward, Close } from "@mui/icons-material";
import { Box, Modal, Typography } from "@mui/material";
import PatientBigCard from "./PatientBigCard";
function PatientsCard() {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 800,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div className="patientscard" onClick={handleOpen}>
      <div className="patientscard_left">
        <img src={img} />
      </div>
      <div className="patientscard_middle">
        <p>Airi Satou</p>
        <p>23 , M</p>
      </div>
      <div className="patientscard_right">
        <ArrowForward className="patientscard_right_arrow" />
        <p>19-01-23</p>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
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
                    <button onClick={handleClose}>Close</button>
                  </span>
                </div>
                <div className="patientBigCard_top_right_bottom">
                  <p>
                    Lorem ipsum dolor sit amet consectetur. Hendrerit tortor
                    aliquam cursus risus venenatis nunc curabitur mattis amet.
                    Lacus sit posuere donec dui commodo sed. Pellentesque eget
                    sed purus montes ac nunc.
                  </p>
                  <span>Patient of this doctor</span>
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
              <span>LAB test </span>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}

export default PatientsCard;
