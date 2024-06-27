import React from 'react';
import Button from '../../components/Button';
// import DragDropComponent from '../../components/DragDropComponent/DragDropComponent';

// import Img from '../../assets/invoiceImg.jpg';

import { useContext, useState } from 'react';
import DataContext from '../../../context api/StateProvider';
import JoditEditor from 'jodit-react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';

export default function AboutPage() {
  const { aboutUs, handleCreateAboutUs, deleteAboutUsById, editAboutUsById } =
    useContext(DataContext);

  const [mainImg, setMainImg] = useState(aboutUs.mainImg);
  const [title1, setTitle1] = useState(aboutUs.title1);
  const [textForTitle1, setTextForTitle1] = useState(aboutUs.textForTitle1);
  const [img1ForSection, setImg1ForSection] = useState(aboutUs.img1ForSection);
  const [img2ForSection, setImg2ForSection] = useState(aboutUs.img2ForSection);
  const [img3ForSection, setImg3ForSection] = useState(aboutUs.img3ForSection);
  const [title2, setTitle2] = useState(aboutUs.title2);
  const [textForTitle2, setTextForTitle2] = useState(aboutUs.textForTitle2);
  const [imgForCard1, setImgForCard1] = useState(aboutUs.imgForCard1);
  const [titleForCard1, setTitleForCard1] = useState(aboutUs.titleForCard1);
  const [textForCard1, setTextForCard1] = useState(aboutUs.textForCard1);
  const [imgForCard2, setImgForCard2] = useState(aboutUs.imgForCard2);
  const [titleForCard2, setTitleForCard2] = useState(aboutUs.titleForCard2);
  const [textForCard2, setTextForCard2] = useState(aboutUs.textForCard2);
  const [imgForCard3, setImgForCard3] = useState(aboutUs.imgForCard3);
  const [titleForCard3, setTitleForCard3] = useState(aboutUs.titleForCard3);
  const [textForCard3, setTextForCard3] = useState(aboutUs.textForCard3);

  // const handleCreateSubmit = (e) => {
  //   e.preventDefault();
  //   handleCreateAboutUs({
  //     mainImg,
  //     title1,
  //     textForTitle1,
  //     img1ForSection,
  //     img2ForSection,
  //     img3ForSection,
  //     title2,
  //     textForTitle2,
  //     imgForCard1,
  //     titleForCard1,
  //     textForCard1,
  //     imgForCard2,
  //     titleForCard2,
  //     textForCard2,
  //     imgForCard3,
  //     titleForCard3,
  //     textForCard3,
  //   });
  // };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    editAboutUsById(
      1,
      mainImg,
      title1,
      textForTitle1,
      img1ForSection,
      img2ForSection,
      img3ForSection,
      title2,
      textForTitle2,
      imgForCard1,
      titleForCard1,
      textForCard1,
      imgForCard2,
      titleForCard2,
      textForCard2,
      imgForCard3,
      titleForCard3,
      textForCard3
    );
  };
  const notify = () => toast.success("Successfully Submitted!");
  const notify1 = () => toast.warning("Something Went Wrong!");
  const [isLoading,setIsLoading]=useState(false)
const updateAboutPagehandle=async(e)=>{
  e.preventDefault();
  const formData =new FormData();
  formData.append("main_image",mainImg );
  formData.append("title1", title1);
  formData.append("text_for_title1", textForTitle1);
  formData.append("image1", img1ForSection);
  formData.append("image2", img2ForSection);
  formData.append("image3", img3ForSection);
  formData.append("title2", title2);
  formData.append("text_for_title2", textForTitle2);
  formData.append("card1", imgForCard1);
  formData.append("card2", imgForCard2);
  formData.append("card3",imgForCard3 );
  formData.append("title_for_card_1", titleForCard1);
  formData.append("title_for_card_2", titleForCard2);
  formData.append("title_for_card_3", titleForCard3);
  formData.append("text_for_card_1", textForCard1);
  formData.append("text_for_card_2", textForCard2);
  formData.append("text_for_card_3", textForCard3);
  const data  = await axios
    .post(`${process.env.React_App_Base_Url+"Update-About-us/"+1}`, formData, {
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

  console.log(data);
}
  return (
    <div className="appearance-page flex flex-col gap-[2rem] p-[1rem]">
      <div className="products-page-head flex flex-row items-center justify-between p-[1rem] shadow-lg">
        <h3 className="text-[22px] font-semibold">About Page</h3>
        <div className="flex flex-row gap-[2rem]"></div>
      </div>
      <div className="border">
        <h2 className="border-b p-[1rem] text-[22px] font-semibold">
          Intro Section
        </h2>
        <form action="" className="flex flex-col gap-[1rem] p-[1rem]" onSubmit={updateAboutPagehandle}>
          <label htmlFor="">Main Image</label>
          <input
            type="file"
            onChange={(event) => setMainImg(event.target.files[0])}
            required
          />

          <label htmlFor="">Title 1</label>
          <input
            value={title1}
            className="border p-[1rem]"
            type="text"
            placeholder="Enter Title"
            onChange={(event) => setTitle1(event.target.value)}
            required
          />

          <label htmlFor="">Text for Title1</label>
          {/* <textarea
           
            className="border p-[1rem]"
            type="text"
            placeholder="Enter Text"
            rows={'3'}
           
          
          /> */}
          <JoditEditor
           value={textForTitle1}
           onChange={(newContent) => setTextForTitle1(newContent)}
           required
          />

          <p className="font-semibold">Images</p>
          <div className="flex flex-row justify-between border-b p-[10px]">
            <div className="flex flex-col gap-[10px]">
              <label htmlFor="">Image 1</label>
              <input
                type="file"
                onChange={(event) => setImg1ForSection(event.target.files[0])}
                required
              />
            </div>
            <div className="flex flex-col gap-[10px]">
              <label htmlFor="">Image 2</label>
              <input
                type="file"
                onChange={(event) => setImg2ForSection(event.target.files[0])}
                required
              />
            </div>
            <div className="flex flex-col gap-[10px]">
              <label htmlFor="">Image 3</label>
              <input
                type="file"
                onChange={(event) => setImg3ForSection(event.target.files[0])}
                required
              />
            </div>
          </div>

          <label htmlFor="">Title 2</label>
          <input
            value={title2}
            className="border p-[1rem]"
            type="text"
            placeholder="Enter Title"
            onChange={(event) => setTitle2(event.target.value)}
            required
          />

          <label htmlFor="">Text for Title 2</label>
          <textarea
            value={textForTitle2}
            className="border p-[1rem]"
            type="text"
            placeholder="Enter Text"
            rows={'3'}
            onChange={(event) => setTextForTitle2(event.target.value)}
            required
          />

          <p className="border-b p-[10px] text-[22px] font-semibold">Cards</p>
          <div className="flex flex-col gap-[1rem] border p-[1rem]">
            <p className="font-semibold">Card 1</p>
            <label htmlFor="">Image for Card 1</label>
            <input
              type="file"
              onChange={(event) => setImgForCard1(event.target.files[0])}
              required
            />

            <label htmlFor="">Title for Card 1</label>
            <input
              value={titleForCard1}
              className="border p-[1rem]"
              type="text"
              placeholder="Enter Title"
              onChange={(event) => setTitleForCard1(event.target.value)}
              required
            />

            <label htmlFor="">Text for Card 1</label>
            <input
              value={textForCard1}
              className="border p-[1rem]"
              type="text"
              placeholder="Enter Text"
              onChange={(event) => setTextForCard1(event.target.value)}
              required
            />
          </div>

          <div className="flex flex-col gap-[1rem] border p-[1rem]">
            <p className="font-semibold">Card 2</p>
            <label htmlFor="">Image for Card 2</label>
            <input
              type="file"
              onChange={(event) => setImgForCard2(event.target.files[0])}
              required
            />

            <label htmlFor="">Title for Card 2</label>
            <input
              value={titleForCard2}
              className="border p-[1rem]"
              type="text"
              placeholder="Enter Title"
              onChange={(event) => setTitleForCard2(event.target.value)}
              required
            />

            <label htmlFor="">Text for Card 2</label>
            <input
              value={textForCard2}
              className="border p-[1rem]"
              type="text"
              placeholder="Enter Text"
              onChange={(event) => setTextForCard2(event.target.value)}
              required
            />
          </div>

          <div className="flex flex-col gap-[1rem] border p-[1rem]">
            <p className="font-semibold">Card 3</p>
            <label htmlFor="">Image for Card 3</label>
            <input
              type="file"
              onChange={(event) => setImgForCard3(event.target.files[0])}
              required
            />

            <label htmlFor="">Title for Card 3</label>
            <input
              value={titleForCard3}
              className="border p-[1rem]"
              type="text"
              placeholder="Enter Title"
              onChange={(event) => setTitleForCard3(event.target.value)}
              required
            />

            <label htmlFor="">Text for Card 3</label>
            <input
              value={textForCard3}
              className="border p-[1rem]"
              type="text"
              placeholder="Enter Text"
              onChange={(event) => setTextForCard3(event.target.value)}
              required
            />
          </div>

          <button
           type='submit'
            className="w-fit rounded-[8px] bg-green-500 hover:bg-green-600 p-2 color-white"
          >
           Update About Us Page
          </button>
        </form>
      </div>
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
