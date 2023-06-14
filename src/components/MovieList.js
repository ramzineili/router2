import React from "react";
import MovieCard from './MovieCard'
function MovieList({ movies }) {
    return (
      <div>
        {movies.map((movie) => (
          <MovieCard key={movie.title} {...movie} />
        ))}
      </div>
    );
  }
  export default MovieList;