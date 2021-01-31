import React, { useState, useEffect } from "react";
import axios from "./axios";

import "./Row.css";

function Row({ fetchUrl, title, setMovie }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      console.log(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  useEffect(() => {
    if (title === "Netflix Originals")
      setMovie(movies[Math.floor(Math.random() * 19)]);
  }, [title, setMovie, movies]);

  function onClick(e) {
    let movie = {};
    movie.title = e.target.alt;
    movie.backdrop_path = e.target.getAttribute("data-backdrop");
    movie.overview = e.target.getAttribute("data-overview");
    setMovie(movie);
  }

  return (
    <div className="row">
      <h2 className="row__title">{title}</h2>
      <div className="row__posters">
        {movies.map((movie) => (
          <img
            key={movie.id}
            className="row__poster"
            alt={movie.title || movie.name || movie.original_title}
            src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
            data-backdrop={movie.backdrop_path}
            data-overview={movie.overview}
            onClick={onClick}
          />
        ))}
      </div>
    </div>
  );
}

export default Row;
