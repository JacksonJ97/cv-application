import React, { Component } from "react";

// Styles
import { Wrapper } from "./Container.style";

// Components
import Form from "../Form";
import Preview from "../Preview";

class Container extends Component {
  render() {
    return (
      <Wrapper>
        <Form />
        <Preview />
      </Wrapper>
    );
  }
}

export default Container;
