import styled from "styled-components";

// Components
import Input from "../../Utilities/Input";
import Textarea from "../../Utilities/Textarea";
import DeleteButton from "../../Utilities/DeleteButton";
import DetailDeleteButton from "../../Utilities/DetailDeleteButton";

// Styles
const Wrapper = styled.div`
  textarea {
    width: 400px;
    height: 50px;
    margin: 0.5em 0;
    padding: 0.5em;
    resize: none;
  }

  .details-container {
    display: flex;
    flex-direction: column;
  }

  .detail {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .add-detail-btn {
    margin: 0.5em 0;
    padding: 0.75em 0.5em;
    background-color: #ff7f66;
    color: #ffffff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }

  .add-detail-btn:hover {
    background-color: #ff8870;
  }
`;

const ExperienceForm = (props) => {
  const handleChange = (value, name, id, section) => {
    props.handleChange(value, name, id, section);
  };

  const handleDetail = (value, experienceId, detailId) => {
    props.handleDetail(value, experienceId, detailId);
  };

  const handleAddDetail = () => {
    props.handleAddDetail(props.experienceInfo.id);
  };

  const handleDeleteDetail = (experienceId, detailId) => {
    props.handleDeleteDetail(experienceId, detailId);
  };

  const handleDelete = (id, name) => {
    props.handleDelete(id, name);
  };

  return (
    <Wrapper>
      <Input
        value={props.experienceInfo.company}
        placeholder="Company"
        onChange={handleChange}
        name="company"
        section="experience"
        id={props.experienceInfo.id}
      />
      <Input
        value={props.experienceInfo.startDate}
        placeholder="Start Date"
        onChange={handleChange}
        name="startDate"
        section="experience"
        id={props.experienceInfo.id}
      />
      <Input
        value={props.experienceInfo.endDate}
        placeholder="End Date"
        onChange={handleChange}
        name="endDate"
        section="experience"
        id={props.experienceInfo.id}
      />

      <div className="details-container">
        {props.experienceInfo.details.map((element) => {
          return (
            <div className="detail" key={element.id}>
              <Textarea
                value={element.text}
                handleDetail={handleDetail}
                id={props.experienceInfo.id}
                detailId={element.id}
                placeholder="Detail"
              />
              <DetailDeleteButton handleDeleteDetail={handleDeleteDetail} id={props.experienceInfo.id} detailId={element.id} />
            </div>
          );
        })}

        <button className="add-detail-btn" onClick={handleAddDetail}>
          Add Detail
        </button>
      </div>

      <DeleteButton onClick={handleDelete} name="experienceDelete" id={props.experienceInfo.id} />
    </Wrapper>
  );
};

export default ExperienceForm;
