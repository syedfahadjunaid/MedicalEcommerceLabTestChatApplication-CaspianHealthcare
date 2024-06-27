import React from "react";
import "./ContactUsPage.css";

import Navbar from "../../../Components/Navbar/Navbar";
import SubNav from "../../../Components/SubNav/SubNav";
import Footer from "../../../Footer/Footer";

import BannerImg from "../../../img/Fahad/Rectangle 110529.png";

import { BsTelephoneFill } from "react-icons/bs";
import { GrMail } from "react-icons/gr";

import mapImage from "../../../img/Fahad/image 95.png";

import LargestHealthCard from "../../../LargestHealthCard/LargestHealthCard";

export default function ContactUsPage() {
  return (
    <div className='contactus_page-section'>
      <SubNav />
      <Navbar />
      <div className='contactus_page-main'>
        <p className='contactus_page-heading p-[2rem] text-center text-[22px]'>
          Contact Us
        </p>
        <img src={BannerImg} alt='bannerImg' />
        <div className='contactus_page flex w-full flex-row'>
          <div className='contactus_page-left flex w-[70%] flex-col gap-[1rem] p-[2rem]'>
            <div className='contactus_page-left-input-name-mobile flex flex-row gap-[1rem]'>
              <input
                className='w-full rounded-[8px] border-2 border-solid border-[#efefef] p-[1rem]'
                placeholder='Name'
                type='text'
              />
              <input
                className='w-full rounded-[8px] border-2 border-solid border-[#efefef] p-[1rem]'
                placeholder='Mobile'
                type='number'
              />
            </div>
            <input
              className='w-full rounded-[8px] border-2 border-solid border-[#efefef] p-[1rem]'
              placeholder='Email'
              type='email'
            />
            <textarea
              className='w-full rounded-[8px] border-2 border-solid border-[#efefef] p-[1rem]'
              placeholder='Message'
              type='text'
              rows={4}
            />
          </div>
          <div className='contactus_page-right flex w-[30%] flex-row items-center'>
            <div className='contactus_page-right-helpline-card flex w-full flex-col items-center gap-[1rem] bg-[#F5F5F5] p-[1rem]'>
              <p className='contactus_page-right-helpline-card-heading text-[22px] font-[500]'>
                Helpline Details
              </p>
              <div className='contactus_page-right-helpline-card-content flex w-full flex-row justify-between bg-white p-[1rem]'>
                <BsTelephoneFill className='text-[30px]' />
                <p>+91-1234567890</p>
              </div>
              <div className='contactus_page-right-helpline-card-content flex w-full flex-row justify-between bg-white p-[1rem]'>
                <GrMail className='text-[30px]' />
                <p>exampleemail@email.com</p>
              </div>
              <div className='contactus_page-right-helpline-card-content flex w-full flex-row justify-between bg-white p-[1rem]'>
                <GrMail className='text-[30px]' />
                <p>exampleemail@email.com</p>
              </div>
            </div>
          </div>
        </div>
        <img className='p-[2rem]' src={mapImage} alt='mapImage' />
        <LargestHealthCard />
        {/* <div className='contactus_page-lowersection flex flex-col items-center gap-[1rem]'>
          <p className='text-[20px] tracking-wide'>
            INDIA’S LARGEST HEALTHCARE PLATFORM
          </p>
          <div className='contactus_page-lowersection-cards'>
            <div className='flex flex-col items-center gap-[5px] rounded-[8px] bg-[#28A745] p-[3rem] text-white'>
              <p className='text-[20px]'>60k+</p>
              <p className='text-[20px]'>Visitors</p>
            </div>
          </div>
        </div> */}
      </div>
      <Footer />
    </div>
  );
}
