import React, { Component } from "react";
import { Container, Col, Row } from "react-bootstrap";
import ItemCard from "./Card";
import "./Styles/Collection.css";

export default class Collection extends Component {
  render() {
    return (
      <Container fluid className="w-100 collection">
        <Row className="row-size">
          <Col className="col-size">
            <ItemCard 
                title = "Table"
                description="A nice table"
                image="https://assets.wsimgs.com/wsimgs/ab/images/dp/wcm/202051/0003/copenhagen-extendable-dining-table-o.jpg"
                buttonTxt="Check it out"
            />
          </Col>
          <Col className="col-size">
            <ItemCard 
                title = "Table"
                description="A nice table"
                image="https://assets.wsimgs.com/wsimgs/ab/images/dp/wcm/202051/0003/copenhagen-extendable-dining-table-o.jpg"
                buttonTxt="Check it out"
            />
          </Col>
          <Col className="col-size">
            <ItemCard 
                title = "Table"
                description="A nice table"
                image="https://assets.wsimgs.com/wsimgs/ab/images/dp/wcm/202051/0003/copenhagen-extendable-dining-table-o.jpg"
                buttonTxt="Check it out"
            />
          </Col>
        </Row>
        <Row className="row-size">
          <Col className="col-size">
            <ItemCard 
                title = "Table"
                description="A nice table"
                image="https://assets.wsimgs.com/wsimgs/ab/images/dp/wcm/202051/0003/copenhagen-extendable-dining-table-o.jpg"
                buttonTxt="Check it out"
            />
          </Col>
          <Col className="col-size">
            <ItemCard 
                title = "Table"
                description="A nice table"
                image="https://assets.wsimgs.com/wsimgs/ab/images/dp/wcm/202051/0003/copenhagen-extendable-dining-table-o.jpg"
                buttonTxt="Check it out"
            />
          </Col>
          <Col className="col-size">
            <ItemCard 
                title = "Table"
                description="A nice table"
                image="https://assets.wsimgs.com/wsimgs/ab/images/dp/wcm/202051/0003/copenhagen-extendable-dining-table-o.jpg"
                buttonTxt="Check it out"
            />
          </Col>
        </Row>
      </Container>
    );
  }
}
