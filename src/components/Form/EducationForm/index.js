import React, { Component } from "react";

// Components
import FormHeading from "../../Utilities/FormHeading";
import Input from "../../Utilities/Input";

class EducationForm extends Component {
  render() {
    return (
      <div>
        <FormHeading title="Education" />
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
