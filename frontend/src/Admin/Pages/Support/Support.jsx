import React from 'react';
import TableWithDropdown from '../../components/Table/TableWithDropdown';

export default function Support() {
  const tableHeads = ['Id', 'Name', 'Email', 'Phone', 'Issue'];
  const tableData = [
    {
      id: 1,
      name: 'Dr. Arman',
      email: 'example@example.com',
      phone: '1234567890',
      issue: 'Repair',

      message: [
        {
          date: '2020-01-05',
          customerId: '11091700',
          msg: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur debitis obcaecati commodi dolorum impedit est quaerat asperiores nobis ducimus sint facilis voluptas eos reiciendis iusto, maiores odio, temporibus animi pariatur?',
        },
        {
          date: '2020-01-02',
          customerId: 'Anonymous',
          msg: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur debitis obcaecati commodi dolorum impedit est quaerat asperiores nobis ducimus sint facilis voluptas eos reiciendis iusto, maiores odio, temporibus animi pariatur?',
        },
      ],
    },
    {
      id: 2,
      name: 'Dr. Aquib',
      email: 'example@example.com',
      phone: '1234567890',
      issue: 'Repair',

      message: [
        {
          date: '2020-01-05',
          customerId: '11091700',
          msg: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur debitis obcaecati commodi dolorum impedit est quaerat asperiores nobis ducimus sint facilis voluptas eos reiciendis iusto, maiores odio, temporibus animi pariatur?',
        },
        {
          date: '2020-01-02',
          customerId: 'Anonymous',
          msg: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur debitis obcaecati commodi dolorum impedit est quaerat asperiores nobis ducimus sint facilis voluptas eos reiciendis iusto, maiores odio, temporibus animi pariatur?',
        },
      ],
    },
  ];
  return (
    <div className="products-page flex flex-col gap-[2rem] p-[1rem]">
      <div className="products-page-head flex flex-row items-center justify-between p-[1rem] shadow-lg">
        <h3 className="text-[22px] font-semibold">Support</h3>
      </div>
      <TableWithDropdown tableData={tableData} tableHeads={tableHeads} />
    </div>
  );
}
