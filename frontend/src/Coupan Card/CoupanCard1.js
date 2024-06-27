import { ArrowBackIos, ArrowForwardIos, LocalOffer } from "@mui/icons-material";
import { Fade, Modal, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import "./CoupanCard1.css";
function CoupanCard() {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "0px",
    outline:'0px',

    boxShadow: 24,
    p: 4,
  };
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div className="coupanCard1">
      <span onClick={handleOpen}>
        <p>
          Apply Coupon <LocalOffer className="coupanCard_p1" />
        </p>

        <span>
          <ArrowForwardIos />
        </span>
      </span>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="applycoupanmodal1">
          <div className="coupanHeading1">
            <h6>Apply Coupon</h6>
            <span>
              <ArrowBackIos
                onClick={handleClose}
                className="coupanHeading_close1"
              />
            </span>
          </div>

          <div className="coupanEntery1">
            <input type="text" placeholder="Enter a Coupan" />
            <h6>Apply</h6>
          </div>

          <>
            <div className="coupanAvaliable">
              <div className="coupanAvaliable_top">
                <h6>what is the coupon!!</h6>
                <p>Lorem ipsum dolor sit amet consectetur.</p>
              </div>
              <div className="coupanAvaliable_bottom">
                <button>Apply</button>
              </div>
            </div>
            <div className="coupanAvaliable">
              <div className="coupanAvaliable_top">
                <h6>what is the coupon!!</h6>
                <p>Lorem ipsum dolor sit amet consectetur.</p>
              </div>
              <div className="coupanAvaliable_bottom">
                <button>Apply</button>
              </div>
            </div>{" "}
            <div className="coupanAvaliable">
              <div className="coupanAvaliable_top">
                <h6>what is the coupon!!</h6>
                <p>Lorem ipsum dolor sit amet consectetur.</p>
              </div>
              <div className="coupanAvaliable_bottom">
                <button>Apply</button>
              </div>
            </div>
          </>
        </Box>
      </Modal>
    </div>
  );
}

export default CoupanCard;
