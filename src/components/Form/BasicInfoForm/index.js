import React, { Component } from "react";

// Components
import Input from "../../Utilities/Input";

class BasicInfoForm extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(value, name, id, section) {
    this.props.handleChange(value, name, id, section);
  }

  render() {
    const firstName = this.props.info.firstName;
    const lastName = this.props.info.lastName;
    const address = this.props.info.address;
    const phoneNumber = this.props.info.phoneNumber;
    const email = this.props.info.email;

    return (
      <div>
        <div>
          <Input value={firstName} placeholder="First Name" onChange={this.handleChange} name="firstName" />
          <Input value={lastName} placeholder="Last Name" onChange={this.handleChange} name="lastName" />
          <Input value={address} placeholder="Address" onChange={this.handleChange} name="address" />
          <Input value={phoneNumber} placeholder="Phone Number" onChange={this.handleChange} name="phoneNumber" />
          <Input value={email} placeholder="Email" onChange={this.handleChange} name="email" />
        </div>
      </div>
    );
  }
}

export default BasicInfoForm;
