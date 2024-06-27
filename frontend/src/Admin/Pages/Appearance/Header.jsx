import React from 'react';
// import { BsEyeFill } from 'react-icons/bs';
import AppearancePage from './AppearancePage';
import { useState } from 'react';
// import Switch from 'react-switch';
import SwitchButton from '../../components/SwitchButton';
import Button from '../../components/Button';
// import DialogBox from '../../components/DIalogBox/DialogBox';
import Modal from '../../components/Modal';
// import DragDropComponent from '../../components/DragDropComponent/DragDropComponent';

import { useContext } from 'react';
import DataContext from '../../../context api/StateProvider';

export default function Header() {
  // const [isChecked, setIsChecked] = useState(false);

  const { header, editHeaderById } = useContext(DataContext);

  const [editUpperNavLinkTitle, setEditUpperNavLinkTitle] = useState(
    header.upperHeaderLinkName
  );
  const [editUpperNavLinkImage, setEditUpperNavLinkImage] = useState(
    header.upperHeaderLinkImage
  );

  const [editId, setEditId] = useState(null);
  const handleEditSubmit = (e) => {
    e.preventDefault();
    editHeaderById(editId, editUpperNavLinkTitle, editUpperNavLinkImage);
  };
  console.log(editId);

  const updateProductModalStyle = {
    maxHeight: 'calc(100vh - 10rem)',
    overflowY: 'auto',
  };

  ////////////Modal - Update Product
  const [showModal, setShowModal] = useState(false);

  const formContent = (
    <div className="" style={updateProductModalStyle}>
      <h2 className="border-b p-[1rem] text-[22px] font-semibold">
        Topbar Links
      </h2>
      <form action="" className="flex flex-col gap-[1rem] p-[1rem]">
        <label htmlFor="">Name</label>
        <input
          value={editUpperNavLinkTitle}
          className="border p-[1rem]"
          type="text"
          placeholder="Enter Name"
          onChange={(event) => setEditUpperNavLinkTitle(event.target.value)}
        />

        <label htmlFor="">Image</label>
        <input
          type="file"
          onChange={(event) => setEditUpperNavLinkImage(event.target.files[0])}
        />
        {/* <div className="flex flex-row items-center justify-center border-[1px] border-dashed border-[#1f1f1f] px-[3rem] py-[2rem]">
          <label
            htmlFor="imgUpload"
            className="border-[1px] border-dashed border-[#1f1f1f] px-[2rem] py-[1rem] text-[20px] font-semibold"
          >
            +
          </label>
          <input
            className="hidden"
            type="file"
            id="imgUpload"
            name="img"
            placeholder="Upload An Image..."
          />
        </div> */}

        {/* <div className="flex flex-row items-center justify-center border-[1px] border-dashed border-[#1f1f1f] px-[3rem] py-[2rem]">
          <label
            htmlFor="imgUpload"
            className="border-[1px] border-dashed border-[#1f1f1f] px-[2rem] py-[1rem] text-[20px] font-semibold"
          >
            +
          </label>
          <input
            className="hidden"
            type="file"
            id="imgUpload"
            name="img"
            placeholder="Upload An Image..."
          />
        </div> */}
        <Button
          onClick={handleEditSubmit}
          className="w-fit rounded-[8px] bg-green-500 hover:bg-green-600"
        >
          Save Now
        </Button>
      </form>
    </div>
  );

  const handleClick = (id) => {
    setShowModal(true);
    setEditId(id);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const actionBar = (
    <div>
      <Button onClick={closeModal} primary>
        Close
      </Button>
    </div>
  );

  const modal = (
    <Modal
      modalHeading={'Navbar Categories'}
      onClose={closeModal}
      actionBar={actionBar}
    >
      {formContent}
    </Modal>
  );
  // Modal End

  //Form 2
  // const formContent1 = (
  //   <div className="border">
  //     <h2 className="border-b p-[1rem] text-[22px] font-semibold">
  //       Add New Slider
  //     </h2>
  //     <form action="" className="flex flex-col gap-[1rem] p-[1rem]">
  //       <label htmlFor="">Upload Brand Image</label>
  //       <div className="flex flex-row items-center justify-center border-[1px] border-dashed border-[#1f1f1f] px-[3rem] py-[2rem]">
  //         <label
  //           htmlFor="imgUpload"
  //           className="border-[1px] border-dashed border-[#1f1f1f] px-[2rem] py-[1rem] text-[20px] font-semibold"
  //         >
  //           +
  //         </label>
  //         <input
  //           className="hidden"
  //           type="file"
  //           id="imgUpload"
  //           name="img"
  //           placeholder="Upload An Image..."
  //         />
  //       </div>
  //       <Button className="w-fit rounded-[8px] bg-green-500 hover:bg-green-600">
  //         Save Now
  //       </Button>
  //     </form>
  //   </div>
  // );
  //Table
  // /----------Dialog
  // const [open, setOpen] = React.useState(false);
  // const handleClickOpenDialog = (id) => {
  //   setOpen({ open: true, id: id });
  // };
  const data = header;

  const config = [
    {
      label: 'S/N',
      render: (list) => list.id,
      sortValue: (list) => list.id,
    },
    {
      label: 'Name',
      render: (list) => list.upperHeaderLinkName,
      sortValue: (list) => list.upperHeaderLinkName,
    },
    {
      label: 'Image',
      render: (list) => (
        <img src={list.upperHeaderLinkImage} alt={list.upperHeaderLinkName} />
      ),
    },
    {
      label: 'Published',
      render: (list) => <SwitchButton />,
      sortValue: (list) => <SwitchButton />,
    },
    {
      label: 'Action',
      render: (list) => (
        <div className="flex flex-col items-center justify-center gap-[10px]">
          <Button
            onClick={() => handleClick(list.id)}
            primary
            className="flex w-[100px] justify-center text-center"
          >
            Edit
          </Button>
          {/* <Button
            danger
            className="flex w-[100px] justify-center text-center"
            onClick={() => handleClickOpenDialog(list.id)}
          >
            Delete
          </Button> */}
        </div>
      ),
      sortValue: (list) => list.price,
    },
  ];

  const keyFn = (list) => {
    return list.id;
  };
  return (
    <div>
      <AppearancePage
        name={'Hero Section Configuration'}
        data={data}
        config={config}
        keyFn={keyFn}
        addBtnhide={'hidden'}
        // form={formContent}
      />
      {/* <div className="p-[1rem]">{formContent1}</div> */}
      {/* <DialogBox open={open} setOpen={setOpen} data={deleteHeaderById} /> */}
      {showModal && modal}
    </div>
  );
}
