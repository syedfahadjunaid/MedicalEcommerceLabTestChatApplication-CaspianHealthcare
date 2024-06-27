import React from 'react';
import { useState } from 'react';
import Dropdown from '../../../components/Dropdown';
import DragDropComponent from '../../../components/DragDropComponent/DragDropComponent';
import Button from '../../../components/Button';

export default function GeneralSettings() {
  // Dropdown - System Title
  const [selectedOption, setSelectedOption] = useState(null);
  const handleSelect = (option) => {
    setSelectedOption(option);
  };

  const options = [
    { label: 'Enable', value: 'opt1' },
    { label: 'Disable', value: 'opt2' },
  ];
  return (
    <div className="products-page flex flex-col gap-[2rem] p-[1rem]">
      <div className="products-page-head flex flex-row items-center justify-between p-[1rem] shadow-lg">
        <h3 className="text-[22px] font-semibold">General Settings</h3>
      </div>

      <div className="appearance-page flex flex-col gap-[1rem] border p-[1rem]">
        <h3 className="border-b text-[16px] font-semibold">
          General Information
        </h3>
        <div action="" className="flex flex-col gap-[2rem] p-[1rem]">
          <div className="flex flex-col gap-[10px]">
            <label htmlFor="">System Title</label>
            <Dropdown
              options={options}
              onChange={handleSelect}
              value={selectedOption}
            />
          </div>
          <div className="flex flex-col gap-[10px]">
            <label htmlFor="">Address</label>
            <input
              type="text"
              placeholder="Enter Address"
              className="border p-[1rem]"
            />
          </div>
        </div>
      </div>

      <div className="appearance-page flex flex-col gap-[1rem] border p-[1rem]">
        <h3 className="border-b text-[16px] font-semibold">Logo & Favicon</h3>
        <div className="flex flex-col gap-[2rem] p-[1rem]">
          <div className="flex flex-col gap-[10px]">
            <label htmlFor="">Logo Image</label>
            <DragDropComponent />
          </div>
          <div className="flex flex-col gap-[10px]">
            <label htmlFor="">Favicon Image</label>
            <DragDropComponent />
          </div>
        </div>
      </div>

      <Button success className="w-fit hover:bg-green-700">
        Save Now
      </Button>
    </div>
  );
}
