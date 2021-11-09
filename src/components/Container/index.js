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

    return (
      <Wrapper>
        <Form />
        <Preview info={basicInfo} />
      </Wrapper>
    );
  }
}

export default Container;
