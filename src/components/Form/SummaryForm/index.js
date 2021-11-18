import React, { Component } from "react";
import styled from "styled-components";

// Styles
const Textarea = styled.textarea`
  width: 100%;
  height: 100px;
  padding: 0.5em;
  resize: none;
`;

class SummaryForm extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.handleChange(e.target.value, e.target.name);
  }

  render() {
    return <Textarea value={this.props.info} onChange={this.handleChange} name="summary" placeholder="Description" />;
  }
}

export default SummaryForm;
