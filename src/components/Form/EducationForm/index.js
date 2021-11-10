import React, { Component } from "react";

// Components
import Heading from "../../Utilities/Heading";
import Input from "../../Utilities/Input";

class EducationForm extends Component {
  render() {
    return (
      <div>
        <Heading title="Education Information" />
        <Input placeholder="School" />
        <Input placeholder="Degree" />
        <Input placeholder="Location" />
        <Input placeholder="Start Date" />
        <Input placeholder="End Date" />
      </div>
    );
  }
}

export default EducationForm;
