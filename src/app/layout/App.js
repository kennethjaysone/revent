import React, { Component } from "react";
import { Container } from "semantic-ui-react";
import NavBar from "../features/nav/navBar/NavBar";
import EventDashboard from "../features/event/eventdashboard/EventDashboard";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <Container className="main">
          <EventDashboard />
        </Container>
      </React.Fragment>
    );
  }
}

export default App;
