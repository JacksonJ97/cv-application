import React, { Component } from "react";
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
`;

class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "Jackson",
      lastName: "Jude",
      address: "123 Random Street",
      phoneNumber: "123-456-7890",
      email: "example@gmail.com",
      summary:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      experience: [
        {
          id: uniqueId(),
          company: "Example Company",
          startDate: "April 2019",
          endDate: "March 2020",
          details: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
          ],
        },
      ],
      education: [
        {
          id: uniqueId(),
          school: "Ryerson University",
          degree: "Bachelor of Engineering (BEng) in Electrical Engineering",
          location: "Toronto, ON",
          startDate: "Sept 2015",
          endDate: "April 2020",
        },
      ],
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleExperienceChange = this.handleExperienceChange.bind(this);
    this.handleEducationChange = this.handleEducationChange.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleChange(value, name) {
    this.setState({ ...this.state, [name]: value });
  }

  handleExperienceChange(value, name, id) {}

  handleEducationChange(value, name, id) {
    let stateCopy = [...this.state.education];
    let index = stateCopy.findIndex((element) => element.id === id);
    stateCopy[index][name] = value;
    this.setState({ stateCopy });
  }

  handleDelete(id, name) {
    if (name === "experienceDelete") {
      let stateCopy = [...this.state.experience];
      let newState = stateCopy.filter((element) => element.id !== id);
      this.setState({ experience: newState });
    }

    if (name === "educationDelete") {
      let stateCopy = [...this.state.education];
      let newState = stateCopy.filter((element) => element.id !== id);
      this.setState({ education: newState });
    }
  }

  handleAdd(name) {
    if (name === "experienceAdd") {
      this.setState({
        experience: [...this.state.experience, { id: uniqueId(), company: "", startDate: "", endDate: "", details: [] }],
      });
    }

    if (name === "educationAdd") {
      this.setState({
        education: [...this.state.education, { id: uniqueId(), school: "", degree: "", location: "", startDate: "", endDate: "" }],
      });
    }
  }

  render() {
    const basicInfo = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      address: this.state.address,
      phoneNumber: this.state.phoneNumber,
      email: this.state.email,
    };

    const summaryInfo = this.state.summary;
    const experienceInfo = this.state.experience;
    const educationInfo = this.state.education;

    return (
      <Wrapper>
        <Form
          basicInfo={basicInfo}
          summaryInfo={summaryInfo}
          experienceInfo={experienceInfo}
          educationInfo={educationInfo}
          onChange={this.handleChange}
          onExperienceChange={this.handleExperienceChange}
          onEducationChange={this.handleEducationChange}
          handleDelete={this.handleDelete}
          handleAdd={this.handleAdd}
        />
        <Preview basicInfo={basicInfo} summaryInfo={summaryInfo} experienceInfo={experienceInfo} educationInfo={educationInfo} />
      </Wrapper>
    );
  }
}

export default Container;
