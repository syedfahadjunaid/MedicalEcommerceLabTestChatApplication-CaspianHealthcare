import React from 'react';
// import Button from '../../components/Button';
// import { BsEyeFill } from 'react-icons/bs';
// import Table from '../../components/Table';
import LatestAppointmentTable from '../../components/LatestApointmentTable/LatestAppointmentTable';

export default function Appointments() {
  //Table
  // const data = [
  //   {
  //     id: '1',
  //     patientsName: 'Mr Arman',
  //     age: 33,
  //     doctorsName: 'Dr Aquib',
  //     department: '',
  //     date: '',
  //     time: '',
  //     disease: '',
  //   },
  // ];

  // const config = [
  //   {
  //     label: 'S/N',
  //     render: (list) => list.id,
  //     sortValue: (list) => list.id,
  //   },
  //   {
  //     label: 'Patients Name',
  //     render: (list) => list.patientsName,
  //     sortValue: (list) => list.patientsName,
  //   },
  //   {
  //     label: 'Age',
  //     render: (list) => list.age,
  //     sortValue: (list) => list.age,
  //   },
  //   {
  //     label: 'Doctor Name',
  //     render: (list) => list.doctorsName,
  //     sortValue: (list) => list.doctorsName,
  //   },
  //   {
  //     label: 'Department',
  //     render: (list) => list.department,
  //     sortValue: (list) => list.department,
  //   },
  //   {
  //     label: 'Date',
  //     render: (list) => list.date,
  //     sortValue: (list) => list.date,
  //   },
  //   {
  //     label: 'Time',
  //     render: (list) => list.time,
  //     sortValue: (list) => list.time,
  //   },
  //   {
  //     label: 'Disease',
  //     render: (list) => list.disease,
  //     sortValue: (list) => list.disease,
  //   },
  // ];

  // const keyFn = (list) => {
  //   return list.name;
  // };
  return (
    <div className="products-page flex flex-col gap-[2rem] p-[1rem]">
      <div className="products-page-head flex flex-row items-center justify-between p-[1rem] shadow-lg">
        <h3 className="text-[22px] font-semibold">Appointments</h3>
      </div>
      {/* <Table data={data} config={config} keyFn={keyFn} /> */}
      <LatestAppointmentTable />
    </div>
  );
}
