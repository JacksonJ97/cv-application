import React, { Component } from "react";
import styled from "styled-components";

// Components
import Input from "../../Utilities/Input";
import Textarea from "../../Utilities/Textarea";
import DeleteButton from "../../Utilities/DeleteButton";

// Styles
const Wrapper = styled.div`
  textarea {
    width: 400px;
    height: 50px;
    margin: 0.5em 0;
    resize: none;
  }

  .detail-container {
    display: flex;
    flex-direction: column;
  }
`;

class ExperienceForm extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleDetail = this.handleDetail.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleChange(value, name, id, section) {
    this.props.handleChange(value, name, id, section);
  }

  handleDetail(value, experienceId, detailId) {
    this.props.handleDetail(value, experienceId, detailId);
  }

  handleDelete(id, name) {
    this.props.handleDelete(id, name);
  }

  render() {
    const company = this.props.info.company;
    const startDate = this.props.info.startDate;
    const endDate = this.props.info.endDate;
    const details = this.props.info.details;

    return (
      <Wrapper>
        <Input
          value={company}
          placeholder="Company"
          onChange={this.handleChange}
          name="company"
          section="experience"
          id={this.props.info.id}
        />
        <Input
          value={startDate}
          placeholder="Start Date"
          onChange={this.handleChange}
          name="startDate"
          section="experience"
          id={this.props.info.id}
        />
        <Input
          value={endDate}
          placeholder="End Date"
          onChange={this.handleChange}
          name="endDate"
          section="experience"
          id={this.props.info.id}
        />
        <div className="detail-container">
          {details.map((element) => {
            return (
              <Textarea
                value={element.text}
                handleDetail={this.handleDetail}
                id={this.props.info.id}
                detailId={element.id}
                key={element.id}
              />
            );
          })}
        </div>

        <DeleteButton onClick={this.handleDelete} name="experienceDelete" id={this.props.info.id} />
      </Wrapper>
    );
  }
}

export default ExperienceForm;
