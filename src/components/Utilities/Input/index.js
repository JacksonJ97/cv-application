import React, { Component } from "react";
import styled from "styled-components";

// Styles
const Wrapper = styled.input`
  display: block;
  width: 100%;
  margin: 1em auto;
  padding: 0.5em;
`;

class Input extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onChange(e.target.value, e.target.name, this.props.id, this.props.section);
  }

  render() {
    return (
      <Wrapper
        type="text"
        value={this.props.value}
        placeholder={this.props.placeholder}
        onChange={this.handleChange}
        name={this.props.name}
      />
    );
  }
}

export default Input;
