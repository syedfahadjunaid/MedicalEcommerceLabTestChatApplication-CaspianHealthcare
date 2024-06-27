import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import SimpleBottomNavigation from "./BottomNavigation/SimpleBottomNavigation";
import CartPay from "./Cart Pay Page/CartPay";
import Cart from "./Components/Cart/Cart";
import AllDoctor from "./Components/Doctor/All Doctor/AllDoctor";
import DoctorCheckout from "./Components/Doctor/Doctor CheckOut/DoctorCheckout";
import DoctorHomePage from "./Components/Doctor/Doctor HomePage/DoctorHomePage";
import Home from "./Components/Home/Home";
import LabTestViewAll from "./Components/Lab Test View All/LabTestViewAll";
import LabTest from "./Components/Lab Test/LabTest";
import Navbar from "./Components/Navbar/Navbar";
import PopularProduct from "./Components/Popular Product/PopularProduct";
import ProductPage from "./Components/Product Page/ProductPage";
import QuickOrderOrderPage from "./Components/Quick Order Page/QuickOrderOrderPage";
import QuickOrderPage from "./Components/Quick Order Page/QuickOrderPage";
import SinglePage from "./Components/Single Page/SinglePage";
import SubNav from "./Components/SubNav/SubNav";
import TrendingPage from "./Components/Trending Page/TrendingPage";
import DashBoard from "./Dash Board/DashBoard";
import DashBoardNav from "./Dash Board/DashBoardNav";
import Footer from "./Footer/Footer";
import LabTestPay from "./LabTestPay/LabTestPay";
import MyProfile from "./MyProfile/MyProfile";
import OrderConfirm from "./Order Confirm/OrderConfirm";
import LabTestCheckOutCard from "./LabTestCheckOutCard/LabTestCheckOutCard";
import GoToTop from "./GoToTop";
import LabtestSelect from "./LabTestPay/LabtestSelect";
import OrderWithPriscription from "./OrderWithPrisciption/OrderWithPriscription";
import AboutUs from "./About Us/AboutUs";

import Admin from "./Admin/Admin";
// import AdminLogin from './Admin/AdminLogin';

import { useEffect, useContext } from "react";
import DataContext from "./context api/StateProvider";
import ForgotPassword from "./Components/SubNav/ForgotPassword/ForgotPassword";
import UpdatePassword from "./Components/SubNav/ForgotPassword/UpdatePassword/UpdatePassword";
import ContactUsPage from "./Admin/Pages/ContactUsPage/ContactUsPage";
import PrivacyPolicyPage from "./PrivacyPolicyPage/PrivacyPolicyPage";
import TermsAndCondition from "./TermsAndConditions/TermsAndCondition";
import ReturnAndRefundPolicy from "./ReturnAndRefundPolicy/ReturnAndRefundPolicy";
import IntellectualPropertyInfringementPolicy from "./IntellectualPropertyInfringementPolicy/IntellectualPropertyInfringementPolicy";
import AdminDashboard from "./Admin/AdminDashboard";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import { addTostifySuccess } from "./Slice/tostify";
import { allBanner } from "./Slice/bannerSlice";
import { allBrand } from "./Slice/allBrands";
import { allCategory } from "./Slice/allCategory";
import LabTestCart from "./Components/LabTestCart/LabTestCart";
import LabTestBookedConfirmation from "./Components/LabTestCart/LabTestBookedConfirmation";

// import { useGetLabsQuery } from "./services/labs";
// import { useGetLabCategoriesQuery } from "./services/labCategory";
// import { useGetLabTestsQuery } from "./services/labTests";

function App() {
  // const responseGetLabs = useGetLabsQuery();
  // const responseGetLabCategories = useGetLabCategoriesQuery();
  // const responseGetLabTests = useGetLabTestsQuery()

  // console.log(responseGetLabTests);
  // Fahad Data Context
  // const {
  //   fetchBrands,
  //   fetchCategories,
  //   fetchProducts,
  //   fetchHomepage,
  //   fetchProductDetailsWidget,
  //   fetchAboutUs,
  //   fetchHeader,
  //   fetchFooter,
  //   fetchOrder,
  //   fetchDoctors,
  //   fetchPages,
  //   fetchLabs,
  // } = useContext(DataContext);

  // useEffect(() => {
  //   fetchBrands();
  //   fetchCategories();
  //   fetchProducts();
  //   fetchHomepage();
  //   fetchProductDetailsWidget();
  //   fetchAboutUs();
  //   fetchHeader();
  //   fetchFooter();
  //   fetchOrder();
  //   fetchDoctors();
  //   fetchPages();
  //   fetchLabs();
  // }, []);
  // --------------------
  // console.log(window.innerWidth);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(allBanner());
    dispatch(allBrand());
    dispatch(allCategory());
  }, []);

  return (
    <BrowserRouter>
      <div className='app'>
        {/* <SubNav />
        <Navbar /> */}

        <GoToTop />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/product/:Id' element={<TrendingPage />} />
          <Route path='/productpage' element={<ProductPage />} />
          <Route path='/singlePage/:Id' element={<SinglePage />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/quickpage' element={<QuickOrderPage />} />
          <Route path='/labtest' element={<LabTest />} />
          <Route path='/labtestviewall' element={<LabTestViewAll />} />
          <Route path='/labtestselect' element={<LabtestSelect />} />
          <Route path='/labtestpay' element={<LabTestPay />} />
          <Route path='/doctorhomepage' element={<DoctorHomePage />} />
          <Route path='/alldoctoravalible' element={<AllDoctor />} />
          <Route path='/profilepage' element={<MyProfile />} />
          <Route path='/doctorcheckout' element={<DoctorCheckout />} />
          <Route path='/labcheckoutcard' element={<LabTestPay />} />
          <Route path='/cartpay' element={<CartPay />} />
          <Route path='/orderpage' element={<OrderConfirm />} />
          <Route
            path='/orderwithpriciption'
            element={<OrderWithPriscription />}
          />
          <Route path='/quickorderpage' element={<QuickOrderOrderPage />} />
          <Route path='/popularProduct' element={<PopularProduct />} />
          {/* <Route path='/dashboard' element={<DashBoard />} /> */}
          <Route path='/about' element={<AboutUs />} />

          <Route path='/admin' element={<AdminDashboard />} />

          <Route path='/forgotPassword' element={<ForgotPassword />} />
          <Route path='/resetPassword' element={<UpdatePassword />} />
          <Route path='/contactus' element={<ContactUsPage />} />
          <Route path='/privacypolicy' element={<PrivacyPolicyPage />} />
          <Route path='/terms&conditions' element={<TermsAndCondition />} />
          <Route
            path='/return&refundpolicy'
            element={<ReturnAndRefundPolicy />}
          />
          <Route
            path='/intellectualPropertyInfringementPolicy'
            element={<IntellectualPropertyInfringementPolicy />}
          />
          <Route path='/book-test-cart/:testId' element={<LabTestCart />} />
          <Route
            path='/lab-test-confirmation-page'
            element={<LabTestBookedConfirmation />}
          />
        </Routes>

        {/* <Footer /> */}
        {/* <SimpleBottomNavigation/> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
