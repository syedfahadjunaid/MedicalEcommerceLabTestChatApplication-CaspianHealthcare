import React, { useEffect } from "react";
import "./AllCategories";
import ProductsPage from "./ProductsPage";
// import { BsEyeFill } from 'react-icons/bs';
import { useState } from "react";
// import Switch from 'react-switch';
import SwitchButton from "../../components/SwitchButton";
import Button from "../../components/Button";
// import Modal from "../../components/Modal";
import DialogBox from "../../components/DIalogBox/DialogBox";
import Dropdown from "../../components/Dropdown";
// import DragDropComponent from '../../components/DragDropComponent/DragDropComponent';
import { useContext } from "react";
import DataContext from "../../../context api/StateProvider";
import axios from "axios";
import { Delete, Edit } from "@mui/icons-material";
import { Box, CircularProgress, Modal, Typography } from "@mui/material";
function AllSubCategory() {
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
  const {
    handleCreateCategories,
    brands,
    categories,
    deleteCategoryById,
    editCategoryById,
  } = useContext(DataContext);
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
  const [isLoading, setIsLoading] = useState(false);
  const [allSubCategory, setAllSubCategory] = useState();
  const [allCategory, setAllCategory] = useState();
  const [subCategoryName, setSubCategoryName] = useState();
  const [selectedCategory, setSelectedCategory] = useState();
  const [subCategoryId, setSubCategoryId] = useState();
  const getAllcategory = async () => {
    const { data } = await axios
      .get(`${process.env.React_App_Base_Url + "categories"}`, {
        headers: { "Content-type": "multipart/form-date" },
      })
      .then((response) => response, setIsLoading(true))
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
    setAllCategory(data && data?.data);
    console.log(data?.data, "data");
  };
  const addSubCategoryHandle = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("categorie_id", selectedCategory);
    formData.append("sub_categories_name", subCategoryName);

    const { data } = await axios
      .post(
        `${process.env.React_App_Base_Url + "Create-Sub-Category"}`,
        formData,
        {
          headers: { "Content-type": "multipart/form-date" },
        }
      )
      .then((response) => response, setIsLoading(true), handleClose())
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
    allSubCategoryHandle();
    console.log(data);
  };
  const allSubCategoryHandle = async () => {
    const { data } = await axios
      .get(`${process.env.React_App_Base_Url + "Get-all-Sub-Category"}`, {
        headers: { "Content-type": "multipart/form-date" },
      })
      .then((response) => response, setIsLoading(true))
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));

    setAllSubCategory(data && data?.sub_Categories);
    console.log(data?.sub_Categories, "sub category");
  };
  const editSubCategoryHandle = async (id) => {
    handleOpen1();
    const { data } = await axios
      .post(
        `${process.env.React_App_Base_Url + "Get-one-Sub-Category/" + id}`,
        {
          headers: { "Content-type": "multipart/form-date" },
        }
      )
      .then((response) => response, setIsLoading(true))
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
    setSubCategoryName(data && data?.sub_Category?.sub__categories_name);
    setSubCategoryId(data && data?.sub_Category?.id);
    console.log(data?.sub_Category, "single data");
  };
  const updateSubCategoryHandle = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("categorie_id", selectedCategory);
    formData.append("sub_categories_name", subCategoryName);
    const data = await axios
      .post(
        `${
          process.env.React_App_Base_Url +
          "Update-Sub-Category/" +
          subCategoryId
        }`,
        formData,
        {
          headers: { "Content-type": "multipart/form-date" },
        }
      )
      .then((response) => response, setIsLoading(true), handleClose1())
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
    allSubCategoryHandle();
    console.log(data, "update");
  };
  const deleteSubCategoryHandle = async () => {
    const data = await axios
      .post(`${process.env.React_App_Base_Url+'Delet-Sub-Category/'+subCategoryId}`, {
        headers: { "Content-type": "multipart/form-date" },
      })
      .then((response) => response, setIsLoading(true),handleClose2())
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
      allSubCategoryHandle()
      console.log(data)

  };
  useEffect(() => {
    allSubCategoryHandle();
    getAllcategory();
  }, []);
  useEffect(() => {
    console.log(subCategoryName, selectedCategory);
  }, [subCategoryName, selectedCategory]);
  // console.log(brands);
  // Add Categories States
  const [categoryName, setCategoryName] = useState("");
  // const [categoryBase, setCategoryBase] = useState('');
  const [categoryBrand, setCategoryBrand] = useState("");
  const [categoryImage, setCategoryImage] = useState([]);

  const handleCreateCategoriesSubmit = () => {
    handleCreateCategories({
      categoryName: categoryName,
      // categoryBase: categoryBase,
      categoryBrand: categoryBrand,
      categoryImage: categoryImage,
    });

    setCategoryName("");
  };

  const [editCategoryName, setEditCategoryName] = useState(
    categories.categoryName
  );
  const [editCategoryImage, setEditCategoryImage] = useState(
    categories.categoryImage
  );
  const [editCategoryBrand, setEditCategoryBrand] = useState(
    categories.categoryBrand
  );

  const [editId, setEditId] = useState(null);

  const handleEditCategoriesSubmit = () => {
    editCategoryById(
      editId,
      editCategoryName,
      editCategoryBrand,
      editCategoryImage
    );
    setEditCategoryName("");
  };

  const updateProductModalStyle = {
    maxHeight: "calc(100vh - 10rem)",
    overflowY: "auto",
  };

  //Dropdown - Base Category
  // const [selectedOption1, setSelectedOption1] = useState(null);

  // const handleSelect1 = (option) => {
  //   setSelectedOption1(option);
  //   setCategoryBase(option);
  // };

  // const options1 = [
  //   { label: 'Base Category 1', value: 'opt1' },
  //   { label: 'Base Category 2', value: 'opt2' },
  //   { label: 'Base Category 3', value: 'opt3' },
  //   { label: 'Base Category 4', value: 'opt3' },
  //   { label: 'Base Category 5', value: 'opt3' },
  // ];

  //Dropdown - Brand Category
  const [selectedOption2, setSelectedOption2] = useState(null);

  const handleSelect2 = (option) => {
    setSelectedOption2(option);
    setCategoryBrand(option);
  };

  const renderedBrandDropdownOptions = brands.map((data) => {
    return { label: data.brandName, value: data.id };
  });

  const options2 = [...renderedBrandDropdownOptions];

  //Dropdown - Edit Base Category
  // const [selectedOption3, setSelectedOption3] = useState(null);

  // const handleSelect3 = (option) => {
  //   setSelectedOption3(option);

  // };

  // const options3 = [
  //   { label: 'Base Category 1', value: 'opt1' },
  //   { label: 'Base Category 2', value: 'opt2' },
  //   { label: 'Base Category 3', value: 'opt3' },
  //   { label: 'Base Category 4', value: 'opt3' },
  //   { label: 'Base Category 5', value: 'opt3' },
  // ];

  //Dropdown - Edit Brand Category
  const [selectedOption4, setSelectedOption4] = useState(null);

  const handleSelect4 = (option) => {
    setSelectedOption4(option);
    setEditCategoryBrand(option);
  };

  const options4 = [...renderedBrandDropdownOptions];

  const editCategoriesPage = (
    <div
      className="update-product-section flex flex-col gap-[10px] p-[1rem]"
      style={updateProductModalStyle}
    >
      <div className="update-product-section-heading">
        <h3 className="text-[16px] font-semibold">Basic Information</h3>
      </div>
      <form action="" className="flex flex-col p-[10px]">
        <div className="flex flex-col gap-[10px] p-[1rem]">
          <label htmlFor="">Category Name</label>
          <input
            value={editCategoryName}
            type="text"
            className="rounded-[2px] border p-[1rem]"
            placeholder="Enter Category Name1"
            onChange={(event) => setEditCategoryName(event.target.value)}
          />
          {/* <p className="text-[#1f1f1f] opacity-40">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </p> */}
        </div>
        {/* <div className="flex flex-col gap-[10px] p-[1rem]">
              <label htmlFor="">Base Category</label>
              <Dropdown
                options={options3}
                onChange={handleSelect3}
                value={selectedOption3}
              />
              <p className="text-[#1f1f1f] opacity-40">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </p>
            </div> */}

        <div className="flex flex-col gap-[10px] p-[1rem]">
          <label htmlFor="">Brand</label>
          <Dropdown
            options={options4}
            onChange={handleSelect4}
            value={selectedOption4}
          />
          {/* <p className="text-[#1f1f1f] opacity-40">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </p> */}
        </div>

        <div className="flex flex-col gap-[10px] p-[1rem]">
          <label htmlFor="">Images</label>
          <input
            type="file"
            onChange={(event) => setEditCategoryImage(event.target.files[0])}
          />
          {/* <div className="flex flex-row items-center justify-center rounded-[8px] border-[1px] border-dashed border-[#1f1f1f] px-[3rem] py-[2rem]">
                <label
                  htmlFor="imgUpload"
                  className="rounded-[8px] border-[1px] border-dashed border-[#1f1f1f] px-[2rem] py-[1rem] text-[20px] font-semibold"
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
        </div>
      </form>
      <Button
        onClick={handleEditCategoriesSubmit}
        success
        className="w-fit hover:bg-green-700"
      >
        Save Now
      </Button>
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
  //     modalHeading={"Update Category"}
  //     onClose={closeModal}
  //     actionBar={actionBar}
  //   >
  //     {editCategoriesPage}
  //   </Modal>
  // );

  //Modal
  const modalContent = (
    <div
      className="update-product-section flex flex-col gap-[1rem] p-[1rem]"
      style={updateProductModalStyle}
    >
      <div className="update-product-section-heading">
        <h3 className="text-[16px] font-semibold">Basic Information</h3>
      </div>
      <form action="" className="flex flex-col p-[10px]">
        <div className="flex flex-col gap-[10px] p-[1rem]">
          <label htmlFor="">Category Name</label>
          <input
            value={categoryName}
            type="text"
            className="rounded-[2px] border p-[1rem]"
            placeholder="Enter Category Name..."
            onChange={(event) => setCategoryName(event.target.value)}
          />
        </div>
        {/* <div className="flex flex-col gap-[10px] p-[1rem]">
              <label htmlFor="">Base Category</label>
              <Dropdown
                options={options1}
                onChange={handleSelect1}
                value={selectedOption1}
              />
              
            </div> */}

        <div className="flex flex-col gap-[10px] p-[1rem]">
          <label htmlFor="">Brand</label>
          <Dropdown
            options={options2}
            onChange={handleSelect2}
            value={selectedOption2}
          />
          {/* <p className="text-[#1f1f1f] opacity-40">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </p> */}
        </div>

        <div className="flex flex-col gap-[10px] p-[1rem]">
          <label htmlFor="">Images</label>
          <input
            type="file"
            onChange={(event) => setCategoryImage(event.target.files[0])}
          />
          {/* <div className="flex flex-row items-center justify-center rounded-[8px] border-[1px] border-dashed border-[#1f1f1f] px-[3rem] py-[2rem]">
                <label
                  htmlFor="imgUpload"
                  className="rounded-[8px] border-[1px] border-dashed border-[#1f1f1f] px-[2rem] py-[1rem] text-[20px] font-semibold"
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
        </div>
      </form>
      <Button
        onClick={handleCreateCategoriesSubmit}
        success
        className="w-fit hover:bg-green-700"
      >
        Save Now
      </Button>
    </div>
  );

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
  const [open, setOpen] = React.useState(false);
  const data = categories;

  const config = [
    {
      label: "S/N",
      render: (list) => list.id,
      sortValue: (list) => list.id,
    },
    {
      label: "Categories Name",
      render: (list) => list.categoryName,
      sortValue: (list) => list.categoryName,
    },
    {
      label: "Brand",
      render: (list) => list.categoryBrand.label,
      sortValue: (list) => list.categoryBrand.label,
    },
    {
      label: "Image",
      render: (list) => (
        <img src={list.categoryImage} alt={list.categoryName} />
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
            // onClick={() => handleClickOpenDialog(list.id)}
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
    <div className="">
      {/* <ProductsPage
        name={"All Sub Categories"}
        options={options}
        handleSelect={handleSelect}
        selectedOption={selectedOption}
        data={data}
        config={config}
        keyFn={keyFn}
        modalContent={modalContent}
        modalHeading={"Add New Sub Category"}
        addBtn={"Add Sub Category"}
      />
      <DialogBox open={open} setOpen={setOpen} data={deleteCategoryById} />
      {showModal && modal} */}
      <div className="products-page flex flex-col gap-[2rem] p-[1rem]">
        <div className="products-page-head flex flex-row items-center justify-between p-[1rem] shadow-lg">
          <h3 className="text-[22px] font-semibold">Sub Category</h3>
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
              <p>Add Sub Category</p>
            </Button>
            {/* {showModal && modal} */}
          </div>
        </div>
        {/* <Table data={data?.data} config={config} keyFn={keyFn} /> */}
      </div>
      <div className="adminorderpage_table_table">
        <table>
          <thead>
            <tr>
              <th>S/L</th>
              <th style={{ width: "250px" }}>Category</th>
              <th>Sub Category</th>
              <th>Published</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {allSubCategory?.map((item, index) => (
              <tr key={item?.id}>
                <td>{index + 1}</td>
                <td style={{ width: "250px" }}>
                  {/* <img
                  src={process.env.React_App_Base_Image_Url + item?.image}
                  alt="brand"
                  style={{ width1: "100px", height: "50px" }}
                /> */}
                  <p>Category Name</p>
                </td>
                <td>{item.sub__categories_name}</td>
                <td>
                  <label className="switch">
                    <input type="checkbox" checked />
                    <span className="slider round"></span>
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
                    onClick={() => editSubCategoryHandle(item?.id)}
                  />
                  <Delete
                    style={{
                      color: "#6E798C",
                      marginLeft: "5px",
                      marginRight: "5px",
                      cursor: "pointer",
                    }}
                    onClick={() => handleOpen2(setSubCategoryId(item?.id))}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {isLoading && (
        <Box sx={style}>
          <CircularProgress />
        </Box>
      )}
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
          <form className="modal_form" onSubmit={addSubCategoryHandle}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              Add Sub Category
            </Typography>
            <p className="modal_form_para">Sub Category</p>
            <span>
              <input
                type="text"
                placeholder="Sub Category Name"
                onChange={(e) => setSubCategoryName(e.target.value)}
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

            <button className="modal_form_buttom">Add Sub Category</button>
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
          <form className="modal_form" onSubmit={updateSubCategoryHandle}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              Edit Sub Category
            </Typography>
            <p className="modal_form_para">Sub Category</p>
            <span>
              <input
                type="text"
                placeholder="Sub Category Name"
                value={subCategoryName}
                onChange={(e) => setSubCategoryName(e.target.value)}
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
            <button className="button-proceed" onClick={deleteSubCategoryHandle}>
              Proceed
            </button>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}

export default AllSubCategory;
