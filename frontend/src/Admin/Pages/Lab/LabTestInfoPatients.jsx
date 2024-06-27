import React from "react";
import { BsEyeFill } from "react-icons/bs";
import Table from "../../components/Table";

import Modal from "../../components/Modal";
import { useState } from "react";
import Button from "../../components/Button";

import Img from "../../assets/dashboardDoctorIcons/icon1.jpg";
import { useGetLabTestsInfoPatientQuery } from "../../../services/labTestInfoPatient";

export default function LabTestInfoPatients() {
  //Modal
  const [showModal, setShowModal] = useState(false);

  console.log();

  const [patientInfo, setPatientInfo] = useState("");
  const handleClick = (patientData) => {
    setShowModal(true);
    setPatientInfo(patientData);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const actionBar = (
    <div>
      <Button onClick={closeModal} primary>
        Close
      </Button>
    </div>
  );

  const modalStyle = {
    maxHeight: "calc(100vh - 8rem)",
    overflowY: "auto",
  };

  const modal = (
    <Modal onClose={closeModal} actionBar={actionBar}>
      <div
        className='appearance-page flex flex-col gap-[3rem] p-[1rem]'
        style={modalStyle}>
        <div className='products-page-head flex flex-row items-center justify-between p-[1rem] shadow-lg'>
          <h3 className='text-[22px] font-semibold'>
            Lab Test Patient Information
          </h3>
        </div>
        <div className='flex flex-row gap-[1rem]'>
          <div className='flex flex-col gap-[1rem]'>
            <img
              className='h-[300px] w-[500px] rounded-[2px]'
              src={Img}
              alt='img'
            />
            <p>Phone Number</p>
            <p className='flex flex-row justify-center border-2 border-solid border-green-500 p-[6px] text-green-500'>
              {patientInfo.mobile_number}
            </p>
          </div>
          <div className='flex flex-col gap-[1rem]'>
            <div className='flex flex-row items-center gap-[1rem]'>
              <h3 className='text-[22px] font-semibold'>{patientInfo.name}</h3>
              <p>{patientInfo.date}</p>
              <p>({patientInfo.time})</p>
            </div>
            <p>
              (Lab Test Result) Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Quis suscipit quos doloribus, quae aspernatur
              facere cum minus dignissimos adipisci tempore eveniet earum
              officia optio illum ullam delectus enim et alias.
            </p>
            <p>
              (Lab Testing Address) Lorem ipsum, dolor sit amet consectetur
              adipisicing elit. Fuga corrupti quis quisquam praesentium
              repellendus et iusto voluptatem illo quam aperiam ut perspiciatis,
              alias dicta, maxime quia. Ad aperiam nisi ullam.
            </p>
            <p>(Money) 2386523/-</p>
          </div>
        </div>
      </div>
    </Modal>
  );
  //Table
  const data = [
    {
      id: "1",
      name: "Mr Arman",
      age: 33,
      city: "sdvsdv",
      full_address: "dfgfdgfddfgdfgdfgdfgdf",
      gender: "Male",
      pin_code: "354553",
      land_mark: "khbvkdfvfv",
      mobile_number: "+9165534634345",
      referd_by: "doctor",
      date: "2023-12-09",
      time: "15:45",
      testName: "Test 1",
    },
  ];

  const config = [
    {
      label: "S/N",
      render: (list) => list.id,
    },
    {
      label: "Patient Name",
      render: (list) => list.name,
    },
    {
      label: "Test Name",
      render: (list) => list.testName,
    },
    {
      label: "Gender",
      render: (list) => list.gender,
    },
    {
      label: "Date and Time",
      render: (list) => (
        <div className='flex flex-col items-center'>
          <p>{list.date}</p>
          <p>{list.time}</p>
        </div>
      ),
    },
    {
      label: "Action",
      render: (list) => (
        <div className='flex flex-row justify-center'>
          <BsEyeFill
            onClick={() => handleClick(list)}
            className='cursor-pointer'
          />
        </div>
      ),
      sortValue: (list) => list.action,
    },
  ];

  const keyFn = (list) => {
    return list.name;
  };
  return (
    <div className='products-page flex flex-col gap-[2rem] p-[1rem]'>
      <div className='products-page-head flex flex-row items-center justify-between p-[1rem] shadow-lg'>
        <h3 className='text-[22px] font-semibold'>Lab Test Info</h3>
        {showModal && modal}
      </div>
      <Table data={data} config={config} keyFn={keyFn} />
    </div>
  );
}
