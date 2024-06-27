import React from "react";
import {
  Facebook,
  Google,
  Mail,
  Person2,
  Phone,
  Visibility,
  VisibilityOff,
} from "@mui/icons-material";

// import "bootstrap/dist/css/bootstrap.min.css";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { userLoginHandle } from "../../../Slice/userLogin";

export default function SignUpForm({
  openFormLogin,
  passwordHandle,
  passwordType,
  setSignUpForm,
  setLoginForm,
}) {
  // Confirm Password Validation
  const formSchema = Yup.object().shape({
    password: Yup.string()
      .required("Password is mendatory")
      .min(3, "Password must be at 3 char long"),
    confirmPwd: Yup.string()
      .required("Password is mendatory")
      .oneOf([Yup.ref("password")], "Passwords does not match"),
    name: Yup.string()
      .required("Name is required", {
        required: true,
        validate: (value) => {
          return !!value.trim();
        },
      })
      .min(6, "Name must be at least 6 char long")
      .max(20, "Name must be at least 20 char long"),
    email: Yup.string().required("Email is required"),
    contact: Yup.string()
      .required("Contact is required")
      .min(10, "Contact must be at least 10 char long")
      .max(10, "Contact must be at least 10 char long"),
  });
  const formOptions = { resolver: yupResolver(formSchema) };
  const { register, handleSubmit, reset, formState } = useForm(formOptions);
  const { errors } = formState;

  const isValidEmail = (email) =>
    // eslint-disable-next-line no-useless-escape
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    );

  //   const [nameValue, setNameValue] = useState("");
  //   const [emailValue, setEmailValue] = useState("");
  //   const [contactValue, setContactValue] = useState("");

  //   const handleNameChange = (event) => {
  //     setNameValue(event.target.value);
  //   };
  //   const handleEmailChange = (event) => {
  //     setEmailValue(event.target.value);
  //   };
  //   const handleContactChange = (event) => {
  //     setContactValue(event.target.value);
  //   };

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

  function onSubmit(data) {
    console.log(JSON.stringify(data, null, 4));
    return false;
  }
  const dispatch = useDispatch();
  const notify = () => toast.success("Registration Successfully Login Now!");
  const notify1 = () => toast.warning("Something Went Wrong!");
  const [isLoading, setIsLoading] = useState(false);
  const userRegistrationHandle = async (data) => {
    const formData = new FormData();
    formData.append("name", data?.name);
    formData.append("email", data?.email);
    formData.append("mobile_number", data?.contact);
    formData.append("password", data?.password);
    formData.append("password_confirmation", data?.confirmPwd);
    const response = await axios
      .post(
        `${process.env.React_App_Base_Url + "create-Registration"}`,
        formData,
        {
          headers: { "Content-type": "multipart/form-date" },
        }
      )
      .then((response) => response, setIsLoading(true))
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
    // setOpen(false)
    if (response?.status === 201) {
      notify();
      reset({
        name: "",
        email: "",
        contact: "",
        password: "",
        confirmPwd: "",
      });
    }
    if (!response) {
      notify1();
    }

    console.log(response, response?.response?.status !== 201, "heelo");
  };
  // ------------------------------------------------------
  return (
    <div className="subnav_modal_box_form_right_login">
      <div className="subnav_modal_box_form_right_login_heading">
        <h6>Sign Up</h6>
        <p>Get access to your orders, lab tests & doctor consultations</p>
      </div>

      <form
        className="login_form"
        onSubmit={handleSubmit(userRegistrationHandle)}
      >
        <div className="login_form_div">
          <input
            {...register("name", {
              required: true,
              validate: (value) => {
                return !!value.trim();
              },
            })}
            name="name"
            type="text"
            placeholder="Enter Name Here"
            className={`form-control ${errors.name ? "is-invalid" : ""}`}
          />

          <Person2 style={{ color: "lightgrey" }} />
        </div>

        {errors?.name?.message && (
          <div className="invalid-feedback">{errors?.name?.message}</div>
        )}
        <div className="login_form_div">
          <input
            {...register("email", {
              required: true,
              validate: handleEmailValidation,
            })}
            name="email"
            type="email"
            placeholder="Enter Email Here"
            className={`form-control ${errors.email ? "is-invalid" : ""}`}
          />

          <Mail style={{ color: "lightgrey" }} />
        </div>
        {errors.email?.message && (
          <div className="invalid-feedback">{errors?.email?.message}</div>
        )}

        <div className="login_form_div">
          <input
            {...register("contact")}
            name="contact"
            type="number"
            placeholder="Enter Mobile Number Here"
            className={`form-control ${errors.contact ? "is-invalid" : ""}`}
          />

          <Phone style={{ color: "lightgrey" }} />
        </div>
        {errors?.contact?.message && (
          <div className="invalid-feedback">{errors?.contact?.message}</div>
        )}

        <div className="login_form_div">
          <input
            name="password"
            // type="password"
            {...register("password")}
            type={passwordType}
            placeholder="Enter Password Here"
            className={`form-control ${errors.password ? "is-invalid" : ""}`}
          />

          {passwordType === "password" ? (
            <VisibilityOff
              onClick={passwordHandle}
              style={{ color: "lightgrey" }}
            />
          ) : (
            <Visibility
              onClick={passwordHandle}
              style={{ color: "lightgrey" }}
            />
          )}
        </div>
        {errors?.password?.message && (
          <div className="invalid-feedback">{errors?.password?.message}</div>
        )}

        <div className="login_form_div">
          <input
            name="confirmPwd"
            type={passwordType}
            placeholder="Confirm Password"
            {...register("confirmPwd")}
            className={`form-control ${errors.confirmPwd ? "is-invalid" : ""}`}
          />

          {passwordType === "password" ? (
            <VisibilityOff
              onClick={passwordHandle}
              style={{ color: "lightgrey" }}
            />
          ) : (
            <Visibility
              onClick={passwordHandle}
              style={{ color: "lightgrey" }}
            />
          )}
        </div>
        {errors?.confirmPwd?.message && (
          <div className="invalid-feedback">{errors?.confirmPwd?.message}</div>
        )}

        {/* <div className="forgetpassword_signUp">
                        <div className="forgetpassword_left_signup">
                          <input type="checkbox" />
                          <p>Remember Me</p>
                        </div> */}
        {/* <div className="forgetpassword_right">
                        <span>Forgot Password?</span>
                      </div> */}
        {/* </div> */}
        <button
          onSubmit={handleSubmit(onSubmit)}
          type="submit"
          className="submit-button login_form_submit"
        >
          Sign Up
        </button>
      </form>
      <p>
        Have an account?{" "}
        <span className="subnav_singup" onClick={openFormLogin}>
          Login
        </span>
      </p>
      <div className="subnav_additional_login">
        <Google className="subnav_additional_login_google" />
        <Facebook className="subnav_additional_login_facebook" />
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
  );
}
