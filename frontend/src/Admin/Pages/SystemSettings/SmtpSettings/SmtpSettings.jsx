import React from 'react';
import { useState } from 'react';
import Dropdown from '../../../components/Dropdown';
import Button from '../../../components/Button';

export default function SmtpSettings() {
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
        <h3 className="text-[22px] font-semibold">Smtp Settings</h3>
      </div>

      <div className="appearance-page flex flex-col gap-[1rem] border p-[1rem]">
        <h3 className="border-b text-[16px] font-semibold">
          Basic Information
        </h3>
        <div action="" className="flex flex-col gap-[2rem] p-[1rem]">
          <div className="flex flex-col gap-[10px]">
            <label htmlFor="">Type</label>
            <Dropdown
              options={options}
              onChange={handleSelect}
              value={selectedOption}
            />
          </div>
          <div className="flex flex-col gap-[10px]">
            <label htmlFor="">Mail Host</label>
            <input
              type="text"
              placeholder="Enter Mail Host"
              className="border p-[1rem]"
            />
          </div>
          <div className="flex flex-col gap-[10px]">
            <label htmlFor="">Mail Port</label>
            <input
              type="text"
              placeholder="Enter Mail Port"
              className="border p-[1rem]"
            />
          </div>
          <div className="flex flex-col gap-[10px]">
            <label htmlFor="">Mail Username</label>
            <input
              type="text"
              placeholder="Enter Mail Username"
              className="border p-[1rem]"
            />
          </div>
          <div className="flex flex-col gap-[10px]">
            <label htmlFor="">Mail Password</label>
            <input
              type="text"
              placeholder="Enter Mail Password"
              className="border p-[1rem]"
            />
          </div>
          <div className="flex flex-col gap-[10px]">
            <label htmlFor="">Mail Encryption</label>
            <input
              type="text"
              placeholder="Enter Mail Encryption"
              className="border p-[1rem]"
            />
          </div>
          <div className="flex flex-col gap-[10px]">
            <label htmlFor="">Mail From Address</label>
            <input
              type="text"
              placeholder="Enter Mail From Address"
              className="border p-[1rem]"
            />
          </div>
          <div className="flex flex-col gap-[10px]">
            <label htmlFor="">Mail From Name</label>
            <input
              type="text"
              placeholder="Enter Mail From Name"
              className="border p-[1rem]"
            />
          </div>
        </div>
      </div>

      <Button success className="w-fit hover:bg-green-700">
        Save Now
      </Button>
    </div>
  );
}
