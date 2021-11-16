import React, { Component } from "react";

// Components
import Input from "../../Utilities/Input";
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

  handleChange(value, name, id, section) {
    this.props.handleChange(value, name, id, section);
  }

  render() {
    const company = this.props.info.company;
    const startDate = this.props.info.startDate;
    const endDate = this.props.info.endDate;

    return (
      <div>
        <Input
          value={company}
          placeholder="Company"
          onChange={this.handleChange}
          name="company"
          section="experience"
          id={this.props.info.id}
        />
        <Input
          value={startDate}
          placeholder="Start Date"
          onChange={this.handleChange}
          name="startDate"
          section="experience"
          id={this.props.info.id}
        />
        <Input
          value={endDate}
          placeholder="End Date"
          onChange={this.handleChange}
          name="endDate"
          section="experience"
          id={this.props.info.id}
        />
        <textarea />
        <DeleteButton onClick={this.handleDelete} name="experienceDelete" id={this.props.info.id} />
      </div>
    );
  }
}

export default ExperienceForm;
