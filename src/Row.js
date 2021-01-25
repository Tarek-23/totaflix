import React, { useState, useEffect } from "react";
import axios from "./axios";

import "./Row.css";

function Row({ fetchUrl, title }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      console.log(request.data.results);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  return (
    <div className="row">
      <h2 className="row__title">{title}</h2>
      <div className="row__posters">
        {movies.map((movie) => (
          <img
            key={movie.id}
            className="row__poster"
            alt={movie.original_title}
            src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
          />
        ))}
      </div>
    </div>
  );
}

export default Row;
