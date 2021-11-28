import styled from "styled-components";

// Styles
const Button = styled.button`
  width: 100%;
  padding: 0.75em 0.5em;
  margin: 0.5em 0;
  background-color: #ff4c29;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  :hover {
    background-color: #ff5f40;
  }
`;

const AddButton = (props) => {
  const handleClick = (e) => {
    props.onClick(e.target.name);
  };

  return (
    <Button onClick={handleClick} name={props.name}>
      Add
    </Button>
  );
};

export default AddButton;
