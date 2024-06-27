import React, { useState } from "react";
import Banner from "../../Banner/Banner";
import LabTestNav from "../Lab Test Nav/LabTestNav";
import "./LabTest.css";
import img from "../../img/2ccd19da-c816-4ed8-935e-441c55589f18_1680270570 1.jpg";
import img1 from "../../img/Rectangle 121.jpg";
import img2 from "../../img/Rectangle 130.jpg";
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from "react-responsive-carousel";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {
  DeliveryDining,
  DirectionsWalk,
  HealthAndSafety,
  Home,
  LocalHospital,
  LocalOffer,
  Summarize,
} from "@mui/icons-material";
import Button from "../../Button/Button";
import BodyCheckUpCard from "../../Body CheckUp Card/BodyCheckUpCard";
import LabPartner from "../../Lab Partner/LabPartner";
import ClientTestimonialCard from "../../Client Testimonial Card/ClientTestimonialCard";
import SubNav from "../SubNav/SubNav";
import Navbar from "../Navbar/Navbar";
import Footer from "../../Footer/Footer";

import labtestEndCardImg1 from "../../img/Fahad/labtest/1.png";
import labtestEndCardImg2 from "../../img/Fahad/labtest/2.png";
import labtestEndCardImg3 from "../../img/Fahad/labtest/3.png";

import { useGetLabTestsQuery } from "../../services/labTests";
import { useGetLabsQuery } from "../../services/labs";
import { useGetLabCategoriesQuery } from "../../services/labCategory";

import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

import { LocationOn, Search } from "@mui/icons-material";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

import "./LabTestNav.css";

import { useEffect, useRef } from "react";

function LabTest() {
  const responseGetAllLabTest = useGetLabTestsQuery();
  const responseGetAllLabs = useGetLabsQuery();
  const responseGetAllLabCategories = useGetLabCategoriesQuery();

  // console.log(responseGetAllLabTest);

  const [searchLocation, setSearchLocation] = useState([]);
  const [searchLoactionListView, setSearchLocationListView] = useState();

  const [searchTest, setSearchTest] = useState([]);
  const [searchTestListView, setSearchTestListView] = useState();

  const [selectLocation, setSelectLocation] = useState("All");
  const [selectTest, setSelectTest] = useState("All");
  const [selectLab, setSelectLab] = useState("All");
  const [categoryChange, setCategoryChange] = useState("All");

  // console.log(selectLab);
  // console.log(selectLocation);
  // console.log(selectTest);

  const locationRef = useRef();
  const testRef = useRef();

  const testCardRef = useRef();

  useEffect(() => {
    const handler = (event) => {
      if (!locationRef.current) {
        return;
      } else if (!locationRef.current.contains(event.target)) {
        setSearchLocationListView(false);
      }
    };

    document.addEventListener("click", handler, true);

    return () => document.removeEventListener("click", handler);
  }, []);

  useEffect(() => {
    const handler = (event) => {
      if (!testRef.current) {
        return;
      } else if (!testRef.current.contains(event.target)) {
        setSearchTestListView(false);
      }
    };

    document.addEventListener("click", handler, true);

    return () => document.removeEventListener("click", handler);
  }, []);

  const handleSearchByLocation = (e) => {
    let updatedData = [
      ...new Set(responseGetAllLabs?.data?.Labs?.map((l) => l.city)),
    ];
    updatedData = updatedData.filter((location) => {
      return (
        location.toLowerCase().indexOf(e.target.value.toLowerCase()) !== -1
      );
    });
    setSearchLocation(updatedData);
  };

  const handleSearchTest = (e) => {
    let updatedData = [
      ...new Set(responseGetAllLabTest?.data?.data?.map((t) => t.name)),
    ];
    updatedData = updatedData.filter((test) => {
      return test.toLowerCase().indexOf(e.target.value.toLowerCase()) !== -1;
    });
    setSearchTest(updatedData);
  };

  // console.log(searchTest);

  // const handleChange = (event) => {
  //   setAge(event.target.value);
  // };

  const labNames = responseGetAllLabs?.data?.Labs?.map((lab, index) => {
    return (
      <option
        onClick={() => {
          testCardRef.current?.scrollIntoView({ behavior: "smooth" });
          setSelectLab(lab.lab_name);
          setSelectLocation("All");
          setSelectTest("All");
          setCategoryChange("All");
        }}
        key={index}>
        {lab.lab_name}
      </option>
    );
  });

  const filteredTestCards = responseGetAllLabTest?.data?.data.filter(
    (test, index) => {
      if (
        selectLocation === "All" &&
        selectTest === "All" &&
        selectLab === "All" &&
        categoryChange === "All"
      ) {
        return test;
      }

      if (
        selectLocation !== "All" &&
        selectTest === "All" &&
        selectLab === "All" &&
        categoryChange === "All"
      ) {
        const filteredLab = responseGetAllLabs?.data?.Labs?.find(
          (lab, index) => {
            if (lab.id === test.lab_nameid) {
              return selectLocation === lab.city;
            }
            return false;
          }
        );

        return filteredLab;
      }

      if (
        selectLocation === "All" &&
        selectTest === "All" &&
        selectLab !== "All" &&
        categoryChange === "All"
      ) {
        const filteredLab = responseGetAllLabs?.data?.Labs?.find(
          (lab, index) => {
            if (lab.id === test.lab_nameid) {
              return selectLab === lab.lab_name;
            }
            return false;
          }
        );

        return filteredLab;
      }

      if (
        selectLocation === "All" &&
        selectTest !== "All" &&
        selectLab === "All" &&
        categoryChange === "All"
      ) {
        return selectTest === test.name;
      }

      if (
        selectLocation === "All" &&
        selectTest === "All" &&
        selectLab === "All" &&
        categoryChange !== "All"
      ) {
        const filteredLab = responseGetAllLabCategories?.data?.data?.find(
          (category, index) => {
            if (category.id === test.lab_categoryid) {
              return categoryChange === category.category_name;
            }
            return false;
          }
        );
        return filteredLab;
      }
      return false;
    }
  );

  const mappedCards = filteredTestCards?.map((test, index) => {
    return (
      <BodyCheckUpCard
        key={index}
        id={test.id}
        name={test.name}
        price={test.price}
        mrp={test.mrp}
        shortDescription={test.short_discription}
        image={test.thumbnail}
        skuCode={test.sku}
      />
    );
  });

  // const filteredCardsWithLabCity = responseGetAllLabTest?.data?.data?.filter(
  //   (test, index) => {
  //     const filteredLab = responseGetAllLabs?.data?.Labs?.find((lab, index) => {
  //       if (lab.id === test.lab_nameid) {
  //         return selectLocation === lab.city;
  //       }
  //       return false;
  //     });

  //     return filteredLab;
  //   }
  // );

  // const filteredCardsWithLabName = responseGetAllLabTest?.data?.data?.filter(
  //   (test, index) => {
  //     const filteredLab = responseGetAllLabs?.data?.Labs?.find((lab, index) => {
  //       if (lab.id === test.lab_nameid) {
  //         return selectLab === lab.lab_name;
  //       }
  //       return false;
  //     });

  //     return filteredLab;
  //   }
  // );

  // const filteredCardsWithLabTestName =
  //   responseGetAllLabTest?.data?.data?.filter((test, index) => {
  //     return selectTest === test.name;
  //   });

  // const filteredCardsWithLabCategories =
  //   responseGetAllLabTest?.data?.data?.filter((test, index) => {
  //     const filteredLab = responseGetAllLabCategories?.data?.data?.find(
  //       (category, index) => {
  //         if (category.id === test.lab_categoryid) {
  //           return categoryChange === category.category_name;
  //         }
  //         return false;
  //       }
  //     );

  //     return filteredLab;
  //   });
  // console.log(filteredTestCards);

  const [popular, setPopular] = useState(true);
  const [fever, setFever] = useState(false);
  const [covid, setCovid] = useState(false);
  const [womenHealth, setWomenHealth] = useState(false);
  const [fitness, setFitness] = useState(false);
  const [lifestyle, setLifeStyle] = useState(false);
  const changeHandle = (event) => {
    console.log(event.currentTarget.textContent);
    if (event.currentTarget.textContent === "Popular Packages") {
      setPopular(true);
      setFever(false);
      setCovid(false);
      setWomenHealth(false);
      setFitness(false);
      setLifeStyle(false);
    }
    if (event.currentTarget.textContent === "Fever") {
      setPopular(false);
      setFever(true);
      setCovid(false);
      setWomenHealth(false);
      setFitness(false);
      setLifeStyle(false);
    }
    if (event.currentTarget.textContent === "Covid 19") {
      setPopular(false);
      setFever(false);
      setCovid(true);
      setWomenHealth(false);
      setFitness(false);
      setLifeStyle(false);
    }
    if (event.currentTarget.textContent === "Women Health") {
      setPopular(false);
      setFever(false);
      setCovid(false);
      setWomenHealth(true);
      setFitness(false);
      setLifeStyle(false);
    }
    if (event.currentTarget.textContent === "Fitness") {
      setPopular(false);
      setFever(false);
      setCovid(false);
      setWomenHealth(false);
      setFitness(true);
      setLifeStyle(false);
    }
    if (event.currentTarget.textContent === "Lifestyle Habits") {
      setPopular(false);
      setFever(false);
      setCovid(false);
      setWomenHealth(false);
      setFitness(false);
      setLifeStyle(true);
    }
    // if (popular == true) {

    // } else if (fever == true) {
    //   setPopular(false);
    //   setCovid(false);
    //   setWomenHealth(false);
    //   setFitness(false);
    //   setLifeStyle(false);
    // } else if (covid == true) {
    //   setPopular(false);
    //   setFever(false);
    //   setWomenHealth(false);
    //   setFitness(false);
    //   setLifeStyle(false);
    // } else if (womenHealth == true) {
    //   setPopular(false);
    //   setFever(false);
    //   setCovid(false);
    //   setFitness(false);
    //   setLifeStyle(false);
    // } else if (fitness == true) {
    //   setPopular(false);
    //   setFever(false);
    //   setCovid(false);
    //   setWomenHealth(false);
    //   setLifeStyle(false);
    // } else if (lifestyle == true) {
    //   setPopular(false);
    //   setFever(false);
    //   setCovid(false);
    //   setWomenHealth(false);
    //   setFitness(false);
    // }
    // useEffect(() => {
    //   if (popular == true) {
    //     setFever(false);
    //     setCovid(false);
    //     setWomenHealth(false);
    //     setFitness(false);
    //     setLifeStyle(false);
    //   } else if (fever == true) {
    //     setPopular(false);
    //     setCovid(false);
    //     setWomenHealth(false);
    //     setFitness(false);
    //     setLifeStyle(false);
    //   } else if (covid == true) {
    //     setPopular(false);
    //     setFever(false);
    //     setWomenHealth(false);
    //     setFitness(false);
    //     setLifeStyle(false);
    //   } else if (womenHealth == true) {
    //     setPopular(false);
    //     setFever(false);
    //     setCovid(false);
    //     setFitness(false);
    //     setLifeStyle(false);
    //   } else if (fitness == true) {
    //     setPopular(false);
    //     setFever(false);
    //     setCovid(false);
    //     setWomenHealth(false);
    //     setLifeStyle(false);
    //   } else if (lifestyle == true) {
    //     setPopular(false);
    //     setFever(false);
    //     setCovid(false);
    //     setWomenHealth(false);
    //     setFitness(false);
    //   }
    //   console.log(
    //     popular,
    //     "pop",
    //     womenHealth,
    //     "wom",
    //     covid,
    //     "co",
    //     fever,
    //     "fev",
    //     lifestyle,
    //     "lif",
    //     fitness,
    //     "fit"
    //   );
    // }, [popular, fever, covid, womenHealth, fitness, lifestyle]);
  };

  const items = [
    <LabPartner />,
    <LabPartner />,
    <LabPartner />,
    <LabPartner />,
  ];
  const responsive = {
    0: {
      items: 1,
      itemsFit: "contain",
    },
    1024: {
      items: 1,
      itemsFit: "fill",
    },
  };
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
      <SubNav />
      <Navbar />

      <div className='labtestnav'>
        <div
          onClick={() => setSearchLocationListView(true)}
          style={{ position: "relative" }}>
          <div className='labtestnav_location'>
            <input
              type='text'
              placeholder='Location'
              onChange={handleSearchByLocation}
            />
            <LocationOn style={{ color: "#DC3545" }} />
          </div>
          {searchLoactionListView && (
            <div
              ref={locationRef}
              style={{
                position: "absolute",
                backgroundColor: "white",
                width: "100%",
              }}>
              {searchLocation?.map((city, index) => {
                return (
                  <p
                    className='lab-test-location-input'
                    // onClick={() =>
                    //   testCardRef.current?.scrollIntoView({
                    //     behavior: "smooth",
                    //   })
                    // }
                    onClick={() => {
                      testCardRef.current?.scrollIntoView({
                        behavior: "smooth",
                      });
                      setSelectLocation(city);
                      setSelectLab("All");
                      setSelectTest("All");
                      setCategoryChange("All");
                    }}
                    style={{ padding: "8px" }}
                    key={index}>
                    {city}
                  </p>
                );
              })}
            </div>
          )}
        </div>
        <div className='labtestnav_alltab'>
          <select placeholder='All Test '>{labNames}</select>
        </div>
        <div
          onClick={() => setSearchTestListView(true)}
          style={{ position: "relative" }}>
          <div className='labtestnav_search'>
            <input
              onChange={handleSearchTest}
              type='text'
              placeholder='Search Health Tests'
            />
            <Search />
          </div>
          {searchTestListView && (
            <div
              ref={testRef}
              style={{
                position: "absolute",
                backgroundColor: "white",
                width: "100%",
              }}>
              {searchTest?.map((test, index) => {
                return (
                  <p
                    className='lab-test-location-input'
                    onClick={() => {
                      testCardRef.current?.scrollIntoView({
                        behavior: "smooth",
                      });
                      setSelectTest(test);
                      setSelectLocation("All");
                      setSelectLab("All");
                      setCategoryChange("All");
                    }}
                    style={{ padding: "8px" }}
                    key={index}>
                    {test}
                  </p>
                );
              })}
            </div>
          )}
        </div>
        <span>
          <span style={{ marginRight: "10px" }}>
            <Button
              className='labtestnav_button'
              bg='#356FD2'
              color='#fff'
              link='/orderwithpriciption'>
              Book test from prescription
            </Button>
          </span>
          <span style={{ marginLeft: "10px" }}>
            <Button bg='#28A745' color='#fff'>
              find my test
            </Button>
          </span>
        </span>
      </div>
      {/* <LabTestNav
        data={responseGetAllLabs?.data?.Labs}
        testData={responseGetAllLabTest?.data?.data}
      /> */}

      {responseGetAllLabTest.isLoading ? (
        <Box sx={{ display: "flex", p: "1rem" }}>
          <CircularProgress />
        </Box>
      ) : (
        <div className='labtest px-[2rem]'>
          <div className='labtest_banner'>
            <Banner img={img} />
          </div>

          <div className='labtest_hometest'>
            <div className='labtest_hometest_left px-[1rem]'>
              <h6>Lab Test From The Comfort Of Your Home</h6>
              <p>
                50,00,000+ lab tests booked | 20,00,000+ satisfied customers
              </p>
              <div className='labtest_hometest_left_icons'>
                <div className='labtest_hometest_left_icons_icon'>
                  <HealthAndSafety />
                  <div className='labtest_hometest_left_icons-text'>
                    <p>100% Safe & Hygienic</p>
                  </div>
                </div>
                <div className='labtest_hometest_left_icons_icon'>
                  <DeliveryDining />
                  <p>Home Sample Pick Up</p>
                </div>
                <div className='labtest_hometest_left_icons_icon'>
                  <Summarize />
                  <p>View Reports Online</p>
                </div>
                <div className='labtest_hometest_left_icons_icon'>
                  <LocalHospital />
                  <p>Free Doctor Consultation</p>
                </div>
                <div className='labtest_hometest_left_icons_icon'>
                  <LocalOffer />
                  <p>Best Prices Guaranteed</p>
                </div>
              </div>
              <div className='labtest_hometest_left_button'>
                <Button className='' bg='#356FD2' color='#fff'>
                  View Popular Packages
                </Button>
              </div>
            </div>
            <div className='labtest_hometest_right'>
              <img src={img1} alt='img1' />
            </div>
          </div>

          <div className='labtest_new'>
            <div className='labtest_new_left'>
              <span>
                <Home />
                <h6>HEALTH TEST AT YOUR HOME</h6>
              </span>
              <div className='labtest_new_left_div'>
                <div className='labtest_new_left_div_left'>
                  <p>Complete Blood Count</p>
                  <p>Liver Function Test</p>
                  <p>Lipid Profile</p>
                </div>
                <div className='labtest_new_left_div_right'>
                  <p>COVID-RTPCR</p>
                  <p>Thyroid profile Total</p>
                </div>
              </div>
            </div>
            <div className='labtest_new_right'>
              <span>
                <DirectionsWalk />
                <h6>VISIT A LAB NEAR YOU</h6>
              </span>
              <div className='labtest_new_left_div'>
                <div className='labtest_new_left_div_left'>
                  <p>Complete Blood Count</p>
                  <p>Liver Function Test</p>
                  <p>Lipid Profile</p>
                </div>
                <div className='labtest_new_left_div_right'>
                  <p>COVID-RTPCR</p>
                  <p>Thyroid profile Total</p>
                </div>
              </div>
            </div>
          </div>
          <div ref={testCardRef} className='labtest_popular_test px-[2rem]'>
            <div className='labtest_popular_test_header'>
              <h6>Our Popular lab tests & checkup</h6>
            </div>

            <div className='labtest_popular_test_nav py-[1rem]'>
              <div className='labtest_popular_test_nav_left'>
                <p
                  className={
                    categoryChange === "All" ? "lab_test_active" : "border"
                  }
                  onClick={() => setCategoryChange("All")}>
                  All Packages
                </p>
                {responseGetAllLabCategories?.data?.data?.map(
                  (category, index) => {
                    return (
                      <p
                        className={
                          categoryChange === category.category_name
                            ? "lab_test_active"
                            : "border"
                        }
                        onClick={() => {
                          setCategoryChange(category.category_name);
                          setSelectTest("All");
                          setSelectLocation("All");
                          setSelectLab("All");
                        }}>
                        {category.category_name}
                      </p>
                    );
                  }
                )}
              </div>
              <div className='labtest_popular_test_nav_right'>
                <Button bg='#6C98FF' color='#fff' link='/labtestviewall'>
                  View All
                </Button>
              </div>
            </div>

            <div className='labtest_popular_test_card'>
              {/* <LabTestCard/> */}

              {mappedCards.length !== 0 ? (
                mappedCards
              ) : (
                <p className='w-full p-[2rem] text-[30px]'>
                  Test are not available at this moment
                </p>
              )}
            </div>
          </div>
          {/* <div className='labtest_uncompromised'>
          <div className='labtest_uncompromised_heading'>
            <h6>Uncompromised Quality. Reliable Results. Always.</h6>
          </div>

          <Banner img={img} />
          <p>
            Lorem ipsum dolor sit amet consectetur. Purus in tempor sapien mi
            adipiscing diam. Turpis ultricies placerat adipiscing lorem erat.
            Quis in ultricies hendrerit natoque in condimentum. Lacus faucibus
            id ultrices tempor amet. Vestibulum aliquam vel facilisis et
            ultricies. Ut habitant integer est aliquam purus consequat id lacus.
            Parturient sagittis pulvinar ipsum aenean tortor eros. Lectus a id
            massa tortor nibh pellentesque massa id libero. Egestas a nunc in
            augue venenatis. Ut leo et amet malesuada neque aliquet natoque id.
          </p>
        </div> */}
          {/* <div className='labtest_partner'>
          <div className='labtest_partner_heading'>
            <h6>Our Satisfied Lab Partners</h6>
          </div>
          <div className='labtest_partner_lab'>
            
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
              containerClass='carousel-container'
              // removeArrowOnDeviceType={["tablet", "mobile"]}
              deviceType={true} //{this.props.deviceType}
              dotListClass='custom-dot-list-style'
              itemClass='carousel-item-padding-40-px'
              className='location-jobs '
              slidesToSlide={1}
              autoPlay>
              <LabPartner />
              <LabPartner />
              <LabPartner />
              <LabPartner />
              <LabPartner />
              <LabPartner />
            </Carousel>
          </div>
        </div> */}
          {/* <div className='labtest_partner'>
          <div className='labtest_partner_heading'>
            <h6>What Our Clients Say </h6>
          </div>
          
        </div> */}
          {/* <div className='labtest_Some_info'>
          <img src={img2} alt='img2' />

          <p className='labtest_Some_info_text'>some info how we do test</p>
        </div> */}
          <div className='labtest_endcards mb-[2rem] flex w-full flex-row items-center justify-center gap-[1rem] bg-white p-[2rem] max-sm:flex-col'>
            <div className='flex h-[200px] w-[200px] flex-col items-center justify-center rounded-md bg-[#52D470] text-white'>
              <img
                className='h-[50px] w-[50px]'
                src={labtestEndCardImg1}
                alt='img1'
              />
              <h1 className='text-[40px]'>260+</h1>
              <p>Visitors</p>
            </div>
            <div className='flex h-[200px] w-[200px] flex-col items-center justify-center rounded-md bg-[#52D470] text-white'>
              <img
                className='h-[50px] w-[50px]'
                src={labtestEndCardImg2}
                alt='img1'
              />
              <h1 className='text-[40px]'>60k+</h1>
              <p>Orders Delivered</p>
            </div>
            <div className='flex h-[200px] w-[200px] flex-col items-center justify-center rounded-md bg-[#52D470] text-white'>
              <img
                className='h-[50px] w-[50px]'
                src={labtestEndCardImg3}
                alt='img1'
              />
              <h1 className='text-[40px]'>50+</h1>
              <p>Cities</p>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
}

export default LabTest;
