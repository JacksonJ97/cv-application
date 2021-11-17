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
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      experience: [
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
    this.handleDetail = this.handleDetail.bind(this);
    this.handleAddDetail = this.handleAddDetail.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleChange(value, name, id, section) {
    this.setState({ ...this.state, [name]: value });

    if (section === "experience") {
      let experienceCopy = [...this.state.experience];
      let index = experienceCopy.findIndex((element) => element.id === id);
      experienceCopy[index][name] = value;
      this.setState({ experienceCopy });
    }

    if (section === "education") {
      let educationCopy = [...this.state.education];
      let index = educationCopy.findIndex((element) => element.id === id);
      educationCopy[index][name] = value;
      this.setState({ educationCopy });
    }
  }

  handleDetail(value, experienceId, detailId) {
    let experienceCopy = [...this.state.experience];
    let index = experienceCopy.findIndex((element) => element.id === experienceId);
    let detailIndex = experienceCopy[index].details.findIndex((element) => element.id === detailId);
    experienceCopy[index].details[detailIndex].text = value;
    this.setState({ experienceCopy });
  }

  handleAddDetail(id) {
    let experienceCopy = [...this.state.experience];
    let index = experienceCopy.findIndex((element) => element.id === id);
    experienceCopy[index].details = [...this.state.experience[index].details, { id: uniqueId(), text: "" }];
    this.setState({ experienceCopy });
  }

  handleDelete(id, name) {
    if (name === "experienceDelete") {
      let experienceCopy = [...this.state.experience];
      let newState = experienceCopy.filter((element) => element.id !== id);
      this.setState({ experience: newState });
    }

    if (name === "educationDelete") {
      let educationCopy = [...this.state.education];
      let newState = educationCopy.filter((element) => element.id !== id);
      this.setState({ education: newState });
    }
  }

  handleAdd(name) {
    if (name === "experienceAdd") {
      this.setState({
        experience: [
          ...this.state.experience,
          { id: uniqueId(), company: "", startDate: "", endDate: "", details: [{ id: uniqueId(), text: "" }] },
        ],
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
          handleChange={this.handleChange}
          handleDetail={this.handleDetail}
          handleAddDetail={this.handleAddDetail}
          handleDelete={this.handleDelete}
          handleAdd={this.handleAdd}
        />
        <Preview basicInfo={basicInfo} summaryInfo={summaryInfo} experienceInfo={experienceInfo} educationInfo={educationInfo} />
      </Wrapper>
    );
  }
}

export default Container;
