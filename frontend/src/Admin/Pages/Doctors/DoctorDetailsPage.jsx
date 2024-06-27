import React from 'react';
import './DoctorDetailsPage.css';

import { useContext } from 'react';
import DoctorContext from '../../../context api/StateProvider';

import Button from '../../components/Button';
import Modal from '../../components/Modal';

// import DragDropComponent from '../../components/DragDropComponent/DragDropComponent';
import Dropdown from '../../components/Dropdown';
import ListComp from '../../components/ListComp/ListComp';

import { useState } from 'react';
import DataContext from '../../../context api/StateProvider';

export default function DoctorDetailsPage() {
  const { seeDoctorsInfo } = useContext(DoctorContext);

  const { doctors, editDoctorsById } = useContext(DataContext);

  const [doctorPhoto, setDoctorPhoto] = useState(doctors.doctorPhoto);
  const [doctorFirstName, setDoctorFirstName] = useState(
    doctors.doctorFirstName
  );
  const [doctorLastName, setDoctorLastName] = useState(doctors.doctorLastName);
  const [doctorEmail, setDoctorEmail] = useState(doctors.doctorEmail);
  const [doctorMobile, setDoctorMobile] = useState(doctors.doctorMobile);
  const [doctorDOB, setDoctorDOB] = useState(doctors.doctorDOB);
  const [doctorGender, setDoctorGender] = useState(doctors.doctorGender);
  const [doctorZipcode, setDoctorZipcode] = useState(doctors.doctorZipcode);
  const [doctorCity, setDoctorCity] = useState(doctors.doctorCity);
  const [doctorRole, setDoctorRole] = useState(doctors.doctorRole);
  const [doctorAddress, setDoctorAddress] = useState(doctors.doctorAddress);
  const [doctorBio, setDoctorBio] = useState(doctors.doctorBio);
  const [doctorMainSpecialization, setDoctorMainSpecialization] = useState(
    doctors.doctorMainSpecialization
  );
  const [doctorSecondarySpecialization, setDoctorSecondarySpecialization] =
    useState(doctors.doctorSecondarySpecialization);
  const [doctorMedicalEducation, setDoctorMedicalEducation] = useState(
    doctors.doctorMedicalEducation
  );
  const [doctorExperience, setDoctorExperience] = useState(
    doctors.doctorMedicalEducation
  );

  // console.log(doctors[0].doctorPhoto);
  const [editId, setEditId] = useState(null);

  const handleEditSubmit = (e) => {
    e.preventDefault();
    editDoctorsById(
      editId,
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
    );
  };

  const scrolltModalStyle = {
    maxHeight: 'calc(100vh - 8rem)',
    overflowY: 'auto',
  };

  // /////Update Product -------------------------------
  const updateProductModalStyle = {
    maxHeight: 'calc(100vh - 10rem)',
    overflowY: 'auto',
  };

  //Dropdown
  // const [selectedOption, setSelectedOption] = useState(null);
  // const handleSelect = (option) => {
  //   setSelectedOption(option);
  // };

  // const options = [
  //   { label: 'Option1', value: 'opt1' },
  //   { label: 'Option2', value: 'opt2' },
  //   { label: 'Option3', value: 'opt3' },
  // ];

  //Dropdown - City
  const [selectedOption1, setSelectedOption1] = useState(null);
  const handleSelect1 = (option) => {
    setSelectedOption1(option);
    setDoctorGender(option);
  };

  const options1 = [
    { label: 'Male', value: 'opt1' },
    { label: 'Female', value: 'opt2' },
    { label: 'Other', value: 'opt3' },
  ];

  //Dropdown - Main Specialization
  // const [selectedOption2, setSelectedOption2] = useState(null);
  // const handleSelect2 = (option) => {
  //   setSelectedOption2(option);
  // };

  // const options2 = [
  //   { label: 'Option1', value: 'opt1' },
  //   { label: 'Option2', value: 'opt2' },
  //   { label: 'Option3', value: 'opt3' },
  // ];

  //Dropdown - Secondary Specialization
  // const [selectedOption3, setSelectedOption3] = useState(null);
  // const handleSelect3 = (option) => {
  //   setSelectedOption3(option);
  // };

  // const options3 = [
  //   { label: 'Option1', value: 'opt1' },
  //   { label: 'Option2', value: 'opt2' },
  //   { label: 'Option3', value: 'opt3' },
  // ];

  //Dropdown - Medical Education
  // const [selectedOption4, setSelectedOption4] = useState(null);
  // const handleSelect4 = (option) => {
  //   setSelectedOption4(option);
  // };

  // const options4 = [
  //   { label: 'Option1', value: 'opt1' },
  //   { label: 'Option2', value: 'opt2' },
  //   { label: 'Option3', value: 'opt3' },
  // ];

  //Dropdown - Experience
  // const [selectedOption5, setSelectedOption5] = useState(null);
  // const handleSelect5 = (option) => {
  //   setSelectedOption5(option);
  // };

  // const options5 = [
  //   { label: 'Option1', value: 'opt1' },
  //   { label: 'Option2', value: 'opt2' },
  //   { label: 'Option3', value: 'opt3' },
  // ];

  const doctorRoleData = ['Role1', 'Role2', 'Role3', 'Role4', 'Role5'];

  const doctorForm = (
    <div className="flex flex-col border" style={updateProductModalStyle}>
      <div className="border-b p-[1rem]">
        <h3 className="text-[22px] font-semibold">Personal Information</h3>
      </div>

      <form action="" className="flex flex-col gap-[2rem] p-[1rem]">
        <div className="flex flex-col gap-[10px]">
          <label htmlFor="">Upload Photo</label>
          <input
            type="file"
            onChange={(event) => setDoctorPhoto(event.target.files[0])}
          />
        </div>
        <div className="flex flex-col gap-[10px]">
          <label htmlFor="">First Name</label>
          <input
            value={doctorFirstName}
            type="text"
            placeholder="Enter First Name"
            className="border p-[1rem]"
            onChange={(event) => setDoctorFirstName(event.target.value)}
          />
        </div>
        <div className="flex flex-col gap-[10px]">
          <label htmlFor="">Last Name</label>
          <input
            value={doctorLastName}
            type="text"
            placeholder="Enter Last Name"
            className="border p-[1rem]"
            onChange={(event) => setDoctorLastName(event.target.value)}
          />
        </div>

        <div className="flex flex-col gap-[10px]">
          <label htmlFor="">Email</label>
          <input
            value={doctorEmail}
            type="text"
            placeholder="Enter Email"
            className="border p-[1rem]"
            onChange={(event) => setDoctorEmail(event.target.value)}
          />
        </div>
        <div className="flex flex-col gap-[10px]">
          <label htmlFor="">Mobile</label>
          <input
            value={doctorMobile}
            type="text"
            placeholder="Enter Mobile Number"
            className="border p-[1rem]"
            onChange={(event) => setDoctorMobile(event.target.value)}
          />
        </div>
        <div className="flex flex-col gap-[10px]">
          <label htmlFor="">Date Of Birth</label>
          <input
            type="date"
            className="border p-[1rem]"
            onChange={(event) => setDoctorDOB(event.target.value)}
          />
        </div>
        <div className="flex flex-col gap-[10px]">
          <label htmlFor="">Gender</label>
          <Dropdown
            options={options1}
            onChange={handleSelect1}
            value={selectedOption1}
          />
        </div>
        <div className="flex flex-col gap-[10px]">
          <label htmlFor="">ZipCode</label>
          <input
            value={doctorZipcode}
            type="text"
            placeholder="Enter Zipcode"
            className="border p-[1rem]"
            onChange={(event) => setDoctorZipcode(event.target.value)}
          />
        </div>
        <div className="flex flex-col gap-[10px]">
          <label htmlFor="">City</label>
          <input
            type="text"
            placeholder="Enter City"
            className="border p-[1rem]"
            onChange={(event) => setDoctorCity(event.target.value)}
          />
          {/* <Dropdown
            options={options}
            handleSelect={handleSelect}
            selectedOption={selectedOption}
          /> */}
        </div>
        <div className="flex flex-col gap-[10px]">
          <label htmlFor="">Doctor Role</label>
          <div className="border">
            <ListComp data={doctorRoleData} setDoctorRole={setDoctorRole} />
          </div>
        </div>
        <div className="flex flex-col gap-[10px]">
          <label htmlFor="">Address</label>
          <textarea
            value={doctorAddress}
            type="text"
            placeholder="Enter Address"
            className="border p-[1rem]"
            rows={'3'}
            onChange={(event) => setDoctorAddress(event.target.value)}
          />
        </div>
        <div className="flex flex-col gap-[10px]">
          <label htmlFor="">BIO</label>
          <textarea
            value={doctorBio}
            type="text"
            placeholder="Enter Bio"
            className="border p-[1rem]"
            rows={'3'}
            onChange={(event) => setDoctorBio(event.target.value)}
          />
        </div>
        <div className="border-b">
          <h3 className="text-[22px] font-semibold">Medical Information</h3>
        </div>
        <div className="add-doctor-medical-info gap-[1rem]">
          <div className="flex flex-col gap-[10px]">
            <label htmlFor="">Main Specialization</label>
            <input
              value={doctorMainSpecialization}
              type="text"
              placeholder="Enter Main Specialization"
              className="border p-[1rem]"
              onChange={(event) =>
                setDoctorMainSpecialization(event.target.value)
              }
            />
            {/* <Dropdown
              options={options2}
              handleSelect={handleSelect2}
              selectedOption={selectedOption2}
            /> */}
          </div>
          <div className="flex flex-col gap-[10px]">
            <label htmlFor="">Secondary Specialization</label>
            <input
              value={doctorSecondarySpecialization}
              type="text"
              placeholder="Enter Secondary Specialization"
              className="border p-[1rem]"
              onChange={(event) =>
                setDoctorSecondarySpecialization(event.target.value)
              }
            />
            {/* <Dropdown
              options={options3}
              handleSelect={handleSelect3}
              selectedOption={selectedOption3}
            /> */}
          </div>
          <div className="flex flex-col gap-[10px]">
            <label htmlFor="">Medical Education</label>
            <input
              value={doctorMedicalEducation}
              type="text"
              placeholder="Enter Medical Education"
              className="border p-[1rem]"
              onChange={(event) =>
                setDoctorMedicalEducation(event.target.value)
              }
            />
            {/* <Dropdown
              options={options4}
              handleSelect={handleSelect4}
              selectedOption={selectedOption4}
            /> */}
          </div>
          <div className="flex flex-col gap-[10px]">
            <label htmlFor="">Experience</label>
            <input
              value={doctorExperience}
              type="text"
              placeholder="Enter Experience"
              className="border p-[1rem]"
              onChange={(event) => setDoctorExperience(event.target.value)}
            />
          </div>
        </div>
        <Button
          onClick={handleEditSubmit}
          success
          className="w-fit hover:bg-green-700"
        >
          Save Now
        </Button>
      </form>
    </div>
  );

  //Modal

  // console.log(editId);

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
      <Button onClick={closeModal} className="bg-[#1f1f1f]">
        Back
      </Button>
    </div>
  );

  const modal = (
    <Modal onClose={closeModal} actionBar={actionBar}>
      {doctorForm}
    </Modal>
  );
  // console.log(seeDoctorsInfo);
  return (
    <div
      className="appearance-page flex flex-col gap-[2rem] p-[1rem]"
      style={scrolltModalStyle}
    >
      <div className="products-page-head flex flex-row items-center justify-between p-[1rem] shadow-lg">
        <h3 className="text-[22px] font-semibold">Doctor Information</h3>
        <div className="flex flex-row gap-[2rem]">
          <Button
            onClick={() => handleClick(seeDoctorsInfo.id)}
            className={`flex h-[3rem] w-48 flex-row items-center justify-center gap-[4px] rounded-[0.25rem] bg-green-500 text-white shadow hover:bg-green-600`}
          >
            <p>Edit</p>
          </Button>
        </div>
      </div>
      <div className="flex flex-row gap-[1rem]">
        <div className="flex w-[40%] flex-col gap-[10px]">
          <div className="flex flex-row justify-center">
            <img
              className="h-[350px] w-[300px] rounded-[2px]"
              src={seeDoctorsInfo.doctorPhoto}
              alt={`${seeDoctorsInfo.doctorFirstName}-${seeDoctorsInfo.id}-img`}
            />
          </div>
        </div>
        <div className="flex w-[60%] flex-col gap-[1rem]">
          <h2 className="text-[22px] font-semibold">{`${seeDoctorsInfo.doctorFirstName}-${seeDoctorsInfo.doctorLastName}`}</h2>
          <div className="flex flex-row gap-[8px]">
            <p>{seeDoctorsInfo.doctorDOB},</p>
            <p>{seeDoctorsInfo.doctorGender.label}</p>
          </div>
          <div className="flex flex-row gap-[1rem]">
            <div className="flex flex-col gap-[8px]">
              <h3 className="font-semibold">Mobile</h3>
              <p className="w-fit border-2 border-solid border-green-700 p-[8px] text-green-700">
                {seeDoctorsInfo.doctorMobile}
              </p>
            </div>
            <div className="flex flex-col gap-[8px]">
              <h3 className="font-semibold">Email</h3>
              <p className="w-fit border-2 border-solid border-green-700 p-[8px] text-green-700">
                {seeDoctorsInfo.doctorEmail}
              </p>
            </div>
          </div>
          <p className="break-all text-justify">{seeDoctorsInfo.doctorBio}</p>
        </div>
      </div>
      {showModal && modal}
    </div>
  );
}
