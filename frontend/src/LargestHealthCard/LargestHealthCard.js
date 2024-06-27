import React from "react";
import "./LargestHealthCard.css";
import img from "../img/Rectangle 19.jpg";

import labtestEndCardImg1 from "../img/Fahad/labtest/1.png";
import labtestEndCardImg2 from "../img/Fahad/labtest/2.png";
import labtestEndCardImg3 from "../img/Fahad/labtest/3.png";
function LargestHealthCard() {
  return (
    <div className='labtest_endcards mb-[2rem] flex w-full flex-row items-center justify-center gap-[1rem] bg-white p-[2rem] max-sm:flex-col'>
      <div className='flex h-[200px] w-[200px] flex-col items-center justify-center rounded-md bg-[#52D470] text-white'>
        <img
          className='h-[50px] w-[50px]'
          src={labtestEndCardImg1}
          alt='img1'
        />
        <h1 className='text-[40px]'>260+</h1>
        <p>Visitors</p>
      </div>
      <div className='flex h-[200px] w-[200px] flex-col items-center justify-center rounded-md bg-[#52D470] text-white'>
        <img
          className='h-[50px] w-[50px]'
          src={labtestEndCardImg2}
          alt='img1'
        />
        <h1 className='text-[40px]'>60k+</h1>
        <p>Orders Delivered</p>
      </div>
      <div className='flex h-[200px] w-[200px] flex-col items-center justify-center rounded-md bg-[#52D470] text-white'>
        <img
          className='h-[50px] w-[50px]'
          src={labtestEndCardImg3}
          alt='img1'
        />
        <h1 className='text-[40px]'>50+</h1>
        <p>Cities</p>
      </div>
    </div>
  );
}

export default LargestHealthCard;
