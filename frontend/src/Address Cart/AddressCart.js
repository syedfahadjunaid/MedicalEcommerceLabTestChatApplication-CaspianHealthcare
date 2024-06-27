import { MoreVert } from "@mui/icons-material";
import React from "react";
import { useState } from "react";
import "./AddressCart.css";
import { Backdrop, Box, Fade, Modal, Typography } from "@mui/material";
function AddressCart({title,details,addressType}) {
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #fff',
    outline:'0',
    boxShadow: 24,
    p: 4,
  };
  const [editAddress,setEditAddress]=useState(false)
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div className="addresscart">
      <div className="addresscart_start">
        <input type="checkbox" checked/>
      </div>
      <div className="addresscart_middle">
        <div className="addresscart_middle_heading">
          <h6>{title?`${title}`:"Home"}</h6>
        </div>
        <div className="addresscart_middle_deatils">
         <p>
            {details?`${details}`:"dsds Lorem ipsum dolor sit amet consectetur. Enim aliquet elementum turpis nulla in ac rutrum magna. Ultricies commodo pharetra congue fermentum. Elit et magna nunc"}
         </p>
        </div>
      </div>
      <div className="addresscart_end">
        <MoreVert className="addresscart_end_icon" onClick={()=>setEditAddress(!editAddress)}/>
        {editAddress && <div className="addresscart_end_edit">
          <p onClick={handleOpen}>Edit</p>
          </div>}
      </div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
         <div className="editAddress">
          <p>Name</p>
          <span><input type="text" placeholder="Enter Your Name"/></span>
          <p>Street</p>
          <span><input type="text" placeholder="Enter Your Street"/></span>
          <p>City</p>
          <span><input type="text" placeholder="Enter Your City"/></span>  
          <p>State</p>
          <span><input type="text" placeholder="Enter Your State"/></span>
          <p>Country</p>
          <span><input type="text" placeholder="Enter Your State"/></span>
           <p>Pin Code</p>
          <span><input type="number" placeholder="Enter Your PinCode"/></span>
          <span className="editAddress_span">
            <button>
              Save Address
            </button>
          </span>
         </div>
          </Box>
        </Fade>
      </Modal>
 
    </div>
  );
}

export default AddressCart;
