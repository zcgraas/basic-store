import React, { Component } from "react";
import { Jumbotron, Container } from "react-bootstrap";
import "./Styles/Jumbotron.css";

export default class Info extends Component {
  render() {
    return (
      <Jumbotron fluid className="jumbo-text">
        <Container>
          <h1>
              <ol>Comfy? Check!</ol>
              <ol>High Quality? You got it!</ol>
              <ol>Price? Perfect for any budget!</ol>
          </h1>
        </Container>
      </Jumbotron>
    );
  }
}
