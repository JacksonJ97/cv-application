import React, { Component } from "react";

// Components
import Heading from "../../Utilities/Heading";
import Input from "../../Utilities/Input";

class ExperienceForm extends Component {
  render() {
    return (
      <div>
        <Heading title="Work Experience Information" />
        <Input placeholder="Company" />
        <Input placeholder="Start Date" />
        <Input placeholder="End Date" />
        <textarea />
      </div>
    );
  }
}

export default ExperienceForm;
