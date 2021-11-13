import React, { Component } from "react";

// Components
import FormHeading from "../../Utilities/FormHeading";

class ExperienceForm extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onChange(e.target.value, e.target.name);
  }

  render() {
    return (
      <div>
        <FormHeading title="Work Experience" />
        <input type="text" placeholder="Company" />
        <input type="text" placeholder="Start Date" />
        <input type="text" placeholder="End Date" />
        <textarea />
      </div>
    );
  }
}

export default ExperienceForm;
