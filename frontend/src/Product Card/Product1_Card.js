import React from "react";
import "./Product1_Card.css";
import img1 from "../img/image 4.jpg";
import { BookmarkBorder, Share, Star } from "@mui/icons-material";
import Button from "../Button/Button";
import { useStateValue } from "../context api/StateProvider";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
function Product1_Card() {
  const history=useNavigate()
  const [{cart},dispatch]=useStateValue()
  const [goToCart,setGoToCart]=useState(false)
  const addToCard1=()=>{
    setGoToCart(true)
    console.log(setGoToCart)
dispatch({
  type:"ADD_TO_CART",
  item:{
    id:'1',
    price:2000,
    quantity:1,
    // amount:'1'
    // title:title,
    // image:image,
    // price:price,
    // rating:rating
  }
})
  }
  return (
    <div className="product1Card" style={{ cursor:'pointer'}}>
      <div className="product1Card_img" onClick={()=>history('/singlepage/11')}>
        <img src={img1} />
      </div>
      <div className="product1Card_details">
        <div className="product1Card_details_details">
          <h6>this Product !</h6>
          <span>
            <strong>4.9</strong>
            <Star className="product1Card_details_details_star"/>
            <Star className="product1Card_details_details_star"/>
            <Star className="product1Card_details_details_star"/>
            <Star className="product1Card_details_details_star"/>
            <Star className="product1Card_details_details_star"/>
          </span>
        </div>
        <div className="product1Card_details_description">
          <p>Premium pepperoni and cheese is made with real mozzarella</p>
        </div>
        <div className="product1Card_details_price">
          <strong>₹2000</strong>
          <s style={{marginLeft:'5px',fontSize:"12px",fontWeight:"400"}}>₹3000</s>
        </div>
        <div className="product1Card_details_discount">
            <small>
                50%
            </small>
        </div>
        <div className="product1Card_details_button">
           {!goToCart && <button className="product1Card_details_button_button" onClick={addToCard1} style={{cursor:'pointer'}}>Add To Cart</button>}
           {goToCart && <button className="product1Card_details_button_button" onClick={()=>history('/cart')} style={{cursor:'pointer'}}>Go To Cart</button>}
            <span>
            <BookmarkBorder/>
            </span>
         <span>
         <Share/>
         </span>
       
        </div>
      </div>
    </div>
  );
}

export default Product1_Card;
