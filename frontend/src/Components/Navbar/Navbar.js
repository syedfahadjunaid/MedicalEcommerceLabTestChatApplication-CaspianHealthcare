import {
  AddShoppingCart,
  ArrowForwardIos,
  Face,
  KeyboardArrowDown,
  Search,
} from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import logo from "../../img/Rectangle.jpg";
import { useState } from "react";
import { motion } from "framer-motion";
import SubNav from "../SubNav/SubNav";
import axios from "axios";
import { useForm } from "react-hook-form";
function Navbar() {
  const history = useNavigate();
  const [sideBar, setSideBar] = useState(false);
  const menuHandle = () => {
    setSideBar(!sideBar);
  };
  const [open, setOpen] = useState(false);
  const [loginHandle, setLoginHandle] = useState(false);
  const [signUpHandle, setSignUpHandle] = useState(false);
  const openHandle = (e) => {
    console.log(e.target.textContent);
    if (e.target.textContent === "Login") {
      setLoginHandle(true);
      setSignUpHandle(false);
    }
    if (e.target.textContent === "SignUp") {
      setLoginHandle(false);
      setSignUpHandle(true);
    }
    setOpen(true);
    setTimeout(() => {
      setOpen(false);
    }, 1000);
    console.log(open);
  };
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  return (
    <>
      <div className='subnavdisplaynone'>
        <SubNav
          formOpen={open}
          loginHandle={loginHandle}
          signUpHandle={signUpHandle}
        />
      </div>

      <div className='navbar'>
        <Link className='navbar_link' to='/'>
          Home
        </Link>
        {/* <Link className="navbar_link" to="/about">
          About Us
        </Link> */}
        <Link className='navbar_link dropdown navbar_link_center' to='#'>
          <p className='dropbtn'>
            Vitamins & Nutrition <KeyboardArrowDown />
          </p>
          <div className='dropdown-content'>
            <Link to='/product/Whey Protein' style={{ textDecoration: "none" }}>
              Whey Protein{" "}
            </Link>
            <Link to='/product/Amino Acids' style={{ textDecoration: "none" }}>
              Amino Acids{" "}
            </Link>
            <Link to='/product/Mass Gainers' style={{ textDecoration: "none" }}>
              Mass Gainers{" "}
            </Link>
            <Link
              to='/product/Workout Essential'
              style={{ textDecoration: "none" }}>
              Workout Essential
            </Link>
            <Link to='/product/Fat Burners' style={{ textDecoration: "none" }}>
              Fat Burners{" "}
            </Link>
            <Link to='/product/Fish Oil' style={{ textDecoration: "none" }}>
              Fish Oil{" "}
            </Link>
          </div>
        </Link>
        <Link className='navbar_link dropdown' to='#'>
          <p className='dropbtn'>
            Personal Care
            <KeyboardArrowDown />
          </p>
          <div className='dropdown-content'>
            <Link to='/product/Body Lotions' style={{ textDecoration: "none" }}>
              Body Lotions{" "}
            </Link>
            <Link to='/product/Shampoo' style={{ textDecoration: "none" }}>
              Shampoo{" "}
            </Link>
            <Link to='/product/Womem Care' style={{ textDecoration: "none" }}>
              Womem Care{" "}
            </Link>
            <Link
              to='/product/Workout Essential'
              style={{ textDecoration: "none" }}>
              Workout Essential
            </Link>
            <Link to='/product/Mother Care' style={{ textDecoration: "none" }}>
              Mother Care
            </Link>
            <Link to='/product/Hair Oil' style={{ textDecoration: "none" }}>
              Hair Oil{" "}
            </Link>
          </div>
        </Link>
        <Link className='navbar_link dropdown' to='#'>
          <p className='dropbtn'>
            HealthCare
            <KeyboardArrowDown />
          </p>
          <div className='dropdown-content'>
            <Link to='/product/Heart Care' style={{ textDecoration: "none" }}>
              Heart Care{" "}
            </Link>
            <Link to='/product/Eye Care' style={{ textDecoration: "none" }}>
              Eye Care{" "}
            </Link>
            <Link to='/product/Pain Relif' style={{ textDecoration: "none" }}>
              Pain Relif{" "}
            </Link>
            <Link to='/product/Constipation' style={{ textDecoration: "none" }}>
              Constipation
            </Link>
            <Link to='/product/First Acid' style={{ textDecoration: "none" }}>
              First Acid
            </Link>
            <Link to='/product/Liver Care' style={{ textDecoration: "none" }}>
              Liver Care{" "}
            </Link>
          </div>
        </Link>
        <Link className='navbar_link' to='/product/DEALS OF THE DAY'>
          DEALS OF THE DAY
        </Link>
        <Link className='navbar_link navbar_quick_button' to='/quickpage'>
          Quick Order
        </Link>
        <div className='navabr_search'>
          <input type='text' placeholder='Search Health Products' />
          <Search className='navabr_search_icon' />
        </div>
      </div>
      <div className='navbar_mobile'>
        <div className='navbar_mobile_left'>
          <MenuIcon
            className='navbar_mobile_left_icon'
            onClick={menuHandle}
            style={{ fontSize: "35px" }}
          />
          <img src={logo} onClick={() => history("/")} />
        </div>
        <div className='navbar_mobile_right' style={{ marginRight: "20px" }}>
          <AddShoppingCart onClick={() => history("/cart")} />
        </div>
      </div>
      {sideBar && (
        <>
          <motion.div
            className='mobile_menu sidenav'
            initial={{ x: "-100vw" }}
            animate={{ x: 0 }}
            transition={{ delay: 0.1 }}
            onClick={() => setSideBar(false)}>
            <div className='mobile_menu_login'>
              <div className='mobile_menu_login_left'>
                <Face className='mobile_menu_login_left_icon' />
                <span>
                  <h6>Hi,there</h6>
                  <p>
                    <span
                      style={{ color: "#28A745", fontWeight: "bold" }}
                      onClick={openHandle}>
                      Login
                    </span>{" "}
                    /{" "}
                    <span
                      style={{ color: "#2a7fba", fontWeight: "bold" }}
                      onClick={openHandle}>
                      SignUp
                    </span>
                  </p>
                </span>
              </div>
              <div className='mobile_menu_login_right'>
                <ArrowForwardIos />
              </div>
            </div>
            <div className='mobile_menu_buy_medicine'>
              <span onClick={() => history("/product/Trending")}>
                <p>Buy Medicine</p>
              </span>
              <span>
                <p>Buy Health Product</p>
              </span>
              <span onClick={() => history("/labtest")}>
                <p>Book a Lab Test</p>
              </span>
              <span onClick={() => history("/doctorhomepage")}>
                <p>Consult a Doctor</p>
              </span>
              <span>
                <p>Covid Support</p>
              </span>{" "}
              <span>
                <p>All Diseases</p>
              </span>
              <span>
                <p>All Medicine</p>
              </span>
              <span>
                <p>Medicine by therope Class</p>
              </span>
            </div>
            <div className='mobile_menu_buy_contact'>
              <span>
                <p>Contact Us</p>
              </span>
              <span>
                <p> Need help ?</p>
              </span>
            </div>
          </motion.div>
        </>
      )}
    </>
  );
}

export default Navbar;
