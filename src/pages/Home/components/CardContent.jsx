import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const CardContent = () => {
  const { movies } = useSelector((state) => state.movies);
  if (movies == null || movies.length === 0 || movies.Response === "False") {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <h1>Movie Not Found</h1>
      </div>
    );
  }
  return (
    <Row xxl={4} lg={3} md={2} sm={1} xs={1}>
      {movies.map((movie) => (
        <Col key={movie.imdbID} style={{padding:"1rem"}}>
          <Card style={{ width: "18rem"}}>
            <Card.Img
              variant="top"
              style={{ width: "18rem", height: "24rem" }}
              src={movie.Poster}
            />
            <Card.Body>
              <Card.Title
                style={{
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                {movie.Title}
              </Card.Title>
              <Card.Subtitle>
                {movie.Typel} {movie.Year}
              </Card.Subtitle>
              <br />
              <Link to={`/detail/${movie.imdbID}`}>
                <Button variant="primary">Read More</Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default CardContent;
