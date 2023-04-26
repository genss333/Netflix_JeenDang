import React from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "/src/assets/landing_page_image/Netflix_Logo_PMS.png";

const Navbar = () => {
  return (
    <Nav className="justify-content-start navbar">
      <Nav.Item>
        <Link to={"/"}>
          <img src={logo} alt="logo" className="logo" />
        </Link>
      </Nav.Item>
    </Nav>
  );
};

export default Navbar;
