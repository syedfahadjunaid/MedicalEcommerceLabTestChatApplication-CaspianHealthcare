import { FilterAlt, Home, Logout, Store } from "@mui/icons-material";
import React, { useState } from "react";
import "./MyProfile.css";
import img from ".././img/Rectangle 47.jpg";
import OrderCard from "../Order Card/OrderCard";
import SubNav from "../Components/SubNav/SubNav";
import Navbar from "../Components/Navbar/Navbar";
function MyProfile() {
  const [profilePage, setProfilePage] = useState(true);
  const [orderPage, setOrderPage] = useState(false);
  const [profilePic, setProfilePic] = useState(true);
  const myOrderPage = () => {
    setProfilePage(false);
    setOrderPage(true);
  };
  const myProfilePage = () => {
    setOrderPage(false);
    setProfilePage(true);
  };

  return (
    <>
      <SubNav />
      <Navbar />
      <div className="myprofile">
        <div className="myprofile_left">
          <div className="myprofile_left_top">
            <span onClick={myProfilePage}>
              <Home /> <h6>Home</h6>
            </span>
            <span onClick={myOrderPage}>
              <Store /> <h6> Your Order</h6>{" "}
            </span>
          </div>
          <div className="myprofile_left_bottom">
            <span>
              <Logout />
              <h6>LogOut</h6>
            </span>
          </div>
        </div>
        {profilePage && (
          <div className="myprofile_right">
            <div className="myprofile_right_heading">
              <h6> Account Setting</h6>
            </div>
            <div className="myprofile_right_profile">
              <p>Your Profile Picture</p>
              <div className="myprofile_right_profile_upload">
                <input type="file" alt="upload Profile Pic" />
                {profilePic && (
                  <div className="uploaded_pic">
                    <img src={img} alt="user uploaded img" />
                  </div>
                )}
              </div>
            </div>
            <div className="myprofile_right_form">
              <form className="myprofile_right_form_form">
                <div className="myprofile_right_form_form_top">
                  <div>
                    <label>Full Name</label>
                    <input type="text" placeholder="Enter Your Full name" />
                  </div>
                  <div>
                    <label>Email</label>
                    <input type="text" placeholder="Enter Your Full name" />
                  </div>
                </div>
                <div className="myprofile_right_form_form_bottom">
                  <div>
                    <label>Username</label>
                    <input type="text" placeholder="Enter Your Full name" />
                  </div>
                  <div>
                    <label>Phone number</label>
                    <input type="number" placeholder="Enter Your Full name" />
                  </div>
                </div>
              </form>
            </div>
          </div>
        )}
        {orderPage && (
          <div className="myprofile_right">
            <div className="myprofile_right_heading">
              <h6> My Order</h6>
            </div>
            <div className="myprofile_right_order myprofile_right_order_filter">
              <p style={{ fontSize: "18px", fontWeight: "500" }}>Your Order</p>
              <FilterAlt
                style={{
                  color: "#FF9800",
                  fontSize: "35px",
                  cursor: "pointer",
                }}
              />
            </div>
            <div className="myprofile_right_form myprofile_right_order">
              <OrderCard />
              <OrderCard />
              <OrderCard />
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default MyProfile;
