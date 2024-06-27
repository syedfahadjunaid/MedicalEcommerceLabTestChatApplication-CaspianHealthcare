import React from 'react';
// import { BsEyeFill } from 'react-icons/bs';
import AppearancePage from './AppearancePage';
import { useState } from 'react';
// import Switch from 'react-switch';
import Button from '../../components/Button';
// import Table from '../../components/Table';
// import DragDropComponent from '../../components/DragDropComponent/DragDropComponent';
import DialogBox from '../../components/DIalogBox/DialogBox';
import Modal from '../../components/Modal';
// import IMG from '../../assets/invoiceImg.jpg';

import { useContext } from 'react';
import DataContext from '../../../context api/StateProvider';

export default function ProductDetailsWidget() {
  const {
    productDetailsWidget,
    handleCreateProductDetailsWidget,
    deleteProductDetailsWidgetById,
    editProductDetailsWidgetById,
  } = useContext(DataContext);

  const [addProductDetailsWidgetLink, setAddProductDetailsWidgetLink] =
    useState('');
  const [addProductDetailsWidgetImage, setAddProductDetailsWidgetImage] =
    useState([]);

  const [editProductDetailsWidgetLink, setEditProductDetailsWidgetLink] =
    useState(productDetailsWidget.productDetailsWidgetLink);
  const [editProductDetailsWidgetAddImage, setEditProductDetailsWidgetImage] =
    useState(productDetailsWidget.productDetailsWidgetImage);

  const handleAddSubmit = (e) => {
    e.preventDefault();
    handleCreateProductDetailsWidget({
      productDetailsWidgetLink: addProductDetailsWidgetLink,
      productDetailsWidgetImage: addProductDetailsWidgetImage,
    });
    addProductDetailsWidgetLink('');
  };

  const [editId, setEditId] = useState(null);
  const handleEditSubmit = (e) => {
    e.preventDefault();
    editProductDetailsWidgetById(
      editId,
      editProductDetailsWidgetLink,
      editProductDetailsWidgetAddImage
    );
    editProductDetailsWidgetLink('');
  };

  const formContent = (
    <div>
      <div className="border">
        <h2 className="border-b p-[1rem] text-[22px] font-semibold">
          Add Promotional Banner
        </h2>
        <form action="" className="flex flex-col gap-[1rem] p-[1rem]">
          <label htmlFor="">Link</label>
          <input
            value={addProductDetailsWidgetLink}
            className="border p-[1rem]"
            type="text"
            placeholder="Enter Link"
            onChange={(event) =>
              setAddProductDetailsWidgetLink(event.target.value)
            }
          />
          <label htmlFor="">Upload Brand Image</label>
          <input
            type="file"
            onChange={(event) =>
              setAddProductDetailsWidgetImage(event.target.files[0])
            }
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
          <Button
            onClick={handleAddSubmit}
            className="w-fit rounded-[8px] bg-green-500 hover:bg-green-600"
          >
            Save Now
          </Button>
        </form>
      </div>
    </div>
  );

  //Table 2
  // const data1 = [
  //   {
  //     id: '1',
  //     categoriesName: 'Fahad Medicine',
  //     brand: 'My Brand',
  //     baseCategories: 'Fresh',
  //     published: true,
  //     action: '#',
  //   },
  //   {
  //     id: '2',
  //     categoriesName: 'Fahad Medicine',
  //     brand: 'My Brand',
  //     baseCategories: 'Fresh',
  //     published: true,
  //     action: '#',
  //   },
  //   {
  //     id: '3',
  //     categoriesName: 'Fahad Medicine',
  //     brand: 'My Brand',
  //     baseCategories: 'Fresh',
  //     published: true,
  //     action: '#',
  //   },
  //   {
  //     id: '4',
  //     categoriesName: 'Fahad Medicine',
  //     brand: 'My Brand',
  //     baseCategories: 'Fresh',
  //     published: true,
  //     action: '#',
  //   },
  //   {
  //     id: '5',
  //     categoriesName: 'Fahad Medicine',
  //     brand: 'My Brand',
  //     baseCategories: 'Fresh',
  //     published: true,
  //     action: '#',
  //   },
  //   {
  //     id: '6',
  //     categoriesName: 'Fahad Medicine',
  //     brand: 'My Brand',
  //     baseCategories: 'Fresh',
  //     published: true,
  //     action: '#',
  //   },
  //   {
  //     id: '7',
  //     categoriesName: 'Fahad Medicine',
  //     brand: 'My Brand',
  //     baseCategories: 'Fresh',
  //     published: true,
  //     action: '#',
  //   },
  //   {
  //     id: '8',
  //     categoriesName: 'Fahad Medicine',
  //     brand: 'My Brand',
  //     baseCategories: 'Fresh',
  //     published: true,
  //     action: '#',
  //   },
  //   {
  //     id: '9',
  //     categoriesName: 'Fahad Medicine',
  //     brand: 'My Brand',
  //     baseCategories: 'Fresh',
  //     published: true,
  //     action: '#',
  //   },
  // ];

  // const config1 = [
  //   {
  //     label: 'S/N',
  //     render: (list) => list.id,
  //     sortValue: (list) => list.id,
  //   },
  //   {
  //     label: 'Categories Name',
  //     render: (list) => list.categoriesName,
  //     sortValue: (list) => list.categoriesName,
  //   },
  //   {
  //     label: 'Brand',
  //     render: (list) => list.brand,
  //     sortValue: (list) => list.brand,
  //   },
  //   {
  //     label: 'Base Categories',
  //     render: (list) => list.baseCategories,
  //     sortValue: (list) => list.baseCategories,
  //   },

  //   {
  //     label: 'Published',
  //     render: (list) => (
  //       <Switch
  //         onChange={() => setIsChecked(!isChecked)}
  //         checked={isChecked}
  //         id={list.id}
  //       />
  //     ),
  //     sortValue: (list) => (
  //       <Switch onChange={() => setIsChecked(!isChecked)} checked={isChecked} />
  //     ),
  //   },

  //   {
  //     label: 'Action',
  //     render: (list) => (
  //       <div className="flex flex-row justify-center">
  //         <BsEyeFill className="cursor-pointer" onClick={list.action} />
  //       </div>
  //     ),
  //     sortValue: (list) => list.action,
  //   },
  // ];

  // const keyFn1 = (list) => {
  //   return list.name;
  // };

  //Form Edit
  const editModalContent = (
    <div>
      <div className="border">
        <h2 className="border-b p-[1rem] text-[22px] font-semibold">
          Edit Promotional Banner
        </h2>
        <form action="" className="flex flex-col gap-[1rem] p-[1rem]">
          <label htmlFor="">Link</label>
          <input
            value={editProductDetailsWidgetLink}
            className="border p-[1rem]"
            type="text"
            placeholder="Enter Link"
            onChange={(event) =>
              setEditProductDetailsWidgetLink(event.target.value)
            }
          />
          <label htmlFor="">Upload Brand Image</label>
          <input
            type="file"
            onChange={(event) =>
              setEditProductDetailsWidgetImage(event.target.files[0])
            }
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
          <Button
            onClick={handleEditSubmit}
            className="w-fit rounded-[8px] bg-green-500 hover:bg-green-600"
          >
            Save Now
          </Button>
        </form>
      </div>
    </div>
  );

  //Table 1
  // /----------Dialog
  const [open, setOpen] = React.useState(false);
  const handleClickOpenDialog = (id) => {
    setOpen({ open: true, id: id });
  };
  const data = productDetailsWidget;

  const config = [
    {
      label: 'S/N',
      render: (list) => list.id,
      sortValue: (list) => list.id,
    },
    {
      label: 'Image',
      render: (list) => (
        <div className="flex flex-row justify-center">
          <img
            className="h-[60px] w-[60px]"
            src={list.productDetailsWidgetImage}
            alt={`${list.productDetailsWidgetLink}-img`}
          />
        </div>
      ),
    },
    {
      label: 'Link',
      render: (list) => list.productDetailsWidgetLink,
      sortValue: (list) => list.productDetailsWidgetLink,
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
          <Button
            danger
            className="flex w-[100px] justify-center text-center"
            onClick={() => handleClickOpenDialog(list.id)}
          >
            Delete
          </Button>
        </div>
      ),
    },
  ];

  const keyFn = (list) => {
    return list.id;
  };

  // Modal
  const [showModal, setShowModal] = useState(false);

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
      modalHeading={'Edit Banner'}
      onClose={closeModal}
      actionBar={actionBar}
    >
      {editModalContent}
    </Modal>
  );
  return (
    <div>
      <AppearancePage
        name={'Product Details Widget'}
        data={data}
        config={config}
        keyFn={keyFn}
        addBtn={'Add Banner'}
        modalHeading={'Add Banner'}
        modalContent={formContent}
      />
      {/* <AppearancePage
        name={'Hero Section Configuration'}
        data={data1}
        config={config1}
        keyFn={keyFn1}
        form={formContent1}
      /> */}
      {showModal && modal}
      <DialogBox
        open={open}
        setOpen={setOpen}
        data={deleteProductDetailsWidgetById}
      />
    </div>
  );
}
