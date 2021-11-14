import React, { Component } from "react";
import styled from "styled-components";

// Components
import BasicInfoView from "./BasicInfoView";
import SummaryView from "./SummaryView";
import ExperienceView from "./ExperienceView";
import EducationView from "./EducationView";

// Styles
const Wrapper = styled.div`
  border-radius: 6px;
  border: 1px solid black;
  margin: 2em;
  padding: 2em;
  width: 900px;
`;

class Preview extends Component {
  render() {
    return (
      <Wrapper>
        <BasicInfoView info={this.props.basicInfo} />
        <SummaryView info={this.props.summaryInfo} />
        <ExperienceView info={this.props.experienceInfo} />
        <EducationView info={this.props.educationInfo} />
      </Wrapper>
    );
  }
}

export default Preview;
