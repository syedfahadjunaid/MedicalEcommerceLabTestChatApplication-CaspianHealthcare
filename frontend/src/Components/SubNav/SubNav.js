import React, { useEffect, useState } from "react";
import "./SubNav.css";
import img1 from "../../img/image 7.jpg";
import img2 from "../../img/3698384 1.jpg";
import img3 from "../../img/image 5.jpg";
import img4 from "../../img/image 6.jpg";
import img5 from "../../img/image 8.jpg";
import img6 from "../../img/Rectangle 47.jpg";
import Button from "../../Button/Button";
import logo from "../../img/Rectangle.jpg";

// import "bootstrap/dist/css/bootstrap.min.css";

// import { useNavigate } from "react-router-dom";

import SignUpForm from "./SignUpForm/SignUpForm";

import {
  Facebook,
  Google,
  KeyboardArrowDown,
  Mail,
  Person2,
  Phone,
  ShoppingCart,
  Visibility,
  VisibilityOff,
} from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";
import { Modal, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Button1 from "../../Button 1/Button1";
import { useForm } from "react-hook-form";
import { useStateValue } from "../../context api/StateProvider";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { addUserLogin, userLogout } from "../../Slice/userLogin";
function SubNav({ formOpen, loginHandle, signUpHandle }) {
  const history = useNavigate();
  const [scrolled, setScrolled] = useState(false);
  const [login, setLogin] = useState(false);
  const [passwordType, setPasswordType] = useState("password");
  const passwordHandle = () => {
    if (passwordType === "password") {
      setPasswordType("text");
    } else {
      setPasswordType("password");
    }
  };
  useEffect(() => {
    window.onscroll = function () {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
  }, []);
  const initailValue = {
    email: "",
    password: "",
  };
  const { userLogin, userToken } = useSelector((state) => state.userlogin);
  console.log(userLogin, "userLogin");
  const [formValue, setFormValue] = useState(initailValue);
  const loginHandleSubmit = (event) => {};
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #fff",
    outline: "0",
    boxShadow: 24,
    p: 4,
  };
  const [loginForm, setLoginForm] = useState(false);
  const [signUpForm, setSignUpForm] = useState(false);
  const openFormLogin = () => {
    handleOpen();
    console.log(loginForm);
    setLoginForm(true);
    setSignUpForm(false);
  };
  const openFormSignUp = () => {
    handleOpen();

    setSignUpForm(true);
    setLoginForm(false);
    console.log(loginForm, "login");
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm();
  const [{ cart, medicalCart }] = useStateValue();
  const [addToCartNotification, setAddToCartNotification] = useState(false);
  useEffect(() => {
    console.log(cart.length > 0);
    if (cart.length > 0) {
      setAddToCartNotification(true);
    }
    setTimeout(() => {
      setAddToCartNotification(false);
    }, 3000);
  }, [cart]);

  useEffect(() => {
    console.log(formOpen, "formopen");
    if (formOpen === true && loginHandle === true) {
      setOpen(true);
      setLoginForm(true);
      setSignUpForm(false);
    }
    if (formOpen === true && signUpHandle === true) {
      setOpen(true);
      setLoginForm(false);
      setSignUpForm(true);
    }
  }, [formOpen]);

  const isValidEmail = (email) =>
    // eslint-disable-next-line no-useless-escape
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    );

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  //Email Validation
  const handleEmailValidation = (email) => {
    // console.log('ValidateEmail was called with', email);

    const isValid = isValidEmail(email);

    // const validityChanged =
    //   (errors.email && isValid) || (!errors.email && !isValid);
    // if (validityChanged) {
    //   console.log('Fire tracker with', isValid ? 'Valid' : 'Invalid');
    // }

    return isValid;
  };
  const dispatch = useDispatch();
  const notify = () => toast.success("Login Successfully!");
  const notify1 = () => toast.warning("Something Went Wrong!");
  const notify2 = () => toast.success("Logout Successfully!");
  
  const [isLoading, setIsLoading] = useState(false);
  const userLoginHandle = async (data) => {
    const formData = new FormData();
    formData.append("email", data?.emailLogin);
    formData.append("password", data?.passwordLogin);

    const response = await axios
      .post(`${process.env.React_App_Base_Url + "login-user"}`, formData, {
        headers: { "Content-type": "multipart/form-date" },
      })
      .then((response) => response, setIsLoading(true))
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
    if (response?.status === 200) {
      notify();
      handleClose();
      dispatch(addUserLogin(response?.data?.token));
    }
    if (!response) {
      notify1();
      handleClose();
    }
    console.log(response);
  };
  const userLogoutHandle = async () => {
    const formData = new FormData();

    const data = await axios
      .post(`${process.env.React_App_Base_Url + "logout-user"}`, formData, {
        headers: {
          Authorization: `${userToken}`,
          "Content-type": "multipart/form-date",
        },
      })
      .then((response) => response, setIsLoading(true))
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
    if (data?.status === 200) {
      notify2()
      dispatch(userLogout())
    }
    if (!data) {
      notify1()
    }
    console.log(data);
  };

  return (
    <div className={scrolled ? "subnav_scrolled subnav" : "subnav"}>
      <div className="subnav_logo">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      </div>
      <div className="subnav_items">
        <div
          className="subnav_item"
          style={{ cursor: "pointer" }}
          onClick={() => history("/product/Trending")}
        >
          <img src={img3} alt="img" />
          Medicines
        </div>
        <div
          className="subnav_item"
          onClick={() => history("/labtest")}
          style={{ cursor: "pointer" }}
        >
          <img src={img4} alt="img" />
          Lab Tests
        </div>
        <div
          className="subnav_item"
          onClick={() => history("/doctorhomepage")}
          style={{ cursor: "pointer" }}
        >
          <img src={img1} alt="img" />
          Doctors
        </div>
        <div
          className="subnav_item"
          onClick={() => history("/labtest")}
          style={{ cursor: "pointer" }}
        >
          <img src={img5} alt="img" />
          COVID-19
        </div>
      </div>

      {userLogin === false ? (
        <div className="subnav_button">
          <button className="subnav_button_login" onClick={openFormLogin}>
            Login
          </button>
          <button className="subnav_button_singup" onClick={openFormSignUp}>
            Sign up
          </button>
        </div>
      ) : (
        <div className="subnav_profile">
          {/* <div className="subnav_profile_left">
            <img src={img6} alt="profile pic" />
          </div> */}
          <div
            className="subnav_profile_right"
            onClick={() => history("/profilepage")}
          >
            <h6
              className="subnav_profile_right_heading"
              style={{ fontSize: "16px", fontWeight: "500", color: "#717B8C" }}
            >
              My Profile
              <KeyboardArrowDown />
            </h6>
          </div>
          <div className="subnav_profile_div">
            <p onClick={() => history("/profilepage")}>Profile</p>
            <p onClick={userLogoutHandle}>Logout</p>
          </div>
        </div>
      )}

      <div className="subnav_cart">
        <Link className="subnav_cart_link" to="/cart">
          <ShoppingCart />
          <span className="subnav_cart_count">{cart?.length}</span>
        </Link>
        {addToCartNotification && (
          <div className="subnav_cart_notification">
            <span>
              <p>Order Summary</p>
              <p>{cart?.length < 1 ? 0 : cart?.length} Items</p>
            </span>
            <span
              className="subnav_cart_notification_span"
              onClick={() => history("/cart")}
            >
              Proceed To Cart
            </span>
          </div>
        )}
        <div className="subnav_cart_notification_hover">
          <span>
            <p>Order Summary</p>
            <p>{cart?.length < 1 ? 0 : cart?.length} Items</p>
          </span>
          <span
            className="subnav_cart_notification_span"
            onClick={() => history("/cart")}
          >
            Proceed To Cart
          </span>
        </div>
      </div>
      <div className="subnav_modal">
        <Modal
          keepMounted
          open={open}
          onClose={handleClose}
          aria-labelledby="keep-mounted-modal-title"
          aria-describedby="keep-mounted-modal-description"
        >
          <Box className="subnav_modal_box" sx={style}>
            <img src={logo} alt="logo" />
            <div className="subnav_modal_box_form">
              <div className="subnav_modal_box_form_left">
                <img src={img2} alt="img" />
              </div>
              <div className="subnav_modal_box_form_right">
                {loginForm && (
                  <div className="subnav_modal_box_form_right_login">
                    <div className="subnav_modal_box_form_right_login_heading">
                      <h6>Login</h6>
                      <p>
                        Get access to your orders, lab tests & doctor
                        consultations
                      </p>
                    </div>

                    <form
                      className="login_form"
                      onSubmit={handleSubmit(userLoginHandle)}
                    >
                      {/* <Box my={2} className="emailTextFiled">
                        <TextField
                          name="email"
                          type="text"
                          placeholder="jhonny@email.com"
                          variant="standard"
                          className="input-field "
                          // inputRef={register({
                          //   required: true,
                          //   pattern: /\S+@\S+\.\S+/
                          // })}
                        />
                        <Box>
                          {errors?.email &&
                            errors?.email?.type === "required" && (
                              <span className="error-message">
                                This is required field
                              </span>
                            )}
                          {errors?.email &&
                            errors?.email?.type === "pattern" && (
                              <span className="error-message">
                                Enter a valid email
                              </span>
                            )}
                        </Box>
                      </Box>
                      <Box mb={2}>
                        <TextField
                          name="password"
                          type="password"
                          placeholder="Password"
                          variant="standard"
                          className="input-field"
                          // inputRef={register({
                          //   required: true,
                          //   minLength: 4
                          // })}
                        />
                        <Box>
                          {errors?.password &&
                            errors?.password?.type === "required" && (
                              <span className="error-message">
                                This is required field
                              </span>
                            )}
                          {errors?.password &&
                            errors?.password?.type === "minLength" && (
                              <span className="error-message">
                                Minimum characters 4 required
                              </span>
                            )}
                        </Box>
                      </Box> */}
                      <div className="login_form_div">
                        <input
                          {...register("emailLogin", {
                            required: "This Field Required",
                            pattern: {
                              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                              message: "invalid email address",
                            },
                          })}
                          type="text"
                          placeholder="Enter Register Email"
                        />
                        <Mail style={{ color: "lightgrey" }} />
                      </div>
                      {errors.emailLogin?.message && (
                        <div className="invalid-feedback">
                          {errors?.emailLogin?.message}
                        </div>
                      )}
                      <div className="login_form_div">
                        <input
                          {...register("passwordLogin", {
                            required: "This Field Required",
                          })}
                          type={passwordType}
                          placeholder="Enter Your Password"
                        />
                        {passwordType === "password" ? (
                          <VisibilityOff
                            style={{ color: "lightgrey" }}
                            onClick={passwordHandle}
                          />
                        ) : (
                          <Visibility
                            style={{ color: "lightgrey" }}
                            onClick={passwordHandle}
                          />
                        )}
                      </div>
                      {errors.passwordLogin?.message && (
                        <div className="invalid-feedback">
                          {errors?.passwordLogin?.message}
                        </div>
                      )}
                      <div className="forgetpassword">
                        <div className="forgetpassword_left">
                          <input type="checkbox" />
                          <p>Remember Me</p>
                        </div>
                        <div className="forgetpassword_right">
                          <span onClick={() => history("/forgotPassword")}>
                            Forgot Password?
                          </span>
                        </div>
                      </div>
                      <button
                        type="submit"
                        className="submit-button login_form_submit"
                      >
                        Login
                      </button>
                    </form>
                    <p>
                      New here?{" "}
                      <span className="subnav_singup" onClick={openFormSignUp}>
                        Sign Up
                      </span>
                    </p>
                    <div className="subnav_additional_login">
                      <Google className="subnav_additional_login_google" />
                      <Facebook className="subnav_additional_login_facebook" />
                    </div>
                  </div>
                )}
                {signUpForm && (
                  <SignUpForm
                    openFormLogin={openFormLogin}
                    passwordHandle={passwordHandle}
                    passwordType={passwordType}
                    setLoginForm={setLoginForm}
                    setSignUpForm={setSignUpForm}
                  />
                )}
              </div>
            </div>
          </Box>
        </Modal>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
    // eslint-disable-next-line
  );
}

export default SubNav;
