import React, { Component } from "react";
import styled from "styled-components";

// Components
import BasicInfoForm from "./BasicInfoForm";
import SummaryForm from "./SummaryForm";
import ExperienceForm from "./ExperienceForm";
import EducationForm from "./EducationForm";
import FormHeading from "../Utilities/FormHeading";
import AddButton from "../Utilities/AddButton";

// Styles
const Wrapper = styled.div`
  border-radius: 6px;
  border: 1px solid black;
  margin: 2em;
  padding: 2em;
  width: 900px;
`;

class Form extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleExperienceChange = this.handleExperienceChange(this);
    this.handleEducationChange = this.handleEducationChange.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleChange(value, name) {
    this.props.onChange(value, name);
  }

  handleExperienceChange(value, name, id) {
    this.props.onExperienceChange(value, name, id);
  }

  handleEducationChange(value, name, id) {
    this.props.onEducationChange(value, name, id);
  }

  handleDelete(id) {
    this.props.handleEducationDelete(id);
  }

  handleClick() {
    this.props.onClick();
  }

  render() {
    const education = this.props.educationInfo;
    const experience = this.props.experienceInfo;

    return (
      <Wrapper>
        <FormHeading title="Personal Information" />
        <BasicInfoForm info={this.props.basicInfo} onChange={this.handleChange} />

        <FormHeading title="Summary" />
        <SummaryForm info={this.props.summaryInfo} onChange={this.handleChange} />

        <FormHeading title="Work Experience" />
        {experience.map((element, index) => {
          return <ExperienceForm info={element} onExperienceChange={this.handleExperienceChange} key={index} />;
        })}

        <AddButton />

        <FormHeading title="Education" />
        {education.map((element, index) => {
          return (
            <EducationForm
              info={element}
              onEducationChange={this.handleEducationChange}
              handleEducationDelete={this.handleDelete}
              key={index}
            />
          );
        })}
        <AddButton onClick={this.handleClick} />
      </Wrapper>
    );
  }
}

export default Form;
