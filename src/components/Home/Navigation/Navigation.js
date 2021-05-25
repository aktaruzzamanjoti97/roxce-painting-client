import React from "react";
import { Button, Nav, Navbar } from "react-bootstrap";
import logo from "../../../images/palette.png";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../../App";

const Navigation = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  return (
    <Navbar collapseOnSelect expand="lg" bg="transparent" variant="dark">
      <img width="60" src={logo} alt="" />
      <Navbar.Brand className="text-white ml-3" href="#home">
        <span style={{ fontSize: "30px", fontWeight: "700" }}>ROXCE</span>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ms-auto">
          <Link className="text-white mr-5" to="/admin">
            Admin
          </Link>
          <Link className="text-white mr-5" to="/dashboard">
            Dashboard
          </Link>

          {loggedInUser.email ? (
            <>
              {/* <Nav.Link>{loggedInUser.email}</Nav.Link> */}
              <Link className="text-white mr-5" to="/login">Logout ({loggedInUser.name})</Link>
            </>
          ) : (
            //  onClick={signOut}
            <Link className="text-white mr-5" to="/login">
              Login
            </Link>
          )}
          {/* <Link className="text-white mr-5" to="/login">
            Login
          </Link> */}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
