import React from 'react';
import Button from '../../../components/Button';
import Dropdown from '../../../components/Dropdown';
import { useState } from 'react';

export default function PaymentSettings() {
  // Dropdown - Enable Cash On Delivery
  const [selectedOption, setSelectedOption] = useState(null);
  const handleSelect = (option) => {
    setSelectedOption(option);
  };

  const options = [
    { label: 'Option1', value: 'opt1' },
    { label: 'Option2', value: 'opt2' },
    { label: 'Option3', value: 'opt3' },
  ];

  // Dropdown - Razorpay Invironment
  const [selectedOption1, setSelectedOption1] = useState(null);
  const handleSelect1 = (option) => {
    setSelectedOption1(option);
  };

  const options1 = [
    { label: 'Production', value: 'opt1' },
    { label: 'Sandbox', value: 'opt2' },
  ];

  // Dropdown - Stripe Invironment
  const [selectedOption2, setSelectedOption2] = useState(null);
  const handleSelect2 = (option) => {
    setSelectedOption2(option);
  };

  const options2 = [
    { label: 'Production', value: 'opt1' },
    { label: 'Sandbox', value: 'opt2' },
  ];

  return (
    <div className="products-page flex flex-col gap-[2rem] p-[1rem]">
      <div className="products-page-head flex flex-row items-center justify-between p-[1rem] shadow-lg">
        <h3 className="text-[22px] font-semibold">Payment Method Settings</h3>
      </div>

      <div className="appearance-page flex flex-col gap-[1rem] border p-[1rem]">
        <h3 className="border-b text-[16px] font-semibold">
          Enable Cash on Delivery
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
        </div>
      </div>

      <div className="appearance-page flex flex-col gap-[1rem] border p-[1rem]">
        <h3 className="border-b text-[16px] font-semibold">RazorPay</h3>
        <div action="" className="flex flex-col gap-[2rem] p-[1rem]">
          <div className="flex flex-col gap-[10px]">
            <label htmlFor="">Environment</label>
            <Dropdown
              options={options1}
              onChange={handleSelect1}
              value={selectedOption1}
            />
          </div>
          <div className="flex flex-col gap-[10px]">
            <label htmlFor="">RazorPay Public Key</label>
            <input
              type="text"
              placeholder="Enter RazorPay Public Key"
              className="border p-[1rem]"
            />
          </div>
          <div className="flex flex-col gap-[10px]">
            <label htmlFor="">RazorPay Secret Key</label>
            <input
              type="text"
              placeholder="Enter RazorPay Secret Key"
              className="border p-[1rem]"
            />
          </div>
          <div className="flex flex-col gap-[10px]">
            <label htmlFor="">RazorPay Production Public Key</label>
            <input
              type="text"
              placeholder="Enter RazorPay Production Public Key"
              className="border p-[1rem]"
            />
          </div>
          <div className="flex flex-col gap-[10px]">
            <label htmlFor="">RazorPay Production Secret Key</label>
            <input
              type="text"
              placeholder="Enter RazorPay Production Secret Key"
              className="border p-[1rem]"
            />
          </div>
        </div>
      </div>

      <div className="appearance-page flex flex-col gap-[1rem] border p-[1rem]">
        <h3 className="border-b text-[16px] font-semibold">Stripe</h3>
        <div action="" className="flex flex-col gap-[2rem] p-[1rem]">
          <div className="flex flex-col gap-[10px]">
            <label htmlFor="">Environment</label>
            <Dropdown
              options={options2}
              onChange={handleSelect2}
              value={selectedOption2}
            />
          </div>
          <div className="flex flex-col gap-[10px]">
            <label htmlFor="">Stripe Public Key</label>
            <input
              type="text"
              placeholder="Enter RazorPay Public Key"
              className="border p-[1rem]"
            />
          </div>
          <div className="flex flex-col gap-[10px]">
            <label htmlFor="">Stripe Secret Key</label>
            <input
              type="text"
              placeholder="Enter RazorPay Secret Key"
              className="border p-[1rem]"
            />
          </div>
          <div className="flex flex-col gap-[10px]">
            <label htmlFor="">Stripe Production Public Key</label>
            <input
              type="text"
              placeholder="Enter RazorPay Production Public Key"
              className="border p-[1rem]"
            />
          </div>
          <div className="flex flex-col gap-[10px]">
            <label htmlFor="">Stripe Production Secret Key</label>
            <input
              type="text"
              placeholder="Enter RazorPay Production Secret Key"
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
