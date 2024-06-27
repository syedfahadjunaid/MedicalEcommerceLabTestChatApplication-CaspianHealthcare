import { useState } from "react";
import "./LabTestCart.css";

import SubNav from "../SubNav/SubNav";
import Navbar from "../Navbar/Navbar";
import Footer from "../../Footer/Footer";
import LabTestNav from "../Lab Test Nav/LabTestNav";
import { MdLocationOn } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { RiCoupon3Line } from "react-icons/ri";
import { BsArrowRightSquareFill } from "react-icons/bs";
import { FaCalendarAlt } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { MdAddLocation } from "react-icons/md";

import testImage from "../../img/media.jpg";

import * as React from "react";
// import Box from "@mui/material/Box";

import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

import Radio from "@mui/material/Radio";
import { Link } from "react-router-dom";

import { useNavigate, useParams } from "react-router-dom";

import { useGetLabTestByIdQuery } from "../../services/labTests";

import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

export default function LabTestCart() {
  // const [quantity, setQuantity] = useState(1);
  // const removeFromCart = () => {};
  // const [amount, setAmount] = useState(1);
  // const handleDecrese = () => {
  //   quantity > 1 ? setQuantity(quantity - 1) : setQuantity(quantity);
  // };
  // const handleIncrease = () => {
  //   setQuantity(quantity + 1);
  // };

  const { testId } = useParams();

  const responseGetLabTestById = useGetLabTestByIdQuery(testId);

  console.log(responseGetLabTestById);

  const navigate = useNavigate();

  // console.log(testId)

  const style = {
    position: "absolute",
    top: "52%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "90%",
    height: "85%",
    bgcolor: "background.paper",
    // border: "2px solid #000",
    boxShadow: 24,
    p: 3,
    zIndex: 100,
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // const [mainCartPage, setMainCartPage] = useState("");
  const [mainCartPage, setMainCartPage] = useState("firstCartPage");

  const [name, setName] = useState();
  const [age, setAge] = useState();
  const [sex, setSex] = React.useState("Male");
  const [address, setAddress] = useState();
  const [city, setCity] = useState();
  const [pincode, setPincode] = useState();
  const [landmark, setLandmark] = useState();
  const [mobile, setMobile] = useState();
  const [formByWhomSelection, setFormByWhomSelection] = useState("doctor");
  const [date, setDate] = useState();
  const [time, setTime] = useState();

  const [coupon, setCoupon] = useState();

  const handleChange = (event) => {
    setSex(event.target.value);
  };

  const handleSubmitDetailsForm = (e) => {
    e.preventDefault();
    const formData = new FormData();

    formData.append("name", name);
    formData.append("age", age);
    formData.append("sex", sex);
    formData.append("address", address);
    formData.append("city", city);
    formData.append("pincode", pincode);
    formData.append("landmark", landmark);
    formData.append("mobile", mobile);
    formData.append("byWhom", formByWhomSelection);
    formData.append("date", date);
    formData.append("time", time);

    console.log(formData);
    setMainCartPage("");
    handleClose();
  };

  const handleCheckout = () => {
    navigate("/lab-test-confirmation-page");
  };

  const userDetailsForm = (
    <form
      onSubmit={handleSubmitDetailsForm}
      className='flex h-[95%] h-[95%] w-full flex-col overflow-y-scroll px-[10px] pb-[2rem] max-sm:px-0'>
      <p className='w-full p-[10px] outline-none max-sm:px-0'>Name</p>
      <input
        placeholder='Enter your name'
        required
        type='text'
        value={name}
        onChange={(e) => setName(e.target.value)}
        className='w-full border-b p-[10px] outline-none'
      />
      <p className='w-full p-[10px] outline-none max-sm:px-0'>Age</p>
      <input
        placeholder='Enter your age'
        required
        type='number'
        value={age}
        onChange={(e) => setAge(e.target.value)}
        className='w-full border-b p-[10px] outline-none'
      />
      <p className='w-full p-[10px] max-sm:px-0'>Sex</p>
      <div className='flex flex-row gap-[2rem] max-sm:flex-col max-sm:gap-0'>
        <div className='flex flex-row items-center'>
          <Radio
            checked={sex === "Male"}
            onChange={handleChange}
            value='Male'
            name='radio-buttons'
            inputProps={{ "aria-label": "A" }}
          />
          <p>Male</p>
        </div>
        <div className='flex flex-row items-center'>
          <Radio
            checked={sex === "Female"}
            onChange={handleChange}
            value='Female'
            name='radio-buttons'
            inputProps={{ "aria-label": "B" }}
          />
          <p>Female</p>
        </div>
        <div className='flex flex-row items-center'>
          <Radio
            checked={sex === "Others"}
            onChange={handleChange}
            value='Others'
            name='radio-buttons'
            inputProps={{ "aria-label": "C" }}
          />
          <p>Other</p>
        </div>
      </div>
      <p className='w-full p-[10px] outline-none max-sm:px-0'>Address</p>
      <textarea
        placeholder='Enter your address'
        required
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        className='w-full border-b p-[10px] outline-none'
      />
      <div className='flex flex-row gap-[2rem] max-sm:flex-col max-sm:gap-0'>
        <div className='flex w-[50%] flex-col max-sm:w-full'>
          <p className='w-full p-[10px] outline-none max-sm:px-0'>City</p>
          <input
            placeholder='Enter your city'
            type='text'
            required
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className='w-full border-b p-[10px] outline-none'
          />
        </div>
        <div className='flex w-[50%] flex-col max-sm:w-full'>
          <p className='w-full p-[10px] outline-none max-sm:px-0'>Pincode</p>
          <input
            placeholder='Enter your pincode'
            type='number'
            required
            value={pincode}
            onChange={(e) => setPincode(e.target.value)}
            className='w-full border-b p-[10px] outline-none'
          />
        </div>
      </div>
      <p className='w-full p-[10px] outline-none max-sm:px-0'>Landmark</p>
      <input
        placeholder='Enter your landmark'
        type='text'
        required
        value={landmark}
        onChange={(e) => setLandmark(e.target.value)}
        className='w-full border-b p-[10px] outline-none'
      />
      <p className='w-full p-[10px] outline-none max-sm:px-0'>Mobile</p>
      <input
        placeholder='Enter your mobile'
        type='number'
        required
        value={mobile}
        onChange={(e) => setMobile(e.target.value)}
        className='w-full border-b p-[10px] outline-none'
      />
      <div className='flex flex-row items-center gap-[1rem] p-[1rem] max-sm:justify-center max-sm:py-[2rem]'>
        <p
          onClick={() => setFormByWhomSelection("doctor")}
          className={
            formByWhomSelection === "doctor"
              ? "cursor-pointer rounded border-[2px] border-solid border-[#0049A6] bg-[#0049A6] px-[1rem] py-[10px] text-white"
              : "cursor-pointer rounded border-[2px] border-solid border-[black] px-[1rem] py-[10px]"
          }>
          By Doctor
        </p>
        Or
        <p
          onClick={() => setFormByWhomSelection("me")}
          className={
            formByWhomSelection === "me"
              ? "cursor-pointer rounded border-[2px] border-solid border-[#0049A6] bg-[#0049A6] px-[1rem] py-[10px] text-white"
              : "cursor-pointer rounded border-[2px] border-solid border-[black] px-[1rem] py-[10px]"
          }>
          By Yourself
        </p>
      </div>

      <div className='flex flex-row gap-[2rem] max-sm:flex-col max-sm:gap-0'>
        <div className='flex w-fit flex-col gap-[10px] p-[10px] max-sm:px-0'>
          <p className=' outline-none'>Date</p>
          <input
            type='date'
            required
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className='border bg-[#D9D9D9] p-[10px] outline-none'
          />
        </div>
        <div className='flex w-fit flex-col gap-[10px] p-[10px] max-sm:px-0'>
          <p className=' outline-none'>Time</p>
          <input
            type='time'
            required
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className='border bg-[#D9D9D9] p-[10px] outline-none'
          />
        </div>
      </div>

      <div className='flex flex-row justify-end'>
        <button
          // onClick={handleSubmitDetailsForm}
          type='submit'
          className='mt-[1rem] w-fit bg-[#6C98FF] px-[3rem] py-[10px] text-white'>
          Next
        </button>
      </div>
    </form>
  );

  return (
    <>
      <SubNav />
      <Navbar />
      {/* <LabTestNav /> */}
      {mainCartPage === "firstCartPage" ? (
        <div className='LabTestCart flex w-full flex-col gap-[1rem] p-[2rem] max-sm:p-[10px]'>
          <h4 className='text-[25px]'>Cart</h4>

          <div className='flex flex-row justify-between max-sm:flex-col max-sm:gap-[1rem]'>
            <p>Items NOT Requiring Prescription (2)</p>
            <div className='flex cursor-default flex-row items-center gap-[6px]'>
              <p>Address</p>
              <MdLocationOn className='text-[red]' />
              <p className='text-[#2A7FBA]'>Lucknow</p>
              <FiEdit className='cursor-pointer' />
            </div>
          </div>

          {responseGetLabTestById.isLoading ? (
            <Box sx={{ display: "flex" }}>
              <CircularProgress />
            </Box>
          ) : (
            <div className='flex w-full flex-row gap-[2rem] max-sm:flex-col'>
              <div className='flex w-[60%] flex-col gap-[1rem] max-sm:w-full'>
                <div className='flex flex-col gap-[1rem] bg-white p-[1rem]'>
                  <div className='flex flex-row justify-between'>
                    <div className='flex w-fit flex-row items-center gap-[10px]'>
                      <img
                        src={
                          process.env.React_App_Base_Image_Url +
                          responseGetLabTestById?.data?.data?.thumbnail
                        }
                        alt='testImage'
                        className='h-[50px] w-[50px] rounded-full'
                      />
                      <p>{responseGetLabTestById?.data?.data?.name}</p>
                    </div>
                    <div className='flex w-fit flex-col'>
                      <h4 className='text-[25px] text-[#28A745]'>
                        ₹ {responseGetLabTestById?.data?.data?.price}
                      </h4>
                      <p>
                        MRP ₹{" "}
                        <span className='line-through'>
                          {responseGetLabTestById?.data?.data?.mrp}
                        </span>
                      </p>
                    </div>
                  </div>

                  <div className='flex flex-row justify-between'>
                    <Link to={"/labtest"}>
                      <div className='flex w-fit cursor-pointer flex-row items-center'>
                        <MdOutlineDeleteOutline className='text-[22px]' />
                        <p>Remove</p>
                      </div>
                    </Link>
                    {/* <div className="w-fit w-fit">
                    <Quantity
                      amount={quantity}
                      handleDecrese={handleDecrese}
                      handleIncrease={handleIncrease}
                    />
                  </div> */}
                  </div>
                </div>

                <div className='bg-white p-[1rem]'>
                  <h2 className='text-[25px]'>Test Information</h2>
                  <p>{responseGetLabTestById?.data?.data?.short_discription}</p>
                </div>
              </div>
              <div className='flex w-[40%] flex-col max-sm:w-full'>
                <div className='flex flex-col items-center gap-[1rem] bg-white p-[2rem]'>
                  <div className='flex w-full flex-row justify-between'>
                    <p>Subtotal</p>
                    <p>₹ {responseGetLabTestById?.data?.data?.mrp}</p>
                  </div>
                  <div className='flex w-full flex-row justify-between'>
                    <p>Discount</p>
                    <p>
                      - ₹{" "}
                      {responseGetLabTestById?.data?.data?.mrp -
                        responseGetLabTestById?.data?.data?.price}
                    </p>
                  </div>
                  <div
                    onClick={handleOpen}
                    className='flex w-[80%] cursor-pointer flex-row justify-between rounded-md bg-[#6C98FF] px-[2rem] py-[1rem] text-white'>
                    <p>₹ {responseGetLabTestById?.data?.data?.price}</p>
                    <p>SCHEDULE</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className='MainLabTestCartPage flex flex-col gap-[1rem] p-[3rem] max-md:p-[1rem]'>
          <h4 className='text-[25px] font-[600]'>Test Booking Overview</h4>
          {responseGetLabTestById.isLoading ? (
            <Box sx={{ display: "flex" }}>
              <CircularProgress />
            </Box>
          ) : (
            <div className='MainLabTestCartPage-main flex w-full flex-row'>
              <div className='MainLabTestCartPage-left flex w-[70%] flex-col gap-[2rem]'>
                <div>
                  <div className='flex flex-row items-center justify-between bg-[#0F91EB] p-[1rem]'>
                    <p className='text-[22px] text-white'>Patient Details</p>
                    <div
                      onClick={handleOpen}
                      className='flex cursor-pointer flex-row items-center gap-[8px] rounded-full bg-white p-[10px]'>
                      <FiEdit />
                      <p>Edit Details</p>
                    </div>
                  </div>

                  <div className='flex w-full flex-row gap-[1rem] border-[1px] border-solid border-[#0F91EB] p-[2rem] max-sm:flex-col'>
                    <div className='flex w-[33.3%] flex-col rounded-md border-[1px] border-solid border-[#0F91EB] p-[1rem] text-[20px] max-sm:w-full'>
                      <FaUser className='text-[25px]' />
                      <p className='text-[25px] text-[#2A7FBA]'>Patient</p>
                      <p>{name}</p>
                      <p>{`${age}, ${sex}`}</p>
                      <p>{`Mobile : ${mobile}`}</p>
                    </div>
                    <div className='flex w-[33.3%] flex-col rounded-md border-[1px] border-solid border-[#0F91EB] p-[1rem] text-[20px] max-sm:w-full'>
                      <MdAddLocation className='text-[25px]' />
                      <p className='text-[25px] text-[#2A7FBA]'>Address</p>
                      <p className='break-all'>
                        {`${address}, ${city}, ${landmark}, ${pincode}`}
                      </p>
                    </div>
                    <div className='flex w-[33.3%] flex-col rounded-md border-[1px] border-solid border-[#0F91EB] p-[1rem] text-[20px] max-sm:w-full'>
                      <FaCalendarAlt className='text-[25px]' />
                      <p className='text-[25px] text-[#2A7FBA]'>
                        Time & Date Slot
                      </p>
                      <p className='text-[16px]'>{`${responseGetLabTestById?.data?.data?.name} by ${formByWhomSelection}`}</p>
                      <p>{`Date: ${date}`}</p>
                      <p>{`Time: ${time}`}</p>
                    </div>
                  </div>
                </div>

                <div>
                  <div className='flex flex-col bg-[#0F91EB] p-[1rem]'>
                    <p className='text-[22px] text-white'>
                      PATHOLOGY TESTS (1)
                    </p>
                    <p className='text-[18px] text-white'>
                      Tata 1mg Labs (Tata 1mg Technologies Private Limited)
                    </p>
                  </div>
                  <div className='flex w-full flex-row justify-between gap-[1rem] border-[1px] border-solid border-[#0F91EB] p-[2rem]'>
                    <div className='flex flex-col gap-[1rem] max-sm:w-[70%]'>
                      <p className='text-[22px]'>
                        Comprehensive Gold Full Body Checkup
                      </p>
                      <p>E-Reports with in 24 hours post sample collection</p>
                      <div className='flex w-fit cursor-pointer flex-row items-center text-[#6E798C]'>
                        <MdOutlineDeleteOutline className='text-[22px]' />
                        <p>Remove</p>
                      </div>
                    </div>
                    <div className='flex w-fit flex-col max-sm:w-[30%]'>
                      <h4 className='text-[25px] text-[#28A745]'>₹ 2000</h4>
                      <p>
                        MRP ₹ <span className='line-through'>3000</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='MainLabTestCartPage-right flex w-[30%] flex-col gap-[1rem] px-[2rem]'>
                <div className='flex flex-col items-start gap-[10px]'>
                  <input type='checkbox' />
                  <p>
                    Lorem ipsum dolor sit amet consectetur. Scelerisque
                    facilisis vitae pellentesque sed. Enim eu egestas in
                    bibendum amet. Iaculis porttitor nulla penatibus nulla id
                    proin velit elementum. Sed a sagittis odio interdum tortor
                    nascetur dolor lobortis.
                  </p>
                </div>

                <div className='flex flex-row items-center justify-between bg-white p-[1rem]'>
                  <div className='flex w-full flex-row items-center gap-[10px]'>
                    <input
                      placeholder='Apply Coupon'
                      className='w-[80%] outline-none'
                      value={coupon}
                      onChange={(e) => setCoupon(e.target.value)}
                    />
                    {/* <RiCoupon3Line className="text-[25px]" /> */}
                  </div>
                  <BsArrowRightSquareFill className='text-[25px]' />
                </div>

                <div className='flex w-full flex-col max-sm:w-full'>
                  <div className='flex flex-col items-center gap-[1rem] bg-white p-[2rem]'>
                    <div className='flex w-full flex-row justify-between'>
                      <p>Subtotal</p>
                      <p>₹ {responseGetLabTestById?.data?.data?.mrp}</p>
                    </div>
                    <div className='flex w-full flex-row justify-between'>
                      <p>Discount</p>
                      <p>
                        - ₹{" "}
                        {responseGetLabTestById?.data?.data?.mrp -
                          responseGetLabTestById?.data?.data?.price}
                      </p>
                    </div>
                    <div className='flex w-full flex-row justify-between text-[#28A745]'>
                      <p>Total (Tax incl.)</p>
                      <p>₹ {responseGetLabTestById?.data?.data?.price}</p>
                    </div>
                    <div className='flex w-full flex-row gap-[10px]'>
                      <div
                        onClick={handleCheckout}
                        className='flex w-full cursor-pointer flex-row justify-between rounded-md bg-[#6C98FF] p-[1rem] text-white'>
                        {/* <p>₹ 2050</p> */}
                        <p>Payment Checkout</p>
                      </div>
                      <Link
                        to={"/labtest"}
                        className='flex w-fit cursor-pointer rounded-md bg-[#6E798C] p-[1rem] text-center text-white'>
                        {/* <p>₹ 2050</p> */}
                        Cancel
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'>
        <Box sx={style}>
          <Typography id='modal-modal-title' variant='h6' component='h2'>
            Fill Your Details
          </Typography>
          {userDetailsForm}
        </Box>
      </Modal>

      <Footer />
    </>
  );
}
