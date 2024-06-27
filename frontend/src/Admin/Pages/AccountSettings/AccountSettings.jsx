import React from 'react';
import DragDropComponent from '../../components/DragDropComponent/DragDropComponent';
import Button from '../../components/Button';

export default function AccountSettings() {
  return (
    <div className="products-page flex flex-col gap-[2rem] p-[1rem]">
      <div className="products-page-head flex flex-row items-center justify-between p-[1rem] shadow-lg">
        <h3 className="text-[22px] font-semibold">Account Settings</h3>
      </div>
      <form className="appearance-page flex flex-col gap-[1rem] border p-[1rem]">
        <h3 className="border-b text-[16px] font-semibold">
          Add New Time Slot
        </h3>
        <div className="flex flex-col gap-[10px]">
          <label htmlFor="">Name</label>
          <input
            type="text"
            className="w-full border p-[1rem]"
            placeholder="Enter Name"
          />
          <label htmlFor="">Phone</label>
          <input
            type="text"
            className="w-full border p-[1rem]"
            placeholder="Enter Phone"
          />
          <label htmlFor="">Email</label>
          <input
            type="text"
            disabled
            value={'admin@admin.com'}
            className="w-full border p-[1rem]"
            placeholder="Enter Email"
          />
          <label htmlFor="">Avatar</label>
          <input type="file" />
          <label htmlFor="">Password</label>
          <input
            type="password"
            className="w-full border p-[1rem]"
            placeholder="Enter Password"
          />
          <label htmlFor="">Confirm Password</label>
          <input
            type="password"
            className="w-full border p-[1rem]"
            placeholder="Enter Confirm Password"
          />
        </div>
        <Button success className="w-fit hover:bg-green-700">
          Save Now
        </Button>
      </form>
    </div>
  );
}
