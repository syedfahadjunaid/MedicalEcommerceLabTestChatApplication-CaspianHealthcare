import React from "react";
import "./OrderConfirm.css";
import SubNav from "../Components/SubNav/SubNav";
import Navbar from "../Components/Navbar/Navbar";
function OrderConfirm() {
  return (
    <div className="orderconfirm">
        <SubNav />
        <Navbar />
      <div className="orderconfirm_top">
        <p>hey, nemesis</p>
        <p>your order is confirmed !</p>
        <p>
          Lorem ipsum dolor sit amet consectetur. Varius aliquet eu at fermentum
          sapien sed semper id urna. Donec nulla nibh lorem morbi enim ut in.
          Adipiscing in sem tellus et ut pharetra. Duis eget morbi scelerisque
          tellus
        </p>
      </div>
      <div className="orderconfirm_bottom">
        <span>
        order : #XXXX XXXX XXXX 4520
        </span>
        <span>
            <span>
                <p>sub-total</p>
                <p>1450</p>
            </span>
            <span>
                <p>+ tax </p>
                <p>255</p>
            </span>
             <span>
                <p> total </p>
                <p>1705</p>
            </span>
        </span>
      </div>
    </div>
  );
}

export default OrderConfirm;
