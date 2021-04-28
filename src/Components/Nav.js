import React, { Component } from 'react'
import { Navbar, NavDropdown, Form, Button, Nav, FormControl } from 'react-bootstrap'
import './Styles/Nav.css'

export default class Navigation extends Component{
    render(){
        return(
            <Navbar variant="light" sticky="top" className= "bg">
                <Navbar.Brand href="#home">Idea</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#bedroom">Bedrooms</Nav.Link>
                    <Nav.Link href="#livingroom">Living Rooms</Nav.Link>
                    <NavDropdown title="Kitchen" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Appliances</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.2">Furniture</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.3">Collections</NavDropdown.Item>
                        <NavDropdown.Divider />
                    </NavDropdown>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-info">Search</Button>
                </Form>
            </Navbar>
        )
    }
}