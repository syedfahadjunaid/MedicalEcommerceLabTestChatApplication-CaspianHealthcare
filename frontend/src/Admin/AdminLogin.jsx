import React, { useState, useRef, useEffect, useContext } from "react";
import AuthContext from "../context api/StateProvider";

import "./AdminLogin.css";

import img1 from "./assets/login_img1.png";
import img2 from "./assets/login_img2.png";

import { AiOutlineMail } from "react-icons/ai";
import { BsEyeFill } from "react-icons/bs";

import axios from "axios";
// import { Login } from '@mui/icons-material';
import Admin from "./Admin";

export default function AdminLogin() {
  // Axios Login Authentication
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  // const { setAuth } = useContext(AuthContext);

  const LOGIN_URL = "http://localhost:3001/admin";

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrorMsg("");
  }, [user, pwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  // --------------------------

  const [showPassword, setShowPassword] = useState(false);
  return (
    <>
      <div className="admin-login-section h-screen p-[8rem]">
        <div className="flex h-full w-full flex-row rounded-[12px] bg-[#ffffff] p-[1rem]">
          <div className="flex w-[50%] w-full flex-col items-center justify-center gap-[1rem] border-r-2 border-solid border-r-inherit">
            <img className="w-fit" src={img1} alt="img1" />
            <img className="h-fit w-[300px]" src={img2} alt="img2" />
          </div>

          <div className="flex flex-col gap-[1rem] p-[2rem]">
            <p
              ref={errRef}
              className={errorMsg ? "errmsg" : "offscreen"}
              aria-live="assertive"
            >
              {errorMsg}
            </p>
            <h3 className="text-[2rem] ">Welcome</h3>
            <form
              className="flex flex-col gap-[1rem] px-[2rem]"
              onSubmit={handleSubmit}
            >
              <div className="flex w-[300px] flex-row items-center justify-between rounded-[8px] border-2 border-solid border-inherit p-[1rem] transition hover:border-2 hover:border-solid hover:border-gray-600">
                <label htmlFor="username"></label>
                <input
                  ref={userRef}
                  autoComplete="off"
                  onChange={(e) => setUser(e.target.value)}
                  value={user}
                  required
                  className=""
                  id="username"
                  type="email"
                  placeholder="Email"
                  style={{ outline: "none" }}
                />
                <div>
                  <AiOutlineMail />
                </div>
              </div>
              <div className="flex w-[300px] flex-row items-center justify-between rounded-[8px] border-2 border-solid border-inherit p-[1rem] transition hover:border-2 hover:border-solid hover:border-gray-600">
                <label htmlFor="password"></label>
                <input
                  ref={userRef}
                  onChange={(e) => setPwd(e.target.value)}
                  value={pwd}
                  required
                  id="password"
                  className=""
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  style={{ outline: "none" }}
                />
                <div>
                  <BsEyeFill
                    onClick={() => setShowPassword(!showPassword)}
                    className={
                      showPassword ? `text-[#1f1f1f]` : `text-gray-300`
                    }
                  />
                </div>
              </div>
              <button
                className="w-fit rounded-[8px] bg-blue-500 px-[2rem] py-[1rem] font-semibold text-white hover:bg-blue-700"
                type="submit"
                onClick={handleSubmit}
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
