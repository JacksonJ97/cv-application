import React, { Component } from "react";

// Components
import FormHeading from "../../Utilities/FormHeading";
import Input from "../../Utilities/Input";

class BasicInfoForm extends Component {
  render() {
    return (
      <div>
        <FormHeading title="Personal Information" />
        <div>
          <Input placeholder="Name" />
          <Input placeholder="Address" />
          <Input placeholder="Phone Number" />
          <Input placeholder="Email" />
        </div>
      </div>
    );
  }
}

export default BasicInfoForm;
