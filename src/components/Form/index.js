import styled from "styled-components";

// Components
import BasicInfoForm from "./BasicInfoForm";
import SummaryForm from "./SummaryForm";
import ExperienceForm from "./ExperienceForm";
import EducationForm from "./EducationForm";
import FormHeading from "../Utilities/FormHeading";
import AddButton from "../Utilities/AddButton";

// Styles
const Wrapper = styled.div`
  border-radius: 6px;
  border: 1px solid black;
  margin: 2em;
  padding: 2em;
  width: 900px;
  background-color: #ffffff;

  .load-example-btn {
    width: 100%;
    padding: 0.75em 0.5em;
    margin: 0.5em 0;
    background-color: #334756;
    color: #ffffff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }

  .load-example-btn:hover {
    background-color: #2c394b;
  }
`;

const Form = (props) => {
  const handleChange = (value, name, id, section) => {
    props.handleChange(value, name, id, section);
  };

  const handleDetail = (name, experienceId, detailId, value) => {
    props.handleDetail(name, experienceId, detailId, value);
  };

  const handleDelete = (id, name) => {
    props.handleDelete(id, name);
  };

  const handleAdd = (name) => {
    props.handleAdd(name);
  };

  const handleLoadExample = () => {
    props.handleLoadExample();
  };

  return (
    <Wrapper>
      <FormHeading title="Personal Information" />
      <BasicInfoForm basicInfo={props.basicInfo} handleChange={handleChange} />

      <FormHeading title="Summary" />
      <SummaryForm summaryInfo={props.summaryInfo} handleChange={handleChange} />

      <FormHeading title="Work Experience" />
      {props.experienceInfo.map((element) => {
        return (
          <ExperienceForm
            experienceInfo={element}
            handleChange={handleChange}
            handleDetail={handleDetail}
            handleDelete={handleDelete}
            key={element.id}
          />
        );
      })}
      <AddButton onClick={handleAdd} name="experienceAdd" />

      <FormHeading title="Education" />
      {props.educationInfo.map((element) => {
        return <EducationForm educationInfo={element} handleChange={handleChange} handleDelete={handleDelete} key={element.id} />;
      })}
      <AddButton onClick={handleAdd} name="educationAdd" />

      <button className="load-example-btn" onClick={handleLoadExample}>
        Load Example
      </button>
    </Wrapper>
  );
};

export default Form;
