import React, { useEffect } from "react";
// import { BsEyeFill } from 'react-icons/bs';
import AppearancePage from "./AppearancePage";
import { useState } from "react";
// import Switch from 'react-switch';
import Button from "../../components/Button";
import DialogBox from "../../components/DIalogBox/DialogBox";
// import Modal from "../../components/Modal";
// import DragDropComponent from '../../components/DragDropComponent/DragDropComponent';

// import rectImage from '../../assets/invoiceImg.jpg';

import { useContext } from "react";
import DataContext from "../../../context api/StateProvider";
import { Delete, Edit } from "@mui/icons-material";
import axios from "axios";
import { Box, CircularProgress, Modal, Typography } from "@mui/material";

export default function Homepage() {
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

  const {
    homepage,
    handleCreateHomepage,
    deleteHomepageById,
    editHomepageById,
  } = useContext(DataContext);
  const [isLoading, setIsLoading] = useState();
  const [allBanner, setAllBanner] = useState();
  const [allCategory, setAllCategory] = useState();
  const [selectedCategory, setSelectedCategory] = useState();
  const [homepageTitle, setHomepageTitle] = useState("");
  const [homepageLink, setHomepageLink] = useState("");
  const [homepageAltTag, setHomepageAltTag] = useState("");
  const [homepageImage, setHomepageImage] = useState([]);
  const [homepageId,setHomepageId]=useState()

  const [editHomepageTitle, setEditHomepageTitle] = useState(
    homepage.homepageTitle
  );
  const [editHomepageLink, setEditHomepageLink] = useState(
    homepage.homepageLink
  );
  const [editHomepageAltTag, setEditHomepageAltTag] = useState(
    homepage.homepageAltTag
  );
  const [editHomepageImage, setEditHomepageImage] = useState(
    homepage.homepageImage
  );

  const [editId, setEditId] = useState(null);
  const getAllcategory = async () => {
    const { data } = await axios
      .get(`${process.env.React_App_Base_Url + "categories"}`, {
        headers: { "Content-type": "multipart/form-date" },
      })
      .then((response) => response, setIsLoading(true))
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
    // setTotalBlog(data && data);
    setAllCategory(data && data?.data);
    console.log(data, "category");
  };

  const getAllBanner = async () => {
    const { data } = await axios
      .get(`${process.env.React_App_Base_Url + "Get-all-homepage"}`, {
        headers: { "Content-type": "multipart/form-date" },
      })
      .then((response) => response, setIsLoading(true))
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
    // setTotalBlog(data && data);
    setAllBanner(data && data?.homepage);
    console.log(data, "banner");
  };
  const addNewBanner = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", homepageTitle);
    formData.append("link", homepageLink);
    formData.append("alt_tag", homepageAltTag);
    formData.append("category_id", selectedCategory);
    formData.append("image", homepageImage);
    const { data } = await axios
      .post(`${process.env.React_App_Base_Url + "Create-homepage"}`, formData, {
        headers: { "Content-type": "multipart/form-date" },
      })
      .then((response) => response, setIsLoading(true), handleClose())
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
    getAllBanner();
    console.log(data);
  };
  const getSingleBanner = async (id) => {
    handleOpen1();
    const { data } = await axios
      .get(`${process.env.React_App_Base_Url + "Get-One-homepage/" + id}`, {
        headers: { "Content-type": "multipart/form-date" },
      })
      .then((response) => response, setIsLoading(true))
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
    setHomepageTitle(data && data[0]?.title);
    setHomepageAltTag(data && data[0]?.alt_tag);
    setHomepageLink(data && data[0]?.link);
    setHomepageId(data && data[0]?.id)
    

    console.log(data, "single blog");
  };
  const updateSinglebanner = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", homepageTitle);
    formData.append("link", homepageLink);
    formData.append("alt_tag", homepageAltTag);
    formData.append("category_id", selectedCategory);
    formData.append("image", homepageImage);
    const data = await axios
      .post(
        `${process.env.React_App_Base_Url + "Update-homeopage/" + homepageId}`,
        formData,
        {
          headers: { "Content-type": "multipart/form-date" },
        }
      )
      .then((response) => response, setIsLoading(true))
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
      console.log(data)
      handleClose1()
    getAllBanner();
  };
  const deleteBannerhandle = async () => {
    handleClose2()
    const data = await axios
      .post(`${process.env.React_App_Base_Url + "Delete-homepage/"+ homepageId}`, {
        headers: { "Content-type": "multipart/form-date" },
      })
      .then((response) => response, setIsLoading(true))
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
      console.log(data)
      handleClose2()
    getAllBanner();
  };
  useEffect(() => {
    getAllcategory();
    getAllBanner();
  }, []);
  const handleCreateHomepageSliderSubmit = (e) => {
    e.preventDefault();
    handleCreateHomepage({
      homepageTitle: homepageTitle,
      homepageLink: homepageLink,
      homepageAltTag: homepageAltTag,
      homepageImage: homepageImage,
    });
    setHomepageTitle("");
    setHomepageLink("");
    setHomepageAltTag("");
  };

  const handleEditHomepageSliderSubmit = (e) => {
    e.preventDefault();
    editHomepageById(
      editId,
      editHomepageTitle,
      editHomepageLink,
      editHomepageAltTag,
      editHomepageImage
    );
    setEditHomepageTitle("");
    setEditHomepageLink("");
    setEditHomepageAltTag("");
  };

  const updateProductModalStyle = {
    maxHeight: "calc(100vh - 10rem)",
    overflowY: "auto",
  };

  // Modal - New
  const modalContentMain = (
    <div className="border" style={updateProductModalStyle}>
      <h2 className="border-b p-[1rem] text-[22px] font-semibold">
        Add New Slider
      </h2>
      <form action="" className="flex flex-col gap-[1rem] p-[1rem]">
        <label htmlFor="">Title</label>
        <input
          value={homepageTitle}
          className="border p-[1rem]"
          type="text"
          placeholder="Enter Title"
          onChange={(event) => setHomepageTitle(event.target.value)}
        />

        <label htmlFor="">Link</label>
        <input
          value={homepageLink}
          className="border p-[1rem]"
          type="text"
          placeholder="Enter Link"
          onChange={(event) => setHomepageLink(event.target.value)}
        />

        <label htmlFor="">Alt Tag</label>
        <input
          value={homepageAltTag}
          className="border p-[1rem]"
          type="text"
          placeholder="Enter Alt Tag"
          onChange={(event) => setHomepageAltTag(event.target.value)}
        />

        <label htmlFor="">Image</label>
        <input
          type="file"
          onChange={(event) => setHomepageImage(event.target.files[0])}
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
      </form>
      <Button
        onClick={handleCreateHomepageSliderSubmit}
        className="w-fit rounded-[8px] bg-green-500 hover:bg-green-600"
      >
        Save Now
      </Button>
    </div>
  );
  // Modal End ------------------------------------------------

  //Modal - Edit-----------------------------------------------
  const editModalContent = (
    <div className="border" style={updateProductModalStyle}>
      <h2 className="border-b p-[1rem] text-[22px] font-semibold">
        Add New Slider
      </h2>
      <form action="" className="flex flex-col gap-[1rem] p-[1rem]">
        <label htmlFor="">Title</label>
        <input
          value={editHomepageTitle}
          className="border p-[1rem]"
          type="text"
          placeholder="Enter Title"
          onChange={(event) => setEditHomepageTitle(event.target.value)}
        />

        <label htmlFor="">Link</label>
        <input
          value={editHomepageLink}
          className="border p-[1rem]"
          type="text"
          placeholder="Enter Link"
          onChange={(event) => setEditHomepageLink(event.target.value)}
        />

        <label htmlFor="">Alt Tag</label>
        <input
          value={editHomepageAltTag}
          className="border p-[1rem]"
          type="text"
          placeholder="Enter Alt Tag"
          onChange={(event) => setEditHomepageAltTag(event.target.value)}
        />

        <label htmlFor="">Image</label>
        <input
          type="file"
          onChange={(event) => setEditHomepageImage(event.target.files[0])}
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
      </form>
      <Button
        onClick={handleEditHomepageSliderSubmit}
        className="w-fit rounded-[8px] bg-green-500 hover:bg-green-600"
      >
        Save Now
      </Button>
    </div>
  );

  ////////////Modal - Update Product
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
  //     modalHeading={"Update Slider"}
  //     onClose={closeModal}
  //     actionBar={actionBar}
  //   >
  //     {editModalContent}
  //   </Modal>
  // );
  // Modal End

  //Table
  // /----------Dialog

  const handleClickOpenDialog = (id) => {
    setOpen({ open: true, id: id });
  };
  const data = homepage;

  const config = [
    {
      label: "S/N",
      render: (list) => list.id,
      sortValue: (list) => list.id,
    },
    {
      label: "Image",
      render: (list) => (
        <div className="flex flex-row justify-center">
          <img
            className="h-[50px] w-[50px] rounded-full"
            src={list.homepageImage}
            alt={list.homepageAltTag}
          />
        </div>
      ),
    },
    {
      label: "Title",
      render: (list) => list.homepageTitle,
      sortValue: (list) => list.homepageTitle,
    },
    {
      label: "Sub Title",
      render: (list) => list.homepageLink,
      sortValue: (list) => list.homepageLink,
    },
    {
      label: "Action",
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
      sortValue: (list) => list.price,
    },
  ];

  const keyFn = (list) => {
    return list.id;
  };
  return (
    <div>
      <div className="products-page flex flex-col gap-[2rem] p-[1rem]">
        <div className="products-page-head flex flex-row items-center justify-between p-[1rem] shadow-lg">
          <h3 className="text-[22px] font-semibold">All Banner</h3>
          <div className="flex flex-row gap-[2rem]">
            {/* <Dropdown
            options={options}
            onChange={handleSelect}
            value={selectedOption}
          /> */}
            <Button
              onClick={handleOpen}
              className="flex h-[3.5rem] w-48 flex-row items-center justify-center gap-[4px] rounded-[0.25rem] bg-green-500 text-white shadow hover:bg-green-600"
            >
              <p>Add Banner</p>
            </Button>
          </div>
        </div>
        {/* <Table data={data?.data} config={config} keyFn={keyFn} /> */}
      </div>
      <div className="adminorderpage_table_table">
        <table>
          <thead>
            <tr>
              <th>S/N</th>
              <th style={{ width: "250px" }}>Banner Image</th>
              <th>Banner Title</th>
              <th>Banner Atl Tag</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {allBanner?.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td style={{ width: "250px" }}>
                  <img
                    src={process.env.React_App_Base_Image_Url + item?.image}
                    alt="Banner"
                    style={{
                      width1: "100px",
                      height: "80px",
                      objectFit: "contain",
                    }}
                  />
                  {/* <p>Category Name</p> */}
                </td>
                <td>{item?.title}</td>
                <td>{item?.alt_tag}</td>
                {/* <td>
                  <label className="switch">
                    <input type="checkbox" checked />
                    <span className="slider round"></span>
                  </label>
                </td> */}
                <td>
                  <Edit
                    style={{
                      color: "#6E798C",
                      marginLeft: "5px",
                      marginRight: "5px",
                      cursor: "pointer",
                    }}
                    onClick={() => getSingleBanner(item?.id)}
                  />
                  <Delete
                    style={{
                      color: "#6E798C",
                      marginLeft: "5px",
                      marginRight: "5px",
                      cursor: "pointer",
                    }}
                    onClick={() => [handleOpen2(),setHomepageId(item?.id)]}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
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
          <form className="modal_form" onSubmit={addNewBanner}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              Add Banner
            </Typography>
            <p className="modal_form_para">Banner Title</p>
            <span>
              <input
                type="text"
                placeholder="Banner Title"
                onChange={(e) => setHomepageTitle(e.target.value)}
                required
              />
            </span>
            <p className="modal_form_para">Category</p>
            <span>
              <select
                onChange={(e) => setSelectedCategory(e.target.value)}
                required
              >
                <option>Select One Option</option>
                {allCategory?.map((item) => (
                  <option key={item?.id} value={item?.id}>
                    {item?.categorieName}
                  </option>
                ))}
              </select>
            </span>
            <p className="modal_form_para">Banner Alt Tag</p>
            <span>
              <input
                type="text"
                placeholder="Banner Alt Tag"
                onChange={(e) => setHomepageAltTag(e.target.value)}
                required
              />
            </span>
            <p className="modal_form_para">Banner Link</p>
            <span>
              <input
                type="text"
                placeholder="Banner Link"
                onChange={(e) => setHomepageLink(e.target.value)}
                required
              />
            </span>
            <p className="modal_form_para">Banner Img</p>
            <input
              type="file"
              onChange={(e) => setHomepageImage(e.target.files[0])}
            />

            <button className="modal_form_buttom">Add Banner</button>
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
          <form className="modal_form" onSubmit={updateSinglebanner}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              Update Banner
            </Typography>
            <p className="modal_form_para">Banner Title</p>
            <span>
              <input
                type="text"
                placeholder="Banner Title"
                value={homepageTitle}
                onChange={(e) => setHomepageTitle(e.target.value)}
                required
              />
            </span>
            <p className="modal_form_para">Category</p>
            <span>
              <select
                onChange={(e) => setSelectedCategory(e.target.value)}
                required
              >
                <option>Select One Option</option>
                {allCategory?.map((item) => (
                  <option key={item?.id} value={item?.id}>
                    {item?.categorieName}
                  </option>
                ))}
              </select>
            </span>
            <p className="modal_form_para">Banner Alt Tag</p>
            <span>
              <input
                type="text"
                placeholder="Banner Alt Tag"
                value={homepageAltTag}
                onChange={(e) => setHomepageAltTag(e.target.value)}
                required
              />
            </span>
            <p className="modal_form_para">Banner Link</p>
            <span>
              <input
                type="text"
                placeholder="Banner Link"
                value={homepageLink}
                onChange={(e) => setHomepageLink(e.target.value)}
                required
              />
            </span>
            <p className="modal_form_para">Banner Img</p>
            <input
              type="file"
              onChange={(e) => setHomepageImage(e.target.files[0])}
            />

            <button className="modal_form_buttom">Update Banner</button>
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
            <button className="button-proceed" onClick={deleteBannerhandle}>
              Proceed
            </button>
          </Typography>
        </Box>
      </Modal>
      {isLoading && (
        <Box sx={style}>
          <CircularProgress />
        </Box>
      )}
    </div>
  );
}
