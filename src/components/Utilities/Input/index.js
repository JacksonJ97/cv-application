import styled from "styled-components";

// Styles
const Wrapper = styled.input`
  display: block;
  width: 100%;
  margin: 1em auto;
  padding: 0.5em;
`;

const Input = (props) => {
  const handleChange = (e) => {
    props.onChange(e.target.value, e.target.name, props.id, props.section);
  };

  return <Wrapper type="text" value={props.value} placeholder={props.placeholder} onChange={handleChange} name={props.name} />;
};

export default Input;
