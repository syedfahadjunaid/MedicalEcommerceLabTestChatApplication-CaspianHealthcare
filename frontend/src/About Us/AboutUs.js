import React, { useEffect, useState } from "react";
import "./AboutUs.css";
import img from "../img/Rectangle119.jpg";
import img1 from "../img/Rectangle 94.jpg";
import img2 from "../img/hospital-img.jpg";

import Banner from "../Banner/Banner";
import { Link } from "react-router-dom";
import {
  Favorite,
  KeyboardArrowDown,
  LocalHospital,
  Visibility,
} from "@mui/icons-material";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import SubNav from "../Components/SubNav/SubNav";
import Navbar from "../Components/Navbar/Navbar";
const items = [
  <img src={img1} role="presentation" className="alice_we_are"/>,
  <img src={img1} role="presentation" className="alice_we_are"/>,
  <img src={img1}  role="presentation" className="alice_we_are"/>,
];
const responsive= {
  0: {
      items: 1,
  },
  1024: {
      items: 1,
      itemsFit: 'contain',
  }
}
function AboutUs() {
  const [responsibility, setResponsibility] = useState(true);
  const [heart, setHeart] = useState(false);
  const [eye, setEye] = useState(false);
  const viewHandle = (e) => {
 
    if (e.target.textContent === "OUR RESPONSIBILITY") {
   
      setResponsibility(!responsibility);
      setHeart(false);
      setEye(false);
    }
    if (e.target.textContent === "HEART SPECIALIST") {
      setResponsibility(false);
      setHeart(!heart);
      setEye(false);

    }

    if (e.target.textContent === "EYE SPECIALIST") {
      setResponsibility(false);
      setHeart(false);
      setEye(!eye);
    }
  };
 
  return (
    <div className="about">
        <SubNav />
        <Navbar />
      <div className="about_header">
        <Banner img={img} />
      </div>
      <div className="about_whychooseus">
        <div className="about_whychooseus_left">
          <h6>
            WHO
            <span style={{ marginLeft: "10px", fontWeight: "500" }}>
              WE ARE
            </span>
          </h6>
          <p>
            Etharums ser quidem rerum facilis dolores nemis omnis fugats vitaes
            nemo minima rerums unsers sadips amets. Sed ut perspiciatis unde
            omnis iste natus error sit voluptatem accusantium doloremque
            laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore.
          </p>
          <p>
            Etharums ser quidem rerum facilis dolores nemis omnis fugats vitaes
            nemo minima rerums unsers sadips amets. Sed ut perspiciatis unde
            omnis iste natus error sit voluptatem accusantium doloremque
            laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore.
          </p>
          <Link to="#">Read More</Link>
        </div>
        <div className="about_whychooseus_right">
        <AliceCarousel mouseTracking items={items} responsive={responsive} autoPlay={true} infinite autoPlayInterval={3000}/>
          {/* <img src={img1} /> */}
        </div>
      </div>
      <div className="about_team">
        <div className="about_team_top">
          <h6>
            MEET THE{" "}
            <span style={{ fontWeight: "600" }}>PERFECT SPECIALISTS</span> TEAM
          </h6>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat nibh euismod tincidunt ut laoreet dolore magna.
          </p>
        </div>
        <div className="about_team_bottom">
          <div className="about_team_bottom_card">
            <article>
              <div class="article-wrapper">
                <figure>
                  <img src="https://picsum.photos/id/1011/800/450" alt="" />
                </figure>
                <div class="article-body">
                  <h2>This is some title</h2>
                  <p>
                    Curabitur convallis ac quam vitae laoreet. Nulla mauris
                    ante, euismod sed lacus sit amet, congue bibendum eros.
                    Etiam mattis lobortis porta. Vestibulum ultrices iaculis
                    enim imperdiet egestas.
                  </p>
                  <a href="#" class="read-more">
                    View Profile
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="icon"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </article>
          </div>
          <div className="about_team_bottom_card">
            <article>
              <div class="article-wrapper">
                <figure>
                  <img src="https://picsum.photos/id/1011/800/450" alt="" />
                </figure>
                <div class="article-body">
                  <h2>This is some title</h2>
                  <p>
                    Curabitur convallis ac quam vitae laoreet. Nulla mauris
                    ante, euismod sed lacus sit amet, congue bibendum eros.
                    Etiam mattis lobortis porta. Vestibulum ultrices iaculis
                    enim imperdiet egestas.
                  </p>
                  <a href="#" class="read-more">
                    View Profile
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="icon"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </article>
          </div>
          <div className="about_team_bottom_card">
            <article>
              <div class="article-wrapper">
                <figure>
                  <img src="https://picsum.photos/id/1011/800/450" alt="" />
                </figure>
                <div class="article-body">
                  <h2>This is some title</h2>
                  <p>
                    Curabitur convallis ac quam vitae laoreet. Nulla mauris
                    ante, euismod sed lacus sit amet, congue bibendum eros.
                    Etiam mattis lobortis porta. Vestibulum ultrices iaculis
                    enim imperdiet egestas.
                  </p>
                  <a href="#" class="read-more">
                    View Profile
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="icon"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
      <div className="about_our_hospital">
        <div className="about_our_hospital_left">
          <div className="about_our_hospital_left_heading">
            <h6>
              OUR <span style={{ fontWeight: "600" }}> HOSPITAL</span>
            </h6>
          </div>
          <div className="about_our_hospital_left_bottom">
            <img src={img2} alt="img" />
          </div>
        </div>
        <div className="about_our_hospital_right">
          <div className="about_our_hospital_right_heading">
            <h6>
              WHY <span style={{ fontWeight: "600" }}>CHOOSE CASPIAN</span>
            </h6>
          </div>
          <div className="about_our_hospital_right_bottom">
            <div className="about_our_hospital_right_bottom_one">
              <div className="about_our_hospital_right_bottom_one_heading">
                <span>
                  <LocalHospital style={{ color: "#2b96cc" }} />
                </span>
                <p onClick={viewHandle} style={{cursor:'pointer'}}>
                  OUR RESPONSIBILITY 
                </p>
                <KeyboardArrowDown/>
              </div>
              {responsibility && (
                <div className={responsibility?'fade-in-top about_our_hospital_right_bottom_one_container':'fade-in-bottom about_our_hospital_right_bottom_one_container'}>
                  <p>
                    Etharums ser quidem rerum facilis dolores nemis omnis fugats
                    vitaes nemo minima rerums unsers sadips amets. Sed ut
                    perspiciatis unde omnis iste natus error sit voluptatem
                    accusantium doloremque laudantium, totam rem aperiam.
                  </p>
                  <p>
                    veritatis et quasi architecto beatae vitae dicta sunt
                    explicabo. Nemo enim ipsam voluptatem quia voluptas sit
                    aspernatur aut odit aut fugit nemo minima rerums unsers
                    sadips amets. Sed ut perspiciatis unde sed quia
                    consequuntur. Page Maker including versions.
                  </p>
                </div>
              )}
            </div>
            <div className="about_our_hospital_right_bottom_one">
              <div className="about_our_hospital_right_bottom_one_heading">
                <span>
                  <Favorite style={{ color: "#2b96cc" }} />
                </span>
                <p onClick={viewHandle} style={{cursor:'pointer'}}>
                  HEART SPECIALIST 
                </p>
                <KeyboardArrowDown/>
              </div>
              {heart && (
                <div className={heart?'fade-in-top about_our_hospital_right_bottom_one_container':'fade-in-bottom about_our_hospital_right_bottom_one_container'}>
                  <p>
                    Etharums ser quidem rerum facilis dolores nemis omnis fugats
                    vitaes nemo minima rerums unsers sadips amets. Sed ut
                    perspiciatis unde omnis iste natus error sit voluptatem
                    accusantium doloremque laudantium, totam rem aperiam.
                  </p>
                  <p>
                    veritatis et quasi architecto beatae vitae dicta sunt
                    explicabo. Nemo enim ipsam voluptatem quia voluptas sit
                    aspernatur aut odit aut fugit nemo minima rerums unsers
                    sadips amets. Sed ut perspiciatis unde sed quia
                    consequuntur. Page Maker including versions.
                  </p>
                </div>
              )}
            </div>
            <div className="about_our_hospital_right_bottom_one">
              <div className="about_our_hospital_right_bottom_one_heading">
                <span>
                  <Visibility style={{ color: "#2b96cc" }} />
                </span>
                <p onClick={viewHandle} style={{cursor:'pointer'}}>
                  EYE SPECIALIST 
                </p>
                <KeyboardArrowDown/>
              </div>
              {eye && (
                <div className={eye?'fade-in-top about_our_hospital_right_bottom_one_container':'fade-in-bottom about_our_hospital_right_bottom_one_container'}>
                  <p>
                    Etharums ser quidem rerum facilis dolores nemis omnis fugats
                    vitaes nemo minima rerums unsers sadips amets. Sed ut
                    perspiciatis unde omnis iste natus error sit voluptatem
                    accusantium doloremque laudantium, totam rem aperiam.
                  </p>
                  <p>
                    veritatis et quasi architecto beatae vitae dicta sunt
                    explicabo. Nemo enim ipsam voluptatem quia voluptas sit
                    aspernatur aut odit aut fugit nemo minima rerums unsers
                    sadips amets. Sed ut perspiciatis unde sed quia
                    consequuntur. Page Maker including versions.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
