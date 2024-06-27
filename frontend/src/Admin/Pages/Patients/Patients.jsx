import React from 'react';
import Button from '../../components/Button';
import { BsEyeFill } from 'react-icons/bs';
import Table from '../../components/Table';

import Modal from '../../components/Modal';
import { useState } from 'react';
import PatientDetailPage from './PatientDetailPage';

export default function Patients() {
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

  const modalStyle = {
    maxHeight: 'calc(100vh - 8rem)',
    overflowY: 'auto',
  };

  const modal = (
    <Modal onClose={closeModal} actionBar={actionBar}>
      <div
        className="appearance-page flex flex-col gap-[3rem] p-[1rem]"
        style={modalStyle}
      >
        <div className="products-page-head flex flex-row items-center justify-between p-[1rem] shadow-lg">
          <h3 className="text-[22px] font-semibold">Patient's Info</h3>
        </div>
        <PatientDetailPage />
      </div>
    </Modal>
  );

  //Modal
  const [showModalAdd, setShowModalAdd] = useState(false);
  const handleClickAdd = () => {
    setShowModalAdd(true);
  };

  const closeModalAdd = () => {
    setShowModalAdd(false);
  };

  const actionBarAdd = (
    <div>
      <Button onClick={closeModalAdd} primary>
        Close
      </Button>
    </div>
  );

  const modalAdd = (
    <Modal onClose={closeModalAdd} actionBar={actionBarAdd}>
      <div
        className="appearance-page flex flex-col gap-[3rem] p-[1rem]"
        style={modalStyle}
      >
        <div className="products-page-head flex flex-row items-center justify-between p-[1rem] shadow-lg">
          <h3 className="text-[22px] font-semibold">Patient's Info</h3>
        </div>
      </div>
    </Modal>
  );

  //Table
  const data = [
    {
      id: '1',
      patientsName: 'Mr Arman',
      age: 33,
      doctorsName: 'Dr Aquib',
      price: '#',
    },
  ];

  const config = [
    {
      label: 'S/N',
      render: (list) => list.id,
      sortValue: (list) => list.id,
    },
    {
      label: 'Patients Name',
      render: (list) => list.patientsName,
      sortValue: (list) => list.patientsName,
    },
    {
      label: 'Age',
      render: (list) => list.age,
      sortValue: (list) => list.age,
    },
    {
      label: 'Doctor Name',
      render: (list) => list.doctorsName,
      sortValue: (list) => list.doctorsName,
    },
    {
      label: 'Price',
      render: (list) => list.price,
      sortValue: (list) => list.price,
    },
    {
      label: 'Action',
      render: (list) => (
        <div className="flex flex-row justify-center">
          <BsEyeFill onClick={handleClick} className="cursor-pointer" />
        </div>
      ),
      sortValue: (list) => list.action,
    },
  ];

  const keyFn = (list) => {
    return list.id;
  };
  return (
    <div className="products-page flex flex-col gap-[2rem] p-[1rem]">
      <div className="products-page-head flex flex-row items-center justify-between p-[1rem] shadow-lg">
        <h3 className="text-[22px] font-semibold">Patients</h3>
        <Button
          onClick={handleClickAdd}
          className="flex h-[3rem] w-48 flex-row items-center justify-center gap-[4px] rounded-[0.25rem] bg-green-500 text-white shadow hover:bg-green-600"
        >
          <p>+</p>
          <p>Add Patient</p>
        </Button>
      </div>
      <Table data={data} config={config} keyFn={keyFn} />
      {showModal && modal}
      {showModalAdd && modalAdd}
    </div>
  );
}
