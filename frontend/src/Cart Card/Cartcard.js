import { DeleteOutline } from "@mui/icons-material";
import React, { useState } from "react";
import "./CartCard.css";
import img from "../img/image 4.jpg";
import { useStateValue } from "../context api/StateProvider";
import Quantity from "../Quantity/Quantity";
function Cartcard({ id,setQuantity1,productimg,price,discription,discount }) {
  const [quantity,setQuantity]=useState(setQuantity1)
  const [{ cart }, dispatch] = useStateValue(1);
  const removeFromCart = () => {
    dispatch({
      type: "REMOVE_FROM_CART",
      id: id,
    });
  };
  const [amount,setAmount] = useState(1);
  const handleDecrese = () => {
    quantity>1?setQuantity(quantity-1):setQuantity(quantity);
  };
  const handleIncrease = () => {
    setQuantity(quantity+1)
  };
  return (
    <div className="cartcard">
      {/* <div className="cartcard_img">
       
      </div> */}
      <div className="cartcard_details">
        <img src={productimg?productimg:img} />
        <p>
          {discription?discription:('Multivitamin Supreme, Zinc, Calcium and Vitamin D Capsule for Immunity, Energy, Overall Health')}
        </p>
        <span>
          <strong>₹{price?price:2000}</strong>
          <s>{discount?discount:3000}</s>
        </span>
      </div>
      <div className="cartcard_quantity">
        <p onClick={removeFromCart}>
          <DeleteOutline /> Remove{" "}
        </p>
        <Quantity amount={quantity} handleDecrese={handleDecrese} handleIncrease={handleIncrease}/>
      </div>
    </div>
  );
}

export default Cartcard;
