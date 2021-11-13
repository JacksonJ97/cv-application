import React, { Component } from "react";

// Styles
import { Wrapper } from "./Form.style";

// Components
import BasicInfoForm from "./BasicInfoForm";
import SummaryForm from "./SummaryForm";
import ExperienceForm from "./ExperienceForm";
import EducationForm from "./EducationForm";

class Form extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(value, name) {
    this.props.onChange(value, name);
  }

  render() {
    return (
      <Wrapper>
        <BasicInfoForm info={this.props.basicInfo} onChange={this.handleChange} />
        <SummaryForm info={this.props.summaryInfo} onChange={this.handleChange} />
        <ExperienceForm info={this.props.experienceInfo} onChange={this.handleChange} />
        <EducationForm info={this.props.educationInfo} onChange={this.handleChange} />
      </Wrapper>
    );
  }
}

export default Form;
