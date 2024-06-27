import React from "react";
import "./UpdatePassword.css";

import SubNav from "../../SubNav";
import Navbar from "../../../Navbar/Navbar";

import Footer from "../../../../Footer/Footer";

// import inputImg from "../../../../img/Fahad/updatepasswordinputimg.png";

import { BiLock } from "react-icons/bi";
import { AiFillEye } from "react-icons/ai";

import { useState } from "react";

import { useNavigate } from "react-router-dom";

export default function UpdatePassword() {
  const history = useNavigate();
  const [resetPasswordConfirm, setResetPasswordConfirm] = useState(false);

  const handleClickSaveBtn = () => {
    setResetPasswordConfirm(true);
  };

  return (
    <div className='updatepassword-page'>
      <SubNav />
      <Navbar />

      {resetPasswordConfirm ? (
        <div className='flex flex-col items-center justify-center'>
          <div className='updatepassword-page-main flex w-[50%] flex-col items-center justify-center gap-[1rem] py-[5rem]'>
            <p className='text-justify text-[#1f1f1f]'>
              New password has been set - please ensure you keep it safe and
              remember it for future use. Make sure that you don't share your
              new password with anyone and take extra care when it comes to
              ensuring the security of your account.
            </p>
            <button
              onClick={() => history("/")}
              className='w-[300px] rounded-[8px] bg-[#28A745] p-[1rem] text-white'>
              Back To Home
            </button>
          </div>
        </div>
      ) : (
        <div className='flex flex-col items-center justify-center'>
          <div className='updatepassword-page-main flex w-[50%] flex-col items-center justify-center gap-[1rem] py-[5rem]'>
            <h1 className='text-[25px] font-[500]'>Reset Password</h1>
            <div
              className={`flex w-full flex-row items-center gap-[5px] rounded-[8px] border-[1px] border-solid border-[#6E798C] px-[5px]`}>
              {/* <img src={inputImg} alt="inputImg" /> */}
              <BiLock className={`text-[40px] text-[#6E798C]`} />
              <input
                type='password'
                className='w-full rounded-[8px] p-[1rem] outline-none'
                placeholder='New Password'
              />
              <AiFillEye
                className={`cursor-pointer text-[30px] text-[#6E798C]`}
              />
            </div>

            <div
              className={`flex w-full flex-row items-center gap-[5px] rounded-[8px] border-[1px] border-solid border-[#6E798C] px-[5px]`}>
              {/* <img src={inputImg} alt="inputImg" /> */}
              <BiLock className={`text-[40px] text-[#6E798C]`} />
              <input
                type='password'
                className='w-full rounded-[8px] p-[1rem] outline-none'
                placeholder='Confirm Password'
              />
              {/* <AiFillEye
              className={`cursor-pointer text-[30px] text-[#6E798C]`}
            /> */}
            </div>
            <button
              onClick={handleClickSaveBtn}
              className='w-[200px] rounded-[8px] bg-[#28A745] p-[1rem] text-white'>
              Save
            </button>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
}
