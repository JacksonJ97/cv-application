// Components
import Input from "../../Utilities/Input";
import DeleteButton from "../../Utilities/DeleteButton";

const EducationForm = (props) => {
  const handleDelete = (id, name) => {
    props.handleDelete(id, name);
  };

  const handleChange = (value, name, id, section) => {
    props.handleChange(value, name, id, section);
  };

  return (
    <div>
      <Input
        value={props.educationInfo.school}
        placeholder="School"
        onChange={handleChange}
        name="school"
        section="education"
        id={props.educationInfo.id}
      />
      <Input
        value={props.educationInfo.degree}
        placeholder="Degree"
        onChange={handleChange}
        name="degree"
        section="education"
        id={props.educationInfo.id}
      />
      <Input
        value={props.educationInfo.location}
        placeholder="Location"
        onChange={handleChange}
        name="location"
        section="education"
        id={props.educationInfo.id}
      />
      <Input
        value={props.educationInfo.startDate}
        placeholder="Start Date"
        onChange={handleChange}
        name="startDate"
        section="education"
        id={props.educationInfo.id}
      />
      <Input
        value={props.educationInfo.endDate}
        placeholder="End Date"
        onChange={handleChange}
        name="endDate"
        section="education"
        id={props.educationInfo.id}
      />
      <DeleteButton onClick={handleDelete} name="educationDelete" id={props.educationInfo.id} />
    </div>
  );
};

export default EducationForm;
