import React from "react";
import Navbar from "react-bootstrap/NavBar";
import Nav from "react-bootstrap/Nav";

import "./AppHeader.css";
import pivot from "./Images/Pivot/pivot.png";

const AppHeader = ({ setCurrDisplay }) => {
  return (
    <Navbar>
      <Nav.Link onClick={() => setCurrDisplay("home")} className="logo">
        Pivot
        {/* <img src={pivot} alt="logo top" className="header-logo" /> */}
      </Nav.Link>
      <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
        <Nav className="navcontent">
          <Nav.Link onClick={() => setCurrDisplay("home")} className="NavLink">
            Home
          </Nav.Link>
          <Nav.Link onClick={() => setCurrDisplay("about")} className="NavLink">
            About
          </Nav.Link>
          <Nav.Link onClick={() => setCurrDisplay("code")} className="NavLink">
            Code Examples
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default AppHeader;