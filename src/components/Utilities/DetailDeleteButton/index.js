import styled from "styled-components";

// Styles
const Button = styled.button`
  padding: 0.75em;
  background-color: #082032;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  :hover {
    background-color: #2c394b;
  }
`;

const DeleteDetailButton = (props) => {
  const handleDetail = (e) => {
    props.handleDetail(props.name, props.experienceId, props.detailId);
  };

  return <Button onClick={handleDetail}>Delete</Button>;
};
export default DeleteDetailButton;
