import React from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";
import logo from "./../../assets/icons/favicon.ico";
import "./TopMenu.scss"

const TopMenu = props => {
  return (
    <div className="elevation position-relative navbar">
      <Navbar expand="lg">
        <img src={logo} className="icon mr-2" alt="logo" />
        <Link to="/" className="navbar-brand white-text">
          { props.title }
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            {/* <Link to="/" className="nav-link">Home</Link> */}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default TopMenu;
