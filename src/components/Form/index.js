import React, { Component } from "react";

// Styles
import { Wrapper } from "./Form.style";

// Components
import BasicInfoForm from "./BasicInfoForm";
import SummaryForm from "./SummaryForm";
import ExperienceForm from "./ExperienceForm";
import EducationForm from "./EducationForm";

class Form extends Component {
  render() {
    return (
      <Wrapper>
        <BasicInfoForm />
        <SummaryForm />
        <ExperienceForm />
        <EducationForm />
      </Wrapper>
    );
  }
}

export default Form;
