import React, { useState } from "react";
import MovieList from "./components/MovieList";
import Filter from "./components/Filter ( title, rate)";
import MovieCard from "./components/MovieCard";

import { Routes, Route } from "react-router-dom";
import MovieDetails from "./components/MovieDetails";


const App = () => {
  const [movies, setMovies] = useState([
  
    {
      id: 1,
      title: "Final Fantasy XV",
      date: "2019-12-20",
      description:
        "Final Fantasy XV, annoncé originellement sous le titre Final Fantasy Versus XIII, est un jeu vidéo de la célèbre série Final Fantasy, développé et édité par Square Enix, sorti le 29 novembre 2016",
      posterURL:
        "https://raw.githubusercontent.com/drminnaar/react-movie-cards/master/src/images/Kingsglaive_Final_Fantasy_XV.jpg",
      rating: 9.2,
      trailerLink:"https://www.youtube.com/embed/Yi1_uZ3POXw"
         
    },
    {
      id: 2,
      title: "Final Fantasy Spirits Within",
      description:
        "C'est un film américano-japonais de Hironobu Sakaguchi (créateur de la série de jeux vidéo Final Fantasy) et Motonori Sakakibara, sorti le 15 août 2001. ",
      posterURL:
        "https://raw.githubusercontent.com/drminnaar/react-movie-cards/master/src/images/Final_Fantasy_Spirits_Within.jpg",
      rating: 9.3,
      trailerLink: "https://www.youtube.com/embed/wjTfS7SvlUE",
    },
  ]);

  const [handleTitleChange, sethandleTitleChange] = useState("");
  const [handleRatingChange, sethandleRatingChange] = useState("");
  const [titleFilter, setTitleFilter] = useState("");
  const [ratingFilter, setRatingFilter] = useState(0);

  const handleTitleFilterChange = (event) => {
    setTitleFilter(event.target.value);
  };

  const handleRatingFilterChange = (event) => {
    setRatingFilter(Number(event.target.value));
  };

  const addMovie = (movie) => {
    setMovies([...movies, movie]);
  };

  const filteredMovies = movies.filter((movie) => {
    return (
      movie.title.toLowerCase().includes(titleFilter.toLowerCase()) &&
      movie.rating >= ratingFilter
    );
  });
  return (
    <div className="app">

      <Routes>
        <Route path="/" element={<div> <Filter
        title={titleFilter}
        rating={ratingFilter}
        onTitleChange={handleTitleChange}
        onRatingChange={handleRatingChange}
      />
      <MovieList movies={filteredMovies} />
      </div>
      } />
      <Route path="/details/:idmovie" element={<MovieDetails movies={movies}/>} />
      </Routes>
     
    </div>
  );
};

export default App;
