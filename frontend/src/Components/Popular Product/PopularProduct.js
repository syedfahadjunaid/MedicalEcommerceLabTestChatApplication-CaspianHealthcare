import React from "react";
import Categories from "../../Categories/Categories";
import Product1_Card from "../../Product Card/Product1_Card";
import "./popularProduct.css";
import img1 from "../../img/Rectangle 119.jpg";
import Banner from "../../Banner/Banner";
import BasicPagination from "../../Pagination/Pagination";
import LargestHealthCard from "../../LargestHealthCard/LargestHealthCard";
import SubNav from "../SubNav/SubNav";
import Navbar from "../Navbar/Navbar";
import Footer from "../../Footer/Footer";
function PopularProduct() {
  return (
    <>    
      <SubNav />
        <Navbar />
    <div className="popularProduct">
      <div className="popularProduct_left">
        <Categories />
      </div>
      <div className="popularProduct_right">
        <Banner img={img1} />
        <div className="popularProduct_right_top">
          <h6>Products in Focus</h6>
          <div className="popularProduct_right_top_product">
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
        <div className="popularProduct_right_bottom">
          <h6>Dettol</h6>
          <div className="popularProduct_right_bottom_product">
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
      
    </div>
    <BasicPagination className='pagination_class'/>
    <LargestHealthCard/>
    <Footer />
    </>

  );
}

export default PopularProduct;
