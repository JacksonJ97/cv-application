import React, { Component } from "react";

class Textarea extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.handleDetail(e.target.value, this.props.id, this.props.detailId);
  }

  render() {
    return <textarea value={this.props.value} onChange={this.handleChange} placeholder={this.props.placeholder} />;
  }
}

export default Textarea;
