import React from "react";
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'

function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" variant="dark" sticky="top">
      <Navbar.Brand className="brand" href="/">Shawn Fox</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="/about">About Me</Nav.Link>
          <NavDropdown title="Work" id="collasible-nav-dropdown">
            <NavDropdown.Item href="/work">All Projects</NavDropdown.Item>
            <NavDropdown.Item href="/frontend">Front-End</NavDropdown.Item>
            <NavDropdown.Item href="/backend">Back-End</NavDropdown.Item>
            <NavDropdown.Item href="/api">APIs and Databases</NavDropdown.Item>
            <NavDropdown.Item href="/react">React</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="/contact">Contact</Nav.Link>
          <Nav.Link href="/resume">Resume</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Header;