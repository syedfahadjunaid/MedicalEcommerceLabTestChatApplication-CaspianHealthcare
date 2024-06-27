import { LocationOn, Search } from "@mui/icons-material";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React, { useState } from "react";
import Button from "../../Button/Button";
import "./LabTestNav.css";

import { useEffect, useRef } from "react";
function LabTestNav({ data, testData }) {
  // const [age, setAge] = React.useState("");

  // console.log(testData);

  const [searchLocation, setSearchLocation] = useState([]);
  const [searchLoactionListView, setSearchLocationListView] = useState();

  const [searchTest, setSearchTest] = useState([]);
  const [searchTestListView, setSearchTestListView] = useState();

  // console.log(data);

  const locationRef = useRef();
  const testRef = useRef();

  const testCardRef = useRef();

  useEffect(() => {
    const handler = (event) => {
      if (!locationRef.current) {
        return;
      } else if (!locationRef.current.contains(event.target)) {
        setSearchLocationListView(false);
      }
    };

    document.addEventListener("click", handler, true);

    return () => document.removeEventListener("click", handler);
  }, []);

  useEffect(() => {
    const handler = (event) => {
      if (!testRef.current) {
        return;
      } else if (!testRef.current.contains(event.target)) {
        setSearchTestListView(false);
      }
    };

    document.addEventListener("click", handler, true);

    return () => document.removeEventListener("click", handler);
  }, []);

  const handleSearchByLocation = (e) => {
    let updatedData = [...new Set(data.map((l) => l.city))];
    updatedData = updatedData.filter((location) => {
      return (
        location.toLowerCase().indexOf(e.target.value.toLowerCase()) !== -1
      );
    });
    setSearchLocation(updatedData);
  };

  const handleSearchTest = (e) => {
    let updatedData = [...new Set(testData.map((t) => t.name))];
    updatedData = updatedData.filter((test) => {
      return test.toLowerCase().indexOf(e.target.value.toLowerCase()) !== -1;
    });
    setSearchTest(updatedData);
  };

  console.log(searchTest);

  // const handleChange = (event) => {
  //   setAge(event.target.value);
  // };

  const labNames = data?.map((lab, index) => {
    return <option key={index}>{lab.lab_name}</option>;
  });
  return (
    <div className='labtestnav'>
      <div
        onClick={() => setSearchLocationListView(true)}
        style={{ position: "relative" }}>
        <div className='labtestnav_location'>
          <input
            type='text'
            placeholder='Location'
            onChange={handleSearchByLocation}
          />
          <LocationOn style={{ color: "#DC3545" }} />
        </div>
        {searchLoactionListView && (
          <div
            ref={locationRef}
            style={{
              position: "absolute",
              backgroundColor: "white",
              width: "100%",
            }}>
            {searchLocation?.map((city, index) => {
              return (
                <p
                  className='lab-test-location-input'
                  style={{ padding: "8px" }}
                  key={index}>
                  {city}
                </p>
              );
            })}
          </div>
        )}
      </div>
      <div className='labtestnav_alltab'>
        <select placeholder='All Test '>{labNames}</select>
      </div>
      <div
        onClick={() => setSearchTestListView(true)}
        style={{ position: "relative" }}>
        <div className='labtestnav_search'>
          <input
            onChange={handleSearchTest}
            type='text'
            placeholder='Search Health Tests'
          />
          <Search />
        </div>
        {searchTestListView && (
          <div
            ref={testRef}
            style={{
              position: "absolute",
              backgroundColor: "white",
              width: "100%",
            }}>
            {searchTest?.map((test, index) => {
              return (
                <p
                  className='lab-test-location-input'
                  style={{ padding: "8px" }}
                  key={index}>
                  {test}
                </p>
              );
            })}
          </div>
        )}
      </div>
      <span>
        <span style={{ marginRight: "10px" }}>
          <Button
            className='labtestnav_button'
            bg='#356FD2'
            color='#fff'
            link='/orderwithpriciption'>
            Book test from prescription
          </Button>
        </span>
        <span style={{ marginLeft: "10px" }}>
          <Button bg='#28A745' color='#fff'>
            find my test
          </Button>
        </span>
      </span>
    </div>
  );
}

export default LabTestNav;
