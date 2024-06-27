import React from "react";
import "./OrderWithPriscription.css";
import { useState } from "react";
import { ArrowForwardIos, LinkedCamera } from "@mui/icons-material";
import img from "../img/image 37.jpg";
import img1 from "../img/Rectangle 91.jpg";
import img2 from "../img/image 38.jpg";
import Button from "../Button/Button";
import { Box, Modal, Typography } from "@mui/material";
import SubNav from "../Components/SubNav/SubNav";
import Navbar from "../Components/Navbar/Navbar";
function OrderWithPriscription() {
  const [stepOne, setStepOne] = useState(true);
  const [stepTwo, setStepTwo] = useState(false);
  const changeHandle = () => {
    setStepOne(false);
    setStepTwo(true);
  };
  const backHandle = () => {
    setStepOne(true);
    setStepTwo(false);
  };
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

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="orderwithpriscription">
        <SubNav />
        <Navbar />
      <div className="orderwithpriscription_heading">
        <h6>Book Test From Prescription</h6>
        <div className="orderwithpriscription_heading_heading">
          <span>
            Step1:
            <p>Upload Prescription</p>
          </span>
          <span className={stepTwo ? "active_steptwo" : ""}>
            Step2:
            <p>Confirm Order</p>
          </span>
        </div>
      </div>
      {stepOne && (
        <div className="orderwithpriscription_top">
          <div className="orderwithpriscription_top_left">
            <div className="orderwithpriscription_top_left_top">
              <span className="orderwithpriscription_top_left_top_upload">
                <LinkedCamera
                  style={{ color: "#9A5BFF" }}
                  className="orderwithpriscription_top_left_top_icon"
                />
                <input type="file" />
              </span>
              <span onClick={handleOpen} style={{ cursor: "pointer" }}>
                <img src={img} />
              </span>
            </div>
            <div className="orderwithpriscription_top_left_bottom">
              <span onClick={changeHandle}>
                <Button bg="#6C98FF" color="#fff">
                  Continue
                </Button>
              </span>
            </div>
          </div>
          <div className="orderwithpriscription_top_right">
            <h6
              style={{
                color: "#6C98FF",
                fontSize: "25px",
                fontWeight: "500",
                marginBottom: "8px",
              }}
            >
              Presciption
            </h6>
            <ul style={{ marginLeft: "20px" }}>
              <li
                style={{
                  fontSize: "18px",
                  fontWeight: "500",
                  marginBottom: "8px",
                }}
              >
                Avoid Blurred Image
              </li>
              <li
                style={{
                  fontSize: "18px",
                  fontWeight: "500",
                  marginBottom: "8px",
                }}
              >
                Ensure Suggested Test Are Cleary Visible in The Image{" "}
              </li>
            </ul>
            <p
              style={{
                fontSize: "22px",
                color: "#DC3545",
                fontWeight: "500",
                marginBottom: "10px",
              }}
            >
              Show Sample
            </p>
            <span>
              <img src={img1} />
            </span>
          </div>
        </div>
      )}
      {stepTwo && (
        <div className="orderwithpriscription_confirm_order">
          <div className="orderwithpriscription_confirm_order_top">
            <div>
              <span>
                <strong>1</strong>
                <p>Lorem Ipsum Dolor Sit Amet consectetur.</p>
              </span>
              <strong>₹250</strong>
            </div>
            <div>
              <span>
                <strong>2</strong>
                <p>Lorem Ipsum Dolor Sit Amet consectetur.</p>
              </span>
              <strong>₹50</strong>
            </div>
            <div className="orderwithpriscription_confirm_order_top_total">
              <span>Total(Tax Inc)l.</span>
              <strong>₹300</strong>
            </div>
          </div>
          <div className="orderwithpriscription_bottom">
            <span>
              <Button bg="#6C98FF" color="#fff">
                Pay
              </Button>{" "}
            </span>
            <span onClick={backHandle}>
              <Button bg="#6C98FF" color="#fff">
                Back
              </Button>
            </span>
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
            <span>
            <div className="discription_modal">
            <span className="discription_modal_img">
              <img src={img2} />
            </span>
            <span className="discription_modal_details">
              <span>
                <p>Lorem ipsum dolor sit amet consectetur.</p>
                <p>Lorem ipsum dolor sit amet consectetur.</p>
                <p>Lorem ipsum dolor sit amet consectetur.</p>
                <p>Lorem ipsum dolor sit amet consectetur.</p>
              </span>
              <span className="discription_modal_details_arrow">
                <ArrowForwardIos style={{ color: "#111" }} />
              </span>
            </span>
          </div>
          <div className="discription_modal">
            <span className="discription_modal_img">
              <img src={img2} />
            </span>
            <span className="discription_modal_details">
              <span>
                <p>Lorem ipsum dolor sit amet consectetur.</p>
                <p>Lorem ipsum dolor sit amet consectetur.</p>
                <p>Lorem ipsum dolor sit amet consectetur.</p>
                <p>Lorem ipsum dolor sit amet consectetur.</p>
              </span>
              <span className="discription_modal_details_arrow">
                <ArrowForwardIos style={{ color: "#111" }} />
              </span>
            </span>
          </div>{" "}
          <div className="discription_modal">
            <span className="discription_modal_img">
              <img src={img2} />
            </span>
            <span className="discription_modal_details">
              <span>
                <p>Lorem ipsum dolor sit amet consectetur.</p>
                <p>Lorem ipsum dolor sit amet consectetur.</p>
                <p>Lorem ipsum dolor sit amet consectetur.</p>
                <p>Lorem ipsum dolor sit amet consectetur.</p>
              </span>
              <span className="discription_modal_details_arrow">
                <ArrowForwardIos style={{ color: "#111" }} />
              </span>
            </span>
          </div>
            </span>
        
        </Box>
      </Modal>
    </div>
  );
}

export default OrderWithPriscription;
