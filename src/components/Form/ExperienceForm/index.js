import React, { Component } from "react";

// Components
import FormHeading from "../../Utilities/FormHeading";
import Input from "../../Utilities/Input";

class ExperienceForm extends Component {
  render() {
    return (
      <div>
        <FormHeading title="Work Experience" />
        <Input placeholder="Company" />
        <Input placeholder="Start Date" />
        <Input placeholder="End Date" />
        <textarea />
      </div>
    );
  }
}

export default ExperienceForm;
