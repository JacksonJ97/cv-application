const Textarea = (props) => {
  const handleChange = (e) => {
    props.handleDetail(e.target.value, props.name, props.experienceId, props.detailId);
  };

  return <textarea value={props.value} onChange={handleChange} placeholder={props.placeholder} />;
};

export default Textarea;
