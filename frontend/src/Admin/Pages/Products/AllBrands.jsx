import React, { useEffect } from "react";
import ProductsPage from "./ProductsPage";
// import { BsEyeFill } from 'react-icons/bs';
import { useState } from "react";
// import Switch from 'react-switch';
import SwitchButton from "../../components/SwitchButton";
import Button from "../../components/Button";
import DialogBox from "../../components/DIalogBox/DialogBox";
// import Modal from "../../components/Modal";
// import DragDropComponent from '../../components/DragDropComponent/DragDropComponent';

import { useContext } from "react";
import DataContext from "../../../context api/StateProvider";
import axios from "axios";
import { Delete, Edit } from "@mui/icons-material";
import { Box, CircularProgress, Modal, Typography } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";

export default function AllBrands() {
  // const [isChecked, setIsChecked] = useState(false);
  // console.log(process.env.React_App_Base_Url,'process.env.React_App_Base_Url')
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
  };
  const csrfToken = document
    .querySelector('meta[name="csrf-token"]')
    .getAttribute("content");

  const [open, setOpen] = useState(false);
  const handleOpen1 = () => {
    setOpen(true);
  };
  const handleClose1 = () => {
    setOpen(false);
  };
  const [open1, setOpen1] = useState(false);
  const handleOpen = () => setOpen1(true);
  const handleClose = () => setOpen1(false);
  const [open2, setOpen2] = useState(false);
  const handleOpen2 = () => setOpen2(true);
  const handleClose2 = () => setOpen2(false);
  const [isLoading, setIsLoading] = useState(false);
  const [allBrands, setAllBrands] = useState();
  const [brandName, setBrandName] = useState("");
  const [brandImage, setBrandImage] = useState([]);
  const [brandId, setBrandId] = useState();
  const getAllBrandsHandle = async () => {
    const { data } = await axios
      .get(`${process.env.React_App_Base_Url + "brands"}`, {
        headers: { "Content-type": "multipart/form-date" },
      })
      .then((response) => response, setIsLoading(true))
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
    setAllBrands(data && data?.data);

    console.log(data, "data");
  };
  const addNewBrand = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", brandImage);
    formData.append("brand_name", brandName);
    const data = await axios
      .post(`${process.env.React_App_Base_Url + "brands"}`, formData, {
        headers: {
          "Content-type": "multipart/form-date",
          common: {
            "X-CSRF-TOKEN": csrfToken,
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
    handleClose1();
    getAllBrandsHandle();

    console.log(data);
  };
  const editBrandHandle = async (id) => {
    handleOpen2();
    const { data } = await axios
      .get(`${process.env.React_App_Base_Url + "brands/" + id}`, {
        headers: { "Content-type": "multipart/form-date" },
      })
      .then((response) => response, setIsLoading(true))
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
    setBrandName(data && data?.data?.brandname);
    setBrandId(data && data?.data?.id);
    console.log(data, "single blog");
  };
  const updateBrandHandle = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", brandImage);
    formData.append("brand_name", brandName);
    const data = await axios
      .post(
        `${process.env.React_App_Base_Url + "Update-Brand/" + brandId}`,
        formData,
        {
          headers: {
            "Content-type": "multipart/form-date",
          },
        }
      )
      .then((response) => response, setIsLoading(true))
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
    handleClose2();

    console.log(data, "update");
  };
  const deleteBrandHandle = async () => {
    const data = await axios
      .delete(`${process.env.React_App_Base_Url + "brands/" + brandId}`, {
        headers: { "Content-type": "application/json" },
      })
      .then((response) => response, setIsLoading(true), handleClose())
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
    if (data?.status === 200) {
      notify();
    }
    if (data?.status !== 200) {
      notify1();
    }
    console.log(data, "delete");

    getAllBrandsHandle();
  };
  useEffect(() => {
    getAllBrandsHandle();
  }, []);
  const notify = () => toast.success("Successfully Submitted!");
  const notify1 = () => toast.warning("Something Went Wrong!");
  useEffect(() => {
    console.log(brandImage, brandName, window.CSRF_TOKEN, csrfToken);
  }, [brandImage, brandName]);
  const { handleCreateBrands, brands, deleteBrandById, editBrandById } =
    useContext(DataContext);

  // Add Brand States

  // const handleCreateBrandSubmit = () => {
  //   handleCreateBrands({ brandName: brandName, brandImage: brandImage });
  //   setBrandName('');
  // };

  const [editBrandName, setEditBrandName] = useState(brands.brandName);
  const [editBrandImage, setEditBrandImage] = useState(brands.brandImage);

  const [editId, setEditId] = useState(null);

  // const handleEditBrandSubmit = () => {
  //   editBrandById(editId, editBrandName, editBrandImage);
  //   setEditBrandName('');
  // };

  const editBrandPage = (
    <div className='update-product-section flex flex-col gap-[1rem] p-[1rem]'>
      <form className='flex w-full flex-col gap-[1rem]' onSubmit={addNewBrand}>
        <label htmlFor=''>Brand Name</label>

        <input
          className='border p-[1rem]'
          type='text'
          placeholder='Type Brand Name...'
          onChange={(event) => setEditBrandName(event.target.value)}
        />

        <label htmlFor=''>Upload Brand Image</label>
        <input
          type='file'
          onChange={(event) => setEditBrandImage(event.target.files[0])}
        />
        {/* <Button
        // onClick={handleEditBrandSubmit}
        
        success
        className="w-fit hover:bg-green-700"
      >
        Save Now
      </Button> */}
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
      </form>
    </div>
  );

  //Modal
  const modalContent = (
    <div className='update-product-section flex flex-col gap-[1rem] p-[1rem]'>
      <form className='flex w-full flex-col gap-[1rem]' onSubmit={addNewBrand}>
        <label htmlFor=''>Brand Name</label>

        <input
          value={brandName}
          className='border p-[1rem]'
          type='text'
          placeholder='Type Brand Name...'
          onChange={(event) => setBrandName(event.target.value)}
        />

        <label htmlFor=''>Upload Brand Image</label>
        <input
          type='file'
          onChange={(event) => setBrandImage(event.target.files[0])}
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
        <button
          // onClick={handleCreateBrandSubmit}
          type='submit'
          className='button w-fit hover:bg-green-700'>
          Add New Brands
        </button>
      </form>
    </div>
  );

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

  // const modal = (
  //   <Modal
  //     modalHeading={"Update Brand"}
  //     onClose={closeModal}
  //     actionBar={actionBar}
  //   >
  //     {editBrandPage}
  //   </Modal>
  // );

  //Dropdown
  const [selectedOption, setSelectedOption] = useState(null);
  const handleSelect = (option) => {
    setSelectedOption(option);
  };

  const options = [
    { label: "Option1", value: "opt1" },
    { label: "Option2", value: "opt2" },
    { label: "Option3", value: "opt3" },
  ];

  //Table

  // /----------Dialog

  const handleClickOpenDialog = (id) => {
    setOpen({ open: true, id: id });
  };
  const data = brands;

  const config = [
    {
      label: "S/N",
      render: (list) => list.id,
      sortValue: (list) => list.id,
    },
    {
      label: "Brands Name",
      render: (list) => list.brandName,
      sortValue: (list) => list.brandName,
    },
    {
      label: "Image",
      render: (list) => <img src={list.brandImage} alt={list.brandName} />,
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
            onClick={() => handleClick(list.id)}
            primary
            className='flex w-[100px] justify-center text-center'>
            Edit
          </Button>
          <Button
            danger
            className='flex w-[100px] justify-center text-center'
            onClick={() => handleClickOpenDialog(list.id)}>
            Delete
          </Button>
        </div>
      ),
      sortValue: (list) => list.price,
    },
  ];

  const keyFn = (list) => {
    return list.id;
  };
  return (
    <div className=''>
      {/* <button onClick={notify1}>send notification</button> */}
      {/* <ProductsPage
        name={"All Brands"}
        options={options}
        handleSelect={handleSelect}
        selectedOption={selectedOption}
        data={data}
        config={config}
        keyFn={keyFn}
        modalContent={modalContent}
        modalHeading={"Add New Brand"}
        addBtn={"Add Brand"}
      />
      <DialogBox open={open} setOpen={setOpen} data={deleteBrandById} /> */}

      {/* {showModal && modal} */}

      <div className='products-page flex flex-col gap-[2rem] p-[1rem]'>
        <div className='products-page-head flex flex-row items-center justify-between p-[1rem] shadow-lg'>
          <h3 className='text-[22px] font-semibold'>All Brands</h3>
          <div className='flex flex-row gap-[2rem]'>
            {/* <Dropdown
            options={options}
            onChange={handleSelect}
            value={selectedOption}
          /> */}
            <Button
              onClick={handleOpen1}
              className='flex h-[3.5rem] w-48 flex-row items-center justify-center gap-[4px] rounded-[0.25rem] bg-green-500 text-white shadow hover:bg-green-600'>
              <p>Add Brand</p>
            </Button>
            {/* {showModal && modal} */}
          </div>
        </div>
        {/* <Table data={data?.data} config={config} keyFn={keyFn} /> */}
      </div>
      <div className='adminorderpage_table_table'>
        <table>
          <thead>
            <tr>
              <th>S/L</th>
              <th style={{ width: "250px" }}>IMG</th>
              <th>Brand Name</th>
              <th>Published</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {allBrands &&
              allBrands?.map((item, index) => (
                <tr key={item?.id}>
                  <td>{index + 1}</td>
                  <td style={{ width: "250px" }}>
                    <img
                      src={process.env.React_App_Base_Image_Url + item?.image}
                      alt='brand'
                      style={{
                        width1: "100px",
                        height: "80px",
                        objectFit: "contain",
                      }}
                    />
                  </td>
                  <td>{item?.brandname}</td>
                  <td>
                    <label className='switch'>
                      <input type='checkbox' checked />
                      <span className='slider round'></span>
                    </label>
                  </td>
                  <td>
                    <Edit
                      style={{
                        color: "#6E798C",
                        marginLeft: "5px",
                        marginRight: "5px",
                        cursor: "pointer",
                      }}
                      onClick={() => editBrandHandle(item?.id)}
                    />
                    <Delete
                      style={{
                        color: "#6E798C",
                        marginLeft: "5px",
                        marginRight: "5px",
                        cursor: "pointer",
                      }}
                      onClick={() => handleOpen(setBrandId(item?.id))}
                    />
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
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
        open={open1}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'>
        <Box sx={style1}>
          <Typography id='modal-modal-title' variant='h6' component='h2'>
            Are You Sure ?
          </Typography>
          <Typography id='modal-modal-description' sx={{ mt: 2 }}>
            <button className='button-cancel' onClick={handleClose}>
              Cancel
            </button>
            <button className='button-proceed' onClick={deleteBrandHandle}>
              Proceed
            </button>
          </Typography>
        </Box>
      </Modal>
      <Modal
        open={open2}
        onClose={handleClose2}
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
          <form className='modal_form' onSubmit={updateBrandHandle}>
            <Typography id='transition-modal-title' variant='h6' component='h2'>
              Edit Brand
            </Typography>
            <p className='modal_form_para'>Brand Name</p>
            <span>
              <input
                type='text'
                placeholder='brand name'
                value={brandName}
                onChange={(e) => setBrandName(e.target.value)}
                required
              />
            </span>
            <p className='modal_form_para'>Brand Image</p>
            <input
              type='file'
              accept='image/*'
              required
              onChange={(e) => setBrandImage(e.target.files[0])}
            />

            <button className='modal_form_buttom'>Update Brand</button>
          </form>
        </Box>
      </Modal>
      <Modal
        open={open}
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
          <form className='modal_form' onSubmit={addNewBrand}>
            <Typography id='transition-modal-title' variant='h6' component='h2'>
              Add Brand
            </Typography>
            <p className='modal_form_para'>Brand Name</p>
            <span>
              <input
                type='text'
                placeholder='brand name'
                value={brandName}
                onChange={(e) => setBrandName(e.target.value)}
                required
              />
            </span>
            <p className='modal_form_para'>Brand Image</p>
            <input
              type='file'
              accept='image/*'
              required
              onChange={(e) => setBrandImage(e.target.files[0])}
            />

            <button className='modal_form_buttom'>Add Brand</button>
          </form>
        </Box>
      </Modal>
    </div>
  );
}
