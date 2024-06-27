import React from 'react';
import DoctorCards from '../../components/DoctorsPageCards/DoctorCards';
import Button from '../../components/Button';
import Modal from '../../components/Modal';
import { useState } from 'react';

export default function DoctorsPage({
  addBtn,
  modalHeading,
  modalContent,
  name,
  showBtn,
}) {
  //Modal
  const [showModal, setShowModal] = useState(false);
  const handleClick = () => {
    setShowModal(true);
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
    <Modal
      modalHeading={modalHeading}
      onClose={closeModal}
      actionBar={actionBar}
    >
      <p>{modalContent}</p>
    </Modal>
  );
  return (
    <div className="appearance-page flex flex-col gap-[2rem] p-[1rem]">
      <div className="products-page-head flex flex-row items-center justify-between p-[1rem] shadow-lg">
        <h3 className="text-[22px] font-semibold">{name}</h3>
        <form action="">
          <input
            className="w-[300px] border p-[10px]"
            type="text"
            placeholder="Search Doctors"
          />
        </form>
        <div className="flex flex-row gap-[2rem]">
          <Button
            onClick={handleClick}
            className={`${showBtn} flex h-[3rem] w-48 flex-row items-center justify-center gap-[4px] rounded-[0.25rem] bg-green-500 text-white shadow hover:bg-green-600`}
          >
            <p>+</p>
            <p>{addBtn}</p>
          </Button>
        </div>
      </div>
      <DoctorCards />
      {showModal && modal}
    </div>
  );
}
