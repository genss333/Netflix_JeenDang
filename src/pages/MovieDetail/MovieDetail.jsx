import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import MoiveDescription from "./components/moiveDescription";
import MovieCardImage from "./components/movieCardImage";

import useMovieDetail from "../../useState/movie/useMovieDetail";
import "./css/style.css";

function MovieDetail() {
  useMovieDetail();
  return (
    <Container className="content-moive">
      <Row xxl={2} xl={2} md={1} xs={1}>
        <Col style={{textAlign:'center', padding:'1rem'}} >
          <MovieCardImage />
        </Col>
        <Col style={{textAlign:'start',padding:'1rem'}}>
          <MoiveDescription />
        </Col>
      </Row>
    </Container>
  );
}

export default MovieDetail;
