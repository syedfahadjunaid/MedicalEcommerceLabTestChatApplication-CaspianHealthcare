import React, { useState, useRef, useEffect } from "react";
import "./Admin.css";
import adminIcon from "./assets/adminImg.png";
import logo from "./assets/logo.png";
import dashIcon from "./assets/dashboardIcon.png";
import dashIcon1 from "./assets/dashboardIcons/icon1.png";
import dashIcon2 from "./assets/dashboardIcons/icon2.png";
import dashIcon3 from "./assets/dashboardIcons/icon3.png";
import dashIcon4 from "./assets/dashboardIcons/icon4.png";
import dashIcon5 from "./assets/dashboardIcons/icon5.png";
import dashIcon6 from "./assets/dashboardIcons/icon6.png";
import dashIcon7 from "./assets/dashboardIcons/icon7.png";

import dashIconOrder from "./assets/dashboardIcons/iconOrder.png";
import dashIconSupport from "./assets/dashboardIcons/iconSupport.png";
import dashIconCoupons from "./assets/dashboardIcons/iconCoupons.png";

import sidenavimg from "./assets/sidenav_img.png";
import AdminHome from "./Pages/AdminHome/AdminHome";
import OrdersPage from "./Pages/OrdersPage/OrdersPage";
import Support from "./Pages/Support/Support";
import Coupons from "./Pages/Coupons/Coupons";

import AccountSettings from "./Pages/AccountSettings/AccountSettings";

//SubPages
// 1 : Products
import AllProducts from "./Pages/Products/AllProducts";
import AllCategories from "./Pages/Products/AllCategories";
import AllBrands from "./Pages/Products/AllBrands";

// 2 : Appearance
import Homepage from "./Pages/Appearance/Homepage";
import ProductDetailsWidget from "./Pages/Appearance/ProductDetailsWidget";
import AboutPage from "./Pages/Appearance/AboutPage";
import Header from "./Pages/Appearance/Header";
import Footer from "./Pages/Appearance/Footer";

// 3: Pages
import PagesPage from "./Pages/Pages/PagesPage";

// 4: Doctors
import AddDoctors from "./Pages/Doctors/AddDoctors";
// import SeeDoctors from './Pages/Doctors/SeeDoctors';

// 5: Lab
import LabAddRemove from "./Pages/Lab/LabAddRemove";
import LabTestInfoPatients from "./Pages/Lab/LabTestInfoPatients";
import LabTestResults from "./Pages/Lab/LabTestResults";
import LabCategory from "./Pages/Lab/Labcategory";
import LabName from "./Pages/Lab/LabName";

// 6: Patients
import Patients from "./Pages/Patients/Patients";
import Appointments from "./Pages/Patients/Appointments";

// 7: System Settings
import AuthSettings from "./Pages/SystemSettings/AuthSettings/AuthSettings";
import OrderSettings from "./Pages/SystemSettings/OrderSettings/OrderSettings";
import GeneralSettings from "./Pages/SystemSettings/GeneralSettings/GeneralSettings";
import SmtpSettings from "./Pages/SystemSettings/SmtpSettings/SmtpSettings";
import SocialMediaSettings from "./Pages/SystemSettings/SocialMediaSettings/SocialMediaSettings";
import PaymentSettings from "./Pages/SystemSettings/PaymentsSettings/PaymentSettings";

// Icons
import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";
// import { BiBell } from 'react-icons/bi';
import { BsSearch } from "react-icons/bs";
import AllSubCategory from "./Pages/Products/AllSubCategory";

export default function Admin() {
  // const [linkExpand, setLinkExpand] = useState(false);
  const [expandValue, setExpandValue] = useState(null);
  const [subPage, setsubPage] = useState("Dashboard");

  const sideMenu = [
    {
      menu: "Products",
      submenu: [
        { title: "All Products" },
        { title: "All Categories" },
        { title: "All Sub Categories" },
        { title: "All Brands" },
      ],
      img: dashIcon1,
    },
    {
      menu: "Appearance",
      submenu: [
        { title: "Homepage" },
        { title: "Product Details Widget" },
        { title: "About Page" },
        { title: "Header" },
        { title: "Footer" },
      ],
      img: dashIcon2,
    },

    {
      menu: "Pages",
      submenu: [{ title: "Pages" }],
      img: dashIcon3,
    },
    {
      menu: "Doctors",
      // submenu: [{ title: 'Add Doctors' }, { title: 'See Doctors' }],
      submenu: [{ title: "All Doctors" }],
      img: dashIcon4,
    },
    {
      menu: "Lab",
      submenu: [
        { title: "Lab Category" },
        { title: "Lab Name" },
        { title: "Add New Lab Test" },
        { title: "Lab Test Info Patients" },
        { title: "Lab Test Results" },
      ],
      img: dashIcon5,
    },
    {
      menu: "Patients",
      submenu: [{ title: "Patients" }, { title: "Appointments" }],
      img: dashIcon6,
    },
    {
      menu: "System Settings",
      submenu: [
        { title: "Auth Settings" },
        { title: "Order Settings" },
        { title: "Smtp Settings" },
        { title: "General Settings" },
        { title: "Payment Methods Settings" },
        { title: "Social Media Login" },
      ],
      img: dashIcon7,
    },
  ];

  const handleClick = (value) => {
    setExpandValue(value);
  };

  const renderedMenu = sideMenu.map((data, index) => {
    return (
      <div className="flex flex-col" key={index}>
        <div
          onClick={() => handleClick(data.menu)}
          className="flex cursor-pointer flex-row items-center gap-[1rem]"
        >
          <img className="h-[20px] w-[20px]" src={data.img} alt="dashIcon1" />
          <h4 className="font-semibold">{data.menu}</h4>

          {expandValue === data.menu ? (
            <IoIosArrowDown />
          ) : (
            <IoIosArrowForward />
          )}
        </div>
        {/* Expand Menu Start */}
        {expandValue === data.menu ? (
          <div className=" fade-in-top flex flex-col rounded-[4px] px-[2rem] pt-[1rem]">
            {data.submenu.map((data, index) => {
              return (
                <div
                  onClick={() => setsubPage(data.title)}
                  className={
                    subPage === data.title
                      ? "admin-home-sidenav-menuitem text-[green]"
                      : "admin-home-sidenav-menuitem"
                  }
                  key={index}
                >
                  <p>{data.title}</p>
                </div>
              );
            })}
          </div>
        ) : (
          ""
        )}
        {/* Expand Menu End */}
      </div>
    );
  });

  //Page Switch
  let Page;
  if (subPage === "All Products") {
    Page = <AllProducts />;
  }
   else if (subPage === "All Categories") {
    Page = <AllCategories />;
  }
  else if (subPage === "All Sub Categories") {
    Page = <AllSubCategory
     />;
  }
   else if (subPage === "All Brands") {
    Page = <AllBrands />;
  } else if (subPage === "Homepage") {
    Page = <Homepage />;
  } else if (subPage === "Product Details Widget") {
    Page = <ProductDetailsWidget />;
  } else if (subPage === "About Page") {
    Page = <AboutPage />;
  } else if (subPage === "Header") {
    Page = <Header />;
  } else if (subPage === "Footer") {
    Page = <Footer />;
  } else if (subPage === "Orders") {
    Page = <OrdersPage />;
  } else if (subPage === "Pages") {
    Page = <PagesPage />;
  } else if (subPage === "All Doctors") {
    Page = <AddDoctors />;
  }
  // else if (subPage === 'See Doctors') {
  //   Page = <SeeDoctors />;
  // }
  else if (subPage === "Patients") {
    Page = <Patients />;
  } else if (subPage === "Appointments") {
    Page = <Appointments />;
  }
  else if (subPage === "Lab Category") {
    Page = <LabCategory />;
  }
   else if (subPage === "Lab Name") {
    Page = <LabName />;
  }
  else if (subPage === "Add New Lab Test") {
    Page = <LabAddRemove />;
  } 
 
  else if (subPage === "Lab Test Info Patients") {
    Page = <LabTestInfoPatients />;
  } else if (subPage === "Lab Test Results") {
    Page = <LabTestResults />;
  } else if (subPage === "Auth Settings") {
    Page = <AuthSettings />;
  } else if (subPage === "General Settings") {
    Page = <GeneralSettings />;
  } else if (subPage === "Smtp Settings") {
    Page = <SmtpSettings />;
  } else if (subPage === "Payment Methods Settings") {
    Page = <PaymentSettings />;
  } else if (subPage === "Social Media Login") {
    Page = <SocialMediaSettings />;
  } else if (subPage === "Order Settings") {
    Page = <OrderSettings />;
  } else if (subPage === "Account Settings") {
    Page = <AccountSettings />;
  } else if (subPage === "Support") {
    Page = <Support />;
  } else if (subPage === "Coupons") {
    Page = <Coupons />;
  } else if (subPage === "Dashboard") {
    Page = <AdminHome />;
  }

  const [adminMenu, setAdminMenu] = useState(false);
  const [showSearchOptions, setShowSearchOptions] = useState(false);

  const divEl = useRef();
  // const searchEl = useRef();

  useEffect(() => {
    const handler = (event) => {
      if (!divEl.current) {
        return;
      }
      if (!divEl.current.contains(event.target)) {
        setAdminMenu(false);
        setShowSearchOptions(false);
      }
    };

    document.addEventListener("click", handler, true);

    return () => document.removeEventListener("click", handler);
  }, []);

  return (
    <div className="admin-home flex w-full flex-col">
      <div className="admin-home-nav flex w-full flex-row items-center border-b p-[1rem]">
        <div className="admin-home-nav-logo w-[20%]">
          <img className="w-[80%] cursor-pointer" src={logo} alt="admin-logo" />
        </div>
        <div className="relative w-[70%]">
          <div className="admin-home-nav-input flex w-full flex-row items-center justify-between rounded-[5px] border bg-white px-[1rem] py-[8px] hover:border-blue-300">
            <input
              onClick={() => setShowSearchOptions(!showSearchOptions)}
              className="w-full outline-none"
              type="text"
              placeholder="Search"
            />
            <BsSearch />
          </div>
          {showSearchOptions && (
            <div ref={divEl} className="absolute w-full border bg-white">
              3
            </div>
          )}
        </div>
        <div className="flex w-[10%] flex-row justify-end gap-[2rem]">
          {/* <BiBell className="cursor-pointer text-[2rem]" /> */}
          <div
            className="admin-home-nav-icon relative h-[30px] w-[30px] cursor-pointer rounded-full bg-gray-300"
            onClick={() => setAdminMenu(!adminMenu)}
          >
            <img
              className="w-fit rounded-full"
              src={adminIcon}
              alt="adminIcon"
            />
          </div>
          {adminMenu && (
            <div
              className="absolute right-[2rem] top-[5rem] z-[200] flex flex-col rounded-[4px] border bg-white p-[1rem] text-[20px] shadow-md transition delay-150 ease-in-out"
              ref={divEl}
            >
              <p
                onClick={() => setsubPage("Account Settings")}
                className="cursor-pointer hover:text-green-500"
              >
                Account Settings
              </p>
              <p className="cursor-pointer hover:text-green-500">Logout</p>
            </div>
          )}
        </div>
      </div>
      <div className="flex flex-row">
        <div className="admin-home-sidenav flex w-[20%] flex-col justify-between gap-[2rem]">
          <div className="flex flex-col gap-[1.5rem] p-[1rem]">
            <div className="flex cursor-pointer flex-row items-center justify-start gap-[10px] pt-[1rem]">
              <img src={dashIcon} alt="dashicon" />
              <h3
                onClick={() => setsubPage("Dashboard")}
                className="text-[22px] font-semibold"
              >
                Dashboard
              </h3>
            </div>
            <div className="flex cursor-pointer flex-row gap-[1rem]">
              <img
                className="h-[20px] w-[20px]"
                src={dashIconOrder}
                alt="dashIconOrder"
              />
              <h4
                onClick={() => setsubPage("Orders")}
                className="font-semibold"
              >
                Orders
              </h4>
            </div>
            {renderedMenu}
            <div className="flex cursor-pointer flex-row gap-[1rem]">
              <img
                className="h-[20px] w-[20px]"
                src={dashIconSupport}
                alt="dashIconSupport"
              />
              <h4
                onClick={() => setsubPage("Support")}
                className="font-semibold"
              >
                Support
              </h4>
            </div>
            <div className="flex cursor-pointer flex-row gap-[1rem]">
              <img
                className="h-[20px] w-[20px]"
                src={dashIconCoupons}
                alt="dashIconCoupons"
              />
              <h4
                onClick={() => setsubPage("Coupons")}
                className="font-semibold"
              >
                Coupons
              </h4>
            </div>
          </div>
          <div className="flex flex-col items-center gap-[1rem]">
            <img src={sidenavimg} alt="sidenavimg" />
          </div>
        </div>
        {/* components */}
        <div className="admin-home-main w-[80%]">{Page}</div>
      </div>
    </div>
  );
}
