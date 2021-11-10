import React, { Component } from "react";

// Components
import Heading from "../../Utilities/Heading";
import Input from "../../Utilities/Input";

class BasicInfoForm extends Component {
  render() {
    return (
      <div>
        <Heading title="Basic Information" />
        <Input placeholder="Name" />
        <Input placeholder="Address" />
        <Input placeholder="Phone Number" />
        <Input placeholder="Email" />
      </div>
    );
  }
}

export default BasicInfoForm;
