const Textarea = (props) => {
  const handleChange = (e) => {
    props.handleDetail(props.name, props.experienceId, props.detailId, e.target.value);
  };

  return <textarea value={props.value} onChange={handleChange} placeholder={props.placeholder} />;
};

export default Textarea;
