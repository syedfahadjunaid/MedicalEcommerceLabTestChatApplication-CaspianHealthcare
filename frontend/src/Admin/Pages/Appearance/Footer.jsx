import React from "react";
// import { BsEyeFill } from 'react-icons/bs';
import AppearancePage from "./AppearancePage";
import { useState } from "react";
// import Switch from 'react-switch';
import SwitchButton from "../../components/SwitchButton";
import Button from "../../components/Button";
// import MyEditor from '../../components/MyEditor/MyEditor';
// import DialogBox from '../../components/DIalogBox/DialogBox';
import { useContext } from "react";
import DataContext from "../../../context api/StateProvider";

export default function Footer() {
  // const [isChecked, setIsChecked] = useState(false);
  const { footer, editFooterById } = useContext(DataContext);

  // const [copyrightText, setCopyrightText] = useState('');

  const [editCopyrightText, setEditCopyrightText] = useState(
    footer.copyrightText
  );
  // const [quickLinks, setQuickLinks] = useState(footer[0].quickLinks);
  // const [ourPolicies, setOurPolicies] = useState(footer[0].ourPolicies);
  // const [ourServices, setOurServices] = useState(footer[0].ourServices);

  // const handleEditSubmit = (e) => {
  //   e.preventDefault();
  //   editFooterById(
  //     1,
  //     footer[0].quickLinks,
  //     footer[0].ourPolicies,
  //     footer[0].ourServices,
  //     editCopyrightText
  //   );
  // };

  const formContent = (
    <div className='border'>
      <h2 className='border-b p-[1rem] text-[22px] font-semibold'>Copyright</h2>
      <form action='' className='flex flex-col gap-[1rem] p-[1rem]'>
        <label htmlFor=''>Copyright Text</label>
        <textarea
          value={editCopyrightText}
          className='border p-[1rem]'
          type='text'
          rows={"3"}
          placeholder='Enter Copyright Text'
          onChange={(event) => setEditCopyrightText(event.target.value)}
        />
        <Button
          // onClick={handleEditSubmit}
          className='w-fit rounded-[8px] bg-green-500 hover:bg-green-600'>
          Save Now
        </Button>
      </form>
    </div>
  );

  //Table - 1 -----------------------------------
  // /----------Dialog
  // const [open, setOpen] = React.useState(false);
  // const handleClickOpenDialog = () => {
  //   setOpen(true);
  // };
  // const data = footer[0].quickLinks;
  const data = [];
  // console.log(footer[0].quickLinks);

  const config = [
    {
      label: "S/N",
      render: (list) => list.id,
      sortValue: (list) => list.id,
    },
    {
      label: "Footer Categories",
      render: (list) => list.category,
      sortValue: (list) => list.category,
    },
    {
      label: "Published",
      render: (list) => <SwitchButton />,
      sortValue: (list) => <SwitchButton />,
    },
  ];

  const keyFn = (list) => {
    return list.id;
  };

  //Table - 2 -----------------------------------
  // /----------Dialog
  // const [open1, setOpen1] = React.useState(false);
  // const handleClickOpenDialog1 = () => {
  //   setOpen1(true);
  // };
  // const data1 = footer[0].ourPolicies;
  const data1 = [];

  const config1 = [
    {
      label: "S/N",
      render: (list) => list.id,
      sortValue: (list) => list.id,
    },
    {
      label: "Footer Categories",
      render: (list) => list.category,
      sortValue: (list) => list.category,
    },
    {
      label: "Published",
      render: (list) => <SwitchButton />,
      sortValue: (list) => <SwitchButton />,
    },
  ];

  const keyFn1 = (list) => {
    return list.id;
  };

  //Table - 1 -----------------------------------
  // /----------Dialog
  // const [open2, setOpen2] = React.useState(false);
  // const handleClickOpenDialog2 = () => {
  //   setOpen2(true);
  // };
  // const data2 = footer[0].ourServices;
  const data2 = [];

  const config2 = [
    {
      label: "S/N",
      render: (list) => list.id,
      sortValue: (list) => list.id,
    },
    {
      label: "Footer Categories",
      render: (list) => list.category,
      sortValue: (list) => list.category,
    },
    {
      label: "Published",
      render: (list) => <SwitchButton />,
      sortValue: (list) => <SwitchButton />,
    },
  ];

  const keyFn2 = (list) => {
    return list.id;
  };

  return (
    <div>
      <AppearancePage
        name={"Footer Information"}
        data={data}
        config={config}
        keyFn={keyFn}
        addBtnhide={"hidden"}
      />

      <AppearancePage
        name={"Our Policies"}
        data={data1}
        config={config1}
        keyFn={keyFn1}
        addBtnhide={"hidden"}
      />

      <AppearancePage
        name={"Our Services"}
        data={data2}
        config={config2}
        keyFn={keyFn2}
        addBtnhide={"hidden"}
        form={formContent}
      />

      {/* <DialogBox open={open} setOpen={setOpen} />
      <DialogBox open={open1} setOpen={setOpen1} />
      <DialogBox open={open2} setOpen={setOpen2} /> */}
    </div>
  );
}
