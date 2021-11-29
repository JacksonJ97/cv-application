import styled from "styled-components";
import plusIcon from "../../../assets/plus-icon.svg";

// Styles
const Img = styled.img`
  max-width: 45px;
  padding: 0.25em;
  color: #ffffff;
  border: none;
  cursor: pointer;

  :hover {
    opacity: 0.7;
  }
`;

const AddButton = (props) => {
  const handleClick = (e) => {
    props.onClick(e.target.name);
  };

  return <Img src={plusIcon} alt="Plus Icon" onClick={handleClick} name={props.name} />;
};

export default AddButton;
