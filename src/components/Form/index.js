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
    this.handleDetail = this.handleDetail.bind(this);
    this.handleAddDetail = this.handleAddDetail.bind(this);
    this.handleDeleteDetail = this.handleDeleteDetail.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleLoadExample = this.handleLoadExample.bind(this);
  }

  handleChange(value, name, id, section) {
    this.props.handleChange(value, name, id, section);
  }

  handleDetail(value, experienceId, detailId) {
    this.props.handleDetail(value, experienceId, detailId);
  }

  handleAddDetail(id) {
    this.props.handleAddDetail(id);
  }

  handleDeleteDetail(experienceId, detailId) {
    this.props.handleDeleteDetail(experienceId, detailId);
  }

  handleDelete(id, name) {
    this.props.handleDelete(id, name);
  }

  handleAdd(name) {
    this.props.handleAdd(name);
  }

  handleLoadExample() {
    this.props.handleLoadExample();
  }

  render() {
    const education = this.props.educationInfo;
    const experience = this.props.experienceInfo;

    return (
      <Wrapper>
        <FormHeading title="Personal Information" />
        <BasicInfoForm info={this.props.basicInfo} handleChange={this.handleChange} />

        <FormHeading title="Summary" />
        <SummaryForm info={this.props.summaryInfo} handleChange={this.handleChange} />

        <FormHeading title="Work Experience" />
        {experience.map((element) => {
          return (
            <ExperienceForm
              info={element}
              handleChange={this.handleChange}
              handleDetail={this.handleDetail}
              handleAddDetail={this.handleAddDetail}
              handleDeleteDetail={this.handleDeleteDetail}
              handleDelete={this.handleDelete}
              key={element.id}
            />
          );
        })}
        <AddButton onClick={this.handleAdd} name="experienceAdd" />

        <FormHeading title="Education" />
        {education.map((element) => {
          return <EducationForm info={element} handleChange={this.handleChange} handleDelete={this.handleDelete} key={element.id} />;
        })}
        <AddButton onClick={this.handleAdd} name="educationAdd" />

        <button onClick={this.handleLoadExample}>Load Example</button>
      </Wrapper>
    );
  }
}

export default Form;
