import React, { Component } from "react";

// Components
import Input from "../../Utilities/Input";
import DeleteButton from "../../Utilities/DeleteButton";

class EducationForm extends Component {
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
    const school = this.props.info.school;
    const degree = this.props.info.degree;
    const location = this.props.info.location;
    const startDate = this.props.info.startDate;
    const endDate = this.props.info.endDate;

    return (
      <div>
        <Input value={school} placeholder="School" onChange={this.handleChange} name="school" section="education" id={this.props.info.id} />
        <Input value={degree} placeholder="Degree" onChange={this.handleChange} name="degree" section="education" id={this.props.info.id} />
        <Input
          value={location}
          placeholder="Location"
          onChange={this.handleChange}
          name="location"
          section="education"
          id={this.props.info.id}
        />
        <Input
          value={startDate}
          placeholder="Start Date"
          onChange={this.handleChange}
          name="startDate"
          section="education"
          id={this.props.info.id}
        />
        <Input
          value={endDate}
          placeholder="End Date"
          onChange={this.handleChange}
          name="endDate"
          section="education"
          id={this.props.info.id}
        />

        {/* <input type="text" value={school} placeholder="School" onChange={this.handleChange} name="school" />
        <input type="text" value={degree} placeholder="Degree" onChange={this.handleChange} name="degree" />
        <input type="text" value={location} placeholder="Location" onChange={this.handleChange} name="location" />
        <input type="text" value={startDate} placeholder="Start Date" onChange={this.handleChange} name="startDate" />
        <input type="text" value={endDate} placeholder="End Date" onChange={this.handleChange} name="endDate" /> */}
        <DeleteButton onClick={this.handleDelete} name="educationDelete" id={this.props.info.id} />
      </div>
    );
  }
}

export default EducationForm;
