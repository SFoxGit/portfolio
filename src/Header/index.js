import React from "react";
import {Navbar, Nav, NavDropdown} from 'react-bootstrap'

function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="#home">Shawn Fox</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#features">About Me</Nav.Link>
          <NavDropdown title="Work" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Front-End</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Back-End</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">APIs and Databases</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.4">React</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.5">Group Collaborations</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav>
          <Nav.Link href="#deets">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Header;