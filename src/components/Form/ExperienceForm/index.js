import styled from "styled-components";

// Components
import Input from "../../Utilities/Input";
import Textarea from "../../Utilities/Textarea";
import DeleteButton from "../../Utilities/DeleteButton";
import DeleteDetailButton from "../../Utilities/DetailDeleteButton";
import AddDetailButton from "../../Utilities/AddDetailButton";

// Styles
const Wrapper = styled.div`
  textarea {
    width: 60%;
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
    column-gap: 24px;
  }
`;

const ExperienceForm = (props) => {
  const handleChange = (value, name, id, section) => {
    props.handleChange(value, name, id, section);
  };

  const handleDetail = (name, experienceId, detailId, value) => {
    props.handleDetail(name, experienceId, detailId, value);
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
                experienceId={props.experienceInfo.id}
                detailId={element.id}
                name="detailTextarea"
                placeholder="Detail"
              />
              <DeleteDetailButton
                handleDetail={handleDetail}
                experienceId={props.experienceInfo.id}
                detailId={element.id}
                name="deleteDetailButton"
              />
            </div>
          );
        })}

        <AddDetailButton handleDetail={handleDetail} experienceId={props.experienceInfo.id} name="addDetailButton" />
      </div>

      <DeleteButton onClick={handleDelete} name="experienceDelete" id={props.experienceInfo.id} />
    </Wrapper>
  );
};

export default ExperienceForm;
