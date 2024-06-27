import {
  Facebook,
  Instagram,
  Send,
  Twitter,
  WhatsApp,
} from "@mui/icons-material";
import React from "react";
import Button from "../Button/Button";
import "./Footer.css";
import { useNavigate } from "react-router-dom";
function Footer() {
  const histroy = useNavigate();
  return (
    <div className='footer'>
      <div className='footer_Subscribe'>
        <div className='footer_Subscribe_left'>
          <p>Sign up for our Newsletter</p>
          <p style={{ fontSize: "18px", fontWeight: "400" }}>
            Get to know updates in the field of medicine and know how often our
            stores are stocked
          </p>
        </div>
        <div className='footer_Subscribe_right'>
          <p style={{ fontSize: "18px", fontWeight: "500" }}>Your Email</p>
          <div className='footer_Subscribe_right_input'>
            <input type='text' placeholder='example@email.com' />
            <Button bg='#28A745' color='#fff'>
              Subscribe
              <Send className='footer_Subscribe_right_input_icon' />
            </Button>
          </div>
        </div>
      </div>
      <div className='footer_details'>
        <div className='footer_details_one'>
          <h6>Quick links</h6>
          <p onClick={() => histroy("/contactus")}>Contact us</p>
          <p onClick={() => histroy("/about")}>About Us</p>
          {/* <p>Careers</p> */}
        </div>
        <div className='footer_details_two'>
          <h6>Our Policies</h6>
          <p onClick={() => histroy("/privacypolicy")}>Privacy Policy</p>
          <p onClick={() => histroy("/terms&conditions")}>
            Terms and Conditions
          </p>
          <p onClick={() => histroy("/return&refundpolicy")}>
            Return & Refund Policy
          </p>
          <p onClick={() => histroy("/intellectualPropertyInfringementPolicy")}>
            Intellectual Property Infringement Policy
          </p>
        </div>
        <div className='footer_details_three'>
          <h6>Our Services</h6>
          <p onClick={() => histroy("/product/Trending")}>Order Medicines</p>
          <p onClick={() => histroy("/labtest")}>Book Lab Tests</p>
          <p onClick={() => histroy("/doctorhomepage")}>Consult a Doctor</p>
        </div>
        <div className='footer_details_four'>
          <h6>Connect</h6>
          <p style={{ marginTop: "-10px" }}>Social Links</p>
          <div className='footer_details_four_social_links'>
            <WhatsApp />
            <Facebook />
            <Instagram />
            <Twitter />
          </div>
          <p>Want daily dose of health?</p>
          {/* <Button bg='#28A745' color='#fff'>
            Sign In
          </Button> */}
        </div>
      </div>
      <div className='footer_policy'>
        <p style={{ fontSize: "18px", fontWeight: "400" }}>copyright© 2023</p>
      </div>
    </div>
  );
}

export default Footer;
