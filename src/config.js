import uniqueId from "lodash/uniqueId";

const exampleData = {
  basicInfo: {
    firstName: "John",
    lastName: "Smith",
    address: "123 Random Street",
    phoneNumber: "123-456-7890",
    email: "example@gmail.com",
  },
  summaryInfo:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  experienceInfo: [
    {
      id: uniqueId(),
      company: "Example Company",
      startDate: "April 2019",
      endDate: "March 2020",
      details: [
        { id: uniqueId(), text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit" },
        { id: uniqueId(), text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit" },
      ],
    },
    {
      id: uniqueId(),
      company: "Example Company",
      startDate: "April 2017",
      endDate: "March 2019",
      details: [
        { id: uniqueId(), text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit" },
        { id: uniqueId(), text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit" },
      ],
    },
  ],
  educationInfo: [
    {
      id: uniqueId(),
      school: "Havard University",
      degree: "Bachelor of Engineering (BEng) in Computer Engineering",
      location: "Cambridge, MA",
      startDate: "Sept 2020",
      endDate: "April 2021",
    },
    {
      id: uniqueId(),
      school: "Ryerson University",
      degree: "Bachelor of Engineering (BEng) in Electrical Engineering",
      location: "Toronto, ON",
      startDate: "Sept 2015",
      endDate: "April 2020",
    },
  ],
};

export default exampleData;
