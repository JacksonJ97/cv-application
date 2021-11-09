import React, { Component } from "react";

// Styles
import { Wrapper } from "./Container.style";

// Components
import Form from "../Form";
import Preview from "../Preview";

class Container extends Component {
  render() {
    const basicInfo = {
      name: "Jackson Jude",
      address: "40 Tuxedo Crt",
      phone: "647-609-7671",
      email: "jacksonjude97@gmail.com",
    };

    const summaryInfo = {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    };

    return (
      <Wrapper>
        <Form />
        <Preview basicInfo={basicInfo} summaryInfo={summaryInfo} />
      </Wrapper>
    );
  }
}

export default Container;
