import React from 'react';
import { MdLocationOn } from 'react-icons/md';

// import { HiDownload } from 'react-icons/hi';

import img from '../../assets/invoiceImg.jpg';

import './OrderDetailsPage.css';

export default function OrderDetailsPage() {
  const scrollModalStyle = {
    maxHeight: 'calc(100vh - 10rem)',
    overflowY: 'auto',
  };
  // Data
  const InvoiceData = [
    {
      id: 1,
      img: img,
      product: 'Product1',
      unitPrice: 2000,
      gst: 18,
      qty: 2,
      shippingType: 'COD',
      shippingCost: 80,
    },
  ];

  const renderedInvoiceData = InvoiceData.map((data, index) => {
    return (
      <div
        key={`${data.product}-${data.id}-${index}`}
        className="flex flex-col gap-[1rem]"
      >
        <div className="flex flex-row items-center border-b pb-[10px] pt-[1rem] text-center text-[18px]">
          <h4 className="w-[16.66%]">{data.id}</h4>
          <div className="flex w-[16.66%] flex-row items-center gap-[10px]">
            <img className="h-[40px] w-[40px]" src={img} alt="img" />
            <h4>{data.product}</h4>
          </div>

          <h4 className="w-[16.66%]">₹ {data.unitPrice}</h4>
          <h4 className="w-[16.66%]">
            {data.gst}% / ₹ {(data.gst / 100) * data.unitPrice}
          </h4>
          <h4 className="w-[16.66%]">{data.qty}</h4>
          <h4 className="w-[16.66%]">
            ₹ {(data.unitPrice + data.gst) * data.qty}
          </h4>
        </div>

        <div>
          <div className="flex w-full flex-row border-b pb-[10px] pt-[1rem] text-center text-[18px] font-semibold">
            <h4 className="w-[25%]">Payment Method</h4>
            <h4 className="w-[25%]">Sub Total</h4>
            <h4 className="w-[25%]">Shipping Cost</h4>
            <h4 className="w-[25%]">Grand Total</h4>
          </div>
        </div>
        <div className="flex w-full flex-row items-center border-b pb-[10px] pt-[1rem] text-center text-[18px]">
          <h4 className="w-[25%]">{data.shippingType}</h4>

          <h4 className="w-[25%]">
            ₹ {(data.unitPrice + data.gst) * data.qty}
          </h4>
          <h4 className="w-[25%]">₹ {data.shippingCost}</h4>
          <h4 className="w-[25%]">
            ₹ {(data.unitPrice + data.gst) * data.qty + data.shippingCost}
          </h4>
        </div>
      </div>
    );
  });
  return (
    <div
      className="order-details-section flex flex-col"
      style={scrollModalStyle}
    >
      {/* Order Details Page Header */}
      <div className="flex flex-row items-center justify-between border-b px-[1rem] py-[1rem]">
        <div className="flex flex-col gap-[1rem]">
          <div className="flex flex-row gap-[1rem]">
            <h4>Invoice</h4>
            <p className="text-blue-300">#Order1234</p>
          </div>
          <div className="flex flex-row gap-[1rem]">
            <h5>Order Date</h5>
            <p>20,May,2023</p>
          </div>
          <div className="flex flex-row items-center">
            <MdLocationOn />
            <p>Location</p>
          </div>
        </div>

        {/* <div className="cursor-pointer rounded-full bg-green-500 p-[1rem] hover:bg-green-600">
          <HiDownload className="text-[22px] text-white" />
        </div> */}
      </div>
      {/* Order Details End */}

      <div className="flex flex-row justify-between border-b px-[1rem] py-[2rem]">
        <div className="flex w-[60%] flex-col gap-[0.6rem]">
          <h3 className="text-[22px] font-semibold">Customer Info</h3>
          <p>Name:</p>
          <p>Email:</p>
          <p>Phone:</p>
          <p>Delivery Type:</p>
        </div>
        <div className="flex w-[40%] flex-row">
          <div className="flex flex-row border-r">
            <div className="flex flex-col p-[2rem]">
              <h3 className="font-semibold">Shipping Address</h3>
              <p>Lorem ipsum dolor sit amet consectetur</p>
            </div>
          </div>
          <div className="flex flex-row">
            <div className="flex flex-col p-[2rem]">
              <h3 className="font-semibold">Billing Address</h3>
              <p>Lorem ipsum dolor sit amet consectetur</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col px-[1rem] py-[2rem]">
        <div className="flex flex-row border-b pb-[10px] pt-[1rem] text-center text-[18px] font-semibold">
          <h4 className="w-[16.66%]">S/N</h4>
          <h4 className="w-[16.66%]">Products</h4>
          <h4 className="w-[16.66%]">Unit Price</h4>
          <h4 className="w-[16.66%]">GST</h4>
          <h4 className="w-[16.66%]">QTY</h4>
          <h4 className="w-[16.66%]">Total Price</h4>
        </div>
        {renderedInvoiceData}
      </div>
    </div>
  );
}
