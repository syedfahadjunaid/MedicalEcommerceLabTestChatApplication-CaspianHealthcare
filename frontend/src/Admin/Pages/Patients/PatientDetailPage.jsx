import React from 'react';
import img from '../../assets/dashboardDoctorIcons/icon1.jpg';

export default function PatientDetailPage() {
  return (
    <div className="flex flex-row gap-[1rem]">
      <div className="flex w-[40%] flex-col gap-[10px]">
        <div className="flex flex-row justify-center">
          <img
            className="h-[350px] w-[300px] rounded-[2px]"
            src={img}
            alt={`${'patientImage'}-img`}
          />
        </div>
      </div>
      <div className="flex w-[60%] flex-col gap-[1rem]">
        <h2 className="text-[22px] font-semibold">{'Patient Name'}</h2>
        <div className="flex flex-row gap-[8px]">
          <p>{22},</p>
          <p>{'Male'},</p>
          <p>19/01/2001</p>
        </div>
        <div className="flex flex-row gap-[1rem]">
          <div className="flex flex-col gap-[8px]">
            <h3 className="font-semibold">Mobile</h3>
            <p className="w-fit border-2 border-solid border-green-700 p-[8px] text-green-700">
              +91 9876543210
            </p>
          </div>
          <div className="flex flex-col gap-[8px]">
            <h3 className="font-semibold">Email</h3>
            <p className="w-fit border-2 border-solid border-green-700 p-[8px] text-green-700">
              user@gmail.com
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-[10px]">
          <p className="text-justify">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Reprehenderit voluptas delectus omnis vitae eligendi facere ut unde!
            Facere vero modi voluptatum quae reiciendis. Nesciunt quis,
            accusantium sapiente a expedita earum.
          </p>
          <p className="text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, a
            nihil? Error excepturi alias eligendi ullam asperiores nostrum!
            Corporis optio impedit ab culpa mollitia, repellat commodi ullam
            perspiciatis. Aliquam, ex?
          </p>
          <p className="text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
            nulla at temporibus suscipit, asperiores similique quas mollitia
            inventore debitis, iste non impedit libero quia possimus corrupti
            natus perferendis sit beatae.
          </p>
        </div>
      </div>
    </div>
  );
}
