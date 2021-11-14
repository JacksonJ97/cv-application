import React, { Component } from "react";

// Styles
import { Wrapper } from "./Form.style";

// Components
import BasicInfoForm from "./BasicInfoForm";
import SummaryForm from "./SummaryForm";
import ExperienceForm from "./ExperienceForm";
import EducationForm from "./EducationForm";
import FormHeading from "../Utilities/FormHeading";
import AddButton from "../Utilities/AddButton";

class Form extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(value, name) {
    this.props.onChange(value, name);
  }

  handleClick() {
    this.props.onClick();
  }

  render() {
    const education = this.props.educationInfo;

    return (
      <Wrapper>
        <FormHeading title="Personal Information" />
        <BasicInfoForm info={this.props.basicInfo} onChange={this.handleChange} />

        <FormHeading title="Summary" />
        <SummaryForm info={this.props.summaryInfo} onChange={this.handleChange} />

        <FormHeading title="Work Experience" />
        <ExperienceForm info={this.props.experienceInfo} onChange={this.handleChange} />
        <AddButton />

        <FormHeading title="Education" />
        {education.map((item, index) => {
          return <EducationForm info={item} onChange={this.handleChange} key={index} />;
        })}
        <AddButton onClick={this.handleClick} />
      </Wrapper>
    );
  }
}

export default Form;
