import { ArrowForward } from "@mui/icons-material";
import { Box, Modal, Typography } from "@mui/material";
import React, { useState } from "react";
import AddressCart from "../Address Cart/AddressCart.js";
import PaymentPage from "../Payment Page/PaymentPage.js";
import "./CartPay.css";
import SubNav from "../Components/SubNav/SubNav.js";
import Navbar from "../Components/Navbar/Navbar.js";
function CartPay() {
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #fff',
        boxShadow: 24,
        p: 4,
      };
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [orderCart,setOrderCart]=useState(true);
    const [orderSummary,setOrderSummary]=useState(false);
    const orderCartView=()=>{
        setOrderCart(false)
        setOrderSummary(true)
        console.log(orderCart)
    }
  return (
    <>
   0
        <div className="cartpay">

<div className="cartpay_subnav">
  <span>
    <strong>1</strong>
    <p>My Cart</p>
  </span>
  <span>
    <strong>2</strong>
    <p> Order Summaty</p>
  </span>
  <span className={orderCart?'cartpay_subnav_selected':''}>
    <strong>3</strong>
    <p>Payment</p>
  </span>
</div>
<div className="cartpay_address">
{orderCart && <AddressCart />}

{!orderCart && <PaymentPage/>}
</div>

<div className="cartpay_button">
{orderCart &&   <div className="cartpay_button_add_address">
      <p onClick={handleOpen}>ADD NEW ADDRESS </p>
  </div>}
  {orderCart &&   <div className="cartpay_button_continue" onClick={orderCartView}>
      <p>Continue</p>
      <ArrowForward/>
  </div>}
</div>
<Modal
  open={open}
  
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box sx={style} className='cartpay_addnewaddress'>
      <h6> Add a New Address</h6>
 <form className="cartpay_addnewaddress_form">
<input type='text' placeholder="Customer name"/>
<input type='text' placeholder="Pin Code"/>
<input type='text' placeholder="Locality"/>
<input type='text' placeholder="city"/>
<input type='text' placeholder="state"/>

<div className="cartpay_addnewaddress_radio">
<span>
  <input type='radio' name='radio' checked/>
  <p>Home</p>
</span>
<span>
  <input type='radio'name='radio'/>
  <p>Office</p>
</span>
<span>
  <input type='radio' name='radio'/>
  <p>Other</p>
</span>
</div>
<div className="cartpay_addnewaddress_button">
<p onClick={handleClose}>Cancel</p>
<button type="submit">Save</button>
</div>
 </form>
  </Box>
</Modal>
</div>
    </>
   
  );
}

export default CartPay;
