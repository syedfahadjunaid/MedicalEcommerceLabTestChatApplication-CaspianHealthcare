import React, { useState } from "react";
import "./Categories.css";
import { ArrowRightAlt } from "@mui/icons-material";
function Categories() {
  const initailValue = {
    multiVitamin: false,
    vitamin: false,
    miniral: false,
    vitaminB12: false,
  };
  const [selected, setselected] = useState(initailValue);
  const [vitamin, setVitamin] = useState(false);
  const [multiVitamin, setMultiVitamin] = useState(false);
  const [miniral, setMiniral] = useState(false);
  const [vitaminB12, setVitaminB12] = useState(false);
  const getSelectedValue = (event) => {
    console.log(event.target.textContent);
    if (event.target.textContent === "Multivitamins") {
      setMultiVitamin(true);
      setMiniral(false);
      setVitamin(false);
      setVitaminB12(false);
    }
    if (event.target.textContent === "Vitamin B12 & B Complex") {
      setMultiVitamin(false);
      setMiniral(false);
      setVitamin(false);
      setVitaminB12(true);
    }
    if (event.target.textContent === "Mineral Supplements") {
      setMultiVitamin(false);
      setMiniral(true);
      setVitamin(false);
      setVitaminB12(false);
    }
    if (event.target.textContent === "Multivitamins") {
      setMultiVitamin(true);
      setMiniral(false);
      setVitamin(false);
      setVitaminB12(false);
    }
    console.log(multiVitamin, miniral, vitamin, vitaminB12);
  };
  return (
    <div className="categories">
      <h6>Categories </h6>
      <div className="categories_without_option">
        <span onClick={getSelectedValue}>Multivitamins</span>
        <span onClick={getSelectedValue} className="categories_without_option_active">Vitamins A-Z <ArrowRightAlt style={{marginLeft:"5px"}}/></span>
        <span onClick={getSelectedValue}>Mineral Supplements</span>
        <span onClick={getSelectedValue}>Vitamin B12 & B Complex</span>
      </div>
      <div className="categories_with_option">
        <h6>Filters</h6>
        <div className="categories_with_option_brands">
          <h6>Brands</h6>
          <span>
            <span>
              <input type="checkbox" />
              <p>HealthKart</p>
            </span>

            <small>69</small>
          </span>{" "}
          <span>
            <span>
              <input type="checkbox" />
              <p>HealthKart</p>
            </span>

            <small>69</small>
          </span>{" "}
          <span>
            <span>
              <input type="checkbox" />
              <p>HealthKart</p>
            </span>

            <small>69</small>
          </span>{" "}
          <span>
            <span>
              <input type="checkbox" />
              <p>HealthKart</p>
            </span>

            <small>69</small>
          </span>{" "}
          <span>
            <span>
              <input type="checkbox" />
              <p>HealthKart</p>
            </span>

            <small>69</small>
          </span>
        </div>
        <div className="categories_with_option_discount">
          <h6>Discount</h6>
          <span>
            <p>Less than 10%</p>
            <p>540</p>
          </span>
          <span>
            <p>10% and above </p>
            <p>540</p>
          </span>
          <span>
            <p>30% and above </p>
            <p>540</p>
          </span>
          <span>
            <p>50% and above </p>
            <p>540</p>
          </span>
          <span>
            <p>50% and above </p>
            <p>540</p>
          </span>
          <span>
            <p>70% and above </p>
            <p>540</p>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Categories;
