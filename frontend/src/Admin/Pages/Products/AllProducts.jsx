import React, { useEffect, useRef } from "react";
import ProductsPage from "./ProductsPage";
// import { BsEyeFill } from 'react-icons/bs';
import { useState } from "react";
import SwitchButton from "../../components/SwitchButton";
// import { CiMenuKebab } from 'react-icons/ci';
import Button from "../../components/Button";
import Dropdown from "../../components/Dropdown";
// import ListComp from '../../components/ListComp/ListComp';
// import Modal from "../../components/Modal";
import DialogBox from "../../components/DIalogBox/DialogBox";
// import DragDropComponent from '../../components/DragDropComponent/DragDropComponent';
// import IMG from '../../assets/invoiceImg.jpg';
import "./ProductsPage.css";
import { useContext } from "react";
import DataContext from "../../../context api/StateProvider";
import axios from "axios";
import {
  Backdrop,
  Box,
  CircularProgress,
  Fade,
  Modal,
  Typography,
} from "@mui/material";
import { Delete, Edit } from "@mui/icons-material";
import JoditEditor from "jodit-react";
import { ToastContainer, toast } from "react-toastify";

export default function AllProducts() {
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
  const {
    handleCreateProduct,
    products,
    brands,
    categories,
    deleteProductById,
    editProductById,
  } = useContext(DataContext);
  const notify = () => toast.success("Successfully Submitted!");
  const notify1 = () => toast.warning("Something Went Wrong!");
  const editor = useRef();
  const [allProduct, setAllproduct] = useState();
  const [productName, setProductsName] = useState("");
  const [productShortDescription, setProductShortDescription] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productCategory, setProductCategory] = useState(null);
  const [productBrand, setProductBrand] = useState(null);
  const [productUnitAmount, setProductUnitAmount] = useState("");
  const [productUnit, setProductUnit] = useState(null);
  const [productPrice, setProductPrice] = useState("");
  const [productStock, setProductStock] = useState("");
  const [productCode, setProductCode] = useState("");
  const [productSubCategory, setProductSubCategory] = useState();
  const [productSubCategoryId, setProductSubCategoryId] = useState();
  const [productCategoryId, setProductCategoryId] = useState();
  const [productBrandId, setProductBrandId] = useState();
  const [productId, setProductId] = useState();
  // console.log(products);
  // Add Products States
  const [productImages, setProductImages] = useState([]);
  const [productImagePrev, setProductImagePrev] = useState([]);
  const [allCategory, setAllCategory] = useState();
  const [allSubCategory, setAllSubCategory] = useState();
  const [allBrand, setAllBrand] = useState();
  const imageHandle = (e) => {
    setProductImages([...productImages, e.target.files[0]]);
    setProductImagePrev([
      ...productImagePrev,
      URL.createObjectURL(e.target.files[0]),
    ]);
  };
  const getAllCategory = async () => {
    const { data } = await axios
      .get(`${process.env.React_App_Base_Url + "categories"}`, {
        headers: { "Content-type": "multipart/form-date" },
      })
      .then((response) => response)
      .catch((error) => console.log(error))
      .finally(() => console.log("finish"));
    setAllCategory(data && data?.data);
    console.log(data);
  };
  const getAllSubCategory = async () => {
    const { data } = await axios
      .get(
        `${
          process.env.React_App_Base_Url +
          "Get-Sub-Category-by-category/" +
          productCategoryId
        }`,
        {
          headers: { "Content-type": "multipart/form-date" },
        }
      )
      .then((response) => response, setIsLoading(true))
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
    setProductSubCategory(data && data);
    console.log(data);
  };
  const getAllBrands = async () => {
    const { data } = await axios
      .get(`${process.env.React_App_Base_Url + "brands"}`, {
        headers: { "Content-type": "multipart/form-date" },
      })
      .then((response) => response)
      .catch((error) => console.log(error))
      .finally(() => console.log("finish"));
    setAllBrand(data && data?.data);
    console.log(data);
  };
  useEffect(() => {
    getAllCategory();
    getAllBrands();
  }, []);
  useEffect(() => {
    getAllSubCategory();
  }, [productCategoryId]);

  // Edit Products States
  const [editProductName, setEditProductsName] = useState(products.productName);
  const [editProductShortDescription, setEditProductShortDescription] =
    useState(products.productShortDescription);
  const [editProductDescription, setEditProductDescription] = useState(
    products.productDescription
  );
  const [editProductImages, setEditProductImages] = useState(
    products.productImages
  );
  const [editProductCategory, setEditProductCategory] = useState(
    products.productCategory
  );
  const [editProductBrand, setEditProductBrand] = useState(
    products.productBrand
  );
  const [editProductUnitAmount, setEditProductUnitAmount] = useState(
    products.productUnitAmount
  );
  const [editProductUnit, setEditProductUnit] = useState(products.productUnit);
  const [editProductPrice, setEditProductPrice] = useState(
    products.productPrice
  );
  const [editProductStock, setEditProductStock] = useState(
    products.productStock
  );
  const [editProductCode, setEditProductCode] = useState(products.productCode);
  const [isLoading, setIsLoading] = useState(false);
  const addProductHandle = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("productName", productName);
    formData.append("shortDescription", productShortDescription);
    formData.append("description", productDescription);
    formData.append("category_id", productCategoryId);
    formData.append("sub_category_id", productSubCategoryId);
    formData.append("brand_id", productBrandId);
    formData.append("qualntity", productUnit);
    formData.append("productUnit", productUnitAmount);
    formData.append("price", productPrice);
    formData.append("stock", productStock);
    formData.append("skucode", productCode);
    formData.append("created_by", "1");
    productImages.forEach((img) => {
      formData.append("product_images[]", img);
    });
    console.log(formData);
    const { data } = await axios
      .post(`${process.env.React_App_Base_Url + "product/create"}`, formData, {
        headers: { "Content-type": "multipart/form-date" },
      })
      .then((response) => response, setIsLoading(true), handleClose())
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
    allProductHandle();
    setProductImagePrev([]);
    setProductImages([]);
    console.log(data, "product created");
  };
  const allProductHandle = async () => {
    const { data } = await axios
      .post(`${process.env.React_App_Base_Url + "product/get-all-product"}`, {
        headers: { "Content-type": "multipart/form-date" },
      })
      .then((response) => response, setIsLoading(true))
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
    setAllproduct(data && data?.product);

    console.log(data?.product, "data");
  };
  const editProductHandle = async (id) => {
    handleOpen1();
    const { data } = await axios
      .post(
        `${process.env.React_App_Base_Url + "product/get-one-product/" + id}`,
        {
          headers: { "Content-type": "multipart/form-date" },
        }
      )
      .then((response) => response, setIsLoading(true))
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
    setProductId(data?.product && data?.product?.id);
    setProductsName(data?.product && data?.product?.productName);
    setProductShortDescription(
      data?.product && data?.product?.shortDescription
    );
    setProductDescription(data?.product && data?.product?.description);
    setProductPrice(data?.product && data?.product?.price);
    setProductStock(data?.product && data?.product?.stock);
    setProductCode(data?.product && data?.product?.skucode);
    setProductUnit(data?.product && data?.product?.qualntity);
    setProductId(data?.product && data?.product?.id);
    console.log(data, "single blog");
  };
  const updateProductHandle = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("productName", productName);
    formData.append("shortDescription", productShortDescription);
    formData.append("description", productDescription);
    formData.append("category_id", productCategoryId);
    formData.append("sub_category_id", productSubCategoryId);
    formData.append("brand_id", productBrandId);
    formData.append("qualntity", productUnit);
    formData.append("productUnit", productUnitAmount);
    formData.append("price", productPrice);
    formData.append("stock", productStock);
    formData.append("skucode", productCode);
    formData.append("created_by", "1");
    productImages.forEach((img) => {
      formData.append("product_images[]", img);
    });
    const data = await axios
      .post(`${process.env.React_App_Base_Url+'product/update-product/'+productId}`, formData, {
        headers: { "Content-type": "multipart/form-date" },
      })
      .then((response) => response, setIsLoading(true))
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
      if(data?.status===201){
        notify()
      }
      if(data?.status!==201){
        notify1()
      }
    handleClose1();
    allProductHandle();
    setProductImagePrev([]);
    setProductImages([]);
    console.log(data);
  };
  const deleteProductHandle = async () => {
    const data = await axios
      .post(
        `${process.env.React_App_Base_Url + "product-delete/" + productId}`,
        {
          headers: { "Content-type": "multipart/form-date" },
        }
      )
      .then((response) => response, setIsLoading(true))
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
    if (data?.status === 200) {
      notify();
    }
    if (data?.status !== 200) {
      notify();
    }
    console.log(data);
    handleClose2();
    allProductHandle();
  };
  useEffect(() => {
    console.log(
      productName,
      productCategory,
      productSubCategoryId,
      productUnit,
      productUnitAmount
    );
  }, [
    productName,
    productCategory,
    productSubCategoryId,
    productUnit,
    productUnitAmount,
  ]);
  useEffect(() => {
    allProductHandle();
  }, []);
  // let formData = new FormData();
  const handleAddProductSubmit = (e) => {
    e.preventDefault();

    // formData.append('productName', productName);
    // formData.append('productShortDescription', productShortDescription);
    // formData.append('productDescription', productDescription);
    // formData.append('productImages', productImages);
    // formData.append('productCategory', productCategory);
    // formData.append('productBrand', productBrand);
    // formData.append('productUnitAmount', productUnitAmount);
    // formData.append('productUnit', productUnit);
    // formData.append('productPrice', productPrice);
    // formData.append('productStock', productStock);
    // formData.append('productCode', productCode);
    // console.log(formData);
    // console.log(productImages);
    // console.log(image);
    // handleCreateProduct(formData);
    handleCreateProduct({
      productName: productName,
      productShortDescription: productShortDescription,
      productDescription: productDescription,
      productImages: productImages,
      productCategory: productCategory,
      productBrand: productBrand,
      productUnitAmount: productUnitAmount,
      productUnit: productUnit,
      productPrice: productPrice,
      productStock: productStock,
      productCode: productCode,
    });
    setProductsName("");
    setProductShortDescription("");
    setEditProductDescription("");
    setProductUnitAmount("");
    setProductPrice("");
    setProductStock("");
    setProductCode("");
    setProductImages([]);
  };
  // console.log(products);

  const [editId, setEditId] = useState(null);

  const handleEditProductSubmit = () => {
    editProductById(
      editId,
      editProductName,
      editProductShortDescription,
      productDescription,
      editProductImages,
      editProductCategory,
      editProductBrand,
      editProductUnitAmount,
      editProductUnit,
      editProductPrice,
      editProductStock,
      editProductCode
    );
    setEditProductsName("");
    setEditProductCode("");
    setEditProductUnitAmount("");
    setEditProductPrice("");
    setEditProductDescription("");
    setEditProductShortDescription("");
    setEditProductStock("");
  };

  const renderedProductCategories = categories.map((data) => {
    return { label: data.categoryName, value: data.id };
  });

  // console.log(renderedProductCategories);

  const renderedProductBrand = brands.map((data) => {
    return { label: data.brandName, value: data.id };
  });

  // <img src={URL.createObjectURL(productImages)} alt="" />

  // /////Update Product -------------------------------
  const updateProductModalStyle = {
    maxHeight: "calc(100vh - 10rem)",
    overflowY: "auto",
  };

  // Add Product --
  //Dropdown - Product Categories
  const [selectedOption1, setSelectedOption1] = useState(null);
  const handleSelect1 = (option) => {
    setSelectedOption1(option);
    setProductCategory(option);
  };
  // console.log(selectedOption1);
  // console.log(productCategory);

  const options1 = [...renderedProductCategories];

  //Dropdown - Product Tags
  // const [selectedOption2, setSelectedOption2] = useState(null);
  // const handleSelect2 = (option) => {
  //   setSelectedOption2(option);
  //   setProductSubCategory(selectedOption2);
  // };

  // const options2 = [
  //   { label: 'Option1', value: 'opt1' },
  //   { label: 'Option2', value: 'opt2' },
  //   { label: 'Option3', value: 'opt3' },
  // ];

  //Dropdown - Product Brand
  const [selectedOption3, setSelectedOption3] = useState(null);
  const handleSelect3 = (option) => {
    setSelectedOption3(option);
    setProductBrand(option);
  };

  const options3 = [...renderedProductBrand];

  //Dropdown - Product Unit
  const [selectedOption4, setSelectedOption4] = useState(null);
  const handleSelect4 = (option) => {
    setSelectedOption4(option);
    setProductUnit(option);
  };

  const options4 = [
    { label: "ML", value: "opt1" },
    { label: "Capsules", value: "opt2" },
    { label: "Unit", value: "opt3" },
    { label: "Box", value: "opt4" },
  ];

  // Edit Product --
  //Dropdown - Product Categories
  const [selectedOption5, setSelectedOption5] = useState(null);
  const handleSelect5 = (option) => {
    setSelectedOption5(option);
    setEditProductCategory(option);
  };

  const options5 = [...renderedProductCategories];

  //Dropdown - Product Tags
  // const [selectedOption6, setSelectedOption6] = useState(null);
  // const handleSelect6 = (option) => {
  //   setSelectedOption6(option);
  // };

  // const options6 = [
  //   { label: 'Option1', value: 'opt1' },
  //   { label: 'Option2', value: 'opt2' },
  //   { label: 'Option3', value: 'opt3' },
  // ];

  //Dropdown - Product Brand
  const [selectedOption7, setSelectedOption7] = useState(null);
  const handleSelect7 = (option) => {
    setSelectedOption7(option);
    setEditProductBrand(option);
  };

  const options7 = [...renderedProductBrand];

  //Dropdown - Product Unit
  const [selectedOption8, setSelectedOption8] = useState(null);
  const handleSelect8 = (option) => {
    setSelectedOption8(option);
    setEditProductUnit(option);
  };

  const options8 = [
    { label: "ml", value: "opt1" },
    { label: "Capsules", value: "opt2" },
    { label: "Unit", value: "opt3" },
    { label: "Box", value: "opt4" },
  ];

  const updateProductPage = (
    <div
      className="update-product-section flex flex-col gap-[1rem] p-[1rem]"
      style={updateProductModalStyle}
    >
      <div className="update-product-section-heading">
        <h3 className="text-[16px] font-semibold">Basic Information</h3>
      </div>

      <form action="" className="flex flex-col gap-[1rem] p-[10px]">
        <div className="flex flex-col gap-[10px] p-[1rem]">
          <label htmlFor="">Product Name</label>
          <input
            value={editProductName}
            type="text"
            className="rounded-[2px] border p-[1rem]"
            placeholder="Enter Product Name..."
            onChange={(event) => setEditProductsName(event.target.value)}
          />
        </div>
        <div className="flex flex-col gap-[10px] p-[1rem]">
          <label htmlFor="">Short Description</label>
          <textarea
            value={editProductShortDescription}
            type="text"
            rows={3}
            className="rounded-[2px] border p-[1rem]"
            placeholder="Enter Short Description"
            onChange={(event) =>
              setEditProductShortDescription(event.target.value)
            }
          />
        </div>
        <div className="flex flex-col gap-[10px] p-[1rem]">
          <label htmlFor="">Description</label>
          <textarea
            value={editProductDescription}
            type="text"
            rows={3}
            className="rounded-[2px] border p-[1rem]"
            placeholder="Enter Description"
            onChange={(event) => setEditProductDescription(event.target.value)}
          />
        </div>
        <div className="flex flex-col gap-[10px] p-[1rem]">
          <label htmlFor="">Images</label>
          <input
            type="file"
            onChange={(e) => setEditProductImages(e.target.files[0])}
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

        {/* <div className="flex flex-col gap-[10px] border-b p-[1rem]">
          <label htmlFor="">Gallery</label>
          <DragDropComponent />
          
        </div> */}
        <div className="flex flex-col gap-[10px] p-[1rem]">
          <label htmlFor="">Product Category</label>
          <Dropdown
            options={options5}
            onChange={handleSelect5}
            value={selectedOption5}
          />
        </div>
        {/* <div className="flex flex-col gap-[10px] border-b p-[1rem]">
          <label htmlFor="">Product Subcategory</label>
          <Dropdown
            options={options6}
            onChange={handleSelect6}
            value={selectedOption6}
          />
        </div> */}
        <div className="flex flex-col gap-[10px] p-[1rem]">
          <label htmlFor="">Product Brand</label>
          <Dropdown
            options={options7}
            onChange={handleSelect7}
            value={selectedOption7}
          />
        </div>
        <div className="flex flex-row items-center justify-between">
          <div className="flex w-[50%] flex-col gap-[10px] p-[1rem]">
            <label htmlFor="">Quantity</label>
            <input
              value={editProductUnitAmount}
              type="text"
              className="rounded-[2px] border p-[1rem]"
              placeholder="Enter Quantity"
              onChange={(event) => setEditProductUnitAmount(event.target.value)}
            />
            {/* <p className="text-[#1f1f1f] opacity-40">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </p> */}
          </div>
          <div className="flex w-[50%] flex-col gap-[10px] p-[1rem]">
            <label htmlFor="">Product Unit</label>
            <Dropdown
              options={options8}
              onChange={handleSelect8}
              value={selectedOption8}
            />
          </div>
        </div>

        <div className="flex flex-row justify-between p-[1rem]">
          <div className="flex flex-col gap-[10px]">
            <label htmlFor="">Price</label>
            <input
              value={editProductPrice}
              type="text"
              className="rounded-[2px] border p-[1rem]"
              placeholder="Enter Price"
              onChange={(event) => setEditProductPrice(event.target.value)}
            />
          </div>

          <div className="flex flex-col gap-[10px]">
            <label htmlFor="">Stock</label>
            <input
              value={editProductStock}
              type="text"
              className="rounded-[2px] border p-[1rem]"
              placeholder="Enter Stock"
              onChange={(event) => setEditProductStock(event.target.value)}
            />
          </div>

          <div className="flex flex-col gap-[10px]">
            <label htmlFor="">Code</label>
            <input
              value={editProductCode}
              type="text"
              className="rounded-[2px] border p-[1rem]"
              placeholder="Enter Code"
              onChange={(event) => setEditProductCode(event.target.value)}
            />
          </div>
        </div>
        {/* <div className="flex flex-col gap-[10px]">
          <label htmlFor="">Product Tags</label>
          <ListComp />
          <p className="text-[#1f1f1f] opacity-40">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </p>
        </div> */}
      </form>
      <Button
        onClick={handleEditProductSubmit}
        success
        className="w-fit hover:bg-green-700"
      >
        Save Now
      </Button>
    </div>
  );
  // -----------------------------------------------------------------------

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
  //     modalHeading={"Update Product"}
  //     onClose={closeModal}
  //     actionBar={actionBar}
  //   >
  //     {updateProductPage}
  //   </Modal>
  // );
  // Modal End

  // const [isChecked, setIsChecked] = useState(false);

  //Modal
  const modalContent = (
    <div
      className="update-product-section flex flex-col gap-[1rem] p-[1rem]"
      style={updateProductModalStyle}
    >
      <div className="update-product-section-heading">
        <h3 className="text-[16px] font-semibold">Basic Information</h3>
      </div>
      <form
        action=""
        onSubmit={handleAddProductSubmit}
        className="flex flex-col gap-[10px] p-[10px]"
        method="post"
        encType="multipart/form-data"
      >
        <div className="flex flex-col gap-[10px] p-[1rem]">
          <label htmlFor="">Product Name</label>
          <input
            value={productName}
            type="text"
            className="rounded-[2px] border p-[1rem]"
            placeholder="Enter Product Name"
            onChange={(event) => setProductsName(event.target.value)}
          />
          {/* <p className="text-[#1f1f1f] opacity-40">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </p> */}
        </div>

        <div className="flex flex-col gap-[10px] p-[1rem]">
          <label htmlFor="">Short Description</label>
          <textarea
            value={productShortDescription}
            type="text"
            rows={3}
            className="rounded-[2px] border p-[1rem]"
            placeholder="Enter Short Description"
            onChange={(event) => setProductShortDescription(event.target.value)}
          />
          {/* <p className="text-[#1f1f1f] opacity-40">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </p> */}
        </div>
        <div className="flex flex-col gap-[10px] p-[1rem]">
          <label htmlFor="">Description</label>
          <textarea
            value={productDescription}
            type="text"
            rows={3}
            className="rounded-[2px] border p-[1rem]"
            placeholder="Enter Description"
            onChange={(event) => setProductDescription(event.target.value)}
          />
        </div>

        {/* <div className="update-product-section-heading">
          <h3 className="text-[16px] font-semibold">Images</h3>
        </div> */}

        <div className="flex w-full flex-col gap-[10px] p-[1rem]">
          <label htmlFor="">Images</label>
          <div className="flex flex-row gap-[2rem]">
            <input
              type="file"
              onChange={(e) => setProductImages(e.target.files[0])}
              filename={productImages}
              accept="image/*"
            />
            {/* <img
              className="h-[70px] w-[70px]"
              src={URL.createObjectURL(productImages)}
              alt=""
            /> */}
          </div>
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

        {/* <div className="flex flex-col gap-[10px] p-[1rem]">
          <label htmlFor="">Gallery</label>
          <input
            type="file"
            onChange={(e) => setProductImages(e.target.files[0])}
          />
          
        </div> */}

        <div className="flex flex-col gap-[10px] p-[1rem]">
          <label htmlFor="">Product Category</label>
          <Dropdown
            options={options1}
            onChange={handleSelect1}
            value={selectedOption1}
          />
        </div>

        {/* <div className="flex flex-col gap-[10px] p-[1rem]">
          <label htmlFor="">Product Subcategory</label>
          <Dropdown
            options={options2}
            onChange={handleSelect2}
            value={selectedOption2}
          />
        </div> */}

        <div className="flex flex-col gap-[10px] p-[1rem]">
          <label htmlFor="">Product Brand</label>
          <Dropdown
            options={options3}
            onChange={handleSelect3}
            value={selectedOption3}
          />
        </div>
        <div className="flex flex-row items-center justify-between">
          <div className="flex w-[50%] flex-col gap-[10px] p-[1rem]">
            <label htmlFor="">Qualntity</label>
            <input
              value={productUnitAmount}
              type="text"
              className="rounded-[2px] border p-[1rem]"
              placeholder="Enter Quantity"
              onChange={(event) => setProductUnitAmount(event.target.value)}
            />
            {/* <p className="text-[#1f1f1f] opacity-40">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </p> */}
          </div>
          <div className="flex w-[50%] flex-col gap-[10px] p-[1rem]">
            <label htmlFor="">Product Unit</label>
            <Dropdown
              options={options4}
              onChange={handleSelect4}
              value={selectedOption4}
            />
          </div>
        </div>
        {/* <div className="update-product-section-heading">
          <h3 className="text-[16px] font-semibold">Price, Stock & Code</h3>
        </div> */}
        <div className="flex flex-row justify-between p-[1rem]">
          <div className="flex flex-col gap-[10px]">
            <label htmlFor="">Price</label>
            <input
              value={productPrice}
              type="text"
              className="rounded-[2px] border p-[1rem]"
              placeholder="Enter Price..."
              onChange={(event) => setProductPrice(event.target.value)}
            />
          </div>

          <div className="flex flex-col gap-[10px]">
            <label htmlFor="">Stock</label>
            <input
              value={productStock}
              type="text"
              className="rounded-[2px] border p-[1rem]"
              placeholder="Enter Stock"
              onChange={(event) => setProductStock(event.target.value)}
            />
          </div>

          <div className="flex flex-col gap-[10px]">
            <label htmlFor="">Code</label>
            <input
              value={productCode}
              type="text"
              className="rounded-[2px] border p-[1rem]"
              placeholder="Enter Code"
              onChange={(event) => setProductCode(event.target.value)}
            />
          </div>
        </div>
        {/* <div className="flex flex-col gap-[10px]">
          <label htmlFor="">Product Tags</label>
          <ListComp />
          <p className="text-[#1f1f1f] opacity-40">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </p>
        </div> */}
      </form>
      <Button
        type="submit"
        onClick={handleAddProductSubmit}
        success
        className="w-fit hover:bg-green-700"
      >
        Save Now
      </Button>
    </div>
  );

  ///---------------------------------------------------------------------

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
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const [open1, setOpen1] = React.useState(false);
  const handleOpen1 = () => {
    setOpen1(true);
  };
  const handleClose1 = () => {
    setOpen1(false);
  };
  const [open2, setOpen2] = React.useState(false);
  const handleOpen2 = () => {
    setOpen2(true);
  };
  const handleClose2 = () => {
    setOpen2(false);
  };

  // const handleClickOpenDialog = (id) => {
  //   setOpen({ open: true, id: id });
  // };

  // const data = [
  //   products.map((data) => {
  //     return {
  //       productName: data.productName,
  //       productBrand: data.productBrand.label,
  //       categories: 'data.categories',
  //       price: data.price,
  //     };
  //   }),
  // ];

  const data = products;

  // const data = [...renderedData];
  // console.log(data);

  const config = [
    {
      label: "S/N",
      render: (list) => list.id,
      sortValue: (list) => list.id,
    },
    {
      label: "Product Name",
      render: (list) => list.productName,
      sortValue: (list) => list.productName,
    },
    {
      label: "Brand",
      render: (list) => list.productBrand.label,
      sortValue: (list) => list.productBrand.label,
    },
    {
      label: "Categories",
      render: (list) => list.productCategory.label,
      sortValue: (list) => list.productCategory.label,
    },
    {
      label: "Price",
      render: (list) => `₹ ${list.productPrice}`,
      sortValue: (list) => `₹ ${list.productPrice}`,
    },
    {
      label: "Amount",
      render: (list) => `${list.productUnitAmount} ${list.productUnit.label}`,
      sortValue: (list) =>
        `${list.productUnitAmount}-${list.productUnit.label}`,
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
        name={"All Products"}
        options={options}
        handleSelect={handleSelect}
        selectedOption={selectedOption}
        data={data}
        config={config}
        keyFn={keyFn}
        modalContent={modalContent}
        modalHeading={"Add New Product"}
        addBtn={"Add Product"}
      /> */}
      {/* <DialogBox open={open} setOpen={setOpen} data={deleteProductById} /> */}
      {/* {showModal && modal} */}
      <div className="products-page flex flex-col gap-[2rem] p-[1rem]">
        <div className="products-page-head flex flex-row items-center justify-between p-[1rem] shadow-lg">
          <h3 className="text-[22px] font-semibold">All Product</h3>
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
              <p>Add Product</p>
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
              <th style={{ width: "250px" }}>Product Image</th>
              <th>Product Title</th>
              <th>Short Description</th>
              <th>Published</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {allProduct?.map((item, index) => (
              <tr key={item?.id}>
                <td>{index + 1}</td>
                <td style={{ width: "250px" }}>
                  <img
                    src={
                      process.env.React_App_Base_Image_Url +
                      item?.images[0]?.image_path
                    }
                    alt="product"
                    style={{
                      width1: "100px",
                      height: "80px",
                      objectFit: "contain",
                    }}
                  />
                  {/* <p>Category Name</p> */}
                </td>
                <td>{item?.productName}</td>
                <td>{item?.shortDescription}</td>
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
                    onClick={() => editProductHandle(item?.id)}
                  />
                  <Delete
                    style={{
                      color: "#6E798C",
                      marginLeft: "5px",
                      marginRight: "5px",
                      cursor: "pointer",
                    }}
                    onClick={() => [handleOpen2(), setProductId(item?.id)]}
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
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
        style={{
          overflow: "scroll",
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "flex-start",
        }}
      >
        <Fade in={open}>
          <Box
            sx={style2}
            style={{
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              flexDirection: "column",
            }}
          >
            <Typography id="transition-modal-title" variant="h6" component="h2">
              Product Info
            </Typography>
            <form className="modal_form" onSubmit={addProductHandle}>
              <span>
                <input
                  type="text"
                  placeholder="Product Name"
                  onChange={(e) => setProductsName(e.target.value)}
                />
              </span>
              <p className="modal_form_para">Category</p>
              <span>
                <select
                  name="category"
                  onChange={(e) => setProductCategoryId(e.target.value)}
                >
                  <option>Select One Category</option>,
                  {allCategory?.map((item) => (
                    <option value={item?.id}>{item?.categorieName}</option>
                  ))}
                </select>
              </span>
              <p className="modal_form_para">Sub Category</p>
              <span>
                <select
                  onChange={(e) => setProductSubCategoryId(e.target.value)}
                >
                  <option>Select One Sub Category</option>,
                  {productSubCategory?.map((item, index) => (
                    <option key={index} value={item?.id}>
                      {item?.sub__categories_name}
                    </option>
                  ))}
                </select>
              </span>

              <p className="modal_form_para">Brand</p>
              <span>
                <select
                  name="brand"
                  onChange={(e) => setProductBrandId(e.target.value)}
                  required
                >
                  <option>Select One Brand</option>,
                  {allBrand?.map((item) => (
                    <option value={item?.id}>{item?.brandname}</option>
                  ))}
                </select>
              </span>

              <Typography
                id="transition-modal-title"
                variant="h6"
                component="h2"
              >
                Short Description
              </Typography>
              <span>
                <textarea
                  rows={4}
                  placeholder=" Short Description"
                  onChange={(e) => setProductShortDescription(e.target.value)}
                />
              </span>
              <Typography
                id="transition-modal-title"
                variant="h6"
                component="h2"
              >
                Description
              </Typography>
              <JoditEditor
                style={{ width: "100%" }}
                ref={editor}
                onChange={(newContent) => {
                  setProductDescription(newContent);
                }}
              />

              <span></span>
              <p className="modal_form_para">Images</p>

              <input
                type="file"
                onChange={imageHandle}
                accept="image/*"
                multiple
                required
              />
              <span className="preview">
                {productImagePrev?.map((item) => (
                  <img src={item} alt="preview" />
                ))}
              </span>
              <div className="modal_form_product_details">
                <div className="modal_form_product_details_heading">
                  <p>Price,Sku & Stock</p>
                </div>
                <div className="modal_form_product_details_details">
                  <span>
                    <p>Price</p>
                    <input
                      type="text"
                      placeholder="Price"
                      required
                      onChange={(e) => setProductPrice(e.target.value)}
                    />
                  </span>

                  <span>
                    <p>Stock</p>
                    <input
                      type="text"
                      placeholder="Stock"
                      onChange={(e) => setProductStock(e.target.value)}
                      required
                    />
                  </span>
                  <span>
                    <p>Sku Code</p>
                    <input
                      type="text"
                      placeholder="Sku Code"
                      onChange={(e) => setProductCode(e.target.value)}
                      required
                    />
                  </span>
                  <span>
                    <p>Quantity</p>
                    <input
                      type="text"
                      placeholder="Product Quantity "
                      onChange={(e) => setProductUnit(e.target.value)}
                      required
                    />
                  </span>
                </div>
              </div>
              <p className="modal_form_para">Product Unit</p>
              <span>
                <select
                  name="category"
                  onChange={(e) => setProductUnitAmount(e.target.value)}
                >
                  <option>Select Product Unit</option>
                  <option value="ML">ML</option>
                  <option value="KG">Kg</option>
                  <option value="CAPSUAL">Capsual</option>
                </select>
              </span>

              <button className="modal_form_buttom">Add Product</button>
            </form>
          </Box>
        </Fade>
      </Modal>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open1}
        onClose={handleClose1}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
        style={{
          overflow: "scroll",
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "flex-start",
        }}
      >
        <Fade in={open1}>
          <Box
            sx={style2}
            style={{
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              flexDirection: "column",
            }}
          >
            <Typography id="transition-modal-title" variant="h6" component="h2">
              Product Update Info
            </Typography>
            <form className="modal_form" onSubmit={updateProductHandle}>
              <span>
                <input
                  type="text"
                  placeholder="Product Name"
                  value={productName}
                  onChange={(e) => setProductsName(e.target.value)}
                />
              </span>
              <p className="modal_form_para">Category</p>
              <span>
                <select
                  name="category"
                  onChange={(e) => setProductCategoryId(e.target.value)}
                >
                  <option>Select One Category</option>,
                  {allCategory?.map((item) => (
                    <option value={item?.id}>{item?.categorieName}</option>
                  ))}
                </select>
              </span>
              <p className="modal_form_para">Sub Category</p>
              <span>
                <select
                  onChange={(e) => setProductSubCategoryId(e.target.value)}
                >
                  <option>Select One Sub Category</option>,
                  {productSubCategory?.map((item, index) => (
                    <option key={index} value={item?.id}>
                      {item?.sub__categories_name}
                    </option>
                  ))}
                </select>
              </span>

              <p className="modal_form_para">Brand</p>
              <span>
                <select
                  name="brand"
                  onChange={(e) => setProductBrandId(e.target.value)}
                  required
                >
                  <option>Select One Brand</option>,
                  {allBrand?.map((item) => (
                    <option value={item?.id}>{item?.brandname}</option>
                  ))}
                </select>
              </span>

              <Typography
                id="transition-modal-title"
                variant="h6"
                component="h2"
              >
                Short Description
              </Typography>
              <span>
                <textarea
                  rows={4}
                  placeholder=" Short Description"
                  value={productShortDescription}
                  onChange={(e) => setProductShortDescription(e.target.value)}
                />
              </span>
              <Typography
                id="transition-modal-title"
                variant="h6"
                component="h2"
              >
                Description
              </Typography>
              <JoditEditor
                style={{ width: "100%" }}
                value={productDescription}
                ref={editor}
                onChange={(newContent) => {
                  setProductDescription(newContent);
                }}
              />

              <span></span>
              <p className="modal_form_para">Images</p>

              <input
                type="file"
                onChange={imageHandle}
                accept="image/*"
                multiple
                required
              />
              <span className="preview">
                {productImagePrev?.map((item) => (
                  <img src={item} alt="preview" />
                ))}
              </span>
              <div className="modal_form_product_details">
                <div className="modal_form_product_details_heading">
                  <p>Price,Sku & Stock</p>
                </div>
                <div className="modal_form_product_details_details">
                  <span>
                    <p>Price</p>
                    <input
                      type="text"
                      placeholder="Price"
                      required
                      value={productPrice}
                      onChange={(e) => setProductPrice(e.target.value)}
                    />
                  </span>

                  <span>
                    <p>Stock</p>
                    <input
                      type="text"
                      placeholder="Stock"
                      value={productStock}
                      onChange={(e) => setProductStock(e.target.value)}
                      required
                    />
                  </span>
                  <span>
                    <p>Sku Code</p>
                    <input
                      type="text"
                      placeholder="Sku Code"
                      value={productCode}
                      onChange={(e) => setProductCode(e.target.value)}
                      required
                    />
                  </span>
                  <span>
                    <p>Quantity</p>
                    <input
                      type="text"
                      placeholder="Product Quantity "
                      value={productUnit}
                      onChange={(e) => setProductUnit(e.target.value)}
                      required
                    />
                  </span>
                </div>
              </div>
              <p className="modal_form_para">Product Unit</p>
              <span>
                <select
                  name="category"
                  onChange={(e) => setProductUnitAmount(e.target.value)}
                >
                  <option>Select Product Unit</option>
                  <option value="ML">ML</option>
                  <option value="KG">Kg</option>
                  <option value="CAPSUAL">Capsual</option>
                </select>
              </span>

              <button className="modal_form_buttom">Update Product</button>
            </form>
          </Box>
        </Fade>
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
            <button className="button-proceed" onClick={deleteProductHandle}>
              Proceed
            </button>
          </Typography>
        </Box>
      </Modal>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}
