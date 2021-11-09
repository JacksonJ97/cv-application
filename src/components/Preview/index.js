import React, { Component } from "react";

// Styles
import { Wrapper } from "./Preview.style";

// Components
import BasicInfoView from "./BasicInfoView";
import SummaryView from "./SummaryView";
import ExperienceView from "./ExperienceView";
import EducationView from "./EducationView";

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
