import React from "react";
import "./TrendingPage.css";
import img from "../../img/2ccd19da-c816-4ed8-935e-441c55589f18_1680270570 1.jpg";
import Categories from "../../Categories/Categories";
import Product1_Card from "../../Product Card/Product1_Card";
import { HighlightOff, Search, Sort, Tune } from "@mui/icons-material";
import { useState } from "react";
import { useEffect } from "react";
import LargestHealthCard from "../../LargestHealthCard/LargestHealthCard";
import { Link, useParams } from "react-router-dom";
import Banner1 from "../../Banner/Banner1";
import BasicPagination from "../../Pagination/Pagination";
import Navbar from "../Navbar/Navbar";
import SubNav from "../SubNav/SubNav";
import Footer from "../../Footer/Footer";

function TrendingPage() {
  const { Id } = useParams();
  console.log(Id);
  const [sort, setSort] = useState(false);
  const [filter, setFilter] = useState(false);
  const [brands, setBrands] = useState(true);
  const [product, setProduct] = useState(false);
  const filterfilterHandle = (e) => {
    console.log(e.target.textContent);
    if(e.target.textContent==='Brands'){
      setBrands(true)
      setProduct(false)
    } 
     if(e.target.textContent==='Discount'){
      setBrands(false)
      setProduct(true)
    }
  };
  const sortHandle = () => {
    setSort(!sort);
  };
  const filterHandle = () => {
    setFilter(!filter);
  };
  useEffect(() => {
    if (sort === true) {
      setFilter(false);
      console.log(filter, "filter");
    }
    if (filter === true) {
      setSort(false);
      console.log(sort, "sort");
    }
  }, [sort, filter]);
  return (
    <>
        <div className="trendingpage">
       <SubNav />
        <Navbar />
      <div className="trendingpage_filter">
        <div className="trendingpage_filter_top">
          <div className="trendingpage_filter_left">
            <span onClick={sortHandle}>
              <Sort />
              <p>Sort by Relevance</p>
            </span>
          </div>
          <div className="trendingpage_filter_right">
            <span onClick={filterHandle}>
              <Tune />
              <p>Filters</p>
            </span>
          </div>
        </div>
      </div>
      {sort && (
        <div className="sortMenu">
          <div className="sortMenu_heading">
            <p>Sort by</p>
            <HighlightOff
              onClick={() => setSort(false)}
              className="sortMenu_heading_close"
            />
          </div>
          <div className="sortMenu_option">
            <span>
              <input type="radio" />
              <p>Relevance</p>
            </span>{" "}
            <span>
              <input type="radio" />
              <p>Avarage Customer Rating</p>
            </span>{" "}
            <span>
              <input type="radio" />
              <p>Price Low To High</p>
            </span>{" "}
            <span>
              <input type="radio" />
              <p>Price High To Low </p>
            </span>{" "}
            <span>
              <input type="radio" />
              <p>Discount</p>
            </span>
          </div>
        </div>
      )}
      {filter && (
        <div className="sortMenu">
          <div className="sortMenu_heading">
            <p>Filter by</p>
            <HighlightOff
              onClick={() => setFilter(false)}
              className="sortMenu_heading_close"
            />
          </div>
          <div className="filterMenu_option">
            <div className="filterMenu_option_left">
              <p onClick={filterfilterHandle}>Brands</p>
              <p onClick={filterfilterHandle}>Discount</p>
              <p>Product Form</p>
              <p>User</p>
            </div>
            <div className="filterMenu_option_right">
              {brands && (
                <div className="filterMenu_option_right_brands">
                  <div style={{ height: "40px" }}>
                    <input type="text" placeholder="Brands" />
                    <Search />
                  </div>
                  <div className="filterMenu_option_right_brands_brand">
                    <div>
                      <input type="checkbox" />
                      <span>
                        <p>Brands</p>
                        <p>12</p>
                      </span>
                    </div>
                    <div>
                      <input type="checkbox" />
                      <span>
                        <p>Brands</p>
                        <p>12</p>
                      </span>
                    </div>
                    <div>
                      <input type="checkbox" />
                      <span>
                        <p>Brands</p>
                        <p>12</p>
                      </span>
                    </div>
                    <div>
                      <input type="checkbox" />
                      <span>
                        <p>Brands</p>
                        <p>12</p>
                      </span>
                    </div>
                  </div>
                </div>
              )}
              {product && (
                <div className="filterMenu_option_right_brands">
                  <div style={{ height: "40px" }}>
                    <input type="text" placeholder="Discount" />
                    <Search />
                  </div>
                  <div className="filterMenu_option_right_brands_brand">
                    <div>
                      <input type="checkbox" />
                      <span>
                        <p>Discount</p>
                        <p>12%</p>
                      </span>
                    </div>
                    <div>
                      <input type="checkbox" />
                      <span>
                        <p>Discount</p>
                        <p>12%</p>
                      </span>
                    </div>
                    <div>
                      <input type="checkbox" />
                      <span>
                        <p>Discount</p>
                        <p>12%</p>
                      </span>
                    </div>
                    <div>
                      <input type="checkbox" />
                      <span>
                        <p>Discount</p>
                        <p>12%</p>
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
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
          <div className="trendingpage_right_title">
            {" "}
            <h6 style={{ color: "#2A7FBA" }}>
              <Link to="/" style={{ color: "grey", textDecoration: "none" }}>
                Home
              </Link>{" "}
              / {Id}
            </h6>
          </div>
          <Banner1 img={img} />
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
          </div>
        </div>
      </div>
      {/* <div className="home_heading_text">
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
            <br /> Cities
          </p>
        </div>
      </div> */}
      <div>
        <BasicPagination />
      </div>

      <LargestHealthCard />
 
    </div>
    
    <Footer />
    </>

  );
}

export default TrendingPage;
