import React from 'react';
import './DoctorCards.css';

import { BsArrowRightShort } from 'react-icons/bs';

// import doctorIcon1 from '../../assets/dashboardDoctorIcons/icon1.jpg';
import { useState } from 'react';
import PaginationComponent from '../../components/Pagination/PaginationComponent';

import { useContext } from 'react';
import DataContext from '../../../context api/StateProvider';

import Modal from '../Modal';
import Button from '../Button';
import DoctorDetailsPage from '../../Pages/Doctors/DoctorDetailsPage';

export default function DoctorCards() {
  const { doctors, setSeeDoctorsInfo } = useContext(DataContext);
  //Table Pagination
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(20);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  // ////////////////////////////////////////

  const doctorData = doctors;

  // Doctor Information State

  // --------------------------------

  //Modal
  const [showModal, setShowModal] = useState(false);

  const handleClick = (value) => {
    setShowModal(true);
    setSeeDoctorsInfo(value);
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

  const modal = (
    <Modal onClose={closeModal} actionBar={actionBar}>
      <DoctorDetailsPage />
    </Modal>
  );

  // console.log(seeDoctorsInfo);
  const renderedDoctorData = doctorData
    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
    .map((data, index) => {
      return (
        <div
          onClick={() => handleClick(data)}
          key={index}
          className="admin-home-section-doctors-card flex w-[180px] cursor-pointer flex-row items-center gap-[5px] border-[1px] border-solid border-inherit p-[10px]"
        >
          <img
            className="h-[30px] w-[30px]"
            src={data.doctorPhoto}
            alt={`${index}`}
          />
          <div className="flex flex-col">
            <h3 className="text-[12px]">{`${data.doctorFirstName}-${data.doctorLastName}`}</h3>

            <p className="text-[12px]">{data.doctorDOB}</p>

            <p className="text-[12px]">{data.doctorGender.label}</p>
          </div>
          <BsArrowRightShort />
        </div>
      );
    });
  return (
    <div className="admin-section-doctors flex flex-col gap-[1rem]">
      <div className="flex flex-row justify-between">
        <h3 className="admin-heading-sm">All Doctors</h3>
        {/* <div className="flex cursor-pointer flex-row items-center">
          <h4>View All</h4>
          <BsArrowRightShort className="text-[2rem]" />
        </div> */}
      </div>
      <div className="admin-home-section-doctors-cards w-full gap-[1.5rem]">
        {renderedDoctorData}
      </div>
      <PaginationComponent
        page={page}
        rowsPerPage={rowsPerPage}
        handleChangePage={handleChangePage}
        handleChangeRowsPerPage={handleChangeRowsPerPage}
        data={doctorData}
      />
      {showModal && modal}
    </div>
  );
}
