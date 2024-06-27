import React from 'react';

export default function DangerCard({ value }) {
  return (
    <div className="flex w-full flex-row justify-center">
      <div className="w-fit rounded-[8px] bg-red-500 p-2 text-white">
        {value}
      </div>
    </div>
  );
}
