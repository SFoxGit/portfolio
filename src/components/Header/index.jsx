import React from "react";
import {Navbar, Nav, NavDropdown} from 'react-bootstrap'

function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="#home">Shawn Fox</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/about">About Me</Nav.Link>
          <NavDropdown title="Work" id="collasible-nav-dropdown">
            <NavDropdown.Item href="/frontend">Front-End</NavDropdown.Item>
            <NavDropdown.Item href="/backend">Back-End</NavDropdown.Item>
            <NavDropdown.Item href="/api">APIs and Databases</NavDropdown.Item>
            <NavDropdown.Item href="/react">React</NavDropdown.Item>
            <NavDropdown.Item href="/group">Group Collaborations</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav>
          <Nav.Link href="/contact">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Header;