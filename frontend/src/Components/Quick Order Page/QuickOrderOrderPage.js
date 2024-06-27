import React, { useEffect, useState } from "react";
import AddressCart from "../../Address Cart/AddressCart";
import CoupanCard from "../../Coupan Card/CoupanCard1";
import CartCard from "../../Cart Card/Cartcard";
import HealthCheckOutCard from "../../HealthCheckOut Card/HealthCheckOutCard";
import SubTotalcard from "../../Sub Total Card/SubTotalCard";
import "./QuickOrderOrderPage.css";
import { Modal, Typography } from "@mui/material";
import { Box } from "@mui/system";
import SubNav from "../SubNav/SubNav";
import Navbar from "../Navbar/Navbar";
import Footer from "../../Footer/Footer";
function QuickOrderOrderPage() {
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
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [addressComponent,SetaddressComponent]=useState(false)
//   const [addressComponent1,SetaddressComponent1]=useState(false)
  const initial = {
    city: "",
    state: "",
    country: "",
    pincode: "",
    phone: "",
    locality: "",
    addressType: "",
  };
  const [newAddress, setNewAddress] = useState(initial);
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewAddress({
      ...newAddress,
      [name]: value,
    });
  };
  useEffect(() => {
    console.log(newAddress);
  }, newAddress);

  const submitHandler = (event) => {
    event.preventDefault();
    console.log("submitted ");
    console.log(newAddress);
    SetaddressComponent(true);
    handleClose()
    // setTimeout(() => {
    //     SetaddressComponent(false);
    // }, 2000);
  };
  return (
    <div className="QuickOrderOrderPage">
        <SubNav />
        <Navbar />
      <div className="QuickOrderOrderPage_heading">
      <h6>Delivery Address </h6>
      </div>
         
      <div className="QuickOrderOrderPage_top">
      <div className="QuickOrderOrderPage_left">
     
        <span>
          <CartCard />
        </span>
        <span>
          <AddressCart />
          {
            addressComponent &&
            <AddressCart title='fghfhvh' details='gygyhjguyuygjhguyhu'/>
          }
        </span>
        <span
          className="QuickOrderOrderPage_left_add_address"
          // onClick={handleOpen}
        >
          ADD NEW ADDRESS +
        </span>
    
      </div>
      <div className="QuickOrderOrderPage_right">
      <span>
          <CoupanCard />
        </span>
      
        <span>
         
          <SubTotalcard />
        </span>
        
      </div>
      </div>
    
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="QuickOrderOrderPage_newaddress">
          <form
            className="QuickOrderOrderPage_newaddress_form"
            onChange={handleInputChange}
          >
            <textarea
              rows={4}
              placeholder="enter your locality"
              onChange={handleInputChange}
              name='locality'
            />
            <input
              type="text"
              placeholder="city"
              onChange={handleInputChange}
              name="city"

            />
            <input
              type="text"
              placeholder="State"
              onChange={handleInputChange}
              name="state"
            />
            <input
              type="number"
              placeholder="Pin code"
              onChange={handleInputChange}
              name="pincode"
            />
            <input
              type="text"
              placeholder="country"
              onChange={handleInputChange}
              name='country'
            />
            <input
              type="number"
              placeholder="phone No"
              onChange={handleInputChange}
              name='phone'
            />
            <div>
              <span>
                <input type="radio" placeholder="Home" name="addressType" />
                <label>Home</label>
              </span>
              <span>
                <input type="radio" placeholder="Office" name="addressType" />
                <label>Office</label>
              </span>
              <span>
                <input type="radio" placeholder="Other"  name="addressType"/>
                <label>Other</label>
              </span>
            </div>
            <button className="changeAddressButton" type="submit" onClick={submitHandler}>
              Save
            </button>
          </form>
        </Box>
      </Modal>
    </div>
  );
}

export default QuickOrderOrderPage;
