import React from 'react';
import './LatestAppointmentTable.css';
// import { BsArrowRightShort } from 'react-icons/bs';
// import TablePage from '../../Pages/TablePage';
import Table from '../../components/Table';
// import { BsEyeFill } from 'react-icons/bs';

export default function LatestAppointmentTable() {
  //Table
  const data = [
    {
      id: '1',
      patientsName: 'Mr Arman',
      age: 33,
      doctorsName: 'Dr Aquib',
      department: '',
      date: '',
      time: '',
      disease: '',
    },
  ];

  const config = [
    {
      label: 'S/N',
      render: (list) => list.id,
      sortValue: (list) => list.id,
    },
    {
      label: 'Patients Name',
      render: (list) => list.patientsName,
      sortValue: (list) => list.patientsName,
    },
    {
      label: 'Age',
      render: (list) => list.age,
      sortValue: (list) => list.age,
    },
    {
      label: 'Doctor Name',
      render: (list) => list.doctorsName,
      sortValue: (list) => list.doctorsName,
    },
    {
      label: 'Department',
      render: (list) => list.department,
      sortValue: (list) => list.department,
    },
    {
      label: 'Date',
      render: (list) => list.date,
      sortValue: (list) => list.date,
    },
    {
      label: 'Time',
      render: (list) => list.time,
      sortValue: (list) => list.time,
    },
    {
      label: 'Disease',
      render: (list) => list.disease,
      sortValue: (list) => list.disease,
    },
  ];

  const keyFn = (list) => {
    return list.id;
  };

  return (
    <div className="admin-section-latestAppoint flex flex-col gap-[1rem]">
      <div className="flex flex-row justify-between">
        <h3 className="admin-heading-sm">Latest Appointment List</h3>
        {/* <div className="flex cursor-pointer flex-row items-center">
          <h4>View All</h4>
          <BsArrowRightShort className="text-[2rem]" />
        </div> */}
      </div>
      <div>
        <Table data={data} config={config} keyFn={keyFn} />
      </div>
    </div>
  );
}
