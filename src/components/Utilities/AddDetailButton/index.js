import styled from "styled-components";

// Styles
const Button = styled.button`
  margin: 0.5em 0;
  padding: 0.75em 0.5em;
  background-color: #ff7f66;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  :hover {
    background-color: #ff8870;
  }
`;

const AddDetailButton = (props) => {
  const handleDetail = () => {
    props.handleDetail(props.name, props.experienceId);
  };

  return <Button onClick={handleDetail}>Add Detail</Button>;
};

export default AddDetailButton;
