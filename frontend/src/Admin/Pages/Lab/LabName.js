import React from "react";
import Button from "../../components/Button";

// import Modal from '../../components/Modal';
import { useState } from "react";

import Table from "../../components/Table";
// import Switch from 'react-switch';
import SwitchButton from "../../components/SwitchButton";
import DialogBox from "../../components/DIalogBox/DialogBox";

// import DragDropComponent from '../../components/DragDropComponent/DragDropComponent';

import { useContext } from "react";
import DataContext from "../../../context api/StateProvider";
import { Box, Modal, Typography } from "@mui/material";
import { CircularProgress } from "@mui/material";

import { useCreateLabMutation, useGetLabsQuery } from "../../../services/labs";
import axios from "axios";

import { ToastContainer, toast } from "react-toastify";

import { useCookies } from "react-cookie";

export default function LabName() {
  const [createLab, responseCreateLab] = useCreateLabMutation();

  const responseGetLabs = useGetLabsQuery();
  // const [isChecked, setIsChecked] = useState(false);
  console.log(responseGetLabs);

  // const [cookies] = useCookies(["phpMyAdmin"]);

  const notify = () => toast.success("Successfully Submitted!");
  const notify1 = () => toast.warning("Something Went Wrong!");

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
    overflowY: "scroll",
  };
  const [open, setOpen] = useState(false);
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

  const { labs, handleCreateLab, deleteLabsById, editLabsById } =
    useContext(DataContext);

  const [labName, setLabName] = useState("");
  const [labCity, setLabCity] = useState("");
  const [labAddress, setLabAddress] = useState("");
  const [labImage, setLabImage] = useState("");

  const [editLabName, setEditLabName] = useState(labs.labName);
  const [editLabCategoryName, setEditLabCategoryName] = useState(
    labs.labCategoryName
  );
  const [editLabBrandName, setEditLabBrandName] = useState(labs.labBrandName);
  const [editLabImage, setEditLabImage] = useState(labs.labImage);

  const [isLoading, setIsLoading] = useState(false);
  const handleAddSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("lab_name", labName);
    formData.append("lab_category_name", "lab_category_name");
    formData.append("city", labCity);
    formData.append("address", labAddress);
    formData.append("upload_photo", labImage);
    formData.append("published", 0);

    // console.log(formData);
    const data = await axios
      .post(`${process.env.React_App_Base_Url + "Create-labs"}`, formData, {
        headers: {
          "Content-type": "multipart/form-data",
          // "x-csrf-token": document
          //   .querySelector('meta[name="csrf-token"]')
          //   .getAttribute("content"),
          common: {
            "X-CSRF-TOKEN": document
            .querySelector('meta[name="csrf-token"]')
            .getAttribute("content"),
          },
        },
      })
      .then((response) => response, setIsLoading(true))
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
    if (data?.status === 201) {
      notify();
    }
    if (data?.status !== 201) {
      notify1();
    }

    responseGetLabs.refetch();

    setEditLabName("")
    setLabAddress("")
    setLabImage("");
    setLabCity("");

    handleClose();

    // const submitData = {
    //   lab_name: labName,
    //   lab_category_name: "",
    //   city: labCity,
    //   address: labAddress,
    //   upload_photo: labImage,
    // };
    // console.log(formData);
    // createLab(formData);
    // handleCreateLab({
    //   labName: labName,
    //   labCategoryName: labCategoryName,
    //   labBrandName: labBrandName,
    //   labImage: labImage,
    // });
    // setLabName('');
    // setLabCategoryName('');
    // setLabBrandName('');
  };

  const [editId, setEditId] = useState("");

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    
    const formData = new FormData();

    formData.append("lab_name", labName);
    formData.append("lab_category_name", "lab_category_name");
    formData.append("city", labCity);
    formData.append("address", labAddress);
    formData.append("upload_photo", labImage);
    formData.append("published", 1);

    const data = await axios
      .post(
        `${process.env.React_App_Base_Url + "Update-lab/" + editId}`,
        formData,
        {
          headers: {
            "Content-type": "multipart/form-data",
          },
        }
      )
      .then((response) => response, setIsLoading(true))
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));

    if (data?.status === 201) {
      notify();
    }
    if (data?.status !== 201) {
      notify1();
    }

    responseGetLabs.refetch();
    setEditLabName("")
    setLabAddress("")
    setLabImage("");
    setLabCity("");

    handleClose1();
  };

  const handleDelete = async (id) => {
    const data = await axios
      .post(`${process.env.React_App_Base_Url + "Delete-lab/" + id}`, {
        headers: { "Content-type": "application/json" },
      })
      .then((response) => response, setIsLoading(true))
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
    if (data?.status === 200) {
      notify();
    }
    if (data?.status !== 200) {
      notify1();
    }

    responseGetLabs.refetch();

    handleClose2()
  }
  //Modal - Add New Lab
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
    maxHeight: "calc(100vh - 8rem)",
    overflowY: "auto",
  };

  //   const modal = (
  //     <Modal onClose={closeModal} actionBar={actionBar}>
  //       <div
  //         className="appearance-page flex flex-col gap-[2rem] p-[1rem]"
  //         style={modalStyle}
  //       >
  //         <div className="products-page-head flex flex-row items-center justify-between p-[1rem] shadow-lg">
  //           <h3 className="text-[22px] font-semibold">Add New Lab</h3>
  //         </div>
  //         <form action="" className="flex flex-col gap-[2rem] p-[1rem]">
  //           <div className="flex flex-col gap-[10px]">
  //             <label htmlFor="">Lab Name</label>
  //             <input
  //               value={labName}
  //               type="text"
  //               placeholder="Enter Lab Name"
  //               className="border p-[1rem]"
  //               onChange={(e) => setLabName(e.target.value)}
  //             />
  //           </div>
  //           <div className="flex flex-col gap-[10px]">
  //             <label htmlFor="">Lab Category Name</label>
  //             <input
  //               value={labCategoryName}
  //               type="text"
  //               placeholder="Enter Lab Category Name"
  //               className="border p-[1rem]"
  //               onChange={(e) => setLabCategoryName(e.target.value)}
  //             />
  //           </div>
  //           <div className="flex flex-col gap-[10px]">
  //             <label htmlFor="">Brand Name</label>
  //             <input
  //               value={labBrandName}
  //               type="text"
  //               placeholder="Enter Brand Name"
  //               className="border p-[1rem]"
  //               onChange={(e) => setLabBrandName(e.target.value)}
  //             />
  //           </div>
  //           <div className="flex flex-col gap-[10px]">
  //             <label htmlFor="">Upload Photo</label>
  //             <input
  //               type="file"
  //               onChange={(e) => setLabImage(e.target.files[0])}
  //             />
  //           </div>
  //           <Button
  //             onClick={handleAddSubmit}
  //             success
  //             className="w-fit hover:bg-green-700"
  //           >
  //             Save Now
  //           </Button>
  //         </form>
  //       </div>
  //     </Modal>
  //   );

  //Modal - Edit Lab
  const [showModal1, setShowModal1] = useState(false);
  const handleClick1 = (id) => {
    setShowModal1(true);
    setEditId(id);
  };

  const closeModal1 = () => {
    setShowModal1(false);
  };

  const actionBar1 = (
    <div>
      <Button onClick={closeModal1} primary>
        Close
      </Button>
    </div>
  );

  const modalStyle1 = {
    maxHeight: "calc(100vh - 8rem)",
    overflowY: "auto",
  };

  //   const modal1 = (
  //     <Modal onClose={closeModal1} actionBar={actionBar1}>
  //       <div
  //         className="appearance-page flex flex-col gap-[2rem] p-[1rem]"
  //         style={modalStyle1}
  //       >
  //         <div className="products-page-head flex flex-row items-center justify-between p-[1rem] shadow-lg">
  //           <h3 className="text-[22px] font-semibold">Edit Lab</h3>
  //         </div>
  //         <form action="" className="flex flex-col gap-[2rem] p-[1rem]">
  //           <div className="flex flex-col gap-[10px]">
  //             <label htmlFor="">Lab Name</label>
  //             <input
  //               type="text"
  //               placeholder="Enter Lab Name"
  //               className="border p-[1rem]"
  //               onChange={(e) => setEditLabName(e.target.value)}
  //             />
  //           </div>
  //           <div className="flex flex-col gap-[10px]">
  //             <label htmlFor="">Lab Category Name</label>
  //             <input
  //               type="text"
  //               placeholder="Enter Lab Category Name"
  //               className="border p-[1rem]"
  //               onChange={(e) => setEditLabCategoryName(e.target.value)}
  //             />
  //           </div>
  //           <div className="flex flex-col gap-[10px]">
  //             <label htmlFor="">Brand Name</label>
  //             <input
  //               type="text"
  //               placeholder="Enter Brand Name"
  //               className="border p-[1rem]"
  //               onChange={(e) => setEditLabBrandName(e.target.value)}
  //             />
  //           </div>
  //           <div className="flex flex-col gap-[10px]">
  //             <label htmlFor="">Upload Photo</label>
  //             <input
  //               type="file"
  //               onChange={(e) => setEditLabImage(e.target.files[0])}
  //             />
  //           </div>
  //           <Button
  //             onClick={handleEditSubmit}
  //             success
  //             className="w-fit hover:bg-green-700"
  //           >
  //             Save Now
  //           </Button>
  //         </form>
  //       </div>
  //     </Modal>
  //   );

  //Table
  // /----------Dialog
  const handleClickOpenDialog = (id) => {
    setOpen({ open: true, id: id });
  };

  // const data = responseGetLabs?.data?.Labs;

  const config = [
    {
      label: "S/N",
      render: (list) => list.id,
      sortValue: (list) => list.id,
    },
    {
      label: "Product Name",
      render: (list) => list.lab_name,
      sortValue: (list) => list.lab_name,
    },
    {
      label: "City",
      render: (list) => list.city,
      sortValue: (list) => list.city,
    },
    {
      label: "Address",
      render: (list) => list.address,
      sortValue: (list) => list.address,
    },
    {
      label: "Lab Image",
      render: (list) => (
        <div className='flex w-full flex-row justify-center'>
          <img
            className='h-[100px] w-[100px]'
            src={`${process.env.React_App_Base_Image_Url}${list.upload_photo}`}
            alt={`${list.lab_name}-img`}
          />
        </div>
      ),
    },
    {
      label: "Published",
      render: (list) => <SwitchButton />,
      sortValue: (list) => <SwitchButton />,
    },
    {
      label: "Action",
      render: (list) => (
        <div className='flex flex-col items-center justify-center gap-[10px]'>
          <Button
            onClick={() => {
              setLabName(list.lab_name);
              setLabCity(list.city);
              setLabAddress(list.address)
              setEditId(list.id)
              handleOpen1()
            }}
            primary
            className='flex w-[100px] justify-center text-center'>
            Edit
          </Button>
          <Button
            danger
            className='flex w-[100px] justify-center text-center'
            onClick={() => handleOpen2(list.id)}>
            Delete
          </Button>
        </div>
      ),
      sortValue: (list) => list.price,
    },
  ];

  const keyFn = (list) => {
    return list.name;
  };

  // console.log(process.env.React_App_Base_Image_Url + data[0].upload_photo);
  return (
    <>
      {!responseGetLabs.isLoading && (
        <div className='products-page flex flex-col gap-[2rem] p-[1rem]'>
          <div className='products-page-head flex flex-row items-center justify-between p-[1rem] shadow-lg'>
            <h3 className='text-[22px] font-semibold'>Lab Name</h3>
            <Button
              onClick={handleOpen}
              className='flex h-[3rem] w-48 flex-row items-center justify-center gap-[4px] rounded-[0.25rem] bg-green-500 text-white shadow hover:bg-green-600'>
              <p>Add Lab Name</p>
            </Button>
          </div>
          <Table
            keyFn={keyFn}
            data={responseGetLabs?.data?.Labs ? responseGetLabs?.data?.Labs : []}
            config={config}
          />
          <ToastContainer
            position='top-right'
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme='light'
          />
          {isLoading && (
            <Box sx={style}>
              <CircularProgress />
            </Box>
          )}
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby='modal-modal-title'
            aria-describedby='modal-modal-description'>
            <Box
              sx={style2}
              style={{
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                flexDirection: "column",
              }}>
              <form className='modal_form'>
                <Typography
                  id='transition-modal-title'
                  variant='h6'
                  component='h2'>
                  Add Lab
                </Typography>
                <p className='modal_form_para'>Lab Name</p>
                <span>
                  <input
                    type='text'
                    placeholder='Lab Name'
                    value={labName}
                    onChange={(e) => setLabName(e.target.value)}
                    required
                  />
                </span>
                <p className='modal_form_para'>Lab City</p>
                <span>
                  <input
                    type='text'
                    placeholder='Lab City'
                    value={labCity}
                    onChange={(e) => setLabCity(e.target.value)}
                    required
                  />
                </span>
                <p className='modal_form_para'>Lab Address</p>
                <span>
                  <input
                    type='text'
                    placeholder='Lab Address'
                    value={labAddress}
                    onChange={(e) => setLabAddress(e.target.value)}
                    required
                  />
                </span>
                <p className='modal_form_para'>Lab Banner Image</p>
                <input
                  type='file'
                  accept='image/png, image/jpeg'
                  onChange={(e) => setLabImage(e.target.files[0])}
                />
                <button className='modal_form_buttom' onClick={handleAddSubmit}>
                  Add Lab Name
                </button>
              </form>
            </Box>
          </Modal>
          <Modal
            open={open1}
            onClose={handleClose1}
            aria-labelledby='modal-modal-title'
            aria-describedby='modal-modal-description'>
            <Box
              sx={style2}
              style={{
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                flexDirection: "column",
              }}>
              <form className='modal_form' onSubmit={handleEditSubmit}>
                <Typography
                  id='transition-modal-title'
                  variant='h6'
                  component='h2'>
                  Update Lab
                </Typography>
                <p className='modal_form_para'>Lab Name</p>
                <span>
                  <input
                    type='text'
                    placeholder='Lab Name'
                    value={labName}
                    onChange={(e) => setLabName(e.target.value)}
                    required
                  />
                </span>
                <p className='modal_form_para'>Lab City</p>
                <span>
                  <input
                    type='text'
                    placeholder='Lab City'
                    value={labCity}
                    onChange={(e) => setLabCity(e.target.value)}
                    required
                  />
                </span>
                <p className='modal_form_para'>Lab Address</p>
                <span>
                  <input
                    type='text'
                    placeholder='Lab Address'
                    value={labAddress}
                    onChange={(e) => setLabAddress(e.target.value)}
                    required
                  />
                </span>
                <p className='modal_form_para'>Lab Banner Image</p>
                <input
                  type='file'
                  accept='image/png, image/jpeg'
                  onChange={(e) => setLabImage(e.target.files[0])}
                />

                <button className='modal_form_buttom'>Update Lab Name</button>
              </form>
            </Box>
          </Modal>
          <Modal
            open={open2}
            onClose={handleClose2}
            aria-labelledby='modal-modal-title'
            aria-describedby='modal-modal-description'>
            <Box sx={style1}>
              <Typography id='modal-modal-title' variant='h6' component='h2'>
                Are You Sure ?
              </Typography>
              <Typography id='modal-modal-description' sx={{ mt: 2 }}>
                <button className='button-cancel' onClick={handleClose2}>
                  Cancel
                </button>
                <button onClick={handleDelete} className='button-proceed'>Proceed</button>
              </Typography>
            </Box>
          </Modal>
        </div>
      )}
    </>
  );
}
