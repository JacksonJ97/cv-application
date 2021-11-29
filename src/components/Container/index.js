import { useState } from "react";
import uniqueId from "lodash/uniqueId";
import styled from "styled-components";

// Data
import { exampleData, blankData } from "../../config";

// Components
import Form from "../Form";
import Preview from "../Preview";

// Styles
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 100vh;
  width: 100%;
  background-color: #2c394b;
  flex-direction: column;

  @media (min-width: 1300px) {
    flex-direction: row;
  }
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

  const handleDetail = (name, experienceId, detailId, value) => {
    const experienceCopy = [...experienceInfo];
    const index = experienceCopy.findIndex((element) => element.id === experienceId);

    if (name === "detailTextarea") {
      const detailIndex = experienceCopy[index].details.findIndex((element) => element.id === detailId);
      experienceCopy[index].details[detailIndex].text = value;
      setExperienceInfo(experienceCopy);
    }

    if (name === "deleteDetailButton") {
      const newDetails = experienceCopy[index].details.filter((element) => element.id !== detailId);
      experienceCopy[index].details = newDetails;
      setExperienceInfo(experienceCopy);
    }

    if (name === "addDetailButton") {
      experienceCopy[index].details = [...experienceCopy[index].details, { id: uniqueId(), text: "" }];
      setExperienceInfo(experienceCopy);
    }
  };

  const handleDelete = (id, name) => {
    if (name === "experienceDelete") {
      const experienceCopy = [...experienceInfo];
      const newState = experienceCopy.filter((element) => element.id !== id);
      setExperienceInfo(newState);
    }

    if (name === "educationDelete") {
      const educationCopy = [...educationInfo];
      const newState = educationCopy.filter((element) => element.id !== id);
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
    setBasicInfo(exampleData.basicInfo);
    setSummaryInfo(exampleData.summaryInfo);
    setExperienceInfo(exampleData.experienceInfo);
    setEducationInfo(exampleData.educationInfo);
  };

  const handleReset = () => {
    setBasicInfo(blankData.basicInfo);
    setSummaryInfo(blankData.summaryInfo);
    setExperienceInfo(blankData.experienceInfo);
    setEducationInfo(blankData.educationInfo);
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
        handleDelete={handleDelete}
        handleAdd={handleAdd}
        handleLoadExample={handleLoadExample}
        handleReset={handleReset}
      />
      <Preview basicInfo={basicInfo} summaryInfo={summaryInfo} experienceInfo={experienceInfo} educationInfo={educationInfo} />
    </Wrapper>
  );
};

export default Container;
