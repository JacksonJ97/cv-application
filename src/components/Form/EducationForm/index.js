import React, { Component } from "react";

// Components
import DeleteButton from "../../Utilities/DeleteButton";

class EducationForm extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.handleEducationDelete(this.props.info.id);
  }

  handleChange(e) {
    this.props.onEducationChange(e.target.value, e.target.name, this.props.info.id);
  }

  render() {
    const school = this.props.info.school;
    const degree = this.props.info.degree;
    const location = this.props.info.location;
    const startDate = this.props.info.startDate;
    const endDate = this.props.info.endDate;

    return (
      <div>
        <input type="text" value={school} placeholder="School" onChange={this.handleChange} name="school" />
        <input type="text" value={degree} placeholder="Degree" onChange={this.handleChange} name="degree" />
        <input type="text" value={location} placeholder="Location" onChange={this.handleChange} name="location" />
        <input type="text" value={startDate} placeholder="Start Date" onChange={this.handleChange} name="startDate" />
        <input type="text" value={endDate} placeholder="End Date" onChange={this.handleChange} name="endDate" />
        <DeleteButton onClick={this.handleClick} />
      </div>
    );
  }
}

export default EducationForm;
