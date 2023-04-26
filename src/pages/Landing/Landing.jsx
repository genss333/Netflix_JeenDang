import React from "react";
import { Container } from "react-bootstrap";
import BoxContent from "./components/BoxContent";
import Navbar from "./components/Navbar";
import TextContent from "./components/TextContent";
import "./css/style.css";

const LandingPage = () => {
  return (
    <div className="body">
      <Container fluid className="box-container">
        <Navbar />
        <TextContent />
      </Container>
      <BoxContent />
    </div>
  );
};

export default LandingPage;
