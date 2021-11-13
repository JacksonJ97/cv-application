import React, { Component } from "react";

// Components
import FormHeading from "../../Utilities/FormHeading";

class BasicInfoForm extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onChange(e.target.value, e.target.name);
  }

  render() {
    const firstName = this.props.info.firstName;
    const lastName = this.props.info.lastName;
    const address = this.props.info.address;
    const phoneNumber = this.props.info.phoneNumber;
    const email = this.props.info.email;

    return (
      <div>
        <FormHeading title="Personal Information" />

        <div>
          <input type="text" value={firstName} placeholder="First Name" onChange={this.handleChange} name="firstName" />
          <input type="text" value={lastName} placeholder="Last Name" onChange={this.handleChange} name="lastName" />
          <input type="text" value={address} placeholder="Address" onChange={this.handleChange} name="address" />
          <input type="text" value={phoneNumber} placeholder="Phone Number" onChange={this.handleChange} name="phoneNumber" />
          <input type="text" value={email} placeholder="Email" onChange={this.handleChange} name="email" />
        </div>
      </div>
    );
  }
}

export default BasicInfoForm;
