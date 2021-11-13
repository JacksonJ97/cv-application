import React, { Component } from "react";

// Styles
import { Wrapper } from "./Container.style";

// Components
import Form from "../Form";
import Preview from "../Preview";

class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "Jackson",
      lastName: "Jude",
      address: "123 Random Street",
      phoneNumber: "123-456-7890",
      email: "example@gmail.com",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      school: "Ryerson University",
      degree: "Bachelor of Engineering (BEng) in Electrical Engineering",
      location: "Toronto, ON",
      educationStartDate: "Sept 2015",
      educationEndDate: "April 2020",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(value, name) {
    this.setState({ ...this.state, [name]: value });
  }

  render() {
    const basicInfo = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      address: this.state.address,
      phone: this.state.phoneNumber,
      email: this.state.email,
    };

    const summaryInfo = {
      text: this.state.text,
    };

    const experienceInfo = {
      company: "JenJack Renovations",
      startDate: "April 2019",
      endDate: "March 2020",
      details: [
        "Removed old bathroom tiles and replaced it with new tiles",
        "Removed old flooring and applied hardwood flooring",
        "Taped around fixtures and painted the walls",
      ],
    };

    const educationInfo = {
      school: this.state.school,
      degree: this.state.degree,
      location: this.state.location,
      startDate: this.state.educationStartDate,
      endDate: this.state.educationEndDate,
    };

    return (
      <Wrapper>
        <Form
          basicInfo={basicInfo}
          summaryInfo={summaryInfo}
          experienceInfo={experienceInfo}
          educationInfo={educationInfo}
          onChange={this.handleChange}
        />
        <Preview basicInfo={basicInfo} summaryInfo={summaryInfo} experienceInfo={experienceInfo} educationInfo={educationInfo} />
      </Wrapper>
    );
  }
}

export default Container;
