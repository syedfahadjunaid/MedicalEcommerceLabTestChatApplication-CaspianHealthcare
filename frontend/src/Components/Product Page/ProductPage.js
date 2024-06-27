import React from "react";
import Banner from "../../Banner/Banner";
import BodyCheckUpCard from "../../Body CheckUp Card/BodyCheckUpCard";
import "./ProductPage.css";
import img from "../../img/Rectangle 19.jpg";
import img2 from "../../img/Rectangle 22.jpg";
import img3 from "../../img/Rectangle 69.jpg";
import img4 from "../../img/image 15.jpg";
import img5 from "../../img/image 18.jpg";
import img6 from "../../img/image 16.jpg";
import img7 from "../../img/image 17.jpg";
import Categories from "../../Categories/Categories";
import Product1_Card from "../../Product Card/Product1_Card";
import SubNav from "../SubNav/SubNav";
import Navbar from "../Navbar/Navbar";

function ProductPage() {
  return (
    <div className="productPage">
       <SubNav />
        <Navbar />
      <div className="trendingpage_top">
        <div className="trendingpage_left">
          {/* <div className="trendingpage_left_categories">
            <h6>Categories </h6>
            <p>Multivitamins</p>
            <p>Mineral Supplements</p>
            <p>Vitamin B12 & B Complex</p>
          </div>
          <div className="trendingpage_left_filters">
            <h6>Filters</h6>
            <div className="trendingpage_left_filters_brands">
              <h6>Brands</h6>
              <p>
                <input type="checkbox" /> HealthKart 69
              </p>
              <p>
                <input type="checkbox" /> HealthKart 69
              </p>
              <p>
                <input type="checkbox" /> HealthKart 69
              </p>
              <p>
                <input type="checkbox" /> HealthKart 69
              </p>
            </div>
            <div className="trendingpage_left_filters_discount">
              <p>Less than 10% 540</p>
              <p>10% and above 540</p>
              <p>30% and above 540</p>
              <p>50% and above 540</p>
              <p>70% and above 540</p>
            </div>
          </div> */}
          <Categories />
        </div>
        <div className="trendingpage_right">
          <Banner img={img} />
          <div className="trendingpage_right_categories">
            <div className="trendingpage_right_categories_kids">
              <img src={img3} />
              <img
                src={img4}
                className="trendingpage_right_categories_kids_img"
              />
              <span>Kids</span>
            </div>{" "}
            <div className="trendingpage_right_categories_kids">
              <img src={img3} />
              <img
                src={img5}
                className="trendingpage_right_categories_kids_img"
              />
              <span>Man</span>
            </div>{" "}
            <div className="trendingpage_right_categories_kids">
              <img src={img3} />
              <img
                src={img6}
                className="trendingpage_right_categories_kids_img"
              />
              <span>Women</span>
            </div>{" "}
            <div className="trendingpage_right_categories_kids">
              <img src={img3} />
              <img
                src={img7}
                className="trendingpage_right_categories_kids_img"
              />
              <span>Sports</span>
            </div>
          </div>
          <div className="trendingpage_right_cards">
            <Product1_Card />
            <Product1_Card />
            <Product1_Card />
            <Product1_Card />
            <Product1_Card />
            <Product1_Card />
            <Product1_Card />
            <Product1_Card />
            <Product1_Card />
            <Product1_Card />
            <Product1_Card />
            <Product1_Card />
            <Product1_Card />
            <Product1_Card />
            <Product1_Card />
            <Product1_Card />
          </div>
        </div>
      </div>
      <div className="home_heading_text">
        <h6>INDIA’S LARGEST HEALTHCARE PLATFORM</h6>
      </div>
      <div className="home_second">
        <div className="home_second_card">
          <img src={img2} />
          <p className="home_second_card_text">
            <strong>260k+</strong> <br /> Visitors{" "}
          </p>
        </div>{" "}
        <div className="home_second_card">
          <img src={img2} />
          <p className="home_second_card_text">
            <strong>60k+</strong>
            <br /> Orders Delivered{" "}
          </p>
        </div>{" "}
        <div className="home_second_card">
          <img src={img2} />
          <p className="home_second_card_text">
            <strong>950+</strong>
            <br /> Cities{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
