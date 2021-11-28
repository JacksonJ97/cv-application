// Components
import Input from "../../Utilities/Input";

const BasicInfoForm = (props) => {
  const handleChange = (value, name, id, section) => {
    props.handleChange(value, name, id, section);
  };

  return (
    <div>
      <div>
        <Input value={props.basicInfo.firstName} placeholder="First Name" onChange={handleChange} name="firstName" />
        <Input value={props.basicInfo.lastName} placeholder="Last Name" onChange={handleChange} name="lastName" />
        <Input value={props.basicInfo.address} placeholder="Address" onChange={handleChange} name="address" />
        <Input value={props.basicInfo.phoneNumber} placeholder="Phone Number" onChange={handleChange} name="phoneNumber" />
        <Input value={props.basicInfo.email} placeholder="Email" onChange={handleChange} name="email" />
      </div>
    </div>
  );
};

export default BasicInfoForm;
