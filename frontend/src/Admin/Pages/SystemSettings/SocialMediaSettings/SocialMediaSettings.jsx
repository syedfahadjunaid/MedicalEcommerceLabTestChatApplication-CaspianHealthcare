import React from 'react';
import Dropdown from '../../../components/Dropdown';
import { useState } from 'react';
import Button from '../../../components/Button';

export default function SocialMediaSettings() {
  // Dropdown - Google Is Active
  const [selectedOption, setSelectedOption] = useState(null);
  const handleSelect = (option) => {
    setSelectedOption(option);
  };

  const options = [
    { label: 'Enable', value: 'opt1' },
    { label: 'Disable', value: 'opt2' },
  ];

  // Dropdown - Facebook Is Active
  const [selectedOption1, setSelectedOption1] = useState(null);
  const handleSelect1 = (option) => {
    setSelectedOption1(option);
  };

  const options1 = [
    { label: 'Enable', value: 'opt1' },
    { label: 'Disable', value: 'opt2' },
  ];

  return (
    <div className="flex flex-col gap-[2rem] p-[1rem]">
      <div className="products-page-head flex flex-row items-center justify-between p-[1rem] shadow-lg">
        <h3 className="text-[22px] font-semibold">Social Media Settings</h3>
      </div>

      <div className="appearance-page flex flex-col gap-[1rem] border p-[1rem]">
        <h3 className="border-b text-[16px] font-semibold">Google Login</h3>
        <div action="" className="flex flex-col gap-[2rem] p-[1rem]">
          <div className="flex flex-col gap-[10px]">
            <label htmlFor="">Google Client Id</label>
            <input
              type="text"
              placeholder="Enter Google Client Id"
              className="border p-[1rem]"
            />
          </div>
          <div className="flex flex-col gap-[10px]">
            <label htmlFor="">Google Client Secret Key</label>
            <input
              type="text"
              placeholder="Enter Google Client Secret Key"
              className="border p-[1rem]"
            />
          </div>
          <div className="flex flex-col gap-[10px]">
            <label htmlFor="">Is Active?</label>
            <Dropdown
              options={options}
              onChange={handleSelect}
              value={selectedOption}
            />
          </div>
        </div>
      </div>

      <div className="appearance-page flex flex-col gap-[1rem] border p-[1rem]">
        <h3 className="border-b text-[16px] font-semibold">Facebook Login</h3>
        <div action="" className="flex flex-col gap-[2rem] p-[1rem]">
          <div className="flex flex-col gap-[10px]">
            <label htmlFor="">Facebook App Id</label>
            <input
              type="text"
              placeholder="Enter Google Client Id"
              className="border p-[1rem]"
            />
          </div>
          <div className="flex flex-col gap-[10px]">
            <label htmlFor="">Facebook App Secret Key</label>
            <input
              type="text"
              placeholder="Enter Google Client Secret Key"
              className="border p-[1rem]"
            />
          </div>
          <div className="flex flex-col gap-[10px]">
            <label htmlFor="">Is Active?</label>
            <Dropdown
              options={options1}
              onChange={handleSelect1}
              value={selectedOption1}
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
