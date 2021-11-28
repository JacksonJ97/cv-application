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

const DetailDeleteButton = (props) => {
  const handleDeleteDetail = () => {
    props.handleDeleteDetail(props.id, props.detailId);
  };

  return <Button onClick={handleDeleteDetail}>Delete</Button>;
};
export default DetailDeleteButton;
