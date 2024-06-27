import React from "react";
import "./DoctorHomePage.css";
import img from "../../../img/Rectangle 119.jpg";
import img1 from "../../../img/image 26.jpg";
import img2 from "../../../img/Rectangle 163.jpg";
import img3 from "../../../img/image 27.jpg";
import img4 from "../../../img/image 28.jpg";
import img5 from "../../../img/image 29.jpg";
import img6 from "../../../img/image 31.jpg";
import Banner from "../../../Banner/Banner";
import Button from "../../../Button/Button";
import ClientTestimonialCard from "../../../Client Testimonial Card/ClientTestimonialCard";

import FrequentlyAskQuescard from "../../../Frequently Asked Question card/FrequentlyAskQuescard";
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from 'react-responsive-carousel';

import 'react-alice-carousel/lib/alice-carousel.css';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import SubNav from "../../SubNav/SubNav";
import Navbar from "../../Navbar/Navbar";
import Footer from "../../../Footer/Footer";

function DoctorHomePage() {
  const responsive4 = {
    desktop: {
      breakpoint: { max: 3000, min: 1474 },
      items: 1,
      paritialVisibilityGutter: 60,
      // optional, default to 1.
    },
    smalldesktop: {
      breakpoint: { max: 1423, min: 1224 },
      items: 1,
      paritialVisibilityGutter: 60,
      // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1223, min: 464 },
      items: 1,
      // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      // optional, default to 1.
    },
  };

  return (
    <>
      <div className="doctorHomePage">
       <SubNav />
        <Navbar />
      <div className="doctorHomePage_banner">
        <Banner img={img} />
      </div>
      <div className="doctorHomePage_head">
        <div className="doctorHomePage_head_left">
          <h6>Online doctor consultation with qualified doctors</h6>
          <p>
            Starting at <strong>₹299</strong>
          </p>
          <Button bg="#356FD2" color="#fff" link='/alldoctoravalible'>
            Consult now
          </Button>
        </div>
        <div className="doctorHomePage_head_right">
          <img src={img1} alt="doctor_logo" />
        </div>
      </div>
      <div className="doctorHomePage_card">
        <div className="doctorHomePage_card_one">
          <strong>20k</strong>
          <p>Total Consultations</p>
        </div>
        <div className="doctorHomePage_card_two">
          <strong>3k+</strong>
          <p>Total Consultations</p>
        </div>
        <div className="doctorHomePage_card_three">
          <strong>22+</strong>
          <p>Specialities</p>
        </div>
      </div>
      <div className="doctorHomePage_client_review">
        <div className="doctorHomePage_client_review_text">
          <h6>what our happy clients say </h6>
        </div>

        <div className="doctorHomePage_client_review_card">
          {/* <span>
            <ArrowCircleLeft className="doctorHomePage_client_review_card_icon" />
          </span> */}
          {/* <Carousel autoPlay={true} infiniteLoop={true} width='100%' showArrows={false} showStatus={false} showThumbs={false}>
          <ClientTestimonialCard />
          <ClientTestimonialCard />
          <ClientTestimonialCard />
          </Carousel> */}
          {/* <AliceCarousel
        mouseTracking
        items={items}
        responsive={responsive}
        controlsStrategy="alternate"
      
    /> */}
          {/* <span>
            <ArrowCircleRight className="doctorHomePage_client_review_card_icon" />
          </span> */}
                  <Carousel
          swipeable={true}
          draggable={true}
          showDots={false}
          responsive={responsive4}
          ssr={false} // means to render carousel on server-side.
          infinite={true}
      
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

          autoPlay={true}
        >
        <ClientTestimonialCard />
        <ClientTestimonialCard />
        <ClientTestimonialCard />
        <ClientTestimonialCard />
        <ClientTestimonialCard />
        <ClientTestimonialCard />
        </Carousel>
        </div>
      </div>
      <div className="doctorHomePage_client_policy">
        <div className="doctorHomePage_client_policy_card">
          <img src={img2} />
          <span>
            <img src={img3} />
          </span>
          <p>100% Confidential</p>
        </div>{" "}
        <div className="doctorHomePage_client_policy_card">
          <img src={img2} />
          <span>
            <img src={img4} />
          </span>
          <p>Certified Doctors</p>
        </div>{" "}
        <div className="doctorHomePage_client_policy_card">
          <img src={img2} />
          <span>
            <img src={img5} />
          </span>
          <p>Convenience</p>
        </div>{" "}
        <div className="doctorHomePage_client_policy_card">
          <img src={img2} />
          <span>
            <img src={img6} />
          </span>
          <p>Cost & time Effective</p>
        </div>
      </div>
      <div className="doctorHomePage_client_frequently_ask_question">
        <h6>Frequently Asked Questions</h6>
        <span>
          <h6>Important Note</h6>
          <p>
            We currently deliver medicines in Delhi NCR, Chennai, Hyderabad,
            Lucknow, Agra, Indore, Bhopal, Bengaluru, Jaipur, Kolkata and
            Ahmedabad only. We service orders 7 days a week. In case of any
            delay, our agent will inform you on a priority basis.
          </p>
        </span>
        <div className="doctorHomePage_client_frequently_ask_question_cards">
          <FrequentlyAskQuescard/>
          <FrequentlyAskQuescard/>
          <FrequentlyAskQuescard/>
          <FrequentlyAskQuescard/>
          <FrequentlyAskQuescard/>
          <FrequentlyAskQuescard/>
          <FrequentlyAskQuescard/>
        </div>
      </div>
      {/* <DoctorCard/> */}
    </div>
    <Footer/>
    </>
  
  );
}

export default DoctorHomePage;
