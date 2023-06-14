import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Rating } from "react-simple-star-rating";

const MovieCard = ({ movie }) => {
  const { id, title, posterURL, rating } = movie;

  return (
    <div>
      <Card style={{ width: "18rem", margin: "10px 0" }}>
        <Card.Img variant="top" src={posterURL} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Rating readonly initialValue={rating} />
         
          <Link to={`/details/${id}`}>
            <Button variant="primary">Go somewhere</Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default MovieCard;