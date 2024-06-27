import React from 'react';
import Dropdown from '../../../components/Dropdown';
import { useState } from 'react';

export default function AuthSettings() {
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
        <h3 className="text-[22px] font-semibold">Auth Settings</h3>
      </div>

      <div className="appearance-page flex flex-col gap-[1rem] border p-[1rem]">
        <h3 className="border-b text-[16px] font-semibold">
          Login & Registration
        </h3>
        <div action="" className="flex flex-col gap-[2rem] p-[1rem]">
          <div className="flex flex-col gap-[10px]">
            <label htmlFor="">Customer Registration</label>
            <Dropdown
              options={options}
              onChange={handleSelect}
              value={selectedOption}
            />
          </div>
          <div className="flex flex-col gap-[10px]">
            <label htmlFor="">Registration Verification</label>
            <Dropdown
              options={options}
              onChange={handleSelect}
              value={selectedOption}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
