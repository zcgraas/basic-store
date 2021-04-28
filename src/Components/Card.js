import React, { Component } from "react";
import { Button, Card } from "react-bootstrap";
import './Styles/Collection.css'

export default class ItemCard extends Component {
  render() {
    return (
      <Card style={{ width: "18rem" }} className="card-size">
        <Card.Img variant="top" src={this.props.image} />
        <Card.Body>
          <Card.Title>{this.props.title}</Card.Title>
          <Card.Text>
            {this.props.description}
          </Card.Text>
          <Button variant="primary">{this.props.buttonTxt}</Button>
        </Card.Body>
      </Card>
    );
  }
}
