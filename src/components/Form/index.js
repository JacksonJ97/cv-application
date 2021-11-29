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
  width: 70%;
  background-color: #ffffff;

  .header-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .btn {
    width: 100%;
    padding: 0.75em 0.5em;
    margin: 0.5em 0;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }

  .load-example-btn {
    background-color: #334756;
    color: #ffffff;
  }

  .load-example-btn:hover {
    background-color: #2c394b;
  }

  .reset-btn {
    color: #fff;
    background-color: #ff4c29;
  }

  .reset-btn:hover {
    background-color: #ff5f40;
  }

  @media (min-width: 1300px) {
    width: 45%;
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

  const handleReset = () => {
    props.handleReset();
  };

  return (
    <Wrapper>
      <FormHeading title="Personal Information" />
      <BasicInfoForm basicInfo={props.basicInfo} handleChange={handleChange} />

      <FormHeading title="Summary" />
      <SummaryForm summaryInfo={props.summaryInfo} handleChange={handleChange} />

      <div className="header-container">
        <FormHeading title="Work Experience" />
        <AddButton onClick={handleAdd} name="experienceAdd" />
      </div>
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

      <div className="header-container">
        <FormHeading title="Education" />
        <AddButton onClick={handleAdd} name="educationAdd" />
      </div>
      {props.educationInfo.map((element) => {
        return <EducationForm educationInfo={element} handleChange={handleChange} handleDelete={handleDelete} key={element.id} />;
      })}

      <button className="load-example-btn btn" onClick={handleLoadExample}>
        Load Example
      </button>
      <button className="reset-btn btn" onClick={handleReset}>
        Reset
      </button>
    </Wrapper>
  );
};

export default Form;
