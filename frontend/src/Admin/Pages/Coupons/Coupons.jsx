import React from 'react';
import Table from '../../components/Table';
import Button from '../../components/Button';
import DialogBox from '../../components/DIalogBox/DialogBox';
import Modal from '../../components/Modal';
import { useState } from 'react';
import DragDropComponent from '../../components/DragDropComponent/DragDropComponent';

export default function Coupons() {
  // Add Coupon Data
  const [addCouponCode, setAddCouponCode] = useState('');
  const [addCouponDiscountAmount, setAddCouponDiscountAmount] = useState('');
  const [addCouponPercentage, setAddCouponPercentage] = useState('');
  const [addCouponStartDate, setAddCouponStartDate] = useState('');
  const [addCouponEndDate, setAddCouponEndDate] = useState('');

  let addCouponObjData = {
    code: addCouponCode,
    discountAmount: addCouponDiscountAmount,
    percentage: addCouponPercentage,
    startDate: addCouponStartDate,
    endDate: addCouponEndDate,
  };

  const [addCouponData, setAddCouponData] = useState(null);

  const handleSubmitAddCoupon = () => {
    setAddCouponData(addCouponObjData);
    console.log(addCouponData);
  };

  const scrollModalStyle = {
    maxHeight: 'calc(100vh - 6rem)',
    overflowY: 'auto',
  };
  //Modal - Add Coupons
  const [showModal, setShowModal] = useState(false);

  const modalContextAddCoupon = (
    <div className="appearance-page flex flex-col gap-[1rem] border p-[1rem]">
      <h3 className="border-b text-[16px] font-semibold">Basic Information</h3>
      <div className="flex flex-col gap-[10px]">
        <label htmlFor="">Coupon Code</label>
        <input
          value={addCouponCode}
          type="text"
          placeholder="Enter Coupon Code"
          className="border p-[1rem]"
          onChange={(event) => setAddCouponCode(event.target.value)}
        />
      </div>

      <div className="flex flex-row justify-between gap-[1rem]">
        <div className="flex w-full flex-col gap-[10px]">
          <label htmlFor="" className="">
            Discount Amount
          </label>
          <input
            value={addCouponDiscountAmount}
            type="text"
            className="w-full border p-[1rem]"
            placeholder="Enter Discount Amount"
            onChange={(event) => setAddCouponDiscountAmount(event.target.value)}
          />
        </div>
        <div className="flex w-full flex-col gap-[10px]">
          <label htmlFor="" className="">
            Percentage or Fixed
          </label>
          <input
            value={addCouponPercentage}
            type="text"
            className="w-full border p-[1rem]"
            placeholder="Enter Percentage or Fixed"
            onChange={(event) => setAddCouponPercentage(event.target.value)}
          />
        </div>
      </div>

      <div className="flex flex-row justify-between gap-[1rem]">
        <div className="flex w-full flex-col gap-[10px]">
          <label htmlFor="" className="">
            Start Date
          </label>
          <input
            // value={addCouponStartDate}
            type="date"
            className="w-full border p-[1rem]"
            placeholder="Enter Start Date"
            onChange={(event) => setAddCouponStartDate(event.target.value)}
          />
        </div>
        <div className="flex w-full flex-col gap-[10px]">
          <label htmlFor="" className="">
            End Date
          </label>
          <input
            // value={addCouponEndDate}
            type="date"
            className="w-full border p-[1rem]"
            placeholder="Enter End Date"
            onChange={(event) => setAddCouponEndDate(event.target.value)}
          />
        </div>
      </div>

      <div className="flex w-full flex-col gap-[10px]">
        <label htmlFor="" className="">
          Banner
        </label>
        <DragDropComponent />
      </div>
    </div>
  );

  const modalContentAddProductCategories = (
    <div className="appearance-page flex flex-col gap-[1rem] border p-[1rem]">
      <h3 className="border-b text-[16px] font-semibold">
        Products & Categories
      </h3>

      <div className="flex flex-col gap-[10px]">
        <label htmlFor="">Categories</label>
        <input
          type="text"
          placeholder="Enter Categories"
          className="border p-[1rem]"
        />
      </div>

      <div className="flex flex-col gap-[10px]">
        <label htmlFor="">Products</label>
        <input
          type="text"
          placeholder="Enter Products"
          className="border p-[1rem]"
        />
      </div>
    </div>
  );

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
      //   modalHeading={'Add Coupons'}
      onClose={closeModal}
      actionBar={actionBar}
    >
      <div
        className="products-page flex flex-col gap-[2rem] p-[1rem]"
        style={scrollModalStyle}
      >
        <div className="products-page-head flex flex-row items-center justify-between p-[1rem] shadow-lg">
          <h3 className="text-[22px] font-semibold">Add Coupons</h3>
        </div>
        {modalContextAddCoupon}
        {modalContentAddProductCategories}
      </div>
      <Button
        onClick={handleSubmitAddCoupon}
        success
        className="w-fit hover:bg-green-700"
      >
        Save Now
      </Button>
    </Modal>
  );
  // Modal End

  //Modal - Edit Coupons
  const [showModalEdit, setShowModalEdit] = useState(false);

  const modalContentEditCoupon = (
    <div className="appearance-page flex flex-col gap-[1rem] border p-[1rem]">
      <h3 className="border-b text-[16px] font-semibold">Basic Information</h3>
      <div className="flex flex-col gap-[10px]">
        <label htmlFor="">Coupon Code</label>
        <input
          type="text"
          placeholder="Enter Coupon Code"
          className="border p-[1rem]"
        />
      </div>

      <div className="flex flex-row justify-between gap-[1rem]">
        <div className="flex w-full flex-col gap-[10px]">
          <label htmlFor="" className="">
            Discount Amount
          </label>
          <input
            type="text"
            className="w-full border p-[1rem]"
            placeholder="Enter Discount Amount"
          />
        </div>
        <div className="flex w-full flex-col gap-[10px]">
          <label htmlFor="" className="">
            Percentage or Fixed
          </label>
          <input
            type="text"
            className="w-full border p-[1rem]"
            placeholder="Enter Percentage or Fixed"
          />
        </div>
      </div>

      <div className="flex flex-row justify-between gap-[1rem]">
        <div className="flex w-full flex-col gap-[10px]">
          <label htmlFor="" className="">
            Start Date
          </label>
          <input
            type="date"
            className="w-full border p-[1rem]"
            placeholder="Enter Start Date"
          />
        </div>
        <div className="flex w-full flex-col gap-[10px]">
          <label htmlFor="" className="">
            End Date
          </label>
          <input
            type="date"
            className="w-full border p-[1rem]"
            placeholder="Enter End Date"
          />
        </div>
      </div>

      <div className="flex w-full flex-col gap-[10px]">
        <label htmlFor="" className="">
          Banner
        </label>
        <DragDropComponent />
      </div>
    </div>
  );

  const modalContentProductCategories = (
    <div className="appearance-page flex flex-col gap-[1rem] border p-[1rem]">
      <h3 className="border-b text-[16px] font-semibold">
        Products & Categories
      </h3>

      <div className="flex flex-col gap-[10px]">
        <label htmlFor="">Categories</label>
        <input
          type="text"
          placeholder="Enter Categories"
          className="border p-[1rem]"
        />
      </div>

      <div className="flex flex-col gap-[10px]">
        <label htmlFor="">Products</label>
        <input
          type="text"
          placeholder="Enter Products"
          className="border p-[1rem]"
        />
      </div>
    </div>
  );

  const handleClickEdit = () => {
    setShowModalEdit(true);
  };

  const closeModalEdit = () => {
    setShowModalEdit(false);
  };

  const actionBarEdit = (
    <div>
      <Button onClick={closeModalEdit} primary>
        Close
      </Button>
    </div>
  );

  const modalEdit = (
    <Modal
      //   modalHeading={'Add Coupons'}
      onClose={closeModalEdit}
      actionBar={actionBarEdit}
    >
      <div
        className="products-page flex flex-col gap-[2rem] p-[1rem]"
        style={scrollModalStyle}
      >
        <div className="products-page-head flex flex-row items-center justify-between p-[1rem] shadow-lg">
          <h3 className="text-[22px] font-semibold">Edit Coupon</h3>
        </div>
        {modalContentEditCoupon}
        {modalContentProductCategories}
      </div>
      <Button success className="w-fit hover:bg-green-700">
        Save Now
      </Button>
    </Modal>
  );
  // Modal End

  //Table
  // /----------Dialog
  const [open, setOpen] = React.useState(false);
  const handleClickOpenDialog = () => {
    setOpen(true);
  };

  const data = [
    {
      id: '1',
      code: 'Fahad Medicine',
      discountAmount: 'My Brand',
      startDate: 'Fresh',
      endDate: '$30,300',
    },
  ];

  const config = [
    {
      label: 'S/N',
      render: (list) => list.id,
      sortValue: (list) => list.id,
    },
    {
      label: 'Code',
      render: (list) => list.code,
      sortValue: (list) => list.code,
    },
    {
      label: 'Discount Amount',
      render: (list) => list.discountAmount,
      sortValue: (list) => list.discountAmount,
    },
    {
      label: 'Start Date',
      render: (list) => list.startDate,
      sortValue: (list) => list.startDate,
    },
    {
      label: 'End Date',
      render: (list) => list.endDate,
      sortValue: (list) => list.endDate,
    },
    {
      label: 'Action',
      render: (list) => (
        <div className="flex flex-col items-center justify-center gap-[10px]">
          <Button
            onClick={handleClickEdit}
            primary
            className="flex w-[100px] justify-center text-center"
          >
            Edit
          </Button>
          <Button
            danger
            className="flex w-[100px] justify-center text-center"
            onClick={handleClickOpenDialog}
          >
            Delete
          </Button>
        </div>
      ),
    },
  ];

  const keyFn = (list) => {
    return list.id;
  };
  return (
    <div className="products-page flex flex-col gap-[2rem] p-[1rem]">
      <div className="products-page-head flex flex-row items-center justify-between p-[1rem] shadow-lg">
        <h3 className="text-[22px] font-semibold">Coupons</h3>
        <Button
          onClick={handleClick}
          className="flex h-[3rem] w-48 flex-row items-center justify-center gap-[4px] rounded-[0.25rem] bg-green-500 text-white shadow hover:bg-green-600"
        >
          <p>+</p>
          <p>Add Coupon</p>
        </Button>
      </div>
      {showModal && modal}
      {showModalEdit && modalEdit}
      <Table data={data} config={config} keyFn={keyFn} />
      <DialogBox open={open} setOpen={setOpen} />
    </div>
  );
}
