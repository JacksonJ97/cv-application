import React, { Component } from "react";

class SummaryForm extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onChange(e.target.value, e.target.name);
  }

  render() {
    return (
      <div>
        <textarea value={this.props.info} onChange={this.handleChange} name="summary" />
      </div>
    );
  }
}

export default SummaryForm;
