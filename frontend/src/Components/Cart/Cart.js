import React from "react";
import Button from "../../Button/Button";
import Cartcard from "../../Cart Card/Cartcard";
import { useStateValue } from "../../context api/StateProvider";
import CoupanCard from "../../Coupan Card/CoupanCard";
import HealthCheckOutCard from "../../HealthCheckOut Card/HealthCheckOutCard";
import SubTotalCard from "../../Sub Total Card/SubTotalCard";
import TestInformationCard from "../../TestInformationCard/TestInformationCard";
import "./Cart.css";
import SubNav from "../SubNav/SubNav";
import Navbar from "../Navbar/Navbar";
function Cart() {
  const [{ cart,medicalCart }] = useStateValue();
  return (
    <>  
     <SubNav />
        <Navbar />
      <div className="cart">
      {cart?.length === 0  ? (
        <div className="cart_empty">
          <h6>Looks like there is no item in your cart yet. </h6>
          <Button bg="#2a7fba" color="#fff" link="/">
            Buy Medicine
          </Button>
        </div>
      ) : (
        <>
          <div className="cart_left">
            {cart?.map((item) => (
              <Cartcard id="1" setQuantity1={item?.quantity} />
            ))}
            {medicalCart?.map((item) => (
              <Cartcard id="1" setQuantity1={item?.quantity} />
            ))}
           
            <CoupanCard />

        
          </div>
          <div className="cart_right">
            <HealthCheckOutCard />
            <SubTotalCard />
          </div>
        </>
      )}
    </div>
    </>

  );
}

export default Cart;
