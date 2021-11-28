import React, { useState } from "react";
import uniqueId from "lodash/uniqueId";
import styled from "styled-components";

// Components
import Form from "../Form";
import Preview from "../Preview";

// Styles
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 100vh;
  background-color: #2c394b;
`;

const Container = () => {
  const [basicInfo, setBasicInfo] = useState({
    firstName: "",
    lastName: "",
    address: "",
    phoneNumber: "",
    email: "",
  });

  const [summaryInfo, setSummaryInfo] = useState("");

  const [experienceInfo, setExperienceInfo] = useState([
    {
      id: uniqueId(),
      company: "",
      startDate: "",
      endDate: "",
      details: [{ id: uniqueId(), text: "" }],
    },
  ]);

  const [educationInfo, setEducationInfo] = useState([
    {
      id: uniqueId(),
      school: "",
      degree: "",
      location: "",
      startDate: "",
      endDate: "",
    },
  ]);

  const handleChange = (value, name, id, section) => {
    setBasicInfo((prevState) => {
      return { ...prevState, [name]: value };
    });

    if (name === "summary") {
      setSummaryInfo(value);
      console.log(value);
    }

    if (section === "experience") {
      setExperienceInfo((prevState) => {
        let newState = prevState;
        let index = newState.findIndex((element) => element.id === id);
        newState[index][name] = value;
        return newState;
      });
    }

    if (section === "education") {
      setEducationInfo((prevState) => {
        let newState = prevState;
        let index = newState.findIndex((element) => element.id === id);
        newState[index][name] = value;
        return newState;
      });
    }
  };

  const handleDetail = (value, experienceId, detailId) => {
    let experienceCopy = [...experienceInfo];
    let index = experienceCopy.findIndex((element) => element.id === experienceId);
    let detailIndex = experienceCopy[index].details.findIndex((element) => element.id === detailId);
    experienceCopy[index].details[detailIndex].text = value;
    setExperienceInfo(experienceCopy);
  };

  const handleAddDetail = (id) => {
    let experienceCopy = [...experienceInfo];
    let index = experienceCopy.findIndex((element) => element.id === id);
    experienceCopy[index].details = [...experienceCopy[index].details, { id: uniqueId(), text: "" }];
    setExperienceInfo(experienceCopy);
  };

  const handleDeleteDetail = (experienceId, detailId) => {
    let experienceCopy = [...experienceInfo];
    let index = experienceCopy.findIndex((element) => element.id === experienceId);
    let newDetails = experienceCopy[index].details.filter((element) => element.id !== detailId);
    experienceCopy[index].details = newDetails;
    setExperienceInfo(experienceCopy);
  };

  const handleDelete = (id, name) => {
    if (name === "experienceDelete") {
      let experienceCopy = [...experienceInfo];
      let newState = experienceCopy.filter((element) => element.id !== id);
      setExperienceInfo(newState);
    }

    if (name === "educationDelete") {
      let educationCopy = [...educationInfo];
      let newState = educationCopy.filter((element) => element.id !== id);
      setEducationInfo(newState);
    }
  };

  const handleAdd = (name) => {
    if (name === "experienceAdd") {
      setExperienceInfo((prevState) => {
        return [...prevState, { id: uniqueId(), company: "", startDate: "", endDate: "", details: [{ id: uniqueId(), text: "" }] }];
      });
    }

    if (name === "educationAdd") {
      setEducationInfo((prevState) => {
        return [...prevState, { id: uniqueId(), school: "", degree: "", location: "", startDate: "", endDate: "" }];
      });
    }
  };

  const handleLoadExample = () => {
    setBasicInfo({
      firstName: "John",
      lastName: "Smith",
      address: "123 Random Street",
      phoneNumber: "123-456-7890",
      email: "example@gmail.com",
    });

    setSummaryInfo(
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    );

    setExperienceInfo([
      {
        id: uniqueId(),
        company: "Example Company",
        startDate: "April 2019",
        endDate: "March 2020",
        details: [
          { id: uniqueId(), text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit" },
          { id: uniqueId(), text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit" },
        ],
      },
      {
        id: uniqueId(),
        company: "Example Company",
        startDate: "April 2017",
        endDate: "March 2019",
        details: [
          { id: uniqueId(), text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit" },
          { id: uniqueId(), text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit" },
        ],
      },
    ]);

    setEducationInfo([
      {
        id: uniqueId(),
        school: "Havard University",
        degree: "Bachelor of Engineering (BEng) in Computer Engineering",
        location: "Cambridge, MA",
        startDate: "Sept 2020",
        endDate: "April 2021",
      },
      {
        id: uniqueId(),
        school: "Ryerson University",
        degree: "Bachelor of Engineering (BEng) in Electrical Engineering",
        location: "Toronto, ON",
        startDate: "Sept 2015",
        endDate: "April 2020",
      },
    ]);
  };

  return (
    <Wrapper>
      <Form
        basicInfo={basicInfo}
        summaryInfo={summaryInfo}
        experienceInfo={experienceInfo}
        educationInfo={educationInfo}
        handleChange={handleChange}
        handleDetail={handleDetail}
        handleAddDetail={handleAddDetail}
        handleDeleteDetail={handleDeleteDetail}
        handleDelete={handleDelete}
        handleAdd={handleAdd}
        handleLoadExample={handleLoadExample}
      />
      <Preview basicInfo={basicInfo} summaryInfo={summaryInfo} experienceInfo={experienceInfo} educationInfo={educationInfo} />
    </Wrapper>
  );
};

export default Container;
