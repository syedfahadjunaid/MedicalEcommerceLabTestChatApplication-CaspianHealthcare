import React from 'react';
import './OrdersPage.css';
import RecentOrdersTable from '../../components/RecentOrdersTable/RecentOrdersTable';

import Dropdown from '../../components/Dropdown';
import { useState } from 'react';

export default function OrdersPage() {
  //Dropdown
  const [selectedOption, setSelectedOption] = useState(null);
  const handleSelect = (option) => {
    setSelectedOption(option);
  };

  const options = [
    { label: 'Option1', value: 'opt1' },
    { label: 'Option2', value: 'opt2' },
    { label: 'Option3', value: 'opt3' },
  ];

  //Dropdown2
  const [selectedOption1, setSelectedOption1] = useState(null);
  const handleSelect1 = (option1) => {
    setSelectedOption1(option1);
  };

  const options1 = [
    { label: 'Option1', value: 'opt1' },
    { label: 'Option2', value: 'opt2' },
    { label: 'Option3', value: 'opt3' },
  ];
  return (
    <div className="products-page flex flex-col gap-[3rem] p-[1rem]">
      <div className="products-page-head flex flex-row items-center justify-between p-[1rem] shadow-lg">
        <h3 className="text-[22px] font-semibold">Orders</h3>
        <div className="flex flex-row gap-[2rem]">
          <Dropdown
            options={options}
            onChange={handleSelect}
            value={selectedOption}
          />
          <Dropdown
            options={options1}
            onChange={handleSelect1}
            value={selectedOption1}
          />
        </div>
      </div>
      <RecentOrdersTable />
    </div>
  );
}
