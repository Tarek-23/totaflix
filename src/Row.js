import React, { useState, useEffect } from "react";
import axios from "./axios";

import "./Row.css";

function Row({ fetchUrl, title, setMovie }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  useEffect(() => {
    if (title === "Netflix Originals") {
      setMovie(movies[Math.floor(Math.random() * 19)]);
    }
  }, [title, setMovie, movies]);

  function onClick(e) {
    let movie = {};
    movie.title = e.target.alt;
    movie.backdrop_path = e.target.getAttribute("data-backdrop");
    movie.overview = e.target.getAttribute("data-overview");
    movie.release_date = e.target.getAttribute("data-release-date");
    movie.id = e.target.getAttribute("id");
    movie.type = e.target.getAttribute("data-type");
    setMovie(movie);
  }

  return (
    <div className="row">
      <h2 className="row__title">{title}</h2>
      <div className="row__posters">
        {movies.map((movie) => (
          <img
            key={movie.id}
            id={movie.id}
            className="row__poster"
            alt={movie.title || movie.name || movie.original_title}
            src={
              movie.poster_path !== undefined &&
              `https://image.tmdb.org/t/p/original/${movie.poster_path}`
            }
            data-backdrop={movie.backdrop_path}
            data-overview={movie.overview}
            data-release-date={movie.release_date}
            data-type={movie.first_air_date ? "tv" : "movie"}
            onClick={onClick}
          />
        ))}
      </div>
    </div>
  );
}

export default Row;
