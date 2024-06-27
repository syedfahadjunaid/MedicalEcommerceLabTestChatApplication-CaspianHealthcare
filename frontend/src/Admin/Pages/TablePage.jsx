import Table from '../components/Table';
// import SortableTable from '../components/SortableTable';
// import { FaSort, FaSortUp, FaSortDown } from 'react-icons/fa';

import { BsEyeFill } from 'react-icons/bs';

function TablePage() {
  // Sorting icons
  // const sortingIcons = {
  //   ascending: <FaSortUp />,
  //   descending: <FaSortDown />,
  //   unsorted: <FaSort />,
  // };

  // Array of data passed to table
  const data = [
    {
      id: '01',
      patientName: 'Grapes',
      age: '24',
      doctorsname: 'Dr Fahad',
      department: 'Arkham Asylum',
      date: '10-12-2023',
      time: '10:00am-12:00am',
      disease: 'cold',
      action: <BsEyeFill />,
    },
    {
      id: '02',
      patientName: 'Apple',
      age: '24',
      doctorsname: 'Dr Fahad',
      department: 'Arkham Asylum',
      date: '10-12-2023',
      time: '10:00am-12:00am',
      disease: 'cold',
      action: <BsEyeFill />,
    },
    {
      id: '03',
      patientName: 'Banana',
      age: '24',
      doctorsname: 'Dr Fahad',
      department: 'Arkham Asylum',
      date: '10-12-2023',
      time: '10:00am-12:00am',
      disease: 'cold',
      action: <BsEyeFill />,
    },
    {
      id: '04',
      patientName: 'Orange',
      age: '24',
      doctorsname: 'Dr Fahad',
      department: 'Arkham Asylum',
      date: '10-12-2023',
      time: '10:00am-12:00am',
      disease: 'cold',
      action: <BsEyeFill />,
    },
  ];

  // Array of config passed to table and sortingTable (means headers functionality)
  const config = [
    {
      label: 'Id',
      render: (list) => list.id,
      sortValue: (list) => list.id,
    },
    {
      label: 'Patient Name',
      render: (list) => list.patientName,
      sortValue: (list) => list.patientName,
    },
    {
      label: 'Age',
      render: (list) => list.age,
      sortValue: (list) => list.age,
    },
    {
      label: 'Doctors Name',
      render: (list) => list.doctorsname,
      sortValue: (list) => list.doctorsname,
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
    {
      label: 'Action',
      render: (list) => list.action,
      sortValue: (list) => list.action,
    },
  ];

  const keyFn = (list) => {
    return list.name;
  };

  // Below is returning table with sort and don't sort functionality
  return (
    <div>
      <Table data={data} config={config} keyFn={keyFn} />
    </div>
  );
}

export default TablePage;
