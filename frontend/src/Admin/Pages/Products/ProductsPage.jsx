import React from 'react';
import Table from '../../components/Table';
import Dropdown from '../../components/Dropdown';
// import { useState } from 'react';
import Button from '../../components/Button';

import Modal from '../../components/Modal';
import { useState } from 'react';

// import { BsEyeFill } from 'react-icons/bs';

export default function ProductsPage({
  name,
  options,
  handleSelect,
  selectedOption,
  data,
  config,
  keyFn,
  modalContent,
  modalHeading,
  addBtn,
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
  // Modal End
  return (
    <div className="products-page flex flex-col gap-[2rem] p-[1rem]">
      <div className="products-page-head flex flex-row items-center justify-between p-[1rem] shadow-lg">
        <h3 className="text-[22px] font-semibold">{name}</h3>
        <div className="flex flex-row gap-[2rem]">
          <Dropdown
            options={options}
            onChange={handleSelect}
            value={selectedOption}
          />
          <Button
            onClick={handleClick}
            className="flex h-[3.5rem] w-48 flex-row items-center justify-center gap-[4px] rounded-[0.25rem] bg-green-500 text-white shadow hover:bg-green-600"
          >
           
            <p>{addBtn}</p>
          </Button>
          {showModal && modal}
        </div>
      </div>
      {/* <Table data={data?.data} config={config} keyFn={keyFn} /> */}
    </div>
  );
}
