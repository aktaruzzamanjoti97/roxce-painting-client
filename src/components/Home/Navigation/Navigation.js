import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import logo from "../../../images/palette.png";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="transparent" variant="dark">
      <img width="60" src={logo} alt="" />
      <Navbar.Brand className="text-white ml-3" href="#home">
        <span style={{ fontSize: "30px", fontWeight: "700" }}>ROXCE</span>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ms-auto">
          <Link className="text-white mr-5" to="/about">
            About
          </Link>
          <Link className="text-white mr-5" to="/dashboard">
            Dashboard
          </Link>
          <Link className="text-white mr-5" to="/login">
            Login
          </Link>
          {/* <Nav.Link className="text-white mr-5" eventKey={2} href="#memes">
            Dank memes
          </Nav.Link> */}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
