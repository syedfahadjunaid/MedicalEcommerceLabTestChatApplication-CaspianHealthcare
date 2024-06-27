import React from 'react';
import './DetailCards.css';

import icon1 from '../../assets/dashBoardDetailsIcons/icon1.png';
import icon2 from '../../assets/dashBoardDetailsIcons/icon2.png';
import icon3 from '../../assets/dashBoardDetailsIcons/icon3.png';
import icon4 from '../../assets/dashBoardDetailsIcons/icon4.png';
import icon5 from '../../assets/dashBoardDetailsIcons/icon5.png';
import icon6 from '../../assets/dashBoardDetailsIcons/icon6.png';
import icon7 from '../../assets/dashBoardDetailsIcons/icon7.png';
import icon8 from '../../assets/dashBoardDetailsIcons/icon8.png';
import icon9 from '../../assets/dashBoardDetailsIcons/icon9.png';
import icon10 from '../../assets/dashBoardDetailsIcons/icon10.png';
import icon11 from '../../assets/dashBoardDetailsIcons/icon11.png';

export default function DetailCards() {
  const cardsData = [
    {
      id: '01',
      img: icon1,
      value: 4,
      title: 'Out for Delivery',
    },
    {
      id: '01',
      img: icon2,
      value: 4,
      title: 'Cancelled Orders',
    },
    {
      id: '01',
      img: icon3,
      value: 4,
      title: 'Unpaid Orders',
    },
    {
      id: '01',
      img: icon4,
      value: 4,
      title: 'Paid Orders',
    },
    {
      id: '01',
      img: icon5,
      value: 4,
      title: "Today's Earning",
    },
    {
      id: '06',
      img: icon6,
      value: 4,
      title: 'Total Earning',
    },
    {
      id: '07',
      img: icon7,
      value: 4,
      title: 'Total Product Sale',
    },
    {
      id: '08',
      img: icon8,
      value: 4,
      title: 'Online User',
    },
    {
      id: '09',
      img: icon9,
      value: 4,
      title: 'Total Categories',
    },
    {
      id: '010',
      img: icon10,
      value: 4,
      title: 'Total Lab Test',
    },
    {
      id: '011',
      img: icon11,
      value: 4,
      title: 'Total Book Appointment',
    },
  ];

  const renderedCards = cardsData.map((data, index) => {
    return (
      <div
        key={`${data.title}-${index}`}
        className="admin-details-card flex w-full cursor-default flex-row items-center justify-center gap-[10px] border-[1px] border-solid border-inherit p-[1.5rem] shadow-md hover:shadow-xl"
      >
        <div className="w-[30%]">
          <img
            className="h-[60px] w-[60px]"
            src={data.img}
            alt={`${data.title}-${index}-img`}
          />
        </div>

        <div className="admin-details-card-content flex w-[70%] flex-col">
          <h3>{data.value}</h3>
          <p>{data.title}</p>
        </div>
      </div>
    );
  });
  return <div className="admin-details-cards gap-[1rem]">{renderedCards}</div>;
}
