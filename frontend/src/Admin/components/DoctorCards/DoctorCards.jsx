import React from 'react';
import './DoctorCards.css';

import { BsArrowRightShort } from 'react-icons/bs';

import doctorIcon1 from '../../assets/dashboardDoctorIcons/icon1.jpg';

export default function DoctorCards() {
  const doctorData = [
    {
      name: 'Dr. Rana',
      age: 22,
      gender: 'M',
      img: doctorIcon1,
    },
    {
      name: 'Dr. Rana',
      age: 22,
      gender: 'M',
      img: doctorIcon1,
    },
    {
      name: 'Dr. Rana',
      age: 22,
      gender: 'M',
      img: doctorIcon1,
    },
    {
      name: 'Dr. Rana',
      age: 22,
      gender: 'M',
      img: doctorIcon1,
    },
    {
      name: 'Dr. Rana',
      age: 22,
      gender: 'M',
      img: doctorIcon1,
    },
    {
      name: 'Dr. Rana',
      age: 22,
      gender: 'M',
      img: doctorIcon1,
    },
  ];

  const renderedDoctorData = doctorData.map((data, index) => {
    return (
      <div
        key={index}
        className="admin-home-section-doctors-card flex cursor-pointer flex-row items-center gap-[10px] border-[1px] border-solid border-inherit p-[10px]"
      >
        <img src={data.img} alt="doctor-img" />
        <div className="flex flex-col">
          <h3>{data.name}</h3>
          <div className="flex flex-row gap-[8px]">
            <p>{data.age}</p>
            <p>,</p>
            <p>{data.gender}</p>
          </div>
        </div>
        <BsArrowRightShort />
      </div>
    );
  });
  return (
    <div className="admin-section-doctors flex flex-col gap-[1rem]">
      <div className="flex flex-row justify-between">
        <h3 className="admin-heading-sm">Doctors</h3>
        <div className="flex cursor-pointer flex-row items-center">
          <h4>View All</h4>
          <BsArrowRightShort className="text-[2rem]" />
        </div>
      </div>
      <div className="admin-home-section-doctors-cards gap-[1.5rem]">
        {renderedDoctorData}
      </div>
    </div>
  );
}
