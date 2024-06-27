import React from "react";
import "./ForgotPassword.css";

import Navbar from "../../Navbar/Navbar";
import SubNav from "../SubNav";
import Footer from "../../../Footer/Footer";

import { useState } from "react";

export default function ForgotPassword() {
  const [sendEmailBtn, setSendEmailBtn] = useState(false);

  const handleClickSendEmailBtn = () => {
    setSendEmailBtn(true);
  };
  return (
    <div className='forgotpassword_page'>
      <SubNav />
      <Navbar />
      <div className='flex flex-col items-center justify-center'>
        <h1 className='text-[25px] font-[500]'>Forgot Password</h1>
        {sendEmailBtn ? (
          <div className='forgotpassword_page-section flex w-[50%] flex-col items-center justify-center gap-[1rem] gap-[1rem] py-[5rem]'>
            <p className='text-[20px] font-[500] text-[#1f1f1f]'>
              Password change link send to your mail
            </p>
            <p className='text-justify text-[#6E798C]'>
              Password is an important key to protecting your data and
              information. It is essential to have a strong and secure password
              that is not easily fahad@GMAIL.COM Making sure your password is
              changed regularly and never shared with anyone is essential for
              taking the necessary steps to protect your accounts and data.
            </p>
          </div>
        ) : (
          <div className='forgotpassword_page-section flex w-[50%] flex-col items-center justify-center gap-[1rem] py-[5rem]'>
            <p className='text-justify text-[#6E798C]'>
              Lorem ipsum dolor sit amet consectetur. Varius aliquet eu at
              fermentum sapien sed semper id urna. Donec nulla nibh lorem morbi
              enim ut in. Adipiscing in sem tellus et ut pharetra. Duis eget
              morbi scelerisque tellus
            </p>
            <input
              className='w-full rounded-[8px] border-2 border-solid border-[#6E798C] p-[1rem]'
              placeholder='Enter your registered email'
              type='email'
            />
            <button
              onClick={handleClickSendEmailBtn}
              className='w-[80%] rounded-[8px] bg-[#28A745] p-[1rem] text-white'>
              Send Link
            </button>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}
