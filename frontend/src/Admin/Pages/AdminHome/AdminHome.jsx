import React from 'react';
import './AdminHome.css';

import Chart1 from '../../components/Chart1/Chart1';

import DoctorCards from '../../components/DoctorsPageCards/DoctorCards';
import LatestAppointmentTable from '../../components/LatestApointmentTable/LatestAppointmentTable';
import RecentOrdersTable from '../../components/RecentOrdersTable/RecentOrdersTable';
import DetailCards from '../../components/DetailCards/DetailCards';

// images
import icon1 from '../../assets/dashboardHomeCardsIcons/icon1.png';
import icon2 from '../../assets/dashboardHomeCardsIcons/icon2.png';
import icon3 from '../../assets/dashboardHomeCardsIcons/icon3.png';
import icon4 from '../../assets/dashboardHomeCardsIcons/icon4.png';
import icon5 from '../../assets/dashboardHomeCardsIcons/icon5.png';

export default function AdminHome() {
  return (
    <div className="admin-home-section flex flex-col gap-[2rem] p-[1rem]">
      <h2 className="text-[2rem]">
        Good Morning, <p className="text-blue-400">Dr Fahad</p>
      </h2>
      <div className="flex flex-row gap-[1rem]">
        <p>Admin</p>
        <p>|</p>
        <p>Home</p>
      </div>
      <div className="admin-home-section-cards flex flex-row gap-[1rem]">
        <div className="admin-home-section-card flex w-fit flex-row gap-[10px] rounded-[4px] bg-[#7366FF] p-[3rem] text-[#ffffff]">
          <img className="h-[50px] w-[50px]" src={icon1} alt="icon1" />
          <div>
            <h5>Earnings</h5>
            <p>6546</p>
          </div>
        </div>
        <div className="admin-home-section-card flex w-fit flex-row gap-[10px] rounded-[4px] bg-[#67A4FF] p-[3rem] text-[#ffffff]">
          <img className="h-[50px] w-[50px]" src={icon2} alt="icon2" />
          <div>
            <h5>Earnings</h5>
            <p>6546</p>
          </div>
        </div>
        <div className="admin-home-section-card flex w-fit flex-row gap-[10px] rounded-[4px] bg-[#DC3545] p-[3rem] text-[#ffffff]">
          <img className="h-[50px] w-[50px]" src={icon3} alt="icon3" />
          <div>
            <h5>Earnings</h5>
            <p>6546</p>
          </div>
        </div>
        <div className="admin-home-section-card flex w-fit flex-row gap-[10px] rounded-[4px] bg-[#B6AFFF] p-[3rem] text-[#ffffff]">
          <img className="h-[50px] w-[50px]" src={icon4} alt="icon4" />
          <div>
            <h5>Earnings</h5>
            <p>6546</p>
          </div>
        </div>
        <div className="admin-home-section-card flex w-fit flex-row gap-[10px] rounded-[4px] bg-[#3D3592] p-[3rem] text-[#ffffff]">
          <img className="h-[50px] w-[50px]" src={icon5} alt="icon5" />
          <div>
            <h5>Earnings</h5>
            <p>6546</p>
          </div>
        </div>
      </div>
      <div className="admin-home-section-chart">
        <Chart1 />
      </div>

      <DoctorCards />
      <LatestAppointmentTable />
      <RecentOrdersTable />
      <DetailCards />
    </div>
  );
}
