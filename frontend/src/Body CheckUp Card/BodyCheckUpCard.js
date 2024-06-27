import React from "react";
import "./BodyCheckUpCard.css";
import img from ".././img/media.jpg";
import {
  BookmarkBorder,
  HealthAndSafety,
  Share,
  Star,
  StarHalf,
} from "@mui/icons-material";
import Button from "../Button/Button";
import { useStateValue } from "../context api/StateProvider";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
function BodyCheckUpCard({name, price, mrp, shortDescription, image, labCategory, labName, skuCode,id}) {
  const [{ medicalCart }, dispatch] = useStateValue();
  const history = useNavigate();
  const [addedToCart, setAddtoCart] = useState(false);
  const medicineAddhandler = () => {
    setAddtoCart(true);
    dispatch({
      type: "ADD_TO_CART",
      item: {
        id: "1",
        price: 2000,
        quantity: 1,
        // amount:'1'
        // title:title,
        // image:image,
        // price:price,
        // rating:rating
      },
    });
  };
  return (
    <div className='bodycheckup'>
      <div className='bodycheckup_img'>
        <img src={process.env.React_App_Base_Image_Url + image} alt='img' />
      </div>
      <div className='bodycheckup_details'>
        <div className='bodycheckup_details_first'>
          <div className='bodycheckup_details_first_left'>
            <span>
              <strong>100%</strong>
              <HealthAndSafety />
            </span>
          </div>
          
          {/* <div className='bodycheckup_details_first_right'>
            <small>4.9</small>
            <Star className='bodycheckup_details_first_right_icon' />
            <Star className='bodycheckup_details_first_right_icon' />
            <Star className='bodycheckup_details_first_right_icon' />
            <Star className='bodycheckup_details_first_right_icon' />
            <StarHalf className='bodycheckup_details_first_right_icon' />
          </div> */}
        </div>
        {/* <div className='bodycheckup_details_detail'>
          <h6>{name}</h6>
          <p>Subhead</p>
          <p>{shortDescription?.substr(0,50)}</p>
          <strong className='bodycheckup_details_detail_discount'>50%</strong>
          <strong className='bodycheckup_details_detail_price'>
            {price}
            <s className='bodycheckup_details_detail_price_discount'>{mrp}</s>
          </strong>
        </div> */}

        <div className="flex flex-col py-[10px] px-[1rem] w-full">
          <p className="text-[25px]">{name}</p>
          <p className="text-[18px]">{`${shortDescription?.substr(0.70)}...`}</p>
          <div className="flex flex-row gap-[10px] items-center"><p className="text-[30px] text-[#52D470]">₹{price}</p><p className="text-[20px] line-through">₹{mrp}</p></div>
          
        </div>
      </div>
      <span>
        {/* <span>
          {!addedToCart && (
            <button
              className='productCard_button1'
              onClick={medicineAddhandler}>
              Add To Cart
            </button>
          )}
          {addedToCart && (
            <button
              className='productCard_button1'
              onClick={() => history("/cart")}>
              Go To Cart
            </button>
          )}
        </span> */}
        <Link to={`/book-test-cart/${id}`}>
          <button
            className='productCard_button1'
            // onClick={medicineAddhandler}
          >
            Book Test Now
          </button>
        </Link>
        <div>
          <BookmarkBorder className='bodycheckup_span_icon' />
          <Share className='bodycheckup_span_icon' />
        </div>
      </span>
    </div>
  );
}

export default BodyCheckUpCard;
