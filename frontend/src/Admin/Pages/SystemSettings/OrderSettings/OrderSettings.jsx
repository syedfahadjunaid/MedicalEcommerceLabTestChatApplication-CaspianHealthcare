import React from 'react';
// import DragDropComponent from '../../../components/DragDropComponent/DragDropComponent';
import Button from '../../../components/Button';
import Dropdown from '../../../components/Dropdown';
import { useState } from 'react';
import Table from '../../../components/Table';
import DialogBox from '../../../components/DIalogBox/DialogBox';

export default function OrderSettings() {
  // Dropdown Data

  // Dropdown - Enable Scheduled Order
  const [selectedOption, setSelectedOption] = useState(null);
  const handleSelect = (option) => {
    setSelectedOption(option);
  };

  const options = [
    { label: 'Option1', value: 'opt1' },
    { label: 'Option2', value: 'opt2' },
    { label: 'Option3', value: 'opt3' },
  ];

  // Dropdown - Scheduled Order Days
  const [selectedOption1, setSelectedOption1] = useState(null);
  const handleSelect1 = (option) => {
    setSelectedOption1(option);
  };

  const options1 = [
    { label: 'Option1', value: 'opt1' },
    { label: 'Option2', value: 'opt2' },
    { label: 'Option3', value: 'opt3' },
  ];

  // // Dropdown - Scheduled Order Days
  // const [selectedOption2, setSelectedOption2] = useState(null);
  // const handleSelect2 = (option) => {
  //   setSelectedOption1(option);
  // };

  // const options2 = [
  //   { label: 'Option1', value: 'opt1' },
  //   { label: 'Option2', value: 'opt2' },
  //   { label: 'Option3', value: 'opt3' },
  // ];

  //Table
  // /----------Dialog
  const [open, setOpen] = React.useState(false);
  const handleClickOpenDialog = () => {
    setOpen(true);
  };

  const data = [
    {
      id: '1',
      timeSlot: 'Fahad Medicine',
      deliveryOrder: 'My Brand',
    },
  ];

  const config = [
    {
      label: 'S/N',
      render: (list) => list.id,
      sortValue: (list) => list.id,
    },
    {
      label: 'Time Slot',
      render: (list) => list.timeSlot,
      sortValue: (list) => list.timeSlot,
    },
    {
      label: 'Delivery Order',
      render: (list) => list.deliveryOrder,
      sortValue: (list) => list.deliveryOrder,
    },

    {
      label: 'Action',
      render: (list) => (
        <div className="flex flex-col items-center justify-center gap-[10px]">
          <Button
            danger
            className="flex w-[100px] justify-center text-center"
            onClick={handleClickOpenDialog}
          >
            Delete
          </Button>
        </div>
      ),
      sortValue: (list) => list.price,
    },
  ];

  const keyFn = (list) => {
    return list.name;
  };

  return (
    <div className="products-page flex flex-col gap-[2rem] p-[1rem]">
      <div className="products-page-head flex flex-row items-center justify-between p-[1rem] shadow-lg">
        <h3 className="text-[22px] font-semibold">Order Settings</h3>
      </div>

      <div className="appearance-page flex flex-col gap-[1rem] border p-[1rem]">
        <h3 className="border-b text-[16px] font-semibold">
          Order Information
        </h3>
        <div action="" className="flex flex-col gap-[2rem] p-[1rem]">
          <div className="flex flex-col gap-[10px]">
            <label htmlFor="">Enable Scheduled Order</label>
            <Dropdown
              options={options}
              onChange={handleSelect}
              value={selectedOption}
            />
          </div>
          <div className="flex flex-col gap-[10px]">
            <label htmlFor="">Scheduled Order Days</label>
            <Dropdown
              options={options1}
              onChange={handleSelect1}
              value={selectedOption1}
            />
          </div>
          {/* <div className="flex flex-col gap-[10px]">
            <label htmlFor="">Order Code Prefix</label>
            <input
              type="text"
              placeholder="Enter Code Prefix"
              className="border p-[1rem]"
            />
          </div>
          <div className="flex flex-col gap-[10px]">
            <label htmlFor="">Order Code Starts From</label>
            <input
              type="text"
              placeholder="Enter Order Code Starts From"
              className="border p-[1rem]"
            />
          </div> */}
          {/* <div className="flex flex-col gap-[10px]">
            <label htmlFor="">Upload Photo</label>
            <DragDropComponent />
          </div> */}
          <div className="flex flex-col gap-[10px]">
            <label htmlFor="">Invoice Thank You Message</label>
            <textarea
              type="text"
              placeholder="Enter Thank You Message"
              rows={'3'}
              className="border p-[1rem]"
            />
          </div>
          <Button success className="w-fit hover:bg-green-700">
            Save Now
          </Button>
        </div>
      </div>
      <Table data={data} config={config} keyFn={keyFn} />
      <DialogBox open={open} setOpen={setOpen} />
      <div className="appearance-page flex flex-col gap-[1rem] border p-[1rem]">
        <h3 className="border-b text-[16px] font-semibold">
          Add New Time Slot
        </h3>
        <div className="flex flex-col gap-[10px]">
          <label htmlFor="">Time Slot</label>
          <div className="flex flex-row justify-between gap-[1rem]">
            <div className="w-full">
              <label htmlFor="" className="text-[12px]">
                From
              </label>
              <input type="time" className="w-full border p-[1rem]" />
            </div>
            <div className="w-full">
              <label htmlFor="" className="text-[12px]">
                To
              </label>
              <input type="time" className="w-full border p-[1rem]" />
            </div>
          </div>
        </div>
        <Button success className="w-fit hover:bg-green-700">
          Save Now
        </Button>
      </div>
    </div>
  );
}
