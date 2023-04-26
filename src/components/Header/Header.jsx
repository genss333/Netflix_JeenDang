import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import useSearchMovie from "../../useState/movie/useSearchMovie";
import logo from "/src/assets/landing_page_image/Netflix_Logo_PMS.png";

import "./css/style.css";

function Header() {
  const { searchMovie, handleChange, handleSubmit } = useSearchMovie();

  return (
    <Navbar expand="lg" className="nav-home">
      <Container fluid>
        <Navbar.Brand href="/">
          <img src={logo} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto nav-home-item">
            <Nav.Link href="/">
              <p>หน้าหลัก</p>
            </Nav.Link>
            <Nav.Link href="/">
              <p>รายการทีวี</p>
            </Nav.Link>
            <Nav.Link href="/">
              <p>ภาพยนต์</p>
            </Nav.Link>
            <Nav.Link href="/">
              <p>มาใหม่กำลังฮิต</p>
            </Nav.Link>
            <Nav.Link href="/">
              <p>รายการของฉัน</p>
            </Nav.Link>
            <Nav.Link href="/">
              <p>เลือกดูตามภาษา</p>
            </Nav.Link>
            <Nav.Link href="#link">Favorite</Nav.Link>
          </Nav>
          <Nav className="justify-align-content-end align-content-center">
            <li className="nav-item dropdown" style={{ paddingRight: "2rem" }}>
              <img
                src="https://avatars.githubusercontent.com/u/109135068?v=4"
                style={{ height: "2.5rem", borderRadius: "5px" }}
                alt=""
              />
            </li>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
