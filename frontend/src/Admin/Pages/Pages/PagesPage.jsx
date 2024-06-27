import React, { useEffect } from "react";
import "./PagesPage.css";
// import Switch from 'react-switch';
import SwitchButton from "../../components/SwitchButton";
import Table from "../../components/Table";
// import { BsEyeFill } from 'react-icons/bs';
import { useState } from "react";
import Button from "../../components/Button";
// import Modal from "../../components/Modal";
import { useContext } from "react";
import DataContext from "../../../context api/StateProvider";
import axios from "axios";
import { Delete, Edit } from "@mui/icons-material";
import { Box, CircularProgress, Modal, Typography } from "@mui/material";
import JoditEditor from "jodit-react";

export default function PagesPage() {
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

  const [isLoading, setIsLoading] = useState(false);
  const [allPages, setAllPages] = useState();
  const [pageTitle, setPageTitle] = useState();
  const [pageLink, setPageLink] = useState();
  const [pageDescription, setPageDescription] = useState();
  const [pageId, setPageId] = useState();
  const getAllPagesHandle = async () => {
    const { data } = await axios
      .get(`${process.env.React_App_Base_Url + "Get-all-pages"}`, {
        headers: { "Content-type": "multipart/form-date" },
      })
      .then((response) => response, setIsLoading(true))
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
    setAllPages(data && data?.pages);
    console.log(data?.pages, "all pages");
  };
  const singlePageHandle = async (id) => {
    const { data } = await axios
      .get(`${process.env.React_App_Base_Url + "Get-One-pages/" + id}`, {
        headers: { "Content-type": "multipart/form-date" },
      })
      .then((response) => response, setIsLoading(true))
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
    setPageTitle(data && data?.pages?.title);
    setPageLink(data && data?.pages?.page_link);
    setPageDescription(data && data?.pages?.page_discription);
    setPageId(data && data?.pages?.id);

    console.log(data, "single blog");
  };
  const updatePagehandle = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title",pageTitle);
    formData.append("page_link",pageLink);
    formData.append("page_discription",pageDescription);

    const data = await axios
      .post(`${process.env.React_App_Base_Url + "Update-pages/" + pageId}`, formData, {
        headers: { "Content-type": "multipart/form-date" },
      })
      .then((response) => response, setIsLoading(true))
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
      handleClose()
      getAllPagesHandle()

    console.log(data);
  };
  useEffect(() => {
    getAllPagesHandle();
  }, []);
  const { pages, editPagesById } = useContext(DataContext);

  const [editId, setEditId] = useState(null);

  let newData = 0;
  if (editId === 1) {
    newData = pages[0];
  } else if (editId === 2) {
    newData = pages[1];
  } else if (editId === 3) {
    newData = pages[2];
  }

  const [textData, setTextData] = useState(newData.pageTitle);

  // console.log(textData);

  const handleEditSubmit = (e) => {
    e.preventDefault();
    editPagesById(
      editId,
      newData.pageTitle,
      pageLink,
      newData.published,
      textData
    );
    setTextData("");
    setPageLink("");
  };

  // console.log(editId);

  //Modal
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

  const scrollModalStyle = {
    maxHeight: "calc(100vh - 10rem)",
    overflowY: "auto",
  };

  // const modal = (
  //   <Modal
  //     modalHeading={newData.pageTitle}
  //     onClose={closeModal}
  //     actionBar={actionBar}
  //   >
  //     <div
  //       className="flex flex-col gap-[1rem] p-[1rem]"
  //       style={scrollModalStyle}
  //     >
  //       <h3 className="text-[18px] font-semibold">{`Text Content for ${newData.pageTitle}`}</h3>
  //       <p className="rounded-[6px] border p-[1rem]">{newData.textData}</p>

  //       <form action="" className="flex flex-col gap-[1rem]">
  //         <h3 className="text-[18px] font-semibold">{`Enter New Text Content for ${newData.pageTitle}`}</h3>
  //         <textarea
  //           value={textData}
  //           className="w-full rounded-[6px] border p-[1rem]"
  //           type="text"
  //           placeholder="Enter text here"
  //           rows={"7"}
  //           onChange={(event) => setTextData(event.target.value)}
  //         />
  //         <h3 className="text-[18px] font-semibold">{`Enter New Page Link for ${newData.pageTitle}`}</h3>
  //         <input
  //           value={pageLink}
  //           className="w-full rounded-[6px] border p-[1rem]"
  //           type="text"
  //           placeholder="Enter Page Link Here"
  //           onChange={(event) => setPageLink(event.target.value)}
  //         />
  //       </form>
  //       <div className="w-fit border" onClick={closeModal}>
  //         <Button
  //           onClick={handleEditSubmit}
  //           className="w-fit hover:bg-green-700"
  //           success
  //         >
  //           Save Now
  //         </Button>
  //       </div>
  //     </div>
  //   </Modal>
  // );
  //Table
  const data = pages;

  // const config = [
  //   {
  //     label: "S/N",
  //     render: (list) => list.id,
  //     sortValue: (list) => list.id,
  //   },
  //   {
  //     label: "Title",
  //     render: (list) => list.pageTitle,
  //     sortValue: (list) => list.pageTitle,
  //   },
  //   {
  //     label: "Page Link",
  //     render: (list) => list.pageLink,
  //     sortValue: (list) => list.pageLink,
  //   },
  //   {
  //     label: "Published",
  //     render: (list) => <SwitchButton />,
  //     sortValue: (list) => <SwitchButton />,
  //   },
  //   {
  //     label: "Action",
  //     render: (list) => (
  //       <div className="flex flex-row justify-center">
  //         <Button
  //           onClick={() => handleClick(list.id)}
  //           primary
  //           className="flex w-[100px] justify-center text-center"
  //         >
  //           Edit
  //         </Button>
  //       </div>
  //     ),
  //   },
  // ];

  // const keyFn = (list) => {
  //   return list.id;
  // };
  return (
    <div className="products-page flex flex-col gap-[3rem] p-[1rem]">
      <div className="products-page-head flex flex-row items-center justify-between p-[1rem] shadow-lg">
        <h3 className="text-[22px] font-semibold">All Pages</h3>
      </div>
      {/* <Table data={data} config={config} keyFn={keyFn} /> */}

      {/* {showModal && modal} */}
      <div className="adminorderpage_table_table">
        <table>
          <thead>
            <tr>
              <th>S/N</th>
              <th style={{ width: "250px" }}>Page Title</th>
              <th>Page Link</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {allPages?.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item?.title}</td>
                <td>{item?.page_link}</td>
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
                    // onClick={() => getSingleBanner(item?.id)}
                    onClick={() => [singlePageHandle(item?.id), handleOpen()]}
                  />
                  <Delete
                    style={{
                      color: "#6E798C",
                      marginLeft: "5px",
                      marginRight: "5px",
                      cursor: "pointer",
                    }}
                    // onClick={() => [handleOpen2(),setHomepageId(item?.id)]}
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
          <form className="modal_form" onSubmit={updatePagehandle}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              Update Page
            </Typography>
            <p className="modal_form_para">Page Title</p>
            <span>
              <input
                type="text"
                value={pageTitle}
                placeholder="Page Title"
                onChange={(e) => setPageTitle(e.target.value)}
                required
              />
            </span>
            <p className="modal_form_para">Page Link</p>
            <span>
              <input
                type="text"
                value={pageLink}
                placeholder="Page Link"
                onChange={(e) => setPageLink(e.target.value)}
                required
              />
            </span>
            <p className="modal_form_para">Page Description</p>
            <span>
              <JoditEditor 
              value={pageDescription}
              onChange={(newContent)=>setPageDescription(newContent)}
              />
            </span>

            <button className="modal_form_buttom">Update Page Data</button>
          </form>
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
