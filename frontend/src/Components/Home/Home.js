import React, { useEffect, useRef, useState } from "react";
import "./Home.css";

import img1 from "../../img/image 57.jpg";

import img3 from "../../img/image 94.jpg";

import combo1 from "../../img/image 20.jpg";
import combo2 from "../../img/image 75.jpg";
import combo3 from "../../img/image 71.jpg";
import combo4 from "../../img/image 72.jpg";
import combo5 from "../../img/image 73.jpg";
import combo6 from "../../img/image 74.jpg";
import trending1 from "../../img/image 79.jpg";
import trending2 from "../../img/image 78.jpg";
import trending3 from "../../img/image 76.jpg";
import trending4 from "../../img/image 77.jpg";
import trending5 from "../../img/image 3.jpg";
import trending6 from "../../img/image 80.jpg";
import feature1 from "../../img/image 66.jpg";
import feature2 from "../../img/image 19.jpg";
import feature3 from "../../img/image 67.jpg";
import feature4 from "../../img/image 65.jpg";
import feature5 from "../../img/image 68.jpg";
import feature6 from "../../img/image 62.jpg";
import deseas from "../../img/website medicines/image 49.png";
import deseas1 from "../../img/website medicines/image 50.png";
import deseas2 from "../../img/website medicines/image 51.png";
import deseas3 from "../../img/website medicines/image 53.png";
import deseas4 from "../../img/website medicines/image 54.png";
import deseas6 from "../../img/website medicines/image 48.jpg";
import deseas7 from "../../img/website medicines/image 47.jpg";
import everydarCare from "../../img/image 92.jpg";

import sugar from "../../img/image 3.jpg";
import sugar1 from "../../img/image 81.jpg";
import sugar2 from "../../img/image 82.jpg";
import sugar3 from "../../img/image 83.jpg";
import sugar4 from "../../img/image 84.jpg";
import sugar5 from "../../img/image 85.jpg";

import banner4 from "../../img/image 95.jpg";
import banner1 from "../../img/2ccd19da-c816-4ed8-935e-441c55589f18_1680270570 1.jpg";
import banner2 from "../../img/d80f98de-054e-4670-a881-9cbb79dba541_1681894621 1.jpg";
import banner3 from "../../img/d2acff83-24c9-4730-b7b2-2668a8a319b6_1681892020 1.jpg";
// import banner5 from "../../img/WhatsApp Image 2023-04-20 at 12.48.48 PM.jpeg";

import Banner from "../../Banner/Banner";
import Product_Card from "../../Product Card/Product_Card";

import Button from "../../Button/Button";
import BodyCheckUpCard from "../../Body CheckUp Card/BodyCheckUpCard";
import FeatureCard from "../../Featured Card/FeatureCard";

// import Footer from "../../Footer/Footer";
// import Slider from "react-slick";
// import "./slick.css";
// import "./slick-theme.css";
// import AliceCarousel from 'react-alice-carousel';
// import 'react-alice-carousel/lib/alice-carousel.css';

// import { Link } from "react-router-dom";

import LargestHealthCard from "../../LargestHealthCard/LargestHealthCard";

import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import TrendingCard from "../../Trending Card/TrendingCard";
import SubNav from "../SubNav/SubNav";
import Navbar from "../Navbar/Navbar";
import Footer from "../../Footer/Footer";
import { useSelector } from "react-redux";
import { Box, CircularProgress } from "@mui/material";

function Home({ initialSlide = 0 }) {
  const handleDragStart = (e) => e.preventDefault();

  const items = [
    <Product_Card />,
    <Product_Card />,
    <Product_Card />,
    <Product_Card />,
    <Product_Card />,
    <Product_Card />,
    <Product_Card />,
    <Product_Card />,
  ];
  const items1 = [
    <FeatureCard image={feature1} />,
    <FeatureCard image={feature2} />,
    <FeatureCard image={feature3} />,
    <FeatureCard image={feature4} />,
    <FeatureCard image={feature5} />,
    <FeatureCard image={feature6} />,
    <FeatureCard image={feature2} />,
    <FeatureCard image={feature1} />,
  ];
  const items2 = [
    <BodyCheckUpCard />,
    <BodyCheckUpCard />,
    <BodyCheckUpCard />,
    <BodyCheckUpCard />,
    <BodyCheckUpCard />,
    <BodyCheckUpCard />,
    <BodyCheckUpCard />,
    <BodyCheckUpCard />,
  ];
  const items3 = [
    <TrendingCard title="Eye Care" link="Eye Care" />,
    <TrendingCard image={deseas} title="Kidney Care" link="Kidney Care" />,
    <TrendingCard image={deseas1} title="Bone, Joint" link="Bone, Joint" />,
    <TrendingCard image={deseas2} title="Liver Care" link="Liver Care" />,
    <TrendingCard image={deseas3} title="Cardiac Care" link="Cardiac Care" />,
    <TrendingCard image={deseas4} />,
    <TrendingCard image={deseas6} title="Face Care" link="Face Care" />,
    <TrendingCard image={deseas7} />,
  ];
  const items4 = [
    <Banner img={banner1} />,
    <Banner img={banner2} />,
    <Banner img={banner3} />,
    <Banner img={banner4} />,
  ];
  const items5 = [
    <Product_Card
      img={combo1}
      title="Sugar Free Gold Low Calorie Sweetener"
      details="bottle of 500 pellets"
    />,
    <Product_Card
      img={combo2}
      title="Sugar Free Gold Low Calorie Sweetener"
      details="bottle of 500 pellets"
    />,
    <Product_Card
      img={combo3}
      title="Sugar Free Gold Low Calorie Sweetener"
      details="bottle of 500 pellets"
    />,
    <Product_Card
      img={combo4}
      title="Sugar Free Gold Low Calorie Sweetener"
      details="bottle of 500 pellets"
    />,
    <Product_Card
      img={combo5}
      title="Sugar Free Gold Low Calorie Sweetener"
      details="bottle of 500 pellets"
    />,
    <Product_Card
      img={combo6}
      title="Sugar Free Gold Low Calorie Sweetener"
      details="bottle of 500 pellets"
    />,
  ];
  const items6 = [
    <Product_Card
      img={trending1}
      title="Sugar Free Gold Low Calorie Sweetener"
      details="bottle of 500 pellets"
    />,
    <Product_Card
      img={trending2}
      title="Sugar Free Gold Low Calorie Sweetener"
      details="bottle of 500 pellets"
    />,
    <Product_Card
      img={trending3}
      title="Sugar Free Gold Low Calorie Sweetener"
      details="bottle of 500 pellets"
    />,
    <Product_Card
      img={trending4}
      title="Sugar Free Gold Low Calorie Sweetener"
      details="bottle of 500 pellets"
    />,
    <Product_Card
      img={trending5}
      title="Sugar Free Gold Low Calorie Sweetener"
      details="bottle of 500 pellets"
    />,
    <Product_Card
      img={trending6}
      title="Sugar Free Gold Low Calorie Sweetener"
      details="bottle of 500 pellets"
    />,
  ];
  const items7 = [
    <Product_Card
      img={everydarCare}
      title="Sugar Free Gold Low Calorie Sweetener"
      details="bottle of 500 pellets"
    />,
    <Product_Card
      img={everydarCare}
      title="Sugar Free Gold Low Calorie Sweetener"
      details="bottle of 500 pellets"
    />,
    <Product_Card
      img={everydarCare}
      title="Sugar Free Gold Low Calorie Sweetener"
      details="bottle of 500 pellets"
    />,
    <Product_Card
      img={everydarCare}
      title="Sugar Free Gold Low Calorie Sweetener"
      details="bottle of 500 pellets"
    />,
    <Product_Card
      img={everydarCare}
      title="Sugar Free Gold Low Calorie Sweetener"
      details="bottle of 500 pellets"
    />,
    <Product_Card
      img={everydarCare}
      title="Sugar Free Gold Low Calorie Sweetener"
      details="bottle of 500 pellets"
    />,
  ];
  const items8 = [
    <Product_Card
      img={sugar}
      title="Sugar Free Gold Low Calorie Sweetener"
      details="bottle of 500 pellets"
    />,
    <Product_Card
      img={sugar1}
      title="Sugar Free Gold Low Calorie Sweetener"
      details="bottle of 500 pellets"
    />,
    <Product_Card
      img={sugar2}
      title="Sugar Free Gold Low Calorie Sweetener"
      details="bottle of 500 pellets"
    />,
    <Product_Card
      img={sugar3}
      title="Sugar Free Gold Low Calorie Sweetener"
      details="bottle of 500 pellets"
    />,
    <Product_Card
      img={sugar4}
      title="Sugar Free Gold Low Calorie Sweetener"
      details="bottle of 500 pellets"
    />,
    <Product_Card
      img={sugar5}
      title="Sugar Free Gold Low Calorie Sweetener"
      details="bottle of 500 pellets"
    />,
  ];
  const responsive = {
    0: {
      items: 1,
    },
    1024: {
      items: 5,
      itemsFit: "contain",
    },
  };
  const responsive1 = {
    0: {
      items: 1,
    },
    1024: {
      items: 4,
      itemsFit: "contain",
    },
  };
  const responsive2 = {
    0: {
      items: 1,
    },
    1024: {
      items: 1,
      itemsFit: "contain",
    },
  };
  const responsive3 = {
    0: {
      items: 2,
    },
    1024: {
      items: 6,
      itemsFit: "contain",
    },
  };
  const responsive4 = {
    desktop: {
      breakpoint: { max: 3000, min: 1474 },
      items: 5,
      paritialVisibilityGutter: 60,
      // optional, default to 1.
    },
    smalldesktop: {
      breakpoint: { max: 1423, min: 1224 },
      items: 4,
      paritialVisibilityGutter: 60,
      // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1223, min: 464 },
      items: 3,
      // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      // optional, default to 1.
    },
  };
  const [hasSetPosition, setHasSetPosition] = useState(false);
  const slider = useRef();

  useEffect(() => {
    if (slider.current && !hasSetPosition) {
      slider.current.slickGoTo(initialSlide);
      setHasSetPosition(true);
    }
  }, [initialSlide, hasSetPosition, slider]);

  // const responsive = {
  //   superLargeDesktop: {
  //     // the naming can be any, depends on you.
  //     breakpoint: { max: 4000, min: 3000 },
  //     items: 5,
  //   },
  //   desktop: {
  //     breakpoint: { max: 3000, min: 1024 },
  //     items: 3,
  //   },
  //   tablet: {
  //     breakpoint: { max: 1024, min: 464 },
  //     items: 2,
  //   },
  //   mobile: {
  //     breakpoint: { max: 464, min: 0 },
  //     items: 1,
  //   },
  // };
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.transparent",
    border: "2px solid transparent",
    boxShadow: 0,
    p: 4,
    display: "flex",
    alignItem: "center",
    justifyContent: "center",
  };
  const { banner, loading } = useSelector((state) => state.banner);
  console.log(banner, loading);
  const { allbrands } = useSelector((state) => state.brand);
  useEffect(() => {
    console.log(allbrands?.data, "allbrands");
  }, [allbrands]);

  return (
    <>
      <SubNav />
      <Navbar />
      <div className="home">
        <div className="home_banner">
          <AliceCarousel
            mouseTracking
            responsive={responsive2}
            infinite={true}
            autoPlay={true}
            autoPlayInterval={4000}
            disableDotsControls
          >
            {banner?.homepage?.map((item) => (
              <img
                src={process.env.React_App_Base_Image_Url + item?.image}
                alt={item?.alt_tag}
                style={{ width: "100%", objectFit: "cover", height: "350px" }}
              />
            ))}
          </AliceCarousel>
          {/* <Banner img={img} /> */}
        </div>

        <div className="home_heading_text">
          <h6>India’s Leading Online Pharmacy & Healthcare Platform</h6>
        </div>
        <div className="home_first">
          <div className="home_first_left">
            <img src={img1} />
            <span className="home_first_left_span">
              100% safe our medicine{" "}
            </span>
          </div>
          <div className="home_first_right">
            <img src={img3} />
            <span className="home_first_right_span">
              100% satisfier lab partners{" "}
            </span>
          </div>
        </div>
        <div className="home_second1">
          <AliceCarousel
            paddingLeft={30}
            mouseTracking
            responsive={responsive3}
            disableDotsControls
          >
            {allbrands?.data?.map((item) => (
              <TrendingCard title={item?.brandname}  link="Eye Care" />
            ))}
          </AliceCarousel>
        </div>
        <div className="home_heading_text home_heading_text_second">
          <h6 style={{ marginLeft: "15px" }}>
            Popular categories of Vitamins & Nutrition
          </h6>
          <span style={{ marginRight: "15px" }}>
            <Button
              className="home_heading_button"
              bg="#6C98FF"
              color="#fff"
              link="/product/Popular categories of Vitamins & Nutrition"
            >
              View More
            </Button>
          </span>
        </div>
        <div className="home_third">
          {/* <Product_Card />
        <Product_Card />
        <Product_Card />
        <Product_Card />
        <Product_Card />
        <Product_Card /> */}
          {/* <AliceCarousel
          paddingLeft={50}
          mouseTracking
          items={items}
          responsive={responsive}
        /> */}
          <Carousel
            swipeable={true}
            draggable={true}
            showDots={false}
            responsive={responsive4}
            ssr={false} // means to render carousel on server-side.
            infinite={true}
            autoPlay={false}
            autoPlaySpeed={3000}
            keyBoardControl={true}
            // customTransition="all .5"

            // transitionDuration={500}
            containerClass="carousel-container"
            // removeArrowOnDeviceType={["tablet", "mobile"]}
            //deviceType={true}//{this.props.deviceType}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
            className="location-jobs "
            containerClass="carousel-container"
            slidesToSlide={1}
          >
            <Product_Card />

            <Product_Card />
            <Product_Card />
            <Product_Card />
            <Product_Card />
            <Product_Card />
            <Product_Card />
            <Product_Card />
          </Carousel>
        </div>
        <div className="home_heading_text  home_heading_text_second">
          <h6 style={{ marginLeft: "15px" }}>Full body health checkups</h6>
          <span style={{ marginRight: "15px" }}>
            <Button bg="#6C98FF" color="#fff" link="/labtest">
              View More
            </Button>
          </span>
        </div>
        <div className="home_fourth">
          {/* <AliceCarousel
          paddingLeft={50}
          mouseTracking
          items={items2}
          responsive={responsive1}
        /> */}
          <Carousel
            swipeable={true}
            draggable={true}
            showDots={false}
            responsive={responsive4}
            ssr={false} // means to render carousel on server-side.
            infinite={true}
            autoPlay={false}
            autoPlaySpeed={3000}
            keyBoardControl={true}
            // customTransition="all .5"

            // transitionDuration={500}
            containerClass="carousel-container"
            // removeArrowOnDeviceType={["tablet", "mobile"]}
            //deviceType={true}//{this.props.deviceType}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
            className="location-jobs "
            containerClass="carousel-container"
            slidesToSlide={1}
          >
            <BodyCheckUpCard />
            <BodyCheckUpCard />
            <BodyCheckUpCard />
            <BodyCheckUpCard />
            <BodyCheckUpCard />
            <BodyCheckUpCard />
            <BodyCheckUpCard />
            <BodyCheckUpCard />
            <BodyCheckUpCard />
            <BodyCheckUpCard />
            <BodyCheckUpCard />
            <BodyCheckUpCard />
            <BodyCheckUpCard />
            <BodyCheckUpCard />
          </Carousel>
        </div>
        <div className="home_heading_text  home_heading_text_second">
          <h6>Featured brands</h6>
          <span>
            <Button bg="#6C98FF" color="#fff" link="/product/Featured brands">
              View More
            </Button>
          </span>
        </div>
        <div className="home_five">
          {/* <FeatureCard />
        <FeatureCard />
        <FeatureCard />
        <FeatureCard />
        <FeatureCard /> */}
          {/* <AliceCarousel
          paddingLeft={50}
          mouseTracking
          items={items1}
          responsive={responsive}
        /> */}
          <Carousel
            swipeable={true}
            draggable={true}
            showDots={false}
            responsive={responsive4}
            ssr={false} // means to render carousel on server-side.
            infinite={true}
            autoPlay={false}
            autoPlaySpeed={3000}
            keyBoardControl={true}
            // customTransition="all .5"

            // transitionDuration={500}
            containerClass="carousel-container"
            // removeArrowOnDeviceType={["tablet", "mobile"]}
            //deviceType={true}//{this.props.deviceType}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
            className="location-jobs "
            containerClass="carousel-container"
            slidesToSlide={1}
          >
            <FeatureCard image={feature1} />
            <FeatureCard image={feature2} />
            <FeatureCard image={feature3} />
            <FeatureCard image={feature4} />
            <FeatureCard image={feature5} />
            <FeatureCard image={feature6} />
            <FeatureCard image={feature2} />
            <FeatureCard image={feature1} />
          </Carousel>
        </div>
        <div className="home_heading_text  home_heading_text_second">
          <h6 style={{ marginLeft: "15px" }}>Popular Combo Deals</h6>
          <span style={{ marginRight: "15px" }}>
            <Button
              bg="#6C98FF"
              color="#fff "
              link="/product/Popular Combo Deals"
            >
              View More
            </Button>
          </span>
        </div>
        <div className="home_six">
          {/* <AliceCarousel
          paddingLeft={50}
          mouseTracking
          items={items5}
          responsive={responsive}
        /> */}
          <Carousel
            swipeable={true}
            draggable={true}
            showDots={false}
            responsive={responsive4}
            ssr={false} // means to render carousel on server-side.
            infinite={true}
            autoPlay={false}
            autoPlaySpeed={3000}
            keyBoardControl={true}
            // customTransition="all .5"

            // transitionDuration={500}
            containerClass="carousel-container"
            // removeArrowOnDeviceType={["tablet", "mobile"]}
            //deviceType={true}//{this.props.deviceType}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
            className="location-jobs "
            containerClass="carousel-container"
            slidesToSlide={1}
          >
            <Product_Card />
            <Product_Card />
            <Product_Card />
            <Product_Card />
            <Product_Card />
            <Product_Card />
            <Product_Card />
            <Product_Card />
          </Carousel>
        </div>
        <div className="home_heading_text  home_heading_text_second">
          <h6 style={{ marginLeft: "15px" }}>Trending now</h6>
          <span style={{ marginRight: "15px" }}>
            <Button bg="#6C98FF" color="#fff" link="/product/Trending">
              View All
            </Button>
          </span>
        </div>
        <div className="home_seven">
          {/* <Product2_Card bg="#D9D9D9" />
        <Product2_Card bg="#D9D9D9" />
        <Product2_Card bg="#D9D9D9" />
        <Product_Card />
        <Product_Card /> */}
          {/* <AliceCarousel
          paddingLeft={50}
          mouseTracking
          items={items6}
          responsive={responsive}
        /> */}
          <Carousel
            swipeable={true}
            draggable={true}
            showDots={false}
            responsive={responsive4}
            ssr={false} // means to render carousel on server-side.
            infinite={true}
            autoPlay={false}
            autoPlaySpeed={3000}
            keyBoardControl={true}
            // customTransition="all .5"

            // transitionDuration={500}
            containerClass="carousel-container"
            // removeArrowOnDeviceType={["tablet", "mobile"]}
            //deviceType={true}//{this.props.deviceType}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
            className="location-jobs "
            containerClass="carousel-container"
            slidesToSlide={1}
          >
            <Product_Card
              img={trending1}
              title="Sugar Free Gold Low Calorie Sweetener"
              details="bottle of 500 pellets"
            />
            <Product_Card
              img={trending2}
              title="Sugar Free Gold Low Calorie Sweetener"
              details="bottle of 500 pellets"
            />
            <Product_Card
              img={trending3}
              title="Sugar Free Gold Low Calorie Sweetener"
              details="bottle of 500 pellets"
            />
            <Product_Card
              img={trending4}
              title="Sugar Free Gold Low Calorie Sweetener"
              details="bottle of 500 pellets"
            />
            <Product_Card
              img={trending5}
              title="Sugar Free Gold Low Calorie Sweetener"
              details="bottle of 500 pellets"
            />
            <Product_Card
              img={trending6}
              title="Sugar Free Gold Low Calorie Sweetener"
              details="bottle of 500 pellets"
            />
          </Carousel>
        </div>
        <div className="home_heading_text  home_heading_text_second">
          <h6 style={{ marginLeft: "15px" }}>Everyday Care</h6>
          <span style={{ marginRight: "15px" }}>
            <Button bg="#6C98FF" color="#fff" link="/product/Everyday Care">
              View All
            </Button>
          </span>
        </div>
        <div className="home_seven">
          {/* <Product2_Card bg="#D9D9D9" />
        <Product2_Card bg="#D9D9D9" />
        <Product2_Card bg="#D9D9D9" />
        <Product_Card />
        <Product_Card /> */}
          {/* <AliceCarousel
          paddingLeft={50}
          mouseTracking
          items={items7}
          responsive={responsive}
        /> */}
          <Carousel
            swipeable={true}
            draggable={true}
            showDots={false}
            responsive={responsive4}
            ssr={false} // means to render carousel on server-side.
            infinite={true}
            autoPlay={false}
            autoPlaySpeed={3000}
            keyBoardControl={true}
            // customTransition="all .5"

            // transitionDuration={500}
            containerClass="carousel-container"
            // removeArrowOnDeviceType={["tablet", "mobile"]}
            //deviceType={true}//{this.props.deviceType}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
            className="location-jobs "
            containerClass="carousel-container"
            slidesToSlide={1}
          >
            <Product_Card
              img={everydarCare}
              title="Sugar Free Gold Low Calorie Sweetener"
              details="bottle of 500 pellets"
            />
            <Product_Card
              img={everydarCare}
              title="Sugar Free Gold Low Calorie Sweetener"
              details="bottle of 500 pellets"
            />
            <Product_Card
              img={everydarCare}
              title="Sugar Free Gold Low Calorie Sweetener"
              details="bottle of 500 pellets"
            />
            <Product_Card
              img={everydarCare}
              title="Sugar Free Gold Low Calorie Sweetener"
              details="bottle of 500 pellets"
            />
            <Product_Card
              img={everydarCare}
              title="Sugar Free Gold Low Calorie Sweetener"
              details="bottle of 500 pellets"
            />
            <Product_Card
              img={everydarCare}
              title="Sugar Free Gold Low Calorie Sweetener"
              details="bottle of 500 pellets"
            />
          </Carousel>
        </div>
        <div className="home_heading_text  home_heading_text_second">
          <h6 style={{ marginLeft: "15px" }}>Personal Hygiene Care</h6>
          <span style={{ marginRight: "15px" }}>
            <Button
              bg="#6C98FF"
              color="#fff"
              link="/product/Personal Hygiene Care"
            >
              View All
            </Button>
          </span>
        </div>
        <div className="home_seven">
          {/* <Product2_Card bg="#D9D9D9" />
        <Product2_Card bg="#D9D9D9" />
        <Product2_Card bg="#D9D9D9" />
        <Product_Card />
        <Product_Card /> */}
          {/* <AliceCarousel
          paddingLeft={50}
          mouseTracking
          items={items6}
          responsive={responsive}
        /> */}
          <Carousel
            swipeable={true}
            draggable={true}
            showDots={false}
            responsive={responsive4}
            ssr={false} // means to render carousel on server-side.
            infinite={true}
            autoPlay={false}
            autoPlaySpeed={3000}
            keyBoardControl={true}
            // customTransition="all .5"

            // transitionDuration={500}
            containerClass="carousel-container"
            // removeArrowOnDeviceType={["tablet", "mobile"]}
            //deviceType={true}//{this.props.deviceType}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
            className="location-jobs "
            containerClass="carousel-container"
            slidesToSlide={1}
          >
            <Product_Card
              img={trending1}
              title="Sugar Free Gold Low Calorie Sweetener"
              details="bottle of 500 pellets"
            />
            <Product_Card
              img={trending2}
              title="Sugar Free Gold Low Calorie Sweetener"
              details="bottle of 500 pellets"
            />
            <Product_Card
              img={trending3}
              title="Sugar Free Gold Low Calorie Sweetener"
              details="bottle of 500 pellets"
            />
            <Product_Card
              img={trending4}
              title="Sugar Free Gold Low Calorie Sweetener"
              details="bottle of 500 pellets"
            />
            <Product_Card
              img={trending5}
              title="Sugar Free Gold Low Calorie Sweetener"
              details="bottle of 500 pellets"
            />
            <Product_Card
              img={trending6}
              title="Sugar Free Gold Low Calorie Sweetener"
              details="bottle of 500 pellets"
            />
          </Carousel>
        </div>
        <div className="home_heading_text  home_heading_text_second">
          <h6 style={{ marginLeft: "15px" }}>Sugar substitutes</h6>
          <span style={{ marginRight: "15px" }}>
            <Button bg="#6C98FF" color="#fff" link="/product/Sugar substitutes">
              View All
            </Button>
          </span>
        </div>
        <div className="home_seven">
          {/* <Product2_Card bg="#D9D9D9" />
        <Product2_Card bg="#D9D9D9" />
        <Product2_Card bg="#D9D9D9" />
        <Product_Card />
        <Product_Card /> */}
          {/* <AliceCarousel
          paddingLeft={50}
          mouseTracking
          items={items8}
          responsive={responsive}
        /> */}
          <Carousel
            swipeable={true}
            draggable={true}
            showDots={false}
            responsive={responsive4}
            ssr={false} // means to render carousel on server-side.
            infinite={true}
            autoPlay={false}
            autoPlaySpeed={3000}
            keyBoardControl={true}
            // customTransition="all .5"

            // transitionDuration={500}
            containerClass="carousel-container"
            // removeArrowOnDeviceType={["tablet", "mobile"]}
            //deviceType={true}//{this.props.deviceType}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
            className="location-jobs "
            containerClass="carousel-container"
            slidesToSlide={1}
          >
            <Product_Card
              img={sugar}
              title="Sugar Free Gold Low Calorie Sweetener"
              details="bottle of 500 pellets"
            />

            <Product_Card
              img={sugar1}
              title="Sugar Free Gold Low Calorie Sweetener"
              details="bottle of 500 pellets"
            />

            <Product_Card
              img={sugar2}
              title="Sugar Free Gold Low Calorie Sweetener"
              details="bottle of 500 pellets"
            />

            <Product_Card
              img={sugar3}
              title="Sugar Free Gold Low Calorie Sweetener"
              details="bottle of 500 pellets"
            />

            <Product_Card
              img={sugar4}
              title="Sugar Free Gold Low Calorie Sweetener"
              details="bottle of 500 pellets"
            />

            <Product_Card
              img={sugar5}
              title="Sugar Free Gold Low Calorie Sweetener"
              details="bottle of 500 pellets"
            />
          </Carousel>
        </div>
        {/* <div className="home_heading_text">
        <h6>INDIA’S LARGEST HEALTHCARE PLATFORM</h6>
      </div>
      <div className="home_second">
        <div className="home_second_card">
          <img src={img2} />
          <p className="home_second_card_text"><strong>260k+</strong> <br/> Visitors </p>
        </div>{" "}
        <div className="home_second_card">
          <img src={img2} />
          <p className="home_second_card_text"><strong>60k+</strong><br/> Orders Delivered  </p>
        </div>{" "}
        <div className="home_second_card">
          <img src={img2} />
          <p className="home_second_card_text"><strong>950+</strong><br/> Cities  </p>
        </div>
      </div> */}
        <LargestHealthCard />
      </div>
      <Footer />
      {loading && (
        <Box sx={style}>
          <CircularProgress />
        </Box>
      )}
    </>
  );
}

export default Home;
