import React, { Component } from "react";

class DetailDeleteButton extends Component {
  constructor(props) {
    super(props);
    this.handleDeleteDetail = this.handleDeleteDetail.bind(this);
  }

  handleDeleteDetail() {
    this.props.handleDeleteDetail(this.props.id, this.props.detailId);
  }

  render() {
    return <button onClick={this.handleDeleteDetail}>Delete</button>;
  }
}
export default DetailDeleteButton;
