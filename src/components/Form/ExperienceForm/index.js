import React, { Component } from "react";

// Components
import DeleteButton from "../../Utilities/DeleteButton";

class ExperienceForm extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(id, name) {
    this.props.handleDelete(id, name);
  }

  handleChange(e) {
    this.props.onExperienceChange(e.target.value, e.target.name, this.props.info.id);
  }

  render() {
    const company = this.props.info.company;
    const startDate = this.props.info.startDate;
    const endDate = this.props.info.endDate;

    return (
      <div>
        <input type="text" value={company} placeholder="Company" onChange={this.handleChange} name="company" />
        <input type="text" value={startDate} placeholder="Start Date" onChange={this.handleChange} name="startDate" />
        <input type="text" value={endDate} placeholder="End Date" onChange={this.handleChange} name="endDate" />
        <textarea />
        <DeleteButton onClick={this.handleDelete} name="experienceDelete" id={this.props.info.id} />
      </div>
    );
  }
}

export default ExperienceForm;
