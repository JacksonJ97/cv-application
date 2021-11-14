import React, { Component } from "react";

// Styles
import { Textarea } from "./SummaryForm.style";

class SummaryForm extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onChange(e.target.value, e.target.name);
  }

  render() {
    return <Textarea value={this.props.info} onChange={this.handleChange} name="summary" />;
  }
}

export default SummaryForm;
