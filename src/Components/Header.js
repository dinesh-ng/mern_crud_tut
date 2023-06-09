import React, { Component } from "react";
import { Navbar, Nav, NavItem } from "react-bootstrap";
// To use routing functionalities
import { Link } from "react-router-dom";
import "../index.css";

const Header = () => {
  return (
    <div>
      <Navbar>
        {/* <Navbar.Header> */}
        <Navbar.Brand>MERN Stack CRUD Operations</Navbar.Brand>
        {/* </Navbar.Header> */}
        <Nav>
          <NavItem>
            <Link to="/">Home</Link>
          </NavItem>
          <NavItem>
            <Link to="/addemployee">Add New Employee</Link>
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  );
};
export default Header;
