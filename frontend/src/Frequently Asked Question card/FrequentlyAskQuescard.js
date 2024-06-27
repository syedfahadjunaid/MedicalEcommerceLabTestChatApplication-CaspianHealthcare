import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";
import React from "react";
import { useState } from "react";
import "./FrequentlyAskQuescard.css";
import {delay, motion } from 'framer-motion'
function FrequentlyAskQuescard() {
    const[readmore,setReadmore]=useState(false)
    const readMorehandle=()=>{
        setReadmore(!readmore)
        console.log(readmore)
    }
  return (
    <div className="frequentlyaskquescard">
        <span onClick={readMorehandle}>
        <h6>Is Caspian a pharmacy?</h6>
         <KeyboardArrowDown className={readmore?'flip-horizontal-top':''}/>
   
     
      
        </span>
    
      {readmore && <p
    
      >
        No, Caspian helps you connect to the nearest partnered pharmacy that can
        fulfill your order. We partner with verified pharmacies, which work with
        registered pharmacists.
      </p>}
    </div>
  );
}

export default FrequentlyAskQuescard;
