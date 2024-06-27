import React from 'react';
import Table from '../../components/Table';
// import Dropdown from '../../components/Dropdown';
// import { useState } from 'react';
import Button from '../../components/Button';

import Modal from '../../components/Modal';
import { useState } from 'react';

export default function AppearancePage({
  name,
  data,
  config,
  keyFn,
  modalHeading,
  modalContent,
  addBtn,
  addBtnhide,
  form,
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
        <div className="flex flex-row gap-[2rem]">
          <Button
            onClick={handleClick}
            className={`${addBtnhide} flex h-[3rem] w-48 flex-row items-center justify-center gap-[4px] rounded-[0.25rem] bg-green-500 text-white shadow hover:bg-green-600`}
          >
            <p>+</p>
            <p>{addBtn}</p>
          </Button>
        </div>
        {showModal && modal}
      </div>
      <Table data={data} config={config} keyFn={keyFn} />

      {form}
    </div>
  );
}
