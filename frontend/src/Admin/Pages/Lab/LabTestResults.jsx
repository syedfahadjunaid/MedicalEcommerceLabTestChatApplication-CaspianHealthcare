import React from 'react';
import Button from '../../components/Button';
import Table from '../../components/Table';

// import Switch from 'react-switch';
import SwitchButton from '../../components/SwitchButton';
import { useState } from 'react';
import DragDropComponent from '../../components/DragDropComponent/DragDropComponent';
import { Box, Modal, Typography } from '@mui/material';
// import Modal from '../../components/Modal';

export default function LabTestResults() {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.transparent",
    border: "2px solid transparent",
    boxShadow: 0,
    p: 4,
    display: "flex",
    alignItem: "center",
    justifyContent: "center",
  };
  const style1 = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #fff",
    boxShadow: 24,
    p: 4,
    outline: "0",
    borderRadius: "5px",
  };
  const style2 = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 800,
    height: 550,
    bgcolor: "background.paper",
    border: "2px solid #fff",
    boxShadow: 24,
    p: 4,
    outline: "0",
    borderRadius: "5px",
    overflowY:'scroll'
  };
const [open,setOpen]=useState(false)
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen1 = () => {
    setOpen1(true);
  };
  const handleClose1 = () => {
    setOpen1(false);
  };
   const handleOpen2 = () => {
    setOpen2(true);
  };
  const handleClose2 = () => {
    setOpen2(false);
  };
  //Modal - Add New Test
  const [showModal, setShowModal] = useState(false);
  const handleClick = () => {
    setShowModal(true);
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

  const modalStyle = {
    maxHeight: 'calc(100vh - 8rem)',
    overflowY: 'auto',
  };

  // const modal = (
  //   <Modal onClose={closeModal} actionBar={actionBar}>
  //     <div
  //       className="appearance-page flex flex-col gap-[2rem] p-[1rem]"
  //       style={modalStyle}
  //     >
  //       <div className="products-page-head flex flex-row items-center justify-between p-[1rem] shadow-lg">
  //         <h3 className="text-[22px] font-semibold">Add New Test</h3>
  //       </div>
  //       <form action="" className="flex flex-col gap-[2rem] p-[1rem]">
  //         <div className="flex flex-col gap-[10px]">
  //           <label htmlFor="">Patient Name</label>
  //           <input
  //             type="text"
  //             placeholder="Enter Patient Name"
  //             className="border p-[1rem]"
  //           />
  //         </div>
  //         <div className="flex flex-col gap-[10px]">
  //           <label htmlFor="">Lab Test Name</label>
  //           <input
  //             type="text"
  //             placeholder="Enter Lab Test Name"
  //             className="border p-[1rem]"
  //           />
  //         </div>
  //         <div className="flex flex-col gap-[10px]">
  //           <label htmlFor="">Disease</label>
  //           <input
  //             type="text"
  //             placeholder="Enter Disease"
  //             className="border p-[1rem]"
  //           />
  //         </div>
  //         <div className="flex flex-col gap-[10px]">
  //           <label htmlFor="">Age</label>
  //           <input
  //             type="text"
  //             placeholder="Enter Age"
  //             className="border p-[1rem]"
  //           />
  //         </div>
  //         <div className="flex flex-col gap-[10px]">
  //           <label htmlFor="">Id</label>
  //           <input
  //             type="text"
  //             placeholder="Enter Id"
  //             className="border p-[1rem]"
  //           />
  //         </div>
  //         <div className="flex flex-col gap-[10px]">
  //           <label htmlFor="">Upload Photo</label>
  //           <DragDropComponent />
  //         </div>
  //         <Button success className="w-fit hover:bg-green-700">
  //           Save Now
  //         </Button>
  //       </form>
  //     </div>
  //   </Modal>
  // );
  // const [isChecked, setIsChecked] = useState(false);
  //Table
  const data = [
    {
      id: '1',
      productName: 'Fahad Medicine',
      brand: 'My Brand',
      categories: 'Fresh',
      price: '$30,300',
      published: true,
    },
    {
      id: '2',
      productName: 'Fahad Medicine',
      brand: 'My Brand',
      categories: 'Fresh',
      price: '$30,300',
      published: true,
    },
    {
      id: '3',
      productName: 'Fahad Medicine',
      brand: 'My Brand',
      categories: 'Fresh',
      price: '$30,300',
      published: true,
    },
    {
      id: '4',
      productName: 'Fahad Medicine',
      brand: 'My Brand',
      categories: 'Fresh',
      price: '$30,300',
      published: true,
    },
    {
      id: '5',
      productName: 'Fahad Medicine',
      brand: 'My Brand',
      categories: 'Fresh',
      price: '$30,300',
      published: true,
    },
    {
      id: '6',
      productName: 'Fahad Medicine',
      brand: 'My Brand',
      categories: 'Fresh',
      price: '$30,300',
      published: true,
    },
    {
      id: '7',
      productName: 'Fahad Medicine',
      brand: 'My Brand',
      categories: 'Fresh',
      price: '$30,300',
      published: true,
    },
    {
      id: '8',
      productName: 'Fahad Medicine',
      brand: 'My Brand',
      categories: 'Fresh',
      price: '$30,300',
      published: false,
    },
  ];

  const config = [
    {
      label: 'S/N',
      render: (list) => list.id,
      sortValue: (list) => list.id,
    },
    {
      label: 'Product Name',
      render: (list) => list.productName,
      sortValue: (list) => list.productName,
    },
    {
      label: 'Brand',
      render: (list) => list.brand,
      sortValue: (list) => list.brand,
    },
    {
      label: 'Categories',
      render: (list) => list.categories,
      sortValue: (list) => list.categories,
    },
    {
      label: 'Price',
      render: (list) => list.price,
      sortValue: (list) => list.price,
    },

    {
      label: 'Published',
      render: (list) => <SwitchButton />,
      sortValue: (list) => <SwitchButton />,
    },
  ];

  const keyFn = (list) => {
    return list.name;
  };
  return (
    <div className="products-page flex flex-col gap-[2rem] p-[1rem]">
      <div className="products-page-head flex flex-row items-center justify-between p-[1rem] shadow-lg">
        <h3 className="text-[22px] font-semibold">Lab Test Results</h3>
        <Button
          onClick={handleOpen}
          className="flex h-[3rem] w-48 flex-row items-center justify-center gap-[4px] rounded-[0.25rem] bg-green-500 text-white shadow hover:bg-green-600"
        >
          <p>Add Lab Test</p>
        </Button>
        {/* {showModal && modal} */}
      </div>
      {/* <Table data={data} config={config} keyFn={keyFn} /> */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={style2}
          style={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            flexDirection: "column",
          }}
        >
          <form className="modal_form" >
            <Typography id="transition-modal-title" variant="h6" component="h2">
              Add Test Result
            </Typography>
            <p className="modal_form_para">Patient Id</p>
            <span>
              <input
                type="text"
                placeholder="Patient Name"
                // onChange={(e) => setSubCategoryName(e.target.value)}
                required
              />
            </span> 
        
            <p className="modal_form_para">Disease</p>
            <span>
              <input
                type="text"
                placeholder="Disease"
                // onChange={(e) => setSubCategoryName(e.target.value)}
                required
              />
            </span>
              <p className="modal_form_para">Test SKU ID</p>
            <span>
              <input
                type="text"
                placeholder="Test SKU ID"
                // onChange={(e) => setSubCategoryName(e.target.value)}
                required
              />
            </span> 
            <p className="modal_form_para">Test Report Upload</p>
            <input type="file" accept="application/pdf" />
           

            <button className="modal_form_buttom">Add Lab Test</button>
          </form>
        </Box>
      </Modal>
      <Modal
        open={open1}
        onClose={handleClose1}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={style2}
          style={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            flexDirection: "column",
          }}
        >
          <form className="modal_form" >
            <Typography id="transition-modal-title" variant="h6" component="h2">
              Edit Sub Category
            </Typography>
            <p className="modal_form_para">Sub Category</p>
            <span>
              <input
                type="text"
                placeholder="Sub Category Name"
                value=''
                // onChange={(e) => setSubCategoryName(e.target.value)}
                required
              />
            </span>
            <p className="modal_form_para">Category</p>
            <span>
              <select
                // onChange={(e) => setSelectedCategory(e.target.value)}
                required
              >
                <option>Select One Option</option>
                {/* {allCategory?.map((item) => (
                  <option key={item?.id} value={item?.id}>
                    {item?.categorieName}
                  </option>
                ))} */}
              </select>
            </span>

            <button className="modal_form_buttom">Add Sub Category</button>
          </form>
        </Box>
      </Modal>
      <Modal
        open={open2}
        onClose={handleClose2}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style1}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Are You Sure ?
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <button className="button-cancel" onClick={handleClose2}>
              Cancel
            </button>
            <button className="button-proceed" >
              Proceed
            </button>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
