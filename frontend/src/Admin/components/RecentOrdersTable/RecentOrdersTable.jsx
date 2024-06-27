import React, { useRef } from 'react';
import './RecentOrdersTable.css';
// import { BsEyeFill } from 'react-icons/bs';
// import { BsArrowRightShort } from 'react-icons/bs';
import Table from '../Table';
import SuccessCard from '../TableIconCard/SuccessCard';
import DangerCard from '../TableIconCard/DangerCard';
import Button from '../Button';
import { useState } from 'react';
import Modal from '../Modal';
// import Button from '../Button';
import DownloadAsPdf from '../DownloadAsPdf/DownloadAsPdf';

import OrderDetailsPage from '../../Pages/OrdersPage/OrderDetailsPage';

import { useContext } from 'react';
import DataContext from '../../../context api/StateProvider';

export default function RecentOrdersTable() {
  // const orderInvoiceRef = useRef(null);

  const { orders } = useContext(DataContext);

  const data = orders;
  console.log(orders);

  const config = [
    {
      label: 'Id',
      render: (list) => list.id,
    },
    {
      label: 'Customer',
      render: (list) => list.customer,
    },
    {
      label: 'Placed On',
      render: (list) => list.placedOn,
    },
    {
      label: 'Items',
      render: (list) => list.items,
    },
    {
      label: 'Payment Status',
      render: (list) => list.paymentStatus,
    },
    {
      label: 'Delivery Status',
      render: (list) => list.deliveryStatus,
    },
    {
      label: 'Delivery Type',
      render: (list) => list.deliveryType,
    },
    {
      label: 'Action',
      render: (list) => (
        <div className="flex flex-col items-center justify-center gap-[10px]">
          <Button
            onClick={() => handleClick(list.id)}
            primary
            className="flex w-[100px] justify-center text-center"
          >
            View
          </Button>
          {/* <DownloadAsPdf htmlData={OrderDetailsPage} /> */}
          {/* <Button
            success
            className="flex w-[100px] justify-center text-center"
            // onClick={handleClickOpenDialog}
          >
            Download
          </Button> */}
        </div>
      ),
    },
  ];

  const keyFn = (list) => {
    return list.id;
  };

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
      modalHeading={'Order Details'}
      onClose={closeModal}
      actionBar={actionBar}
    >
      <div>
        <OrderDetailsPage />
      </div>
    </Modal>
  );

  // Modal End

  return (
    <div className="admin-section-latestAppoint flex flex-col gap-[1rem]">
      <div className="flex flex-row justify-between">
        <h3 className="admin-heading-sm">Recent Orders</h3>
        {/* <div className="flex cursor-pointer flex-row items-center">
          <h4>View All</h4>
          <BsArrowRightShort className="text-[2rem]" />
        </div> */}
      </div>
      <p className="text-gray-400">Your Recent Orders</p>
      <div>
        <Table data={data} config={config} keyFn={keyFn} />
      </div>
      {showModal && modal}
    </div>
  );
}
