import React from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
const MovieDetails = ({ movies }) => {
  const { idmovie } = useParams();
  let movie=movies.find(el=>el.id==idmovie);

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div className="movie-details">
      <h2>{movie.title}</h2>
      <p>{movie.description}</p>
      {movie.trailerLink && (
        <iframe src={movie.trailerLink} title={`${movie.title} Trailer`} width="560" height="315" frameBorder="0" allowFullScreen></iframe>
      )}
      <Link to="/">Back to Home</Link>
    </div>
  );
};

export default MovieDetails;