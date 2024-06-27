import React, { createContext, useReducer, useContext, useState } from "react";

// import Data from '../Admin/context/Data';

import axios from "axios";

//this is data layer
export const StateContext = createContext();

const DataContext = createContext();

//Build A Provider

export const StateProvider = ({ reducer, initialState, children }) => {
  const [testData, setTestData] = useState([]);
  // Data Context --------------------------------------------------------------------
  // ////// All Products
  // -post
  const [products, setProducts] = useState([]);

  const handleCreateProduct = async (value) => {
    const response = await axios.post("http://localhost:3001/products", value);
    const updatedProducts = [...products, response.data];
    setProducts(updatedProducts);
  };

  // -get
  const fetchProducts = async () => {
    const response = await axios.get("http://localhost:3001/products");
    setProducts(response.data);
  };

  // -delete
  const deleteProductById = async (id) => {
    await axios.delete(`http://localhost:3001/products/${id}`);
    const updatedProducts = products.filter((product) => {
      return product.id !== id;
    });
    setProducts(updatedProducts);
  };

  // -put
  const editProductById = async (
    id,
    newProductName,
    newProductShortDescription,
    newProductDescription,
    newProductImages,
    newProductCategory,
    newProductBrand,
    newProductUnitAmount,
    newProductUnit,
    newProductPrice,
    newProductStock,
    newProductCode
  ) => {
    const response = await axios.put(`http://localhost:3001/products/${id}`, {
      productName: newProductName,
      productShortDescription: newProductShortDescription,
      productDescription: newProductDescription,
      productImages: newProductImages,
      productCategory: newProductCategory,
      productBrand: newProductBrand,
      productUnitAmount: newProductUnitAmount,
      productUnit: newProductUnit,
      productPrice: newProductPrice,
      productStock: newProductStock,
      productCode: newProductCode,
    });
    const updatedProducts = products.map((product) => {
      if (product.id === id) {
        return { ...product, ...response.data };
      }
      return product;
    });
    setProducts(updatedProducts);
  };

  // ////// All Categories
  // -post
  const [categories, setCategories] = useState([]);
  const handleCreateCategories = async (value) => {
    const response = await axios.post(
      "http://localhost:3001/categories",
      value
    );
    const updatedCategories = [...categories, response.data];
    setCategories(updatedCategories);
  };

  // -get
  const fetchCategories = async () => {
    const response = await axios.get("http://localhost:3001/categories");
    setCategories(response.data);
  };

  // -delete
  const deleteCategoryById = async (id) => {
    await axios.delete(`http://localhost:3001/categories/${id}`);
    const updatedCategories = products.filter((category) => {
      return category.id !== id;
    });
    setCategories(updatedCategories);
  };

  // -put
  const editCategoryById = async (
    id,
    newCategoryName,
    newCategoryBrand,
    newCategoryImage
  ) => {
    const response = await axios.put(`http://localhost:3001/categories/${id}`, {
      categoryName: newCategoryName,
      categoryBrand: newCategoryBrand,
      categoryImage: newCategoryImage,
    });
    const updatedCategories = categories.map((category) => {
      if (category.id === id) {
        return { ...category, ...response.data };
      }
      return category;
    });
    setCategories(updatedCategories);
  };

  // ////// All Brands
  // -post
  const [brands, setBrands] = useState([]);
  const handleCreateBrands = async (value) => {
    const response = await axios.post("http://localhost:3001/brands", value);
    const updatedBrands = [...brands, response.data];
    setBrands(updatedBrands);
  };

  // -get
  const fetchBrands = async () => {
    const response = await axios.get("http://localhost:3001/brands");
    setBrands(response.data);
  };

  // -delete
  const deleteBrandById = async (id) => {
    await axios.delete(`http://localhost:3001/brands/${id}`);
    const updatedBrands = brands.filter((brand) => {
      return brand.id !== id;
    });
    setBrands(updatedBrands);
  };

  // -put
  const editBrandById = async (id, newBrandName, newBrandImage) => {
    const response = await axios.put(`http://localhost:3001/brands/${id}`, {
      brandName: newBrandName,
      brandImage: newBrandImage,
    });
    const updatedBrands = brands.map((brand) => {
      if (brand.id === id) {
        return { ...brand, ...response.data };
      }
      return brand;
    });
    setBrands(updatedBrands);
  };

  // ////// Homepage
  const [homepage, setHomepage] = useState([]);
  // -post
  const handleCreateHomepage = async (value) => {
    const response = await axios.post(
      "http://localhost:3001/AppearanceHomepage",
      value
    );
    const updatedHomepage = [...homepage, response.data];
    setHomepage(updatedHomepage);
  };

  // -get
  const fetchHomepage = async () => {
    const response = await axios.get(
      "http://localhost:3001/AppearanceHomepage"
    );
    setHomepage(response.data);
  };

  // -delete
  const deleteHomepageById = async (id) => {
    await axios.delete(`http://localhost:3001/AppearanceHomepage/${id}`);
    const updatedHomepage = homepage.filter((home) => {
      return home.id !== id;
    });
    setHomepage(updatedHomepage);
  };

  // -put
  const editHomepageById = async (
    id,
    newHomepageTitle,
    newHomepageLink,
    newHomepageAltTag,
    newHomepageImage
  ) => {
    const response = await axios.put(
      `http://localhost:3001/AppearanceHomepage/${id}`,
      {
        homepageTitle: newHomepageTitle,
        homepageLink: newHomepageLink,
        homepageAltTag: newHomepageAltTag,
        homepageImage: newHomepageImage,
      }
    );
    const updatedHomepage = homepage.map((home) => {
      if (home.id === id) {
        return { ...home, ...response.data };
      }
      return home;
    });
    setHomepage(updatedHomepage);
  };

  // /////ProductDetailsWidget
  const [productDetailsWidget, setProductDetailsWidget] = useState([]);
  // -post
  const handleCreateProductDetailsWidget = async (value) => {
    const response = await axios.post(
      "http://localhost:3001/AppearanceProductDetailsWidget",
      value
    );
    const updatedProductDetailsWidget = [
      ...productDetailsWidget,
      response.data,
    ];
    setProductDetailsWidget(updatedProductDetailsWidget);
  };

  // -get
  const fetchProductDetailsWidget = async () => {
    const response = await axios.get(
      "http://localhost:3001/AppearanceProductDetailsWidget"
    );
    setProductDetailsWidget(response.data);
  };

  // -delete
  const deleteProductDetailsWidgetById = async (id) => {
    await axios.delete(
      `http://localhost:3001/AppearanceProductDetailsWidget/${id}`
    );
    const updatedProductDetailsWidget = productDetailsWidget.filter(
      (widget) => {
        return widget.id !== id;
      }
    );
    setProductDetailsWidget(updatedProductDetailsWidget);
  };

  // -put
  const editProductDetailsWidgetById = async (
    id,
    newProductDetailsWidgetLink,
    newProductDetailsWidgetImage
  ) => {
    const response = await axios.put(
      `http://localhost:3001/AppearanceProductDetailsWidget/${id}`,
      {
        productDetailsWidgetLink: newProductDetailsWidgetLink,
        productDetailsWidgetImage: newProductDetailsWidgetImage,
      }
    );
    const updatedProductDetailsWidget = productDetailsWidget.map((widget) => {
      if (widget.id === id) {
        return { ...widget, ...response.data };
      }
      return widget;
    });
    setProductDetailsWidget(updatedProductDetailsWidget);
  };

  // /////About Us
  const [aboutUs, setAboutUs] = useState([]);
  // -post
  const handleCreateAboutUs = async (value) => {
    const response = await axios.post(
      "http://localhost:3001/AppearanceAboutPage",
      value
    );
    const updatedAboutUs = [...aboutUs, response.data];
    setAboutUs(updatedAboutUs);
  };

  // -get
  const fetchAboutUs = async () => {
    const response = await axios.get(
      "http://localhost:3001/AppearanceAboutPage"
    );
    setAboutUs(response.data);
  };

  // -delete
  const deleteAboutUsById = async (id) => {
    await axios.delete(`http://localhost:3001/AppearanceAboutPage/${id}`);
    const updatedAboutUs = aboutUs.filter((about) => {
      return about.id !== id;
    });
    setAboutUs(updatedAboutUs);
  };

  // -put
  const editAboutUsById = async (
    id,
    newMainImg,
    newTitle1,
    newTextForTitle1,
    newImg1ForSection,
    newImg2ForSection,
    newImg3ForSection,
    newTitle2,
    newTextForTitle2,
    newImgForCard1,
    newTitleForCard1,
    newTextForCard1,
    newImgForCard2,
    newTitleForCard2,
    newTextForCard2,
    newImgForCard3,
    newTitleForCard3,
    newTextForCard3
  ) => {
    const response = await axios.put(
      `http://localhost:3001/AppearanceAboutPage/${id}`,
      {
        mainImg: newMainImg,
        title1: newTitle1,
        textForTitle1: newTextForTitle1,
        img1ForSection: newImg1ForSection,
        img2ForSection: newImg2ForSection,
        img3ForSection: newImg3ForSection,
        title2: newTitle2,
        textForTitle2: newTextForTitle2,
        imgForCard1: newImgForCard1,
        titleForCard1: newTitleForCard1,
        textForCard1: newTextForCard1,
        imgForCard2: newImgForCard2,
        titleForCard2: newTitleForCard2,
        textForCard2: newTextForCard2,
        imgForCard3: newImgForCard3,
        titleForCard3: newTitleForCard3,
        textForCard3: newTextForCard3,
      }
    );
    const updatedAboutUs = aboutUs.map((about) => {
      if (about.id === id) {
        return { ...about, ...response.data };
      }
      return about;
    });
    setAboutUs(updatedAboutUs);
  };

  // /////Header
  const [header, setHeader] = useState([]);
  // -post
  const handleCreateHeader = async (value) => {
    const response = await axios.post(
      "http://localhost:3001/AppearanceHeader",
      value
    );
    const updatedHeader = [...header, response.data];
    setHeader(updatedHeader);
  };

  // -get
  const fetchHeader = async () => {
    const response = await axios.get("http://localhost:3001/AppearanceHeader");
    setHeader(response.data);
  };

  // -delete
  const deleteHeaderById = async (id) => {
    await axios.delete(`http://localhost:3001/AppearanceHeader/${id}`);
    const updatedHeader = header.filter((head) => {
      return head.id !== id;
    });
    setHeader(updatedHeader);
  };

  // -put
  const editHeaderById = async (
    id,
    newUpperHeaderLinkName,
    newUpperHeaderLinkImage
  ) => {
    const response = await axios.put(
      `http://localhost:3001/AppearanceHeader/${id}`,
      {
        upperHeaderLinkName: newUpperHeaderLinkName,
        upperHeaderLinkImage: newUpperHeaderLinkImage,
      }
    );
    const updatedHeader = header.map((head) => {
      if (head.id === id) {
        return { ...head, ...response.data };
      }

      return head;
    });
    setHeader(updatedHeader);
  };

  // /////Footer
  const [footer, setFooter] = useState([]);
  // -post
  const handleCreateFooter = async (value) => {
    const response = await axios.post(
      "http://localhost:3001/AppearanceFooter",
      value
    );
    const updatedFooter = [...footer, response.data[0].quicklinks];
    setFooter(updatedFooter);
  };

  // -get
  const fetchFooter = async () => {
    const response = await axios.get("http://localhost:3001/AppearanceFooter");
    setFooter(response.data);
    // console.log(response.data);
  };

  // -delete
  const deleteFooterById = async (id) => {
    await axios.delete(`http://localhost:3001/AppearanceFooter/${id}`);
    const updatedFooter = footer.filter((foot) => {
      return foot.id !== id;
    });
    setFooter(updatedFooter);
  };

  // -put
  const editFooterById = async (
    id,
    quicklinks,
    ourPolicies,
    ourServices,
    newCopyrightText
  ) => {
    const response = await axios.put(
      `http://localhost:3001/AppearanceFooter/${id}`,
      {
        quicklinks: quicklinks,
        ourPolicies: ourPolicies,
        ourServices: ourServices,
        copyrightText: newCopyrightText,
      }
    );
    const updatedFooter = footer.map((foot) => {
      if (foot.id === id) {
        return { ...foot, ...response.data };
      }
      return foot;
    });
    setFooter(updatedFooter);
  };

  // /////Order
  const [orders, setOrders] = useState([]);
  // -post
  const handleCreateOrder = async (value) => {
    const response = await axios.post("http://localhost:3001/orders", value);
    const updatedOrders = [...orders, response.data];
    setOrders(updatedOrders);
  };

  // -get
  const fetchOrder = async () => {
    const response = await axios.get("http://localhost:3001/orders");
    setOrders(response.data);
    // console.log(response.data);
  };

  // -delete
  const deleteOrdersById = async (id) => {
    await axios.delete(`http://localhost:3001/orders/${id}`);
    const updatedFooter = orders.filter((order) => {
      return order.id !== id;
    });
    setOrders(updatedFooter);
  };

  // -put
  const editOrdersById = async (id) => {
    const response = await axios.put(`http://localhost:3001/orders${id}`, {});
    const updatedOrders = orders.map((order) => {
      if (order.id === id) {
        return { ...order, ...response.data };
      }
      return order;
    });
    setDoctors(updatedOrders);
  };

  // /////Doctors
  const [doctors, setDoctors] = useState([]);
  // -post
  const handleCreateDoctors = async (value) => {
    const response = await axios.post("http://localhost:3001/doctors", value);
    const updatedDoctors = [...doctors, response.data];
    setDoctors(updatedDoctors);
  };

  // -get
  const fetchDoctors = async () => {
    const response = await axios.get("http://localhost:3001/doctors");
    setDoctors(response.data);
    // console.log(response.data);
  };

  // -delete
  const deleteDoctorsById = async (id) => {
    await axios.delete(`http://localhost:3001/doctors/${id}`);
    const updatedDoctors = doctors.filter((doctor) => {
      return doctor.id !== id;
    });
    setDoctors(updatedDoctors);
  };

  // -put
  const editDoctorsById = async (
    id,
    doctorPhoto,
    doctorFirstName,
    doctorLastName,
    doctorEmail,
    doctorMobile,
    doctorDOB,
    doctorGender,
    doctorZipcode,
    doctorCity,
    doctorRole,
    doctorAddress,
    doctorBio,
    doctorMainSpecialization,
    doctorSecondarySpecialization,
    doctorMedicalEducation,
    doctorExperience
  ) => {
    const response = await axios.put(`http://localhost:3001/doctors/${id}`, {
      doctorPhoto: doctorPhoto,
      doctorFirstName: doctorFirstName,
      doctorLastName: doctorLastName,
      doctorEmail: doctorEmail,
      doctorMobile: doctorMobile,
      doctorDOB: doctorDOB,
      doctorGender: doctorGender,
      doctorZipcode: doctorZipcode,
      doctorCity: doctorCity,
      doctorRole: doctorRole,
      doctorAddress: doctorAddress,
      doctorBio: doctorBio,
      doctorMainSpecialization: doctorMainSpecialization,
      doctorSecondarySpecialization: doctorSecondarySpecialization,
      doctorMedicalEducation: doctorMedicalEducation,
      doctorExperience: doctorExperience,
    });
    const updatedDoctors = doctors.map((doctor) => {
      if (doctor.id === id) {
        return { ...doctor, ...response.data };
      }
      return doctor;
    });
    setDoctors(updatedDoctors);
  };

  // /////Pages
  const [pages, setPages] = useState([]);
  // -post
  const handleCreatePage = async (value) => {
    const response = await axios.post("http://localhost:3001/pages", value);
    const updatedPages = [...pages, response.data];
    setPages(updatedPages);
  };

  // -get
  const fetchPages = async () => {
    const response = await axios.get("http://localhost:3001/pages");
    setPages(response.data);
    // console.log(response.data);
  };

  // -delete
  const deletePagesById = async (id) => {
    await axios.delete(`http://localhost:3001/pages/${id}`);
    const updatedPages = pages.filter((page) => {
      return page.id !== id;
    });
    setPages(updatedPages);
  };

  // -put
  const editPagesById = async (
    id,
    newPageTitle,
    newPageLink,
    newPublished,
    newTextData
  ) => {
    const response = await axios.put(`http://localhost:3001/pages/${id}`, {
      pageTitle: newPageTitle,
      pageLink: newPageLink,
      published: newPublished,
      textData: newTextData,
    });
    const updatedPages = pages.map((page) => {
      if (page.id === id) {
        return { ...page, ...response.data };
      }
      return page;
    });
    setPages(updatedPages);
  };

  // /////LabAdd&Remove
  const [labs, setLabs] = useState([]);
  // -post
  const handleCreateLab = async (value) => {
    const response = await axios.post("http://localhost:3001/labs", value);
    const updatedLabs = [...labs, response.data];
    setLabs(updatedLabs);
  };

  // -get
  const fetchLabs = async () => {
    const response = await axios.get("http://localhost:3001/labs");
    setLabs(response.data);
    // console.log(response.data);
  };

  // -delete
  const deleteLabsById = async (id) => {
    await axios.delete(`http://localhost:3001/labs/${id}`);
    const updatedLabs = labs.filter((lab) => {
      return lab.id !== id;
    });
    setLabs(updatedLabs);
  };

  // -put
  const editLabsById = async (
    id,
    labName,
    labCategoryName,
    labBrandName,
    labImage
  ) => {
    const response = await axios.put(`http://localhost:3001/labs/${id}`, {
      labName: labName,
      labCategoryName: labCategoryName,
      labBrandName: labBrandName,
      labImage: labImage,
    });
    const updatedLabs = labs.map((lab) => {
      if (lab.id === id) {
        return { ...lab, ...response.data };
      }
      return lab;
    });
    setLabs(updatedLabs);
  };

  // ---------------------------------------------------------------------------------------

  //Authentication
  const [auth, setAuth] = useState({});

  // ------------------------

  // Doctor State
  const [seeDoctorsInfo, setSeeDoctorsInfo] = useState("");
  // ------------------------

  return (
    <DataContext.Provider
      value={{
        auth,
        setAuth,
        seeDoctorsInfo,
        setSeeDoctorsInfo,
        products,
        setProducts,
        handleCreateProduct,
        fetchProducts,
        deleteProductById,
        editProductById,
        categories,
        setCategories,
        handleCreateCategories,
        fetchCategories,
        deleteCategoryById,
        editCategoryById,
        brands,
        setBrands,
        handleCreateBrands,
        fetchBrands,
        deleteBrandById,
        editBrandById,
        homepage,
        setHomepage,
        handleCreateHomepage,
        fetchHomepage,
        deleteHomepageById,
        editHomepageById,
        productDetailsWidget,
        setProductDetailsWidget,
        handleCreateProductDetailsWidget,
        fetchProductDetailsWidget,
        deleteProductDetailsWidgetById,
        editProductDetailsWidgetById,
        aboutUs,
        setAboutUs,
        handleCreateAboutUs,
        fetchAboutUs,
        deleteAboutUsById,
        editAboutUsById,
        header,
        setHeader,
        handleCreateHeader,
        fetchHeader,
        deleteHeaderById,
        editHeaderById,
        footer,
        setFooter,
        handleCreateFooter,
        fetchFooter,
        deleteFooterById,
        editFooterById,
        orders,
        setOrders,
        handleCreateOrder,
        fetchOrder,
        deleteOrdersById,
        editOrdersById,
        doctors,
        setDoctors,
        handleCreateDoctors,
        fetchDoctors,
        deleteDoctorsById,
        editDoctorsById,
        pages,
        setPages,
        handleCreatePage,
        fetchPages,
        deletePagesById,
        editPagesById,
        labs,
        setLabs,
        handleCreateLab,
        fetchLabs,
        deleteLabsById,
        editLabsById,

        // New Data
        testData,
        setTestData,
      }}>
      <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
      </StateContext.Provider>
    </DataContext.Provider>
  );
};

export default DataContext;

export const useStateValue = () => useContext(StateContext);
