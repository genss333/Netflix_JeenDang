import React from "react";
import { Button, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "/src/assets/landing_page_image/Netflix_Logo_PMS.png";

const Navbar = () => {
  return (
    <Nav className="justify-content-between navbar">
      <Nav.Item>
        <img src={logo} alt="logo" className="logo" />
      </Nav.Item>
      <Nav.Item>
        <Link to="/login" style={{textDecoration:"none"}}>
          <Button className="btn-danger">เข้าสู่ระบบ</Button>
        </Link>
      </Nav.Item>
    </Nav>
  );
};

export default Navbar;
