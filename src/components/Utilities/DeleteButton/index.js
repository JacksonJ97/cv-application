import styled from "styled-components";

// Styles
const Button = styled.button`
  width: 100%;
  padding: 0.75em 0.5em;
  margin: 0.5em 0;
  background-color: #082032;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  :hover {
    background-color: #2c394b;
  }
`;

const DeleteButton = (props) => {
  const handleClick = (e) => {
    props.onClick(props.id, e.target.name);
  };

  return (
    <Button onClick={handleClick} name={props.name} id={props.id}>
      Delete
    </Button>
  );
};

export default DeleteButton;
