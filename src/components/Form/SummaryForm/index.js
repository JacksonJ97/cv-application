import styled from "styled-components";

// Styles
const Textarea = styled.textarea`
  width: 100%;
  height: 100px;
  padding: 0.5em;
  resize: none;
`;

const SummaryForm = (props) => {
  const handleChange = (e) => {
    props.handleChange(e.target.value, e.target.name);
  };

  return <Textarea value={props.info} onChange={handleChange} name="summary" placeholder="Description" />;
};

export default SummaryForm;
