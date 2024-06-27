import React, { useEffect } from "react";
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

import { useGetLabsQuery } from "../../../services/labs";
import { useGetLabCategoriesQuery } from "../../../services/labCategory";
import {
  useCreateLabTestMutation,
  useGetLabTestsQuery,
  useUpdateLabTestByIdMutation,
} from "../../../services/labTests";

import axios from "axios";

import { ToastContainer, toast } from "react-toastify";

export default function LabAddRemove() {
  const responseGetLabs = useGetLabsQuery();
  const responseGetLabCategories = useGetLabCategoriesQuery();
  const responseGetTestLab = useGetLabTestsQuery();

  const [updateLabTestById, responseUpdateLabTestById] =
    useUpdateLabTestByIdMutation();
  // const [createLabTest, responseCreateLabTest] = useCreateLabTestMutation();

  // const { testData, setTestData } = useState();

  const notify = () => toast.success("Successfully Submitted!");
  const notify1 = () => toast.warning("Something Went Wrong!");

  // const [isChecked, setIsChecked] = useState(false);
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

  const [TestName, setTestName] = useState("");
  const [TestShortDescription, setTestShortDescription] = useState("");
  const [labCategoryId, setLabCategoryId] = useState("");
  const [labId, setLabId] = useState("");
  const [TestImage, setTestImage] = useState("");
  const [TestPrice, setTestPrice] = useState("");
  const [TestSKU, setTestSKU] = useState("");
  const [TestMRP, setTestMRP] = useState("");

  const [testId, setTestId] = useState("");

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

  // const [editLabName, setEditLabName] = useState(labs.labName);
  // const [editLabCategoryName, setEditLabCategoryName] = useState(
  //   labs.labCategoryName
  // );
  // const [editLabBrandName, setEditLabBrandName] = useState(labs.labBrandName);
  // const [editLabImage, setEditLabImage] = useState(labs.labImage);

  const [isLoading, setIsLoading] = useState(false);

  const handleAddSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("name", TestName);
    formData.append("short_discription", TestShortDescription);
    formData.append("lab_categoryid", labCategoryId);
    formData.append("lab_nameid", labId);
    formData.append("price", TestPrice);
    formData.append("sku", TestSKU);
    formData.append("mrp", TestMRP);
    formData.append("thumbnail", TestImage);

    // console.log(formData);

    const data = await axios
      .post(`${process.env.React_App_Base_Url + "Create-labtest"}`, formData, {
        headers: {
          "Content-type": "multipart/form-data",
          
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

    setTestName("");
    setTestShortDescription("");
    setLabCategoryId("");
    setLabId("");
    setTestImage("");
    setTestPrice("");
    setTestSKU("");
    setTestMRP("");

    handleClose();

    responseGetTestLab.refetch();
  };

  const [editId, setEditId] = useState(null);
  const handleEditSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("name", TestName);
    formData.append("short_discription", TestShortDescription);
    formData.append("lab_categoryid", labCategoryId);
    formData.append("lab_nameid", labId);
    formData.append("price", TestPrice);
    formData.append("sku", TestSKU);
    formData.append("mrp", TestMRP);
    formData.append("thumbnail", TestImage);

    // const updateData = {
    //   id: testId,
    //   updateData: formData,
    // };
    // updateLabTestById(updateData);

    const data = await axios
      .post(
        `${process.env.React_App_Base_Url + "Update-labtest/" + testId}`,
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

    setTestName("");
    setTestShortDescription("");
    setLabCategoryId("");
    setLabId("");
    setTestImage("");
    setTestPrice("");
    setTestSKU("");
    setTestMRP("");

    handleClose1();

    responseGetTestLab.refetch();
    // editLabsById(
    //   editId,
    //   editLabName,
    //   editLabCategoryName,
    //   editLabBrandName,
    //   editLabImage
    // );
    // setEditLabName("");
    // setEditLabCategoryName("");
    // setEditLabBrandName("");
  };

  const handleDelete = async (id) => {
    const data = await axios
      .post(`${process.env.React_App_Base_Url + "Delete-labtest/" + id}`, {
        headers: { "Content-type": "application/json" },
      })
      .then((response) => response, setIsLoading(true), handleClose2())
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
    if (data?.status === 200) {
      notify();
    }
    if (data?.status !== 200) {
      notify1();
    }

    responseGetTestLab.refetch();
  };
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

  // const modal = (
  //   <Modal onClose={closeModal} actionBar={actionBar}>
  //     <div
  //       className="appearance-page flex flex-col gap-[2rem] p-[1rem]"
  //       style={modalStyle}
  //     >
  //       <div className="products-page-head flex flex-row items-center justify-between p-[1rem] shadow-lg">
  //         <h3 className="text-[22px] font-semibold">Add New Lab</h3>
  //       </div>
  //       <form action="" className="flex flex-col gap-[2rem] p-[1rem]">
  //         <div className="flex flex-col gap-[10px]">
  //           <label htmlFor="">Lab Name</label>
  //           <input
  //             value={labName}
  //             type="text"
  //             placeholder="Enter Lab Name"
  //             className="border p-[1rem]"
  //             onChange={(e) => setLabName(e.target.value)}
  //           />
  //         </div>
  //         <div className="flex flex-col gap-[10px]">
  //           <label htmlFor="">Lab Category Name</label>
  //           <input
  //             value={labCategoryName}
  //             type="text"
  //             placeholder="Enter Lab Category Name"
  //             className="border p-[1rem]"
  //             onChange={(e) => setLabCategoryName(e.target.value)}
  //           />
  //         </div>
  //         <div className="flex flex-col gap-[10px]">
  //           <label htmlFor="">Brand Name</label>
  //           <input
  //             value={labBrandName}
  //             type="text"
  //             placeholder="Enter Brand Name"
  //             className="border p-[1rem]"
  //             onChange={(e) => setLabBrandName(e.target.value)}
  //           />
  //         </div>
  //         <div className="flex flex-col gap-[10px]">
  //           <label htmlFor="">Upload Photo</label>
  //           <input
  //             type="file"
  //             onChange={(e) => setLabImage(e.target.files[0])}
  //           />
  //         </div>
  //         <Button
  //           onClick={handleAddSubmit}
  //           success
  //           className="w-fit hover:bg-green-700"
  //         >
  //           Save Now
  //         </Button>
  //       </form>
  //     </div>
  //   </Modal>
  // );

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

  // const modal1 = (
  //   <Modal onClose={closeModal1} actionBar={actionBar1}>
  //     <div
  //       className="appearance-page flex flex-col gap-[2rem] p-[1rem]"
  //       style={modalStyle1}
  //     >
  //       <div className="products-page-head flex flex-row items-center justify-between p-[1rem] shadow-lg">
  //         <h3 className="text-[22px] font-semibold">Edit Lab</h3>
  //       </div>
  //       <form action="" className="flex flex-col gap-[2rem] p-[1rem]">
  //         <div className="flex flex-col gap-[10px]">
  //           <label htmlFor="">Lab Name</label>
  //           <input
  //             type="text"
  //             placeholder="Enter Lab Name"
  //             className="border p-[1rem]"
  //             onChange={(e) => setEditLabName(e.target.value)}
  //           />
  //         </div>
  //         <div className="flex flex-col gap-[10px]">
  //           <label htmlFor="">Lab Category Name</label>
  //           <input
  //             type="text"
  //             placeholder="Enter Lab Category Name"
  //             className="border p-[1rem]"
  //             onChange={(e) => setEditLabCategoryName(e.target.value)}
  //           />
  //         </div>
  //         <div className="flex flex-col gap-[10px]">
  //           <label htmlFor="">Brand Name</label>
  //           <input
  //             type="text"
  //             placeholder="Enter Brand Name"
  //             className="border p-[1rem]"
  //             onChange={(e) => setEditLabBrandName(e.target.value)}
  //           />
  //         </div>
  //         <div className="flex flex-col gap-[10px]">
  //           <label htmlFor="">Upload Photo</label>
  //           <input
  //             type="file"
  //             onChange={(e) => setEditLabImage(e.target.files[0])}
  //           />
  //         </div>
  //         <Button
  //           onClick={handleEditSubmit}
  //           success
  //           className="w-fit hover:bg-green-700"
  //         >
  //           Save Now
  //         </Button>
  //       </form>
  //     </div>
  //   </Modal>
  // );

  //Table
  // /----------Dialog

  const handleClickOpenDialog = (id) => {
    setOpen({ open: true, id: id });
  };

  // console.log(testData);
  // console.log(responseGetTestLab);
  // const data = testData;
  // console.log(responseGetTestLab?.data?.data);
  // const data = testData;

  const config = [
    {
      label: "S/N",
      render: (list) => list.id,
      sortValue: (list) => list.id,
    },
    {
      label: "Product Name",
      render: (list) => list.name,
      sortValue: (list) => list.name,
    },
    {
      label: "Price",
      render: (list) => list.price,
      sortValue: (list) => list.price,
    },
    {
      label: "MRP",
      render: (list) => list.mrp,
      sortValue: (list) => list.mrp,
    },
    {
      label: "Lab Image",
      render: (list) => (
        <div className='flex w-full flex-row justify-center'>
          <img
            className='h-[100px] w-[100px]'
            src={`${process.env.React_App_Base_Image_Url}${list.thumbnail}`}
            alt={`${list.name}-img`}
          />
        </div>
      ),
    },
    // {
    //   label: "Published",
    //   render: (list) => (
    //     <label className='switch'>
    //       <input type='checkbox' checked />
    //       <span className='slider round'></span>
    //     </label>
    //   ),
    //   sortValue: (list) => (
    //     <label className='switch'>
    //       <input type='checkbox' checked />
    //       <span className='slider round'></span>
    //     </label>
    //   ),
    // },
    {
      label: "Action",
      render: (list) => (
        <div className='flex flex-col items-center justify-center gap-[10px]'>
          <Button
            onClick={() => {
              setTestName(list.name);
              setTestShortDescription(list.short_discription);
              setLabCategoryId(list.lab_categoryid);
              setLabId(list.lab_nameid);
              setTestPrice(list.price);
              setTestMRP(list.mrp);
              setTestSKU(list.sku);
              setTestId(list.id);
              handleOpen1();
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
      // sortValue: (list) => list.price,
    },
  ];

  const keyFn = (list) => {
    return list.name;
  };
  return (
    <>
      {!responseGetTestLab.isLoading && (
        <div className='products-page flex flex-col gap-[2rem] p-[1rem]'>
          <div className='products-page-head flex flex-row items-center justify-between p-[1rem] shadow-lg'>
            <h3 className='text-[22px] font-semibold'>All Lab Test</h3>
            <Button
              onClick={handleOpen}
              className='flex h-[3rem] w-48 flex-row items-center justify-center gap-[4px] rounded-[0.25rem] bg-green-500 text-white shadow hover:bg-green-600'>
              <p>Add New Lab Test</p>
            </Button>
          </div>
          <Table
            data={responseGetTestLab?.data?.data ? responseGetTestLab?.data?.data : []}
            config={config}
            keyFn={keyFn}
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
              <form className='modal_form' onSubmit={handleAddSubmit}>
                <Typography
                  id='transition-modal-title'
                  variant='h6'
                  component='h2'>
                  Add Lab Test
                </Typography>
                <p className='modal_form_para'>Test Name</p>
                <span>
                  <input
                    type='text'
                    placeholder='Test Name'
                    value={TestName}
                    onChange={(e) => setTestName(e.target.value)}
                    required
                  />
                </span>
                <p className='modal_form_para'>Short Description</p>
                <span>
                  <textarea
                    rows={5}
                    placeholder='Short Description'
                    value={TestShortDescription}
                    onChange={(e) => setTestShortDescription(e.target.value)}
                    required
                  />
                </span>
                <p className='modal_form_para'>Thumbnail</p>
                <input
                  type='file'
                  accept='image/png, image/jpg'
                  required
                  onChange={(e) => setTestImage(e.target.files[0])}
                />
                <p className='modal_form_para'>Lab Category</p>
                <span>
                  <select
                    // onChange={(e) => setSelectedCategory(e.target.value)}
                    required>
                    {/* <option>Select One Option</option> */}
                    {responseGetLabCategories?.data?.data?.map((item) => (
                      <option
                        key={item?.id}
                        // value={labCategoryId}
                        onClick={() => setLabCategoryId(item?.id)}>
                        {item?.category_name}
                      </option>
                    ))}
                  </select>
                </span>
                <p className='modal_form_para'>Lab Name</p>
                <span>
                  <select
                    // onChange={(e) => setLabId(e.target.value)}
                    required>
                    {/* <option>Select One Option</option> */}
                    {responseGetLabs?.data?.Labs?.map((item) => (
                      <option
                        key={item?.id}
                        // value={labId}
                        onClick={() => setLabId(item?.id)}>
                        {item?.lab_name}
                      </option>
                    ))}
                  </select>
                </span>
                <p className='modal_form_para'>Price,Mrp,Sku Code</p>
                <div className='modal_form_div'>
                  <span>
                    <input
                      type='number'
                      placeholder='Price'
                      value={TestPrice}
                      required
                      onChange={(e) => setTestPrice(e.target.value)}
                    />
                  </span>
                  <span>
                    <input
                      type='number'
                      placeholder='Mrp'
                      value={TestMRP}
                      required
                      onChange={(e) => setTestMRP(e.target.value)}
                    />
                  </span>
                  <span>
                    <input
                      type='text'
                      placeholder='Sku Code'
                      value={TestSKU}
                      required
                      onChange={(e) => setTestSKU(e.target.value)}
                    />
                  </span>
                </div>
                <button className='modal_form_buttom'>Add Lab Test</button>
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
                  Edit Lab Test
                </Typography>
                <p className='modal_form_para'>Test Name</p>
                <span>
                  <input
                    type='text'
                    placeholder='Test Name'
                    value={TestName}
                    onChange={(e) => setTestName(e.target.value)}
                    required
                  />
                </span>
                <p className='modal_form_para'>Short Description</p>
                <span>
                  <textarea
                    rows={5}
                    placeholder='Short Description'
                    value={TestShortDescription}
                    onChange={(e) => setTestShortDescription(e.target.value)}
                    required
                  />
                </span>
                <p className='modal_form_para'>Thumbnail</p>
                <input
                  type='file'
                  accept='image/png, image/jpg'
                  required
                  onChange={(e) => setTestImage(e.target.files[0])}
                />
                <p className='modal_form_para'>Lab Category</p>
                <span>
                  <select
                    // onChange={(e) => setSelectedCategory(e.target.value)}
                    required>
                    {responseGetLabCategories?.data?.data?.map((item) => (
                      <option
                        key={item?.id}
                        value={labCategoryId}
                        onClick={() => setLabCategoryId(item?.id)}>
                        {item?.category_name}
                      </option>
                    ))}
                  </select>
                </span>
                <p className='modal_form_para'>Lab Name</p>
                <span>
                  <select
                    // onChange={(e) => setSelectedCategory(e.target.value)}
                    required>
                    {responseGetLabs?.data?.Labs?.map((item) => (
                      <option
                        key={item?.id}
                        value={labId}
                        onClick={() => setLabId(item?.id)}>
                        {item?.lab_name}
                      </option>
                    ))}
                  </select>
                </span>
                <p className='modal_form_para'>Price,Mrp,Sku Code</p>
                <div className='modal_form_div'>
                  <span>
                    <input
                      type='number'
                      placeholder='Price'
                      value={TestPrice}
                      required
                      onChange={(e) => setTestPrice(e.target.value)}
                    />
                  </span>
                  <span>
                    <input
                      type='number'
                      placeholder='Mrp'
                      value={TestMRP}
                      required
                      onChange={(e) => setTestMRP(e.target.value)}
                    />
                  </span>
                  <span>
                    <input
                      type='text'
                      placeholder='Sku Code'
                      value={TestSKU}
                      required
                      onChange={(e) => setTestSKU(e.target.value)}
                    />
                  </span>
                </div>
                <button className='modal_form_buttom'>Update Lab Test</button>
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
                <button onClick={handleDelete} className='button-proceed'>
                  Proceed
                </button>
              </Typography>
            </Box>
          </Modal>
        </div>
      )}
    </>
  );
}
