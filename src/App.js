import React, { Component } from "react";

// Global Styles
import GlobalStyle from "./theme/GlobalStyle";

// Components
import Container from "./components/Container";

class App extends Component {
  render() {
    return (
      <div>
        <Container />
        <GlobalStyle />
      </div>
    );
  }
}

export default App;
