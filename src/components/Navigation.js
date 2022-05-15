
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'

import {Navbar, Nav, NavDropdown, Container, NavLink} from 'react-bootstrap'
function Navigation(props) {
  //set current page from app.js
  
    const tabs = ["About", "Project", "Contact", "Resume"]
    const tabItems = tabs.map((tab) =>
    <NavLink key={tab} value={tab} href={tab}>{tab}</NavLink>

    )
    return (
        <div>
        <Navbar bg="light" expand="lg">
  <Container style={{textAlign: "center" , display: 'flex', alignContent:"center", justifiyContent: "center"}}>
    <Navbar.Brand style={{textAlign: "center" , display: 'flex', alignContent:"center", justifiyContent: "center"}} href="#">Carlos Miguel Castillo</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
     
        {tabItems}
        {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
           {tabItems}
        <NavDropdown.Item href="#about">About</NavDropdown.Item>
          <NavDropdown.Item href="#project">Project</NavDropdown.Item>
          <NavDropdown.Item href="#contact">Contact</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#resume">Resume</NavDropdown.Item>
        </NavDropdown> */}
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
</div>

    )
}

export default Navigation

