import React, { Component } from "react";

// Styles
import { Wrapper } from "./Container.style";

// Components
import Form from "../Form";
import Preview from "../Preview";

class Container extends Component {
  render() {
    const basicInfo = {
      name: "Jackson Jude",
      address: "123 Random Street",
      phone: "123-456-7890",
      email: "example@gmail.com",
    };

    const summaryInfo = {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
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
      school: "Ryerson University",
      degree: "Bachelor of Engineering (BEng) in Electrical Engineering",
      location: "Toronto, ON",
      startDate: "Sept 2015",
      endDate: "April 2020",
    };

    return (
      <Wrapper>
        <Form />
        <Preview basicInfo={basicInfo} summaryInfo={summaryInfo} experienceInfo={experienceInfo} educationInfo={educationInfo} />
      </Wrapper>
    );
  }
}

export default Container;
