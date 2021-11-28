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

  // const handleDetail(value, experienceId, detailId) {
  //   let experienceCopy = [...this.state.experience];
  //   let index = experienceCopy.findIndex((element) => element.id === experienceId);
  //   let detailIndex = experienceCopy[index].details.findIndex((element) => element.id === detailId);
  //   experienceCopy[index].details[detailIndex].text = value;
  //   this.setState({ experienceCopy });
  // }

  // const handleAddDetail(id) {
  //   let experienceCopy = [...this.state.experience];
  //   let index = experienceCopy.findIndex((element) => element.id === id);
  //   experienceCopy[index].details = [...this.state.experience[index].details, { id: uniqueId(), text: "" }];
  //   this.setState({ experienceCopy });
  // }

  // const handleDeleteDetail(experienceId, detailId) {
  //   let experienceCopy = [...this.state.experience];
  //   let index = experienceCopy.findIndex((element) => element.id === experienceId);
  //   let newDetails = experienceCopy[index].details.filter((element) => element.id !== detailId);
  //   experienceCopy[index].details = newDetails;
  //   this.setState({ experience: experienceCopy });
  // }

  // const handleDelete(id, name) {
  //   if (name === "experienceDelete") {
  //     let experienceCopy = [...this.state.experience];
  //     let newState = experienceCopy.filter((element) => element.id !== id);
  //     this.setState({ experience: newState });
  //   }

  //   if (name === "educationDelete") {
  //     let educationCopy = [...this.state.education];
  //     let newState = educationCopy.filter((element) => element.id !== id);
  //     this.setState({ education: newState });
  //   }
  // }

  // const handleAdd(name) {
  //   if (name === "experienceAdd") {
  //     this.setState({
  //       experience: [
  //         ...this.state.experience,
  //         { id: uniqueId(), company: "", startDate: "", endDate: "", details: [{ id: uniqueId(), text: "" }] },
  //       ],
  //     });
  //   }

  //   if (name === "educationAdd") {
  //     this.setState({
  //       education: [...this.state.education, { id: uniqueId(), school: "", degree: "", location: "", startDate: "", endDate: "" }],
  //     });
  //   }
  // }

  // const handleLoadExample() {
  //   this.setState({
  //     firstName: "John",
  //     lastName: "Smith",
  //     address: "123 Random Street",
  //     phoneNumber: "123-456-7890",
  //     email: "example@gmail.com",
  //     summary:
  //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  //     experience: [
  //       {
  //         id: uniqueId(),
  //         company: "Example Company",
  //         startDate: "April 2019",
  //         endDate: "March 2020",
  //         details: [
  //           { id: uniqueId(), text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit" },
  //           { id: uniqueId(), text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit" },
  //         ],
  //       },
  //       {
  //         id: uniqueId(),
  //         company: "Example Company",
  //         startDate: "April 2017",
  //         endDate: "March 2019",
  //         details: [
  //           { id: uniqueId(), text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit" },
  //           { id: uniqueId(), text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit" },
  //         ],
  //       },
  //     ],
  //     education: [
  //       {
  //         id: uniqueId(),
  //         school: "Havard University",
  //         degree: "Bachelor of Engineering (BEng) in Computer Engineering",
  //         location: "Cambridge, MA",
  //         startDate: "Sept 2020",
  //         endDate: "April 2021",
  //       },
  //       {
  //         id: uniqueId(),
  //         school: "Ryerson University",
  //         degree: "Bachelor of Engineering (BEng) in Electrical Engineering",
  //         location: "Toronto, ON",
  //         startDate: "Sept 2015",
  //         endDate: "April 2020",
  //       },
  //     ],
  //   });
  // }

  return (
    <Wrapper>
      <Form
        basicInfo={basicInfo}
        summaryInfo={summaryInfo}
        experienceInfo={experienceInfo}
        educationInfo={educationInfo}
        handleChange={handleChange}
        // handleDetail={this.handleDetail}
        // handleAddDetail={this.handleAddDetail}
        // handleDeleteDetail={this.handleDeleteDetail}
        // handleDelete={this.handleDelete}
        // handleAdd={this.handleAdd}
        // handleLoadExample={this.handleLoadExample}
      />
      <Preview basicInfo={basicInfo} summaryInfo={summaryInfo} experienceInfo={experienceInfo} educationInfo={educationInfo} />
    </Wrapper>
  );
};

export default Container;
