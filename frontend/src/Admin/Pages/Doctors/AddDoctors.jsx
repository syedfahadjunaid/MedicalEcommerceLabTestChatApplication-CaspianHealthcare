import React from 'react';
import DoctorsPage from './DoctorsPage';
// import DragDropComponent from '../../components/DragDropComponent/DragDropComponent';
import './AddDoctors.css';
import { useState } from 'react';
import Dropdown from '../../components/Dropdown';
import ListComp from '../../components/ListComp/ListComp';
import Button from '../../components/Button';

import { useContext } from 'react';
import DataContext from '../../../context api/StateProvider';

export default function AddDoctors() {
  const { handleCreateDoctors } = useContext(DataContext);

  const [doctorPhoto, setDoctorPhoto] = useState([]);
  const [doctorFirstName, setDoctorFirstName] = useState('');
  const [doctorLastName, setDoctorLastName] = useState('');
  const [doctorEmail, setDoctorEmail] = useState('');
  const [doctorMobile, setDoctorMobile] = useState('');
  const [doctorDOB, setDoctorDOB] = useState('');
  const [doctorGender, setDoctorGender] = useState({});
  const [doctorZipcode, setDoctorZipcode] = useState('');
  const [doctorCity, setDoctorCity] = useState('');
  const [doctorRole, setDoctorRole] = useState('');
  const [doctorAddress, setDoctorAddress] = useState('');
  const [doctorBio, setDoctorBio] = useState('');
  const [doctorMainSpecialization, setDoctorMainSpecialization] = useState('');
  const [doctorSecondarySpecialization, setDoctorSecondarySpecialization] =
    useState('');
  const [doctorMedicalEducation, setDoctorMedicalEducation] = useState('');
  const [doctorExperience, setDoctorExperience] = useState('');

  // console.log(doctorRole);

  const handleAddSubmit = (e) => {
    e.preventDefault();
    handleCreateDoctors({
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
      doctorExperience,
    });
  };

  // console.log(doctorPhoto);

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
            rows={'7'}
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
          onClick={handleAddSubmit}
          success
          className="w-fit hover:bg-green-700"
        >
          Save Now
        </Button>
      </form>
    </div>
  );
  return (
    <DoctorsPage
      name={'Doctors'}
      addBtn={'Add Doctor'}
      modalHeading={'Add Doctor'}
      modalContent={doctorForm}
    />
  );
}
