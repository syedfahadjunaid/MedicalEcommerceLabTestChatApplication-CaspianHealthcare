import React, { useRef, useState } from "react";
import "./SinglePage.css";
import img from "../../img/Rectangle 94.jpg";

import {
  Chat,
  KeyboardArrowDown,
  LocalMall,
  LocalShipping,
  Star,
} from "@mui/icons-material";
import Button from "../../Button/Button";
import dic from "../../img/title-7.jpg";
import ads from "../../img/Rectangle 91.jpg";
import med1 from "../../img/med1.jpg";
import med2 from "../../img/med2.jpg";
import med3 from "../../img/med3.jpg";
import med4 from "../../img/med4.jpg";
import RatingCard from "../../Rating Card/RatingCard";
import ReactImageMagnify from "react-image-magnify";
import Quantity from "../../Quantity/Quantity";
// import { fontWeight } from "@mui/system";
import Product1_Card from "../../Product Card/Product1_Card";
import { useStateValue } from "../../context api/StateProvider";
import { useNavigate } from "react-router-dom";
import SubNav from "../SubNav/SubNav";
import Navbar from "../Navbar/Navbar";
import Footer from "../../Footer/Footer";
const images = [med1, med2, med3, med4];
function SinglePage() {
  const [amount, setAmount] = useState(1);
  const handleDecrese = () => {
    amount > 1 ? setAmount(amount - 1) : setAmount(1);
  };
  const handleIncrease = () => {
    setAmount(amount + 1);
  };
  const [img, setImg] = useState(images[0]);
  const hoverHandler = (image, i) => {
    setImg(image);
    refs.current[i].classList.add("active");
    for (var j = 0; j < images.length; j++) {
      if (i !== j) {
        refs.current[j].classList.remove("active");
      }
    }
  };
  const refs = useRef([]);
  refs.current = [];
  const addRefs = (el) => {
    if (el && !refs.current.includes(el)) {
      refs.current.push(el);
    }
  };
  const [quantity, setQuantity] = useState(false);
  const quantityHandle = () => {
    setQuantity(!quantity);
  };
  const history=useNavigate()
  const [singlePageAddToCart,setSinglePageAddToCart]=useState(false)
  const [{ cart }, dispatch] = useStateValue();
  const addhandle = () => {
    setSinglePageAddToCart(true)
    dispatch({
      type: "ADD_TO_CART",
      item: {
        id: "1",
        price: 2000,
        quantity: amount,
        // amount:'1'
        // title:title,
        // image:image,
        // price:price,
        // rating:rating
      },
    });
  };
  return (
    <>
       <div className="singlePage">
       <SubNav />
        <Navbar />
      <div className="singlePage_product">
        <div className="singlePage_product_left">
          <div className="singlePage_product_left_small_imgs">
            <div className="singlePage_product_left_small_imgs_img">
              {images?.map((image, i) => (
                <div
                  className={i == 0 ? "img_wrap active" : "img_wrap"}
                  key={i}
                  onClick={() => hoverHandler(image, i)}
                  ref={addRefs}
                >
                  <img src={image} alt="sdsdf" />
                </div>
              ))}
            </div>
          </div>
          <div className="singlePage_product_left_big_img">
            {/* <img src={med1} /> */}
            <ReactImageMagnify
              {...{
                smallImage: {
                  alt: "Wristwatch by Ted Baker London",
                  isFluidWidth: true,
                  src: img,
                },
                largeImage: {
                  src: img,
                  width: 1200,
                  height: 1800,
                },
                enlargedImageContainerDimensions: {
                  width: "150%",
                  height: "150%",
                },
              }}
            />
          </div>
        </div>

        <div className="singlePage_product_right">
          <div className="singlePage_product_right_left">
            <h6> this Product !</h6>
            <div className="singlePage_product_middle_review">
              <p>4.9</p>
              <span>
                <Star className="singlePage_product_middle_review_star" />
                <Star className="singlePage_product_middle_review_star" />
                <Star className="singlePage_product_middle_review_star" />
                <Star className="singlePage_product_middle_review_star" />
              </span>
              <p>
                <Chat className="singlePage_product_middle_review_icon" /> 67
                review
              </p>
            </div>
            <div className="singlePage_product_right_left_percentage">
              <p>93% of buyers have recommended this.</p>
            </div>
            <div className="singlePage_product_right_left_discription">
              <p>
                Lorem ipsum dolor sit amet consectetur. Risus risus ultricies
                aliquam molestie. Neque id morbi sem felis elit ornare neque.
                Nec vehicula viverra proin neque pulvinar dictum. Eget ac tellus
                praesent pulvinar malesuada sed.
              </p>
            </div>
            <div className="singlePage_product_right_left_packs">
              <h6>Pick Size</h6>
              <div className="singlePage_product_right_left_packs_option">
                <div
                  onClick={quantityHandle}
                  className={
                    !quantity
                      ? "singlePage_product_right_left_packs_option_left quantity_select"
                      : "singlePage_product_right_left_packs_option_left"
                  }
                >
                  <p>10 capsules</p>
                  <p>2800</p>
                </div>
                <div
                  onClick={quantityHandle}
                  className={
                    quantity
                      ? "singlePage_product_right_left_packs_option_right quantity_select"
                      : "singlePage_product_right_left_packs_option_right"
                  }
                >
                  <p>20 capsules</p>
                  <p>3500</p>
                </div>
              </div>
            </div>
            <div className="singlePage_product_right_left_highlights">
              <h6>Product highlights</h6>
              <p> Lorem ipsum dolor sit amet consectetur. Risus</p>
              <p> Lorem ipsum dolor sit amet consectetur. Risus</p>
              <p> Lorem ipsum dolor sit amet consectetur. Risus</p>
            </div>
          </div>
          <div className="singlePage_product_right_right">
            <div className="singlePage_product_right_right_checkout">
              <p style={{ fontSize: "25px", fontWeight: "500" }}>
                <strong className="singlepage_price">₹2000</strong>{" "}
                <s
                  style={{
                    fontSize: "16px",
                    fontWeight: "400",
                    marginLeft: "10px",
                  }}
                >
                  ₹500
                </s>
              </p>
              <p className="singlePage_product_right_right_checkout_discount">
                50%
              </p>
              <p style={{ fontSize: "14px", fontWeight: "400" }}>
                Inclusive of all taxes
              </p>
              <span>
                <Quantity
                  amount={amount}
                  handleDecrese={handleDecrese}
                  handleIncrease={handleIncrease}
                />
                <p>of 60 capsules</p>
              </span>

              {!singlePageAddToCart &&
                <button className="singlepageaddbutton" onClick={addhandle}>
                  
                  Add To Card
                </button>
              }
              {singlePageAddToCart &&
                <button className="singlepageaddbutton" onClick={()=>history('/cart')}>
          
                  Go To Card
                </button>
              }
            </div>
            <div className="singlePage_product_right_right_delivery">
              <p>
                Earliest delivery by{" "}
                <span className="singlepage_delivery">10pm, Tomorrow</span>
              </p>
              <p>
                <span>Delivering to :</span>{" "}
                <span
                  className="singlepage_delivery_arrow"
                  style={{ color: "#6E798C" }}
                >
                  225001, bbk lucknow{" "}
                </span>{" "}
              </p>
            </div>
            <div className="singlePage_product_right_right_policy">
              <div className="singlePage_product_right_right_policy_freeDelivery">
                <div className="singlePage_product_right_right_policy_freeDelivery_left">
                  <LocalShipping style={{ color: "#D75951" }} />
                </div>
                <div className="singlePage_product_right_right_policy_freeDelivery_right">
                  <h6 style={{ fontSize: "17px", fontWeight: "500" }}>
                    Free Delivery
                  </h6>
                  <p style={{ fontSize: "14px", fontWeight: "400" }}>
                    Enter your Postal code for Delivery Availability
                  </p>
                </div>
              </div>
              <div className="singlePage_product_right_right_policy_policy">
                <div className="singlePage_product_right_right_policy_policy_left">
                  <LocalMall style={{ color: "#D75951" }} />
                </div>
                <div className="singlePage_product_right_right_policy_policy_right">
                  <h6 style={{ fontSize: "17px", fontWeight: "500" }}>
                    Return Delivery
                  </h6>
                  <p style={{ fontSize: "14px", fontWeight: "400" }}>
                    Free 30 days Delivery Return. Details
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="singlePage_discrption">
        <div className="singlePage_discrption_left">
          <h6>
            Information about Multivitamin Supreme, Zinc, Calcium and Vitamin D
            Capsule for Immunity, Energy, Overall Health
          </h6>
          <img src={dic} />
          <img src={dic} />
          <img src={dic} />
          <img src={dic} />
          <img src={dic} />
          <img src={dic} />
          <img src={dic} />
          <img src={dic} />
          <img src={dic} />
          <img src={dic} />
          <img src={dic} />
          <img src={dic} />
          <img src={dic} />
          <img src={dic} />
          <img src={dic} />
          <img src={dic} />
          <img src={dic} />
          <img src={dic} />
          <img src={dic} />
          <img src={dic} />
        </div>
        <div className="singlePage_discrption_right">
          <img src={ads} />
          <div className="singlePage_discrption_right_text">
            <p>Ads</p>
          </div>
        </div>
      </div>
      <div className="singlePage_rating">
        <div className="singlePage_rating_heading">
          <h6>Ratings & Reviews</h6>
        </div>
        <RatingCard />
        <RatingCard />
        <RatingCard />
        <RatingCard />
      </div>
      <div className="singlePage_similarProduct">
        <div className="singlePage_similarProduct_heading">
          <h6>Similar products</h6>
        </div>
        <div className="singlePage_similarProduct_product">
          <Product1_Card />
          <Product1_Card />
          <Product1_Card />
          <Product1_Card />
        </div>
      </div>
    </div>
    <Footer />
    </>
 
  );
}

export default SinglePage;
