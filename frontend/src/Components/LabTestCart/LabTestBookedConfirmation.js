import React from "react";
import SubNav from "../SubNav/SubNav";
import { MdLocationOn } from "react-icons/md";
import ConfirmationPageImage from '../../img/Fahad/labtest/bookingConfirnationImage.gif'

export default function LabTestBookedConfirmation() {
  return (
    <>
      <SubNav />

      <div className="LabTestBookedConfirmation flex flex-col justify-center gap-[10px] px-[10rem] px-[2rem] max-sm:px-[1rem] max-sm:py-[3rem]">
        <p className="text-[25px]">Hey, User</p>
        <h1 className="text-[35px] text-[#2A7FBA]">
          Your Lab Test Is Confirmed.
        </h1>
        <p className="text-[22px] text-[#6E798C]">
          Lorem ipsum dolor sit amet consectetur. Varius aliquet eu at fermentum
          sapien sed semper id urna. Donec nulla nibh lorem morbi enim ut in.
          Adipiscing in sem tellus et ut pharetra. Duis eget morbi scelerisque
          tellus
        </p>
        <div className="flex w-full flex-row max-md:flex-col">
          <p className="w-[60%] text-[30px] text-[#0E0808]">{`ORDER NUMBER: ${"#############"}`}</p>
          <div className="flex w-[40%] flex-col items-center gap-[1rem] bg-white p-[2rem] max-md:w-full">
            <div className="flex w-full flex-row justify-between">
              <p>Subtotal</p>
              <p>₹ 3000</p>
            </div>
            <div className="flex w-full flex-row justify-between">
              <p>Discount</p>
              <p>- ₹ 1000</p>
            </div>
            <div className="flex w-full flex-row justify-between text-[#28A745]">
              <p>Total (Tax incl.)</p>
              <p>₹ 2050</p>
            </div>
            <div className="flex w-full flex-row justify-between">
              <p>Your delivery location</p>
              <div className="flex cursor-default flex-row items-center gap-[6px]">
                <MdLocationOn className="text-[red]" />
                <p className="text-[#2A7FBA]">Lucknow</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <p className="text-[30px]">Thank You</p>
          <img src={ConfirmationPageImage} alt="confirmationPageImage"/>
        </div>
      </div>
    </>
  );
}
